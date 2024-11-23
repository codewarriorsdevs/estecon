import React from "react";
import service1 from "../../assets/icons/vector-1.svg";
import service2 from "../../assets/icons/vector-2.svg";
import service3 from "../../assets/icons/vector-3.svg";

export const ServicesSec = () => {
  return (
    <section className="w-4/5 m-auto my-10">
      <div>
        <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">
          Serviços
        </h1>
        <hr className="bg-bluePrimary p-1 w-96 mx-auto max-md:w-52" />
        <p className="text-bluePrimary py-1 font-bold text-center text-3xl">
        Conheça o que podemos fazer por você
        </p>
      </div>

      <div className="flex justify-between gap-8 w-full max-md:flex-col">
        <div className="flex flex-col justify-between items-center gap-8 bg-bluePrimary p-8 rounded-md">
          <img src={service1} className="w-12"/>
          <ul className="text-whiteColor list-disc">
            <li>Planejamento tributário para otimizar a carga fiscal</li>
            <li>Cálculo de tributos (IR, ICMS, ISS, etc.)</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between items-center gap-8 bg-bluePrimary p-8 rounded-md">
          <img src={service2} className="w-12"/>
          <ul className="text-whiteColor list-disc">
            <li>Elaboração de relatórios financeiros detalhados (balanços, DRE, etc.)</li>
            <li>Análise de custos, lucros e desempenho</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between items-center gap-8 bg-bluePrimary p-8 rounded-md">
          <img src={service3} className="w-12"/>
          <ul className="text-whiteColor list-disc">
            <li>Cálculo de salários, horas extras, benefícios, férias e 13º salário</li>
            <li>Emissão de guias de encargos trabalhistas </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
