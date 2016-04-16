export default function(config) {
    const {
        middleware = (value) => value,
        normalize = (value) => value,
        name
    } = config;

    function Store(value) {
        this.name = name;
        this.getData = normalize.bind(this, value);
        this.dispatch = (method) => {
            const res = middleware(method(value));
            return {
                store: new Store(res),
                value: res
            };
        };
    }

    return Store;
}
