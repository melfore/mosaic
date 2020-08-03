module.exports = {
  rootDir: "../src",
  setupFilesAfterEnv: ["<rootDir>/../.jest/enzyme.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.stories.{js,jsx,ts,tsx}", "!index.ts", "!utils/stories/*"],
  coverageDirectory: "<rootDir>/../coverage",
  // TODO: complete tests
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};
