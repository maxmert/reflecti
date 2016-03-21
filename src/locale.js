import Promise from 'bluebird';
import _ from 'lodash';

import ReflectiError from './errors.js';
import * as validate from './libs/validators.js';

const REQUIRED = [];
const RESERVED = [];
const REQUIRED_METHODS = [];

export default class Locale {

    _initialize(name, locale) {
        this.name = name;
        this.locale = locale;
    }

    constructor(name, locales) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`wrong type of the [name] in the <Locale> constructor. Please, provide correct name type 'string'. You've passed '${typeof name}'.`);
        }

        let reserved = validate.reserved(RESERVED, locales);
        if (reserved) {
            throw new ReflectiError(`the method or field names [${reserved}] in the <Locale> '${name}' is reserved. Please, use another name.`);
        }

        let firstKey = _.keys(locales)[0];
        let compareLocale = locales[firstKey];

        _.forEach(locales, (locale, name) => {
            let difference = [];
            validate.difference(compareLocale, locale, difference);

            if (!!difference.length) {
                throw new ReflectiError(`fields [${difference}] don't match in the <Locale> '${name}'. Please, check locales for consistancy.`);
            }
        });

        this._initialize(name, locales);
    }

    build(context, unitContext) {
        // TODO: Investigation, what kind of variables we need here?
        this.app = context;
        this.context = unitContext;

        let localeNames = _.keys(this.app.locale.list);
        if (localeNames.length) {
            _.forEach(localeNames, (localeName) => {
                let intersection = _.intersection(_.keys(this.app.locale.list[localeName]), _.keys(this.locale[localeName]));
                if (intersection.length) {
                    throw new ReflectiError(`trying to rewrite already existing <Locales> parts [${intersection}] in the <Locale> '${localeName}'. Please, check locales for consistancy.`);
                }
            });
        }

        _.merge(this.app.locale.list, this.locale);
    }

}
