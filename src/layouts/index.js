import React from 'react';
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import '../fonts/fonts.css';
import './layout.css';
import './main.css';

const Layout = ({ location, children }) => {
  const isLogin = false;
  const isHome = location.pathname === '/';
  const needsInlineHeader = !isLogin && !isHome;

  const transitionProvider = (
    <TransitionProvider
      location={location}
      enter={{
        opacity: 0,
        config: {
          duration: 500,
        },
      }}
      usual={{
        opacity: 1,
      }}
      leave={{
        opacity: 0,
        config: {
          duration: 250,
        },
      }}
    >
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  );

  return (
    <>
      <Header inline={needsInlineHeader} />
      <SwitchTransition>
        <CSSTransition
          key={isLogin ? 'login' : 'auth'}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames="fade"
        >
          <>
            {isLogin ? (
              transitionProvider
            ) : (
              <div>
                <NavBar />
                {transitionProvider}
              </div>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
};

export default Layout;
