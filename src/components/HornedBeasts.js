import React from 'react';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';


class HornedBeasts extends React.Component {

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
          <Card.Img variant='top' src={this.props.img} alt={this.props.title} title={this.props.title} onClick={() =>{this.showCard();}} style={{ width: '16rem', height: '14rem' }} />
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
  };
  showCard = () => {
    this.votingForBeast();
    this.props.updateVisibleData;
    this.props.modalData(
      this.props.image,
      this.props.title,
      this.props.description,
      this.state.numberOfVotes
    );
    console.log(this.state.numberOfVotes,'HIIIIIIII');
    // this.props.modalData(this.props);

  }

}
export default HornedBeasts;
