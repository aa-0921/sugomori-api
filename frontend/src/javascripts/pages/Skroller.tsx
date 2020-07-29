import React from "react";
import { render } from "react-dom";
import { ParallaxProvider, Parallax } from 'react-skrollr'
import BackGroundVanta from '../pages/BackGroundVanta';
import Tilt from 'react-parallax-tilt';
import { BackGround } from '../pages/BackGround';




const thanksData = {
  "data-1000-top": "transform: translateY(-50%);opacity: 1;",

  "data-950-top": "transform: translateY(-40%);",
  "data-900-top": "transform: translateY(-80%);opacity: 1;",
  "data-700-top": "transform: translateY(-70%);font-family: 'Ubuntu', sans-serif;",
  "data-600-top": "transform: translateY(-60%);font-style: italic;",
  "data-550-top": "transform: translateY(-40%);font-weight: 800;font-variant: small-caps;",
  "data-500-top": "transform: translateY(-30%);font-family: 'Times New Roman', Times, serif;",
  "data-450-top": "transform: translateY(-20%);font-family: monospace;font-style: oblique;background-color: #a3bffa !important;",

  "data-400-top": "transform: translateY(-10%);",
  "data-150-top": "opacity: 1;transform: translateY(0%);",
  "data-bottom-top": "opacity: 0;",
  "data-top-bottom": "opacity: 0;transform: translateY(-100%);",
};

const thanksTextData = {

  "data-1000-top": "transform: translateY(-50%);opacity: 1;",

  "data-950-top": "transform: translateY(-40%);",
  "data-900-top": "transform: translateY(-80%);opacity: 0.5;",
  "data-800-top": "transform: translateY(0%);opacity: 1;font-family: 'Rowdies', cursive;",
  "data-700-top": "font-family: 'Ubuntu', sans-serif;color: #00305e;",
  "data-600-top": "font-family: 'Pacifico', cursive;",
  "data-550-top": "font-weight: 800;font-variant: small-caps;color:#404756",
  "data-500-top": "font-family: 'Times New Roman', Times, serif;",
  // "data-450-top": "color: #FFF;font-style: oblique;",
  "data-450-top": "font-style: oblique;",

  "data-400-top": "transform: translateY(0%);",
  "data-150-top": "transform: translateY(0%);",
  "data-bottom-top": "opacity: 0;",
  "data-top-bottom": "opacity: 1;transform: translateY(-100%);",
};
const leftData = {
  "data-900-top": "transform: translateX(-100%);",
  "data-800-top": "transform: translateX(-80%);",
  "data-650-top": "opacity: 1;transform: translateX(-100%);",

  "data-500-top": "transform: translateX(0%);",
  "data-150-top": "transform: translateX(0%);",
  // "data-1000-top": "opacity: 1;transform: translateX(-100%);",
  // "data-center-center": "opacity: 1;transform: translateX(-100%);",
  "data-bottom-top": "opacity: 0;",
  "data-top-bottom": "opacity: 1;transform: translateX(-100%);",
};

const rightData = {
  "data-900-top": "transform: translateX(100%);",
  "data-800-top": "transform: translateX(80%);",
  "data-650-top": "opacity: 1;transform: translateX(100%);",

  "data-500-top": "transform: translateX(0%);",
  "data-150-top": "transform: translateX(0%);",
  // "data-1000-top": "opacity: 1;transform: translateX(-100%);",
  // "data-center-center": "opacity: 1;transform: translateX(-100%);",
  "data-bottom-top": "opacity: 0;",
  "data-top-bottom": "opacity: 1;transform: translateX(100%);",
};

const underData = {
  "data-900-top": "transform: translateY(-100%);",
  "data-800-top": "transform: translateY(-80%);",
  "data-650-top": "opacity: 1;transform: translateY(-100%);",

  "data-400-top": "transform: translateY(0%);",
  "data-150-top": "transform: translateY(0%);",
  // "data-1000-top": "opacity: 1;transform: translateX(-100%);",
  // "data-center-center": "opacity: 1;transform: translateX(-100%);",
  "data-bottom-top": "opacity: 0;",
  "data-top-bottom": "opacity: 1;transform: translateY(-100%);",
};

