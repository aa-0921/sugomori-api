import React from "react";
import { render } from "react-dom";
import { ParallaxProvider, Parallax } from 'react-skrollr'
import BackGroundVanta from '../pages/BackGroundVanta';
import Tilt from 'react-parallax-tilt';
import { BackGround } from '../pages/BackGround';
import { Spacer } from "@zeit-ui/react";
// import homeIcon from './../../../images/家.svg';
import RailsLogo from '../../../images/rails_icon.svg';
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


const messageData = {
  "data-1200-top": "opacity: 0.5;",
  "data-1000-top": "opacity: 1;",
  "data-750-top": "opacity: 1;",

  "data-650-top": "opacity: 1;",

  "data-bottom-top": "opacity: 1;",
};

// const roofData = {
//   "data-700-top": "transform: translateY(-70%);opacity: 0.5;",
//   "data-680-top": "transform: translateY(-60%);opacity: 0.5;",
//   "data-650-top": "transform: translateY(-20%);",

//   "data-500-top": "transform: translateY(32%);opacity: 1;	--transform-scale-x: 1.1;--transform-scale-y: 1.1;",

//   // "data-400-top": "transform: translateY(-300%);",
//   // "data-150-top": "opacity: 1;transform: translateY(-350%);",
//   // "data-center-center": "opacity: 1;transform: translateX(-100%);",
// };
const houseData = {
  "data-700-top": "transform: translateY(-30%);opacity: 0.5;",
  "data-680-top": "transform: translateY(-10%);opacity: 0.5;",
  "data-650-top": "transform: translateY(15%);",
  "data-600-top": "transform: translateY(27%);",
  "data-550-top": "transform: translateY(35%);opacity: 1;--transform-scale-x: 1.1;--transform-scale-y: 1.1;",
  // "data-500-top": "transform: translateY(35%);opacity: 1;--transform-scale-x: 1.1;--transform-scale-y: 1.1;"
};

export const Skroller = () => (
  <React.Fragment>
    <svg display="non" className="h-0" >
      <defs>
        <symbol
          id="home"
          viewBox="0 0 1244.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#FFFFFF" stroke="none">
            <path d="M5320 12048 c-410 -411 -751 -748 -757 -748 -10 0 -13 130 -13 625
l0 625 -1325 0 -1325 0 0 -1957 0 -1958 -950 -950 -950 -950 0 -132 0 -133
520 0 c503 0 520 -1 530 -19 7 -14 10 -1038 10 -3235 l0 -3216 5150 0 5150 0
0 3229 c0 2935 1 3229 16 3235 9 3 252 6 540 6 l524 0 0 133 0 133 -172 171
c-95 93 -1490 1453 -3099 3021 -1610 1567 -2930 2855 -2933 2861 -5 7 -39 10
-89 9 l-82 -1 -745 -749z"/>
          </g>
        </symbol>
      </defs>
    </svg>
    {/* <svg display="non" className="h-0" >
      <symbol id="home-roof" viewBox="0 0 1244.000000 1280.000000">
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path d="l0 625 -1325 0 -1325 0 0 -1957 0 -1958 -950 -950 -950 -950 0 -132 0 -133
520 0 c503 0 520 -1 530 -19 7 -14 10 -1038 10 -3235 l0 -3216 5150 0 5150 0
0 3229 c0 2935 1 3229 16 3235 9 3 252 6 540 6 l524 0 0 133 0 133 -172 171
c-95 93 -1490 1453 -3099 3021 -1610 1567 -2930 2855 -2933 2861 -5 7 -39 10
-89 9 l-82 -1 -745 -749z" />
        </g>
      </symbol>
    </svg> */}
    <div className="relative">
      <BackGround />

      <div className="absolute top-0 tilt-zone flex flex-col items-center justify-center">

        <Tilt
          className="parallax-effect-glare-scale"
          perspective={300}
          glareEnable={false}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="inner-element relative flex items-center justify-center w-screen h-screen">

            <div className="tilt-title w-30 text-6xl bg-indigo-300">LOVE</div>
            <div className="tilt-title w-30 text-6xl bg-indigo-300">STAY</div>
            <div className="tilt-title w-30 text-6xl bg-indigo-300">HOME</div>
            <div className="about-knob absolute">○</div>
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
          <span className="skroller_span">お家時間の可能性・楽しさを広げることで、STAY HOMEを有意義にしたい。</span>
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
          <span className="mb-5 skroller_span">（近日中に、表示されたタグから自由に選択できるように改善します）</span>
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
            {/* <img src={require('!svg-inline-loader!../../../images/rails_icon.svg')} /> */}
            {/* <img src="../../../images/rails_icon.svg" /> */}
            {/* <img src="../../../images/rails_icon.svg" /> */}


            {/* <RailsLogo /> */}
          </span>
        </Parallax>

        <Parallax data={underData}>
          <span className="skroller_span">フロントエンド:
          <span>
              React(16.13.1)・webpack
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

        <Spacer y={10} />

        <Parallax data={houseData}>
          <div className="flex justify-center items-center">
            <svg id="home-svg" x="0" y="0" width="800px" height="800px" viewBox="0 0 800 800">
              <use xlinkHref='#home' className="home" fill="#db8c81" x="16px" y="16px" width="800px" height="800px" />
              {/* fill="#00305e" */}
            </svg>
          </div>
        </Parallax>
        <div className="skroller_house_wrap flex justify-center items-center rounded-lg">
          <div className="skroller_house_text flex flex-col items-start">
            <div>
              このアプリを見て頂き、ありがとうございます。
            </div>
            <div>
              これは私が初めて作成したアプリで、JavaScript、ReactやAPIの処理についても知識がゼロの状態からスタートしました。
            </div>
            <div>
              まだまだ勉強不足ですが、作成していく中で理解できることが増え、試したいことのイメージがあれもこれもと溢れ、それを形にできることが楽しく、何度も達成感を得ることができました。
            </div>
            <div>
              他にも、もっと色々なものを作ってみたいと思っています。
            </div>
            <div>
              このアプリについてもまだまだ試したいことや、やり残したことがあるので、アップデートしていきたいと思います。
            </div>
            <div>
              SUGOMORIのいろいろな機能を見て、試して頂けると嬉しいです。
            </div>
          </div>
        </div>
        {/* </Parallax> */}
      </div>
    </ParallaxProvider>
  </React.Fragment >
);

