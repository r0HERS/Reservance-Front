import styles from './Home.module.css'
import imagem0 from '../../img/Foto0.jpg' 
import imagem1 from '../../img/Foto1.jpg' 
import imagem2 from '../../img/Foto2.jpg' 
import imagem3 from '../../img/Foto3.jpg' 
import imagem4 from '../../img/Foto4.jpg' 
import imagem5 from '../../img/Foto5.jpg' 
import imagem6 from '../../img/Foto6.jpg' 
import imagem7 from '../../img/Foto7.jpg' 
import imagem8 from '../../img/Foto8.jpg' 
import imagem9 from '../../img/Foto9.jpg' 
import imagem10 from '../../img/Foto10.jpg' 
import imagem11 from '../../img/Foto11.jpg' 
import imagem12 from '../../img/Foto12.jpg' 
import imagem13 from '../../img/Foto13.jpg' 

import LinkButton from '../Layout/LinkButton'
import { FaConciergeBell, FaChair, FaChartLine, FaRegCalendarTimes, FaDatabase, FaUtensils, FaCreditCard, FaGift, FaMobileAlt, FaStore, FaTags, FaChartBar } from 'react-icons/fa';
import { GiSmartphone } from 'react-icons/gi';
import { register } from 'swiper/element/bundle'
import { Link } from 'react-router-dom';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

register();

const imagensRestaurantes = [
    { id: '0', image: imagem0 },
    { id: '1', image: imagem9 },
    { id: '2', image: imagem13 },
  ];
  
  const imagensClientes = [
    { id: '0', image: imagem2 },
    { id: '1', image: imagem4 },
    { id: '2', image: imagem10 },
  ];
  
  function Home(props) {
    return (
        <div className={styles.homeContainer}>
          <div className={styles.hero}>
            <img src={imagem0} alt="Hero" className={styles.heroImage} />
            <div className={styles.overlay}>
              <h1>Não espere pelo melhor da vida</h1>
              <Link to="/Empresa" className={styles.linkButton}>Conheça Mais</Link>
            </div>
          </div>
    
          <section className={styles.benefits}>
            <h2>Benefícios para Restaurantes</h2>
            <div className={styles.benefitContainer}>
              <div className={styles.benefitList}>
                <div className={styles.benefitItem}>
                  <FaConciergeBell size={50} />
                  <div>
                    <h3>Automação de Reservas</h3>
                    <p>Simplifique o processo de reservas e aumente a eficiência.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaChair size={50} />
                  <div>
                    <h3>Melhoria na Gestão de Mesas</h3>
                    <p>Organize e gerencie mesas com facilidade e precisão.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaTags size={80} />
                  <div>
                    <h3>Vender Promoções Online</h3>
                    <p>Será mais fácil vender promoções online, uma vez que as pessoas podem comprá-las a qualquer momento e de qualquer lugar com o celular.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaChartBar size={70} />
                  <div>
                    <h3>Previsibilidade dos Pedidos</h3>
                    <p>Ganha previsibilidade ao saber antecipadamente parte dos pedidos, diminuindo o desperdício.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaRegCalendarTimes size={50} />
                  <div>
                    <h3>Redução de Erros e Cancelamentos</h3>
                    <p>Minimize erros e cancelamentos com um sistema confiável.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaDatabase size={50} />
                  <div>
                    <h3>Dados e Insights</h3>
                    <p>Obtenha dados valiosos para tomar decisões estratégicas.</p>
                  </div>
                </div>
              </div>
              <div className={styles.benefitSlider}>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className={styles.phoneSwiper}
                >
                  {imagensRestaurantes.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.image} alt="Slider" className={styles.sliderImage} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
    
            <h2>Benefícios para Clientes</h2>
            <div className={styles.benefitContainerReverse}>
              <div className={styles.benefitSlider}>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className={styles.phoneSwiper}
                >
                  {imagensClientes.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.image} alt="Slider" className={styles.sliderImage} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.benefitList}>
                <div className={styles.benefitItem}>
                  <GiSmartphone size={50} />
                  <div>
                    <h3>Comodidade e Facilidade</h3>
                    <p>Faça reservas e pedidos com facilidade pelo celular.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaChair size={50} />
                  <div>
                    <h3>Personalização da Experiência</h3>
                    <p>Personalize sua experiência de acordo com suas preferências.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaChartLine size={50} />
                  <div>
                    <h3>Transparência nos Preços</h3>
                    <p>Veja os preços de forma clara e sem surpresas.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaRegCalendarTimes size={50} />
                  <div>
                    <h3>Redução do Tempo de Espera</h3>
                    <p>Reduza o tempo de espera com pré-pedidos e pré-pagamentos.</p>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.benefitItem}>
                  <FaDatabase size={50} />
                  <div>
                    <h3>Segurança e Privacidade</h3>
                    <p>Seus dados protegidos com nossa tecnologia de segurança.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className={styles.features}>
            <h2>Funcionalidades Principais</h2>
            <div className={styles.featureContainer}>
              <div className={styles.featureBox}>
                <FaConciergeBell size={50} />
                <h3>Reservas Online</h3>
                <p>Permita que seus clientes façam reservas online de forma fácil e rápida.</p>
                <Link to="/Solucao" className={styles.featureButton}>Saiba Mais</Link>
              </div>
              <div className={styles.featureBox}>
                <FaUtensils size={50} />
                <h3>Cardápio Online</h3>
                <p>Ofereça um cardápio digital acessível para seus clientes escolherem seus pratos.</p>
                <Link to="/Solucao" className={styles.featureButton}>Saiba Mais</Link>
              </div>
              <div className={styles.featureBox}>
                <FaGift size={50} />
                <h3>Sistema de Fidelidade</h3>
                <p>Fidelize seus clientes com um sistema de pontos e recompensas.</p>
                <Link to="/Solucao" className={styles.featureButton}>Saiba Mais</Link>
              </div>
              <div className={styles.featureBox}>
                <GiSmartphone size={50} />
                <h3>Pré-Pedidos Online</h3>
                <p>Permita que seus clientes façam pedidos antecipados para ganhar tempo.</p>
                <Link to="/Solucao" className={styles.featureButton}>Saiba Mais</Link>
              </div>
              <div className={styles.featureBox}>
                <FaCreditCard size={50} />
                <h3>Pagamento Online</h3>
                <p>Facilite o pagamento dos pedidos diretamente pelo aplicativo.</p>
                <Link to="/Solucao" className={styles.featureButton}>Saiba Mais</Link>
              </div>
            </div>
          </section>
    
          <section className={styles.callToAction}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaUser}>
                <FaMobileAlt size={70} color="black" />
                <h3>Baixe Nosso App</h3>
                <p>Chega de esperas! Experimente a conveniência de fazer reservas, pedidos e pagamentos na palma da sua mão.</p>
                <Link to="/DownloadApp" className={styles.ctaButton}>Baixar Agora</Link>
              </div>
              <div className={styles.ctaDivider}></div>
              <div className={styles.ctaEstablishment}>
                <FaStore size={70} color="black" />
                <h3>Cadastre Seu Estabelecimento</h3>
                <p>Não perca essa oportunidade de modernização e avanço no mercado. Aumente a eficiência e a satisfação do cliente.</p>
                <Link to="/CadastroEstabelecimento" className={styles.ctaButton}>Cadastre-se</Link>
              </div>
            </div>
          </section>
        </div>
      );
  }

export default Home