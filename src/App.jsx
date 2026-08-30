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
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {/* 팝업창 */}
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      <Popup />

      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {/* 올라가기 버튼 */}
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {showTopButton && (
        <button
          className={`top-button ${showTopButton ? 'show' : ''}`}
          onClick={goToTop}
          aria-label="맨 위로 이동"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}


      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {/* 헤더 및 메인 배너 */}
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      <div className="mainPage_header_all" id='home'>
        <video
          className="mainPage_header_all_banner_img"
          src="https://github.com/KimTaeyeon1111/Renault/releases/download/v1.0.0/Renault_mainBanner.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="mainPage_banner_content">

          <div className="mainPage_banner_content_left_box">
            {/* nav */}
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">
                  <div className="mainPage_banner_content_header">
                    <img
                      className="mainPage_banner_content_header_img"
                      src={img("르노logo.png")}
                      alt="르노코리아 로고"
                    />
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#KOLEOS" className='navbar_koleos'>그랑 콜레오스</Nav.Link>
                    <Nav.Link href="#FILANTE" className='navbar_filante'>필랑트</Nav.Link>
                    <Nav.Link href="#ARKANA" className='navbar_arkana'>아르카나</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

          <div className="mainPage_banner_content_right_box">
            <div className="mainPage_banner_content_right_box_content">
              <p
                style={{ fontSize: '55px', marginBottom: '70px' }}
                className="mainPage_banner_content_right_box_content_p1"
              >
                2025 호남권 1등<br />
              </p>
              <p
                style={{ fontSize: '23px', marginBottom: '130px' }}
                className="mainPage_banner_content_right_box_content_p2"
              >
                르노코리아 광주갤러리대리점<br />
              </p>
              <p
                style={{ fontSize: '110px', marginBottom: '80px' }}
                className="mainPage_banner_content_right_box_content_p3">
                박진영
              </p>

              <p
                className="mainPage_banner_content_right_box_content_number mainPage_banner_content_right_box_content_p4"
                style={{ fontSize: '35px', marginBottom: '50px' }}
              >
                <i
                  className="fa-solid fa-mobile-screen phone-icon"
                  style={{ fontSize: '35px', marginRight: '15px' }}
                ></i>
                010 - 4869 - 0592
              </p>
              <div className="mainPage_banner_content_right_box_social mainPage_banner_content_right_box_content_p5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/renault_gwangju_jyp/?igsh=aHV5b2lneDRncXh6"
                >
                  <i
                    className="fa-brands fa-instagram"
                    style={{ fontSize: '45px', marginTop: '5px' }}
                  ></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.kakao.com/o/sAdxIyHh"
                >
                  <i
                    className="fa-brands fa-kakao-talk"
                    style={{ fontSize: '35px', color: 'rgb(94, 56, 0)' }}
                  ></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCnBso35246pjMuKkDdTLOIw">
                  <i 
                    className="fa-brands fa-youtube-shorts"
                    style={{ fontSize: '42px', color: 'red' }}
                  ></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://naver.me/5A3hOCBr"
                >
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ fontSize: '43px', color: 'rgb(39, 156, 39)' }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {/* 슬라이드 */}
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}

      <div className='slide_section_all'>
        <div className='slide_section'>


          {/* Slide_1 section */}
          <div className='slide_section_koleos'>
            <div className='slide_section_koleos_box'>
              <img src={img("Koleos_배너.png")} alt="콜레오스 배너" />
            </div>
          </div>
          <div className='slide_1_section' id='KOLEOS'>
            <div className='mainPage_slide_1_all'>
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
                  className="mySwiper slide_1">
                  <SwiperSlide><img src={img("그랑_콜레오스_1.png")} alt="콜레오스 외부 사진" className='slide_1_img_1' /></SwiperSlide>
                  <SwiperSlide><img src={img("그랑_콜레오스_2.png")} alt="콜레오스 내부 사진" className='slide_1_img_2' /></SwiperSlide>
                </Swiper>
              </div>

              <div className='mainPage_slide_1_right'>
                <div className='mainPage_slide_1_right_content'>
                  <h2>Grand KOLEOS 프로모션</h2>
                  <p className='mainPage_slide_1_right_content_strong slide_1_right_strong'> 한정수량 생산 월별 특별 혜택!</p>
                  <p className='mainPage_slide_1_right_content_p'>2026.01 ~ 02 생산차량 - <span>200만 원 기본 할인 및 옵션 + 용품 250만 원 할인!</span></p>
                  <p className='mainPage_slide_1_right_content_p'>2026.03 ~ 05 생산차량 - <span>150만 원 할인!</span></p>
                  <p className='mainPage_slide_1_right_content_strong slide_1_right_strong'>노후차 5년 보유고객 <span>50만 원 할인!</span></p>
                  <p className='mainPage_slide_1_right_content_p'><mark style={{ backgroundColor: "yellow", padding: "0px 1px", textDecoration: "underline" }}>*혜택 가족</mark>이 5년 이상 된 차량을 보유하고 계신다면 무조건 할인!</p>
                  <p className='mainPage_slide_1_right_content_strong slide_1_right_strong'>재구매 <span>50만 원 할인!</span></p>
                  <p className='mainPage_slide_1_right_content_p'><mark style={{ backgroundColor: "yellow", padding: "0px 1px", textDecoration: "underline" }} >*혜택 가족</mark>이 구매 이력이 있거나 르노차량을 보유하고 계신다면 무조건 할인!</p>
                  <p className='mainPage_slide_1_right_content_strong slide_1_right_strong'><span>8월 한정! 60일 반납보장 프로그램!</span></p>
                  <p className='mainPage_slide_1_right_content_p'>출고 후 최소 30일, 최대 60일 이내 신청 가능!</p>
                  <p className='mainPage_slide_1_right_content_p'>총 주행거리 3,000km 이하, 무사고 기준을 모두 충족했을 때</p>
                  <p className='mainPage_slide_1_right_content_p'>차량 가격의 100% 환불이 가능합니다.</p>
                  <hr style={{ marginTop: "35px" }} />
                  <h2 className='mainPage_slide_1_right_content_h2'>주요 할부 금융</h2>
                  <p className='mainPage_slide_1_right_content_p slide_1_right_content_p_2'><strong className='mainPage_slide_1_right_content_strong slide_1_right_strong'>표준형</strong> ~36개월 <span>3.7%</span>, 37~60개월 <span>4.9%</span>, 61~72개월 <span>5.9%</span></p>
                  <p className='mainPage_slide_1_right_content_p slide_1_right_content_p_2'><br /><span>3개월 zero 할부, 초기 3개월 월 납입금 0원!!</span></p>
                  <p className='mainPage_slide_1_right_content_p slide_1_right_content_p_2'><br />3개월 무이자 할부!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mainPage_slide_1_right_content_comment'>
            <p><mark style={{ backgroundColor: "yellow", padding: "0px 1px" }}>* 혜택 가족 : 본인 / 배우자 / 자녀 / 자녀의 배우자 / 부모 / 배우자의 부모</mark></p>
          </div>



          {/* Slide_2 section */}
          <div className='slide_section_filante_banner'>
            <div className='slide_section_filante'>
              <div className='slide_section_filante_box'>
                <img src={img("Filante_배너.png")} alt="필랑트 배너" />
              </div>
            </div>
            <div className='slide_section_filante_box_Rassure_box'>
              <p className='slide_section_filante_box_Rassure'>*R:assure 프리미엄 케어 솔루션은 3년 무상 케어 서비스, 중고차 가격 보장, 신차 교환 프로그램으로 구성되어 있습니다. <br /> 상세 서비스 구성 및 조건은 <a target='_blank' href="https://www.renault.co.kr/ko/model/R_assure.jsp">R:assure 페이지</a>를 참고하시기 바랍니다.</p>
            </div>
          </div>
          <div className='slide_2_section' id='FILANTE'>
            <div className='mainPage_slide_2_all'>
              <div className='mainPage_slide_2_left'>
                <div className='mainPage_slide_2_left_content'>
                  <h2>FILANTE 프로모션</h2>
                  <p className='mainPage_slide_2_left_content_strong slide_2_left_strong'>한정수량 생산 월별 특별 혜택!</p>
                  <p className='mainPage_slide_2_left_content_p'>~ 2026.04 생산차량 - 전동 선쉐이드 무상 장착 or 용품 <span>50만 원 할인!</span></p>
                  <p className='mainPage_slide_2_left_content_p'>에스프리 알핀 1955 전시차 <span>100만 원 할인!</span></p>
                  <p className='mainPage_slide_2_left_content_strong slide_2_left_strong'>재구매 <span>50만 원 할인!</span> or <span>재구매 초저금리 할부!</span></p>
                  <p className='mainPage_slide_2_left_content_p'><mark style={{ backgroundColor: "yellow", padding: "0px 1px", textDecoration: "underline" }}>*혜택 가족</mark>이 구매 이력이 있거나 르노 차량을 보유하고 계신다면 무조건 할인!</p>
                  <p className='mainPage_slide_2_left_content_strong slide_2_left_strong'>5년 걱정 제로 혜택 <span style={{ color: "black", fontSize: "16px" }}>(8월 한정)</span></p>
                  <p className='mainPage_slide_2_left_content_p'><span>"<mark style={{ backgroundColor: "yellow", padding: "0px 1px", textDecoration: "underline" }}>월 40만원</mark> 5년만 타고 반납 or 인수하자!!"</span></p>
                  <p className='mainPage_slide_2_left_content_p'>보증 + 정비 + 중고차 잔가 53% 보장!</p>
                  <hr style={{ marginTop: "35px" }} />
                  <h2 className='mainPage_slide_2_left_content_h2'>주요 할부 금융</h2>
                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2' style={{ marginBottom: "20px" }}><strong className='mainPage_slide_2_left_content_strong slide_2_left_strong'>재구매 초저금리 할부</strong> ~36개월 <span>1.7%</span>, 37~60개월 <span>2.7%</span></p>
                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2'><strong className='mainPage_slide_2_left_content_strong slide_2_left_strong'>표준형</strong> ~36개월 <span>3.7%</span>, 37~60개월 <span>4.9%</span>, 61~72개월 <span>5.9%</span></p>
                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2'><br /><span>3개월 zero 할부, 초기 3개월 월 납입금 0원!!</span></p>
                  <p className='mainPage_slide_2_left_content_p slide_2_left_content_p_2'><br />3개월 무이자 할부!</p>
                </div>
              </div>

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

                  className="mySwiper2 slide_2">
                  <SwiperSlide><img src={img("필랑트_1.png")} alt="필랑트 외부 사진" className='slide_2_img_1' /></SwiperSlide>
                  <SwiperSlide><img src={img("필랑트_2.png")} alt="필랑트 내부 사진" className='slide_2_img_2' /></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className='mainPage_slide_2_left_content_comment'>
            <p><mark style={{ backgroundColor: "yellow", padding: "0px 1px" }}>* 혜택 가족 : 본인 / 배우자 / 자녀 / 자녀의 배우자 / 부모 / 배우자의 부모</mark></p>
          </div>
          <div className='mainPage_slide_2_left_content_comment_2'>
            <p><mark style={{ backgroundColor: "yellow", padding: "0px 1px" }}>* 에스프리 알핀, 선수금 1,000만 원 기준 월 40만원!</mark></p>
          </div>



          {/* Slide_3 section */}
          <div className='slide_section_arkana'>
            <div className='slide_section_arkana_box'>
              <img src={img("Arkana_배너.png")} alt="아르카나 배너" />
            </div>
          </div>
          <div className='slide_3_section' id='ARKANA'>
            <div className='mainPage_slide_3_all'>
              <div className='mainPage_slide_3_left'>
                <img src={img("아르카나_1.png")} alt="콜레오스 외부 사진" className='slide_3_img_1' />
              </div>

              <div className='mainPage_slide_3_right'>
                <div className='mainPage_slide_3_right_content'>
                  <h2>ARKANA 프로모션</h2>
                  <p className='mainPage_slide_3_right_content_strong slide_3_right_strong'> <span>아르카나 구매 고객 200만 원 할인!</span></p>
                  <p className='mainPage_slide_3_right_content_p'>조건 없이 무조건 할인!</p>
                  <p className='mainPage_slide_3_right_content_strong slide_3_right_strong'>재구매 <span>50만 원 할인!</span></p>
                  <p className='mainPage_slide_3_right_content_p'><mark style={{ backgroundColor: "yellow", padding: "0px 1px", textDecoration: "underline" }}>*혜택 가족</mark>이 구매 이력이 있거나 르노 차량을 보유하고 계신다면 무조건 할인!</p>
                  <p className='mainPage_slide_3_right_content_strong slide_3_right_strong'>할부 고객 추가 할인!</p>
                  <p className='mainPage_slide_3_right_content_p'>하이브리드 - <span>50만 원 할인!</span></p>
                  <p className='mainPage_slide_3_right_content_p'>가솔린 - <span>100만 원 할인!</span></p>
                  <hr style={{ marginTop: "35px" }} />
                  <h2 className='mainPage_slide_3_right_content_h2'>주요 할부 금융</h2>
                  <p className='mainPage_slide_3_right_content_p slide_3_right_content_p_2'><strong className='mainPage_slide_3_right_content_strong slide_3_right_strong'>표준형 무이자! </strong><span>~36개월 무이자 할부!</span></p>
                  <p className='mainPage_slide_3_right_content_p slide_3_right_content_p_2'><br /><span>3개월 zero 할부, 초기 3개월 월 납입금 0원!!</span></p>
                  <p className='mainPage_slide_3_right_content_p slide_3_right_content_p_2'><br />3개월 무이자 할부!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mainPage_slide_3_right_content_comment'>
            <p><mark style={{ backgroundColor: "yellow", padding: "0px 1px" }}>* 혜택가족 : 본인 / 배우자 / 자녀 / 자녀의 배우자 / 부모 / 배우자의 부모</mark></p>
          </div>
          <hr />
        </div>
      </div>



      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {/* Footer */}
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}

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
                <p>명함</p>
              </a>
            </div>
            <div className='mainPage_Footer_blackBox_icon blackBox_icon2'>
              <a target='_blank' href="https://open.kakao.com/o/sAdxIyHh">
                <i className="bi bi-chat"></i>
                <p>카카오톡 1:1 문의</p>
              </a>
            </div>
            <div className='mainPage_Footer_blackBox_icon blackBox_icon3'>
              <a target='_blank' href="https://www.youtube.com/channel/UCnBso35246pjMuKkDdTLOIw">
                <i className="bi bi-car-front-fill"></i>
                <p>출고 후기</p>
              </a>
            </div>
            <div className='mainPage_Footer_blackBox_icon blackBox_icon4'>
              <a target='_blank' href="https://naver.me/5A3hOCBr">
                <i className="bi bi-geo-alt"></i>
                <p>전시장</p>
              </a>
            </div>
            <div className='mainPage_Footer_blackBox_icon blackBox_icon5'>
              <a target='_blank' href="https://www.renault.co.kr/ko/login/inquiry_list.jsp">
                <i className="bi bi-wechat"></i>
                <p>공식 문의</p>
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className='mainPage_footer_bottom'>
          <div className='mainPage_footer_bottom_box'>
            <div className='mainPage_footer_bottom_box_left_content'>
              <div className='mainPage_footer_bottom_box_left_content_box'>
                <p style={{ fontWeight: "500", fontSize: "16px", color: "#000" }}>RKM <span style={{ fontSize: "13px" }}>(Renault Korea Motors)</span> 박진영</p>
                <p>르노코리아 차량 구매 상담 및 프로모션 안내 <br /> 차량 구매 상담 · 견적 문의 · 시승 상담 <span style={{ textDecoration: "underline", fontSize: "12px", paddingLeft: "5px" }}>010-4869-0592</span></p>
              </div>
            </div>
            <div className='mainPage_footer_bottom_box_right_content'>
              <div className='mainPage_footer_bottom_box_right_content_box'>
                <p style={{ fontWeight: "500", color: "#000" }}>Copyright 
                  <i className="bi bi-c-circle"></i>
                  2025 RKM 박진영. All Right Reserved.
                </p>
                <p>본 페이지는 차량 구매 상담 및 프로모션 안내를 위한 개인 홍보 페이지입니다. 웹페이지에 포함된 일부 콘텐츠는 AI 기술을 통해 수정 또는 생성될 수 있습니다. <br />
                차량 가격 및 프로모션 내용은 시점 및 조건에 따라 변경될 수 있습니다. 자세한 내용은 상담을 통해 확인해 주세요.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}



export default App;