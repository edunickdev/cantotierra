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
    <>
      {sections.map((section, index) => (
        <div key={index} className="col-span-6 py-20 px-10 text-xl">
          <div className="shadow-2xl p-10 rounded-3xl flex flex-col text-left">
            <h2 className="text-primary font-extrabold mb-5">
              {section.title}
            </h2>
            <span className="text-sm mb-5">{section.description}</span>
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
    </>
  );
};

export default MisionVision;
