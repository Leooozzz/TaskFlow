import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, EyeOff, Eye
} from "lucide-react";
import logo from '../../assets/logo.png'
import banner from '../../assets/Banner.png'
import ButtonDefault from '../../component/Button/Default'
import './style.css'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <aside className="bg-[#4F378A] flex flex-col justify-between p-10" aria-hidden='true'>
        <div className="flex items-center gap-2 text-white ">
          <img src={logo} alt="logo do site" />
          <p className="">TaskFlow</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="login-card">
            <img
              src={banner}
              alt="imagem do sistema"
              className="rounded-2xl w-full max-w-sm"
            />

            <div className="absolute left-6 bottom-4 flex gap-2">
              <div className="h-2 w-10 rounded-full bg-white/40" />
              <div className="h-2 w-6 rounded-full bg-white/20" />
              <div className="h-2 w-6 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
        
        <div>
        <div className="h-px w-full bg-white/30"></div>
          <div className="flex gap-8 text-white pt-5" id="metrics">
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
            <h1 className='text-3xl font-bold' id="titleLogin">Bem-vindo de volta</h1>
            <p className='text-gray-500 mt-1'>Acesse sua conta para continuar gerenciando seus projetos.</p>
          </header>

          <form className='mt-6 space-y-4' action="">
            <label htmlFor="email" className='text-gray-700 text-sm font-medium'>Email Corporativo</label> 
              <div className="relative">
                <Mail
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                />
                <input 
                  id="email"
                  type="text" 
                  placeholder='nome@empresa.com'
                  className="w-full rounded-lg border border-gray-300 pl-8 h-10"/>
              </div>

            <div className="space-y-1">
              <div className='flex justify-between text-sm font-medium'>
                <label htmlFor="password" className="text-gray-700">Senha</label>
                <Link to="" className='text-[#4F378A]'>Esqueceu sua senha?</Link>
              </div>

              <div className="relative">
                <Lock
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                />
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder='••••••••'
                  className="w-full rounded-lg border border-gray-300 pl-8 h-10"/>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
              </div>
            </div>
        
            <ButtonDefault type="submit">Entrar no TaskFlow</ButtonDefault>

          </form>

          <footer className="flex items-center justify-center gap-1 mt-4 text-sm">
            <p>Não tem uma conta?</p>
              <Link to="/cadastro" className="text-[#4F378A] font-medium">
                Criar conta gratuita
              </Link>
          </footer>

        </section>
      </main>
    </div>
  );
}