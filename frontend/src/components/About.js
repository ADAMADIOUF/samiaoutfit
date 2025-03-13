import React from 'react'

const About = () => {
  return (
    <div className='about-page'>
      <div className='about-header'>
        <h1>À propos de Samia Outfit</h1>
        <p>Découvrez notre histoire et notre engagement envers la mode.</p>
      </div>

      <div className='about-content'>
        <div className='about-section'>
          <h2>Notre Mission</h2>
          <p>
            Chez Samia Outfit, nous nous engageons à offrir des vêtements
            élégants et abordables qui reflètent votre style unique. Notre
            mission est de vous proposer des collections tendances tout en
            privilégiant la qualité et le confort.
          </p>
        </div>

        <div className='about-section'>
          <h2>Notre Histoire</h2>
          <p>
            Fondée en 2025, Samia Outfit est née de la passion pour la mode et
            du désir d’offrir des vêtements modernes et accessibles à tous.
            Depuis notre création, nous avons grandi grâce à notre engagement
            envers nos clients et notre amour du design.
          </p>
        </div>

        <div className='about-section'>
          <h2>Pourquoi nous choisir ?</h2>
          <ul>
            <li>Produits de haute qualité</li>
            <li>Prix abordables</li>
            <li>Service client réactif</li>
            <li>Livraison rapide</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
