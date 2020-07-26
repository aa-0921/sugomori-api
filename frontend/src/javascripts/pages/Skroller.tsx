import React from "react";
import { render } from "react-dom";
import { ParallaxProvider, Parallax } from 'react-skrollr'


const data = {
  "data-900-top": "transform: translateX(-100%);",
  "data-800-top": "transform: translateX(-80%);",
  "data-650-top": "opacity: 1;transform: translateX(-100%);",

  "data-500-top": "transform: translateX(0%);",
  "data-150-top": "transform: translateX(0%);",
  // "data-1000-top": "opacity: 1;transform: translateX(-100%);",
  // "data-center-center": "opacity: 1;transform: translateX(-100%);",
  // "data-bottom-top": "opacity: 0;",
  "data-top-bottom": "opacity: 1;transform: translateX(-100%);",
};

export const Skroller = () => (
  <ParallaxProvider
    init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false
    }}
    getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
  >
    <div className="skroller_background">
      <div className="skroller_title">アプリ説明</div>

      <Parallax data={data}>
        <span className="skroller_span mb-20">SUGOMORI is...</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">みんなのお家時間を共有するアプリです。</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">お家に関することなら何でも投稿可能</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">ディープラーニングにより自動でタグ付け</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">投稿後すぐにタグがつきます</span>
      </Parallax>
      <Parallax data={data}>
        <span className="mb-5 skroller_span">あなたの投稿にはどんなタグがつくかな？</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">投稿一覧画面では画像サイズ調整可能</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">スライドバーでグリグリ変更できます</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">SNSログインにも対応</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">Facebook, Twitterでアカウント登録できます</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">スライドバーでグリグリ変更できます</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">スライドバーでグリグリ変更できます</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">スライドバーでグリグリ変更できます</span>
      </Parallax>
      <Parallax data={data}>
        <span className="skroller_span">スライドバーでグリグリ変更できます</span>
      </Parallax>

    </div>

  </ParallaxProvider>
);

