import React, { useState } from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ElfsightWidget } from 'react-elfsight-widget';
import Modal from 'react-bootstrap/Modal'

import Footer from '@/layout/Footer'
import classes from '../../styles/Products.module.css'
import Image from 'next/image'
import christmastumblr from '../../assets/christmastumbler.jpg';
import gingerbread from '../../assets/gingerbreadcup.jpg'
import greysanatomy1 from '../../assets/greysanatomyblanket.jpg'
import grinchblend from '../../assets/grinchmasblend.jpg'







const Store = () => {
    const [show, setShow] = useState()
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return <>
        <Header/>
        <main className={classes.page}>
        <Container>
            <Row>
                <Col md={12}>
                <h1>Store Page Coming Soon</h1>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={christmastumblr} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={gingerbread} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={greysanatomy1} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={grinchblend} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
            </Row>
<br/>
                <Row>
                <Col md={3}>
                    <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={christmastumblr} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={gingerbread} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={greysanatomy1} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={grinchblend} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={3}>
                    <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={christmastumblr} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={gingerbread} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={greysanatomy1} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
                <Col md={3}>
                <div className={classes.picdiv}>
                    <Image onClick={()=>setShow(true)} className={classes.storepics} src={grinchblend} />
                    <br/>
                    <span>Caption goes here</span>
                    </div>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

      </Modal>


        </main>
        <Footer/>
  </>
}

export default Store;
