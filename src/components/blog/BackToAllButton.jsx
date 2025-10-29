import React from "react";
import { Link } from "react-router-dom";
import GradientButton from "../ui//GradientButton";
import { ArrowLeft } from "lucide-react";

export default function BackToAllButton({ to = "/blog", className = "" }) {
  return (
    <div className={["mt-10","mb-5", className].join(" ")}>
      <GradientButton
       as={Link} 
       to={to}
       size="sm"
        iconLeft={ArrowLeft}
        className="w-full sm:w-auto"
        >
        Back to all blogs
      </GradientButton>
    </div>
  );
}
