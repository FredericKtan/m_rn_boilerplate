import { Meteor } from 'meteor/meteor';
import publications from "./publications";
import seeds from "./seeds";

Meteor.startup(() => {
  // code to run on server at startup
  publications();
  seeds();
});
