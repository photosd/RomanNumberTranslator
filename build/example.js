var ArabicInput = React.createClass({
	displayName: "ArabicInput",

	render: function () {
		return React.createElement(
			"div",
			{ className: "number arabic" },
			React.createElement(
				"h2",
				null,
				"Enter your number:"
			),
			React.createElement("input", { type: "text", value: this.props.value, maxLength: "10", onChange: this.props.handleChange })
		);
	}
});

var RomanOutput = React.createClass({
	displayName: "RomanOutput",

	render: function () {
		return React.createElement(
			"div",
			{ className: "number roman" },
			React.createElement(
				"h2",
				null,
				"Its equivalent in roman numerals:"
			),
			React.createElement("div", { className: "rzymska", dangerouslySetInnerHTML: { __html: this.props.wynik.toString() } })
		);
	}
});

var RomanTutorial = React.createClass({
	displayName: "RomanTutorial",

	render: function () {
		return React.createElement(
			"div",
			{ className: "tutorial" },
			this.props.tutorial
		);
	}
});

var RomanCalc = React.createClass({
	displayName: "RomanCalc",

	valuesTab: [[1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"], [4000, "<span class='ovl'>IV</span>"], [5000, "<span class='ovl'>V</span>"], [9000, "<span class='ovl'>IX</span>"], [10000, "<span class='ovl'>X</span>"], [40000, "<span class='ovl'>XL</span>"], [50000, "<span class='ovl'>L</span>"], [90000, "<span class='ovl'>XC</span>"], [100000, "<span class='ovl'>C</span>"], [400000, "<span class='ovl'>CD</span>"], [500000, "<span class='ovl'>D</span>"], [900000, "<span class='ovl'>CM</span>"], [1000000, "<span class='ovl'>M</span>"], [4000000, "<span class='rlovl'>XL</span>"], [5000000, "<span class='rlovl'>L</span>"], [9000000, "<span class='rlovl'>XC</span>"], [10000000, "<span class='rlovl'>C</span>"], [40000000, "<span class='rlovl'>CD</span>"], [50000000, "<span class='rlovl'>D</span>"], [90000000, "<span class='rlovl'>CM</span>"], [100000000, "<span class='rlovl'>M</span>"]],
	getInitialState: function () {
		return { value: "" };
	},
	handleChange: function (event) {
		var newInt = parseInt(event.target.value, 10); // (Number.isInteger(event.target.value) ? event.target.value : this.state.value);
		if (isNaN(newInt)) {
			if (event.target.value == "") {
				newInt = "";
			} else {
				newInt = this.state.value;
			}
		}
		if (newInt > 999999999) {
			newInt = this.state.value;
		}
		this.setState({ value: newInt });
	},
	render: function () {
		var value = this.state.value;

		var wynik = "";
		var tutorial = "";

		if (value > 3999999) {
			wynik = "Max number is 3999999";
		} else {
			var ile = value;
			var i = this.valuesTab.length - 1;
			for (i = this.valuesTab.length - 1; i >= 0; i--) {
				while (ile >= this.valuesTab[i][0]) {
					ile = ile - this.valuesTab[i][0];
					wynik = wynik + this.valuesTab[i][1];
					if (tutorial != "") {
						tutorial += " + ";
					}
					tutorial += this.valuesTab[i][0];
				}
			}
		}
		return React.createElement(
			"div",
			null,
			React.createElement(ArabicInput, { value: value, handleChange: this.handleChange }),
			React.createElement(RomanOutput, { wynik: wynik }),
			React.createElement(RomanTutorial, { tutorial: tutorial })
		);
	}
});

ReactDOM.render(React.createElement(RomanCalc, null), document.getElementById('content'));