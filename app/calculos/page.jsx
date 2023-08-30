"use client";
import React, { useState } from "react";

export default function Composicion() {
  const [genero, setGenero] = useState("");
  const [tricep, setTricep] = useState("");
  const [bicep, setBicep] = useState("");
  const [subescapular, setSubescapular] = useState("");
  const [suprailiaco, setSuprailiaco] = useState("");
  const [biestiloideo, setBiestiloideo] = useState("");
  const [femur, setFemur] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [resultado2, setResultado2] = useState(null);
  const [resultado3, setResultado3] = useState(null);
  const [resultado4, setResultado4] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (genero && tricep && bicep && subescapular && suprailiaco) {
      const logX1 =
        Math.log10(
          parseFloat(tricep) +
            parseFloat(bicep) +
            parseFloat(subescapular) +
            parseFloat(suprailiaco)
        ) || 0;

      let DC;

      if (genero === "hombre") {
        DC = 1.1765 - 0.0744 * logX1;
      } else if (genero === "mujer") {
        DC = 1.1567 - 0.0717 * logX1;
      }
      let MR;
      if (genero === "hombre") {
        MR = (24 * peso) / 100;
      } else if (genero === "mujer") {
        MR = (21 * peso) / 100;
      }
      const masaResidual = MR;
      setResultado4(masaResidual);

      const porcentajeGrasaCorporal = 495 / DC - 450;
      const densidad = DC;
      setResultado(porcentajeGrasaCorporal);
      setResultado2(densidad);
    } else {
      setResultado(null);
    }

    let MS;

    if (femur && biestiloideo) {
      MS =
        Math.pow(
          Math.pow(altura / 100, 2) *
            (femur / 100) *
            (biestiloideo / 100) *
            400,
          0.712
        ) * 3.02;
    }
    const masaosea = MS;
    setResultado3(masaosea);
  };

  const handlePositiveInputChange = (value, setValue) => {
    if (value >= 0) {
      setValue(value);
    }
  };

  return (
    <div className="bg-[#415A77] h-screen w-screen flex flex-col items-center justify-start pt-8">
      <div className="bg-[#778DA9] p-20 text-center w-50% h-50%">
        <h1 className="text-center mt-2 text-3xl ">Composición Corporal</h1>
        <form className="flex flex-col mt-10 " onSubmit={handleSubmit}>
          <label className="mt-[-5%] ml-[-50%]">
            Genero:
            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              className="ml-2"
            >
              <option value="">Seleccionar</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </label>
          <label className="mt-5 ">
            Peso:
            <input
              type="number"
              className="ml-2"
              value={peso}
              onChange={(e) =>
                handlePositiveInputChange(parseFloat(e.target.value), setPeso)
              }
            />
          </label>
          <label className="mt-5 ">
            Altura:
            <input
              type="number"
              className="ml-2"
              value={altura}
              onChange={(e) =>
                handlePositiveInputChange(parseFloat(e.target.value), setAltura)
              }
            />
          </label>
          <label className="mt-5 flex items-center">
            Edad:
            <input type="text" className="ml-2" />
          </label>
          <label className="mt-5 flex items-center">
            Biceps:
            <input
              type="number"
              className="ml-2"
              value={bicep}
              onChange={(e) =>
                handlePositiveInputChange(parseFloat(e.target.value), setBicep)
              }
            />
          </label>
          <label className="mt-5 ">
            Triceps:
            <input
              type="number"
              className="ml-2"
              value={tricep}
              onChange={(e) =>
                handlePositiveInputChange(parseFloat(e.target.value), setTricep)
              }
            />
          </label>
          <label className="mt-5 flex items-center">
            Subescapular:
            <input
              type="number"
              className="ml-2"
              value={subescapular}
              onChange={(e) =>
                handlePositiveInputChange(
                  parseFloat(e.target.value),
                  setSubescapular
                )
              }
            />
          </label>
          <label className="mt-5 flex items-center">
            Suprailiaco
            <input
              type="number"
              className="ml-2"
              value={suprailiaco}
              onChange={(e) =>
                handlePositiveInputChange(
                  parseFloat(e.target.value),
                  setSuprailiaco
                )
              }
            />
          </label>
          <label className="mt-5 flex items-center">
            Biestiloideo
            <input
              type="number"
              className="ml-2"
              value={biestiloideo}
              onChange={(e) =>
                handlePositiveInputChange(
                  parseFloat(e.target.value),
                  setBiestiloideo
                )
              }
            />
          </label>
          <label className="mt-5 flex items-center">
            Femur
            <input
              type="number"
              className="ml-2"
              value={femur}
              onChange={(e) =>
                handlePositiveInputChange(parseFloat(e.target.value), setFemur)
              }
            />
          </label>
          <button type="submit" className="bg-white text-black border-4 mt-5  ">
            Calcular
          </button>
        </form>

        {resultado !== null && (
          <div className="mt-5">
            <p>Porcentaje de Grasa Corporal: {resultado.toFixed(2)}%</p>
            <p>Densidad corperal: {resultado2.toFixed(2)}%</p>
            <p>Masa osea: {resultado3.toFixed(2)}kg</p>
            <p>Masa residual: {resultado4.toFixed(2)}kg</p>
          </div>
        )}
      </div>
    </div>
  );
}
