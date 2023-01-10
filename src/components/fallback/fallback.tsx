import React from "react";

type Props = {};

export default function Fallback({}: Props) {
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='flex items-center justify-center'>
          <img alt='loader' src={`${require("../../images/logo.png")}`} />
        </div>
      </div>
    </div>
  );
}
