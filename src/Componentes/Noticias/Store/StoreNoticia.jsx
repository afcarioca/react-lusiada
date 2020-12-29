import React from 'react';
import Menu from '../../Menu/Menu';

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

        /*
        handleSubmit(event){ 
            event.preventDefault();
            const key = localStorage.getItem('token');
            console.log(key);
            if (key === null) {
                this.props.history.push({pathname : `/login`});
            }
            fetch('http://localhost:3333/noticias', {
            method: 'POST',
            headers: {'Authorization':'Bearer ' +key,'Content-Type':'application/json'},
            body: JSON.stringify({
            "titulo": this.titulo.value,
            "resumo": this.resumo.value,
            "conteudo": this.conteudo.value,
            "foto": this.foto.value,
            }) 
            });

            this.props.history.push({pathname : `/noticias`});

        };
        */

       handleSubmit(event){ 
        event.preventDefault();
        const key = localStorage.getItem('token');
        console.log(key);
        const data = new FormData();
        data.append('file', this.foto.value);
        console.log(data);
        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }
        fetch('http://localhost:3333/noticias', data, {
        method: 'POST',
        headers: {'Authorization':'Bearer ' +key, 'Accept': "multipart/form-data",
        'Content-Type': 'multipart/form-data'},
        body: JSON.stringify({
        "titulo": this.titulo.value,
        "resumo": this.resumo.value,
        "conteudo": this.conteudo.value,
        "foto": data,
        }) 
        });

        this.props.history.push({pathname : `/noticias`});

     };

    render(){

        return(

            <div>
                <Menu />
                 <form onSubmit={this.handleSubmit} >
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