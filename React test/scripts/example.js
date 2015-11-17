var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
	render: function () {
		return (
			<div className="CommentList">
				<Comment author="Zenek Kiełbasa">To jest kiełbasa wyborcza!</Comment>
				<Comment author="Franek Gitara">Gitara. Powyższy koment zrobiłem przed spojrzeniem w tutka!</Comment>
			</div>		
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="CommentForm">
				Hello World! I am a CommentForm.
			</div>	
		);
	}
});

var Comment = React.createClass({
	render: function () {
		return (
			<div className="Comment">
				<h2 className="CommentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});


var Inputa = React.createClass({
 getInitialState: function() {
    return {value: 2};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    var doubleval = value*2;
    return (
    	<div>
	    	<input type="text" value={value} onChange={this.handleChange} />
	    	<div>{doubleval}</div>
    	</div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

ReactDOM.render(
  <Inputa />,
  document.getElementById('inputy')
);


/*
  string tabRzymska[]={"I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"};
    int tabArabska[]={1,4,5,9,10,40,50,90,100,400,500,900,1000};
    string wynik="";
    int ile=liczba;
    for(int i=12;i>=0;i--)
        while(ile>=tabArabska[i]){
            ile=ile-tabArabska[i];
            wynik=wynik+tabRzymska[i];
        }
    cout<<wynik;
*/