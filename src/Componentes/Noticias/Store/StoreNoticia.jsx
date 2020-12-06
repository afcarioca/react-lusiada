import React from 'react';


export default class StoreNoticia extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


        handleSubmit(event){ 
            event.preventDefault();
            fetch('http://localhost:8000/api/noticias', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
            "titulo": this.titulo.value,
            "resumo": this.resumo.value,
            "conteudo": this.conteudo.value,
            "foto": this.foto.value,
            })
            });
        };
 

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <input ref={(ref) => {this.titulo = ref}} placeholder="Título" type="text" name="titulo"/><br />
                <input ref={(ref) => {this.resumo = ref}} placeholder="Resumo" type="text" name="resumo"/><br />
                <input ref={(ref) => {this.conteudo = ref}} placeholder="Conteúdo" type="text" name="conteudo"/><br />
                <input ref={(ref) => {this.foto = ref}} placeholder="Foto" type="text" name="foto"/><br />

               <input type="submit" value="Submit" />
            </form>
        );
    }
}