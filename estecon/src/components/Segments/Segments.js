export const Segments = () =>{
    return(
        <section className=
        "w-4/5 m-auto my-10">

            <div>
                <h1 className="text-bluePrimary font-bold text-4xl py-1 text-center">Segmentos</h1>
                <hr className="bg-bluePrimary  p-1 w-96 mx-auto max-md:w-52"/>
                <p className="text-bluePrimary py-1 font-bold text-center">Possuímos Experiência em Diversos Setores</p>
            </div>

            <div className="flex my-10 border-solid border-2 border-sky-500 space-x-44">

                <div className="text-bluePrimary font-bold text-4xl py-1 text-center block my-8">
                    <div>1.</div> <div>comércio</div>
                </div>
                <div className="text-bluePrimary font-bold text-4xl py-1 text-center block my-8">
                    <div>2.</div> <div>Industria</div>
                </div>
                <div className="text-bluePrimary font-bold text-4xl py-1 text-center block my-8">
                    <div>3.</div> <div>Serviços</div>

                </div>

            </div>

        </section>
    )
}