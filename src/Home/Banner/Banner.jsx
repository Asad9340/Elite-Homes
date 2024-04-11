import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Banner() {
  return (
    <>
      {' '}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-b-lg"
              src="https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-lg"
              src="https://www.cvent.com/sites/default/files/image/2018-07/luxury-hotel.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-lg"
              src="https://p4.wallpaperbetter.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-lg"
              src="https://media.cnn.com/api/v1/images/stellar/prod/170411150709-honeymoon-hotel-four-seasons-maldives.jpg?q=w_4414,h_2946,x_0,y_0,c_fill/h_618"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[350px] md:h-[550px]  w-full  rounded-lg"
              src="https://dream.luxuryescapes.com/wp-content/uploads/2023/06/t8xuapagxnvh8yf5a3cb-1024x576.webp?crop=1"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
