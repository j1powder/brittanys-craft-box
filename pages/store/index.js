import React, { useState, useEffect } from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ElfsightWidget } from 'react-elfsight-widget';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
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
    const [picsData, setPicsData] = useState();
    const [price, setPrice] = useState();
    const [caption, setCaption] = useState();
    const [productId, setProductId] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [quantity, setQuantity] = useState();
   


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

      console.log(totalPrice)

      const handleClose = () =>{ 
        setShow(false);
        setQuantity(0);
        setTotalPrice(0);
    }
      const handleShow = () => setShow(true);

      const getTotalPrice = (e) => {
            setQuantity(e.target.value);
      }


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
        <Col md={3} key={pic.id} >                    
            <div className={classes.picdiv}>
            <img 
                onClick={()=>{setShow(true); console.log(pic.id); setCaption(pic.caption); setPrice(pic.price); setProductId(pic.id)}} 
                className={classes.storepics} 
                src={pic.url} 
                alt="pic"/>
             <br/>
            <span>{pic.caption}</span>
            <br/>
            <span>${pic.price}</span>
             </div>
        </Col>

</>
})}
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Form>
                        <Form.Group>
                    <Col xs={6}>
                    <p>{caption}<br/>
                        price: {price} each
                    </p>
                    </Col>
                    <Col xs={6}>
                    <span>Quantity</span>
                    <Form.Control type="number" onChange={(e)=>setQuantity(e.target.value)}  /> 
                    <span>Total Price</span>
                    <Form.Control type="number" value={price * quantity} /> 
                    </Col>
                    </Form.Group>
                    </Form>
                </Row>
            </Container>

        </Modal.Body>

      </Modal>


        </main>
        <Footer/>
  </>
}

export default Store;
