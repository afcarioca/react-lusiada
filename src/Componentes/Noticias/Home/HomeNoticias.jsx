import React from 'react';
import MenuInicial from '../../Menu/MenuIncial';
import "./HomeNoticias.css";

export default class HomeNoticias extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      noticias: []
        
    }
  }
    componentDidMount(){
    
        fetch('http://localhost:3333/noticias',{
        method: 'GET',
        headers:{'Content-Type':'application/json'}
      })
      .then(res => res.json())
      .then((data) =>{
        this.setState({noticias: data.noticias})

      }).catch(console.log)
  }

      ShowNoticia(id){
        this.props.history.push({pathname : `/${id}`});
      }

  render(){
    const imageBaseUrl = "http://localhost:3333/uploads/";
    return(
      <div>
          <MenuInicial />
          <h1>Notícias</h1>
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
               <hr/>
            </div>
          ))}
        </ul>
      </div>
      
    );
  }
  
  
}
