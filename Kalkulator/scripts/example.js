var RomanCalc = React.createClass({
	getInitialState: function() {
		return {value: ""};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	render: function() {
		var value = this.state.value;
		var tabRzymska = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M","<span className='ovl'>IV</span>","<span className='ovl'>V</span>","<span className='ovl'>IX</span>","<span className='ovl'>X</span>","<span className='ovl'>XL</span>","<span className='ovl'>L</span>","<span className='ovl'>XC</span>","<span className='ovl'>C</span>","<span className='ovl'>CD</span>","<span className='ovl'>D</span>","<span className='ovl'>CM</span>","<span className='ovl'>M</span>"];
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
		<div>{wynik}</div>
		</div>
		);
	}
});


ReactDOM.render(
  <RomanCalc />,
  document.getElementById('content')
);
