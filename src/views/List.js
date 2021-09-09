import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getList } from '../redux/slices/list';
import WishCard from '../components/WishCard';

const List = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList(user.id));
  }, [dispatch, user]);

  const list = useSelector((state) => state.list.list);
  return (
    <div className="mt-4">
      <Link to="/" className="self-start ml-5">
        <i className="fas fa-arrow-left text-yellow-800 text-3xl" />
      </Link>
      <div className="flex items-center mx-2 py-3">
        <div className="flex flex-col gap-3">
          {list.length > 0 ? list.map((jacket, i) => <WishCard jacket={jacket} key={i} />) : 'No items added yet.'}
        </div>
      </div>
    </div>
  );
};

export default List;
