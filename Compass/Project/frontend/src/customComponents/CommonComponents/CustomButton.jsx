export default function CustomButton({
  text,
  color,
  bgColor,
  icon,
  rounded,
  clickHandle,
}) {
  return (
    <button
      className={`${bgColor ?? "bg-sky-800"} ${
        color ?? "text-white"
      } ${rounded} px-4 py-2 flex items-center justify-center gap-2 transition duration-300 hover:opacity-80  hover:border-white focus:outline-none `}
      onClick={clickHandle}
    >
      {icon}
      {text}
    </button>
  );
}
