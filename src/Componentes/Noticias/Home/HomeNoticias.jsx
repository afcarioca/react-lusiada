import React from 'react';


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
          <ul>
          {this.state.noticias.map((noticia, index) =>(
            <div  key={index}>
              <li className="Noticia_Titulo">
              {noticia.titulo}

              </li>
              <li className="Noticia_Foto">
              <a href="" onClick={() =>  this.ShowNoticia(noticia.id)}><img src={`${imageBaseUrl}${noticia.foto}`}/></a>
              </li>
              <li className="Noticia_Resumo">
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
