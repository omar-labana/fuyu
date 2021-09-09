const WishCard = (props) => {
  const {
    name, price, description, image_url,
  } = props.jacket;
  return (
    <div className="flex">
      <img src={image_url} alt={name} className="w-20 object-cover" />
      <div className="p-3">
        <div className="font-bold text-lg">{name}</div>
        <div className="font-bold text-lg">{price}</div>
        <div className="text-gray-600 truncate">{description}</div>
      </div>
    </div>
  );
};

export default WishCard;
