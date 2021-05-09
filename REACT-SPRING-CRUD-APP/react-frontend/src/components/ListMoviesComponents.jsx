import React, { Component } from 'react';
import MoviesService from '../services/MoviesService';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import Card from "react-bootstrap/Card";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

class ListMoviesComponents extends Component {
    constructor(props){
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        MoviesService.getMovies().then((res) => {
            this.setState({movies: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Movies List</h2>
                <div className = "Column">   
                    <Swiper                           
                        id="main"                                   
                        tag="section"
                        wrapperTag="ul"
                        navigation
                        pagination
                        spaceBetween={10}
                        slidesPerView={5}
                        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                        onSlideChange={(swiper) => {
                            console.log('Slide index changed to: ', swiper.activeIndex);
                        }}
                        onReachEnd={() => console.log('Swiper end reached')}                                  
                    >       
                        {   this.state.movies.map(
                                movies => 

                                <SwiperSlide key = {movies.id}>
                                    <Card style={{ width: '10rem' }   }>
                                        <Card.Img variant="top" src={movies.poster_path} />
                                        <Card.Body>
                                            <Card.Title>{movies.title}</Card.Title>
                                            <Card.Text>
                                                Resealese date: {movies.release_date} <br />
                                                Language: {movies.original_language}
                                            </Card.Text>                                     
                                        </Card.Body>
                                    </Card>     
                                </SwiperSlide>                                          
                            )                             
                        }    
                    </Swiper>           
                </div>                
            </div>
        );
    }
}

export default ListMoviesComponents;