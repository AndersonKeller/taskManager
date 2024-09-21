interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
  priority: string;
}
export const Button = ({ label, type, onClick, priority }: ButtonProps) => {
  return (
    <button
      className={`${
        priority === "primary"
          ? "text-white bg-gradient-to-r from-[#0796D3] to-[#53C0F0]"
          : priority === "secondary"
          ? "bg-[#e7eefb] text-black"
          : "text-white bg-gradient-to-r from-[#d30707] to-[#f05353]"
      } rounded-lg px-6 py-3 w-full`}
      type={type ?? "button"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
