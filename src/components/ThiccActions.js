import axios from 'axios';

import {
  THICC_LOADING,
  THICC_LOADEND,
  THICC_UPDATE
} from './ThiccTypes';

const vote = type => (dispatch) => {
  dispatch({
    type: THICC_LOADING,
  });
  const url = 'https://thicc-or-fat-server.herokuapp.com/api/vote/update';
  axios.post(url, { vote: type })
    .then(() => {
      dispatch(fetchThiccnes());
    })
    .catch((err) => {
      dispatch({
        type: THICC_LOADEND
      });
      console.log('THICC ERR', err);
    });
};

const fetchThiccnes = () => (dispatch) => {
  dispatch({
    type: THICC_LOADING,
  });
  const url = 'https://thicc-or-fat-server.herokuapp.com/api/vote';
  axios.get(url)
    .then((res) => {
      dispatch({
        type: THICC_LOADEND
      });
      dispatch({
        type: THICC_UPDATE,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log('THICC ERR', err);
    });
};

export { vote, fetchThiccnes };
