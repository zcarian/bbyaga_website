import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

const sentences = [
  "People call u names? Miss Yaga encourages u to just own it and embrace each of your quirks.",
  "I get the inspiration from my queer, Berlin community of outcasts and weirdos—filled with love, rage, and the courage to keep on fighting for equality and understanding.",
  "My maximalist designs are for people who want to make a statement, but whose heart stays open.",
  "They know who they are and are not afraid to express it.",
  "And when the world is in a dark, loveless hole—like nowadays—I want to deliver some colour and love to everyone's heartspace.",
  "A sense of belonging, and a little dopamine boost for all.",
];

export default function AnimatedHeroText({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isVisible) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [isVisible]);

  const swiperProps = {
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    speed: 800,
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
    ...(isVisible
      ? {
          modules: [Autoplay],
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
        }
      : {
          modules: [],
          autoplay: false,
        }),
  };

  return (
    <div className="relative text-red-700">
      <Swiper {...swiperProps}>
        {sentences.map((text, i) => (
          <SwiperSlide key={i}>
            <p className="text-base sm:text-lg py-4">{text}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-10 cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
}
