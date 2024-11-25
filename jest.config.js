module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',  // This tells Jest to use ts-jest to process TypeScript files
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
