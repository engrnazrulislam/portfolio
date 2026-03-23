import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes  */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="services" element={<AllServices/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="community" element={<Community/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} /> */}
      </Route>
      {/* Private Routes  */}
      {/* <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="services/add" element={<AddService />} />
        <Route path="category/add" element={<AddCategory/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="services" element={<AllServices/>} />
    </Route> */}
    </Routes>
  );
};

export default AppRoutes;
