import React from 'react';

export default class App extends React.Component{
    constructor() {
      super();
      this.state = {
        counter: 9
      }
    }

    render(){
      return(
         <div>
            {this.state.counter}
          </div>
        )
    }
}