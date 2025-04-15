import './index.css';var Fl = Object.defineProperty;
var Ol = (n, e, t) => e in n ? Fl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var le = (n, e, t) => (Ol(n, typeof e != "symbol" ? e + "" : e, t), t);
import { jsx as U, jsxs as gr, Fragment as Bo } from "react/jsx-runtime";
import * as Wn from "react";
import Ll, { createContext as Il, useContext as Pl, useMemo as _n, useLayoutEffect as Kt, useEffect as me, useState as gt, useRef as Wo, Suspense as $l, forwardRef as Uo, useCallback as Hr } from "react";
import Rl, { flushSync as Dl, createPortal as Ml } from "react-dom";
var en = {}, Yt = Rl;
if (process.env.NODE_ENV === "production")
  en.createRoot = Yt.createRoot, en.hydrateRoot = Yt.hydrateRoot;
else {
  var Nn = Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  en.createRoot = function(n, e) {
    Nn.usingClientEntryPoint = !0;
    try {
      return Yt.createRoot(n, e);
    } finally {
      Nn.usingClientEntryPoint = !1;
    }
  }, en.hydrateRoot = function(n, e, t) {
    Nn.usingClientEntryPoint = !0;
    try {
      return Yt.hydrateRoot(n, e, t);
    } finally {
      Nn.usingClientEntryPoint = !1;
    }
  };
}
const Ko = Il(null);
function zl(n, e) {
  let t = null;
  return { getTheme: function() {
    return e ?? (t != null ? t.getTheme() : null);
  } };
}
function Me() {
  const n = Pl(Ko);
  return n == null && function(e, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), i = new URLSearchParams();
    i.append("code", e);
    for (const s of t)
      i.append("v", s);
    throw r.search = i.toString(), Error(`Minified Lexical error #${e}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(8), n;
}
function T(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e)
    r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Ne = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Bl = Ne && "documentMode" in document ? document.documentMode : null, Se = Ne && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Qe = Ne && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Hn = !(!Ne || !("InputEvent" in window) || Bl) && "getTargetRanges" in new window.InputEvent("input"), un = Ne && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Rt = Ne && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Wl = Ne && /Android/.test(navigator.userAgent), Jo = Ne && /^(?=.*Chrome).*/i.test(navigator.userAgent), ps = Ne && Wl && Jo, Gn = Ne && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Jo;
function Vn(...n) {
  const e = [];
  for (const t of n)
    if (t && typeof t == "string")
      for (const [r] of t.matchAll(/\S+/g))
        e.push(r);
  return e;
}
const Ul = 1, Kl = 3, Jl = 9, ql = 11, ht = 0, qo = 1, Dt = 2, jl = 0, Hl = 1, Gl = 2, Zn = 4, Yn = 8, wi = 128, Vl = 1792 | (112 | (3 | Zn | Yn) | wi), Ci = 1, Ei = 2, ki = 3, Ti = 4, Ni = 5, Ai = 6, hr = un || Rt || Gn ? " " : "​", je = `

`, Zl = Qe ? " " : hr, jo = "֑-߿יִ-﷽ﹰ-ﻼ", Ho = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Yl = new RegExp("^[^" + Ho + "]*[" + jo + "]"), Xl = new RegExp("^[^" + jo + "]*[" + Ho + "]"), ue = { bold: 1, capitalize: 1024, code: 16, highlight: wi, italic: 2, lowercase: 256, strikethrough: Zn, subscript: 32, superscript: 64, underline: Yn, uppercase: 512 }, Ql = { directionless: 1, unmergeable: 2 }, ms = { center: Ei, end: Ai, justify: Ti, left: Ci, right: ki, start: Ni }, eu = { [Ei]: "center", [Ai]: "end", [Ti]: "justify", [Ci]: "left", [ki]: "right", [Ni]: "start" }, tu = { normal: 0, segmented: 2, token: 1 }, nu = { [jl]: "normal", [Gl]: "segmented", [Hl]: "token" }, ru = "$";
function Go(n, e, t, r, i, s) {
  let o = n.getFirstChild();
  for (; o !== null; ) {
    const a = o.__key;
    o.__parent === e && (k(o) && Go(o, a, t, r, i, s), t.has(a) || s.delete(a), i.push(a)), o = o.getNextSibling();
  }
}
const iu = 100;
let Gr = !1, Fi = 0;
function su(n) {
  Fi = n.timeStamp;
}
function Or(n, e, t) {
  const r = n.nodeName === "BR", i = e.__lexicalLineBreak;
  return i && (n === i || r && n.previousSibling === i) || r && wr(n, t) !== void 0;
}
function ou(n, e, t) {
  const r = ke(xe(t));
  let i = null, s = null;
  r !== null && r.anchorNode === n && (i = r.anchorOffset, s = r.focusOffset);
  const o = n.nodeValue;
  o !== null && Vi(e, o, i, s, !1);
}
function au(n, e, t) {
  if (N(n)) {
    const r = n.anchor.getNode();
    if (r.is(t) && n.format !== r.getFormat())
      return !1;
  }
  return Ge(e) && t.isAttached();
}
function lu(n, e, t, r) {
  for (let i = n; i && !tc(i); i = Cn(i)) {
    const s = wr(i, e);
    if (s !== void 0) {
      const o = X(s, t);
      if (o)
        return z(o) || !V(i) ? void 0 : [i, o];
    } else if (i === r)
      return [r, qa(t)];
  }
}
function Vo(n, e, t) {
  Gr = !0;
  const r = performance.now() - Fi > iu;
  try {
    be(n, () => {
      const i = L() || function(d) {
        return d.getEditorState().read(() => {
          const m = L();
          return m !== null ? m.clone() : null;
        });
      }(n), s = /* @__PURE__ */ new Map(), o = n.getRootElement(), a = n._editorState, l = n._blockCursorElement;
      let u = !1, c = "";
      for (let d = 0; d < e.length; d++) {
        const m = e[d], h = m.type, _ = m.target, y = lu(_, n, a, o);
        if (!y)
          continue;
        const [v, g] = y;
        if (h === "characterData")
          r && F(g) && Ge(_) && au(i, _, g) && ou(_, g, n);
        else if (h === "childList") {
          u = !0;
          const p = m.addedNodes;
          for (let x = 0; x < p.length; x++) {
            const C = p[x], E = Ka(C), w = C.parentNode;
            if (w != null && C !== l && E === null && !Or(C, w, n)) {
              if (Qe) {
                const A = (V(C) ? C.innerText : null) || C.nodeValue;
                A && (c += A);
              }
              w.removeChild(C);
            }
          }
          const b = m.removedNodes, S = b.length;
          if (S > 0) {
            let x = 0;
            for (let C = 0; C < S; C++) {
              const E = b[C];
              (Or(E, _, n) || l === E) && (_.appendChild(E), x++);
            }
            S !== x && s.set(v, g);
          }
        }
      }
      if (s.size > 0)
        for (const [d, m] of s)
          m.reconcileObservedMutation(d, n);
      const f = t.takeRecords();
      if (f.length > 0) {
        for (let d = 0; d < f.length; d++) {
          const m = f[d], h = m.addedNodes, _ = m.target;
          for (let y = 0; y < h.length; y++) {
            const v = h[y], g = v.parentNode;
            g == null || v.nodeName !== "BR" || Or(v, _, n) || g.removeChild(v);
          }
        }
        t.takeRecords();
      }
      i !== null && (u && fe(i), Qe && Va(n) && i.insertRawText(c));
    });
  } finally {
    Gr = !1;
  }
}
function Zo(n) {
  const e = n._observer;
  e !== null && Vo(n, e.takeRecords(), e);
}
function Yo(n) {
  (function(e) {
    Fi === 0 && xe(e).addEventListener("textInput", su, !0);
  })(n), n._observer = new MutationObserver((e, t) => {
    Vo(n, e, t);
  });
}
let uu = class Xo {
  constructor(e, t = /* @__PURE__ */ new Map(), r = void 0, i = /* @__PURE__ */ new Map(), s = void 0) {
    this.node = e, this.sharedConfigMap = t, this.unknownState = r, this.knownState = i;
    const o = s !== void 0 ? s : function(a, l, u) {
      let c = u.size;
      if (l)
        for (const f in l) {
          const d = a.get(f);
          d && u.has(d) || c++;
        }
      return c;
    }(t, r, i);
    this.size = o;
  }
  getValue(e) {
    const t = this.knownState.get(e);
    if (t !== void 0)
      return t;
    this.sharedConfigMap.set(e.key, e);
    let r = e.defaultValue;
    if (this.unknownState && e.key in this.unknownState) {
      const i = this.unknownState[e.key];
      i !== void 0 && (r = e.parse(i)), this.updateFromKnown(e, r);
    }
    return r;
  }
  getInternalState() {
    return [this.unknownState, this.knownState];
  }
  toJSON() {
    const e = { ...this.unknownState };
    for (const [t, r] of this.knownState)
      t.isEqual(r, t.defaultValue) ? delete e[t.key] : e[t.key] = t.unparse(r);
    return An(e) ? { [ru]: e } : {};
  }
  getWritable(e) {
    if (this.node === e)
      return this;
    const t = new Map(this.knownState), r = An(i = this.unknownState) && { ...i };
    var i;
    if (r)
      for (const s of t.keys())
        delete r[s.key];
    return new Xo(e, this.sharedConfigMap, An(r), t, this.size);
  }
  updateFromKnown(e, t) {
    const r = e.key;
    this.sharedConfigMap.set(r, e);
    const { knownState: i, unknownState: s } = this;
    i.has(e) || s && r in s || this.size++, i.set(e, t);
  }
  updateFromUnknown(e, t) {
    const r = this.sharedConfigMap.get(e);
    r ? this.updateFromKnown(r, r.parse(t)) : (this.unknownState = this.unknownState || {}, e in this.unknownState || this.size++, this.unknownState[e] = t);
  }
  updateFromJSON(e) {
    const { knownState: t } = this;
    for (const r of t.keys())
      t.set(r, r.defaultValue);
    if (this.size = t.size, this.unknownState = {}, e)
      for (const [r, i] of Object.entries(e))
        this.updateFromUnknown(r, i);
    this.unknownState = An(this.unknownState);
  }
};
function An(n) {
  if (n)
    for (const e in n)
      return n;
}
function cu(n) {
  const e = n.getWritable(), t = e.__state ? e.__state.getWritable(e) : new uu(e);
  return e.__state = t, t;
}
function _s(n, e) {
  const t = n.__mode, r = n.__format, i = n.__style, s = e.__mode, o = e.__format, a = e.__style, l = n.__state, u = e.__state;
  return (t === null || t === s) && (r === null || r === o) && (i === null || i === a) && (n.__state === null || l === u || function(c, f) {
    if (c === f)
      return !0;
    if (c && f && c.size !== f.size)
      return !1;
    const d = /* @__PURE__ */ new Set(), m = (_, y) => {
      for (const [v, g] of _.knownState) {
        if (d.has(v.key))
          continue;
        d.add(v.key);
        const p = y ? y.getValue(v) : v.defaultValue;
        if (p !== g && !v.isEqual(p, g))
          return !0;
      }
      return !1;
    }, h = (_, y) => {
      const { unknownState: v } = _, g = y ? y.unknownState : void 0;
      if (v) {
        for (const [p, b] of Object.entries(v))
          if (!d.has(p) && (d.add(p), b !== (g ? g[p] : void 0)))
            return !0;
      }
      return !1;
    };
    return !(c && m(c, f) || f && m(f, c) || c && h(c, f) || f && h(f, c));
  }(l, u));
}
function ys(n, e) {
  const t = n.mergeWithSibling(e), r = K()._normalizedNodes;
  return r.add(n.__key), r.add(e.__key), t;
}
function bs(n) {
  let e, t, r = n;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (e = r.getPreviousSibling()) !== null && F(e) && e.isSimpleText() && !e.isUnmergeable(); ) {
      if (e.__text !== "") {
        if (_s(e, r)) {
          r = ys(e, r);
          break;
        }
        break;
      }
      e.remove();
    }
    for (; (t = r.getNextSibling()) !== null && F(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (_s(r, t)) {
          r = ys(r, t);
          break;
        }
        break;
      }
      t.remove();
    }
  } else
    r.remove();
}
function Xn(n) {
  return xs(n.anchor), xs(n.focus), n;
}
function xs(n) {
  for (; n.type === "element"; ) {
    const e = n.getNode(), t = n.offset;
    let r, i;
    if (t === e.getChildrenSize() ? (r = e.getChildAtIndex(t - 1), i = !0) : (r = e.getChildAtIndex(t), i = !1), F(r)) {
      n.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!k(r))
      break;
    n.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
  }
}
let et, de, cn, pr, Vr, Zr, pt, Ce, Yr, dn, Z = "", ce = "", Fe = null, Oe = "", Ke = "", Qo = !1, fn = !1, Un = null;
function Qn(n, e) {
  const t = pt.get(n);
  if (e !== null) {
    const r = ei(n);
    r.parentNode === e && e.removeChild(r);
  }
  if (Ce.has(n) || de._keyToDOMMap.delete(n), k(t)) {
    const r = tr(t, pt);
    Xr(r, 0, r.length - 1, null);
  }
  t !== void 0 && Zi(dn, cn, pr, t, "destroyed");
}
function Xr(n, e, t, r) {
  let i = e;
  for (; i <= t; ++i) {
    const s = n[i];
    s !== void 0 && Qn(s, r);
  }
}
function ot(n, e) {
  n.setProperty("text-align", e);
}
const du = "40px";
function ea(n, e) {
  const t = et.theme.indent;
  if (typeof t == "string") {
    const i = n.classList.contains(t);
    e > 0 && !i ? n.classList.add(t) : e < 1 && i && n.classList.remove(t);
  }
  const r = getComputedStyle(n).getPropertyValue("--lexical-indent-base-value") || du;
  n.style.setProperty("padding-inline-start", e === 0 ? "" : `calc(${e} * ${r})`);
}
function ta(n, e) {
  const t = n.style;
  e === 0 ? ot(t, "") : e === Ci ? ot(t, "left") : e === Ei ? ot(t, "center") : e === ki ? ot(t, "right") : e === Ti ? ot(t, "justify") : e === Ni ? ot(t, "start") : e === Ai && ot(t, "end");
}
function er(n, e) {
  const t = Ce.get(n);
  t === void 0 && T(60);
  const r = t.createDOM(et, de);
  if (function(i, s, o) {
    const a = o._keyToDOMMap;
    (function(l, u, c) {
      const f = `__lexicalKey_${u._key}`;
      l[f] = c;
    })(s, o, i), a.set(i, s);
  }(n, r, de), F(t) ? r.setAttribute("data-lexical-text", "true") : z(t) && r.setAttribute("data-lexical-decorator", "true"), k(t)) {
    const i = t.__indent, s = t.__size;
    if (i !== 0 && ea(r, i), s !== 0) {
      const a = s - 1;
      (function(l, u, c, f) {
        const d = ce;
        ce = "", Qr(l, c, 0, u, c.getDOMSlot(f)), ra(c, f), ce = d;
      })(tr(t, Ce), a, t, r);
    }
    const o = t.__format;
    o !== 0 && ta(r, o), t.isInline() || na(null, t, r), Cr(t) && (Z += je, Ke += je);
  } else {
    const i = t.getTextContent();
    if (z(t)) {
      const s = t.decorate(de, et);
      s !== null && ia(n, s), r.contentEditable = "false";
    } else
      F(t) && (t.isDirectionless() || (ce += i));
    Z += i, Ke += i;
  }
  return e !== null && e.insertChild(r), Zi(dn, cn, pr, t, "created"), r;
}
function Qr(n, e, t, r, i) {
  const s = Z;
  Z = "";
  let o = t;
  for (; o <= r; ++o) {
    er(n[o], i);
    const a = Ce.get(n[o]);
    a !== null && F(a) && (Fe === null && (Fe = a.getFormat()), Oe === "" && (Oe = a.getStyle()));
  }
  Cr(e) && (Z += je), i.element.__lexicalTextContent = Z, Z = s + Z;
}
function vs(n, e) {
  if (n) {
    const t = n.__last;
    if (t) {
      const r = e.get(t);
      if (r)
        return Pt(r) ? "line-break" : z(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function na(n, e, t) {
  const r = vs(n, pt), i = vs(e, Ce);
  r !== i && e.getDOMSlot(t).setManagedLineBreak(i);
}
function ra(n, e) {
  const t = e.__lexicalDirTextContent || "", r = e.__lexicalDir || "";
  if (t !== ce || r !== Un) {
    const i = ce === "", s = i ? Un : function(o) {
      return Yl.test(o) ? "rtl" : Xl.test(o) ? "ltr" : null;
    }(ce);
    if (s !== r) {
      const o = e.classList, a = et.theme;
      let l = r !== null ? a[r] : void 0, u = s !== null ? a[s] : void 0;
      if (l !== void 0) {
        if (typeof l == "string") {
          const c = Vn(l);
          l = a[r] = c;
        }
        o.remove(...l);
      }
      if (s === null || i && s === "ltr")
        e.removeAttribute("dir");
      else {
        if (u !== void 0) {
          if (typeof u == "string") {
            const c = Vn(u);
            u = a[s] = c;
          }
          u !== void 0 && o.add(...u);
        }
        e.dir = s;
      }
      fn || (n.getWritable().__dir = s);
    }
    Un = s, e.__lexicalDirTextContent = ce, e.__lexicalDir = s;
  }
}
function fu(n, e, t) {
  const r = ce;
  var i;
  ce = "", Fe = null, Oe = "", function(s, o, a) {
    const l = Z, u = s.__size, c = o.__size;
    Z = "";
    const f = a.element;
    if (u === 1 && c === 1) {
      const d = s.__first, m = o.__first;
      if (d === m)
        tn(d, f);
      else {
        const _ = ei(d), y = er(m, null);
        try {
          f.replaceChild(y, _);
        } catch (v) {
          if (typeof v == "object" && v != null) {
            const g = `${v.toString()} Parent: ${f.tagName}, new child: {tag: ${y.tagName} key: ${m}}, old child: {tag: ${_.tagName}, key: ${d}}.`;
            throw new Error(g);
          }
          throw v;
        }
        Qn(d, null);
      }
      const h = Ce.get(m);
      F(h) && (Fe === null && (Fe = h.getFormat()), Oe === "" && (Oe = h.getStyle()));
    } else {
      const d = tr(s, pt), m = tr(o, Ce);
      if (d.length !== u && T(227), m.length !== c && T(228), u === 0)
        c !== 0 && Qr(m, o, 0, c - 1, a);
      else if (c === 0) {
        if (u !== 0) {
          const h = a.after == null && a.before == null && a.element.__lexicalLineBreak == null;
          Xr(d, 0, u - 1, h ? null : f), h && (f.textContent = "");
        }
      } else
        (function(h, _, y, v, g, p) {
          const b = v - 1, S = g - 1;
          let x, C, E = p.getFirstChild(), w = 0, A = 0;
          for (; w <= b && A <= S; ) {
            const R = _[w], P = y[A];
            if (R === P)
              E = Lr(tn(P, p.element)), w++, A++;
            else {
              x === void 0 && (x = new Set(_)), C === void 0 && (C = new Set(y));
              const J = C.has(R), q = x.has(P);
              if (J)
                if (q) {
                  const W = Bt(de, P);
                  W === E ? E = Lr(tn(P, p.element)) : (p.withBefore(E).insertChild(W), tn(P, p.element)), w++, A++;
                } else
                  er(P, p.withBefore(E)), A++;
              else
                E = Lr(ei(R)), Qn(R, p.element), w++;
            }
            const $ = Ce.get(P);
            $ !== null && F($) && (Fe === null && (Fe = $.getFormat()), Oe === "" && (Oe = $.getStyle()));
          }
          const I = w > b, D = A > S;
          if (I && !D) {
            const R = y[S + 1], P = R === void 0 ? null : de.getElementByKey(R);
            Qr(y, h, A, S, p.withBefore(P));
          } else
            D && !I && Xr(_, w, b, p.element);
        })(o, d, m, u, c, a);
    }
    Cr(o) && (Z += je), f.__lexicalTextContent = Z, Z = l + Z;
  }(n, e, e.getDOMSlot(t)), ra(e, t), i = e, Fe == null || Fe === i.__textFormat || fn || i.setTextFormat(Fe), function(s) {
    Oe === "" || Oe === s.__textStyle || fn || s.setTextStyle(Oe);
  }(e), ce = r;
}
function tr(n, e) {
  const t = [];
  let r = n.__first;
  for (; r !== null; ) {
    const i = e.get(r);
    i === void 0 && T(101), t.push(r), r = i.__next;
  }
  return t;
}
function tn(n, e) {
  const t = pt.get(n);
  let r = Ce.get(n);
  t !== void 0 && r !== void 0 || T(61);
  const i = Qo || Zr.has(n) || Vr.has(n), s = Bt(de, n);
  if (t === r && !i) {
    if (k(t)) {
      const o = s.__lexicalTextContent;
      o !== void 0 && (Z += o, Ke += o);
      const a = s.__lexicalDirTextContent;
      a !== void 0 && (ce += a);
    } else {
      const o = t.getTextContent();
      F(t) && !t.isDirectionless() && (ce += o), Ke += o, Z += o;
    }
    return s;
  }
  if (t !== r && i && Zi(dn, cn, pr, r, "updated"), r.updateDOM(t, s, et)) {
    const o = er(n, null);
    return e === null && T(62), e.replaceChild(o, s), Qn(n, null), o;
  }
  if (k(t) && k(r)) {
    const o = r.__indent;
    o !== t.__indent && ea(s, o);
    const a = r.__format;
    a !== t.__format && ta(s, a), i && (fu(t, r, s), oe(r) || r.isInline() || na(t, r, s)), Cr(r) && (Z += je, Ke += je);
  } else {
    const o = r.getTextContent();
    if (z(r)) {
      const a = r.decorate(de, et);
      a !== null && ia(n, a);
    } else
      F(r) && !r.isDirectionless() && (ce += o);
    Z += o, Ke += o;
  }
  if (!fn && oe(r) && r.__cachedText !== Ke) {
    const o = r.getWritable();
    o.__cachedText = Ke, r = o;
  }
  return s;
}
function ia(n, e) {
  let t = de._pendingDecorators;
  const r = de._decorators;
  if (t === null) {
    if (r[n] === e)
      return;
    t = Ja(de);
  }
  t[n] = e;
}
function Lr(n) {
  let e = n.nextSibling;
  return e !== null && e === de._blockCursorElement && (e = e.nextSibling), e;
}
function gu(n, e, t, r, i, s) {
  Z = "", Ke = "", ce = "", Qo = r === Dt, Un = null, de = t, et = t._config, cn = t._nodes, pr = de._listeners.mutation, Vr = i, Zr = s, pt = n._nodeMap, Ce = e._nodeMap, fn = e._readOnly, Yr = new Map(t._keyToDOMMap);
  const o = /* @__PURE__ */ new Map();
  return dn = o, tn("root", null), de = void 0, cn = void 0, Vr = void 0, Zr = void 0, pt = void 0, Ce = void 0, et = void 0, Yr = void 0, dn = void 0, o;
}
function ei(n) {
  const e = Yr.get(n);
  return e === void 0 && T(75, n), e;
}
function sa(n) {
  return {};
}
const oa = {}, hu = {}, Oi = {}, ct = {}, Ot = {}, nr = {}, Lt = {}, mr = {}, ti = {}, gn = {}, hn = {}, Ye = {}, Li = {}, Ii = {}, aa = {}, la = {}, pu = {}, ua = {}, mu = {}, ca = {}, da = {}, rr = {}, fa = {}, ga = {}, ha = {}, pa = {}, ma = {}, _u = {}, yu = {}, Ss = {}, _a = {}, bu = {}, ya = {}, ba = {}, xu = {}, _r = {}, Pi = {}, ni = {}, vu = {}, Su = {}, Fn = {}, On = {}, wu = {}, Cu = {}, Eu = {}, We = Object.freeze({}), ri = 30, ii = [["keydown", function(n, e) {
  if (sn = n.timeStamp, si = n.key, e.isComposing())
    return;
  const { key: t, shiftKey: r, ctrlKey: i, metaKey: s, altKey: o } = n;
  if (!O(e, aa, n) && t != null) {
    if (Ir && Ct(si))
      return be(e, () => {
        Ln(e, Pr);
      }), Ir = !1, void (Pr = "");
    if (function(a, l, u, c) {
      return Zs(a) && !l && !c && !u;
    }(t, i, o, s))
      O(e, la, n);
    else if (function(a, l, u, c, f) {
      return Zs(a) && !c && !u && (l || f);
    }(t, i, r, o, s))
      O(e, pu, n);
    else if (function(a, l, u, c) {
      return Vs(a) && !l && !c && !u;
    }(t, i, o, s))
      O(e, ua, n);
    else if (function(a, l, u, c, f) {
      return Vs(a) && !c && !u && (l || f);
    }(t, i, r, o, s))
      O(e, mu, n);
    else if (/* @__PURE__ */ function(a, l, u) {
      return /* @__PURE__ */ function(c) {
        return c === "ArrowUp";
      }(a) && !l && !u;
    }(t, i, s))
      O(e, ca, n);
    else if (/* @__PURE__ */ function(a, l, u) {
      return /* @__PURE__ */ function(c) {
        return c === "ArrowDown";
      }(a) && !l && !u;
    }(t, i, s))
      O(e, da, n);
    else if (function(a, l) {
      return Ys(a) && l;
    }(t, r))
      on = !0, O(e, rr, n);
    else if (/* @__PURE__ */ function(a) {
      return a === " ";
    }(t))
      O(e, fa, n);
    else if (function(a, l) {
      return Se && l && a.toLowerCase() === "o";
    }(t, i))
      n.preventDefault(), on = !0, O(e, Ot, !0);
    else if (function(a, l) {
      return Ys(a) && !l;
    }(t, r))
      on = !1, O(e, rr, n);
    else if (function(a, l, u, c) {
      return Se ? !l && !u && (Ct(a) || a.toLowerCase() === "h" && c) : c || l || u ? !1 : Ct(a);
    }(t, o, s, i))
      Ct(t) ? O(e, ga, n) : (n.preventDefault(), O(e, ct, !0));
    else if (/* @__PURE__ */ function(a) {
      return a === "Escape";
    }(t))
      O(e, ha, n);
    else if (function(a, l, u, c, f) {
      return Se ? !(u || c || f) && (Qt(a) || a.toLowerCase() === "d" && l) : l || c || f ? !1 : Qt(a);
    }(t, i, r, o, s))
      Qt(t) ? O(e, pa, n) : (n.preventDefault(), O(e, ct, !1));
    else if (function(a, l, u) {
      return Ct(a) && (Se ? l : u);
    }(t, o, i))
      n.preventDefault(), O(e, gn, !0);
    else if (function(a, l, u) {
      return Qt(a) && (Se ? l : u);
    }(t, o, i))
      n.preventDefault(), O(e, gn, !1);
    else if (function(a, l) {
      return Se && l && Ct(a);
    }(t, s))
      n.preventDefault(), O(e, hn, !0);
    else if (function(a, l) {
      return Se && l && Qt(a);
    }(t, s))
      n.preventDefault(), O(e, hn, !1);
    else if (function(a, l, u, c) {
      return a.toLowerCase() === "b" && !l && nn(u, c);
    }(t, o, s, i))
      n.preventDefault(), O(e, Ye, "bold");
    else if (function(a, l, u, c) {
      return a.toLowerCase() === "u" && !l && nn(u, c);
    }(t, o, s, i))
      n.preventDefault(), O(e, Ye, "underline");
    else if (function(a, l, u, c) {
      return a.toLowerCase() === "i" && !l && nn(u, c);
    }(t, o, s, i))
      n.preventDefault(), O(e, Ye, "italic");
    else if (/* @__PURE__ */ function(a, l, u, c) {
      return a === "Tab" && !l && !u && !c;
    }(t, o, i, s))
      O(e, ma, n);
    else if (function(a, l, u, c) {
      return a.toLowerCase() === "z" && !l && nn(u, c);
    }(t, r, s, i))
      n.preventDefault(), O(e, Li, void 0);
    else if (function(a, l, u, c) {
      return Se ? a.toLowerCase() === "z" && u && l : a.toLowerCase() === "y" && c || a.toLowerCase() === "z" && c && l;
    }(t, r, s, i))
      n.preventDefault(), O(e, Ii, void 0);
    else {
      const a = e._editorState._selection;
      a === null || N(a) ? !Qe && Xs(t, s, i) && (n.preventDefault(), O(e, ni, n)) : function(l, u, c, f) {
        return u ? !1 : l.toLowerCase() === "c" ? Se ? c : f : !1;
      }(t, r, s, i) ? (n.preventDefault(), O(e, _r, n)) : function(l, u, c, f) {
        return u ? !1 : l.toLowerCase() === "x" ? Se ? c : f : !1;
      }(t, r, s, i) ? (n.preventDefault(), O(e, Pi, n)) : Xs(t, s, i) && (n.preventDefault(), O(e, ni, n));
    }
    /* @__PURE__ */ (function(a, l, u, c) {
      return a || l || u || c;
    })(i, r, o, s) && O(e, Eu, n);
  }
}], ["pointerdown", function(n, e) {
  const t = n.target, r = n.pointerType;
  jt(t) && r !== "touch" && n.button === 0 && be(e, () => {
    js(t) || (ai = !0);
  });
}], ["compositionstart", function(n, e) {
  be(e, () => {
    const t = L();
    if (N(t) && !e.isComposing()) {
      const r = t.anchor, i = t.anchor.getNode();
      te(r.key), (n.timeStamp < sn + ri || r.type === "element" || !t.isCollapsed() || i.getFormat() !== t.format || F(i) && i.getStyle() !== t.style) && O(e, Lt, Zl);
    }
  });
}], ["compositionend", function(n, e) {
  Qe ? Xt = !0 : Rt || !un && !Gn ? be(e, () => {
    Ln(e, n.data);
  }) : (Ir = !0, Pr = n.data);
}], ["input", function(n, e) {
  n.stopPropagation(), be(e, () => {
    if (V(n.target) && js(n.target))
      return;
    const t = L(), r = n.data, i = Ca(n);
    if (r != null && N(t) && Sa(t, i, r, n.timeStamp, !1)) {
      Xt && (Ln(e, r), Xt = !1);
      const s = t.anchor.getNode(), o = ke(xe(e));
      if (o === null)
        return;
      const a = t.isBackward(), l = a ? t.anchor.offset : t.focus.offset, u = a ? t.focus.offset : t.anchor.offset;
      Hn && !t.isCollapsed() && F(s) && o.anchorNode !== null && s.getTextContent().slice(0, l) + r + s.getTextContent().slice(l + u) === Ga(o.anchorNode) || O(e, Lt, r);
      const c = r.length;
      Qe && c > 1 && n.inputType === "insertCompositionText" && !e.isComposing() && (t.anchor.offset -= c), un || Rt || Gn || !e.isComposing() || (sn = 0, te(null));
    } else
      Gi(!1, e, r !== null ? r : void 0), Xt && (Ln(e, r || void 0), Xt = !1);
    (function() {
      se();
      const s = K();
      Zo(s);
    })();
  }, { event: n }), Tt = null;
}], ["click", function(n, e) {
  be(e, () => {
    const t = L(), r = ke(xe(e)), i = qt();
    if (r) {
      if (N(t)) {
        const s = t.anchor, o = s.getNode();
        if (s.type === "element" && s.offset === 0 && t.isCollapsed() && !oe(o) && j().getChildrenSize() === 1 && o.getTopLevelElementOrThrow().isEmpty() && i !== null && t.is(i))
          r.removeAllRanges(), t.dirty = !0;
        else if (n.detail === 3 && !t.isCollapsed() && o !== t.focus.getNode()) {
          const a = function(l, u) {
            let c = l;
            for (; c !== j() && c != null; ) {
              if (u(c))
                return c;
              c = c.getParent();
            }
            return null;
          }(o, (l) => k(l) && !l.isInline());
          k(a) && a.select(0);
        }
      } else if (n.pointerType === "touch") {
        const s = r.anchorNode;
        (V(s) || Ge(s)) && fe(zi(i, r, e, n));
      }
    }
    O(e, Oi, n);
  });
}], ["cut", We], ["copy", We], ["dragstart", We], ["dragover", We], ["dragend", We], ["paste", We], ["focus", We], ["blur", We], ["drop", We]];
Hn && ii.push(["beforeinput", (n, e) => function(t, r) {
  const i = t.inputType, s = Ca(t);
  i === "deleteCompositionText" || Qe && Va(r) || i !== "insertCompositionText" && be(r, () => {
    const o = L();
    if (i === "deleteContentBackward") {
      if (o === null) {
        const m = qt();
        if (!N(m))
          return;
        fe(m.clone());
      }
      if (N(o)) {
        const m = o.anchor.key === o.focus.key;
        if (a = t.timeStamp, si === "MediaLast" && a < sn + ri && r.isComposing() && m) {
          if (te(null), sn = 0, setTimeout(() => {
            be(r, () => {
              te(null);
            });
          }, ri), N(o)) {
            const h = o.anchor.getNode();
            h.markDirty(), F(h) || T(142), wa(o, h);
          }
        } else {
          te(null), t.preventDefault();
          const h = o.anchor.getNode(), _ = h.getTextContent(), y = h.canInsertTextAfter(), v = o.anchor.offset === 0 && o.focus.offset === _.length;
          let g = ps && m && !v && y;
          if (g && o.isCollapsed() && (g = !z(fi(o.anchor, !0))), !g) {
            O(r, ct, !0);
            const p = L();
            ps && N(p) && p.isCollapsed() && (at = p, setTimeout(() => at = null));
          }
        }
        return;
      }
    }
    var a;
    if (!N(o))
      return;
    const l = t.data;
    Tt !== null && Gi(!1, r, Tt), o.dirty && Tt === null || !o.isCollapsed() || oe(o.anchor.getNode()) || s === null || o.applyDOMRange(s), Tt = null;
    const u = o.anchor, c = o.focus, f = u.getNode(), d = c.getNode();
    if (i !== "insertText" && i !== "insertTranspose")
      switch (t.preventDefault(), i) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          O(r, Lt, t);
          break;
        case "insertFromComposition":
          te(null), O(r, Lt, t);
          break;
        case "insertLineBreak":
          te(null), O(r, Ot, !1);
          break;
        case "insertParagraph":
          te(null), on && !Rt ? (on = !1, O(r, Ot, !1)) : O(r, nr, void 0);
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          O(r, mr, t);
          break;
        case "deleteByComposition":
          (function(m, h) {
            return m !== h || k(m) || k(h) || !m.isToken() || !h.isToken();
          })(f, d) && O(r, ti, t);
          break;
        case "deleteByDrag":
        case "deleteByCut":
          O(r, ti, t);
          break;
        case "deleteContent":
          O(r, ct, !1);
          break;
        case "deleteWordBackward":
          O(r, gn, !0);
          break;
        case "deleteWordForward":
          O(r, gn, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          O(r, hn, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          O(r, hn, !1);
          break;
        case "formatStrikeThrough":
          O(r, Ye, "strikethrough");
          break;
        case "formatBold":
          O(r, Ye, "bold");
          break;
        case "formatItalic":
          O(r, Ye, "italic");
          break;
        case "formatUnderline":
          O(r, Ye, "underline");
          break;
        case "historyUndo":
          O(r, Li, void 0);
          break;
        case "historyRedo":
          O(r, Ii, void 0);
      }
    else {
      if (l === `
`)
        t.preventDefault(), O(r, Ot, !1);
      else if (l === je)
        t.preventDefault(), O(r, nr, void 0);
      else if (l == null && t.dataTransfer) {
        const m = t.dataTransfer.getData("text/plain");
        t.preventDefault(), o.insertRawText(m);
      } else
        l != null && Sa(o, s, l, t.timeStamp, !0) ? (t.preventDefault(), O(r, Lt, l)) : Tt = l;
      xa = t.timeStamp;
    }
  });
}(n, e)]);
let sn = 0, si = null, xa = 0, Tt = null;
const ir = /* @__PURE__ */ new WeakMap();
let oi = !1, ai = !1, on = !1, Xt = !1, Ir = !1, Pr = "", at = null, va = [0, "", 0, "root", 0];
function Sa(n, e, t, r, i) {
  const s = n.anchor, o = n.focus, a = s.getNode(), l = K(), u = ke(xe(l)), c = u !== null ? u.anchorNode : null, f = s.key, d = l.getElementByKey(f), m = t.length;
  return f !== o.key || !F(a) || (!i && (!Hn || xa < r + 50) || a.isDirty() && m < 2 || ja(t)) && s.offset !== o.offset && !a.isComposing() || Nt(a) || a.isDirty() && m > 1 || (i || !Hn) && d !== null && !a.isComposing() && c !== Mt(d) || u !== null && e !== null && (!e.collapsed || e.startContainer !== u.anchorNode || e.startOffset !== u.anchorOffset) || a.getFormat() !== n.format || a.getStyle() !== n.style || function(h, _) {
    if (_.isSegmented())
      return !0;
    if (!h.isCollapsed())
      return !1;
    const y = h.anchor.offset, v = _.getParentOrThrow(), g = _.isToken();
    return y === 0 ? !_.canInsertTextBefore() || !v.canInsertTextBefore() && !_.isComposing() || g || function(p) {
      const b = p.getPreviousSibling();
      return (F(b) || k(b) && b.isInline()) && !b.canInsertTextAfter();
    }(_) : y === _.getTextContentSize() && (!_.canInsertTextAfter() || !v.canInsertTextAfter() && !_.isComposing() || g);
  }(n, a);
}
function ws(n, e) {
  return Ge(n) && n.nodeValue !== null && e !== 0 && e !== n.nodeValue.length;
}
function Cs(n, e, t) {
  const { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: o } = n;
  oi && (oi = !1, ws(r, i) && ws(s, o) && !at) || be(e, () => {
    if (!t)
      return void fe(null);
    if (!wn(e, r, s))
      return;
    let a = L();
    if (at && N(a) && a.isCollapsed()) {
      const l = a.anchor, u = at.anchor;
      (l.key === u.key && l.offset === u.offset + 1 || l.offset === 1 && u.getNode().is(l.getNode().getPreviousSibling())) && (a = at.clone(), fe(a));
    }
    if (at = null, N(a)) {
      const l = a.anchor, u = l.getNode();
      if (a.isCollapsed()) {
        n.type === "Range" && n.anchorNode === n.focusNode && (a.dirty = !0);
        const c = xe(e).event, f = c ? c.timeStamp : performance.now(), [d, m, h, _, y] = va, v = j(), g = e.isComposing() === !1 && v.getTextContent() === "";
        if (f < y + 200 && l.offset === h && l.key === _)
          Kn(a, d, m);
        else if (l.type === "text")
          F(u) || T(141), wa(a, u);
        else if (l.type === "element" && !g) {
          k(u) || T(259);
          const p = l.getNode();
          p.isEmpty() ? function(b, S) {
            const x = S.getTextFormat(), C = S.getTextStyle();
            Kn(b, x, C);
          }(a, p) : Kn(a, 0, "");
        }
      } else {
        const c = l.key, f = a.focus.key, d = a.getNodes(), m = d.length, h = a.isBackward(), _ = h ? o : i, y = h ? i : o, v = h ? f : c, g = h ? c : f;
        let p = Vl, b = !1;
        for (let S = 0; S < m; S++) {
          const x = d[S], C = x.getTextContentSize();
          if (F(x) && C !== 0 && !(S === 0 && x.__key === v && _ === C || S === m - 1 && x.__key === g && y === 0) && (b = !0, p &= x.getFormat(), p === 0))
            break;
        }
        a.format = b ? p : 0;
      }
    }
    O(e, oa, void 0);
  });
}
function Kn(n, e, t) {
  n.format === e && n.style === t || (n.format = e, n.style = t, n.dirty = !0);
}
function wa(n, e) {
  Kn(n, e.getFormat(), e.getStyle());
}
function Ca(n) {
  if (!n.getTargetRanges)
    return null;
  const e = n.getTargetRanges();
  return e.length === 0 ? null : e[0];
}
function Ln(n, e) {
  const t = n._compositionKey;
  if (te(null), t !== null && e != null) {
    if (e === "") {
      const r = X(t), i = Mt(n.getElementByKey(t));
      return void (i !== null && i.nodeValue !== null && F(r) && Vi(r, i.nodeValue, null, null, !0));
    }
    if (e[e.length - 1] === `
`) {
      const r = L();
      if (N(r)) {
        const i = r.focus;
        return r.anchor.set(i.key, i.offset, i.type), void O(n, rr, null);
      }
    }
  }
  Gi(!0, n, e);
}
function Ea(n) {
  let e = n.__lexicalEventHandles;
  return e === void 0 && (e = [], n.__lexicalEventHandles = e), e;
}
const It = /* @__PURE__ */ new Map();
function ka(n) {
  const e = Xu(n.target);
  if (e === null)
    return;
  const t = Ua(e.anchorNode);
  if (t === null)
    return;
  ai && (ai = !1, be(t, () => {
    const l = qt(), u = e.anchorNode;
    (V(u) || Ge(u)) && fe(zi(l, e, t, n));
  }));
  const r = Hi(t), i = r[r.length - 1], s = i._key, o = It.get(s), a = o || i;
  a !== t && Cs(e, a, !1), Cs(e, t, !0), t !== i ? It.set(s, t) : o && It.delete(s);
}
function Es(n) {
  n._lexicalHandled = !0;
}
function ks(n) {
  return n._lexicalHandled === !0;
}
const ku = () => {
};
function Tu(n) {
  const e = n.ownerDocument, t = ir.get(e);
  if (t === void 0)
    return void ku();
  const r = t - 1;
  r >= 0 || T(164), ir.set(e, r), r === 0 && e.removeEventListener("selectionchange", ka);
  const i = Sr(n);
  ji(i) ? (function(o) {
    if (o._parentEditor !== null) {
      const a = Hi(o), l = a[a.length - 1]._key;
      It.get(l) === o && It.delete(l);
    } else
      It.delete(o._key);
  }(i), n.__lexicalEditor = null) : i && T(198);
  const s = Ea(n);
  for (let o = 0; o < s.length; o++)
    s[o]();
  n.__lexicalEventHandles = [];
}
function li(n, e, t) {
  se();
  const r = n.__key, i = n.getParent();
  if (i === null)
    return;
  const s = function(a) {
    const l = L();
    if (!N(l) || !k(a))
      return l;
    const { anchor: u, focus: c } = l, f = u.getNode(), d = c.getNode();
    return gi(f, a) && u.set(a.__key, 0, "element"), gi(d, a) && c.set(a.__key, 0, "element"), l;
  }(n);
  let o = !1;
  if (N(s) && e) {
    const a = s.anchor, l = s.focus;
    a.key === r && (or(a, n, i, n.getPreviousSibling(), n.getNextSibling()), o = !0), l.key === r && (or(l, n, i, n.getPreviousSibling(), n.getNextSibling()), o = !0);
  } else
    re(s) && e && n.isSelected() && n.selectPrevious();
  if (N(s) && e && !o) {
    const a = n.getIndexWithinParent();
    dt(n), sr(s, i, a, -1);
  } else
    dt(n);
  t || ve(i) || i.canBeEmpty() || !i.isEmpty() || li(i, e), e && s && oe(i) && i.isEmpty() && i.selectEnd();
}
class yr {
  static getType() {
    T(64, this.name);
  }
  static clone(e) {
    T(65, this.name);
  }
  afterCloneFrom(e) {
    this.__parent = e.__parent, this.__next = e.__next, this.__prev = e.__prev, this.__state = e.__state;
  }
  constructor(e) {
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), ju(this, e);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    T(137, this.constructor.name);
  }
  isAttached() {
    let e = this.__key;
    for (; e !== null; ) {
      if (e === "root")
        return !0;
      const t = X(e);
      if (t === null)
        break;
      e = t.__parent;
    }
    return !1;
  }
  isSelected(e) {
    const t = e || L();
    if (t == null)
      return !1;
    const r = t.getNodes().some((i) => i.__key === this.__key);
    if (F(this))
      return r;
    if (N(t) && t.anchor.type === "element" && t.focus.type === "element") {
      if (t.isCollapsed())
        return !1;
      const i = this.getParent();
      if (z(this) && this.isInline() && i) {
        const s = t.isBackward() ? t.focus : t.anchor;
        if (i.is(s.getNode()) && s.offset === i.getChildrenSize() && this.is(i.getLastChild()))
          return !1;
      }
    }
    return r;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const e = this.getParent();
    if (e === null)
      return -1;
    let t = e.getFirstChild(), r = 0;
    for (; t !== null; ) {
      if (this.is(t))
        return r;
      r++, t = t.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const e = this.getLatest().__parent;
    return e === null ? null : X(e);
  }
  getParentOrThrow() {
    const e = this.getParent();
    return e === null && T(66, this.__key), e;
  }
  getTopLevelElement() {
    let e = this;
    for (; e !== null; ) {
      const t = e.getParent();
      if (ve(t))
        return k(e) || e === this && z(e) || T(194), e;
      e = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const e = this.getTopLevelElement();
    return e === null && T(67, this.__key), e;
  }
  getParents() {
    const e = [];
    let t = this.getParent();
    for (; t !== null; )
      e.push(t), t = t.getParent();
    return e;
  }
  getParentKeys() {
    const e = [];
    let t = this.getParent();
    for (; t !== null; )
      e.push(t.__key), t = t.getParent();
    return e;
  }
  getPreviousSibling() {
    const e = this.getLatest().__prev;
    return e === null ? null : X(e);
  }
  getPreviousSiblings() {
    const e = [], t = this.getParent();
    if (t === null)
      return e;
    let r = t.getFirstChild();
    for (; r !== null && !r.is(this); )
      e.push(r), r = r.getNextSibling();
    return e;
  }
  getNextSibling() {
    const e = this.getLatest().__next;
    return e === null ? null : X(e);
  }
  getNextSiblings() {
    const e = [];
    let t = this.getNextSibling();
    for (; t !== null; )
      e.push(t), t = t.getNextSibling();
    return e;
  }
  getCommonAncestor(e) {
    const t = k(this) ? this : this.getParent(), r = k(e) ? e : e.getParent(), i = t && r ? qn(t, r) : null;
    return i ? i.commonAncestor : null;
  }
  is(e) {
    return e != null && this.__key === e.__key;
  }
  isBefore(e) {
    const t = qn(this, e);
    return t !== null && (t.type === "descendant" || (t.type === "branch" ? el(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && T(279), !1)));
  }
  isParentOf(e) {
    const t = qn(this, e);
    return t !== null && t.type === "ancestor";
  }
  getNodesBetween(e) {
    const t = this.isBefore(e), r = [], i = /* @__PURE__ */ new Set();
    let s = this;
    for (; s !== null; ) {
      const o = s.__key;
      if (i.has(o) || (i.add(o), r.push(s)), s === e)
        break;
      const a = k(s) ? t ? s.getFirstChild() : s.getLastChild() : null;
      if (a !== null) {
        s = a;
        continue;
      }
      const l = t ? s.getNextSibling() : s.getPreviousSibling();
      if (l !== null) {
        s = l;
        continue;
      }
      const u = s.getParentOrThrow();
      if (i.has(u.__key) || r.push(u), u === e)
        break;
      let c = null, f = u;
      do {
        if (f === null && T(68), c = t ? f.getNextSibling() : f.getPreviousSibling(), f = f.getParent(), f === null)
          break;
        c !== null || i.has(f.__key) || r.push(f);
      } while (c === null);
      s = c;
    }
    return t || r.reverse(), r;
  }
  isDirty() {
    const e = K()._dirtyLeaves;
    return e !== null && e.has(this.__key);
  }
  getLatest() {
    const e = X(this.__key);
    return e === null && T(113), e;
  }
  getWritable() {
    se();
    const e = rt(), t = K(), r = e._nodeMap, i = this.__key, s = this.getLatest(), o = t._cloneNotNeeded, a = L();
    if (a !== null && a.setCachedNodes(null), o.has(i))
      return lr(s), s;
    const l = Xi(s);
    return o.add(i), lr(l), r.set(i, l), l;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(e, t) {
    T(70);
  }
  updateDOM(e, t, r) {
    T(71);
  }
  exportDOM(e) {
    return { element: this.createDOM(e._config, e) };
  }
  exportJSON() {
    const e = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...e };
  }
  static importJSON(e) {
    T(18, this.name);
  }
  updateFromJSON(e) {
    return function(t, r) {
      const i = t.getWritable();
      return (r || i.__state) && cu(t).updateFromJSON(r), i;
    }(this, e.$);
  }
  static transform() {
    return null;
  }
  remove(e) {
    li(this, !0, e);
  }
  replace(e, t) {
    se();
    let r = L();
    r !== null && (r = r.clone()), Br(this, e);
    const i = this.getLatest(), s = this.__key, o = e.__key, a = e.getWritable(), l = this.getParentOrThrow().getWritable(), u = l.__size;
    dt(a);
    const c = i.getPreviousSibling(), f = i.getNextSibling(), d = i.__prev, m = i.__next, h = i.__parent;
    if (li(i, !1, !0), c === null ? l.__first = o : c.getWritable().__next = o, a.__prev = d, f === null ? l.__last = o : f.getWritable().__prev = o, a.__next = m, a.__parent = h, l.__size = u, t && (k(this) && k(a) || T(139), this.getChildren().forEach((_) => {
      a.append(_);
    })), N(r)) {
      fe(r);
      const _ = r.anchor, y = r.focus;
      _.key === s && Fs(_, a), y.key === s && Fs(y, a);
    }
    return Xe() === s && te(o), a;
  }
  insertAfter(e, t = !0) {
    se(), Br(this, e);
    const r = this.getWritable(), i = e.getWritable(), s = i.getParent(), o = L();
    let a = !1, l = !1;
    if (s !== null) {
      const m = e.getIndexWithinParent();
      if (dt(i), N(o)) {
        const h = s.__key, _ = o.anchor, y = o.focus;
        a = _.type === "element" && _.key === h && _.offset === m + 1, l = y.type === "element" && y.key === h && y.offset === m + 1;
      }
    }
    const u = this.getNextSibling(), c = this.getParentOrThrow().getWritable(), f = i.__key, d = r.__next;
    if (u === null ? c.__last = f : u.getWritable().__prev = f, c.__size++, r.__next = f, i.__next = d, i.__prev = r.__key, i.__parent = r.__parent, t && N(o)) {
      const m = this.getIndexWithinParent();
      sr(o, c, m + 1);
      const h = c.__key;
      a && o.anchor.set(h, m + 2, "element"), l && o.focus.set(h, m + 2, "element");
    }
    return e;
  }
  insertBefore(e, t = !0) {
    se(), Br(this, e);
    const r = this.getWritable(), i = e.getWritable(), s = i.__key;
    dt(i);
    const o = this.getPreviousSibling(), a = this.getParentOrThrow().getWritable(), l = r.__prev, u = this.getIndexWithinParent();
    o === null ? a.__first = s : o.getWritable().__next = s, a.__size++, r.__prev = s, i.__prev = l, i.__next = r.__key, i.__parent = r.__parent;
    const c = L();
    return t && N(c) && sr(c, this.getParentOrThrow(), u), e;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return Q();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(e, t) {
    se();
    const r = this.getPreviousSibling(), i = this.getParentOrThrow();
    if (r === null)
      return i.select(0, 0);
    if (k(r))
      return r.select();
    if (!F(r)) {
      const s = r.getIndexWithinParent() + 1;
      return i.select(s, s);
    }
    return r.select(e, t);
  }
  selectNext(e, t) {
    se();
    const r = this.getNextSibling(), i = this.getParentOrThrow();
    if (r === null)
      return i.select();
    if (k(r))
      return r.select(0, 0);
    if (!F(r)) {
      const s = r.getIndexWithinParent();
      return i.select(s, s);
    }
    return r.select(e, t);
  }
  markDirty() {
    this.getWritable();
  }
  reconcileObservedMutation(e, t) {
    this.markDirty();
  }
}
class yn extends yr {
  static getType() {
    return "linebreak";
  }
  static clone(e) {
    return new yn(e.__key);
  }
  constructor(e) {
    super(e);
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return document.createElement("br");
  }
  updateDOM() {
    return !1;
  }
  isInline() {
    return !0;
  }
  static importDOM() {
    return { br: (e) => function(t) {
      const r = t.parentElement;
      if (r !== null && ur(r)) {
        const i = r.firstChild;
        if (i === t || i.nextSibling === t && In(i)) {
          const s = r.lastChild;
          if (s === t || s.previousSibling === t && In(s))
            return !0;
        }
      }
      return !1;
    }(e) || function(t) {
      const r = t.parentElement;
      if (r !== null && ur(r)) {
        const i = r.firstChild;
        if (i === t || i.nextSibling === t && In(i))
          return !1;
        const s = r.lastChild;
        if (s === t || s.previousSibling === t && In(s))
          return !0;
      }
      return !1;
    }(e) ? null : { conversion: Nu, priority: 0 } };
  }
  static importJSON(e) {
    return $e().updateFromJSON(e);
  }
}
function Nu(n) {
  return { node: $e() };
}
function $e() {
  return _e(new yn());
}
function Pt(n) {
  return n instanceof yn;
}
function In(n) {
  return Ge(n) && /^( |\t|\r?\n)+$/.test(n.textContent || "");
}
function $r(n, e) {
  return 16 & e ? "code" : e & wi ? "mark" : 32 & e ? "sub" : 64 & e ? "sup" : null;
}
function Rr(n, e) {
  return 1 & e ? "strong" : 2 & e ? "em" : "span";
}
function Ta(n, e, t, r, i) {
  const s = r.classList;
  let o = $t(i, "base");
  o !== void 0 && s.add(...o), o = $t(i, "underlineStrikethrough");
  let a = !1;
  const l = e & Yn && e & Zn;
  o !== void 0 && (t & Yn && t & Zn ? (a = !0, l || s.add(...o)) : l && s.remove(...o));
  for (const u in ue) {
    const c = ue[u];
    if (o = $t(i, u), o !== void 0)
      if (t & c) {
        if (a && (u === "underline" || u === "strikethrough")) {
          e & c && s.remove(...o);
          continue;
        }
        e & c && (!l || u !== "underline") && u !== "strikethrough" || s.add(...o);
      } else
        e & c && s.remove(...o);
  }
}
function Na(n, e, t) {
  const r = e.firstChild, i = t.isComposing(), s = n + (i ? hr : "");
  if (r == null)
    e.textContent = s;
  else {
    const o = r.nodeValue;
    if (o !== s)
      if (i || Qe) {
        const [a, l, u] = function(c, f) {
          const d = c.length, m = f.length;
          let h = 0, _ = 0;
          for (; h < d && h < m && c[h] === f[h]; )
            h++;
          for (; _ + h < d && _ + h < m && c[d - _ - 1] === f[m - _ - 1]; )
            _++;
          return [h, d - h - _, f.slice(h, m - _)];
        }(o, s);
        l !== 0 && r.deleteData(a, l), r.insertData(a, u);
      } else
        r.nodeValue = s;
  }
}
function Ts(n, e, t, r, i, s) {
  Na(i, n, e);
  const o = s.theme.text;
  o !== void 0 && Ta(0, 0, r, n, o);
}
function Pn(n, e) {
  const t = document.createElement(e);
  return t.appendChild(n), t;
}
class He extends yr {
  static getType() {
    return "text";
  }
  static clone(e) {
    return new He(e.__text, e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__text = e.__text, this.__format = e.__format, this.__style = e.__style, this.__mode = e.__mode, this.__detail = e.__detail;
  }
  constructor(e = "", t) {
    super(t), this.__text = e, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const e = this.getLatest();
    return nu[e.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Xe();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return !!(1 & this.getLatest().__detail);
  }
  isUnmergeable() {
    return !!(2 & this.getLatest().__detail);
  }
  hasFormat(e) {
    const t = ue[e];
    return !!(this.getFormat() & t);
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(e, t) {
    return ar(this.getLatest().__format, e, t);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(e, t) {
    const r = this.__format, i = $r(0, r), s = Rr(0, r), o = i === null ? s : i, a = document.createElement(o);
    let l = a;
    this.hasFormat("code") && a.setAttribute("spellcheck", "false"), i !== null && (l = document.createElement(s), a.appendChild(l)), Ts(l, this, 0, r, this.__text, e);
    const u = this.__style;
    return u !== "" && (a.style.cssText = u), a;
  }
  updateDOM(e, t, r) {
    const i = this.__text, s = e.__format, o = this.__format, a = $r(0, s), l = $r(0, o), u = Rr(0, s), c = Rr(0, o);
    if ((a === null ? u : a) !== (l === null ? c : l))
      return !0;
    if (a === l && u !== c) {
      const _ = t.firstChild;
      _ == null && T(48);
      const y = document.createElement(c);
      return Ts(y, this, 0, o, i, r), t.replaceChild(y, _), !1;
    }
    let f = t;
    l !== null && a !== null && (f = t.firstChild, f == null && T(49)), Na(i, f, this);
    const d = r.theme.text;
    d !== void 0 && s !== o && Ta(0, s, o, f, d);
    const m = e.__style, h = this.__style;
    return m !== h && (t.style.cssText = h), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: Lu, priority: 0 }), b: () => ({ conversion: Fu, priority: 0 }), code: () => ({ conversion: Ue, priority: 0 }), em: () => ({ conversion: Ue, priority: 0 }), i: () => ({ conversion: Ue, priority: 0 }), mark: () => ({ conversion: Ue, priority: 0 }), s: () => ({ conversion: Ue, priority: 0 }), span: () => ({ conversion: Au, priority: 0 }), strong: () => ({ conversion: Ue, priority: 0 }), sub: () => ({ conversion: Ue, priority: 0 }), sup: () => ({ conversion: Ue, priority: 0 }), u: () => ({ conversion: Ue, priority: 0 }) };
  }
  static importJSON(e) {
    return G().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setTextContent(e.text).setFormat(e.format).setDetail(e.detail).setMode(e.mode).setStyle(e.style);
  }
  exportDOM(e) {
    let { element: t } = super.exportDOM(e);
    return V(t) || T(132), t.style.whiteSpace = "pre-wrap", this.hasFormat("bold") && (t = Pn(t, "b")), this.hasFormat("italic") && (t = Pn(t, "i")), this.hasFormat("strikethrough") && (t = Pn(t, "s")), this.hasFormat("underline") && (t = Pn(t, "u")), { element: t };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(e, t) {
  }
  setFormat(e) {
    const t = this.getWritable();
    return t.__format = typeof e == "string" ? ue[e] : e, t;
  }
  setDetail(e) {
    const t = this.getWritable();
    return t.__detail = typeof e == "string" ? Ql[e] : e, t;
  }
  setStyle(e) {
    const t = this.getWritable();
    return t.__style = e, t;
  }
  toggleFormat(e) {
    const t = ar(this.getFormat(), e, null);
    return this.setFormat(t);
  }
  toggleDirectionless() {
    const e = this.getWritable();
    return e.__detail ^= 1, e;
  }
  toggleUnmergeable() {
    const e = this.getWritable();
    return e.__detail ^= 2, e;
  }
  setMode(e) {
    const t = tu[e];
    if (this.__mode === t)
      return this;
    const r = this.getWritable();
    return r.__mode = t, r;
  }
  setTextContent(e) {
    if (this.__text === e)
      return this;
    const t = this.getWritable();
    return t.__text = e, t;
  }
  select(e, t) {
    se();
    let r = e, i = t;
    const s = L(), o = this.getTextContent(), a = this.__key;
    if (typeof o == "string") {
      const l = o.length;
      r === void 0 && (r = l), i === void 0 && (i = l);
    } else
      r = 0, i = 0;
    if (!N(s))
      return Oa(a, r, a, i, "text", "text");
    {
      const l = Xe();
      l !== s.anchor.key && l !== s.focus.key || te(a), s.setTextNodeRange(this, r, this, i);
    }
    return s;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    const e = this.getTextContentSize();
    return this.select(e, e);
  }
  spliceText(e, t, r, i) {
    const s = this.getWritable(), o = s.__text, a = r.length;
    let l = e;
    l < 0 && (l = a + l, l < 0 && (l = 0));
    const u = L();
    if (i && N(u)) {
      const f = e + a;
      u.setTextNodeRange(s, f, s, f);
    }
    const c = o.slice(0, l) + r + o.slice(l + t);
    return s.__text = c, s;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...e) {
    se();
    const t = this.getLatest(), r = t.getTextContent();
    if (r === "")
      return [];
    const i = t.__key, s = Xe(), o = r.length;
    e.sort((E, w) => E - w), e.push(o);
    const a = [], l = e.length;
    for (let E = 0, w = 0; E < o && w <= l; w++) {
      const A = e[w];
      A > E && (a.push(r.slice(E, A)), E = A);
    }
    const u = a.length;
    if (u === 1)
      return [t];
    const c = a[0], f = t.getParent();
    let d;
    const m = t.getFormat(), h = t.getStyle(), _ = t.__detail;
    let y = !1, v = null, g = null;
    const p = L();
    if (N(p)) {
      const [E, w] = p.isBackward() ? [p.focus, p.anchor] : [p.anchor, p.focus];
      E.type === "text" && E.key === i && (v = E), w.type === "text" && w.key === i && (g = w);
    }
    t.isSegmented() ? (d = G(c), d.__format = m, d.__style = h, d.__detail = _, y = !0) : (d = t.getWritable(), d.__text = c);
    const b = [d];
    for (let E = 1; E < u; E++) {
      const w = G(a[E]);
      w.__format = m, w.__style = h, w.__detail = _;
      const A = w.__key;
      s === i && te(A), b.push(w);
    }
    const S = v ? v.offset : null, x = g ? g.offset : null;
    let C = 0;
    for (const E of b) {
      if (!v && !g)
        break;
      const w = C + E.getTextContentSize();
      if (v !== null && S !== null && S <= w && S >= C && (v.set(E.getKey(), S - C, "text"), S < w && (v = null)), g !== null && x !== null && x <= w && x >= C) {
        g.set(E.getKey(), x - C, "text");
        break;
      }
      C = w;
    }
    if (f !== null) {
      (function(A) {
        const I = A.getPreviousSibling(), D = A.getNextSibling();
        I !== null && lr(I), D !== null && lr(D);
      })(this);
      const E = f.getWritable(), w = this.getIndexWithinParent();
      y ? (E.splice(w, 0, b), this.remove()) : E.splice(w, 1, b), N(p) && sr(p, f, w, u - 1);
    }
    return b;
  }
  mergeWithSibling(e) {
    const t = e === this.getPreviousSibling();
    t || e === this.getNextSibling() || T(50);
    const r = this.__key, i = e.__key, s = this.__text, o = s.length;
    Xe() === i && te(r);
    const a = L();
    if (N(a)) {
      const f = a.anchor, d = a.focus;
      f !== null && f.key === i && Ds(f, t, r, e, o), d !== null && d.key === i && Ds(d, t, r, e, o);
    }
    const l = e.__text, u = t ? l + s : s + l;
    this.setTextContent(u);
    const c = this.getWritable();
    return e.remove(), c;
  }
  isTextEntity() {
    return !1;
  }
}
function Au(n) {
  return { forChild: $i(n.style), node: null };
}
function Fu(n) {
  const e = n, t = e.style.fontWeight === "normal";
  return { forChild: $i(e.style, t ? void 0 : "bold"), node: null };
}
const Ns = /* @__PURE__ */ new WeakMap();
function Ou(n) {
  if (!V(n))
    return !1;
  if (n.nodeName === "PRE")
    return !0;
  const e = n.style.whiteSpace;
  return typeof e == "string" && e.startsWith("pre");
}
function Lu(n) {
  const e = n;
  n.parentElement === null && T(129);
  let t = e.textContent || "";
  if (function(r) {
    let i, s = r.parentNode;
    const o = [r];
    for (; s !== null && (i = Ns.get(s)) === void 0 && !Ou(s); )
      o.push(s), s = s.parentNode;
    const a = i === void 0 ? s : i;
    for (let l = 0; l < o.length; l++)
      Ns.set(o[l], a);
    return a;
  }(e) !== null) {
    const r = t.split(/(\r?\n|\t)/), i = [], s = r.length;
    for (let o = 0; o < s; o++) {
      const a = r[o];
      a === `
` || a === `\r
` ? i.push($e()) : a === "	" ? i.push(Jt()) : a !== "" && i.push(G(a));
    }
    return { node: i };
  }
  if (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), t === "")
    return { node: null };
  if (t[0] === " ") {
    let r = e, i = !0;
    for (; r !== null && (r = As(r, !1)) !== null; ) {
      const s = r.textContent || "";
      if (s.length > 0) {
        /[ \t\n]$/.test(s) && (t = t.slice(1)), i = !1;
        break;
      }
    }
    i && (t = t.slice(1));
  }
  if (t[t.length - 1] === " ") {
    let r = e, i = !0;
    for (; r !== null && (r = As(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        i = !1;
        break;
      }
    i && (t = t.slice(0, t.length - 1));
  }
  return t === "" ? { node: null } : { node: G(t) };
}
function As(n, e) {
  let t = n;
  for (; ; ) {
    let r;
    for (; (r = e ? t.nextSibling : t.previousSibling) === null; ) {
      const s = t.parentElement;
      if (s === null)
        return null;
      t = s;
    }
    if (t = r, V(t)) {
      const s = t.style.display;
      if (s === "" && !mi(t) || s !== "" && !s.startsWith("inline"))
        return null;
    }
    let i = t;
    for (; (i = e ? t.firstChild : t.lastChild) !== null; )
      t = i;
    if (Ge(t))
      return t;
    if (t.nodeName === "BR")
      return null;
  }
}
const Iu = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function Ue(n) {
  const e = Iu[n.nodeName.toLowerCase()];
  return e === void 0 ? { node: null } : { forChild: $i(n.style, e), node: null };
}
function G(n = "") {
  return _e(new He(n));
}
function F(n) {
  return n instanceof He;
}
function $i(n, e) {
  const t = n.fontWeight, r = n.textDecoration.split(" "), i = t === "700" || t === "bold", s = r.includes("line-through"), o = n.fontStyle === "italic", a = r.includes("underline"), l = n.verticalAlign;
  return (u) => (F(u) && (i && !u.hasFormat("bold") && u.toggleFormat("bold"), s && !u.hasFormat("strikethrough") && u.toggleFormat("strikethrough"), o && !u.hasFormat("italic") && u.toggleFormat("italic"), a && !u.hasFormat("underline") && u.toggleFormat("underline"), l !== "sub" || u.hasFormat("subscript") || u.toggleFormat("subscript"), l !== "super" || u.hasFormat("superscript") || u.toggleFormat("superscript"), e && !u.hasFormat(e) && u.toggleFormat(e)), u);
}
class bn extends He {
  static getType() {
    return "tab";
  }
  static clone(e) {
    return new bn(e.__key);
  }
  constructor(e) {
    super("	", e), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(e) {
    const t = super.createDOM(e), r = $t(e.theme, "tab");
    return r !== void 0 && t.classList.add(...r), t;
  }
  static importJSON(e) {
    return Jt().updateFromJSON(e);
  }
  setTextContent(e) {
    return e !== "	" && e !== "" && T(126), super.setTextContent(e);
  }
  setDetail(e) {
    return e !== 2 && T(127), this;
  }
  setMode(e) {
    return e !== "normal" && T(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Jt() {
  return _e(new bn());
}
function Ri(n) {
  return n instanceof bn;
}
class Pu {
  constructor(e, t, r) {
    this._selection = null, this.key = e, this.offset = t, this.type = r;
  }
  is(e) {
    return this.key === e.key && this.offset === e.offset && this.type === e.type;
  }
  isBefore(e) {
    return this.key === e.key ? this.offset < e.offset : Qa(Ie(nt(this, "next")), Ie(nt(e, "next"))) < 0;
  }
  getNode() {
    const e = X(this.key);
    return e === null && T(20), e;
  }
  set(e, t, r, i) {
    const s = this._selection, o = this.key;
    i && this.key === e && this.offset === t && this.type === r || (this.key = e, this.offset = t, this.type = r, xn() || (Xe() === o && te(e), s !== null && (s.setCachedNodes(null), s.dirty = !0)));
  }
}
function Re(n, e, t) {
  return new Pu(n, e, t);
}
function Dr(n, e) {
  let t = e.__key, r = n.offset, i = "element";
  if (F(e)) {
    i = "text";
    const s = e.getTextContentSize();
    r > s && (r = s);
  } else if (!k(e)) {
    const s = e.getNextSibling();
    if (F(s))
      t = s.__key, r = 0, i = "text";
    else {
      const o = e.getParent();
      o && (t = o.__key, r = e.getIndexWithinParent() + 1);
    }
  }
  n.set(t, r, i);
}
function Fs(n, e) {
  if (k(e)) {
    const t = e.getLastDescendant();
    k(t) || F(t) ? Dr(n, t) : Dr(n, e);
  } else
    Dr(n, e);
}
class br {
  constructor(e) {
    this._cachedNodes = null, this._nodes = e, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    if (!re(e))
      return !1;
    const t = this._nodes, r = e._nodes;
    return t.size === r.size && Array.from(t).every((i) => r.has(i));
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return !1;
  }
  getStartEndPoints() {
    return null;
  }
  add(e) {
    this.dirty = !0, this._nodes.add(e), this._cachedNodes = null;
  }
  delete(e) {
    this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
  }
  has(e) {
    return this._nodes.has(e);
  }
  clone() {
    return new br(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(e) {
  }
  insertText() {
  }
  insertNodes(e) {
    const t = this.getNodes(), r = t.length, i = t[r - 1];
    let s;
    if (F(i))
      s = i.select();
    else {
      const o = i.getIndexWithinParent() + 1;
      s = i.getParentOrThrow().select(o, o);
    }
    s.insertNodes(e);
    for (let o = 0; o < r; o++)
      t[o].remove();
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null)
      return e;
    const t = this._nodes, r = [];
    for (const i of t) {
      const s = X(i);
      s !== null && r.push(s);
    }
    return xn() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const e = this.getNodes();
    let t = "";
    for (let r = 0; r < e.length; r++)
      t += e[r].getTextContent();
    return t;
  }
  deleteNodes() {
    const e = this.getNodes();
    if ((L() || qt()) === this && e[0]) {
      const t = ne(e[0], "next");
      cc(bt(t, t));
    }
    for (const t of e)
      t.remove();
  }
}
function N(n) {
  return n instanceof xt;
}
class xt {
  constructor(e, t, r, i) {
    this.anchor = e, this.focus = t, e._selection = this, t._selection = this, this._cachedNodes = null, this.format = r, this.style = i, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    return !!N(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null)
      return e;
    const t = function(r) {
      const i = [], [s, o] = r.getTextSlices();
      s && i.push(s.caret.origin);
      const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
      for (const u of r)
        if (Pe(u)) {
          const { origin: c } = u;
          i.length === 0 ? a.add(c) : (l.add(c), i.push(c));
        } else {
          const { origin: c } = u;
          k(c) && l.has(c) || i.push(c);
        }
      if (o && i.push(o.caret.origin), Wt(r.focus) && k(r.focus.origin) && r.focus.getNodeAtCaret() === null)
        for (let u = tt(r.focus.origin, "previous"); Pe(u) && a.has(u.origin) && !u.origin.isEmpty() && u.origin.is(i[i.length - 1]); u = ns(u))
          a.delete(u.origin), i.pop();
      for (; i.length > 1; ) {
        const u = i[i.length - 1];
        if (!k(u) || l.has(u) || u.isEmpty() || a.has(u))
          break;
        i.pop();
      }
      if (i.length === 0 && r.isCollapsed()) {
        const u = Ie(r.anchor), c = Ie(r.anchor.getFlipped()), f = (m) => ft(m) ? m.origin : m.getNodeAtCaret(), d = f(u) || f(c) || (r.anchor.getNodeAtCaret() ? u.origin : c.origin);
        i.push(d);
      }
      return i;
    }(nl(io(this), "next"));
    return xn() || (this._cachedNodes = t), t;
  }
  setTextNodeRange(e, t, r, i) {
    this.anchor.set(e.__key, t, "text"), this.focus.set(r.__key, i, "text");
  }
  getTextContent() {
    const e = this.getNodes();
    if (e.length === 0)
      return "";
    const t = e[0], r = e[e.length - 1], i = this.anchor, s = this.focus, o = i.isBefore(s), [a, l] = ui(this);
    let u = "", c = !0;
    for (let f = 0; f < e.length; f++) {
      const d = e[f];
      if (k(d) && !d.isInline())
        c || (u += `
`), c = !d.isEmpty();
      else if (c = !1, F(d)) {
        let m = d.getTextContent();
        d === t ? d === r ? i.type === "element" && s.type === "element" && s.offset !== i.offset || (m = a < l ? m.slice(a, l) : m.slice(l, a)) : m = o ? m.slice(a) : m.slice(l) : d === r && (m = o ? m.slice(0, l) : m.slice(0, a)), u += m;
      } else
        !z(d) && !Pt(d) || d === r && this.isCollapsed() || (u += d.getTextContent());
    }
    return u;
  }
  applyDOMRange(e) {
    const t = K(), r = t.getEditorState()._selection, i = Fa(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, r);
    if (i === null)
      return;
    const [s, o] = i;
    this.anchor.set(s.key, s.offset, s.type, !0), this.focus.set(o.key, o.offset, o.type, !0), Xn(this);
  }
  clone() {
    const e = this.anchor, t = this.focus;
    return new xt(Re(e.key, e.offset, e.type), Re(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(e) {
    this.format = ar(this.format, e, null), this.dirty = !0;
  }
  setStyle(e) {
    this.style = e, this.dirty = !0;
  }
  hasFormat(e) {
    const t = ue[e];
    return !!(this.format & t);
  }
  insertRawText(e) {
    const t = e.split(/(\r?\n|\t)/), r = [], i = t.length;
    for (let s = 0; s < i; s++) {
      const o = t[s];
      o === `
` || o === `\r
` ? r.push($e()) : o === "	" ? r.push(Jt()) : r.push(G(o));
    }
    this.insertNodes(r);
  }
  insertText(e) {
    const t = this.anchor, r = this.focus, i = this.format, s = this.style;
    let o = t, a = r;
    !this.isCollapsed() && r.isBefore(t) && (o = r, a = t), o.type === "element" && function(y, v, g, p) {
      const b = y.getNode(), S = b.getChildAtIndex(y.offset), x = G(), C = oe(b) ? Q().append(x) : x;
      x.setFormat(g), x.setStyle(p), S === null ? b.append(C) : S.insertBefore(C), y.is(v) && v.set(x.__key, 0, "text"), y.set(x.__key, 0, "text");
    }(o, a, i, s), a.type === "element" && mn(a, Ie(nt(a, "next")));
    const l = o.offset;
    let u = a.offset;
    const c = this.getNodes(), f = c.length;
    let d = c[0];
    F(d) || T(26);
    const m = d.getTextContent().length, h = d.getParentOrThrow();
    let _ = c[f - 1];
    if (f === 1 && a.type === "element" && (u = m, a.set(o.key, u, "text")), this.isCollapsed() && l === m && (d.isSegmented() || d.isToken() || !d.canInsertTextAfter() || !h.canInsertTextAfter() && d.getNextSibling() === null)) {
      let y = d.getNextSibling();
      if (F(y) && y.canInsertTextBefore() && !Nt(y) || (y = G(), y.setFormat(i), y.setStyle(s), h.canInsertTextAfter() ? d.insertAfter(y) : h.insertAfter(y)), y.select(0, 0), d = y, e !== "")
        return void this.insertText(e);
    } else if (this.isCollapsed() && l === 0 && (d.isSegmented() || d.isToken() || !d.canInsertTextBefore() || !h.canInsertTextBefore() && d.getPreviousSibling() === null)) {
      let y = d.getPreviousSibling();
      if (F(y) && !Nt(y) || (y = G(), y.setFormat(i), h.canInsertTextBefore() ? d.insertBefore(y) : h.insertBefore(y)), y.select(), d = y, e !== "")
        return void this.insertText(e);
    } else if (d.isSegmented() && l !== m) {
      const y = G(d.getTextContent());
      y.setFormat(i), d.replace(y), d = y;
    } else if (!this.isCollapsed() && e !== "") {
      const y = _.getParent();
      if (!h.canInsertTextBefore() || !h.canInsertTextAfter() || k(y) && (!y.canInsertTextBefore() || !y.canInsertTextAfter()))
        return this.insertText(""), Aa(this.anchor, this.focus, null), void this.insertText(e);
    }
    if (f === 1) {
      if (d.isToken()) {
        const p = G(e);
        return p.select(), void d.replace(p);
      }
      const y = d.getFormat(), v = d.getStyle();
      if (l !== u || y === i && v === s) {
        if (Ri(d)) {
          const p = G(e);
          return p.setFormat(i), p.setStyle(s), p.select(), void d.replace(p);
        }
      } else {
        if (d.getTextContent() !== "") {
          const p = G(e);
          if (p.setFormat(i), p.setStyle(s), p.select(), l === 0)
            d.insertBefore(p, !1);
          else {
            const [b] = d.splitText(l);
            b.insertAfter(p, !1);
          }
          return void (p.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length));
        }
        d.setFormat(i), d.setStyle(s);
      }
      const g = u - l;
      d = d.spliceText(l, g, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (d.isComposing() ? this.anchor.offset -= e.length : (this.format = y, this.style = v));
    } else {
      const y = /* @__PURE__ */ new Set([...d.getParentKeys(), ..._.getParentKeys()]), v = k(d) ? d : d.getParentOrThrow();
      let g = k(_) ? _ : _.getParentOrThrow(), p = _;
      if (!v.is(g) && g.isInline())
        do
          p = g, g = g.getParentOrThrow();
        while (g.isInline());
      if (a.type === "text" && (u !== 0 || _.getTextContent() === "") || a.type === "element" && _.getIndexWithinParent() < u)
        if (F(_) && !_.isToken() && u !== _.getTextContentSize()) {
          if (_.isSegmented()) {
            const E = G(_.getTextContent());
            _.replace(E), _ = E;
          }
          oe(a.getNode()) || a.type !== "text" || (_ = _.spliceText(0, u, "")), y.add(_.__key);
        } else {
          const E = _.getParentOrThrow();
          E.canBeEmpty() || E.getChildrenSize() !== 1 ? _.remove() : E.remove();
        }
      else
        y.add(_.__key);
      const b = g.getChildren(), S = new Set(c), x = v.is(g), C = v.isInline() && d.getNextSibling() === null ? v : d;
      for (let E = b.length - 1; E >= 0; E--) {
        const w = b[E];
        if (w.is(d) || k(w) && w.isParentOf(d))
          break;
        w.isAttached() && (!S.has(w) || w.is(p) ? x || C.insertAfter(w, !1) : w.remove());
      }
      if (!x) {
        let E = g, w = null;
        for (; E !== null; ) {
          const A = E.getChildren(), I = A.length;
          (I === 0 || A[I - 1].is(w)) && (y.delete(E.__key), w = E), E = E.getParent();
        }
      }
      if (d.isToken())
        if (l === m)
          d.select();
        else {
          const E = G(e);
          E.select(), d.replace(E);
        }
      else
        d = d.spliceText(l, m - l, e, !0), d.getTextContent() === "" ? d.remove() : d.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
      for (let E = 1; E < f; E++) {
        const w = c[E], A = w.__key;
        y.has(A) || w.remove();
      }
    }
  }
  removeText() {
    const e = L() === this;
    jn(this, dc(io(this))), e && L() !== this && fe(this);
  }
  formatText(e, t = null) {
    if (this.isCollapsed())
      return this.toggleFormat(e), void te(null);
    const r = this.getNodes(), i = [];
    for (const b of r)
      F(b) && i.push(b);
    const s = (b) => {
      r.forEach((S) => {
        if (k(S)) {
          const x = S.getFormatFlags(e, b);
          S.setTextFormat(x);
        }
      });
    }, o = i.length;
    if (o === 0)
      return this.toggleFormat(e), te(null), void s(t);
    const a = this.anchor, l = this.focus, u = this.isBackward(), c = u ? l : a, f = u ? a : l;
    let d = 0, m = i[0], h = c.type === "element" ? 0 : c.offset;
    if (c.type === "text" && h === m.getTextContentSize() && (d = 1, m = i[1], h = 0), m == null)
      return;
    const _ = m.getFormatFlags(e, t);
    s(_);
    const y = o - 1;
    let v = i[y];
    const g = f.type === "text" ? f.offset : v.getTextContentSize();
    if (m.is(v)) {
      if (h === g)
        return;
      if (Nt(m) || h === 0 && g === m.getTextContentSize())
        m.setFormat(_);
      else {
        const b = m.splitText(h, g), S = h === 0 ? b[0] : b[1];
        S.setFormat(_), c.type === "text" && c.set(S.__key, 0, "text"), f.type === "text" && f.set(S.__key, g - h, "text");
      }
      return void (this.format = _);
    }
    h === 0 || Nt(m) || ([, m] = m.splitText(h), h = 0), m.setFormat(_);
    const p = v.getFormatFlags(e, _);
    g > 0 && (g === v.getTextContentSize() || Nt(v) || ([v] = v.splitText(g)), v.setFormat(p));
    for (let b = d + 1; b < y; b++) {
      const S = i[b], x = S.getFormatFlags(e, p);
      S.setFormat(x);
    }
    c.type === "text" && c.set(m.__key, h, "text"), f.type === "text" && f.set(v.__key, g, "text"), this.format = _ | p;
  }
  insertNodes(e) {
    if (e.length === 0)
      return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const h = L();
      return N(h) || T(134), h.insertNodes(e);
    }
    const t = (this.isBackward() ? this.focus : this.anchor).getNode(), r = Ur(t, Ze), i = e[e.length - 1];
    if (k(r) && "__language" in r) {
      if ("__language" in e[0])
        this.insertText(e[0].getTextContent());
      else {
        const h = Mr(this);
        r.splice(h, 0, e), i.selectEnd();
      }
      return;
    }
    if (!e.some((h) => (k(h) || z(h)) && !h.isInline())) {
      k(r) || T(211, t.constructor.name, t.getType());
      const h = Mr(this);
      return r.splice(h, 0, e), void i.selectEnd();
    }
    const s = function(h) {
      const _ = Q();
      let y = null;
      for (let v = 0; v < h.length; v++) {
        const g = h[v], p = Pt(g);
        if (p || z(g) && g.isInline() || k(g) && g.isInline() || F(g) || g.isParentRequired()) {
          if (y === null && (y = g.createParentElementNode(), _.append(y), p))
            continue;
          y !== null && y.append(g);
        } else
          _.append(g), y = null;
      }
      return _;
    }(e), o = s.getLastDescendant(), a = s.getChildren(), l = !k(r) || !r.isEmpty() ? this.insertParagraph() : null, u = a[a.length - 1];
    let c = a[0];
    var f;
    k(f = c) && Ze(f) && !f.isEmpty() && k(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (k(r) || T(211, t.constructor.name, t.getType()), r.append(...c.getChildren()), c = a[1]), c && (r === null && T(212, t.constructor.name, t.getType()), function(h, _, y) {
      const v = _.getParentOrThrow().getLastChild();
      let g = _;
      const p = [_];
      for (; g !== v; )
        g.getNextSibling() || T(140), g = g.getNextSibling(), p.push(g);
      let b = h;
      for (const S of p)
        b = b.insertAfter(S);
    }(r, c));
    const d = Ur(o, Ze);
    l && k(d) && (l.canMergeWhenEmpty() || Ze(u)) && (d.append(...l.getChildren()), l.remove()), k(r) && r.isEmpty() && r.remove(), o.selectEnd();
    const m = k(r) ? r.getLastChild() : null;
    Pt(m) && d !== r && m.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const o = Q();
      return j().splice(this.anchor.offset, 0, [o]), o.select(), o;
    }
    const e = Mr(this), t = Ur(this.anchor.getNode(), Ze);
    k(t) || T(213);
    const r = t.getChildAtIndex(e), i = r ? [r, ...r.getNextSiblings()] : [], s = t.insertNewAfter(this, !1);
    return s ? (s.append(...i), s.selectStart(), s) : null;
  }
  insertLineBreak(e) {
    const t = $e();
    if (this.insertNodes([t]), e) {
      const r = t.getParentOrThrow(), i = t.getIndexWithinParent();
      r.select(i, i);
    }
  }
  extract() {
    const e = this.getNodes(), t = e.length, r = t - 1, i = this.anchor, s = this.focus;
    let o = e[0], a = e[r];
    const [l, u] = ui(this);
    if (t === 0)
      return [];
    if (t === 1) {
      if (F(o) && !this.isCollapsed()) {
        const f = l > u ? u : l, d = l > u ? l : u, m = o.splitText(f, d), h = f === 0 ? m[0] : m[1];
        return h != null ? [h] : [];
      }
      return [o];
    }
    const c = i.isBefore(s);
    if (F(o)) {
      const f = c ? l : u;
      f === o.getTextContentSize() ? e.shift() : f !== 0 && ([, o] = o.splitText(f), e[0] = o);
    }
    if (F(a)) {
      const f = a.getTextContent().length, d = c ? u : l;
      d === 0 ? e.pop() : d !== f && ([a] = a.splitText(d), e[r] = a);
    }
    return e;
  }
  modify(e, t, r) {
    if (Ms(this, e, t, r))
      return;
    const i = e === "move", s = K(), o = ke(xe(s));
    if (!o)
      return;
    const a = s._blockCursorElement, l = s._rootElement, u = this.focus.getNode();
    if (l === null || a === null || !k(u) || u.isInline() || u.canBeEmpty() || hi(a, s, l), this.dirty) {
      let c = Bt(s, this.anchor.key), f = Bt(s, this.focus.key);
      this.anchor.type === "text" && (c = Mt(c)), this.focus.type === "text" && (f = Mt(f)), c && f && La(o, c, this.anchor.offset, f, this.focus.offset);
    }
    if (function(c, f, d, m) {
      c.modify(f, d, m);
    }(o, e, t ? "backward" : "forward", r), o.rangeCount > 0) {
      const c = o.getRangeAt(0), f = this.anchor.getNode(), d = oe(f) ? f : Zu(f);
      if (this.applyDOMRange(c), this.dirty = !0, !i) {
        const m = this.getNodes(), h = [];
        let _ = !1;
        for (let y = 0; y < m.length; y++) {
          const v = m[y];
          gi(v, d) ? h.push(v) : _ = !0;
        }
        if (_ && h.length > 0)
          if (t) {
            const y = h[0];
            k(y) ? y.selectStart() : y.getParentOrThrow().selectStart();
          } else {
            const y = h[h.length - 1];
            k(y) ? y.selectEnd() : y.getParentOrThrow().selectEnd();
          }
        o.anchorNode === c.startContainer && o.anchorOffset === c.startOffset || function(y) {
          const v = y.focus, g = y.anchor, p = g.key, b = g.offset, S = g.type;
          g.set(v.key, v.offset, v.type, !0), v.set(p, b, S, !0);
        }(this);
      }
    }
    r === "lineboundary" && Ms(this, e, t, r, "decorators");
  }
  forwardDeletion(e, t, r) {
    if (!r && (e.type === "element" && k(t) && e.offset === t.getChildrenSize() || e.type === "text" && e.offset === t.getTextContentSize())) {
      const i = t.getParent(), s = t.getNextSibling() || (i === null ? null : i.getNextSibling());
      if (k(s) && s.isShadowRoot())
        return !0;
    }
    return !1;
  }
  deleteCharacter(e) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let i = r.getNode();
      if (this.forwardDeletion(r, i, e))
        return;
      const s = is(nt(r, e ? "previous" : "next"));
      if (s.getTextSlices().every((a) => a === null || a.distance === 0)) {
        let a = { type: "initial" };
        for (const l of s.iterNodeCarets("shadowRoot"))
          if (Pe(l)) {
            if (!l.origin.isInline()) {
              if (l.origin.isShadowRoot()) {
                if (a.type === "merge-block")
                  break;
                if (k(s.anchor.origin) && s.anchor.origin.isEmpty()) {
                  const u = Ie(l);
                  jn(this, bt(u, u)), s.anchor.origin.remove();
                }
                return;
              }
              a.type !== "merge-next-block" && a.type !== "merge-block" || (a = { block: a.block, caret: l, type: "merge-block" });
            }
          } else {
            if (a.type === "merge-block")
              break;
            if (Wt(l)) {
              if (k(l.origin)) {
                if (l.origin.isInline()) {
                  if (!l.origin.isParentOf(s.anchor.origin))
                    break;
                } else
                  a = { block: l.origin, type: "merge-next-block" };
                continue;
              }
              if (z(l.origin)) {
                if (!l.origin.isIsolated())
                  if (a.type === "merge-next-block" && (l.origin.isKeyboardSelectable() || !l.origin.isInline()) && k(s.anchor.origin) && s.anchor.origin.isEmpty()) {
                    s.anchor.origin.remove();
                    const u = Mi();
                    u.add(l.origin.getKey()), fe(u);
                  } else
                    l.origin.remove();
                return;
              }
              break;
            }
          }
        if (a.type === "merge-block") {
          const { caret: l, block: u } = a;
          return jn(this, bt(!l.origin.isEmpty() && u.isEmpty() ? ss(ne(u, l.direction)) : s.anchor, l)), this.removeText();
        }
      }
      const o = this.focus;
      if (this.modify("extend", e, "character"), this.isCollapsed()) {
        if (e && r.offset === 0 && Ls(this, r.getNode()))
          return;
      } else {
        const a = o.type === "text" ? o.getNode() : null;
        if (i = r.type === "text" ? r.getNode() : null, a !== null && a.isSegmented()) {
          const l = o.offset, u = a.getTextContentSize();
          if (a.is(i) || e && l !== u || !e && l !== 0)
            return void Is(a, e, l);
        } else if (i !== null && i.isSegmented()) {
          const l = r.offset, u = i.getTextContentSize();
          if (i.is(a) || e && l !== 0 || !e && l !== u)
            return void Is(i, e, l);
        }
        (function(l, u) {
          const c = l.anchor, f = l.focus, d = c.getNode(), m = f.getNode();
          if (d === m && c.type === "text" && f.type === "text") {
            const h = c.offset, _ = f.offset, y = h < _, v = y ? h : _, g = y ? _ : h, p = g - 1;
            v !== p && function(b) {
              return !(ja(b) || $u(b));
            }(d.getTextContent().slice(v, g)) && (u ? f.set(f.key, p, f.type) : c.set(c.key, p, c.type));
          }
        })(this, e);
      }
    }
    if (this.removeText(), e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && oe(r.getParent()) && r.getPreviousSibling() === null && Ls(this, r);
    }
  }
  deleteLine(e) {
    this.isCollapsed() && this.modify("extend", e, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
  }
  deleteWord(e) {
    if (this.isCollapsed()) {
      const t = this.anchor, r = t.getNode();
      if (this.forwardDeletion(t, r, e))
        return;
      this.modify("extend", e, "word");
    }
    this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function re(n) {
  return n instanceof br;
}
function Os(n) {
  const e = n.offset;
  if (n.type === "text")
    return e;
  const t = n.getNode();
  return e === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function ui(n) {
  const e = n.getStartEndPoints();
  if (e === null)
    return [0, 0];
  const [t, r] = e;
  return t.type === "element" && r.type === "element" && t.key === r.key && t.offset === r.offset ? [0, 0] : [Os(t), Os(r)];
}
function Ls(n, e) {
  for (let t = e; t; t = t.getParent()) {
    if (k(t)) {
      if (t.collapseAtStart(n))
        return !0;
      if (ve(t))
        break;
    }
    if (t.getPreviousSibling())
      break;
  }
  return !1;
}
const $u = (() => {
  try {
    const n = new RegExp("\\p{Emoji}", "u"), e = n.test.bind(n);
    if (e("❤️") && e("#️⃣") && e("👍"))
      return e;
  } catch {
  }
  return () => !1;
})();
function Is(n, e, t) {
  const r = n, i = r.getTextContent().split(/(?=\s)/g), s = i.length;
  let o = 0, a = 0;
  for (let u = 0; u < s; u++) {
    const c = u === s - 1;
    if (a = o, o += i[u].length, e && o === t || o > t || c) {
      i.splice(u, 1), c && (a = void 0);
      break;
    }
  }
  const l = i.join("").trim();
  l === "" ? r.remove() : (r.setTextContent(l), r.select(a, a));
}
function Ps(n, e, t, r) {
  let i, s = e;
  if (V(n)) {
    let o = !1;
    const a = n.childNodes, l = a.length, u = r._blockCursorElement;
    s === l && (o = !0, s = l - 1);
    let c = a[s], f = !1;
    if (c === u)
      c = a[s + 1], f = !0;
    else if (u !== null) {
      const d = u.parentNode;
      n === d && e > Array.prototype.indexOf.call(d.children, u) && s--;
    }
    if (i = At(c), F(i))
      s = Gs(i, o);
    else {
      let d = At(n);
      if (d === null)
        return null;
      if (k(d)) {
        const m = r.getElementByKey(d.getKey());
        m === null && T(214), [d, s] = d.getDOMSlot(m).resolveChildIndex(d, m, n, e), k(d) || T(215), o && s >= d.getChildrenSize() && (s = Math.max(0, d.getChildrenSize() - 1));
        let _ = d.getChildAtIndex(s);
        if (k(_) && function(y, v, g) {
          const p = y.getParent();
          return g === null || p === null || !p.canBeEmpty() || p !== g.getNode();
        }(_, 0, t)) {
          const y = o ? _.getLastDescendant() : _.getFirstDescendant();
          y === null ? d = _ : (_ = y, d = k(_) ? _ : _.getParentOrThrow()), s = 0;
        }
        F(_) ? (i = _, d = null, s = Gs(_, o)) : _ !== d && o && !f && (k(d) || T(216), s = Math.min(d.getChildrenSize(), s + 1));
      } else {
        const m = d.getIndexWithinParent();
        s = e === 0 && z(d) && At(n) === d ? m : m + 1, d = d.getParentOrThrow();
      }
      if (k(d))
        return Re(d.__key, s, "element");
    }
  } else
    i = At(n);
  return F(i) ? Re(i.__key, s, "text") : null;
}
function $s(n, e, t) {
  const r = n.offset, i = n.getNode();
  if (r === 0) {
    const s = i.getPreviousSibling(), o = i.getParent();
    if (e) {
      if ((t || !e) && s === null && k(o) && o.isInline()) {
        const a = o.getPreviousSibling();
        F(a) && n.set(a.__key, a.getTextContent().length, "text");
      }
    } else
      k(s) && !t && s.isInline() ? n.set(s.__key, s.getChildrenSize(), "element") : F(s) && n.set(s.__key, s.getTextContent().length, "text");
  } else if (r === i.getTextContent().length) {
    const s = i.getNextSibling(), o = i.getParent();
    if (e && k(s) && s.isInline())
      n.set(s.__key, 0, "element");
    else if ((t || e) && s === null && k(o) && o.isInline() && !o.canInsertTextAfter()) {
      const a = o.getNextSibling();
      F(a) && n.set(a.__key, 0, "text");
    }
  }
}
function Aa(n, e, t) {
  if (n.type === "text" && e.type === "text") {
    const r = n.isBefore(e), i = n.is(e);
    $s(n, r, i), $s(e, !r, i), i && e.set(n.key, n.offset, n.type);
    const s = K();
    if (s.isComposing() && s._compositionKey !== n.key && N(t)) {
      const o = t.anchor, a = t.focus;
      n.set(o.key, o.offset, o.type, !0), e.set(a.key, a.offset, a.type, !0);
    }
  }
}
function Fa(n, e, t, r, i, s) {
  if (n === null || t === null || !wn(i, n, t))
    return null;
  const o = Ps(n, e, N(s) ? s.anchor : null, i);
  if (o === null)
    return null;
  const a = Ps(t, r, N(s) ? s.focus : null, i);
  if (a === null)
    return null;
  if (o.type === "element" && a.type === "element") {
    const l = At(n), u = At(t);
    if (z(l) && z(u))
      return null;
  }
  return Aa(o, a, s), [o, a];
}
function ci(n) {
  return k(n) && !n.isInline();
}
function Oa(n, e, t, r, i, s) {
  const o = rt(), a = new xt(Re(n, e, i), Re(t, r, s), 0, "");
  return a.dirty = !0, o._selection = a, a;
}
function Di() {
  const n = Re("root", 0, "element"), e = Re("root", 0, "element");
  return new xt(n, e, 0, "");
}
function Mi() {
  return new br(/* @__PURE__ */ new Set());
}
function zi(n, e, t, r) {
  const i = t._window;
  if (i === null)
    return null;
  const s = r || i.event, o = s ? s.type : void 0, a = o === "selectionchange", l = !Gr && (a || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && s && s.detail === 3 || o === "drop" || o === void 0);
  let u, c, f, d;
  if (N(n) && !l)
    return n.clone();
  if (e === null)
    return null;
  if (u = e.anchorNode, c = e.focusNode, f = e.anchorOffset, d = e.focusOffset, a && N(n) && !wn(t, u, c))
    return n.clone();
  const m = Fa(u, f, c, d, t, n);
  if (m === null)
    return null;
  const [h, _] = m;
  return new xt(h, _, N(n) ? n.format : 0, N(n) ? n.style : "");
}
function L() {
  return rt()._selection;
}
function qt() {
  return K()._editorState._selection;
}
function sr(n, e, t, r = 1) {
  const i = n.anchor, s = n.focus, o = i.getNode(), a = s.getNode();
  if (!e.is(o) && !e.is(a))
    return;
  const l = e.__key;
  if (n.isCollapsed()) {
    const u = i.offset;
    if (t <= u && r > 0 || t < u && r < 0) {
      const c = Math.max(0, u + r);
      i.set(l, c, "element"), s.set(l, c, "element"), Rs(n);
    }
  } else {
    const u = n.isBackward(), c = u ? s : i, f = c.getNode(), d = u ? i : s, m = d.getNode();
    if (e.is(f)) {
      const h = c.offset;
      (t <= h && r > 0 || t < h && r < 0) && c.set(l, Math.max(0, h + r), "element");
    }
    if (e.is(m)) {
      const h = d.offset;
      (t <= h && r > 0 || t < h && r < 0) && d.set(l, Math.max(0, h + r), "element");
    }
  }
  Rs(n);
}
function Rs(n) {
  const e = n.anchor, t = e.offset, r = n.focus, i = r.offset, s = e.getNode(), o = r.getNode();
  if (n.isCollapsed()) {
    if (!k(s))
      return;
    const a = s.getChildrenSize(), l = t >= a, u = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(t);
    if (F(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), e.set(u.__key, c, "text"), r.set(u.__key, c, "text");
    }
  } else {
    if (k(s)) {
      const a = s.getChildrenSize(), l = t >= a, u = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(t);
      if (F(u)) {
        let c = 0;
        l && (c = u.getTextContentSize()), e.set(u.__key, c, "text");
      }
    }
    if (k(o)) {
      const a = o.getChildrenSize(), l = i >= a, u = l ? o.getChildAtIndex(a - 1) : o.getChildAtIndex(i);
      if (F(u)) {
        let c = 0;
        l && (c = u.getTextContentSize()), r.set(u.__key, c, "text");
      }
    }
  }
}
function or(n, e, t, r, i) {
  let s = null, o = 0, a = null;
  r !== null ? (s = r.__key, F(r) ? (o = r.getTextContentSize(), a = "text") : k(r) && (o = r.getChildrenSize(), a = "element")) : i !== null && (s = i.__key, F(i) ? a = "text" : k(i) && (a = "element")), s !== null && a !== null ? n.set(s, o, a) : (o = e.getIndexWithinParent(), o === -1 && (o = t.getChildrenSize()), n.set(t.__key, o, "element"));
}
function Ds(n, e, t, r, i) {
  n.type === "text" ? n.set(t, n.offset + (e ? 0 : i), "text") : n.offset > r.getIndexWithinParent() && n.set(n.key, n.offset - 1, "element");
}
function La(n, e, t, r, i) {
  try {
    n.setBaseAndExtent(e, t, r, i);
  } catch {
  }
}
function Ru(n, e, t, r, i, s, o) {
  const a = r.anchorNode, l = r.focusNode, u = r.anchorOffset, c = r.focusOffset, f = document.activeElement;
  if (i.has("collaboration") && f !== s || f !== null && qi(f))
    return;
  if (!N(e))
    return void (n !== null && wn(t, a, l) && r.removeAllRanges());
  const d = e.anchor, m = e.focus, h = d.key, _ = m.key, y = Bt(t, h), v = Bt(t, _), g = d.offset, p = m.offset, b = e.format, S = e.style, x = e.isCollapsed();
  let C = y, E = v, w = !1;
  if (d.type === "text") {
    C = Mt(y);
    const $ = d.getNode();
    w = $.getFormat() !== b || $.getStyle() !== S;
  } else
    N(n) && n.anchor.type === "text" && (w = !0);
  var A, I, D, R, P;
  if (m.type === "text" && (E = Mt(v)), C !== null && E !== null && (x && (n === null || w || N(n) && (n.format !== b || n.style !== S)) && (A = b, I = S, D = g, R = h, P = performance.now(), va = [A, I, D, R, P]), u !== g || c !== p || a !== C || l !== E || r.type === "Range" && x || (f !== null && s.contains(f) || s.focus({ preventScroll: !0 }), d.type === "element"))) {
    if (La(r, C, g, E, p), !i.has("skip-scroll-into-view") && e.isCollapsed() && s !== null && s === document.activeElement) {
      const $ = N(e) && e.anchor.type === "element" ? C.childNodes[g] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if ($ !== null) {
        let J;
        if ($ instanceof Text) {
          const q = document.createRange();
          q.selectNode($), J = q.getBoundingClientRect();
        } else
          J = $.getBoundingClientRect();
        (function(q, W, H) {
          const ye = Za(H), it = Yi(ye);
          if (ye === null || it === null)
            return;
          let { top: ae, bottom: Zt } = W, he = 0, Ae = 0, pe = H;
          for (; pe !== null; ) {
            const Ve = pe === ye.body;
            if (Ve)
              he = 0, Ae = xe(q).innerHeight;
            else {
              const st = pe.getBoundingClientRect();
              he = st.top, Ae = st.bottom;
            }
            let Be = 0;
            if (ae < he ? Be = -(he - ae) : Zt > Ae && (Be = Zt - Ae), Be !== 0)
              if (Ve)
                it.scrollBy(0, Be);
              else {
                const st = pe.scrollTop;
                pe.scrollTop += Be;
                const wt = pe.scrollTop - st;
                ae -= wt, Zt -= wt;
              }
            if (Ve)
              break;
            pe = Cn(pe);
          }
        })(t, J, s);
      }
    }
    oi = !0;
  }
}
function Ia(n) {
  let e = L() || qt();
  e === null && (e = j().selectEnd()), e.insertNodes(n);
}
function Mr(n) {
  let e = n;
  n.isCollapsed() || e.removeText();
  const t = L();
  N(t) && (e = t), N(e) || T(161);
  const r = e.anchor;
  let i = r.getNode(), s = r.offset;
  for (; !Ze(i); ) {
    const o = i;
    if ([i, s] = Du(i, s), o.is(i))
      break;
  }
  return s;
}
function Du(n, e) {
  const t = n.getParent();
  if (!t) {
    const i = Q();
    return j().append(i), i.select(), [j(), 0];
  }
  if (F(n)) {
    const i = n.splitText(e);
    if (i.length === 0)
      return [t, n.getIndexWithinParent()];
    const s = e === 0 ? 0 : 1;
    return [t, i[0].getIndexWithinParent() + s];
  }
  if (!k(n) || e === 0)
    return [t, n.getIndexWithinParent()];
  const r = n.getChildAtIndex(e);
  if (r) {
    const i = new xt(Re(n.__key, e, "element"), Re(n.__key, e, "element"), 0, ""), s = n.insertNewAfter(i);
    s && s.append(r, ...r.getNextSiblings());
  }
  return [t, n.getIndexWithinParent() + 1];
}
function Ms(n, e, t, r, i = "decorators-and-blocks") {
  if (e === "move" && r === "character" && !n.isCollapsed()) {
    const [c, f] = t === n.isBackward() ? [n.focus, n.anchor] : [n.anchor, n.focus];
    return f.set(c.key, c.offset, c.type), !0;
  }
  const s = nt(n.focus, t ? "previous" : "next"), o = r === "lineboundary", a = e === "move";
  let l = s, u = i === "decorators-and-blocks";
  if (!tl(l)) {
    for (const c of l) {
      u = !1;
      const { origin: f } = c;
      if (!z(f) || f.isIsolated() || (l = c, !o || !f.isInline()))
        break;
    }
    if (u)
      for (const c of is(s).iterNodeCarets(e === "extend" ? "shadowRoot" : "root")) {
        if (Pe(c))
          c.origin.isInline() || (l = c);
        else {
          if (k(c.origin))
            continue;
          z(c.origin) && !c.origin.isInline() && (l = c);
        }
        break;
      }
  }
  if (l === s)
    return !1;
  if (a && !o && z(l.origin) && l.origin.isKeyboardSelectable()) {
    const c = Mi();
    return c.add(l.origin.getKey()), fe(c), !0;
  }
  return l = Ie(l), a && mn(n.anchor, l), mn(n.focus, l), u || !o;
}
let ee = null, Y = null, ge = !1, zr = !1, Jn = 0;
const zs = { characterData: !0, childList: !0, subtree: !0 };
function xn() {
  return ge || ee !== null && ee._readOnly;
}
function se() {
  ge && T(13);
}
function Pa() {
  Jn > 99 && T(14);
}
function rt() {
  return ee === null && T(195, $a()), ee;
}
function K() {
  return Y === null && T(196, $a()), Y;
}
function $a() {
  let n = 0;
  const e = /* @__PURE__ */ new Set(), t = vr.version;
  if (typeof window < "u")
    for (const i of document.querySelectorAll("[contenteditable]")) {
      const s = Sr(i);
      if (ji(s))
        n++;
      else if (s) {
        let o = String(s.constructor.version || "<0.17.1");
        o === t && (o += " (separately built, likely a bundler configuration issue)"), e.add(o);
      }
    }
  let r = ` Detected on the page: ${n} compatible editor(s) with version ${t}`;
  return e.size && (r += ` and incompatible editors with versions ${Array.from(e).join(", ")}`), r;
}
function Mu() {
  return Y;
}
function Bs(n, e, t) {
  const r = e.__type, i = function(a, l) {
    const u = a._nodes.get(l);
    return u === void 0 && T(30, l), u;
  }(n, r);
  let s = t.get(r);
  s === void 0 && (s = Array.from(i.transforms), t.set(r, s));
  const o = s.length;
  for (let a = 0; a < o && (s[a](e), e.isAttached()); a++)
    ;
}
function Ws(n, e) {
  return n !== void 0 && n.__key !== e && n.isAttached();
}
function Ra(n, e) {
  if (!e)
    return;
  const t = n._updateTags;
  let r = e;
  Array.isArray(e) || (r = [e]);
  for (const i of r)
    t.add(i);
}
function zu(n) {
  return Bi(n, K()._nodes);
}
function Bi(n, e) {
  const t = n.type, r = e.get(t);
  r === void 0 && T(17, t);
  const i = r.klass;
  n.type !== i.getType() && T(18, i.name);
  const s = i.importJSON(n), o = n.children;
  if (k(s) && Array.isArray(o))
    for (let a = 0; a < o.length; a++) {
      const l = Bi(o[a], e);
      s.append(l);
    }
  return s;
}
function Us(n, e, t) {
  const r = ee, i = ge, s = Y;
  ee = e, ge = !0, Y = n;
  try {
    return t();
  } finally {
    ee = r, ge = i, Y = s;
  }
}
function Je(n, e) {
  const t = n._pendingEditorState, r = n._rootElement, i = n._headless || r === null;
  if (t === null)
    return;
  const s = n._editorState, o = s._selection, a = t._selection, l = n._dirtyType !== ht, u = ee, c = ge, f = Y, d = n._updating, m = n._observer;
  let h = null;
  if (n._pendingEditorState = null, n._editorState = t, !i && l && m !== null) {
    Y = n, ee = t, ge = !1, n._updating = !0;
    try {
      const x = n._dirtyType, C = n._dirtyElements, E = n._dirtyLeaves;
      m.disconnect(), h = gu(s, t, n, x, C, E);
    } catch (x) {
      if (x instanceof Error && n._onError(x), zr)
        throw x;
      return Wa(n, null, r, t), Yo(n), n._dirtyType = Dt, zr = !0, Je(n, s), void (zr = !1);
    } finally {
      m.observe(r, zs), n._updating = d, ee = u, ge = c, Y = f;
    }
  }
  t._readOnly || (t._readOnly = !0);
  const _ = n._dirtyLeaves, y = n._dirtyElements, v = n._normalizedNodes, g = n._updateTags, p = n._deferred;
  l && (n._dirtyType = ht, n._cloneNotNeeded.clear(), n._dirtyLeaves = /* @__PURE__ */ new Set(), n._dirtyElements = /* @__PURE__ */ new Map(), n._normalizedNodes = /* @__PURE__ */ new Set(), n._updateTags = /* @__PURE__ */ new Set()), function(x, C) {
    const E = x._decorators;
    let w = x._pendingDecorators || E;
    const A = C._nodeMap;
    let I;
    for (I in w)
      A.has(I) || (w === E && (w = Ja(x)), delete w[I]);
  }(n, t);
  const b = i ? null : ke(xe(n));
  if (n._editable && b !== null && (l || a === null || a.dirty) && r !== null && !g.has("skip-dom-selection")) {
    Y = n, ee = t;
    try {
      if (m !== null && m.disconnect(), l || a === null || a.dirty) {
        const x = n._blockCursorElement;
        x !== null && hi(x, n, r), Ru(o, a, n, b, g, r);
      }
      (function(x, C, E) {
        let w = x._blockCursorElement;
        if (N(E) && E.isCollapsed() && E.anchor.type === "element" && C.contains(document.activeElement)) {
          const A = E.anchor, I = A.getNode(), D = A.offset;
          let R = !1, P = null;
          if (D === I.getChildrenSize())
            Wr(I.getChildAtIndex(D - 1)) && (R = !0);
          else {
            const $ = I.getChildAtIndex(D);
            if ($ !== null && Wr($)) {
              const J = $.getPreviousSibling();
              (J === null || Wr(J)) && (R = !0, P = x.getElementByKey($.__key));
            }
          }
          if (R) {
            const $ = x.getElementByKey(I.__key);
            return w === null && (x._blockCursorElement = w = function(J) {
              const q = J.theme, W = document.createElement("div");
              W.contentEditable = "false", W.setAttribute("data-lexical-cursor", "true");
              let H = q.blockCursor;
              if (H !== void 0) {
                if (typeof H == "string") {
                  const ye = Vn(H);
                  H = q.blockCursor = ye;
                }
                H !== void 0 && W.classList.add(...H);
              }
              return W;
            }(x._config)), C.style.caretColor = "transparent", void (P === null ? $.appendChild(w) : $.insertBefore(w, P));
          }
        }
        w !== null && hi(w, x, C);
      })(n, r, a);
    } finally {
      m !== null && m.observe(r, zs), Y = f, ee = u;
    }
  }
  h !== null && function(x, C, E, w, A) {
    const I = Array.from(x._listeners.mutation), D = I.length;
    for (let R = 0; R < D; R++) {
      const [P, $] = I[R], J = C.get($);
      J !== void 0 && P(J, { dirtyLeaves: w, prevEditorState: A, updateTags: E });
    }
  }(n, h, g, _, s), N(a) || a === null || o !== null && o.is(a) || n.dispatchCommand(oa, void 0);
  const S = n._pendingDecorators;
  S !== null && (n._decorators = S, n._pendingDecorators = null, an("decorator", n, !0, S)), function(x, C, E) {
    const w = Hs(C), A = Hs(E);
    w !== A && an("textcontent", x, !0, A);
  }(n, e || s, t), an("update", n, !0, { dirtyElements: y, dirtyLeaves: _, editorState: t, mutatedNodes: h, normalizedNodes: v, prevEditorState: e || s, tags: g }), function(x, C) {
    if (x._deferred = [], C.length !== 0) {
      const E = x._updating;
      x._updating = !0;
      try {
        for (let w = 0; w < C.length; w++)
          C[w]();
      } finally {
        x._updating = E;
      }
    }
  }(n, p), function(x) {
    const C = x._updates;
    if (C.length !== 0) {
      const E = C.shift();
      if (E) {
        const [w, A] = E;
        Wi(x, w, A);
      }
    }
  }(n);
}
function an(n, e, t, ...r) {
  const i = e._updating;
  e._updating = t;
  try {
    const s = Array.from(e._listeners[n]);
    for (let o = 0; o < s.length; o++)
      s[o].apply(null, r);
  } finally {
    e._updating = i;
  }
}
function Da(n, e, t) {
  if (n._updating === !1 || Y !== n) {
    let i = !1;
    return n.update(() => {
      i = Da(n, e, t);
    }), i;
  }
  const r = Hi(n);
  for (let i = 4; i >= 0; i--)
    for (let s = 0; s < r.length; s++) {
      const o = r[s]._commands.get(e);
      if (o !== void 0) {
        const a = o[i];
        if (a !== void 0) {
          const l = Array.from(a), u = l.length;
          for (let c = 0; c < u; c++)
            if (l[c](t, n) === !0)
              return !0;
        }
      }
    }
  return !1;
}
function Ks(n, e) {
  const t = n._updates;
  let r = e || !1;
  for (; t.length !== 0; ) {
    const i = t.shift();
    if (i) {
      const [s, o] = i;
      let a;
      if (o !== void 0) {
        if (a = o.onUpdate, o.skipTransforms && (r = !0), o.discrete) {
          const l = n._pendingEditorState;
          l === null && T(191), l._flushSync = !0;
        }
        a && n._deferred.push(a), Ra(n, o.tag);
      }
      s();
    }
  }
  return r;
}
function Wi(n, e, t) {
  const r = n._updateTags;
  let i, s = !1, o = !1;
  t !== void 0 && (i = t.onUpdate, Ra(n, t.tag), s = t.skipTransforms || !1, o = t.discrete || !1), i && n._deferred.push(i);
  const a = n._editorState;
  let l = n._pendingEditorState, u = !1;
  (l === null || l._readOnly) && (l = n._pendingEditorState = Ma(l || a), u = !0), l._flushSync = o;
  const c = ee, f = ge, d = Y, m = n._updating;
  ee = l, ge = !1, n._updating = !0, Y = n;
  const h = n._headless || n.getRootElement() === null;
  try {
    u && (h ? a._selection !== null && (l._selection = a._selection.clone()) : l._selection = function(g, p) {
      const b = g.getEditorState()._selection, S = ke(xe(g));
      return N(b) || b == null ? zi(b, S, g, p) : b.clone();
    }(n, t && t.event || null));
    const y = n._compositionKey;
    e(), s = Ks(n, s), function(g, p) {
      const b = p.getEditorState()._selection, S = g._selection;
      if (N(S)) {
        const x = S.anchor, C = S.focus;
        let E;
        if (x.type === "text" && (E = x.getNode(), E.selectionTransform(b, S)), C.type === "text") {
          const w = C.getNode();
          E !== w && w.selectionTransform(b, S);
        }
      }
    }(l, n), n._dirtyType !== ht && (s ? function(g, p) {
      const b = p._dirtyLeaves, S = g._nodeMap;
      for (const x of b) {
        const C = S.get(x);
        F(C) && C.isAttached() && C.isSimpleText() && !C.isUnmergeable() && bs(C);
      }
    }(l, n) : function(g, p) {
      const b = p._dirtyLeaves, S = p._dirtyElements, x = g._nodeMap, C = Xe(), E = /* @__PURE__ */ new Map();
      let w = b, A = w.size, I = S, D = I.size;
      for (; A > 0 || D > 0; ) {
        if (A > 0) {
          p._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const R of w) {
            const P = x.get(R);
            F(P) && P.isAttached() && P.isSimpleText() && !P.isUnmergeable() && bs(P), P !== void 0 && Ws(P, C) && Bs(p, P, E), b.add(R);
          }
          if (w = p._dirtyLeaves, A = w.size, A > 0) {
            Jn++;
            continue;
          }
        }
        p._dirtyLeaves = /* @__PURE__ */ new Set(), p._dirtyElements = /* @__PURE__ */ new Map(), I.delete("root") && I.set("root", !0);
        for (const R of I) {
          const P = R[0], $ = R[1];
          if (S.set(P, $), !$)
            continue;
          const J = x.get(P);
          J !== void 0 && Ws(J, C) && Bs(p, J, E);
        }
        w = p._dirtyLeaves, A = w.size, I = p._dirtyElements, D = I.size, Jn++;
      }
      p._dirtyLeaves = b, p._dirtyElements = S;
    }(l, n), Ks(n), function(g, p, b, S) {
      const x = g._nodeMap, C = p._nodeMap, E = [];
      for (const [w] of S) {
        const A = C.get(w);
        A !== void 0 && (A.isAttached() || (k(A) && Go(A, w, x, C, E, S), x.has(w) || S.delete(w), E.push(w)));
      }
      for (const w of E)
        C.delete(w);
      for (const w of b) {
        const A = C.get(w);
        A === void 0 || A.isAttached() || (x.has(w) || b.delete(w), C.delete(w));
      }
    }(a, l, n._dirtyLeaves, n._dirtyElements)), y !== n._compositionKey && (l._flushSync = !0);
    const v = l._selection;
    if (N(v)) {
      const g = l._nodeMap, p = v.anchor.key, b = v.focus.key;
      g.get(p) !== void 0 && g.get(b) !== void 0 || T(19);
    } else
      re(v) && v._nodes.size === 0 && (l._selection = null);
  } catch (y) {
    return y instanceof Error && n._onError(y), n._pendingEditorState = a, n._dirtyType = Dt, n._cloneNotNeeded.clear(), n._dirtyLeaves = /* @__PURE__ */ new Set(), n._dirtyElements.clear(), void Je(n);
  } finally {
    ee = c, ge = f, Y = d, n._updating = m, Jn = 0;
  }
  n._dirtyType !== ht || n._deferred.length > 0 || function(y, v) {
    const g = v.getEditorState()._selection, p = y._selection;
    if (p !== null) {
      if (p.dirty || !p.is(g))
        return !0;
    } else if (g !== null)
      return !0;
    return !1;
  }(l, n) ? l._flushSync ? (l._flushSync = !1, Je(n)) : u && Ju(() => {
    Je(n);
  }) : (l._flushSync = !1, u && (r.clear(), n._deferred = [], n._pendingEditorState = null));
}
function be(n, e, t) {
  n._updating ? Y === n ? e() : n._updates.push([e, t]) : Wi(n, e, t);
}
class ln {
  constructor(e, t, r) {
    this.element = e, this.before = t || null, this.after = r || null;
  }
  withBefore(e) {
    return new ln(this.element, e, this.after);
  }
  withAfter(e) {
    return new ln(this.element, this.before, e);
  }
  withElement(e) {
    return this.element === e ? this : new ln(e, this.before, this.after);
  }
  insertChild(e) {
    const t = this.before || this.getManagedLineBreak();
    return t !== null && t.parentElement !== this.element && T(222), this.element.insertBefore(e, t), this;
  }
  removeChild(e) {
    return e.parentElement !== this.element && T(223), this.element.removeChild(e), this;
  }
  replaceChild(e, t) {
    return t.parentElement !== this.element && T(224), this.element.replaceChild(e, t), this;
  }
  getFirstChild() {
    const e = this.after ? this.after.nextSibling : this.element.firstChild;
    return e === this.before || e === this.getManagedLineBreak() ? null : e;
  }
  getManagedLineBreak() {
    return this.element.__lexicalLineBreak || null;
  }
  setManagedLineBreak(e) {
    if (e === null)
      this.removeManagedLineBreak();
    else {
      const t = e === "decorator" && (Rt || un);
      this.insertManagedLineBreak(t);
    }
  }
  removeManagedLineBreak() {
    const e = this.getManagedLineBreak();
    if (e) {
      const t = this.element, r = e.nodeName === "IMG" ? e.nextSibling : null;
      r && t.removeChild(r), t.removeChild(e), t.__lexicalLineBreak = void 0;
    }
  }
  insertManagedLineBreak(e) {
    const t = this.getManagedLineBreak();
    if (t) {
      if (e === (t.nodeName === "IMG"))
        return;
      this.removeManagedLineBreak();
    }
    const r = this.element, i = this.before, s = document.createElement("br");
    if (r.insertBefore(s, i), e) {
      const o = document.createElement("img");
      o.setAttribute("data-lexical-linebreak", "true"), o.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", o.alt = "", r.insertBefore(o, s), r.__lexicalLineBreak = o;
    } else
      r.__lexicalLineBreak = s;
  }
  getFirstChildOffset() {
    let e = 0;
    for (let t = this.after; t !== null; t = t.previousSibling)
      e++;
    return e;
  }
  resolveChildIndex(e, t, r, i) {
    if (r === this.element) {
      const l = this.getFirstChildOffset();
      return [e, Math.min(l + e.getChildrenSize(), Math.max(l, i))];
    }
    const s = Js(t, r);
    s.push(i);
    const o = Js(t, this.element);
    let a = e.getIndexWithinParent();
    for (let l = 0; l < o.length; l++) {
      const u = s[l], c = o[l];
      if (u === void 0 || u < c)
        break;
      if (u > c) {
        a += 1;
        break;
      }
    }
    return [e.getParentOrThrow(), a];
  }
}
function Js(n, e) {
  const t = [];
  let r = e;
  for (; r !== n && r !== null; r = e.parentNode) {
    let i = 0;
    for (let s = r.previousSibling; s !== null; s = s.previousSibling)
      i++;
    t.push(i);
  }
  return r !== n && T(225), t.reverse();
}
class ze extends yr {
  constructor(e) {
    super(e), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__first = e.__first, this.__last = e.__last, this.__size = e.__size, this.__indent = e.__indent, this.__format = e.__format, this.__style = e.__style, this.__dir = e.__dir, this.__textFormat = e.__textFormat, this.__textStyle = e.__textStyle;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const e = this.getFormat();
    return eu[e] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const e = [];
    let t = this.getFirstChild();
    for (; t !== null; )
      e.push(t), t = t.getNextSibling();
    return e;
  }
  getChildrenKeys() {
    const e = [];
    let t = this.getFirstChild();
    for (; t !== null; )
      e.push(t.__key), t = t.getNextSibling();
    return e;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    const e = K()._dirtyElements;
    return e !== null && e.has(this.__key);
  }
  isLastChild() {
    const e = this.getLatest(), t = this.getParentOrThrow().getLastChild();
    return t !== null && t.is(e);
  }
  getAllTextNodes() {
    const e = [];
    let t = this.getFirstChild();
    for (; t !== null; ) {
      if (F(t) && e.push(t), k(t)) {
        const r = t.getAllTextNodes();
        e.push(...r);
      }
      t = t.getNextSibling();
    }
    return e;
  }
  getFirstDescendant() {
    let e = this.getFirstChild();
    for (; k(e); ) {
      const t = e.getFirstChild();
      if (t === null)
        break;
      e = t;
    }
    return e;
  }
  getLastDescendant() {
    let e = this.getLastChild();
    for (; k(e); ) {
      const t = e.getLastChild();
      if (t === null)
        break;
      e = t;
    }
    return e;
  }
  getDescendantByIndex(e) {
    const t = this.getChildren(), r = t.length;
    if (e >= r) {
      const s = t[r - 1];
      return k(s) && s.getLastDescendant() || s || null;
    }
    const i = t[e];
    return k(i) && i.getFirstDescendant() || i || null;
  }
  getFirstChild() {
    const e = this.getLatest().__first;
    return e === null ? null : X(e);
  }
  getFirstChildOrThrow() {
    const e = this.getFirstChild();
    return e === null && T(45, this.__key), e;
  }
  getLastChild() {
    const e = this.getLatest().__last;
    return e === null ? null : X(e);
  }
  getLastChildOrThrow() {
    const e = this.getLastChild();
    return e === null && T(96, this.__key), e;
  }
  getChildAtIndex(e) {
    const t = this.getChildrenSize();
    let r, i;
    if (e < t / 2) {
      for (r = this.getFirstChild(), i = 0; r !== null && i <= e; ) {
        if (i === e)
          return r;
        r = r.getNextSibling(), i++;
      }
      return null;
    }
    for (r = this.getLastChild(), i = t - 1; r !== null && i >= e; ) {
      if (i === e)
        return r;
      r = r.getPreviousSibling(), i--;
    }
    return null;
  }
  getTextContent() {
    let e = "";
    const t = this.getChildren(), r = t.length;
    for (let i = 0; i < r; i++) {
      const s = t[i];
      e += s.getTextContent(), k(s) && i !== r - 1 && !s.isInline() && (e += je);
    }
    return e;
  }
  getTextContentSize() {
    let e = 0;
    const t = this.getChildren(), r = t.length;
    for (let i = 0; i < r; i++) {
      const s = t[i];
      e += s.getTextContentSize(), k(s) && i !== r - 1 && !s.isInline() && (e += je.length);
    }
    return e;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  hasFormat(e) {
    if (e !== "") {
      const t = ms[e];
      return !!(this.getFormat() & t);
    }
    return !1;
  }
  hasTextFormat(e) {
    const t = ue[e];
    return !!(this.getTextFormat() & t);
  }
  getFormatFlags(e, t) {
    return ar(this.getLatest().__textFormat, e, t);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(e, t) {
    se();
    const r = L();
    let i = e, s = t;
    const o = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (e === 0 && t === 0) {
        const l = this.getFirstChild();
        if (F(l) || k(l))
          return l.select(0, 0);
      } else if (!(e !== void 0 && e !== o || t !== void 0 && t !== o)) {
        const l = this.getLastChild();
        if (F(l) || k(l))
          return l.select();
      }
    }
    i === void 0 && (i = o), s === void 0 && (s = o);
    const a = this.__key;
    return N(r) ? (r.anchor.set(a, i, "element"), r.focus.set(a, s, "element"), r.dirty = !0, r) : Oa(a, i, a, s, "element", "element");
  }
  selectStart() {
    const e = this.getFirstDescendant();
    return e ? e.selectStart() : this.select();
  }
  selectEnd() {
    const e = this.getLastDescendant();
    return e ? e.selectEnd() : this.select();
  }
  clear() {
    const e = this.getWritable();
    return this.getChildren().forEach((t) => t.remove()), e;
  }
  append(...e) {
    return this.splice(this.getChildrenSize(), 0, e);
  }
  setDirection(e) {
    const t = this.getWritable();
    return t.__dir = e, t;
  }
  setFormat(e) {
    return this.getWritable().__format = e !== "" ? ms[e] : 0, this;
  }
  setStyle(e) {
    return this.getWritable().__style = e || "", this;
  }
  setTextFormat(e) {
    const t = this.getWritable();
    return t.__textFormat = e, t;
  }
  setTextStyle(e) {
    const t = this.getWritable();
    return t.__textStyle = e, t;
  }
  setIndent(e) {
    return this.getWritable().__indent = e, this;
  }
  splice(e, t, r) {
    const i = r.length, s = this.getChildrenSize(), o = this.getWritable();
    e + t <= s || T(226, String(e), String(t), String(s));
    const a = o.__key, l = [], u = [], c = this.getChildAtIndex(e + t);
    let f = null, d = s - t + i;
    if (e !== 0)
      if (e === s)
        f = this.getLastChild();
      else {
        const h = this.getChildAtIndex(e);
        h !== null && (f = h.getPreviousSibling());
      }
    if (t > 0) {
      let h = f === null ? this.getFirstChild() : f.getNextSibling();
      for (let _ = 0; _ < t; _++) {
        h === null && T(100);
        const y = h.getNextSibling(), v = h.__key;
        dt(h.getWritable()), u.push(v), h = y;
      }
    }
    let m = f;
    for (let h = 0; h < i; h++) {
      const _ = r[h];
      m !== null && _.is(m) && (f = m = m.getPreviousSibling());
      const y = _.getWritable();
      y.__parent === a && d--, dt(y);
      const v = _.__key;
      if (m === null)
        o.__first = v, y.__prev = null;
      else {
        const g = m.getWritable();
        g.__next = v, y.__prev = g.__key;
      }
      _.__key === a && T(76), y.__parent = a, l.push(v), m = _;
    }
    if (e + t === s)
      m !== null && (m.getWritable().__next = null, o.__last = m.__key);
    else if (c !== null) {
      const h = c.getWritable();
      if (m !== null) {
        const _ = m.getWritable();
        h.__prev = m.__key, _.__next = c.__key;
      } else
        h.__prev = null;
    }
    if (o.__size = d, u.length) {
      const h = L();
      if (N(h)) {
        const _ = new Set(u), y = new Set(l), { anchor: v, focus: g } = h;
        qs(v, _, y) && or(v, v.getNode(), this, f, c), qs(g, _, y) && or(g, g.getNode(), this, f, c), d !== 0 || this.canBeEmpty() || ve(this) || this.remove();
      }
    }
    return o;
  }
  getDOMSlot(e) {
    return new ln(e);
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (V(t)) {
      const r = this.getIndent();
      r > 0 && (t.style.paddingInlineStart = 40 * r + "px");
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  exportJSON() {
    const e = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, t = this.getTextFormat(), r = this.getTextStyle();
    return t !== 0 && (e.textFormat = t), r !== "" && (e.textStyle = r), e;
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setFormat(e.format).setIndent(e.indent).setDirection(e.direction).setTextFormat(e.textFormat || 0).setTextStyle(e.textStyle || "");
  }
  insertNewAfter(e, t) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(e) {
    return !1;
  }
  excludeFromCopy(e) {
    return !1;
  }
  canReplaceWith(e) {
    return !0;
  }
  canInsertAfter(e) {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith(e) {
    return !1;
  }
  extractWithChild(e, t, r) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  reconcileObservedMutation(e, t) {
    const r = this.getDOMSlot(e);
    let i = r.getFirstChild();
    for (let s = this.getFirstChild(); s; s = s.getNextSibling()) {
      const o = t.getElementByKey(s.getKey());
      o !== null && (i == null ? (r.insertChild(o), i = o) : i !== o && r.replaceChild(o, i), i = i.nextSibling);
    }
  }
}
function k(n) {
  return n instanceof ze;
}
function qs(n, e, t) {
  let r = n.getNode();
  for (; r; ) {
    const i = r.__key;
    if (e.has(i) && !t.has(i))
      return !0;
    r = r.getParent();
  }
  return !1;
}
class Ui extends yr {
  decorate(e, t) {
    T(47);
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
function z(n) {
  return n instanceof Ui;
}
class vn extends ze {
  static getType() {
    return "root";
  }
  static clone() {
    return new vn();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    T(51);
  }
  getTextContent() {
    const e = this.__cachedText;
    return !xn() && K()._dirtyType !== ht || e === null ? super.getTextContent() : e;
  }
  remove() {
    T(52);
  }
  replace(e) {
    T(53);
  }
  insertBefore(e) {
    T(54);
  }
  insertAfter(e) {
    T(55);
  }
  updateDOM(e, t) {
    return !1;
  }
  splice(e, t, r) {
    for (const i of r)
      k(i) || z(i) || T(282);
    return super.splice(e, t, r);
  }
  static importJSON(e) {
    return j().updateFromJSON(e);
  }
  collapseAtStart() {
    return !0;
  }
}
function oe(n) {
  return n instanceof vn;
}
function Ma(n) {
  return new xr(new Map(n._nodeMap));
}
function Ki() {
  return new xr(/* @__PURE__ */ new Map([["root", new vn()]]));
}
function za(n) {
  const e = n.exportJSON(), t = n.constructor;
  if (e.type !== t.getType() && T(130, t.name), k(n)) {
    const r = e.children;
    Array.isArray(r) || T(59, t.name);
    const i = n.getChildren();
    for (let s = 0; s < i.length; s++) {
      const o = za(i[s]);
      r.push(o);
    }
  }
  return e;
}
class xr {
  constructor(e, t) {
    this._nodeMap = e, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(e, t) {
    return Us(t && t.editor || null, this, e);
  }
  clone(e) {
    const t = new xr(this._nodeMap, e === void 0 ? this._selection : e);
    return t._readOnly = !0, t;
  }
  toJSON() {
    return Us(null, this, () => ({ root: za(j()) }));
  }
}
class Ji extends ze {
  static getType() {
    return "artificial";
  }
  createDOM(e) {
    return document.createElement("div");
  }
}
class Sn extends ze {
  static getType() {
    return "paragraph";
  }
  static clone(e) {
    return new Sn(e.__key);
  }
  createDOM(e) {
    const t = document.createElement("p"), r = $t(e.theme, "paragraph");
    return r !== void 0 && t.classList.add(...r), t;
  }
  updateDOM(e, t, r) {
    return !1;
  }
  static importDOM() {
    return { p: (e) => ({ conversion: Bu, priority: 0 }) };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (V(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
    }
    return { element: t };
  }
  static importJSON(e) {
    return Q().updateFromJSON(e);
  }
  exportJSON() {
    return { ...super.exportJSON(), textFormat: this.getTextFormat(), textStyle: this.getTextStyle() };
  }
  insertNewAfter(e, t) {
    const r = Q();
    r.setTextFormat(e.format), r.setTextStyle(e.style);
    const i = this.getDirection();
    return r.setDirection(i), r.setFormat(this.getFormatType()), r.setStyle(this.getStyle()), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const e = this.getChildren();
    if (e.length === 0 || F(e[0]) && e[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null)
        return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null)
        return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function Bu(n) {
  const e = Q();
  return n.style && (e.setFormat(n.style.textAlign), Qi(n, e)), { node: e };
}
function Q() {
  return _e(new Sn());
}
function Ba(n) {
  return n instanceof Sn;
}
const M = 0, di = 1, Ff = 3, Wu = 4;
function Wa(n, e, t, r) {
  const i = n._keyToDOMMap;
  i.clear(), n._editorState = Ki(), n._pendingEditorState = r, n._compositionKey = null, n._dirtyType = ht, n._cloneNotNeeded.clear(), n._dirtyLeaves = /* @__PURE__ */ new Set(), n._dirtyElements.clear(), n._normalizedNodes = /* @__PURE__ */ new Set(), n._updateTags = /* @__PURE__ */ new Set(), n._updates = [], n._blockCursorElement = null;
  const s = n._observer;
  s !== null && (s.disconnect(), n._observer = null), e !== null && (e.textContent = ""), t !== null && (t.textContent = "", i.set("root", t));
}
function Uu(n) {
  const e = n || {}, t = Mu(), r = e.theme || {}, i = n === void 0 ? t : e.parentEditor || null, s = e.disableEvents || !1, o = Ki(), a = e.namespace || (i !== null ? i._config.namespace : Ha()), l = e.editorState, u = [vn, He, yn, bn, Sn, Ji, ...e.nodes || []], { onError: c, html: f } = e, d = e.editable === void 0 || e.editable;
  let m;
  if (n === void 0 && t !== null)
    m = t._nodes;
  else {
    m = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < u.length; _++) {
      let y = u[_], v = null, g = null;
      if (typeof y != "function") {
        const x = y;
        y = x.replace, v = x.with, g = x.withKlass || null;
      }
      const p = y.getType(), b = y.transform(), S = /* @__PURE__ */ new Set();
      b !== null && S.add(b), m.set(p, { exportDOM: f && f.export ? f.export.get(y) : void 0, klass: y, replace: v, replaceWithKlass: g, transforms: S });
    }
  }
  const h = new vr(o, i, m, { disableEvents: s, namespace: a, theme: r }, c || console.error, function(_, y) {
    const v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set(), p = (b) => {
      Object.keys(b).forEach((S) => {
        let x = v.get(S);
        x === void 0 && (x = [], v.set(S, x)), x.push(b[S]);
      });
    };
    return _.forEach((b) => {
      const S = b.klass.importDOM;
      if (S == null || g.has(S))
        return;
      g.add(S);
      const x = S.call(b.klass);
      x !== null && p(x);
    }), y && p(y), v;
  }(m, f ? f.import : void 0), d, n);
  return l !== void 0 && (h._pendingEditorState = l, h._dirtyType = Dt), h;
}
class vr {
  constructor(e, t, r, i, s, o, a, l) {
    this._createEditorArgs = l, this._parentEditor = t, this._rootElement = null, this._editorState = e, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = i, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = ht, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Ha(), this._onError = s, this._htmlConversions = o, this._editable = a, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(e) {
    const t = this._listeners.update;
    return t.add(e), () => {
      t.delete(e);
    };
  }
  registerEditableListener(e) {
    const t = this._listeners.editable;
    return t.add(e), () => {
      t.delete(e);
    };
  }
  registerDecoratorListener(e) {
    const t = this._listeners.decorator;
    return t.add(e), () => {
      t.delete(e);
    };
  }
  registerTextContentListener(e) {
    const t = this._listeners.textcontent;
    return t.add(e), () => {
      t.delete(e);
    };
  }
  registerRootListener(e) {
    const t = this._listeners.root;
    return e(this._rootElement, null), t.add(e), () => {
      e(null, this._rootElement), t.delete(e);
    };
  }
  registerCommand(e, t, r) {
    r === void 0 && T(35);
    const i = this._commands;
    i.has(e) || i.set(e, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const s = i.get(e);
    s === void 0 && T(36, String(e));
    const o = s[r];
    return o.add(t), () => {
      o.delete(t), s.every((a) => a.size === 0) && i.delete(e);
    };
  }
  registerMutationListener(e, t, r) {
    const i = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass, s = this._listeners.mutation;
    s.set(t, i);
    const o = r && r.skipInitialization;
    return o !== void 0 && o || this.initializeMutationListener(t, i), () => {
      s.delete(t);
    };
  }
  getRegisteredNode(e) {
    const t = this._nodes.get(e.getType());
    return t === void 0 && T(37, e.name), t;
  }
  resolveRegisteredNodeAfterReplacements(e) {
    for (; e.replaceWithKlass; )
      e = this.getRegisteredNode(e.replaceWithKlass);
    return e;
  }
  initializeMutationListener(e, t) {
    const r = this._editorState, i = to(r).get(t.getType());
    if (!i)
      return;
    const s = /* @__PURE__ */ new Map();
    for (const o of i.keys())
      s.set(o, "created");
    s.size > 0 && e(s, { dirtyLeaves: /* @__PURE__ */ new Set(), prevEditorState: r, updateTags: /* @__PURE__ */ new Set(["registerMutationListener"]) });
  }
  registerNodeTransformToKlass(e, t) {
    const r = this.getRegisteredNode(e);
    return r.transforms.add(t), r;
  }
  registerNodeTransform(e, t) {
    const r = this.registerNodeTransformToKlass(e, t), i = [r], s = r.replaceWithKlass;
    if (s != null) {
      const o = this.registerNodeTransformToKlass(s, t);
      i.push(o);
    }
    return function(o, a) {
      const l = to(o.getEditorState()), u = [];
      for (const c of a) {
        const f = l.get(c);
        f && u.push(f);
      }
      u.length !== 0 && o.update(() => {
        for (const c of u)
          for (const f of c.keys()) {
            const d = X(f);
            d && d.markDirty();
          }
      }, o._pendingEditorState === null ? { tag: "history-merge" } : void 0);
    }(this, i.map((o) => o.klass.getType())), () => {
      i.forEach((o) => o.transforms.delete(t));
    };
  }
  hasNode(e) {
    return this._nodes.has(e.getType());
  }
  hasNodes(e) {
    return e.every(this.hasNode.bind(this));
  }
  dispatchCommand(e, t) {
    return O(this, e, t);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(e) {
    const t = this._rootElement;
    if (e !== t) {
      const r = $t(this._config.theme, "root"), i = this._pendingEditorState || this._editorState;
      if (this._rootElement = e, Wa(this, t, e, i), t !== null && (this._config.disableEvents || Tu(t), r != null && t.classList.remove(...r)), e !== null) {
        const s = Yi(e), o = e.style;
        o.userSelect = "text", o.whiteSpace = "pre-wrap", o.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = s, this._dirtyType = Dt, Yo(this), this._updateTags.add("history-merge"), Je(this), this._config.disableEvents || function(a, l) {
          const u = a.ownerDocument, c = ir.get(u);
          (c === void 0 || c < 1) && u.addEventListener("selectionchange", ka), ir.set(u, (c || 0) + 1), a.__lexicalEditor = l;
          const f = Ea(a);
          for (let d = 0; d < ii.length; d++) {
            const [m, h] = ii[d], _ = typeof h == "function" ? (y) => {
              ks(y) || (Es(y), (l.isEditable() || m === "click") && h(y, l));
            } : (y) => {
              if (ks(y))
                return;
              Es(y);
              const v = l.isEditable();
              switch (m) {
                case "cut":
                  return v && O(l, Pi, y);
                case "copy":
                  return O(l, _r, y);
                case "paste":
                  return v && O(l, mr, y);
                case "dragstart":
                  return v && O(l, ya, y);
                case "dragover":
                  return v && O(l, ba, y);
                case "dragend":
                  return v && O(l, xu, y);
                case "focus":
                  return v && O(l, wu, y);
                case "blur":
                  return v && O(l, Cu, y);
                case "drop":
                  return v && O(l, _a, y);
              }
            };
            a.addEventListener(m, _), f.push(() => {
              a.removeEventListener(m, _);
            });
          }
        }(e, this), r != null && e.classList.add(...r);
      } else
        this._window = null, this._updateTags.add("history-merge"), Je(this);
      an("root", this, !1, e, t);
    }
  }
  getElementByKey(e) {
    return this._keyToDOMMap.get(e) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(e, t) {
    e.isEmpty() && T(38);
    let r = e;
    r._readOnly && (r = Ma(e), r._selection = e._selection ? e._selection.clone() : null), Zo(this);
    const i = this._pendingEditorState, s = this._updateTags, o = t !== void 0 ? t.tag : null;
    i === null || i.isEmpty() || (o != null && s.add(o), Je(this)), this._pendingEditorState = r, this._dirtyType = Dt, this._dirtyElements.set("root", !1), this._compositionKey = null, o != null && s.add(o), this._updating || Je(this);
  }
  parseEditorState(e, t) {
    return function(r, i, s) {
      const o = Ki(), a = ee, l = ge, u = Y, c = i._dirtyElements, f = i._dirtyLeaves, d = i._cloneNotNeeded, m = i._dirtyType;
      i._dirtyElements = /* @__PURE__ */ new Map(), i._dirtyLeaves = /* @__PURE__ */ new Set(), i._cloneNotNeeded = /* @__PURE__ */ new Set(), i._dirtyType = 0, ee = o, ge = !1, Y = i;
      try {
        const h = i._nodes;
        Bi(r.root, h), s && s(), o._readOnly = !0;
      } catch (h) {
        h instanceof Error && i._onError(h);
      } finally {
        i._dirtyElements = c, i._dirtyLeaves = f, i._cloneNotNeeded = d, i._dirtyType = m, ee = a, ge = l, Y = u;
      }
      return o;
    }(typeof e == "string" ? JSON.parse(e) : e, this, t);
  }
  read(e) {
    return Je(this), this.getEditorState().read(e, { editor: this });
  }
  update(e, t) {
    (function(r, i, s) {
      r._updating ? r._updates.push([i, s]) : Wi(r, i, s);
    })(this, e, t);
  }
  focus(e, t = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), be(this, () => {
      const i = L(), s = j();
      i !== null ? i.dirty = !0 : s.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? s.selectStart() : s.selectEnd()), Gu("focus"), Vu(() => {
        r.removeAttribute("autocapitalize"), e && e();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const e = this._rootElement;
    e !== null && e.blur();
    const t = ke(this._window);
    t !== null && t.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(e) {
    this._editable !== e && (this._editable = e, an("editable", this, !0, e));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
vr.version = "0.29.0+prod.esm";
let Ku = 1;
const Ju = typeof queueMicrotask == "function" ? queueMicrotask : (n) => {
  Promise.resolve().then(n);
};
function js(n) {
  return z(zt(n));
}
function qi(n) {
  const e = document.activeElement;
  if (!V(e))
    return !1;
  const t = e.nodeName;
  return z(zt(n)) && (t === "INPUT" || t === "TEXTAREA" || e.contentEditable === "true" && Sr(e) == null);
}
function wn(n, e, t) {
  const r = n.getRootElement();
  try {
    return r !== null && r.contains(e) && r.contains(t) && e !== null && !qi(e) && Ua(e) === n;
  } catch {
    return !1;
  }
}
function ji(n) {
  return n instanceof vr;
}
function Ua(n) {
  let e = n;
  for (; e != null; ) {
    const t = Sr(e);
    if (ji(t))
      return t;
    e = Cn(e);
  }
  return null;
}
function Sr(n) {
  return n ? n.__lexicalEditor : null;
}
function Nt(n) {
  return n.isToken() || n.isSegmented();
}
function Ge(n) {
  return jt(n) && n.nodeType === Kl;
}
function qu(n) {
  return jt(n) && n.nodeType === Jl;
}
function Mt(n) {
  let e = n;
  for (; e != null; ) {
    if (Ge(e))
      return e;
    e = e.firstChild;
  }
  return null;
}
function ar(n, e, t) {
  const r = ue[e];
  if (t !== null && (n & r) == (t & r))
    return n;
  let i = n ^ r;
  return e === "subscript" ? i &= ~ue.superscript : e === "superscript" ? i &= ~ue.subscript : e === "lowercase" ? (i &= ~ue.uppercase, i &= ~ue.capitalize) : e === "uppercase" ? (i &= ~ue.lowercase, i &= ~ue.capitalize) : e === "capitalize" && (i &= ~ue.lowercase, i &= ~ue.uppercase), i;
}
function ju(n, e) {
  if (e != null)
    return void (n.__key = e);
  se(), Pa();
  const t = K(), r = rt(), i = "" + Ku++;
  r._nodeMap.set(i, n), k(n) ? t._dirtyElements.set(i, !0) : t._dirtyLeaves.add(i), t._cloneNotNeeded.add(i), t._dirtyType = qo, n.__key = i;
}
function dt(n) {
  const e = n.getParent();
  if (e !== null) {
    const t = n.getWritable(), r = e.getWritable(), i = n.getPreviousSibling(), s = n.getNextSibling();
    if (i === null)
      if (s !== null) {
        const o = s.getWritable();
        r.__first = s.__key, o.__prev = null;
      } else
        r.__first = null;
    else {
      const o = i.getWritable();
      if (s !== null) {
        const a = s.getWritable();
        a.__prev = o.__key, o.__next = a.__key;
      } else
        o.__next = null;
      t.__prev = null;
    }
    if (s === null)
      if (i !== null) {
        const o = i.getWritable();
        r.__last = i.__key, o.__next = null;
      } else
        r.__last = null;
    else {
      const o = s.getWritable();
      if (i !== null) {
        const a = i.getWritable();
        a.__next = o.__key, o.__prev = a.__key;
      } else
        o.__prev = null;
      t.__next = null;
    }
    r.__size--, t.__parent = null;
  }
}
function lr(n) {
  Pa();
  const e = n.getLatest(), t = e.__parent, r = rt(), i = K(), s = r._nodeMap, o = i._dirtyElements;
  t !== null && function(l, u, c) {
    let f = l;
    for (; f !== null; ) {
      if (c.has(f))
        return;
      const d = u.get(f);
      if (d === void 0)
        break;
      c.set(f, !1), f = d.__parent;
    }
  }(t, s, o);
  const a = e.__key;
  i._dirtyType = qo, k(n) ? o.set(a, !0) : i._dirtyLeaves.add(a);
}
function te(n) {
  se();
  const e = K(), t = e._compositionKey;
  if (n !== t) {
    if (e._compositionKey = n, t !== null) {
      const r = X(t);
      r !== null && r.getWritable();
    }
    if (n !== null) {
      const r = X(n);
      r !== null && r.getWritable();
    }
  }
}
function Xe() {
  return xn() ? null : K()._compositionKey;
}
function X(n, e) {
  const t = (e || rt())._nodeMap.get(n);
  return t === void 0 ? null : t;
}
function Ka(n, e) {
  const t = wr(n, K());
  return t !== void 0 ? X(t, e) : null;
}
function wr(n, e) {
  return n[`__lexicalKey_${e._key}`];
}
function zt(n, e) {
  let t = n;
  for (; t != null; ) {
    const r = Ka(t, e);
    if (r !== null)
      return r;
    t = Cn(t);
  }
  return null;
}
function Ja(n) {
  const e = n._decorators, t = Object.assign({}, e);
  return n._pendingDecorators = t, t;
}
function Hs(n) {
  return n.read(() => j().getTextContent());
}
function j() {
  return qa(rt());
}
function qa(n) {
  return n._nodeMap.get("root");
}
function fe(n) {
  se();
  const e = rt();
  n !== null && (n.dirty = !0, n.setCachedNodes(null)), e._selection = n;
}
function At(n) {
  const e = K(), t = function(r, i) {
    let s = r;
    for (; s != null; ) {
      const o = wr(s, i);
      if (o !== void 0)
        return o;
      s = Cn(s);
    }
    return null;
  }(n, e);
  return t === null ? n === e.getRootElement() ? X("root") : null : X(t);
}
function Gs(n, e) {
  return e ? n.getTextContentSize() : 0;
}
function ja(n) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(n);
}
function Hi(n) {
  const e = [];
  let t = n;
  for (; t !== null; )
    e.push(t), t = t._parentEditor;
  return e;
}
function Ha() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Ga(n) {
  return Ge(n) ? n.nodeValue : null;
}
function Gi(n, e, t) {
  const r = ke(xe(e));
  if (r === null)
    return;
  const i = r.anchorNode;
  let { anchorOffset: s, focusOffset: o } = r;
  if (i !== null) {
    let a = Ga(i);
    const l = zt(i);
    if (a !== null && F(l)) {
      if (a === hr && t) {
        const u = t.length;
        a = t, s = u, o = u;
      }
      a !== null && Vi(l, a, s, o, n);
    }
  }
}
function Vi(n, e, t, r, i) {
  let s = n;
  if (s.isAttached() && (i || !s.isDirty())) {
    const o = s.isComposing();
    let a = e;
    (o || i) && e[e.length - 1] === hr && (a = e.slice(0, -1));
    const l = s.getTextContent();
    if (i || a !== l) {
      if (a === "") {
        if (te(null), un || Rt || Gn)
          s.remove();
        else {
          const _ = K();
          setTimeout(() => {
            _.update(() => {
              s.isAttached() && s.remove();
            });
          }, 20);
        }
        return;
      }
      const u = s.getParent(), c = qt(), f = s.getTextContentSize(), d = Xe(), m = s.getKey();
      if (s.isToken() || d !== null && m === d && !o || N(c) && (u !== null && !u.canInsertTextBefore() && c.anchor.offset === 0 || c.anchor.key === n.__key && c.anchor.offset === 0 && !s.canInsertTextBefore() && !o || c.focus.key === n.__key && c.focus.offset === f && !s.canInsertTextAfter() && !o))
        return void s.markDirty();
      const h = L();
      if (!N(h) || t === null || r === null)
        return void s.setTextContent(a);
      if (h.setTextNodeRange(s, t, s, r), s.isSegmented()) {
        const _ = G(s.getTextContent());
        s.replace(_), s = _;
      }
      s.setTextContent(a);
    }
  }
}
function Vs(n) {
  return n === "ArrowLeft";
}
function Zs(n) {
  return n === "ArrowRight";
}
function nn(n, e) {
  return Se ? n : e;
}
function Ys(n) {
  return n === "Enter";
}
function Ct(n) {
  return n === "Backspace";
}
function Qt(n) {
  return n === "Delete";
}
function Xs(n, e, t) {
  return n.toLowerCase() === "a" && nn(e, t);
}
function Hu(n) {
  const e = j();
  if (N(n)) {
    const t = n.anchor, r = n.focus, i = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    return t.set(i.getKey(), 0, "element"), r.set(i.getKey(), i.getChildrenSize(), "element"), Xn(n), n;
  }
  {
    const t = e.select(0, e.getChildrenSize());
    return fe(Xn(t)), t;
  }
}
function $t(n, e) {
  n.__lexicalClassNameCache === void 0 && (n.__lexicalClassNameCache = {});
  const t = n.__lexicalClassNameCache, r = t[e];
  if (r !== void 0)
    return r;
  const i = n[e];
  if (typeof i == "string") {
    const s = Vn(i);
    return t[e] = s, s;
  }
  return i;
}
function Zi(n, e, t, r, i) {
  if (t.size === 0)
    return;
  const s = r.__type, o = r.__key, a = e.get(s);
  a === void 0 && T(33, s);
  const l = a.klass;
  let u = n.get(l);
  u === void 0 && (u = /* @__PURE__ */ new Map(), n.set(l, u));
  const c = u.get(o), f = c === "destroyed" && i === "created";
  (c === void 0 || f) && u.set(o, f ? "updated" : i);
}
function Qs(n, e, t) {
  const r = n.getParent();
  let i = t, s = n;
  return r !== null && (e && t === 0 ? (i = s.getIndexWithinParent(), s = r) : e || t !== s.getChildrenSize() || (i = s.getIndexWithinParent() + 1, s = r)), s.getChildAtIndex(e ? i - 1 : i);
}
function fi(n, e) {
  const t = n.offset;
  if (n.type === "element")
    return Qs(n.getNode(), e, t);
  {
    const r = n.getNode();
    if (e && t === 0 || !e && t === r.getTextContentSize()) {
      const i = e ? r.getPreviousSibling() : r.getNextSibling();
      return i === null ? Qs(r.getParentOrThrow(), e, r.getIndexWithinParent() + (e ? 0 : 1)) : i;
    }
  }
  return null;
}
function Va(n) {
  const e = xe(n).event, t = e && e.inputType;
  return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function O(n, e, t) {
  return Da(n, e, t);
}
function Cr(n) {
  return !oe(n) && !n.isLastChild() && !n.isInline();
}
function Bt(n, e) {
  const t = n._keyToDOMMap.get(e);
  return t === void 0 && T(75, e), t;
}
function Cn(n) {
  const e = n.assignedSlot || n.parentElement;
  return pi(e) ? e.host : e;
}
function Za(n) {
  return qu(n) ? n : V(n) ? n.ownerDocument : null;
}
function Gu(n) {
  se(), K()._updateTags.add(n);
}
function Vu(n) {
  se(), K()._deferred.push(n);
}
function gi(n, e) {
  let t = n.getParent();
  for (; t !== null; ) {
    if (t.is(e))
      return !0;
    t = t.getParent();
  }
  return !1;
}
function Yi(n) {
  const e = Za(n);
  return e ? e.defaultView : null;
}
function xe(n) {
  const e = n._window;
  return e === null && T(78), e;
}
function Zu(n) {
  let e = n.getParentOrThrow();
  for (; e !== null; ) {
    if (ve(e))
      return e;
    e = e.getParentOrThrow();
  }
  return e;
}
function ve(n) {
  return oe(n) || k(n) && n.isShadowRoot();
}
function _e(n) {
  const e = K(), t = n.constructor.getType(), r = e._nodes.get(t);
  r === void 0 && T(200, n.constructor.name, t);
  const { replace: i, replaceWithKlass: s } = r;
  if (i !== null) {
    const o = i(n), a = o.constructor;
    return s !== null ? o instanceof s || T(201, s.name, s.getType(), a.name, a.getType(), n.constructor.name, t) : o instanceof n.constructor && a !== n.constructor || T(202, a.name, a.getType(), n.constructor.name, t), o.__key === n.__key && T(203, n.constructor.name, t, a.name, a.getType()), o;
  }
  return n;
}
function Br(n, e) {
  !oe(n.getParent()) || k(e) || z(e) || T(99);
}
function Yu(n) {
  const e = X(n);
  return e === null && T(63, n), e;
}
function Wr(n) {
  return (z(n) || k(n) && !n.canBeEmpty()) && !n.isInline();
}
function hi(n, e, t) {
  t.style.removeProperty("caret-color"), e._blockCursorElement = null;
  const r = n.parentElement;
  r !== null && r.removeChild(n);
}
function ke(n) {
  return Ne ? (n || window).getSelection() : null;
}
function Xu(n) {
  const e = Yi(n);
  return e ? e.getSelection() : null;
}
function Ya(n) {
  return V(n) && n.tagName === "A";
}
function V(n) {
  return jt(n) && n.nodeType === Ul;
}
function jt(n) {
  return typeof n == "object" && n !== null && "nodeType" in n && typeof n.nodeType == "number";
}
function pi(n) {
  return jt(n) && n.nodeType === ql;
}
function mi(n) {
  const e = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return n.nodeName.match(e) !== null;
}
function ur(n) {
  const e = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return n.nodeName.match(e) !== null;
}
function Ze(n) {
  if (z(n) && !n.isInline())
    return !0;
  if (!k(n) || ve(n))
    return !1;
  const e = n.getFirstChild(), t = e === null || Pt(e) || F(e) || e.isInline();
  return !n.isInline() && n.canBeEmpty() !== !1 && t;
}
function Ur(n, e) {
  let t = n;
  for (; t !== null && t.getParent() !== null && !e(t); )
    t = t.getParentOrThrow();
  return e(t) ? t : null;
}
function Qu() {
  return K();
}
const eo = /* @__PURE__ */ new WeakMap(), ec = /* @__PURE__ */ new Map();
function to(n) {
  if (!n._readOnly && n.isEmpty())
    return ec;
  n._readOnly || T(192);
  let e = eo.get(n);
  return e || (e = function(t) {
    const r = /* @__PURE__ */ new Map();
    for (const [i, s] of t._nodeMap) {
      const o = s.__type;
      let a = r.get(o);
      a || (a = /* @__PURE__ */ new Map(), r.set(o, a)), a.set(i, s);
    }
    return r;
  }(n), eo.set(n, e)), e;
}
function Xi(n) {
  const e = n.constructor.clone(n);
  return e.afterCloneFrom(n), e;
}
function Qi(n, e) {
  const t = (parseInt(n.style.paddingInlineStart, 10) || 0) / 40;
  e.setIndent(t);
}
function tc(n) {
  return n.__lexicalUnmanaged === !0;
}
const nc = { next: "previous", previous: "next" };
class es {
  constructor(e) {
    this.origin = e;
  }
  [Symbol.iterator]() {
    return Xa({ hasNext: Wt, initial: this.getAdjacentCaret(), map: (e) => e, step: (e) => e.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return ne(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return ne(this.origin, this.direction);
  }
  remove() {
    const e = this.getNodeAtCaret();
    return e && e.remove(), this;
  }
  replaceOrInsert(e, t) {
    const r = this.getNodeAtCaret();
    return e.is(this.origin) || e.is(r) || (r === null ? this.insert(e) : r.replace(e, t)), this;
  }
  splice(e, t, r = "next") {
    const i = r === this.direction ? t : Array.from(t).reverse();
    let s = this;
    const o = this.getParentAtCaret(), a = /* @__PURE__ */ new Map();
    for (let l = s.getAdjacentCaret(); l !== null && a.size < e; l = l.getAdjacentCaret()) {
      const u = l.origin.getWritable();
      a.set(u.getKey(), u);
    }
    for (const l of i) {
      if (a.size > 0) {
        const u = s.getNodeAtCaret();
        if (u) {
          if (a.delete(u.getKey()), a.delete(l.getKey()), !(u.is(l) || s.origin.is(l))) {
            const c = l.getParent();
            c && c.is(o) && l.remove(), u.replace(l);
          }
        } else
          u === null && T(263, Array.from(a).join(" "));
      } else
        s.insert(l);
      s = ne(l, this.direction);
    }
    for (const l of a.values())
      l.remove();
    return this;
  }
}
class pn extends es {
  constructor() {
    super(...arguments);
    le(this, "type", "child");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : tt(t, this.direction);
  }
  getParentCaret(t = "root") {
    return ne(ts(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Ht(this.direction);
    return ne(this.getNodeAtCaret(), t) || tt(this.origin, t);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(t) {
    return t instanceof pn && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSamePointCaret(t) {
    return this.isSameNodeCaret(t);
  }
}
const rc = { root: oe, shadowRoot: ve };
function Ht(n) {
  return nc[n];
}
function ts(n, e = "root") {
  return rc[e](n) ? null : n;
}
class mt extends es {
  constructor() {
    super(...arguments);
    le(this, "type", "sibling");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : ne(t, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return k(this.origin) ? tt(this.origin, this.direction) : null;
  }
  getParentCaret(t = "root") {
    return ne(ts(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Ht(this.direction);
    return ne(this.getNodeAtCaret(), t) || tt(this.origin.getParentOrThrow(), t);
  }
  isSamePointCaret(t) {
    return t instanceof mt && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSameNodeCaret(t) {
    return (t instanceof mt || t instanceof _t) && this.direction === t.direction && this.origin.is(t.origin);
  }
}
class _t extends es {
  constructor(t, r) {
    super(t);
    le(this, "type", "text");
    this.offset = r;
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : yt(t, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(t = "root") {
    return ne(ts(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    return yt(this.origin, Ht(this.direction), this.offset);
  }
  isSamePointCaret(t) {
    return t instanceof _t && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
  }
  isSameNodeCaret(t) {
    return (t instanceof mt || t instanceof _t) && this.direction === t.direction && this.origin.is(t.origin);
  }
  getSiblingCaret() {
    return ne(this.origin, this.direction);
  }
}
function ft(n) {
  return n instanceof _t;
}
function Wt(n) {
  return n instanceof mt;
}
function Pe(n) {
  return n instanceof pn;
}
const ic = { next: class extends _t {
  constructor() {
    super(...arguments);
    le(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(e) {
    return this.origin.insertAfter(e), this;
  }
}, previous: class extends _t {
  constructor() {
    super(...arguments);
    le(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(e) {
    return this.origin.insertBefore(e), this;
  }
} }, sc = { next: class extends mt {
  constructor() {
    super(...arguments);
    le(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(e) {
    return this.origin.insertAfter(e), this;
  }
}, previous: class extends mt {
  constructor() {
    super(...arguments);
    le(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(e) {
    return this.origin.insertBefore(e), this;
  }
} }, oc = { next: class extends pn {
  constructor() {
    super(...arguments);
    le(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(e) {
    return this.origin.splice(0, 0, [e]), this;
  }
}, previous: class extends pn {
  constructor() {
    super(...arguments);
    le(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(e) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [e]), this;
  }
} };
function ne(n, e) {
  return n ? new sc[e](n) : null;
}
function yt(n, e, t) {
  return n ? new ic[e](n, Er(n, t)) : null;
}
function Er(n, e) {
  const t = n.getTextContentSize(), r = e === "next" ? t : e === "previous" ? 0 : e;
  return r >= 0 && r <= t || T(274, String(e), String(t)), r;
}
function no(n, e) {
  return new lc(n, e);
}
function tt(n, e) {
  return k(n) ? new oc[e](n) : null;
}
function ac(n) {
  return n && n.getChildCaret() || n;
}
function ns(n) {
  return n && ac(n.getAdjacentCaret());
}
class rs {
  constructor(e, t, r) {
    le(this, "type", "node-caret-range");
    this.anchor = e, this.focus = t, this.direction = r;
  }
  getLatest() {
    const e = this.anchor.getLatest(), t = this.focus.getLatest();
    return e === this.anchor && t === this.focus ? this : new rs(e, t, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const e = (i) => {
      const s = this[i].getLatest();
      return ft(s) ? function(o, a) {
        const { direction: l, origin: u } = o, c = Er(u, a === "focus" ? Ht(l) : l);
        return no(o, c - o.offset);
      }(s, i) : null;
    }, t = e("anchor"), r = e("focus");
    if (t && r) {
      const { caret: i } = t, { caret: s } = r;
      if (i.isSameNodeCaret(s))
        return [no(i, s.offset - i.offset), null];
    }
    return [t, r];
  }
  iterNodeCarets(e = "root") {
    const t = ft(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), i = ft(r), s = (o) => o.isSameNodeCaret(r) ? null : ns(o) || o.getParentCaret(e);
    return Xa({ hasNext: (o) => o !== null && !(i && r.isSameNodeCaret(o)), initial: t.isSameNodeCaret(r) ? null : s(t), map: (o) => o, step: s });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class lc {
  constructor(e, t) {
    le(this, "type", "slice");
    this.caret = e, this.distance = t;
  }
  getSliceIndices() {
    const { distance: e, caret: { offset: t } } = this, r = t + e;
    return r < t ? [r, t] : [t, r];
  }
  getTextContent() {
    const [e, t] = this.getSliceIndices();
    return this.caret.origin.getTextContent().slice(e, t);
  }
  getTextContentSize() {
    return Math.abs(this.distance);
  }
  removeTextSlice() {
    const { caret: { origin: e, direction: t } } = this, [r, i] = this.getSliceIndices(), s = e.getTextContent();
    return yt(e.setTextContent(s.slice(0, r) + s.slice(i)), t, r);
  }
}
function is(n) {
  return bt(n, ne(j(), n.direction));
}
function uc(n) {
  return bt(n, n);
}
function bt(n, e) {
  return n.direction !== e.direction && T(265), new rs(n, e, n.direction);
}
function Xa(n) {
  const { initial: e, hasNext: t, step: r, map: i } = n;
  let s = e;
  return { [Symbol.iterator]() {
    return this;
  }, next() {
    if (!t(s))
      return { done: !0, value: void 0 };
    const o = { done: !1, value: i(s) };
    return s = r(s), o;
  } };
}
function Qa(n, e) {
  const t = qn(n.origin, e.origin);
  switch (t === null && T(275, n.origin.getKey(), e.origin.getKey()), t.type) {
    case "same": {
      const r = n.type === "text", i = e.type === "text";
      return r && i ? function(s, o) {
        return Math.sign(s - o);
      }(n.offset, e.offset) : n.type === e.type ? 0 : r ? -1 : i ? 1 : n.type === "child" ? -1 : 1;
    }
    case "ancestor":
      return n.type === "child" ? -1 : 1;
    case "descendant":
      return e.type === "child" ? 1 : -1;
    case "branch":
      return el(t);
  }
}
function el(n) {
  const { a: e, b: t } = n, r = e.__key, i = t.__key;
  let s = e, o = t;
  for (; s && o; s = s.getNextSibling(), o = o.getNextSibling()) {
    if (s.__key === i)
      return -1;
    if (o.__key === r)
      return 1;
  }
  return s === null ? 1 : -1;
}
function $n(n, e) {
  return e.is(n);
}
function ro(n) {
  return k(n) ? [n.getLatest(), null] : [n.getParent(), n.getLatest()];
}
function qn(n, e) {
  if (n.is(e))
    return { commonAncestor: n, type: "same" };
  const t = /* @__PURE__ */ new Map();
  for (let [r, i] = ro(n); r; i = r, r = r.getParent())
    t.set(r, i);
  for (let [r, i] = ro(e); r; i = r, r = r.getParent()) {
    const s = t.get(r);
    if (s !== void 0)
      return s === null ? ($n(n, r) || T(276), { commonAncestor: r, type: "ancestor" }) : i === null ? ($n(e, r) || T(277), { commonAncestor: r, type: "descendant" }) : ((k(s) || $n(n, s)) && (k(i) || $n(e, i)) && r.is(s.getParent()) && r.is(i.getParent()) || T(278), { a: s, b: i, commonAncestor: r, type: "branch" });
  }
  return null;
}
function nt(n, e) {
  const { type: t, key: r, offset: i } = n, s = Yu(n.key);
  return t === "text" ? (F(s) || T(266, s.getType(), r), yt(s, e, i)) : (k(s) || T(267, s.getType(), r), fc(s, n.offset, e));
}
function mn(n, e) {
  const { origin: t, direction: r } = e, i = r === "next";
  ft(e) ? n.set(t.getKey(), e.offset, "text") : Wt(e) ? F(t) ? n.set(t.getKey(), Er(t, r), "text") : n.set(t.getParentOrThrow().getKey(), t.getIndexWithinParent() + (i ? 1 : 0), "element") : (Pe(e) && k(t) || T(268), n.set(t.getKey(), i ? 0 : t.getChildrenSize(), "element"));
}
function cc(n) {
  const e = L(), t = N(e) ? e : Di();
  return jn(t, n), fe(t), t;
}
function jn(n, e) {
  mn(n.anchor, e.anchor), mn(n.focus, e.focus);
}
function io(n) {
  const { anchor: e, focus: t } = n, r = nt(e, "next"), i = nt(t, "next"), s = Qa(r, i) <= 0 ? "next" : "previous";
  return bt(Ut(r, s), Ut(i, s));
}
function ss(n) {
  const { direction: e, origin: t } = n, r = ne(t, Ht(e)).getNodeAtCaret();
  return r ? ne(r, e) : tt(t.getParentOrThrow(), e);
}
function so(n, e = "root") {
  const t = [n];
  for (let r = Pe(n) ? n.getParentCaret(e) : n.getSiblingCaret(); r !== null; r = r.getParentCaret(e))
    t.push(ss(r));
  return t;
}
function Kr(n) {
  return !!n && n.origin.isAttached();
}
function dc(n, e = "removeEmptySlices") {
  if (n.isCollapsed())
    return n;
  const t = "root", r = "next";
  let i = e;
  const s = nl(n, r), o = so(s.anchor, t), a = so(s.focus.getFlipped(), t), l = /* @__PURE__ */ new Set(), u = [];
  for (const h of s.iterNodeCarets(t))
    if (Pe(h))
      l.add(h.origin.getKey());
    else if (Wt(h)) {
      const { origin: _ } = h;
      k(_) && !l.has(_.getKey()) || u.push(_);
    }
  for (const h of u)
    h.remove();
  for (const h of s.getTextSlices()) {
    if (!h)
      continue;
    const { origin: _ } = h.caret, y = _.getTextContentSize(), v = ss(ne(_, r)), g = _.getMode();
    if (Math.abs(h.distance) === y && i === "removeEmptySlices" || g === "token" && h.distance !== 0)
      v.remove();
    else if (h.distance !== 0) {
      i = "removeEmptySlices";
      let p = h.removeTextSlice();
      const b = h.caret.origin;
      if (g === "segmented") {
        const S = p.origin, x = G(S.getTextContent()).setStyle(S.getStyle()).setFormat(S.getFormat());
        v.replaceOrInsert(x), p = yt(x, r, p.offset);
      }
      b.is(o[0].origin) && (o[0] = p), b.is(a[0].origin) && (a[0] = p.getFlipped());
    }
  }
  let c, f;
  for (const h of o)
    if (Kr(h)) {
      c = Ie(h);
      break;
    }
  for (const h of a)
    if (Kr(h)) {
      f = Ie(h);
      break;
    }
  const d = function(h, _, y) {
    if (!h || !_)
      return null;
    const v = h.getParentAtCaret(), g = _.getParentAtCaret();
    if (!v || !g)
      return null;
    const p = v.getParents().reverse();
    p.push(v);
    const b = g.getParents().reverse();
    b.push(g);
    const S = Math.min(p.length, b.length);
    let x;
    for (x = 0; x < S && p[x] === b[x]; x++)
      ;
    const C = (A, I) => {
      let D;
      for (let R = x; R < A.length; R++) {
        const P = A[R];
        if (ve(P))
          return;
        !D && I(P) && (D = P);
      }
      return D;
    }, E = C(p, Ze), w = E && C(b, (A) => y.has(A.getKey()) && Ze(A));
    return E && w ? [E, w] : null;
  }(c, f, l);
  if (d) {
    const [h, _] = d;
    tt(h, "previous").splice(0, _.getChildren()), _.remove();
  }
  const m = [c, f, ...o, ...a].find(Kr);
  if (m)
    return uc(Ut(Ie(m), n.direction));
  T(269, JSON.stringify(o.map((h) => h.origin.__key)));
}
function Ie(n) {
  const e = function(i) {
    let s = i;
    for (; Pe(s); ) {
      const o = ns(s);
      if (!Pe(o))
        break;
      s = o;
    }
    return s;
  }(n.getLatest()), { direction: t } = e;
  if (F(e.origin))
    return ft(e) ? e : yt(e.origin, t, t);
  const r = e.getAdjacentCaret();
  return Wt(r) && F(r.origin) ? yt(r.origin, t, Ht(t)) : e;
}
function tl(n) {
  return ft(n) && n.offset !== Er(n.origin, n.direction);
}
function Ut(n, e) {
  return n.direction === e ? n : n.getFlipped();
}
function nl(n, e) {
  return n.direction === e ? n : bt(Ut(n.focus, e), Ut(n.anchor, e));
}
function fc(n, e, t) {
  let r = tt(n, "next");
  for (let i = 0; i < e; i++) {
    const s = r.getAdjacentCaret();
    if (s === null)
      break;
    r = s;
  }
  return Ut(r, t);
}
const rl = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, gc = rl ? Kt : me, Rn = { tag: "history-merge" };
function hc({ initialConfig: n, children: e }) {
  const t = _n(() => {
    const { theme: r, namespace: i, nodes: s, onError: o, editorState: a, html: l } = n, u = zl(null, r), c = Uu({ editable: n.editable, html: l, namespace: i, nodes: s, onError: (f) => o(f, c), theme: r });
    return function(f, d) {
      if (d !== null) {
        if (d === void 0)
          f.update(() => {
            const m = j();
            if (m.isEmpty()) {
              const h = Q();
              m.append(h);
              const _ = rl ? document.activeElement : null;
              (L() !== null || _ !== null && _ === f.getRootElement()) && h.select();
            }
          }, Rn);
        else if (d !== null)
          switch (typeof d) {
            case "string": {
              const m = f.parseEditorState(d);
              f.setEditorState(m, Rn);
              break;
            }
            case "object":
              f.setEditorState(d, Rn);
              break;
            case "function":
              f.update(() => {
                j().isEmpty() && d(f);
              }, Rn);
          }
      }
    }(c, a), [c, u];
  }, []);
  return gc(() => {
    const r = n.editable, [i] = t;
    i.setEditable(r === void 0 || r);
  }, []), U(Ko.Provider, { value: t, children: e });
}
const pc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Kt : me;
function mc(n) {
  return { initialValueFn: () => n.isEditable(), subscribe: (e) => n.registerEditableListener(e) };
}
function _c() {
  return function(n) {
    const [e] = Me(), t = _n(() => n(e), [e, n]), [r, i] = gt(() => t.initialValueFn()), s = Wo(r);
    return pc(() => {
      const { initialValueFn: o, subscribe: a } = t, l = o();
      return s.current !== l && (s.current = l, i(l)), a((u) => {
        s.current = u, i(u);
      });
    }, [t, n]), r;
  }(mc);
}
function yc() {
  return j().getTextContent();
}
function bc(n, e = !0) {
  if (n)
    return !1;
  let t = yc();
  return e && (t = t.trim()), t === "";
}
function xc(n) {
  if (!bc(n, !1))
    return !1;
  const e = j().getChildren(), t = e.length;
  if (t > 1)
    return !1;
  for (let r = 0; r < t; r++) {
    const i = e[r];
    if (z(i))
      return !1;
    if (k(i)) {
      if (!Ba(i) || i.__indent !== 0)
        return !1;
      const s = i.getChildren(), o = s.length;
      for (let a = 0; a < o; a++) {
        const l = s[r];
        if (!F(l))
          return !1;
      }
    }
  }
  return !0;
}
function il(n) {
  return () => xc(n);
}
const _i = /* @__PURE__ */ new Map();
function sl(n) {
  const e = {};
  if (!n)
    return e;
  const t = n.split(";");
  for (const r of t)
    if (r !== "") {
      const [i, s] = r.split(/:([^]+)/);
      i && s && (e[i.trim()] = s.trim());
    }
  return e;
}
function oo(n) {
  let e = _i.get(n);
  return e === void 0 && (e = sl(n), _i.set(n, e)), e;
}
function ol(n, e) {
  const t = n.getStartEndPoints();
  if (e.isSelected(n) && !e.isSegmented() && !e.isToken() && t !== null) {
    const [r, i] = t, s = n.isBackward(), o = r.getNode(), a = i.getNode(), l = e.is(o), u = e.is(a);
    if (l || u) {
      const [c, f] = ui(n), d = o.is(a), m = e.is(s ? a : o), h = e.is(s ? o : a);
      let _, y = 0;
      return d ? (y = c > f ? f : c, _ = c > f ? c : f) : m ? (y = s ? f : c, _ = void 0) : h && (y = 0, _ = s ? c : f), e.__text = e.__text.slice(y, _), e;
    }
  }
  return e;
}
function vc(n) {
  const e = n.getStyle(), t = sl(e);
  _i.set(e, t);
}
function ao(n, e) {
  const t = nt(n.focus, e ? "previous" : "next");
  if (tl(t))
    return !1;
  for (const r of is(t)) {
    if (Pe(r))
      return !r.origin.isInline();
    if (!k(r.origin)) {
      if (z(r.origin))
        return !0;
      break;
    }
  }
  return !1;
}
function Sc(n, e, t, r) {
  n.modify(e ? "extend" : "move", t, r);
}
function wc(n) {
  const e = n.anchor.getNode();
  return (oe(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
}
function lo(n, e, t) {
  const r = wc(n);
  Sc(n, e, t ? !r : r, "character");
}
function Cc(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e)
    r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const al = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Ec = al && "documentMode" in document ? document.documentMode : null;
!(!al || !("InputEvent" in window) || Ec) && "getTargetRanges" in new window.InputEvent("input");
function ll(...n) {
  const e = [];
  for (const t of n)
    if (t && typeof t == "string")
      for (const [r] of t.matchAll(/\S+/g))
        e.push(r);
  return e;
}
function vt(...n) {
  return () => {
    for (let e = n.length - 1; e >= 0; e--)
      n[e]();
    n.length = 0;
  };
}
function Te(n, ...e) {
  const t = ll(...e);
  t.length > 0 && n.classList.add(...t);
}
function kr(n, ...e) {
  const t = ll(...e);
  t.length > 0 && n.classList.remove(...t);
}
function kc(n) {
  return n ? n.getAdjacentCaret() : null;
}
function Tc(n) {
  const e = os(n, (t) => k(t) && !t.isInline());
  return k(e) || Cc(4, n.__key), e;
}
const os = (n, e) => {
  let t = n;
  for (; t !== j() && t != null; ) {
    if (e(t))
      return t;
    t = t.getParent();
  }
  return null;
};
function Nc(n, e) {
  const t = e();
  return n.replace(t), t.append(n), t;
}
function ut(n, e) {
  return n !== null && Object.getPrototypeOf(n).constructor.name === e.name;
}
function Ac(n) {
  const e = window.location.origin, t = (r) => {
    if (r.origin !== e)
      return;
    const i = n.getRootElement();
    if (document.activeElement !== i)
      return;
    const s = r.data;
    if (typeof s == "string") {
      let o;
      try {
        o = JSON.parse(s);
      } catch {
        return;
      }
      if (o && o.protocol === "nuanria_messaging" && o.type === "request") {
        const a = o.payload;
        if (a && a.functionId === "makeChanges") {
          const l = a.args;
          if (l) {
            const [u, c, f, d, m, h] = l;
            n.update(() => {
              const _ = L();
              if (N(_)) {
                const y = _.anchor;
                let v = y.getNode(), g = 0, p = 0;
                if (F(v) && u >= 0 && c >= 0 && (g = u, p = u + c, _.setTextNodeRange(v, g, v, p)), g === p && f === "" || (_.insertRawText(f), v = y.getNode()), F(v)) {
                  g = d, p = d + m;
                  const b = v.getTextContentSize();
                  g = g > b ? b : g, p = p > b ? b : p, _.setTextNodeRange(v, g, v, p);
                }
                r.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  return window.addEventListener("message", t, !0), () => {
    window.removeEventListener("message", t, !0);
  };
}
function Fc(n, e) {
  const t = e.body ? e.body.childNodes : [];
  let r = [];
  const i = [];
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    if (!cl.has(o.nodeName)) {
      const a = dl(o, n, i, !1);
      a !== null && (r = r.concat(a));
    }
  }
  return function(s) {
    for (const o of s)
      o.getNextSibling() instanceof Ji && o.insertAfter($e());
    for (const o of s) {
      const a = o.getChildren();
      for (const l of a)
        o.insertBefore(l);
      o.remove();
    }
  }(i), r;
}
function Oc(n, e) {
  if (typeof document > "u" || typeof window > "u" && window.window === void 0)
    throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = j().getChildren();
  for (let i = 0; i < r.length; i++)
    ul(n, r[i], t, e);
  return t.innerHTML;
}
function ul(n, e, t, r = null) {
  let i = r === null || e.isSelected(r);
  const s = k(e) && e.excludeFromCopy("html");
  let o = e;
  if (r !== null) {
    let m = Xi(e);
    m = F(m) && r !== null ? ol(r, m) : m, o = m;
  }
  const a = k(o) ? o.getChildren() : [], l = n._nodes.get(o.getType());
  let u;
  u = l && l.exportDOM !== void 0 ? l.exportDOM(n, o) : o.exportDOM(n);
  const { element: c, after: f } = u;
  if (!c)
    return !1;
  const d = document.createDocumentFragment();
  for (let m = 0; m < a.length; m++) {
    const h = a[m], _ = ul(n, h, d, r);
    !i && k(e) && _ && e.extractWithChild(h, r, "html") && (i = !0);
  }
  if (i && !s) {
    if ((V(c) || pi(c)) && c.append(d), t.append(c), f) {
      const m = f.call(o, c);
      m && (pi(c) ? c.replaceChildren(m) : c.replaceWith(m));
    }
  } else
    t.append(d);
  return i;
}
const cl = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function dl(n, e, t, r, i = /* @__PURE__ */ new Map(), s) {
  let o = [];
  if (cl.has(n.nodeName))
    return o;
  let a = null;
  const l = function(h, _) {
    const { nodeName: y } = h, v = _._htmlConversions.get(y.toLowerCase());
    let g = null;
    if (v !== void 0)
      for (const p of v) {
        const b = p(h);
        b !== null && (g === null || (g.priority || 0) <= (b.priority || 0)) && (g = b);
      }
    return g !== null ? g.conversion : null;
  }(n, e), u = l ? l(n) : null;
  let c = null;
  if (u !== null) {
    c = u.after;
    const h = u.node;
    if (a = Array.isArray(h) ? h[h.length - 1] : h, a !== null) {
      for (const [, _] of i)
        if (a = _(a, s), !a)
          break;
      a && o.push(...Array.isArray(h) ? h : [a]);
    }
    u.forChild != null && i.set(n.nodeName, u.forChild);
  }
  const f = n.childNodes;
  let d = [];
  const m = (a == null || !ve(a)) && (a != null && ci(a) || r);
  for (let h = 0; h < f.length; h++)
    d.push(...dl(f[h], e, t, m, new Map(i), a));
  return c != null && (d = c(d)), ur(n) && (d = Lc(n, d, m ? () => {
    const h = new Ji();
    return t.push(h), h;
  } : Q)), a == null ? d.length > 0 ? o = o.concat(d) : ur(n) && function(h) {
    return h.nextSibling == null || h.previousSibling == null ? !1 : mi(h.nextSibling) && mi(h.previousSibling);
  }(n) && (o = o.concat($e())) : k(a) && a.append(...d), o;
}
function Lc(n, e, t) {
  const r = n.style.textAlign, i = [];
  let s = [];
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (ci(a))
      r && !a.getFormat() && a.setFormat(r), i.push(a);
    else if (s.push(a), o === e.length - 1 || o < e.length - 1 && ci(e[o + 1])) {
      const l = t();
      l.setFormat(r), l.append(...s), i.push(l), s = [];
    }
  }
  return i;
}
function cr(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e)
    r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Ic(n, e = L()) {
  return e == null && cr(166), N(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : Oc(n, e);
}
function Pc(n, e = L()) {
  return e == null && cr(166), N(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify($c(n, e));
}
function uo(n, e, t) {
  const r = n.getData("application/x-lexical-editor");
  if (r)
    try {
      const a = JSON.parse(r);
      if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
        return co(t, Rc(a.nodes), e);
    } catch {
    }
  const i = n.getData("text/html"), s = n.getData("text/plain");
  if (i && s !== i)
    try {
      const a = new DOMParser().parseFromString(function(l) {
        return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (u) => u }).createHTML(l) : l;
      }(i), "text/html");
      return co(t, Fc(t, a), e);
    } catch {
    }
  const o = s || n.getData("text/uri-list");
  if (o != null)
    if (N(e)) {
      const a = o.split(/(\r?\n|\t)/);
      a[a.length - 1] === "" && a.pop();
      for (let l = 0; l < a.length; l++) {
        const u = L();
        if (N(u)) {
          const c = a[l];
          c === `
` || c === `\r
` ? u.insertParagraph() : c === "	" ? u.insertNodes([Jt()]) : u.insertText(c);
        }
      }
    } else
      e.insertRawText(o);
}
function co(n, e, t) {
  n.dispatchCommand(hu, { nodes: e, selection: t }) || t.insertNodes(e);
}
function fl(n, e, t, r = []) {
  let i = e === null || t.isSelected(e);
  const s = k(t) && t.excludeFromCopy("html");
  let o = t;
  if (e !== null) {
    let u = Xi(t);
    u = F(u) && e !== null ? ol(e, u) : u, o = u;
  }
  const a = k(o) ? o.getChildren() : [], l = function(u) {
    const c = u.exportJSON(), f = u.constructor;
    if (c.type !== f.getType() && cr(58, f.name), k(u)) {
      const d = c.children;
      Array.isArray(d) || cr(59, f.name);
    }
    return c;
  }(o);
  if (F(o)) {
    const u = o.__text;
    u.length > 0 ? l.text = u : i = !1;
  }
  for (let u = 0; u < a.length; u++) {
    const c = a[u], f = fl(n, e, c, l.children);
    !i && k(t) && f && t.extractWithChild(c, e, "clone") && (i = !0);
  }
  if (i && !s)
    r.push(l);
  else if (Array.isArray(l.children))
    for (let u = 0; u < l.children.length; u++) {
      const c = l.children[u];
      r.push(c);
    }
  return i;
}
function $c(n, e) {
  const t = [], r = j().getChildren();
  for (let i = 0; i < r.length; i++)
    fl(n, e, r[i], t);
  return { namespace: n._config.namespace, nodes: t };
}
function Rc(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = zu(r);
    F(i) && vc(i), e.push(i);
  }
  return e;
}
let Et = null;
async function fo(n, e, t) {
  if (Et !== null)
    return !1;
  if (e !== null)
    return new Promise((u, c) => {
      n.update(() => {
        u(go(n, e, t));
      });
    });
  const r = n.getRootElement(), i = n._window || window, s = window.document, o = ke(i);
  if (r === null || o === null)
    return !1;
  const a = s.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(s.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), o.removeAllRanges(), o.addRange(l), new Promise((u, c) => {
    const f = n.registerCommand(_r, (d) => (ut(d, ClipboardEvent) && (f(), Et !== null && (window.clearTimeout(Et), Et = null), u(go(n, d, t))), !0), Wu);
    Et = window.setTimeout(() => {
      f(), Et = null, u(!1);
    }, 50), s.execCommand("copy"), a.remove();
  });
}
function go(n, e, t) {
  if (t === void 0) {
    const i = ke(n._window);
    if (!i)
      return !1;
    const s = i.anchorNode, o = i.focusNode;
    if (s !== null && o !== null && !wn(n, s, o))
      return !1;
    const a = L();
    if (a === null)
      return !1;
    t = Mc(a);
  }
  e.preventDefault();
  const r = e.clipboardData;
  return r !== null && (zc(r, t), !0);
}
const Dc = [["text/html", Ic], ["application/x-lexical-editor", Pc]];
function Mc(n = L()) {
  const e = { "text/plain": n ? n.getTextContent() : "" };
  if (n) {
    const t = Qu();
    for (const [r, i] of Dc) {
      const s = i(t, n);
      s !== null && (e[r] = s);
    }
  }
  return e;
}
function zc(n, e) {
  for (const t in e) {
    const r = e[t];
    r !== void 0 && n.setData(t, r);
  }
}
function ho(n, e) {
  if (document.caretRangeFromPoint !== void 0) {
    const t = document.caretRangeFromPoint(n, e);
    return t === null ? null : { node: t.startContainer, offset: t.startOffset };
  }
  if (document.caretPositionFromPoint !== "undefined") {
    const t = document.caretPositionFromPoint(n, e);
    return t === null ? null : { node: t.offsetNode, offset: t.offset };
  }
  return null;
}
const Gt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Bc = Gt && "documentMode" in document ? document.documentMode : null, Wc = !(!Gt || !("InputEvent" in window) || Bc) && "getTargetRanges" in new window.InputEvent("input"), Uc = Gt && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), po = Gt && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Kc = Gt && /^(?=.*Chrome).*/i.test(navigator.userAgent), Jc = Gt && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Kc, mo = sa();
let as = class gl extends ze {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new gl(e.__key);
  }
  createDOM(e) {
    const t = document.createElement("blockquote");
    return Te(t, e.theme.quote), t;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (e) => ({ conversion: qc, priority: 0 }) };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (V(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  static importJSON(e) {
    return ls().updateFromJSON(e);
  }
  insertNewAfter(e, t) {
    const r = Q(), i = this.getDirection();
    return r.setDirection(i), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const e = Q();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function ls() {
  return _e(new as());
}
function _o(n) {
  return n instanceof as;
}
let us = class hl extends ze {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new hl(e.__tag, e.__key);
  }
  constructor(e, t) {
    super(t), this.__tag = e;
  }
  getTag() {
    return this.__tag;
  }
  setTag(e) {
    const t = this.getWritable();
    return this.__tag = e, t;
  }
  createDOM(e) {
    const t = this.__tag, r = document.createElement(t), i = e.theme.heading;
    if (i !== void 0) {
      const s = i[t];
      Te(r, s);
    }
    return r;
  }
  updateDOM(e, t, r) {
    return e.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (e) => ({ conversion: kt, priority: 0 }), h2: (e) => ({ conversion: kt, priority: 0 }), h3: (e) => ({ conversion: kt, priority: 0 }), h4: (e) => ({ conversion: kt, priority: 0 }), h5: (e) => ({ conversion: kt, priority: 0 }), h6: (e) => ({ conversion: kt, priority: 0 }), p: (e) => {
      const t = e.firstChild;
      return t !== null && yo(t) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (e) => yo(e) ? { conversion: (t) => ({ node: Ft("h1") }), priority: 3 } : null };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (V(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  static importJSON(e) {
    return Ft(e.tag).updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setTag(e.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(e, t = !0) {
    const r = e ? e.anchor.offset : 0, i = this.getLastDescendant(), s = !i || e && e.anchor.key === i.getKey() && r === i.getTextContentSize() || !e ? Q() : Ft(this.getTag()), o = this.getDirection();
    if (s.setDirection(o), this.insertAfter(s, t), r === 0 && !this.isEmpty() && e) {
      const a = Q();
      a.select(), this.replace(a, !0);
    }
    return s;
  }
  collapseAtStart() {
    const e = this.isEmpty() ? Q() : Ft(this.getTag());
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  extractWithChild() {
    return !0;
  }
};
function yo(n) {
  return n.nodeName.toLowerCase() === "span" && n.style.fontSize === "26pt";
}
function kt(n) {
  const e = n.nodeName.toLowerCase();
  let t = null;
  return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6" || (t = Ft(e), n.style !== null && (Qi(n, t), t.setFormat(n.style.textAlign))), { node: t };
}
function qc(n) {
  const e = ls();
  return n.style !== null && (e.setFormat(n.style.textAlign), Qi(n, e)), { node: e };
}
function Ft(n = "h1") {
  return _e(new us(n));
}
function jc(n) {
  return n instanceof us;
}
function Dn(n) {
  let e = null;
  if (ut(n, DragEvent) ? e = n.dataTransfer : ut(n, ClipboardEvent) && (e = n.clipboardData), e === null)
    return [!1, [], !1];
  const t = e.types, r = t.includes("Files"), i = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(e.files), i];
}
function bo(n) {
  const e = L();
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set(), r = e.getNodes();
  for (let i = 0; i < r.length; i++) {
    const s = r[i], o = s.getKey();
    if (t.has(o))
      continue;
    const a = os(s, (u) => k(u) && !u.isInline());
    if (a === null)
      continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), n(a));
  }
  return t.size > 0;
}
function Mn(n) {
  const e = zt(n);
  return z(e);
}
function Jr(n) {
  for (const e of ["lowercase", "uppercase", "capitalize"])
    n.hasFormat(e) && n.toggleFormat(e);
}
function Hc(n) {
  return vt(n.registerCommand(Oi, (e) => {
    const t = L();
    return !!re(t) && (t.clear(), !0);
  }, 0), n.registerCommand(ct, (e) => {
    const t = L();
    return N(t) ? (t.deleteCharacter(e), !0) : !!re(t) && (t.deleteNodes(), !0);
  }, M), n.registerCommand(gn, (e) => {
    const t = L();
    return !!N(t) && (t.deleteWord(e), !0);
  }, M), n.registerCommand(hn, (e) => {
    const t = L();
    return !!N(t) && (t.deleteLine(e), !0);
  }, M), n.registerCommand(Lt, (e) => {
    const t = L();
    if (typeof e == "string")
      t !== null && t.insertText(e);
    else {
      if (t === null)
        return !1;
      const r = e.dataTransfer;
      if (r != null)
        uo(r, t, n);
      else if (N(t)) {
        const i = e.data;
        return i && t.insertText(i), !0;
      }
    }
    return !0;
  }, M), n.registerCommand(ti, () => {
    const e = L();
    return !!N(e) && (e.removeText(), !0);
  }, M), n.registerCommand(Ye, (e) => {
    const t = L();
    return !!N(t) && (t.formatText(e), !0);
  }, M), n.registerCommand(bu, (e) => {
    const t = L();
    if (!N(t) && !re(t))
      return !1;
    const r = t.getNodes();
    for (const i of r) {
      const s = os(i, (o) => k(o) && !o.isInline());
      s !== null && s.setFormat(e);
    }
    return !0;
  }, M), n.registerCommand(Ot, (e) => {
    const t = L();
    return !!N(t) && (t.insertLineBreak(e), !0);
  }, M), n.registerCommand(nr, () => {
    const e = L();
    return !!N(e) && (e.insertParagraph(), !0);
  }, M), n.registerCommand(_u, () => (Ia([Jt()]), !0), M), n.registerCommand(yu, () => bo((e) => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), M), n.registerCommand(Ss, () => bo((e) => {
    const t = e.getIndent();
    t > 0 && e.setIndent(t - 1);
  }), M), n.registerCommand(ca, (e) => {
    const t = L();
    if (re(t) && !Mn(e.target)) {
      const r = t.getNodes();
      if (r.length > 0)
        return r[0].selectPrevious(), !0;
    } else if (N(t)) {
      const r = fi(t.focus, !0);
      if (!e.shiftKey && z(r) && !r.isIsolated() && !r.isInline())
        return r.selectPrevious(), e.preventDefault(), !0;
    }
    return !1;
  }, M), n.registerCommand(da, (e) => {
    const t = L();
    if (re(t)) {
      const r = t.getNodes();
      if (r.length > 0)
        return r[0].selectNext(0, 0), !0;
    } else if (N(t)) {
      if (function(i) {
        const s = i.focus;
        return s.key === "root" && s.offset === j().getChildrenSize();
      }(t))
        return e.preventDefault(), !0;
      const r = fi(t.focus, !1);
      if (!e.shiftKey && z(r) && !r.isIsolated() && !r.isInline())
        return r.selectNext(), e.preventDefault(), !0;
    }
    return !1;
  }, M), n.registerCommand(ua, (e) => {
    const t = L();
    if (re(t)) {
      const r = t.getNodes();
      if (r.length > 0)
        return e.preventDefault(), r[0].selectPrevious(), !0;
    }
    if (!N(t))
      return !1;
    if (ao(t, !0)) {
      const r = e.shiftKey;
      return e.preventDefault(), lo(t, r, !0), !0;
    }
    return !1;
  }, M), n.registerCommand(la, (e) => {
    const t = L();
    if (re(t) && !Mn(e.target)) {
      const i = t.getNodes();
      if (i.length > 0)
        return e.preventDefault(), i[0].selectNext(0, 0), !0;
    }
    if (!N(t))
      return !1;
    const r = e.shiftKey;
    return !!ao(t, !1) && (e.preventDefault(), lo(t, r, !1), !0);
  }, M), n.registerCommand(ga, (e) => {
    if (Mn(e.target))
      return !1;
    const t = L();
    if (N(t)) {
      const { anchor: r } = t, i = r.getNode();
      if (t.isCollapsed() && r.offset === 0 && !oe(i) && Tc(i).getIndent() > 0)
        return e.preventDefault(), n.dispatchCommand(Ss, void 0);
      if (po && navigator.language === "ko-KR")
        return !1;
    } else if (!re(t))
      return !1;
    return e.preventDefault(), n.dispatchCommand(ct, !0);
  }, M), n.registerCommand(pa, (e) => {
    if (Mn(e.target))
      return !1;
    const t = L();
    return !(!N(t) && !re(t)) && (e.preventDefault(), n.dispatchCommand(ct, !1));
  }, M), n.registerCommand(rr, (e) => {
    const t = L();
    if (!N(t))
      return !1;
    if (Jr(t), e !== null) {
      if ((po || Uc || Jc) && Wc)
        return !1;
      if (e.preventDefault(), e.shiftKey)
        return n.dispatchCommand(Ot, !1);
    }
    return n.dispatchCommand(nr, void 0);
  }, M), n.registerCommand(ha, () => {
    const e = L();
    return !!N(e) && (n.blur(), !0);
  }, M), n.registerCommand(_a, (e) => {
    const [, t] = Dn(e);
    if (t.length > 0) {
      const i = ho(e.clientX, e.clientY);
      if (i !== null) {
        const { offset: s, node: o } = i, a = zt(o);
        if (a !== null) {
          const l = Di();
          if (F(a))
            l.anchor.set(a.getKey(), s, "text"), l.focus.set(a.getKey(), s, "text");
          else {
            const c = a.getParentOrThrow().getKey(), f = a.getIndexWithinParent() + 1;
            l.anchor.set(c, f, "element"), l.focus.set(c, f, "element");
          }
          const u = Xn(l);
          fe(u);
        }
        n.dispatchCommand(mo, t);
      }
      return e.preventDefault(), !0;
    }
    const r = L();
    return !!N(r);
  }, M), n.registerCommand(ya, (e) => {
    const [t] = Dn(e), r = L();
    return !(t && !N(r));
  }, M), n.registerCommand(ba, (e) => {
    const [t] = Dn(e), r = L();
    if (t && !N(r))
      return !1;
    const i = ho(e.clientX, e.clientY);
    if (i !== null) {
      const s = zt(i.node);
      z(s) && e.preventDefault();
    }
    return !0;
  }, M), n.registerCommand(ni, () => (Hu(), !0), M), n.registerCommand(_r, (e) => (fo(n, ut(e, ClipboardEvent) ? e : null), !0), M), n.registerCommand(Pi, (e) => (async function(t, r) {
    await fo(r, ut(t, ClipboardEvent) ? t : null), r.update(() => {
      const i = L();
      N(i) ? i.removeText() : re(i) && i.getNodes().forEach((s) => s.remove());
    });
  }(e, n), !0), M), n.registerCommand(mr, (e) => {
    const [, t, r] = Dn(e);
    return t.length > 0 && !r ? (n.dispatchCommand(mo, t), !0) : jt(e.target) && qi(e.target) ? !1 : L() !== null && (function(i, s) {
      i.preventDefault(), s.update(() => {
        const o = L(), a = ut(i, InputEvent) || ut(i, KeyboardEvent) ? null : i.clipboardData;
        a != null && o !== null && uo(a, o, s);
      }, { tag: "paste" });
    }(e, n), !0);
  }, M), n.registerCommand(fa, (e) => {
    const t = L();
    return N(t) && Jr(t), !1;
  }, M), n.registerCommand(ma, (e) => {
    const t = L();
    return N(t) && Jr(t), !1;
  }, M));
}
const yi = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Kt : me;
function xo(n) {
  return n.getEditorState().read(il(n.isComposing()));
}
function Gc({ contentEditable: n, placeholder: e = null, ErrorBoundary: t }) {
  const [r] = Me(), i = function(s, o) {
    const [a, l] = gt(() => s.getDecorators());
    return yi(() => s.registerDecoratorListener((u) => {
      Dl(() => {
        l(u);
      });
    }), [s]), me(() => {
      l(s.getDecorators());
    }, [s]), _n(() => {
      const u = [], c = Object.keys(a);
      for (let f = 0; f < c.length; f++) {
        const d = c[f], m = U(o, { onError: (_) => s._onError(_), children: U($l, { fallback: null, children: a[d] }) }), h = s.getElementByKey(d);
        h !== null && u.push(Ml(m, h, d));
      }
      return u;
    }, [o, a, s]);
  }(r, t);
  return function(s) {
    yi(() => vt(Hc(s), Ac(s)), [s]);
  }(r), gr(Bo, { children: [n, U(Vc, { content: e }), i] });
}
function Vc({ content: n }) {
  const [e] = Me(), t = function(i) {
    const [s, o] = gt(() => xo(i));
    return yi(() => {
      function a() {
        const l = xo(i);
        o(l);
      }
      return a(), vt(i.registerUpdateListener(() => {
        a();
      }), i.registerEditableListener(() => {
        a();
      }));
    }, [i]), s;
  }(e), r = _c();
  return t ? typeof n == "function" ? n(r) : n : null;
}
const pl = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Kt : me;
function Zc({ editor: n, ariaActiveDescendant: e, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: s, ariaExpanded: o, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: u, ariaMultiline: c, ariaOwns: f, ariaRequired: d, autoCapitalize: m, className: h, id: _, role: y = "textbox", spellCheck: v = !0, style: g, tabIndex: p, "data-testid": b, ...S }, x) {
  const [C, E] = gt(n.isEditable()), w = Hr((I) => {
    I && I.ownerDocument && I.ownerDocument.defaultView ? n.setRootElement(I) : n.setRootElement(null);
  }, [n]), A = _n(() => /* @__PURE__ */ function(...I) {
    return (D) => {
      I.forEach((R) => {
        typeof R == "function" ? R(D) : R != null && (R.current = D);
      });
    };
  }(x, w), [w, x]);
  return pl(() => (E(n.isEditable()), n.registerEditableListener((I) => {
    E(I);
  })), [n]), U("div", { "aria-activedescendant": C ? e : void 0, "aria-autocomplete": C ? t : "none", "aria-controls": C ? r : void 0, "aria-describedby": i, ...s != null ? { "aria-errormessage": s } : {}, "aria-expanded": C && y === "combobox" ? !!o : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": u, "aria-multiline": c, "aria-owns": C ? f : void 0, "aria-readonly": !C || void 0, "aria-required": d, autoCapitalize: m, className: h, contentEditable: C, "data-testid": b, id: _, ref: A, role: C ? y : void 0, spellCheck: v, style: g, tabIndex: p, ...S });
}
const Yc = Uo(Zc);
function vo(n) {
  return n.getEditorState().read(il(n.isComposing()));
}
const Xc = Uo(Qc);
function Qc(n, e) {
  const { placeholder: t, ...r } = n, [i] = Me();
  return gr(Bo, { children: [U(Yc, { editor: i, ...r, ref: e }), t != null && U(ed, { editor: i, content: t })] });
}
function ed({ content: n, editor: e }) {
  const t = function(o) {
    const [a, l] = gt(() => vo(o));
    return pl(() => {
      function u() {
        const c = vo(o);
        l(c);
      }
      return u(), vt(o.registerUpdateListener(() => {
        u();
      }), o.registerEditableListener(() => {
        u();
      }));
    }, [o]), a;
  }(e), [r, i] = gt(e.isEditable());
  if (Kt(() => (i(e.isEditable()), e.registerEditableListener((o) => {
    i(o);
  })), [e]), !t)
    return null;
  let s = null;
  return typeof n == "function" ? s = n(r) : n !== null && (s = n), s === null ? null : U("div", { "aria-hidden": !0, children: s });
}
const zn = 0, bi = 1, xi = 2, we = 0, td = 1, So = 2, nd = 3, rd = 4;
function id(n, e, t, r, i) {
  if (n === null || t.size === 0 && r.size === 0 && !i)
    return we;
  const s = e._selection, o = n._selection;
  if (i)
    return td;
  if (!(N(s) && N(o) && o.isCollapsed() && s.isCollapsed()))
    return we;
  const a = function(v, g, p) {
    const b = v._nodeMap, S = [];
    for (const x of g) {
      const C = b.get(x);
      C !== void 0 && S.push(C);
    }
    for (const [x, C] of p) {
      if (!C)
        continue;
      const E = b.get(x);
      E === void 0 || oe(E) || S.push(E);
    }
    return S;
  }(e, t, r);
  if (a.length === 0)
    return we;
  if (a.length > 1) {
    const v = e._nodeMap, g = v.get(s.anchor.key), p = v.get(o.anchor.key);
    return g && p && !n._nodeMap.has(g.__key) && F(g) && g.__text.length === 1 && s.anchor.offset === 1 ? So : we;
  }
  const l = a[0], u = n._nodeMap.get(l.__key);
  if (!F(u) || !F(l) || u.__mode !== l.__mode)
    return we;
  const c = u.__text, f = l.__text;
  if (c === f)
    return we;
  const d = s.anchor, m = o.anchor;
  if (d.key !== m.key || d.type !== "text")
    return we;
  const h = d.offset, _ = m.offset, y = f.length - c.length;
  return y === 1 && _ === h - 1 ? So : y === -1 && _ === h + 1 ? nd : y === -1 && _ === h ? rd : we;
}
function sd(n, e) {
  let t = Date.now(), r = we;
  return (i, s, o, a, l, u) => {
    const c = Date.now();
    if (u.has("historic"))
      return r = we, t = c, xi;
    const f = id(i, s, a, l, n.isComposing()), d = (() => {
      const m = o === null || o.editor === n, h = u.has("history-push");
      if (!h && m && u.has("history-merge"))
        return zn;
      if (i === null)
        return bi;
      const _ = s._selection;
      return a.size > 0 || l.size > 0 ? h === !1 && f !== we && f === r && c < t + e && m || a.size === 1 && function(y, v, g) {
        const p = v._nodeMap.get(y), b = g._nodeMap.get(y), S = v._selection, x = g._selection;
        return !(N(S) && N(x) && S.anchor.type === "element" && S.focus.type === "element" && x.anchor.type === "text" && x.focus.type === "text" || !F(p) || !F(b) || p.__parent !== b.__parent) && JSON.stringify(v.read(() => p.exportJSON())) === JSON.stringify(g.read(() => b.exportJSON()));
      }(Array.from(a)[0], i, s) ? zn : bi : _ !== null ? zn : xi;
    })();
    return t = c, r = f, d;
  };
}
function wo(n) {
  n.undoStack = [], n.redoStack = [], n.current = null;
}
function od(n, e, t) {
  const r = sd(n, t);
  return vt(n.registerCommand(Li, () => (function(s, o) {
    const a = o.redoStack, l = o.undoStack;
    if (l.length !== 0) {
      const u = o.current, c = l.pop();
      u !== null && (a.push(u), s.dispatchCommand(Fn, !0)), l.length === 0 && s.dispatchCommand(On, !1), o.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(n, e), !0), M), n.registerCommand(Ii, () => (function(s, o) {
    const a = o.redoStack, l = o.undoStack;
    if (a.length !== 0) {
      const u = o.current;
      u !== null && (l.push(u), s.dispatchCommand(On, !0));
      const c = a.pop();
      a.length === 0 && s.dispatchCommand(Fn, !1), o.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(n, e), !0), M), n.registerCommand(vu, () => (wo(e), !1), M), n.registerCommand(Su, () => (wo(e), n.dispatchCommand(Fn, !1), n.dispatchCommand(On, !1), !0), M), n.registerUpdateListener(({ editorState: s, prevEditorState: o, dirtyLeaves: a, dirtyElements: l, tags: u }) => {
    const c = e.current, f = e.redoStack, d = e.undoStack, m = c === null ? null : c.editorState;
    if (c !== null && s === m)
      return;
    const h = r(o, s, c, a, l, u);
    if (h === bi)
      f.length !== 0 && (e.redoStack = [], n.dispatchCommand(Fn, !1)), c !== null && (d.push({ ...c }), n.dispatchCommand(On, !0));
    else if (h === xi)
      return;
    e.current = { editor: n, editorState: s };
  }));
}
function ad() {
  return { current: null, redoStack: [], undoStack: [] };
}
function ld({ delay: n, externalHistoryState: e }) {
  const [t] = Me();
  return function(r, i, s = 1e3) {
    const o = _n(() => i || ad(), [i]);
    me(() => od(r, o, s), [s, r, o]);
  }(t, e, n), null;
}
const ud = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Kt : me;
function cd({ ignoreHistoryMergeTagChange: n = !0, ignoreSelectionChange: e = !1, onChange: t }) {
  const [r] = Me();
  return ud(() => {
    if (t)
      return r.registerUpdateListener(({ editorState: i, dirtyElements: s, dirtyLeaves: o, prevEditorState: a, tags: l }) => {
        e && s.size === 0 && o.size === 0 || n && l.has("history-merge") || a.isEmpty() || t(i, r, l);
      });
  }, [r, n, e, t]), null;
}
function vi(n, e) {
  return vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, vi(n, e);
}
var Co = { error: null }, dd = function(n) {
  var e, t;
  function r() {
    for (var s, o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return (s = n.call.apply(n, [this].concat(a)) || this).state = Co, s.resetErrorBoundary = function() {
      for (var u, c = arguments.length, f = new Array(c), d = 0; d < c; d++)
        f[d] = arguments[d];
      s.props.onReset == null || (u = s.props).onReset.apply(u, f), s.reset();
    }, s;
  }
  t = n, (e = r).prototype = Object.create(t.prototype), e.prototype.constructor = e, vi(e, t), r.getDerivedStateFromError = function(s) {
    return { error: s };
  };
  var i = r.prototype;
  return i.reset = function() {
    this.setState(Co);
  }, i.componentDidCatch = function(s, o) {
    var a, l;
    (a = (l = this.props).onError) == null || a.call(l, s, o);
  }, i.componentDidUpdate = function(s, o) {
    var a, l, u, c, f = this.state.error, d = this.props.resetKeys;
    f !== null && o.error !== null && ((u = s.resetKeys) === void 0 && (u = []), (c = d) === void 0 && (c = []), u.length !== c.length || u.some(function(m, h) {
      return !Object.is(m, c[h]);
    })) && ((a = (l = this.props).onResetKeysChange) == null || a.call(l, s.resetKeys, d), this.reset());
  }, i.render = function() {
    var s = this.state.error, o = this.props, a = o.fallbackRender, l = o.FallbackComponent, u = o.fallback;
    if (s !== null) {
      var c = { error: s, resetErrorBoundary: this.resetErrorBoundary };
      if (Wn.isValidElement(u))
        return u;
      if (typeof a == "function")
        return a(c);
      if (l)
        return Wn.createElement(l, c);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, r;
}(Wn.Component);
function fd({ children: n, onError: e }) {
  return U(dd, { fallback: U("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: e, children: n });
}
class Tr extends He {
  constructor(t, r, i) {
    super(r, i);
    le(this, "__className");
    this.__className = t;
  }
  static getType() {
    return "emoji";
  }
  static clone(t) {
    return new Tr(t.__className, t.__text, t.__key);
  }
  createDOM(t) {
    const r = document.createElement("span"), i = super.createDOM(t);
    return r.className = this.__className, i.className = "emoji-inner", r.appendChild(i), r;
  }
  updateDOM(t, r, i) {
    const s = r.firstChild;
    return s === null ? !0 : (super.updateDOM(t, s, i), !1);
  }
  static importJSON(t) {
    return gd(
      t.className,
      t.text
    ).updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      className: this.getClassName()
    };
  }
  getClassName() {
    return this.getLatest().__className;
  }
}
function gd(n, e) {
  const t = new Tr(n, e).setMode("token");
  return _e(t);
}
const hd = Wn.lazy(() => import("./EquationComponent-WFtfOs3I.js"));
function pd(n) {
  let e = n.getAttribute("data-lexical-equation");
  const t = n.getAttribute("data-lexical-inline") === "true";
  return e = atob(e || ""), e ? { node: Nr(e, t) } : null;
}
class St extends Ui {
  constructor(t, r, i) {
    super(i);
    le(this, "__equation");
    le(this, "__initialFocus");
    this.__equation = t, this.__initialFocus = r ?? !1;
  }
  static getType() {
    return "equation";
  }
  static clone(t) {
    return new St(t.__equation, t.__initialFocus, t.__key);
  }
  static importJSON(t) {
    return Nr(
      t.equation,
      t.initialFocus
    ).updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      equation: this.getEquation(),
      initialFocus: this.__initialFocus
    };
  }
  createDOM(t) {
    const r = document.createElement("span");
    return r.style.display = "inline-block", r.className = "editor-equation", r;
  }
  exportDOM() {
    const t = document.createElement("span"), r = btoa(this.__equation);
    return t.setAttribute("data-lexical-equation", r), { element: t };
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-equation") ? {
        conversion: pd,
        priority: 1
      } : null
    };
  }
  updateDOM() {
    return !1;
  }
  getTextContent() {
    return this.__equation;
  }
  getEquation() {
    return this.__equation;
  }
  setEquation(t) {
    const r = this.getWritable();
    r.__equation = t;
  }
  setInitialFocus(t) {
    const r = this.getWritable();
    r.__initialFocus = t;
  }
  decorate() {
    return /* @__PURE__ */ U(
      hd,
      {
        equation: this.__equation,
        initialFocus: this.__initialFocus,
        nodeKey: this.__key
      }
    );
  }
}
function Nr(n = "", e = !1) {
  return new St(n, e);
}
function md(n) {
  return n instanceof St;
}
const _d = (n) => {
  const t = new RegExp("(?<=^|\\s)(\\d+)([/*\\-+^])(?=\\s|$)").exec(n);
  if (!t)
    return null;
  const r = t[1], i = t[2], s = r + i;
  return {
    value: r,
    // Теперь здесь только число
    operator: i,
    // Отдельное поле для оператора
    fullMatch: s,
    // Полное совпадение
    index: t.index,
    length: s.length
  };
}, Eo = "$", yd = {
  "/": (n) => `\\frac{${n}}{\\placeholder{}}`,
  "^": (n) => `${n}^\\placeholder{}`
}, bd = (n, e, t) => {
  const r = yd[e];
  let i;
  return r ? i = r(n) : i = t, `${Eo}${i}${Eo}`;
}, ml = sa();
function xd(n, e, t) {
  const r = n.getTextContent(), i = _d(r);
  if (!i)
    return null;
  const { fullMatch: s, index: o, length: a, value: l, operator: u } = i;
  let c, f;
  o === 0 ? [c, f] = n.splitText(o + a) : [, c, f] = n.splitText(o, o + a);
  const d = bd(l, u, s);
  return c.remove(), t.dispatchCommand(ml, {
    equation: d,
    initialFocus: e === "keyboard"
    /* KEYBOARD */
  }), f && f.getTextContent().length > 0 ? f : null;
}
function vd() {
  const [n] = Me(), e = Wo(
    "keyboard"
    /* KEYBOARD */
  );
  return me(() => {
    if (!n.hasNodes([St]))
      throw new Error("EquationsPlugins: EquationsNode not registered on editor");
  }, [n]), me(() => vt(
    n.registerCommand(
      ml,
      (t) => {
        const { equation: r, initialFocus: i } = t, s = Nr(r, i);
        return Ia([s]), ve(s.getParentOrThrow()) && Nc(s, Q).selectEnd(), !0;
      },
      M
    ),
    n.registerCommand(
      mr,
      () => (e.current = "paste", !1),
      di
    ),
    n.registerCommand(
      aa,
      () => (e.current = "keyboard", !1),
      di
    ),
    n.registerNodeTransform(He, (t) => {
      let r = t;
      for (; r !== null; ) {
        if (!r.isSimpleText())
          return;
        r = xd(
          r,
          e.current,
          n
        );
      }
    })
  ), [n]), null;
}
function lt(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e)
    r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Sd(n) {
  let e = 1, t = n.getParent();
  for (; t != null; ) {
    if (ie(t)) {
      const r = t.getParent();
      if (B(r)) {
        e++, t = r.getParent();
        continue;
      }
      lt(40);
    }
    return e;
  }
  return e;
}
function Le(n) {
  return ie(n) && B(n.getFirstChild());
}
function ko(n) {
  return De().append(n);
}
function _l(n, e) {
  n.splice(n.getChildrenSize(), 0, e);
}
function cs(n, e) {
  const t = n.getLastChild(), r = e.getFirstChild();
  t && r && Le(t) && Le(r) && (cs(t.getFirstChild(), r.getFirstChild()), r.remove());
  const i = e.getChildren();
  i.length > 0 && n.append(...i), e.remove();
}
function wd(n) {
  const e = /* @__PURE__ */ new Set();
  if (Le(n) || e.has(n.getKey()))
    return;
  const t = n.getParent(), r = n.getNextSibling(), i = n.getPreviousSibling();
  if (Le(r) && Le(i)) {
    const s = i.getFirstChild();
    if (B(s)) {
      s.append(n);
      const o = r.getFirstChild();
      B(o) && (_l(s, o.getChildren()), r.remove(), e.add(r.getKey()));
    }
  } else if (Le(r)) {
    const s = r.getFirstChild();
    if (B(s)) {
      const o = s.getFirstChild();
      o !== null && o.insertBefore(n);
    }
  } else if (Le(i)) {
    const s = i.getFirstChild();
    B(s) && s.append(n);
  } else if (B(t)) {
    const s = De().setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle()), o = Ee(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    s.append(o), o.append(n), i ? i.insertAfter(s) : r ? r.insertBefore(s) : t.append(s);
  }
}
function Cd(n) {
  if (Le(n))
    return;
  const e = n.getParent(), t = e ? e.getParent() : void 0;
  if (B(t ? t.getParent() : void 0) && ie(t) && B(e)) {
    const r = e ? e.getFirstChild() : void 0, i = e ? e.getLastChild() : void 0;
    if (n.is(r))
      t.insertBefore(n), e.isEmpty() && t.remove();
    else if (n.is(i))
      t.insertAfter(n), e.isEmpty() && t.remove();
    else {
      const s = e.getListType(), o = De(), a = Ee(s);
      o.append(a), n.getPreviousSiblings().forEach((c) => a.append(c));
      const l = De(), u = Ee(s);
      l.append(u), _l(u, n.getNextSiblings()), t.insertBefore(o), t.insertAfter(l), t.replace(n);
    }
  }
}
function dr(...n) {
  const e = [];
  for (const t of n)
    if (t && typeof t == "string")
      for (const [r] of t.matchAll(/\S+/g))
        e.push(r);
  return e;
}
function To(n, e, t) {
  const r = oo(e.__textStyle);
  for (const i in r)
    n.style.setProperty(`--listitem-marker-${i}`, r[i]);
  if (t)
    for (const i in oo(t.__textStyle))
      i in r || n.style.removeProperty(`--listitem-marker-${i}`);
}
let Ar = class yl extends ze {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new yl(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, r) {
    super(r), this.__value = e === void 0 ? 1 : e, this.__checked = t;
  }
  createDOM(e) {
    const t = document.createElement("li"), r = this.getParent();
    B(r) && r.getListType() === "check" && Ao(t, this, null), t.value = this.__value, No(t, e.theme, this);
    const i = this.__style;
    return i && (t.style.cssText = i), To(t, this, null), t;
  }
  updateDOM(e, t, r) {
    const i = this.getParent();
    B(i) && i.getListType() === "check" && Ao(t, this, e), t.value = this.__value, No(t, r.theme, this);
    const s = e.__style, o = this.__style;
    return s !== o && (o === "" ? t.removeAttribute("style") : t.style.cssText = o), To(t, this, e), !1;
  }
  static transform() {
    return (e) => {
      if (ie(e) || lt(144), e.__checked == null)
        return;
      const t = e.getParent();
      B(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: Ed, priority: 0 }) };
  }
  static importJSON(e) {
    return De().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setValue(e.value).setChecked(e.checked);
  }
  exportDOM(e) {
    const t = this.createDOM(e._config);
    t.style.textAlign = this.getFormatType();
    const r = this.getDirection();
    return r && (t.dir = r), { element: t };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), value: this.getValue() };
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (k(r) && this.canMergeWith(r)) {
        const i = r.getChildren();
        this.append(...i), r.remove();
      } else
        super.append(r);
    }
    return this;
  }
  replace(e, t) {
    if (ie(e))
      return super.replace(e);
    this.setIndent(0);
    const r = this.getParentOrThrow();
    if (!B(r))
      return e;
    if (r.__first === this.getKey())
      r.insertBefore(e);
    else if (r.__last === this.getKey())
      r.insertAfter(e);
    else {
      const i = Ee(r.getListType());
      let s = this.getNextSibling();
      for (; s; ) {
        const o = s;
        s = s.getNextSibling(), i.append(o);
      }
      r.insertAfter(e), e.insertAfter(i);
    }
    return t && (k(e) || lt(139), this.getChildren().forEach((i) => {
      e.append(i);
    })), this.remove(), r.getChildrenSize() === 0 && r.remove(), e;
  }
  insertAfter(e, t = !0) {
    const r = this.getParentOrThrow();
    if (B(r) || lt(39), ie(e))
      return super.insertAfter(e, t);
    const i = this.getNextSiblings();
    if (r.insertAfter(e, t), i.length !== 0) {
      const s = Ee(r.getListType());
      i.forEach((o) => s.append(o)), e.insertAfter(s, t);
    }
    return e;
  }
  remove(e) {
    const t = this.getPreviousSibling(), r = this.getNextSibling();
    super.remove(e), t && r && Le(t) && Le(r) && (cs(t.getFirstChild(), r.getFirstChild()), r.remove());
  }
  insertNewAfter(e, t = !0) {
    const r = De().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(r, t), r;
  }
  collapseAtStart(e) {
    const t = Q();
    this.getChildren().forEach((o) => t.append(o));
    const r = this.getParentOrThrow(), i = r.getParentOrThrow(), s = ie(i);
    if (r.getChildrenSize() === 1)
      if (s)
        r.remove(), i.select();
      else {
        r.insertBefore(t), r.remove();
        const o = e.anchor, a = e.focus, l = t.getKey();
        o.type === "element" && o.getNode().is(this) && o.set(l, o.offset, "element"), a.type === "element" && a.getNode().is(this) && a.set(l, a.offset, "element");
      }
    else
      r.insertBefore(t), this.remove();
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(e) {
    const t = this.getWritable();
    return t.__value = e, t;
  }
  getChecked() {
    const e = this.getLatest();
    let t;
    const r = this.getParent();
    return B(r) && (t = r.getListType()), t === "check" ? !!e.__checked : void 0;
  }
  setChecked(e) {
    const t = this.getWritable();
    return t.__checked = e, t;
  }
  toggleChecked() {
    const e = this.getWritable();
    return e.setChecked(!e.__checked);
  }
  getIndent() {
    const e = this.getParent();
    if (e === null || !this.isAttached())
      return this.getLatest().__indent;
    let t = e.getParentOrThrow(), r = 0;
    for (; ie(t); )
      t = t.getParentOrThrow().getParentOrThrow(), r++;
    return r;
  }
  setIndent(e) {
    typeof e != "number" && lt(117), (e = Math.floor(e)) >= 0 || lt(199);
    let t = this.getIndent();
    for (; t !== e; )
      t < e ? (wd(this), t++) : (Cd(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return ie(e);
  }
  canReplaceWith(e) {
    return ie(e);
  }
  canMergeWith(e) {
    return ie(e) || Ba(e);
  }
  extractWithChild(e, t) {
    if (!N(t))
      return !1;
    const r = t.anchor.getNode(), i = t.focus.getNode();
    return this.isParentOf(r) && this.isParentOf(i) && this.getTextContent().length === t.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return Ee("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function No(n, e, t) {
  const r = [], i = [], s = e.list, o = s ? s.listitem : void 0;
  let a;
  if (s && s.nested && (a = s.nested.listitem), o !== void 0 && r.push(...dr(o)), s) {
    const l = t.getParent(), u = B(l) && l.getListType() === "check", c = t.getChecked();
    u && !c || i.push(s.listitemUnchecked), u && c || i.push(s.listitemChecked), u && r.push(c ? s.listitemChecked : s.listitemUnchecked);
  }
  if (a !== void 0) {
    const l = dr(a);
    t.getChildren().some((u) => B(u)) ? r.push(...l) : i.push(...l);
  }
  i.length > 0 && kr(n, ...i), r.length > 0 && Te(n, ...r);
}
function Ao(n, e, t, r) {
  B(e.getFirstChild()) ? (n.removeAttribute("role"), n.removeAttribute("tabIndex"), n.removeAttribute("aria-checked")) : (n.setAttribute("role", "checkbox"), n.setAttribute("tabIndex", "-1"), t && e.__checked === t.__checked || n.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function Ed(n) {
  if (n.classList.contains("task-list-item")) {
    for (const t of n.children)
      if (t.tagName === "INPUT")
        return kd(t);
  }
  const e = n.getAttribute("aria-checked");
  return { node: De(e === "true" || e !== "false" && void 0) };
}
function kd(n) {
  return n.getAttribute("type") !== "checkbox" ? { node: null } : { node: De(n.hasAttribute("checked")) };
}
function De(n) {
  return _e(new Ar(void 0, n));
}
function ie(n) {
  return n instanceof Ar;
}
class Vt extends ze {
  static getType() {
    return "list";
  }
  static clone(e) {
    const t = e.__listType || Lo[e.__tag];
    return new Vt(t, e.__start, e.__key);
  }
  constructor(e = "number", t = 1, r) {
    super(r);
    const i = Lo[e] || e;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = t;
  }
  getTag() {
    return this.__tag;
  }
  setListType(e) {
    const t = this.getWritable();
    return t.__listType = e, t.__tag = e === "number" ? "ol" : "ul", t;
  }
  getListType() {
    return this.__listType;
  }
  getStart() {
    return this.__start;
  }
  setStart(e) {
    const t = this.getWritable();
    return t.__start = e, t;
  }
  createDOM(e, t) {
    const r = this.__tag, i = document.createElement(r);
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, Fo(i, e.theme, this), i;
  }
  updateDOM(e, t, r) {
    return e.__tag !== this.__tag || (Fo(t, r.theme, this), !1);
  }
  static transform() {
    return (e) => {
      B(e) || lt(163), function(t) {
        const r = t.getNextSibling();
        B(r) && t.getListType() === r.getListType() && cs(t, r);
      }(e), function(t) {
        const r = t.getListType() !== "check";
        let i = t.getStart();
        for (const s of t.getChildren())
          ie(s) && (s.getValue() !== i && s.setValue(i), r && s.getLatest().__checked != null && s.setChecked(void 0), B(s.getFirstChild()) || i++);
      }(e);
    };
  }
  static importDOM() {
    return { ol: () => ({ conversion: Oo, priority: 0 }), ul: () => ({ conversion: Oo, priority: 0 }) };
  }
  static importJSON(e) {
    return Ee().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setListType(e.listType).setStart(e.start);
  }
  exportDOM(e) {
    const t = this.createDOM(e._config, e);
    return V(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
  }
  exportJSON() {
    return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag() };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  splice(e, t, r) {
    let i = r;
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      ie(o) || (i === r && (i = [...r]), i[s] = De().append(!k(o) || B(o) || o.isInline() ? o : G(o.getTextContent())));
    }
    return super.splice(e, t, i);
  }
  extractWithChild(e) {
    return ie(e);
  }
}
function Fo(n, e, t) {
  const r = [], i = [], s = e.list;
  if (s !== void 0) {
    const o = s[`${t.__tag}Depth`] || [], a = Sd(t) - 1, l = a % o.length, u = o[l], c = s[t.__tag];
    let f;
    const d = s.nested, m = s.checklist;
    if (d !== void 0 && d.list && (f = d.list), c !== void 0 && r.push(c), m !== void 0 && t.__listType === "check" && r.push(m), u !== void 0) {
      r.push(...dr(u));
      for (let h = 0; h < o.length; h++)
        h !== l && i.push(t.__tag + h);
    }
    if (f !== void 0) {
      const h = dr(f);
      a > 1 ? r.push(...h) : i.push(...h);
    }
  }
  i.length > 0 && kr(n, ...i), r.length > 0 && Te(n, ...r);
}
function Td(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (ie(r)) {
      e.push(r);
      const i = r.getChildren();
      i.length > 1 && i.forEach((s) => {
        B(s) && e.push(ko(s));
      });
    } else
      e.push(ko(r));
  }
  return e;
}
function Oo(n) {
  const e = n.nodeName.toLowerCase();
  let t = null;
  return e === "ol" ? t = Ee("number", n.start) : e === "ul" && (t = function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list"))
      return !0;
    for (const i of r.childNodes)
      if (V(i) && i.hasAttribute("aria-checked"))
        return !0;
    return !1;
  }(n) ? Ee("check") : Ee("bullet")), { after: Td, node: t };
}
const Lo = { ol: "number", ul: "bullet" };
function Ee(n = "number", e = 1) {
  return _e(new Vt(n, e));
}
function B(n) {
  return n instanceof Vt;
}
var Nd = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, s = 0, o = {}, a = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function g(p) {
          return p instanceof l ? new l(p.type, g(p.content), p.alias) : Array.isArray(p) ? p.map(g) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(g) {
          return Object.prototype.toString.call(g).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(g) {
          return g.__id || Object.defineProperty(g, "__id", { value: ++s }), g.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function g(p, b) {
          b = b || {};
          var S, x;
          switch (a.util.type(p)) {
            case "Object":
              if (x = a.util.objId(p), b[x])
                return b[x];
              S = /** @type {Record<string, any>} */
              {}, b[x] = S;
              for (var C in p)
                p.hasOwnProperty(C) && (S[C] = g(p[C], b));
              return (
                /** @type {any} */
                S
              );
            case "Array":
              return x = a.util.objId(p), b[x] ? b[x] : (S = [], b[x] = S, p.forEach(function(E, w) {
                S[w] = g(E, b);
              }), /** @type {any} */
              S);
            default:
              return p;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(g) {
          for (; g; ) {
            var p = i.exec(g.className);
            if (p)
              return p[1].toLowerCase();
            g = g.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(g, p) {
          g.className = g.className.replace(RegExp(i, "gi"), ""), g.classList.add("language-" + p);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (S) {
            var g = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
            if (g) {
              var p = document.getElementsByTagName("script");
              for (var b in p)
                if (p[b].src == g)
                  return p[b];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(g, p, b) {
          for (var S = "no-" + p; g; ) {
            var x = g.classList;
            if (x.contains(p))
              return !0;
            if (x.contains(S))
              return !1;
            g = g.parentElement;
          }
          return !!b;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: o,
        plaintext: o,
        text: o,
        txt: o,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(g, p) {
          var b = a.util.clone(a.languages[g]);
          for (var S in p)
            b[S] = p[S];
          return b;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(g, p, b, S) {
          S = S || /** @type {any} */
          a.languages;
          var x = S[g], C = {};
          for (var E in x)
            if (x.hasOwnProperty(E)) {
              if (E == p)
                for (var w in b)
                  b.hasOwnProperty(w) && (C[w] = b[w]);
              b.hasOwnProperty(E) || (C[E] = x[E]);
            }
          var A = S[g];
          return S[g] = C, a.languages.DFS(a.languages, function(I, D) {
            D === A && I != g && (this[I] = C);
          }), C;
        },
        // Traverse a language definition with Depth First Search
        DFS: function g(p, b, S, x) {
          x = x || {};
          var C = a.util.objId;
          for (var E in p)
            if (p.hasOwnProperty(E)) {
              b.call(p, E, p[E], S || E);
              var w = p[E], A = a.util.type(w);
              A === "Object" && !x[C(w)] ? (x[C(w)] = !0, g(w, b, null, x)) : A === "Array" && !x[C(w)] && (x[C(w)] = !0, g(w, b, E, x));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(g, p) {
        a.highlightAllUnder(document, g, p);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(g, p, b) {
        var S = {
          callback: b,
          container: g,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), a.hooks.run("before-all-elements-highlight", S);
        for (var x = 0, C; C = S.elements[x++]; )
          a.highlightElement(C, p === !0, S.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(g, p, b) {
        var S = a.util.getLanguage(g), x = a.languages[S];
        a.util.setLanguage(g, S);
        var C = g.parentElement;
        C && C.nodeName.toLowerCase() === "pre" && a.util.setLanguage(C, S);
        var E = g.textContent, w = {
          element: g,
          language: S,
          grammar: x,
          code: E
        };
        function A(D) {
          w.highlightedCode = D, a.hooks.run("before-insert", w), w.element.innerHTML = w.highlightedCode, a.hooks.run("after-highlight", w), a.hooks.run("complete", w), b && b.call(w.element);
        }
        if (a.hooks.run("before-sanity-check", w), C = w.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !w.code) {
          a.hooks.run("complete", w), b && b.call(w.element);
          return;
        }
        if (a.hooks.run("before-highlight", w), !w.grammar) {
          A(a.util.encode(w.code));
          return;
        }
        if (p && r.Worker) {
          var I = new Worker(a.filename);
          I.onmessage = function(D) {
            A(D.data);
          }, I.postMessage(JSON.stringify({
            language: w.language,
            code: w.code,
            immediateClose: !0
          }));
        } else
          A(a.highlight(w.code, w.grammar, w.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(g, p, b) {
        var S = {
          code: g,
          grammar: p,
          language: b
        };
        if (a.hooks.run("before-tokenize", S), !S.grammar)
          throw new Error('The language "' + S.language + '" has no grammar.');
        return S.tokens = a.tokenize(S.code, S.grammar), a.hooks.run("after-tokenize", S), l.stringify(a.util.encode(S.tokens), S.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(g, p) {
        var b = p.rest;
        if (b) {
          for (var S in b)
            p[S] = b[S];
          delete p.rest;
        }
        var x = new f();
        return d(x, x.head, g), c(g, x, p, x.head, 0), h(x);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(g, p) {
          var b = a.hooks.all;
          b[g] = b[g] || [], b[g].push(p);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(g, p) {
          var b = a.hooks.all[g];
          if (!(!b || !b.length))
            for (var S = 0, x; x = b[S++]; )
              x(p);
        }
      },
      Token: l
    };
    r.Prism = a;
    function l(g, p, b, S) {
      this.type = g, this.content = p, this.alias = b, this.length = (S || "").length | 0;
    }
    l.stringify = function g(p, b) {
      if (typeof p == "string")
        return p;
      if (Array.isArray(p)) {
        var S = "";
        return p.forEach(function(A) {
          S += g(A, b);
        }), S;
      }
      var x = {
        type: p.type,
        content: g(p.content, b),
        tag: "span",
        classes: ["token", p.type],
        attributes: {},
        language: b
      }, C = p.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(x.classes, C) : x.classes.push(C)), a.hooks.run("wrap", x);
      var E = "";
      for (var w in x.attributes)
        E += " " + w + '="' + (x.attributes[w] || "").replace(/"/g, "&quot;") + '"';
      return "<" + x.tag + ' class="' + x.classes.join(" ") + '"' + E + ">" + x.content + "</" + x.tag + ">";
    };
    function u(g, p, b, S) {
      g.lastIndex = p;
      var x = g.exec(b);
      if (x && S && x[1]) {
        var C = x[1].length;
        x.index += C, x[0] = x[0].slice(C);
      }
      return x;
    }
    function c(g, p, b, S, x, C) {
      for (var E in b)
        if (!(!b.hasOwnProperty(E) || !b[E])) {
          var w = b[E];
          w = Array.isArray(w) ? w : [w];
          for (var A = 0; A < w.length; ++A) {
            if (C && C.cause == E + "," + A)
              return;
            var I = w[A], D = I.inside, R = !!I.lookbehind, P = !!I.greedy, $ = I.alias;
            if (P && !I.pattern.global) {
              var J = I.pattern.toString().match(/[imsuy]*$/)[0];
              I.pattern = RegExp(I.pattern.source, J + "g");
            }
            for (var q = I.pattern || I, W = S.next, H = x; W !== p.tail && !(C && H >= C.reach); H += W.value.length, W = W.next) {
              var ye = W.value;
              if (p.length > g.length)
                return;
              if (!(ye instanceof l)) {
                var it = 1, ae;
                if (P) {
                  if (ae = u(q, H, g, R), !ae || ae.index >= g.length)
                    break;
                  var pe = ae.index, Zt = ae.index + ae[0].length, he = H;
                  for (he += W.value.length; pe >= he; )
                    W = W.next, he += W.value.length;
                  if (he -= W.value.length, H = he, W.value instanceof l)
                    continue;
                  for (var Ae = W; Ae !== p.tail && (he < Zt || typeof Ae.value == "string"); Ae = Ae.next)
                    it++, he += Ae.value.length;
                  it--, ye = g.slice(H, he), ae.index -= H;
                } else if (ae = u(q, 0, ye, R), !ae)
                  continue;
                var pe = ae.index, Ve = ae[0], Be = ye.slice(0, pe), st = ye.slice(pe + Ve.length), wt = H + ye.length;
                C && wt > C.reach && (C.reach = wt);
                var Tn = W.prev;
                Be && (Tn = d(p, Tn, Be), H += Be.length), m(p, Tn, it);
                var Al = new l(E, D ? a.tokenize(Ve, D) : Ve, $, Ve);
                if (W = d(p, Tn, Al), st && d(p, W, st), it > 1) {
                  var Fr = {
                    cause: E + "," + A,
                    reach: wt
                  };
                  c(g, p, b, W.prev, H, Fr), C && Fr.reach > C.reach && (C.reach = Fr.reach);
                }
              }
            }
          }
        }
    }
    function f() {
      var g = { value: null, prev: null, next: null }, p = { value: null, prev: g, next: null };
      g.next = p, this.head = g, this.tail = p, this.length = 0;
    }
    function d(g, p, b) {
      var S = p.next, x = { value: b, prev: p, next: S };
      return p.next = x, S.prev = x, g.length++, x;
    }
    function m(g, p, b) {
      for (var S = p.next, x = 0; x < b && S !== g.tail; x++)
        S = S.next;
      p.next = S, S.prev = p, g.length -= x;
    }
    function h(g) {
      for (var p = [], b = g.head.next; b !== g.tail; )
        p.push(b.value), b = b.next;
      return p;
    }
    if (!r.document)
      return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(g) {
        var p = JSON.parse(g.data), b = p.language, S = p.code, x = p.immediateClose;
        r.postMessage(a.highlight(S, a.languages[b], b)), x && r.close();
      }, !1)), a;
    var _ = a.util.currentScript();
    _ && (a.filename = _.src, _.hasAttribute("data-manual") && (a.manual = !0));
    function y() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var v = document.readyState;
      v === "loading" || v === "interactive" && _ && _.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return a;
  }(e);
  n.exports && (n.exports = t), typeof window < "u" && (window.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(i, s) {
      var o = {};
      o["language-" + s] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[s]
      }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: o
        }
      };
      a["language-" + s] = {
        pattern: /[\s\S]+/,
        inside: t.languages[s]
      };
      var l = {};
      l[i] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return i;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, t.languages.insertBefore("markup", "cdata", l);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, i) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [i, "language-" + i],
                inside: t.languages[i]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + i.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: i,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var s = r.languages.markup;
    s && (s.tag.addInlined("style", "css"), s.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", i = function(_, y) {
      return "✖ Error " + _ + " while fetching file: " + y;
    }, s = "✖ Error: File does not exist or is empty", o = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, a = "data-src-status", l = "loading", u = "loaded", c = "failed", f = "pre[data-src]:not([" + a + '="' + u + '"]):not([' + a + '="' + l + '"])';
    function d(_, y, v) {
      var g = new XMLHttpRequest();
      g.open("GET", _, !0), g.onreadystatechange = function() {
        g.readyState == 4 && (g.status < 400 && g.responseText ? y(g.responseText) : g.status >= 400 ? v(i(g.status, g.statusText)) : v(s));
      }, g.send(null);
    }
    function m(_) {
      var y = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_ || "");
      if (y) {
        var v = Number(y[1]), g = y[2], p = y[3];
        return g ? p ? [v, Number(p)] : [v, void 0] : [v, v];
      }
    }
    t.hooks.add("before-highlightall", function(_) {
      _.selector += ", " + f;
    }), t.hooks.add("before-sanity-check", function(_) {
      var y = (
        /** @type {HTMLPreElement} */
        _.element
      );
      if (y.matches(f)) {
        _.code = "", y.setAttribute(a, l);
        var v = y.appendChild(document.createElement("CODE"));
        v.textContent = r;
        var g = y.getAttribute("data-src"), p = _.language;
        if (p === "none") {
          var b = (/\.(\w+)$/.exec(g) || [, "none"])[1];
          p = o[b] || b;
        }
        t.util.setLanguage(v, p), t.util.setLanguage(y, p);
        var S = t.plugins.autoloader;
        S && S.loadLanguages(p), d(
          g,
          function(x) {
            y.setAttribute(a, u);
            var C = m(y.getAttribute("data-range"));
            if (C) {
              var E = x.split(/\r\n?|\n/g), w = C[0], A = C[1] == null ? E.length : C[1];
              w < 0 && (w += E.length), w = Math.max(0, Math.min(w - 1, E.length)), A < 0 && (A += E.length), A = Math.max(0, Math.min(A, E.length)), x = E.slice(w, A).join(`
`), y.hasAttribute("data-start") || y.setAttribute("data-start", String(w + 1));
            }
            v.textContent = x, t.highlightElement(v);
          },
          function(x) {
            y.setAttribute(a, c), v.textContent = x;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(y) {
        for (var v = (y || document).querySelectorAll(f), g = 0, p; p = v[g++]; )
          t.highlightElement(p);
      }
    };
    var h = !1;
    t.fileHighlight = function() {
      h || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), h = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Nd);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(n) {
  n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(e, t) {
    var r = {};
    r["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var i = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: r
      }
    };
    i["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var s = {};
    s[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: i
    }, Prism.languages.insertBefore("markup", "cdata", s);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(n, e) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [e, "language-" + e],
              inside: Prism.languages[e]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(n) {
  var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(c) {
    return c = c.replace(/<inner>/g, function() {
      return e;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + c + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), s = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: n.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + i + s + "(?:" + i + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + i + s + ")(?:" + i + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(r),
              inside: n.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + i + ")" + s + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + i + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(r),
              alias: "important",
              inside: n.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(c) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
      c !== f && (n.languages.markdown[c].inside.content.inside[f] = n.languages.markdown[f]);
    });
  }), n.hooks.add("after-tokenize", function(c) {
    if (c.language !== "markdown" && c.language !== "md")
      return;
    function f(d) {
      if (!(!d || typeof d == "string"))
        for (var m = 0, h = d.length; m < h; m++) {
          var _ = d[m];
          if (_.type !== "code") {
            f(_.content);
            continue;
          }
          var y = _.content[1], v = _.content[3];
          if (y && v && y.type === "code-language" && v.type === "code-block" && typeof y.content == "string") {
            var g = y.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            g = (/[a-z][\w-]*/i.exec(g) || [""])[0].toLowerCase();
            var p = "language-" + g;
            v.alias ? typeof v.alias == "string" ? v.alias = [v.alias, p] : v.alias.push(p) : v.alias = [p];
          }
        }
    }
    f(c.tokens);
  }), n.hooks.add("wrap", function(c) {
    if (c.type === "code-block") {
      for (var f = "", d = 0, m = c.classes.length; d < m; d++) {
        var h = c.classes[d], _ = /language-(.+)/.exec(h);
        if (_) {
          f = _[1];
          break;
        }
      }
      var y = n.languages[f];
      if (y)
        c.content = n.highlight(u(c.content), y, f);
      else if (f && f !== "none" && n.plugins.autoloader) {
        var v = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        c.attributes.id = v, n.plugins.autoloader.loadLanguages(f, function() {
          var g = document.getElementById(v);
          g && (g.innerHTML = n.highlight(g.textContent, n.languages[f], f));
        });
      }
    }
  });
  var o = RegExp(n.languages.markup.tag.pattern.source, "gi"), a = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, l = String.fromCodePoint || String.fromCharCode;
  function u(c) {
    var f = c.replace(o, "");
    return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(d, m) {
      if (m = m.toLowerCase(), m[0] === "#") {
        var h;
        return m[1] === "x" ? h = parseInt(m.slice(2), 16) : h = Number(m.slice(1)), l(h);
      } else {
        var _ = a[m];
        return _ || d;
      }
    }), f;
  }
  n.languages.md = n.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(n) {
  var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  n.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + e.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: e,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, n.languages.css.atrule.inside.rest = n.languages.css;
  var t = n.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(n) {
  var e = n.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  e.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: e
    },
    boolean: e.boolean,
    variable: e.variable
  };
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(n) {
  for (var e = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    e = e.replace(/<self>/g, function() {
      return e;
    });
  e = e.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), n.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + e),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, n.languages.rust["closure-params"].inside.rest = n.languages.rust, n.languages.rust.attribute.inside.string = n.languages.rust.string;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(n) {
  n.inside.interpolation.inside = Prism.languages.swift;
});
(function(n) {
  n.languages.typescript = n.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), n.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete n.languages.typescript.parameter, delete n.languages.typescript["literal-property"];
  var e = n.languages.extend("typescript", {});
  delete e["class-name"], n.languages.typescript["class-name"].inside = e, n.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: e
        }
      }
    }
  }), n.languages.ts = n.languages.typescript;
})(Prism);
(function(n) {
  var e = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
    pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  n.languages.java = n.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      r,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: r.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: r.inside
      }
    ],
    keyword: e,
    function: [
      n.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), n.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), n.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": r,
        keyword: e,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: r.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: r.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return e.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(n) {
  var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return e.source;
  });
  n.languages.cpp = n.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return e.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: e,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), n.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return t;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), n.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: n.languages.cpp
        }
      }
    }
  }), n.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), n.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: n.languages.extend("cpp", {})
    }
  }), n.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, n.languages.cpp["base-clause"]);
})(Prism);
const Ad = globalThis.Prism || window.Prism, Io = (n) => {
  try {
    return !!n && Ad.languages.hasOwnProperty(n);
  } catch {
    return !1;
  }
};
function bl(n, e) {
  for (const t of n.childNodes) {
    if (V(t) && t.tagName === e)
      return !0;
    bl(t, e);
  }
  return !1;
}
const rn = "data-language", Bn = "data-highlight-language";
class En extends ze {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new En(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t), this.__language = e || void 0, this.__isSyntaxHighlightSupported = Io(e);
  }
  createDOM(e) {
    const t = document.createElement("code");
    Te(t, e.theme.code), t.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (t.setAttribute(rn, r), this.getIsSyntaxHighlightSupported() && t.setAttribute(Bn, r)), t;
  }
  updateDOM(e, t, r) {
    const i = this.__language, s = e.__language;
    return i ? i !== s && (t.setAttribute(rn, i), this.__isSyntaxHighlightSupported && t.setAttribute(Bn, i)) : s && (t.removeAttribute(rn), e.__isSyntaxHighlightSupported && t.removeAttribute(Bn)), !1;
  }
  exportDOM(e) {
    const t = document.createElement("pre");
    Te(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (t.setAttribute(rn, r), this.getIsSyntaxHighlightSupported() && t.setAttribute(Bn, r)), { element: t };
  }
  static importDOM() {
    return { code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || bl(e, "BR")) ? { conversion: Po, priority: 1 } : null, div: () => ({ conversion: Fd, priority: 1 }), pre: () => ({ conversion: Po, priority: 0 }), table: (e) => qr(e) ? { conversion: Od, priority: 3 } : null, td: (e) => {
      const t = e, r = t.closest("table");
      return t.classList.contains("js-file-line") || r && qr(r) ? { conversion: $o, priority: 3 } : null;
    }, tr: (e) => {
      const t = e.closest("table");
      return t && qr(t) ? { conversion: $o, priority: 3 } : null;
    } };
  }
  static importJSON(e) {
    return qe().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setLanguage(e.language);
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage() };
  }
  insertNewAfter(e, t = !0) {
    const r = this.getChildren(), i = r.length;
    if (i >= 2 && r[i - 1].getTextContent() === `
` && r[i - 2].getTextContent() === `
` && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === i) {
      r[i - 1].remove(), r[i - 2].remove();
      const l = Q();
      return this.insertAfter(l, t), l;
    }
    const { anchor: s, focus: o } = e, a = (s.isBefore(o) ? s : o).getNode();
    if (F(a)) {
      let l = Id(a);
      const u = [];
      for (; ; )
        if (Ri(l))
          u.push(Jt()), l = l.getNextSibling();
        else {
          if (!wl(l))
            break;
          {
            let y = 0;
            const v = l.getTextContent(), g = l.getTextContentSize();
            for (; y < g && v[y] === " "; )
              y++;
            if (y !== 0 && u.push(Sl(" ".repeat(y))), y !== g)
              break;
            l = l.getNextSibling();
          }
        }
      const c = a.splitText(s.offset)[0], f = s.offset === 0 ? 0 : 1, d = c.getIndexWithinParent() + f, m = a.getParentOrThrow(), h = [$e(), ...u];
      m.splice(d, 0, h);
      const _ = u[u.length - 1];
      _ ? _.select() : s.offset === 0 ? c.selectPrevious() : c.getNextSibling().selectNext(0, 0);
    }
    if (ds(a)) {
      const { offset: l } = e.anchor;
      a.splice(l, 0, [$e()]), a.select(l + 1, l + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const e = Q();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  setLanguage(e) {
    const t = this.getWritable();
    return t.__language = e || void 0, t.__isSyntaxHighlightSupported = Io(e), t;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
}
function qe(n) {
  return _e(new En(n));
}
function ds(n) {
  return n instanceof En;
}
function Po(n) {
  return { node: qe(n.getAttribute(rn)) };
}
function Fd(n) {
  const e = n, t = Ro(e);
  return t || function(r) {
    let i = r.parentElement;
    for (; i !== null; ) {
      if (Ro(i))
        return !0;
      i = i.parentElement;
    }
    return !1;
  }(e) ? { node: t ? qe() : null } : { node: null };
}
function Od() {
  return { node: qe() };
}
function $o() {
  return { node: null };
}
function Ro(n) {
  return n.style.fontFamily.match("monospace") !== null;
}
function qr(n) {
  return n.classList.contains("js-file-line-container");
}
let xl = class vl extends He {
  constructor(e = "", t, r) {
    super(e, r), this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new vl(e.__text, e.__highlightType || void 0, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  setHighlightType(e) {
    const t = this.getWritable();
    return t.__highlightType = e || void 0, t;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(e) {
    const t = super.createDOM(e), r = jr(e.theme, this.__highlightType);
    return Te(t, r), t;
  }
  updateDOM(e, t, r) {
    const i = super.updateDOM(e, t, r), s = jr(r.theme, e.__highlightType), o = jr(r.theme, this.__highlightType);
    return s !== o && (s && kr(t, s), o && Te(t, o)), i;
  }
  static importJSON(e) {
    return Sl().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setHighlightType(e.highlightType);
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType() };
  }
  setFormat(e) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return qe();
  }
};
function jr(n, e) {
  return e && n && n.codeHighlight && n.codeHighlight[e];
}
function Sl(n = "", e) {
  return _e(new xl(n, e));
}
function wl(n) {
  return n instanceof xl;
}
function Ld(n, e) {
  let t = n;
  for (let r = ne(n, e); r && (wl(r.origin) || Ri(r.origin)); r = kc(r))
    t = r.origin;
  return t;
}
function Id(n) {
  return Ld(n, "previous");
}
const Pd = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
let fs = class Cl extends ze {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new Cl(e.__url, { rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  constructor(e = "", t = {}, r) {
    super(r);
    const { target: i = null, rel: s = null, title: o = null } = t;
    this.__url = e, this.__target = i, this.__rel = s, this.__title = o;
  }
  createDOM(e) {
    const t = document.createElement("a");
    return t.href = this.sanitizeUrl(this.__url), this.__target !== null && (t.target = this.__target), this.__rel !== null && (t.rel = this.__rel), this.__title !== null && (t.title = this.__title), Te(t, e.theme.link), t;
  }
  updateDOM(e, t, r) {
    if (Ya(t)) {
      const i = this.__url, s = this.__target, o = this.__rel, a = this.__title;
      i !== e.__url && (t.href = i), s !== e.__target && (s ? t.target = s : t.removeAttribute("target")), o !== e.__rel && (o ? t.rel = o : t.removeAttribute("rel")), a !== e.__title && (a ? t.title = a : t.removeAttribute("title"));
    }
    return !1;
  }
  static importDOM() {
    return { a: (e) => ({ conversion: $d, priority: 1 }) };
  }
  static importJSON(e) {
    return fr().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
  }
  sanitizeUrl(e) {
    try {
      const t = new URL(e);
      if (!Pd.has(t.protocol))
        return "about:blank";
    } catch {
      return e;
    }
    return e;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), url: this.getURL() };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(e) {
    const t = this.getWritable();
    return t.__url = e, t;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(e) {
    const t = this.getWritable();
    return t.__target = e, t;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(e) {
    const t = this.getWritable();
    return t.__rel = e, t;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(e) {
    const t = this.getWritable();
    return t.__title = e, t;
  }
  insertNewAfter(e, t = !0) {
    const r = fr(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(r, t), r;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(e, t, r) {
    if (!N(t))
      return !1;
    const i = t.anchor.getNode(), s = t.focus.getNode();
    return this.isParentOf(i) && this.isParentOf(s) && t.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
};
function $d(n) {
  let e = null;
  if (Ya(n)) {
    const t = n.textContent;
    (t !== null && t !== "" || n.children.length > 0) && (e = fr(n.getAttribute("href") || "", { rel: n.getAttribute("rel"), target: n.getAttribute("target"), title: n.getAttribute("title") }));
  }
  return { node: e };
}
function fr(n = "", e) {
  return _e(new fs(n, e));
}
function Rd(n) {
  return n instanceof fs;
}
function Si(n, e) {
  const t = {};
  for (const r of n) {
    const i = e(r);
    i && (t[i] ? t[i].push(r) : t[i] = [r]);
  }
  return t;
}
function Dd(n) {
  const e = Si(n, (t) => t.type);
  return { element: e.element || [], multilineElement: e["multiline-element"] || [], textFormat: e["text-format"] || [], textMatch: e["text-match"] || [] };
}
const Do = /[!-/:-@[-`{-~\s]/;
function Md(n) {
  return F(n) && !n.hasFormat("code");
}
function zd(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e)
    r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Mo(n, e, t) {
  const r = t.length;
  for (let i = e; i >= r; i--) {
    const s = i - r;
    if (El(n, s, t, 0, r) && n[s + r] !== " ")
      return s;
  }
  return -1;
}
function El(n, e, t, r, i) {
  for (let s = 0; s < i; s++)
    if (n[e + s] !== t[r + s])
      return !1;
  return !0;
}
function Bd(n, e = Nl) {
  const t = Dd(e), r = Si(t.textFormat, ({ tag: o }) => o[o.length - 1]), i = Si(t.textMatch, ({ trigger: o }) => o);
  for (const o of e) {
    const a = o.type;
    if (a === "element" || a === "text-match" || a === "multiline-element") {
      const l = o.dependencies;
      for (const u of l)
        n.hasNode(u) || zd(173, u.getType());
    }
  }
  const s = (o, a, l) => {
    (function(u, c, f, d) {
      const m = u.getParent();
      if (!ve(m) || u.getFirstChild() !== c)
        return !1;
      const h = c.getTextContent();
      if (h[f - 1] !== " ")
        return !1;
      for (const { regExp: _, replace: y } of d) {
        const v = h.match(_);
        if (v && v[0].length === (v[0].endsWith(" ") ? f : f - 1)) {
          const g = c.getNextSiblings(), [p, b] = c.splitText(f);
          if (p.remove(), y(u, b ? [b, ...g] : g, v, !1) !== !1)
            return !0;
        }
      }
      return !1;
    })(o, a, l, t.element) || function(u, c, f, d) {
      const m = u.getParent();
      if (!ve(m) || u.getFirstChild() !== c)
        return !1;
      const h = c.getTextContent();
      if (h[f - 1] !== " ")
        return !1;
      for (const { regExpStart: _, replace: y, regExpEnd: v } of d) {
        if (v && !("optional" in v) || v && "optional" in v && !v.optional)
          continue;
        const g = h.match(_);
        if (g && g[0].length === (g[0].endsWith(" ") ? f : f - 1)) {
          const p = c.getNextSiblings(), [b, S] = c.splitText(f);
          if (b.remove(), y(u, S ? [S, ...p] : p, g, null, null, !1) !== !1)
            return !0;
        }
      }
      return !1;
    }(o, a, l, t.multilineElement) || function(u, c, f) {
      let d = u.getTextContent();
      const m = f[d[c - 1]];
      if (m == null)
        return !1;
      c < d.length && (d = d.slice(0, c));
      for (const h of m) {
        if (!h.replace || !h.regExp)
          continue;
        const _ = d.match(h.regExp);
        if (_ === null)
          continue;
        const y = _.index || 0, v = y + _[0].length;
        let g;
        return y === 0 ? [g] = u.splitText(v) : [, g] = u.splitText(y, v), g.selectNext(0, 0), h.replace(g, _), !0;
      }
      return !1;
    }(a, l, i) || function(u, c, f) {
      const d = u.getTextContent(), m = c - 1, h = d[m], _ = f[h];
      if (!_)
        return !1;
      for (const y of _) {
        const { tag: v } = y, g = v.length, p = m - g + 1;
        if (g > 1 && !El(d, p, v, 0, g) || d[p - 1] === " ")
          continue;
        const b = d[m + 1];
        if (y.intraword === !1 && b && !Do.test(b))
          continue;
        const S = u;
        let x = S, C = Mo(d, p, v), E = x;
        for (; C < 0 && (E = E.getPreviousSibling()) && !Pt(E); )
          if (F(E)) {
            const q = E.getTextContent();
            x = E, C = Mo(q, q.length, v);
          }
        if (C < 0 || x === S && C + g === p)
          continue;
        const w = x.getTextContent();
        if (C > 0 && w[C - 1] === h)
          continue;
        const A = w[C - 1];
        if (y.intraword === !1 && A && !Do.test(A))
          continue;
        const I = S.getTextContent(), D = I.slice(0, p) + I.slice(m + 1);
        S.setTextContent(D);
        const R = x === S ? D : w;
        x.setTextContent(R.slice(0, C) + R.slice(C + g));
        const P = L(), $ = Di();
        fe($);
        const J = m - g * (x === S ? 2 : 1) + 1;
        $.anchor.set(x.__key, C, "text"), $.focus.set(S.__key, J, "text");
        for (const q of y.format)
          $.hasFormat(q) || $.formatText(q);
        $.anchor.set($.focus.key, $.focus.offset, $.focus.type);
        for (const q of y.format)
          $.hasFormat(q) && $.toggleFormat(q);
        return N(P) && ($.format = P.format), !0;
      }
    }(a, l, r);
  };
  return n.registerUpdateListener(({ tags: o, dirtyLeaves: a, editorState: l, prevEditorState: u }) => {
    if (o.has("collaboration") || o.has("historic") || n.isComposing())
      return;
    const c = l.read(L), f = u.read(L);
    if (!N(f) || !N(c) || !c.isCollapsed() || c.is(f))
      return;
    const d = c.anchor.key, m = c.anchor.offset, h = l._nodeMap.get(d);
    !F(h) || !a.has(d) || m !== 1 && m > f.anchor.offset + 1 || n.update(() => {
      if (!Md(h))
        return;
      const _ = h.getParent();
      _ === null || ds(_) || s(_, h, c.anchor.offset);
    });
  });
}
const Wd = /^(\s*)(\d{1,})\.\s/, Ud = /^(\s*)[-*+]\s/, Kd = /^(#{1,6})\s/, Jd = /^>\s/, qd = /^[ \t]*```(\w+)?/, jd = /[ \t]*```$/, kl = (n) => (e, t, r) => {
  const i = n(r);
  i.append(...t), e.replace(i), i.select(0, 0);
}, Tl = (n) => (e, t, r) => {
  const i = e.getPreviousSibling(), s = e.getNextSibling(), o = De(n === "check" ? r[3] === "x" : void 0);
  if (B(s) && s.getListType() === n) {
    const l = s.getFirstChild();
    l !== null ? l.insertBefore(o) : s.append(o), e.remove();
  } else if (B(i) && i.getListType() === n)
    i.append(o), e.remove();
  else {
    const l = Ee(n, n === "number" ? Number(r[2]) : void 0);
    l.append(o), e.replace(l);
  }
  o.append(...t), o.select(0, 0);
  const a = function(l) {
    const u = l.match(/\t/g), c = l.match(/ /g);
    let f = 0;
    return u && (f += u.length), c && (f += Math.floor(c.length / 4)), f;
  }(r[1]);
  a && o.setIndent(a);
}, gs = (n, e, t) => {
  const r = [], i = n.getChildren();
  let s = 0;
  for (const o of i)
    if (ie(o)) {
      if (o.getChildrenSize() === 1) {
        const c = o.getFirstChild();
        if (B(c)) {
          r.push(gs(c, e, t + 1));
          continue;
        }
      }
      const a = " ".repeat(4 * t), l = n.getListType(), u = l === "number" ? `${n.getStart() + s}. ` : l === "check" ? `- [${o.getChecked() ? "x" : " "}] ` : "- ";
      r.push(a + u + e(o)), s++;
    }
  return r.join(`
`);
}, Hd = { dependencies: [us], export: (n, e) => {
  if (!jc(n))
    return null;
  const t = Number(n.getTag().slice(1));
  return "#".repeat(t) + " " + e(n);
}, regExp: Kd, replace: kl((n) => {
  const e = "h" + n[1].length;
  return Ft(e);
}), type: "element" }, Gd = { dependencies: [as], export: (n, e) => {
  if (!_o(n))
    return null;
  const t = e(n).split(`
`), r = [];
  for (const i of t)
    r.push("> " + i);
  return r.join(`
`);
}, regExp: Jd, replace: (n, e, t, r) => {
  if (r) {
    const s = n.getPreviousSibling();
    if (_o(s))
      return s.splice(s.getChildrenSize(), 0, [$e(), ...e]), s.select(0, 0), void n.remove();
  }
  const i = ls();
  i.append(...e), n.replace(i), i.select(0, 0);
}, type: "element" }, Vd = { dependencies: [En], export: (n) => {
  if (!ds(n))
    return null;
  const e = n.getTextContent();
  return "```" + (n.getLanguage() || "") + (e ? `
` + e : "") + "\n```";
}, regExpEnd: { optional: !0, regExp: jd }, regExpStart: qd, replace: (n, e, t, r, i, s) => {
  let o, a;
  if (!e && i) {
    if (i.length === 1)
      r ? (o = qe(), a = t[1] + i[0]) : (o = qe(t[1]), a = i[0].startsWith(" ") ? i[0].slice(1) : i[0]);
    else {
      if (o = qe(t[1]), i[0].trim().length === 0)
        for (; i.length > 0 && !i[0].length; )
          i.shift();
      else
        i[0] = i[0].startsWith(" ") ? i[0].slice(1) : i[0];
      for (; i.length > 0 && !i[i.length - 1].length; )
        i.pop();
      a = i.join(`
`);
    }
    const l = G(a);
    o.append(l), n.append(o);
  } else
    e && kl((l) => qe(l ? l[1] : void 0))(n, e, t, s);
}, type: "multiline-element" }, Zd = { dependencies: [Vt, Ar], export: (n, e) => B(n) ? gs(n, e, 0) : null, regExp: Ud, replace: Tl("bullet"), type: "element" }, Yd = { dependencies: [Vt, Ar], export: (n, e) => B(n) ? gs(n, e, 0) : null, regExp: Wd, replace: Tl("number"), type: "element" }, Xd = { format: ["code"], tag: "`", type: "text-format" }, Qd = { format: ["highlight"], tag: "==", type: "text-format" }, ef = { format: ["bold", "italic"], tag: "***", type: "text-format" }, tf = { format: ["bold", "italic"], intraword: !1, tag: "___", type: "text-format" }, nf = { format: ["bold"], tag: "**", type: "text-format" }, rf = { format: ["bold"], intraword: !1, tag: "__", type: "text-format" }, sf = { format: ["strikethrough"], tag: "~~", type: "text-format" }, of = { format: ["italic"], tag: "*", type: "text-format" }, af = { format: ["italic"], intraword: !1, tag: "_", type: "text-format" }, lf = { dependencies: [fs], export: (n, e, t) => {
  if (!Rd(n))
    return null;
  const r = n.getTitle(), i = e(n);
  return r ? `[${i}](${n.getURL()} "${r}")` : `[${i}](${n.getURL()})`;
}, importRegExp: /(?:\[([^[]+)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/, regExp: /(?:\[([^[]+)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/, replace: (n, e) => {
  const [, t, r, i] = e, s = fr(r, { title: i }), o = G(t);
  return o.setFormat(n.getFormat()), s.append(o), n.replace(s), o;
}, trigger: ")", type: "text-match" }, uf = [Hd, Gd, Zd, Yd], cf = [Vd], df = [Xd, ef, tf, nf, rf, Qd, of, af, sf], ff = [lf], Nl = [...uf, ...cf, ...df, ...ff];
function zo(n, e) {
  return n.getEditorState().read(() => {
    const t = X(e);
    return t !== null && t.isSelected();
  });
}
function gf(n) {
  const [e] = Me(), [t, r] = gt(() => zo(e, n));
  return me(() => {
    let i = !0;
    const s = e.registerUpdateListener(() => {
      i && r(zo(e, n));
    });
    return () => {
      i = !1, s();
    };
  }, [e, n]), [t, Hr((i) => {
    e.update(() => {
      let s = L();
      re(s) || (s = Mi(), fe(s)), re(s) && (i ? s.add(n) : s.delete(n));
    });
  }, [e, n]), Hr(() => {
    e.update(() => {
      const i = L();
      re(i) && i.clear();
    });
  }, [e])];
}
function hf({ nodeKey: n }) {
  const [e] = Me(), [t, r, i] = gf(n);
  return me(() => vt(e.registerCommand(Oi, (s) => {
    const o = e.getElementByKey(n);
    return s.target === o && (s.shiftKey || i(), r(!t), !0);
  }, di)), [i, e, t, n, r]), me(() => {
    const s = e.getElementByKey(n), o = e._config.theme.hrSelected ?? "selected";
    s !== null && (t ? Te(s, o) : kr(s, o));
  }, [e, t, n]), null;
}
class kn extends Ui {
  static getType() {
    return "horizontalrule";
  }
  static clone(e) {
    return new kn(e.__key);
  }
  static importJSON(e) {
    return hs().updateFromJSON(e);
  }
  static importDOM() {
    return { hr: () => ({ conversion: pf, priority: 0 }) };
  }
  exportDOM() {
    return { element: document.createElement("hr") };
  }
  createDOM(e) {
    const t = document.createElement("hr");
    return Te(t, e.theme.hr), t;
  }
  getTextContent() {
    return `
`;
  }
  isInline() {
    return !1;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return U(hf, { nodeKey: this.__key });
  }
}
function pf() {
  return { node: hs() };
}
function hs() {
  return _e(new kn());
}
function mf(n) {
  return n instanceof kn;
}
const _f = [{ dependencies: [kn], export: (n) => mf(n) ? "***" : null, regExp: /^(---|\*\*\*|___)\s?$/, replace: (n, e, t, r) => {
  const i = hs();
  r || n.getNextSibling() != null ? n.replace(i) : n.insertBefore(i), i.selectNext();
}, type: "element" }, ...Nl];
function yf({ transformers: n = _f }) {
  const [e] = Me();
  return me(() => Bd(e, n), [e, n]), null;
}
const bf = {
  dependencies: [St],
  export: (n) => md(n) ? `$${n.getEquation()}$` : null,
  //importRegExp: /\$([^$]+?)\$/,
  regExp: /\$([^$]+?)\$/,
  replace: (n, e) => {
    const [, t] = e, r = Nr(t, !0);
    n.replace(r);
  },
  trigger: "$",
  type: "text-match"
}, xf = [bf];
function vf() {
  return /* @__PURE__ */ U(yf, { transformers: xf });
}
function Sf() {
  return /* @__PURE__ */ U(hc, { initialConfig: {
    namespace: "MyEditor",
    theme: {
      root: "lexical-editor",
      text: {
        bold: "lexical-text-bold",
        italic: "lexical-text-italic",
        underline: "lexical-text-underline"
      },
      paragraph: "lexical-paragraph"
    },
    nodes: [Tr, St],
    onError: (t) => {
      console.error("Lexical Editor Error:", t);
    }
  }, children: /* @__PURE__ */ gr("div", { className: "editor-wrapper", children: [
    /* @__PURE__ */ U(
      Gc,
      {
        contentEditable: /* @__PURE__ */ U(Xc, { className: "editor-input" }),
        placeholder: /* @__PURE__ */ U("div", { className: "editor-placeholder", children: "Введите текст..." }),
        ErrorBoundary: fd
      }
    ),
    /* @__PURE__ */ U(vd, {}),
    /* @__PURE__ */ U(ld, {}),
    /* @__PURE__ */ U(vf, {}),
    /* @__PURE__ */ U(cd, { onChange: (t) => {
      t.read(() => {
      });
    } })
  ] }) });
}
function wf() {
  return /* @__PURE__ */ gr("div", { className: "app", children: [
    /* @__PURE__ */ U("h1", { children: "Мой текстовый редактор" }),
    /* @__PURE__ */ U(Sf, {})
  ] });
}
const Cf = document.getElementById("root");
console.log("index");
const Ef = en.createRoot(Cf);
Ef.render(
  /* @__PURE__ */ U(Ll.StrictMode, { children: /* @__PURE__ */ U(wf, {}) })
);
export {
  md as $,
  Ff as A,
  Di as C,
  Ba as N,
  di as P,
  fe as a,
  Oi as b,
  N as c,
  re as d,
  sa as e,
  vt as j,
  X as n,
  Me as o,
  gf as u,
  aa as v,
  L as w
};
//# sourceMappingURL=index-DHSS-Q2Q.js.map
