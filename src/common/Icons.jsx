import React from "react";

export const Slidericon = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1979_2906)">
        <rect
          x="3"
          y="2"
          width="56"
          height="56"
          rx="12"
          fill="#F6C8F6"
          shape-rendering="crispEdges"
        />
        <path
          d="M20 23H42M20 30H42M31 37H42"
          stroke="#4B014B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1979_2906"
          x="0"
          y="0"
          width="62"
          height="62"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1979_2906"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1979_2906"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#f6c8f6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5"
      />
    </svg>
  );
};
