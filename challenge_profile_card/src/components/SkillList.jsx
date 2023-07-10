import PropTypes from "prop-types";

export default function SkillList({ skills }, props) {
  return (
    <section className="skillList" {...props}>
      <div>
        {skills.map((skill) => {
          return (
            <span style={{ backgroundColor: skill.color }} key={skill.id}>
              {skill.name} {skill.emoji}
            </span>
          );
        })}
      </div>
    </section>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};
