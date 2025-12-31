import ProductCatalog from '@/components/catalogs';

export default function ProductsPage() {
    return (
        <main className="container mx-auto px-6 py-12">
            {/* <h1 className="text-3xl font-bold mb-8">Products</h1> */}
            <ProductCatalog />
        </main>
    );
}
