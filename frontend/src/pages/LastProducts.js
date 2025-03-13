import React, { useState } from 'react'
import { useGetAllproductsQuery } from '../slices/productApiSlice'
import { Link } from 'react-router-dom'
import FormatCurrency from '../components/FormatCurrency'

const LastProduct = () => {
  const [keyword] = useState('')
  const {
    data: productsData,
    error,
    isLoading: loading,
  } = useGetAllproductsQuery({ keyword })

  // Numéro WhatsApp (remplacez par votre numéro réel)
  const whatsappNumber = '+221774088655'

  return (
    <div className='last-product'>
      <div className='left-side'>
        <img
          src='https://i.pinimg.com/474x/e0/57/2f/e0572fb5971aa76e5481666a5cfb52b6.jpg'
          alt='Grand Produit'
        />
        <div className='left-text'>
          <h2>Découvrez Notre Dernière Collection</h2>
          <p>
            Découvrez nos nouvelles arrivées et trouvez quelque chose qui
            correspond à votre style et à vos goûts.
          </p>
        </div>
      </div>

      <div className='right-side'>
        <h2>Produits en Vedette</h2>
        <div className='product-grid'>
          {productsData?.products
            ?.slice(-3) // Get the last 3 products
            .map((product) => (
              <div key={product.id} className='product-card'>
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
                  <span className='price'>{FormatCurrency(product.price)}</span>
                  {/* Bouton d'achat via WhatsApp */}
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
    </div>
  )
}

export default LastProduct
