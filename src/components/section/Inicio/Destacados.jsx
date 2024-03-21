import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { images } from "../../../config/statics";
import { CircularProgress, Image } from "@nextui-org/react";
import { useGetDataByType } from "../../../services/useGetDataByType";

const Destacados = () => {
  const sliderRef = useRef(null);

  const ref = sessionStorage.getItem("ref");
  const { data, loading } = useGetDataByType("galeria", ref && ref);

  console.log(data);

  const settings = {
    className: "center col-span-2",
    AnimationEffect: "fade",
    infinite: true,
    centerPadding: "60px",
    lazyLoad: true,
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <h2 className="col-span-12 h-20 pt-24 pb-12 text-primary text-5xl text-center">
        Galeria Audiovisual
      </h2>
      <div className="col-span-12 grid grid-cols-12 px-10 items-center pt-20">
        <div className="col-span-12 grid grid-cols-12 items-center">
          <Image
            className="col-span-1 self-end cursor-pointer"
            src={images.flecha2}
            onClick={previousSlide}
          />
          <div className="col-span-10 items-center h-[450px]">
            <Slider ref={sliderRef} {...settings}>
              {loading && (
                <CircularProgress
                  className="min-w-full flex justify-center items-center"
                  aria-label="Cargando..."
                />
              )}
              {data.map((index) => {
                return (
                  <div key={index} className="p-3 h-[594px] w-[400px]">
                    <div className="p-5">
                      <Image
                        width={450}
                        height={600}
                        radius="none"
                        src={index.data.urlimage.url}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Image
            className="col-span-1 self-start cursor-pointer"
            src={images.flecha1}
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};

export default Destacados;
