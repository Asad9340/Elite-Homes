import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Banner() {
  return (
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
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/338038657.jpg?k=1767f8d4ad74e77e36d19d363bb8f17e3bbddc0044f6527db066a7d519b46e55&o=&hp=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[350px] md:h-[550px] w-full  rounded-lg"
            src="https://media.cntraveler.com/photos/5e5e9a3617b1dc0008f2fbfe/master/pass/EauPalmBeachResort&Spa-PalmBeachFlorida-2020-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[350px] md:h-[550px] w-full  rounded-lg"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/536391058.jpg?k=cd571323ffcfba0283cb7936a019706b314b098d3dc8d841547db21d7371e82a&o=&hp=1"
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
            src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2020/02/JADE-MOUNTAIN-ST-LUCIA.jpg?ssl=1"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
