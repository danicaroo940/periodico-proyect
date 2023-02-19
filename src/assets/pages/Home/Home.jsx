import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header"
import axios from 'axios'
import './Home.scss'
export function Home (){
    const [news, setNews] = useState([])
    async function getPopularNews() {
        const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=BTqQg8E3UQNPGBRI51CGFdulAjDTHDEN')
        const data = response.data;
        setNews(data.results)
        console.log(data.results[1].media[0])
       //console.log(news[1].media[0]["media-metadata"][0].url)
    }

    useEffect(()=>{
        getPopularNews()
    },[])

    return (
        <div>
            <h1>Home</h1>
            <h2>Noticias populares</h2>
            <div className="container-box">
                { news.map((item, index) => {
                    return (
                            <div className="news-popular" key={index}>
                                <div className='container-news'>
                                    <h3 className='news-title'>{item.title}</h3>
                                    <p className='news-description'>{item.abstract}</p>
                                </div>
                                <div className='container-img'>
                                {
                                    item.media.map((item, index) => {
                                        return <img className='news-img' src={item["media-metadata"][1].url}></img>
                                        // return(
                                            //     <p>{item["media-metadata"][0].url}</p>
                                            // )
                                            
                                            //     item["media-metadata"].map((item, index) => {
                                                //         return(
                                                    //             <img key={index} src={item.url}></img>
                                                    //         )
                                                    //    })
                                                })
                                            }

                                </div>
                            </div>
                    
                            )
                        }   
                    )
                }
            </div>
        </div>
    )
           

        
    
}