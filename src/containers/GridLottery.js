import React, {Component} from 'react'
import Grid from '../components/GridLottery/Grid'

// 宫格抽奖
class GirdLottery extends Component {
	state = {
		prizeList: ['1', '2', '3', '4', '5', '6'],
		runNumber: 0, // 总次数
		activeRunNumber: 0, // 当前次数
		activeGirdId: 0, // 当前选中
		prizeId: null
	}
	
	play = () => {
		this.setState({
			runNumber: 0,
			activeRunNumber: 0,
			activeGirdId: 0,
			prizeId: null
		}, () => {
			this.start()
		})
	}
	
	start = () => {
		const total = Math.ceil(Math.random() * 10) + 20
		this.setState({runNumber: total})
		const begin = setInterval(() => {
			const {prizeList, runNumber, activeRunNumber, activeGirdId} = this.state
			if (runNumber === activeRunNumber) {
				clearInterval(begin)
				this.setState({prizeId: activeGirdId}, () => {
					alert(this.state.prizeId)
				})
			} else {
				this.setState({activeGirdId: (activeRunNumber % prizeList.length) + 1})
				this.setState({activeRunNumber: activeRunNumber + 1})
			}
		}, 100)
	}
	
	render() {
		return (
			<div>
				{
					this.state.prizeList.map((item, index) => (
						<Grid activeGirdId={this.state.activeGirdId} content={item} key={index}/>
					))
				}
				<button onClick={this.play}>start</button>
			</div>
		)
	}
}

export default GirdLottery
