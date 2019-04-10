import React from 'react'
import styles from './index.module.less'

function Grid(props) {
	const {activeGirdId, content} = props
	return (
		<div className={styles.grid + ' ' + (activeGirdId == content && styles.active)}>{content}</div>
	)
}

export default Grid
