import { bind } from "../../styles/bind";
import styles from "./button.module.scss";
const cn = bind(styles);

interface Props {
  onClick?: () => void;
  children: React.ReactNode | string;
  outlined?: boolean;
  type?: "button" | "reset" | "submit";
  className?: string;
  name?: string;
  disabled?: boolean;
  importance?: "primary" | "secondary";
}

export const Button = (props: Props) => {
  const {
    children,
    onClick,
    type,
    outlined = false,
    className,
    name,
    disabled,
    importance = "primary",
  } = props;
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      className={cn(
        "button",
        {
          "button--primary": importance === "primary",
          "button--secondary": importance === "secondary",
          "button--outlined": outlined,
          "button--disabled": disabled,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
