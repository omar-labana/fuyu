/* eslint-disable camelcase */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Jacket = (props) => {
  const { jacket } = props;
  const {
    name, price, image_url, id,
  } = jacket;
  return (
    <div className="bg-white rounded-lg m-5 p-2">
      <img src={image_url} alt={name} />
      <div className=" flex justify-between">
        <div className="font-bold text-lg">{name}</div>
        <div className="font-bold">{price}</div>
      </div>
      <div className="text-sm flex justify-between my-2">
        <Link
          to={{
            pathname: `/jacket/${id}`,
            state: { id },
          }}
          className="bg-yellow-400 px-2 py-1 rounded text-white w-full text-center"
        >
          {' '}
          <i className="fas fa-info-circle " />
          {' '}
          Details
        </Link>
      </div>
    </div>
  );
};

Jacket.propTypes = {
  jacket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Jacket;
