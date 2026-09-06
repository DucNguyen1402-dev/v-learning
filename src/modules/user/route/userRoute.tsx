import { Route } from "react-router-dom";

import { UsersLayout } from "../layouts";
import { USER_ROUTE_SEGMENT } from "../navigation/constants";
import { UserPage } from "../pages/UserPage";
import { addUserRoute, editUserRoute, userCourseRoute } from "../sub-modules";

export const userRoute = (
  <Route path={USER_ROUTE_SEGMENT} element={<UsersLayout />}>
    <Route index element={<UserPage />} />
    {addUserRoute}
    {editUserRoute}
    {userCourseRoute}
  </Route>
);
