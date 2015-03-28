import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  currentTurn: 0,

  button0State: '-',
  button1State: '-',
  button2State: '-',
  button3State: '-',
  button4State: '-',
  button5State: '-',
  button6State: '-',
  button7State: '-',
  button8State: '-',

  clearStates: function() {
    for (var i=0; i < 9; i++) {
      this.set("button"+i+"State", '-')
    }
  },

  actions: {
    buttonClicked: function(turnUsed) {
      if(turnUsed) {
        this.set('currentTurn', (this.get('currentTurn') + 1)%2 );
        console.log(this.get('currentTurn'));
      }
      // Ember.run.next(this, "clearStates")
    }
  }
});
