

async function getPopularNews() {
    const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=BTqQg8E3UQNPGBRI51CGFdulAjDTHDEN')
    const data = response.data;
    setNews(data.results)
}



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
                                })
                            }

                </div>
            </div>
    
            )
        }   
    )
}