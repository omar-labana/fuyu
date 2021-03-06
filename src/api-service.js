import axios from 'axios';

const api = 'https://glacial-reef-65803.herokuapp.com/';

const getUser = async (data) => {
  const { username, password } = data;
  let user;
  await axios
    .post(
      `${api}sessions`,
      {
        user: {
          username,
          password,
        },
      },
      { withCredentials: true },
    )
    .then((response) => {
      if (response.data.logged_in) {
        user = response.data;
      }
    })
    .catch((error) => {
      console.log('login error', error);
    });
  return user;
};

const logOut = async () => {
  await axios
    .delete(`${api}logout`, { withCredentials: true })
    .catch((error) => {
      console.log('logout error', error);
    });
};

const checkLoginStatus = async (status) => {
  let state;
  await axios
    .get(`${api}logged_in`, { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in && status === 'NOT_LOGGED_IN') {
        state = {
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        };
      } else if (!response.data.logged_in && (status === 'LOGGED_IN')) {
        state = {
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        };
      } else {
        state = {
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        };
      }
    })
    .catch((error) => {
      console.log('check login error', error);
    });
  return state;
};

const registerUser = async (data) => {
  const {
    username, email, password, passwordConfirmation,
  } = data;
  await axios
    .post(
      `${api}registrations`,
      {
        user: {
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      },
      { withCredentials: true },
    )
    .catch((error) => {
      console.log('registration error', error);
    });
};

const getJackets = async () => {
  const jackets = await axios.get(`${api}jackets`)
    .then((res) => res.data);

  return jackets;
};

const getJacketService = async (id) => {
  const jacket = await axios.get(`${api}jackets/${id}`)
    .then((res) => res.data);
  return jacket;
};

const addToWishlist = (user, jacketID) => {
  axios.post(`${api}whishlists`, { jacket_id: jacketID, user_id: user.id }, {
    headers: {
      Authorization: user,
    },
  },
  { withCredentials: true });
};

const getWishlist = async (id) => {
  const list = await axios.get(`${api}whishlists/${id}`)
    .then((res) => res.data);
  return list;
};

export {
  getUser, checkLoginStatus, logOut, registerUser, getJackets, getJacketService,
};

export {
  addToWishlist, getWishlist,
};
