/*! Last update: Wed Sep 07 2016 09:56:34 GMT+0800 (CST) */
webpackJsonp([4],{360:function(t,e,d){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=d(3),a=n(o),l=d(254),u=d(338),c=n(u),r=d(335),s={basic:"var instance = (\n    <ButtonToolbar>\n        <Button shape='default'>Default</Button>\n        <Button shape='primary'>Primary</Button>\n        <Button shape='success'>Success</Button>\n        <Button shape='warning'>Warning</Button>\n        <Button shape='danger'>Danger</Button>\n        <Button shape='info'>Info</Button>\n        <Button shape='link'>Link</Button>\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n",size:"var instance = (\n    <ButtonToolbar>\n        <Button shape='default' size='lg'>Large</Button>\n        <Button shape='default' size='md'>Medium</Button>\n        <Button shape='default' size='sm'>Small</Button>\n        <Button shape='default' size='xs'>Xsmall</Button>\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n",block:"\nvar instance = (\n    <ButtonToolbar>\n        <Button shape='default' block>Block</Button>\n        <Button shape='primary' block>Block</Button>\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n"};e["default"]=a["default"].createClass({displayName:"button",render:function(){return a["default"].createElement(l.Col,{md:9,sm:12},a["default"].createElement("h1",{className:"page-header"},"Buttons",a["default"].createElement("span",{className:"page-header-en"},a["default"].createElement("code",null,"Button"))),a["default"].createElement("h3",null,"默认样式"),a["default"].createElement(c["default"],{code:s.basic}),a["default"].createElement("h3",null,"按钮大小"),a["default"].createElement(l.Text,null,a["default"].createElement("code",null,"size"),"属性设置按钮大小, 值包括:",a["default"].createElement("code",null,"lg")," ",a["default"].createElement("code",null,"md")," ",a["default"].createElement("code",null,"sm")," ",a["default"].createElement("code",null,"xs")),a["default"].createElement(c["default"],{code:s.size}),a["default"].createElement(l.Text,null,"创建块级的按钮，给组件设置一个 ",a["default"].createElement("code",null,"block")," 属性"),a["default"].createElement(c["default"],{code:s.block}),a["default"].createElement("h3",null,"组件属性"),a["default"].createElement(r.Markdown,null,d(361)))}})},361:function(t,e){t.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>active</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>block</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td><code>btn</code></td> <td></td> </tr> <tr> <td>componentClass</td> <td>elementType</td> <td></td> <td></td> </tr> <tr> <td>disabled</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>href</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>target</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>type</td> <td>one of : <code>button</code> <code>reset</code> <code>submit</code></td> <td><code>button</code></td> <td></td> </tr> <tr> <td>size</td> <td>one of : <code>lg</code> <code>md</code> <code>sm</code> <code>xs</code></td> <td></td> <td></td> </tr> <tr> <td>shape</td> <td>one of : <code>default</code> <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code> <code>info</code> <code>link</code></td> <td></td> <td></td> </tr> </tbody> </table>"}});