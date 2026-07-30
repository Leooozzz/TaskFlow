import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOff, Eye, LayoutGrid } from "lucide-react";
import logo from '../../assets/logo.png'
import ButtonDefault from '../../component/Button/Default'
import { PasswordStrength } from '../../component/PasswordStrength'
import './style.css'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <aside className="bg-[#4F378A] flex flex-col justify-between p-10" aria-hidden='true'>
        <div className="flex items-center gap-2 text-white">
          <img src={logo} alt="logo do site" />
          <p>TaskFlow</p>
        </div>

        <div className="justify-center items-center md:w-100 lg:w-120 sm:w-auto pl-10">
          <h1 className="text-2xl text-white font-bold">
            Transforme a produtividade da sua equipe com precisão.
          </h1>
          <p className="text-sm text-white mt-2">
            A plataforma de gestão de projetos que combina simplicidade ágil com o rigor organizacional que o seu negócio exige.
          </p>

          <div className="animate-breathe w-full max-w-2xl rounded-2xl bg-[#D9D2E6] p-6 shadow-xl mt-10">
            <div className="flex gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#D68B9A]" />
              <div className="w-3 h-3 rounded-full bg-[#B7A67C]" />
              <div className="w-3 h-3 rounded-full bg-[#A89BCB]" />
            </div>

            <div className="relative overflow-hidden h-2 w-2/3 rounded-full bg-[#C9C2D8] mb-6 shimmer" />

            <div className="relative overflow-hidden h-20 rounded-xl bg-[#CFC8DE] flex items-center justify-center shimmer">
              <LayoutGrid size={24} className="text-gray-400" />
            </div>

            <div className="flex gap-4 mt-6">
              <div className="relative overflow-hidden h-2 flex-1 rounded-full bg-[#C9C2D8] shimmer" />
              <div className="relative overflow-hidden h-2 flex-1 rounded-full bg-[#C9C2D8] shimmer" />
              <div className="relative overflow-hidden h-2 flex-1 rounded-full bg-[#C9C2D8] shimmer" />
            </div>
          </div>
        </div>

        <div>
          <div className="h-px w-full bg-white/30" />
          <div className="flex gap-8 text-white pt-5">
            <div>
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-xs opacity-70">EQUIPES ATIVAS</p>
            </div>
            <div>
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-xs opacity-70">UPTIME GARANTIDO</p>
            </div>
          </div>
        </div>
      </aside>

      <main className='flex items-center justify-center p-10'>
        <section className='w-full max-w-sm'>
          <header>
            <h1 className='text-3xl font-bold'>Crie sua conta no TaskFlow</h1>
            <p className='text-gray-500 mt-1'>
              Junte-se a milhares de equipes e comece a organizar seus projetos hoje mesmo
            </p>
          </header>

          <form className='mt-6 space-y-4'>
            <input
              id="name"
              type="text"
              placeholder='Nome Completo'
              className="w-full rounded-lg border border-gray-300 pl-4 h-10"
            />

            <input
              id="email"
              type="email"
              placeholder='nome@empresa.com'
              className="w-full rounded-lg border border-gray-300 pl-4 h-10"
            />

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder='••••••••'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 pl-4 h-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
               {password.length > 0 && <PasswordStrength password={password} />}

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="cursor-pointer">
                Concordo com os{" "}
                <a href="/termos" className="text-[#4F378A] font-medium hover:underline">
                  Termos de Uso
                </a>{" "}
                e a{" "}
                <a href="/privacidade" className="text-[#4F378A] font-medium hover:underline">
                  Política de Privacidade
                </a>
              </label>
            </div>

            <ButtonDefault type="submit">Criar Conta</ButtonDefault>
          </form>

          <footer className="flex items-center justify-center gap-1 mt-4 text-sm">
            <p>Já tem uma conta?</p>
            <Link to="/login" className="text-[#4F378A] font-medium">
              Fazer Login
            </Link>
          </footer>
        </section>
      </main>
    </div>
  );
}