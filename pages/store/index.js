import React, { useState, useEffect } from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
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
    const [cart, setCart] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [errorShow, setErrorShow] = useState(false)
   


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

      

      const handleClose = () =>{ 
        setShow(false);
        setQuantity(0);
        setTotalPrice(0);
    }
      // const handleShow = () => setShow(true);

      // const getTotalPrice = (e) => {
      //       setQuantity(e.target.value);
      // }

     let totalCart = [];
      
      const addToCart = () => {
        try {
          cart.push(thisCart);
          const localCart = sessionStorage.setItem('items: ', JSON.stringify(cart));
          setShowAlert(true);

        }catch(err){

        }  

        //setShow(false);
        //console.log(thisCart)
        
/*         setCart((prevState) => {
          return [...prevState, cart.push({
            product: caption,
            amount: quantity,
            price: Math.round((price * quantity + Number.EPSILON)*100)/100
          })]
        }) */
      }

      const thisCart = {
        product: caption,
        amount: quantity,
        price: Math.round((price * quantity + Number.EPSILON)*100)/100
      }


 const addProductHandler = () => {
    // localStorage.setItem('product:', caption)
    // localStorage.setItem('price: ', price)
    // localStorage.setItem('quantity', quantity)
    // localStorage.setItem('total_price: ', Math.round((price * quantity + Number.EPSILON)*100)/100 )
    localStorage.setItem('items: ', JSON.stringify(cart));

    }
   


  // console.log(thisCart)
  // console.log(totalCart)
  console.log(JSON.stringify(cart));

  return <>



        <Header/>
 
        <main className={classes.page}>
        <Container>
            <Row>
                <Col md={12}>
                  <br/>
                <h2>Products</h2> 
                <h5>Select a Product to Add to Your Cart</h5>
                </Col>
            </Row>
            <Row>

            {picsData && picsData.map((pic)=>{

return <>
        <Col md={3} key={pic.id} >                    
            <div key={pic.id} className={classes.picdiv}>
            <img 
                onClick={()=>{setShow(true); setCaption(pic.caption); setPrice(pic.price); setProductId(pic.id)}} 
                className={classes.storepics} 
                src={pic.url} 
                alt="pic"
                key={pic.id} />
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
        <Toast style={{margin: "1rem"}} onClose={() => setShowAlert(false)} show={showAlert} delay={3000} autohide bg={"success"}>
        <Toast.Header>
          <strong className="me-auto">SUCCESS!!</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body><b>Added to Cart Successfully</b></Toast.Body>
      </Toast>
      <Toast style={{margin: "1rem"}} onClose={() => setErrorShow(false)} show={errorShow} delay={3000} autohide bg={"danger"}>
        <Toast.Header>
          
          <strong className="me-auto">UH OH!!</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body><b>Something Went Wrong, Product Not Added to Cart</b></Toast.Body>
      </Toast>
            <Container>
                <Row>
                    <Form>
                        <Form.Group>
   
                    <Col md={4}>
                    <p>{caption}<br/>
                        price: {price} each
                    </p>
                    </Col>
                    <Col md={8}>
                    <span>Quantity</span>
                    <Form.Control type="number" onChange={(e)=>setQuantity(e.target.value)}  /> 
                    <span>Total Price</span>
                    <Form.Control type="number" value={Math.round((price * quantity + Number.EPSILON)*100)/100} readOnly />
                    <br/>
                    <Button style={{float:"right"}} onClick={addToCart}>Add to Cart+</Button> 
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
