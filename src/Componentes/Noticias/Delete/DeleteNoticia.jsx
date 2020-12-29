import React from 'react';


export default class DeleteNoticia extends React.Component{
    

    async componentDidMount(){
        const id = this.props.match.params.id;
        const key = localStorage.getItem('token');
        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }
        await fetch(`http://localhost:3333/noticia/${id}`, { 
            method: 'DELETE',
            headers: {'Content-Type':'application/json','Authorization':'Bearer ' +key},
 
        })
        .then(() => this.setState({ status: 'Delete successful' }));

        this.props.history.push({pathname : `/noticias`});

    }
   

   

     render(){
        const id = this.props.match.params.id;

        return(
        
         <div>
             Notícia {id} deletada!;
         </div>  
      
        );
      }
}


