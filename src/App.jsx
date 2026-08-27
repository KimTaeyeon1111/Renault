import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import './수정.css';

function App() {
  return (
    <div>
      <div className="mainPage_header_all">
        <img
          className="mainPage_header_all_banner_img"
          src="/img/Adobe Express - 르노르고_표지.gif"
          alt="메인 배너 르노 GIF"
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
                      src="/img/르노logo.png"
                      alt="르노코리아 로고"
                    />
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#KOLEOS" className='navbar_koleos'>그랑 콜레오스</Nav.Link>
                    <Nav.Link href="#" className='navbar_filante'>필랑트</Nav.Link>
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
                  href="https://www.youtube.com/channel/UCnBso35246pjMuKkDdTLOIw"
                >
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

      <div className='slide_1_section' id='KOLEOS'>
        {/* Slide_1 section */}
        <div className='mainPage_slide_1_all'>

          <div className='mainPage_slide_1_left'>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }} className="mySwiper slide_1">
              <SwiperSlide><img src="/img/그랑_콜레오스_1.png" alt="콜레오스 외부 사진" className='slide_1_img_1' /></SwiperSlide>
              <SwiperSlide><img src="/img/그랑_콜레오스_2.png" alt="콜레오스 내부 사진" className='slide_1_img_2' /></SwiperSlide>
            </Swiper>
          </div>
          
          <div className='mainPage_slide_1_right'>
            <div className='mainPage_slide_1_right_content'>
              <h2>Grand KOLEOS 프로모션</h2>
              <p>1. 한정수량 생산 월별 특별 혜택!</p>
              <p>2026.1 ~ 2 생산차량 - <span>200만 원 기본 할인 및 옵션 + 용품 250만 원 할인!</span></p>
              <p>2026.3 ~ 5 생산차량 - <span>150만 원 할인!</span></p>
              <p>2. 노후차 5년 보유고객 <span>50만 원 할인!</span></p>
              <p>혜택 가족이 5년 이상 된 차량을 보유하고 계신다면 무조건 할인!</p>
              <p>3. 재구매 <span>50만 원 할인!</span></p>
              <p>혜택 가족이 구매 이력이 있거나 르노차량을 보유하고 계신다면 무조건 할인!</p>
              <p><span>4. 8월 한정! 60일 반납보장 프로그램!</span></p>
              <p>출고 후 최소 30일, 최대 60일 이내 신청 가능!</p>
              <p>총 주행거리 3,000km 이하, 그리고 무사고 기준을 모두 충족했을 때</p>
              <p>차량 가격의 100% 환불이 가능합니다.</p>
              <hr />
              <h2>주요 할부 금융</h2>
              <p>1. 표준형 ~36개월 <span>3.7%</span>, 37~60개월 <span>4.9%</span>, 61~72개월 <span>5.9%</span></p>
              <p><span>2. 3개월 zero 할부, 초기 3개월 월 납입금 0원!!</span></p>
              <p>3. 3개월 무이자 할부!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;