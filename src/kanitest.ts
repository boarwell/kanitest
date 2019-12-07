export type TheCase<T, U> = {
  input: T;
  expected: U;
};

type Result<T, U> = {
  theCase: TheCase<T, U>;
  got: U;
};

export const test = <T, U>(f: (arg: T) => U, cases: TheCase<T, U>[]): void => {
  const results: Result<T, U>[] = cases.map(theCase => {
    return {
      theCase,
      got: f(theCase.input)
    };
  });

  const failedResults: Result<T, U>[] = results.filter(
    result => result.theCase.expected !== result.got
  );

  if (failedResults.length === 0) {
    return;
  }

  console.error(`[Failed]: ${f.name}()`);
  failedResults.forEach(({ theCase, got }) => {
    const { input, expected } = theCase;
    console.error(`input: ${input}, expected ${expected}, got ${got}`);
  });
};
