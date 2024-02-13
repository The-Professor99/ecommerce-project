import Image from 'next/image';

interface Category {
  imageUrl: string;
  title: string;
  description: string;
  id: number;
}
async function FeatureComponent({ category }: { category: Category }) {
  return (
    <div className="flex max-w-lg flex-col space-y-6 overflow-hidden rounded-lg p-6 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div>
        <Image
          src={category.imageUrl}
          alt="lorem"
          width={860}
          height={960}
          className="mb-4 h-60 w-full object-cover sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{category.title}</h2>
        <p className="text-sm dark:text-gray-400">{category.description}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          See deals
        </a>
      </div>
    </div>
  );
}

export default async function FeatureB() {
  const categories: Category[] = [
    {
      title: 'Best Sellers',
      imageUrl: '/palms.png',
      description:
        'Explore our top picks from our eco-friendly shoe collection, featuring styles that have captured the hearts of our environmentally conscious customers. From classic favorites to trendy must-haves, discover the most loved sustainable footwear options that blend style, comfort, and eco-consciousness.',
      id: 1
    },
    {
      title: 'New Arrivals',
      imageUrl: '/bag.png',
      description:
        'Be the first to step into the latest additions to our eco-friendly shoe lineup! Stay ahead of the curve with our constantly evolving collection of new arrivals, showcasing innovative designs, sustainable materials, and fresh takes on eco-conscious footwear fashion.',
      id: 2
    },
    {
      title: "Today's Deals",
      imageUrl: '/hero.png',
      description:
        'Discover exclusive discounts and special offers on our eco-friendly shoes of the day. Take advantage of limited-time promotions and markdowns on a wide selection of sustainable footwear, allowing you to shop guilt-free while saving the planet and your wallet.',
      id: 3
    },
    {
      title: "Men's Collections",
      imageUrl: '/worn-palms.png',
      description:
        "Elevate your sustainable style with our carefully curated men's eco-friendly shoe collection. Find the perfect pair to complement your ethical fashion journey without compromising on quality or style.",
      id: 4
    },
    {
      title: "Women's Collections",
      imageUrl: '/fancy-palms.png',
      description:
        " Step into sustainable elegance with our women's eco-friendly shoe range. Explore a diverse selection of chic and eco-conscious footwear options, including sandals, heels, and flats, designed to empower your fashion choices while minimizing your environmental footprint.",
      id: 5
    },
    {
      title: 'Kids',
      imageUrl: '/bag.png',
      description:
        "Introduce your little ones to the world of sustainable fashion with our eco-friendly shoes for kids. From adorable sneakers to durable boots, our children's footwear collection combines playful designs with eco-conscious materials, ensuring that every step they take is a step towards a greener future.",
      id: 6
    }
  ];
  return (
    <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto my-6 space-y-2 p-4 text-center">
        <h2 className="text-5xl font-bold">The Ultimate Destination for Eco Friendly Footwear</h2>
        <p className="dark:text-gray-400">
          Our collection of shoes, inspired by the likes of Birkenstock, is crafted using recycled
          materials and eco-conscious manufacturing processes. With Eco Steps, you can step
          confidently knowing that you're making a positive impact on the planet without
          compromising on style
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 p-4  sm:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((category) => (
          <FeatureComponent category={category} key={category.id} />
        ))}
      </div>
    </section>
  );
}
