import Image from "next/image";
import { useEffect, useState } from "react";

const AboutGrafest = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">About Grafest</h2>
      <p className="text-gray-600 mb-6">
        Grafest is an exciting design and innovation festival organized by The Designnovation Hub (TDH). 
        It brings together creative minds to explore the latest trends in design, technology, and innovation. 
        Join us to experience inspiring talks, workshops, and competitions.
      </p>
      
      <div className={`grid grid-cols-2 gap-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {["event1.jpg", "event2.jpg", "event2.jpg", "event1.jpg"].map((img, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105"
          >
            <Image 
              src={`/${img}`} 
              alt={`Grafest Image ${index + 1}`} 
              width={300} 
              height={200} 
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrafest;
