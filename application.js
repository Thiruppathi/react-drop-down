var options = {
  thumbnailData: [
    {
      title: 'Show Courses',
      number: 35,
      header: 'Learn React',
      description: 'Learn React with Flux',
      imgUrl: 'http://formatjs.io/img/react.svg'
    }, {
      title: 'See Tutorials 2',
      number: 25,
      header: 'Learn Gulp',
      description: 'Learn Gulp to speed Development',
      imgUrl: 'http://brunch.io/images/others/gulp.png'
    }
  ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('#thumbnailTarget'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary"}, 
        this.props.title, 
        "-", 
        this.props.number
      )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this
      .props
      .thumbnailData
      .map(function(thumbnailProps) {
        return (
          React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        );
      });

    return (
      React.createElement("div", null, 
        list
      )
    );
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    var props = this.props;
    return React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {alt: props.imgUrl, src: props.imgUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, props.header), 
          React.createElement("p", null, props.description), 
          React.createElement("p", null, React.createElement(Badge, {number: this.props.number, title: this.props.title}))
        )
      )
  }
});
