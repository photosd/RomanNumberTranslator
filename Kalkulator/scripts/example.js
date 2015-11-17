var RomanCalc = React.createClass({
	getInitialState: function() {
		return {value: ""};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	render: function() {
		var value = this.state.value;
		var tabRzymska = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M","<span class='ovl'>IV</span>","<span class='ovl'>V</span>","<span class='ovl'>IX</span>","<span class='ovl'>X</span>","<span class='ovl'>XL</span>","<span class='ovl'>L</span>","<span class='ovl'>XC</span>","<span class='ovl'>C</span>","<span class='ovl'>CD</span>","<span class='ovl'>D</span>","<span class='ovl'>CM</span>","<span class='ovl'>M</span>","<span class='rlovl'>XL</span>","<span class='rlovl'>L</span>","<span class='rlovl'>XC</span>","<span class='rlovl'>C</span>","<span class='rlovl'>CD</span>","<span class='rlovl'>D</span>","<span class='rlovl'>CM</span>","<span class='rlovl'>M</span>"];
		var tabArabska = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000,40000,50000,90000,100000,400000,500000,900000,1000000,4000000,5000000,9000000,10000000,40000000,50000000,90000000,100000000];
		var wynik = "";
		var ile = value;
		var i = 32;
		for (i=32;i>=0;i--) {
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
