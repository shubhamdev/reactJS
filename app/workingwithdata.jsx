import React from 'react';
import axios from 'axios';

class Card extends React.Component{
  render(){
    return(
      <div style={{ margin: 'lem'}}>
        <img width="75" src={this.props.avatar_url} />
        <div style={{ display: 'inline-block', marginLeft: 10}}>
          <div style={{ fontSize: '1.25em', fontWeight: 'bold'}}>
            {this.props.name}
          </div>
          <div>
             {this.props.company}
          </div>
          <div>
            {this.props.login}
          </div>
        </div>
      </div>
    )
  }
};

class CardList extends React.Component{
  render(){
      return(
        // <div>
        //   {this.props.cards.map( (person, i) => <Card key = {i} 
        //     data = {person} />)}
        // </div>
                <div>
          {this.props.cards.map( card => <Card key={card.id} {...card}/>)}
        </div>
      );
  }
}

class Form extends React.Component{
  constructor(){
    super();
    this.state ={
      userName :''
    }
  }

  addnewUser(event){
    event.preventDefault()
        this.props.onSubmitDaaaaat.bind(this.state.userName);
        this.setState({userName : ''});
  }

  render(){
    return(
        <form onSubmit={this.props.onSubmitDaaaaat.bind(null, this.state.userName)}>
          <input type="text" 
          value={this.state.userName}
          onChange={(event) => this.setState({ userName : event.target.value})}
          placeholder="Enter name" required/>
          <button type="submit">Add user</button>
        </form>
      )
  }
};

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      cards:[
      ]
    }
  }
  getUserData(a,b){
    axios.get(`https://api.github.com/users/${b}`)
    .then(reseponse =>{
      if(reseponse.data){
        this.setState({
          cards : this.state.cards.concat(reseponse.data)
        })
      }
    }) 
  }
  render(){
    return(
          <div>
          <Form onSubmitDaaaaat={this.getUserData.bind(this, this.props)} />
          <CardList cards={this.state.cards}/>
          </div>
      )
  }
};

export default App;