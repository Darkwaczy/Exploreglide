window.Modernizr = function(e, t, n) {
        function r(e) {
            u.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }
        var a, i, c = {},
            l = t.documentElement,
            s = t.createElement("modernizr"),
            u = s.style,
            f = {},
            p = [],
            d = p.slice,
            h = {}.hasOwnProperty;
        for (var m in i = o(h, "undefined") || o(h.call, "undefined") ? function(e, t) {
                return t in e && o(e.constructor.prototype[t], "undefined")
            } : function(e, t) {
                return h.call(e, t)
            }, Function.prototype.bind || (Function.prototype.bind = function(e) {
                var t = this;
                if ("function" != typeof t) throw new TypeError;
                var n = d.call(arguments, 1),
                    r = function() {
                        if (this instanceof r) {
                            var o = function() {};
                            o.prototype = t.prototype;
                            var a = new o,
                                i = t.apply(a, n.concat(d.call(arguments)));
                            return Object(i) === i ? i : a
                        }
                        return t.apply(e, n.concat(d.call(arguments)))
                    };
                return r
            }), f) i(f, m) && (a = m.toLowerCase(), c[a] = f[m](), p.push((c[a] ? "" : "no-") + a));
        return c.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) i(e, r) && c.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), c[e] !== n) return c;
                    t = "function" == typeof t ? t() : t, l.className += " " + (t ? "" : "no-") + e, c[e] = t
                }
                return c
            }, r(""), s = null,
            function(e, t) {
                function n() {
                    var e = h.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = d[e[f]];
                    return t || (t = {}, p++, e[f] = p, d[p] = t), t
                }

                function o(e, n, o) {
                    return n || (n = t), c ? n.createElement(e) : (o || (o = r(n)), (a = o.cache[e] ? o.cache[e].cloneNode() : u.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e)).canHaveChildren && !s.test(e) ? o.frag.appendChild(a) : a);
                    var a
                }

                function a(e) {
                    e || (e = t);
                    var a = r(e);
                    return h.shivCSS && !i && !a.hasCSS && (a.hasCSS = !! function(e, t) {
                        var n = e.createElement("p"),
                            r = e.getElementsByTagName("head")[0] || e.documentElement;
                        return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                    }(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || function(e, t) {
                        t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                            return h.shivMethods ? o(n, e, t) : t.createElem(n)
                        }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function(e) {
                            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                        }) + ");return n}")(h, t.frag)
                    }(e, a), e
                }
                var i, c, l = e.html5 || {},
                    s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f = "_html5shiv",
                    p = 0,
                    d = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", i = "hidden" in e, c = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                        }()
                    } catch (e) {
                        i = !0, c = !0
                    }
                }();
                var h = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: !1 !== l.shivCSS,
                    supportsUnknownElements: c,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: a,
                    createElement: o,
                    createDocumentFragment: function(e, o) {
                        if (e || (e = t), c) return e.createDocumentFragment();
                        for (var a = (o = o || r(e)).frag.cloneNode(), i = 0, l = n(), s = l.length; i < s; i++) a.createElement(l[i]);
                        return a
                    }
                };
                e.html5 = h, a(t)
            }(this, t), c._version = "2.6.2", l.className = l.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + p.join(" "), c
    }(0, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == y.call(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function a() {}

        function i(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function c() {
            var e = v.shift();
            g = 1, e ? e.t ? h(function() {
                ("c" == e.t ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), c()) : g = 0
        }

        function l(e, n, r, o, a, l, s) {
            function u(t) {
                if (!d && i(f.readyState) && (E.r = d = 1, !g && c(), f.onload = f.onreadystatechange = null, t))
                    for (var r in "img" != e && h(function() {
                            j.removeChild(f)
                        }, 50), N[n]) N[n].hasOwnProperty(r) && N[n][r].onload()
            }
            s = s || p.errorTimeout;
            var f = t.createElement(e),
                d = 0,
                y = 0,
                E = {
                    t: r,
                    s: n,
                    e: a,
                    a: l,
                    x: s
                };
            1 === N[n] && (y = 1, N[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function() {
                u.call(this, y)
            }, v.splice(o, 0, E), "img" != e && (y || 2 === N[n] ? (j.insertBefore(f, b ? null : m), h(u, s)) : N[n].push(f))
        }

        function s(e, t, n, r, a) {
            return g = 0, t = t || "j", o(e) ? l("c" == t ? C : S, e, t, this.i++, n, r, a) : (v.splice(this.i++, 0, e), 1 == v.length && c()), this
        }

        function u() {
            var e = p;
            return e.loader = {
                load: s,
                i: 0
            }, e
        }
        var f, p, d = t.documentElement,
            h = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            y = {}.toString,
            v = [],
            g = 0,
            E = "MozAppearance" in d.style,
            b = E && !!t.createRange().compareNode,
            j = b ? d : m.parentNode,
            S = (d = e.opera && "[object Opera]" == y.call(e.opera), d = !!t.attachEvent && !d, E ? "object" : d ? "script" : "img"),
            C = d ? "script" : S,
            w = Array.isArray || function(e) {
                return "[object Array]" == y.call(e)
            },
            F = [],
            N = {},
            x = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        (p = function(e) {
            function t(e, t, o, a, i) {
                var c = function(e) {
                        e = e.split("!");
                        var t, n, r, o = F.length,
                            a = e.pop(),
                            i = e.length;
                        for (a = {
                                url: a,
                                origUrl: a,
                                prefixes: e
                            }, n = 0; n < i; n++) r = e[n].split("="), (t = x[r.shift()]) && (a = t(a, r));
                        for (n = 0; n < o; n++) a = F[n](a);
                        return a
                    }(e),
                    l = c.autoCallback;
                c.url.split(".").pop().split("?").shift(), c.bypass || (t && (t = r(t) ? t : t[e] || t[a] || t[e.split("/").pop().split("?")[0]]), c.instead ? c.instead(e, t, o, a, i) : (N[c.url] ? c.noexec = !0 : N[c.url] = 1, o.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (r(t) || r(l)) && o.load(function() {
                    u(), t && t(c.origUrl, i, a), l && l(c.origUrl, i, a), N[c.url] = 2
                })))
            }

            function i(e, n) {
                function i(e, a) {
                    if (e) {
                        if (o(e)) a || (f = function() {
                            var e = [].slice.call(arguments);
                            p.apply(this, e), d()
                        }), t(e, f, n, 0, s);
                        else if (Object(e) === e)
                            for (l in c = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!a && !--c && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                p.apply(this, e), d()
                            } : f[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), d()
                                }
                            }(p[l])), t(e[l], f, n, l, s))
                    } else !a && d()
                }
                var c, l, s = !!e.test,
                    u = e.load || e.both,
                    f = e.callback || a,
                    p = f,
                    d = e.complete || a;
                i(s ? e.yep : e.nope, !!u), u && i(u)
            }
            var c, l, s = this.yepnope.loader;
            if (o(e)) t(e, 0, s, 0);
            else if (w(e))
                for (c = 0; c < e.length; c++) o(l = e[c]) ? t(l, 0, s, 0) : w(l) ? p(l) : Object(l) === l && i(l, s);
            else Object(e) === e && i(e, s)
        }).addPrefix = function(e, t) {
            x[e] = t
        }, p.addFilter = function(e) {
            F.push(e)
        }, p.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function() {
            t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, l, s) {
            var u, f, d = t.createElement("script");
            o = o || p.errorTimeout;
            for (f in d.src = e, r) d.setAttribute(f, r[f]);
            n = s ? c : n || a, d.onreadystatechange = d.onload = function() {
                !u && i(d.readyState) && (u = 1, n(), d.onload = d.onreadystatechange = null)
            }, h(function() {
                u || (u = 1, n(1))
            }, o), l ? d.onload() : m.parentNode.insertBefore(d, m)
        }, e.yepnope.injectCss = function(e, n, r, o, i, l) {
            var s;
            o = t.createElement("link"), n = l ? c : n || a;
            for (s in o.href = e, o.rel = "stylesheet", o.type = "text/css", r) o.setAttribute(s, r[s]);
            i || (m.parentNode.insertBefore(o, m), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };