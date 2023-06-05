import React,{ Component} from "react";
import DogList from "./DogList";
import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dogs: []
    }
  }

  componentDidMount(){
    fetch ( "https://dog.ceo/api/breeds/image/random/10")
    .then((res) => res.json()) 
    .then((data) =>{
     this.setState({ dogs: data.message })
    })
  }
  render(){
    return(
      <div>
      <h1 style={{textAlign:"center"}}>
      Welcome to Dogz World 🐶
      </h1>
      <button onClick={()=> window.location.reload(false)}> Click to Reload!</button>

      <DogList  dogs= {this.state.dogs}/>
      </div>
    );
  }
}
export default App;