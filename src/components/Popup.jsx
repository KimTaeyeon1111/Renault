import { useEffect, useState } from 'react';
import './Popup.css'

const img = (name) => `${import.meta.env.BASE_URL}img/${name}`;

function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hideUntil = localStorage.getItem("hidePopupUntil");

        // 오늘 하루 보지 않기
        if (hideUntil !== new Date().toDateString()) {
            setIsOpen(true);
        }
    } , []);

    const closePopup = () => {
        setIsOpen(false);
    };

    const hideToday = () => {
        localStorage.setItem('hidePopupUntil', new Date().toDateString());
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return(
        <div className='popup_overlay'>
            <div className='popup'>
                <div className='popup_top'>
                    <button className='popup_close' onClick={closePopup}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
                <div className='popup_content'>
                    <img src={img("popup_ex1.png")} alt="예시 이미지" />
                </div>

                <div className='popup_footer'>
                    <a href="https://blog.naver.com/rkmgjgl/224397516294">
                        <button className='popup_footer_more'>
                            더 알아보기
                        </button>
                    </a>    
                    <button className='popup_footer_hideToday' onClick={hideToday}>
                        오늘 하루 보지 않기
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Popup;