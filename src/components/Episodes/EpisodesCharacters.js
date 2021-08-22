import React from 'react';
import EpisodesCharactersPhoto from './EpisodesCharactersPhoto';
import './EpisodesCharacters.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import Button from '@material-ui/core/Button';


import SwiperCore, {Pagination} from 'swiper/core';
  
  SwiperCore.use([Pagination]);

export default function EpisodesCharacters(props) {

    const details = props.characters
    const characters = props.characters.characters
    const {Close} = props;

    return (
        <div className='EpisodesCharacters'>
            <div className="EpisodesCharacters-topBar">
                <h3>Episode</h3>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={()=> Close()}>
                    X
                </Button>
            </div>
            <div className="EpisodesCharacters-details">
                <div className="EpisodesCharacters-details-name">
                    Episode name: {details.name}
                </div>
                <div className="EpisodesCharacters-details-episode">
                    Episode: {details.episode}
                </div>
                <div className="EpisodesCharacters-details-air_date">
                    Relise: {details.air_date}
                </div>
            </div>
            <h4>Episodes Characters</h4>
            <Swiper
                slidesPerView={'auto'} 
                spaceBetween={30}
                className="mySwiper">

                
                {characters && characters.map( (el, i) => {
                    return(
                        <SwiperSlide key={i}>
                            <div className="EpisodesCharacters-item">
                                <EpisodesCharactersPhoto el={el} />
                            </div>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </div>
    )
}