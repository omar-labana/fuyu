import React from 'react'
import { Link } from 'react-router-dom';

const Jacket = (props) => {
    const { jacket } = props
    const { name, price, image_url, id } = jacket
    return (
        <div className="bg-white rounded-lg m-5 p-2">
            <img src={image_url} alt={name} />
            <div className=" flex justify-between">
                <div className="font-bold text-lg">{name}</div>
                <div className="font-bold">{price}</div>
            </div>
            <div className="text-sm flex justify-between my-2">
                <Link to={{
                    pathname: `/jacket/${id}`,
                    state: { id: id },
                }}
                    className="bg-yellow-400 px-2 py-1 rounded text-white w-full text-center"> <i className="fas fa-info-circle "></i> Details</Link >
            </div>
        </div>
    )
}

export default Jacket
