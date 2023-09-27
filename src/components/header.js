import { Venn } from './venn'

export const Header = () => {
    return (
        <div id='header-wrapper'>
            <Venn type="icon" />
            <Menu />
        </div>
    )
}

const Menu = () => {
    return (
        <div id='menu-wrapper'>
            <a href="">your blends</a>
            <a href="">+ create new blend</a>
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