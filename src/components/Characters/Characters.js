import React, {useEffect, useState} from 'react';
import './Characters.css';

import CharacterDetails from './characterDetails';

import Pagination from '@material-ui/lab/Pagination';

import Button from '@material-ui/core/Button';




export default function Characters() {
    
    const [allPages, setAllPages] = useState();
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [character, setCharacters] = useState([])

    const [species, setSpecies] = useState('')
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')

    const [characterDetailsModal, setCharacterDetailsModal] = useState(false)
    const [characterDetails, setCharacterDetails] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?species=${species}&status=${status}&gender=${gender}&page=${page}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setAllPages(data.info.pages);
            setCharacters(data.results);
            console.log(data);
        });
    }, [species, status, gender, page])

    const reset = (e) => {
        e.preventDefault();
        setSpecies( '' )
        setStatus( '' )
        setGender( '' )
    }

    const detailsSet = (el) => {
        setCharacterDetailsModal(true)
        setCharacterDetails(el)
    }
    const detailsSetClose = () => {
        setCharacterDetailsModal(false)
    }
    
    return (
        <div className='Characters'>
            <h2> Characters </h2>

            <form className="form-filters">
                
                <label>
                    Species: 
                    <select
                        value={species}
                        autoComplete="off"
                        onChange={(e) => setSpecies( e.target.value )}
                        >
                            <option value="">-</option>
                            <option value="Human">Human</option>
                            <option value="Alien">Alien</option>
                            <option value="Humanoid">Humanoid</option>
                    </select>
                </label>

                <label>
                    Status: 
                    <select
                        value={status}
                        autoComplete="off"
                        onChange={(e) => setStatus( e.target.value )}
                        >
                            <option value="">-</option>
                            <option value="alive">alive</option>
                            <option value="dead ">dead </option>
                            <option value="unknown">unknown</option>
                    </select>
                </label>

                <label>
                    Gender: 
                    <select
                        value={gender}
                        autoComplete="off"
                        onChange={(e) => setGender( e.target.value )}
                        >
                            <option value="">-</option>
                            <option value="female">female</option>
                            <option value="male ">male </option>
                            <option value="genderless ">genderless </option>
                            <option value="unknown ">unknown </option>
                    </select>
                </label>

                <Button variant="contained" color="primary"  onClick={ (e) => reset(e) }>
                    Reset
                </Button>
            </form>

            <div className="character-wrapper">

                {character && character.map( el => {
                    return(
                        <div onClick={ () => detailsSet(el) } className="character-item" 
                            key={el.id}
                            style={{ backgroundImage: `url(${el.image})` }}>
                            <div className="character-item-status">
                                <span style={{ backgroundColor:
                                    el.status === 'Alive' ? 'rgb(9, 67, 255, 0.501)' :  
                                    el.status === 'Dead' ? 'rgb(19, 83, 85, 0.501)' : 
                                    el.status === 'unknown' ? 'rgb(226, 225, 214, 0.501)' : ''
                                }}> {el.status} </span>
                            </div>
                            <div className="character-item-name">
                                {el.name}   
                            </div>

                            {el.status === 'Dead' ? <div className="line-middle"></div> : null}
                        </div>
                    )
                })
                }
            </div>

            <Pagination count={allPages} page={page} onChange={ handleChange } />

            { characterDetailsModal 
            ? 
            <CharacterDetails 
                characterDetails={characterDetails}
                Close={ ()=> detailsSetClose() }
                /> 
            : 
            null }

        </div>
    )
}

