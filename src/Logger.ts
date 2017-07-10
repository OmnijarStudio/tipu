enum LoggerLevel {
    Trace = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Silent = 5
}

interface Loggable {

    level: LoggerLevel  
    
    

}

class Logger implements Loggable {

    private _level: LoggerLevel = LoggerLevel.Trace;

    public get level() : LoggerLevel {
        return this.level;
    }
    
    public set level(newLevel : LoggerLevel) {
        this._level = newLevel;
    }

    /**
     * Sends trace message to the console if relevant.
     * 
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public trace(content?: string, ...optionalParams: string[]) {
        console.trace(`DEBUG: ${content}`, optionalParams);
    }

    /**
     * Sends debug message to the console if relevant.
     * 
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public debug(content?: string, ...optionalParams: string[]) {
        console.debug(`DEBUG: ${content}`, optionalParams);
    }

    /**
     * Sends info message to the console if relevant.
     * 
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public info(content?: string, ...optionalParams: string[]) {
        console.info(`INFO: ${content}`, optionalParams);
    }

    /**
     * Sends warning message to the console if relevant.
     * 
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public warn(content?: string, ...optionalParams: string[]) {
        console.warn(`WARN: ${content}`, optionalParams);
    }

    /**
     * Sends error message to the console if relevant.
     * 
     * @param content Formatted string for the console.
     * @param optionalParams Additional parameters to interpolate into the `content`.
     */
    public error(content?: string, ...optionalParams: string[]) {
        console.error(`ERROR: ${content}`, optionalParams);
    }
}
