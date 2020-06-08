module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/", "/cypress"],
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
};
