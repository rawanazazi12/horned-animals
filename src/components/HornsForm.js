import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export class HornsForm extends Component {
  updatingHornsNumber= (event)=>{
    let newFilteredArr=this.props.hornsData;
    if(event.target.value){

      newFilteredArr=this.props.hornsData.filter((element)=>{
        return((element.horns) === parseInt(event.target.value));
      });
    }

    this.props.filteringBeasts(newFilteredArr);
  }
  render() {
    return (
      <div>
        <Form style={{ width: '27rem'}} >
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Text className='text-muted' style={{fontFamily:'tahoma', fontSize:'16px', fontWeight:'bold'}}>
                            How many Horns do you want to show?
            </Form.Text>
            <br/>
            <Form.Select onChange={(event)=>this.updatingHornsNumber(event)} aria-label='Default select example'>
              <option>Select</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='100'>A hundred</option>
              <option value=''>All</option>
            </Form.Select>
          </Form.Group>

        </Form>
      </div>
    );
  }
}

export default HornsForm;




