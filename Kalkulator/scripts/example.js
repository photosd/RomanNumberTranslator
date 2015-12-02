var RomanCalc = React.createClass({
	valuesTab: [
	     [1, "I"],
	     [4,"IV"],
	     [5,"V"],
	     [9,"IX"],
	     [10,"X"],
	     [40,"XL"],
	     [50,"L"],
	     [90,"XC"],
	     [100,"C"],
	     [400,"CD"],
	     [500,"D"],
	     [900,"CM"],
	     [1000,"M"],
	     [4000,"<span class='ovl'>IV</span>"],
	     [5000,"<span class='ovl'>V</span>"],
	     [9000,"<span class='ovl'>IX</span>"],
	     [10000,"<span class='ovl'>X</span>"],
	     [40000,"<span class='ovl'>XL</span>"],
	     [50000,"<span class='ovl'>L</span>"],
	     [90000,"<span class='ovl'>XC</span>"],
	     [100000,"<span class='ovl'>C</span>"],
	     [400000,"<span class='ovl'>CD</span>"],
	     [500000,"<span class='ovl'>D</span>"],
	     [900000,"<span class='ovl'>CM</span>"],
	     [1000000,"<span class='ovl'>M</span>"],
	     [4000000,"<span class='rlovl'>XL</span>"],
	     [5000000,"<span class='rlovl'>L</span>"],
	     [9000000,"<span class='rlovl'>XC</span>"],
	     [10000000,"<span class='rlovl'>C</span>"],
	     [40000000,"<span class='rlovl'>CD</span>"],
	     [50000000,"<span class='rlovl'>D</span>"],
	     [90000000,"<span class='rlovl'>CM</span>"],
	     [100000000,"<span class='rlovl'>M</span>"]],
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
//		var tabRzymska = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M","<span class='ovl'>IV</span>","<span class='ovl'>V</span>","<span class='ovl'>IX</span>","<span class='ovl'>X</span>","<span class='ovl'>XL</span>","<span class='ovl'>L</span>","<span class='ovl'>XC</span>","<span class='ovl'>C</span>","<span class='ovl'>CD</span>","<span class='ovl'>D</span>","<span class='ovl'>CM</span>","<span class='ovl'>M</span>","<span class='rlovl'>XL</span>","<span class='rlovl'>L</span>","<span class='rlovl'>XC</span>","<span class='rlovl'>C</span>","<span class='rlovl'>CD</span>","<span class='rlovl'>D</span>","<span class='rlovl'>CM</span>","<span class='rlovl'>M</span>"];
//		var tabArabska = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000,40000,50000,90000,100000,400000,500000,900000,1000000,4000000,5000000,9000000,10000000,40000000,50000000,90000000,100000000];
		var wynik = "";

		if (value > 3999999) {
			wynik = "Za duża liczba";
		} else {
			var ile = value;
			var i = this.valuesTab.length - 1;
			for (i = this.valuesTab.length - 1;i>=0;i--) {
				while (ile >= this.valuesTab[i][0]) {
					ile = ile - this.valuesTab[i][0];
					wynik = wynik + this.valuesTab[i][1];
				}
			}
		}
		return (
		<div>
			<h2>Wpisz liczbę arabską:</h2>
			<input type="text" value={value} maxLength="10" onChange={this.handleChange} />
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
