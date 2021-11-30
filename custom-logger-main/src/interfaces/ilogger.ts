export interface ILogger {
  verbose(context: string, content?): void;
  info(context: string, content?): void;
  warn(context: string, content?): void;
  error(context: string, content?): void;
}
