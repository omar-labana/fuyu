/* eslint-disable camelcase */
import PropTypes from 'prop-types';

const WishCard = (props) => {
  const { jacket } = props;
  const {
    name, price, description, image_url,
  } = jacket;
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

WishCard.propTypes = {
  jacket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default WishCard;
