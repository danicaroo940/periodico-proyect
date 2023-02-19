import React from 'react'
import './AddNews.scss'
export function AddNews () {
    return (
    <>
    <h1> Add your news</h1>
    <div className="login-box">
        <form>
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