import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './components/assets/data.json';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Beast.css';


// import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show:false
    };
  }

  render() {
    return (
      <div >
        <SelectedBeast
          bb={this.show}
        />
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
