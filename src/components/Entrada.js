import React, { Component } from 'react';

import TextField from "@material-ui/core/TextField";

class Entrada extends Component {
  render() {
    return (
      <div >

<TextField
  placeholder="Ingrese el Mensaje"
  multiline={true}
  rows={10}
  rowsMax={15}
/>
  
 
      </div>
    );
  }
}

export default Entrada;