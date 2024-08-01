import React, { useEffect, useState } from 'react';
// import { StyledGuestRoutes } from './GuesRoutes.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Scrollbar } from 'swiper/modules';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'auth/base';
import Card from 'components/Card/Card';

const GuestRoutes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const guestRoutesSnapshot = await getDocs(collection(db, 'guestRoutes'));
      const guestRoutes = guestRoutesSnapshot.docs.map(doc => doc.data());
      console.log('guestRoutes: ', guestRoutes);
      setIsLoading(false);
      setCards(guestRoutes);
    };
    fetchData();
  }, []);

  return (
    <Swiper
      className="swiper"
      modules={[Scrollbar, EffectCoverflow]}
      effect="coverflow"
      initialSlide={2}
      loop={true}
      spaceBetween={20}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          coverflowEffect: {
            rotate: 40,
            stretch: 30,
            modifier: 2,
            slideShadows: false,
          },
        },
        475: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
          coverflowEffect: false,
        },
        1200: {
          slidesPerView: 3,
          coverflowEffect: {
            rotate: 20,
            stretch: 30,
            depth: 90,
            modifier: 2,
            slideShadows: true,
          },
        },
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 30,
        depth: 90,
        modifier: 2,
        slideShadows: true,
      }}
    >
      {cards.map(mount => {
        const title = mount.routeName;
        const id = mount.routeName;
        const thumb = mount.photoCardImg;
        const description = mount.shortDescription;
        return (
          <SwiperSlide key={title}>
            <Card
              id={id}
              title={title}
              thumbs={thumb}
              description={description}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GuestRoutes;
