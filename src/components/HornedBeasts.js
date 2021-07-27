import React from 'react';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';


class HornedBeasts extends React.Component {
  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };
  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0
    };
  }

  render() {
    return (
      <div>
        {/* <h2> {this.props.title} </h2>
         <img src={this.props.img} alt= {this.props.title} title={this.props.title} onClick={this.votingForBeast} width='100px' height="80px" />
        <p>{this.props.description} </p>
        <h5>❤️{this.state.numberOfVotes} </h5> */}

        <Card style={{ width: '16rem', height: '25rem', marginBlock: '2rem' }}>
          <Card.Img variant='top' src={this.props.img} alt={this.props.title} title={this.props.title} onClick={this.votingForBeast} style={{ width: '16rem', height: '14rem' }} />
          <Card.Body>            <Card.Title>{this.props.title}</Card.Title>

            <Card.Text>
              {this.props.description}
              <br />
              ❤️{this.state.numberOfVotes}
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    );
  }

  votingForBeast = () => {
    this.setState(
      {
        numberOfVotes: this.state.numberOfVotes + 1
      }
    );

  }

  // Example = () => {
  //   const [show, setShow] = useState = (false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  //     <>
  //       <Button variant="primary" onClick={handleShow}>
  //         Launch demo modal
  //       </Button>

  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleClose}>
  //             Close
  //           </Button>
  //           <Button variant="primary" onClick={handleClose}>
  //             Save Changes
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );
  // }
}
export default HornedBeasts;
