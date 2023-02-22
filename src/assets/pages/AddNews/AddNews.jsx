import React from 'react'
import './AddNews.scss'
import {useNavigate} from 'react-router-dom'
export function AddNews () {
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        const obj = new FormData(e.target);
        const data = Object.fromEntries(obj);
        localStorage.setItem('news', JSON.stringify(data))
        const getLocalStorageNews = localStorage.getItem('news')
        console.log('getLocalStorageNews: ', JSON.parse(getLocalStorageNews))
        navigate('/')
        console.log(data)
    }

    return (
    <>
    <div className="login-box">
    <h1 className='h1-loginbox'> Add your news</h1>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
                <input required name="title" type="text"></input>
                <label>Title</label>
            </div>
        <div className="user-box">
            <input required name="img" type="text"></input>
            <label>Image</label>
        </div>
        <div className="user-box">
            <input required name="" type="text"></input>
            <label>Description</label>
        </div>
            <div className="button-class">
                <button type='submit'>Send News</button>
            </div>
        </form>
</div>
    </>
    )
}