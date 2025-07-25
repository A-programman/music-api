
require("./env.js")
!function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self,
    t.infSign = n())
}(this, function() {
    "use strict";
    function t(t, n, r) {
        return n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r,
        t
    }
    function n(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(t);
            n && (e = e.filter(function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable
            })),
            r.push.apply(r, e)
        }
        return r
    }
    function r(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(o, !0).forEach(function(n) {
                t(r, n, o[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : n(o).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
            })
        }
        return r
    }
    function e(t, n) {
        return n = {
            exports: {}
        },
        t(n, n.exports),
        n.exports
    }
    function o(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    function i(t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && o(t.slice(0, 0))
    }
    function c() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = !1, c = !1, a = "json", l = r({}, n), u = s.isInClient();
        "function" == typeof o ? t = o : (t = o.callback,
        i = o.useH5 || !1,
        a = o.postType || "json",
        c = o.isCDN || !1),
        e && ("[object Object]" != Object.prototype.toString.call(e) ? u = !1 : "urlencoded" == a && (u = !1));
        var f = function() {
            var n = (new Date).getTime()
              , i = []
              , s = []
              , u = "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt"
              , f = {
                srcappid: "2919",
                clientver: "20000",
                clienttime: n,
                mid: n,
                uuid: n,
                dfid: "-"
            };
            c && (delete f.clienttime,
            delete f.mid,
            delete f.uuid,
            delete f.dfid),
            l = r({}, f, {}, l);
            for (var g in l)
                i.push(g);
            if (i.sort(),
            i.forEach(function(t) {
                s.push(t + "=" + l[t])
            }),
            e)
                if ("[object Object]" == Object.prototype.toString.call(e))
                    if ("json" == a)
                        s.push(JSON.stringify(e));
                    else {
                        var b = [];
                        for (var g in e)
                            b.push(g + "=" + e[g]);
                        s.push(b.join("&"))
                    }
                else
                    s.push(e);
            s.unshift(u),
            s.push(u),
            l.signature = d(s.join("")),
            o.log && (console.log("H5签名前参数", s),
            console.log("H5签名后返回", l)),
            e ? t && t(l, "[object Object]" == Object.prototype.toString.call(e) && "json" == a ? JSON.stringify(e) : e) : t && t(l)
        };
        if (u && !i) {
            var g = !1;
            s.mobileCall(764, {
                get: l,
                post: e
            }, function(n) {
                return !g && (g = !0,
                n && n.status ? (delete n.status,
                o.log && (console.log("客户端签名前参数", {
                    get: l,
                    post: e
                }),
                console.log("客户端签名后返回", r({}, l, {}, n))),
                l = r({}, l, {}, n),
                e ? t && t(l, "[object Object]" == Object.prototype.toString.call(e) && "json" == a ? JSON.stringify(e) : e) : t && t(l),
                !1) : (u = !1,
                void f()))
            })
        } else
            u = !1,
            f()
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var s = e(function(t, n) {
        !function(n, r) {
            t.exports = function() {
                var t = {
                    str2Json: function(t) {
                        var n = {};
                        if ("[object String]" === Object.prototype.toString.call(t))
                            try {
                                n = JSON.parse(t)
                            } catch (t) {
                                n = {}
                            }
                        return n
                    },
                    json2Str: function(t) {
                        var n = t;
                        if ("string" != typeof t)
                            try {
                                n = JSON.stringify(t)
                            } catch (t) {
                                n = ""
                            }
                        return n
                    },
                    _extend: function(t, n) {
                        if (n)
                            for (var r in t)
                                n.hasOwnProperty(r) || (n[r] = t[r]);
                        return n
                    },
                    formatURL: {
                        browser: "",
                        url: ""
                    },
                    formatSong: {
                        filename: "",
                        filesize: "",
                        hash: "",
                        bitrate: "",
                        extname: "",
                        duration: "",
                        mvhash: "",
                        m4afilesize: "",
                        "320hash": "",
                        "320filesize": "",
                        sqhash: "",
                        sqfilesize: 0,
                        feetype: 0,
                        isfirst: 0
                    },
                    formatMV: {
                        filename: "",
                        singername: "",
                        hash: "",
                        imgurl: ""
                    },
                    formatShare: {
                        shareName: "",
                        topicName: "",
                        hash: "",
                        listID: "",
                        type: "",
                        suid: "",
                        slid: "",
                        imgUrl: "",
                        filename: "",
                        duration: "",
                        shareData: {
                            linkUrl: "",
                            picUrl: "",
                            content: "",
                            title: ""
                        }
                    },
                    cbNum: 0,
                    isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
                    isKugouAndroid: !!navigator.userAgent.match(/kugouandroid/gi),
                    isAndroid: "undefined" != typeof external && void 0 !== external.superCall,
                    loadUrl: function(t) {
                        var n = document.createElement("iframe");
                        n.setAttribute("src", t),
                        n.setAttribute("style", "display:none;"),
                        n.setAttribute("height", "0px"),
                        n.setAttribute("width", "0px"),
                        n.setAttribute("frameborder", "0"),
                        document.body.appendChild(n),
                        n.parentNode.removeChild(n),
                        n = null
                    },
                    callCmd: function(n) {
                        var r = t;
                        if (r.isKugouAndroid) {
                            var e = {}
                              , o = "";
                            if (n.cmd && (e.cmd = n.cmd),
                            n.jsonStr && (e.jsonStr = n.jsonStr),
                            n.callback && (o = "kgandroidmobilecall" + ++r.cbNum + Math.random().toString().substr(2, 9),
                            e.callback = o,
                            window[o] = function(t, e) {
                                void 0 !== t && ("[object String]" === Object.prototype.toString.call(t) ? (t = "#" === e ? decodeURIComponent(t) : decodeURIComponent(decodeURIComponent(t)),
                                n.callback(r.str2Json(t))) : n.callback(t))
                            }
                            ),
                            n.AndroidCallback) {
                                var i = r.str2Json(n.jsonStr);
                                i.AndroidCallback = o,
                                n.jsonStr = r.json2Str(i),
                                n.jsonStr && (e.jsonStr = n.jsonStr)
                            }
                            var c = encodeURIComponent(JSON.stringify(e))
                              , s = "kugoujsbridge://start.kugou_jsbridge/?".concat(c);
                            r.loadUrl(s)
                        } else if (r.isAndroid) {
                            var a = ""
                              , l = "";
                            if (n.jsonStr) {
                                if (n.callback && "" !== n.callback && !0 === n.AndroidCallback) {
                                    l = "kgmobilecall" + ++r.cbNum + Math.random().toString().substr(2, 9),
                                    window[l] = function(t, e) {
                                        void 0 !== t && ("[object String]" === Object.prototype.toString.call(t) ? (t = "#" === e ? decodeURIComponent(t) : decodeURIComponent(decodeURIComponent(t)),
                                        n.callback(r.str2Json(t))) : n.callback(t))
                                    }
                                    ;
                                    var u = r.str2Json(n.jsonStr);
                                    u.AndroidCallback = l,
                                    n.jsonStr = r.json2Str(u)
                                }
                                try {
                                    a = external.superCall(n.cmd, n.jsonStr)
                                } catch (t) {}
                            } else
                                try {
                                    a = external.superCall(n.cmd)
                                } catch (t) {}
                            n.callback && "" !== n.callback && "AndroidCallback" != a && (a = r.str2Json(a),
                            n.callback(a))
                        } else {
                            var f = ""
                              , d = "";
                            n.callback && (d = "kgmobilecall" + ++r.cbNum + Math.random().toString().substr(2, 9),
                            window[d] = function(t) {
                                void 0 !== t && n.callback && ("[object String]" === Object.prototype.toString.call(t) ? n.callback(r.str2Json(t)) : n.callback(t))
                            }
                            ),
                            d && "" != d && n.jsonStr && (f = 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + ', "callback":"' + d + '"}'),
                            d && "" != d && !n.jsonStr && (f = 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "callback":"' + d + '"}'),
                            "" == d && n.jsonStr && (f = 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + "}"),
                            "" != d || n.jsonStr || (f = 'kugouurl://start.music/?{"cmd":' + n.cmd + "}"),
                            r.loadUrl(f)
                        }
                    },
                    formartData: function(n, r) {
                        n && 123 == n && r && (r = t._extend(t.formatURL, r)),
                        n && 123 == n && r && (r = t._extend(t.formatURL, r))
                    }
                };
                return {
                    isIOS: t.isIOS,
                    isKugouAndroid: t.isKugouAndroid,
                    isAndroid: t.isAndroid,
                    isInClient: function() {
                        return !(!t.isAndroid && !t.isKugouAndroid && !t.isIOS)
                    },
                    mobileCall: function(n, r, e) {
                        var o = "";
                        if (r && (o = t.json2Str(r)),
                        !n)
                            return console.error("请输入命令号！"),
                            !1;
                        var i = {};
                        n && (i.cmd = n),
                        "" != o && (i.jsonStr = o),
                        e && (i.callback = e),
                        n && 186 == n && e && (i.AndroidCallback = !0),
                        t.callCmd(i)
                    },
                    KgWebMobileCall: function(t, n) {
                        if (t)
                            try {
                                var r = t.split(".");
                                r.reduce(function(e, o) {
                                    if (e[o]) {
                                        if (o === r[r.length - 1]) {
                                            var i = e[o];
                                            return "function" == typeof i ? (e[o] = function(t) {
                                                i && i(t),
                                                n && n(t)
                                            }
                                            ,
                                            e[o]) : (console.error("请检查，当前环境变量已注册了对象：" + t + "，且该对象不是方法"),
                                            null)
                                        }
                                        return e[o]
                                    }
                                    return o === r[r.length - 1] ? e[o] = function(t) {
                                        n && n(t)
                                    }
                                    : e[o] = new Object,
                                    e[o]
                                }, window)
                            } catch (t) {}
                    }
                }
            }()
        }()
    })
      , a = e(function(t) {
        !function() {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , r = {
                rotl: function(t, n) {
                    return t << n | t >>> 32 - n
                },
                rotr: function(t, n) {
                    return t << 32 - n | t >>> n
                },
                endian: function(t) {
                    if (t.constructor == Number)
                        return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
                    for (var n = 0; n < t.length; n++)
                        t[n] = r.endian(t[n]);
                    return t
                },
                randomBytes: function(t) {
                    for (var n = []; t > 0; t--)
                        n.push(Math.floor(256 * Math.random()));
                    return n
                },
                bytesToWords: function(t) {
                    for (var n = [], r = 0, e = 0; r < t.length; r++,
                    e += 8)
                        n[e >>> 5] |= t[r] << 24 - e % 32;
                    return n
                },
                wordsToBytes: function(t) {
                    for (var n = [], r = 0; r < 32 * t.length; r += 8)
                        n.push(t[r >>> 5] >>> 24 - r % 32 & 255);
                    return n
                },
                bytesToHex: function(t) {
                    for (var n = [], r = 0; r < t.length; r++)
                        n.push((t[r] >>> 4).toString(16)),
                        n.push((15 & t[r]).toString(16));
                    return n.join("")
                },
                hexToBytes: function(t) {
                    for (var n = [], r = 0; r < t.length; r += 2)
                        n.push(parseInt(t.substr(r, 2), 16));
                    return n
                },
                bytesToBase64: function(t) {
                    for (var r = [], e = 0; e < t.length; e += 3)
                        for (var o = t[e] << 16 | t[e + 1] << 8 | t[e + 2], i = 0; i < 4; i++)
                            8 * e + 6 * i <= 8 * t.length ? r.push(n.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
                    return r.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var r = [], e = 0, o = 0; e < t.length; o = ++e % 4)
                        0 != o && r.push((n.indexOf(t.charAt(e - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(t.charAt(e)) >>> 6 - 2 * o);
                    return r
                }
            };
            t.exports = r
        }()
    })
      , l = {
        utf8: {
            stringToBytes: function(t) {
                return l.bin.stringToBytes(unescape(encodeURIComponent(t)))
            },
            bytesToString: function(t) {
                return decodeURIComponent(escape(l.bin.bytesToString(t)))
            }
        },
        bin: {
            stringToBytes: function(t) {
                for (var n = [], r = 0; r < t.length; r++)
                    n.push(255 & t.charCodeAt(r));
                return n
            },
            bytesToString: function(t) {
                for (var n = [], r = 0; r < t.length; r++)
                    n.push(String.fromCharCode(t[r]));
                return n.join("")
            }
        }
    }
      , u = l
      , f = function(t) {
        return null != t && (o(t) || i(t) || !!t._isBuffer)
    }
      , d = e(function(t) {
        !function() {
            var n = a
              , r = u.utf8
              , e = f
              , o = u.bin
              , i = function(t, c) {
                t.constructor == String ? t = c && "binary" === c.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : e(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                for (var s = n.bytesToWords(t), a = 8 * t.length, l = 1732584193, u = -271733879, f = -1732584194, d = 271733878, g = 0; g < s.length; g++)
                    s[g] = 16711935 & (s[g] << 8 | s[g] >>> 24) | 4278255360 & (s[g] << 24 | s[g] >>> 8);
                s[a >>> 5] |= 128 << a % 32,
                s[14 + (a + 64 >>> 9 << 4)] = a;
                for (var b = i._ff, p = i._gg, h = i._hh, m = i._ii, g = 0; g < s.length; g += 16) {
                    var y = l
                      , j = u
                      , S = f
                      , v = d;
                    u = m(u = m(u = m(u = m(u = h(u = h(u = h(u = h(u = p(u = p(u = p(u = p(u = b(u = b(u = b(u = b(u, f = b(f, d = b(d, l = b(l, u, f, d, s[g + 0], 7, -680876936), u, f, s[g + 1], 12, -389564586), l, u, s[g + 2], 17, 606105819), d, l, s[g + 3], 22, -1044525330), f = b(f, d = b(d, l = b(l, u, f, d, s[g + 4], 7, -176418897), u, f, s[g + 5], 12, 1200080426), l, u, s[g + 6], 17, -1473231341), d, l, s[g + 7], 22, -45705983), f = b(f, d = b(d, l = b(l, u, f, d, s[g + 8], 7, 1770035416), u, f, s[g + 9], 12, -1958414417), l, u, s[g + 10], 17, -42063), d, l, s[g + 11], 22, -1990404162), f = b(f, d = b(d, l = b(l, u, f, d, s[g + 12], 7, 1804603682), u, f, s[g + 13], 12, -40341101), l, u, s[g + 14], 17, -1502002290), d, l, s[g + 15], 22, 1236535329), f = p(f, d = p(d, l = p(l, u, f, d, s[g + 1], 5, -165796510), u, f, s[g + 6], 9, -1069501632), l, u, s[g + 11], 14, 643717713), d, l, s[g + 0], 20, -373897302), f = p(f, d = p(d, l = p(l, u, f, d, s[g + 5], 5, -701558691), u, f, s[g + 10], 9, 38016083), l, u, s[g + 15], 14, -660478335), d, l, s[g + 4], 20, -405537848), f = p(f, d = p(d, l = p(l, u, f, d, s[g + 9], 5, 568446438), u, f, s[g + 14], 9, -1019803690), l, u, s[g + 3], 14, -187363961), d, l, s[g + 8], 20, 1163531501), f = p(f, d = p(d, l = p(l, u, f, d, s[g + 13], 5, -1444681467), u, f, s[g + 2], 9, -51403784), l, u, s[g + 7], 14, 1735328473), d, l, s[g + 12], 20, -1926607734), f = h(f, d = h(d, l = h(l, u, f, d, s[g + 5], 4, -378558), u, f, s[g + 8], 11, -2022574463), l, u, s[g + 11], 16, 1839030562), d, l, s[g + 14], 23, -35309556), f = h(f, d = h(d, l = h(l, u, f, d, s[g + 1], 4, -1530992060), u, f, s[g + 4], 11, 1272893353), l, u, s[g + 7], 16, -155497632), d, l, s[g + 10], 23, -1094730640), f = h(f, d = h(d, l = h(l, u, f, d, s[g + 13], 4, 681279174), u, f, s[g + 0], 11, -358537222), l, u, s[g + 3], 16, -722521979), d, l, s[g + 6], 23, 76029189), f = h(f, d = h(d, l = h(l, u, f, d, s[g + 9], 4, -640364487), u, f, s[g + 12], 11, -421815835), l, u, s[g + 15], 16, 530742520), d, l, s[g + 2], 23, -995338651), f = m(f, d = m(d, l = m(l, u, f, d, s[g + 0], 6, -198630844), u, f, s[g + 7], 10, 1126891415), l, u, s[g + 14], 15, -1416354905), d, l, s[g + 5], 21, -57434055), f = m(f, d = m(d, l = m(l, u, f, d, s[g + 12], 6, 1700485571), u, f, s[g + 3], 10, -1894986606), l, u, s[g + 10], 15, -1051523), d, l, s[g + 1], 21, -2054922799), f = m(f, d = m(d, l = m(l, u, f, d, s[g + 8], 6, 1873313359), u, f, s[g + 15], 10, -30611744), l, u, s[g + 6], 15, -1560198380), d, l, s[g + 13], 21, 1309151649), f = m(f, d = m(d, l = m(l, u, f, d, s[g + 4], 6, -145523070), u, f, s[g + 11], 10, -1120210379), l, u, s[g + 2], 15, 718787259), d, l, s[g + 9], 21, -343485551),
                    l = l + y >>> 0,
                    u = u + j >>> 0,
                    f = f + S >>> 0,
                    d = d + v >>> 0
                }
                return n.endian([l, u, f, d])
            };
            i._ff = function(t, n, r, e, o, i, c) {
                var s = t + (n & r | ~n & e) + (o >>> 0) + c;
                return (s << i | s >>> 32 - i) + n
            }
            ,
            i._gg = function(t, n, r, e, o, i, c) {
                var s = t + (n & e | r & ~e) + (o >>> 0) + c;
                return (s << i | s >>> 32 - i) + n
            }
            ,
            i._hh = function(t, n, r, e, o, i, c) {
                var s = t + (n ^ r ^ e) + (o >>> 0) + c;
                return (s << i | s >>> 32 - i) + n
            }
            ,
            i._ii = function(t, n, r, e, o, i, c) {
                var s = t + (r ^ (n | ~e)) + (o >>> 0) + c;
                return (s << i | s >>> 32 - i) + n
            }
            ,
            i._blocksize = 16,
            i._digestsize = 16,
            t.exports = function(t, r) {
                if (void 0 === t || null === t)
                    throw new Error("Illegal argument " + t);
                var e = n.wordsToBytes(i(t, r));
                return r && r.asBytes ? e : r && r.asString ? o.bytesToString(e) : n.bytesToHex(e)
            }
            window.signer = t.exports
        }()
    });
    return c
});
//# sourceMappingURL=infSign.min.js.map



