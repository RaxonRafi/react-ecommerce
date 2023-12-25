import './Categories.css'
import {Container,Row,Col} from 'react-bootstrap';
import image1 from '../../assets/Rectangle 8.png'
import image2 from '../../assets/Rectangle 14.png'
import image3 from '../../assets/Rectangle 15.png'
import forwardBtn from '../../assets/Vector (9).png'
const Categories = () => {
    return (
        <div>
            <Container fluid={true} className="mt-5 mb-5">
                <Row>
                    <Container>
                        <Row>
                        <Col md={4}>
                        <div className="image-box-container">
                            <img
                                src={image1}
                                alt="Your Image"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2 className="heading-text">Cameras</h2>
                                <div className="d-flex align-items-center ">
                                     <span>Find the sharpest lens for your photosho ot</span>
                                     <img src={forwardBtn} alt="forwardBtn" />
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="image-box-container">
                            <img
                                src={image2}
                                alt="Your Image"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2 className="heading-text">Lenses</h2>
                               <div className="d-flex align-items-center ">
                                    <span>Find the sharpest lens for your photoshoot</span>
                                    <img src={forwardBtn} alt="forwardBtn" />
                               </div>
                            </div>
                        </div>               
                    </Col>
                    <Col md={4}>
                        <div className="image-box-container">
                            <img
                                src={image3}
                                alt="Your Image"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2 className="heading-text">Accessories</h2>
                                <div className="d-flex align-items-center">
                                    <span>Highest quality accessories to fit your gears</span>
                                    <img src={forwardBtn} alt="forwardBtn" />
                                </div>
                            </div>
                        </div>
                    </Col>
                        </Row>
                    </Container>
                   
                </Row>
            </Container>
            
        </div>
    );
};

export default Categories;