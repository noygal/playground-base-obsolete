var React = require('react');

// var injectTapEventPlugin = require('react-tap-event-plugin');
//
// //Needed for onTouchTap
// //Can go away when react 1.0 release
// //Check this repo:
// //https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();
var eventsDispatcher = require('./modules/events/eventsDispatcher.js');
var Layout = require('./components/Layout.js');

React.render(React.createElement(Layout.Layout, null), document.getElementById('tmp'));

var remote = require('remote');
var dialog = remote.require('dialog');

function openDirectory() {
  var selected = dialog.showOpenDialog({
		properties: ['openDirectory']
	});
	if(!selected) {
		return;
	}
	var file = selected[0];
  eventsDispatcher.addPath(file);
}

// //to use events
// eventsDispatcher.taskStore.listen(function() {
//     var i, args = Array.prototype.slice.call(arguments, 0);
//     for (i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// })


// eventsDispatcher.runTask.triggerAsync("aasdfsad", {  c: [1,2,3]});
