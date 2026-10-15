import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ArrowUpRight, Menu, X, Github, Mail, Heart } from 'lucide-react'
import { perfil } from '../data/portfolio'

const links = [['/', 'Início'], ['/sobre', 'Sobre'], ['/projetos', 'Projetos'], ['/experiencia', 'Experiência'], ['/contato', 'Contato']]

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false)
  const location = useLocation()
  useEffect(() => { setMenu(false); window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  return <div className="min-h-screen flex flex-col bg-cream text-ink selection:bg-rose selection:text-wine">
    <header className="sticky top-0 z-50 bg-[#fffaf6]/90 backdrop-blur-xl border-b border-wine/10">
      <div className="container-main flex items-center justify-between h-20 gap-6">
        <Link to="/" className="font-display text-2xl font-bold tracking-[-.05em] text-wine">rafaela<span className="text-mutedRose">.</span></Link>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">{links.map(([path, nome]) => <NavLink key={path} to={path} end={path === '/'} className={({isActive}) => `text-[13px] font-semibold transition-colors ${isActive ? 'text-wine' : 'text-[#75666d] hover:text-wine'}`}>{nome}</NavLink>)}</nav>
        <Link to="/contato" className="hidden md:inline-flex btn btn-primary text-xs">Vamos conversar <ArrowUpRight size={16}/></Link>
        <button aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} className="md:hidden p-2 text-wine" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </div>
      {menu && <nav aria-label="Navegação móvel" className="md:hidden border-t border-wine/10 bg-[#fffaf6] px-7 py-5 flex flex-col gap-4">{links.map(([path, nome]) => <NavLink key={path} to={path} className="text-wine font-medium">{nome}</NavLink>)}</nav>}
    </header>
    <main className="flex-1" key={location.pathname}>{children}</main>
    <footer className="bg-wine text-white/85 mt-16"><div className="container-main py-11 flex flex-col md:flex-row gap-7 justify-between items-center"><div><Link to="/" className="font-display text-3xl font-bold text-white">rafaela<span className="text-rose">.</span></Link><p className="text-sm mt-2 text-white/60">Criando experiências digitais com propósito.</p></div><div className="flex items-center gap-5"><a aria-label="Enviar e-mail" href={`mailto:${perfil.email}`} className="hover:text-rose"><Mail size={20}/></a>{perfil.github && <a aria-label="GitHub" href={perfil.github} target="_blank" rel="noreferrer" className="hover:text-rose"><Github size={20}/></a>}<span className="text-xs text-white/50">Feito com <Heart size={12} className="inline fill-rose text-rose"/> e código</span></div></div></footer>
  </div>
}
