import './App.css'

function App() {
  
  return (
    <>
      <header className="App-header">
        <logo className = "title">Kal Restaurant - Taste the Authencity</logo>

        <navbar className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Contact</a>
        </navbar>

        </header>

      <div className="App">
        <h1>Welcome to Kal Restaurant!! - #1 Leading restuarant</h1>
        <p>Feel the home presence with us</p>
      </div>  

      <div className="about">
        <div className='section-title'>About Us</div>

        <p>At Kal Restaurant, we are passionate about delivering an unforgettable dining experience.
        Join us for a meal and discover why we're a favorite among food lovers. 
        We started this with small group of friends in a small town with passion to deliver amazing taste to everyone!!
        Come here and get attached with the authencity of the restaurant!</p>
      </div>

      <div className="menu">
        <div className='section-title'>Our Menu</div>
        <ul>
          <div className='card'>
                  <h3>Paneer Cashew Biryani - Rs.1299/-</h3>
                  <img src="https://media.istockphoto.com/id/1292443683/photo/hyderabadi-veg-paneer-dum-biryani-with-mixed-veggies-like-paneer-potato-carrots-peas-cooked.jpg?s=612x612&w=0&k=20&c=YYVlk9tJ0jqOKuWeUqjHXg2cpV_ZFaI7TxZayU3dyW4=" alt="paneer" width="600" height="400"/>
                  <p>Paneer cashew biryani with fine-grained cahews and fresh paneer with mouth-watering taste!</p>
          </div>
          <div className='card'>
                  <h3>Rayalaseema Bongu biryani - Rs.1599/-</h3>
                  <img src="https://b.zmtcdn.com/data/pictures/1/19483371/8615d93d35f826990e5497544823071f.jpg" alt="bongu" width="600" height="400"/>
                  <p>With the tradition and essence of rajhamundry, the bongu biryani is something special to try!</p>
          </div>
          <div className='card'>
                  <h3>Bhimavaram Mirapakaya Bajji(16 Pcs) - 1699/-</h3>
                  <img src="https://i.pinimg.com/736x/73/1f/62/731f62e17fc1b96315edcf7f9533503e.jpg" alt="mirchi" width="600" height="400"/>
                  <p>With spicy mirchi and culture from bhimavaram, adds a great taste with lot of elements that makes the day happier!</p>
          </div>
        </ul>
      </div>


      <div className='section-title'>Contact Us</div>
      <footer>
        <div className='footer-section'>Get in Touch
        <a href="">kalrestuarant@gmail.com</a>
        <p>+91 9876512345</p>
        </div>
        <p className='copyright'>&copy; 2025 Kal Restaurant. All rights reserved.</p>
      </footer>   
      
      
    </>
  )
}

export default App
