// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"93v64":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3e508fdb828852a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lhpGb":[function(require,module,exports,__globalThis) {
// src/js/main.js
var _domElementsJs = require("./modules/domElements.js");
var _stateJs = require("./modules/state.js");
// Import all quizLogic functions directly
var _quizLogicJs = require("./modules/quizLogic.js"); // Import all as a namespace
var _uiHandlersJs = require("./modules/uiHandlers.js"); // Import all as a namespace
var _fileLoaderJs = require("./modules/fileLoader.js");
'use strict';
// Set up the circular dependencies by passing references
// This must be done BEFORE initializeQuiz or other functions that use these callbacks are called.
// It's crucial that quizLogic gets references to *its own* functions (displayQuestion, checkAnswers, resetQuiz)
// AND uiHandlers functions (updateNavigationButtons, updateQuestionBoxStatus, generateQuestionNavPanel)
// and vice-versa, but via injection through main.js.
// Here, we define the concrete functions
const displayQuestionConcrete = (index)=>_quizLogicJs.displayQuestion(index);
const checkAnswersConcrete = ()=>_quizLogicJs.checkAnswers();
const resetQuizConcrete = ()=>_quizLogicJs.resetQuiz();
// Now, inject these concrete functions into quizLogic and uiHandlers
_quizLogicJs.setCallbacks(displayQuestionConcrete, checkAnswersConcrete, resetQuizConcrete);
// --- Event Listeners for UI Controls ---
(0, _domElementsJs.addQuestionsBtn).addEventListener('click', ()=>{
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (0, _fileLoaderJs.handleFileLoad);
    input.click();
});
(0, _domElementsJs.quizModeSelect).addEventListener('change', (event)=>{
    (0, _stateJs.setQuizMode)(event.target.value);
    _uiHandlersJs.setInitialUIState(); // Call through namespace
});
(0, _domElementsJs.numQuestionsInput).addEventListener('change', (event)=>{
    let value = parseInt(event.target.value);
    const max = parseInt((0, _domElementsJs.numQuestionsInput).max);
    if (isNaN(value) || value < 1) value = 1;
    else if (value > max) value = max;
    (0, _domElementsJs.numQuestionsInput).value = value;
    (0, _stateJs.setNumQuestionsToAsk)(value);
});
(0, _domElementsJs.timeLimitInput).addEventListener('change', (event)=>{
    let value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) value = 1;
    (0, _domElementsJs.timeLimitInput).value = value;
    (0, _stateJs.setTimeLimitMinutes)(value);
});
(0, _domElementsJs.startQuizBtn).addEventListener('click', ()=>{
    if ((0, _stateJs.questions).length === 0) {
        alert("Please load a question set first using the 'Add Question Set' button.");
        return;
    }
    if ((0, _domElementsJs.numQuestionsInput).value > (0, _stateJs.questions).length || (0, _domElementsJs.numQuestionsInput).value <= 0) {
        alert(`Please enter a valid number of questions between 1 and ${(0, _stateJs.questions).length}.`);
        return;
    }
    console.log("Attempting to initialize quiz...");
    _quizLogicJs.initializeQuiz(); // Call initializeQuiz from the namespace
    console.log("initializeQuiz called.");
});
(0, _domElementsJs.prevQuestionBtn).addEventListener('click', ()=>{
    if ((0, _stateJs.currentQuestionIndex) > 0) {
        (0, _stateJs.setCurrentQuestionIndex)((0, _stateJs.currentQuestionIndex) - 1);
        displayQuestionConcrete((0, _stateJs.currentQuestionIndex)); // Use the concrete function
        _uiHandlersJs.updateNavigationButtons(displayQuestionConcrete, checkAnswersConcrete); // Pass callbacks
    }
});
(0, _domElementsJs.nextQuestionBtn).addEventListener('click', ()=>{
    if (!(0, _stateJs.quizEnded)) _uiHandlersJs.updateQuestionBoxStatus((0, _stateJs.currentQuestionIndex)); // Call from uiHandlers namespace
    if ((0, _stateJs.currentQuestionIndex) < (0, _stateJs.shuffledQuestions).length - 1) {
        (0, _stateJs.setCurrentQuestionIndex)((0, _stateJs.currentQuestionIndex) + 1);
        displayQuestionConcrete((0, _stateJs.currentQuestionIndex)); // Use the concrete function
        _uiHandlersJs.updateNavigationButtons(displayQuestionConcrete, checkAnswersConcrete); // Pass callbacks
    } else if ((0, _stateJs.currentQuestionIndex) === (0, _stateJs.shuffledQuestions).length - 1 && !(0, _stateJs.quizEnded)) checkAnswersConcrete(); // Use the concrete function
});
// --- Initialization ---
document.addEventListener('DOMContentLoaded', ()=>{
    _uiHandlersJs.setInitialUIState(); // Call through namespace
    _uiHandlersJs.addQuizEventListeners(resetQuizConcrete); // Pass the concrete resetQuiz function
});

},{"./modules/domElements.js":"h8vmb","./modules/state.js":"jD1un","./modules/quizLogic.js":"fYNEe","./modules/uiHandlers.js":"aumkM","./modules/fileLoader.js":"73PCS"}],"h8vmb":[function(require,module,exports,__globalThis) {
// src/js/modules/domElements.js
// DOM Elements - Welcome Screen
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomeScreen", ()=>welcomeScreen);
parcelHelpers.export(exports, "startQuizBtn", ()=>startQuizBtn);
parcelHelpers.export(exports, "addQuestionsBtn", ()=>addQuestionsBtn);
parcelHelpers.export(exports, "quizModeSelect", ()=>quizModeSelect);
parcelHelpers.export(exports, "numQuestionsInput", ()=>numQuestionsInput);
parcelHelpers.export(exports, "maxQuestionsSpan", ()=>maxQuestionsSpan);
parcelHelpers.export(exports, "timeLimitGroup", ()=>timeLimitGroup);
parcelHelpers.export(exports, "timeLimitInput", ()=>timeLimitInput);
parcelHelpers.export(exports, "quizLayout", ()=>quizLayout);
parcelHelpers.export(exports, "testContainer", ()=>testContainer);
parcelHelpers.export(exports, "resultsDiv", ()=>resultsDiv);
parcelHelpers.export(exports, "timerDisplay", ()=>timerDisplay);
parcelHelpers.export(exports, "prevQuestionBtn", ()=>prevQuestionBtn);
parcelHelpers.export(exports, "nextQuestionBtn", ()=>nextQuestionBtn);
parcelHelpers.export(exports, "resetQuizBtn", ()=>resetQuizBtn);
parcelHelpers.export(exports, "questionNavPanel", ()=>questionNavPanel);
parcelHelpers.export(exports, "questionBoxesContainer", ()=>questionBoxesContainer);
parcelHelpers.export(exports, "mainElement", ()=>mainElement);
const welcomeScreen = document.getElementById('welcomeScreen');
console.log('DOM Element Check: welcomeScreen', welcomeScreen); // ADD THIS
const startQuizBtn = document.getElementById('startQuizBtn');
console.log('DOM Element Check: startQuizBtn', startQuizBtn); // ADD THIS
const addQuestionsBtn = document.getElementById('addQuestionsBtn');
console.log('DOM Element Check: addQuestionsBtn', addQuestionsBtn); // ADD THIS
const quizModeSelect = document.getElementById('quizMode');
console.log('DOM Element Check: quizModeSelect', quizModeSelect); // ADD THIS
const numQuestionsInput = document.getElementById('numQuestions');
console.log('DOM Element Check: numQuestionsInput', numQuestionsInput); // ADD THIS
const maxQuestionsSpan = document.getElementById('maxQuestions');
console.log('DOM Element Check: maxQuestionsSpan', maxQuestionsSpan); // ADD THIS
const timeLimitGroup = document.getElementById('timeLimitGroup');
console.log('DOM Element Check: timeLimitGroup', timeLimitGroup); // ADD THIS
const timeLimitInput = document.getElementById('timeLimit');
console.log('DOM Element Check: timeLimitInput', timeLimitInput); // ADD THIS
const quizLayout = document.getElementById('quizLayout');
console.log('DOM Element Check: quizLayout', quizLayout); // ADD THIS
const testContainer = document.getElementById('testContainer');
console.log('DOM Element Check: testContainer', testContainer); // ADD THIS
const resultsDiv = document.getElementById('results');
console.log('DOM Element Check: resultsDiv', resultsDiv); // ADD THIS
const timerDisplay = document.getElementById('timer');
console.log('DOM Element Check: timerDisplay', timerDisplay); // ADD THIS
const prevQuestionBtn = document.getElementById('prevQuestionBtn');
console.log('DOM Element Check: prevQuestionBtn', prevQuestionBtn); // ADD THIS
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
console.log('DOM Element Check: nextQuestionBtn', nextQuestionBtn); // ADD THIS
const resetQuizBtn = document.getElementById('resetQuizBtn');
console.log('DOM Element Check: resetQuizBtn', resetQuizBtn); // ADD THIS
const questionNavPanel = document.getElementById('questionNavPanel');
console.log('DOM Element Check: questionNavPanel', questionNavPanel); // ADD THIS
const questionBoxesContainer = document.getElementById('questionBoxes');
console.log('DOM Element Check: questionBoxesContainer', questionBoxesContainer); // ADD THIS
const mainElement = document.querySelector('main');
console.log('DOM Element Check: mainElement', mainElement); // ADD THIS

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jD1un":[function(require,module,exports,__globalThis) {
// src/js/modules/state.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "questions", ()=>questions);
parcelHelpers.export(exports, "quizMode", ()=>quizMode);
parcelHelpers.export(exports, "numQuestionsToAsk", ()=>numQuestionsToAsk);
parcelHelpers.export(exports, "timeLimitMinutes", ()=>timeLimitMinutes);
parcelHelpers.export(exports, "currentQuestionIndex", ()=>currentQuestionIndex);
parcelHelpers.export(exports, "shuffledQuestions", ()=>shuffledQuestions);
parcelHelpers.export(exports, "userAnswers", ()=>userAnswers);
parcelHelpers.export(exports, "startTime", ()=>startTime);
parcelHelpers.export(exports, "timerInterval", ()=>timerInterval);
parcelHelpers.export(exports, "quizEnded", ()=>quizEnded);
// Functions to update state (important for managing state changes externally)
parcelHelpers.export(exports, "setQuestions", ()=>setQuestions);
parcelHelpers.export(exports, "setQuizMode", ()=>setQuizMode);
parcelHelpers.export(exports, "setNumQuestionsToAsk", ()=>setNumQuestionsToAsk);
parcelHelpers.export(exports, "setTimeLimitMinutes", ()=>setTimeLimitMinutes);
parcelHelpers.export(exports, "setCurrentQuestionIndex", ()=>setCurrentQuestionIndex);
parcelHelpers.export(exports, "setShuffledQuestions", ()=>setShuffledQuestions);
parcelHelpers.export(exports, "setUserAnswers", ()=>setUserAnswers);
parcelHelpers.export(exports, "updateUserAnswer", ()=>updateUserAnswer);
parcelHelpers.export(exports, "setQuizEnded", ()=>setQuizEnded);
parcelHelpers.export(exports, "setStartTime", ()=>setStartTime);
parcelHelpers.export(exports, "setTimerInterval", ()=>setTimerInterval);
parcelHelpers.export(exports, "getStartTime", ()=>getStartTime);
parcelHelpers.export(exports, "getTimerInterval", ()=>getTimerInterval);
let questions = []; // Global variable to store questions loaded from JSON
let quizMode = 'practice'; // 'practice' or 'exam'
let numQuestionsToAsk = 10;
let timeLimitMinutes = 30; // Only for exam mode
let currentQuestionIndex = 0; // Track the currently displayed question
let shuffledQuestions = [];
let userAnswers = {}; // Store answers for all questions (key: question.id, value: selectedOptionValue or null)
let startTime;
let timerInterval;
let quizEnded = false; // Flag to check if quiz has been submitted/ended
function setQuestions(newQuestions) {
    questions = newQuestions;
}
function setQuizMode(mode) {
    quizMode = mode;
}
function setNumQuestionsToAsk(num) {
    numQuestionsToAsk = num;
}
function setTimeLimitMinutes(minutes) {
    timeLimitMinutes = minutes;
}
function setCurrentQuestionIndex(index) {
    currentQuestionIndex = index;
}
function setShuffledQuestions(shuffled) {
    shuffledQuestions = shuffled;
}
function setUserAnswers(answers) {
    userAnswers = answers;
}
function updateUserAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
}
function setQuizEnded(ended) {
    quizEnded = ended;
}
function setStartTime(time) {
    startTime = time;
}
function setTimerInterval(interval) {
    timerInterval = interval;
}
function getStartTime() {
    return startTime;
}
function getTimerInterval() {
    return timerInterval;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYNEe":[function(require,module,exports,__globalThis) {
// src/js/modules/quizLogic.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Setter functions to allow main.js to inject the callbacks
parcelHelpers.export(exports, "setCallbacks", ()=>setCallbacks);
/**
 * Initializes a new quiz session.
 * Resets quiz state, shuffles questions, and sets up the timer.
 */ parcelHelpers.export(exports, "initializeQuiz", ()=>initializeQuiz);
/**
 * Displays a specific question based on its index. (This function will be passed as a callback)
 * @param {number} index - The index of the question to display.
 */ parcelHelpers.export(exports, "displayQuestion", ()=>displayQuestion);
/**
 * Applies correct/incorrect styling and reveals explanations after the quiz ends.
 * @param {object} q - The question object to apply feedback for.
 */ parcelHelpers.export(exports, "applyFeedbackStyling", ()=>applyFeedbackStyling);
/**
 * Calculates quiz results and displays them.
 * Sets `quizEnded` flag and disables further input.
 */ parcelHelpers.export(exports, "checkAnswers", ()=>checkAnswers);
/**
 * Resets the quiz state and returns to the welcome screen.
 */ parcelHelpers.export(exports, "resetQuiz", ()=>resetQuiz);
var _domElementsJs = require("./domElements.js");
var _stateJs = require("./state.js");
var _timerJs = require("./timer.js");
var _uiHandlersJs = require("./uiHandlers.js");
// IMPORTANT: Declare these at the module scope so they are available to nested functions
// These will be assigned by the orchestrator (main.js)
let _displayQuestionCallback;
let _checkAnswersCallback;
let _resetQuizCallback;
function setCallbacks(displayQ, checkA, resetQ) {
    _displayQuestionCallback = displayQ;
    _checkAnswersCallback = checkA;
    _resetQuizCallback = resetQ;
}
function initializeQuiz() {
    console.log("QUIZ_INIT: Entered initializeQuiz function.");
    (0, _stateJs.setQuizEnded)(false);
    (0, _stateJs.setCurrentQuestionIndex)(0);
    const actualNumQuestions = Math.min((0, _stateJs.numQuestionsToAsk), (0, _stateJs.questions).length);
    const newShuffledQuestions = [
        ...(0, _stateJs.questions)
    ].sort(()=>Math.random() - 0.5).slice(0, actualNumQuestions);
    (0, _stateJs.setShuffledQuestions)(newShuffledQuestions);
    (0, _stateJs.setUserAnswers)({});
    console.log("QUIZ_INIT: Questions shuffled and userAnswers initialized. Shuffled count:", newShuffledQuestions.length);
    newShuffledQuestions.forEach((q)=>{
        (0, _stateJs.updateUserAnswer)(q.id, null); // Initialize answers to null for all questions
    });
    // --- UI Transition Calls ---
    console.log("QUIZ_INIT: Attempting UI transition...");
    (0, _domElementsJs.welcomeScreen).classList.add('hidden'); // This is the key line for welcomeScreen
    console.log('QUIZ_INIT: welcomeScreen class after add hidden:', (0, _domElementsJs.welcomeScreen).className);
    (0, _domElementsJs.quizLayout).classList.remove('hidden'); // This is the key line for quizLayout
    console.log('QUIZ_INIT: quizLayout class after remove hidden:', (0, _domElementsJs.quizLayout).className);
    (0, _domElementsJs.timerDisplay).classList.remove('hidden'); // This is the key line for timerDisplay
    console.log('QUIZ_INIT: timerDisplay class after remove hidden:', (0, _domElementsJs.timerDisplay).className);
    // --- End UI Transition Calls ---
    console.log("QUIZ_INIT: Generating question nav panel...");
    (0, _uiHandlersJs.generateQuestionNavPanel)(_displayQuestionCallback, (0, _uiHandlersJs.updateQuestionBoxStatus), _updateNavigationButtons);
    console.log("QUIZ_INIT: Question nav panel generated.");
    console.log("QUIZ_INIT: Displaying first question...");
    _displayQuestionCallback((0, _stateJs.currentQuestionIndex)); // Use the injected callback here
    console.log("QUIZ_INIT: First question displayed.");
    if ((0, _stateJs.quizMode) === 'exam') (0, _timerJs.startTimer)((0, _stateJs.timeLimitMinutes) * 60, _checkAnswersCallback); // <--- MODIFIED: Pass the callback here
    else (0, _timerJs.startTimer)(0); // Practice mode counts up from 0
    console.log("QUIZ_INIT: Timer started.");
    // Pass the resetQuizCallback to addQuizEventListeners
    (0, _uiHandlersJs.addQuizEventListeners)(_resetQuizCallback);
    // Call updateNavigationButtons with the correct callbacks
    _updateNavigationButtons(_displayQuestionCallback, _checkAnswersCallback); // Use the injected callbacks here
    console.log("QUIZ_INIT: Quiz initialized successfully.");
}
function displayQuestion(index) {
    (0, _domElementsJs.testContainer).innerHTML = ''; // Clear previous question content
    if (index < 0 || index >= (0, _stateJs.shuffledQuestions).length) {
        console.error("Attempted to display out-of-bounds question index:", index);
        return;
    }
    const q = (0, _stateJs.shuffledQuestions)[index];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.dataset.id = q.id;
    // Build options, pre-selecting if an answer exists and disabling if quiz has ended
    const optionsHTML = q.options.map((option)=>`
        <label>
            <input type="radio"
                    name="question${q.id}"
                    value="${option}"
                    ${(0, _stateJs.userAnswers)[q.id] === option ? 'checked' : ''}
                    ${(0, _stateJs.quizEnded) ? 'disabled' : ''}>
            ${option}
        </label>
    `).join('');
    const questionHTML = `
        <h3>${index + 1}: ${q.question}</h3>
        ${optionsHTML}
        <div class="explanation" id="explanation${q.id}" style="display: ${(0, _stateJs.quizEnded) ? 'block' : 'none'};">
            <p><strong>Explanation:</strong> ${q.explanation}</p>
        </div>
    `;
    questionDiv.innerHTML = questionHTML;
    (0, _domElementsJs.testContainer).appendChild(questionDiv);
    // Add event listeners for radio buttons to update user answers
    const radioButtons = questionDiv.querySelectorAll(`input[name="question${q.id}"]`);
    radioButtons.forEach((radio)=>{
        radio.addEventListener('change', (event)=>{
            (0, _stateJs.updateUserAnswer)(q.id, event.target.value);
            console.log(`Answer for Q${q.id} updated: ${event.target.value}`);
            (0, _uiHandlersJs.updateQuestionBoxStatus)((0, _stateJs.currentQuestionIndex)); // Update side panel box status
        });
    });
    // Apply immediate feedback styling if the quiz has ended
    if (0, _stateJs.quizEnded) applyFeedbackStyling(q);
    (0, _uiHandlersJs.updateQuestionNavHighlight)(index); // Highlight the current question in the side panel
}
function applyFeedbackStyling(q) {
    const options = document.querySelectorAll(`#testContainer input[name="question${q.id}"]`);
    const userAnswer = (0, _stateJs.userAnswers)[q.id];
    options.forEach((opt)=>{
        opt.disabled = true; // Ensure all options are disabled for review
        // Remove previous feedback classes before applying new ones (important for navigation)
        opt.parentElement.classList.remove('correct', 'incorrect');
        if (opt.value === q.answer) opt.parentElement.classList.add('correct'); // Mark correct answer
        else if (opt.value === userAnswer && userAnswer !== q.answer) opt.parentElement.classList.add('incorrect'); // Mark user's incorrect answer
    });
    const explanationDiv = document.getElementById(`explanation${q.id}`);
    if (explanationDiv) {
        explanationDiv.style.display = 'block'; // Show explanation
        explanationDiv.style.color = 'var(--text-light)'; // Ensure readability
    }
}
function checkAnswers() {
    (0, _timerJs.stopTimer)(); // Stop the timer
    (0, _stateJs.setQuizEnded)(true); // Mark quiz as ended
    // Update side panel question boxes with correct/incorrect status
    (0, _stateJs.shuffledQuestions).forEach((q, index)=>{
        const questionBox = (0, _domElementsJs.questionBoxesContainer).children[index];
        if (questionBox) {
            questionBox.classList.remove('answered', 'not-answered', 'current'); // Clean up temporary states
            const userAnswer = (0, _stateJs.userAnswers)[q.id];
            if (userAnswer === q.answer) questionBox.classList.add('correct');
            else questionBox.classList.add('incorrect');
        }
    });
    // Calculate score
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    (0, _stateJs.shuffledQuestions).forEach((q)=>{
        const userAnswer = (0, _stateJs.userAnswers)[q.id];
        if (userAnswer === null) unanswered++;
        else if (userAnswer === q.answer) correct++;
        else incorrect++;
    });
    const totalQuestionsAsked = (0, _stateJs.shuffledQuestions).length;
    const percentage = totalQuestionsAsked > 0 ? Math.round(correct / totalQuestionsAsked * 100) : 0;
    // Display results
    (0, _domElementsJs.resultsDiv).innerHTML = `
        <h2>Test Results</h2>
        <p>Correct: <span class="correct">${correct}</span></p>
        <p>Incorrect: <span class="incorrect">${incorrect}</span></p>
        <p>Unanswered: ${unanswered}</p>
        <p>Score: ${percentage}%</p>
        <p>${(0, _domElementsJs.timerDisplay).textContent}</p>
    `;
    // Disable all radio inputs in the current question to prevent changes after submission
    document.querySelectorAll('.question input[type="radio"]').forEach((input)=>{
        input.disabled = true;
    });
    _updateNavigationButtons(_displayQuestionCallback, _checkAnswersCallback); // Use the injected callbacks here
    _displayQuestionCallback((0, _stateJs.currentQuestionIndex)); // Re-display current question to show feedback
}
function resetQuiz() {
    (0, _timerJs.stopTimer)();
    (0, _domElementsJs.timerDisplay).classList.add('hidden');
    (0, _domElementsJs.resultsDiv).innerHTML = '';
    (0, _uiHandlersJs.setInitialUIState)(); // Return to welcome screen
}
// Renamed and exported internal updateNavigationButtons for quizLogic to use
function _updateNavigationButtons(displayQuestionCallback, checkAnswersCallback) {
    (0, _uiHandlersJs.updateNavigationButtons)(displayQuestionCallback, checkAnswersCallback);
}

},{"./domElements.js":"h8vmb","./state.js":"jD1un","./timer.js":"crqMr","./uiHandlers.js":"aumkM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"crqMr":[function(require,module,exports,__globalThis) {
// src/js/modules/timer.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Starts or resets the quiz timer based on quiz mode.
 * @param {number} limitSeconds - The time limit in seconds for exam mode, 0 for practice mode.
 * @param {Function} checkAnswersCallback - Callback function to call when time runs out in exam mode. // <--- ADD THIS PARAMETER
 */ parcelHelpers.export(exports, "startTimer", ()=>startTimer);
parcelHelpers.export(exports, "stopTimer", ()=>stopTimer);
var _domElementsJs = require("./domElements.js");
var _stateJs = require("./state.js");
// REMOVE THIS LINE: import { checkAnswers } from './quizLogic.js';
/**
 * Formats a total number of seconds into a MM:SS string.
 * @param {number} totalSeconds - The total number of seconds.
 * @returns {string} Formatted time string (MM:SS).
 */ function formatTime(totalSeconds) {
    if (totalSeconds < 0) totalSeconds = 0;
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `Time: ${minutes}:${seconds}`;
}
/**
 * Updates the timer display for practice mode (counts up).
 */ function updatePracticeTimer() {
    const now = new Date();
    const elapsed = new Date(now - (0, _stateJs.getStartTime)());
    const minutes = elapsed.getMinutes().toString().padStart(2, '0');
    const seconds = elapsed.getSeconds().toString().padStart(2, '0');
    (0, _domElementsJs.timerDisplay).textContent = `Time: ${minutes}:${seconds}`;
}
function startTimer(limitSeconds = 0, checkAnswersCallback) {
    clearInterval((0, _stateJs.getTimerInterval)()); // Clear any existing timer
    if (limitSeconds > 0) {
        let remainingSeconds = limitSeconds;
        (0, _domElementsJs.timerDisplay).textContent = formatTime(remainingSeconds);
        const interval = setInterval(()=>{
            remainingSeconds--;
            (0, _domElementsJs.timerDisplay).textContent = formatTime(remainingSeconds);
            if (remainingSeconds <= 0) {
                clearInterval((0, _stateJs.getTimerInterval)());
                alert("Time's up! Submitting your answers.");
                if (checkAnswersCallback) checkAnswersCallback();
            }
        }, 1000);
        (0, _stateJs.setTimerInterval)(interval);
    } else {
        (0, _stateJs.setStartTime)(new Date());
        (0, _domElementsJs.timerDisplay).textContent = 'Time: 00:00';
        const interval = setInterval(updatePracticeTimer, 1000);
        (0, _stateJs.setTimerInterval)(interval);
    }
}
function stopTimer() {
    clearInterval((0, _stateJs.getTimerInterval)());
    (0, _stateJs.setTimerInterval)(null); // Clear the interval ID
}

},{"./domElements.js":"h8vmb","./state.js":"jD1un","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aumkM":[function(require,module,exports,__globalThis) {
// src/js/modules/uiHandlers.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Updates the visibility and text of navigation buttons based on current quiz state.
 * @param {Function} displayQuestionCallback - Callback to display a question.
 * @param {Function} checkAnswersCallback - Callback to check answers.
 */ parcelHelpers.export(exports, "updateNavigationButtons", ()=>updateNavigationButtons);
/**
 * Generates the clickable question boxes in the side navigation panel.
 * @param {Function} displayQuestionCallback - Callback to display a question.
 * @param {Function} updateQuestionBoxStatusCallback - Callback to update question box status.
 * @param {Function} updateNavigationButtonsCallback - Callback to update navigation buttons.
 */ parcelHelpers.export(exports, "generateQuestionNavPanel", ()=>generateQuestionNavPanel);
/**
 * Updates the 'current' highlight on the question navigation panel.
 * @param {number} newIndex - The index of the question to highlight.
 */ parcelHelpers.export(exports, "updateQuestionNavHighlight", ()=>updateQuestionNavHighlight);
/**
 * Updates the 'answered' or 'not-answered' status of a question box in the side panel.
 * @param {number} indexToUpdate - The index of the question box to update.
 */ parcelHelpers.export(exports, "updateQuestionBoxStatus", ()=>updateQuestionBoxStatus);
/**
 * Sets the initial UI state, displaying the welcome screen.
 */ parcelHelpers.export(exports, "setInitialUIState", ()=>setInitialUIState);
/**
 * Adds or re-adds primary quiz-wide event listeners.
 * Used at quiz initialization to ensure they are active.
 * @param {Function} resetQuizCallback - Callback to reset the quiz.
 */ parcelHelpers.export(exports, "addQuizEventListeners", ()=>addQuizEventListeners);
var _domElementsJs = require("./domElements.js");
var _stateJs = require("./state.js");
function updateNavigationButtons(displayQuestionCallback, checkAnswersCallback) {
    // Show/hide previous button based on current question index
    if ((0, _stateJs.currentQuestionIndex) === 0) (0, _domElementsJs.prevQuestionBtn).classList.add('hidden');
    else (0, _domElementsJs.prevQuestionBtn).classList.remove('hidden');
    // Determine text and visibility of next/submit button
    if (0, _stateJs.quizEnded) {
        // If quiz has ended, all questions are for review
        (0, _domElementsJs.prevQuestionBtn).disabled = false;
        (0, _domElementsJs.nextQuestionBtn).disabled = false;
        (0, _domElementsJs.nextQuestionBtn).textContent = 'Review Next \u2192';
        (0, _domElementsJs.prevQuestionBtn).textContent = '\u2190 Review Previous';
        (0, _domElementsJs.nextQuestionBtn).classList.remove('hidden'); // Ensure it's visible for review
        (0, _domElementsJs.prevQuestionBtn).classList.remove('hidden'); // Ensure it's visible for review
        // Hide navigation buttons if only one question or at the ends of review
        if ((0, _stateJs.shuffledQuestions).length === 1) {
            (0, _domElementsJs.prevQuestionBtn).classList.add('hidden');
            (0, _domElementsJs.nextQuestionBtn).classList.add('hidden');
        } else if ((0, _stateJs.currentQuestionIndex) === (0, _stateJs.shuffledQuestions).length - 1) (0, _domElementsJs.nextQuestionBtn).classList.add('hidden'); // Hide 'next' if at last question in review
        else if ((0, _stateJs.currentQuestionIndex) === 0) (0, _domElementsJs.prevQuestionBtn).classList.add('hidden'); // Hide 'previous' if at first question in review
        (0, _domElementsJs.resetQuizBtn).classList.remove('hidden'); // Always show reset button after quiz ends
    } else {
        // If quiz is ongoing
        (0, _domElementsJs.nextQuestionBtn).classList.remove('hidden'); // Ensure it's visible for an active quiz
        (0, _domElementsJs.prevQuestionBtn).classList.remove('hidden'); // Ensure it's visible for an active quiz
        if ((0, _stateJs.currentQuestionIndex) === (0, _stateJs.shuffledQuestions).length - 1) (0, _domElementsJs.nextQuestionBtn).textContent = 'Submit Answers';
        else (0, _domElementsJs.nextQuestionBtn).textContent = 'Next \u2192';
        (0, _domElementsJs.prevQuestionBtn).textContent = '\u2190 Previous';
        (0, _domElementsJs.resetQuizBtn).classList.add('hidden'); // Hide reset button during quiz
    }
}
function generateQuestionNavPanel(displayQuestionCallback, updateQuestionBoxStatusCallback, updateNavigationButtonsCallback) {
    (0, _domElementsJs.questionBoxesContainer).innerHTML = ''; // Clear previous boxes
    (0, _stateJs.shuffledQuestions).forEach((q, index)=>{
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');
        questionBox.textContent = index + 1; // Display 1-based index
        questionBox.dataset.index = index; // Store 0-based index for easy access
        // Set initial answered/not-answered status
        if ((0, _stateJs.userAnswers)[q.id] === null) questionBox.classList.add('not-answered');
        else questionBox.classList.add('answered');
        // Add click listener for direct question navigation
        questionBox.addEventListener('click', (event)=>{
            const clickedIndex = parseInt(event.target.dataset.index);
            if (clickedIndex !== (0, _stateJs.currentQuestionIndex)) {
                // If quiz is ongoing, update status of the *previous* current question
                if (!(0, _stateJs.quizEnded)) updateQuestionBoxStatusCallback((0, _stateJs.currentQuestionIndex));
                (0, _stateJs.setCurrentQuestionIndex)(clickedIndex);
                displayQuestionCallback((0, _stateJs.currentQuestionIndex));
                updateNavigationButtonsCallback();
            }
        });
        (0, _domElementsJs.questionBoxesContainer).appendChild(questionBox);
    });
    updateQuestionNavHighlight((0, _stateJs.currentQuestionIndex)); // Highlight the first question initially
}
function updateQuestionNavHighlight(newIndex) {
    // Remove 'current' class from all boxes
    Array.from((0, _domElementsJs.questionBoxesContainer).children).forEach((box)=>{
        box.classList.remove('current');
    });
    // Add 'current' class to the new current question box
    const currentBox = (0, _domElementsJs.questionBoxesContainer).children[newIndex];
    if (currentBox) {
        currentBox.classList.add('current');
        // Scroll the current box into view if it's outside the scrollable area
        currentBox.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}
function updateQuestionBoxStatus(indexToUpdate) {
    const questionBox = (0, _domElementsJs.questionBoxesContainer).children[indexToUpdate];
    if (questionBox && !(0, _stateJs.quizEnded)) {
        const qId = (0, _stateJs.shuffledQuestions)[indexToUpdate].id;
        if ((0, _stateJs.userAnswers)[qId] !== null) {
            questionBox.classList.add('answered');
            questionBox.classList.remove('not-answered');
        } else {
            questionBox.classList.remove('answered');
            questionBox.classList.add('not-answered');
        }
    }
}
function setInitialUIState() {
    console.log('UI_STATE: Entering setInitialUIState');
    (0, _domElementsJs.welcomeScreen).classList.remove('hidden');
    console.log('UI_STATE: welcomeScreen after remove hidden:', (0, _domElementsJs.welcomeScreen).className);
    (0, _domElementsJs.quizLayout).classList.add('hidden');
    console.log('UI_STATE: quizLayout after add hidden:', (0, _domElementsJs.quizLayout).className);
    (0, _domElementsJs.timerDisplay).classList.add('hidden');
    console.log('UI_STATE: timerDisplay after add hidden:', (0, _domElementsJs.timerDisplay).className);
    if (0, _domElementsJs.mainElement) {
        (0, _domElementsJs.mainElement).classList.remove('hidden');
        console.log('UI_STATE: mainElement after remove hidden:', (0, _domElementsJs.mainElement).className);
    }
    (0, _domElementsJs.startQuizBtn).disabled = true; // Disabled until questions are loaded
    (0, _domElementsJs.startQuizBtn).textContent = 'Start Quiz';
    (0, _domElementsJs.resultsDiv).innerHTML = ''; // Clear results display
    (0, _domElementsJs.timerDisplay).textContent = 'Time: 00:00'; // Reset timer display
    (0, _domElementsJs.questionBoxesContainer).innerHTML = ''; // Clear side panel question boxes
    // Reset settings inputs to current app state values
    (0, _domElementsJs.quizModeSelect).value = (0, _stateJs.quizMode);
    (0, _domElementsJs.numQuestionsInput).value = (0, _stateJs.numQuestionsToAsk);
    (0, _domElementsJs.timeLimitInput).value = (0, _stateJs.timeLimitMinutes);
    // Toggle time limit input visibility based on quiz mode
    if ((0, _stateJs.quizMode) === 'practice') {
        (0, _domElementsJs.timeLimitGroup).classList.add('hidden');
        console.log('UI_STATE: timeLimitGroup after add hidden (practice):', (0, _domElementsJs.timeLimitGroup).className);
    } else {
        (0, _domElementsJs.timeLimitGroup).classList.remove('hidden');
        console.log('UI_STATE: timeLimitGroup after remove hidden (exam):', (0, _domElementsJs.timeLimitGroup).className);
    }
    // Update max questions span and input max attribute
    (0, _domElementsJs.maxQuestionsSpan).textContent = (0, _stateJs.questions).length;
    (0, _domElementsJs.numQuestionsInput).max = (0, _stateJs.questions).length;
    // Enable start quiz button if questions are loaded
    if ((0, _stateJs.questions).length > 0) (0, _domElementsJs.startQuizBtn).disabled = false;
    else (0, _domElementsJs.startQuizBtn).disabled = true;
    console.log('UI_STATE: Exiting setInitialUIState');
}
function addQuizEventListeners(resetQuizCallback) {
    (0, _domElementsJs.resetQuizBtn).removeEventListener('click', resetQuizCallback); // Remove to prevent multiple listeners
    (0, _domElementsJs.resetQuizBtn).addEventListener('click', resetQuizCallback);
}

},{"./domElements.js":"h8vmb","./state.js":"jD1un","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"73PCS":[function(require,module,exports,__globalThis) {
// src/js/modules/fileLoader.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleFileLoad", ()=>handleFileLoad);
var _stateJs = require("./state.js");
var _domElementsJs = require("./domElements.js");
var _uiHandlersJs = require("./uiHandlers.js");
function handleFileLoad(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event)=>{
            try {
                const loadedData = JSON.parse(event.target.result);
                // Basic validation for loaded JSON structure
                if (Array.isArray(loadedData) && loadedData.every((q)=>q.id !== undefined && typeof q.question === 'string' && Array.isArray(q.options) && q.options.length > 0 && typeof q.answer === 'string' && typeof q.explanation === 'string')) {
                    (0, _stateJs.setQuestions)(loadedData);
                    console.log("Question set loaded successfully:", loadedData);
                    alert(`Successfully loaded ${loadedData.length} questions!`);
                    // Update settings and enable start button
                    (0, _domElementsJs.maxQuestionsSpan).textContent = loadedData.length;
                    (0, _domElementsJs.numQuestionsInput).max = loadedData.length;
                    (0, _domElementsJs.numQuestionsInput).value = Math.min(loadedData.length, parseInt((0, _domElementsJs.numQuestionsInput).value)); // Adjust input value if it exceeds new max
                    (0, _domElementsJs.startQuizBtn).disabled = false;
                } else {
                    alert("Error: Invalid JSON format. Please ensure it's an array of question objects with 'id', 'question', 'options', 'answer', and 'explanation'.");
                    (0, _stateJs.setQuestions)([]); // Clear questions on invalid format
                    (0, _uiHandlersJs.setInitialUIState)(); // Reset UI state to reflect no questions loaded
                }
            } catch (error) {
                alert("Error parsing JSON file. Please ensure it's a valid JSON format.");
                console.error("Error parsing JSON:", error);
                (0, _stateJs.setQuestions)([]); // Clear questions on parsing error
                (0, _uiHandlersJs.setInitialUIState)(); // Reset UI state to reflect no questions loaded
            }
        };
        reader.readAsText(file);
    }
}

},{"./state.js":"jD1un","./domElements.js":"h8vmb","./uiHandlers.js":"aumkM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["93v64","lhpGb"], "lhpGb", "parcelRequirec9b8", {})

//# sourceMappingURL=public.b828852a.js.map
