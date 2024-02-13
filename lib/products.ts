const firstProduct = {
  id: '2',
  handle: 'dummy handle',
  availableForSale: true,
  title: 'Quality black bag',
  description: 'Quality black palms',
  descriptionHtml: '#',
  options: [{ id: '1', name: 'Option 1', values: ['value 1', 'value 2', 'value 3'] }],
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
  variants: {
    edges: [{ node: 'node 1' }]
  },
  featuredImage: {
    url: '/bag.png',
    altText: 'alt text',
    width: '489',
    height: '489'
  },
  images: {
    edges: [{ node: 'node 1' }]
  },
  seo: {
    title: 'product 2',
    description: 'dummy description'
  },
  tags: ['tag 1', 'tag 2'],
  updatedAt: 'updated today'
};

const secondProduct = {
  id: '1',
  handle: 'dummy handle',
  availableForSale: true,
  title: 'Quality black palms',
  description: 'Quality black palms',
  descriptionHtml: '#',
  options: [{ id: 'dummy handle 1', name: 'Option 1', values: ['value 1', 'value 2', 'value 3'] }],
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
  variants: {
    edges: [{ node: 'node 1' }]
  },
  featuredImage: {
    url: '/hero.png',
    altText: 'alt text',
    width: '489',
    height: '489'
  },
  images: {
    edges: [{ node: 'node 1' }]
  },
  seo: {
    title: 'product 1',
    description: 'dummy description'
  },
  tags: ['tag 1', 'tag 2'],
  updatedAt: 'updated today'
};

const thirdProduct = {
  id: '3',
  handle: 'dummy handle 3',
  availableForSale: true,
  title: 'Normal black palms',
  description: 'Normal black palms',
  descriptionHtml: '#',
  options: [{ id: '1', name: 'Option 1', values: ['value 1', 'value 2', 'value 3'] }],
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
  variants: {
    edges: [{ node: 'node 1' }]
  },
  featuredImage: {
    url: '/palms.png',
    altText: 'alt text',
    width: '489',
    height: '489'
  },
  images: {
    edges: [{ node: 'node 1' }]
  },
  seo: {
    title: 'product 3',
    description: 'dummy description'
  },
  tags: ['tag 1', 'tag 2'],
  updatedAt: 'updated today',
  edges: []
};

export default async function getDummyProducts() {
  const products = [firstProduct, secondProduct, thirdProduct];
  return products;
}
