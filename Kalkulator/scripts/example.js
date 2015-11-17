var RomanCalc = React.createClass({
	getInitialState: function() {
		return {value: ""};
	},
	handleChange: function(event) {
		var newInt = parseInt(event.target.value, 10); // (Number.isInteger(event.target.value) ? event.target.value : this.state.value);
		if (isNaN(newInt)) {
			if (event.target.value == "") {
				newInt = ""; 
			} else {
				newInt = this.state.value;
			}
		}
		this.setState({value: newInt});
	},
	render: function() {
		var value = this.state.value;
		var tabRzymska = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M","<span class='ovl'>IV</span>","<span class='ovl'>V</span>","<span class='ovl'>IX</span>","<span class='ovl'>X</span>","<span class='ovl'>XL</span>","<span class='ovl'>L</span>","<span class='ovl'>XC</span>","<span class='ovl'>C</span>","<span class='ovl'>CD</span>","<span class='ovl'>D</span>","<span class='ovl'>CM</span>","<span class='ovl'>M</span>"];
		var tabArabska = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000,40000,50000,90000,100000,400000,500000,900000,1000000];
		var wynik = "";
		var ile = value;
		var i = 24;
		for (i=24;i>=0;i--) {
			while (ile>=tabArabska[i]) {
				ile=ile-tabArabska[i];
				wynik=wynik+tabRzymska[i];
			}
		}
		return (
		<div>
			<h2>Wpisz liczbę arabską:</h2>
			<input type="text" value={value} onChange={this.handleChange} />
			<h2>Jej odpowiednik w systemie rzymskim:</h2>
			<div dangerouslySetInnerHTML={{__html: wynik.toString()}} />
		</div>
		);
	}
});


ReactDOM.render(
  <RomanCalc />,
  document.getElementById('content')
);
