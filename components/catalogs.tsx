'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star } from 'lucide-react';
import { useState } from 'react';

const categories = [
    { id: 'all', name: 'All Products', count: 1247 },
    { id: 'electronics', name: 'Electronics', count: 324 },
    { id: 'clothing', name: 'Clothing', count: 189 },
    { id: 'home', name: 'Home & Garden', count: 156 },
    { id: 'books', name: 'Books', count: 97 },
    { id: 'sports', name: 'Sports', count: 134 },
    { id: 'toys', name: 'Toys', count: 78 },
    { id: 'health', name: 'Health & Beauty', count: 112 },
];

const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: null },
    { id: 'under-25', label: 'Under $25', min: 0, max: 25 },
    { id: '25-50', label: '$25 - $50', min: 25, max: 50 },
    { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
    { id: 'over-100', label: 'Over $100', min: 100, max: null },
];

const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'rating', label: 'Customer Rating' },
];

const sizeOptions = [
    { id: 'all', label: 'All Sizes' },
    { id: 's', label: 'Small' },
    { id: 'm', label: 'Medium' },
    { id: 'l', label: 'Large' },
    { id: 'xl', label: 'Extra Large' },
];

const colorOptions = [
    { id: 'all', label: 'All Colors' },
    { id: 'red', label: 'Red' },
    { id: 'blue', label: 'Blue' },
    { id: 'green', label: 'Green' },
    { id: 'black', label: 'Black' },
    { id: 'white', label: 'White' },
];

// Dummy product data
const products = [
    {
        id: 1,
        store: 'Toko Jaya',
        name: 'Wireless Headphones',
        rating: 4.8,
        price: 349000,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop',
        color: 'black',
        size: 'm',
        category: 'electronics',
    },
    {
        id: 2,
        store: 'Gadget Store',
        name: 'Smart Watch',
        rating: 4.6,
        price: 399000,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop',
        color: 'black',
        size: 's',
        category: 'electronics',
    },
    {
        id: 3,
        store: 'Fashion Hub',
        name: 'T-shirt Unisex',
        rating: 4.2,
        price: 99000,
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
        color: 'white',
        size: 'l',
        category: 'clothing',
    },
    {
        id: 4,
        store: 'Rumah Kita',
        name: 'Garden Chair',
        rating: 4.7,
        price: 259000,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop',
        color: 'green',
        size: 'xl',
        category: 'home',
    },
    {
        id: 5,
        store: 'Bookstore',
        name: 'Novel Fiksi',
        rating: 4.9,
        price: 59000,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
        color: 'blue',
        size: 'm',
        category: 'books',
    },
];

function formatRupiah(number: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}

