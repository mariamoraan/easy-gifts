import React from "react";
import styles from "./input.module.scss";
import { bind } from "../../styles/bind";
const cn = bind(styles);

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: Props) => {
  return (
    <input
      aria-label={props.name}
      {...props}
      className={cn("input", props.className)}
    />
  );
};
