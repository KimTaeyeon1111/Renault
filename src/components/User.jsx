import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./User.css";

const img = (name) => `${import.meta.env.BASE_URL}img/${name}`;

function User() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div className="rkmUserCardPage">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="rkmUserCardHeader">
        <button
          type="button"
          className="rkmUserCardBrand"
          onClick={goHome}
          aria-label="메인페이지로 이동"
        >
          <img
            src={img("르노logo_글포함.png")}
            alt="Renault Korea Motors"
          />
        </button>

        <button
          type="button"
          className="rkmUserCardHomeButton"
          onClick={goHome}
        >
          <i className="bi bi-house-fill" />
          <span>돌아가기</span>
        </button>
      </header>


      {/* =========================================================
          HERO
      ========================================================= */}
      <main className="rkmUserCardMain">

        <section className="rkmUserCardHero">
          <div className="rkmUserCardHero__copy">
            <p className="rkmUserCardHero__eyebrow">
              RENAULT KOREA · GWANGJU GALLERY
            </p>

            <h1 className="rkmUserCardHero__title">
              고객 신뢰를 바탕으로
              <br />
              <span>일하는 영업 사원</span>
            </h1>

            <p className="rkmUserCardHero__description">
              르노코리아 광주갤러리대리점 박진영입니다.
              <br />
              차량 구매 상담부터 견적, 시승까지 편하게 문의해주세요.
            </p>

            <div className="rkmUserCardHero__contact">
              <div className="rkmUserCardHero__consultant">
                <small>2025 호남권 판매 1위</small>
                <strong>박진영</strong>
              </div>

              <a
                className="rkmUserCardHero__phone"
                href="tel:01048690592"
              >
                <i className="bi bi-telephone-fill" />
                010-4869-0592
              </a>
            </div>
          </div>


          <div className="rkmUserCardHero__visual">
            <div className="rkmUserCardHero__quote">
              <p>당신의 새로운 여정에</p>
              <strong>르노가 함께합니다.</strong>
              <span />
              <p>DRIVE A NEW TOMORROW</p>
            </div>

            <div className="rkmUserCardHero__imageFrame">
              <img
                src={img("명함_right.png")}
                alt="르노코리아 박진영 명함 뒷면"
              />
            </div>
          </div>

          <div
            className="rkmUserCardHero__diagonal"
            aria-hidden="true"
          />
        </section>


        {/* =========================================================
            BUSINESS CARD
        ========================================================= */}
        <section className="rkmUserCardShowcase">

          <div className="rkmUserCardSectionTitle">
            <p>BUSINESS CARD</p>

            <h2>
              박진영 · Renault Korea Motors
            </h2>
          </div>


          <div className="rkmUserCardShowcase__grid">

            <article className="rkmUserCardImageBox">
              <div className="rkmUserCardImageBox__label">
                FRONT
              </div>

              <div className="rkmUserCardImageBox__ratio">
                <img
                  src={img("명함_left.png")}
                  alt="박진영 명함 앞면"
                />
              </div>
            </article>


            <article className="rkmUserCardImageBox">
              <div className="rkmUserCardImageBox__label">
                BACK
              </div>

              <div className="rkmUserCardImageBox__ratio">
                <img
                  src={img("명함_right.png")}
                  alt="박진영 명함 뒷면"
                />
              </div>
            </article>

          </div>
        </section>


        {/* =========================================================
            QUICK CONTACT
        ========================================================= */}
        <section className="rkmUserCardContact">

          <a
            className="rkmUserCardContact__item"
            href="tel:01048690592"
          >
            <i className="bi bi-telephone-fill" />

            <div>
              <small>전화 상담</small>
              <strong>010-4869-0592</strong>
            </div>
          </a>


          <a
            className="rkmUserCardContact__item"
            href="https://open.kakao.com/o/sAdxIyHh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-chat-fill" />

            <div>
              <small>빠른 문의</small>
              <strong>카카오톡 1:1 상담</strong>
            </div>
          </a>


          <a
            target="_blank"
            className="rkmUserCardContact__item"
            href="https://blog.naver.com/rkmgjgl"
          >
            <i className="bi bi-window blackBox_icon5_1"></i>

            <div>
              <small>블로그</small>
              <strong>르노 광주 JYP</strong>
            </div>
          </a>


          <a
            className="rkmUserCardContact__item"
            href="https://naver.me/5A3hOCBr"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-geo-alt-fill" />

            <div>
              <small>전시장</small>
              <strong>광주갤러리대리점</strong>
            </div>
          </a>

        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="rkmUserCardFooter">

        <div className="rkmUserCardFooter__left">
          <p className="rkmUserCardFooter__title">
            RKM
            <span>(Renault Korea Motors)</span>
            박진영
          </p>

          <p>
            르노코리아 차량 구매 상담 및 프로모션 안내
          </p>

          <p>
            차량 구매 상담 · 견적 문의 · 시승 상담
            <a href="tel:01048690592">
              010-4869-0592
            </a>
          </p>
        </div>


        <div className="rkmUserCardFooter__right">
          <p className="rkmUserCardFooter__title">
            Copyright
            <i className="bi bi-c-circle" />
            2025 RKM 박진영. All Right Reserved.
          </p>

          <p>
            본 페이지는 차량 구매 상담 및 프로모션 안내를 위한
            개인 홍보 페이지입니다.
            <br />
            차량 가격 및 프로모션 내용은 시점 및 조건에 따라
            변경될 수 있습니다.
          </p>
        </div>

      </footer>

    </div>
  );
}

export default User;
