import React from 'react'

import imgArticle from '../assets/img/desktop/image-interactive.jpg';

import '../assets/css/Article.css'

export default function Article() {
  return (
    <section className="article">
      <img className="article--img"
      src={imgArticle} alt="aqui no"/>
      <div className="article__info">
        <h2 className="article__info--title">THE LEADER IN INTERACTIVE VR</h2>
        <p className="article__info--p">Founded in 2011, Loopstudios has been producing world-class virtual reality 
        projects for some of the best companies around the globe. Our award-winning 
        creations have transformed businesses through digital experiences that bind 
        to their brand.</p>
      </div>
    </section>
  )
}
