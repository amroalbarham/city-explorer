import React from 'react';
import Card from 'react-bootstrap/Card'



class Movie extends React.Component {


    render() {


        return (
            <>
                {(this.props.setmovie.length !== 0 && this.props.display) && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Movies Data
                        </Card.Title>
                        <Card.Text>
                            Date: {this.props.setmovie[0].title}<br />
                                overview: {this.props.setmovie[0].overview}<br />
                        avgVotes:{this.props.setmovie[0].overview}<br />
                        totalVotes:{this.props.setmovie[0].overview}<br />
                        imagePath:{this.props.setmovie[0].overview}<br />
                        popularity:{this.props.setmovie[0].overview}<br />
                        releaseDate:{this.props.setmovie[0].overview}<br />

                        </Card.Text>
                    </Card.Body>
                </Card>}

                {this.props.display === false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            Movie Data with error: {this.props.setmovie.status}
                        </Card.Title>
                        <Card.Text>
                            {/* {this.props.setmovie.message} */}


                        </Card.Text>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default Movie;
