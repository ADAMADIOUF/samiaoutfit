import React from 'react'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Robe Élégante',
      price: '45€',
      image:
        'https://i.pinimg.com/474x/f8/68/31/f86831fb6a4bfee3c460c56370c41a9f.jpg',
    },
    {
      id: 2,
      name: 'Pantalon Chic',
      price: '35€',
      image:
        'https://i.pinimg.com/474x/31/b6/8c/31b68c37d7acdc204c821d9d6bc9e601.jpg',
    },
    {
      id: 3,
      name: 'Blouse Moderne',
      price: '40€',
      image:
        'https://i.pinimg.com/474x/39/96/a4/3996a4e58a5f6d00326eb97e4b1b2078.jpg',
    },
    {
      id: 4,
      name: 'Blouse Moderne',
      price: '40€',
      image:
        'https://i.pinimg.com/474x/44/6e/62/446e62cebdff8e491b44554a71194fcc.jpg',
    },
  ]

  // WhatsApp number (replace with your actual number)
  const whatsappNumber = '+221774088655'

  return (
    <div className='featured-products'>
      <h2>Produits en vedette</h2>
      <div className='products-container'>
        {products.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.image} alt={product.name} />
            <div className='product-info'>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              {/* WhatsApp Buy Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20buying%20the%20${product.name}%20for%20${product.price}`}
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
