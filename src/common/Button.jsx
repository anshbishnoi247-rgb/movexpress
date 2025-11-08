const Button = ({
  icon,
  button,
  type,
  className,
  subclassName,
  subsubclassName,
}) => {
  return (
    <div type={type} className={`${className} button-style-div group`}>
      <button className={`${subclassName} button-style`}>
        {button}&nbsp; {icon ? icon : null}
      </button>

      <div className={`${subsubclassName} button-style-hover `}></div>
    </div>
  );
};

export default Button;
