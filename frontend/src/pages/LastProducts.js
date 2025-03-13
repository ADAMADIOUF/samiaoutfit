import React from 'react'

const LastProduct = () => {
  const products = [
    {
      id: 1,
      name: 'Produit 1',
      price: '200,00 $',
      image:
        'https://i.pinimg.com/474x/0f/26/78/0f26783e8219ac621dec6ef60dd3b48c.jpg',
    },
    {
      id: 2,
      name: 'Produit 2',
      price: '150,00 $',
      image: '/assets/7.jpg',
    },
    {
      id: 3,
      name: 'Produit 3',
      price: '120,00 $',
      image: '/assets/8.jpg',
    },
    {
      id: 4,
      name: 'Produit 4',
      price: '180,00 $',
      image: '/assets/9.jpg',
    },
    {
      id: 5,
      name: 'Produit 5',
      price: '220,00 $',
      image: '/assets/10.jpg',
    },
    {
      id: 6,
      name: 'Produit 6',
      price: '250,00 $',
      image:
        'https://i.pinimg.com/474x/68/ca/45/68ca45c6f6e84364411adb3e7ff20d31.jpg',
    },
  ]

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
          {products.map((product) => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.name} />
              <div className='product-info'>
                <h3>{product.name}</h3>
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
    </div>
  )
}

export default LastProduct
