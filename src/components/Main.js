import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornsForm from './HornsForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { render } from '@testing-library/react';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      newHornsNumber:1,
      filteredArr:this.props.dataFromJsonFile
    };
  }


  filteringBeasts=(filteredHornBeasts)=>{
    this.setState({
      filteredArr:filteredHornBeasts
    });

  }
  render() {
    return (
      <main>
        <HornsForm
          hornsData={this.props.dataFromJsonFile}
          filteringBeasts={this.filteringBeasts}
        />
        <h3>
            Click on the Image to Vote for Your Favourite Beast
        </h3>
        <Container>
          <Row>
            {this.state.filteredArr.map((item) => (
              <Col lg={4} xs="auto">
                <HornedBeasts
                  title={item.title}
                  description={item.description}
                  img={item.image_url}
                  updateVisibleData={this.props.updateVisibleData}
                  modalData={this.props.modalData}
                  hornsNo={item.horns}
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

