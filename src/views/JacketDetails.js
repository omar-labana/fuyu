import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getJacketDetails } from '../redux/slices/jacket';
import Wish from '../components/Wish';

const JacketDetails = () => {
  const { state } = useLocation();
  const { id } = state;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJacketDetails(id));
  }, [dispatch, id]);

  const jacket = useSelector((state) => state.jacket.jacket);
  const {
    name, image_url, price, description,
  } = jacket;

  return (
    <div className="relative flex flex-col items-center relative  ">
      <div className="flex items-center w-full  px-4">
        <Link to="/">
          <i className="fas fa-arrow-left text-yellow-800 text-2xl" />
        </Link>
        <div className="mx-auto font-bold text-xl">{name}</div>
      </div>
      <div className="relative mt-4">
        <img src={image_url} alt="" className="w-full" />
        <div className="absolute bottom-0 right-0 mb-8 mr-8 font-bold text-white text-5xl bg-yellow-600 p-2 rounded-lg">{price}</div>
      </div>
      <Wish id={id} />
      <div className="self-start text-sm px-6 my-3">
        <p className="font-bold">About this Jacket</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JacketDetails;
