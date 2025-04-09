/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

// Create a DynamoDB client instance
const client = new DynamoDBClient({ region: process.env.REGION });

exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event));

  // Handle OPTIONS preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify("OK"),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const { email } = body;
  if (!email) {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Email is required" }),
    };
  }

  const params = {
    TableName: process.env.NEWSLETTER_TABLE_NAME,
    Item: {
      email: { S: email },
      subscribedAt: { S: new Date().toISOString() },
    },
  };

  try {
    await client.send(new PutItemCommand(params));
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Subscription successful" }),
    };
  } catch (error) {
    console.error("Error writing to DynamoDB:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: error.message || "Failed to subscribe" }),
    };
  }
};
