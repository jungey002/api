import React from 'react';

import leftHero from './img/BMO.png';
import upperpic from './img/upper.png';
import upp from'./img/up.png'
import inn from'./img/in.png'
import an from'./img/a.png'
import bn from'./img/b.png'
import cn from'./img/c.png'
import dn from'./img/d.png'

const Home = () =>{
    return(

        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={leftHero}/>


                </div>
                <div className='hero-right col-md-6'>
                <h1 className='hero-heading'>Earn up to $3,500 cash back* by investing online</h1>
                    <p className='hero-description'>Tailored options for your goals: DIY or DIY with advice. Start earning today!</p>
                    <p className='hero-terms'>*Terms and condition apply.</p>
                    <button className='hero-button btn btn-primary'>Discover your option</button>
                     
                </div>
                

            </div>
            <div className='text-center welcome-area row'>
            <div className='row mt-3'></div>
                <h2>BMO Personal Banking</h2>
               
                <h3>What can we help you find today?</h3>
                <div className='col-md-2 '>
                    <div className='icon-area col-md-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
<p>Favourites</p>


                    </div>

                    </div>
                    <div className='col-md-2 '>
                    <div className='icon-area col-md-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
</svg>
<p>Bank Accounts</p>


                    </div>

                    </div>
                    <div className='col-md-2 '>
                    <div className='icon-area col-md-2 '>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
<p>Credit Cards</p>


                    </div>
                    
                </div>
                <div className='col-md-2 '>
                    <div className='icon-area col-md-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg>
<p>Mortgages</p>


                    </div>
                    
                </div>
                <div className='col-md-2 '>
                    <div className='icon-area col-md-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M0 15.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v-13a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v13a.5.5 0 0 1 .5.5h2a.5.5 0 0 1 .5-.5v-13a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v13a.5.5 0 0 1 .5.5h2a.5.5 0 0 1 .5-.5v-13a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v13a.5.5 0 0 1 .5.5h2a.5.5 0 0 1 .5-.5v-13a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1-.5-.5h-.5a.5.5 0 0 1-.5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1-.5-.5h-2a.5.5 0 0 1-.5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1-.5-.5h-2a.5.5 0 0 1-.5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
</svg>
<p>Investments</p>



                    </div>
                    
                </div>
                <div className='col-md-2 '>
                    <div className='icon-area col-md-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm1 0v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M3 3h10v10H3V3z"/>
</svg>
<p>Learning</p>





                    </div>
                    
                </div>




            <div >   
                   
            <div className='row' marginleft="20px">
                    <div className='col-md-4'>
                        <img className='img-fluid' src={upperpic} alt="Upper Image" />
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={upp} alt="Another Image" />
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={inn} alt="Another Image" />
                    </div>
                </div>
                
                
              
            </div>
            
            <div >   
            <div className='row mt-3'></div>
                   <div className='row'>
                           <div className='col-md-4'>
                               <img className='img-fluid' src={an} alt="Upper Image" />
                           </div>
                           <div className='col-md-4'>
                               <img className='img-fluid' src={bn} alt="Another Image" />
                           </div>
                           <div className='col-md-4'>
                               <img className='img-fluid' src={cn} alt="Another Image" />
                           </div>
                       </div>
                       
                     
                       <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <h2>Get our award-winning mobile banking app</h2>
          <p>Our app ranked #1 in Canada for digital money management. Enjoy 20+ features – from spending insights to global transfers.</p>
          <button className="main-button btn btn-primary">Explore features</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={dn} alt="Upper Image" />
        </div>
      
      
        <div className="app-buttons-container d-flex justify-content-center align-items-center">
      <a href="#" className="btn app-store-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="app-logo" />
        <span className="text">
          <span>Download on the</span>
          <br />
          <strong>App Store</strong>
        </span>
      </a>

      <a href="#" className="btn google-play-btn ms-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="app-logo" />
        <span className="text">
          <span>GET IT ON</span>
          <br />
          <strong>Google Play</strong>
        </span>
      </a>
    </div>

    </div>
  </div>
                       

    



                        
                   </div>

            
            
            </div>
        </div>
        
    );
}

export default Home;
