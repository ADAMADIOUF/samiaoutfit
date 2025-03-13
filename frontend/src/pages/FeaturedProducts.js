import React ,{useState}from 'react'
import { useGetAllproductsQuery } from '../slices/productApiSlice'
import { Link } from 'react-router-dom'
import FormatCurrency from '../components/FormatCurrency'

const FeaturedProducts = () => {
  
   const [keyword] = useState('')
  const {
    data: productsData,
    error,
    isLoading: loading,
  } = useGetAllproductsQuery({ keyword }) 
  
  const whatsappNumber = '+221774088655'

  return (
    <div className='featured-products'>
      <h2>Produits en vedette</h2>
      <div className='products-container'>
        {productsData?.products?.map((product) => (
          <div key={product.id} className='product-item'>
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
              <p>{FormatCurrency(product.price)}</p>
              {/* WhatsApp Buy Button */}
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

export default FeaturedProducts
