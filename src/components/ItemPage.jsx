import React from 'react';
import './ItemPage.scss';

const ItemPage = () => {
    return (
        <div className='item'>
            <div className='item__img-wrapper'>
                <img src={item.url} alt='sheets' className='item__img' />
                <div className='item__info'></div>
            </div>
        </div>
    );
};

export default ItemPage;