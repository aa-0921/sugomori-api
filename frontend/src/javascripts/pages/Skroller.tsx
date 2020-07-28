import React from "react";
import { render } from "react-dom";
import { ParallaxProvider, Parallax } from 'react-skrollr'
import BackGroundVanta from '../pages/BackGroundVanta';


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

    <BackGroundVanta />
    <div className="skroller_title z-50 w-screen h-screen">家</div>

    <ParallaxProvider
      init={{
        smoothScrollingDuration: 1000,
        smoothScrolling: true,
        forceHeight: false
      }}
      getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
    >
      <div className="skroller_background">

        <Parallax data={leftData}>
          <span className="skroller_span sugomori_is mb-5">SUGOMORI is...</span>
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

