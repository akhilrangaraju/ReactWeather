var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
      return {
        title: 'Error'
      }
  },
  propTypes: {
    title:React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var{title,message} = this.props;
    return (
        <div id="error-modal" className = " text-center reveal tiny" data-reveal="">
            <h4>{title}</h4>
            <p>{message}</p>
            <p>
              <buton className = "hollow button" data-close="">Okay</buton>
            </p>
        </div>
    );
  }
});

module.exports = ErrorModal
