import React from 'react';
import Informationform from './components/formsinf';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardsinfo from './components/cardsinfo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: '',
      display:false,
      show:false,
    }
  }
  setData = (data1,showing) => {
    this.setState({
      data2: data1,
      display:showing,
      show:true,
    })
    console.log(this.state.data2);
  }


  render() {
    return (
      <div>
        <Informationform setData={this.setData} />
      {this.state.show &&
        <Cardsinfo data2={this.state.data2} display={this.state.display} />
      }


      </div>
    )
  }
}
export default App;

        
      
        
