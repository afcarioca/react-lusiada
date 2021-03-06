import React from 'react';

import Menu from "../../Menu/Menu";
import "../Home/HomeNoticias.css"

export default class IndexNoticias extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      noticias: []
        
    }
  }
    async componentDidUpdate(){
      const key = localStorage.getItem('token');
    
        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }

      await fetch('http://localhost:3333/noticias',{
          method: 'GET',
          headers:{'Authorization':'Bearer ' +key,'Content-Type':'application/json'}
        })
        .then(res => res.json())
        .then((data) =>{
          this.setState({noticias: data.noticias})

        }).catch(console.log)
    }
    componentDidMount(){

      const key = localStorage.getItem('token');
    
      if (key === null) {
          this.props.history.push({pathname : `/login`});
      }

    fetch('http://localhost:3333/noticias',{
        method: 'GET',
        headers:{'Authorization':'Bearer ' +key,'Content-Type':'application/json'}
      })
      .then(res => res.json())
      .then((data) =>{
        this.setState({noticias: data.noticias})

      }).catch(console.log)
  }

      ShowNoticia(id){
        this.props.history.push({pathname : `/noticia/${id}`});
      }

      DeleteNoticia(id){
        this.props.history.push({ pathname : `/delete/noticia/${id}`});
      }

      UpdateNoticia(id) {
        this.props.history.push({pathname : `update/noticia/${id}`});
      }

  render(){
    const imageBaseUrl = "http://localhost:3333/uploads/";
    return(
      <div>
          <Menu />
          <ul className="HomeNoticias-Lista">
          {this.state.noticias.map((noticia, index) =>(
            <div  key={index}>
              <li className="HomeNoticias-Titulo">
              {noticia.titulo}

              </li>
              <li className="HomeNoticias-Foto">
              <a href="" onClick={() =>  this.ShowNoticia(noticia.id)}><img src={`${imageBaseUrl}${noticia.foto}`}/></a>
              </li>
              <li className="HomeNoticias-Resumo">
                  <a href="" onClick={() =>  this.ShowNoticia(noticia.id)}>{noticia.resumo}</a>
              </li>
              
              <button onClick={() => this.UpdateNoticia(noticia.id)}>Atualizar</button>
              <button onClick={() => this.DeleteNoticia(noticia.id)}>Deletar</button>
                <hr/>
            </div>
          ))}
        </ul>
      </div>
      
    );
  }
  
  
}
