import _ from 'lodash';
import Unit from '../unit.js';
import ReflectiError from '../errors.js';
import App from '../app.js';


/*
    If you need to build a unit out of the main context,
    you might need to use builder method.
 */
export default function builder(unit, globalContext, params) {
    let context = App.createAppContext();

    let extractedUnit = _.isFunction(unit) ? unit() : unit;

    if (!(extractedUnit instanceof Unit)) {
        throw new ReflectiError(`Occured while building custom context. Type of provided <Unit> is wrong. Should be instance of <Unit>.`);
    }

    extractedUnit.build(context, globalContext);

    return context;
}
