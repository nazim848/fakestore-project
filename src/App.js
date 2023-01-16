import { useEffect, useState } from 'react'
import Container from './components/layout/Container'
import Products from './components/products/Products'
import classes from './App.module.css'

function App() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	return (
		<Container>
			<h2 className={classes['section-title']}>Our Latest Products</h2>
			<Products products={products} />
		</Container>
	)
}

export default App
