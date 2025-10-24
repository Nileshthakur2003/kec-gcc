import React from "react";

const DiscordIcon = ({ className = '', ...props }) => (
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
      <path d="M18.8 3.3c-2.3-1.1-4.8-1.8-7.3-2.1C11.3 1.1 11 1 11 1L10.7 2a13.2 13.2 0 0 0-3.3 0L7 1s-.2.1-.5.3c-2.5.3-5 1-7.3 2.1C-.1 4.7 0 6.4 0 6.4S.9 12 5.1 15.1c0 0 .3.3.6.5a10.4 10.4 0 0 0 6.3 2.1c0 0 .2 0 .3 0a10.4 10.4 0 0 0 6.3-2.1c.3-.2.6-.5.6-.5C23.1 12 24 6.4 24 6.4s.1-1.8-1.2-3.1zM8 12.3c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2zm8 0c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2z" fill="currentColor"/>
    </svg>
  );


  export default DiscordIcon;