export const Venn = ({type}) => {
    return (
        <div className='venn-wrapper -flex -row'>
            <span className={`venn-circle apple ${type}`}></span>
            <span className={`venn-circle spotify ${type}`}></span>
        </div>
    )
}