import React from 'react';
import Menu from '../../Menu/Menu';


export default class UpdateNoticia extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            noticia: [],
         
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

   componentDidMount(){
    const id = this.props.match.params.id;
    const key = localStorage.getItem('token');
   
        
        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }
    fetch(`http://localhost:3333/noticia/${id}`,{
        method: 'GET',
        headers:{'Authorization':'Bearer ' +key,'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then((data) =>{
        this.setState({noticia: data.noticia})
    })
    .catch(console.log)

    
   }

    async handleSubmit(event){ 
        event.preventDefault();
        const id = this.props.match.params.id;
        const key = localStorage.getItem('token');

        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }

       await fetch(`http://localhost:3333/noticia/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json','Authorization':'Bearer ' +key},
        body: JSON.stringify({
        "titulo": this.titulo.value,
        "resumo": this.resumo.value,
        "conteudo": this.conteudo.value,
        "foto": this.foto.value,
            })
        });

        this.props.history.push({pathname : `/noticias`});
    };

    handleChange(event) {
        this.setState({noticia: event.target.value});
    }
    

     render(){
       
       const noticia = this.state.noticia;

       
        return(

            <div>
                <Menu />
                 <form onSubmit={this.handleSubmit}>
                    <input ref={(ref) => {this.titulo = ref}} placeholder="Título" type="text" name="titulo" value={noticia.titulo} onChange={this.handleChange}/><br />
                    <input ref={(ref) => {this.resumo = ref}} placeholder="Resumo" type="text" name="resumo" value={noticia.resumo}  onChange={this.handleChange}/><br />
                    <input ref={(ref) => {this.conteudo = ref}} placeholder="Conteúdo" type="text" name="conteudo" value={noticia.conteudo}  onChange={this.handleChange}/><br />
                    <input ref={(ref) => {this.foto = ref}} placeholder="Foto" type="text" name="foto" value={noticia.foto}  onChange={this.handleChange}/><br />
                    <input type="submit" value="Submit" />
               </form>
            </div>
               
            );
      }
}


