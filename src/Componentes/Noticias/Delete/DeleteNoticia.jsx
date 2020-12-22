import React from 'react';


export default class DeleteNoticia extends React.Component{
    

    componentDidMount(){
        const id = this.props.match.params.id;
        const key = localStorage.getItem('token');
        if (key === null) {
            this.props.history.push({pathname : `/login`});
        }
        fetch(`http://localhost:8000/api/noticias/${id}`, { 
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


