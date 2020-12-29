import React from 'react';


export default class ShowNoticia extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            noticia: []
          }
    }


    componentDidMount(){
        const id = this.props.match.params.id;
        const key = localStorage.getItem('token');

        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }
        console.log(id);
        fetch(`http://localhost:3333/noticia/${id}`,{
        method: 'GET',
        headers: {'Content-Type':'application/json','Authorization':'Bearer ' +key},
        
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


