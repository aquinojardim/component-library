module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!**/index.ts',
    '!**/*.stories.tsx',
    '!**/*.test.tsx',
    '!**/*.types.ts',
    '!**/*.scss',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
