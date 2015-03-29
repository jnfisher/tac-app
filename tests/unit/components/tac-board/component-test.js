import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'component:tac-board',
  'TacBoardComponent',
  {
    // Specify the other units that are required for this test.
    needs: ['component:tac-button']
  },
  function() {
    it('exists', function() {
      var component = this.subject();
      expect(component).to.be.ok;
    });
  }
);

