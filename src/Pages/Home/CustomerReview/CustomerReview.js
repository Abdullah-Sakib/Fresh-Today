import React from "react";
import customerReviewBg from "../../../Assets/customer-review-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Parallax } from "swiper";
import "./CustomerReview.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerReview = () => {
  return (
    <div className="mt-16 md:mt-28 lg:mt-32 font-family">
      <h1 className="pb-10 text-center font-bold text-slate-800 text-5xl">
        Let's hear what our customers have to say
      </h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{ backgroundImage: `url(${customerReviewBg})` }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div
            className="lg:p-20 lg:flex justify-center items-center gap-4"
            data-swiper-parallax="-300"
          >
            <div className="avatar">
              <div className="w-96 rounded">
                <img
                  src="https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-slate-50 text-3xl font-semibold w-96">
              <p className="text-9xl h-16">"</p>
              <p className="pl-16 text-slate-800">
                I have always received my orders on time and the quality of the
                products are always top notch
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:p-20 lg:flex justify-center items-center gap-4"
            data-swiper-parallax="-300"
          >
            <div className="avatar">
              <div className="w-96 rounded">
                <img
                  src="https://i.ibb.co/bb8Yfc7/may-gauthier-s3m-R42-Spras-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-slate-50 text-3xl font-semibold w-96">
              <p className="text-9xl h-16">"</p>
              <p className="pl-16 text-slate-800">
                My experience with using Fresh Today has been worthwhile. I
                would strongly suggest it for everybody to use
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:p-20 lg:flex justify-center items-center gap-4"
            data-swiper-parallax="-300"
          >
            <div className="avatar">
              <div className="w-96 rounded">
                <img
                  src="https://i.ibb.co/jv65wpR/edward-cisneros-H6wpor9mjs-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-slate-50 text-3xl font-semibold w-96">
              <p className="text-9xl h-16">"</p>
              <p className="pl-16 text-slate-800">
                Fresh Today has made my life easier. Now I can save time during
                my grocery shopping which otherwise becomes a hassle
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerReview;
