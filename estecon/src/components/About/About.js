import about from "../../assets/img/about.png"

export const About = () => {
    return(
        <>
            <section className="">

            <div className="mx-32 my-7">
                <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center ">Sobre nós</h1>
                <hr className="bg-bluePrimary p-1 w-96 mx-auto"/>
                <p className="text-bluePrimary py-1 font-bold text-center">Um pouco sobre nós</p>
            </div>

            <div className="flex">
                <img src={about} alt="Foto de 1975"/>

                <div>
                    <p>
                    Fundada em 1975, a Estecon é uma empresa especializada em serviços contábeis, comprometida em oferecer soluções completas e personalizadas para empresas de diversos portes e setores. Atuando com profissionalismo e dedicação, nossa equipe de especialistas está preparada para cuidar de todas as demandas contábeis, fiscais e tributárias, garantindo segurança, agilidade e conformidade com a legislação.
                    </p>
                    <p>Em 2023, realizamos uma ampliação e reforma em nossas instalações, aprimorando ainda mais nossa estrutura para melhor atender nossos clientes. Na Estecon, buscamos ser parceiros estratégicos, contribuindo para o desenvolvimento e o sucesso sustentável dos negócios de nossos clientes.</p>
                </div>

            </div>
            </section>
        </>
    )
}