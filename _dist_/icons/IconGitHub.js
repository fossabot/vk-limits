function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
const svgStyle = {
  display: 'block'
};

const IconGitHub = ({
  width,
  height,
  className,
  style,
  fill,
  getRootRef,
  ...restProps
}) => {
  const size = Math.max(width || 24, height || 24);
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: `Icon Icon--${size} Icon--w-${width} Icon--h-${height} ${className}`,
    style: { ...style,
      width,
      height
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    style: { ...svgStyle,
      fill: 'currentColor',
      color: fill
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.0479 2.00001C9.6626 1.99759 7.35436 2.84122 5.53687 4.37972C3.71938 5.91822 2.51144 8.05101 2.12952 10.3959C1.7476 12.7408 2.21666 15.1445 3.45265 17.1762C4.68864 19.208 6.61076 20.735 8.87457 21.4836C9.37984 21.5756 9.55853 21.2627 9.55853 20.9988C9.55853 20.7349 9.55853 20.1335 9.55853 19.299C6.75488 19.9065 6.16334 17.9551 6.16334 17.9551C5.97734 17.3502 5.5822 16.8306 5.04803 16.4884C4.14224 15.8748 5.12198 15.8748 5.12198 15.8748C5.4395 15.9194 5.74265 16.0355 6.00847 16.2141C6.2743 16.3927 6.49583 16.6292 6.65629 16.9057C6.79262 17.1519 6.97644 17.3689 7.19718 17.5441C7.41792 17.7194 7.67124 17.8496 7.94261 17.9271C8.21397 18.0046 8.49804 18.0281 8.77852 17.996C9.05899 17.9639 9.33035 17.877 9.57702 17.7403C9.61569 17.2354 9.83423 16.761 10.1932 16.4025C7.96261 16.1509 5.62109 15.2918 5.62109 11.4933C5.60577 10.501 5.97421 9.54081 6.65012 8.81158C6.34909 7.9488 6.38427 7.00491 6.74871 6.16673C6.74871 6.16673 7.59289 5.89672 9.50924 7.19153C11.1548 6.74158 12.8918 6.74158 14.5373 7.19153C16.4537 5.89672 17.2917 6.16673 17.2917 6.16673C17.6612 6.99604 17.7052 7.93316 17.4149 8.79317C18.0908 9.5224 18.4593 10.4826 18.444 11.4748C18.444 15.3163 16.0963 16.157 13.8595 16.3841C14.0994 16.6242 14.2846 16.9129 14.4026 17.2305C14.5206 17.5481 14.5687 17.8873 14.5435 18.2251C14.5435 19.5628 14.5435 20.6429 14.5435 20.9681C14.5435 21.2933 14.7222 21.5449 15.2336 21.4468C17.4717 20.6784 19.365 19.1471 20.5792 17.1232C21.7933 15.0994 22.2502 12.7133 21.869 10.3865C21.4878 8.05974 20.2932 5.94199 18.4961 4.40739C16.699 2.8728 14.4151 2.02013 12.0479 2.00001V2.00001Z"
  })));
};

IconGitHub.defaultProps = {
  className: '',
  width: 24,
  height: 24,
  style: {}
};
export default IconGitHub;