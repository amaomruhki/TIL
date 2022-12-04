/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtZXhhbXBsZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./lib/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst userState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"userState\",\n    default: null,\n    dangerouslyAllowMutability: true\n});\nconst login = ()=>{\n    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithRedirect)(auth, provider);\n};\nconst logout = ()=>{\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n};\nconst useAuth = ()=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const setUser = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(userState);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n            setUser(user);\n            setIsLoading(false);\n        });\n    }, [\n        setUser\n    ]);\n    return isLoading;\n};\nconst useUser = ()=>{\n    return (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(userState);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ3FCO0FBUTFDO0FBRVU7QUFJakMsTUFBTVcsU0FBUyxHQUFHVCw0Q0FBSSxDQUFZO0lBQ2pDVSxHQUFHLEVBQUUsV0FBVztJQUNoQkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsMEJBQTBCLEVBQUUsSUFBSTtDQUNoQyxDQUFDO0FBRUssTUFBTUMsS0FBSyxHQUFHLElBQXFCO0lBQ3pDLE1BQU1DLFFBQVEsR0FBRyxJQUFJUCw2REFBa0IsRUFBRTtJQUN6QyxNQUFNUSxJQUFJLEdBQUdaLHNEQUFPLENBQUNLLDBDQUFHLENBQUM7SUFDekIsT0FBT0osaUVBQWtCLENBQUNXLElBQUksRUFBRUQsUUFBUSxDQUFDLENBQUM7Q0FDMUMsQ0FBQztBQUVLLE1BQU1FLE1BQU0sR0FBRyxJQUFxQjtJQUMxQyxNQUFNRCxJQUFJLEdBQUdaLHNEQUFPLENBQUNLLDBDQUFHLENBQUM7SUFDekIsT0FBT0gsc0RBQU8sQ0FBQ1UsSUFBSSxDQUFDLENBQUM7Q0FDckIsQ0FBQztBQUVLLE1BQU1FLE9BQU8sR0FBRyxJQUFlO0lBQ3JDLE1BQU0sS0FBQ0MsU0FBUyxNQUFFQyxZQUFZLE1BQUlwQiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUNoRCxNQUFNcUIsT0FBTyxHQUFHbEIseURBQWlCLENBQUNPLFNBQVMsQ0FBQztJQUU1Q1gsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2YsTUFBTWlCLElBQUksR0FBR1osc0RBQU8sQ0FBQ0ssMENBQUcsQ0FBQztRQUN6QixPQUFPRixpRUFBa0IsQ0FBQ1MsSUFBSSxFQUFFLENBQUNNLElBQUksR0FBSztZQUN6Q0QsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztZQUNkRixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ0gsRUFBRTtRQUFDQyxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQsT0FBT0YsU0FBUyxDQUFDO0NBQ2pCLENBQUM7QUFFSyxNQUFNSSxPQUFPLEdBQUcsSUFBaUI7SUFDdkMsT0FBT3JCLHNEQUFjLENBQUNRLFNBQVMsQ0FBQyxDQUFDO0NBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWV4YW1wbGUvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXRvbSwgdXNlUmVjb2lsVmFsdWUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQge1xyXG5cdFVzZXIsXHJcblx0Z2V0QXV0aCxcclxuXHRzaWduSW5XaXRoUmVkaXJlY3QsXHJcblx0c2lnbk91dCxcclxuXHRvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcblx0R29vZ2xlQXV0aFByb3ZpZGVyLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xyXG5cclxudHlwZSBVc2VyU3RhdGUgPSBVc2VyIHwgbnVsbDtcclxuXHJcbmNvbnN0IHVzZXJTdGF0ZSA9IGF0b208VXNlclN0YXRlPih7XHJcblx0a2V5OiBcInVzZXJTdGF0ZVwiLFxyXG5cdGRlZmF1bHQ6IG51bGwsXHJcblx0ZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHk6IHRydWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG5cdGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cdGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblx0cmV0dXJuIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG5cdGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblx0cmV0dXJuIHNpZ25PdXQoYXV0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpOiBib29sZWFuID0+IHtcclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3Qgc2V0VXNlciA9IHVzZVNldFJlY29pbFN0YXRlKHVzZXJTdGF0ZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cdFx0cmV0dXJuIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG5cdFx0XHRzZXRVc2VyKHVzZXIpO1xyXG5cdFx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0fSk7XHJcblx0fSwgW3NldFVzZXJdKTtcclxuXHJcblx0cmV0dXJuIGlzTG9hZGluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCk6IFVzZXJTdGF0ZSA9PiB7XHJcblx0cmV0dXJuIHVzZVJlY29pbFZhbHVlKHVzZXJTdGF0ZSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF0b20iLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJhcHAiLCJ1c2VyU3RhdGUiLCJrZXkiLCJkZWZhdWx0IiwiZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHkiLCJsb2dpbiIsInByb3ZpZGVyIiwiYXV0aCIsImxvZ291dCIsInVzZUF1dGgiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXRVc2VyIiwidXNlciIsInVzZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./lib/firebase.ts":
/*!*************************!*\
  !*** ./lib/firebase.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\nfirebase_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAc-sahwCXvY-rTx40_dDgouEO_vDxVTj4\",\n    authDomain: \"auth-test-156b1.firebaseapp.com\",\n    projectId: \"auth-test-156b1\",\n    storageBucket: \"auth-test-156b1.appspot.com\",\n    messagingSenderId: \"781602914439\",\n    appId: \"1:781602914439:web:96672d3c84266957ed7822\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsY0FBYyxHQUFHO0lBQ3RCQyxNQUFNLEVBQUVDLHlDQUF3QztJQUNoREcsVUFBVSxFQUFFSCxpQ0FBNEM7SUFDeERLLFNBQVMsRUFBRUwsaUJBQTJDO0lBQ3RETyxhQUFhLEVBQUVQLDZCQUErQztJQUM5RFMsaUJBQWlCLEVBQUVULGNBQW9EO0lBQ3ZFVyxLQUFLLEVBQUVYLDJDQUF1QztDQUM5QztBQUVNLE1BQU1hLEdBQUcsR0FBR2hCLDJEQUFhLENBQUNDLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1leGFtcGxlLy4vbGliL2ZpcmViYXNlLnRzPzVkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG5cdGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcclxuXHRhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuXHRwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcblx0c3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcblx0bWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcblx0YXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebase.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Home = ()=>{\n    const user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const handleLogin = ()=>{\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.login)().catch((error)=>console.error(error));\n    };\n    const handleLogout = ()=>{\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.logout)().catch((error)=>console.error(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Auth Example\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Auth Example\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, undefined),\n                    user !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Login now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 22\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"not login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 43\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        children: \"login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: \"logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\maima\\\\Desktop\\\\log\\\\TIL\\\\auth-example\\\\pages\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUVrQjtBQUNNO0FBRXJELE1BQU1LLElBQUksR0FBYSxJQUFNO0lBQzVCLE1BQU1DLElBQUksR0FBR0osa0RBQU8sRUFBRTtJQUV0QixNQUFNSyxXQUFXLEdBQUcsSUFBWTtRQUMvQkosZ0RBQUssRUFBRSxDQUFDSyxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMvQztJQUVELE1BQU1FLFlBQVksR0FBRyxJQUFZO1FBQ2hDUCxpREFBTSxFQUFFLENBQUNJLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUtDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQscUJBQ0MsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFWiwwRUFBZ0I7OzBCQUMvQiw4REFBQ0Qsa0RBQUk7MEJBQ0osNEVBQUNlLE9BQUs7OEJBQUMsY0FBWTs7Ozs7NkJBQVE7Ozs7O3lCQUNyQjswQkFDUCw4REFBQ0gsS0FBRzs7a0NBQ0gsOERBQUNJLElBQUU7a0NBQUMsY0FBWTs7Ozs7aUNBQUs7b0JBQ3BCVixJQUFJLEtBQUssSUFBSSxpQkFBRyw4REFBQ1csSUFBRTtrQ0FBQyxXQUFTOzs7OztpQ0FBSyxpQkFBRyw4REFBQ0EsSUFBRTtrQ0FBQyxXQUFTOzs7OztpQ0FBSztrQ0FDeEQsOERBQUNDLFFBQU07d0JBQUNDLE9BQU8sRUFBRVosV0FBVztrQ0FBRSxPQUFLOzs7OztpQ0FBUztrQ0FDNUMsOERBQUNXLFFBQU07d0JBQUNDLE9BQU8sRUFBRVIsWUFBWTtrQ0FBRSxRQUFNOzs7OztpQ0FBUzs7Ozs7O3lCQUN6Qzs7Ozs7O2lCQUNELENBQ0w7Q0FDRjtBQUNELGlFQUFlTixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWV4YW1wbGUvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlVXNlciwgbG9naW4sIGxvZ291dCB9IGZyb20gXCIuLi9saWIvYXV0aFwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblx0Y29uc3QgdXNlciA9IHVzZVVzZXIoKTtcblxuXHRjb25zdCBoYW5kbGVMb2dpbiA9ICgpOiB2b2lkID0+IHtcblx0XHRsb2dpbigpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpOiB2b2lkID0+IHtcblx0XHRsb2dvdXQoKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+QXV0aCBFeGFtcGxlPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMT5BdXRoIEV4YW1wbGU8L2gxPlxuXHRcdFx0XHR7dXNlciAhPT0gbnVsbCA/IDxoMj5Mb2dpbiBub3c8L2gyPiA6IDxoMj5ub3QgbG9naW48L2gyPn1cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+bG9naW48L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PmxvZ291dDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlVXNlciIsImxvZ2luIiwibG9nb3V0IiwiSG9tZSIsInVzZXIiLCJoYW5kbGVMb2dpbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9nb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJoMSIsImgyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();