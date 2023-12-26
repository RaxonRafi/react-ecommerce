import './Products.css'
import {Card,Container,Row,Col} from 'react-bootstrap';
import productImg6 from '../../assets/Rectangle 15 (1).png'
import productImg1 from '../../assets/Rectangle 15 (2).png'
import productImg2 from '../../assets/Rectangle 15 (3).png'
import productImg3 from '../../assets/Rectangle 15 (4).png'
import productImg4 from '../../assets/Rectangle 15 (5).png'
import heartIcon from '../../assets/mdi_cards-heart-outline.png'
import arrowIcon from '../../assets/Vector (8).png'
import redStarIcon from '../../assets/starIcon.png'
import clockImg from '../../assets/Group 88.png'

const Products = () => {
    const productList = [
        {
          id: 1,
          title: '2 Lens kit',
          subtitle: 'Canon',
          rating: 4.8,
          features: [
            '45MP Full-Frame CMOS Sensor',
            'Sensor-Shift Image Stabilization',
            'DIGIC X Image Processor',
            '8K30 Raw Video',
          ],
          image: productImg6, 
          time: '17h 31m',
          oldprice:"3800",
          discountPrice: "$1,799"
        },
        {
          id: 2,
          title: 'EOS R5',
          subtitle: 'Canon',
          rating: 4.6,
          features: [
            '45MP Full-Frame CMOS Sensor',
            'Sensor-Shift Image Stabilization',
            'DIGIC X Image Processor',
            '8K30 Raw Video',
          ],
          image: productImg1, 
          time: '2h 27m',
          oldprice:"3800",
          discountPrice: "$3,699"
        },
        {
          id: 3,
          title: 'Mavic 3',
          subtitle: 'DJI',
          rating: 4.7,
          features: [
           ' 20MP 4/3" CMOS Hasselblad',
            '4K Slow Motion at 120 fps',
           ' f/2.8 to f/11 Adjustable Aperture',
            'DJI RC Remote Included',
          ],
          image: productImg2, 
          time: '21h 3m',
          oldprice:"$1740",
          discountPrice: "$1,599"
        },
        {
          id: 4,
          title: 'Carbon Fiber Tripod',
          subtitle: 'Benro',
          rating: 4.2,
          features: [
            'Load Capacity: 26.4 lb',
            'Max Height: 64.2',
            'Min Height: 16.1',
            'Folded Length: 16.1',
          ],
          image: productImg3, 
          time: '3h 45m',
          oldprice:"$360",
          discountPrice: "$319"
        },
        {
          id: 5,
          title: 'HERO 11 Black Mini',
          subtitle: 'GoPro',
          rating: 4.4,
          features: [
            '24.7MP Improved Performance',
            'Smooth 5.0 Image Stabilization',
            '8x Slow-Motion Video',
            '5.3K60/2.7K240 Video',
          ],
          image: productImg4, 
          time: '7h 38m',
          oldprice:"$340",
          discountPrice: "$289"
     
        },

        
      ];
      
    return (
        <div>
            <Container fluid={true} className="pt-5">
                <Row>
                    {
                        productList.map((product)=>{

                            return (
                                <Col key={product.id}>
                                <Card className="product-card">
                                    <div className="position-relative">
                                        <Card.Img variant="top" src={product.image} />
                                        <div className="position-absolute top-0 end-0 m-3">
                                        <img
                                            src={heartIcon}
                                            alt="Heart"
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                        />
                                        <img
                                            src={arrowIcon}
                                            alt="Arrow"
                                            style={{ width: '20px', height: '15px' }}
                                        />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div className="product-title">
                                            <h3>{product.title}</h3>
                                            <span>{product.subtitle}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img
                                            src={redStarIcon}
                                            alt="Red Star"
                                            style={{ width: '15px', height: '15px', marginLeft: '2px' }}
                                            />
                                            <span className="text-muted">{product.rating}</span>
                                        </div>
                                        </div>
                                        <div>
                                        <ul className="list-items">
                                            {product.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src={clockImg} alt="clockImg" />
                                                <span >{product.time}</span>
                                            </div>
                                         
                                            <div className='d-flex flex-column'>
                                                <span><s className="cuttoff">{product.oldprice}</s></span>
                                                <span>{product.discountPrice}</span>
                                            </div>
            
                                        </div>
              
                                    </Card.Body>
                                    </Card>
                                                      
                                </Col>
                            )

                        })
                    }
                   
                </Row>
            </Container>
 
        </div>
    );
};

export default Products;