import React, { useState } from 'react'
import { useGetproductDetailQuery } from '../slices/productApiSlice'
import { useParams } from 'react-router-dom'
import FormatCurrency from '../components/FormatCurrency'

const SingleProduct = () => {
  const { id: productId } = useParams()
  const {
    data: product,
    refetch,
    isLoading: loading,
    error,
  } = useGetproductDetailQuery(productId)

  const whatsappNumber = '+221774088655' // Replace with your actual WhatsApp number

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [mainImage, setMainImage] = useState(product?.images[0] || '') // Main image state

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong. Please try again later.</p>

  const handleColorSelect = (color) => {
    setSelectedColor(color)
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  return (
    <div className='single-product'>
      {product && (
        <>
          <div className='single-product-images'>
            <img
              src={mainImage || product.images[0]} // Default to first image if mainImage is empty
              alt={product.name}
              className='single-main-product-image'
            />
            <div className='thumbnail-images'>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name}-thumbnail-${index}`}
                  onClick={() => setMainImage(image)} // Change the main image when clicked
                  className='thumbnail'
                />
              ))}
            </div>
          </div>

          <div className='single-product-details'>
            <h1>{product.name}</h1>
            <p className='single-product-description'>{product.description}</p>
            <span className='single-product-price'>
              {FormatCurrency(product.price)}
            </span>

            <div className='single-product-category'>
              <strong>Category:</strong> {product.category}
            </div>

            <div className='product-sizes'>
              <strong>Available Sizes:</strong>
              <ul>
                {product.sizes.map((size) => (
                  <li
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={selectedSize === size ? 'selected' : ''}
                    style={{
                      cursor: 'pointer',
                      padding: '10px',
                      margin: '5px',
                      borderRadius: '5px',
                      backgroundColor:
                        selectedSize === size ? '#f0f0f0' : 'transparent',
                    }}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>

            <div className='product-colors'>
              <strong>Available Colors:</strong>
              <ul
                style={{ display: 'flex', listStyleType: 'none', padding: 0 }}
              >
                {product.colors.map((color, index) => (
                  <li
                    key={index}
                    onClick={() => handleColorSelect(color)}
                    className={selectedColor === color ? 'selected' : ''}
                    style={{
                      backgroundColor: color,
                      cursor: 'pointer',
                      padding: '10px',
                      margin: '5px',
                      borderRadius: '50%',
                    }}
                  />
                ))}
              </ul>
            </div>

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
        </>
      )}
    </div>
  )
}

export default SingleProduct
