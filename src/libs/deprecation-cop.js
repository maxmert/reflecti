import {argv} from 'yargs';

let isProduction = process.env.NODE_ENV === 'production' || argv.production === true;

export default class Cop {
    constructor(libname, version) {
        this.initialize(libname, version);
    }

    initialize(libname, version) {
        if (!libname) {
            console.error('Please, provide the <libname> to the deprecation-cop constructor.');
        }

        this.libname = libname;
        this.version = version;
    }

    deprecate(version, deprecation, message) {
        if (!isProduction) {
            if (this.version !== version) {
                console.info(`${this.libname} deprecation. After version *${version}* ${deprecation} will be deprecated. ${message}`);
            }
            else {
                console.log(`${this.libname} deprecation. You forgot to remove deprecation warning for ${this.libname} ${version}: ${deprecation}.`);
            }
        }
    }
}
