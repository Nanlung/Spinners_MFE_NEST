export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wheel Spinner',
    price: 5.99,
    description: 'Fidget spinner that spins',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription: 'Wheel spinner is fun',
  },
  {
    id: 2,
    name: 'Rainbow Spinner',
    price: 6.99,
    description: 'Fidget rainbow spinner that spins',
    image: 'http://localhost:8080/fidget-2.jpg',
    longDescription: 'rainbow spinner spins lovely colors',
  },
];

export default products;
