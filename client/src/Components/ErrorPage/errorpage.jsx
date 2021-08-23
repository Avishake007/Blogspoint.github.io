//404 Error page

import React from 'react';
import './errorpage.css';
import {NavLink} from 'react-router-dom';
// import Error from 'Error.svg';
const Errorpage=()=>{
  return(
    <>
    <div className="errorpage">
        <svg width="1075" height="585" viewBox="0 0 1075 585" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="undraw_page_not_found_su7k 1">
        <path id="Vector" d="M540.651 155C454.707 155 393 210.139 393 338.798C393 484.611 454.707 523.208 540.651 523.208C626.595 523.208 691.978 480.935 691.978 338.798C691.978 186.858 626.595 155 540.651 155ZM541.216 474.808C481.689 474.808 450.59 439.885 450.59 338.892C450.59 249.78 482.962 202.787 542.489 202.787C602.016 202.787 634.388 233.655 634.388 338.892C634.388 437.339 600.743 474.808 541.216 474.808Z" fill="#2F2E41"/>
        <path id="fill_left_four" d="M332.507 418.035H296.973V313.396C296.973 307.838 294.765 302.508 290.835 298.578C286.905 294.648 281.575 292.44 276.017 292.44H267.69C264.939 292.44 262.213 292.982 259.671 294.035C257.129 295.088 254.818 296.632 252.872 298.578C250.927 300.524 249.383 302.834 248.33 305.376C247.277 307.919 246.735 310.644 246.735 313.396V418.035H146.505C144.443 418.035 142.416 417.502 140.62 416.488C138.825 415.474 137.322 414.013 136.258 412.247C135.194 410.481 134.604 408.47 134.546 406.408C134.488 404.347 134.964 402.306 135.927 400.483L242.009 199.703C243.332 197.199 244.133 194.454 244.366 191.633C244.598 188.811 244.256 185.972 243.361 183.286C242.466 180.6 241.035 178.123 239.156 176.006C237.277 173.888 234.989 172.173 232.429 170.964L226.167 168.007C221.304 165.71 215.745 165.371 210.639 167.06C205.534 168.748 201.272 172.334 198.737 177.077L69.3558 419.109C67.1526 423.231 66 427.832 66 432.505C66 436.237 66.735 439.932 68.163 443.38C69.5911 446.827 71.6842 449.96 74.3228 452.598C76.9615 455.237 80.094 457.33 83.5416 458.758C86.9891 460.186 90.6842 460.921 94.4158 460.921H246.735V527.088C246.735 530.387 247.384 533.653 248.647 536.701C249.909 539.749 251.759 542.518 254.092 544.85C256.424 547.183 259.193 549.033 262.241 550.295C265.289 551.558 268.555 552.207 271.854 552.207C275.152 552.207 278.419 551.558 281.466 550.295C284.514 549.033 287.283 547.183 289.615 544.85C291.948 542.518 293.798 539.749 295.061 536.701C296.323 533.653 296.973 530.387 296.973 527.088V460.921H332.507C338.194 460.921 343.648 458.662 347.669 454.641C351.691 450.619 353.95 445.165 353.95 439.478C353.95 433.791 351.691 428.337 347.67 424.316C343.648 420.294 338.194 418.035 332.507 418.035Z" fill="#6C63FF"/>
        <path id="fill_right_four" d="M997.507 418.035H961.973V313.396C961.973 307.838 959.765 302.508 955.835 298.578C951.905 294.648 946.575 292.44 941.017 292.44H932.69C929.938 292.44 927.214 292.982 924.671 294.035C922.129 295.088 919.818 296.632 917.872 298.578C915.927 300.524 914.383 302.834 913.33 305.376C912.277 307.919 911.735 310.644 911.735 313.396V418.035H811.505C809.443 418.035 807.416 417.502 805.62 416.488C803.825 415.474 802.322 414.013 801.258 412.247C800.194 410.481 799.604 408.47 799.546 406.408C799.488 404.347 799.964 402.306 800.927 400.483L907.009 199.703C908.332 197.199 909.133 194.454 909.366 191.633C909.598 188.811 909.256 185.972 908.361 183.286C907.466 180.6 906.035 178.123 904.156 176.006C902.277 173.888 899.989 172.173 897.429 170.964L891.167 168.007C886.304 165.71 880.745 165.371 875.639 167.06C870.534 168.748 866.272 172.334 863.737 177.077L734.356 419.109C732.153 423.231 731 427.832 731 432.505V432.505C731 440.042 733.994 447.269 739.323 452.598C744.652 457.927 751.879 460.921 759.416 460.921H911.735V527.088C911.735 533.75 914.381 540.139 919.092 544.85C923.803 549.561 930.192 552.207 936.854 552.207V552.207C943.516 552.207 949.905 549.561 954.615 544.85C959.326 540.139 961.973 533.75 961.973 527.088V460.921H997.507C1003.19 460.921 1008.65 458.662 1012.67 454.641C1016.69 450.619 1018.95 445.165 1018.95 439.478V439.478C1018.95 433.791 1016.69 428.337 1012.67 424.316C1008.65 420.294 1003.19 418.035 997.507 418.035Z" fill="#6C63FF"/>
        <path id="Vector_2" d="M540.031 155.982C454.087 155.982 392.38 211.121 392.38 339.78C392.38 485.593 454.087 524.19 540.031 524.19C625.975 524.19 691.358 481.917 691.358 339.78C691.358 187.84 625.975 155.982 540.031 155.982ZM540.596 475.79C481.069 475.79 449.97 440.867 449.97 339.874C449.97 250.762 482.342 203.769 541.869 203.769C601.396 203.769 633.768 234.637 633.768 339.874C633.768 438.321 600.123 475.79 540.596 475.79V475.79Z" stroke="#3F3D56" stroke-miterlimit="10"/>
        <path id="Vector_3" d="M471.141 31.1516C478.266 31.1516 484.042 25.3756 484.042 18.2505C484.042 11.1253 478.266 5.34927 471.141 5.34927C464.016 5.34927 458.24 11.1253 458.24 18.2505C458.24 25.3756 464.016 31.1516 471.141 31.1516Z" fill="#2F2E41"/>
        <path id="Vector_4" d="M502.607 93.7695C522.592 93.7695 538.794 72.7785 538.794 46.8848C538.794 20.991 522.592 0 502.607 0C482.622 0 466.421 20.991 466.421 46.8848C466.421 72.7785 482.622 93.7695 502.607 93.7695Z" fill="#2F2E41"/>
        <path id="Vector_5" opacity="0.1" d="M502.607 79.6097C484.48 79.6097 469.466 62.3392 466.832 39.8048C466.558 42.1548 466.421 44.5188 466.421 46.8848C466.421 72.7785 482.622 93.7695 502.607 93.7695C522.592 93.7695 538.794 72.7785 538.794 46.8848C538.794 44.5188 538.657 42.1548 538.383 39.8048C535.749 62.3392 520.735 79.6097 502.607 79.6097Z" fill="black"/>
        <path id="Vector_6" d="M576.242 184.189C575.465 187.382 572.114 189.94 568.403 191.727C560.602 195.483 550.978 196.605 541.644 196.981C539.262 197.126 536.873 197.081 534.499 196.849C529.898 196.404 525.582 194.42 522.249 191.217C522.011 191.062 521.816 190.849 521.683 190.599C521.549 190.348 521.481 190.067 521.486 189.783C521.49 189.499 521.566 189.221 521.707 188.975C521.849 188.728 522.05 188.521 522.292 188.374C527.262 182.915 535.555 179.567 543.909 177.157C550.243 175.33 561.29 170.597 568.199 171.235C574.89 171.854 577.223 180.157 576.242 184.189Z" fill="#3F3D56"/>
        <path id="Vector_7" opacity="0.1" d="M576.242 184.189C575.465 187.382 572.114 189.94 568.403 191.727C560.602 195.483 550.978 196.605 541.644 196.981C539.262 197.126 536.873 197.081 534.499 196.849C529.898 196.404 525.582 194.42 522.249 191.217C522.011 191.062 521.816 190.849 521.683 190.599C521.549 190.348 521.481 190.067 521.486 189.783C521.49 189.499 521.566 189.221 521.707 188.975C521.849 188.728 522.05 188.521 522.292 188.374C527.262 182.915 535.555 179.567 543.909 177.157C550.243 175.33 561.29 170.597 568.199 171.235C574.89 171.854 577.223 180.157 576.242 184.189Z" fill="black"/>
        <path id="Vector_8" d="M477.044 160.321C474.662 164.989 474.231 170.411 475.845 175.396C477.487 180.344 480.56 184.693 484.674 187.893C494.769 195.985 508.662 197.098 521.599 196.986C532.937 196.887 544.259 196.111 555.504 194.662C559.273 194.328 562.976 193.468 566.506 192.108C570.728 190.281 574.439 186.93 575.942 182.582C577.445 178.234 576.378 172.909 572.808 170.008C569.671 167.458 565.345 167.107 561.31 166.865L538.223 165.477C540.504 163.169 543.541 161.863 546.318 160.185C550.004 157.959 552.452 154.22 555.132 150.85C559.26 145.916 563.752 141.297 568.57 137.033C569.322 141.344 572.048 144.883 575.258 147.857C578.467 150.831 582.166 153.226 585.501 156.057C593.58 162.916 599.397 172.224 607.894 178.558C613.738 177.022 619.202 174.294 623.942 170.546L620.64 164.564C620.365 163.949 619.936 163.414 619.396 163.011C618.461 162.436 617.256 162.733 616.17 162.57C613.27 162.135 612.003 158.786 610.865 156.083C607.74 148.661 601.757 142.903 596.647 136.679C592.875 132.084 589.529 127.157 586.651 121.956C584.934 118.854 583.363 115.625 581.033 112.953C578.704 110.281 575.44 108.18 571.895 108.172C568.763 108.166 565.874 109.756 563.181 111.355C554.978 116.227 547.087 121.604 539.551 127.454C535.607 130.516 531.688 133.751 527.061 135.628C525.114 136.419 523.061 136.959 521.192 137.92C517.919 139.605 515.435 142.455 512.761 144.985C503.223 154.008 490.165 159.854 477.044 160.321Z" fill="#3F3D56"/>
        <path id="Vector_9" d="M525.32 96.098C525.213 98.8561 524.626 101.575 523.586 104.131C523.059 105.407 522.275 106.56 521.282 107.518C520.29 108.477 519.111 109.221 517.818 109.704C515.983 110.196 514.059 110.258 512.195 109.887C510.57 109.717 509.004 109.183 507.614 108.326C505.449 106.837 504.369 104.182 503.976 101.583C503.583 98.9866 503.759 96.334 503.507 93.7191C503.262 91.6071 502.86 89.5162 502.305 87.4637C502.135 86.7808 501.962 86.1012 501.792 85.4215C501.626 84.7418 501.462 84.0622 501.311 83.3825C501.172 82.7437 501.043 82.1018 500.933 81.4568C500.842 80.9124 500.76 80.3649 500.7 79.8142C500.645 78.1817 500.373 76.5638 499.892 75.003C499.44 73.9908 498.874 73.0333 498.205 72.149C497.919 71.74 497.642 71.3309 497.387 70.9061C496.65 69.8022 496.307 68.4816 496.415 67.1585C496.445 66.9539 496.495 66.7527 496.563 66.5575C496.588 66.482 496.616 66.4065 496.648 66.3341C496.931 66.2572 497.191 66.1124 497.405 65.9123C497.62 65.7121 497.782 65.4626 497.878 65.1855C497.986 64.5902 497.935 63.9769 497.73 63.4077C497.495 62.6123 497.173 61.8451 496.77 61.12C496.506 60.6418 495.609 59.7796 495.603 59.232C495.59 58.1307 497.743 57.2434 498.614 56.8091C501.275 55.4769 504.242 54.8753 507.211 55.0659C509.115 55.1949 511.179 55.7802 512.23 57.3755C513.174 58.8135 513.048 60.6763 513.451 62.3472C513.493 62.5901 513.596 62.8184 513.75 63.0111C513.955 63.1983 514.213 63.317 514.489 63.351C514.955 63.4437 515.433 63.4628 515.905 63.4076H515.908C516.033 63.3977 516.157 63.3799 516.28 63.3541C517.015 63.2185 517.71 62.9184 518.312 62.4762C518.702 62.3724 519.096 62.2874 519.492 62.2213C519.508 62.2197 519.524 62.2165 519.539 62.2119C521.116 67.1867 521.32 72.5202 522.611 77.5863C523.249 80.1068 524.165 82.5958 524.294 85.1886C524.303 85.3018 524.307 85.4183 524.31 85.5347C524.329 86.3686 524.263 87.2087 524.297 88.0394C524.309 88.4135 524.351 88.786 524.423 89.1533C524.564 89.7441 524.74 90.3262 524.949 90.8966L524.958 90.9249C525.018 91.1074 525.074 91.2931 525.122 91.4787C525.156 91.614 525.188 91.7462 525.213 91.8815L525.216 91.8909C525.449 93.2813 525.484 94.6978 525.32 96.098V96.098Z" fill="#FBBEBE"/>
        <path id="Vector_10" d="M503.237 63.5619C513.49 63.5619 521.802 55.25 521.802 44.9968C521.802 34.7436 513.49 26.4317 503.237 26.4317C492.983 26.4317 484.672 34.7436 484.672 44.9968C484.672 55.25 492.983 63.5619 503.237 63.5619Z" fill="#FBBEBE"/>
        <path id="left_hand" d="M621.103 146.148C620.565 141.083 618.765 136.234 615.867 132.045C616.349 134.909 616.831 137.771 617.315 140.632C616.714 140.806 616.075 140.801 615.477 140.617C614.879 140.433 614.347 140.079 613.948 139.597C613.166 138.621 612.568 137.511 612.182 136.321C610.073 131.085 607.315 126.135 603.973 121.586C592.154 120.601 580.471 115.702 570.077 109.99C559.681 104.282 549.952 97.4385 539.694 91.4882C537.915 90.4132 536.062 89.4668 534.149 88.6562C530.94 87.3692 527.337 86.7022 524.294 85.1886C524.089 85.0879 523.885 84.981 523.683 84.8708C522.996 84.497 522.345 84.0598 521.739 83.565C521.411 83.2989 521.1 83.0131 520.807 82.7091C519.289 80.9429 518.086 78.9292 517.249 76.7557C515.616 73.1434 515.033 68.7853 513.404 65.1729C514.153 64.4728 514.994 63.8789 515.905 63.4077H515.908C516.04 63.3385 516.172 63.2724 516.308 63.2094C516.953 62.9057 517.624 62.6603 518.312 62.4763C518.702 62.3724 519.096 62.2875 519.492 62.2214C519.508 62.2198 519.524 62.2166 519.539 62.212C521.378 61.9124 523.262 62.0614 525.03 62.6462C527.617 63.521 529.797 65.2673 531.972 66.9193C535.504 69.4079 538.892 72.0952 542.12 74.9684C543.913 76.6864 545.549 78.5744 547.478 80.1352C549.081 81.3722 550.771 82.4922 552.535 83.4863C562.972 89.704 573.411 95.9207 583.85 102.136C587.384 104.241 590.921 106.347 594.376 108.574C599.624 111.96 604.684 115.629 609.741 119.295C612.721 121.454 615.699 123.613 618.677 125.774C619.654 126.397 620.512 127.19 621.21 128.115C621.827 129.165 622.21 130.336 622.333 131.548C623.081 136.444 622.659 141.447 621.103 146.148Z" fill="#FBBEBE"/>
        <path id="Vector_11" d="M529.923 110.06C528.671 115.676 522.994 119.072 520.027 124.005C516.339 130.129 517.843 137.246 519.228 144.26C516.698 146.441 514.167 148.622 511.635 150.802C510.238 152.001 508.841 153.206 507.337 154.267C505.144 155.736 502.852 157.052 500.477 158.206C498.237 159.358 495.996 160.511 493.756 161.664C491.673 162.835 489.466 163.77 487.176 164.452C482.762 165.585 478.073 164.792 473.706 163.48C473.191 163.345 472.695 163.143 472.233 162.879C471.961 162.716 471.723 162.501 471.534 162.246C471.104 161.474 470.947 160.579 471.091 159.707C471.534 152.357 473.331 145.16 475.122 138.017C476.079 133.732 477.365 129.527 478.97 125.44C480.544 121.938 482.353 118.547 484.385 115.289C486.628 111.191 489.285 107.333 492.315 103.776C493.79 102.407 495.031 100.806 495.99 99.0369C497.107 96.4882 496.676 93.5649 496.903 90.7896C497.076 88.7045 497.629 86.6686 498.536 84.7827V84.7796C499.02 83.7638 499.604 82.7983 500.279 81.8973C500.584 82.6084 500.889 83.3185 501.195 84.0275C501.396 84.4932 501.595 84.9579 501.792 85.4215C502.05 86.0194 502.306 86.6152 502.56 87.2088C503.293 88.9143 504.025 90.6187 504.757 92.3221C505.547 94.4675 506.672 96.4739 508.092 98.2661C508.741 99.1838 509.617 99.9176 510.634 100.396C511.651 100.874 512.775 101.08 513.895 100.994C515.016 100.908 516.095 100.533 517.028 99.9055C517.96 99.2779 518.714 98.4192 519.215 97.4133C520.273 95.5357 521.039 93.5081 521.487 91.4001C522.109 88.8335 522.194 86.1663 521.739 83.565C520.981 78.5556 518.85 73.4392 517.302 68.7853C516.672 67.2336 516.307 65.587 516.223 63.9143C516.226 63.7264 516.245 63.539 516.279 63.3542C516.289 63.307 516.298 63.2567 516.308 63.2095C516.953 62.9058 517.624 62.6604 518.312 62.4763C518.702 62.3725 519.096 62.2875 519.492 62.2214C520.855 69.5971 522.219 76.9728 523.586 84.3485C523.617 84.5216 523.652 84.6947 523.684 84.8709C523.879 85.9281 524.077 86.9854 524.297 88.0395C524.495 88.9961 524.709 89.9495 524.948 90.8967L524.958 90.925C525.04 91.246 525.125 91.5638 525.213 91.8816L525.216 91.891C525.458 92.7595 525.729 93.6216 526.034 94.4712C527.884 99.5908 531.11 104.745 529.923 110.06Z" fill="#6C63FF"/>
        <path id="Vector_12" d="M605.267 188.993C605.209 190.075 605.419 191.154 605.877 192.136C607.039 194.259 609.827 194.742 612.24 194.941C626.332 196.099 640.51 195.667 654.505 193.653C655.265 193.601 656.001 193.372 656.657 192.985C658.647 191.59 657.42 188.19 655.247 187.102C653.074 186.013 650.496 186.276 648.112 185.804C645.743 185.208 643.488 184.23 641.434 182.908C636.599 180.13 631.835 177.234 627.141 174.22C624.346 172.425 621.048 170.51 617.901 171.574C609.376 174.458 605.211 179.796 605.267 188.993Z" fill="#3F3D56"/>
        <path id="right_hand" d="M501.383 82.9892V82.9923C501.361 83.1245 501.339 83.2535 501.311 83.3825C501.276 83.5965 501.235 83.8136 501.195 84.0275C500.804 86.0256 500.326 88.0143 499.775 89.9904C498.265 95.4498 496.242 100.821 494.234 106.114C488.847 120.305 483.459 134.497 478.07 148.691C476.711 152.265 475.354 155.843 473.809 159.345C473.293 160.513 472.762 161.689 472.233 162.879C470.339 167.136 468.52 171.532 467.916 176.063C467.353 179.045 467.288 182.1 467.724 185.103C468.328 188.074 470.131 190.975 472.954 192.073C474.332 192.611 476.305 193.332 475.927 194.764C475.723 195.55 474.829 195.934 474.027 196.066C472.967 196.235 471.883 196.169 470.852 195.872C469.821 195.575 468.868 195.055 468.061 194.348C466.553 193.011 465.395 190.931 463.391 190.708C462.003 190.557 460.726 191.387 459.454 191.969C454.269 194.339 448.227 192.681 442.781 190.997C443.208 188.791 445.424 187.338 447.623 186.897C449.823 186.453 452.098 186.768 454.341 186.708C455.06 186.747 455.773 186.563 456.383 186.183C456.931 185.68 457.315 185.025 457.485 184.301C458.93 180.019 460.005 175.621 460.697 171.155C461.421 166.488 461.723 161.749 462.755 157.139C463.558 153.543 464.797 150.06 465.861 146.529C467.918 139.26 469.606 131.892 470.921 124.452C471.585 121.362 472.061 118.233 472.346 115.085C472.526 112.473 472.441 109.849 472.692 107.246C473.115 103.861 473.821 100.517 474.804 97.2497C475.767 93.6845 476.728 90.1215 477.689 86.5606C479.115 81.29 480.644 75.8149 484.256 71.7179C485.511 70.2756 487.048 69.1064 488.773 68.2826C490.498 67.4588 492.374 66.998 494.285 66.9288C495.001 66.9279 495.715 67.0049 496.415 67.1585C496.531 67.1868 496.648 67.2151 496.764 67.2466C497.526 67.4459 498.258 67.7487 498.938 68.1465C500.052 67.4385 500.619 67.6871 501.358 68.779C502.006 69.9345 502.312 71.2509 502.239 72.5738C502.302 76.0655 502.015 79.5546 501.383 82.9892Z" fill="#FBBEBE"/>
        <path id="Vector_13" d="M502.607 87.1616L502.56 87.2088L502.305 87.4637L499.775 89.9904L498.536 84.7827L494.285 66.9287C495.001 66.9279 495.715 67.0049 496.415 67.1584C496.445 66.9539 496.495 66.7527 496.563 66.5574L496.764 67.2465L498.205 72.149L500.933 81.4567L501.383 82.9891V82.9923L502.607 87.1616Z" fill="#6C63FF"/>
        <path id="Vector_14" d="M518.661 30.2028C518.659 31.856 518.331 33.4926 517.696 35.019C517.061 36.5454 516.132 37.9317 514.961 39.0986C514.537 39.5234 514.082 39.9165 513.601 40.275C511.429 41.9119 508.784 42.7979 506.065 42.7991H490.969C487.633 42.794 484.436 41.4652 482.079 39.1047C479.722 36.7441 478.398 33.5447 478.398 30.2089C478.398 26.8732 479.722 23.6737 482.079 21.3132C484.436 18.9526 487.633 17.6239 490.969 17.6187H506.065C509.401 17.6274 512.598 18.9556 514.958 21.3134C517.318 23.6711 518.649 26.8668 518.661 30.2028V30.2028Z" fill="#2F2E41"/>
        <path id="Vector_15" d="M532.815 31.1516C539.94 31.1516 545.716 25.3756 545.716 18.2505C545.716 11.1253 539.94 5.34927 532.815 5.34927C525.69 5.34927 519.914 11.1253 519.914 18.2505C519.914 25.3756 525.69 31.1516 532.815 31.1516Z" fill="#2F2E41"/>
        <path id="Vector_16" opacity="0.1" d="M532.5 5.34927C532.342 5.34927 532.185 5.35556 532.028 5.36121C535.366 5.48254 538.526 6.89362 540.844 9.29756C543.162 11.7015 544.457 14.9109 544.457 18.2505C544.457 21.59 543.162 24.7994 540.844 27.2033C538.526 29.6073 535.366 31.0184 532.028 31.1397C532.185 31.1453 532.342 31.1516 532.5 31.1516C535.922 31.1516 539.203 29.7924 541.623 27.373C544.042 24.9535 545.401 21.6721 545.401 18.2505C545.401 14.8289 544.042 11.5474 541.623 9.12794C539.203 6.70851 535.922 5.34927 532.5 5.34927V5.34927Z" fill="black"/>
        <path id="Vector_17" opacity="0.1" d="M471.141 5.34927C471.299 5.34927 471.456 5.35556 471.613 5.36121C468.276 5.48254 465.116 6.89362 462.797 9.29756C460.479 11.7015 459.184 14.9109 459.184 18.2505C459.184 21.59 460.479 24.7994 462.797 27.2033C465.116 29.6073 468.276 31.0184 471.613 31.1397C471.456 31.1453 471.299 31.1516 471.141 31.1516C467.721 31.1486 464.443 29.7881 462.026 27.3689C459.609 24.9498 458.251 21.6701 458.251 18.2505C458.251 14.8308 459.609 11.5511 462.026 9.13196C464.443 6.71284 467.721 5.35228 471.141 5.34927Z" fill="black"/>
        <path id="Vector_18" opacity="0.1" d="M513.601 40.275C511.429 41.9119 508.784 42.7979 506.065 42.7991H490.969C488.25 42.7978 485.605 41.9119 483.433 40.275H513.601Z" fill="black"/>
        <path id="Vector_19" d="M611.086 133.756C611.086 133.756 614.338 143.128 617.315 140.632L614.942 128.382L611.086 133.756Z" fill="#FBBEBE"/>
        <path id="Vector_20" d="M484 337C493.389 337 501 327.15 501 315C501 302.85 493.389 293 484 293C474.611 293 467 302.85 467 315C467 327.15 474.611 337 484 337Z" fill="#2F2E41"/>
        <path id="Vector_21" d="M577 337C586.389 337 594 327.15 594 315C594 302.85 586.389 293 577 293C567.611 293 560 302.85 560 315C560 327.15 567.611 337 577 337Z" fill="#2F2E41"/>
        <path id="Vector_22" d="M565 380C565 389.94 551.12 398 534 398C516.88 398 503 389.94 503 380C503 371.39 513.41 364.19 527.32 362.43C529.535 362.138 531.766 361.995 534 362C537.743 361.988 541.476 362.391 545.13 363.2C556.75 365.79 565 372.34 565 380Z" fill="#2F2E41"/>
        <path id="Vector_23" d="M484.946 336.116C494.335 336.116 501.946 326.266 501.946 314.116C501.946 301.965 494.335 292.116 484.946 292.116C475.557 292.116 467.946 301.965 467.946 314.116C467.946 326.266 475.557 336.116 484.946 336.116Z" stroke="#3F3D56" stroke-miterlimit="10"/>
        <path id="Vector_24" d="M577.446 336.616C586.835 336.616 594.446 326.766 594.446 314.616C594.446 302.465 586.835 292.616 577.446 292.616C568.057 292.616 560.446 302.465 560.446 314.616C560.446 326.766 568.057 336.616 577.446 336.616Z" stroke="#3F3D56" stroke-miterlimit="10"/>
        <path id="Vector_25" d="M533.446 397.616C550.567 397.616 564.446 389.557 564.446 379.616C564.446 369.674 550.567 361.616 533.446 361.616C516.325 361.616 502.446 369.674 502.446 379.616C502.446 389.557 516.325 397.616 533.446 397.616Z" stroke="#3F3D56" stroke-miterlimit="10"/>
        <path id="Vector_26" d="M540.946 369.316C540.954 370.573 540.482 371.786 539.626 372.708C539.222 373.149 538.73 373.502 538.183 373.744C537.636 373.986 537.044 374.113 536.446 374.116H526.446C525.214 374.073 524.049 373.544 523.205 372.644C522.362 371.745 521.909 370.548 521.946 369.316C521.941 368.341 522.226 367.386 522.766 366.574C524.979 366.263 527.211 366.109 529.446 366.116C533.193 366.103 536.929 366.533 540.576 367.396C540.823 368.005 540.948 368.658 540.946 369.316V369.316Z" fill="white"/>
        <path id="left_eye" d="M488 313C490.761 313 493 310.761 493 308C493 305.239 490.761 303 488 303C485.239 303 483 305.239 483 308C483 310.761 485.239 313 488 313Z" fill="white"/>
        <path id="right_eye" d="M582 308C584.761 308 587 305.761 587 303C587 300.239 584.761 298 582 298C579.239 298 577 300.239 577 303C577 305.761 579.239 308 582 308Z" fill="white"/>
        </g>
        </svg>
        <div className="error_page">
          <div className="page_not_found">
          <p>PAGE NOT FOUND!</p>
          <i class="fa fa-frown"></i>
          </div>
          <button type="button" class="btn btn-outline-primary">
            <NavLink className="nav-link" to="/">Back to Home</NavLink></button>
        </div>
        </div>

    </>
  )
}
export default Errorpage;