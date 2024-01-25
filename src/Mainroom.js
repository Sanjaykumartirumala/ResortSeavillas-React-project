/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import bd1 from './images/bedroom1.jpg';
import bd2 from './images/img2.jpg';
import bd3 from './images/img3.jpg';
import sm1 from'./images/personalswimmingpool2.jpg';
import sm2 from './images/varndasiting.jpg';
import sm3 from './images/veiw.jpg';
import './mainroom.css';
function App() {
  return (
      <div className="App">
        <header class = "header" id = "header">
            <div class = "head-top">
            </div>

            <div class = "head-bottom flex">
                <h1>WELCOME TO SEA VILLAS</h1>
                <br></br>
                <h2>GLAD TO SEE YOU ON OUR WEBSITE</h2>
                
            </div>
        </header>
        <div className='twoblocks'>
        <section class = "rooms" id = "rooms">
            <div class = "title">Rooms
            </div>
            <div class = "rooms-container">
               
                <article class = "room">
                    <div class = "room-image">
                        <img src={bd1} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Luxury Rooms</h3>
                        <p>At our resort, we understand that true luxury lies in the details. Our luxury rooms are designed to provide you with an exceptional and immersive experience, where comfort, style, and sophistication come together to create an oasis of opulence.</p>
                        
                        <br></br><p>As you step into one of our luxury rooms, you'll be greeted by a sense of grandeur and space. These generously appointed accommodations are designed with a tasteful blend of contemporary design and classic aesthetics. Expansive windows invite natural light, offering picturesque views of our resort's lush surroundings.</p>
                        <button type = "button" class = "btn">book now</button>
                    </div>
                </article>
                
                <article class = "room">
                    <div class = "room-image">
                        <img src={bd2} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Deluxe Rooms</h3>
                       <p>At our resort, we believe that every guest deserves a touch of luxury, even in our standard accommodations. Our deluxe rooms offer a perfect blend of comfort, style, and functionality, ensuring that your stay is relaxing and memorable.</p>
                        
                        <br></br><p>Many of our deluxe rooms feature a private balcony or patio, offering a quiet corner to enjoy your morning coffee or a glass of wine in the evening. The views of our resort's natural beauty add a touch of serenity to your stay.</p>
                        <button type = "button" class = "btn" >book now</button>
                    </div>
                </article>
               
                <div class = "room">
                    <div class = "room-image">
                        <img src={bd3} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Standard Rooms</h3>
                        <p>At our resort, we believe that every guest deserves a welcoming and comfortable space to call their own. Our standard rooms are thoughtfully designed to provide you with a cozy retreat, offering all the essentials for a pleasant stay.</p>
                        <br>
                        </br>
                        <p>Relax in a comfortable queen-sized or twin beds, outfitted with soft linens and plush pillows. It's the perfect spot to rest after a day of exploring our resort and the surrounding area.Relax in a comfortable queen-sized or twin beds, outfitted with soft linens and plush pillows. It's the perfect spot to rest after a day of exploring our resort and the surrounding area.</p>
                        <button type = "button" class = "btn">book now</button>
                    </div>
                </div>
                <article class = "room">
                    <div class = "room-image">
                        <img src={sm1} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Private swimming pool</h3>
                       <p> A swimming pool is a recreational facility designed for swimming and other water-based activities, offering a refreshing and enjoyable environment for exercise, relaxation, and social gatherings.</p>
                        
                        <br></br><p>A beautiful swimming pool is typically characterized by its aesthetic appeal and design elements. It often incorporates visually pleasing features</p>
                        <button type = "button" class = "btn" >book now</button>
                    </div>
                </article>
                <article class = "room">
                    <div class = "room-image">
                        <img src={sm2} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Corners</h3>
                        <p>Resort corners often offer breathtaking views of natural landscapes, such as pristine beaches, lush gardens, or panoramic vistas. These views provide a sense of tranquility and escape from everyday life.</p>                        
                        <br></br><p>Thoughtful lighting, including soft ambient illumination and perhaps some decorative lanterns, can make the resort corner equally enchanting during the evening hours.</p>
                        <button type = "button" class = "btn" >book now</button>
                    </div>
                </article>
                <article class = "room">
                    <div class = "room-image">
                        <img src={sm3} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Nature view</h3>
                       <p>At our resort, we believe that every guest deserves a touch of luxury, even in our standard accommodations. Our deluxe rooms offer a perfect blend of comfort, style, and functionality, ensuring that your stay is relaxing and memorable.</p>
                        
                        <br></br><p>Many of our deluxe rooms feature a private balcony or patio, offering a quiet corner to enjoy your morning coffee or a glass of wine in the evening. The views of our resort's natural beauty add a touch of serenity to your stay.</p>
                        <button type = "button" class = "btn" >book now</button>
                    </div>
                </article>
              
            </div>
        </section>
      
      </div>

   </div>    
  ); 
}

export default App;
