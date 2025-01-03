import { PropsWithChildren } from "react";
import { WishFormProvider } from "../../context/wish-form.context";

export const WishFormWrapper = ({ children }: PropsWithChildren) => {
  return <WishFormProvider>{children}</WishFormProvider>;
};
