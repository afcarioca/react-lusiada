import React from 'react';
import Menu from '../../Menu/Menu';
import axios from 'axios';
import '../Store/StoreNoticia.css'

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

   
   handleSubmit(event){ 
    event.preventDefault();
    const key = localStorage.getItem('token');
    const id = this.props.match.params.id;

    const formData = new FormData();
    formData.append('foto', this.foto.files[0]);
    formData.append('titulo', this.titulo.value);
    formData.append('resumo', this.resumo.value);
    formData.append('conteudo', this.conteudo.value);

    if (key === null) {
        this.props.history.push({pathname : `/login`});
    }

    axios({
        method: 'put',
        url: `http://localhost:3333/noticia/${id}`,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data', 'Authorization':'Bearer ' +key }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
        
        this.props.history.push({pathname : `/noticias`});
    }

    handleChange(event) {
        this.setState({noticia: event.target.value});
    }
    

     render(){
       
       const noticia = this.state.noticia;

       
        return(
            <div>
                <Menu />
                <div className="StoreNoticia">
                    <form className="StoreNoticia-Form" onSubmit={this.handleSubmit}>
                        <input className="StoreNoticia-Input-Titulo" ref={(ref) => {this.titulo = ref}} placeholder="Título" type="text" name="titulo" value={noticia.titulo} onChange={this.handleChange}/><br />
                        <input className="StoreNoticia-Input-Resumo"  ref={(ref) => {this.resumo = ref}} placeholder="Resumo" type="text" name="resumo" value={noticia.resumo}  onChange={this.handleChange}/><br />
                        <textarea  className="StoreNoticia-Input-Conteudo"  ref={(ref) => {this.conteudo = ref}} placeholder="Conteúdo" type="text" name="conteudo" value={noticia.conteudo}  onChange={this.handleChange}></textarea><br />
                        <input className="StoreNoticia-Input-Foto" ref={(ref) => {this.foto = ref}} placeholder="Foto" type="file" name="foto" onChange={this.handleChange}/><br />
                        <input className="StoreNoticia-Input-Botao"  type="submit" value="Submit" />
                    </form>
                </div>
            </div>
          
               
            );
      }
}


