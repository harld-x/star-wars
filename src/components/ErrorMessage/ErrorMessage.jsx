import React from 'react'

import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
	return (
		<>
			<p className={styles.text}>
			OOps! We are already trying to find a mistake.<br/>
			</p>	
		</>
	)
}

export default ErrorMessage
