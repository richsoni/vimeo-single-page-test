global.React  = require("react")

RootComponent = React.createClass({
  render: function(){
    return <div> hello </div>
  }
})

document.addEventListener("DOMContentLoaded", function(event) { 
  React.render(<RootComponent />, document.body)
});
