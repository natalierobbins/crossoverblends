export const Venn = ({type}) => {
    return (
        <div className='venn-wrapper -flex -al-c -jc-c'>
            <span className={`venn-circle apple ${type}`}></span>
            <span className={`venn-circle spotify ${type}`}></span>
        </div>
    )
}