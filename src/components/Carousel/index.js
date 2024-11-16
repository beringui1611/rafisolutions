import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Fiesp from "../../assets/fiesp.jpeg";
import Toshi from "../../assets/toshi.jpeg";
import Fret from  "../../assets/fret.jpeg";
import Token from "../../assets/tokenizacao.jpeg";
import IA from "../../assets/ia.jpeg";
import Saneamento from '../../assets/saneamento.jpeg';
import Cedae from '../../assets/cedae.jpeg';

const details = [
    {
        name: "Cartilha Blockchain",
        description: "Cartilha Blockchain nas Indústrias de São Paulo (FIESP): Coautor de uma publicação essencial para empresas, detalhando como blockchain pode transformar processos industriais.",
        image: Fiesp,
        link: "https://www.fiesp.com.br/noticias/fiesp-lanca-cartilhas-explicando-a-tecnologia-blockchain-e-o-funcionamento-do-carf-e-do-controle-externo-pelo-tribunal-de-contas-da-uniao/"
    },
    {
        name: "Projeto TOSHI",
        description: " Projeto TOSHI: Estudo completo e coautoria do projeto para criação de uma DEX (exchange descentralizada) no Brasil, explorando tudo referente a sua criação, como sua viabilidade e impactos regulatórios.",
        image: Toshi,
        link: "https://gitec.pro/_pesquisas/what-is-lorem-ipsum/"
    },
    {
        name: "Projeto FRET",
        description: "Projeto FRET: Pesquisa abrangente sobre as 50 maiores economias do mundo, analisando como cada uma regulamenta ou tributa criptoativos, trazendo insights valiosos para o mercado global.",
        image: Fret,
        link: "https://gitec.pro/_pesquisas/projeto-fret/"
    },
    {
        name: "Livro Tokenização IBChain",
        description: "Livro de Tokenização do IBChain: Organizador e coautor de uma obra que aborda de forma prática como entender e aplicar a tokenização em diferentes setores econômicos.",
        image: Token,
        link: "https://www.amazon.com.br/Tokeniza%C3%A7%C3%A3o-como-fazer-casos-pr%C3%A1ticos-ebook/dp/B0DM2NCJC7/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YA67IFPVBSN6&dib=eyJ2IjoiMSJ9.y62ShFXbpaklON-OtN_Fbs-MHwz-cV6mKdOkMU5yE5bGjHj071QN20LucGBJIEps.qU2tMoLkpY0kD2bcOFlR8z7ia27yZWQR0k1JAn89pP4&dib_tag=se&keywords=ibchain&qid=1731747145&sprefix=ibchain%2Caps%2C204&sr=8-3"
    },
    {
        name: "Livro IA IBChain",
        description: " Livro de IA do IBChain: Coautor, contribuindo com reflexões sobre o impacto da inteligência artificial no direito e na tecnologia.",
        image: IA,
        link: "https://www.amazon.com.br/Intelig%C3%AAncia-Artificial-Desafios-realidade-brasileira-ebook/dp/B0DM2MMQBL/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YA67IFPVBSN6&dib=eyJ2IjoiMSJ9.y62ShFXbpaklON-OtN_Fbs-MHwz-cV6mKdOkMU5yE5bGjHj071QN20LucGBJIEps.qU2tMoLkpY0kD2bcOFlR8z7ia27yZWQR0k1JAn89pP4&dib_"
    },
    {
        name: "Blockchain no Saneamento",
        description: " Livro Os Novos Rumos do Saneamento: Autor de artigo sobre o uso de blockchain no saneamento básico, explorando as aplicações dessa tecnologia para melhorar eficiência e transparência no setor.",
        image: Saneamento,
        link: "https://www.amazon.com.br/Os-novos-rumos-saneamento-Tomo-ebook/dp/B0C9R8F7X4/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Z49BCKL0XVXQ&dib=eyJ2IjoiMSJ9.aO19vbGTJK4EEheAENJlv1DfOtFuLCtWPg2AUqeE6PPGjHj071QN20LucGBJIEps.pyuTqS-WEqgh8PXo-Ae-mXl0b3_H2pw6yLIUQrE7e9M&dib_tag=se&keywords=os+novos+rumos+do+saneamento&qid=1731747530&sprefix=os+novos+rumos+do+saneamento%2Caps%2C215&sr=8-1"
    },
    {
        name: "Implementação LGPD na CEDAE",
        description: " Implantação da LGPD na CEDAE: Atuei desde o início na implantação da LGPD na CEDAE, estruturando o programa de privacidade, gerenciando riscos e garantindo a conformidade da empresa com a legislação vigente.",
        image: Cedae,
        link: "https://cedae.com.br/lgpd"
    }
];

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export const CardCarousel = () => {
    return (
        <div className='p-10'>
            <Carousel responsive={responsive} className='rounded-xl backdrop-blur-xl'>
                {details.map((detail, index) => (
                    <div key={index} className="p-4 h-[580px] flex flex-col items-center border-2 w-full max-w-sm rounded-xl 
                    ">
                        <img src={detail.image} alt={detail.name} className="w-10/12 h-auto max-w-xs" />
                        <h3 className="text-lg font-bold mt-2 text-white">{detail.name}</h3>
                        <p className="text-sm text-center mt-2 text-slate-400">{detail.description}</p>
                        {detail.link && (
                            <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2">
                                Saiba mais
                            </a>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
