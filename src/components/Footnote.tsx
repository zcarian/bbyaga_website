"use client";

import PrivacyModal from "./PrivacyModal";
import { useState, useEffect } from "react";

const Footnote = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <PrivacyModal setIsOpen={setIsOpen} />}
      <footer className="text-left text-xs text-red-700 py-4 bg-fuchsia-300/50 backdrop-blur-sm w-full pl-5">
        © {new Date().getFullYear()} BBYAGA. All rights reserved. ·{" "}
        <button
          className="underline hover:text-red-900"
          onClick={() => setIsOpen(true)}
        >
          Privacy Policy
        </button>
      </footer>
    </>
  );
};

export default Footnote;
