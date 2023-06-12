import { FollowerDataType } from "../Followers/Followers"
import upIcon from "../../assets/icon-up.svg"
import downIcon from "../../assets/icon-down.svg"
import youtubeIcon from "../../assets/icon-youtube.svg"
import instagramIcon from "../../assets/icon-instagram.svg"
import facebookIcon from "../../assets/icon-facebook.svg"
import twitterIcon from "../../assets/icon-twitter.svg"

import "./followerCard.css"

interface Props {
    data : FollowerDataType
}

const FollowersCard:React.FC<Props> = ({data}) => {
    const uporDownIcon = data.followersTrend ? upIcon : downIcon
    let platformIcon : string ;
    if(data.platform==="youtube"){
        platformIcon = youtubeIcon
    }else if(data.platform === "instagram"){
        platformIcon = instagramIcon
    }else if(data.platform === "twitter"){
        platformIcon = twitterIcon
    }else{
        platformIcon = facebookIcon
    }
    return <div className={`${data.platform} follower-card`}>
        <div className="header">
            <img src = {platformIcon} alt= "icon" />
            <p>{data.accountName}</p>
        </div>
        <div className="content">
            <h3>{data.count}</h3>
            <h6>{data.type}</h6>
        </div>
        <div className= {`${data.followersTrend ? "green" : "red"} footer`}>
            <img src={uporDownIcon} alt ="up/down-  icon"/>
            <p>{data.followersCountToday} today</p>
        </div>
    </div>
}

export default FollowersCard