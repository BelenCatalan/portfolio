import React from 'react';
import About from './Sobre-mi';
import Menu from './Menu';
import Footer from './Footer';
import '../stylesheets/App.scss';
import Portfolio from './Portfolio';
import Contact from './Contacto';
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import '../stylesheets/styles.css';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/" component={About} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" /*component={Contact} */>
          <Contact handleContactText={handleContactText} />
        </Route>
        {/* <Route path="/second" component={Second} />  */}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const handleContactText = (data) => {
  console.log(data);
};
function App() {
  return (
    // <div className="">
    <>
      <BrowserRouter>
        <header className="">
          <Menu />
        </header>
        <main className="">
          <div className=" main__background App">
            <AnimatedSwitch handleContactText={handleContactText} />
          </div>
        </main>
      </BrowserRouter>
      <Footer />
    </>
    /* </div> */
  );
}

export default App;
