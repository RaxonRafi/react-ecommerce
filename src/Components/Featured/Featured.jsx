import './Featured.css'
import {Container,Row,Col} from 'react-bootstrap';
import Img1 from '../../assets/Rectangle 26.png'
import topSellerImg1 from '../../assets/Rectangle 124.png'
import topSellerImg2 from '../../assets/Rectangle 125.png'
import topSellerImg3 from '../../assets/Rectangle 126.png'

import forwardImg from '../../assets/zondicons_checkmark.png'

const Featured = () => {
    const topsellerList = [
        {
          id: 1,
          name:"Tom Smith",
          title:"Handmade Accessories",
          features: [
            'Camera Bags',
            'Grips & Rigs',
            'Professional Straps',
      
          ],
          image: topSellerImg1, 
      
        },
        {
          id: 2,
          name:"Emily Wong",
          title:"Optics Enthusiast",
          features: [
            'Unique Lenses',
            'ND & UV Filters',
            'Special Effect Filters',
            'Lens Accessories',

          ],
          image: topSellerImg2, 
      
        },
        {
          id: 3,
          name:"George Duke",
          title:"Vintage Collector",
          features: [
            '60s & 70s Film Cameras',
            'Old Prints',
            'Disposables',
      
          ],
          image: topSellerImg3, 
      
        },
      
        
      ];
    return (
        <div>
             <Container fluid={true} className="pt-5">
                <Row>
                    <h3>Featured savings</h3>
                    <Col md={6}>
                        <img src={Img1} alt="" />
                    </Col>
                    <Col  md={6}>
                    <div className="featured-contents">
                        <h3>Turn used gear into new possibilities</h3>
                        <span>We offer a reliable platform for buying and selling used photography gear. Whether youre a beginner looking for affordable equipment or a professional photographer in search of high-end gear at a discounted price, weve got you covered. </span>
                        <Row className="pt-5">
                            <h4>Top sellers this month</h4>
                            {
                                topsellerList.map((seller)=>{
                                    return(
                                        <Col key={seller.id} md={4}>
                                        <div className="d-flex justify-content-between featured-img-editing ">
                                            <img className="img-1" src={seller.image} alt="" />
                                            <Container>
                                                <div className="d-flex flex-column h-auto image-gap">
                                                 
                                                        <div>
                                                           <span className='sellerName'>{seller.name}</span><br />
                                                            <span className='sellertitle'>{seller.title}</span> 
                                                            <div className="read-more">
                                                                
                                                                <img src={forwardImg} alt="forwardImg" />
                                                                <span>PIXEL Verified</span>
                                                    
                                                            </div>
                                                        </div>
                                             
            
                                                </div>
                                            </Container>
                                            
                                        </div>
                                            <div>
                                                <ul className="features">
                                                {seller.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                                </ul>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                   
                        </Row>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Featured;