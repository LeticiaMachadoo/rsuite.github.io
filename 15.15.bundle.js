/*! Last update: Wed Sep 07 2016 09:56:34 GMT+0800 (CST) */
webpackJsonp([15],{393:function(t,e,d){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=d(3),r=n(a),l=d(254),o=d(338),h=n(o),c=d(335),s={basic:'const tableInstance = (\n  <Table>\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>URL</th>\n        <th>Title</th>\n        <th>PV</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>http://wwww.hypers.com/</td>\n        <td>Hypers</td>\n        <td>12342</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>http://www.hypers.com/about/</td>\n        <td>About - Hypers</td>\n        <td>3253</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td colSpan="2">Total</td>\n        <td>15595</td>\n      </tr>\n    </tbody>\n  </Table>\n);\n\nReactDOM.render(tableInstance, mountNode);\n',props:'const tableInstance = (\n  <Table striped bordered condensed hover>\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>URL</th>\n        <th>Title</th>\n        <th>PV</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>http://wwww.hypers.com/</td>\n        <td>Hypers</td>\n        <td>12342</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>http://www.hypers.com/about/</td>\n        <td>About - Hypers</td>\n        <td>3253</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td colSpan="2">Total</td>\n        <td>15595</td>\n      </tr>\n    </tbody>\n  </Table>\n);\n\nReactDOM.render(tableInstance, mountNode);\n'};e["default"]=r["default"].createClass({displayName:"tables",render:function(){return r["default"].createElement(l.Col,{md:9,sm:12},r["default"].createElement("h1",{className:"page-header"},"Tables",r["default"].createElement("span",{className:"page-header-en"},r["default"].createElement("code",null,"Table"))),r["default"].createElement("h3",null,"默认样式"),r["default"].createElement(h["default"],{code:s.basic}),r["default"].createElement("h3",null,"属性叠加"),r["default"].createElement(h["default"],{code:s.props}),r["default"].createElement("h3",null,"组件属性"),r["default"].createElement(c.Markdown,null,d(394)))}})},394:function(t,e){t.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>bordered</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>condensed</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>hover</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>responsive</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>striped</td> <td>boolean</td> <td></td> <td></td> </tr> </tbody> </table>"}});