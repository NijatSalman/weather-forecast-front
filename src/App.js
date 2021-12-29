import {Weather} from "./components/Weather";


const App=()=> {
  return (
    <div className="App">
     <Weather />
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
// class App extends Component {
 
//   state={
      
//   }

//   componentDidMount(){
//     axios.get('/api/forecasts?lang=eng')
//     .then(res=>{
//         this.setState({res})
//     })
//   }

//   render() {
//     return (
//       <div className="App">
         
//           <h2>Welcome to React</h2>
//       </div>
//     );
//   }
// }

// export default App;
