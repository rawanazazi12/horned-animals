import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export class HornsForm extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedHornsNumber:''
    };
  }
  
  updatingHornsNumber= (event)=>{
    console.log('Hiiiiiiiiiiiiii');
    this.setState ({
      selectedHornsNumber: event.target.value
    });
    this.props.filteringBeasts(this.state.selectedHornsNumber);
    console.log(this.state.selectedHornsNumber,'HHH');
    
  }
  submittingForm=(event)=>{
    event.preventDefault();
    this.props.filteringBeasts(this.state.selectedHornsNumber);
  }
  render() {
    return (
      <div>
        <Form style={{ width: '27rem'}} onSubmit={(event)=>this.submittingForm(event)}>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Text className='text-muted' style={{fontFamily:'tahoma', fontSize:'16px', fontWeight:'bold'}}>
                            How many Horns do you want to show?
            </Form.Text>
            <br/>
            <Form.Select onChange={(event=>this.updatingHornsNumber(event))} aria-label='Default select example'>
              <option>Select</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='4'>All</option>
            </Form.Select>
          </Form.Group>

        </Form>
      </div>
    );
  }
}

export default HornsForm;




