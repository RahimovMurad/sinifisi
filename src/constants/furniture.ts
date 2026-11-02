import { ImageSourcePropType } from 'react-native';
export const categories = ['All', 'Chair', 'Table', 'Lighting'] as const;
export type Category = typeof categories[number];
export type Product = { id: number; name: string; room: string; category: Exclude<Category, 'All'>; price: number; image: ImageSourcePropType; sale?: boolean };
export const products: Product[] = [
  { id: 1, name: 'Mondy chair', room: 'Office', category: 'Chair', price: 180, image: require('../../assets/images/chair.png'), sale: true },
  { id: 2, name: 'Sofa Footstool', room: 'Living Room', category: 'Chair', price: 320, image: require('../../assets/images/sofa.png') },
  { id: 3, name: 'Lounge Chair', room: 'Living Room', category: 'Chair', price: 245, image: require('../../assets/images/lounge.png'), sale: true },
  { id: 4, name: 'Nordic Side Table', room: 'Office', category: 'Table', price: 260, image: require('../../assets/images/table.jpg') },
  { id: 5, name: 'Bedside Table', room: 'Study Room', category: 'Table', price: 210, image: require('../../assets/images/table.jpg'), sale: true },
  { id: 6, name: 'Arc Floor Lamp', room: 'Living Room', category: 'Lighting', price: 89, image: require('../../assets/images/lighting.jpg') },
  { id: 7, name: 'Warm Studio Light', room: 'Bedroom', category: 'Lighting', price: 120, image: require('../../assets/images/lighting.jpg'), sale: true },
];
export function filterProducts(category: Category, query: string, saleOnly: boolean) {
  const term = query.trim().toLowerCase();
  return products.filter(item => (category === 'All' || item.category === category) && (!saleOnly || item.sale) && `${item.name} ${item.room} ${item.category}`.toLowerCase().includes(term));
}

