import { Venn } from './venn'
import { useEffect, useState } from 'react'

export const Playlist = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])







    var tracks = [
        {
            id: 'track',
            title: 'Chateau Lobby #4 (In C For Two Virgins)',
            artist: 'Father John Misty',
            album: 'I Love You, Honeybear'
        },
        {
            id: 'track',
            title: 'The Blonde',
            artist: 'TV Girl',
            album: 'French Exit'
        },
        {
            id: 'track',
            title: 'this body means nothing to me',
            artist: 'Shrimp',
            album: 'this body means nothing to me'
        },
        {
            id: 'track',
            title: 'Cherry Wine',
            artist: 'Hozier',
            album: 'Hozier'
        }
    ]



    

    return (
        <div id='playlist-wrapper'>
            {tracks.map((track) => {
                return width > 700 ? 
                    (<Track track_props={track} />) : 
                    (<TrackCondensed track_props={track} />)
            })}
        </div>
    )
}

const Track = ({track_props}) => {
    return (
        <div className='track-wrapper' id={track_props.id} key={track_props.id}>
            <Venn type='playlist'/>
            <div className='track-prop-wrapper'>
                <p>{track_props.title}</p>
            </div>
            <div className='track-prop-wrapper'>
                <p>{track_props.artist}</p>
            </div>
            <div className='track-prop-wrapper'>
                <p>{track_props.album}</p>
            </div>
        </div>
    )
}

const TrackCondensed = ({track_props}) => {
    return (
        <div className='track-wrapper' id={track_props.id} key={track_props.id}>
            <Venn type='playlist'/>
            <div className='track-prop-wrapper-condensed'>
                <div className='track-prop-wrapper'>
                    <p>{track_props.title}</p>
                </div>
                <div className='track-prop-wrapper'>
                    <p>{track_props.artist}</p>
                </div>
            </div>
        </div>
    )
}

export const PlaylistHeaders = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div id='playlist-header-wrapper'>
            <Venn type='header' />
            <p>song</p>
            {width > 700 && <p>artist</p>}
            {width > 700 && <p>album</p>}
        </div>
    )
}

export const PlaylistTitle = ({users}) => {
    return (
        <div id='playlist-title-wrapper'>
            <h1 id='user0' className='apple'>{users[0]}</h1>
            <h1>&</h1>
            <h1 id='user1' className='spotify'>{`${users[1]}`}</h1>
            <h1 id='apostrophe'>{users[1][-1] == 's' ? "'" : "'s"}</h1>
            <h1>blend</h1>
        </div>
    )
}