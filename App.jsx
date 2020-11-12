import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from './Header';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Bottomfooter from './Bottomfooter';
import Top from './Top';
import Mobilephone from './Mobileandphone';
import Cars from './Cars';
import Motorcycle from './Motorcycle';
import Houses from './Houses';
import Tvvideoaudio from './Tvvideoaudio';
import Landplots from './Landplots';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadmore from './Loadmore';
import Post from './Post';
import Sdata from './Sdata';
import Card from './Card';



const App = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <Top />
            <Switch>
                <Route exact path="/" />
                <Route path="/Mobilephone" component={Mobilephone} />
                <Route path="/Cars" component={Cars} />
                <Route path="/Motorcycle" component={Motorcycle} />
                <Route path="/Houses" component={Houses} />
                <Route path="/Tvvideoaudio" component={Tvvideoaudio} />
                <Route path="/Landplots" component={Landplots} />
                <Route path="/Post" component={Post} />
                <Redirect to="/" />
            </Switch>

            <div className="content-section">
                <h1 className="text-left">Fresh Recommended</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((val, ind) => {
                                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} />
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loadmore />
            <Footer />
            <Bottomfooter />
        </>
    );
};


export default App;