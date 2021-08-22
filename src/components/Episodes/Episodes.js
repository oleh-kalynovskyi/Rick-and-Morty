import React, {useEffect, useState} from 'react';
import './Episodes.css';
import EpisodesCharacters from './EpisodesCharacters'

import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';




export default function Episodes() {

    const [allPages, setAllPages] = useState();
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [name, setName] = useState( '' );
    const [characters, setCharacters] = useState( [] );

    const [characterDetailsModal, setCharacterDetailsModal] = useState(false)
    
    const [Episodes, setEpisodes] = useState([])

    useEffect(() => { 
        fetch(`https://rickandmortyapi.com/api/episode?page=${ page }&name=${ name.title || '' }`)
        .then((response) => {
            return response.json();
        })
        .then(( data ) => {
            setAllPages(data.info.pages)
            setEpisodes(data.results);
        })
        .catch( () => console.log('clean') );
        
    }, [page, name])

    const detailsSet = (el) => {
        setCharacterDetailsModal(true)
        setCharacters(el)
    } 
    const detailsSetClose = () => {
        setCharacterDetailsModal(false)
    }

    return (
        <div className='Episodes'>

            <TextField 
                id="standard-basic" 
                label="Search Episodes" 
                type="text"
                onChange={(e) => setName({ title: e.target.value })}
            />

            <div className="Episodes-wrapper">
                {Episodes && Episodes.map( el => {
                    return(
                        <div onClick={ ()=> detailsSet( el ) } className="Episodes-item" key={el.id}>
                            <div className=""> { el.name && el.name } </div>
                            <div className=""> { el.air_date && el.air_date } </div>
                            <div className=""> { el.episode && el.episode } </div>
                        </div>
                    )
                })
                },
                { characterDetailsModal 
                ? 
                <EpisodesCharacters characters={characters} Close={ ()=> detailsSetClose() }/>
                : 
                null }
            </div>

            <Pagination count={allPages} page={page} onChange={ handleChange } />
            
        </div>
    )
}
