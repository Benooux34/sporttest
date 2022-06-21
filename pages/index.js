import Head from 'next/head'
import Header from '../components/Header'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="p-5">
        <span className="text-2xl font-light">Salut Lucas,</span>
        <h1 className="text-3xl mt-2">Road to The Rock le Boss</h1>
      </div>

      {/* Training */}
      <div className="mb-5 ml-5">
        <h2 className="text-2xl">Les Entrainements</h2>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[220px] w-[100%]"
        >
          <SwiperSlide>
            <img className="" src="pectoraux.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="abdos.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="bras.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="jambes.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="epaules.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://previews.123rf.com/images/decade3d/decade3d1605/decade3d160500048/58756561-grand-dorsal-anatomie-muscles-isol%C3%A9-sur-blanc-illustration-3d.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}
