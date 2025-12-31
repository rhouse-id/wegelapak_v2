// "use client";

import ProductOverview from "@/components/product-overview-1";

export default function ProductDetailPage() {
  // Dummy slug, selalu tampilkan ProductOverview1
  return (
    <main className="container mx-auto px-6 py-12">
      <ProductOverview />
    </main>
  );
}
