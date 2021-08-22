import React from 'react';
import './LocationResidents.css'

import LocationResidentsFoto from './LocationResidentsFoto';

import Button from '@material-ui/core/Button';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {Pagination} from 'swiper/core';
  
  SwiperCore.use([Pagination]);

export default function LocationResidents(props) {
    const residents = props.residents.residents
    const details = props.residents
    
    const {Close} = props;

    return (
        <div className='LocationResidents'>
            <div className="LocationResidents-topBar">
                <h3>Location</h3>

                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={()=> Close()}>
                    X
                </Button>

            </div>

            <div className="LocationResidents-details">
                <div className="EpisodesCharacters-details-name">
                    name: { details.name }
                </div>
                <div className="EpisodesCharacters-details-type">
                    type: { details.type }
                </div>
            </div>
            <h3>Residents: </h3>
            {residents && residents.length !== 0 
                ? 
                <Swiper
                    slidesPerView={'auto'} 
                    spaceBetween={30}
                    className="mySwiper">

                    {residents && residents.map( (el, i) => {
                        return(
                            <SwiperSlide key={i}>
                                <div className="LocationResidents-item">
                                    <LocationResidentsFoto el={el} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
                : 
                'nobody lives here'
            }

        </div>
    )
}
