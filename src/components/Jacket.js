import React from 'react'

const Jacket = (props) => {
    const { jacket } = props
    const { name, price, image_url } = jacket
    return (
        <div className="bg-white rounded-lg m-5 p-2">
            <img src={image_url} alt={name} />
            <div className=" flex justify-between">
                <div className="font-bold text-lg">{name}</div>
                <div className="font-bold">{price}</div>
            </div>
            <div className="text-sm flex justify-between my-2">
                <button className="bg-yellow-400 px-2 py-1 rounded text-white"><i className="fas fa-star"></i> Whishlist </button>
                <button className="bg-yellow-400 px-2 py-1 rounded text-white"> <i className="fas fa-info-circle"></i> Details</button>
            </div>
        </div>
    )
}

export default Jacket
