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
  imageUrl: string;
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
