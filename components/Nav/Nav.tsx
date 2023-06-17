import Image from "next/image";
import Link from "next/link";
import logo from "./tudox_logo.png";
import "./styles.css";

export default function Nav() {
  return (
    <div className="nav_container">
      <div className="nav">
        <ul className="nav_links">
          <li className="nav_link">
            <Link href="/about">register</Link>
          </li>
        </ul>

        <Link className="logo" href="/">
          <Image className="logo_img" src={logo} width={24} height={24} />
          <h6 className="logo-text">tudox</h6>
        </Link>

        <ul className="nav_links">
          <li className="nav_link">
            <Link href="/about">about</Link>
          </li>
          <li className="nav_link">pricing</li>
        </ul>
      </div>
    </div>
  );
}
