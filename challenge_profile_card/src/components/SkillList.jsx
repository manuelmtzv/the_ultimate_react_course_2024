import PropTypes from "prop-types";
import SkillIcon from "./SkillIcon";

export default function SkillList({ skills, ...props }) {
  return (
    <section className="skillList" {...props}>
      <div>
        {skills.map((skill) => {
          return <SkillIcon skill={skill} key={skill.id} />;
        })}
      </div>
    </section>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.Array).isRequired,
};
