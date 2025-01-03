import React from "react";
import styles from "./label.module.scss";
import { bind } from "../../styles/bind";
const cn = bind(styles);

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label = (props: Props) => {
  return (
    <label {...props} className={cn("label", props.className)}>
      {props.children}
    </label>
  );
};
