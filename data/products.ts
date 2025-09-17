import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Oak Dining Table",
    price: 2899,
    originalPrice: 3299,
    category: "dining",
    images: [
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg"
    ],
    description: "An exquisite handcrafted dining table made from premium oak wood. This stunning centerpiece combines traditional craftsmanship with modern elegance, perfect for hosting memorable family gatherings and dinner parties.",
    specifications: {
      "Material": "Solid Oak Wood",
      "Dimensions": "84\" L x 42\" W x 30\" H",
      "Finish": "Natural Oil Finish",
      "Seating": "Seats 8 people",
      "Weight": "180 lbs"
    },
    features: [
      "Hand-selected premium oak construction",
      "Traditional mortise and tenon joinery",
      "Natural oil finish highlights wood grain",
      "Expandable with leaf inserts",
      "Lifetime craftsmanship warranty"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Executive Mahogany Desk",
    price: 1899,
    category: "office",
    images: [
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
    ],
    description: "A sophisticated executive desk crafted from rich mahogany wood. Features elegant curved lines, spacious work surface, and built-in storage solutions for the modern professional.",
    specifications: {
      "Material": "Solid Mahogany Wood",
      "Dimensions": "60\" L x 30\" W x 30\" H",
      "Finish": "Rich Mahogany Stain",
      "Storage": "3 Drawers, 2 File Compartments",
      "Weight": "125 lbs"
    },
    features: [
      "Premium mahogany construction",
      "Soft-close drawer mechanisms",
      "Leather-lined work surface",
      "Built-in cable management",
      "Adjustable feet for stability"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Artisan Bookshelf",
    price: 1299,
    originalPrice: 1499,
    category: "storage",
    images: [
      "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg"
    ],
    description: "A beautifully crafted bookshelf that combines functionality with artistic design. Perfect for displaying your favorite books and decorative items with style.",
    specifications: {
      "Material": "Mixed Hardwoods",
      "Dimensions": "72\" H x 36\" W x 12\" D",
      "Finish": "Natural Walnut Stain",
      "Shelves": "5 Adjustable Shelves",
      "Weight": "95 lbs"
    },
    features: [
      "Mixed hardwood construction",
      "Adjustable shelf heights",
      "Anti-tip safety features",
      "Easy assembly design",
      "Scratch-resistant finish"
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Vintage Leather Armchair",
    price: 1599,
    category: "seating",
    images: [
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
    ],
    description: "A luxurious leather armchair with classic styling and modern comfort. Handcrafted with attention to every detail, this piece will age beautifully over time.",
    specifications: {
      "Material": "Top-grain Leather, Solid Wood Frame",
      "Dimensions": "32\" W x 34\" D x 42\" H",
      "Finish": "Rich Brown Leather",
      "Features": "Nailhead Trim, Carved Wood Legs",
      "Weight": "65 lbs"
    },
    features: [
      "Top-grain leather upholstery",
      "Solid hardwood frame",
      "Hand-applied nailhead trim",
      "Ergonomic design for comfort",
      "Professional leather treatment"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Modern Coffee Table",
    price: 899,
    category: "living",
    images: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      "https://images.pexels.com/photos/2062428/pexels-photo-2062428.jpeg"
    ],
    description: "A sleek and contemporary coffee table that perfectly balances modern design with traditional woodworking techniques.",
    specifications: {
      "Material": "Solid Walnut Wood",
      "Dimensions": "48\" L x 24\" W x 16\" H",
      "Finish": "Satin Walnut Finish",
      "Features": "Hidden Storage Compartment",
      "Weight": "45 lbs"
    },
    features: [
      "Solid walnut construction",
      "Hidden storage compartment",
      "Smooth satin finish",
      "Modern minimalist design",
      "Sturdy construction"
    ],
    inStock: true
  },
  {
    id: 6,
    name: "Cherry Wood Nightstand",
    price: 599,
    category: "bedroom",
    images: [
      "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
      "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg"
    ],
    description: "An elegant nightstand crafted from beautiful cherry wood. Features smooth-operating drawers and timeless styling that complements any bedroom decor.",
    specifications: {
      "Material": "Solid Cherry Wood",
      "Dimensions": "24\" W x 18\" D x 26\" H",
      "Finish": "Natural Cherry Stain",
      "Storage": "2 Full-Extension Drawers",
      "Weight": "35 lbs"
    },
    features: [
      "Solid cherry wood construction",
      "Full-extension drawer slides",
      "Dovetail drawer joints",
      "Soft-close mechanisms",
      "Timeless design"
    ],
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'dining', name: 'Dining Room' },
  { id: 'living', name: 'Living Room' },
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'office', name: 'Office' },
  { id: 'storage', name: 'Storage' },
  { id: 'seating', name: 'Seating' }
];