import axios from 'axios';

export const createOrder = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('https://chilinkhaapi.onrender.com/api/orders', formData);
    dispatch({ type: 'CREATE_ORDER', payload: res.formData });
  } catch (err) {
    console.log(err);
  }
}


export const getOrders = () => async (dispatch) => {
  try {
    const res = await axios.get('https://chilinkhaapi.onrender.com/api/orders');
    dispatch({ type: 'GET_ORDERS', payload: res.formData });
  } catch (err) {
    console.log(err);
  }
}



