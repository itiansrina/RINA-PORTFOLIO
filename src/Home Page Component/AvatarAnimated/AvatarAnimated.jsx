import './style.css'
import Avatar from '../Header Section/Avatar'
export default function AvatarAnimated(){
    return(
        <>
        <div className="square"  data-aos="fade-left">
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
                <Avatar/>
            </div>
        </div>
        </>
    )
}