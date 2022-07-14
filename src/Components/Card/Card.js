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
        console.log(props)
        GetUrl();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {url ?
                <div className="card" htmlFor={props.id}>
                    <div className="Card-Header">
                        <h3>{props.name}</h3>
                    </div>
                    <img alt="fish" src={url} className="Fish-Preview" />
                    <div className="Fish-Details">
                        <div className="Icons">
                            <span className="material-icons Favorite-Icon">favorite</span>
                            <span className="material-icons Comment-Icon">comment</span>
                            <p className="Date">{new Date(props.date).toLocaleDateString()}</p>
                        </div>
                        <div className="Fish">
                            <p>{props.fishName}</p>
                        </div>
                        <div className="Fish-Description">
                            <div className="Location">
                                <span className="material-icons Pin-Icon">pin_drop</span>
                                <p>{props.location}</p>
                            </div>
                            <div className="Weight">
                                <span class="material-symbols-outlined Weight-Icon">weight</span>
                                <p>9.82kg</p>
                            </div>
                            <div className="Length">
                                <span class="material-icons Length-Icon">straighten</span>
                                <p>107cm</p>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
}

export default Card;