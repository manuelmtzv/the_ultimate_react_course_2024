import PropTypes from "prop-types";

export default function SkillIcon({ skill, ...props }) {
  let emoji;

  switch (skill.level) {
    case "beginner":
      emoji = "🥱";
      break;
    case "intermediate":
      emoji = "😐";
      break;
    case "advanced":
      emoji = "😎";
      break;
  }

  return (
    <span style={{ backgroundColor: skill.color }} key={skill.id} {...props}>
      {skill.name} {emoji}
    </span>
  );
}

SkillIcon.propTypes = {
  skill: PropTypes.arrayOf(PropTypes.object).isRequired,
};
