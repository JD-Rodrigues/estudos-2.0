
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './App.css'
// eslint-disable-next-line no-unused-vars



function App() {
  
  

  

  return (
    <div className='container'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      scrollbar
      navigation
      pagination
      loop
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide ><img className='imagem' src='https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg'/></SwiperSlide>
        <SwiperSlide><img className='imagem' src='https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp'/></SwiperSlide>
        <SwiperSlide><img className='imagem' src='https://1.bp.blogspot.com/-5XOjJvW09zQ/UjtEqc523_I/AAAAAAAAmTo/dOHXSTw3pF8/s1600/PAISAGEM.jpg'/></SwiperSlide>
        <SwiperSlide><img className='imagem' src='https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/14179421596_b95c10db10_o.jpeg?quality=70&strip=info&w=928&w=636'/></SwiperSlide>
      
      </Swiper>
    </div>
  );
}

export default App
