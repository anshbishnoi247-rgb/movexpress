import { Camera } from "lucide-react";

const TakePicture = ({setImageValue}) => {
  return (
    <div className="p-4 shadow-sm/20 rounded-xl relative">
      <input
        type="file"
        onChange={(e)=>setImageValue(e.target.value)}
        className="h-full w-full absolute left-0 top-0 outlin-none opacity-0"
      />
      <div className="flex mb-2 items-center gap-2">
        <Camera size={16} className="text-violetprimary" />
        <p className="font-semibold  ">Take Picture/Video</p>
      </div>
      <div className="w-full rounded-xl p-4  bg-[#f6f7f9] ">
        <div className="py-[72px]">
          <Camera className="m-auto text-black/40 " size={48} />
        </div>
        <button className="max-w-[141px] cursor-pointer text-white items-center gap-1 flex m-auto px-4 py-2 rounded-xl w-full bg-violetprimary">
          <Camera size={16} />
          <p className="text-sm">Open Camera</p>
        </button>
      </div>
    </div>
  );
};

export default TakePicture;
