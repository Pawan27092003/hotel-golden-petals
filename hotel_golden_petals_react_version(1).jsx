import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HotelWebsite() {
  const heroRef = useRef(null);
  const roomsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // HERO intro
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
    });

    // ROOMS reveal on scroll
    gsap.from(".room-card", {
      scrollTrigger: {
        trigger: roomsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // FORM fade
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
  }, []);

  return (
    <div className="font-sans bg-[#FFFEF9] text-[#1E1E1E]">
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur border-b">
        <h1 className="text-xl font-serif tracking-widest">
          Golden <span className="text-yellow-600">Petals</span>
        </h1>
        <button className="bg-yellow-600 text-white px-4 py-2 text-sm">Book</button>
      </nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <div ref={heroRef} className="text-center">
          <h1 className="text-5xl md:text-7xl font-serif">
            Hotel <span className="text-yellow-500">Golden</span> Petals
          </h1>
          <p className="mt-4 text-sm tracking-widest">
            Where Every Stay Blooms with Luxury
          </p>
        </div>
      </section>

      {/* ROOMS */}
      <section ref={roomsRef} className="px-8 py-20 text-center">
        <h2 className="text-4xl font-serif mb-10">Rooms & Suites</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Deluxe", "Executive", "Suite"].map((room, i) => (
            <div key={i} className="room-card border p-4">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"
                className="h-48 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-serif">{room} Room</h3>
              <p className="text-sm mt-2">Luxury comfort stay</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="px-8 py-20 bg-[#FAF7F2] text-center">
        <h2 className="text-4xl font-serif mb-6">Book Your Stay</h2>

        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Booking Submitted 🚀");
          }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input type="date" className="border p-3" />
          <input type="date" className="border p-3" />
          <select className="border p-3">
            <option>1 Guest</option>
            <option>2 Guests</option>
          </select>
          <button className="bg-yellow-600 text-white px-6">
            Check
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6">
        © 2026 Hotel Golden Petals
      </footer>
    </div>
  );
}
