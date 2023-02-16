import React, { useState } from 'react';
import './cta.css';

function RandomWordButton() {
  // Définir une liste de mots
  const words = ['Innovative', 'Imaginative','Original', 'Artistic','Visionary','Resourceful','Inventive',
  'Intuitive','Expressive','Artful','Inspiring','Original','Ingenious','Talented','Inspired','Original','Versatile','Artistic',
  'Creative','Imaginative'];

  // Définir un état pour stocker le mot sélectionné au hasard
  const [selectedWord, setSelectedWord] = useState('');

  // Fonction pour sélectionner un mot au hasard à partir de la liste
  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);
  }

  // Fonction pour afficher les mots de la liste avant l'affichage final
  const scrollWords = () => {
    words.forEach((word, index) => {
      setTimeout(() => {
        setSelectedWord(word);
      }, index * 100);
    });
    // Afficher le mot sélectionné au hasard après le défilement
    setTimeout(selectRandomWord, words.length * 100);
  }


  return (
    <div className='containe_scroll_word'>
        <div>
          <h2 className="section__title">Assets</h2>
          </div>
      <button className="bouton__Scroll_Word" onClick={scrollWords}> See my assets</button>
      <div className='placeholder_scrol'>
      <p className="scrolling-word"> {selectedWord}</p>
      </div>
    </div>
  );
}

export default RandomWordButton;
