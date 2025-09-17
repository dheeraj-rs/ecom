import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-gray-900 min-h-[80vh] sm:min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 sm:opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg)'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-8 sm:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Crafted with
          <span className="text-amber-400 block mt-2">Excellence</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our collection of handcrafted furniture, where traditional woodworking meets modern design. 
          Each piece is a testament to quality, durability, and timeless beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <Link href="/products">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
              Explore Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}