import LogoMark from "@/assets/Logomark.png";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="bg-white px-6 fixed w-full left-0 top-0">
      <section className="py-6 flex justify-between items-center border-b container border-[#d7dde9]">
        <div className="sm:w-1/3">
          <Image priority src={LogoMark} alt="logomark" />
        </div>

        <h2 className="sm:w-1/3 font-medium sm:text-2xl text-base text-center">
          Bem vindo de volta, Marcus
        </h2>
        <p className="sm:w-1/3 text-right">Segunda, 01 de dezembro de 2025</p>
      </section>
    </header>
  );
};
