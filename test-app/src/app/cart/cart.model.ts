export interface CartItem {
  id: string;
  name: string;
  price: string;
}

export function createCartItem(params: Partial<CartItem>) {
  return {
    id: "",
    name: "",
    price: "",
    ...params,
  };
}
