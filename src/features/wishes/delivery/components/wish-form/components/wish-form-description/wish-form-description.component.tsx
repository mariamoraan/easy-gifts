import React from "react";

import { useWishForm } from "../../context/wish-form.context";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { Textarea } from "../../../../../../../core/components/textarea/textarea.component";

const WishFormDescription: React.FC = () => {
  const { description, setDescription } = useWishForm();

  return (
    <>
      <Label htmlFor="fdescription">Descripción</Label>
      <Textarea
        id="fdescription"
        name="fdescription"
        placeholder="Collar de cordón con flor combinada en tejido."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  );
};

export default WishFormDescription;
