import React from 'react';

export class Button extends React.Component {

    handleClick() {
      this.props.onClickEvent(this.props.incrementValue);
    }

    render() {
      return (
         <button onClick={this.handleClick.bind(this)}> + {this.props.incrementValue} </button>
      );
    }
}

export class Counter extends React.Component{
    
    constructor(props) {
      super(props);
    }
    render(){
      return(
          <div>{this.props.counte}</div>
        )
    }
}

export default class App extends React.Component{
    constructor() {
      super();
      this.state = {
        counter: 9
      }
    }

    increment(incrementValue, value) {
      this.setState(function(prevState){
        return{
          counter: prevState.counter + value
        }
      })
    }

    render(){
      return(
         <div>

            <Button incrementValue={2} onClickEvent={this.increment.bind(this, this.props)}/>
            <Button incrementValue={4} onClickEvent={this.increment.bind(this, this.props)}/>
            <Button incrementValue={6} onClickEvent={this.increment.bind(this, this.props)}/>
            <Button incrementValue={8} onClickEvent={this.increment.bind(this, this.props)}/>
            <Counter counte={this.state.counter}/>

          </div>
        )
    }
}
