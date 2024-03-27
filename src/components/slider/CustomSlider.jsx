/* eslint-disable react/prop-types */
import { CircularProgress, Image } from "@nextui-org/react";
import { images } from "../../config/statics";
import Slider from "react-slick/lib/slider";
import { useRef } from "react";

const CustomSlider = ({ loading, settings, child }) => {

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="col-span-12 grid grid-cols-12 items-center">
      <Image
        className="col-span-1 self-end cursor-pointer"
        src={images.flecha2}
        onClick={previousSlide}
      />
      <div className="col-span-10 self-center">
        <Slider ref={sliderRef} {...settings}>
          {loading && (
            <CircularProgress
              className="min-w-full flex justify-center items-center"
              aria-label="Cargando..."
            />
          )}
          {!loading && child}
        </Slider>
      </div>
      <Image
        className="col-span-1 self-start cursor-pointer"
        src={images.flecha1}
        onClick={nextSlide}
      />
    </div>
  );
};

export default CustomSlider;
