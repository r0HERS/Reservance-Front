import styles from './Home.module.css'
import imagem from '../../img/pratorestaurante.png' 
import imagem2 from '../../img/restaurantecima2.png'
import imagem3 from '../../img/restaurantecima3.png'
import imagem4 from '../../img/restaurantecima4.png'
import imagem5 from '../../img/restaurantecima5.png'
import imagem6 from '../../img/restaurantecima6.png'
import imagem7 from '../../img/restaurantecima7.png'
import imagem8 from '../../img/restaurantecima8.png'
import imagem9 from '../../img/restaurantecima9.png'
import imagem10 from '../../img/restaurantecima10.png'
import imagem11 from '../../img/restaurantecima11.png'
import imagem12 from '../../img/restaurantecima12.png'


import LinkButton from '../Layout/LinkButton'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

register();

const imagens =[

    { id:'2', image: imagem2},
    { id:'3', image: imagem3},
    { id:'5', image: imagem5},
    { id:'10', image: imagem10},
    { id:'11', image: imagem11},
    { id:'12', image: imagem12},

]



function Home(props){

    return(
        <>
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {imagens.map( (item) =>(
                    <SwiperSlide key={item.id}>
                        <img src={item.image}
                        alt="slider"
                        className="slider-item"
                        style={{
                            width: '100%',
                            height: '350px',
                            objectFit: 'cover',
                        }}
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
        
        <section className={styles.home_container}>
            <h1>
                 <span>Reser</span><span1>vance</span1>
             </h1>    
                <h3>A melhor reserva, para a melhor experiência!</h3>
                <LinkButton to="/CriarProjeto" text="Criar Projeto"/>
           

        </section>
        </>
    )

}

export default Home