import about from "../../assets/img/about.png"

export const About = () => {
    return(
        <>
            <section className=
            "w-4/5 m-auto my-6"
            >

            <div>
                <h1 className=
                "text-bluePrimary font-bold text-4xl py-1 text-center"
                >Sobre nós</h1>
                <hr className=
                "bg-bluePrimary p-1 w-96 mx-auto max-md:w-52"
                />
                <p className=
                "text-bluePrimary py-1 font-bold text-center"
                >Um pouco sobre nós</p>
            </div>

            <div className=
            "flex space-x-72 my-7 max-2xl:block max-2xl:space-x-0"
            >
                <img src={about} alt="Foto de 1975 " className=
                "w-2/5 max-2xl:w-2/5 max-2xl:m-auto"
                />

                <div className=
                "w-2/5 leading-7 text-justify text-2xl max-2xl:pt-5 max-2xl:w-auto max-md:text-base"
                >
                    <p>
                    Fundada em 1975, a Estecon é uma empresa especializada em serviços contábeis, comprometida em oferecer soluções completas e personalizadas para empresas de diversos portes e setores. Atuando com profissionalismo e dedicação, nossa equipe de especialistas está preparada para cuidar de todas as demandas contábeis, fiscais e tributárias, garantindo segurança, agilidade e conformidade com a legislação.
                    </p>
                    <p className="mt-10 max-2xl:mt-3">Em 2023, realizamos uma ampliação e reforma em nossas instalações, aprimorando ainda mais nossa estrutura para melhor atender nossos clientes. Na Estecon, buscamos ser parceiros estratégicos, contribuindo para o desenvolvimento e o sucesso sustentável dos negócios de nossos clientes.</p>
                </div>

            </div>
            </section>
        </>
    )
}