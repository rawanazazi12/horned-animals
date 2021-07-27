import React from 'react';
import Card from 'react-bootstrap/Card';


class Footer extends React.Component {

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
          <Card.Footer></Card.Footer>
          <Card.Body>
            <Card.Title> <h6>Author: Rawan Alazazi</h6> </Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      ))

    );
  }


}

export default Footer;
