import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import logo from '../assets/brittanyscraftbox.jpg'
import frontBanner from '../assets/atfarmersmarket3.jpg'
import { ElfsightWidget } from 'react-elfsight-widget';
import fbook from '../assets/403-4038633_fb-facebook-hd-png-download.png'
import igram from '../assets/Instagram_logo_2022.svg.png'




export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Header/>
      <main className={styles.mainhome} >
        <Container>
        <Row>
          <Col md={12}>
            <Image src={logo} />
           </Col>
        </Row>
          <Row>
          <Col md={12}>
          <h1>Brittany's Craft Box</h1>

          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <p className={styles.topptags}>The perfect place for any and all custom craft creations! Whether you're looking for something scary for Halloween or something sweet for that special someone on Valentine's Day, we've got you covered.</p>

          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <p className={styles.topptags}>Check out a sample of our latest crafts and creations. If you don't see exactly what you're looking for, it doesn't mean we don't have it or can't make it. Reach out to us about custom crafted products made just for YOU!</p>

          </Col>

        </Row>
        <Row>
          <Col md={12}>
            <Button className={styles.topbtn} href="tel:5756408747">Call To Place an Order 575-640-8747</Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className={styles.ptags}>Come Check Us Out At The Farmers Market</p>
          </Col>
        </Row>
        <Row className={styles.frontbanner}>
          <Col md={12} >
           
           </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className={styles.ptags}>We Support Local Business and Hope You Will Too</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
        <ElfsightWidget widgetId="fe5e613d-bd3e-49e4-865a-06ce68e71f60" />;
        </Col>
        </Row>
        <Row className={styles.purplerow}>
          <Col md={6}>
          <p className={styles.ptags}>"I got a pen for my baby brother for his birthday and it's way better than expected! Thank you so much!"</p>
          <p className={styles.smallptags}>- Angelica Sandoval <br/> Happy Customer</p>
          </Col>
          <Col md={6}>
            <p className={styles.ptags}>"Make the order already! What are you waiting for, this girl has skills!"</p>
            <p className={styles.smallptags}>- Ricardo Herrera <br/> Happy Customer</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 className={styles.headertags}>Crafts For Any Occasion</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p className={styles.ptags}>Who You Gonna Call?</p>
            <section className={styles.section1}></section>
{/*             <Image className={styles.bottompics} src={gbusters} alt='ghostbuster' />
 */}          </Col>
          <Col md={4}>
            <p className={styles.ptags}>Tis the season</p>
            <section className={styles.section2}></section>
{/*             <Image className={styles.bottompics} src={nativity} alt='nativity cup' />
 */}          </Col>
          <Col md={4}>
            <p className={styles.ptags}>Be My Valentine</p>
            <section className={styles.section3}></section>
{/*             <Image className={styles.bottompics} src={valentine} alt='valentine package' />
 */}
          </Col>
        </Row>
        <Row className={styles.rowmargin}>
          <Col md={6}>
          <p className={styles.ptags}>Want to place an order? Easy, just email us at <a href="mailto:frombrittscrafts@gmail.com" >frombrittscrafts@gmail.com</a></p>
            
          </Col>
          <Col  md={6}>
          
            <p className={styles.ptags}>Visit us on Facebook and Instagram</p>
            <section className={styles.mediacontainer}>
            <Image className={styles.socmedia} src={fbook} alt='facebook' />
            <Image className={styles.socmedia} src={igram} alt='instagram' />
            </section>
          </Col>
        </Row>
        <Row className={styles.rowmargin}>
          <Col md={12}>
            <h1 className={styles.headertags}>At the Farmer's Market in Las Cruces, NM</h1>
          </Col>
        </Row>
        <Row>
          <p className={styles.ptags}>Use the map below for directions</p>
        </Row>
        <Row>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12730.923017565212!2d-106.78128360291969!3d32.31223530058113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fae31fcb749621%3A0x85ff0339fe286aee!2sFarmers%20%26%20Crafts%20Market%20of%20Las%20Cruces!5e0!3m2!1sen!2sus!4v1689211446991!5m2!1sen!2sus" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </Row>
        <Row>
          <Col md={12}>
            <p className={styles.ptags}>Did you find what you were looking for? Give us a call and ask about our custom products we design just for you!</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Button className={styles.topbtn} href="tel:5756408747" >Give Us a Call</Button>

          </Col>
        </Row>
        </Container>
      </main>
      <br/>
      <br/>   
    </>
  )
}


