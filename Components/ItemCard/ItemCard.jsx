import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.scss'
import Button from '../Button/Button'

import smartIcon from '../../Img/Icons/smart-icon.svg'
import payIcon from '../../Img/Icons/pay-badge-icon.svg'

const ItemCard = props => {
	const navigate = useNavigate()

	// Function to sanitize the title for the URL
	const sanitizeTitle = title => {
		return title
			.toLowerCase() // Convert to lowercase
			.replace(/ą/g, 'a')
			.replace(/ć/g, 'c')
			.replace(/ę/g, 'e')
			.replace(/ł/g, 'l')
			.replace(/ń/g, 'n')
			.replace(/ó/g, 'o')
			.replace(/ś/g, 's')
			.replace(/ź/g, 'z')
			.replace(/ż/g, 'z')
			.replace(/\s+/g, '-') // Replace spaces with dashes
			.replace(/[^a-z0-9-]/g, '') // Remove special characters
	}

	// Handle card click
	const handleCardClick = () => {
		const sanitizedTitle = sanitizeTitle(props.title)
		navigate(`/oferta/${sanitizedTitle}/${props.id}`)
	}	

	return (
		<div className={styles.cardWrapper} onClick={handleCardClick}>
			<div className={styles.imgWrapper}>
				<img src={props.img} alt={props.alt} />
			</div>
			<div>
				<ul className={styles.cardText}>
					<li className={styles.price}>{props.price} zł</li>
					<li>
						<img src={smartIcon} alt='Ikonka smart' />
					</li>
					<li className={styles.itemTitle}>{props.title}</li>
					<li>
						zapłać później z <img src={payIcon} alt='Ikonka pay' className={styles.payIcon} />
					</li>
					<li>{props.bought} osób kupiło</li>
				</ul>
			</div>
		</div>
	)
}

export default ItemCard
