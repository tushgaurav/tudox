import Image from "next/image";
import CoolHeading from "../../../components/CoolHeading/CoolHeading";

import dp1 from "./images/dp_image1.svg";
import dp2 from "./images/dp_image2.svg";
import dp3 from "./images/dp_image3.svg";
import dp4 from "./images/dp_image4.svg";

import styles from "./page.module.css";

export default function About() {
  return (
    <div className="container">
      <CoolHeading>tudox - focus on simplicity</CoolHeading>

      <div>
        <p>
          Welcome to tudox, where simplicity meets productivity. Our mission is
          to provide you with a todo app that is not only incredibly simple to
          use but also enhances your efficiency and helps you stay organized.
        </p>

        <p>
          We understand that in today's fast-paced world, simplicity is key.
          That's why we have designed todox with a minimalistic approach,
          ensuring that every interaction is intuitive and effortless. We
          believe that managing your tasks shouldn't be a complicated process,
          and with our app, you'll experience a level of simplicity like never
          before.
        </p>

        <p>
          Our app's user interface is clean, clutter-free, and free from
          unnecessary distractions. We have carefully crafted each feature to
          streamline your task management experience, enabling you to focus on
          what truly matters - completing your tasks and achieving your goals
        </p>

        <p>
          Whether you're a student juggling assignments, a professional managing
          deadlines, or a busy parent organizing household chores, our app is
          here to simplify your life. With just a few taps, you can create,
          prioritize, and track your tasks effortlessly. We've eliminated any
          unnecessary complexity, ensuring that you can navigate through the app
          seamlessly and stay in control of your productivity.
        </p>
      </div>

      <div>
        <h2>Our Story</h2>
        <p>
          tudox was founded in 2023 by a group of students who were frustrated
          with the lack of simple todo apps on the market. We wanted to create a
          todo app that was not only simple to use but also enhanced our
          productivity and helped us stay organized. We believe that managing
          your tasks shouldn't be a complicated process, and with our app,
          you'll experience a level of simplicity like never before.
        </p>

        <p>
          We have not finialized the pricing and subscription model yet, but we
          are considering a freemium model with a free tier for students and
          teachers. We are also considering a subscription model for
          professionals and businesses.
        </p>
      </div>

      <h2>Our Team</h2>
      <div className={styles.team_section}>
        <div className={styles.team_member}>
          <Image src={dp1} alt="Rachel Amber" width={200} height={200} />
          <h3>Rachel Amber</h3>
          <p>Founder</p>
        </div>

        <div className={styles.team_member}>
          <Image src={dp2} alt="Rachel Amber" width={200} height={200} />
          <h3>Max Caulfield</h3>
          <p>UI/UX Design & Research</p>
        </div>

        <div className={styles.team_member}>
          <Image src={dp3} alt="Rachel Amber" width={200} height={200} />
          <h3>Chloe Price</h3>
          <p>Support & Communications</p>
        </div>
      </div>

      <div>
        <h2>Suggestions are always welcomed!</h2>
        <p>
          We are still working on improving the app and adding new features. If
          you have any feedback or suggestions, please feel free to contact us
          at tudox@tushgaurav.in
        </p>
      </div>
    </div>
  );
}
