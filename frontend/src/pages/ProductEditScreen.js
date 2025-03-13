import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  useGetproductDetailQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from '../slices/productApiSlice'

import Loader from '../components/Loading'
import Message from '../components/Error'

const ProductEditScreen = () => {
  const { id: productId } = useParams()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const [images, setImages] = useState([])

  const [category, setCategory] = useState('')

  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const {
    data: product,
    isLoading,
    error,
  } = useGetproductDetailQuery(productId)
  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation()
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (product) {
      setName(product.name)
      setPrice(product.price)

      setImages(product.images)

      setCategory(product.category)

      setCountInStock(product.countInStock)
      setDescription(product.description)
      setColors(product.colors || [])
      setSizes(product.sizes || [])
    }
  }, [product])

  const submitHandler = async (e) => {
    e.preventDefault()
    const updatedProduct = {
      productId,
      name,
      price,

      images,

      category,

      countInStock,
      description,
      colors,
      sizes,
    }
    const result = await updateProduct(updatedProduct)
    if (result.error) {
      toast.error(result.error)
    } else {
      toast.success('Produit mis à jour')
      navigate('/admin/productlist')
    }
  }

  const uploadFileHandler = async (e) => {
    const formData = new FormData()
    for (let i = 0; i < Math.min(e.target.files.length, 5); i++) {
      formData.append('images', e.target.files[i])
    }

    try {
      const res = await uploadProductImage(formData).unwrap()
      const uploadedImages = res.images
      setImages((prevImages) => [...prevImages, ...uploadedImages])
      toast.success(res.message)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  const deleteImageHandler = (index) => {
    const updatedImages = images.filter((_, i) => i !== index)
    setImages(updatedImages)
  }

  return (
    <div className='edit-product-container'>
      <Link to={`/admin/productlist`} className='btn-back'>
        Retour
      </Link>
      <div className='edit-product-title'>
        <h1>Modifier le produit</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <form onSubmit={submitHandler} className='edit-product-form'>
            <div className='form-group'>
              <label htmlFor='name'>Nom</label>
              <input
                type='text'
                id='name'
                placeholder='Entrez le nom'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='price'>Prix</label>
              <input
                type='number'
                id='price'
                placeholder='Entrez le prix'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='images'>Images</label>
              <input
                type='file'
                id='images'
                multiple
                onChange={uploadFileHandler}
              />
              {images && images.length > 0 && (
                <div className='image-preview'>
                  {images.map((image, index) => (
                    <div key={index} className='image-item'>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className='img-thumbnail'
                      />
                      <button
                        type='button'
                        className='btn-delete'
                        onClick={() => deleteImageHandler(index)}
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='countInStock'>Quantité en stock</label>
              <input
                type='number'
                id='countInStock'
                placeholder='Entrez la quantité en stock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='category'>Catégorie</label>
              <input
                type='text'
                id='category'
                placeholder='Entrez la catégorie'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                id='description'
                placeholder='Entrez la description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='colors'>Couleurs</label>
              <input
                type='text'
                id='colors'
                placeholder='Entrez les couleurs (séparées par des virgules)'
                value={colors.join(', ')}
                onChange={(e) =>
                  setColors(e.target.value.split(',').map((c) => c.trim()))
                }
              />
            </div>
            <div className='form-group'>
              <label htmlFor='sizes'>Tailles</label>
              <input
                type='text'
                id='sizes'
                placeholder='Entrez les tailles (séparées par des virgules)'
                value={sizes.join(', ')}
                onChange={(e) =>
                  setSizes(e.target.value.split(',').map((s) => s.trim()))
                }
              />
            </div>
            <button type='submit' className='btn-update'>
              Mettre à jour
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ProductEditScreen
