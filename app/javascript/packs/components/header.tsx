import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import User from '../components/User';
import { ButtonDropdown, Grid, Row, Input, Button } from '@zeit-ui/react';
import { FetchData } from '../scripts/api/FetchData';

export function Header() {
  // const [currentUserData, setCurrentUserData] = useState({
  //   id: 0,
  //   email: '',
  //   name: '',
  // })

  const [currentUserData, setCurrentUserData] = useState(null);
  const getInitialDataUrl: string = 'http://localhost:3000/initial_data/show';

  useEffect(() => {
    FetchData(getInitialDataUrl).then((res) => {
      setCurrentUserData(res.data);
      console.log('getInitialDataUrl', getInitialDataUrl);
      console.log('res.data', res.data);
      console.log('currentUserData', currentUserData);
      console.log('currentUserData');
    });
  }, []);

  console.log('currentUserData', currentUserData);

  return (
    <header>
      <div>
        <nav className="bg-indigo-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="font-semibold text-xl tracking-tight text-white">SUGOMORI</span>
                </div>
                <div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline">
                      {currentUserData != null ? (
                        <>
                          <Link
                            to="/"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            Home
                          </Link>
                          <Link
                            to="/zeit-sample"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            Feed
                          </Link>
                          {/* test */}
                          <span className="font-semibold text-xl tracking-tight text-white">
                            SUGOMORI
                          </span>
                          <Link
                            to="/profilepage"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium  hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            Profile
                          </Link>
                          <Link
                            to="/MemberListApp"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            MemberInfo
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/"
                            className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                          >
                            Home
                          </Link>
                        </>
                      )}

                      <div className="ml-3 relative">
                        <ButtonDropdown size="small">
                          {currentUserData != null ? (
                            <>
                              <ButtonDropdown.Item main className="bg-indigo-300">
                                <div className="text-lg text-gray ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                                  Setting
                                </div>
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
                            </>
                          ) : (
                            <>
                              <ButtonDropdown.Item main>
                                <div className="text-lg text-gray ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                                  Setting
                                </div>
                                <a
                                  href="/pages/index"
                                  className="block px-4 py-2 sm:test-sm text-gray-700 hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  Login
                                </a>
                              </ButtonDropdown.Item>
                              <ButtonDropdown.Item>
                                <a
                                  href="/users/sign_in"
                                  className="block px-4 py-2 sm:test-sm text-gray-700 hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  サインイン
                                </a>
                              </ButtonDropdown.Item>
                            </>
                          )}
                        </ButtonDropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                      aria-label="Notifications"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg
                      className="block h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg
                      className="hidden h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
