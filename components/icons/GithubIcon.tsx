
import React from "react";

const GithubIcon = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5.2 5.2 0 0 0 18 2H6a5.2 5.2 0 0 0-1 2.5A5.5 5.5 0 0 0 3.5 8c0 5 3 6.5 6 6.5a4.8 4.8 0 0 0-1 3.5v4" />
  </svg>
);

export default GithubIcon;