"use client";

export default function PrimaryButton({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="font-IBMMedium text-body-xl text-white bg-[#002AFF] px-5 py-2 rounded-lg hover:bg-[#001FCC] hover:text-gray-100"
    >
      {text}
    </button>
  );
}
