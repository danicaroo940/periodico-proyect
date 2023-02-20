import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export function Header (){
    const {clickList, menu} = useContext(GlobalContext)
    const navigate = useNavigate()
    
    function handleClick(e){
        e.preventDefault()
        console.log (e.target.innerHTML)
        clickList(e.target.innerHTML)
        const path = e.target.getAttribute('href')
        console.log(path)
        navigate(path)

    }
    useEffect(()=>{
        console.log(menu)
    })
    return (
        <div>
            <nav>
            <span className='logo'>INews</span>
                <ul>
                    <li><a href ="/" onClick={(e) => handleClick(e)}>Home</a></li>
                    <li><a href ="#" onClick={(e) => handleClick(e)}>List</a></li>
                    <li><a href ="/addnews" onClick={(e) => handleClick(e)}>Add News</a></li>
                </ul>
            </nav>
        </div>
    )
}