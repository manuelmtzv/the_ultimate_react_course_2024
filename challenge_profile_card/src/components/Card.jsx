import { skills } from "../../data";
import SkillList from "./SkillList";
import pp from "../images/pp.jpg";

export default function Card() {
  return (
    <main>
      <article className="card">
        <img src={pp} alt="My profile pic" />

        <div className="card__content">
          <h3>Manuel Martinez</h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            reprehenderit? Atque aut tempora id obcaecati nisi quas ab aliquam
            quae repellat, veniam assumenda excepturi odit doloremque quidem
            consequuntur ipsa amet!
          </p>

          <SkillList skills={skills} />
        </div>
      </article>
    </main>
  );
}
