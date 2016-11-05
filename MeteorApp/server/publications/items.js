import { Meteor } from 'meteor/meteor';
import { Items } from '/imports/collections';

export default () => {
  Meteor.publish('items-list', () => {
    return Items.find();
  });
}
