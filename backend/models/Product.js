import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    
    category: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
      required: true,
    },
   
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    
    sizes: {
      type: [String], 
      default: ['S', 'M', 'L', 'XL'], 
    },
    colors: {
      type: [String], 
      default: ['Red', 'Blue', 'Green'], 
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)
export default Product
