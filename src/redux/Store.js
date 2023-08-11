import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import axios from 'axios';

const initialState = {
  HomeCategoryData: null,
  HomeRestaurantData: null,
  LoginData: null,
  OTPData: null,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'LoginPost':
      return {...state, LoginData: action.payload};
    case 'OTPPost':
      return {...state, OTPData: action.payload};
    case 'HomeCategory':
      return {...state, HomeCategoryData: action.payload};
    case 'HomeRestaurant':
      return {...state, HomeRestaurantData: action.payload};
    default:
      return state;
  }
};

const store = createStore(counter, applyMiddleware(thunk));

// ----------- Resigster ---------
export const LoginPostData = phone => {
  return dispatch => {
    return axios
      .post('https://nearbyplaceadminpanner.onrender.com/api/v1/PhoneOtp', {
        phone,
      })
      .then(res => {
        dispatch({type: 'LoginPost', payload: res.data});
        return res.data;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

// ----------- Otp ---------
export const OTPPostData = (id, otp) => {
  return dispatch => {
    return axios
      .post('https://nearbyplaceadminpanner.onrender.com/api/v1/verify', {
        id,
        otp,
      })
      .then(res => {
        dispatch({type: 'OTPPost', payload: res.data});
        return res.data;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};

//API NAME  (GET)
export const fetchHomeCategory = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://nearbyplaceadminpanner.onrender.com/api/v1/allcategory`,
      );
      console.log('API response:', response.data.category);
      dispatch({type: 'HomeCategory', payload: response.data.category});
    } catch (error) {
      console.log('stateApiGet', error);
      throw error;
    }
  };
};

//API NAME  (GET)
export const fetchHomeRestaurant = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`,
      );
      console.log('API response:', response.data.stores);
      dispatch({type: 'HomeRestaurant', payload: response.data.stores});
    } catch (error) {
      console.log('stateApiGet', error);
      throw error;
    }
  };
};

export default store;
