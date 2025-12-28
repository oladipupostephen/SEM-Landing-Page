// components/LearnMoreModal.tsx
"use client";

import { useEffect } from "react";

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LearnMoreModal({
  isOpen,
  onClose,
}: LearnMoreModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}>
        {/* Header with decorative background */}
        <div className="relative bg-linear-to-r from-[#1a2744] to-[#2d3f5f] p-3 sm:p-4 rounded-t-2xl h-15">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-4 space-y-6">
          {/* First Paragraph */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The ideology behind Web of SEM (Science, Education and Management)
              was first presented at the{" "}
              <span className="font-semibold text-[#1a2744]">
                African Student and Business Summit
              </span>{" "}
              held at the University of Sunderland, United Kingdom, in October
              2025, by{" "}
              <span className="font-semibold text-[#1a2744]">
                Mr. Semilu Sodiq Adeshina
              </span>
              , the Chief Executive Officer and Managing Director of{" "}
              <span className="font-semibold text-[#1a2744]">
                Semilu Consult
              </span>
              , a research and human resource development institute.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The initiative emerged from critical discussions on innovative and
              sustainable smart initiatives capable of shaping the future of
              Africa.
            </p>
          </div>

          {/* Highlighted Section */}
          <div className="bg-linear-to-br from-red-50 to-orange-50 border-l-4 border-red-400 p-5 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              To ensure that Web of SEM does not remain merely a theoretical or
              conceptual proposition, deliberate steps have been taken to
              translate the identified gaps into a practical,
              standards-compliant scholarly infrastructure.
            </p>
          </div>

          {/* Final Paragraph */}
          <div className="bg-[#1a2744] text-white p-6 rounded-xl">
            <p className="leading-relaxed">
              The waitlist is therefore designed as an{" "}
              <span className="font-semibold text-red-300">
                initial engagement mechanism
              </span>{" "}
              and a stepping stone toward building a real-time intervention
              aimed at strengthening the global visibility, credibility and
              contribution of African research to the global knowledge economy.
            </p>
          </div>

          {/* Call to Action */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#waitlist-form"
              onClick={onClose}
              className="flex-1 bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Join the Waitlist
            </a>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
