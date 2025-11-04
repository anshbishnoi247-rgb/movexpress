const Button = ({
  icon,
  button,
  type,
  className,
  subclassName,
  subsubclassName,
}) => {
  return (
    <div
      type={type}
      className={`overflow-hidden ${className} hover:shadow-[0px_0px_20px_5px_#00000026] transition-all duration-300 ease-in-out mx-auto group relative bg-vinegar rounded-xl`}
    >
      <button
        className={`rounded-xl w-full flex items-center ${subclassName} transition-all duration-600 ease-in-out text-white z-2 relative bg-transparent justify-center h-12 md:h-[61px] overflow-hidden font-medium text-sm sm:text-base leading-[170%] font-inter`}
      >
        {button}&nbsp; {icon ? icon : null}
      </button>

      <div
        className={`absolute rounded-xl ${subsubclassName} bg-violet1 z-1 left-[50%] top-[50%] translate-[-50%] w-0 h-0 transition-all duration-500 ease-in-out group-hover:w-81 group-hover:h-16`}
      ></div>
    </div>
  );
};

export default Button;
