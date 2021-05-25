import React from 'react';
import Card from 'react-bootstrap/Card'


class Cardsinfo extends React.Component {
    render() {
        return (
            <div>
                {this.props.display  &&
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.aa88f8f51366daa6b9549e2ef1a7466f&q&center=${this.props.data2.lat},${this.props.data2.lon}`} alt='' />
                        <Card.Body>
                            <Card.Title>{this.props.data2.display_name}</Card.Title>
                            <Card.Text>
                                <h2>lat:</h2> {this.props.data2.lat}<br />
                                <h2>lon:</h2> {this.props.data2.lon}

                            </Card.Text>

                        </Card.Body>
                    </Card>
                }
                {this.props.display === false &&
                    <Card style={{ width: '18rem' }}>
                      
                        <Card.Body>
                           
                            <Card.Text>
                            
                              
                                   
                                   error: {this.props.data2.response.status}<br/>
                                   {this.props.data2.message}
                           

                            </Card.Text>

                        </Card.Body>
                    </Card>
                }
            </div>
        )
    }
}
export default Cardsinfo;