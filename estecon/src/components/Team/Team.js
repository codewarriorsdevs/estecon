import img1 from "../../assets/img/team/icone pessoa.png"
import img2 from "../../assets/img/team/mikaele.jpeg"
import img3 from "../../assets/img/team/kelson.jpeg"
import img4 from "../../assets/img/team/carlos.jpeg"
import img5 from "../../assets/img/team/amelia.jpeg"
import img6 from "../../assets/img/team/daylan.jpeg"



export const Team = ()=>{
    return(
        <>
          <section className="w-full text-center"> 
            <div className="text-center"> 
                <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Equipe</h1> 
                <hr className="bg-bluePrimary p-1 w-96 mx-auto max-md:w-64"/> 
                <p className="text-bluePrimary py-1 font-bold text-center text-3xl max-md:text-xl">Conheça nossos profissionais</p> 
                <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 p-20"> 
                    <div className="text-center"> 
                        <img src={img1} alt="imagem" className=" lg:w-80 lg:h-80 sm:w-20 sm:h-20 rounded-full mx-auto " /> 
                    <h1 className="text-bluePrimary font-bold text-4xl py-1">Sergino Castro</h1> 
                    <p>Fundador e líder da Estecon
                    sempre comprometido com a integridade e o sucesso dos clientes</p>
                    </div> 
                    <div className="text-center"> 
                        <img src={img1} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" />
                     <h1 className="text-bluePrimary font-bold text-4xl py-1">Cythia Castro</h1>
                     <p>Atuante na parte da gerência da empresa garantindo a eficiência aos processos dos clientes</p>
                     </div> 
                     <div className="text-center"> 
                        <img src={img1} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" /> 
                        <h1 className="text-bluePrimary font-bold text-4xl py-1">Clistenes Castro</h1>
                        <p>Atua na parte de TI , Agente de Registro da Certificadora Online e representante da Toronto</p>
                        </div> 
                        <div className="text-center"> 
                            <img src={img2} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" />
                         <h1 className="text-bluePrimary font-bold text-4xl py-1">Mikaele Ravena</h1>
                         <p> Trabalha na parte de atendimento ao cliente e responsável pelas empresas</p>
                         </div> 
                         <div className="text-center"> 
                            <img src={img3} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" /> 
                         <h1 className="text-bluePrimary font-bold text-4xl py-1">Kelson Adriano</h1>
                         <p> Trabalha na parte de atendimento ao cliente e responsável pelas empresas,</p>
                         </div> 
                         <div className="text-center"> 
                            <img src={img4} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" /> 
                            <h1 className="text-bluePrimary font-bold text-4xl py-1">Carlos Sousa</h1>
                            <p>Atuante na parte de TI, dando suporte a clientes que usam o programa de nota fiscal Toronto</p>
                            <p></p>
                            </div> 
                            <div className="text-center">
                                 <img src={img5} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" />
                                  <h1 className="text-bluePrimary font-bold text-4xl py-1">Amélia Alves</h1> 
                                  <p> Trabalha na parte de atendimento ao cliente e responsável pelas empresas,</p>
                                  </div> 
                            <div className="text-center"> 
                                <img src={img6} alt="imagem" className="lg:w-80 lg:h-80 sm:w-30 sm:h-20 w-25 rounded-full mx-auto" /> 
                                  <h1 className="text-bluePrimary font-bold text-4xl py-1">Daylan Alves</h1>
                                  <p> Responsável pela entrega de impostos - Apresente sua experiência na área fiscal.</p>
                                  </div> 
                                  </div> 
                                  </div> 
                                  </section>

        </>
    )
}