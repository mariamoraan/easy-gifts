import React from "react";

import { useWishForm } from "../../context/wish-form.context";
import { Label } from "../../../../../../../core/components/label/label.component.";
import { Input } from "../../../../../../../core/components/input/input.component";

const WishFormName: React.FC = () => {
  const { name, setName } = useWishForm();

  return (
    <>
      <Label htmlFor="fname">Nombre</Label>
      <Input
        id="fname"
        name="fname"
        type="text"
        placeholder="Collar cordón flor"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default WishFormName;
