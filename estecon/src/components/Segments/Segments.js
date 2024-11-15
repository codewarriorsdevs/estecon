export const Segments = () =>{
    return(
        <section className=
        "w-4/5 m-auto my-11">

            <div>
                <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Segmentos</h1>
                <hr className="bg-bluePrimary  p-1 w-96 mx-auto max-md:w-52"/>
                <p className="text-bluePrimary py-1 font-bold text-center text-3xl">Possuímos Experiência em Diversos Setores</p>
            </div>

            <div className="flex my-10 border-solid  justify-center items-center space-x-10">

                <div className="text-bluePrimary font-bold text-7xl py-5 text-center block m-8">
                    <div>1.</div> <div className="text-5xl">comércio</div>
                </div>
                <div className="text-bluePrimary font-bold text-7xl py-5 text-center block m-8">
                    <div>2.</div> <div className="text-5xl">Industria</div>
                </div>
                <div className="text-bluePrimary font-bold text-7xl py-5 text-center block m-8">
                    <div>3.</div> <div className="text-5xl">Serviços</div>

                </div>

            </div>

        </section>
    )
}