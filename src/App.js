import logo from './logo.svg';
import React, { Component } from 'react'; 
import Boton from "./components/Boton.js";  //Importo El Boton Submit para el CHAT
import Cabecera from "./components/Cabecera.js";  //Importo El Logo Header
import Chat from "./components/Chat";   //Importo El campo usado para ver los Mensajes
import './App.css';
import Entrada from './components/Entrada'; // Importo el Imput para escribir el Mensaje
import { unstable_Box as Box } from '@material-ui/core/Box';


class App extends Component {
  render() {
    return (

      <div >
          <Cabecera />


        <div style = {{ display : "flex", justifyContent: "center" }}>
            

               <Chat/>
        </div>
   



      <Box width="100%" bgcolor="background.paper">
      <div style = {{ display : "flex", justifyContent: "center" }}>

      <Box width={300} bgcolor="grey.300" p={1} my={0.5}>
      <Entrada/>
      </Box>
         
      <Box width={300} bgcolor="grey.300" p={1} my={0.5}>
      <Boton/>
      </Box>

           
        </div>
        </Box>

     
      </div>
    );
  }
}

export default App;
