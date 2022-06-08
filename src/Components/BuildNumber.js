import React from 'react';
import * as API from '../Components/API';
import ConsoleLog from '../Pages/ShowConsoleLog';

class ShowBuildNumber extends React.Component {
	state = { buildNumber: 0, show: false };

	componentDidMount() {
		API.GetBuildNumber().then((res) => this.setState({ buildNumber: res }));
		setInterval(() => {
			API.GetBuildNumber().then((res) => this.setState({ buildNumber: res }));
		}, 10000);
	}

	setStateOfParent = (setShow) => {
		this.setState({ show: setShow });
	};

	render() {
		if (this.state.show) {
			return (
				<div>
					<h4 style={{ paddingTop: '30px' }}>
						This site was built {this.state.buildNumber} times,&nbsp;
						<button
							className='build'
							onClick={() => {
								API.BuildAgain();
								this.setState({ show: true });
							}}
						>
							<div className='build'>Click here to build it Again!</div>
						</button>
					</h4>
					<ConsoleLog setStateOfParent={this.setStateOfParent} />
				</div>
			);
		}
		return (
			<h4 style={{ paddingTop: '30px' }}>
				This site was built {this.state.buildNumber} times,&nbsp;
				<button
					className='build'
					onClick={() => {
						API.BuildAgain();
						this.setState({ show: true });
					}}
				>
					<div className='build'>Click here to build it Again!</div>
				</button>
			</h4>
		);
	}
}

export default ShowBuildNumber;
