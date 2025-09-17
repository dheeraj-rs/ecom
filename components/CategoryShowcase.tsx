import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Dining Room',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    description: 'Elegant dining tables and chairs for memorable gatherings'
  },
  {
    name: 'Living Room',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    description: 'Comfortable and stylish furniture for everyday relaxation'
  },
  {
    name: 'Office',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg',
    description: 'Professional furniture designed for productivity and style'
  },
  {
    name: 'Bedroom',
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg',
    description: 'Peaceful and functional pieces for your personal sanctuary'
  }
];

export function CategoryShowcase() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect furniture for every room in your home, each piece crafted with attention to detail and built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div 
                className="h-48 sm:h-56 lg:h-64 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 line-clamp-2">{category.description}</p>
                <Link href="/products">
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-gray-900 w-fit">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}