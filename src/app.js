var React = require('react');
var LayeredComponentMixin = require('react-components/js/layered-component-mixin.jsx');
var Modal = require('react-components/js/modal.jsx');

var ButtonWithDialog = React.createClass({
    mixins: [LayeredComponentMixin],
    render: function() {
        return <button onClick={this.handleClick}>
            Click Me!
        </button>;
    },
    renderLayer: function() {
        if (this.state.clicked) {
            return <Modal onClose={this.handleClose}>
                <div className="modal-header">
                    Header
                    <a href="javascript: void 0;"
                       style={{float: "right", textDecoration: "none"}}
                       onClick={this.handleClose}>
                        &#215;
                    </a>
                </div>
                <div className="modal-body">Body!</div>
            </Modal>;
        } else {
            return <div />;
        }
    },
    // {{{
    handleClose: function() {
        this.setState({ clicked: false });
    },
    handleClick: function() {
        this.setState({ clicked: !this.state.clicked });
    },
    getInitialState: function() {
        return { clicked: false };
    }
    // }}}
});

React.render(
    <div>
        <h1>Hello World!</h1>
        <ButtonWithDialog />
    </div>,
    document.getElementById('content')
);
