import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const photos = [
  {
    src: "/images/photography/01-heron.png",
    width: 2200,
    height: 1203,
    alt: "An egret with an orange crest standing by the water",
  },
  {
    src: "/images/photography/04-hills-fog.png",
    width: 1440,
    height: 1648,
    alt: "A Kathakali performer in red and gold costume",
  },
  {
    src: "/images/photography/05-flowers.png",
    width: 3840,
    height: 2160,
    alt: "Fog rolling over a green hillside",
  },
  {
    src: "/images/photography/06-ivy.png",
    width: 1080,
    height: 1435,
    alt: "Close-up of variegated caladium leaves",
  },
  {
    src: "/images/photography/07-yellow-flower.png",
    width: 1068,
    height: 1452,
    alt: "A dense wall of green hedge leaves",
  },
  {
    src: "/images/photography/08-leaves.png",
    width: 1473,
    height: 1963,
    alt: "A single yellow flower among green leaves",
  },
  {
    src: "/images/photography/10-sunset.png",
    width: 512,
    height: 242,
    alt: "A dramatic sunset over the horizon",
  },
  {
    src: "/images/photography/12-gateway.png",
    width: 1649,
    height: 2200,
    alt: "Gateway of India in Mumbai",
  },
  {
    src: "/images/photography/13-charminar.png",
    width: 1080,
    height: 1443,
    alt: "Charminar monument in Hyderabad",
  },
  {
    src: "/images/photography/14-glass-roof.png",
    width: 1920,
    height: 2560,
    alt: "A geometric blue glass roof structure",
  },
  {
    src: "/images/photography/15-wooden-ceiling.png",
    width: 1650,
    height: 2200,
    alt: "A wooden truss walkway ceiling",
  },
  {
    src: "/images/photography/16-diamond-window.png",
    width: 1791,
    height: 2200,
    alt: "A diamond-shaped skylight viewed from below",
  },
  {
    src: "/images/photography/17-staircase.png",
    width: 1656,
    height: 2200,
    alt: "A spiral staircase viewed from above",
  },
  {
    src: "/images/photography/18-triangle-pattern.png",
    width: 1920,
    height: 2560,
    alt: "A triangular staircase pattern in teal",
  },
  {
    src: "/images/photography/20-foggy-forest.png",
    width: 1153,
    height: 1537,
    alt: "A circular pattern in black and white",
  },
  {
    src: "/images/photography/22-snowy-landscape.png",
    width: 2048,
    height: 1253,
    alt: "A small waterfall through bare tree branches",
  },
  {
    src: "/images/photography/23-misty-mountains.png",
    width: 1440,
    height: 1800,
    alt: "A waterfall in misty mountains",
  },
  {
    src: "/images/photography/24-peacock.png",
    width: 512,
    height: 289,
    alt: "A peacock walking along a stone wall",
  },
  {
    src: "/images/photography/IMG_0146.png",
    width: 3024,
    height: 4032,
    alt: "A full moon against a dark night sky",
  },
  {
    src: "/images/photography/IMG_0361.png",
    width: 1650,
    height: 2200,
    alt: "Close-up of an orange car's headlight and grille",
  },
  {
    src: "/images/photography/IMG_0399.png",
    width: 2200,
    height: 1650,
    alt: "A sleeping cat curled up on a window ledge, in black and white",
  },
  {
    src: "/images/photography/IMG_7021.jpg",
    width: 1920,
    height: 2560,
    alt: "A cargo ship on open blue water, seen from above",
  },
  {
    src: "/images/photography/KochiBoat.jpg",
    width: 6240,
    height: 4160,
    alt: "A silhouetted fishing boat and Chinese fishing nets at dusk",
  },
  {
    src: "/images/photography/KochiFishingPort.jpg",
    width: 6240,
    height: 4160,
    alt: "Chinese fishing nets by the water in Kochi",
  },
  {
    src: "/images/photography/SignInDubai%202.jpg",
    width: 6240,
    height: 4160,
    alt: "A bus stop sign for Dubai Gold Souk against traditional architecture",
  },
  {
    src: "/images/photography/Sunflowers2.jpg",
    width: 5961,
    height: 3974,
    alt: "A sunflower field in soft focus",
  },
  {
    src: "/images/photography/ColorCloth.jpg",
    width: 3492,
    height: 816,
    alt: "Shelves of rolled fabric in a rainbow of colors",
  },
  {
    src: "/images/photography/Ferrari%20Facade.jpg",
    width: 5552,
    height: 3701,
    alt: "A curved building facade with red-tinted glass windows",
  },
  {
    src: "/images/photography/Flower01-NoGrain.jpg",
    width: 5120,
    height: 3416,
    alt: "A close-up sunflower in a field",
  },
  {
    src: "/images/photography/IMG_20181108_101035.jpg",
    width: 3456,
    height: 4608,
    alt: "Coconut palm trees photographed looking straight up",
  },
  {
    src: "/images/photography/KochiStreetName.jpg",
    width: 6240,
    height: 4160,
    alt: "A blue Bastian Street sign against a colonial-era wall in Fort Kochi",
  },
  {
    src: "/images/photography/Sunflowers3.jpg",
    width: 5629,
    height: 3753,
    alt: "A sunflower amid a mixed flower bed",
  },
];

export default function Photography() {
  return (
    <>
      <SiteHeader active="photography" />

      <section className="px-6 pb-10 sm:px-10 md:px-14">
        <div className="mb-10 w-full max-w-xl px-6 py-6 sm:px-8 sm:py-8">
          <h1 className="font-clash text-5xl font-medium leading-none sm:text-6xl">
            Photography
          </h1>
          <Link
            href="/"
            className="font-mono-hero mt-4 inline-block text-sm text-secondary no-underline hover:text-accent hover:underline"
          >
            &larr; Back Home
          </Link>
        </div>

        <div className="columns-2 gap-5 sm:columns-3 lg:columns-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[4px] border border-foreground/70 shadow-[2px_4px_10px_-2px_rgba(0,0,0,0.35)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="block h-auto w-full"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="[word-break:break-word] flex flex-col items-center gap-2 rounded-lg border-2 border-foreground bg-white/70 px-6 py-4 text-center">
            <p className="text-2xl leading-none">
              And many, many more! :)
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="font-mono-hero text-sm text-secondary no-underline hover:text-accent hover:underline"
          >
            &larr; back home
          </Link>
        </div>
      </section>
    </>
  );
}
