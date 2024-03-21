import { Image } from "@nextui-org/react";
import { useGetDataByType } from "../../services/useGetDataByType";
import { useState, useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";

const CarouselComponent =  () => {
  const ref = sessionStorage.getItem("ref");
  const { data, loading, error, items } = useGetDataByType("destacados", ref && ref);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      setActiveIndex(nextIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, items]);

  return (
    <div
      className="mt-20 relative"
      style={{ minHeight: "90vh", maxHeight: "90vh" }}
    >
      {loading && (
        <CircularProgress
          className="min-w-full flex justify-center items-center"
          aria-label="Cargando..."
        />
      )}
      {error && (
        <p className="text-center flex justify-center items-center">
          Error: {error.message}
        </p>
      )}
      {items.map((item, index) => (
        <div
          key={index}
          className={`w-full absolute left-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            style={{ minHeight: "90vh", maxHeight: "90vh" }}
            className="w-screen object-cover"
            src={item.imageUrl}
            radius="none"
          />
          <div className="absolute bottom-64 left-40 z-10 font-bold">
            <h1 className="text-primary md:text-3xl lg:text-6xl transition-all duration-400">
              {item.title}
            </h1>
            <h1 className="text-white md:text-2xl lg:text-5xl transition-all duration-400">
              {item.subtitle}
            </h1>
          </div>
          <div className="absolute bottom-32 sm:left-40 md:left-60 z-10">
            {data.map((_, index) => (
              <button
                key={index}
                className={`${
                  activeIndex === index
                    ? "text-primary"
                    : "text-white"
                }  sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full focus:outline-none mx-2 font-extrabold text-xl text-center shadow-md`}
                onClick={() => setActiveIndex(index)}
              >{index + 1}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselComponent;
