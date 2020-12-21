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

  ShowNoticia(id){

    this.props.history.push({
      pathname : `/noticia/${id}`,
      state :{
     
      token : this.props.location.state.token,
   
      }
      } 
    );
 
  }

  DeleteNoticia(id){
    
    this.props.history.push({
      pathname : `/delete/noticia/${id}`,
      state :{
     
      token : this.props.location.state.token,
   
      }
      } 
    );
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
                <a href="" onClick={() =>  this.ShowNoticia(noticia.id)}>{noticia.resumo}</a>
             </li>
            
            <button onClick={() => this.handleClick(noticia.id)}>Atualizar</button>
            <button onClick={() => this.DeleteNoticia(noticia.id)}>Deletar</button>


             <hr/>
          </div>
        ))}
      </ul>
    );
  }
  
  
}
