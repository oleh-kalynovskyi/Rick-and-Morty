import React, {useEffect, useState} from 'react';
import './Location.css';

import LocationResidents from './LocationResidents'

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default function Location() {

    const classes = useStyles();

    const [allPages, setAllPages] = useState();
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [location, setLocation] = useState([])

    const [residents, setResidents] = useState( [] );

    const [characterDetailsModal, setCharacterDetailsModal] = useState(false)

    const [name, setName] = useState( '' );
    const [type, setType] = useState( '' );
    const [dimension, setDimension] = useState( '' );

    console.log(type);

    useEffect(() => { 
        fetch(`https://rickandmortyapi.com/api/location?page=${ page }&type=${ type }&dimension=${ dimension }&name=${ name.title || '' }`)
        .then((response) => {
            return response.json();
        })
        .then(( data ) => {
            setAllPages(data.info.pages)
            setLocation(data.results);
        })
        .catch( () => console.log('wrong') );
    }, [page, type, dimension, name])

    const detailsSet = (el) => {
        setResidents(el); 
        setCharacterDetailsModal(true)
    }
    const detailsSetClose = () => {
        setCharacterDetailsModal(false)
    }

    const reset = (e) => {
        e.preventDefault();
        setDimension( '' )
        setType( '' )
        setName( '' )
    }

    return (
        <div className="Location">
            <h1>Location</h1>


            <form className="form-filters" >

                <TextField 
                    id="standard-basic" 
                    label="Search location:" 
                    type="text"
                    onChange={(e) => setName({ title: e.target.value })}
                />

                Type: 
                <select
                    value={type}
                    autoComplete="off"
                    onChange={(e) => setType( e.target.value )}>
                        <option value="">-</option>
                        <option value="Planet">Planet</option>
                        <option value="Cluster">Cluster</option>
                        <option value="Space station"> Space station</option>
                        <option value="Microverse"> Microverse</option>
                        <option value="Resort"> Resort</option>
                        <option value="Fantasy town"> Fantasy town</option>
                        <option value="Dream"> Space station</option>
                        <option value="Microverse"> Space station</option>
                        <option value="unknown"> unknown</option>
                </select>

                Dimension: 
                <select
                    value={dimension}
                    autoComplete="off"
                    onChange={(e) => setDimension( e.target.value )}
                    >
                        <option value="">-</option>
                        <option value="Dimension C-137">Dimension C-137</option>
                        <option value="Fantasy Dimension ">Fantasy Dimension </option>
                        <option value="Replacement Dimension">Replacement Dimension</option>
                        <option value="Cronenberg Dimension"> Cronenberg Dimension</option>
                        <option value="Dimension 5-126"> Dimension 5-126</option>
                </select>

                <Button variant="contained" color="primary"  onClick={ (e) => reset(e) }>
                    Reset
                </Button>
            </form>

            <div className="Location-wrapper">
                {location && location.map( el => {
                    return(

                        <div onClick={ ()=> detailsSet( el ) } className="Location-item" key={el.id}>
                            <div className="">name: { el.name && el.name } </div>
                            <div className="">type: { el.type && el.type } </div>
                            { el.dimension !== 'unknown' ? <div className="">dimension: { el.dimension && el.dimension } </div> : null }
                        </div>

                    )
                })
                },

                { characterDetailsModal 
                ? 
                <LocationResidents residents={residents}  Close={ ()=> detailsSetClose() } />
                : 
                null }

            </div>
            
            <div className={classes.root}>
                <Pagination count={allPages} page={page} onChange={ handleChange } />
            </div>
        </div>
    )
}
