import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: boolean;
}

export default function Button({
  children,
  type = "button",
  icon = true,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className="
        flex items-center justify-center gap-2
        w-full
        bg-[#4F378A]
        hover:bg-[#3D286E]
        text-white text-sm
        rounded-lg py-2
        transition-all duration-300
      "
    >
      {children}

      {icon && <ArrowRight size={15} />}
    </button>
  );
}