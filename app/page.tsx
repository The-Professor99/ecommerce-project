import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import FeatureA from 'components/home/featureA';
import FeatureB from 'components/home/featureB';
import Signup from 'components/home/signup';
import Footer from 'components/layout/footer';
import HeroSection from 'components/layout/hero';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureB />
      <FeatureA />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Signup />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
