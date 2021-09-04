import { applyMiddleware, createStore } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const logger = createLogger();

const persistedCombinedReducers = persistCombineReducers(
  persistConfig,
  rootReducer()
);

let store = createStore(
  persistedCombinedReducers,
  applyMiddleware(thunk, logger)
);
let persistor = persistStore(store);
export { store, persistor };
