import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Popup.css";


const img = (name) =>
  `${import.meta.env.BASE_URL}img/${name}`;


function Popup() {

  /* =========================
     팝업 열림 여부
  ========================= */

  const [isOpen, setIsOpen] = useState(false);


  /* =========================
     현재 슬라이드
     
     ⭐ Hook은 return보다 위에!
  ========================= */

  const [activeSlide, setActiveSlide] = useState(0);



  /* =========================
     슬라이드 별 링크
  ========================= */

  const popupLinks = [
    "https://blog.naver.com/rkmgjgl/224399921133",
    "https://blog.naver.com/rkmgjgl/224397516294",
  ];



  /* =========================
     팝업 표시 여부 확인
  ========================= */

  useEffect(() => {

    const hideUntil =
      localStorage.getItem("hidePopupUntil");


    const today =
      new Date().toDateString();


    /* 오늘 숨기기를 누른 적이 없으면 팝업 열기 */
    if (hideUntil !== today) {
      setIsOpen(true);
    }

  }, []);



  /* =========================
     X 버튼
  ========================= */

  const closePopup = () => {
    setIsOpen(false);
  };



  /* =========================
     오늘 하루 보지 않기
  ========================= */

  const hideToday = () => {

    localStorage.setItem(
      "hidePopupUntil",
      new Date().toDateString()
    );

    setIsOpen(false);

  };



  /* =========================
     팝업 닫혀있으면 렌더링 X
     
     ⭐ 모든 Hook 선언 후에 위치
  ========================= */

  if (!isOpen) return null;



  return (

    <div className="popup_overlay">

      <div className="popup">


        {/* =========================
            팝업 상단
        ========================= */}

        <div className="popup_top">

          <button
            className="popup_close"
            onClick={closePopup}
          >

            <i className="bi bi-x-lg"></i>

          </button>

        </div>



        {/* =========================
            Swiper
        ========================= */}

        <div className="popup_content">

          <Swiper

            modules={[
              Pagination,
              Autoplay
            ]}

            slidesPerView={1}

            loop={true}

            speed={700}


            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}


            pagination={{
              clickable: true,
            }}


            /* ⭐ 현재 슬라이드 번호 저장 */
            onSlideChange={(swiper) => {

              setActiveSlide(
                swiper.realIndex
              );

            }}


            className="popupSwiper"
          >


            {/* =========================
                1번 슬라이드
            ========================= */}

            <SwiperSlide>

              <img
                src={img("popup_ex2.png")}
                alt="팝업 시승 방문 이벤트"
              />

            </SwiperSlide>



            {/* =========================
                2번 슬라이드
            ========================= */}

            <SwiperSlide>

              <img
                src={img("popup_ex1.png")}
                alt="팝업 그랑 콜레오스 27년식 & 에뚜알 리미티드 출시"
              />

            </SwiperSlide>


          </Swiper>

        </div>



        {/* =========================
            팝업 하단
        ========================= */}

        <div className="popup_footer">


          {/* 현재 슬라이드에 맞는 링크 */}

          <a
            href={popupLinks[activeSlide]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="popup_footer_more">
                더 알아보기
            </button>
          </a>


          <button
            className="popup_footer_hideToday"
            onClick={hideToday}
          >
            오늘 하루 보지 않기
          </button>


        </div>


      </div>

    </div>

  );

}


export default Popup;