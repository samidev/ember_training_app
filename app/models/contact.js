import DS from 'ember-data';

export default DS.Model.extend({
    firstName : DS.attr(),
    lastName : DS.attr(),
    emailAddress : DS.attr(),
    homePhone : DS.attr(),
    workPhone : DS.attr()
});
