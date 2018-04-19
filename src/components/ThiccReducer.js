import {
  THICC_LOADING,
  THICC_LOADEND,
  THICC_UPDATE
} from './ThiccTypes';

const INITIAL_STATE = {
  loading: false,
  poll: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case THICC_UPDATE:
      return {
        ...state,
        poll: [
          {
            value: action.payload.fat,
            color: "#eaaebe",
            highlight: "#bb6783 ",
            label: "FAT"
          },
          {
            value: action.payload.thicc,
            color: "#e47453",
            highlight: "#b03224",
            label: "THICC"
          }]
      };
    case THICC_LOADING:
      return {
        ...state,
        loading: true
      };
    case THICC_LOADEND:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
