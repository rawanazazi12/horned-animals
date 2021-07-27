import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import ModalHeader from 'react-bootstrap/esm/ModalHeader';
// import { render } from '@testing-library/react';

class SelectedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show:false
    };
  }
  handleModal() {
    this.setState(
      {
        show: this.setState({ show: !this.props.show })
      }
    );
  }
  render() {
    return (
      <div>
        <Button onClick={() => { this.handleModal();}}>
                    Launch demo modal
        </Button>

        <Modal show={this.props.show} onHide={()=>this.handleModal}>
          <Modal.Header closeButten>Modal Head Part</Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { this.handleModal();}} >
                            Close
            </Button>
                        Save Changes
          </Modal.Footer>
        </Modal>
      </div>
    );
  }


}
export default SelectedBeast;

