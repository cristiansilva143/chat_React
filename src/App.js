import logo from './logo.svg';
import React, { Component } from 'react'; 
import Boton from "./components/Boton.js";  //Importo El Boton Submit para el CHAT
import Cabecera from "./components/Cabecera.js";  //Importo El Logo Header
import Chat from "./components/Chat";   //Importo El campo usado para ver los Mensajes
import './App.css';
import Entrada from './components/Entrada'; // Importo el Imput para escribir el Mensaje
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (

      <div style = {{flexGrow : "1", textAlign: "center"}} >

        <Grid container spacing=  {24}>

          <Grid item xs={12}>      
          <Cabecera />
          </Grid>
       
          <Grid item xs={12}> 
           <Chat/>
           </Grid>

             <Grid item xs={6}>
               <Entrada/>
             </Grid>
         
             <Grid item xs={6}>
              <Boton/>
             </Grid>
        </Grid>
        

     
      </div>
    );
  }
}

export default App;
