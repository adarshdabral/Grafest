import { ThreeDCard } from "./ThreeDCardProps";

const eventData = [
  {
    title: "Tech Fest",
    description: "Join us for an amazing event featuring AI, ML, and Cybersecurity.",
    image: "/event1.jpg",
    link: "/tech-fest",
  },

  {
    title: "Cultural Fest",
    description: "The amazing cultural events waits for you.",
    image: "/event2.jpg",
    link: "/cultural-fest",
  },
];

export default function EventsSection() {
  return (
    <section className="flex flex-wrap justify-center gap-8 p-8">
      {eventData.map((event, index) => (
        <ThreeDCard 
          key={index} 
          title={event.title} 
          description={event.description} 
          image={event.image} 
          link={event.link} 
        />
      ))}
    </section>
  );
}
