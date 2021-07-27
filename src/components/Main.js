import React from 'react';
import HornedBeasts from './HornedBeasts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Main extends React.Component {

  render() {
    return (
      <main>
        <h3>
            Click on the Image to Vote for Your Favourite Beast
        </h3>
        <Container>
          <Row>
            {this.props.dataFromJsonFile.map((item) => (
              <Col lg={4} xs="auto">
                <HornedBeasts
                  title={item.title}
                  description={item.description}
                  img={item.image_url}
                />
              </Col>
            ))
            }
          </Row>


        </Container>

      </main>



    );
  }
}



export default Main;

