/**
 * The different kinds of logging levels supported by this logger.
 */
enum LoggerLevel {
    Trace = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Silent = 5
}

interface Loggable {

    level: LoggerLevel;

    trace(content?: string, ...optionalParams: string[]);

    debug(content?: string, ...optionalParams: string[]);

    info(content?: string, ...optionalParams: string[]);

    warn(content?: string, ...optionalParams: string[]);

    error(content?: string, ...optionalParams: string[]);
}

class Logger implements Loggable {

    static getLogger(): Loggable {
        return new Logger();
    }

    /**
     * Get the logger's current log level.
     */
    public get level() : LoggerLevel {
        return this._level;
    }

    /**
     * Set the level of this logger. This changes the logger's behavior depending on the level set.
     *
     * @param newLevel - The new level to be followed by the logger.
     */
    public set level(newLevel : LoggerLevel) {
        this._level = newLevel;
    }

    private _level: LoggerLevel = LoggerLevel.Trace;

    private constructor() {

    }

    /**
     * Sends trace message to the console if relevant.
     *
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public trace(content?: string, ...optionalParams: string[]) {
        if (this._level == LoggerLevel.Trace) {
            console.trace(`TRACE: ${content}`, optionalParams);
        }
    }

    /**
     * Sends debug message to the console if relevant.
     *
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public debug(content?: string, ...optionalParams: string[]) {
        if (this._level <= LoggerLevel.Debug) {
            console.debug(`DEBUG: ${content}`, optionalParams);
        }
    }

    /**
     * Sends info message to the console if relevant.
     *
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public info(content?: string, ...optionalParams: string[]) {
        if (this._level <= LoggerLevel.Info) {
            console.info(`INFO: ${content}`, optionalParams);
        }
    }

    /**
     * Sends warning message to the console if relevant.
     *
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public warn(content?: string, ...optionalParams: string[]) {
        if (this._level <= LoggerLevel.Warn) {
            console.warn(`WARN: ${content}`, optionalParams);
        }
    }

    /**
     * Sends error message to the console if relevant.
     *
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public error(content?: string, ...optionalParams: string[]) {
        if (this._level <= LoggerLevel.Error) {
            console.error(`ERROR: ${content}`, optionalParams);
        }
    }
}

export {
    Loggable,
    Logger,
    LoggerLevel
}

export default Logger.getLogger();
