"use client";

import Image from "next/image";

const images = [
  { src: "/images/hero/Kopf_Hein.jpg", alt: "Karneval 1" },
  { src: "/images/hero/Kopf2014_1.JPG", alt: "Karneval 2" },
  { src: "/images/dreigestirn/Dreigestirn%202023-2024.JPG", alt: "Dreigestirn" },
  { src: "/images/hero/Kopf2014_4.JPG", alt: "Karneval 3" },
  { src: "/images/dreigestirn/Dreigestin.JPG", alt: "Dreigestirn 2018" },
  { src: "/images/hero/Kopf_Indianerwagen.jpg", alt: "Indianerwagen" },
  { src: "/images/dreigestirn/Tolitaetpetra.jpg", alt: "Prinzessin Petra" },
  { src: "/images/dreigestirn/IMG_3069.jpg", alt: "Dreigestirn 2016" },
];

const duplicated = [...images, ...images];

export function ImageSlider() {
  return (
    <section className="w-full bg-[oklch(0.15_0.03_50)] py-12 overflow-hidden">
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: scroll-right 25s linear infinite;
        }
        .scroll-container {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="relative w-full flex items-center justify-center">
        <div className="scroll-container w-full max-w-7xl">
          <div className="infinite-scroll flex gap-4 w-max">
            {duplicated.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className="image-item flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
