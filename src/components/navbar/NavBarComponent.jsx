import { Navbar, NavbarItem, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { images } from "../../config/statics";
import { useNavbarState } from "../../store/navbarState";

const NavBarComponent = () => {

  const selection = useNavbarState((state) => state.navbarState);
  const setSelection = useNavbarState((state) => state.setNavbarState);

  const handleActive = (value) => {
    setSelection(value);
  };

  const items = ["Inicio", "Impacto", "Nosotros", "Aliados"];

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
              selection == item ? "text-primary" : "text-black"
            } text-[24px]`}
            color={selection == item ? "warning" : "foreground"}
            to={"/" + item.toLowerCase()}
            onClick={() => handleActive(item)}
          >
            {item}
          </Link>
          {selection == item && (
            <div className="bg-primary h-[3px] w-full "></div>
          )}
        </NavbarItem>
      ))}
    </Navbar>
  );
};

export default NavBarComponent;
