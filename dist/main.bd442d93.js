// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html'); //在js里获取HTML的容器
var style = document.querySelector('#style');
var string = "/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n* \u63A5\u4E0B\u6765\u6211\u8981\u52A0\u6837\u5F0F\u4E86\n* \u6211\u8981\u52A0\u7684\u6837\u5F0F\u662F\u5B57\u4F53\u53D8\u7EA2\u8272\n**/\nbody{\n    color: black;\n}\n\n/* \u753B\u4E00\u4E2A\u6B63\u65B9\u5F62*/\n#div1{\n    border:1px solid red;\n    height:200px;\n    width:200px;\n}\n\n/*\u753B\u4E00\u4E2A\u516B\u5366\u56FE\n*\u9996\u5148\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\u5708\n**/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n\n/*\u516B\u5366\u7531\u4E00\u9ED1\u4E00\u767D\u6784\u6210\u7684\n*\u7528\u80CC\u666F\u6E10\u53D8\u6765\u753B\u4E24\u8FB9\u4E0D\u4E00\u6837\u7684\u989C\u8272\uFF0C\u5DE6\u767D\u53F3\u9ED1\n*\u641C\u7D22\uFF1Acss gradient\uFF0C\u7136\u540E\u76F4\u63A5\u6539\u989C\u8272\u590D\u5236\u4EE3\u7801\n**/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(7,7,7,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*\n* \u5728\u5706\u4E2D\u753B\u4E24\u4E2A\u5706\u5708\uFF0C\u5148\u521B\u5EFA\u4E24\u4E2A\u6807\u7B7E\n* \u7528\u4F2A\u5143\u7D20\u4EE3\u66FF\u7528\u4E24\u4E2Adiv\u6807\u7B7E\n* \u4E3A\u4E86\u597D\u770B\uFF0C\u8FD9\u90E8\u5206\u4EE3\u7801\u5DF2\u7ECF\u653E\u5728HTML\u9875\u9762\u4E2D\n**/\n#div1::before{content:'1';}\n#div1::after{content:'2';}\n\n/*\n* \u628A\u4E24\u4E2Acontent\u53D8\u6210\u4E0A\u4E0B\u4E24\u4E2A\u7403\n**/\n#div1::before{\n    width:100px;\n    height:100px;\n    position:absolute;\n    transform:translateX(-50%);\n    top:0;\n    left:50%;\n    border-radius:50%;\n    background:#000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,250,250,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    position:absolute;\n    transform:translateX(-50%);\n    bottom:0;\n    left:50%;\n    border-radius:50%;\n    background:#fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n\n\n";
var string2 = '';
var n = 0; //为了让循环里的N从0开始
console.log(string.length);
//html.innerHTML = string.substring(0,n);//在html里面更改写入内容（删掉是想把所有的显示都在循环里面实现，更方便的替换<br>）

//把setTimeout封装成一个递归函数，然后调用step函数,

var step = function step() {
  setTimeout(function () {
    console.log(string[n]);
    if (string[n] === '\n') {
      //第N个字符如果是回车就用<br>代替
      string2 = string2 + '<br>';
    } else if (string[n] === ' ') {
      string2 += '&nbsp';
    } else {
      //如果第n个字符不是回车就直接照搬
      string2 = string2 + string[n];
    }
    //上述if-else可以简化：string2 += (string[n]==='\n' ? '<br>' : string[n])

    html.innerHTML = string2;
    //html.innerHTML = string.substring(0,n);
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999); //页面不够高的时候显示不了后面的字，加上以后回自动滚动
    html.scrollTo(0, 999999);
    if (n < string.length - 1) {
      //当n小于字符串长度的时候，就继续调用函数,并且让n+1，，但是最后会多出来一个undefined，r如果n不是最后一个就继续执行
      n = n + 1;
      step();
    } else {
      //什么都不做
    }
  }, 0);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.bd442d93.js.map