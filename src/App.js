// import { render } from '@testing-library/react';
import React from 'react';
import Forminfo from './component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cards from './component/Card'

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     location: {},
  //   }
  // }
  // setdata = reuslt => {
  //   this.setState({
  //     location: reuslt,
  //   })
  // }

  render() {
    return (
      <div>
        <Forminfo />
        {/* <Cards
          sentdata1={this.state.location}
        /> */}
      </div>
    )
  }
}


export default App;
