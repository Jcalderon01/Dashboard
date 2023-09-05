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
  {
    ruta: "/tabla",
    nombre: "Tabla",
  },
];

function Menu() {
  return (
    <div className="bg-[#1B263B] w-[15%] text-white h-screen">
      <h1>Menu</h1>
      <ol>
        {menuRoutes.map((menu, key) => (
          <li key={key} className="text-white">
            <Link href={menu.ruta}>{menu.nombre}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Menu;
