import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getJacketsArr } from '../redux/slices/jackets';
import Jacket from '../components/Jacket';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJacketsArr());
  }, [dispatch]);
  const jackets = useSelector((state) => state.jackets.jackets);
  const [id, setId] = useState(0);

  const target = jackets[id];
  return (
    <div className="flex items-center mx-2 py-3">
      <button type="button" onClick={() => setId(id - 1 === -1 ? 0 : id - 1)}>
        <i className="fas fa-arrow-left text-white bg-yellow-500 rounded-full p-3" />
      </button>
      <div>
        {target ? <Jacket jacket={target} /> : ''}
      </div>
      <button type="button" onClick={() => setId(id + 1 === jackets.length ? id : id + 1)}>
        <i className="fas fa-arrow-right text-white bg-yellow-500 rounded-full p-3" />
      </button>
    </div>
  );
};

export default Home;
