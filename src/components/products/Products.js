import Card from '../UI/Card'
import CardWrapper from '../UI/CardWrapper'

const Products = props => {
	return (
		<CardWrapper>
			{props.products.map(product => (
				<Card
					key={product.id}
					image={product.image}
					category={product.category}
					title={product.title}
					description={product.description}
					rating={product.rating.rate}
					ratingCount={product.rating.count}
					price={product.price}
				/>
			))}
		</CardWrapper>
	)
}

export default Products
