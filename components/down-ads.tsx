import Image from "next/image";

const ads = [
  {
    src: "/images/ads/iklan_GF-Header-1440x770_Dislat-Oktober.jpg",
    alt: "placeholder image 1",
  },
  {
    src: "/images/ads/iklan_GF-Header-1440x770_Dislat-Oktober.jpg",
    alt: "placeholder image 2",
  },
  {
    src: "/images/ads/iklan_GF-Header-1440x770_Dislat-Oktober.jpg",
    alt: "placeholder image 3",
  },
];

export default function DownAds() {
  return (
    <div className="mt-4 grid gap-6 md:grid-cols-3">
      {ads.map((ad, idx) => (
        <div key={idx} className="w-full h-auto flex items-center justify-center">
          <Image
            src={ad.src}
            alt={ad.alt}
            width={480}
            height={256}
            className="rounded-md dark:brightness-[0.95] dark:invert object-cover w-full h-auto"
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  );
}
