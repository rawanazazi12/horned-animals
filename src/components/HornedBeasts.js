import React from 'react';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


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

        <Card style={{width:"16rem", height:"25rem" ,marginBlock:"2rem"}}>
          <Card.Img variant="top" src={this.props.img} alt= {this.props.title} title={this.props.title} onClick={this.votingForBeast} style={{width:"16rem", height:"14rem"}}  />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <br/>
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

    }
}
export default HornedBeasts;
