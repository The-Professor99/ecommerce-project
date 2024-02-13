import type { DummyProduct } from './shopify/types';

const firstProduct: DummyProduct = {
  id: '2',
  availableForSale: true,
  title: 'Quality black bag',
  description: 'Quality black palms',
  priceRange: {
    maxVariantPrice: {
      amount: '32000',
      currencyCode: 'ngn'
    },
    minVariantPrice: {
      amount: '30000',
      currencyCode: 'ngn'
    }
  },
  featuredImage: {
    url: '/bag.png',
    altText: 'alt text',
    width: 489,
    height: 489
  }
};

const secondProduct: DummyProduct = {
  id: '1',
  availableForSale: true,
  title: 'Quality black palms',
  description: 'Quality black palms',
  priceRange: {
    maxVariantPrice: {
      amount: '50000',
      currencyCode: 'ngn'
    },
    minVariantPrice: {
      amount: '50000',
      currencyCode: 'ngn'
    }
  },
  featuredImage: {
    url: '/hero.png',
    altText: 'alt text',
    width: 489,
    height: 489
  }
};

const thirdProduct: DummyProduct = {
  id: '3',
  availableForSale: true,
  title: 'Normal black palms',
  description: 'Normal black palms',
  priceRange: {
    maxVariantPrice: {
      amount: '25000',
      currencyCode: 'ngn'
    },
    minVariantPrice: {
      amount: '20000',
      currencyCode: 'ngn'
    }
  },
  featuredImage: {
    url: '/palms.png',
    altText: 'alt text',
    width: 489,
    height: 489
  }
};

export default async function getDummyProducts() {
  const products = [firstProduct, secondProduct, thirdProduct];
  return products;
}
