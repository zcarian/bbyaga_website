"use client";

export default function PrivacyModal({
  setIsOpen,
}: {
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black/60 backdrop-blur-sm">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-fuchsia-300/50 text-red-800 rounded-xl shadow-2xl p-6 max-w-lg w-[90%] max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-2 right-4 text-xl font-bold text-red-800 hover:text-red-600"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          We value your privacy. Any information you submit to us, such as your
          email via our newsletter form, will only be used to send you updates
          and news from BBYAGA.
        </p>
        <p className="mb-4">
          We do not share your data with third parties. You can unsubscribe at
          any time via the link in our emails.
        </p>
        <p>
          For questions, contact us at: <strong>contact@bbyaga.com</strong>
        </p>
      </div>
    </div>
  );
}
