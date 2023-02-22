import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import axios from 'axios'
import './List.scss'



export function List (){
    const [news, setNews] = useState([])
    const [formAddnews, setFormAddnews] = useState()
    const { theme } = useContext(GlobalContext)
    let classSwitch = ''

    async function getPopularNews() {
        const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=BTqQg8E3UQNPGBRI51CGFdulAjDTHDEN')
        const data = response.data;
        setNews(data.results)
    }   
        function clearLocalStorage() {
            localStorage.clear()
            setFormAddnews('')
        }
        useEffect(() => {
            getPopularNews()
            
            
            const localStorageNews = localStorage.getItem('news')
            if (localStorageNews) {
                const obj = JSON.parse(localStorageNews) 
                setFormAddnews(obj) 
                console.log(formAddnews)
            }
            
    }, [])
    useEffect(() => {
        if(theme === 'light'){
            classSwitch = 'light'
        }
        if(theme === 'dark'){
            classSwitch = 'dark'
        }
    }, [theme])
    return (
        <div>
            <div className="container">

            { formAddnews &&
                <>
                <div className={theme}>
                <div className='container-new'>
                    <h3>{formAddnews["title"]}</h3>
                    <p>{formAddnews["description"]}</p>
                    <div className='container-img'>
                        <img className='news-img'src={formAddnews["img"]} alt="img" />
                    </div>
                </div>
                    <button className='button-delete' onClick={clearLocalStorage}>Delete</button>
                </div>
                </>
                
            }

            { news.map((item, index) => {
                return (
                        <div className={theme} key={index}>
                            <div className='container-news'>
                                <h3 className='news-title'>{item.title}</h3>
                                <p className='news-description'>{item.abstract}</p>
                            <div>
                            {
                                item.media.map((item, index) => {
                                    return <img className='news-img' src={item["media-metadata"][1].url}></img>
                                })
                            }
            
                            </div>
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


