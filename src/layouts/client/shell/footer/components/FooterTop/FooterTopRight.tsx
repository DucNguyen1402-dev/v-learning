import { Link } from "react-router-dom";

export const FooterTopRight = () => {
  const links = [
    {
      title: "Khóa học",
      list: [
        { item: "Frontend", path: "/courses/frontend" },
        { item: "Backend", path: "/courses/backend" },
        { item: "Fullstack", path: "/courses/fullstack" },
        { item: "Mobile", path: "/courses/mobile" },
      ],
    },
    {
      title: "Giới thiệu",
      list: [
        { item: "Về chúng tôi", path: "/about" },
        { item: "Liên hệ", path: "/contact" },
        { item: "Hỗ trợ", path: "/support" },
      ],
    },
    {
      title: "Khám phá",
      list: [
        { item: "Blog", path: "/blog" },
        { item: "Sự kiện", path: "/events" },
        { item: "Cộng đồng", path: "/community" },
      ],
    },
  ];

  return (
    <div className="footer-top-right">
      {links.map((link, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-semibold">{link.title}</h3>
          <ul className="space-y-3 text-sm text-text-primary">
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
