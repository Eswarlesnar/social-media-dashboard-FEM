import "./followers.css"
import FollowersCard from "../FollowersCard/FollowersCard";



export interface FollowerDataType {
   platform : string,
   type : "Subscribers" | "Followers" ;
   count : string,
   followersTrend : boolean, 
   followersCountToday : number , 
   icon : string,
   accountName : string
}


const FacebookFollowerData : FollowerDataType = {
    platform : "facebook",
    type : "Followers", 
    count : "1987",
    followersTrend : true , 
    followersCountToday : 12,
    icon : "icon-facebook.svg",
    accountName : "@nathanf"
}

const TwitterFollowerData : FollowerDataType = { 
    platform : "twitter",
    type : "Followers", 
    count : "1044",
    followersTrend : true , 
    followersCountToday : 99,
    icon : "icon-twitter.svg",
    accountName : "@nathanf"
}

const InstagramFollowerData : FollowerDataType = {
    platform : "instagram" ,
    type : "Followers", 
    count : "11k",
    followersTrend : true , 
    followersCountToday : 1099,
    icon : "icon-instagram.svg",
    accountName : "@realnathanf"
}

const YoutudeFollowerData  : FollowerDataType = {
    platform: "youtube",
    type : "Subscribers", 
    count : "8239",
    followersTrend : false , 
    followersCountToday : 149,
    icon : "icon-youtube.svg",
    accountName : "Nathan F"
}


const Followers = () => {
    return <div className="followers-container"> 
        <FollowersCard data = {FacebookFollowerData}/>
        <FollowersCard data = {TwitterFollowerData }/>
        <FollowersCard  data = {InstagramFollowerData}/>
        <FollowersCard data = {YoutudeFollowerData}/>
    </div>
} 

export default Followers