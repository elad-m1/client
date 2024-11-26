// Interfaces
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ReactNode} from "react";

export interface Country {
  name: string;
  region: string;
  timezones: any;
  iso: any;
  phone: string[];
  emoji: string;
  image: string;
}

export interface CartItem {
  id: string;
  name: string;
  imageUrls: string[];
  price: number;
  rating: number;
  quantity: number;
}

export interface CreditCard {
  id: string;
  ccName: string;
  ccNumber: string;
  cvv: string;
  expDate: string;
}

export interface Setting {
  icon: IconProp;
  text: string;
  endElement?: ReactNode;
  onPress?: () => void;
}

// Enums

export enum RANK {
  JUNIOR = 1,
  RISING_STAR = 2,
  STYLIST = 3,
  PROFESSIONAL = 4,
  KALI_KING = 5,
  KALI_MASTER = 6
}
