import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Loader = () => {
  const [isAnimasi, setIsAnimasi] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [name, setName] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const toParam = urlParams.get("to");

    if (toParam) {
      setName(toParam);
    }
  }, []); //

  useEffect(() => {
    if (isScrollable) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  }, [isScrollable]);

  const handleClick = () => {
    setIsAnimasi(true);
    audioRef.current.play();
    setTimeout(() => {
      setIsScrollable(true); // Izinkan scroll setelah animasi selesai
    }, 1300);
  };

  return (
    <motion.section className="w-full h-screen flex absolute justify-center" initial={{ y: 0, opacity: 1 }} animate={isAnimasi ? { y: -1000, opacity: 1, transition: { duration: 1.5, delay: 0.3 } } : {}}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="flex w-[450px] h-screen items-center  bg-[url('/assets/bg/bg1.png')] bg-center bg-cover">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }} className="w-full h-64 mt-32 lg:mt-56 pl-24 lg:py-4 space-y-3">
          <h1 className="font-serif text-xl">The Wedding of</h1>
          <h2 className="font-extralight text-5xl font-serif">Raffi & Nagita</h2>
          <h3>Kepada Yth. Ibu/Bapak/Saudara/i</h3>
          <h4 className="font-bold">{name ? name : "Tamu Undangan"}</h4>
          <button className="bg-yellow-300 px-20 rounded-lg h-10 font-bold" onClick={handleClick}>
            Testing
          </button>
        </motion.div>
        <audio ref={audioRef} src="/assets/music/bunga-abadi.mp3" />
      </motion.div>
    </motion.section>
  );
};

export default Loader;
