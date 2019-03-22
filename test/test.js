const assert = require('chai').assert;
const StyleSheet = require("../StyleSheet");

const styles = StyleSheet.create({
  container: { margin: 20 },
  list: () => ({
    borderColor: 'red'
  }),
  header: (params) => ({
    height: params.height
  })
})

describe('StyleSheet', () => {
  it('should add a new styles object', () => {
    assert.isObject(styles.styles);
  });

  it('should return correct property', () => {
    assert.deepEqual(styles.get("container"), { margin: 20 });
    assert.deepEqual(styles.get("list"), { borderColor: "red" });
  })

  it("should receive correct parameters", () => {
    const height = 10
    assert.equal(styles.get("header", { height }).height, height);
  })

  it("should correctly flatten array of styles", () => {
    const myStyles = [{ margin: 10, color: 'red' }, { borderColor: 'red', paddingTop: 5 }];
    const flattend = { margin: 10, color: 'red', borderColor: 'red', paddingTop: 5 };
    assert.deepEqual(StyleSheet.flatten(myStyles), flattend);
  })
});

