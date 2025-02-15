import React from 'react';
import { useSelector } from 'react-redux';
import {
  sliceProductsForPagination,
  getPerPage,
  getProducts,
} from '../../store/selectors';
import './CatalogItems.scss';
import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogItems = () => {
  const perPage = useSelector(getPerPage);
  const slicedProducts = useSelector(sliceProductsForPagination);
  const productsAll = useSelector(getProducts);
  const products = perPage ? slicedProducts : productsAll;

  return (
    <div className="catalog-main-products cg-products">
      {products &&
        products.map((product) => (
          <CatalogItem
            key={product.itemNo}
            id={product._id}
            name={product.name}
            img={product.imageUrls[0]}
            currentPrice={product.currentPrice}
          />
        ))}
    </div>
  );
};

export default CatalogItems;
