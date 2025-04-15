import { jsx as C, Fragment as q } from "react/jsx-runtime";
import "//unpkg.com/mathlive";
import { o as L, u as U, j as M, A as N, n as g, w as k, c as j, N as y, C as R, a as V, v as z, b as W, P as $, d as Y, e as B, $ as G } from "./index-DHSS-Q2Q.js";
import { useState as S, useRef as J, useCallback as h, useEffect as m } from "react";
import './EquationComponent.css';const K = "_MathField_1tgyv_1", Q = "_Focused_1tgyv_9", v = {
  MathField: K,
  Focused: Q
};
function P(a) {
  var n, l, r = "";
  if (typeof a == "string" || typeof a == "number")
    r += a;
  else if (typeof a == "object")
    if (Array.isArray(a))
      for (n = 0; n < a.length; n++)
        a[n] && (l = P(a[n])) && (r && (r += " "), r += l);
    else
      for (n in a)
        a[n] && (r && (r += " "), r += n);
  return r;
}
function X() {
  for (var a, n, l = 0, r = ""; l < arguments.length; )
    (a = arguments[l++]) && (n = P(a)) && (r && (r += " "), r += n);
  return r;
}
const x = B();
function ne({
  equation: a,
  nodeKey: n,
  initialFocus: l
}) {
  const [r] = L(), [w] = S(!1), [T, D] = S(null), [_, E, p] = U(n), u = J(null), b = h(
    (e) => M(
      e.registerCommand(
        x,
        (t) => {
          if ((t == null ? void 0 : t.nodeKey) !== n)
            return !1;
          const s = u.current;
          return s ? (e.blur(), s.focus(), t.cursorPosition === "end" && s.executeCommand("moveToMathfieldEnd"), t.cursorPosition === "start" && s.executeCommand("moveToMathfieldStart"), !0) : !1;
        },
        N
      )
    ),
    [n]
  );
  m(() => {
    l && r.update(() => {
      const e = g(n);
      if (e) {
        const t = e.getWritable();
        t.__initialFocus = !1;
      }
    });
  }, [l, r, n]), m(() => {
    if (u.current === null)
      return;
    const e = u.current;
    e.value = a;
  }, [a]);
  const A = h((e, t) => {
    var c;
    if (!((c = e.target.dataset) != null && c.lexicalEditor))
      return !1;
    const o = k();
    if (!j(o) || o.isCollapsed() === !1)
      return !1;
    const i = o.anchor.getNode();
    if (e.key === "ArrowLeft") {
      let f = null;
      if (y(i)) {
        if (o.anchor.offset === 0)
          return !1;
        f = i.getChildAtIndex(o.anchor.offset - 1);
      } else
        o.anchor.offset === 0 && (f = i.getPreviousSibling());
      if (!f)
        return !1;
      if (f && f.__type === "equation")
        return t.dispatchCommand(x, {
          nodeKey: f.__key,
          cursorPosition: "end"
        }), e.preventDefault(), !0;
    }
    if (e.key === "ArrowRight") {
      let f = null;
      if (y(i)) {
        if (console.log("111", o.anchor.offset, i.getChildrenSize()), o.anchor.offset === i.getChildrenSize())
          return !1;
        f = i.getChildAtIndex(o.anchor.offset), console.log("node", f);
      } else
        o.anchor.offset === i.getTextContent().length && (f = i.getNextSibling());
      if (!f)
        return !1;
      if (f && f.__type === "equation")
        return t.dispatchCommand(x, {
          nodeKey: f.__key,
          cursorPosition: "start"
        }), e.preventDefault(), !0;
    }
    return !1;
  }, []), d = h(
    (e, t = "after") => {
      if (!e)
        return;
      const s = e.getParent();
      if (!s)
        return;
      const o = s.getChildren().indexOf(e), i = R();
      t === "after" ? (i.anchor.set(s.__key, o + 1, "element"), i.focus.set(s.__key, o + 1, "element")) : (i.anchor.set(s.__key, o, "element"), i.focus.set(s.__key, o, "element")), V(i), r.focus();
    },
    [r]
  ), F = h(
    (e) => {
      const t = e.target, s = t.selection, o = t.value, i = t.dataset.key;
      if (!i)
        return !1;
      const c = g(i);
      if (!c)
        return !1;
      if (e.key === "ArrowLeft")
        return s.ranges[0][0] === 0 && s.ranges[0][1] === 0 ? (t.blur(), d(c, "before"), !0) : !1;
      if (e.key === "ArrowRight") {
        const f = t.getValue(0, s.ranges[0][1]);
        return o.length === f.length ? (t.blur(), d(c, "after"), !0) : !1;
      }
      return !1;
    },
    [d]
  );
  m(() => M(
    r.registerUpdateListener(({ editorState: e }) => {
      D(e.read(() => k()));
    }),
    r.registerCommand(
      W,
      (e) => {
        const t = e;
        return t.target === u.current ? (t.shiftKey || p(), E(!_), !0) : !1;
      },
      $
    ),
    r.registerCommand(
      z,
      (e) => {
        const t = e.target;
        return console.log("KEY_DOWN_COMMAND"), t.tagName === "MATH-FIELD" ? F(e, r) : A(e, r);
      },
      N
    )
  ), [
    p,
    r,
    _,
    n,
    A,
    F,
    E,
    w
  ]), m(() => {
    b(r);
  }, [r, b]);
  const I = Y(T) && _, O = (e) => {
    r.update(() => {
      const t = g(n);
      console.log("changeHandler", t, e), G(t) && t.setEquation(e);
    });
  }, H = () => {
    r.update(() => {
      const e = g(n);
      e && d(e, "after");
    });
  };
  return /* @__PURE__ */ C(q, { children: /* @__PURE__ */ C("span", { className: X(v.MathField, I && v.Focused), children: /* @__PURE__ */ C(
    "math-field",
    {
      onInput: (e) => O(e.target.value),
      "data-key": n,
      ref: (e) => {
        if (e === null)
          return;
        const t = e;
        t.value = a, l && (t == null || t.focus(), a.includes("placeholder{}") ? t == null || t.executeCommand("moveToNextPlaceholder") : t == null || t.executeCommand("moveToMathfieldEnd")), t.onchange = (s) => {
          const o = s.target;
          return console.log("onchange", o, o.value), o.blur(), setTimeout(() => {
            H();
          }, 0), s.stopPropagation(), !1;
        }, u.current = e;
      },
      tabIndex: -1
    }
  ) }) });
}
export {
  x as FOCUS_CUSTOM_INPUT_COMMAND,
  ne as default
};
//# sourceMappingURL=EquationComponent-WFtfOs3I.js.map
