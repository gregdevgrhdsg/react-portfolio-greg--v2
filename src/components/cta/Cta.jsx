import React, { useState, useEffect } from 'react';
import './cta.css';

function RandomWordButton() {
  // Définir une liste de mots
  const words = ['Innovative', 'Imaginative','Original', 'Artistic','Visionary','Resourceful','Inventive',
  'Intuitive','Expressive','Artful','Inspiring','Original','Ingenious','Talented','Inspired','Original','Versatile','Artistic',
  'Creative','Imaginative'];

  // Définir un état pour stocker le mot sélectionné au hasard
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    selectRandomWord();
  }, []);

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
      <div className='form_button_container'>
        <div className='placeholder_scroll_fond'>
          <div className='backgroundform_cta'>{selectedWord || 'Hello'}</div>
          <button className="bouton__Scroll_Word color-1" onClick={scrollWords}> See my assets</button>
        </div>
      </div>
    </div>
  );
}

export default RandomWordButton;

