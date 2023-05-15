import Image from "next/image";
import logo from "./tudox_logo.png";
import "./styles.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <Image className="logo_img" src={logo} width={24} height={24} />
        <h1 className="logo-text">tudox</h1>
      </div>
    </div>
  );
}
