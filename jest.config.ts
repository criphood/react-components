import type { Config } from '@jest/types';
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    displayName: {
      name: 'placeNameOfYourAppHere',
      color: 'greenBright',
    },
    clearMocks: true,
    // verbose: true,
    // // testMatch: ['**/**/*.test.ts'],
    // testEnvironment: 'node',
    // detectOpenHandles: true,
    // collectCoverage: true,
    // transform: { '^.+\\.tsx?$': 'ts-jest' },
    // forceExit: true,
  };
};
