Lungo.Events.init({
    'load section#layoutevents': App.triggerCapture,
    'unload section#layoutevents': App.triggerCapture
});

Lungo.ready(function() {
    App.environment();
});
