import { LOGIN, REGISTER, LOGOUT } from "../actions/types";

const defaultValue = {
  id: "",
  name: "",
  email: "",
  token: "",
  isAdmin: false,
};
export default function user(state = defaultValue, action = {}) {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    case REGISTER: {
      return action.payload;
    }
    case LOGOUT: {
      return defaultValue;
    }
    default: {
      return state;
    }
  }
}
