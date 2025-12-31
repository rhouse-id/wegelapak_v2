import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

const hargaRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Rupiah biasanya tanpa desimal
  }).format(number);
};

const StorefrontHero1 = () => {
  const featuredProducts = [
    {
      id: "prod_001",
      sku: "WH-XB900N",
      name: "Otak-otak Ikan Tenggiri Spesial",
      brand: "Toko Nuri",
      price: 34500,
      originalPrice: 38000,
      rating: 4.8,
      reviewCount: 1247,
      inStock: true,
      isNew: true,
      isOnSale: false,
      image:
        "https://images.unsplash.com/photo-1631155986512-deb57fd69571?q=80&w=687&auto=format&fit=crop",
      colors: ["#000000", "#1E3A8A", "#991B1B"],
    },
    {
      id: "prod_002",
      sku: "SWP-2024",
      name: "Es Campur Premium Blender",
      brand: "Dapur Kita",
      price: 18040,
      originalPrice: 22000,
      rating: 4.9,
      reviewCount: 892,
      inStock: true,
      isNew: false,
      isOnSale: true,
      image:
        "https://images.unsplash.com/photo-1642653101681-0b7cdb802e60?q=80&w=735&auto=format&fit=crop",
      colors: ["#1F2937", "#F3F4F6", "#F59E0B"],
    },
  ];

  return (
    // <div className="relative overflow-hidden bg-linear-to-br from-primary/5 to-background"></div>
    <div className="relative overflow-hidden bg-linear-to-br from-amber-600 to-amber-50">
      <div className="lg::py-20 relative z-10 container mx-auto flex flex-col items-center justify-between gap-12 px-4 py-16 lg:px-12 xl:flex-row xl:items-start">
        {/* Left Content */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 xl:text-left">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            Event 6&apos;6 2026 Sale is Live!
          </div>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Dari Dapur Terbaik, Langsung{" "}
            <span className="bg-linear-to-r from-amber-600 to-amber-300/100 bg-clip-text text-transparent">
              ke Rumah Anda
            </span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground">
            Discover premium quality products designed for your everyday life.
            Experience the perfect blend of style, comfort, and innovation with
            our exclusive collection.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center xl:justify-start">
            <Button
              size="lg"
              className="group relative cursor-pointer overflow-hidden px-8 py-6 text-base font-medium"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group relative cursor-pointer overflow-hidden px-8 py-6 text-base font-medium"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingBag className="size-5" />
                View Offers
              </span>
            </Button>
          </div>
        </div>

        {/* Right Content - Product Showcase */}
        <div className="w-full max-w-2xl lg:mt-0">
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="relative h-full overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Product Badges */}
                <div className="absolute top-4 left-4 z-10 space-y-2">
                  {product.isNew && (
                    <div className="block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 shadow-sm">
                      New
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 shadow-sm">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                </div>

                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="rounded bg-white/90 px-3 py-1 text-sm font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-1 text-sm font-medium text-muted-foreground">
                    {product.brand}
                  </div>
                  <h3 className="mb-2 font-medium">{product.name}</h3>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="text-lg font-bold">
                      {hargaRupiah(product.price)}
                    </span>
                    {product.isOnSale && (
                      <span className="ms-2 text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Color Swatches */}
                  <div className="mb-4 flex items-center">
                    <span className="me-2 text-sm text-muted-foreground">
                      Colors:
                    </span>
                    <div className="flex gap-1">
                      {product.colors.map((color, i) => (
                        <button
                          key={i}
                          className="size-5 rounded-full border"
                          style={{
                            backgroundColor: color,
                          }}
                          aria-label={`Color option ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-foreground text-foreground"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ms-2 text-sm text-muted-foreground">
                      ({product.reviewCount.toLocaleString()})
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer"
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="me-0 size-4 xl:me-1" />
                      Add to Cart
                    </Button>
                    <Button
                      className="w-full cursor-pointer bg-orange-500 text-white hover:bg-orange-600"
                      disabled={!product.inStock}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-secondary/30 blur-3xl" />
    </div>
  );
};

export default StorefrontHero1;
