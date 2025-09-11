import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import DonationSupport from './pages/DonationSupport';
import News from './pages/News';
import Partners from './pages/Partners';
import Shop from './pages/Shop';
import Volunteerism from './pages/Volunteerism';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Navigation />
                <Slider />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/donation-and-support" component={DonationSupport} />
                    <Route path="/news" component={News} />
                    <Route path="/partners" component={Partners} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/volunteerism" component={Volunteerism} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;