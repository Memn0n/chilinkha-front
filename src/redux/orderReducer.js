import { CREATE_ORDER } from './orderActions';

const initialState = {
  order: null,
  orders: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: payload,
        loading: false
      };
    default:
      return state;
  }
}
