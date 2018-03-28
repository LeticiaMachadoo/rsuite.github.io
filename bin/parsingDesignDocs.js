/**
 * 解析 design/index.html 中的导航的 hash ，使之与 menu 中 components.json 的 hash 对应。
 */
const fs = require('fs');
const { promisify } = require('util');
const _ = require('lodash');
const readfile = filePath => promisify(fs.readFile)(filePath, 'utf8');
const trimNumber = string => string.replace(/\d+.*\d+\s+/, '');
const relativePath = path => require('path').join(__dirname, path);

const DESIGN_INDEX_PATH = '../public/design/index.html';
const COMPONENTS_JSON_PATH = '../src/fixtures/components.json';

(async function() {
  const designHtmlData = await readfile(relativePath(DESIGN_INDEX_PATH));
  const componentsData = JSON.parse(await readfile(relativePath(COMPONENTS_JSON_PATH)));
  const jsonData = JSON.parse(/\$\(function\(\)\{ SMApp\((.*)\) \}\)\;/.exec(designHtmlData)[1]);
  const artboadrsData = _.get(jsonData, 'artboards').map((data, index) => ({
    ...data,
    name: trimNumber(data.name),
    index
  }));
  const artboards = _.keyBy(artboadrsData, 'name');

  componentsData.forEach(obj => {
    const { name } = obj;
    const designHashIndex = _.get(artboards, `${name}.index`) || null;
    if (designHashIndex) {
      obj.designHash = `artboard${designHashIndex}`;
    }
  });
  fs.writeFile(COMPONENTS_JSON_PATH, JSON.stringify(componentsData, null, '  '));
}());
