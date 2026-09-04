import { Link } from "react-router-dom";

import { CATEGORIES } from "@modules/courses/shared/constants";
import { Navigation } from "@shared/navigation";
export const FooterTopRight = () => {
  const links = [
    {
      title: "Khóa học",
      list: [
        {
          item: "Frontend",
          path: Navigation.client.builders.CLIENT_COURSES_BY_CATEGORY(
            CATEGORIES.FRONTEND,
          ),
        },
        {
          item: "Backend",
          path: Navigation.client.builders.CLIENT_COURSES_BY_CATEGORY(
            CATEGORIES.BACKEND,
          ),
        },
        {
          item: "Fullstack",
          path: Navigation.client.builders.CLIENT_COURSES_BY_CATEGORY(
            CATEGORIES.FULLSTACK,
          ),
        },
        {
          item: "Mobile",
          path: Navigation.client.builders.CLIENT_COURSES_BY_CATEGORY(
            CATEGORIES.MOBILE,
          ),
        },
      ],
    },
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
        { item: "Blogs", path: Navigation.client.paths.CLIENT_BLOGS },
        { item: "Sự kiện", path: Navigation.client.urls.CLIENT_EVENTS },
        { item: "Cộng đồng", path: Navigation.client.urls.CLIENT_COMMUNITY },
      ],
    },
  ];

  return (
    <div className="footer-top-right">
      {links.map((link, index) => (
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
      ))}
    </div>
  );
};
