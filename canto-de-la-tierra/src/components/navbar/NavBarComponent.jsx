import {
  Navbar,
  NavbarItem,
  Image,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [active, setActive] = useState("Inicio");

  const handleActive = (value) => {
    setActive(value);
  };

  const items = ["Inicio", "Impacto", "Nosotros", "Aliados", "Noticias"];

  return (
    <Navbar>
      <Image
        src="https://m.media-amazon.com/images/M/MV5BOWRiMzRlZGUtNjA1Zi00OGJlLTg3Y2QtYjQ3MDNhOTQ1OWVjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_FMjpg_UX1000_.jpg"
        alt="logo"
        width={40}
        radius="full"
      />
      {items.map((item) => (
        <NavbarItem key={item}>
          <Link
            className={`${
              active == item ? "text-primary" : "text-black"
            } text-xl`}
            color={active == item ? "warning" : "foreground"}
            to={"/"+item.toLowerCase()}
            onClick={() => handleActive(item)}
          >
            {item}
          </Link>
          {active == item && <div className="bg-primary h-[3px] w-full "></div>}
        </NavbarItem>
      ))}
      <Button className="bg-primary text-white" >Donación</Button>
    </Navbar>
  );
}
