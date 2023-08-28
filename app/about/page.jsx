export default function About() {
  return (
    <div className="bg-[#415A77] min-h-screen flex items-center justify-center h-screen w-screen">
      <div className="bg-[#778DA9] p-8 rounded-lg shadow-md text-center">
        <div>
          <div className="relative w-full h-full rounded-full overflow-hidden"></div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-white">Acerca de</h1>

          <h1 className="text-2xl">Nombre: Jorge A Calderon Ruiz</h1>
          <h1 className="text-2xl">Edad: 22</h1>
          <h1 className="text-2xl">Carrera: Sis. Computacionales</h1>
          <h1 className="text-2xl">Telefono: 6462400242</h1>
          <h1 className="text-2xl">Correo: al19760591@ite.edu.mx</h1>
        </div>
      </div>
    </div>
  );
}
