import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Homepage.module.css'
import ServiceIconImg from '../../assets/images/Ruby-on-rails.svg'
import Image from 'next/image'
import ourServices from '../Utils/ourServices';


const Services = () => {
    const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    console.log(777, ourServices);
 
    return (
        <>
            <div className={styles.servicesContainerBg}>
                <Container>

                    <Row>
                        <Col lg={12}>
                            <div className={`themeTitle ${styles.themeTitleCenter}`}>
                                <h4>all solutions are here</h4>
                                <h3><span>our</span> domain expertise</h3>
                            </div>
                        </Col>
                        {ourServices.map((value, index)=>{
                            return(
                            <Col lg={3} id={index}>
                                <div className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>
                                        <Image
                                            src='/images/react-js.svg'
                                            className='img-fluid'
                                            // layout='fill'
                                            height={58}
                                            width={58}
                                        />
                                    </div>
                                    <h5>{value.service}</h5>
                                </div>
                            </Col>
                        )
                        })}
                        <Col lg={12}>
                            <Button className="themeButton">
                                View more
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}
export default Services;