import React from "react";
import { locationAreas } from "../constants";

const Locations = () => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="left-0 absolute z-[0]">
          <svg
            width="247"
            height="322"
            viewBox="0 0 247 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_254_4347)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M103.656 165.767C98.9759 165.631 96.0279 162.944 93.4335 160.114C86.1506 152.166 78.7644 144.399 72.857 135.168C70.1445 130.924 68.4346 127.839 69.8703 122.663C80.4822 138.04 89.9155 153.531 103.656 165.767ZM172.254 7.24547C178.027 12.7381 183.682 18.3587 189.599 23.6959C201.929 34.82 212.225 47.527 220.412 61.9342C221.193 63.3126 223.275 64.9147 220.746 66.1354C218.755 67.0969 217.875 65.0943 216.996 63.5199C207.513 46.5461 195.669 31.3654 180.265 19.4185C175.426 15.6668 170.985 11.8689 166.908 7.3436C162.924 2.91902 150.307 6.48261 148.113 12.234C147.365 14.1956 148.208 16.4243 149.633 16.6994C158.319 18.3886 161.856 26.78 168.741 30.9839C173.487 33.88 174.421 41.5113 178.936 45.7724C180.391 47.1483 181.391 52.0959 184.361 46.8513C185.03 45.6716 186.273 45.974 186.081 47.2981C185.487 51.3521 190.304 50.9244 191.414 54.2074C181.862 54.4989 187.17 58.2639 188.986 62.2144C191.737 68.2137 193.893 74.5645 195.548 80.9593C198.03 90.5521 204.6 98.9241 204.866 109.011C205.422 130.016 207.587 151.406 194.762 170.287C193.214 172.57 191.783 174.861 188.6 175.095C163.738 176.924 139.291 176.207 117.182 162.667C100.938 152.719 89.7924 138.01 79.6545 122.349C67.0239 102.845 63.0841 81.1497 62.6674 58.4605C62.5715 53.292 62.651 47.8539 57.5054 44.5082C55.6508 43.304 53.426 41.4895 51.3959 42.3396C49.3187 43.2114 49.3795 46.0503 49.1626 48.2408C49.0008 49.87 50.1271 51.6409 48.6505 53.1585C46.1765 53.6924 45.9625 51.3739 44.8391 50.276C43.3404 48.8184 42.8391 45.8541 39.899 46.5788C37.266 47.2273 37.0361 49.6357 36.5922 51.8698C36.4389 52.6435 37.4443 54.9757 35.1486 54.0139C25.1918 49.8482 25.3014 60.2259 23.0164 63.8984C18.0707 71.8427 20.12 81.9044 21.8873 90.6419C28.3811 122.775 46.2776 148.837 66.4131 174.183C72.2842 181.577 77.6545 189.045 85.789 192.537C93.8389 195.997 100.691 203.967 110.96 201.362C116.95 209.067 126.197 204.452 133.773 206.901C142.326 209.664 152.401 208.645 161.722 207.991C178.232 206.833 193.948 202.25 208.513 194.241C222.251 186.688 229.98 173.918 236.66 160.623C241.052 151.877 244.764 142.753 246.101 132.789C250.197 102.278 239.934 76.0688 222.653 51.6655C213.606 38.8931 204.189 26.5376 191.526 17.0673C185.868 12.8361 180.251 8.46608 173.742 5.56994C173.243 6.12847 172.75 6.687 172.254 7.24547Z"
                fill="#202020"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M-74.7008 262.725C-70.1269 268.915 -65.553 275.109 -60.9791 281.299C-68.3648 277.101 -72.5509 270.634 -74.7008 262.725ZM-87.878 239.116C-92.2164 237.402 -92.8022 233.374 -94.868 230.6C-96.365 228.591 -96.8748 224.888 -100.616 226.307C-104.412 227.744 -102.229 230.814 -101.991 233.307C-101.926 234.008 -101.98 234.719 -101.98 235.532C-105.733 235.919 -105.508 229.433 -109.48 231.273C-112.498 232.668 -113.151 237.933 -114.423 238.525C-123.28 242.645 -113.433 247.802 -116.063 252.009C-118.533 252.035 -116.944 247.656 -119.85 247.907C-102.037 304.546 -67.7488 328.504 -12.2717 320.062C23.5861 314.602 46.2233 293.927 56.6865 260.451C64.0529 236.882 55.7509 215.42 41.8118 196.038C40.2149 193.816 37.9646 190.89 34.4778 193.074C28.7214 196.671 19.3482 196.277 19.367 206.43C19.3914 220.178 21.8234 233.858 20.6114 247.634C19.3641 261.853 15.2461 275.011 5.91039 286.177C3.95583 288.519 1.70266 290.435 -1.45598 290.636C-23.9201 292.038 -44.2634 288.045 -58.3461 268.203C-65.9407 257.501 -71.8135 245.904 -76.4254 233.656C-78.0309 229.392 -80.2863 225.633 -84.3317 223.345C-85.5057 222.685 -87.2979 222.29 -88.494 222.693C-90.297 223.305 -89.3183 225.094 -89.2337 226.515C-89.0061 230.524 -86.8369 234.36 -87.878 239.116Z"
                fill="#202020"
              />
            </g>
            <defs>
              <clipPath id="clip0_254_4347">
                <rect
                  width="369"
                  height="322"
                  fill="white"
                  transform="matrix(-1 0 0 1 247 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="right-0 absolute z-[0]">
          <svg
            width="282"
            height="246"
            viewBox="0 0 282 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M318.937 28.1665C318.832 27.7838 318.73 27.3995 318.624 27.0168C310.8 29.1874 302.977 31.3561 295.15 33.5266C295.277 33.9779 295.402 34.4311 295.525 34.8859C303.33 32.6467 311.134 30.4057 318.937 28.1665ZM52.7924 211.174C48.7402 208.806 43.8361 207.471 45.0417 201.584C45.8111 197.841 46.4588 193.9 48.1595 190.557C53.4104 180.227 58.2797 169.532 64.8983 160.11C73.6877 147.6 86.1669 139.375 101.859 138.758C116.83 138.167 131.865 138.952 146.868 139.334C167.476 139.858 188.171 141.663 207.337 131.123C219.635 124.36 230.079 116.138 236.679 103.159C244.139 88.482 252.024 73.9427 260.859 60.068C273.174 40.7293 290.554 28.1294 313.79 24.8358C316.144 24.5025 319.133 23.5045 320.784 24.5184C323.574 26.234 325.901 29.0851 327.634 31.9414C328.239 32.9377 327.014 36.1942 325.75 36.9454C323.046 38.5551 319.693 39.0225 316.756 40.3045C314.426 41.32 312.317 42.8487 310.116 44.1604C309.71 44.4019 309.298 44.9573 308.939 44.9185C301.1 44.0388 297.555 50.9241 292.117 54.3095C279.552 62.1361 272.032 74.2847 265.217 86.9145C258.782 98.8424 252.657 110.94 246.098 122.797C244.229 126.179 241.735 129.464 238.818 131.971C230.351 139.257 221.684 145.726 210.885 150.182C189.942 158.821 168.908 156.37 147.546 155.108C134.317 154.325 120.928 153.595 107.782 154.773C91.0956 156.266 79.5355 166.831 70.2921 180.255C67.8592 183.786 64.1644 186.442 61.7036 189.957C60.0732 192.288 59.7372 195.492 58.5947 198.209C56.8115 202.462 54.8382 206.634 52.7924 211.174Z"
              fill="#202020"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.182 103.604C49.416 104.026 49.6516 104.45 49.8835 104.872C53.8495 102.678 57.8168 100.483 61.7841 98.2881C61.5205 97.8096 61.2565 97.3311 60.9929 96.8526C57.057 99.1037 53.1176 101.353 49.182 103.604ZM165.564 103.527C165.668 103.915 165.771 104.304 165.875 104.692C170.708 103.379 175.539 102.067 180.371 100.753C180.267 100.37 180.166 99.9886 180.063 99.6054C175.231 100.914 170.398 102.22 165.564 103.527ZM269.508 3.10573C268.619 3.86146 267.729 4.61893 266.353 5.78784H270.762C273.9 11.5635 271.916 15.7888 267.621 19.5039C263.879 22.7404 260.415 26.4272 254.875 26.2524C254.303 26.2348 253.35 26.4696 253.192 26.8492C251.087 31.8744 247.399 31.6643 243.416 29.858C243.186 32.2399 243.488 34.6642 242.623 36.5501C241.692 38.5804 239.728 40.1663 238.112 41.8453C228.761 51.5533 225.114 64.1128 220.425 76.2822C216.113 87.4714 210.102 97.829 199.41 104.376C198.012 105.231 196.195 105.399 193.54 106.193C191.816 109.02 189.275 112.518 183.806 113.035C180.625 113.337 177.695 116.129 174.501 116.508C165.708 117.552 156.735 119.016 148.022 118.227C139.941 117.494 131.897 114.619 124.201 111.713C107.463 105.393 90.3494 104.427 73.1889 108.203C63.6587 110.3 54.8235 114.863 48.3377 122.92C46.3751 125.358 43.6951 127.2 41.4458 129.419C30.4914 140.226 21.8636 152.651 15.8122 166.845C13.9463 171.226 12.1684 175.646 10.3095 180.031C9.43198 182.094 8.43483 183.118 5.98684 181.462C-0.0381842 177.385 -0.949147 174.719 0.774298 167.212C7.69095 137.074 25.9155 115.144 50.675 98.101C61.6454 90.5488 74.5132 89.0094 87.3423 89.3677C95.9964 89.6112 104.698 91.266 113.192 93.1394C121.113 94.8857 128.745 97.9014 136.576 100.096C146.094 102.763 155.594 100.99 165.036 99.3864C188.853 95.341 203.59 81.1429 210.855 58.3232C218.91 33.0186 235.094 14.7118 259.092 3.5401C262.066 2.15754 265.606 2.00746 268.884 1.28705C269.093 1.89269 269.301 2.49832 269.508 3.10573Z"
              fill="#202020"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M312.415 109.671C310.571 111.689 308.697 113.68 306.895 115.732C306.121 116.614 304.708 118.204 304.914 118.482C307.723 122.272 304.771 125.434 302.728 126.882C297.49 130.599 299.205 135.877 298.48 140.567C298.047 143.356 294.567 147.727 292.014 148.208C291.805 146.935 291.602 145.692 291.401 144.45C290.28 145 288.961 145.336 288.082 146.148C286.569 147.547 285.327 149.242 283.567 151.279C285.401 151.638 286.653 151.883 287.97 152.139C288.224 153.739 288.469 155.28 288.712 156.803C283.922 158.575 279.097 159.427 275.428 163.544C273.433 165.785 270.672 166.833 272.25 170.531C272.384 170.845 270.477 172.613 270.167 172.452C262.701 168.568 258.643 175.488 256.372 179.111C254.498 182.096 252.312 183.696 249.899 184.835C248.047 185.708 245.244 184.518 242.854 184.322C242.259 184.273 241.641 184.516 240.72 184.679C240.828 186.104 240.926 187.394 241.019 188.653C236.742 190.474 236.742 190.474 227.035 187.777C226.173 193.147 221.819 194.956 216.183 192.034C215.864 193.103 215.563 194.12 215.521 194.26C209.694 194.132 203.601 188.264 198.587 196.863C194.176 191.99 189.599 194.081 184.594 196.632C182.247 197.825 179.074 197.64 176.273 197.659C164.837 197.736 153.591 198.5 142.466 201.823C137.016 203.452 132.398 206.768 127.258 208.273C116.156 211.527 111.063 221.386 103.28 228.182C99.628 231.37 97.7682 236.59 95.0096 240.833C93.3265 243.42 92.6032 247.504 87.7188 245.084C83.9374 243.212 82.5121 240.816 84.2632 236.218C92.4017 214.861 105.563 198.269 127.256 188.928C143.589 181.899 160.607 181.808 177.765 181.342C188.855 181.041 199.929 180.257 211.016 179.759C212.731 179.684 215.654 178.124 214.877 182.192L214.896 182.113L212.752 182.928C212.735 183.179 212.719 183.43 212.701 183.68C213.775 183.778 214.873 184.062 215.913 183.926C217.138 183.766 218.325 182.884 219.507 182.928C229.056 183.277 237.102 178.648 245.093 174.618C253.584 170.336 261.503 164.88 269.495 159.665C271.929 158.079 273.782 155.599 275.901 153.527L275.761 153.645C277.329 152.4 278.892 151.154 281.448 149.122C278.561 148.942 277.096 148.851 274.777 148.707C277.915 144.879 280.53 141.242 283.626 138.075C285.677 135.975 287.092 136.892 288.553 140.622C290.891 140.459 293.143 140.302 295.842 140.113C294.546 138.362 293.453 136.883 292.681 135.844C290.632 135.675 288.092 136.07 287.675 135.304C286.907 133.894 287.094 131.749 287.413 130.007C287.863 127.549 288.62 125.104 289.59 122.799C290.173 121.415 291.41 120.307 292.819 118.465C291.9 114.663 293.494 110.749 300.24 102.064C301.161 102.521 302.133 103.002 303.335 103.598C302.732 97.7171 303.331 96.7705 306.21 97.0106V103.035L306.112 102.9C307.121 104.969 308.128 107.035 309.251 109.343C309.519 109.27 310.513 108.993 311.51 108.714C311.811 109.033 312.114 109.352 312.415 109.671Z"
              fill="#202020"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M255.334 164.15C248.755 167.121 242.173 170.09 235.593 173.061C235.271 172.616 234.952 172.17 234.631 171.725C235.533 171.138 236.375 170.465 237.342 169.978C241.924 167.672 246.505 165.361 251.173 163.188C252.178 162.721 253.539 162.826 254.738 162.667C254.936 163.161 255.136 163.656 255.334 164.15Z"
              fill="#202020"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M213.928 179.991C217.087 173.782 222.875 174.939 227.73 173.061C227.499 176.414 223.373 178.346 213.963 179.873C213.948 179.904 213.928 179.991 213.928 179.991Z"
              fill="#202020"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M276.036 151.912C274.215 152.182 272.275 152.201 270.609 152.795C268.975 153.378 267.621 154.545 265.685 155.737C266.137 152.15 270.327 148.313 273.037 148.86C274.208 149.095 274.946 150.917 275.886 152.018C275.891 152.016 276.036 151.912 276.036 151.912Z"
              fill="#202020"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-[1] w-[80%] mx-auto mt-24 pb-11">
        <h3 className="font-abril text-white font-normal text-[48px] leading-[56px]">
          Where to find us
        </h3>
        <div className="flex flex-row justify-between flex-wrap mt-14">
          {locationAreas.map((location) => (
            <div className="flex flex-col" key={location.key}>
              <h5 className="font-lato font-normal text-white text-[24px] leading-7">
                {location.title}
              </h5>
              <ul className="list-none mt-4">
                {location.locations.map((locations, index) => (
                  <li
                    key={locations.key}
                    className={`font-lato text-white font-normal text-[16px] leading-[19px]`}
                  >
                    {locations.name}
                    <p className="font-lato text-[#999] leading-[26px] max-w-[150px] mb-3">
                      {locations.location}
                    </p>
                    <p className="font-lato text-[#999] leading-[26px] max-w-[150px] mb-3">
                      {locations.days}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
