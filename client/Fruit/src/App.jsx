import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Product from './components/Product'

function App() {
  const baseUrl = 'http://localhost:8000/'
  const [data, setData] = useState(null)
  const fetchData = async () => {
    try {
      const res = await axios.get(baseUrl)
      const data = res.data
      setData(data)
    } catch (error) {
      console.log('Error')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='products'>
      {data && data.map(item => <Product {...item} />)}
    </div>
  )
}

export default App
