import React, { useEffect, useState } from 'react';
import { GetImageUrl } from '../../Firebase/Firebase';

import './Card.css';

const Card = (props) => {

    const [url, setUrl] = useState('');

    const GetUrl = async () => {
        const test = await GetImageUrl(props.id);
        setUrl(test);
    }

    useEffect(() => {
        GetUrl();
        // eslint-disable-next-line
    }, []);

    return (

        <div className="card-container">
            <input type="checkbox" id={props.id} />
            {url ? <label className="card" htmlFor={props.id}>
                <div className="front">
                    <img alt="fish" src={url} className="Fish-Preview" />
                    <h2>{props.fishName}</h2>
                    <h3>{props.name}</h3>
                    <h4>{props.location}</h4>
                    <h4 className="date">{new Date(props.date).toLocaleDateString()}</h4>
                </div>

                <div className="back">
                    <img alt="fish" src={url} className="Fish-Image" />
                </div>

            </label> : null}
        </div>
    );
}

export default Card;