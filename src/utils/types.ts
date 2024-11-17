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
  key: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}
