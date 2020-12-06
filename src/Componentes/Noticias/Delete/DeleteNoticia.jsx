import React from 'react';


export default class DeleteNoticia extends React.Component{
    

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
        fetch(`http://localhost:8000/api/noticias/${id}`, { method: 'DELETE' })
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


