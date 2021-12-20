import React from 'react';
import Nav from '../components/layout/nav';
import ItemContent from '../components/myItemsPage/itemContent';
import BottomSection from "../components/home/bottom";
import {useHistory} from 'react-router-dom';
import logo_img from '../assets/img/logo.png';
import avatar_default from '../assets/img/avatar_default.png';
import avatar_default1 from '../assets/img/1.png';


import {useApplicationContext} from "../contexts"
function ItemsPage(props){
    var router = props.match.params.id;
    const history = useHistory();
    //context data
    const [state] = useApplicationContext();
    var myWeaponTokens = state.MyWeaponTokens;

    
    return(
        <div>
           <Nav />
           <div class="x-weaponCreatePage signup_div" >
               <img src={logo_img} style={{width:200}} />
               <p className="header">SIGN UP</p>
               <div className="signup_form">
                    <div style={{width:'100%'}}>
                        <div>
                            <label>Name</label>
                            <input />
                        </div>
                        <div style={{marginTop:10}}>
                            <label>Bio</label>
                            <input />
                        </div>
                        <div style={{marginTop:10}}>
                            <label>Team</label>
                            <input />
                        </div>
                        <div style={{marginTop:10}}>
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div style={{marginTop:10}}>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div style={{marginTop:10}}>
                            <label>Confirm</label>
                            <input type="password" />
                        </div>
                       
                    </div>
                    <div className="upload_img_div">
                        <div>
                            <img src={avatar_default}></img>
                            <button>CHOOSE IMAGE</button>
                        </div>
                        <div>
                            <img src={avatar_default1}></img>
                            <button>COVER IMAGE</button>
                        </div>
                    </div>
               </div>
           </div>
           <BottomSection />
        </div>
    )
}

export default ItemsPage;