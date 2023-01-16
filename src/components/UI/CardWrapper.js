import classes from './CardWrapper.module.css'

const CardWrapper = props => {
	return <div className={classes.cards}>{props.children}</div>
}

export default CardWrapper
