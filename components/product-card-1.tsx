import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';

// Sample product data - Added originalPrice
const products = [
    {
        id: 1,
        title: 'Wireless Headphones',
        description: 'Premium noise-cancelling experience',
        price: 349.0,
        originalPrice: 399.0,
        rating: 5,
        reviews: 121,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Smart Watch',
        description: 'Health and fitness companion',
        price: 399.0,
        originalPrice: 449.0,
        rating: 5,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Laptop Pro',
        description: 'Power and performance redefined',
        price: 1299.0,
        originalPrice: 1499.0,
        rating: 5,
        reviews: 89,
        image: 'https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?q=80&w=736&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'RGB Keyboard',
        description: 'Mechanical RGB backlit keyboard',
        price: 159.0,
        originalPrice: 199.0,
        rating: 5,
        reviews: 92,
        image: 'https://plus.unsplash.com/premium_photo-1761316008887-673d53bed151?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Gaming Monitor',
        description: '144Hz refresh rate display',
        price: 699.0,
        originalPrice: 799.0,
        rating: 5,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1642655825268-137758d008e8?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Smartphone Pro',
        description: 'Pro camera system, ProMotion',
        price: 999.0,
        originalPrice: 1099.0,
        rating: 5,
        reviews: 245,
        image: 'https://images.unsplash.com/photo-1729514552998-cdb2975826cf?q=80&w=1074&auto=format&fit=crop',
    },
];

const hargaRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Rupiah biasanya tanpa desimal
    }).format(number);
};

const MAX_ITEMS = 6;

const ProductCard1 = () => {
    const displayedProducts = products.slice(0, MAX_ITEMS);

    return (
        <section className="w-full px-8 py-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-balance text-green-600 md:text-3xl">
                Best Deals For You!
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-6">
                {displayedProducts.map((product) => (
                    <Card
                        key={product.id}
                        className="flex h-full min-h-[340px] flex-col overflow-hidden rounded-lg shadow-none transition-shadow duration-300 hover:shadow-md"
                    >
                        <div className="relative flex flex-1 flex-col justify-end">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                                loading="lazy"
                            />
                            <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-white/90 via-white/70 to-white/10 p-4 dark:from-black/80 dark:via-black/40 dark:to-black/10">
                                <h3 className="mb-1 font-medium text-balance">
                                    {product.title}
                                </h3>
                                <p className="mb-2 text-sm text-muted-foreground">
                                    {product.description}
                                </p>
                                <div className="mt-auto flex items-baseline gap-2">
                                    <p className="font-semibold">
                                        {hargaRupiah(product.price)}
                                    </p>
                                    {product.originalPrice && (
                                        <p className="text-sm text-muted-foreground line-through md:text-base xl:text-sm 2xl:text-base">
                                            {hargaRupiah(product.originalPrice)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <CardFooter className="bg-white px-3 md:px-4 dark:bg-black/80">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full cursor-pointer text-sm"
                            >
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProductCard1;
