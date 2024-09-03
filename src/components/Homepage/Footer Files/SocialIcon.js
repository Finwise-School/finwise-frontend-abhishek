import React from "react";

function SocialIcon({ src, alt }) {
  return (
    <div className="flex overflow-hidden gap-2.5 items-center self-stretch p-3.5 my-auto bg-neutral-900 h-[52px] rounded-[58px] w-[52px]">
      <img loading="lazy" src={src} alt={alt} className="object-contain w-6 aspect-square" />
    </div>
  );
}

export default SocialIcon;