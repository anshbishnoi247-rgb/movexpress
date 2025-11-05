
const Subfooter = () => {
  const currentDate = new Date();

  return (
    <div className={`border-t-1 w-full border-violet1/72`}>
      <p className="font-outfit text-violet1 mt-10 text-base leading-[150%] tracking-[-0.3px]">
        © Copyright {currentDate.getFullYear()}, All Rights Reserved by
        MoveXpress.
      </p>
    </div>
  );
};

export default Subfooter;
