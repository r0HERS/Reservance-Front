import React from 'react';
import styles from './Solucao.module.css';
import { FaConciergeBell, FaChair, FaChartLine, FaRegCalendarTimes, FaDatabase, FaUtensils, FaCreditCard, FaGift, FaMobileAlt, FaStore, FaTags, FaChartBar } from 'react-icons/fa';
import { GiSmartphone } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import TelaCardapio from '../../img/TelaCardapio.png'
import TelaCarregamento from '../../img/TelaCarregamento.png'
import TelaCarrinho from '../../img/TelaCarrinho.png'
import TelaEstabelecimento from '../../img/TelaEstabelecimento.png'
import TelaInicial from '../../img/TelaInicial.png'
import TelaInventarioDeReservas from '../../img/TelaInventarioDdeReservas.png'
import TelaReserva from '../../img/TelaReserva.png'
import TelaLogin from '../../img/TelaLogin.png'
import TelaPagamento from '../../img/TelaPagamento.png'
import TelaReservaInfo from '../../img/TelaReservaInfo.png'
import TelaSearch0 from '../../img/TelaSearch0.png'
import TelaSearch1 from '../../img/TelaSearch1.png'

import imagem1 from '../../img/Foto1.jpg';
import imagem2 from '../../img/Foto2.jpg';
import imagem3 from '../../img/Foto3.jpg';
import imagem4 from '../../img/Foto4.jpg';
import imagem5 from '../../img/Foto5.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const funcionalidades = [
    {
        icon: <FaConciergeBell size={50} />,
        title: 'Reservas Online',
        description: 'Permita que seus clientes façam reservas online de forma fácil e rápida.',
        image: TelaReserva,
    },
    {
        icon: <FaUtensils size={50} />,
        title: 'Cardápio Online',
        description: 'Ofereça um cardápio digital acessível para seus clientes escolherem seus pratos.',
        image: TelaCardapio,
    },
    {
        icon: <FaGift size={50} />,
        title: 'Sistema de Fidelidade',
        description: 'Fidelize seus clientes com um sistema de pontos e recompensas.',
        image: TelaCarregamento,
    },
    {
        icon: <GiSmartphone size={50} />,
        title: 'Pré-Pedidos Online',
        description: 'Permita que seus clientes façam pedidos antecipados para ganhar tempo.',
        image: TelaCarrinho,
    },
    {
        icon: <FaCreditCard size={50} />,
        title: 'Pagamento Online',
        description: 'Facilite o pagamento dos pedidos diretamente pelo aplicativo.',
        image: TelaPagamento,
    },
];

function Solucao() {
    return (
        <div className={styles.solucaoContainer}>
            <header className={styles.header}>
                <h1>Transforme sua Experiência Gastronômica</h1>
                <p>Com a Reservance, suas refeições ficam mais práticas, rápidas e seguras.</p>
                <button className={styles.ctaButton}>Explore Funcionalidades</button>
            </header>

            <section className={styles.introSection}>
                <h2>Bem-vindo à Revolução das Reservas</h2>
                <p>Descubra como a Reservance pode facilitar suas reservas, pré-pedidos e pré-pagamentos em restaurantes.</p>
                <img src={TelaInicial} alt="Introdução" className={styles.introImage} />
            </section>

            <section className={styles.featuresSection}>
                <h2>Funcionalidades Principais</h2>
                <div className={styles.featuresGrid}>
                    {funcionalidades.map((func, index) => (
                        <div className={styles.feature} key={index}>
                            <div className={styles.featureIcon}>{func.icon}</div>
                            <h3>{func.title}</h3>
                            <p>{func.description}</p>
                            <img src={func.image} alt={func.title} className={styles.featureImage} />
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <h2>Benefícios para Restaurantes</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefit}>
                        <FaChartBar size={50} />
                        <h3>Gestão Eficiente</h3>
                        <p>Melhore a gestão do seu restaurante com ferramentas integradas.</p>
                    </div>
                    <div className={styles.benefit}>
                        <FaTags size={50} />
                        <h3>Promoções Online</h3>
                        <p>Venda promoções online e aumente sua receita.</p>
                    </div>
                    <div className={styles.benefit}>
                        <FaRegCalendarTimes size={50} />
                        <h3>Redução de Cancelamentos</h3>
                        <p>Minimize cancelamentos com um sistema confiável.</p>
                    </div>
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <h2>Benefícios para Clientes</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefit}>
                        <GiSmartphone size={50} />
                        <h3>Comodidade</h3>
                        <p>Faça reservas e pedidos facilmente pelo celular.</p>
                    </div>
                    <div className={styles.benefit}>
                        <FaChair size={50} />
                        <h3>Personalização</h3>
                        <p>Personalize sua experiência de acordo com suas preferências.</p>
                    </div>
                    <div className={styles.benefit}>
                        <FaChartLine size={50} />
                        <h3>Transparência</h3>
                        <p>Veja os preços de forma clara e sem surpresas.</p>
                    </div>
                </div>
            </section>

            <section className={styles.sliderSection}>
                <h2>Veja Nossas Funcionalidades em Ação</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className={styles.slider}
                >
                    {funcionalidades.map((func, index) => (
                        <SwiperSlide key={index}>
                            <img src={func.image} alt={func.title} className={styles.sliderImage} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaBox}>
                    <div className={styles.cta}>
                        <FaMobileAlt size={70} color="black" />
                        <h3>Baixe Nosso App</h3>
                        <p>Experimente a conveniência de fazer reservas, pedidos e pagamentos na palma da sua mão.</p>
                        <button className={styles.ctaButton}>Baixar Agora</button>
                    </div>
                    <div className={styles.cta}>
                        <FaStore size={70} color="black" />
                        <h3>Cadastre Seu Estabelecimento</h3>
                        <p>Modernize seu restaurante e aumente a eficiência com nossas soluções.</p>
                        <button className={styles.ctaButton}>Cadastre-se</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Solucao;
