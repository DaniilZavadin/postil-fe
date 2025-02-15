import React from 'react';
import '../ShippingDetails/ShippingDetails.scss';
import PropTypes from 'prop-types';

function ShippingCheckoutBag(props) {
  const {
    item: { imageUrls, name, currentPrice, quantity },
  } = props;
  return (
    <div className="delivery--item">
      <div className="delivery--item__text">
        <img
          src={imageUrls[0]}
          alt="img"
          className="delivery--item__img"
          width="100px"
          height="100px"
        />

        <div className="delivery--text">
          <p className="delivery--text__title">{name}</p>
          <p className="delivery--text__price">Price: ${currentPrice}</p>
          <p className="delivery--text__count">Count: {quantity}</p>
        </div>
      </div>
    </div>
  );
}

ShippingCheckoutBag.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    imageUrls: PropTypes.node,
    currentPrice: PropTypes.number,
    quantity: PropTypes.number,
  }),
};
ShippingCheckoutBag.defaultProps = {
  item: '',
};

export default ShippingCheckoutBag;
