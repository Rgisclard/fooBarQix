const map = {
    "3": "Foo",
    "5": "Bar",
    "7": "Qix",
};

export function FooBarQix(request: string) {
    let result: string = '';
    for (let key in map) {
        if (+request % +key === 0) {
            result += map[key];
        }
    }

    for (var i = 0; i <= request.length - 1; i++) {
        if (map[request[i]]) {
            result += map[request[i]];
        }
    }

    if (!result.length) {
        result = request;
    }

    return result;
}
export default FooBarQix;