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
        console.log(id);
        fetch(`http://localhost:8000/api/noticias/${id}`,{
        method: 'PUT',
        headers: {'Content-Type':'application/json','Authorization':'Bearer ' +key},
        
        })
        .then(res => res.json())
        .then((data) =>{
            this.setState({noticia: data})
        })
        .catch(console.log)
    
        
        }
    
    


    render(){
       
       const noticia = this.state.noticia;


        return(
          <div>
            
              <h1>{noticia.titulo}</h1>
              <div>{noticia.foto}</div>
              <h3>{noticia.resumo}</h3>
              <p>{noticia.conteudo}</p>
          </div>
        );
      }
}


