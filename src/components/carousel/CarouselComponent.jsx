/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";
import { useGetDataByType } from "../../services/useGetDataByType";
import { useState, useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";
import { images } from "../../config/statics";
import { useNavbarState } from "../../store/navbarState";

const CarouselComponent =  ({ group }) => {

  const currentRoute = useNavbarState((state) => state.navbarState);
  const ref = sessionStorage.getItem("ref");
  const { data, loading, error, items } = useGetDataByType(group, ref && ref);
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
          size="lg"
          className="min-w-full flex justify-center items-center text-primary"
          aria-label="Cargando..."
          style={{ minHeight: "90vh", maxHeight: "90vh" }}
        />
      )}
      {!loading &&
        items.map((item, index) => (
          <div
            key={index}
            className={`w-full absolute left-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              width={"100%"}
              style={{ minHeight: "90vh", maxHeight: "90vh" }}
              src={item.imageUrl}
              radius="none"
              className="object-cover"
            />
            {currentRoute !== "Inicio" ? (
              <div className="absolute inset-0 bottom-0 bg-gradient-to-b from-transparent to-black z-10 opacity-50"></div>
            ) : null}
            <div
              className={`${
                currentRoute === "Inicio" ? "bottom-64" : "bottom-44"
              } absolute left-20 z-10 font-bold`}
            >
              <h1
                className={`${
                  currentRoute === "Inicio" ? "text-primary" : "text-white"
                } z-20 text-2xl lg:text-5xl transition-all duration-400 py-4`}
              >
                {item.title}
              </h1>
              <h1
                className={`${
                  currentRoute === "Inicio"
                    ? "text-2xl lg:text-4xl"
                    : "text-[18px] pr-32"
                } z-20 text-white transition-all duration-400`}
              >
                {item.subtitle}
              </h1>
            </div>
            <div className="absolute bottom-32 md:left-20 z-10">
              {data.map((_, index) => (
                <button
                  key={index}
                  className={`${
                    activeIndex === index ? "text-primary" : "text-white"
                  } lg:h-5 lg:w-5 rounded-full focus:outline-none mx-2 font-extrabold text-xl text-center shadow-md z-20`}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            {currentRoute === "Inicio" ? (
              <div className="absolute bottom-14 right-20">
                <Image height={200} width={200} src={images.logo2} />
              </div>
            ) : null}
            {error && (
              <p className="text-center flex justify-center items-center">
                Error: {error.message}
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default CarouselComponent;
