import Card from 'components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import {
  StyledCardSection,
  StyledGallerySection,
  StyledHeroSection,
  StyledWelcomeSection,
} from './Home.styled';
import Gallery from 'components/Gallery/Gallery';
import { themeContext } from 'context/ThemeContext';
import { useContext, useEffect, useRef } from 'react';
import * as prismicH from '@prismicio/helpers';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { theme } = useContext(themeContext);
  const [documents] = useAllPrismicDocumentsByType('mountain-routes');
  const galleryRef = useRef();
  const routesRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    if (location.hash === '#gallery') {
      galleryRef.current.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true,
      });
    }
    if (location.hash === '#routes') {
      routesRef.current.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true,
      });
    }
  }, [location.hash]);

  const cards = documents?.map(doc => doc.data.mountain_card?.[0]) ?? [];

  return (
    <div>
      <StyledHeroSection $theme={theme}>
        <h1 className="animate__animated animate__fadeInDown">
          Щастя не за горами. Щастя у горах.
        </h1>
      </StyledHeroSection>
      <StyledWelcomeSection title="Ласкаво просимо на наш блог!">
        <p className="text">
          Ласкаво просимо на наш блог, створений спеціально для тих, хто мріє
          про захоплюючі подорожі та враження від вершин. Тут ми разом з вами
          вирушимо у захоплюючі пригоди, що перетворять кожен похід у незабутню
          подію.
          <br /> На сторінці "Захоплення вершинами" ми ділитимемося історіями та
          враженнями від туристичних походів до височин, де величні гірські
          масиви здаються намалюваними на фоні небес. Ми вкажемо шлях до
          віддалених долин та озер, де кожний крок приносить радість відкриття.
          <br />
          Подорожі для нас — це не лише завоювання вершин, але й відкриття
          різноманітності природних пейзажів. Ми покажемо вам красу величних
          гір, а також місця, про які можливо ви ще не чули, але варті
          відвідання.
          <br /> Кожен похід — це можливість зафіксувати неперевершені краєвиди
          та емоції, розповісти історії про пригоди та поділитися порадами для
          тих, хто готовий вирушити у власний захоплюючий шлях. Долучайтеся до
          нашого блогу, і ми обіцяємо розкрити вам захоплюючий світ гір та
          вершин. Разом ми відкриємо нові горизонти та допоможемо вам здолати
          власні межі!
        </p>
      </StyledWelcomeSection>
      <StyledGallerySection ref={galleryRef} title="Галерея" id="gallery">
        <p className="text">
          Тут ви зможете насолоджуватися величчю гірських вершин, де кожен кадр
          — це оповідання про магію та велич природи. Дозвольте собі зануритися
          в світ височин, де масиви скель, засніжені вершини та живописні долини
          створюють унікальні композиції, які залишають вам незабутні враження.
          В кожному кадрі відкривається велич та загадковість гірських вершин.
          Від золотистих світанків до мрійливих закатів, наша галерея пропонує
          подорож у світ, де час сповільнюється, а емоції запам'ятовуються
          назавжди.
        </p>
        <Gallery />
      </StyledGallerySection>
      <StyledCardSection ref={routesRef} title="Маршрути" id="routes">
        <p className="text">
          Вершини Карпат чекають на вас! Вирушайте разом з нами в незабутні
          подорожі по наших туристичних маршрутах серед чарівних лісів,
          кришталевих потоків і високогірних панорам. Відчуйте дух пригоди у
          серці Карпат!
        </p>
        <Swiper
          className="swiper"
          modules={[Scrollbar, EffectCoverflow]}
          effect="coverflow"
          initialSlide={2}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          coverflowEffect={{
            rotate: 20,
            stretch: 30,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
        >
          {cards.map(mount => {
            const title = prismicH.asText(mount.card_title);
            const id = prismicH.asText(mount.card_id);
            const thumbs = mount.card_img.url;
            const description = prismicH.asText(mount.card_description);
            return (
              <SwiperSlide key={title}>
                <Card
                  id={id}
                  title={title}
                  thumbs={thumbs}
                  description={description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledCardSection>
    </div>
  );
};

export default Home;
