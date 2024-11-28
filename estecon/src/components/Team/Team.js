import img1 from "../../assets/img/team/icone pessoa.png"
import img2 from "../../assets/img/team/mikaele.jpeg"
import img3 from "../../assets/img/team/kelson.jpeg"
import img4 from "../../assets/img/team/carlos.jpeg"
import img5 from "../../assets/img/team/amelia.jpeg"
import img6 from "../../assets/img/team/daylan.jpeg"


export const Team = ()=>{
    return(
        <>
            <section className="w-full">
                <div className="text-center">
                    <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Equipe</h1>
                    <hr className="bg-bluePrimary  p-1 w-96 mx-auto max-md:w-64"/>
                    <p className="text-bluePrimary py-1 font-bold text-center text-3xl max-md:text-xl">Conheça nossos profissionais</p>
                    
                    <div className="flex items-center justify-center">
                    <div className="grid grid-cols-4 grid-rows-2 gap-4">
                        <div className="text-center">
                            <img src={img1} alt="imagem" className="w-90 h-90 " />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center ">Sergino Castro</h1>
                        </div>
                        <div className="text-center">
                            <img src={img1} alt="imagem"className="w-90 h-90" />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Cythia Castro</h1>
                        </div>
                        <div className="text-center">
                            <img src={img1} alt="imagem" className="w-90 h-90" />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Clistenes Castro</h1>
                        </div>
                        <div className="text-center"> 

                            <img src={img2} alt="imagem" className="w-90 h-90" />

                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Mikaele Ravena</h1>
                        </div>
                        <div className="text-center">
                            <img src={img3} alt="imagem" className="w-90 h-90" />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Kelson Adriano</h1>
                        </div>
                        <div className="text-center">
                            <img src={img4} alt="imagem" className="w-90 h-90" />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Carlos Sousa</h1>
                        </div>
                        <div className="text-center">
                            <img src={img5} alt="imagem" className="w-90 h-90" />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Amélia ALves</h1>
                        </div>
                        <div className="text-center">
                            <img src={img6} alt="imagem" className="w-90 h-90" />
                            <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Daylan Alves</h1>
                        </div>
                    </div>
                 </div>
                </div>
            </section>
        </>
    )
}