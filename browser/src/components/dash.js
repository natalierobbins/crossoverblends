import { Link } from 'react-router-dom'
import { Playlist, PlaylistHeaders, PlaylistTitle } from './playlist'

export const Dash = (props) => {

    const titles = {
        'home': '<3 your blends',
        'invite': '+ create new blend',
        'playlist': <PlaylistTitle users={['x', 'natalie']} />
    }

    return (
        <div id='dashboard-content-wrapper'>
            <div id='content-wrapper'>
                <div id='dashboard-title-wrapper'>
                    <h1>{titles[props.page]}</h1>
                    {props.page == 'playlist' && <BlendOpts />}
                </div>
                <div id='dashboard-content-divider'>
                    {props.page == 'playlist' && <PlaylistHeaders />}
                    <span id='divider'></span>
                </div>
                <div className='dashboard-content'>
                    <ContentRouter page={props.page} />
                </div>
            </div>
        </div>
    )
}

const ContentRouter = ({page}) => {
    if (page == 'home') {
        return <BlendList />
    }
    else if (page == 'invite') {
        return <Invite />
    }
    else if (page == 'playlist') {
        return <Playlist />
    }
}

const BlendList = () => {

    var users = ['natalie']

    return (
        <>
            {users.map((name) => {
                return <Blend name={name} />
            })}
        </>
    )

}

const Blend = ({name}) => {
    return (
        <div id={`blend-${name}`} key={`blend-${name}`} className='blend-title-opts-wrapper'>
            <Link to='/&'>- w/ {name}</Link>
            <BlendOpts />
        </div>
    )
}

const BlendOpts = () => {
    return (
        <div className='blend-opts-wrapper'>
            <div className='button' id='re-sync'>
                re-sync
            </div>
            <div className='button' id='export'>
                export
            </div>
        </div>
    )
}

const Empty = () => {
    return (
        <div id='empty-wrapper'>
            <p>you have no blends :(</p>
            <Link to='/+'>+ create one now!</Link>
        </div>
    )
}

const Invite = () => {
    return (
        <div id='invite-link-wrapper'>
            <div id='invite-wrapper'>
                <div id='invite-title-opts-wrapper'>
                    <p>invite link</p>
                    <a href=''>copy to clipboard</a>
                </div>
                <input 
                    id='invite'
                    value='crossoverblends.web.app/+/ksjdfhldskjfhldskjhfk'
                >
                </input>
            </div>
        </div>
    )
}
