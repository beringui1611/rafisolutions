import Element from '../../assets/element-top.png';
import HubIcon from '@mui/icons-material/Hub';
import TokenIcon from '@mui/icons-material/Token';
import LanguageIcon from '@mui/icons-material/Language';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import ForYou from '../../assets/paraquem.png';

export const CardService = () => {

    return (
        <div className="h-auto bg-[#082455]">
            <img className='w-32 absolute' src={Element} alt='element-3d'/>
            <h3 className='text-center pt-20 text-xl font-bold text-white ml-10'>Nossos serviços</h3>
             <div>
                 <p className="p-5 text-center text-slate-400 text-sm">
                    Na RaFi Blockchain Solutions, oferecemos serviços personalizados 
                    para ajudar profissionais e empresas a explorar o potencial 
                    das tecnologias emergentes como blockchain, Web3 e criptoativos. 
                    Seja você um iniciante ou um profissional experiente, 
                    nossos serviços são projetados para atender às 
                    suas necessidades específicas, com foco em resultados práticos e estratégicos.
                 </p>
             </div>

             <div className='flex flex-col items-center h-auto'>
                <article className=''>
                    <div className='flex justify-center mt-10'>
                        <p className='text-white font-bold'>O que você pode esperar?</p>
                    </div>
                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <HubIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                            Implementação de blockchain: Auxiliamos na escolha da melhor infraestrutura (
                            redes públicas ou privadas) e na integração com seus sistemas existentes.
                        </p>
                    </div>

                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <TokenIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                        Estratégias de tokenização: Desenvolvemos planos para 
                        criar tokens que representem ativos físicos ou 
                        digitais, com foco em conformidade regulatória e impacto no mercado.
                        </p>
                    </div>

                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <LanguageIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                        Consultoria sobre Web3: Exploramos como a Web3 pode 
                        transformar seu modelo de negócio, trazendo descentralização e transparência.
                        </p>
                    </div>

                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <CodeIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                        Desenvolvimento de smart contracts: Trabalhamos com parceiros especializados 
                        para criar contratos inteligentes seguros e otimizados para suas necessidades.
                        </p>
                    </div>
                </article>
                
                <article>
                    <img src={ForYou} alt='nao-deixe-sua-empresa-fora-dessa'/>

                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <FiberNewIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                        Empresas que querem explorar novas oportunidades de mercado.
                        </p>
                    </div>

                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <HowToRegIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                        Profissionais autônomos que desejam transformar suas ideias em projetos viáveis.
                        </p>
                    </div>

                    <div className='mt-5 p-5 flex gap-2 justify-center items-center'>
                        <BusinessIcon className='text-green-300'/>
                        <p className='text-slate-400 text-sm'> 
                        Startups que precisam de orientação para projetos baseados em 
                        blockchain e criptoativos.
                        </p>
                    </div>
                </article>
             </div>
        </div>
    )
}