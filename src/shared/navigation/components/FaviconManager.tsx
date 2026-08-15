import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AppRoutes } from "@routes";

import { adminFavicon, clientFavicon } from "@assets/favicon";

const titles = {
  [AppRoutes.client.keys.HOME]: "V-learning | Home",
  [AppRoutes.client.keys.LOGIN]: "V-learning | Login",
  [AppRoutes.client.keys.REGISTER]: "V-learning | Register",
  [AppRoutes.client.keys.PROFILE]: "V-learning | Profile",
  [AppRoutes.client.keys.COURSES]: "V-learning | Courses",
  [AppRoutes.client.keys.BLOGS]: "V-learning | Blogs",
  [AppRoutes.client.keys.ABOUT]: "V-learning | About",
};

export const FaviconManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const favicon = document.createElement("link");
    console.log(pathname);
    const routeKey = AppRoutes.client.findKey(pathname);
    if (!routeKey) return;

    const title = titles[routeKey];

    document.title = pathname.startsWith("/client") ? title : "admin";

    favicon.rel = "icon";
    favicon.href = pathname.startsWith("/client")
      ? clientFavicon
      : adminFavicon;

    document.head.appendChild(favicon);
  }, [pathname]);

  return null;
};
