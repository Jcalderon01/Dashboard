"use client";
import { Graph } from "@/components/Graph";
import React, { useState } from "react";
import { Tabla } from "@/components/Tabla";

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
  const [masaGrasa, setMasaGrasa] = useState(null);
  const [porcentajeOseo, setPorcentajeOseo] = useState(null);
  const [porcentajeResidual, setPorcentajeResidual] = useState(null);
  const [porcentajeMusculo, setPorcentajeMusculo] = useState(null);
  const [masaMuscular, setMasaMuscular] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePositiveInputChange = (value, setValue) => {
    if (value >= 0) {
      setValue(value);
    }
  };

  /* Diseño del formulario*/
  return (
    <div className="bg-[#415A77] h-full w-screen grid grid-cols-2 gap-8 p-8">
      {/* Form Column */}
      <div className="bg-[#778DA9] p-8">
        <h1 className="text-center text-3xl mb-6">Composición Corporal</h1>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {/* Left Column */}
          <div>
            <label>
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
            <div></div>
            <label>
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
                  handlePositiveInputChange(
                    parseFloat(e.target.value),
                    setAltura
                  )
                }
              />
            </label>
            <label className="mt-5  ">
              Edad:
              <input type="text" className="ml-2" />
            </label>
            <label className="mt-5">
              Biceps:
              <input
                type="number"
                className="ml-2"
                value={bicep}
                onChange={(e) =>
                  handlePositiveInputChange(
                    parseFloat(e.target.value),
                    setBicep
                  )
                }
              />
            </label>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div>
            <label className="mt-5 ">
              Triceps:
              <input
                type="number"
                className="ml-2"
                value={tricep}
                onChange={(e) =>
                  handlePositiveInputChange(
                    parseFloat(e.target.value),
                    setTricep
                  )
                }
              />
            </label>
            <label className="mt-5 ">
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
            <label className="mt-5 ">
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
            <label className="mt-5 ">
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
            <label className="mt-5 ">
              Femur
              <input
                type="number"
                className="ml-2"
                value={femur}
                onChange={(e) =>
                  handlePositiveInputChange(
                    parseFloat(e.target.value),
                    setFemur
                  )
                }
              />
            </label>
          </div>
          <input
            type="submit"
            className="col-span-2 bg-white text-black border-4 mt-5"
            value="Calcular"
            onClick={() => {
              if (
                genero &&
                tricep &&
                bicep &&
                subescapular &&
                suprailiaco &&
                femur &&
                biestiloideo
              ) {
                /* Calculo de densidad corporal */
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
                /*Calculo de masa residual */
                let MR;
                if (genero === "hombre") {
                  MR = (24 * peso) / 100;
                } else if (genero === "mujer") {
                  MR = (21 * peso) / 100;
                }
                const masaResidual = MR;
                setResultado4(masaResidual);

                /*Conversion de kg a % */
                let PR = (masaResidual * 100) / peso;
                setPorcentajeResidual(PR);

                /*Calculo de grasa corporal */
                const porcentajeGrasaCorporal = 495 / DC - 450;
                const densidad = DC;
                setResultado(porcentajeGrasaCorporal);
                setResultado2(densidad);
                let MG = (peso * porcentajeGrasaCorporal) / 100;
                setMasaGrasa(MG);
                /*Calculo de masa osea  */
                let MS;
                MS =
                  Math.pow(
                    Math.pow(altura / 100, 2) *
                      (femur / 100) *
                      (biestiloideo / 100) *
                      400,
                    0.712
                  ) * 3.02;

                const masaosea = MS;
                setResultado3(masaosea);

                let PO = (masaosea * 100) / peso;
                setPorcentajeOseo(PO);

                /* Calculo de porcenta de grasa corporal*/
                let PM = 100 - (porcentajeGrasaCorporal + PO + PR);
                setPorcentajeMusculo(PM);

                let MM = (peso / 100) * PM;
                setMasaMuscular(MM);
              } else {
                setResultado(null);
              }
            }}
          ></input>
        </form>
        {resultado !== null && (
          <div className="mt-5">
            <p>Densidad corperal: {resultado2.toFixed(2)}%</p>
          </div>
        )}
      </div>
      {/*  */}
      <div className="bg-[#778DA9] p-5 h-full">
        <h1 className="text-center text-white text-3xl mb-4">Tabla</h1>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          {/*Modulo de tabla */}
          <Tabla
            resultado={resultado}
            masaGrasa={masaGrasa}
            porcentajeOseo={porcentajeOseo}
            resultado3={resultado3}
            resultado4={resultado4}
            porcentajeMusculo={porcentajeMusculo}
            masaMuscular={masaMuscular}
            porcentajeResidual={porcentajeResidual}
          />
          {/*Modulo de grafica */}
          <Graph
            className={"h-1/2"}
            valores={[
              resultado,
              porcentajeOseo,
              porcentajeResidual,
              porcentajeMusculo,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
