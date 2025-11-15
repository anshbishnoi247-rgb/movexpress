const Button = ({
  icon,
  button,
  type,
  className,
  subclassName,
  subsubclassName,
  subicon,
  onClick,
}) => {
  return (
    <div className={`${className} button-style-div group`}>
      <button
        type={type}
        onClick={onClick}
        className={`${subclassName} button-style cursor-pointer`}
      >
        {subicon ? subicon : null} {button}&nbsp; {icon ? icon : null}
      </button>

      <div className={`${subsubclassName} button-style-hover `}></div>
    </div>
  );
};

export default Button;
