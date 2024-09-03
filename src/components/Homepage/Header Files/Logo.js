import React from 'react';
import logoo from '../../../assets/images/logo.png'

function Logo() {
  return (
    <a href="/">
      <img
        loading="lazy"
        src={logoo}
        className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[1.75] w-[116px]"
        alt="Finwise School Logo"
      />
    </a>
  );
}

export default Logo;