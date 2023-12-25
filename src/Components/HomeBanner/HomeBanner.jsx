import './HomeBanner.css'
import Carousel from 'react-bootstrap/Carousel';
import slideImg1 from '../../assets/Rectangle 7.png'
import slideImg2 from '../../assets/Rectangle 7 (1).png'
import slideImg3 from '../../assets/Rectangle 7 (2).png'
import forwardImg from '../../assets/material-symbols_arrow-forward.png'
import {Container} from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="silderImg" src={slideImg1} alt="slideImg1" />
                <Carousel.Caption className="carousel-caption">
                <h3>MAKE BELIEVE</h3>
                <div className="d-flex align-items-center">
                    <span>Sales on selected <b>SONY</b> products</span>
                    <img src={forwardImg} height={10} alt="" />
                </div>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="silderImg" src={slideImg2} alt="slideImg1" />
                <Carousel.Caption>
                <h3>PICTURE PERFECT DEALS</h3>
                <div className="d-flex align-items-center">
                    <span>Browse our <b>second-hand</b> gear market</span>
                    <img src={forwardImg} height={10} alt="" />
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="silderImg" src={slideImg3} alt="slideImg1" />
                <Carousel.Caption>
                <h3>NEW ARRIVALS</h3>
                <div className="d-flex align-items-center">
                    <span>The newest and <b>latest</b> advances in technology</span>
                    <img src={forwardImg} height={10} alt="" />
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;