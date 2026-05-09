import React from "react";
export default function Button({ children, variant = "primary" }) {
  const base =
    "rounded-lg px-8 py-3 font-medium transition";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-800",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
