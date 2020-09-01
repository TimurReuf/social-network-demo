import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (

        <div>
            <div>
              {/*  <div className={s.img}>
                    <img src={'https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'}/>
                </div>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large!=null ? props.profile.photos.large : userPhoto } />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo