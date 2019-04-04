import React, { Component } from 'react';

import TextField from "@material-ui/core/TextField";

class Chat extends Component {
  render() {
    return (
      <div >

<TextField
  placeholder="Aca Va el Chat tiene 20 rows"
  multiline={true}
  rows={20}
  rowsMax={20}
/>
  
 
      </div>
    );
  }
}

export default Chat;
