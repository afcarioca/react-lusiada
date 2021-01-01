import React from 'react';
import { Link } from 'react-router-dom';


export default class MenuInicial extends React.Component{


    render(){
        return(
            <nav className="Menu-Nav">
            <ul className="Menu-Lista">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/login" >Login </Link>
                </li>
             </ul>
        </nav>
        );
    }
}



