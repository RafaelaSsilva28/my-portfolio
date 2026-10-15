import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Projects, ProjectDetail } from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/sobre" element={<About/>}/><Route path="/projetos" element={<Projects/>}/><Route path="/projetos/:slug" element={<ProjectDetail/>}/><Route path="/experiencia" element={<Experience/>}/><Route path="/contato" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></Layout>}
