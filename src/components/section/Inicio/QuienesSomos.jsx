import { Button, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const QuienesSomos = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="col-span-6 px-32 py-20 flex justify-center items-center">
        <Image
          className="min-h-96 max-h-96 min-w-80 max-w-80 object-cover"
          src="https://wallpapercave.com/wp/wp5531876.jpg"
          shadow="lg"
          radius="lg"
        />
      </div>
      <div className="col-span-6 px-32 py-20 flex flex-col justify-center items-end">
        <h2 className="text-4xl text-primary font-extrabold text-right mb-10">
          ¿Quienes Somos?
        </h2>
        <span className="text-right text-lg font-semibold mb-2">
          Cantos de la Tierra es una fundación sin ánimo de lucro que, a través
          de la educación artística, musical y deportiva, refuerza la identidad
          de los niños y jóvenes de la vereda de Rumiyaco (Mocoa), ayudando al
          desarrollo de habilidades personales y aportando a la creación de su
          plan personal de vida por medio de talleres en diversas áreas de
          conocimiento que van en acuerdo con los saberes ancestrales de la
          región y la relación con la naturaleza.
        </span>
        <Button
          className="bg-tertiary text-white px-12 rounded-3xl mb-2 text-lg font-bold"
          onPress={() => {
            navigate("/nosotros");
          }}
        >Ver más</Button>
      </div>
    </>
  );
};

export default QuienesSomos;
