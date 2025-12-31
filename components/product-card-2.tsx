import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingBag, Star } from 'lucide-react';

type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
    category?: string;
};

export const products: Product[] = [
    {
        id: 1,
        title: 'Hampers Idul Fitri',
        image: 'https://plus.unsplash.com/premium_photo-1676977395612-65bda12179c3?q=80&w=687&auto=format&fit=crop',
        price: 399000,
        rating: 5,
        category: 'Hampers',
    },
    {
        id: 2,
        title: 'Hampers Natal',
        image: 'https://plus.unsplash.com/premium_photo-1671815629144-2ea0698bb3c9?q=80&w=687&auto=format&fit=crop',
        price: 399000,
        rating: 4,
        category: 'Hampers',
    },
    {
        id: 3,
        title: 'Basreng Sapi',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=686&auto=format&fit=crop',
        price: 399000,
        rating: 5,
        category: 'Cemilan',
    },
    {
        id: 4,
        title: 'Hampers Iedul Fitri',
        image: 'https://images.unsplash.com/photo-1711645973621-fc4929ed9d5a?q=80&w=687&auto=format&fit=crop',
        price: 399000,
        rating: 5,
        category: 'Hampers',
    },
    {
        id: 5,
        title: 'Eclax Cage Pack',
        image: 'https://plus.unsplash.com/premium_photo-1672363353941-bf6336d32b6b?q=80&w=687&auto=format&fit=crop',
        price: 39900,
        rating: 5,
        category: 'Eclax',
    },
    {
        id: 6,
        title: 'Eclax Cage Pack',
        image: 'https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25?q=80&w=687&auto=format&fit=crop',
        price: 399200,
        rating: 5,
        category: 'Eclax',
    },
    {
        id: 7,
        title: 'Es Cendol Premium',
        image: 'https://images.unsplash.com/photo-1592039017841-65201402f522?q=80&w=687&auto=format&fit=crop',
        price: 399000,
        rating: 4,
        category: 'Cold Drink',
    },
    {
        id: 8,
        title: 'Es Kelapa Jeruk',
        image: 'https://images.unsplash.com/photo-1722460228785-733ae3a0e8c8?q=80&w=735&auto=format&fit=crop',
        price: 399000,
        rating: 4,
        category: 'Cold Drink',
    },
];

const hargaRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Rupiah biasanya tanpa desimal
    }).format(number);
};
// const formatRupiah = (number) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 0, // Rupiah biasanya tanpa desimal
//   }).format(number);
// };

const ProductCard2 = () => {
    return (
        <section className="max-w-9xl mx-auto space-y-8 px-4 py-12 sm:px-8">
            <header className="space-y-2 text-center">
                <h2 className="text-3xl font-bold text-balance text-amber-600 sm:text-4xl">
                    Popular Products
                </h2>
                <p className="text-center text-balance text-muted-foreground">
                    This beloved product has become a favorite among our
                    customers for its exceptional features and unparalleled
                    performance
                </p>
            </header>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        className="group relative overflow-hidden transition-all hover:shadow-lg"
                    >
                        <div className="relative -mx-6 -mt-6">
                            <img
                                src={product.image}
                                alt={product.title}
                                width={400}
                                height={400}
                                className="aspect-square w-full rounded-none object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Badge category kiri atas */}
                            {product.category && (
                                <span className="absolute top-3 left-10 z-10">
                                    <Badge variant="secondary">
                                        {product.category}
                                    </Badge>
                                </span>
                            )}
                            {/* Icon love kanan atas */}
                            <button
                                type="button"
                                className="absolute top-3 right-10 z-10 rounded-full bg-white/80 p-1.5 shadow hover:bg-white"
                            >
                                <Heart
                                    className="size-5 text-destructive"
                                    fill="none"
                                />
                            </button>
                        </div>
                        <CardContent className="space-y-2 pt-4">
                            <CardTitle className="line-clamp-1 text-lg font-semibold text-balance sm:text-xl">
                                {product.title}
                            </CardTitle>
                            <div
                                className="flex items-center gap-0.5"
                                aria-label={`${product.rating} out of 5 stars`}
                                role="img"
                            >
                                {Array.from({ length: product.rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            className="size-4 fill-foreground text-foreground sm:size-5"
                                        />
                                    ),
                                )}
                            </div>
                            <p className="text-lg font-semibold sm:text-xl">
                                {hargaRupiah(product.price)}
                            </p>
                            <Button className="mt-3 w-full bg-primary text-primary-foreground transition-colors hover:bg-amber-600">
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                {/* Call to Action */}
            </div>
            <footer className="w-full">
                <div className="mt-12 justify-center text-center lg:mt-0 lg:flex lg:items-center lg:px-6">
                    <Button
                        size="lg"
                        className="cursor-pointer gap-2 bg-amber-600 text-white hover:bg-amber-700"
                    >
                        <ShoppingBag className="size-5" />
                        View All Products
                    </Button>
                </div>
            </footer>
        </section>
    );
};

export default ProductCard2;
