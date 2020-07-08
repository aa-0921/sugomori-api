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
                    <div className="ml-10 flex items-baseline w-auto">
                      <div className="flex-auto">
                        {currentUserData != null ? (
                          <>
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
                      </div>
                      <div className="flex-auto float-right">
                        {currentUserData != null ? (
                          <>
                            <ButtonDropdown size="small">
                              <ButtonDropdown.Item main>
                                <a href="/pages/index">Settings</a>
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
                          </>
                        ) : (
                          <>
                            <ButtonDropdown size="small">
                              <ButtonDropdown.Item main>
                                <a href="/users/sign_in">ログイン</a>
                              </ButtonDropdown.Item>
                              <ButtonDropdown.Item>
                                <a href="/users/sign_up">新規登録</a>
                              </ButtonDropdown.Item>
                            </ButtonDropdown>
                          </>
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
