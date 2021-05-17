import React from 'react';
import './ItemPage.scss';

const ItemPage = () => {
    return (
        <div className='item'>
            <div className='item__img-wrapper'>
                <img src={item.imageUrls[0]} alt='bedsheets' className='item__img' />
                <div className='item__info'>
                    <p className='item__name'>{item.name}</p>
                    <p className='item__id'>product id: {item._id}</p>
                    <p className='item__color'>{item.color}</p>
                    <p classname='item__size'>size {item.sizes}</p>
                    <p className='item__price'>USD $ {item.currentPrice}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ItemPage;