import React, { useState } from 'react'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'


export const withErrorApi = View => {

	return props => {
	const [errorApi, setErrorApi] = useState(false)

		return (
			<>
				{errorApi 
					? <ErrorMessage/>
					: (
						<View
							setErrorApi={setErrorApi}
							{...props}
						/>	
					)
				}
			</>
		)
	}
}


// return (
// 		<>
// 		{
// 			errorApi 
// 			? <h2>Error</h2>
// 			: (
// 				<>
// 					<h1>Navigation</h1>
// 					{people && <PeopleList people={people}/> }  
// 				</>
// 			)	
// 		}
// 		</>
// 	)