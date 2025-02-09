import CompassLogo from "../../assets/Meta Assets/Compass.png";

export default function Logo() {
  return (
    <>
      <div className="flex gap-1 items-center ">
        <span className={`text-gray-200 font-bold text-3xl`}>C</span>
        <img src={CompassLogo} alt="bgImage" className="w-[40px] h-[40px]" />
        <span className={`text-gray-200 font-bold text-3xl tracking-[5px]`}>
          MPASS
        </span>
      </div>
    </>
  );
}
