import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


export default class Menu extends React.Component{


    logout(){
        localStorage.clear();
    }

    render(){

        return(
            <nav className="Menu-Nav">
                <ul className="Menu-Lista">
                    <li> <Link to="/noticias">Home</Link></li>
                    <li> <Link to="/noticia">New</Link></li>
                    <li> <Link to="/login" onClick={this.logout}>Logout </Link>
                    </li>
                 </ul>
            </nav>
        );
    }
}