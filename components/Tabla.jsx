import React from "react";

export const Tabla = ({
  resultado,
  masaGrasa,
  porcentajeOseo,
  resultado3,
  resultado4,
  porcentajeMusculo,
  masaMuscular,
  porcentajeResidual,
}) => {
  return (
    <div>
      {" "}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-center text-gray-700">
            <th className="py-2 px-4">Componente</th>
            <th className="py-2 px-4">%</th>
            <th className="py-2 px-4">kg</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="py-2 px-4 font-semibold">Masa Grasa</td>
            <td className="py-2 px-4">
              {resultado ? resultado.toFixed(3) : ""}%
            </td>
            <td className="py-2 px-4">
              {masaGrasa ? masaGrasa.toFixed(3) : ""} kg
            </td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 font-semibold">Masa Osea</td>
            <td className="py-2 px-4">
              {porcentajeOseo ? porcentajeOseo.toFixed(3) : ""}%
            </td>
            <td className="py-2 px-4">
              {resultado3 ? resultado3.toFixed(3) : ""} kg
            </td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 font-semibold">Masa Residual</td>
            <td className="py-2 px-4">
              {porcentajeResidual ? porcentajeResidual.toFixed(2) : ""}%
            </td>
            <td className="py-2 px-4">
              {resultado4 ? resultado4.toFixed(3) : ""} kg
            </td>
          </tr>
          <tr className="text-center">
            <td className="py-2 px-4 font-semibold">Masa Muscular</td>
            <td className="py-2 px-4">
              {porcentajeMusculo ? porcentajeMusculo.toFixed(3) : ""}%
            </td>
            <td className="py-2 px-4">
              {masaMuscular ? masaMuscular.toFixed(3) : ""} kg
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
