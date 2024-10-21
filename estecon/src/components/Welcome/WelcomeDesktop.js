import sofa from '../../assets/img/just_a_blue_sofa.webp'
import people from '../../assets/img/People_working.jpeg'
import banner from '../../assets/img/banner.jpeg'
import { useEffect, useState } from 'react'

export const WelcomeDesktop = () =>{

    const images = [sofa, people, banner]
    const [imgCurretIndex, setImgCurretIndex] = useState(0) //O estado pega o index 0 da imagem

    useEffect(() => {
        const interval = setInterval(() => {
        setImgCurretIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) //O index da imagem muda a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
}, [images.length]);
    

    return(

        <>
            <section className='bg-whiteColor flex mt-28 p-4'>

                {/* Title */}
                <div className='m-auto text-bluePrimary font-bold'>
                    <h1 className='text-6xl '>Bem-Vindo ao Estecon</h1>
                    <h3 className='text-3xl my-2'>Empresa de Contabilidade</h3>
                    <p className='text-xl'>Pioneiro de Contabilidade em Pedro II - PI</p>
                    <button className='bg-bluePrimary text-whiteColor px-5 py-3 rounded-xl my-2 text-2xl hover:bg-blue-950'>Entre em Contato</button>
                </div>

                {/* Photos */}
                <div className="overflow-hidden relative w-full max-w-3xl mx-auto shadow-lg m-5">
                    <div className="flex transition-transform duration-1000 ease-in-out"
                      style={{ transform: `translateX(-${imgCurretIndex * 100}%)` }}>

                        {images.map((image, index) => (
                        <div className="min-w-full flex justify-center"  key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} className="w-3/4 h-auto object-cover rounded-3xl" />
                        </div>
                    ))}
                    </div>
                </div>

            </section>
        </>
    )
}