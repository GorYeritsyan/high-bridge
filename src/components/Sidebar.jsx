import { NavLink, useLocation } from "react-router-dom";

export const imageBaseUrl = "/src/assets/images";

const Sidebar = () => {
  const { pathname } = useLocation();

  // data that will come later

  const navigationList = [
    {
      image: "/home.svg",
      "primary-image": "/home-icon.svg",
      title: "Dashboard",
      path: "/",
    },
    {
      image: "/orders.svg",
      "primary-image": "/primary-orders.svg",
      title: "Orders",
      path: "/orders",
    },
    {
      image: "/products.svg",
      "primary-image": "/primary-products.svg",
      title: "Products",
      path: "/products",
    },
    {
      image: "/reviews.svg",
      "primary-image": "",
      title: "Reviews",
      path: "/reviews",
    },
    {
      image: "/statistics.svg",
      "primary-image": "",
      title: "Statistics",
      path: "/statistics",
    },
    {
      image: "/currencies.svg",
      "primary-image": "",
      title: "Currencies",
      path: "/currencies",
    },
    {
      image: "/navbar-settings.svg",
      "primary-image": "/primary-settings.svg",
      title: "Settings",
      path: "/setting",
    },
  ];

  return (
    <nav
      className="w-[250px] h-full sticky top-0 bg-white
         border-r border-r-border"
    >
      {/*sidebar logo*/}
      <div className="px-[38px] py-[31px]">
        <img
          src="/src/assets/images/credit-card-image.svg"
          alt="credit card image"
        />
      </div>

      {/*sidebar navigation lists*/}
      <ul
        className="flex flex-col text-lg font-medium
           "
      >
        {navigationList.map((elem) => (
          <NavLink
            to={elem.path}
            key={elem.path}
            className={({ isActive }) =>
              isActive ? "active-nav-item" : "text-[rgb(177,177,177)]"
            }
          >
            <li className="flex-center pl-[44px] justify-start px-4 h-[60px] gap-x-[26px]">
              <img
                src={
                  elem.path === pathname && elem["primary-image"]
                    ? imageBaseUrl + elem["primary-image"]
                    : imageBaseUrl + elem.image
                }
                alt="navigation links"
              />
              <h2>{elem.title}</h2>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;
