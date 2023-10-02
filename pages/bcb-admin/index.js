import React, {useState, useEffect, useContext} from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import classes from '../../styles/Admin.module.css'
import { projectFirestore, projectStorage } from '@/firebaseConfig'
import { getStorage, ref, updateMetadata, getDownloadURL } from "firebase/storage";
import { AuthContext } from '@/firebase-helpers/AuthContext'
import { useRouter } from 'next/router'

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [caption, setCaption] = useState();
  const [show, setShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()

  useEffect(()=>{
    currentUser ? router.push('/bcb-admin')
    : router.push('/bcb-admin/signin')
  },[])


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const AddProduct = (e) => {
    e.preventDefault()
    const storageRef = projectStorage.ref('/')
    const uploadTask = storageRef.child(`${selectedFile.name}`).put(selectedFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log('successfully added picture');
      }, (error)=> {
        console.log('error uploading', error);
        setErrorShow(true)
      },
      async () => {
        const docStorage = getStorage();
        const docRef = ref(docStorage, `/${selectedFile.name}`)

        let newlink;
        await getDownloadURL(docRef).then((data)=>{
          newlink = data;
          console.log(newlink);
        }).catch((error)=>{
          console.log(error, 'could not get link')
          setErrorShow(true)
        });

        try{ 
          const document = projectFirestore.collection('store-pictures');
          document.add(
            {
              price,
              caption,
              url: newlink.toString()
            }
          )
        } catch(error){
            console.log(error, 'failed to add document to collection')
            setErrorShow(true)
        }
      }
      )



      console.log('everything worked');
      setShow(true);
      setPrice('');
      setCaption('');
      setProductName('');
      setSelectedFile('');
  }

  const testFunction = (e) => {
    e.preventDefault()
    setErrorShow(true);
    setPrice('');
    setCaption('');
    setProductName('');
    setSelectedFile(null);
  }
console.log(price, caption, selectedFile)
  
//console.log(currentUser.email)

  return <>
        <Header />
      <Toast style={{margin: "1rem"}} onClose={() => setShow(false)} show={show} delay={3000} autohide bg={"success"}>
        <Toast.Header>
          
          <strong className="me-auto">SUCCESS!!</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body><b>Product Added Successfully</b></Toast.Body>
      </Toast>

      <Toast style={{margin: "1rem"}} onClose={() => setErrorShow(false)} show={errorShow} delay={3000} autohide bg={"danger"}>
        <Toast.Header>
          
          <strong className="me-auto">UH OH!!</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body><b>Something Went Wrong, Product Not Added</b></Toast.Body>
      </Toast>


        <Container>
          <Row>
            <Col md={12}>
              <div className={classes.divcontainer}>
              <h2>Add New Product</h2>
            <Form onSubmit={AddProduct}>
              <Form.Group>
                <Form.Control value={caption} onChange={(e) => setCaption(e.target.value)} className={classes.addpicform} type="text" placeholder='Caption' />
                <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} className={classes.addpicform} type="number" placeholder='Price' />
                <Form.Control value={productName} onChange={(e) => setProductName(e.target.value)} className={classes.addpicform} placeholder="Product Name" />
                </Form.Group> 
                <br/>
                <input type='file' onChange={handleFileChange} />
                <br/><br/>
                <Button type="submit">Add Product</Button> 
             
             
            </Form>
            </div>
            </Col>
          </Row>

        </Container>
        <Footer />
        </>
}

export default Admin;
