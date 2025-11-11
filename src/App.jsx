import styles from'./App.module.css'
import fotoPerfil from '../public/foto.png'
import facebookIcon from '../public/face.png'
import instagramIcon from '../public/insta.png'
import linkedinIcon from '../public/linkd.png'
import whatsappIcon from '../public/whats.png'
import htmlImg from '../public/html.png'
import cssImg from '../public/css.png'
import jsImg from '../public/js.png'
import viteImg from '../public/vite.png'
import reactImg from '../public/react.png'
import vercelImg from '../public/vecel.png'
import animaImg from '../public/braço.png'

import { useState } from 'react'

function App() {

  const defaultPhoneNumber = "5541988956815"

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZap, "_blank")
  }

  return (
   <>
   <nav className={styles.menu}>
    <a href="#s1">Home</a>
    <a href="#s2">Cards</a>
    <a href="#s3">Video</a>
    <a href="#s5">Planejamento</a>
    <a href="#s4">Contato</a>
    
   </nav>
   <main>
    <section className={styles.s1} id="s1">
      <div className={styles.left}>
        <img className={styles.imgPerfil} src={fotoPerfil} alt="Eu" />
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Vinicius Eckert</h2>
        <p className={styles.paragraph}>Aluno do curso tecnico de desenvolvimento de sistemas, terminando o 3ºano do ensino medio </p>
      </div>
    </section>

    <section className={styles.s2} id="s2">
      <h2 className={styles.tecTitle}>Tecnologias</h2>
      <div className={styles.wrapCards}>
        <div className={styles.card}>
          <img src={htmlImg} alt="HTML" />
          <h3>HTML</h3>
          <p>HTML é a sigla para Hypertext Markup Lenguage(linguagem de marcação de hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web </p>
        </div>

        <div className={styles.card}>
          <img src={cssImg} alt="CSS" />
          <h3>CSS</h3>
          <p>CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação visual de um documento escrito em linguagem de marcação como HTML. Ele permite separar o conteúdo de um site (HTML) da sua aparência (CSS), controlando elementos como cores, fontes, espaçamento, layout e design para criar páginas web mais agradáveis e organizadas.</p>
        </div>

        <div className={styles.card}>
          <img src={jsImg} alt="JS" />
          <h3>JS</h3>
          <p>JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas. Enquanto o HTML fornece a estrutura e o CSS define o estilo, o JavaScript adiciona funcionalidades como animações, validação de formulários, e carregamento de conteúdo sem recarregar a página. Ele também pode ser usado no lado do servidor para criar aplicativos de back-end com tecnologias como o Node.js. </p>
        </div>

        <div className={styles.card}>
          <img src={viteImg} alt="VITE" />
          <h3>VITE JS</h3>
          <p>Vite.js é uma ferramenta de construção e servidor de desenvolvimento moderno e opinativo, projetado para fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos.</p>
        </div>

        <div className={styles.card}>
          <img src={reactImg} alt="REACT" />
          <h3>REACT</h3>
          <p>No contexto de desenvolvimento de software, o React é uma biblioteca que permite criar componentes reutilizáveis para criar interfaces interativas e dinâmicas de forma eficiente. Já na cultura de internet, um "react" é um vídeo que mostra a reação de alguém a outro vídeo, produto ou serviço.</p>
        </div>

        <div className={styles.card}>
          <img src={vercelImg} alt="VERCEL" />
          <h3>VERCEL</h3>
          <p>Vercel é uma plataforma em nuvem para construir, implantar e dimensionar aplicações web modernas, conhecida por seu foco em frameworks de front-end e arquitetura sem servidor.</p>
        </div>

      </div>
    </section>

    <section id="s3" className={styles.s3}>
      <h2>Repositorio</h2>
    </section>

    <section className={styles.s5} id="s5">
      <div className={styles.anima}>
        <img  width={200} src={animaImg} alt="braço" />
      </div>
    </section>

    <section id="s4" className={styles.s4}>
      <h2>CONTATO</h2>
      <div className={styles.formData}>
        <label htmlFor="name">Informe seu nome</label>
        <input type="text" id="name" name='name' value={formData.name} onChange={handleChange} required/>
        <label htmlFor="email">Informe seu email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        <label htmlFor="message">Informe uma mensagem</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
        <button onClick={handleZap}>Enviar mensagem</button>
      </div>
    </section>
   </main>
    <footer className ={styles.rodape}>
      <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer"> <img width={70} src={facebookIcon} alt="Facebook" /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <img width={70} src={instagramIcon} alt="Instagram" /></a>
      <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer"> <img width={70} src={linkedinIcon} alt="Linkedin" /></a>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> <img width={70} src={whatsappIcon} alt="Whatsapp" /></a>
    </footer>
   </>
  )
}

export default App
