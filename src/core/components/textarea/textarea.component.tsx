import { bind } from "../../styles/bind";
import styles from "./textarea.module.scss";
const cn = bind(styles);

import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <textarea
      aria-label={props.name}
      {...props}
      className={cn("textarea", props.className)}
    />
  );
};
