var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var ingredients = [{
    "id":1,
    "text": "ham"
},
{
    "id":2,
    "text": "cheese"
},
{
    "id":3,
    "text": "hamar"
}];

var List = createReactClass({
    render: function(){
        var ListItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });
        return (<ul>{ListItems}</ul>);
    }
});

module.exports = List;
