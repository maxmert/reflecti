import {argv} from 'yargs';

export function isProduction() {
    return process.env.NODE_ENV === 'production' || argv.production === true;
}
