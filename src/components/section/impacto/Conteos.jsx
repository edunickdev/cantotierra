/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";

const Contadores = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounters((prevCounters) => {
              const updatedCounters = prevCounters.map((counter, index) =>
                counter < getTargetValue(index) ? counter + 1 : counter
              );
              return updatedCounters;
            });
          }, 120);

          return () => clearInterval(interval);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTargetValue = (index) => {
    switch (index) {
      case 0:
        return 20;
      case 1:
        return 10;
      case 2:
        return 15;
      case 3:
        return 10;
      default:
        return 0;
    }
  };

  const counterLabels = [
    "Comunidades Apoyadas",
    "Lideres Colaboradores",
    "Premios y Reconocimientos",
    "Proyectos en ejecución",
  ];

  return (
    <div ref={ref} className="flex justify-around items-center col-span-12 bg-tertiary">
      {counters.map((counter, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <p className="text-white text-5xl font-semibold">+{counter}</p>
          <span className="text-primary text-wrap text-2xl px-5 text-center font-bold">
            <strong>{counterLabels[index]}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Contadores;
