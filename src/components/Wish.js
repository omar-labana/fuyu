import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { addToWishlist } from '../api-service';

const Wish = (props) => {
  const { id } = props;
  const history = useHistory();
  const status = useSelector((state) => state.user.loggedInStatus);
  const user = useSelector((state) => state.user.user);
  const handleClick = () => {
    if (status === 'NOT_LOGGED_IN') {
      history.push('/login');
    } else {
      addToWishlist(user, id);
    }
  };
  return (
    <button type="button" onClick={handleClick} className=" w-full inset-x-0 bottom-0 py-3 bg-yellow-600 text-center  text-white text-xl font-semibold">
      Add to your Wishlist
    </button>
  );
};

export default Wish;
