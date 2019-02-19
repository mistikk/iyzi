import api, { API_STATUS } from '../../config/api';

// Actions
const REQUEST = 'LAUNCH/REQUEST';
const SUCCESS = 'LAUNCH/SUCCESS';
const SUCCESS_LOAD_MORE = 'LAUNCH/SUCCESS_LOAD_MORE';
const FAIL = 'LAUNCH/FAIL';

// Action Creators
export const success = data => ({
  type: SUCCESS,
  data,
});

export const successLoadMore = data => ({
  type: SUCCESS_LOAD_MORE,
  data,
});

export const fail = error => ({
  type: FAIL,
  error,
});

export const launchRequest = offset => async (dispatch) => {
  dispatch({ type: REQUEST });

  try {
    const d1 = new Date();
    const d2 = new Date();
    d1.setMonth(d1.getMonth() - 6);
    const sixMonthAgo = d1.toISOString().substring(0, 10);

    d2.setMonth(d2.getMonth() - 3);
    const today = d2.toISOString().substring(0, 10);

    const response = await api.get(`launch?startdate=${sixMonthAgo}&enddate=${today}&offset=${offset}`);
    // const response = await api.get('launch/Falcon');

    if (response.status !== 200) {
      dispatch(fail(response.statusText));
      return;
    }

    if (offset !== 0) {
      dispatch(successLoadMore(response.data));
    } else {
      dispatch(success(response.data));
    }
  } catch (err) {
    dispatch(fail(err.message));
  }
};

// Reducer
const initialState = {
  status: API_STATUS.INIT,
  data: {},
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        status: API_STATUS.LOADING,
      };
    case SUCCESS:
      return {
        ...state,
        status: API_STATUS.FETCHED,
        data,
      };
    case SUCCESS_LOAD_MORE:
      return {
        ...state,
        status: API_STATUS.FETCHED,
        data: {
          ...data,
          launches: [...state.data.launches, ...data.launches],
          // launches: state.data.launches.concat(
          //   data.launches.filter(item => state.data.launches.findIndex(i => i.id === item.id) < 0)
          // )
        },
      };
    case FAIL:
      return {
        ...state,
        status: API_STATUS.FAILED,
        data: {},
        error,
      };
    default:
      return state;
  }
};
