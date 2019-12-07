export const test = (f, cases) => {
    const results = cases.map(theCase => {
        return {
            theCase,
            got: f(theCase.input)
        };
    });
    const failedResults = results.filter(result => result.theCase.expected !== result.got);
    if (failedResults.length === 0) {
        return;
    }
    console.error(`[Failed]: ${f.name}()`);
    failedResults.forEach(({ theCase, got }) => {
        const { input, expected } = theCase;
        console.error(`input: ${input}, expected ${expected}, got ${got}`);
    });
};
