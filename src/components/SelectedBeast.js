import React from 'react';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import ModalHeader from 'react-bootstrap/esm/ModalHeader';
// import { render } from '@testing-library/react';


class SelectedBeast extends React.Component {

  render() {
    return (
      <div>
        <Modal visible={this.props.visible} onClick={this.props.updateVisibleData}>
          {/* <Modal.Header closeButten>Modal Head Part</Modal.Header> */}
          <Modal.Title>{this.props.title}</Modal.Title>
          <Modal.Body> {this.props.description}
            <br />
            ❤️{this.props.numberOfVotes}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.updateShowData} >
              Close
            </Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }


}
export default SelectedBeast;

