import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
function Banner() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-b-lg"
              src="https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Luxury Resort & Spa
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Oceanfront retreat with panoramic views and private beach
                access.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-lg"
              src="https://www.cvent.com/sites/default/files/image/2018-07/luxury-hotel.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Luxury City Penthouse
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Oceanfront retreat with panoramic views and private beach
                access.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-lg"
              src="https://p4.wallpaperbetter.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Grand Colonial Mansion
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Oceanfront retreat with panoramic views and private beach
                access.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[550px] w-full  rounded-lg"
              src="https://media.cnn.com/api/v1/images/stellar/prod/170411150709-honeymoon-hotel-four-seasons-maldives.jpg?q=w_4414,h_2946,x_0,y_0,c_fill/h_618"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Luxury Beachfront Villa
              </h2>
              <p className="mt-2  animate__animated animate__rubberBand">
                Oceanfront retreat with panoramic views and private beach
                access.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="h-[350px] md:h-[550px]  w-full  rounded-lg"
              src="https://dream.luxuryescapes.com/wp-content/uploads/2023/06/t8xuapagxnvh8yf5a3cb-1024x576.webp?crop=1"
              alt=""
            />
            <div className="absolute bottom-0 text-center pb-6 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold animate__animated animate__bounce">
                Private Island Paradise
              </h2>
              <p className="mt-2 animate__animated animate__rubberBand">
                Oceanfront retreat with panoramic views and private beach
                access.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
