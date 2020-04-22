import Loggable from "./Loggable";
import LoggingLevel from "./LoggingLevel";

class Logger implements Loggable {

    static getLogger(): Loggable {
        return new Logger();
    }

    /**
     * Get the logger's current log level.
     */
    public get level() : LoggingLevel {
        return this._level;
    }

    /**
     * Set the level of this logger. This changes the logger's behavior depending on the level set.
     *
     * @param newLevel - The new level to be followed by the logger.
     */
    public set level(newLevel : LoggingLevel) {
        this._level = newLevel;
    }

    private _level: LoggingLevel = LoggingLevel.Trace;

    private constructor() {

    }

    /**
     * Sends trace message to the console if relevant.
     *
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public trace(content?: string, ...optionalParams: string[]) {
        if (this._level == LoggingLevel.Trace) {
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
        if (this._level <= LoggingLevel.Debug) {
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
        if (this._level <= LoggingLevel.Info) {
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
        if (this._level <= LoggingLevel.Warn) {
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
        if (this._level <= LoggingLevel.Error) {
            console.error(`ERROR: ${content}`, optionalParams);
        }
    }
}

export {
    Logger,
}

export default Logger.getLogger();
