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
            <section>

                <div>
                    <h1>Bem-Vindo ao Estecon</h1>
                    <h3>Empresa de Contabilidade</h3>
                    <p>Pioneiro de Contabilidade em Pedro II - PI</p>
                    <button>Entre em Contato</button>
                </div>

                <div className="overflow-hidden relative w-full max-w-3xl mx-auto rounded-lg shadow-lg">

                    <div className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${imgCurretIndex * 100}%)` }}>

                        {images.map((image, index) => (
                        <div className="min-w-full"  key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} className="w-full h-auto object-cover" />
                        </div>
        ))}
                    </div>
                    
                </div>
            </section>
        </>
    )
}