
import React from 'react'

import { useLocation } from 'react-router-dom'

import styles from './NotFoundPage.module.css'

import img from './img/not-found1.png'


const NotFoundPage = () => {

	let location = useLocation();


	return (
		<>
			<img className={styles.img} src={img} alt="Not Found"/>
			<p className={styles.text}>No Match for <u>{location.pathname}</u></p>
		</>
	)
}


export default NotFoundPage
