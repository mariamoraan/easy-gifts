import WishForm from "../../components/wish-form/wish-form.component";
import { WishFormWrapper } from "../../components/wish-form/components/wish-form-wrapper/wish-form-wrapper.component";
import { Layout } from "../../../../../core/components/layout/layout.component";

export const CreateWishPage = () => {
  return (
    <Layout title={"Create a Wish"}>
      <WishFormWrapper>
        <WishForm>
          <WishForm.Name />
          <WishForm.Description />
          <WishForm.Images />
          <WishForm.Links />
        </WishForm>
      </WishFormWrapper>
    </Layout>
  );
};
