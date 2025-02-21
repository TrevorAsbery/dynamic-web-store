import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed products
  await prisma.product.createMany({
    data: [
      {
        name: "MacBook Pro 16”",
        description: "Apple M2 Pro Chip, 16GB RAM, 512GB SSD",
        price: 2499.99,
        stock: 10,
        imageUrl: "https://example.com/macbook.jpg",
      },
      {
        name: "iPhone 15 Pro",
        description: "A17 Bionic Chip, 128GB Storage",
        price: 1099.99,
        stock: 15,
        imageUrl: "https://example.com/iphone.jpg",
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        description: "Noise-Canceling Wireless Headphones",
        price: 399.99,
        stock: 20,
        imageUrl: "https://example.com/sony.jpg",
      },
    ],
  });

  console.log("Database seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());