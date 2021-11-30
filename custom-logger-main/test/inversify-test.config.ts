import 'reflect-metadata';
import { Container } from 'inversify';
import { mock, mockDeep } from 'jest-mock-extended';
import { Context } from '@azure/functions';
import { TYPES } from '../src';

export const testContainer = ((): Container => {
  const container = new Container();

  container.bind<Context>(TYPES.Context).toConstantValue(mockDeep<Context>());

  return container;
})();
