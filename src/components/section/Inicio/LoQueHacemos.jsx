import { Image } from "@nextui-org/react";
import { images } from "../../../config/statics";

const LoQueHacemos = () => {
  return (
    <>
      <div className="col-span-12 bg-green-400">
        <Image
          className="h-[435px] w-full py-5"
          radius="none"
          src={images.loquehacemos}
        />

        {/* <video controls autoPlay loop muted width={"100%"}>
        <source type="video/mp4" src={images.video1} />
      </video> */}
      </div>
    </>
  );
};

export default LoQueHacemos;
