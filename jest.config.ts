import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "node test",
    testEnvironment: "node",
    verbose: true,
};

export default config 