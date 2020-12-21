import React from 'react';
import { Link } from 'react-router-dom';

export default class IndexNoticias extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      noticias: []
        
    }
  }

   componentDidMount(){
  
    const key = this.props.location.state.token;
    
     fetch('http://localhost:8000/api/noticias',{
      method: 'GET',
      headers:{'Authorization':'Bearer ' +key,'Content-Type':'application/json'}
   })
    .then(res => res.json())
    .then((data) =>{
      this.setState({noticias: data})

    })
    .catch(console.log)

    
  }

  handleClick(id) {

    this.props.history.push({
      pathname : `update/noticia/${id}`,
      state :{
     
      token : this.props.location.state.token,
   
      }
      } 
    );
 
    
  }

  render(){

    return(
      <ul>
        {this.state.noticias.map((noticia, index) =>(
          <div  key={index}>
            <li className="Noticia_Titulo">
             {noticia.titulo}

             </li>
             <li className="Noticia_Foto">
               {noticia.foto}
             </li>
             <li className="Noticia_Resumo">
             <Link to={`/noticia/${noticia.id}`}>{noticia.resumo}</Link>

             </li>
            
            {/*<button><Link to={`update/noticia/${noticia.id}`} >Atualizar</Link></button> */}
            <button onClick={() => this.handleClick(noticia.id)}>Atualizar</button>
            <button><Link to={`delete/noticia/${noticia.id}`}>Deletar</Link></button> 

             <hr/>
          </div>
        ))}
      </ul>
    );
  }
  
  
}
