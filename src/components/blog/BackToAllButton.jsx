import React from "react";
import { Link } from "react-router-dom";
import GradientButton from "../ui/GradientButton";
import { ArrowLeft } from "lucide-react";

export default function BackToAllButton({ to = "/blog", className = "" }) {
  return (
    <div className={["mt-10","mb-5", className].join(" ")}>
        <Link to={to} className="inline-block w-full sm:w-auto">
      <GradientButton
       as="span"
       size="sm"
        iconLeft={ArrowLeft}
        className="w-full sm:w-auto"
        >
        Back to all blogs
      </GradientButton>
       </Link>
    </div>
  );
}
