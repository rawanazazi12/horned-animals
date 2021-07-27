import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './assets/data.json';



class Main extends React.Component {
  render() {
    return (
      <main>
        <h3>
            Click on the Image to Vote for Your Favourite Beast
        </h3>
        {Data.map((item) => (
          <HornedBeasts
            title={item.title}
            description={item.description}
            img={item.image_url}
          />
        ))
        }
      </main>



    );
  }
}



export default Main;

