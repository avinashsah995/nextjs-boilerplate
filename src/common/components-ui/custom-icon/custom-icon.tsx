import classNames from "classnames";
import React from "react";

export type CustomIconProps = {
  icon: string;
  customClass?: string;
  customStyle?: any;
};

const CustomIcon = (props: CustomIconProps) => {
  const { icon, customClass, customStyle, ...rest } = props;
  return (
    <i
      aria-hidden
      {...rest}
      className={classNames(icon, customClass)}
      style={customStyle}
    ></i>
  );
};

export default CustomIcon;
