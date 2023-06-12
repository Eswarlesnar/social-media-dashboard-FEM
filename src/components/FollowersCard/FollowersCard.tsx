import { FollowerDataType } from "../Followers/Followers"
import upIcon from "../../assets/icon-up.svg"
import downIcon from "../../assets/icon-down.svg"

import "./followerCard.css"

interface Props {
    data : FollowerDataType
}

const FollowersCard:React.FC<Props> = ({data}) => {
    const icon = data.followersTrend ? upIcon : downIcon
    const socialMediaPlatformIcon = `../../assets/${data.icon}`
    const socialMediaImageUrl = new URL(socialMediaPlatformIcon ,  import.meta.url).href
    return <div className={`${data.platform} follower-card`}>
        <div className="header">
            <img src = {socialMediaImageUrl} alt= "icon" />
            <p>{data.accountName}</p>
        </div>
        <div className="content">
            <h3>{data.count}</h3>
            <h6>{data.type}</h6>
        </div>
        <div className= {`${data.followersTrend ? "green" : "red"} footer`}>
            <img src={icon} alt ="up/down-  icon"/>
            <p>{data.followersCountToday} today</p>
        </div>
    </div>
}

export default FollowersCard