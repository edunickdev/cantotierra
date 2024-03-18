import { Navbar, NavbarItem, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../config/statics";

const NavBarComponent = () => {
  const [active, setActive] = useState("Inicio");

  const handleActive = (value) => {
    setActive(value);
  };

  const items = ["Inicio", "Impacto", "Nosotros", "Aliados"];

  useEffect(() => {
    const handleWebHookNotification = async () => {
      try {
        console.log("notificacion recibida");
      } catch (error) {
        console.log(error);
      }
    };
    handleWebHookNotification();
  }, []);

  return (
    <Navbar
      className="fixed top-0"
      style={{ height: "10vh" }}
      isBlurred={false}
    >
      <Image
        src={images.logo}
        alt="logo"
        width={71}
        height={72}
        radius="full"
      />
      {items.map((item) => (
        <NavbarItem key={item}>
          <Link
            className={`${
              active == item ? "text-primary" : "text-black"
            } text-[24px]`}
            color={active == item ? "warning" : "foreground"}
            to={"/" + item.toLowerCase()}
            onClick={() => handleActive(item)}
          >
            {item}
          </Link>
          {active == item && <div className="bg-primary h-[3px] w-full "></div>}
        </NavbarItem>
      ))}
    </Navbar>
  );
};

export default NavBarComponent;
