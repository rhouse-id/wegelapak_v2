import OrderList from '@/components/order-history-1';

export default function OrdersPage() {
    return (
        <main className="container mx-auto px-6 py-12">
            {/* <h1 className="text-3xl font-bold mb-8">Products</h1> */}
            <OrderList />
        </main>
    );
}
