import React from 'react';
import "./post.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Post = () => {
  return (
    <Swiper className="container"
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar]}
    spaceBetween={10}
    slidesPerView={2}
    /*centeredSlides={true}
    grabCursor={true}*/
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    //onSwiper={(swiper) => console.log(swiper)}
    //onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide className="single">
        <div className="swiper-slider">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQMwq_mZ2I9qpXPhmIeJ5on2jZTavrF65Kw&usqp=CAU"></img>
          <div className="info">
            <h3>VIEW</h3>
            <p> This view is amazing</p>
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="single">
        <div className="swiper-slider">
          <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/brazil/relatorio2019-capa.jpg?crop=134%2C0%2C1730%2C1337&wid=1600&hei=1236&scl=1.081715210355987"></img>
          <div className="info">
            <h3>VIEW</h3>
            <p> This view is amazing</p>
           
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="single">
        <div className="swiper-slider">
          <img src="https://www.nature.org/content/dam/tnc/nature/en/photos/tnc_48980557.jpg"></img>
          <div className="info">
            <h3>VIEW</h3>
            <p> This view is amazing</p>
            
          </div>
          </div>
      </SwiperSlide>
      <SwiperSlide className="single">
       <div className="swiper-slider">
          <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/FreeFlowingRiver.jpg?crop=191%2C0%2C1322%2C992&wid=1640&hei=1230&scl=0.8065040650406504"></img>
          <div className="info">
            <h3>VIEW</h3>
            <p> This view is amazing</p>
           
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="single">
        <div className="swiper-slider">
          <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/bf40c3e25d51f682f8d2fe32692c8a61_original.jpg?crop=0%2C0%2C2666%2C2000&wid=1640&hei=1230&scl=1.6260162601626016"></img>
          <div className="info">
            <h3>VIEW</h3>
            <p> This view is amazing</p>
            
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Post