export const Dash = () => {
    return (
        <div id='dashboard-content-wrapper'>
            <div id='dashboard-content-title'>
                <h1>your blends</h1>
            </div>
            <div id='dashboard-content-divider'>
                <span id='divider'></span>
            </div>
            <BlendList />
        </div>
    )
}

const DividerHeaders = () => {

}

const BlendList = () => {

    var users = ['natalie']

    return (
        <div id='dashboard-content'>
            {users.map((item) => {
                return (
                    <div id={`blend-${item}`} key={`blend-${item}`} className='blend-title-opts-wrapper'>
                        <a href="">- w/ {item}</a>
                        <BlendOpts />
                    </div>
                )
            })}
        </div>
    )

}

const BlendOpts = () => {
    return (
        <div id='blend-opts-wrapper'>
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

const Invite = () => {

}
