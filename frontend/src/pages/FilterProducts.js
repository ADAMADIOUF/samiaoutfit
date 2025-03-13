import React, { useState } from 'react'
import { useGetAllproductsQuery } from '../slices/productApiSlice'
import { Link } from 'react-router-dom'
import FormatCurrency from '../components/FormatCurrency'

const FilterProducts = () => {
  const [filter, setFilter] = useState('Tous')

  const [keyword] = useState('')
  const {
    data: productsData,
    error,
    isLoading: loading,
  } = useGetAllproductsQuery({ keyword })

  const whatsappNumber = '+221774088655'

  // Extraction des catégories uniques
  const categories = [
    'Tous',
    ...new Set(productsData?.products?.map((p) => p.category)),
  ]

  // Filtrer les produits selon la catégorie sélectionnée
  const filteredProducts =
    filter === 'Tous'
      ? productsData?.products
      : productsData?.products?.filter((product) => product.category === filter)

  return (
    <div className='filter-products'>
      <h2>Produits en Vedette</h2>

      {/* Menu de filtrage dynamique */}
      <div className='filter-menu'>
        {categories.map((category, index) => (
          <button key={index} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Liste des produits */}
      <div className='product-list'>
        {filteredProducts?.map((product) => (
          <div key={product._id} className='product-card'>
            <div className='product-image'>
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className='image-front'
                />
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className='image-hover'
                  />
                )}
              </Link>
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className='price'>{FormatCurrency(product.price)}</span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Salut,%20Je%20suis%20intéressé(e)%20à%20acheter%20le%20${
                  product.name
                }%20pour%20${FormatCurrency(product.price)}`}
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
