import "mocha";
import log from "../src";

describe('Logger Tests', () => {

    it('can log to console', () => {
        log.info('Logging to console');
    });

});
