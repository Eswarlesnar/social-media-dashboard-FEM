import "./overview.css"
import upIcon from "../../assets/icon-up.svg"
import downIcon from "../../assets/icon-down.svg"
import instagramIcon from "../../assets/icon-instagram.svg"
import facebookIcon from "../../assets/icon-facebook.svg"
import twitterIcon from "../../assets/icon-twitter.svg"
import youtubeIcon from "../../assets/icon-youtube.svg"

const Overview = () => {
    return <div className="overview-container">
        <h2>Overview - Today</h2>
        <div className="overview-contents">
           <div className="overview-card">
             <div className="header">
                <p>Page views</p>
                <img src = {facebookIcon} alt ="facebook" />
             </div>
             <div className="footer">
                <h5>87</h5>
                <div>
                  <img src = {upIcon} alt="upicon" /> 
                  <p className="percentage positive">3%</p>
                </div>
             </div>
           </div>
           <div className="overview-card">
             <div className="header">
                <p>Likes</p>
                <img src = {facebookIcon} alt ="facebook" />
             </div>
             <div className="footer">
                <h5>52</h5>
                <div>
                  <img src = {downIcon} alt="downIcon" /> 
                  <p className="percentage negative">3%</p>
                </div>
             </div>
            </div> 
            <div className="overview-card">
                <div className="header">
                    <p>Likes</p>
                    <img src = {instagramIcon} alt ="instagram" />
                </div>
                <div className="footer">
                    <h5>5462</h5>
                    <div>
                    <img src = {upIcon} alt="upicon" /> 
                    <p className="percentage positive">2257%</p>
                    </div>
                </div>
           </div>
           <div className="overview-card">
                <div className="header">
                    <p>Profile Views</p>
                    <img src = {instagramIcon} alt ="instagram" />
                </div>
                <div className="footer">
                    <h5>52k</h5>
                    <div>
                    <img src = {upIcon} alt="upicon" /> 
                    <p className="percentage positive">1375%</p>
                    </div>
                </div>
           </div>
           <div className="overview-card">
                <div className="header">
                    <p>Retweets</p>
                    <img src = {twitterIcon} alt ="twitter" />
                </div>
                <div className="footer">
                    <h5>52k</h5>
                    <div>
                    <img src = {upIcon} alt="upicon" /> 
                    <p className="percentage positive">303%</p>
                    </div>
                </div>
           </div>
           <div className="overview-card">
                <div className="header">
                    <p>Likes</p>
                    <img src = {twitterIcon} alt ="twitter" />
                </div>
                <div className="footer">
                    <h5>507</h5>
                    <div>
                    <img src = {upIcon} alt="upicon" /> 
                    <p className="percentage positive">553%</p>
                    </div>
                </div>
           </div>
           <div className="overview-card">
                <div className="header">
                    <p>Likes</p>
                    <img src = {youtubeIcon} alt ="youtube" />
                </div>
                <div className="footer">
                    <h5>107</h5>
                    <div>
                    <img src = {downIcon} alt="downIcon" /> 
                    <p className="percentage negative">19%</p>
                    </div>
                </div>
           </div>
           <div className="overview-card">
                <div className="header">
                    <p>Total Views</p>
                    <img src = {youtubeIcon} alt ="youtube" />
                </div>
                <div className="footer">
                    <h5>1407</h5>
                    <div>
                    <img src = {downIcon} alt="downIcon" /> 
                    <p className="percentage negative">12%</p>
                    </div>
                </div>
           </div>
        </div>
    </div>
}

export default Overview