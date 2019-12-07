export declare type TheCase<T, U> = {
    input: T;
    expected: U;
};
export declare const test: <T, U>(f: (arg: T) => U, cases: TheCase<T, U>[]) => void;
