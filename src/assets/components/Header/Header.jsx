import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export function Header (){
    const { handleTheme, theme } = useContext(GlobalContext)
    const navigate = useNavigate()
    const classSwitch = theme

    return (
        <div>
            <nav className={`header${classSwitch}`}>
            <span className='logo'>INews</span>
                <ul>
                    <a onClick={() => navigate('/')}><li>Home</li></a>
                    <a onClick={() => navigate('/list')}><li>List</li></a>
                    <a onClick={() => navigate('/addnews')}><li>Form</li></a>
                    <label class="switch">
                        <input type="checkbox" onClick={handleTheme}></input>
                        <span class="slider"></span>
                    </label>
                </ul>
            </nav>
        </div>
    )
}