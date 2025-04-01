"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const techEvents = [
  {
    title: "AI Challenge",
    description: "Compete in an AI-powered challenge and test your skills.",
    image: "/images/tech1.jpg",
    link: "/events/ai-challenge",
  },
  {
    title: "Cyber Security Workshop",
    description: "Learn the latest in ethical hacking and cyber defense.",
    image: "/images/tech2.jpg",
    link: "/events/cyber-security",
  },
  {
    title: "Blockchain Summit",
    description: "Explore blockchain, crypto, and smart contracts.",
    image: "/images/tech3.jpg",
    link: "/events/blockchain",
  },
];

export default function TechFestPage() {
  const router = useRouter();

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Tech Fest</h1>
      <p className="text-lg mb-8">Explore AI, ML, Cybersecurity, and more!</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techEvents.map((event, index) => (
          <div key={index} className="bg-gray-900 text-white rounded-xl p-6 shadow-lg transition transform hover:scale-105">
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

