import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      rating:Array(5).fill(null),
      star:[]
    }
  }
  handleClick(index){
    let newRating= []
    for(let i=0;i<=index;i++){
      newRating[i]="hello"
      this.setState({star:newRating})
    }
  }

  renderStars(){
    return this.state.rating.map(
    (A,index)=>
    <span key={index}
            onClick={()=>this.handleClick(index)}
            className={`${this.state.star[index] === 'hello'?'hello':'box'}`}
    >*</span>
    )
    
    
  }
  render() {
    return (
      <div className="App">
      <h1>  {this.renderStars()}</h1>
      </div>
    );
  }
}
export default App;
