import Link from "next/link";

const menuRoutes = [
  {
    ruta: "/",
    nombre: "Inicio",
  },
  {
    ruta: "/about",
    nombre: "Acerca de",
  },
  {
    ruta: "/calculos",
    nombre: "Calculos",
  },
];

function Menu() {
  return (
    <div className="bg-[#1B263B] w-[15%] text-white h-auto text-xl px-2">
      <h1 className="text-3xl pt-2 ">Menu</h1>
      <ol>
        {menuRoutes.map((menu, key) => (
          <li key={key} className="pt-4">
            <Link className="" href={menu.ruta}>
              {menu.nombre}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Menu;
