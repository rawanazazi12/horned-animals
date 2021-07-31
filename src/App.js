import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './components/assets/data.json';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Beast.css';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      visible:true,
      image_url:null,
      title:null,
      description: null,
      numberOfVotes: 0,
    };
  }

  modalData = (image,title, description,votesCount) => {
    this.setState({
      image: image,
      title: title,
      description: description,
      votesCount: votesCount
    });
  };

  updateVisibleData(){
    this.setState({
      visible:!this.state.visible
    });
  }

  render() {
    return (
      <div >
        <Header />
        <Main
          dataFromJsonFile={Data}
          updateVisibleData={this.updateVisibleData}
          modalData={this.modalData}

        />
        <SelectedBeast
          visible={this.state.visible}
          updateVisibleData={this.updateVisibleData}
          image_url={this.props.image_url}
          title={this.props.title}
          description={this.props.description}
          modalData={this.modalData}
        />
        <Footer />

      </div>
    );
  }









}



export default App;
