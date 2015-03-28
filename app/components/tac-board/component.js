import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  currentTurn: 0,
  winningStates: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

  buttonStates: Ember.A([
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'}),
    Ember.Object.create({ value: '-'})]),

  clearStates: function() {
    for (var i=0; i < this.get('buttonStates.length'); i++) {
      this.set('buttonStates.'+i+'.value', '-');
    }
  },

  gameIsFinished: function() {
    return (this.get('hasWinner') || this.get('isTied'));
  }.property('hasWinner', 'isTied'),

  hasWinner: function() {
    return (this.get('gameWinner') != null);
  }.property('gameWinner'),

  isTied: function() {
    return (this.get('buttonStates').filterBy('value', '-').length === 0);
  }.property('gameWinner'),

  checkWinner: function(player) {
    for (var i=0; i < this.get('winningStates').length; i++) {
      if (this.get('buttonStates.'+this.get('winningStates')[i][0]+'.value') === player &&
          this.get('buttonStates.'+this.get('winningStates')[i][1]+'.value') === player &&
          this.get('buttonStates.'+this.get('winningStates')[i][2]+'.value') === player) {
        return true;
      }
    }
    return false;
  },

  gameWinner: function() {
    if (this.checkWinner("X"))
      return "X"
    else if (this.checkWinner("O"))
      return "O"
    else
      return null;
  }.property('buttonStates.@each.value'),

  actions: {
    buttonClicked: function(turnUsed) {
      if(turnUsed) {
        this.set('currentTurn', (this.get('currentTurn') + 1) % 2 );
      }
    },

    clearClicked: function() {
      Ember.run.next(this, "clearStates");
    }
  }
});
