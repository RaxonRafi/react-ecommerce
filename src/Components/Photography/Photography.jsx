import './Photography.css'
import {Container,Row,Col} from 'react-bootstrap';
import Img1 from '../../assets/Rectangle 12.png'
import Img2 from '../../assets/Rectangle 21.png'
import Img3 from '../../assets/Rectangle 20.png'
import { IoIosSearch } from "react-icons/io";
import forwardImg from '../../assets/material-symbols_arrow-forward.png'
const Photography = () => {
return (
<div>
    <Container fluid={true}>
        <Row>
            <Col>
            <img src={Img1} alt="" />
            </Col>
            <Col>
            <div className="photography-contents">
                <h3>New to photography? Let us help!</h3>
                <span>We offer a variety of written & recorded guides for all aspects of photography, ranging from
                    equipment handling to artistic theory.</span>
                <div className="search">
                    <IoIosSearch className="search-icon" />
                    <span>Search guides</span>
                </div>
                <Row>
                    <Col md={12}>
                    <div className="d-flex justify-content-between img-editing">
                        <img className="img-1" src={Img2} alt="" />
                        <Container>
                            <div className="d-flex flex-column h-auto image-gap">
                                <div>
                                    <div className="divFormat">
                                        <h3>Image Editing</h3>
                                        <span>Learn the basics of Adobe Lightroom and elevate your photos to a new
                                            standard.</span> <br />
                                    </div>
                                </div>
                                <div>
                                    <div className="read-more">
                                        <span>Read More </span>
                                        <img src={forwardImg} alt="forwardImg" />
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>

                    </Col>
                    <Col md={12} className='pt-3'>
                    <div className="d-flex justify-content-between img-editing">
                        <img width="269px" height="147px" className="img-1" src={Img3} alt="" />
                        <Container>
                            <div className="d-flex flex-column h-auto image-gap">
                                <div>
                                    <div className="divFormat">
                                        <h3>Composition</h3>
                                        <span>Master the art of creating visually appealing photography that tells a story, with practical tips and examples.</span> <br />
                                    </div>
                                </div>
                                <div>
                                    <div className="read-more">
                                        <span>Read More </span>
                                        <img src={forwardImg} alt="forwardImg" />
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    </Col>
                </Row>
            </div>
            </Col>
        </Row>
    </Container>
</div>
);
};

export default Photography;
