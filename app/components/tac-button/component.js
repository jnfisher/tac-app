import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  buttonState: null,
  squareId: null,

  actions: {
    buttonClicked: function() {
      var turnUsed=false;

      if (this.get('buttonState') === "-" &&
          this.get('gameIsFinished') === false) {
        turnUsed=true;
        this.set('buttonState', this.get('currentTurn') === 0 ? "X" : "O");
      }
      this.sendAction('action', turnUsed);
    }
  }
});
