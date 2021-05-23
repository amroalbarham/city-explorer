import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';



class Forminfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            localData: '',
            display: false,
            errorMessage: false,
            Error:'',
        }
    }

    getCity = async (event) => {
        event.preventDefault();

        let url = `https://eu1.locationiq.com/v1/search.php?key=pk.aa88f8f51366daa6b9549e2ef1a7466f&q=${this.state.search}&format=json`;
        try {
            let reuslt = await axios.get(url);
            // console.log(reuslt);
            // this.props.setdata(reuslt);

            this.setState({
                localData: reuslt.data[0],
                display: true,
            })

        }

        catch(error) {
            this.setState({
                // localData: reuslt.data[0],
                display: false,
                errorMessage: true,
                Error:error,

            })
        }
    }

    getData = event => {
        this.setState({
            search: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.getCity} >

                    <Form.Label><h1>City Explorer</h1></Form.Label>
                    <Form.Control type="text" placeholder="add a city" onChange={this.getData} />
                    {/* <p>{this.state.localData.display_name}</p> */}


                    <Button variant="primary" type="submit">
                        Explore
  </Button>
                </Form>
                {this.state.display &&
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.aa88f8f51366daa6b9549e2ef1a7466f&center=${this.state.localData.lat},${this.state.localData.lon}`} />
                        <Card.Body>
                            <Card.Title>{this.state.localData.display_name}</Card.Title>
                            <Card.Text>
                            <h3>latitude:</h3>{this.state.localData.lat}<br/>
                            <h3>longitude:</h3>{this.state.localData.lon}
                              
    </Card.Text>


                        </Card.Body>
                    </Card>
                }


                {this.state.errorMessage &&
                    <p>error is {this.state.Error.response.status}</p>
                }


            </div>
        )
    }
}
export default Forminfo;