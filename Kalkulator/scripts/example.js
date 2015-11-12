var RomanCalc = React.createClass({
	getInitialState: function() {
		return {value: ""};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	render: function() {
		var value = this.state.value;
		var tabRzymska = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
		var tabArabska = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
		var wynik = "";
		var ile = value;
		var i = 12;
		for (i=12;i>=0;i--) {
			while (ile>=tabArabska[i]) {
				ile=ile-tabArabska[i];
            wynik=wynik+tabRzymska[i];
			}
		}
		return (
		<div>
		<input type="text" value={value} onChange={this.handleChange} />
		<div>{wynik}</div>
		</div>
		);
	}
});


ReactDOM.render(
  <RomanCalc />,
  document.getElementById('content')
);
