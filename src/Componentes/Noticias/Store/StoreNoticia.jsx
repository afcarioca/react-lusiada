import React from 'react';
import Menu from '../../Menu/Menu';
import axios from 'axios';

export default class StoreNoticia extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
        componentDidMount(){
            const key = localStorage.getItem('token');
            if (key === null) {
                this.props.history.push({pathname : `/login`});
            }
        }

     

        handleSubmit(event){ 
            event.preventDefault();
            const key = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('foto', this.foto.files[0]);
            formData.append('titulo', this.titulo.value);
            formData.append('resumo', this.resumo.value);
            formData.append('conteudo', this.conteudo.value);

            if (key === null) {
                this.props.history.push({pathname : `/login`});
            }

        axios({
            method: 'post',
            url: 'http://localhost:3333/noticias',
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
      

    render(){

        return(

            <div>
                <Menu />
                 <form id="myForm" onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" >
                    <input ref={(ref) => {this.titulo = ref}} placeholder="Título" type="text" name="titulo"/><br />
                    <input ref={(ref) => {this.resumo = ref}} placeholder="Resumo" type="text" name="resumo"/><br />
                    <input ref={(ref) => {this.conteudo = ref}} placeholder="Conteúdo" type="text" name="conteudo"/><br />
                    
                    
                    {/*<input ref={(ref) => {this.foto = ref}} placeholder="Foto" type="text" name="foto"/><br />*/}

                    <input ref={(ref) => {this.foto = ref}} placeholder="Foto" type="file" name="foto"/><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
           
        );
    }
}