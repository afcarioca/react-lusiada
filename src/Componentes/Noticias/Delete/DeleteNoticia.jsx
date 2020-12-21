import React from 'react';


export default class DeleteNoticia extends React.Component{
    

    componentDidMount(){
        const id = this.props.match.params.id;
        const key = this.props.location.state.token;

        console.log(id);
        fetch(`http://localhost:8000/api/noticias/${id}`, { 
            method: 'DELETE',
            headers: {'Content-Type':'application/json','Authorization':'Bearer ' +key},
 
        })
        .then(() => this.setState({ status: 'Delete successful' }));
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


