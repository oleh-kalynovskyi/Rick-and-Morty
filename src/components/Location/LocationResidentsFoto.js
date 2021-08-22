import React, {useEffect, useState} from 'react';
import './LocationResidentsFoto.css'

export default function LocationResidentsFoto(props) {
    
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
        .catch( () => console.log('wrong') );
        
    }, [url])

    return (
        <div className='LocationResidentsFoto-wrapper'
            style={{ backgroundImage: `url(${data.image && data.image})`, backgroundSize: 'cover'}}>
            <div className="LocationResidentsFoto">
                {data.name}
            </div>
        </div>
    )
}
