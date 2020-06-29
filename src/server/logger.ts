import { getLogger, configure, Logger } from "log4js";
import config from "config";
configure(config.get("log"));

class Log {
    logger: Logger;
    constructor() {
        this.logger = getLogger();
    }
    info(log: string) {
        this.logger.info(log);
    }
    error(log: string) {
        this.logger.error(log);
    }
}

export const logger = new Log();
