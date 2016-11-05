import { Meteor } from 'meteor/meteor';
import { Details } from '/imports/collections';

export default () => {
  Meteor.publish('details-list', () => {
    return Details.find();
  });
}
