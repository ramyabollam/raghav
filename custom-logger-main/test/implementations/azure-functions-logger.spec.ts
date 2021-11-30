import 'reflect-metadata';
import { Context } from "@azure/functions";
import { mocked } from 'ts-jest/utils';
import { AzureFunctionsLogger } from "../../src/implementations/azure-functions-logger";
import { ILogger } from "../../src/interfaces/ilogger";
import { testContainer } from '../inversify-test.config';
import { TYPES } from '../../src';

let logger: ILogger;
let invocationContext: Context;

beforeAll(() => {
  invocationContext = testContainer.get<Context>(TYPES.Context);
  logger = new AzureFunctionsLogger(invocationContext);
});

beforeEach(() => {
  invocationContext.invocationId = 'SomeUUID';
});

describe('verbose', () => {
  test('writes the log message with passed content when content is not null.', () => {
    const context = 'Some verbose message.';
    const content = { 'SomeKey': 'SomeValue' };

    logger.verbose(context, content);
    expect(invocationContext.log.verbose).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.verbose).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: content,
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  test('writes the log message with content set to empty string when content is null or undefined', () => {
    const context = 'Some verbose message.';

    logger.verbose(context);
    expect(invocationContext.log.verbose).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.verbose).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: '',
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  afterEach(() => {
    mocked(invocationContext.log.verbose).mockClear();
  });
});

describe('info', () => {
  test('writes the log message with passed content when content is not null.', () => {
    const context = 'Some verbose message.';
    const content = { 'SomeKey': 'SomeValue' };

    logger.info(context, content);
    expect(invocationContext.log.info).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.info).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: content,
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  test('writes the log message with content set to empty string when content is null or undefined', () => {
    const context = 'Some info message.';

    logger.info(context);
    expect(invocationContext.log.info).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.info).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: '',
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  afterEach(() => {
    mocked(invocationContext.log.info).mockClear();
  });
});

describe('warn', () => {
  test('writes the log message with passed content when content is not null.', () => {
    const context = 'Some verbose message.';
    const content = { 'SomeKey': 'SomeValue' };

    logger.warn(context, content);
    expect(invocationContext.log.warn).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.warn).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: content,
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  test('writes the log message with content set to empty string when content is null or undefined', () => {
    const context = 'Some warn message.';

    logger.warn(context);
    expect(invocationContext.log.warn).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.warn).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: '',
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  afterEach(() => {
    mocked(invocationContext.log.warn).mockClear();
  });
});

describe('error', () => {
  test('writes the log message with passed content when content is not null.', () => {
    const context = 'Some verbose message.';
    const content = { 'SomeKey': 'SomeValue' };

    logger.error(context, content);
    expect(invocationContext.log.error).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.error).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: content,
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  test('writes the log message with content set to empty string when content is null or undefined', () => {
    const context = 'Some error message.';

    logger.error(context);
    expect(invocationContext.log.error).toHaveBeenCalledTimes(1);
    expect(invocationContext.log.error).toHaveBeenCalledWith(JSON.stringify({
      context: context,
      content: '',
      correlation: {
        invocationId: invocationContext.invocationId
      }
    }));
  });

  afterEach(() => {
    mocked(invocationContext.log.error).mockClear();
  });
});
