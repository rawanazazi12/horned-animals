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

        <Card style={{ width: '16rem', height: '25rem', marginBlock: '2rem' }}>
          <Card.Img variant='top' src={this.props.img} alt={this.props.title} title={this.props.title} onClick={this.votingForBeast} style={{ width: '16rem', height: '14rem' }} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>

            <Card.Text>
              {this.props.description}
              <br />
              ❤️{this.state.numberOfVotes}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    );
  }

  votingForBeast = () => {
    this.setState(
      {
        numberOfVotes: this.state.numberOfVotes + 1
      }
    );
    this.props.handleModal;

  }

}
export default HornedBeasts;
