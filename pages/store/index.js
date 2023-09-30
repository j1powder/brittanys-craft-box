import React, { useState, useEffect } from 'react'
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
import { projectFirestore, projectStorage } from '@/firebaseConfig'






const Store = () => {
    const [show, setShow] = useState()
    const [storagePics, setStoragePics] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [picsData, setPicsData] = useState();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const collectionRef = projectFirestore.collection('store-pictures') // Replace 'yourCollection' with the actual name of your Firestore collection
            const snapshot = await collectionRef.get();
    
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
    
            setPicsData(data);
          } catch (error) {
            console.error('Error fetching Firestore collection:', error);
          }
        };
    
        fetchData();
      }, []);


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
            {picsData && picsData.map((pic)=>{

return <>
        <Col sm={3}>                    
            <div className={classes.picdiv}>
            <img onClick={()=>setShow(true)} className={classes.storepics} src={pic.url} alt="pic"/>
             <br/>
            <span>{pic.caption}</span>
             </div>
        </Col>

</>
})}
            </Row>






 {/*            <Row>
                <Col md={3}>
                    <div className={classes.picdiv}>
                    <img onClick={()=>setShow(true)} className={classes.storepics} src={"https://firebasestorage.googleapis.com/v0/b/brittanys-craft-box.appspot.com/o/christmastumbler.jpg?alt=media&token=94a42a71-483e-4022-ad92-4fd2a0519b33&_gl=1*qdp9tj*_ga*ODk4NjIxNDc3LjE2NjMzMzg3NDI.*_ga_CW55HF8NVT*MTY5NTkzMzQ2NC4xOTYuMS4xNjk1OTMzNjU2LjYwLjAuMA"} alt="pic"/>
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
            </Row> */}



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
