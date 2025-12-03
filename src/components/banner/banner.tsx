'use client';
import React from 'react';
import './banner.scss'
export default function BannerComponent() {
  return (
    <div className='banner bg-background'>
      <div className="container-banner">
        <div className="box box--4">
          <svg className="box box--2 box__background" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              id="line1"
              d="M251.994 21.5L251.995 190.5C251.995 212.591 269.903 230.5 291.995 230.5L517.5 230.5C539.592 230.5 557.5 248.409 557.5 270.5L557.5 275.5C557.5 297.591 575.409 315.5 597.5 315.5L759 315.5"
              stroke="black"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <path
              id="line2"
              d="M20.5001 451L226 451C248.091 451 266 468.909 266 491L266 530C266 552.091 283.908 570 306 570L475.5 570C497.591 570 515.5 587.909 515.5 610L515.5 776.5"
              stroke="black"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <text fill="#fff">
              <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line1">
                FRONT END 
                <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="6s" repeatCount="indefinite" />
              </textPath>
            </text>
            <text fill="#fff">
              <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line1">
                DEVELOPER
                <animate attributeName="startOffset" from="0%" to="100%" begin="3s" dur="6s" repeatCount="indefinite" />
              </textPath>
            </text>
            <text fill="#fff">
              <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line2">
                TAN PHAT
                <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="6s" repeatCount="indefinite" />
              </textPath>
            </text>
            <text fill="#fff">
              <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line2">
                TAN PHAT
                <animate attributeName="startOffset" from="0%" to="100%" begin="3s" dur="6s" repeatCount="indefinite" />
              </textPath>
            </text>
          </svg>
          <div className="box__content">
            ReactJS
            <span>NextJs</span>
            Angular
            <span>NodeJs</span>
            Typecript
            <span>Javascript</span>
            HTML
            <span>CSS</span>
            <span>SCSS</span>
            Ant Design
            <span>Tailwind Css</span>
            <span>Shadcn</span>!
            Redux
            <span>Zustand</span>
            <span>Mysql</span>
            Mongodb
            <span className="box__title box__title--top">FRONTEND DEVELOPER</span>
            <span>Sourcetree</span>Postman
            <span>Github</span>
            <span className="box__title">Tan Phat</span>
            <span>Gitlab</span>ReactJs
            <span>NextJs</span>
            <span>Angular</span>
            NodeJS
            <span>Typecript</span>
            <span>Javascript</span>ReactJs
            NextJs
            <span>Angular</span>
            NodeJS<span>Typecript</span>
            <span>Javascript</span>
          </div>
        </div>
      </div>
    </div>
  );
}
