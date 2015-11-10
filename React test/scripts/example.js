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

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

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
				{marked(this.props.children.toString())}
			</div>
		);
	}
});