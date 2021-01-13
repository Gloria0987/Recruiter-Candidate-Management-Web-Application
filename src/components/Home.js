import React,{Component} from 'react';
import poweredbypeople from "./images/poweredbypeople.jpg";
import "./styles.css"
export class Home extends Component {
    render(){
        return(
            <div>
            <img alt="poweredbypeople" className="photo" src={poweredbypeople} />
          </div>
        )
    }
}