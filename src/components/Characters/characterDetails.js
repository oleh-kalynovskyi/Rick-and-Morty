import React from 'react';
import './CharacterDetails.css';

import Button from '@material-ui/core/Button';

export default function CharacterDetails(props) {
    const Character = props.characterDetails

    const {Close} = props;

    return (
        <div className='CharacterDetails'
            style={{ backgroundImage:  `url(${Character.image && Character.image})`, backgroundSize: 'cover'  }}>

            <div className="CharacterDetails-box">

                <div className="CharacterDetails-box-btn">
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={()=> Close()}>
                        X
                    </Button>
                </div>

                <div className="CharacterDetails-box-elements">
                    <div>Name: {Character.name && Character.name}</div>
                    <div>Gender: {Character.gender && Character.gender}</div>
                    <div>Location: {Character.location.name && Character.location.name}</div>
                    <div>Origin: { Character.origin.name && Character.origin.name}</div>
                    <div>Species: { Character.species && Character.species}</div>
                    <div>Status: { Character.status && Character.status}</div>
                </div>
                
            </div>

        </div>
    )
}
