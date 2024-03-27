import { Button } from "@nextui-org/react";
import { images } from "../../../config/statics";

const Programs = () => {
  const content = [
    {
      title: "Música",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: images.artes1,
      color: "bg-primary"
    },
    {
      title: "Artes",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: images.artes2,
      color: "bg-tertiary"
    },
    {
      title: "Deportes",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: images.artes3,
      color: "bg-primary"
    },
    {
      title: "De la tierra",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: images.artes4,
      color: "bg-tertiary"
    },
  ];

  return (
    <div className="col-span-12 flex justify-around items-center px-24 gap-10">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col justify-between items-center h-[360px] shadow-md shadow-gray-600 p-8">
            <img width={100} height={100} src={item.image} alt={item.image} />
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <span>{item.content}</span>
            <Button className={`${item.color} text-white font-bold`}>Ver más</Button>
        </div>
      ))}
    </div>
  );
};

export default Programs;
