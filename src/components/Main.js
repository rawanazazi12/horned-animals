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
      hornsNumber:1,
      hornsDataArr:this.props.dataFromJsonFile
    };
  }


  filteringBeasts(newHornsNumber){
    console.log(this.state);
    let filteredArr=this.state.hornsDataArr.filter((element) =>{
      return(element.horns === this.hornsNumber);

    });
    this.setState({
      hornsNumber: newHornsNumber,
      hornsDataArr:filteredArr
    });
    console.log(filteredArr);
    return filteredArr;
  }

  render() {
    return (
      <main>
        <HornsForm
          hornsData={this.props.dataFromJsonFile}
          filtering={this.filteringBeasts}
        />
        <h3>
            Click on the Image to Vote for Your Favourite Beast
        </h3>
        <Container>
          <Row>
            {this.state.hornsDataArr.map((item) => (
              <Col lg={4} xs="auto">
                <HornedBeasts
                  title={item.title}
                  description={item.description}
                  img={item.image_url}
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

