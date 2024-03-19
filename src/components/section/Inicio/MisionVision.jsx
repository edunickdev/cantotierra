import { Button } from "@nextui-org/react";

const MisionVision = () => {
  const sections = [
    {
      title: "Nuestra Misión",
      description:
        "Cantos de la Tierra es una fundación sin ánimo de lucro que, a través de la educación artística, musical y deportiva, refuerza la identidad de los niños y jóvenes de la vereda de Rumiyaco (Mocoa), ayudando al desarrollo de habilidades personales y aportando a la creación de su plan personal de vida por medio de talleres en diversas áreas de conocimiento que van en acuerdo con los saberes ancestrales de la región y la relación con la naturaleza.",
      button: "Leer más",
    },
    {
      title: "Nuestra Visión",
      description:
        "Cantos de la Tierra tiene la visión de consolidarse como un espacio cultural que facilita oportunidades de crecimiento integral y herramientas necesarias para la construcción de proyectos significativos de vida a niños y jóvenes en Mocoa, y a todos los habitantes del mundo que sientan el llamado a participar en la reconfiguración de dinámicas sociales para vivir en armonía.",
      button: "Leer más",
    },
  ];

  return (
    <div className="col-span-12 grid grid-cols-12 px-20 gap-5">
      {sections.map((section, index) => (
        <div
          key={index}
          className="col-span-6 flex justify-center items-center text-xl px-5"
        >
          <div className="shadow-large px-16 py-8 rounded-3xl flex flex-col text-left">
            <h2 className="text-primary font-extrabold mb-5 text-3xl">
              {section.title}
            </h2>
            <span className="text-sm mb-5 h-36">{section.description}</span>
            <Button
              className="w-28 text-tertiary"
              variant="light"
              fullWidth={false}
            >
              {section.button}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MisionVision;
