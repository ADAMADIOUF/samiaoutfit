import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useGetAllproductsQuery } from '../slices/productApiSlice'
import { useGetUsersQuery } from '../slices/userApiSlice'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const DashboardScreen = () => {
  const [inStock, setInStock] = useState('')

  // Fetch products data
  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useGetAllproductsQuery({ inStock })
  const products = productsData?.products || []
  const totalProducts = products.length
  const inStockCount = products.filter(
    (product) => product.countInStock > 0
  ).length

  // Fetch users data
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery()
  const totalUsers = usersData?.length || 0

  // Data for the chart
  const data = {
    labels: ['In-Stock Products', 'Total Products', 'Total Users'],
    datasets: [
      {
        label: 'Counts',
        data: [inStockCount, totalProducts, totalUsers],
        backgroundColor: ['#3b82f6', '#10b981', '#6366f1'],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Inventory and User Dashboard Summary',
      },
    },
  }

  return (
    <div>
      <h2>Inventory Management Dashboard</h2>
      {productsLoading || usersLoading ? (
        <p>Loading...</p>
      ) : productsError || usersError ? (
        <p>Error loading data</p>
      ) : (
        <>
          <ul>
            <li>In-Stock Products: {inStockCount}</li>
            <li>Total Products: {totalProducts}</li>
            <li>Total Users: {totalUsers}</li>
          </ul>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Bar data={data} options={options} />
          </div>
        </>
      )}
    </div>
  )
}

export default DashboardScreen
