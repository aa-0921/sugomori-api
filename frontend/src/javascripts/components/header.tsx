import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, Grid, Row, Input, Button } from '@zeit-ui/react';
import { useState, useEffect } from 'react';


export function Header(props: any) {
  console.log('headerのprops.currentUserData', props.currentUserData)


  const [header, setHeader] = useState<HTMLElement>(null);
  useEffect(() => {
    setHeader(document.getElementById("header"));
  }, [setHeader]);

  // ヘッダーを取得
  // const header = document.getElementById("header");
  console.log('header', header)
  // ヘッダーの高さを取得
  const hH = header.clientHeight;

  // 現在地を示す変数を定義
  let pos = 0;
  const onScroll = () => {
    // スクロール位置がヘッダーの高さ分より大きい場合にclass名を追加し、そうでない場合にclass名を削除
    if (pos > hH) {
      header.classList.add('header--unpinned');
    } else {
      header.classList.remove('header--unpinned');
    }
  };

  window.addEventListener("scroll", () => {
    // スクロールするごとにpos（現在地）の値を更新
    pos = window.scrollY;
    onScroll();
  });
  return (
    <header id="header" className="header">
      <div>
        <nav className="bg-indigo-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img className="w-30 h-30 z-20" src="../../../../app/assets/images/LOGO.svg" alt="" /> */}
                <Link to="/">
                  <span className="font-semibold text-xl tracking-tight text-white">SUGOMORI</span>
                </Link>
              </div>
              <div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline w-auto">
                    <div className="flex">
                      {props.currentUserData != null ? (
                        <React.Fragment>
                          <Link
                            to="/"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            Feed
                            </Link>

                          <Link
                            to={'/profilepage/' + props.currentUserData.id}
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium  hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            YourProfile
                            </Link>
                          <Link
                            to="/MemberListApp"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            MemberInfo
                            </Link>
                        </React.Fragment>
                      ) : (
                          <React.Fragment>
                            <Link
                              to="/"
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              About
                              </Link>
                          </React.Fragment>
                        )}
                    </div>
                    <div className="ml-auto">
                      {props.currentUserData != null ? (
                        <React.Fragment>
                          <ButtonDropdown size="small">
                            <ButtonDropdown.Item main>
                              Settings
                              </ButtonDropdown.Item>
                            <ButtonDropdown.Item>
                              <a
                                href="/users/edit"
                                className="block px-4 py-2 sm:test-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                プロフィール変更
                                </a>
                            </ButtonDropdown.Item>
                            <ButtonDropdown.Item>
                              <a
                                href="/users/sign_out"
                                className="block px-4 py-2 sm:test-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                ログアウト
                                </a>
                            </ButtonDropdown.Item>
                          </ButtonDropdown>
                        </React.Fragment>
                      ) : (
                          <React.Fragment>
                            <ButtonDropdown size="small">
                              <ButtonDropdown.Item main>
                                <a href="/users/sign_in">ログイン</a>
                              </ButtonDropdown.Item>
                              <ButtonDropdown.Item>
                                <a href="/users/sign_up">新規登録</a>
                              </ButtonDropdown.Item>
                            </ButtonDropdown>
                          </React.Fragment>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header >
  );
}
