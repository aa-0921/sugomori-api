import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, Grid, Row, Input, Button } from '@zeit-ui/react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export function Header(props: any) {
  console.log('headerのprops.currentUserData', props.currentUserData)
  return (
    <header>
      <div>
        <nav className="bg-indigo-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-30 h-30 z-20" src="../../../../app/assets/images/LOGO.svg" alt="" />
                  <span className="font-semibold text-xl tracking-tight text-white">SUGOMORI</span>
                </div>
                <div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline w-auto">
                      <div className="flex-auto">
                        {props.currentUserData != null ? (
                          <React.Fragment>
                            <Link
                              to="/"
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              Home
                            </Link>
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
                                Home
                            </Link>
                            </React.Fragment>
                          )}
                      </div>
                      <div className="flex-auto float-right">
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
          </div>
        </nav>
      </div>
    </header>
  );
}
