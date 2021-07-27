import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/assets/data.json';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Beast.css';
// import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  render() {
    return (
      <div >
        <Header />
        <Main
          dataFromJsonFile={Data} 
        />
        <Footer />
      </div>
    
    );
  }
  
}


export default App;
