import { DateTime } from "../../../../core/datetime/datetime";
import { Wish } from "../../../wishes/domain/entities/wish.entity";
import { Guest } from "./guest.entity";

export interface Event {
  id: string;
  name: string;
  description: string;
  guests: Guest[];
  wishes: Wish[];
  date?: DateTime;
}
