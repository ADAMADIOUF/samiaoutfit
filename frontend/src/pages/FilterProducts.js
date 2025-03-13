import React, { useState } from 'react'

const FilterProducts = () => {
  const [filter, setFilter] = useState('Tous')

  const products = [
    {
      id: 1,
      name: 'Cardigan Ouvert',
      price: '200,00 $',
      image: '/assets/1.jpg',
      description: 'Images du produit',
      category: 'En Promotion',
    },
    {
      id: 2,
      name: 'Produit Variable',
      price: '200,00 $',
      image: '/assets/2.jpg',
      description: 'Images du produit',
      category: 'Les Mieux Notés',
    },
    {
      id: 3,
      name: 'Jean Ajusté Matchbox',
      price: '320,00 $',
      image: '/assets/3.jpg',
      description: 'Images du produit',
      category: 'En Promotion',
    },
    {
      id: 4,
      name: 'Cardigan Ouvert',
      price: '200,00 $',
      image: '/assets/4.jpg',
      description: 'Images du produit',
      category: 'En Vedette',
    },
    {
      id: 5,
      name: 'Blouson en Cuir',
      price: '500,00 $',
      image: '/assets/5.jpg',
      description: 'Images du produit',
      category: 'En Vedette',
    },
    {
      id: 6,
      name: 'Chaussures de Course',
      price: '120,00 $',
      image: '/assets/6.jpg',
      description: 'Images du produit',
      category: 'En Vedette',
    },
  ]

  // Numéro WhatsApp (remplacez par votre vrai numéro)
  const whatsappNumber = '+221774088655'

  // Filtrer les produits en fonction de la catégorie sélectionnée
  const filteredProducts =
    filter === 'Tous'
      ? products
      : products.filter((product) => product.category === filter)

  return (
    <div className='filter-products'>
      <h2>Produits en Vedette</h2>

      {/* Menu de filtrage */}
      <div className='filter-menu'>
        <button onClick={() => setFilter('Tous')}>Tous</button>
        <button onClick={() => setFilter('En Promotion')}>En Promotion</button>
        <button onClick={() => setFilter('Les Mieux Notés')}>
          Les Mieux Notés
        </button>
        <button onClick={() => setFilter('En Vedette')}>En Vedette</button>
      </div>

      {/* Affichage des produits filtrés */}
      <div className='product-list'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='product-card'>
            <div className='product-image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className='price'>{product.price}</span>
              {/* Bouton d'achat via WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20l'achat%20du%20${product.name}%20au%20prix%20de%20${product.price}`}
                target='_blank'
                rel='noopener noreferrer'
                className='whatsapp-button'
              >
                Acheter sur WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterProducts
