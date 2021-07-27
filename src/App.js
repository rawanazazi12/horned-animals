import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './components/assets/data.json';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Beast.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import Modal from 'react-bootstrap/Modal';
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

        <Button variant="primary">
          Launch demo modal
        </Button>

        <Modal show={false}>
          {/* <Modal.Header closeButton> */}
          <Modal.Title>Modal heading</Modal.Title>
          {/* </Modal.Header> */}
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button >
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}> */}
              Save Changes
            {/* </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }









}



export default App;
