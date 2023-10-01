import { Link } from 'react-router-dom'
import { Venn } from './venn'
import { useState, useEffect } from 'react'

export const Header = () => {
    return (
        <div id='header-wrapper'>
            <Venn type="icon" />
            <Menu />
        </div>
    )
}

const Menu = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div id='menu-wrapper'>
            <Link to='/<3'>&lt;3 {width > 480 && 'your blends'}</Link>
            <Link to='/+'>+ {width > 480 && 'create new blend'}</Link>
            <UserIcon platform="spotify"/>
        </div>
    )
}

const UserIcon = (props) => {
    return (
        <div className={`user-icon ${props.platform}`}>
            n
        </div>
    )
}