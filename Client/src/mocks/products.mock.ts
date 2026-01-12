import type { Product } from '@/components/product';

export const productsMock: Product[] = [
  {
    id: 'prod_001',
    name: 'patron cardigan',
    price: 78,
    imageUrl: '/images/products/cardigan.webp',
    currency: 'USD',
  },
  {
    id: 'prod_002',
    name: 'Relaxed Fit Cargo Pants',
    price: 92,
    imageUrl: '/images/products/hoodie.png',
    currency: 'USD',
  },
  {
    id: 'prod_003',
    name: 'Classic Logo Tee',
    price: 38,
    imageUrl: '/images/products/logo-tee-1.jpg',
    currency: 'USD',
  },
  {
    id: 'prod_004',
    name: 'Minimal Leather Sneakers',
    price: 140,
    imageUrl: '/images/products/sneakers-1.jpg',
    currency: 'USD',
  },
];
