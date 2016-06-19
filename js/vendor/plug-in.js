/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
;define("plugin/lazyload", ["require", "exports", "module"],
    function() {
        LazyLoad = function(a) {
            function c(c, h) {
                var g, y = a.createElement(c);
                for (g in h) h.hasOwnProperty(g) && y.setAttribute(g, h[g]);
                return y
            }
            function h(a) {
                var c, h, p = w[a];
                p && (c = p.callback, h = p.urls, h.shift(), T = 0, h.length || (c && c.call(p.context, p.obj), w[a] = null, z[a].length && y(a)))
            }
            function g() {
                var c = navigator.userAgent;
                v = {
                    async: a.createElement("script").async === !0
                },
                (v.webkit = /AppleWebKit\//.test(c)) || (v.ie = /MSIE|Trident/.test(c)) || (v.opera = /Opera/.test(c)) || (v.gecko = /Gecko\//.test(c)) || (v.unknown = !0)
            }
            function y(y, T, A, E, L) {
                var i, S, M, p, N, O, B = function() {
                        h(y)
                    },
                    C = "css" === y,
                    G = [];
                if (v || g(), T) if (T = "string" == typeof T ? [T] : T.concat(), C || v.async || v.gecko || v.opera) z[y].push({
                    urls: T,
                    callback: A,
                    obj: E,
                    context: L
                });
                else for (i = 0, S = T.length; S > i; ++i) z[y].push({
                        urls: [T[i]],
                        callback: i === S - 1 ? A: null,
                        obj: E,
                        context: L
                    });
                if (!w[y] && (p = w[y] = z[y].shift())) {
                    for (j || (j = a.head || a.getElementsByTagName("head")[0]), N = p.urls.concat(), i = 0, S = N.length; S > i; ++i) O = N[i],
                        C ? M = v.gecko ? c("style") : c("link", {
                            href: O,
                            rel: "stylesheet"
                        }) : (M = c("script", {
                            src: O
                        }), M.async = !1),
                        M.className = "lazyload",
                        M.setAttribute("charset", "utf-8"),
                        v.ie && !C && "onreadystatechange" in M && !("draggable" in M) ? M.onreadystatechange = function() { / loaded | complete / .test(M.readyState) && (M.onreadystatechange = null, B())
                        }: C && (v.gecko || v.webkit) ? v.webkit ? (p.urls[i] = M.href, k()) : (M.innerHTML = '@import "' + O + '";', b(M)) : M.onload = M.onerror = B,
                        G.push(M);
                    for (i = 0, S = G.length; S > i; ++i) j.appendChild(G[i])
                }
            }
            function b(a) {
                var c;
                try {
                    c = !!a.sheet.cssRules
                } catch(ex) {
                    return T += 1,
                        void(200 > T ? setTimeout(function() {
                                b(a)
                            },
                            50) : c && h("css"))
                }
                h("css")
            }
            function k() {
                var i, a = w.css;
                if (a) {
                    for (i = A.length; --i >= 0;) if (A[i].href === a.urls[0]) {
                        h("css");
                        break
                    }
                    T += 1,
                    a && (200 > T ? setTimeout(k, 50) : h("css"))
                }
            }
            var v, j, w = {},
                T = 0,
                z = {
                    css: [],
                    js: []
                },
                A = a.styleSheets;
            return {
                css: function(a, c, h, g) {
                    y("css", a, c, h, g)
                },
                js: function(a, c, h, g) {
                    y("js", a, c, h, g)
                }
            }
        } (this.document)
    });
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------Plugin-Md5------------------------------------------------------------------------------------*/
; !
    function(c) {
        "use strict";
        function a(x, c) {
            var a = (65535 & x) + (65535 & c),
                h = (x >> 16) + (c >> 16) + (a >> 16);
            return h << 16 | 65535 & a
        }
        function h(c, a) {
            return c << a | c >>> 32 - a
        }
        function g(q, c, g, x, s, t) {
            return a(h(a(a(c, q), a(x, t)), s), g)
        }
        function v(c, a, h, d, x, s, t) {
            return g(a & h | ~a & d, c, a, x, s, t)
        }
        function C(c, a, h, d, x, s, t) {
            return g(a & d | h & ~d, c, a, x, s, t)
        }
        function A(c, a, h, d, x, s, t) {
            return g(a ^ h ^ d, c, a, x, s, t)
        }
        function b(c, a, h, d, x, s, t) {
            return g(h ^ (a | ~d), c, a, x, s, t)
        }
        function j(x, c) {
            x[c >> 5] |= 128 << c % 32,
                x[(c + 64 >>> 9 << 4) + 14] = c;
            var i, h, g, j, y, I = 1732584193,
                R = -271733879,
                S = -1732584194,
                d = 271733878;
            for (i = 0; i < x.length; i += 16) h = I,
                g = R,
                j = S,
                y = d,
                I = v(I, R, S, d, x[i], 7, -680876936),
                d = v(d, I, R, S, x[i + 1], 12, -389564586),
                S = v(S, d, I, R, x[i + 2], 17, 606105819),
                R = v(R, S, d, I, x[i + 3], 22, -1044525330),
                I = v(I, R, S, d, x[i + 4], 7, -176418897),
                d = v(d, I, R, S, x[i + 5], 12, 1200080426),
                S = v(S, d, I, R, x[i + 6], 17, -1473231341),
                R = v(R, S, d, I, x[i + 7], 22, -45705983),
                I = v(I, R, S, d, x[i + 8], 7, 1770035416),
                d = v(d, I, R, S, x[i + 9], 12, -1958414417),
                S = v(S, d, I, R, x[i + 10], 17, -42063),
                R = v(R, S, d, I, x[i + 11], 22, -1990404162),
                I = v(I, R, S, d, x[i + 12], 7, 1804603682),
                d = v(d, I, R, S, x[i + 13], 12, -40341101),
                S = v(S, d, I, R, x[i + 14], 17, -1502002290),
                R = v(R, S, d, I, x[i + 15], 22, 1236535329),
                I = C(I, R, S, d, x[i + 1], 5, -165796510),
                d = C(d, I, R, S, x[i + 6], 9, -1069501632),
                S = C(S, d, I, R, x[i + 11], 14, 643717713),
                R = C(R, S, d, I, x[i], 20, -373897302),
                I = C(I, R, S, d, x[i + 5], 5, -701558691),
                d = C(d, I, R, S, x[i + 10], 9, 38016083),
                S = C(S, d, I, R, x[i + 15], 14, -660478335),
                R = C(R, S, d, I, x[i + 4], 20, -405537848),
                I = C(I, R, S, d, x[i + 9], 5, 568446438),
                d = C(d, I, R, S, x[i + 14], 9, -1019803690),
                S = C(S, d, I, R, x[i + 3], 14, -187363961),
                R = C(R, S, d, I, x[i + 8], 20, 1163531501),
                I = C(I, R, S, d, x[i + 13], 5, -1444681467),
                d = C(d, I, R, S, x[i + 2], 9, -51403784),
                S = C(S, d, I, R, x[i + 7], 14, 1735328473),
                R = C(R, S, d, I, x[i + 12], 20, -1926607734),
                I = A(I, R, S, d, x[i + 5], 4, -378558),
                d = A(d, I, R, S, x[i + 8], 11, -2022574463),
                S = A(S, d, I, R, x[i + 11], 16, 1839030562),
                R = A(R, S, d, I, x[i + 14], 23, -35309556),
                I = A(I, R, S, d, x[i + 1], 4, -1530992060),
                d = A(d, I, R, S, x[i + 4], 11, 1272893353),
                S = A(S, d, I, R, x[i + 7], 16, -155497632),
                R = A(R, S, d, I, x[i + 10], 23, -1094730640),
                I = A(I, R, S, d, x[i + 13], 4, 681279174),
                d = A(d, I, R, S, x[i], 11, -358537222),
                S = A(S, d, I, R, x[i + 3], 16, -722521979),
                R = A(R, S, d, I, x[i + 6], 23, 76029189),
                I = A(I, R, S, d, x[i + 9], 4, -640364487),
                d = A(d, I, R, S, x[i + 12], 11, -421815835),
                S = A(S, d, I, R, x[i + 15], 16, 530742520),
                R = A(R, S, d, I, x[i + 2], 23, -995338651),
                I = b(I, R, S, d, x[i], 6, -198630844),
                d = b(d, I, R, S, x[i + 7], 10, 1126891415),
                S = b(S, d, I, R, x[i + 14], 15, -1416354905),
                R = b(R, S, d, I, x[i + 5], 21, -57434055),
                I = b(I, R, S, d, x[i + 12], 6, 1700485571),
                d = b(d, I, R, S, x[i + 3], 10, -1894986606),
                S = b(S, d, I, R, x[i + 10], 15, -1051523),
                R = b(R, S, d, I, x[i + 1], 21, -2054922799),
                I = b(I, R, S, d, x[i + 8], 6, 1873313359),
                d = b(d, I, R, S, x[i + 15], 10, -30611744),
                S = b(S, d, I, R, x[i + 6], 15, -1560198380),
                R = b(R, S, d, I, x[i + 13], 21, 1309151649),
                I = b(I, R, S, d, x[i + 4], 6, -145523070),
                d = b(d, I, R, S, x[i + 11], 10, -1120210379),
                S = b(S, d, I, R, x[i + 2], 15, 718787259),
                R = b(R, S, d, I, x[i + 9], 21, -343485551),
                I = a(I, h),
                R = a(R, g),
                S = a(S, j),
                d = a(d, y);
            return [I, R, S, d]
        }
        function y(c) {
            var i, a = "";
            for (i = 0; i < 32 * c.length; i += 8) a += String.fromCharCode(c[i >> 5] >>> i % 32 & 255);
            return a
        }
        function I(c) {
            var i, a = [];
            for (a[(c.length >> 2) - 1] = void 0, i = 0; i < a.length; i += 1) a[i] = 0;
            for (i = 0; i < 8 * c.length; i += 8) a[i >> 5] |= (255 & c.charCodeAt(i / 8)) << i % 32;
            return a
        }
        function R(s) {
            return y(j(I(s), 8 * s.length))
        }
        function S(c, a) {
            var i, h, g = I(c),
                v = [],
                C = [];
            for (v[15] = C[15] = void 0, g.length > 16 && (g = j(g, 8 * c.length)), i = 0; 16 > i; i += 1) v[i] = 909522486 ^ g[i],
                C[i] = 1549556828 ^ g[i];
            return h = j(v.concat(I(a)), 512 + 8 * a.length),
                y(j(C.concat(h), 640))
        }
        function U(c) {
            var x, i, a = "0123456789abcdef",
                h = "";
            for (i = 0; i < c.length; i += 1) x = c.charCodeAt(i),
                h += a.charAt(x >>> 4 & 15) + a.charAt(15 & x);
            return h
        }
        function k(c) {
            return unescape(encodeURIComponent(c))
        }
        function w(s) {
            return R(k(s))
        }
        function z(s) {
            return U(w(s))
        }
        function B(c, d) {
            return S(k(c), k(d))
        }
        function D(c, d) {
            return U(B(c, d))
        }
        function E(c, a, h) {
            return a ? h ? B(a, c) : D(a, c) : h ? w(c) : z(c)
        }
        "function" == typeof define && define.amd ? define("dep/blueimp-md5/js/md5", ["require"],
            function() {
                return E
            }) : c.md5 = E
    } (this);
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------footer/main--------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
define("footer_c/main", ["require", "exports", "module"],
    function() {
        function c() {
            return $("#backtop").css("background-position-x", "-28px"),
                window.scrollBy(0, -20),
                0 == document.documentElement.scrollTop && 0 == document.body.scrollTop ? void $("#backtop").css("background-position-x", "0") : void(scrolldelay = setTimeout(c, 2))
        }
        function a(c) {
            $(window).height() - c > $(document.body).height() ? $("#footer").addClass("footer_fix") : $("#footer").removeClass("footer_fix")
        }
        $(".footer_app, .footer_qr").hover(function() {
                $("img", this).stop().fadeIn(200)
            },
            function() {
                $("img", this).stop().fadeOut(200)
            }),
            $(window).scroll(function() { (document.documentElement.scrollTop || document.body.scrollTop) > 0 ? $("#backtop").show() : $("#backtop").hide()
            }),
            $("#backtop").click(function() {
                c()
            }),
            a(0),
            $(window).resize(function() {
                a($("#footer").hasClass("footer_fix") ? 68 : 0)
            })
    });
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
