webpackJsonp([0],[function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";function onRecreateCanvas(){}function animate(){cubeRotation=new _threeJs2["default"].Euler(cubeRotation.x+.1,cubeRotation.y+.1,0),react3Renderer.render(_react2["default"].createElement("react3",{canvas:canvas,width:width,height:height,onRecreateCanvas:onRecreateCanvas,context:"3d",antialias:!0,mainCamera:"camera"},_react2["default"].createElement("scene",null,_react2["default"].createElement("perspectiveCamera",{name:"camera",fov:75,aspect:width/height,near:.1,far:1e3,position:cameraPosition}),_react2["default"].createElement("mesh",{rotation:cubeRotation},_react2["default"].createElement("boxGeometry",{width:1,height:1,depth:1}),_react2["default"].createElement("meshBasicMaterial",{color:16711680}))))),requestAnimationFrame(animate)}var _interopRequireDefault=__webpack_require__(2)["default"],_react=__webpack_require__(3),_react2=_interopRequireDefault(_react),_reactThreeRendererLibReact3Renderer=__webpack_require__(155),_reactThreeRendererLibReact3Renderer2=_interopRequireDefault(_reactThreeRendererLibReact3Renderer),_threeJs=__webpack_require__(202),_threeJs2=_interopRequireDefault(_threeJs),canvas=document.getElementById("canvas"),react3Renderer=new _reactThreeRendererLibReact3Renderer2["default"],width=800,height=600,cameraPosition=new _threeJs2["default"].Vector3(0,0,5),cubeRotation=new _threeJs2["default"].Euler;animate()}]);
//# sourceMappingURL=bundle-advanced.js.map