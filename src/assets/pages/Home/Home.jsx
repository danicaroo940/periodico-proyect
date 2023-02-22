import { useState } from "react";
import './Home.scss'
export function Home (){
    const [news, setNews] = useState(0)
    const [focus, setFocus] = useState(1)
    const newsObject = [
        {
            title: 'Sugieren que los agujeros negros podrían ser la fuente de la Energía Oscura',
            sub: 'Según los autores de un nuevo estudio, «es posible que hayamos encontrado la respuesta a uno de los mayores problemas de la cosmología»',
            url: 'https://s2.abcstatics.com/abc/www/multimedia/ciencia/2023/02/16/EHT_Saggitarius_A_black_hole.tif-RPQcbtRpRNSv8zckqOeAnuJ-758x531@abc.jpg',
        },
        {
            title: 'De Madrid a Barcelona en menos de una hora: así es el tren que conectaría ambas ciudades a 1.200 km/h',
            sub: 'El proyecto Hyperloop TT, que ya ha realizado pruebas en España, ha anunciado que quiere construir una línea entre Madrid y Barcelona en 2025. El trayecto se realizaría en 30 minutos y costaría 30 euros.',
            url: 'https://imagenes.20minutos.es/files/image_990_558/files/fp/uploads/imagenes/2023/02/21/fotografia-hyperloop-tt.r_d.607-247.jpeg',
        },
        {
            title: 'Se establecen cuatro tipos de sistemas solares, y el nuestro es de los más raros',
            sub: 'En un estudio sin precedentes, un equipo de astrónomos ha estudiado y comparado la arquitectura de todos los sistemas planetarios conocidos hasta ahora',
            url: 'https://s1.abcstatics.com/abc/www/multimedia/ciencia/2023/02/15/SISTEMASP-Rqbcd01bmB29fz7XjG96UoN-758x531@abc.JPG',
        },
        {
            title: 'El primer mapa de la Tierra en 3D',
            sub: 'El mapa muestra la superficie de la Tierra en 3D, con una resolución de 1 kilómetro por pixel',
            url: 'https://media.hotnews.ro/media_server1/image-2021-06-18-24868936-70-heliosfera.jpg'
        }]

    const imgFocus = newsObject[focus].url
    const img = newsObject[news].url
    const img2 = newsObject[(focus+1) % newsObject.length].url
    const img3 = newsObject[(focus+2) % newsObject.length].url
    const title = newsObject[focus].title
    const subtitle = newsObject[focus].sub
    
    function handleClick(e){
        if (e.target.textContent === 'Siguiente'){
            setNews((news + 1)%newsObject.length)
            setFocus((focus + 1)%newsObject.length)
        }
        if (e.target.textContent === 'Anterior'){
            setNews((news - 1)%newsObject.length)
            setFocus((focus - 1)%newsObject.length)
                if (news === 0){
                    setNews(newsObject.length - 1)
                }
                if(focus === 0){
                    setFocus(newsObject.length - 1)
               }
        }
    }
    return (
        <div>
            <div className="container-home">
                <div className="left-box">
                    <div className="news-container">
                        
                        <div className="news-box-left">
                            <div className="news">
                                <div className="title-news">
                                    <span>{title}</span>
                                    <p className="subtitle">{subtitle}</p>
                                    <div className="buttons">
                                    <button onClick={handleClick}>Anterior</button>                                 
                                    <button onClick={handleClick}>Siguiente</button>
                                    </div>
                                </div>
                                <img src={imgFocus}></img>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="right-box">
                    <img src={img2} alt="img" />
                    <img src={img3} alt="img" />
                    <img src={img} alt="img"/>
                </div>
            </div>
        </div>
    )
           

        
    
}