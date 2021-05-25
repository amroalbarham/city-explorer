import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import axios from 'axios';


class Informationform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newcity: '',
          
        }
    }
    updateCity = event => {
        this.setState({
            newcity: event.target.value,
        })
    }
    updateform = async (event) => {
        event.preventDefault();
        let url = `https://eu1.locationiq.com/v1/search.php?key=pk.aa88f8f51366daa6b9549e2ef1a7466f&q=${this.state.newcity}&format=json`;
        try{

            let response = await axios.get(url);
            this.props.setData(response.data[0],true);
        }
        catch(error){
            this.props.setData(error,false)
        }

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.updateform}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>your city</Form.Label>
                        <Form.Control type="text" placeholder="your city" onChange={this.updateCity} />

                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        )
    }
}

export default Informationform;