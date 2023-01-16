import classes from './Card.module.css'

const Card = props => {
	return (
		<div className={classes.card}>
			<a className={classes.image} href="#">
				<img src={props.image} alt={props.title} width="150" />
			</a>
			<a href="#" className={classes.cat}>
				{props.category}
			</a>
			<h3 className={classes.title}>
				<a href="#">{props.title}</a>
			</h3>
			<p className={classes.desc}>{props.description.slice(0, 60)}...</p>
			<div className={classes.rating}>
				<span className={classes.avg}>{props.rating}</span>
				<span
					className={classes.stars}
					style={{ '--rating': props.rating }}
				></span>
				<span className={classes.count}>({props.ratingCount})</span>
			</div>
			<div className={classes.price}>${props.price}</div>
		</div>
	)
}

export default Card
