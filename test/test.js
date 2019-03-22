const assert = require('chai').assert;
const StyleSheet = require("../StyleSheet");

StyleSheet.create({
  container: { margin: 20 },
  list: () => ({
    borderColor: 'red'
  }),
  header: (params) => ({
    height: params.height
  })
});

describe('', () => {
  it('should add a new styles object', () => {
    assert.isObject(StyleSheet.styles);
    assert.isObject(StyleSheet.get("container"));
  });

  it('should return correct property', () => {
    assert.ownInclude(StyleSheet.get("container"), { margin: 20 });
    assert.ownInclude(StyleSheet.get("list"), { borderColor: "red" });
  })

  it("should receive correct parameters", () => {
    const height = 10
    assert.equal(StyleSheet.get("header", { height }).height, height);
  })

  it("should correctly flatten array of styles", () => {
    const styles = [{ margin: 10, color: 'red' }, { borderColor: 'red', paddingTop: 5 }];
    const flattend = { margin: 10, color: 'red', borderColor: 'red', paddingTop: 5 };
    assert.deepEqual(StyleSheet.flatten(styles), flattend);
  })
});

