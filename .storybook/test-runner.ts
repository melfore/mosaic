import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async postRender(page, context) {
    const elementHandler = await page.$("#storybook-root");
    if (!elementHandler) {
      return;
    }

    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
