import React, { useEffect, useState } from 'react';
import { GetCards } from '../../Firebase/Firebase';
import Card from '../Card/Card';
import UploadDialog from '../UploadDialog/UploadDialog';
import Footer from '../Footer/Footer';

const Flow = () => {

    const [cards, setCards] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

        const Init = async () => {
            await GetCards().then((cards) => {
                setCards(cards);
            });
        }

        Init();

    }

    useEffect(() => {

        const Init = async () => {
            await GetCards().then((cards) => {
                setCards(cards);
            });
        }

        Init();

    }, []);

    return (
        <div className="App">
            <div className='Card-Container'>
                {
                    cards.length > 0 ? cards.reverse().map((card) => {
                        let guid = Object.keys(card)[0];
                        return (
                            <Card
                                key={guid}
                                id={guid}
                                fishName={card[guid].fishName}
                                name={card[guid].name}
                                location={card[guid].location}
                                date={card[guid].date}
                                imageUrl={card[guid].url}
                            />
                        )
                    }) : <h2 className="No-Content">Det finns inget att visa! <br /><br />😐</h2>
                }
            </div>
            <Footer handleClickOpen={handleClickOpen} />
            <UploadDialog open={open} handleClose={handleClose} />
        </div>
    );
}

export default Flow;