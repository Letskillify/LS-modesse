!function() {
    function t(t, n, i) {
        return t.call.apply(t.bind, arguments)
    }
    function n(t, n, i) {
        if (!t)
            throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var i = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(i, e),
                t.apply(n, i)
            }
        }
        return function() {
            return t.apply(n, arguments)
        }
    }
    function i(e, o, a) {
        return (i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t : n).apply(null, arguments)
    }
    var e = Date.now || function() {
        return +new Date
    }
    ;
    function o(t, n) {
        this.a = t,
        this.m = n || t,
        this.c = this.m.document
    }
    var a = !!window.FontFace;
    function s(t, n, i, e) {
        if (n = t.c.createElement(n),
        i)
            for (var o in i)
                i.hasOwnProperty(o) && ("style" == o ? n.style.cssText = i[o] : n.setAttribute(o, i[o]));
        return e && n.appendChild(t.c.createTextNode(e)),
        n
    }
    function r(t, n, i) {
        (t = t.c.getElementsByTagName(n)[0]) || (t = document.documentElement),
        t.insertBefore(i, t.lastChild)
    }
    function f(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }
    function c(t, n, i) {
        n = n || [],
        i = i || [];
        for (var e = t.className.split(/\s+/), o = 0; o < n.length; o += 1) {
            for (var a = !1, s = 0; s < e.length; s += 1)
                if (n[o] === e[s]) {
                    a = !0;
                    break
                }
            a || e.push(n[o])
        }
        for (n = [],
        o = 0; o < e.length; o += 1) {
            for (a = !1,
            s = 0; s < i.length; s += 1)
                if (e[o] === i[s]) {
                    a = !0;
                    break
                }
            a || n.push(e[o])
        }
        t.className = n.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function h(t, n) {
        for (var i = t.className.split(/\s+/), e = 0, o = i.length; e < o; e++)
            if (i[e] == n)
                return !0;
        return !1
    }
    function l(t) {
        if ("string" == typeof t.f)
            return t.f;
        var n = t.m.location.protocol;
        return "about:" == n && (n = t.a.location.protocol),
        "https:" == n ? "https:" : "http:"
    }
    function u(t, n, i) {
        function e() {
            h && o && f && (h(c),
            h = null)
        }
        n = s(t, "link", {
            rel: "stylesheet",
            href: n,
            media: "all"
        });
        var o = !1
          , f = !0
          , c = null
          , h = i || null;
        a ? (n.onload = function() {
            o = !0,
            e()
        }
        ,
        n.onerror = function() {
            o = !0,
            c = Error("Stylesheet failed to load"),
            e()
        }
        ) : setTimeout((function() {
            o = !0,
            e()
        }
        ), 0),
        r(t, "head", n)
    }
    function p(t, n, i, e) {
        var o = t.c.getElementsByTagName("head")[0];
        if (o) {
            var a = s(t, "script", {
                src: n
            })
              , r = !1;
            return a.onload = a.onreadystatechange = function() {
                r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0,
                i && i(null),
                a.onload = a.onreadystatechange = null,
                "HEAD" == a.parentNode.tagName && o.removeChild(a))
            }
            ,
            o.appendChild(a),
            setTimeout((function() {
                r || (r = !0,
                i && i(Error("Script load timeout")))
            }
            ), e || 5e3),
            a
        }
        return null
    }
    function d() {
        this.a = 0,
        this.c = null
    }
    function g(t) {
        return t.a++,
        function() {
            t.a--,
            m(t)
        }
    }
    function v(t, n) {
        t.c = n,
        m(t)
    }
    function m(t) {
        0 == t.a && t.c && (t.c(),
        t.c = null)
    }
    function w(t) {
        this.a = t || "-"
    }
    function y(t, n) {
        this.c = t,
        this.f = 4,
        this.a = "n";
        var i = (n || "n4").match(/^([nio])([1-9])$/i);
        i && (this.a = i[1],
        this.f = parseInt(i[2], 10))
    }
    function b(t) {
        var n = [];
        t = t.split(/,\s*/);
        for (var i = 0; i < t.length; i++) {
            var e = t[i].replace(/['"]/g, "");
            -1 != e.indexOf(" ") || /^\d/.test(e) ? n.push("'" + e + "'") : n.push(e)
        }
        return n.join(",")
    }
    function x(t) {
        return t.a + t.f
    }
    function j(t) {
        var n = "normal";
        return "o" === t.a ? n = "oblique" : "i" === t.a && (n = "italic"),
        n
    }
    function _(t) {
        var n = 4
          , i = "n"
          , e = null;
        return t && ((e = t.match(/(normal|oblique|italic)/i)) && e[1] && (i = e[1].substr(0, 1).toLowerCase()),
        (e = t.match(/([1-9]00|normal|bold)/i)) && e[1] && (/bold/i.test(e[1]) ? n = 7 : /[1-9]00/.test(e[1]) && (n = parseInt(e[1].substr(0, 1), 10)))),
        i + n
    }
    function k(t, n) {
        this.c = t,
        this.f = t.m.document.documentElement,
        this.h = n,
        this.a = new w("-"),
        this.j = !1 !== n.events,
        this.g = !1 !== n.classes
    }
    function T(t) {
        if (t.g) {
            var n = h(t.f, t.a.c("wf", "active"))
              , i = []
              , e = [t.a.c("wf", "loading")];
            n || i.push(t.a.c("wf", "inactive")),
            c(t.f, i, e)
        }
        S(t, "inactive")
    }
    function S(t, n, i) {
        t.j && t.h[n] && (i ? t.h[n](i.c, x(i)) : t.h[n]())
    }
    function C() {
        this.c = {}
    }
    function N(t, n) {
        this.c = t,
        this.f = n,
        this.a = s(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }
    function A(t) {
        r(t.c, "body", t.a)
    }
    function E(t) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b(t.c) + ";font-style:" + j(t) + ";font-weight:" + t.f + "00;"
    }
    function W(t, n, i, e, o, a) {
        this.g = t,
        this.j = n,
        this.a = e,
        this.c = i,
        this.f = o || 3e3,
        this.h = a || void 0
    }
    function F(t, n, i, e, o, a, s) {
        this.v = t,
        this.B = n,
        this.c = i,
        this.a = e,
        this.s = s || "BESbswy",
        this.f = {},
        this.w = o || 3e3,
        this.u = a || null,
        this.o = this.j = this.h = this.g = null,
        this.g = new N(this.c,this.s),
        this.h = new N(this.c,this.s),
        this.j = new N(this.c,this.s),
        this.o = new N(this.c,this.s),
        t = E(t = new y(this.a.c + ",serif",x(this.a))),
        this.g.a.style.cssText = t,
        t = E(t = new y(this.a.c + ",sans-serif",x(this.a))),
        this.h.a.style.cssText = t,
        t = E(t = new y("serif",x(this.a))),
        this.j.a.style.cssText = t,
        t = E(t = new y("sans-serif",x(this.a))),
        this.o.a.style.cssText = t,
        A(this.g),
        A(this.h),
        A(this.j),
        A(this.o)
    }
    w.prototype.c = function(t) {
        for (var n = [], i = 0; i < arguments.length; i++)
            n.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
        return n.join(this.a)
    }
    ,
    W.prototype.start = function() {
        var t = this.c.m.document
          , n = this
          , i = e()
          , o = new Promise((function(o, a) {
            !function s() {
                e() - i >= n.f ? a() : t.fonts.load(function(t) {
                    return j(t) + " " + t.f + "00 300px " + b(t.c)
                }(n.a), n.h).then((function(t) {
                    1 <= t.length ? o() : setTimeout(s, 25)
                }
                ), (function() {
                    a()
                }
                ))
            }()
        }
        ))
          , a = new Promise((function(t, i) {
            setTimeout(i, n.f)
        }
        ));
        Promise.race([a, o]).then((function() {
            n.g(n.a)
        }
        ), (function() {
            n.j(n.a)
        }
        ))
    }
    ;
    var I = {
        D: "serif",
        C: "sans-serif"
    }
      , P = null;
    function B() {
        if (null === P) {
            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            P = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
        }
        return P
    }
    function O(t, n, i) {
        for (var e in I)
            if (I.hasOwnProperty(e) && n === t.f[I[e]] && i === t.f[I[e]])
                return !0;
        return !1
    }
    function L(t) {
        var n, o = t.g.a.offsetWidth, a = t.h.a.offsetWidth;
        (n = o === t.f.serif && a === t.f["sans-serif"]) || (n = B() && O(t, o, a)),
        n ? e() - t.A >= t.w ? B() && O(t, o, a) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? D(t, t.v) : D(t, t.B) : function(t) {
            setTimeout(i((function() {
                L(this)
            }
            ), t), 50)
        }(t) : D(t, t.v)
    }
    function D(t, n) {
        setTimeout(i((function() {
            f(this.g.a),
            f(this.h.a),
            f(this.j.a),
            f(this.o.a),
            n(this.a)
        }
        ), t), 0)
    }
    function $(t, n, i) {
        this.c = t,
        this.a = n,
        this.f = 0,
        this.o = this.j = !1,
        this.s = i
    }
    F.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth,
        this.f["sans-serif"] = this.o.a.offsetWidth,
        this.A = e(),
        L(this)
    }
    ;
    var q = null;
    function H(t) {
        0 == --t.f && t.j && (t.o ? ((t = t.a).g && c(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]),
        S(t, "active")) : T(t.a))
    }
    function M(t) {
        this.j = t,
        this.a = new C,
        this.h = 0,
        this.f = this.g = !0
    }
    function z(t, n, e, o, a) {
        var s = 0 == --t.h;
        (t.f || t.g) && setTimeout((function() {
            var t = a || null
              , r = o || {};
            if (0 === e.length && s)
                T(n.a);
            else {
                n.f += e.length,
                s && (n.j = s);
                var f, h = [];
                for (f = 0; f < e.length; f++) {
                    var l = e[f]
                      , u = r[l.c]
                      , p = n.a
                      , d = l;
                    p.g && c(p.f, [p.a.c("wf", d.c, x(d).toString(), "loading")]),
                    S(p, "fontloading", d),
                    p = null,
                    null === q && (q = !!window.FontFace && (!(d = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(d[1], 10))),
                    p = q ? new W(i(n.g, n),i(n.h, n),n.c,l,n.s,u) : new F(i(n.g, n),i(n.h, n),n.c,l,n.s,t,u),
                    h.push(p)
                }
                for (f = 0; f < h.length; f++)
                    h[f].start()
            }
        }
        ), 0)
    }
    function G(t, n) {
        this.c = t,
        this.a = n
    }
    function K(t, n) {
        this.c = t,
        this.a = n
    }
    function R(t, n, i) {
        this.c = t || n + U,
        this.a = [],
        this.f = [],
        this.g = i || ""
    }
    $.prototype.g = function(t) {
        var n = this.a;
        n.g && c(n.f, [n.a.c("wf", t.c, x(t).toString(), "active")], [n.a.c("wf", t.c, x(t).toString(), "loading"), n.a.c("wf", t.c, x(t).toString(), "inactive")]),
        S(n, "fontactive", t),
        this.o = !0,
        H(this)
    }
    ,
    $.prototype.h = function(t) {
        var n = this.a;
        if (n.g) {
            var i = h(n.f, n.a.c("wf", t.c, x(t).toString(), "active"))
              , e = []
              , o = [n.a.c("wf", t.c, x(t).toString(), "loading")];
            i || e.push(n.a.c("wf", t.c, x(t).toString(), "inactive")),
            c(n.f, e, o)
        }
        S(n, "fontinactive", t),
        H(this)
    }
    ,
    M.prototype.load = function(t) {
        this.c = new o(this.j,t.context || this.j),
        this.g = !1 !== t.events,
        this.f = !1 !== t.classes,
        function(t, n, i) {
            var e = []
              , o = i.timeout;
            !function(t) {
                t.g && c(t.f, [t.a.c("wf", "loading")]),
                S(t, "loading")
            }(n);
            e = function(t, n, i) {
                var e, o = [];
                for (e in n)
                    if (n.hasOwnProperty(e)) {
                        var a = t.c[e];
                        a && o.push(a(n[e], i))
                    }
                return o
            }(t.a, i, t.c);
            var a = new $(t.c,n,o);
            for (t.h = e.length,
            n = 0,
            i = e.length; n < i; n++)
                e[n].load((function(n, i, e) {
                    z(t, a, n, i, e)
                }
                ))
        }(this, new k(this.c,t), t)
    }
    ,
    G.prototype.load = function(t) {
        var n = this
          , i = n.a.projectId
          , e = n.a.version;
        if (i) {
            var o = n.c.m;
            p(this.c, function(t, n, i) {
                return l(t.c) + "//" + (t = (t.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "")) + "/" + n + ".js" + (i ? "?v=" + i : "")
            }(n, i, e), (function(e) {
                e ? t([]) : (o["__MonotypeConfiguration__" + i] = function() {
                    return n.a
                }
                ,
                function n() {
                    if (o["__mti_fntLst" + i]) {
                        var e, a = o["__mti_fntLst" + i](), s = [];
                        if (a)
                            for (var r = 0; r < a.length; r++) {
                                var f = a[r].fontfamily;
                                null != a[r].fontStyle && null != a[r].fontWeight ? (e = a[r].fontStyle + a[r].fontWeight,
                                s.push(new y(f,e))) : s.push(new y(f))
                            }
                        t(s)
                    } else
                        setTimeout((function() {
                            n()
                        }
                        ), 50)
                }())
            }
            )).id = "__MonotypeAPIScript__" + i
        } else
            t([])
    }
    ,
    K.prototype.load = function(t) {
        var n, i, e = this.a.urls || [], o = this.a.families || [], a = this.a.testStrings || {}, s = new d;
        for (n = 0,
        i = e.length; n < i; n++)
            u(this.c, e[n], g(s));
        var r = [];
        for (n = 0,
        i = o.length; n < i; n++)
            if ((e = o[n].split(":"))[1])
                for (var f = e[1].split(","), c = 0; c < f.length; c += 1)
                    r.push(new y(e[0],f[c]));
            else
                r.push(new y(e[0]));
        v(s, (function() {
            t(r, a)
        }
        ))
    }
    ;
    var U = "//fonts.googleapis.com/css";
    function J(t) {
        this.f = t,
        this.a = [],
        this.c = {}
    }
    var Q = {
        latin: "BESbswy",
        "latin-ext": "çöüğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ"
    }
      , V = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }
      , X = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }
      , Y = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function Z(t, n) {
        this.c = t,
        this.a = n
    }
    var tt = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    function nt(t, n) {
        this.c = t,
        this.a = n
    }
    function it(t, n) {
        this.c = t,
        this.f = n,
        this.a = []
    }
    Z.prototype.load = function(t) {
        var n = new d
          , i = this.c
          , e = new R(this.a.api,l(i),this.a.text)
          , o = this.a.families;
        !function(t, n) {
            for (var i = n.length, e = 0; e < i; e++) {
                var o = n[e].split(":");
                3 == o.length && t.f.push(o.pop());
                var a = "";
                2 == o.length && "" != o[1] && (a = ":"),
                t.a.push(o.join(a))
            }
        }(e, o);
        var a = new J(o);
        !function(t) {
            for (var n = t.f.length, i = 0; i < n; i++) {
                var e = t.f[i].split(":")
                  , o = e[0].replace(/\+/g, " ")
                  , a = ["n4"];
                if (2 <= e.length) {
                    var s;
                    if (s = [],
                    r = e[1])
                        for (var r, f = (r = r.split(",")).length, c = 0; c < f; c++) {
                            var h;
                            if ((h = r[c]).match(/^[\w-]+$/))
                                if (null == (u = Y.exec(h.toLowerCase())))
                                    h = "";
                                else {
                                    if (h = null == (h = u[2]) || "" == h ? "n" : X[h],
                                    null == (u = u[1]) || "" == u)
                                        u = "4";
                                    else
                                        var l = V[u]
                                          , u = l || (isNaN(u) ? "4" : u.substr(0, 1));
                                    h = [h, u].join("")
                                }
                            else
                                h = "";
                            h && s.push(h)
                        }
                    0 < s.length && (a = s),
                    3 == e.length && (s = [],
                    0 < (e = (e = e[2]) ? e.split(",") : s).length && (e = Q[e[0]]) && (t.c[o] = e))
                }
                for (t.c[o] || (e = Q[o]) && (t.c[o] = e),
                e = 0; e < a.length; e += 1)
                    t.a.push(new y(o,a[e]))
            }
        }(a),
        u(i, function(t) {
            if (0 == t.a.length)
                throw Error("No fonts to load!");
            if (-1 != t.c.indexOf("kit="))
                return t.c;
            for (var n = t.a.length, i = [], e = 0; e < n; e++)
                i.push(t.a[e].replace(/ /g, "+"));
            return n = t.c + "?family=" + i.join("%7C"),
            0 < t.f.length && (n += "&subset=" + t.f.join(",")),
            0 < t.g.length && (n += "&text=" + encodeURIComponent(t.g)),
            n
        }(e), g(n)),
        v(n, (function() {
            t(a.a, a.c, tt)
        }
        ))
    }
    ,
    nt.prototype.load = function(t) {
        var n = this.a.id
          , i = this.c.m;
        n ? p(this.c, (this.a.api || "https://use.typekit.net") + "/" + n + ".js", (function(n) {
            if (n)
                t([]);
            else if (i.Typekit && i.Typekit.config && i.Typekit.config.fn) {
                n = i.Typekit.config.fn;
                for (var e = [], o = 0; o < n.length; o += 2)
                    for (var a = n[o], s = n[o + 1], r = 0; r < s.length; r++)
                        e.push(new y(a,s[r]));
                try {
                    i.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (t) {}
                t(e)
            }
        }
        ), 2e3) : t([])
    }
    ,
    it.prototype.load = function(t) {
        var n = this.f.id
          , i = this.c.m
          , e = this;
        n ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}),
        i.__webfontfontdeckmodule__[n] = function(n, i) {
            for (var o = 0, a = i.fonts.length; o < a; ++o) {
                var s = i.fonts[o];
                e.a.push(new y(s.name,_("font-weight:" + s.weight + ";font-style:" + s.style)))
            }
            t(e.a)
        }
        ,
        p(this.c, l(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + function(t) {
            return t.m.location.hostname || t.a.location.hostname
        }(this.c) + "/" + n + ".js", (function(n) {
            n && t([])
        }
        ))) : t([])
    }
    ;
    var et = new M(window);
    et.a.c.custom = function(t, n) {
        return new K(n,t)
    }
    ,
    et.a.c.fontdeck = function(t, n) {
        return new it(n,t)
    }
    ,
    et.a.c.monotype = function(t, n) {
        return new G(n,t)
    }
    ,
    et.a.c.typekit = function(t, n) {
        return new nt(n,t)
    }
    ,
    et.a.c.google = function(t, n) {
        return new Z(n,t)
    }
    ;
    var ot = {
        load: i(et.load, et)
    };
    "function" == typeof define && define.amd ? define((function() {
        return ot
    }
    )) : "undefined" != typeof module && module.exports ? module.exports = ot : (window.WebFont = ot,
    window.WebFontConfig && et.load(window.WebFontConfig))
}();