export default function CategoryFilter2() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');

    const [selectedSort, setSelectedSort] = useState('featured');
    const [selectedSize, setSelectedSize] = useState('all');
    const [selectedColor, setSelectedColor] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const activeFilters = [];
    if (selectedCategory !== 'all') {
        const category = categories.find((c) => c.id === selectedCategory);
        if (category)
            activeFilters.push({
                type: 'category',
                label: category.name,
                value: selectedCategory,
            });
    }
    if (selectedPriceRange !== 'all') {
        const priceRange = priceRanges.find((p) => p.id === selectedPriceRange);
        if (priceRange)
            activeFilters.push({
                type: 'price',
                label: priceRange.label,
                value: selectedPriceRange,
            });
    }
    if (searchQuery) {
        activeFilters.push({
            type: 'search',
            label: `"${searchQuery}"`,
            value: searchQuery,
        });
    }

    const clearFilter = (type: string) => {
        if (type === 'category') setSelectedCategory('all');
        if (type === 'price') setSelectedPriceRange('all');
        if (type === 'search') setSearchQuery('');
        if (type === 'size') setSelectedSize('all');
        if (type === 'color') setSelectedColor('all');
    };

    const clearAllFilters = () => {
        setSelectedCategory('all');
        setSelectedPriceRange('all');
        setSelectedSize('all');
        setSelectedColor('all');
        setSearchQuery('');
    };

    // Filtering logic
    let filteredProducts = products.filter((p) => {
        let match = true;
        if (selectedCategory !== 'all')
            match = match && p.category === selectedCategory;
        if (selectedPriceRange !== 'all') {
            const range = priceRanges.find((r) => r.id === selectedPriceRange);
            if (range) {
                if (range.min !== null && p.price < range.min * 1000)
                    match = false;
                if (range.max !== null && p.price > range.max * 1000)
                    match = false;
            }
        }
        if (selectedSize !== 'all') match = match && p.size === selectedSize;
        if (selectedColor !== 'all') match = match && p.color === selectedColor;
        if (searchQuery)
            match =
                match &&
                p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return match;
    });

    // Sorting logic
    if (selectedSort === 'price-low')
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    if (selectedSort === 'price-high')
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    if (selectedSort === 'rating')
        filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);

    return (
        <section className="py-8">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-balance">
                        Product Catalog
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        Browse our collection of {filteredProducts.length}{' '}
                        products
                    </p>
                </div>
                <div className="flex gap-8">
                    {/* Sidebar kiri */}
                    <aside className="hidden w-full max-w-xs flex-shrink-0 md:block">
                        <div className="sticky top-8 space-y-6">
                            {/* Category */}
                            <div>
                                <h4 className="mb-2 font-semibold">Category</h4>
                                <ul className="space-y-1">
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Button
                                                variant={
                                                    selectedCategory ===
                                                    category.id
                                                        ? 'default'
                                                        : 'ghost'
                                                }
                                                size="sm"
                                                className="w-full justify-between"
                                                onClick={() =>
                                                    setSelectedCategory(
                                                        category.id,
                                                    )
                                                }
                                            >
                                                <span>{category.name}</span>
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {category.count}
                                                </Badge>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Price Range */}
                            <div>
                                <h4 className="mb-2 font-semibold">
                                    Price Range
                                </h4>
                                <ul className="space-y-1">
                                    {priceRanges.map((range) => (
                                        <li key={range.id}>
                                            <Button
                                                variant={
                                                    selectedPriceRange ===
                                                    range.id
                                                        ? 'default'
                                                        : 'ghost'
                                                }
                                                size="sm"
                                                className="w-full justify-between"
                                                onClick={() =>
                                                    setSelectedPriceRange(
                                                        range.id,
                                                    )
                                                }
                                            >
                                                {range.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Sort Option */}
                            <div>
                                <h4 className="mb-2 font-semibold">Sort By</h4>
                                <ul className="space-y-1">
                                    {sortOptions.map((option) => (
                                        <li key={option.id}>
                                            <Button
                                                variant={
                                                    selectedSort === option.id
                                                        ? 'default'
                                                        : 'ghost'
                                                }
                                                size="sm"
                                                className="w-full justify-between"
                                                onClick={() =>
                                                    setSelectedSort(option.id)
                                                }
                                            >
                                                {option.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Size Option */}
                            <div>
                                <h4 className="mb-2 font-semibold">Size</h4>
                                <ul className="space-y-1">
                                    {sizeOptions.map((option) => (
                                        <li key={option.id}>
                                            <Button
                                                variant={
                                                    selectedSize === option.id
                                                        ? 'default'
                                                        : 'ghost'
                                                }
                                                size="sm"
                                                className="w-full justify-between"
                                                onClick={() =>
                                                    setSelectedSize(option.id)
                                                }
                                            >
                                                {option.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Color Option */}
                            <div>
                                <h4 className="mb-2 font-semibold">Color</h4>
                                <ul className="space-y-1">
                                    {colorOptions.map((option) => (
                                        <li key={option.id}>
                                            <Button
                                                variant={
                                                    selectedColor === option.id
                                                        ? 'default'
                                                        : 'ghost'
                                                }
                                                size="sm"
                                                className="w-full justify-between"
                                                onClick={() =>
                                                    setSelectedColor(option.id)
                                                }
                                            >
                                                {option.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Search */}
                            <div>
                                <h4 className="mb-2 font-semibold">Search</h4>
                                <div className="relative">
                                    <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            {/* Clear All */}
                            <div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full"
                                    onClick={clearAllFilters}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        </div>
                    </aside>
                    {/* Daftar produk */}
                    <main className="flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.length === 0 && (
                                <div className="col-span-full py-12 text-center text-muted-foreground">
                                    No products found.
                                </div>
                            )}
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex h-full flex-col rounded-lg bg-white p-4 shadow dark:bg-black/80"
                                >
                                    <div className="relative mb-4 h-48 w-full overflow-hidden rounded">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <span className="mb-1 text-xs text-muted-foreground">
                                            {product.store}
                                        </span>
                                        <h3 className="mb-1 font-semibold">
                                            {product.name}
                                        </h3>
                                        <div className="mb-2 flex items-center gap-1">
                                            <Star className="size-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">
                                                {product.rating}
                                            </span>
                                        </div>
                                        <div className="mb-3 text-lg font-bold">
                                            {formatRupiah(product.price)}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-auto w-full"
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
