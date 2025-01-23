import { createContext, SetStateAction, useContext, useState } from "react";
import { useCreateWish } from "../../../hooks/use-create-wish.hook";
import { useAuth } from "../../../../../auth/delivery/context/auth.context";
import { Wish, WishLink } from "../../../../domain/entities/wish.entity";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../../../core/router/routes";

export interface WishFormState {
  onSubmit: (e: React.SyntheticEvent) => void;
  onCancel: () => void | Promise<void>;
  imagesUrls: string[];
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  onAddImage: (imageUrl?: string) => void;
  onDeleteImage: (imageUrl: string) => void;
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<SetStateAction<string>>;
  isImagesModalOpen: boolean;
  setIsImagesModalOpen: React.Dispatch<SetStateAction<boolean>>;
  isLinksModalOpen: boolean;
  setIsLinksModalOpen: React.Dispatch<SetStateAction<boolean>>;
  onDeleteLink: (url: string) => void;
  links: WishLink[];
  setLinks: React.Dispatch<SetStateAction<WishLink[]>>;
  onAddLink: (link?: WishLink) => void;
  link: WishLink | undefined;
  setLink: React.Dispatch<SetStateAction<WishLink | undefined>>;
}

export const WishFormContext = createContext<WishFormState>({
  onSubmit: function (): void {
    throw new Error("Function not implemented.");
  },
  onCancel: function (): void {
    throw new Error("Function not implemented.");
  },
  imagesUrls: [],
  imageUrl: "",
  setImageUrl: function (): void {
    throw new Error("Function not implemented.");
  },
  onAddImage: function (): void {
    throw new Error("Function not implemented.");
  },
  onDeleteImage: function (): void {
    throw new Error("Function not implemented.");
  },
  name: "",
  setName: function (): void {
    throw new Error("Function not implemented.");
  },
  description: "",
  setDescription: function (): void {
    throw new Error("Function not implemented.");
  },
  isImagesModalOpen: false,
  setIsImagesModalOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  isLinksModalOpen: false,
  setIsLinksModalOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  onDeleteLink: function (): void {
    throw new Error("Function not implemented.");
  },
  links: [],
  setLinks: function (): void {
    throw new Error("Function not implemented.");
  },
  onAddLink: function (): void {
    throw new Error("Function not implemented.");
  },
  link: undefined,
  setLink: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const WishFormProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createWish } = useCreateWish();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);
  const [isImagesModalOpen, setIsImagesModalOpen] = useState(false);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const [links, setLinks] = useState<WishLink[]>([]);
  const [link, setLink] = useState<WishLink | undefined>(undefined);

  const onDeleteImage = (imageUrl: string) => {
    setImagesUrls((prev) => prev.filter((url) => imageUrl !== url));
  };
  const onAddImage = (imageUrl?: string) => {
    if (!imageUrl) return;
    setImagesUrls((prev) => [
      ...prev.filter((url) => url !== imageUrl),
      imageUrl,
    ]);
    setImageUrl("");
  };

  const onAddLink = (link?: WishLink) => {
    if (!link) return;
    setLinks((prev) => [...prev.filter(({ url }) => url !== link.url), link]);
    setLink(undefined);
  };

  const onDeleteLink = (url: string) => {
    setLinks((prev) => prev.filter((link) => link.url !== url));
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!user?.id) return;
    if (!name) return;
    const newWish: Omit<Wish, "id"> = {
      name,
      description,
      owner: user?.id,
      imagesUrls,
      links,
      creationDate: new Date().toUTCString(),
    };
    createWish(newWish);
  };
  const onCancel = () => navigate(AppRoutes.HOME);
  return (
    <WishFormContext.Provider
      value={{
        onSubmit,
        onCancel,
        imagesUrls,
        imageUrl,
        setImageUrl,
        onAddImage,
        onDeleteImage,
        name,
        setName,
        description,
        setDescription,
        isImagesModalOpen,
        setIsImagesModalOpen,
        isLinksModalOpen,
        setIsLinksModalOpen,
        links,
        setLinks,
        onDeleteLink,
        onAddLink,
        link,
        setLink,
      }}
    >
      {children}
    </WishFormContext.Provider>
  );
};

export const useWishForm = () => useContext(WishFormContext);
