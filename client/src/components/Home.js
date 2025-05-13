// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to TasteBuds!</h1>
        <p>Delicious homemade meals crafted with love.</p>
        <a href="#menu" className="hero-button"><Link style={{color:'white',textDecoration:'none'}} to="/Dishes">Dishes</Link></a>
      </header>

      <section className="section about">
        <h2>About Us</h2>
        <p>
          TasteBuds is your go-to kitchen for authentic and flavorful dishes made from the freshest ingredients. Whether you're hosting a party or just craving something hearty, we’ve got your plate covered!
        </p>
      </section>

      <section id="menu" className="section menu">
        <h2>Our Specials</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src="/images/pasta.jpg" alt="Pasta" />
            <h3>Creamy Alfredo Pasta</h3>
          </div>
          <div className="menu-item">
            <img src="/images/curry.jpg" alt="Curry" />
            <h3>Spicy Chicken Curry</h3>
          </div>
          <div className="menu-item">
            <img src="/images/dessert.jpg" alt="Dessert" />
            <h3>Chocolate Lava Cake</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 TasteBuds. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
