module.exports = {
  rootDir: "../src",
  setupFilesAfterEnv: ["<rootDir>/../.jest/enzyme.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
    "!index.ts",
    "!utils/mocks/*",
    "!utils/stories/*",
  ],
  coverageDirectory: "<rootDir>/../coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
