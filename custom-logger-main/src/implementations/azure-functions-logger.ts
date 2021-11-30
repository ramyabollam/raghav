import { Context } from "@azure/functions";
import { inject, injectable } from "inversify";
import { ILogger } from "../interfaces/ilogger";
import { TYPES } from "../types";

@injectable()
export class AzureFunctionsLogger implements ILogger {
  constructor(@inject(TYPES.Context) private readonly invocationContext: Context) { }

  public verbose(context: string, content?): void {
    this.invocationContext.log.verbose(this.logMessage(context, content));
  }
  public info(context: string, content?): void {
    this.invocationContext.log.info(this.logMessage(context, content));
  }
  public warn(context: string, content?): void {
    this.invocationContext.log.warn(this.logMessage(context, content));
  }
  public error(context: string, content?): void {
    this.invocationContext.log.error(this.logMessage(context, content));
  }
  private logMessage(context: string, content = '') {
    return JSON.stringify({
      context: context,
      content: content,
      correlation: {
        invocationId: this.invocationContext.invocationId
      }
    });
  }
}
