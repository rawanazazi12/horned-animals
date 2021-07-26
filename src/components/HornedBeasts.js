import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        {/* <h2> {this.props.title} </h2>
         <img src={this.props.img} alt= {this.props.title} title={this.props.title} onClick={this.votingForBeast} width='100px' height="80px" />
        <p>{this.props.description} </p>
        <h5>❤️{this.state.numberOfVotes} </h5> */}
        <Row xs={2} md={4} lg={6}>
          {Array.from({ length: 1 }).map(() => (
            <Col>
              <Card>
                <Card.Img variant="top" src={this.props.img} alt= {this.props.title} title={this.props.title} onClick={this.votingForBeast} width='250px' height="200px" />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>
                    {this.props.description}
                    <br/>
                  ❤️{this.state.numberOfVotes}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
          ))}
        </Row>

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
}
export default HornedBeasts;
