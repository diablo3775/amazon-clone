import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <a href="https://www.primevideo.com/">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                </a>

                <div className="home__row">
                 <Product 
                 id='7775'
                 title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                 price={29.95} 
                 image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg' 
                 rating={5}/>
                 <Product 
                 id="6775"
                 title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                 price={240.45}
                 rating={4}
                 image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                 />
                 
                </div>

                <div className="home__row">
                 <Product
                 id='5775'
                 title="Smasung LED Watch"
                 price={200.85}
                 rating={4}
                 image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                  />
                 <Product
                 id='3775'
                 title="Apple Ipad Pro Max(12.5 inch,256 gb)"
                 price={1999.95}
                 rating={5}
                 image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                  />
                  <Product
                  id='4775'
                  title='Bluetooth Speaker'
                price={299.85}
                  rating={4}
                  image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                   />
                </div>

                <div className="home__row">
                  
                   <Product
                 id='8775'
                 title="Samsung Curved Led Gaming Monitor Ultra-Wide"
                 price={849.95}
                 rating={4}
                 image='https://5.imimg.com/data5/DC/WH/PB/SELLER-2080525/samsung-24-inch-59-8cm-super-slim-curved-monitor-c24f392-500x500.jpg' 
                 />
                   <Product
                 id='8775'
                 title="ALIENWARE AREA-51M R2 GAMING LAPTOP"
                 price={2555.95}
                 rating={4}
                 image='https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Alienware/17_area-51m_r2_non-touch_non-tobii/awarea-51mnt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&wid=3602&hei=3004&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=3602,3004' 
                 />
                </div>
            </div>
        </div>
    )
}

export default Home
