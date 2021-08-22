import React, {useEffect, useState} from 'react';
import './EpisodesCharactersPhoto.css'

export default function EpisodesCharactersPhoto(props) {

    const url = props.el

    const [data, setData] = useState([])

    useEffect(() => { 
        fetch( url )
        .then((response) => {
            return response.json();
        })
        .then(( data ) => {
            setData(data)
        })
        .catch( () => console.log('clean') );
        
    }, [url])

    return (
        <div className='EpisodesCharactersPhoto'
            style={{ backgroundImage: `url(${data.image && data.image})`, backgroundSize: 'cover'}}>
            <div className="EpisodesCharactersPhoto">
                {data.name}
            </div>
        </div>
    )
}
