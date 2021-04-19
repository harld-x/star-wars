import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 
import UiButton from '../../Ui/UiButton/UiButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({
	getResouce, prevPage, nextPage, counterPage
}) => {

	const handleChangeNext = () => getResouce(nextPage)
	const handleChangePrev = () => getResouce(prevPage)

	return (
		<div className={styles.container}>
			<Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
				<UiButton
					text="Previous"
					onClick={handleChangePrev}
					disabled={!prevPage}
				/>
			</Link>
			<Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
				<UiButton 
					text="Next"
					onClick={handleChangeNext}
					disabled={!nextPage}
				/>
			</Link>
		</div>
	)
}


PeopleNavigation.propTypes = {
	getResouce: PropTypes.func,
	prevPage: PropTypes.string,
	nextPage: PropTypes.string,
	counterPage: PropTypes.number,
}

export default PeopleNavigation
