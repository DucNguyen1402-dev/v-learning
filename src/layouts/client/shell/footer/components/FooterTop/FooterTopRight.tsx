import { Link } from "react-router-dom";

import { CATEGORIES } from "@modules/courses/shared/constants";
import { Navigation } from "@shared/navigation";
export const FooterTopRight = () => {
  const builderLinks = [
    {
      title: "Khóa học",
      list: [
        {
          item: "Frontend",
          param: CATEGORIES.FRONTEND,
        },
        {
          item: "Backend",
          param: CATEGORIES.BACKEND,
        },
        {
          item: "Fullstack",
          param: CATEGORIES.FULLSTACK,
        },
        {
          item: "Mobile",
          param: CATEGORIES.MOBILE,
        },
      ],
    },
  ];
  const links = [
    {
      title: "Giới thiệu",
      list: [
        { item: "Về chúng tôi", path: Navigation.client.urls.CLIENT_ABOUT },
        { item: "Liên hệ", path: Navigation.client.urls.CLIENT_CONTACT },
        { item: "Hỗ trợ", path: Navigation.client.urls.CLIENT_SUPPORT },
      ],
    },
    {
      title: "Khám phá",
      list: [
        { item: "Blogs", path: Navigation.client.urls.CLIENT_BLOGS },
        { item: "Sự kiện", path: Navigation.client.urls.CLIENT_EVENTS },
        { item: "Cộng đồng", path: Navigation.client.urls.CLIENT_COMMUNITY },
      ],
    },
  ];

  return (
    <div className="footer-top-right">
      {builderLinks.map((link, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-semibold">{link.title}</h3>
          <ul className="space-y-3 text-sm text-text-default">
            {link.list?.map((item, idx) => (
              <li key={idx}>
                <Navigation.components.GoWithParam
                  className="footer-link"
                  builderRouteKey={
                    Navigation.client.builderKeys.COURSES_BY_CATEGORY
                  }
                  param={item.param}
                >
                  {item.item}
                </Navigation.components.GoWithParam>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {links.map((link, index) => {
        return (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-semibold">{link.title}</h3>
            <ul className="space-y-3 text-sm text-text-default">
              {link.list?.map((item, idx) => (
                <li key={idx}>
                  <Link className="footer-link" to={item.path}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
