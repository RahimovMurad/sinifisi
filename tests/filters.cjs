const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = fs.readFileSync('src/constants/furniture.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const context = { exports: {}, require: path => path };
vm.runInNewContext(compiled, context);
const { filterProducts, products } = context.exports;
assert.equal(filterProducts('All', '', false).length, products.length);
for (const category of ['Chair', 'Table', 'Lighting']) {
  const result = filterProducts(category, '', false);
  assert.ok(result.length > 0);
  assert.ok(result.every(item => item.category === category));
}
assert.equal(filterProducts('All', '  MONDY  ', false)[0].id, 1);
assert.equal(filterProducts('Table', 'Mondy', false).length, 0);
assert.equal(filterProducts('All', 'no-such-product', false).length, 0);
assert.ok(filterProducts('All', '', true).every(item => item.sale));
assert.ok(filterProducts('Lighting', '', true).every(item => item.category === 'Lighting' && item.sale));
console.log('Passed: categories, combined search, whitespace/case, empty results, sale filters.');
