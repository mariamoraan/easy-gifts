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
  } = props;
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      className={cn(
        "button",
        {
          "button--primary": !outlined,
          "button--outlined": outlined,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
