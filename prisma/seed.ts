import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding SONICTECH products...");

  // Clear existing products
  await prisma.product.deleteMany();

  // Seed products
  await prisma.product.createMany({
    data: [
      {
        name: "Premium Headphones",
        description: "Experience crystal-clear sound with our flagship over-ear headphones. Features active noise cancellation and premium materials.",
        price: 299.99,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        category: "headphones",
      },
      {
        name: "Smart Watch Pro",
        description: "Stay connected with our premium smartwatch. Features health tracking, notifications, and a beautiful OLED display.",
        price: 199.99,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        category: "watches",
      },
      {
        name: "Wireless Earbuds",
        description: "True wireless earbuds with exceptional sound quality and comfort. Perfect for workouts and daily use.",
        price: 159.99,
        imageUrl: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
        category: "headphones",
      },
      {
        name: "Fitness Tracker",
        description: "Track your health and fitness goals with our sleek fitness band. Features heart rate monitoring and sleep tracking.",
        price: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&q=80",
        category: "watches",
      },
      {
        name: "Gaming Headset",
        description: "Immerse yourself in gaming with our premium headset. Features surround sound and crystal-clear microphone.",
        price: 129.99,
        imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
        category: "headphones",
      },
      {
        name: "Luxury Watch",
        description: "A premium smartwatch with luxury design. Features sapphire crystal display and premium metal construction.",
        price: 399.99,
        imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
        category: "watches",
      },
      {
        name: "Portable Bluetooth Speaker",
        description: "Fill your space with rich, clear sound. Water-resistant and perfect for outdoor use.",
        price: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
        category: "speakers",
      },
      {
        name: "Professional Headphones",
        description: "Studio-quality headphones for professionals. Features flat frequency response and premium drivers.",
        price: 249.99,
        imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
        category: "headphones",
      },
      {
        name: "Sport Watch",
        description: "Designed for athletes. Features advanced workout tracking and durable construction.",
        price: 149.99,
        imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
        category: "watches",
      }
    ],
  });

  console.log("SONICTECH product seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());