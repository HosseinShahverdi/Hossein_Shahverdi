import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/public/images/logo.svg" alt="Logo" />
        <p className="font-bold">Hossein&apos;s Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <p className="font-bold text-sm text-gray-700 hover:text-gray-900 no-underline hover:no-underline cursor-pointer">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`Icon ${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd, MMM D, h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
