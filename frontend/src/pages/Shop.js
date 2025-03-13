import React from 'react'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Open Front Cardigan',
      price: '$200.00',
      image: '/assets/1.jpg',
    },
    {
      id: 2,
      name: 'Variable Product',
      price: '$200.00',
      image: '/assets/2.jpg',
    },
    {
      id: 3,
      name: 'Matchbox Fit Jeans',
      price: '$320.00',
      image: '/assets/3.jpg',
    },
    {
      id: 4,
      name: 'Slim Fit Shirt',
      price: '$150.00',
      image: '/assets/4.jpg',
    },
    {
      id: 5,
      name: 'Classic Blazer',
      price: '$350.00',
      image: '/assets/5.jpg',
    },
    {
      id: 6,
      name: 'Trendy Sneakers',
      price: '$120.00',
      image: '/assets/6.jpg',
    },
    {
      id: 7,
      name: 'Trendy Sneakers',
      price: '$120.00',
      image: '/assets/7.jpg',
    },
    {
      id: 8,
      name: 'Trendy Sneakers',
      price: '$120.00',
      image: '/assets/8.jpg',
    },
    {
      id: 9,
      name: 'Trendy Sneakers',
      price: '$120.00',
      image: '/assets/6.jpg',
    },
    {
      id: 10,
      name: 'Trendy Sneakers',
      price: '$120.00',
      image: '/assets/10.jpg',
    },
  ]

  const whatsappNumber = '+221774088655' // Replace with your actual WhatsApp number

  return (
    <div className='shop'>
      <div className='shop-header'>
        <h2>Bienvenue dans notre boutique</h2>
        <p>Découvrez les dernières tendances et styles pour vous !</p>
      </div>

      <div className='shop-products'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <div className='product-image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              <span className='price'>{product.price}</span>
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20buy%20${encodeURIComponent(
                  product.name
                )}%20for%20${encodeURIComponent(product.price)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='whatsapp-button'
              >
                Acheter via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
