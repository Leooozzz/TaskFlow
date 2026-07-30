import { Check, X } from "lucide-react";
import {
  passwordCriteria,
  getPasswordStrength,
} from "../utils/passwordValidation";

const strengthLevels = [
  { label: "", color: "", bar: "" },
  { label: "Fraca", color: "text-red-500", bar: "bg-red-500" },
  { label: "Média", color: "text-orange-400", bar: "bg-orange-400" },
  { label: "Boa", color: "text-yellow-400", bar: "bg-yellow-400" },
  { label: "Forte", color: "text-green-500", bar: "bg-green-500" },
];

type Props = {
  password: string;
};

export function PasswordStrength({ password }: Props) {
  const passed = getPasswordStrength(password);
  const strength = strengthLevels[passed];

  return (
    <div className="mt-3 space-y-3">
      <div className="flex items-center gap-2">
        <div className="grid flex-1 grid-cols-4 gap-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                index < passed ? strength.bar : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {!!password && (
          <span
            className={`text-xs font-medium transition-colors duration-300 ${strength.color}`}
          >
            {strength.label}
          </span>
        )}
      </div>

      <ul className="grid grid-cols-2 gap-2">
        {passwordCriteria.map(({ label, test }) => {
          const valid = test(password);

          return (
            <li
              key={label}
              className={`flex items-center gap-1.5 text-xs transition-colors ${
                valid ? "text-green-500" : "text-gray-400"
              }`}
            >
              {valid ? (
                <Check size={13} strokeWidth={2.5} />
              ) : (
                <X size={13} strokeWidth={2.5} />
              )}

              <span>{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}