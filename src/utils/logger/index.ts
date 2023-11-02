/* eslint-disable no-console */
export type ILogLevel = "error" | "info" | "warn";

const MOSAIC_TAG = "[@melfore/mosaic]";

/**
 * Logs message for given level and component
 * @param level the level of the message to log (e.g. "error")
 * @param component the component subject of the log
 * @param message the message of the log
 */
const logger = (level: ILogLevel, component: string, message: string) => {
  const text = `${MOSAIC_TAG} ${component} - ${message}`;

  switch (level) {
    case "error":
      console.error(text);
      return;
    case "info":
      console.info(text);
      return;
    case "warn":
      console.warn(text);
      return;
  }
};

/**
 * Logs message for error level and component
 * @param component the component subject of the log
 * @param message the message of the log
 */
export const logError = (component: string, message: string) => logger("error", component, message);

/**
 * Logs message for info level and component
 * @param component the component subject of the log
 * @param message the message of the log
 */
export const logInfo = (component: string, message: string) => logger("info", component, message);

/**
 * Logs message for warn level and component
 * @param component the component subject of the log
 * @param message the message of the log
 */
export const logWarn = (component: string, message: string) => logger("warn", component, message);
