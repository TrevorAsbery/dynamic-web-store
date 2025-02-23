import { prisma } from '../../../lib/prisma';
import ProductList from '../../../components/ProductList';
import FilterPanel from '../../../components/FilterPanel';

async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Convert Decimal to number and format dates
    return products.map(product => ({
      ...product,
      price: Number(product.price),
      createdAt: product.createdAt.toISOString()
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Our Collection
        </span>
      </h1>
      <p className="text-gray-600 mb-8">Discover premium audio and wearable technology.</p>
      
      <div className="flex gap-8">
        <aside className="w-64 flex-shrink-0">
          <FilterPanel />
        </aside>
        
        <main className="flex-1">
          <ProductList products={products} />
        </main>
      </div>
    </div>
  );
}
