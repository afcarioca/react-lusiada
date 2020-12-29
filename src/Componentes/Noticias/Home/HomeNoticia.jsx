import React from 'react';


export default class HomeNoticia extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            noticia: []
          }
    }


   async componentDidMount(){
        const id = this.props.match.params.id;
      
        
       await fetch(`http://localhost:3333/noticia/${id}`,{
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        
        })
        .then(res => res.json())
        .then((data) =>{
            this.setState({noticia: data.noticia})
            console.log(data.noticia);
        })
        .catch(console.log)
        
        }
    
    
      render(){
       
       const noticia = this.state.noticia;
       const imageBaseUrl = "http://localhost:3333/uploads/";

        return(
          <div>
            
              <h1>{noticia.titulo}</h1>
              <div><img src={`${imageBaseUrl}${noticia.foto}`}/></div>
              <h3>{noticia.resumo}</h3>
              <p>{noticia.conteudo}</p>
          </div>
        );
      }
}


