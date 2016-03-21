export default class ReflectiError extends Error {
    constructor(message) {
        return super(`Reflecti: ${message}`);
    }
}
