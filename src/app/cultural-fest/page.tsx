"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const culturalEvents = [
  {
    title: "Music Night",
    description: "Enjoy an evening of live music performances.",
    image: "/images/cultural1.jpg",
    link: "/events/music-night",
  },
  {
    title: "Dance Battle",
    description: "Watch incredible dancers compete for glory!",
    image: "/images/cultural2.jpg",
    link: "/events/dance-battle",
  },
  {
    title: "Art Exhibition",
    description: "Explore beautiful artworks from talented artists.",
    image: "/images/cultural3.jpg",
    link: "/events/art-exhibition",
  },
];

export default function CulturalFestPage() {
  const router = useRouter();

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Cultural Fest</h1>
      <p className="text-lg mb-8">Enjoy music, dance, and drama performances!</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturalEvents.map((event, index) => (
          <div key={index} className="bg-purple-900 text-white rounded-xl p-6 shadow-lg transition transform hover:scale-105">
            <Image 
              src={event.image} 
              alt={event.title} 
              width={400} 
              height={250} 
              className="rounded-lg mb-4 object-cover w-full h-52"
            />
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="text-sm mt-2">{event.description}</p>
            <button 
              className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300"
              onClick={() => router.push(event.link)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
