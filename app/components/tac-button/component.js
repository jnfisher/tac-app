import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  buttonState: null,
  squareId: null,

  actions: {
    buttonClicked: function() {
      var turnUsed=false;
      if (this.get('buttonState') === "-") {
        turnUsed=true;
        if (this.get('currentTurn') === 0)
          this.set("buttonState", "X");
        else
          this.set("buttonState", "O");
      }
      this.sendAction('action', turnUsed);
    }
  }
});
