import "./Topbox.css"
import {FaStopwatch} from "react-icons/fa"
import UpCommingInterviews from "./UpCommingInterviews.json"
const Topbox = () => {
  return (
    <div className="topbox">
        <div className="list">
            {
                UpCommingInterviews.map((user)=>{
                    return(
                        <div className="listItem" key={user.id}>
                            <div className="user">
                                <img src={user.img} alt="/"/>
                                <div className="userText">
                                    <span className="username">{user.username}</span>
                                    <span className="type">{user.type}</span>
                                </div>
                            </div>
                        <span className="time"> 
                        <FaStopwatch/>
                        1.30-2.00
                        </span>
                    </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Topbox