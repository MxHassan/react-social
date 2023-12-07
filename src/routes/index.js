import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// project imports
import ErrorPage from "../views/errorpage/ErrorPage";
import SignIn from "../views/sign-in/SignIn";
import SignUp from "../views/sign-up/SignUp";
import Profile from "../views/profile/Profile";
import SignLayout from "../layout/SignLayout";
import Home from "../views/home/Home";
import Feed from "../components/feed/Feed";
import ProfileDetails from "../components/profiledetails/ProfileDetails";

// import PrivateRoutes from "../utils/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<SignLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      {/* <Route element={<PrivateRoutes />}> */}
      <Route path="/" element={<Home />}>
        <Route path="" element={<Feed />} />
      </Route>
      <Route path="profile" element={<Profile />}>
        <Route path="" element={<ProfileDetails />} />
        <Route path=":username" element={<ProfileDetails />} />
      </Route>
      {/* </Route> */}
    </Route>
  )
);

export default router;
