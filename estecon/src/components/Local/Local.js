import React from "react";
import local from "../../assets/img/locate.png";

export const Local = () => {
  return (
    <>
      <section className="w-4/5 m-auto my-10">
        <div>
          <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">
            Nossa Localização
          </h1>
          <hr className="bg-bluePrimary p-1 w-96 mx-auto max-md:w-52" />
          <p className="text-bluePrimary py-1 font-bold text-center text-3xl">
            Onde você pode nos encontrar presencialmente
          </p>
        </div>

        <div className="flex justify-between max-md:flex-col">
          <img src={local} className="w-1/3 max-md:w-full" alt="Imagem de nossa empresa" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31823.13346977554!2d-41.476179092079725!3d-4.431270977105456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7939aa9009b7f09%3A0xe6169cb9f64d3a98!2sPedro%20II%2C%20PI%2C%2064255-000!5e0!3m2!1spt-BR!2sbr!4v1732462809768!5m2!1spt-BR!2sbr"
            width="50%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="max-md:w-full"
          />
        </div>
      </section>
    </>
  );
};
