import { Button, Checkbox, Image } from "@nextui-org/react";
import { images } from "../../config/statics";

const Footer = () => {
  const redes = [
    {
      icon: images.facebook,
      url: "https://www.facebook.com/",
      text: "Facebook",
    },
    {
      icon: images.instagram,
      url: "https://www.instagram.com/",
      text: "Instagram",
    },
    {
      icon: images.youtube,
      url: "https://www.youtube.com/",
      text: "Youtube",
    },
    {
      icon: images.email,
      url: "https://www.email.com/",
      text: "Email",
    },
  ];

  return (
    <footer className="col-span-12 flex sm:flex-wrap flex-col bg-tertiary">
      <div className="flex justify-around" style={{ height: "48vh" }}>
        <div className="w-full px-32 py-20">
          <h2 className="text-primary text-3xl">Nuestras Redes</h2>
          <span className="text-white text-2xl">
            Incididunt pariatur adipisicing sit amet culpa ipsum do ut aliquip
            commodo fugiat.
          </span>
          {redes.map((item, index) => {
            return (
              <div key={index} className="flex items-center my-1">
                <Image height={30} width={30} src={item.icon} />
                <span className="text-lg text-white px-5">{item.text}</span>
              </div>
            );
          })}
        </div>
        <div className="bg-tertiary w-full px-32 py-10">
          <div className="flex flex-col">
            <span className="text-primary py-1">Nombres y Apellidos</span>
            <input
              className="h-10 px-2 py-1"
              placeholder="Nombres y Apellidos"
              type="text"
            />
          </div>
          <div className="flex gap-x-2">
            <div className="flex flex-col w-full">
              <span className="text-primary py-1">Correo</span>
              <input
                className="h-10 px-2 py-1"
                type="email"
                placeholder="Correo"
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="text-primary py-1">Teléfono</span>
              <input
                className="h-10 px-2 py-1"
                type="number"
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-primary py-1">Dejanos un mensaje</span>
            <textarea
              className="px-2 py-1"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Mensaje"
            ></textarea>
            <div className="flex justify-between items-center py-2">
              <div>
                <Checkbox defaultSelected color="primary" />
                <span className="px-2 text-tiny text-white h-8 w-8">
                  * Aceptar términos y condiciones
                </span>
              </div>
              <Button
                radius="full"
                className="p-3 bg-primary text-white text-xl px-10"
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-primary" style={{ height: "10vh" }}></div>
    </footer>
  );
};

export default Footer;
