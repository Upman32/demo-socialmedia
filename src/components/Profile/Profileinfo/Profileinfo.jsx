import Preloader from '../../common/preloader'
import c from './Profileinfo.module.css'
import React from 'react'
import ProfileStatus from './ProfileStatus'
import ProfileStatusHooks from './ProfileStatusHooks'


const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    

    return (

     <div>

{/* <div>
    <img src='https://c4.wallpaperflare.com/wallpaper/128/164/867/anime-monogatari-series-deishuu-kaiki-wallpaper-thumb.jpg' />
</div> */}
<div className={c.descriptionBlock}>
    <img src={props.profile.photos.large} />
    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
</div>

</div>
    )
}
    
export default Profileinfo