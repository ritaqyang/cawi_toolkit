import { UserActionTypes } from "./user.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => createAction(UserActionTypes.SET_CURRENT_USER, user);