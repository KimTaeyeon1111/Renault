import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

import '../최종.css'
import './User.css';

const img = (name) => `${import.meta.env.BASE_URL}img/${name}`;

function User() {
    const navigate = useNavigate();

    return(
        <div className='subPage'>

            {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
            {/* Main */}
            {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
            <div className='user_main_all'>
                <div className='user_main_box'>
                    <div className='user_main_box_img'>
                        <a onClick={() => navigate('/')}>
                            <img src={img("르노logo_글포함.gif")} alt="르노코리아 로고"/>
                        </a>
                    </div>
                    <div className='user_main_box_content'>
                        
                    </div>
                </div>
            </div>


            {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
            {/* Footer */}
            {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
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
};


export default User;