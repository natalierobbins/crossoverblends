export const Dash = () => {
    return (
        <div id='dashboard-content-wrapper'>
            <div id='content-wrapper'>
                <h1>your blends</h1>
                <div id='dashboard-content-divider'>
                    <span id='divider'></span>
                </div>
                <div className='dashboard-content'>
                    <Invite />
                </div>
            </div>
        </div>
    )
}

const DividerHeaders = () => {

}

const BlendList = () => {

    var users = ['natalie', 'daivic']

    return (
        <>
            {users.map((item) => {
                return (
                    <div id={`blend-${item}`} key={`blend-${item}`} className='blend-title-opts-wrapper'>
                        <a href="">- w/ {item}</a>
                        <BlendOpts />
                    </div>
                )
            })}
        </>
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

const Playlist = () => {

}

const Empty = () => {
    return (
        <div id='empty-wrapper'>
            <p>you have no blends :(</p>
            <a href=''>+ create one now!</a>
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
                <div id='invite'>
                    crossoverblends.web.app/+/ksjdfhldskjfhldskjhfk
                </div>
            </div>
        </div>
    )
}
