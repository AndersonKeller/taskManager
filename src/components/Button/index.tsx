interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
}
export const Button = ({ label, type, onClick }: ButtonProps) => {
  return (
    <button
      className="text-white bg-gradient-to-r from-[#0796D3] to-[#53C0F0] rounded-lg px-6 py-3"
      type={type ?? "button"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
