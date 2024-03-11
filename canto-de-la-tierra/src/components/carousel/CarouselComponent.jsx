import { Image } from "@nextui-org/react";
import { PrismicRichText, useFirstPrismicDocument } from "@prismicio/react";

const CarouselComponent = () => {
  const items = [
    {
      index: 1,
      pathUrl: "assets/1.jpg",
      title: "Reforzando identidades",
      subtitle1: "a través del arte,",
      subtitle2: "la musica y el deporte",
    },
    {
      index: 2,
      pathUrl: "assets/2.png",
      title: "Reforzando identidades",
      subtitle1: "a través del arte,",
      subtitle2: "la musica y el deporte",
    },
    {
      index: 3,
      pathUrl: "assets/3.jpg",
      title: "Reforzando identidades",
      subtitle1: "a través del arte,",
      subtitle2: "la musica y el deporte",
    },
  ];

  const [document] = useFirstPrismicDocument();

  console.log(document.data);

  return (
    <div>
      {items.map((item) => (
        <div key={item.index}>
          {document && <PrismicRichText field={document.data} />}
          <Image src={item.pathUrl} alt="carousel" width={500} height={500} />
          <h1>{item.title}</h1>
          <h2>{item.subtitle1}</h2>
          <h2>{item.subtitle2}</h2>
        </div>
      ))}
    </div>
  );
};

export default CarouselComponent;
