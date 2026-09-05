import { Route } from "react-router-dom";

import { addUserRoute } from "../add-user";
import { editUserRoute } from "../edit-user";
import { UsersLayout } from "../layouts";
import { USER_ROUTE_SEGMENT } from "../navigation/constants";
import { UserPage } from "../pages/UserPage";
import { userCourseRoute } from "../user-courses";

export const userRoute = (
  <Route path={USER_ROUTE_SEGMENT} element={<UsersLayout />}>
    <Route index element={<UserPage />} />
    {addUserRoute}
    {editUserRoute}
    {userCourseRoute}
  </Route>
);
