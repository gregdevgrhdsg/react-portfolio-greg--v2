import React, { useState, useEffect, useRef } from 'react';
import './portfolio.css';
import Menu from './Menu';
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [filterCategory, setFilterCategory] = useState("All");
  const ref = useRef(null);

  useEffect(() => {
    const grid = ref.current;
    const cards = grid.querySelectorAll(".work__card");

    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 50}ms`;
      card.classList.add("fade-in");
    });
  }, [filterCategory]);

  // Fonction pour filtrer les éléments en fonction de la catégorie
  const filterItems = (category) => {
    setFilterCategory(category);
  }

  // Utiliser la variable de filtre pour filtrer les éléments affichés
  const filteredItems = Menu.filter((item) => {
    if (filterCategory === "All") return true;
    return item.category === filterCategory;
  });

  return (
    <section className="work__container__section" id="work">
      <h2 className="section__title">Recent works</h2>
      <div className="work__filters">
        {/* ... (votre code existant) */}
      </div>
      <div className="work__container grid" ref={ref}>
        {filteredItems.map((elem) => {
          const { id, image, title, category, button, link } = elem;
          return (
            <Link to={link} className="work__card-link" key={id}>
              {/* Vous enveloppez la carte dans un lien */}
              <div className="work__card fade-in">
                <div className="work__thumbail">
                  <img src={image} alt="imageProject" className="work__img" />
                  <div className="work__mask"></div>
                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  {link && (
                    <Link to={link} className="work__button">
                      <span className="icon_link work__button-icon">{button}</span>
                    </Link>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio;
