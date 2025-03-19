"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const events = [
  {
    title: "Hackathon",
    description: "Compete in a 24-hour coding challenge and win exciting prizes!",
    image: "/event1.jpg",
  },
  {
    title: "Gaming Tournament",
    description: "Show your gaming skills in CS:GO, Valorant, and more!",
    image: "/event2.jpg",
  },
  {
    title: "Cultural Night",
    description: "Enjoy dance, music, and performances from talented artists!",
    image: "/event1.jpg",
  },
  {
    title: "Tech Talks",
    description: "Learn from industry experts about AI, Web3, and more!",
    image: "/event2.jpg",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-black-900 text-white text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Exciting Events at GRAFEST!
      </motion.h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-5xl mx-auto"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-black rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-gray-400 mt-2">{event.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;
