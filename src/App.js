import Logo from './assets/logofull.png';
import Banner from './assets/banner.png';
import Profile from './assets/profile.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CardCarousel } from './components/Carousel';
import { CardService } from './components/CardService';
import { MarqueCarousel } from './components/MarqueeCard';
import Suzu from './assets/suzu-logo.svg';
import {CardEvent} from './components/CarouselEvent';
import MicIcon from '@mui/icons-material/Mic';

function App() {
  return (
    <div className='overflow-hidden'>
      <header className="bg-white flex items-center justify-around md:justify-around">
        <div className='p-2 flex items-center gap-1'>
            <img className='w-20' src={Logo} alt='logo'/>
        </div>
          <a
            href='https://wa.me/5521987495304?text=Olá!%20👋%20Seja%20bem-vindo(a)%20à%20RaFi%20Blockchain%20Solutions.%20🚀%20Estamos%20prontos%20para%20ajudar%20com%20suas%20necessidades%20em%20blockchain%20e%20tecnologia.'
            className='bg-[#082455] text-white flex justify-center items-center h-10 p-1 text-sm rounded-md font-semibold shadow-lg ml-5 text-center'>
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
             <p className="text-sm px-20 text-slate-400 md:text-3xl w-[500px]">
             Sou Rafael Figueiredo, Advogado, Consultor e Professor apaixonado por Direito, Tecnologia e Blockchain. Minha missão é transformar inovações como blockchain, Web3 e criptoativos em soluções práticas para pessoas e empresas.
              Com mais de 15 anos de experiência, atuo em projetos que conectam Direito e Tecnologia, promovendo eficiência e inovação.
              <br/>
              <br/>
              <p className='text-white font-bold text-sm'>Formação Acadêmica:</p>
              <br/>
              <li>Mestrando em Direito e Tecnologia – FGV/SP</li>
              <li>Pós-Graduado em Direito Digital – ITS Rio/UERJ</li>
              <li>Certificado CIPP/E – IAPP</li>
              <li>Bitcoin, DeFi e ReFi Talent – Frankfurt School Blockchain Center</li>
              <li>Pesquisador IBChain e membro do GITEC</li>
              <li>ECOTA Fellow</li>
              <p className='text-white mt-5'>Estou aqui para ajudar você ou sua empresa a navegar no universo blockchain, transformando desafios em oportunidades.</p>
             </p>
          </div>
          <div className="flex ml-3 gap-20 md:justify-center md:mt-5">
            <a href='https://www.instagram.com/_rafaelfigueiredo/' className="p-1 w-32 text-center text-white flex items-center gap-2 mt-5">
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

        <section className='flex flex-col justify-center'>
           <CardEvent/>
        </section>

        <section className='h-auto bg-[#082455] flex flex-col items-center'>
            <CardService/>
            <section className='bg-[#082455]'>
           <h4 className='text-white font-bold p-2'>Palestras Personalizadas</h4>
           <p className='p-2 text-sm text-slate-400'>
            Além das mentorias e consultorias, também oferecemos palestras que 
            combinam conhecimento técnico e insights práticos para inspirar equipes e 
            públicos diversos. Confira mais sobre Palestras em Eventos Relevantes em nossa seção dedicada.
            Por que minhas palestras fazem a diferença?
            <br/>
            <br/>
            Cada apresentação é adaptada para o público do evento, 
            indo além da teoria e trazendo exemplos práticos, 
            tendências globais e insights que conectam tecnologia ao mercado e à sociedade. Meu objetivo é 
            sempre inspirar, ensinar e provocar novas ideias.
           </p>

           <p className='flex p-2 items-center gap-2 text-white font-bold'>
             <MicIcon/>
             Quer levar minha palestra para o seu evento?
           </p>

           <p className='p-2 text-slate-400 text-sm'>
              Entre em contato para discutirmos temas, 
              formatos e como posso agregar valor ao seu público. 
              Vamos construir juntos momentos de aprendizado e transformação!
           </p>
        </section>

          <p className='text-white font-bold'>Nossos parceiros</p>

        </section>
         
        <section className='flex flex-col justify-center items-center'>
            <MarqueCarousel/>
        </section>


        <footer className='bg-[#082455] w-screen'>
           <div>
              <p className='text-white text-sm font-semibold p-5'>RaFi Blockchain Solutions – Transformando inovação em soluções reais.</p>
           </div>
           <section className='bg-[#082455] flex justify-center flex-col items-center pt-5 gap-2'>
           <p className='text-white font-bold'>Apoiado Por</p>
           <div className='flex items-center gap-2 text-white font-semibold text-sm'>
              <img className='w-7' src={Suzu} alt='icon-suzuverse'/>
              <a href='https://suzuverse.com/pt/'>SuzuVerse</a>
           </div>
        </section>
           <article className='flex flex-col items-center justify-center w-full'>

              <div className='flex gap-20 mb-10 mt-5'>

                 <article>
                    <label className='text-white font-bold'>Contatos</label>
                    <div className='text-sm p-1 text-slate-400 flex flex-col'>
                        <a href='mailto:rafael@rafi.solutions'>rafael@rafi.solutions</a>
                        <a href='https://wa.me/5521987495304?text=Olá!%20👋%20Seja%20bem-vindo(a)%20à%20RaFi%20Blockchain%20Solutions.%20🚀%20Estamos%20prontos%20para%20ajudar%20com%20suas%20necessidades%20em%20blockchain%20e%20tecnologia.'>
                         +55 21 97358-1528
                        </a>
                    </div>
                 </article>

                 <article>
                    <label className='text-white font-bold'>Midias</label>
                    <div className='text-sm text-slate-400'>
                        <a className='flex' href=' https://www.linkedin.com/in/rafaellima01/ '>
                        <LinkedInIcon/> Linkedin
                        </a>
                        <a href='https://www.instagram.com/_rafaelfigueiredo/' className='flex'>
                        <InstagramIcon/> Instagram
                        </a>
                    </div>
                 </article>

              </div>
              
              <p className='text-slate-400 text-sm text-center'>Vamos construir o futuro juntos? Entre em contato conosco para transformar suas ideias em realidade.</p>

           </article>
        </footer>
    </div>
  );
}

export default App;
