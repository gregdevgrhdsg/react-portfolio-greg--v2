import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [filterCategory, setFilterCategory] = useState("All");

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
      <span className="work__item"onClick={() => filterItems("All")}>All</span>
      <span className="work__item" onClick={() => filterItems("Ui/Ux")}>Ui/Ux</span>
      <span className="work__item"onClick={() => filterItems("Print")}>Print</span>
      <span className="work__item"onClick={() => filterItems("Logo")}>Logo</span>
      <span className="work__item"onClick={() => filterItems(" Branding")}>Branding</span>
      <span className="work__item"onClick={() => filterItems("Illustration")}>Illustration</span>
    </div>
    <div className="work__container grid">
    {filteredItems.map((elem) => {
        const {id, image, title, category, button, link} = elem;
        return(
          <div className="work__card" key={id}>
          <div className="work__thumbail">
            <img src={image} alt="imageProject" className="work__img" />
            <div className="work__mask"></div>
            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <Link to={link} className="work__button">
              <span className="icon_link work__button-icon">{button}</span>
            </Link>
          </div>
        </div>
      )
    })}
  </div>
</section>
  )
}

export default Portfolio