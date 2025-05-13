import React from 'react';
import './Dishes.css';

const FoodMenu = () => {
  return (
    <section id="menu" className="section menu">
      <h2>Our Specials</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <div className="image-gallery">
            <img src="/images/somasa png.jpg" alt="Pasta 1" />
            <img src="/images/samosa2.webp" alt="Pasta 2" />
          </div>
          <h3>Spicy Samosa</h3>
        </div>

        <div className="menu-item">
          <div className="image-gallery">
            <img src="/images/noodels1.jpg" alt="Curry 1" />
            <img src="/images/nood2.webp" alt="Curry 2" />
          </div>
          <h3>Spicy Noodels</h3>
        </div>

        <div className="menu-item">
          <div className="image-gallery">
            <img src="/images/cake png.jpg" alt="Dessert 1" />
            <img src="/images/cake2.avif" alt="Dessert 2" />
          </div>
          <h3>Chocolate Lava Cake</h3>
        </div>

            <div className="menu-item">
          <div className="image-gallery">
            <img src="/images/cake png.jpg" alt="Dessert 1" />
            <img src="/images/cake2.avif" alt="Dessert 2" />
          </div>
          <h3>Chocolate Lava Cake</h3>
        </div>

            <div className="menu-item">
          <div className="image-gallery">
            <img src="/images/cake png.jpg" alt="Dessert 1" />
            <img src="/images/cake2.avif" alt="Dessert 2" />
          </div>
          <h3>Chocolate Lava Cake</h3>
        </div>

            <div className="menu-item">
          <div className="image-gallery">
            <img src="/images/cake png.jpg" alt="Dessert 1" />
            <img src="/images/cake2.avif" alt="Dessert 2" />
          </div>
          <h3>Chocolate Lava Cake</h3>
        </div>
        
      </div>

      
   
    </section>
  );
};

export default FoodMenu;
