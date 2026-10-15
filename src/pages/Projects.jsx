import { useState } from 'react'
import { useParams, Link } from 'react-router'
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { projetos } from '../data/portfolio'
import { Eyebrow, SectionHeading, ProjectCard, ProjectLinks } from '../components/Shared'

const POR_PAGINA = 2
export function Projects(){
  const [pagina,setPagina] = useState(1)
  const [busca,setBusca] = useState('')
  const filtrados = projetos.filter(p => `${p.nome} ${p.descricao} ${p.tecnologias.join(' ')}`.toLowerCase().includes(busca.toLowerCase()))
  const totalPaginas = Math.max(1,Math.ceil(filtrados.length / POR_PAGINA))
  const atual = Math.min(pagina,totalPaginas)
  const exibidos = filtrados.slice((atual-1)*POR_PAGINA,atual*POR_PAGINA)
  return <section className="section"><div className="container-main">
    <SectionHeading eyebrow="PORTFÓLIO DE PROJETOS" title={<>Projetos com <em className="text-mutedRose font-normal">propósito.</em></>} text="Desenvolvimento Full Stack, interfaces web e Internet das Coisas. Explore cada projeto e conheça as tecnologias utilizadas."/>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
      <label className="w-full sm:max-w-sm"><span className="sr-only">Pesquisar projetos</span><input value={busca} onChange={e=>{setBusca(e.target.value);setPagina(1)}} placeholder="Pesquisar projeto ou tecnologia..." className="w-full border border-wine/15 rounded-2xl bg-white px-5 py-3 text-sm outline-none focus:border-mutedRose"/></label>
      <span className="text-sm text-[#786b6f]">{filtrados.length} projeto(s) encontrado(s) · {POR_PAGINA} por página</span>
    </div>
    {exibidos.length ? <div className="grid md:grid-cols-2 gap-7">{exibidos.map((p,i)=><div className="stagger-in" style={{animationDelay:`${i*110}ms`}} key={p.slug}><ProjectCard projeto={p}/></div>)}</div> : <div className="card p-12 text-center text-wine">Nenhum projeto encontrado. Experimente outra palavra-chave.</div>}
    {totalPaginas>1 && <nav aria-label="Paginação de projetos" className="flex justify-center items-center gap-3 mt-10"><button className="page-btn" disabled={atual===1} onClick={()=>setPagina(p=>Math.max(1,p-1))} aria-label="Página anterior"><ChevronLeft size={18}/></button>{Array.from({length:totalPaginas},(_,i)=><button className={`page-btn ${atual===i+1?'page-active':''}`} key={i} aria-label={`Página ${i+1}`} aria-current={atual===i+1?'page':undefined} onClick={()=>setPagina(i+1)}>{i+1}</button>)}<button className="page-btn" disabled={atual===totalPaginas} onClick={()=>setPagina(p=>Math.min(totalPaginas,p+1))} aria-label="Próxima página"><ChevronRight size={18}/></button></nav>}
    <p className="mt-7 text-sm text-center text-[#85747a] flex items-center justify-center gap-2"><Sparkles size={15}/> Mais projetos poderão ser adicionados ao longo da minha trajetória.</p>
  </div></section>
}
export function ProjectDetail(){const {slug}=useParams();const p=projetos.find(p=>p.slug===slug);if(!p)return <section className="section container-main"><h1 className="heading">Projeto não encontrado</h1><Link to="/projetos" className="btn btn-outline mt-5">Voltar aos projetos</Link></section>;return <section className="section"><div className="container-main max-w-5xl"><Link to="/projetos" className="text-wine font-semibold text-sm inline-flex gap-2 items-center hover:underline"><ArrowLeft size={18}/> Todos os projetos</Link><div className="mt-10"><Eyebrow>{p.tipo} • {p.ano}</Eyebrow><h1 className="heading mt-4">{p.nome}<span className="text-mutedRose">.</span></h1><p className="paragraph mt-5 max-w-3xl">{p.destaque}</p></div><div className={`project-art bg-gradient-to-br ${p.cor} mt-10 rounded-[2rem] min-h-[320px] md:min-h-[470px]`}>{p.imagem?<img src={p.imagem} alt={`Captura de ${p.nome}`} className="w-full h-full object-cover"/>:<><div className="decor-circle"/><span className="relative z-10 text-wine/70 font-display text-[clamp(6rem,20vw,13rem)] font-bold">{p.sigla}</span></>}</div><div className="grid lg:grid-cols-[1.5fr_.8fr] gap-12 mt-14"><div><h2 className="font-display text-3xl font-bold text-wine">Sobre o projeto</h2><p className="paragraph mt-5">{p.descricao}</p><div className="mt-8"><ProjectLinks projeto={p}/></div></div><div className="card p-7"><h3 className="font-display text-2xl font-bold text-wine">Tecnologias utilizadas</h3><div className="flex gap-2 flex-wrap mt-5">{p.tecnologias.map(t=><span className="chip" key={t}>{t}</span>)}</div></div></div></div></section>}
