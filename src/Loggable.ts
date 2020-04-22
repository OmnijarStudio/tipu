import LoggingLevel from "./LoggingLevel";

interface Loggable {

    level: LoggingLevel;

    trace(content?: string, ...optionalParams: string[]);

    debug(content?: string, ...optionalParams: string[]);

    info(content?: string, ...optionalParams: string[]);

    warn(content?: string, ...optionalParams: string[]);

    error(content?: string, ...optionalParams: string[]);
}

export default Loggable;