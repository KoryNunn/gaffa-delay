var Gaffa = require('gaffa'),
    actionType = "delay";

function Delay(){}
Delay = Gaffa.createSpec(Delay, Gaffa.Action);
Delay.prototype._type = actionType;
Delay.prototype._async = true;
Delay.prototype.delay = new Gaffa.Property();

Delay.prototype.trigger = function(parent, scope, event) {

    var action = this;

    setTimeout(function(){
        action.triggerActions('trigger', scope, event);
        action.complete();
    }, this.delay.value);
};

module.exports =  Delay;