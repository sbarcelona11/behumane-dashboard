const Icons = ({ name, size, color = "#3A3B3C" }) => {
  return name === "home" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_606)">
        <path
          d="M10.0109 0.189258C9.71407 -0.0630859 9.28195 -0.0630859 8.98507 0.189258L0.27674 7.62676C-0.0564193 7.9123 -0.0960027 8.41367 0.184379 8.74902C0.464761 9.08438 0.96615 9.12422 1.29931 8.84199L2.11077 8.15137V14.3438C2.11077 15.8113 3.29167 17 4.74966 17H14.2497C15.7076 17 16.8885 15.8113 16.8885 14.3438V8.15137L17.6967 8.84199C18.0299 9.12754 18.5313 9.08438 18.8116 8.74902C19.092 8.41367 19.0524 7.90898 18.7193 7.62676L10.0109 0.189258ZM3.6941 14.3438V6.8L9.49966 1.84277L15.3052 6.8V14.3438C15.3052 14.9314 14.8335 15.4062 14.2497 15.4062H12.6663V10.3594C12.6663 9.62559 12.0759 9.03125 11.3469 9.03125H7.65244C6.92344 9.03125 6.33299 9.62559 6.33299 10.3594V15.4062H4.74966C4.1658 15.4062 3.6941 14.9314 3.6941 14.3438ZM7.91632 15.4062V10.625H11.083V15.4062H7.91632Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_606">
          <rect width="19" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : name === "pearson" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_589)">
        <path
          d="M4.2 2.77002C4.2 2.2976 4.38964 1.84453 4.72721 1.51049C5.06477 1.17644 5.52261 0.98877 6 0.98877C6.47739 0.98877 6.93523 1.17644 7.27279 1.51049C7.61036 1.84453 7.8 2.2976 7.8 2.77002C7.8 3.24244 7.61036 3.6955 7.27279 4.02955C6.93523 4.3636 6.47739 4.55127 6 4.55127C5.52261 4.55127 5.06477 4.3636 4.72721 4.02955C4.38964 3.6955 4.2 3.24244 4.2 2.77002ZM5.4 7.52373V12.27H6.6V7.52373C6.57375 7.52373 6.54375 7.52002 6.51375 7.52002H5.48625C5.45625 7.52002 5.43 7.52002 5.4 7.52373ZM5.4 14.0513V19.0981C5.4 19.5917 4.99875 19.9888 4.5 19.9888C4.00125 19.9888 3.6 19.5917 3.6 19.0981V9.28643L1.98375 12.1142C1.74 12.5409 1.18875 12.6931 0.757498 12.4519C0.326248 12.2106 0.172498 11.6651 0.416248 11.2384L2.61375 7.39756C3.19875 6.37334 4.2975 5.73877 5.48625 5.73877H6.5175C7.70625 5.73877 8.805 6.37334 9.39 7.39756L11.5837 11.2384C11.8275 11.6651 11.6775 12.2106 11.2425 12.4519C10.8075 12.6931 10.26 12.5446 10.0162 12.1142L8.4 9.28643V19.0981C8.4 19.5917 7.99875 19.9888 7.5 19.9888C7.00125 19.9888 6.6 19.5917 6.6 19.0981V14.0513H5.4Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_589">
          <rect
            width="12"
            height="19"
            fill="white"
            transform="translate(0 0.98877)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : name === "people" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.6 5.73877C5.0575 5.73877 5.49626 5.5511 5.81976 5.21705C6.14326 4.883 6.325 4.42994 6.325 3.95752C6.325 3.4851 6.14326 3.03203 5.81976 2.69799C5.49626 2.36394 5.0575 2.17627 4.6 2.17627C4.1425 2.17627 3.70374 2.36394 3.38024 2.69799C3.05674 3.03203 2.875 3.4851 2.875 3.95752C2.875 4.42994 3.05674 4.883 3.38024 5.21705C3.70374 5.5511 4.1425 5.73877 4.6 5.73877ZM4.025 6.92627C1.80047 6.92627 0 8.78545 0 11.0825C0 12.7413 0.941563 14.17 2.3 14.838V16.4263C2.3 17.0831 2.81391 17.6138 3.45 17.6138H5.75C6.38609 17.6138 6.9 17.0831 6.9 16.4263V15.2388C6.9 14.7452 6.51547 14.3481 6.0375 14.3481C5.55953 14.3481 5.175 14.7452 5.175 15.2388V15.8325H4.025V15.2388V13.4575V8.70752H5.175C5.62781 8.70752 6.04828 8.84111 6.40406 9.0749C6.68797 8.54795 7.05453 8.07666 7.48937 7.67959C6.83531 7.20459 6.0375 6.92627 5.175 6.92627H4.025ZM2.3 9.51279V12.656C1.94062 12.2366 1.725 11.6837 1.725 11.0825C1.725 10.4813 1.94062 9.92842 2.3 9.51279ZM17.825 8.70752H18.975V13.4575V15.2388V15.8325H17.825V15.2388C17.825 14.7452 17.4405 14.3481 16.9625 14.3481C16.4845 14.3481 16.1 14.7452 16.1 15.2388V16.4263C16.1 17.0831 16.6139 17.6138 17.25 17.6138H19.55C20.1861 17.6138 20.7 17.0831 20.7 16.4263V14.838C22.0584 14.17 23 12.7413 23 11.0825C23 8.78545 21.1995 6.92627 18.975 6.92627H17.825C16.9625 6.92627 16.1647 7.20459 15.5106 7.67959C15.9419 8.07666 16.312 8.54795 16.5959 9.0749C16.9517 8.84111 17.3722 8.70752 17.825 8.70752ZM21.275 11.0825C21.275 11.6837 21.0594 12.2366 20.7 12.6522V9.51279C21.0594 9.93213 21.275 10.4813 21.275 11.0825ZM20.125 3.95752C20.125 3.4851 19.9433 3.03203 19.6198 2.69799C19.2963 2.36394 18.8575 2.17627 18.4 2.17627C17.9425 2.17627 17.5037 2.36394 17.1802 2.69799C16.8567 3.03203 16.675 3.4851 16.675 3.95752C16.675 4.42994 16.8567 4.883 17.1802 5.21705C17.5037 5.5511 17.9425 5.73877 18.4 5.73877C18.8575 5.73877 19.2963 5.5511 19.6198 5.21705C19.9433 4.883 20.125 4.42994 20.125 3.95752ZM11.5 6.33252C11.7643 6.33252 12.026 6.27877 12.2702 6.17433C12.5143 6.0699 12.7362 5.91682 12.9231 5.72385C13.1099 5.53088 13.2582 5.30179 13.3593 5.04966C13.4604 4.79753 13.5125 4.5273 13.5125 4.25439C13.5125 3.98149 13.4604 3.71126 13.3593 3.45913C13.2582 3.207 13.1099 2.97791 12.9231 2.78494C12.7362 2.59197 12.5143 2.43889 12.2702 2.33446C12.026 2.23002 11.7643 2.17627 11.5 2.17627C11.2357 2.17627 10.974 2.23002 10.7298 2.33446C10.4857 2.43889 10.2638 2.59197 10.0769 2.78494C9.89007 2.97791 9.74183 3.207 9.64069 3.45913C9.53955 3.71126 9.4875 3.98149 9.4875 4.25439C9.4875 4.5273 9.53955 4.79753 9.64069 5.04966C9.74183 5.30179 9.89007 5.53088 10.0769 5.72385C10.2638 5.91682 10.4857 6.0699 10.7298 6.17433C10.974 6.27877 11.2357 6.33252 11.5 6.33252ZM10.925 7.52002C8.70047 7.52002 6.9 9.3792 6.9 11.6763C6.9 13.3351 7.84156 14.7638 9.2 15.4317V17.6138C9.2 18.2706 9.71391 18.8013 10.35 18.8013H12.65C13.2861 18.8013 13.8 18.2706 13.8 17.6138V15.4317C15.1584 14.7638 16.1 13.3351 16.1 11.6763C16.1 9.3792 14.2995 7.52002 12.075 7.52002H10.925ZM10.925 15.8325V14.0513V9.30127H12.075V14.0513V15.8325V17.02H10.925V15.8325ZM9.2 13.246C8.84062 12.8267 8.625 12.2774 8.625 11.6763C8.625 11.0751 8.84062 10.5222 9.2 10.1065V13.2497V13.246ZM13.8 13.246V10.1065C14.1594 10.5259 14.375 11.0751 14.375 11.6763C14.375 12.2774 14.1594 12.8304 13.8 13.246Z"
        fill={color}
      />
    </svg>
  ) : name === "head-side" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_597)">
        <path
          d="M1.6875 8.86377C1.6875 5.44658 4.45781 2.67627 7.875 2.67627H8.71875C10.8316 2.67627 12.7863 3.9665 13.6266 5.78057C13.7637 6.07588 13.8902 6.37822 14.0273 6.69111L14.0801 6.81416C14.2312 7.16924 14.393 7.54189 14.5687 7.90752C14.9238 8.63877 15.3598 9.38408 15.9961 10.0204L16.1508 10.1751C16.2527 10.2771 16.3125 10.4177 16.3125 10.5618C16.3125 10.8642 16.0664 11.1103 15.7641 11.1103H14.9062C14.4387 11.1103 14.0625 11.4864 14.0625 11.954V14.4853C14.0625 14.7946 13.8094 15.0478 13.5 15.0478H10.4062C9.93867 15.0478 9.5625 15.4239 9.5625 15.8915V18.1415C9.5625 18.6091 9.93867 18.9853 10.4062 18.9853C10.8738 18.9853 11.25 18.6091 11.25 18.1415V16.7388H13.5C14.741 16.7388 15.75 15.7298 15.75 14.4888V12.8013H15.7641C16.998 12.8013 18 11.7993 18 10.5653C18 9.97119 17.7645 9.40518 17.3461 8.9833L17.1914 8.82861C16.7449 8.38213 16.4039 7.82666 16.0875 7.17275C15.9293 6.8458 15.7816 6.5083 15.6305 6.15322L15.5777 6.03018C15.4441 5.71729 15.3035 5.39033 15.1559 5.07041C14.0414 2.66221 11.4891 0.98877 8.71875 0.98877H7.875C3.52617 0.98877 0 4.51494 0 8.86377C0 10.7481 0.664453 12.4813 1.76836 13.8384C2.08125 14.2251 2.25 14.6259 2.25 15.0021V18.145C2.25 18.6126 2.62617 18.9888 3.09375 18.9888C3.56133 18.9888 3.9375 18.6126 3.9375 18.145V15.0021C3.9375 14.1267 3.5543 13.3567 3.07617 12.7731C2.20781 11.7044 1.6875 10.3474 1.6875 8.86377ZM3.9375 7.64385C3.9375 8.21338 4.16602 8.76182 4.5668 9.16611L7.47422 12.0735C7.69219 12.2915 8.05078 12.2915 8.26875 12.0735L11.1762 9.16611C11.5805 8.76182 11.8055 8.21338 11.8055 7.64385C11.8055 6.45557 10.8422 5.48877 9.65039 5.48877C9.08086 5.48877 8.53242 5.71729 8.12813 6.11807L7.86797 6.37822L7.60781 6.11807C7.20352 5.71377 6.65508 5.48877 6.08555 5.48877C4.89727 5.48877 3.93047 6.45205 3.93047 7.64385H3.9375Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_597">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0 0.98877)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : name === "clipboard" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 22"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_601)">
        <path
          d="M13.3333 3.61377H11.6667H11.2667C10.9583 2.1167 9.6125 0.98877 8 0.98877C6.3875 0.98877 5.04167 2.1167 4.73333 3.61377H4.33333H2.66667C1.19583 3.61377 0 4.79092 0 6.23877V19.3638C0 20.8116 1.19583 21.9888 2.66667 21.9888H13.3333C14.8042 21.9888 16 20.8116 16 19.3638V6.23877C16 4.79092 14.8042 3.61377 13.3333 3.61377ZM3.33333 5.58252V6.56689C3.33333 7.1124 3.77917 7.55127 4.33333 7.55127H8H11.6667C12.2208 7.55127 12.6667 7.1124 12.6667 6.56689V5.58252H13.3333C13.7 5.58252 14 5.87783 14 6.23877V19.3638C14 19.7247 13.7 20.02 13.3333 20.02H2.66667C2.3 20.02 2 19.7247 2 19.3638V6.23877C2 5.87783 2.3 5.58252 2.66667 5.58252H3.33333ZM7 4.27002C7 4.00895 7.10536 3.75857 7.29289 3.57396C7.48043 3.38936 7.73478 3.28564 8 3.28564C8.26522 3.28564 8.51957 3.38936 8.70711 3.57396C8.89464 3.75857 9 4.00895 9 4.27002C9 4.53109 8.89464 4.78147 8.70711 4.96608C8.51957 5.15068 8.26522 5.25439 8 5.25439C7.73478 5.25439 7.48043 5.15068 7.29289 4.96608C7.10536 4.78147 7 4.53109 7 4.27002ZM7.1375 10.6397C7.39583 10.3854 7.39583 9.96709 7.1375 9.71279C6.87917 9.4585 6.45417 9.4585 6.19583 9.71279L4.66667 11.2181L4.1375 10.6972C3.87917 10.4429 3.45417 10.4429 3.19583 10.6972C2.9375 10.9515 2.9375 11.3698 3.19583 11.6241L4.19583 12.6085C4.45417 12.8628 4.87917 12.8628 5.1375 12.6085L7.1375 10.6397ZM8 12.145C8 12.506 8.3 12.8013 8.66667 12.8013H11.3333C11.7 12.8013 12 12.506 12 12.145C12 11.7841 11.7 11.4888 11.3333 11.4888H8.66667C8.3 11.4888 8 11.7841 8 12.145ZM6.66667 16.0825C6.66667 16.4435 6.96667 16.7388 7.33333 16.7388H11.3333C11.7 16.7388 12 16.4435 12 16.0825C12 15.7216 11.7 15.4263 11.3333 15.4263H7.33333C6.96667 15.4263 6.66667 15.7216 6.66667 16.0825ZM4.66667 17.0669C4.93188 17.0669 5.18624 16.9632 5.37377 16.7786C5.56131 16.594 5.66667 16.3436 5.66667 16.0825C5.66667 15.8214 5.56131 15.5711 5.37377 15.3865C5.18624 15.2019 4.93188 15.0981 4.66667 15.0981C4.40145 15.0981 4.1471 15.2019 3.95956 15.3865C3.77202 15.5711 3.66667 15.8214 3.66667 16.0825C3.66667 16.3436 3.77202 16.594 3.95956 16.7786C4.1471 16.9632 4.40145 17.0669 4.66667 17.0669Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_601">
          <rect
            width="16"
            height="21"
            fill="white"
            transform="translate(0 0.98877)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : name === "clock" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 37"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2857 1.73438C10.2857 0.773242 11.05 0 12 0H20C20.95 0 21.7143 0.773242 21.7143 1.73438C21.7143 2.69551 20.95 3.46875 20 3.46875H17.7143V7.03867C20.8143 7.4 23.6286 8.72246 25.8429 10.717L27.9286 8.59961C28.6 7.92031 29.6857 7.92031 30.35 8.59961C31.0143 9.27891 31.0214 10.3773 30.35 11.0494L28.1357 13.2896C29.85 15.7395 30.8571 18.7313 30.8571 21.9615C30.8571 30.2648 24.2071 36.9928 16 36.9928C7.79285 36.9928 1.14285 30.2721 1.14285 21.9688C1.14285 14.2508 6.88571 7.89863 14.2857 7.03867V3.46875H12C11.05 3.46875 10.2857 2.69551 10.2857 1.73438ZM16 33.5313C19.031 33.5313 21.9379 32.3131 24.0812 30.1447C26.2245 27.9763 27.4286 25.0353 27.4286 21.9688C27.4286 18.9022 26.2245 15.9612 24.0812 13.7928C21.9379 11.6244 19.031 10.4063 16 10.4063C12.969 10.4063 10.062 11.6244 7.91878 13.7928C5.7755 15.9612 4.57142 18.9022 4.57142 21.9688C4.57142 25.0353 5.7755 27.9763 7.91878 30.1447C10.062 32.3131 12.969 33.5313 16 33.5313ZM17.7143 15.6094V23.125C17.7143 24.0861 16.95 24.8594 16 24.8594C15.05 24.8594 14.2857 24.0861 14.2857 23.125V15.6094C14.2857 14.6482 15.05 13.875 16 13.875C16.95 13.875 17.7143 14.6482 17.7143 15.6094Z"
        fill={color}
      />
    </svg>
  ) : name === "start-time" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 37"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_576)">
        <path
          d="M0 35.2656C0 36.2268 0.780208 37 1.75 37H26.25C27.2198 37 28 36.2268 28 35.2656C28 34.3045 27.2198 33.5312 26.25 33.5312H25.6667V32.1582C25.6667 29.2459 24.5 26.4492 22.4219 24.3896L16.4719 18.5L22.4146 12.6104C24.5 10.5508 25.6667 7.7541 25.6667 4.8418V3.46875H26.25C27.2198 3.46875 28 2.69551 28 1.73438C28 0.773242 27.2198 0 26.25 0H1.75C0.780208 0 0 0.773242 0 1.73438C0 2.69551 0.780208 3.46875 1.75 3.46875H2.33333V4.8418C2.33333 7.7541 3.5 10.5508 5.57812 12.6104L11.5281 18.5L5.57812 24.3896C3.5 26.4492 2.33333 29.2459 2.33333 32.1582V33.5312H1.75C0.780208 33.5312 0 34.3045 0 35.2656ZM19.9427 26.8467C21.3646 28.2559 22.1667 30.1637 22.1667 32.1582V33.5312H5.83333V32.1582C5.83333 30.1637 6.63542 28.2559 8.05729 26.8467L14 20.9498L19.9427 26.8395V26.8467Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_576">
          <rect width="28" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : name === "end-time" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_570)">
        <path
          d="M0 1.73438C0 0.773242 0.780208 0 1.75 0H26.25C27.2198 0 28 0.773242 28 1.73438C28 2.69551 27.2198 3.46875 26.25 3.46875H25.6667V4.8418C25.6667 7.7541 24.5 10.5508 22.4219 12.6104L16.4719 18.5L22.4146 24.3896C24.5 26.4492 25.6667 29.2459 25.6667 32.1582V33.5312H26.25C27.2198 33.5312 28 34.3045 28 35.2656C28 36.2268 27.2198 37 26.25 37H1.75C0.780208 37 0 36.2268 0 35.2656C0 34.3045 0.780208 33.5312 1.75 33.5312H2.33333V32.1582C2.33333 29.2459 3.5 26.4492 5.57812 24.3896L11.5281 18.5L5.57812 12.6104C3.5 10.5508 2.33333 7.7541 2.33333 4.8418V3.46875H1.75C0.780208 3.46875 0 2.69551 0 1.73438ZM19.9427 10.1533C21.3646 8.74414 22.1667 6.83633 22.1667 4.8418V3.46875H5.83333V4.8418C5.83333 6.83633 6.63542 8.74414 8.05729 10.1533L14 16.0502L19.9427 10.1605V10.1533Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_570">
          <rect width="28" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : name === "progress" ? (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 34 37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_210_564)">
        <path
          d="M31.3438 4.625C31.3438 4.16502 31.1758 3.72387 30.877 3.39861C30.5781 3.07335 30.1727 2.89062 29.75 2.89062C29.3273 2.89062 28.9219 3.07335 28.623 3.39861C28.3242 3.72387 28.1562 4.16502 28.1562 4.625C28.1562 5.08498 28.3242 5.52613 28.623 5.85139C28.9219 6.17665 29.3273 6.35938 29.75 6.35938C30.1727 6.35938 30.5781 6.17665 30.877 5.85139C31.1758 5.52613 31.3438 5.08498 31.3438 4.625ZM25.5 4.625C25.5 3.39837 25.9478 2.22199 26.7448 1.35463C27.5418 0.487275 28.6228 0 29.75 0C30.8772 0 31.9582 0.487275 32.7552 1.35463C33.5522 2.22199 34 3.39837 34 4.625C34 5.85163 33.5522 7.02801 32.7552 7.89537C31.9582 8.76272 30.8772 9.25 29.75 9.25C28.6228 9.25 27.5418 8.76272 26.7448 7.89537C25.9478 7.02801 25.5 5.85163 25.5 4.625ZM0 11.5625C0 6.77129 3.56602 2.89062 7.96875 2.89062H17V1.29355C17 0.578125 17.5312 0 18.1887 0C18.4543 0 18.7066 0.0939453 18.9191 0.274609L22.9566 3.69277C23.2223 3.9168 23.375 4.26367 23.375 4.625C23.375 4.98633 23.2223 5.3332 22.9566 5.55723L18.9191 8.97539C18.7133 9.14883 18.4543 9.25 18.1887 9.25C17.5312 9.25 17 8.67188 17 7.95645V6.35938H7.96875C5.32578 6.35938 3.1875 8.68633 3.1875 11.5625C3.1875 14.4387 5.32578 16.7656 7.96875 16.7656H26.0312C30.434 16.7656 34 20.6463 34 25.4375C34 29.7373 31.1246 33.3 27.3594 33.9865C26.7551 35.7426 25.2012 37 23.375 37C21.0309 37 19.125 34.926 19.125 32.375C19.125 29.824 21.0309 27.75 23.375 27.75C25.0949 27.75 26.5824 28.8629 27.2465 30.4672C29.2984 29.8818 30.8125 27.8512 30.8125 25.4375C30.8125 22.5613 28.6742 20.2344 26.0312 20.2344H7.96875C3.56602 20.2344 0 16.3537 0 11.5625ZM8.18789 30.6406H10.625V29.0436C10.625 28.3281 11.1562 27.75 11.8137 27.75C12.0793 27.75 12.3316 27.8439 12.5441 28.0246L16.5816 31.4428C16.8473 31.6668 17 32.0137 17 32.375C17 32.7363 16.8473 33.0832 16.5816 33.3072L12.5441 36.7254C12.3383 36.8988 12.0793 37 11.8137 37C11.1562 37 10.625 36.4219 10.625 35.7064V34.1094H8.18789C7.55703 35.8076 6.02969 37 4.25 37C1.90586 37 0 34.926 0 32.375C0 29.824 1.90586 27.75 4.25 27.75C6.03633 27.75 7.56367 28.9424 8.18789 30.6406ZM5.84375 32.375C5.84375 31.915 5.67584 31.4739 5.37695 31.1486C5.07807 30.8234 4.67269 30.6406 4.25 30.6406C3.82731 30.6406 3.42193 30.8234 3.12305 31.1486C2.82416 31.4739 2.65625 31.915 2.65625 32.375C2.65625 32.835 2.82416 33.2761 3.12305 33.6014C3.42193 33.9266 3.82731 34.1094 4.25 34.1094C4.67269 34.1094 5.07807 33.9266 5.37695 33.6014C5.67584 33.2761 5.84375 32.835 5.84375 32.375ZM23.375 34.1094C23.7977 34.1094 24.2031 33.9266 24.502 33.6014C24.8008 33.2761 24.9688 32.835 24.9688 32.375C24.9688 31.915 24.8008 31.4739 24.502 31.1486C24.2031 30.8234 23.7977 30.6406 23.375 30.6406C22.9523 30.6406 22.5469 30.8234 22.248 31.1486C21.9492 31.4739 21.7812 31.915 21.7812 32.375C21.7812 32.835 21.9492 33.2761 22.248 33.6014C22.5469 33.9266 22.9523 34.1094 23.375 34.1094Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_210_564">
          <rect width="34" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : name === "search" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.5" cy="5.5" r="4.5" stroke="#3354EC" strokeWidth="2" />
      <line
        x1="8.70711"
        y1="8.29289"
        x2="12.7071"
        y2="12.2929"
        stroke="#3354EC"
        strokeWidth="2"
      />
    </svg>
  ) : name === "datetime" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="2.04553"
        width="16.7727"
        height="14.4545"
        rx="2.5"
        stroke="#3354EC"
      />
      <path
        d="M0 5C0 3.34315 1.34315 2 3 2H14C15.6569 2 17 3.34315 17 5H0Z"
        fill="#3354EC"
      />
      <line
        x1="13.25"
        y1="3.27835e-08"
        x2="13.25"
        y2="1.54545"
        stroke="#3354EC"
        strokeWidth="1.5"
      />
      <line
        x1="4.75"
        y1="3.27835e-08"
        x2="4.75"
        y2="1.54545"
        stroke="#3354EC"
        strokeWidth="1.5"
      />
      <rect x="11" y="10" width="4" height="4" fill="#3354EC" />
    </svg>
  ) : name === "arrow" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_583)">
        <path
          d="M13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5ZM0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5ZM8.63086 3.95801C8.50781 3.82617 8.33496 3.75 8.15332 3.75C7.79297 3.75 7.5 4.04297 7.5 4.40332V6.09375H4.6875C4.16895 6.09375 3.75 6.5127 3.75 7.03125V7.96875C3.75 8.4873 4.16895 8.90625 4.6875 8.90625H7.5V10.5967C7.5 10.957 7.79297 11.25 8.15332 11.25C8.33496 11.25 8.50781 11.1738 8.63086 11.042L11.5576 7.9043C11.6602 7.79297 11.7188 7.64941 11.7188 7.5C11.7188 7.35059 11.6602 7.2041 11.5576 7.0957L8.63086 3.95801Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_583">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : name === "home-updated" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M2 18.5C1.45 18.5 0.979002 18.304 0.587002 17.912C0.195002 17.52 -0.000664969 17.0493 1.69779e-06 16.5V2.5C1.69779e-06 1.95 0.196002 1.479 0.588002 1.087C0.980002 0.695002 1.45067 0.499335 2 0.500002H16C16.55 0.500002 17.021 0.696002 17.413 1.088C17.805 1.48 18.0007 1.95067 18 2.5V16.5C18 17.05 17.804 17.521 17.412 17.913C17.02 18.305 16.5493 18.5007 16 18.5H2ZM2 16.5H8V2.5H2V16.5ZM10 16.5H16V9.5H10V16.5ZM10 7.5H16V2.5H10V7.5Z"
        fill="black"
      />
    </svg>
  ) : name === "exit" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M2 18.209C1.45 18.209 0.979002 18.013 0.587002 17.621C0.195002 17.229 -0.000664969 16.7583 1.69779e-06 16.209V2.20899C1.69779e-06 1.65899 0.196002 1.18799 0.588002 0.795986C0.980002 0.403986 1.45067 0.208319 2 0.208986H9V2.20899H2V16.209H9V18.209H2ZM13 14.209L11.625 12.759L14.175 10.209H6V8.20899H14.175L11.625 5.65899L13 4.20899L18 9.20899L13 14.209Z"
        fill="#1D1D1D"
      />
    </svg>
  ) : name === "arrow-up" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.2575 12.068C2.0095 12.3446 1.67314 12.5 1.32241 12.5C0.971687 12.5 0.635326 12.3446 0.387326 12.068C0.139325 11.7914 0 11.4163 0 11.0252C0 10.634 0.139325 10.2589 0.387326 9.98231L4.79248 5.07091L4.80173 5.06059C5.16165 4.66744 5.64538 4.44725 6.14918 4.44725C6.65298 4.44725 7.13671 4.66744 7.49663 5.06059L7.50588 5.07091L9.75406 7.5782L12.856 3.9197L11.4815 2.38673C11.343 2.23213 11.2488 2.03523 11.2106 1.82091C11.1724 1.60659 11.192 1.38446 11.267 1.18258C11.3419 0.980694 11.4689 0.808109 11.6317 0.686621C11.7946 0.565133 11.986 0.500192 12.182 0.5H17.0087C17.2716 0.5 17.5238 0.616473 17.7097 0.823796C17.8956 1.03112 18 1.31231 18 1.60551V6.98859C17.9998 7.2071 17.9416 7.42065 17.8327 7.60227C17.7237 7.78389 17.569 7.92544 17.388 8.00903C17.2069 8.09262 17.0078 8.11451 16.8156 8.07194C16.6234 8.02936 16.4469 7.92423 16.3083 7.76982L14.7262 6.00395L11.1524 10.2211C10.9758 10.4244 10.7649 10.5867 10.5319 10.6988C10.2989 10.8109 10.0483 10.8705 9.79452 10.8742C9.54076 10.8779 9.28885 10.8256 9.05327 10.7203C8.81769 10.6151 8.60309 10.459 8.4218 10.2609L8.41255 10.2506L6.14852 7.72707L2.2575 12.068Z"
        fill="black"
      />
    </svg>
  ) : name === "person-updated" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M4.94691 2.1875C4.94691 1.73995 5.16317 1.31072 5.54811 0.994257C5.93306 0.67779 6.45515 0.5 6.99955 0.5C7.54394 0.5 8.06604 0.67779 8.45098 0.994257C8.83593 1.31072 9.05219 1.73995 9.05219 2.1875C9.05219 2.63505 8.83593 3.06428 8.45098 3.38074C8.06604 3.69721 7.54394 3.875 6.99955 3.875C6.45515 3.875 5.93306 3.69721 5.54811 3.38074C5.16317 3.06428 4.94691 2.63505 4.94691 2.1875ZM6.31533 6.69102V11.1875H7.68376V6.69102C7.65383 6.69102 7.61962 6.6875 7.5854 6.6875H6.41369C6.37948 6.6875 6.34954 6.6875 6.31533 6.69102ZM6.31533 12.875V17.6562C6.31533 18.1238 5.85777 18.5 5.28901 18.5C4.72026 18.5 4.26269 18.1238 4.26269 17.6562V8.36094L2.41959 11.0398C2.14163 11.4441 1.51301 11.5883 1.02123 11.3598C0.529451 11.1312 0.354121 10.6145 0.632083 10.2102L3.13802 6.57148C3.80512 5.60117 5.05809 5 6.41369 5H7.58968C8.94528 5 10.1982 5.60117 10.8654 6.57148L13.367 10.2102C13.645 10.6145 13.4739 11.1312 12.9779 11.3598C12.4818 11.5883 11.8575 11.4477 11.5795 11.0398L9.7364 8.36094V17.6562C9.7364 18.1238 9.27883 18.5 8.71008 18.5C8.14133 18.5 7.68376 18.1238 7.68376 17.6562V12.875H6.31533Z"
        fill="#3A3B3C"
      />
    </svg>
  ) : name === "setting" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.33032 6.41602C8.41864 6.41602 7.5443 6.77818 6.89964 7.42284C6.25499 8.06749 5.89282 8.94183 5.89282 9.85352C5.89282 10.7652 6.25499 11.6395 6.89964 12.2842C7.5443 12.9289 8.41864 13.291 9.33032 13.291C10.242 13.291 11.1163 12.9289 11.761 12.2842C12.4057 11.6395 12.7678 10.7652 12.7678 9.85352C12.7678 8.94183 12.4057 8.06749 11.761 7.42284C11.1163 6.77818 10.242 6.41602 9.33032 6.41602ZM7.26782 9.85352C7.26782 9.30651 7.48512 8.7819 7.87191 8.39511C8.25871 8.00831 8.78331 7.79102 9.33032 7.79102C9.87733 7.79102 10.4019 8.00831 10.7887 8.39511C11.1755 8.7819 11.3928 9.30651 11.3928 9.85352C11.3928 10.4005 11.1755 10.9251 10.7887 11.3119C10.4019 11.6987 9.87733 11.916 9.33032 11.916C8.78331 11.916 8.25871 11.6987 7.87191 11.3119C7.48512 10.9251 7.26782 10.4005 7.26782 9.85352Z"
          fill="black"
        />
        <path
          id="Vector_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.30736 0C8.89945 0 8.55936 -1.70742e-08 8.2807 0.0183333C7.99585 0.0301947 7.71493 0.089043 7.44928 0.1925C7.14334 0.319082 6.86534 0.504692 6.63114 0.73873C6.39695 0.972767 6.21115 1.25065 6.08436 1.5565C5.95145 1.87733 5.9157 2.2165 5.90103 2.585C5.89956 2.71977 5.86389 2.85196 5.79735 2.96916C5.73081 3.08637 5.63558 3.18475 5.52061 3.25508C5.40225 3.31971 5.26941 3.3532 5.13456 3.35239C4.99971 3.35159 4.86728 3.31653 4.7497 3.2505C4.42336 3.07817 4.1117 2.93975 3.76703 2.89392C3.43881 2.85074 3.1053 2.87264 2.78555 2.95836C2.4658 3.04408 2.16606 3.19194 1.90345 3.3935C1.68141 3.57214 1.49032 3.78615 1.33786 4.02692C1.18203 4.25975 1.01153 4.554 0.808029 4.90692L0.785112 4.94725C0.580695 5.30017 0.411112 5.59442 0.288279 5.84558C0.159945 6.10775 0.0591119 6.36625 0.0224453 6.65225C-0.0650045 7.31499 0.114368 7.98533 0.521112 8.51583C0.732862 8.79175 1.00878 8.9925 1.32045 9.18867C1.43664 9.25736 1.53345 9.35449 1.60177 9.47091C1.67008 9.58734 1.70765 9.71922 1.71095 9.85417C1.70765 9.98911 1.67008 10.121 1.60177 10.2374C1.53345 10.3538 1.43664 10.451 1.32045 10.5197C1.00878 10.7158 0.733779 10.9166 0.521112 11.1925C0.319552 11.4551 0.171692 11.7549 0.085973 12.0746C0.000254318 12.3944 -0.0216439 12.7279 0.0215287 13.0561C0.059112 13.3421 0.159029 13.6006 0.287362 13.8627C0.411112 14.1139 0.580695 14.4082 0.785112 14.7611L0.808029 14.8014C1.01153 15.1543 1.18203 15.4486 1.33786 15.6814C1.50011 15.9225 1.67428 16.1398 1.90345 16.3139C2.16599 16.5156 2.4657 16.6637 2.78545 16.7495C3.10521 16.8354 3.43875 16.8575 3.76703 16.8144C4.1117 16.7686 4.42336 16.6311 4.7497 16.4578C4.86714 16.3919 4.99941 16.3569 5.1341 16.3561C5.26879 16.3553 5.40148 16.3887 5.5197 16.4532C5.6353 16.523 5.73113 16.6212 5.79804 16.7385C5.86495 16.8558 5.90072 16.9883 5.90195 17.1233C5.9157 17.4918 5.95145 17.831 6.08528 18.1518C6.21186 18.4578 6.39747 18.7358 6.63151 18.97C6.86555 19.2042 7.14343 19.39 7.44928 19.5168C7.71511 19.6268 7.99011 19.6698 8.2807 19.6891C8.55936 19.7083 8.89945 19.7083 9.30736 19.7083H9.3532C9.76111 19.7083 10.1012 19.7083 10.3799 19.69C10.6714 19.6698 10.9454 19.6268 11.2113 19.5158C11.5172 19.3893 11.7952 19.2036 12.0294 18.9696C12.2636 18.7356 12.4494 18.4577 12.5762 18.1518C12.7091 17.831 12.7449 17.4918 12.7595 17.1233C12.7608 16.9884 12.7964 16.856 12.863 16.7387C12.9295 16.6213 13.0248 16.5227 13.1399 16.4523C13.2584 16.3878 13.3913 16.3545 13.5261 16.3555C13.661 16.3564 13.7934 16.3917 13.9109 16.4578C14.2372 16.6302 14.5489 16.7686 14.8935 16.8135C15.5563 16.9009 16.2266 16.7216 16.7571 16.3148C16.9863 16.1388 17.1604 15.9225 17.3227 15.6814C17.4785 15.4486 17.649 15.1543 17.8525 14.8014L17.8754 14.7611C18.0799 14.4082 18.2494 14.1139 18.3723 13.8627C18.5006 13.6006 18.6014 13.3412 18.6381 13.0561C18.7256 12.3933 18.5462 11.723 18.1394 11.1925C17.9277 10.9166 17.6518 10.7158 17.3401 10.5197C17.2239 10.451 17.1271 10.3538 17.0588 10.2374C16.9905 10.121 16.9529 9.98911 16.9496 9.85417C16.9496 9.59933 17.0889 9.34633 17.3401 9.18867C17.6518 8.9925 17.9268 8.79175 18.1394 8.51583C18.341 8.25322 18.4889 7.95348 18.5746 7.63373C18.6603 7.31397 18.6822 6.98047 18.639 6.65225C18.5954 6.37057 18.5056 6.09802 18.3732 5.84558C18.2167 5.54102 18.0507 5.24143 17.8754 4.94725L17.8525 4.90692C17.6851 4.60816 17.5084 4.31469 17.3227 4.02692C17.1703 3.7864 16.9792 3.5727 16.7571 3.39442C16.4946 3.1927 16.1949 3.04467 15.8751 2.95879C15.5553 2.87292 15.2218 2.85087 14.8935 2.89392C14.5489 2.93975 14.2372 3.07725 13.9109 3.2505C13.7934 3.31637 13.6611 3.35134 13.5265 3.35214C13.3918 3.35294 13.2591 3.31955 13.1409 3.25508C13.0256 3.18497 12.93 3.08669 12.8631 2.96947C12.7962 2.85225 12.7603 2.71994 12.7586 2.585C12.7449 2.2165 12.7091 1.87733 12.5753 1.5565C12.4487 1.25056 12.2631 0.972557 12.029 0.738363C11.795 0.504168 11.5171 0.318371 11.2113 0.191583C10.9454 0.0815833 10.6704 0.0385 10.3799 0.01925C10.1012 2.56114e-08 9.76111 0 9.3532 0H9.30736ZM7.97545 1.46208C8.04603 1.43275 8.15328 1.40617 8.3742 1.39058C8.60061 1.375 8.89395 1.375 9.33028 1.375C9.76661 1.375 10.0599 1.375 10.2864 1.39058C10.5073 1.40617 10.6145 1.43275 10.6851 1.46208C10.9665 1.5785 11.1893 1.80125 11.3057 2.08267C11.3424 2.17067 11.3726 2.30908 11.3845 2.63633C11.412 3.36233 11.7869 4.06175 12.4524 4.44583C13.1179 4.83083 13.9109 4.80517 14.5534 4.466C14.8431 4.31292 14.9779 4.26983 15.0732 4.25792C15.3744 4.21812 15.679 4.29956 15.9202 4.48433C15.9807 4.53108 16.0577 4.61083 16.1814 4.79417C16.3089 4.983 16.4555 5.23692 16.6737 5.61458C16.8919 5.99225 17.0376 6.24708 17.1375 6.45058C17.2356 6.6495 17.2659 6.75583 17.275 6.83192C17.3148 7.1331 17.2334 7.43776 17.0486 7.67892C16.9899 7.755 16.8854 7.85033 16.6086 8.0245C15.9926 8.41133 15.5746 9.086 15.5746 9.85417C15.5746 10.6223 15.9926 11.297 16.6086 11.6838C16.8854 11.858 16.9899 11.9533 17.0486 12.0294C17.2338 12.2705 17.3144 12.5748 17.275 12.8764C17.2659 12.9525 17.2347 13.0598 17.1375 13.2578C17.0376 13.4622 16.8919 13.7161 16.6737 14.0938C16.4555 14.4714 16.3079 14.7253 16.1814 14.9142C16.0577 15.0975 15.9807 15.1772 15.9202 15.224C15.679 15.4088 15.3744 15.4902 15.0732 15.4504C14.9779 15.4385 14.844 15.3954 14.5534 15.2423C13.9118 14.9032 13.1179 14.8775 12.4524 15.2616C11.7869 15.6466 11.412 16.346 11.3845 17.072C11.3726 17.3993 11.3424 17.5377 11.3057 17.6257C11.2481 17.7648 11.1637 17.8912 11.0572 17.9977C10.9507 18.1042 10.8243 18.1887 10.6851 18.2463C10.6145 18.2756 10.5073 18.3022 10.2864 18.3178C10.0599 18.3333 9.76661 18.3333 9.33028 18.3333C8.89395 18.3333 8.60061 18.3333 8.3742 18.3178C8.15328 18.3022 8.04603 18.2756 7.97545 18.2463C7.8363 18.1887 7.70987 18.1042 7.60338 17.9977C7.4969 17.8912 7.41245 17.7648 7.35486 17.6257C7.3182 17.5377 7.28795 17.3993 7.27603 17.072C7.24853 16.346 6.87361 15.6466 6.20811 15.2625C5.54261 14.8775 4.7497 14.9032 4.10711 15.2423C3.81745 15.3954 3.6827 15.4385 3.58736 15.4504C3.28618 15.4902 2.98152 15.4088 2.74036 15.224C2.67986 15.1772 2.60286 15.0975 2.47911 14.9142C2.3067 14.6458 2.14254 14.3722 1.98686 14.0938C1.7687 13.7161 1.62295 13.4613 1.52303 13.2578C1.42495 13.0588 1.3947 12.9525 1.38553 12.8764C1.34573 12.5752 1.42717 12.2706 1.61195 12.0294C1.67061 11.9533 1.77511 11.858 2.05195 11.6838C2.66795 11.297 3.08595 10.6223 3.08595 9.85417C3.08595 9.086 2.66795 8.41133 2.05195 8.0245C1.77511 7.85033 1.67061 7.755 1.61195 7.67892C1.42717 7.43776 1.34573 7.1331 1.38553 6.83192C1.3947 6.75583 1.42586 6.64858 1.52303 6.45058C1.62295 6.24617 1.7687 5.99225 1.98686 5.61458C2.20503 5.23692 2.35261 4.983 2.47911 4.79417C2.60286 4.61083 2.67986 4.53108 2.74036 4.48433C2.98152 4.29956 3.28618 4.21812 3.58736 4.25792C3.6827 4.26983 3.81653 4.31292 4.10711 4.466C4.74878 4.80517 5.54261 4.83083 6.20811 4.44583C6.87361 4.06175 7.24853 3.36233 7.27603 2.63633C7.28795 2.30908 7.3182 2.17067 7.35486 2.08267C7.47128 1.80125 7.69403 1.5785 7.97545 1.46208Z"
          fill="black"
        />
      </g>
    </svg>
  ) : name === "talk" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M0 1.93185C0 1.14065 0.588 0.5 1.3125 0.5H10.6875C11.4128 0.5 12 1.14065 12 1.93185V9.70476C12 10.0845 11.8617 10.4487 11.6156 10.7172C11.3694 10.9858 11.0356 11.1366 10.6875 11.1366H6.04575L4.11525 13.2418C3.96243 13.4085 3.76775 13.5219 3.55583 13.5679C3.34391 13.6139 3.12425 13.5903 2.92462 13.5001C2.725 13.4099 2.55436 13.2571 2.43428 13.0612C2.31421 12.8652 2.25008 12.6348 2.25 12.3991V11.1366H1.3125C0.964403 11.1366 0.630564 10.9858 0.384422 10.7172C0.138281 10.4487 0 10.0845 0 9.70476L0 1.93185ZM1.3125 1.7273C1.26277 1.7273 1.21508 1.74885 1.17992 1.78721C1.14475 1.82557 1.125 1.8776 1.125 1.93185V9.70476C1.125 9.81767 1.209 9.90931 1.3125 9.90931H2.8125C2.96168 9.90931 3.10476 9.97396 3.21025 10.089C3.31574 10.2041 3.375 10.3602 3.375 10.523V12.314L5.415 10.0893C5.46711 10.0322 5.52906 9.9869 5.59727 9.95601C5.66549 9.92512 5.73864 9.90925 5.8125 9.90931H10.6875C10.7372 9.90931 10.7849 9.88776 10.8201 9.8494C10.8552 9.81104 10.875 9.75901 10.875 9.70476V1.93185C10.875 1.8776 10.8552 1.82557 10.8201 1.78721C10.7849 1.74885 10.7372 1.7273 10.6875 1.7273H1.3125ZM16.6875 6.63651H14.0625C13.9133 6.63651 13.7702 6.57185 13.6648 6.45677C13.5593 6.34169 13.5 6.18561 13.5 6.02285C13.5 5.8601 13.5593 5.70402 13.6648 5.58894C13.7702 5.47386 13.9133 5.4092 14.0625 5.4092H16.6875C17.412 5.4092 18 6.05067 18 6.84106V14.614C18 14.9937 17.8617 15.3579 17.6156 15.6264C17.3694 15.895 17.0356 16.0458 16.6875 16.0458H15.75V17.3083C15.7499 17.544 15.6858 17.7744 15.5657 17.9704C15.4456 18.1664 15.275 18.3191 15.0754 18.4093C14.8757 18.4995 14.6561 18.5231 14.4442 18.4771C14.2322 18.4312 14.0376 18.3177 13.8848 18.151L11.9543 16.0458H8.0625C7.7144 16.0458 7.38056 15.895 7.13442 15.6264C6.88828 15.3579 6.75 14.9937 6.75 14.614V13.4153C6.75 13.2525 6.80926 13.0965 6.91475 12.9814C7.02024 12.8663 7.16332 12.8016 7.3125 12.8016C7.46168 12.8016 7.60476 12.8663 7.71025 12.9814C7.81574 13.0965 7.875 13.2525 7.875 13.4153V14.614C7.875 14.7269 7.959 14.8185 8.0625 14.8185H12.1875C12.3368 14.8185 12.48 14.8832 12.585 14.9985L14.625 17.2232V15.4322C14.625 15.2694 14.6843 15.1133 14.7898 14.9982C14.8952 14.8832 15.0383 14.8185 15.1875 14.8185H16.6875C16.7372 14.8185 16.7849 14.797 16.8201 14.7586C16.8552 14.7202 16.875 14.6682 16.875 14.614V6.84106C16.875 6.78681 16.8552 6.73478 16.8201 6.69642C16.7849 6.65806 16.7372 6.63651 16.6875 6.63651ZM9.3975 4.0019L5.6475 8.0929C5.59543 8.1501 5.5335 8.19549 5.46528 8.22647C5.39706 8.25744 5.32389 8.27339 5.25 8.27339C5.17611 8.27339 5.10294 8.25744 5.03472 8.22647C4.9665 8.19549 4.90457 8.1501 4.8525 8.0929L2.9775 6.0474C2.9253 5.99045 2.88389 5.92285 2.85564 5.84844C2.82739 5.77404 2.81285 5.69429 2.81285 5.61375C2.81285 5.53322 2.82739 5.45347 2.85564 5.37907C2.88389 5.30466 2.9253 5.23706 2.9775 5.18011C3.0297 5.12316 3.09167 5.07799 3.15987 5.04717C3.22808 5.01635 3.30118 5.00049 3.375 5.00049C3.44882 5.00049 3.52192 5.01635 3.59013 5.04717C3.65833 5.07799 3.7203 5.12316 3.7725 5.18011L5.25 6.79115L8.6025 3.13461C8.6547 3.07766 8.71667 3.03249 8.78487 3.00167C8.85308 2.97085 8.92618 2.95498 9 2.95498C9.07382 2.95498 9.14692 2.97085 9.21513 3.00167C9.28333 3.03249 9.3453 3.07766 9.3975 3.13461C9.4497 3.19155 9.49111 3.25916 9.51936 3.33356C9.54761 3.40797 9.56215 3.48772 9.56215 3.56825C9.56215 3.64879 9.54761 3.72854 9.51936 3.80294C9.49111 3.87735 9.4497 3.94495 9.3975 4.0019Z"
        fill="black"
      />
    </svg>
  ) : name === "circle-right" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="circle-right-regular 1" clipPath="url(#clip0_541_280)">
        <path
          id="Vector"
          d="M13.5938 8C13.5938 9.61616 12.9517 11.1661 11.8089 12.3089C10.6661 13.4517 9.11616 14.0938 7.5 14.0938C5.88384 14.0938 4.33387 13.4517 3.19107 12.3089C2.04827 11.1661 1.40625 9.61616 1.40625 8C1.40625 6.38384 2.04827 4.83387 3.19107 3.69107C4.33387 2.54827 5.88384 1.90625 7.5 1.90625C9.11616 1.90625 10.6661 2.54827 11.8089 3.69107C12.9517 4.83387 13.5938 6.38384 13.5938 8ZM0 8C0 9.98912 0.790176 11.8968 2.1967 13.3033C3.60322 14.7098 5.51088 15.5 7.5 15.5C9.48912 15.5 11.3968 14.7098 12.8033 13.3033C14.2098 11.8968 15 9.98912 15 8C15 6.01088 14.2098 4.10322 12.8033 2.6967C11.3968 1.29018 9.48912 0.5 7.5 0.5C5.51088 0.5 3.60322 1.29018 2.1967 2.6967C0.790176 4.10322 0 6.01088 0 8ZM8.63086 4.45801C8.50781 4.32617 8.33496 4.25 8.15332 4.25C7.79297 4.25 7.5 4.54297 7.5 4.90332V6.59375H4.6875C4.16895 6.59375 3.75 7.0127 3.75 7.53125V8.46875C3.75 8.9873 4.16895 9.40625 4.6875 9.40625H7.5V11.0967C7.5 11.457 7.79297 11.75 8.15332 11.75C8.33496 11.75 8.50781 11.6738 8.63086 11.542L11.5576 8.4043C11.6602 8.29297 11.7188 8.14941 11.7188 8C11.7188 7.85059 11.6602 7.7041 11.5576 7.5957L8.63086 4.45801Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_541_280">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : null;
};

export default Icons;
