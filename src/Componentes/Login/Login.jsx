import React from 'react';
import './Login.css'; 

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            token : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    async handleSubmit(){ 
     
        await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
        "email": this.email.value,
        "password": this.password.value,
         })
        }).then(res => res.json())
        .then(json => 
             this.setState({token: json.token})
        ).catch(error =>
             console.log(error.response)
        )
        
        console.log(this.state.token);    
        if(this.state.token != undefined){
            this.props.history.push({
                pathname : '/noticias',
                state :{
               
                token : this.state.token,
             
                }
                } 
              );
        }
            
       

      
     

    };

   

     render(){

        return(
            <form autoComplete="off" className="Login-Form" onSubmit={this.handleSubmit}>
                <input className="Login-Input Login-Input-Email" ref={(ref) => {this.email = ref}} placeholder="Email" type="email" name="email"/><br />
                <input  className="Login-Input Login-Input-Senha" ref={(ref) => {this.password = ref}} placeholder="Senha" type="password" name="password"/><br />
            
            <input className="Login-Input Login-Input-Botao" type="submit" value="Entrar" />
            </form>
        
        );
      }
}


