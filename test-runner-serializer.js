// The jest-serializer-html package is available as a dependency of the test-runner
const jestSerializerHtml = require("jest-serializer-html");

const CSS_DYNAMIC_ID = new RegExp("css(-[a-zA-Z0-9]*)*", "g");
const MUI_CLONE_ELEMENT = new RegExp('data-mui-internal-clone-element="true"', "g");

module.exports = {
  /*
   * The test-runner calls the serialize function when the test reaches the expect(SomeHTMLElement).toMatchSnapshot().
   * Replace method is used to normalize the serialize output avoiding inconsistent results
   * For instance the random numer after "react-aria" could change randomly.
   * It gets replaces with a static one:
   * - from:  <label id="react-aria970235672-:rl:" for="react-aria970235672-:rk:">Favorite color</label>
   * - to:    <label id="react-mocked_id" for="react-mocked_id">Favorite color</label>
   */
  serialize(val) {
    const withFixedIds = val
      // It will replace all dynamic IDs with a static ID so that the snapshot is consistent
      .replace(CSS_DYNAMIC_ID, "css-mui-classname")
      // Replaces MUI data tag generated only in dev mode
      .replace(MUI_CLONE_ELEMENT, "");
    return jestSerializerHtml.print(withFixedIds);
  },
  test(val) {
    return jestSerializerHtml.test(val);
  },
};
