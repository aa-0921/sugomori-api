import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, Grid, Row, Input, Button } from '@zeit-ui/react';
import { useState, useEffect } from 'react';


export function Header(props: any) {
  // console.log('headerのprops.currentUserData', props.currentUserData)

  (function () {
    const target = document.getElementById('header'),
      height = 56;

    let offset = 0,
      lastPosition = 0,
      ticking = false;
    function onScroll(lastPosition: any) {

      if (lastPosition > height) {
        if (lastPosition > offset) {
          target.classList.add('head-animation');
        } else {
          target.classList.remove('head-animation');
        }
        offset = lastPosition;
      }
    }

    window.addEventListener('scroll', function (e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();

  return (
    <header id="header" className="header">
      <div>
        <nav className="bg-indigo-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 w-full">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0">
                  {/* <img className="w-30 h-30 z-20" src="../../../../app/assets/images/LOGO.svg" alt="" /> */}
                  <Link to="/">
                    <span className="font-semibold text-xl tracking-tight text-white">SUGOMORI</span>
                  </Link>
                </div>
                <div className="w-full">
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
                      <div className="ml-auto mr-5">
                        {props.currentUserData != null ? (
                          <React.Fragment>
                            <ButtonDropdown size="small" className="bg-indigo-300">
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
          </div>
        </nav>
      </div>
    </header >
  );
}
