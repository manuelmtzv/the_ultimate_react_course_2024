import PropTypes from "prop-types";

export default function SkillIcon({ skill, ...props }) {
  return (
    <span style={{ backgroundColor: skill.color }} key={skill.id} {...props}>
      {skill.name} {skill.emoji}
    </span>
  );
}

SkillIcon.propTypes = {
  skill: PropTypes.arrayOf(PropTypes.object).isRequired,
};
