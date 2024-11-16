import Logo from './assets/logo.png';
import Banner from './assets/banner.png';
import Profile from './assets/profile.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CardCarousel } from './components/Carousel';
import { CardService } from './components/CardService';
import { MarqueCarousel } from './components/MarqueeCard';
import Suzu from './assets/suzu-logo.svg';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


function App() {
  return (
    <div>
      <header className="bg-[#082455] flex items-center md:justify-around">
        <div className='p-2 flex items-center gap-1'>
            <img className='w-20' src={Logo} alt='logo'/>
            <div className='flex gap-2'>
              <h3 className='text-white text-xl font-bold text-center'>
                RaFi 
              
              </h3>
              <div className='h-26 bg-white w-[1px]'></div>
              <span className='text-white text-[9px] font-bold'>
                Blockchain <br/> Solutions
              </span>
            </div>

        </div>
          <a
            href='https://wa.me/5521987495304?text=Olá!%20👋%20Seja%20bem-vindo(a)%20à%20RaFi%20Blockchain%20Solutions.%20🚀%20Estamos%20prontos%20para%20ajudar%20com%20suas%20necessidades%20em%20blockchain%20e%20tecnologia.'
            className='bg-white flex justify-center items-center h-10 p-1 text-sm rounded-md font-semibold shadow-lg ml-10 text-center'>
              Entrar em Contato
          </a>
      </header>

      <section className='bg-bg-primary bg-cover h-auto pb-10'>
          <div className='flex justify-center'>
             <img className='' src={Banner} alt='banner'/>
          </div>

         <div className='flex flex-col ml-2 gap-1 md:gap-5'>
            <h1 className='text-white font-bold text-2xl mt-10 md:text-4xl md:ml-10'>
                Transformando inovação em soluções reais.
            </h1>
            <p className='text-sm text-slate-400 md:text-xl md:w-[800px] md:ml-10'>
              Enfrente os desafios do mercado moderno com a segurança e a flexibilidade da tecnologia 
              blockchain. Desde a integração de novos sistemas até a 
              criação de soluções únicas, nós ajudamos sua empresa a se destacar no mundo digital.
            </p>
         </div>
         <button className='ml-2 bg-white p-1 rounded-lg mt-5 md:w-96 md:h-16 md:ml-10 md:mt-20'>
               Nossas Soluções
          </button>
      </section>

      <section className='h-auto bg-[#082455] pb-20 md:pb-20'>
          <div className='flex flex-col gap-2 pt-5 justify-center items-center md:flex-row'>
             <img className='w-48 rounded-xl ml-5 md:w-auto' src={Profile} alt='me'/>
             <p className="text-sm text-center px-20 text-slate-400 md:text-3xl w-[500px]">
                Sou Rafael Figueiredo, advogado, consultor e professor com foco em Direito, Tecnologia e 
                Blockchain. Minha missão é transformar a inovação tecnológica em soluções práticas 
                que beneficiem pessoas e empresas, explorando o potencial de tecnologias emergentes 
                como blockchain, Web3 e criptoativos.
              Com uma trajetória marcada por projetos relevantes e uma formação sólida, 
              estou aqui para ajudar você ou sua empresa a navegar e aproveitar as oportunidades do universo blockchain
             </p>
          </div>
          <div className="flex ml-3 gap-20 md:justify-center md:mt-5">
            <a className="p-1 w-32 text-center text-white flex items-center gap-2 mt-5">
                  <InstagramIcon className='text-white'/>
                  @_rafaelfigueiredo
            </a>
            <a href='https://www.linkedin.com/in/rafaellima01/ ' className="p-1 w-32 text-center text-white flex items-center gap-2 mt-5">
                  <LinkedInIcon className='text-white'/>
                  @rafaellima01
            </a>
          </div>
      </section>

       <section className="h-auto bg-bg-secundary bg-cover">
          <div className="flex justify-center items-center gap-2">
            <div className="h-[1px] w-32 bg-white md:w-full"></div>
            <p className="text-white text-xl md:text-3xl">Experiência</p>
            <div className="h-[1px] w-32 bg-white md:w-full"></div>
          </div>

          <div className="flex justify-center">
            <h5 className="text-sm mt-5 text-center p-2 text-white md:w-[800px] md:text-xl">
              "Na RaFi Blockchain Solutions, a experiência e a prática se unem para entregar 
              soluções que impactam positivamente diversos setores. Aqui estão alguns dos principais projetos que 
              desenvolvemos para explorar o potencial do blockchain e da Web3."
            </h5>
          </div>
          
          
          <div className='w-full'>
              <CardCarousel/>
          </div>
        </section>

        <section className='h-auto bg-[#082455] flex flex-col items-center'>
            <CardService/>
           
            <p className='text-white font-bold'>Nossos parceiros</p>
        </section>
         
         
        <section className='flex flex-col justify-center items-center'>
            <MarqueCarousel/>
        </section>

        <section className='bg-[#082455] flex justify-center flex-col items-center pt-5 gap-2'>
           <p className='text-white font-bold'>Apoiado Por</p>
           <div className='flex items-center gap-2 text-white font-semibold text-sm'>
              <img className='w-7' src={Suzu} alt='icon-suzuverse'/>
              <a href='https://suzuverse.com/pt/'>SuzuVerse</a>
           </div>
        </section>

        <footer className='bg-[#082455] w-screen'>
           <div>
              <p className='text-white text-sm font-semibold p-5'>RaFi Blockchain Solutions – Transformando inovação em soluções reais.</p>
           </div>
           <article className='flex flex-col items-center justify-center w-full'>

              <div className='flex gap-20 mb-10 mt-5'>

                 <article>
                    <label className='text-white font-bold'>Contatos</label>
                    <div className='text-sm p-1 text-slate-400 flex flex-col'>
                        <a href='mailto:rafael@rafi.solutions'>rafael@rafi.solutions</a>
                        <a href='https://wa.me/5521987495304?text=Olá!%20👋%20Seja%20bem-vindo(a)%20à%20RaFi%20Blockchain%20Solutions.%20🚀%20Estamos%20prontos%20para%20ajudar%20com%20suas%20necessidades%20em%20blockchain%20e%20tecnologia.'>
                         +55 21 98749-5304
                        </a>
                    </div>
                 </article>

                 <article>
                    <label className='text-white font-bold'>Midias</label>
                    <div className='text-sm text-slate-400'>
                        <a className='flex' href=' https://www.linkedin.com/in/rafaellima01/ '>
                        <LinkedInIcon/> Linkedin
                        </a>
                        <a className='flex'>
                        <InstagramIcon/> Instagram
                        </a>
                    </div>
                 </article>

              </div>

              <div className='flex flex-col items-center mb-10'>
                 <p className='text-white text-sm p-2 text-center'> <FmdGoodIcon/>Endereço: Avenida Bartolomeu Mitre 1084, Leblon, Rio de Janeiro, RJ</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.254550772223!2d-43.22482700347165!3d-22.97766521114945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5b06a5c1b2b%3A0xf6c7b4c75dd4a463!2sAv.%20Bartolomeu%20Mitre%2C%201084%20-%20Lagoa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022431-004!5e0!3m2!1spt-BR!2sbr!4v1731799370555!5m2!1spt-BR!2sbr" width="200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
              <p className='text-slate-400 text-sm text-center'>Vamos construir o futuro juntos? Entre em contato conosco para transformar suas ideias em realidade.</p>

           </article>
        </footer>
    </div>
  );
}

export default App;
