import { Image } from "@nextui-org/react";
import { images } from "../../../config/statics";

const Contacto = () => {
  const contacto = [
    {
      title: "Dirección:",
      content: "629 12th St, Modesto",
      subcontent: "CA 95354 Estados Unidos",
      urlImage: images.direccion,
    },
    {
      title: "Correo Electrónico:",
      content: "629 12th St, Modesto",
      subcontent: "CA 95354 Estados Unidos",
      urlImage: images.correo,
    },
    {
      title: "Teléfono:",
      content: "629 12th St, Modesto",
      subcontent: "CA 95354 Estados Unidos",
      urlImage: images.telefono,
    },
  ];

  return (
    <>
      <div className="col-span-12 grid grid-cols-12 p-20">
        <div className="col-span-6 pt-20 flex justify-center items-center">
          <iframe
            className="p-10"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2116.158863161673!2d-74.13110798932297!3d4.707602033231703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1710993846187!5m2!1ses-419!2sco"
            width="600"
            height="450"
          ></iframe>
        </div>
        <div className="col-span-6 flex flex-col justify-center items-center">
          <h2 className="text-primary text-5xl font-bold">Contactanos</h2>
          {contacto.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center w-full px-5"
              >
                <div className="flex w-full py-7 gap-x-5">
                  <Image width="40" height="40" src={item.urlImage} />
                  <span className="text-xl text-wrap">{item.title}</span>
                </div>
                <div className="flex w-full flex-col">
                  <span className="text-xl">{item.content}</span>
                  <span className="text-xl">{item.subcontent}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contacto;
