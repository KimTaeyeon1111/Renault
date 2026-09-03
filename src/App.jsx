import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Popup from './components/Popup';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'swiper/css';
import './최종.css';
import './반응형.css'


const img = (name) => `${import.meta.env.BASE_URL}img/${name}`;

function App() {
  const navigate = useNavigate();

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mainPage'>

      {/* =========================================================
          팝업창
      ========================================================= */}
      <Popup />


      {/* =========================================================
          올라가기 버튼
      ========================================================= */}
      {showTopButton && (
        <button
          className={`top-button ${showTopButton ? 'show' : ''}`}
          onClick={goToTop}
          aria-label="맨 위로 이동"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}


      {/* =========================================================
          Header + Main Banner
      ========================================================= */}
      <div className="mainPage_header_all" id='home'>

        <div className='mainPage_header_all_banner_img_cover_all'>
          <video
            className="mainPage_header_all_banner_img"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >

            <source
              src="https://github.com/KimTaeyeon1111/Renault/releases/download/v1.0.0/Renault_mainBanner.mp4"
              type="video/mp4"
              className="mainPage_header_all_banner_img"
            />
          
          
          </video>

          <video
            className="mainPage_header_all_banner_img_2"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            
            <source
              src="https://github.com/KimTaeyeon1111/Renault/releases/download/v1.0.0/Renault_mainBanner_responsive.mp4"
              type="video/mp4"
            />
          
          
          </video>
        </div>
        <div className='mainPage_header_all_banner_img_cover'></div>
          
        
        
        <div className="mainPage_banner_content">

          {/* =========================
              왼쪽 NAV
          ========================= */}
          <div className="mainPage_banner_content_left_box">
            <Navbar expand="lg" className='main_navbar_nav'>
              <Container className='mainPage_banner_content_left_container'>

                <Navbar.Brand href="#home" className='mainPage_banner_content_left_navbar_brand'>
                  <div className="mainPage_banner_content_header">
                    <img
                      className="mainPage_banner_content_header_img"
                      src={img("르노logo.png")}
                      alt="르노코리아 로고"
                    />
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='main_page_nav_toggle' />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="main_navbar_menu">
                    <Nav.Link href="#KOLEOS" className="navbar_koleos">
                      그랑 콜레오스
                    </Nav.Link>

                    <Nav.Link href="#FILANTE" className="navbar_filante">
                      필랑트
                    </Nav.Link>

                    <Nav.Link href="#ARKANA" className="navbar_arkana">
                      아르카나
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>

              </Container>
            </Navbar>
          </div>


          {/* =========================
              오른쪽 메인 텍스트 
          ========================= */}
          <div className="mainPage_banner_content_right_box">

            <div className="mainPage_banner_content_right_box_content">

              <p className="mainPage_banner_content_right_box_content_p1">2025 호남권 1등<br /></p>
              <p className="mainPage_banner_content_right_box_content_p2">르노코리아 광주갤러리대리점<br /></p>
              <p className="mainPage_banner_content_right_box_content_p3">박진영</p>
              <p className="mainPage_banner_content_right_box_content_number mainPage_banner_content_right_box_content_p4">
              <i className="fa-solid fa-mobile-screen phone-icon"></i>010 - 4869 - 0592</p>


              <div className="mainPage_banner_content_right_box_social mainPage_banner_content_right_box_content_p5">

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/renault_gwangju_jyp/?igsh=aHV5b2lneDRncXh6"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.kakao.com/o/sAdxIyHh"
                >
                  <i className="fa-brands fa-kakao-talk"></i>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCnBso35246pjMuKkDdTLOIw"
                >
                  <i className="fa-brands fa-youtube-shorts"></i>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://naver.me/5A3hOCBr"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      
      {/* =========================================================
          Slide Section
      ========================================================= */}

      <div className='slide_section_all'>

        <div className='slide_section'>


          {/* =====================================================
              KOLEOS BANNER
          ===================================================== */}

          <div className='slide_section_koleos'>

            <div className='slide_section_koleos_box'>

              <img
                src={img("Koleos_배너.png")}
                alt="콜레오스 배너"
              />

            </div>

          </div>


          {/* =====================================================
              SLIDE 1 - KOLEOS
          ===================================================== */}

          <div className='slide_1_section' id='KOLEOS'>

            <div className='mainPage_slide_1_all'>

              {/* 왼쪽 이미지 */}
              <div className='mainPage_slide_1_left'>

                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    allowTouchMove: false,
                  }}
                  className="mySwiper slide_1"
                >

                  <SwiperSlide className='mainPage_SwiperSlide_1_1'>
                    <img
                      src={img("그랑_콜레오스_1.png")}
                      alt="콜레오스 외부 사진"
                      className='slide_1_img_1'
                    />
                  </SwiperSlide>

                  <SwiperSlide className='mainPage_SwiperSlide_1_2'>
                    <img
                      src={img("그랑_콜레오스_2.png")}
                      alt="콜레오스 내부 사진"
                      className='slide_1_img_2'
                    />
                  </SwiperSlide>

                </Swiper>

              </div>

              {/* 오른쪽 프로모션 */}
              <div className='mainPage_slide_1_right'>
                  
                <div className='mainPage_slide_1_right_content'>

                  <h2 style={{ marginBottom: "-13px" }}>
                    Grand KOLEOS 프로모션
                  </h2>

                  <p  style={{ marginBottom: "10px" }} className='mainPage_slide_1_right_content_strong slide_1_right_strong'>
                    한정수량 생산 월별 특별 혜택!
                  </p>

                  <p className='mainPage_slide_1_right_content_p koleos_paddingBottom'>
                    ~ 26.03 생산차량 - <span>300만 원 기본 할인 or 7년/14만km 무상 보증 연장</span></p>
                  <p style={{ marginTop: "-10px" }}><span>+ 엔진오일세트 7회</span> 무상 교체 + <span>150만 원 할인</span></p>
                  

                  <p className='mainPage_slide_1_right_content_p'>
                    26.04 ~ 06 생산차량 - <span>200만 원 기본 할인 or 7년/14만km 무상 보증 연장</span></p>
                  <p style={{ marginTop: "-10px" }}><span>+ 엔진오일세트 7회</span> 무상 교체 + <span>50만 원 할인</span></p>
                  

                  <p className='mainPage_slide_1_right_content_p'>
                    26.07 ~ 08 생산차량 - <span>150만 원 기본 할인 or 7년/14만km 무상 보증 연장</span></p>
                  <p style={{ marginTop: "-10px", marginBottom: "-10px" }}><span>+ 엔진오일세트 7회</span> 무상 교체</p>
                  

                  <p className='mainPage_slide_1_right_content_strong slide_1_right_strong'>재구매 <span>50만 원 or 100만 원 할인!</span>
                  </p>

                  <p className='mainPage_slide_1_right_content_p'>

                    <mark>
                      *혜택 가족
                    </mark>

                    과 본인의 구매 이력, 르노 중고차를 보유한 합산 만큼 할인

                  </p>

                  <p className='mainPage_slide_1_right_content_p'>
                    신차 구매 이력 + 중고차 보유 합산 4회 이하 시 - <span>50만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_1_right_content_p'>
                    합산 5회 이상 시 - <span>100만 원 할인</span>
                  </p>
                  
                  <p className='mainPage_slide_1_right_content_strong slide_1_right_strong'>
                    노후차 5년 보유고객 <span>50만 원 할인!</span>
                  </p>

                  <p className='mainPage_slide_1_right_content_p mainPage_slide_1_right_content_p_responsive'>

                    <mark>
                      *혜택 가족
                    </mark>

                    이 5년 이상 된 차량을 보유하고 계신다면 무조건 할인!

                  </p>



                  <hr />

                  <h2 className='mainPage_slide_1_right_content_h2'>
                    주요 할부 금융
                  </h2>

                  <p className='mainPage_slide_1_right_content_p slide_1_right_content_p_2'>

                    <strong className='mainPage_slide_1_right_content_strong slide_1_right_strong'>표준형 </strong> ~36개월 <span> 3.7%</span>, 37~60개월 <span>4.9%</span>, 61~72개월 <span>5.9%</span>

                  </p>

                  <p className='mainPage_slide_1_right_content_p slide_1_right_content_p_2'>
                    <br />
                    <strong className='mainPage_slide_1_right_content_strong slide_1_right_strong'>표준형 카드 할부 </strong>
                    <span>최저 3.5%</span>
                  </p>

                  <p className='mainPage_slide_1_right_content_p slide_1_right_content_p_2'>
                    <br />
                    3개월 무이자 할부!
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className='mainPage_slide_1_right_content_comment'>

            <p>
              <mark>
                * 혜택 가족 : 본인 / 배우자 / 자녀 / 자녀의 배우자 / 부모 / 배우자의 부모
              </mark>
            </p>

          </div>


          {/* =====================================================
              FILANTE BANNER
          ===================================================== */}
          <div className='slide_section_filante_banner'>
            <div className='slide_section_filante'>
              <div className='slide_section_filante_box'>
                <img
                  src={img("Filante_배너.png")}
                  alt="필랑트 배너"
                />
              </div>
            </div>
          </div>


          {/* =====================================================
              SLIDE 2 - FILANTE
          ===================================================== */}

          <div className='slide_2_section' id='FILANTE'>

            <div className='mainPage_slide_2_all'>

              {/* 왼쪽 내용 */}
              <div className='mainPage_slide_2_left'>

                <div className='mainPage_slide_2_left_content'>

                  <h2 style={{ marginBottom: "-20px" }}>
                    FILANTE 프로모션
                  </h2>

                  <p className='mainPage_slide_2_left_content_strong slide_2_left_strong'>
                    한정수량 생산 월별 특별 혜택!
                  </p>

                  <p className='mainPage_slide_2_left_content_p'>
                    ~ 2026.03 생산차량 - <span>기본 150만 원 할인 + 전동 선쉐이드 무상 장착 or 용품비 50만원 할인</span>
                  </p>

                  <p className='mainPage_slide_2_left_content_p'>
                    26.04 생산차량 - <span>기본 100만 원 할인 + 전동 선쉐이드 무상 장착 or 용품비 50만 원 할인</span> 
                  </p>

                  <p className='mainPage_slide_2_left_content_p'>
                    26.05 생산차량 - <span>기본 70만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_2_left_content_strong slide_2_left_strong'>
                    재구매 <span> 50만 원 + 100만 원 할인! </span>
                  </p>

                  <p className='mainPage_slide_2_left_content_p'>
                    <mark>*혜택 가족</mark>과 본인의 구매 이력, 르노 중고차를 보유한 합산 만큼 할인
                  </p>

                  <p className='mainPage_slide_2_left_content_p'>
                    신차 구매 이력 + 중고차 보유 합산 4회 이하 시 - <span>50만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_2_left_content_p'>
                    합산 5회 이상 시 - <span>100만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_2_left_content_strong slide_2_left_strong'>
                    노후차 5년 보유고객 <span>50만 원 할인!</span>
                  </p>

                  <p className='mainPage_slide_2_left_content_p mainPage_slide_2_left_content_p_responsive'>

                    <mark>
                      *혜택 가족
                    </mark>

                    이 5년 이상 된 차량을 보유하고 계신다면 무조건 할인!

                  </p>

                  <hr style={{ width: "510px" }} />

                  <h2 className='mainPage_slide_2_left_content_h2'>
                    주요 할부 금융
                  </h2>

                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2'>

                    <strong className='mainPage_slide_2_left_content_strong slide_2_left_strong slide_2_left_strong_1'>표준형 </strong>
                    ~36개월
                    <span> 3.7%</span>,
                    37~60개월
                    <span> 4.9%</span>,
                    61~72개월
                    <span> 5.9%</span>

                  </p>

                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2'>
                    <br />
                    <strong className='mainPage_slide_2_left_content_strong slide_2_left_strong slide_2_left_strong_1'>표준형 카드 할부 </strong>
                    <span>최저 3.5%</span>
                  </p>


                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2'>
                    <br />
                    3개월 무이자 할부!
                  </p>

                </div>

              </div>


              {/* 오른쪽 이미지 */}
              <div className='mainPage_slide_2_right'>

                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    allowTouchMove: false,
                  }}
                  className="mySwiper2 slide_2"
                >

                  <SwiperSlide>
                    <img
                      src={img("필랑트_1.png")}
                      alt="필랑트 외부 사진"
                      className='slide_2_img_1'
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={img("필랑트_2.png")}
                      alt="필랑트 내부 사진"
                      className='slide_2_img_2'
                    />
                  </SwiperSlide>

                </Swiper>

              </div>

            </div>

          </div>


          <div className='mainPage_slide_2_left_content_comment'>

            <p>
              <mark>
                * 혜택 가족 : 본인 / 배우자 / 자녀 / 자녀의 배우자 / 부모 / 배우자의 부모
              </mark>
            </p>

          </div>


          <div className='mainPage_slide_2_left_content_comment_2'>

            <p>
              <mark>
                * 에스프리 알핀, 선수금 1,000만 원 기준 월 40만원!
              </mark>
            </p>

          </div>


          {/* =====================================================
              ARKANA BANNER
          ===================================================== */}

          <div className='slide_section_arkana'>
            <div className='slide_section_arkana_box'>
              <img
                src={img("Arkana_배너.png")}
                alt="아르카나 배너"
              />
            </div>
          </div>


          {/* =====================================================
              SLIDE 3 - ARKANA
          ===================================================== */}

          <div className='slide_3_section' id='ARKANA'>

            <div className='mainPage_slide_3_all'>

              {/* 왼쪽 이미지 */}
              <div className='mainPage_slide_3_left'>

                <img
                  src={img("아르카나_1.png")}
                  alt="아르카나 외부 사진"
                  className='slide_3_img_1'
                />
                <img 
                  src={img("아르카나_1_responsive.png")} 
                  alt="아르카나 반응형 배너"
                  className='slide_3_img_2'
                />

              </div>


              {/* 오른쪽 내용 */}
              <div className='mainPage_slide_3_right'>

                <div className='mainPage_slide_3_right_content'>

                  <h2 style={{ marginBottom: "-20px" }}>
                    ARKANA 프로모션
                  </h2>

                  <p className='mainPage_slide_3_right_content_strong slide_3_right_strong'>
                    아르카나 구매 고객 <span>유류비 지원!</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_p'>
                    가솔린 - <span>200만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_p'>
                    하이브리드 - <span>300만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_strong slide_3_right_strong'>
                    재구매<span> 50만 원 or 100만 원 할인!</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_p'>
                    <mark>*혜택 가족</mark>과 본인의 구매 이력, 르노 중고차를 보유한 합산 만큼 할인
                  </p>

                  <p className='mainPage_slide_3_right_content_p'>
                    신차 구매 이력 + 중고차 보유 합산 4회 이하 시 - <span>50만원 할인</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_p'>
                    합산 5회 이상 시 - <span>100만 원 할인</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_strong slide_3_right_strong'>
                    할부 고객 추가 할인!
                  </p>

                  <p className='mainPage_slide_3_right_content_p'>
                    가솔린 -<span> 100만 원 할인!</span>
                  </p>

                  <p className='mainPage_slide_3_right_content_p mainPage_slide_3_right_content_p_responsive'>
                    하이브리드 -<span> 50만 원 할인!</span>
                  </p>

                  <hr />

                  <h2 className='mainPage_slide_3_right_content_h2'>
                    주요 할부 금융
                  </h2>

                  <p className='mainPage_slide_3_right_content_p slide_3_right_content_p_2' style={{ marginBottom: "2px"}}>

                    <strong className='mainPage_slide_3_right_content_strong slide_3_right_strong'>표준형 무이자! </strong>

                    <span>
                      ~36개월 무이자 할부!
                    </span>

                  </p>
                  <p style={{ fontSize: "14px", marginBottom:"2px" }}><i class="bi bi-arrow-return-right"></i> 가솔린만 적용 가능</p>

                  <p className='mainPage_slide_3_right_content_p slide_3_right_content_p_2'>
                    <br />
                    <span>
                      3개월 zero 할부, 초기 3개월 월 납입금 0원!!
                    </span>
                  </p>

                  <p className='mainPage_slide_3_right_content_p slide_3_right_content_p_2'>
                    <br />
                    3개월 무이자 할부!
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className='mainPage_slide_3_right_content_comment'>

            <p>
              <mark>
                * 혜택가족 : 본인 / 배우자 / 자녀 / 자녀의 배우자 / 부모 / 배우자의 부모
              </mark>
            </p>

          </div>

          <hr style={{ marginTop: "238px" , border: "solid 1px #444" }} />

        </div>

      </div>


      {/* =========================================================
          Footer
      ========================================================= */}

      <div className='mainPage_Footer'>

        <div className='mainPage_Footer_video'>

          <video
            src="https://github.com/KimTaeyeon1111/Renault/releases/download/v1.0.0/Footer_section.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />

          <div className='mainPage_Footer_blackBox'>

            <div className='mainPage_Footer_blackBox_icon blackBox_icon1'>

              <a onClick={() => navigate('/user')}>

                <i className="bi bi-person-vcard"></i>

                <p>
                  명함
                </p>

              </a>

            </div>


            <div className='mainPage_Footer_blackBox_icon blackBox_icon2'>

              <a
                target='_blank'
                href="https://open.kakao.com/o/sAdxIyHh"
              >

                <i className="bi bi-chat"></i>

                <p>
                  카카오톡 1:1 문의
                </p>

              </a>

            </div>


            <div className='mainPage_Footer_blackBox_icon blackBox_icon3'>

              <a
                target='_blank'
                href="https://www.youtube.com/channel/UCnBso35246pjMuKkDdTLOIw"
              >

                <i className="bi bi-car-front-fill"></i>

                <p>
                  영상 출고 후기
                </p>

              </a>

            </div>


            <div className='mainPage_Footer_blackBox_icon blackBox_icon5'>

              <a
                target='_blank'
                href="https://blog.naver.com/rkmgjgl"
              >

                <i className="bi bi-window blackBox_icon5_1"></i>

                <div className='blackBox_icon5_2_box'>
                  <i className="bi bi-car-front-fill blackBox_icon5_2"></i>
                </div>

                <p>
                  네이버 출고 후기
                </p>

              </a>

            </div>


            <div className='mainPage_Footer_blackBox_icon blackBox_icon4'>

              <a
                target='_blank'
                href="https://naver.me/5A3hOCBr"
              >

                <i className="bi bi-geo-alt"></i>

                <p>
                  전시장
                </p>

              </a>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          Footer Bottom
      ========================================================= */}

      <div className='mainPage_footer_bottom'>

        <div className='mainPage_footer_bottom_box'>

          <div className='mainPage_footer_bottom_box_left_content'>

            <div className='mainPage_footer_bottom_box_left_content_box'>

              <p className="footer_title footer_title_1">
                RKM<span>(Renault Korea Motors) </span>
                박진영
              </p>

              <p>
                르노코리아 차량 구매 상담 및 프로모션 안내
                <br />
                차량 구매 상담 · 견적 문의 · 시승 상담
                <span className="footer_phone">
                  010-4869-0592
                </span>
              </p>

            </div>

          </div>


          <div className='mainPage_footer_bottom_box_right_content'>

            <div className='mainPage_footer_bottom_box_right_content_box'>

              <p className="footer_title footer_title_2">
                Copyright
                <i className="bi bi-c-circle"></i>
                2025 RKM 박진영. All Right Reserved.
              </p>

              <p>
                본 페이지는 차량 구매 상담 및 프로모션 안내를 위한 개인 홍보 페이지입니다. <br className='mainPage_footer_right_p_br' />
                웹페이지에 포함된 일부 콘텐츠는 AI 기술을 통해 수정 또는 생성될 수 있습니다.
                <br />
                차량 가격 및 프로모션 내용은 시점 및 조건에 따라 변경될 수 있습니다. <br className='mainPage_footer_right_p_br' />
                자세한 내용은 상담을 통해 확인해 주세요.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;