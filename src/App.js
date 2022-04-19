import React,{Component} from 'react';
import Navbar from './Navbar';
import Search from './Search';
import {BrowserRouter ,Route} from 'react-router-dom'
import Director from './Director';
class App extends Component{
  render(){
    return (  
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/search" component={Search} />
            <Route path="/director"  component={Director} />
            <Route path="/myfavorites"/>
          </div>
        </BrowserRouter>
    );
  }
}
export default App;
