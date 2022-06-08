import React from 'react';
import * as API from '../Components/API';

class ConsoleLog extends React.Component {
	constructor(props) {
		super(props);

		this.wrapperRef = React.createRef();
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	state = { console: null };

	componentDidMount() {
		API.GetConsoleLog().then((res) => this.setState({ console: res }));

		setInterval(() => {
			API.GetConsoleLog().then((res) => {
				if (res !== this.state.console) this.setState({ console: res });
			});
		}, 200);
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	componentDidUpdate() {
		var objDiv = document.getElementById('buildpanel');
		objDiv.scrollTop = objDiv.scrollHeight;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
			this.props.setStateOfParent(false);
		}
	}

	render() {
		return (
			<div ref={this.wrapperRef}>
				<div
					style={{ whiteSpace: 'pre-line' }}
					className='buildpanel'
					id='buildpanel'
				>
					{this.state.console}
				</div>
			</div>
		);
	}
}
export default ConsoleLog;