export const Skroller = () => (
  <React.Fragment>
    <div className="relative">
      <BackGround />

      <div className="absolute top-0 tilt-zone flex flex-col items-center justify-center">

        <Tilt
          className="parallax-effect-glare-scale"
          perspective={300}
          glareEnable={false}
          glareMaxOpacity={0.45}
          scale={1.02}
        // tiltReverse={true}
        // glareEnable={true}
        // glareMaxOpacity={0.45}
        // glarePosition="all"
        // scale={1.08}
        >
          <div className="inner-element flex items-center justify-center w-screen h-screen">
            {/* <div className="tilt-box1 bg-indigo-900 w-screen">
          <div className="tilt-box2 bg-indigo-800 w-64 h-40">
            <div className="tilt-box3 bg-indigo-700 w-20 h-20">
              <div className="tilt-box4">
                <div className="tilt-box5"> */}
            <div className="tilt-title w-30 text-6xl bg-indigo-300">LOVE</div>
            <div className="tilt-title w-30 text-6xl bg-indigo-300">STAY</div>
            <div className="tilt-title w-30 text-6xl bg-indigo-300">HOME</div>
            {/* </div>
              </div>
            </div>
          </div>
        </div> */}
          </div>
        </Tilt>
        <a className="mt-10 scroll-guide"><span></span></a>
        <a className="scroll-guide"><span></span></a>
        <a className="scroll-guide"><span></span>Scroll</a>
      </div>

    </div>

    <ParallaxProvider
      init={{
        smoothScrollingDuration: 1000,
        smoothScrolling: true,
        forceHeight: false,
      }}
      getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
    >
      <div className="skroller_background">
        <Parallax data={thanksData}>
          <span className="skroller_span thanks">
            <Parallax data={thanksTextData}>
              Thanks for coming
            </Parallax>
          </span>
        </Parallax>

        <Parallax data={leftData}>
          <span className="skroller_span sugomori_is mb-5 mt-48">SUGOMORI is...</span>
        </Parallax>
        <Parallax data={leftData}>
          <span className="skroller_span">みんなのお家時間を写真付きで共有するアプリです。</span>
        </Parallax>
        <Parallax data={leftData}>
          <span className="skroller_span">お家に関することなら何でも投稿可能</span>
        </Parallax>
        <Parallax data={leftData}>
          <span className="skroller_span">長期化する自粛生活、みんなが家でなにしてるか気になりませんか？</span>
        </Parallax>
        <Parallax data={leftData}>
          <span className="skroller_span">あなたの投稿が誰かのSTAY HOMEに繋がる！</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="mt-16 mb-5 skroller_span sugomori_point">SUGOMORI の特徴</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">ディープラーニングにより自動でタグ付け</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">投稿後すぐにタグがつきます</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="mb-5 skroller_span">どんなタグがつくか投稿してみましょう</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">投稿一覧画面では画像サイズ調整可能</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">スライドバーでの変更がすぐに反映されます</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">全投稿内から検索も可能</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">SNSログインにも対応</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">Facebook, Twitter, GitHubでアカウント登録できます</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">Feed機能搭載</span>
        </Parallax>
        <Parallax data={rightData}>
          <span className="skroller_span">フォローしたユーザーの投稿を一覧で見ることができます
      </span>
        </Parallax>
        <Parallax data={underData}>
          <span className="mt-40 mb-5 skroller_span sugomori_use">主な使用技術
      </span>
        </Parallax>
        <Parallax data={underData}>
          <span className="skroller_span">
            バックエンド:
          <span>
              Rails(5.2.4.3)
          </span>
          </span>
        </Parallax>

        <Parallax data={underData}>
          <span className="skroller_span">フロントエンド:
          <span>
              React(16.13.1),React-Router
          </span>
          </span>
        </Parallax>

        <Parallax data={underData}>
          <span className="skroller_span">DB:
          <span>
              PostgreSQL
          </span>
          </span>
        </Parallax>

        <Parallax data={underData}>
          <span className="skroller_span">ストレージ:
          <span>
              S3
          </span>
          </span>
        </Parallax>

        <Parallax data={underData}>
          <span className="skroller_span">デプロイ:
          <span>
              heroku
          </span>
          </span>
        </Parallax>

        <Parallax data={underData}>
          <span className="skroller_span">認証:
          <span>
              devise
          </span>
          </span>
        </Parallax>
        <Parallax data={underData}>
          <span className="skroller_span">テスト:
          <span>
              RSpec, factory_bot, Shoulda Matchers
          </span>
          </span>
        </Parallax>

      </div>

    </ParallaxProvider>
  </React.Fragment>
);

