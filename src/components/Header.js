import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


import '../App.css';


class Header extends React.Component {
  render() {
    return (
      [
        // 'Primary',
        // 'Secondary',
        // 'Success',
        // 'Danger',
        // 'Warning',
        // 'Info',
        // 'Light',
        'Dark',
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100%' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title> Horned Animals </Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      ))
    );
  }
}

export default Header;
