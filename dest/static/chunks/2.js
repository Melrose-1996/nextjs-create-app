(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/MarkFdownRenderer.jsx":
/*!******************************************!*\
  !*** ./components/MarkFdownRenderer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! github-markdown-css */ "./node_modules/github-markdown-css/github-markdown.css");
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\MarkFdownRenderer.jsx",
    _s = $RefreshSig$();

 // 具体渲染内容都是跟 props 有关，如果 props 没有变化，则无需重新渲染


 // html: true -- 当传递了这个参数会把我们的 html 中的内容转化成 html
// linkify: true -- 当 html 里面有链接就会转化为可以点击的链接

var md = new markdown_it__WEBPACK_IMPORTED_MODULE_2___default.a({
  html: true,
  linkify: true
}); // 中文解码

function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function markdownRenderer(_ref) {
  _s();

  var content = _ref.content,
      isBase64 = _ref.isBase64;
  var markdown = isBase64 ? b64_to_utf8(content) : content; // markdown 的内容没有变化，则 html 的内容就不会变化(md.render 转化过程比较耗时)

  var html = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return md.render(markdown);
  }, [markdown]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "markdown-body",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}, "OtathaP3BKVCXaZtVNvoS+3QIcY=")));

var _c, _c2;

$RefreshReg$(_c, "%default%$memo");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/entities/lib/maps/entities.json":
/*!******************************************************!*\
  !*** ./node_modules/entities/lib/maps/entities.json ***!
  \******************************************************/
/*! exports provided: Aacute, aacute, Abreve, abreve, ac, acd, acE, Acirc, acirc, acute, Acy, acy, AElig, aelig, af, Afr, afr, Agrave, agrave, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp, AMP, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos, ApplyFunction, approx, approxeq, Aring, aring, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde, atilde, Auml, auml, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil, ccedil, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil, Cedilla, cemptyv, cent, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy, COPY, copysr, CounterClockwiseContourIntegral, crarr, cross, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute, eacute, easter, Ecaron, ecaron, Ecirc, ecirc, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave, egrave, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH, eth, Euml, euml, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12, frac13, frac14, frac15, frac16, frac18, frac23, frac25, frac34, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt, GT, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute, iacute, ic, Icirc, icirc, Icy, icy, Idot, IEcy, iecy, iexcl, iff, ifr, Ifr, Igrave, igrave, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in, infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml, iuml, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt, LT, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr, male, malt, maltese, Map, map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro, midast, midcir, mid, middot, minusb, minus, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde, ntilde, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute, oacute, oast, Ocirc, ocirc, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve, ograve, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf, ordm, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash, oslash, osol, Otilde, otilde, otimesas, Otimes, otimes, Ouml, ouml, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot, QUOT, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg, REG, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1, sup2, sup3, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN, thorn, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute, uacute, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc, ucirc, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave, ugrave, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml, uuml, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute, yacute, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

/***/ }),

/***/ "./node_modules/github-markdown-css/github-markdown.css":
/*!**************************************************************!*\
  !*** ./node_modules/github-markdown-css/github-markdown.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./github-markdown.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/github-markdown-css/github-markdown.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./github-markdown.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/github-markdown-css/github-markdown.css",
      function () {
        content = __webpack_require__(/*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./github-markdown.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/github-markdown-css/github-markdown.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/linkify-it/index.js":
/*!******************************************!*\
  !*** ./node_modules/linkify-it/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(/*! ./lib/re */ "./node_modules/linkify-it/lib/re.js")(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;


/***/ }),

/***/ "./node_modules/linkify-it/lib/re.js":
/*!*******************************************!*\
  !*** ./node_modules/linkify-it/lib/re.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __webpack_require__(/*! uc.micro/properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js").source;
  re.src_Cc  = __webpack_require__(/*! uc.micro/categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js").source;
  re.src_Z   = __webpack_require__(/*! uc.micro/categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js").source;
  re.src_P   = __webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js").source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
                                     // github has ... in commit range links,
                                     // Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // - params separator
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          '\\,(?!' + re.src_ZCc + ').|' +       // allow `,,,` in paths
          '\\!+(?!' + re.src_ZCc + '|[!]).|' +  // allow `!!!` in paths, but not at the end
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common
  re.src_email_name =

    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};


/***/ }),

/***/ "./node_modules/markdown-it/index.js":
/*!*******************************************!*\
  !*** ./node_modules/markdown-it/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = __webpack_require__(/*! ./lib/ */ "./node_modules/markdown-it/lib/index.js");


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/entities.js":
/*!*********************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/entities.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// HTML5 entities map: { name -> utf16string }
//


/*eslint quotes:0*/
module.exports = __webpack_require__(/*! entities/lib/maps/entities.json */ "./node_modules/entities/lib/maps/entities.json");


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/html_blocks.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/html_blocks.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks




module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/html_re.js":
/*!********************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/html_re.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Regexps to match html elements



var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing  = '<[?][\\s\\S]*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

module.exports.HTML_TAG_RE = HTML_TAG_RE;
module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Utilities
//



function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}


var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

var entities = __webpack_require__(/*! ./entities */ "./node_modules/markdown-it/lib/common/entities.js");

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  }

  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }

  return match;
}

/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

function unescapeAll(str) {
  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
    if (escaped) { return escaped; }
    return replaceEntityPattern(match, entity);
  });
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////

function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
}

// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) { return true; }
  switch (code) {
    case 0x09: // \t
    case 0x0A: // \n
    case 0x0B: // \v
    case 0x0C: // \f
    case 0x0D: // \r
    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/
var UNICODE_PUNCT_RE = __webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js");

// Currently without astral characters support.
function isPunctChar(ch) {
  return UNICODE_PUNCT_RE.test(ch);
}


// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21/* ! */:
    case 0x22/* " */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x27/* ' */:
    case 0x28/* ( */:
    case 0x29/* ) */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2C/* , */:
    case 0x2D/* - */:
    case 0x2E/* . */:
    case 0x2F/* / */:
    case 0x3A/* : */:
    case 0x3B/* ; */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x3F/* ? */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7C/* | */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

// Hepler to unify [reference labels].
//
function normalizeReference(str) {
  // Trim and collapse whitespace
  //
  str = str.trim().replace(/\s+/g, ' ');

  // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
  // fixed in v12 (couldn't find any details).
  //
  // So treat this one as a special case
  // (remove this when node v10 is no longer supported).
  //
  if ('ẞ'.toLowerCase() === 'Ṿ') {
    str = str.replace(/ẞ/g, 'ß');
  }

  // .toLowerCase().toUpperCase() should get rid of all differences
  // between letter variants.
  //
  // Simple .toLowerCase() doesn't normalize 125 code points correctly,
  // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
  // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
  // uppercased versions).
  //
  // Here's an example showing how it happens. Lets take greek letter omega:
  // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
  //
  // Unicode entries:
  // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
  // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
  // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
  // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
  //
  // Case-insensitive comparison should treat all of them as equivalent.
  //
  // But .toLowerCase() doesn't change ϑ (it's already lowercase),
  // and .toUpperCase() doesn't change ϴ (already uppercase).
  //
  // Applying first lower then upper case normalizes any character:
  // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
  //
  // Note: this is equivalent to unicode case folding; unicode normalization
  // is a different step that is not required here.
  //
  // Final result should be uppercased, because it's later stored in an object
  // (this avoid a conflict with Object.prototype members,
  // most notably, `__proto__`)
  //
  return str.toLowerCase().toUpperCase();
}

////////////////////////////////////////////////////////////////////////////////

// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib                 = {};
exports.lib.mdurl           = __webpack_require__(/*! mdurl */ "./node_modules/mdurl/index.js");
exports.lib.ucmicro         = __webpack_require__(/*! uc.micro */ "./node_modules/uc.micro/index.js");

exports.assign              = assign;
exports.isString            = isString;
exports.has                 = has;
exports.unescapeMd          = unescapeMd;
exports.unescapeAll         = unescapeAll;
exports.isValidEntityCode   = isValidEntityCode;
exports.fromCodePoint       = fromCodePoint;
// exports.replaceEntities     = replaceEntities;
exports.escapeHtml          = escapeHtml;
exports.arrayReplaceAt      = arrayReplaceAt;
exports.isSpace             = isSpace;
exports.isWhiteSpace        = isWhiteSpace;
exports.isMdAsciiPunct      = isMdAsciiPunct;
exports.isPunctChar         = isPunctChar;
exports.escapeRE            = escapeRE;
exports.normalizeReference  = normalizeReference;


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Just a shortcut for bulk export



exports.parseLinkLabel       = __webpack_require__(/*! ./parse_link_label */ "./node_modules/markdown-it/lib/helpers/parse_link_label.js");
exports.parseLinkDestination = __webpack_require__(/*! ./parse_link_destination */ "./node_modules/markdown-it/lib/helpers/parse_link_destination.js");
exports.parseLinkTitle       = __webpack_require__(/*! ./parse_link_title */ "./node_modules/markdown-it/lib/helpers/parse_link_title.js");


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/parse_link_destination.js":
/*!************************************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/parse_link_destination.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse link destination
//



var unescapeAll = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").unescapeAll;


module.exports = function parseLinkDestination(str, pos, max) {
  var code, level,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return result; }
      if (code === 0x3C /* < */) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 0x20) { break; }
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 32) { return result; }
    }

    if (code === 0x29 /* ) */) {
      if (level === 0) { break; }
      level--;
    }

    pos++;
  }

  if (start === pos) { return result; }
  if (level !== 0) { return result; }

  result.str = unescapeAll(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/parse_link_label.js":
/*!******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/parse_link_label.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//


module.exports = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/parse_link_title.js":
/*!******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/parse_link_title.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse link title
//



var unescapeAll = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").unescapeAll;


module.exports = function parseLinkTitle(str, pos, max) {
  var code,
      marker,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x28 /* ( */ && marker === 0x29 /* ) */) {
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/markdown-it/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Main parser class




var utils        = __webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js");
var helpers      = __webpack_require__(/*! ./helpers */ "./node_modules/markdown-it/lib/helpers/index.js");
var Renderer     = __webpack_require__(/*! ./renderer */ "./node_modules/markdown-it/lib/renderer.js");
var ParserCore   = __webpack_require__(/*! ./parser_core */ "./node_modules/markdown-it/lib/parser_core.js");
var ParserBlock  = __webpack_require__(/*! ./parser_block */ "./node_modules/markdown-it/lib/parser_block.js");
var ParserInline = __webpack_require__(/*! ./parser_inline */ "./node_modules/markdown-it/lib/parser_inline.js");
var LinkifyIt    = __webpack_require__(/*! linkify-it */ "./node_modules/linkify-it/index.js");
var mdurl        = __webpack_require__(/*! mdurl */ "./node_modules/mdurl/index.js");
var punycode     = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");


var config = {
  default: __webpack_require__(/*! ./presets/default */ "./node_modules/markdown-it/lib/presets/default.js"),
  zero: __webpack_require__(/*! ./presets/zero */ "./node_modules/markdown-it/lib/presets/zero.js"),
  commonmark: __webpack_require__(/*! ./presets/commonmark */ "./node_modules/markdown-it/lib/presets/commonmark.js")
};

////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();

  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
}

////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
}


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(lang, str, true).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(lang, str, true).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/
  this.linkify = new LinkifyIt();

  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/
  this.normalizeLink = normalizeLink;

  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/
  this.normalizeLinkText = normalizeLinkText;


  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = utils.assign({}, helpers);


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you will - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.enable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.disable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and return list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = MarkdownIt;


/***/ }),

/***/ "./node_modules/markdown-it/lib/parser_block.js":
/*!******************************************************!*\
  !*** ./node_modules/markdown-it/lib/parser_block.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/



var Ruler           = __webpack_require__(/*! ./ruler */ "./node_modules/markdown-it/lib/ruler.js");


var _rules = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ 'table',      __webpack_require__(/*! ./rules_block/table */ "./node_modules/markdown-it/lib/rules_block/table.js"),      [ 'paragraph', 'reference' ] ],
  [ 'code',       __webpack_require__(/*! ./rules_block/code */ "./node_modules/markdown-it/lib/rules_block/code.js") ],
  [ 'fence',      __webpack_require__(/*! ./rules_block/fence */ "./node_modules/markdown-it/lib/rules_block/fence.js"),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', __webpack_require__(/*! ./rules_block/blockquote */ "./node_modules/markdown-it/lib/rules_block/blockquote.js"), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         __webpack_require__(/*! ./rules_block/hr */ "./node_modules/markdown-it/lib/rules_block/hr.js"),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       __webpack_require__(/*! ./rules_block/list */ "./node_modules/markdown-it/lib/rules_block/list.js"),       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  __webpack_require__(/*! ./rules_block/reference */ "./node_modules/markdown-it/lib/rules_block/reference.js") ],
  [ 'html_block', __webpack_require__(/*! ./rules_block/html_block */ "./node_modules/markdown-it/lib/rules_block/html_block.js"), [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'heading',    __webpack_require__(/*! ./rules_block/heading */ "./node_modules/markdown-it/lib/rules_block/heading.js"),    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   __webpack_require__(/*! ./rules_block/lheading */ "./node_modules/markdown-it/lib/rules_block/lheading.js") ],
  [ 'paragraph',  __webpack_require__(/*! ./rules_block/paragraph */ "./node_modules/markdown-it/lib/rules_block/paragraph.js") ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.sCount[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }

    // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock.prototype.State = __webpack_require__(/*! ./rules_block/state_block */ "./node_modules/markdown-it/lib/rules_block/state_block.js");


module.exports = ParserBlock;


/***/ }),

/***/ "./node_modules/markdown-it/lib/parser_core.js":
/*!*****************************************************!*\
  !*** ./node_modules/markdown-it/lib/parser_core.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/



var Ruler  = __webpack_require__(/*! ./ruler */ "./node_modules/markdown-it/lib/ruler.js");


var _rules = [
  [ 'normalize',      __webpack_require__(/*! ./rules_core/normalize */ "./node_modules/markdown-it/lib/rules_core/normalize.js")      ],
  [ 'block',          __webpack_require__(/*! ./rules_core/block */ "./node_modules/markdown-it/lib/rules_core/block.js")          ],
  [ 'inline',         __webpack_require__(/*! ./rules_core/inline */ "./node_modules/markdown-it/lib/rules_core/inline.js")         ],
  [ 'linkify',        __webpack_require__(/*! ./rules_core/linkify */ "./node_modules/markdown-it/lib/rules_core/linkify.js")        ],
  [ 'replacements',   __webpack_require__(/*! ./rules_core/replacements */ "./node_modules/markdown-it/lib/rules_core/replacements.js")   ],
  [ 'smartquotes',    __webpack_require__(/*! ./rules_core/smartquotes */ "./node_modules/markdown-it/lib/rules_core/smartquotes.js")    ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = __webpack_require__(/*! ./rules_core/state_core */ "./node_modules/markdown-it/lib/rules_core/state_core.js");


module.exports = Core;


/***/ }),

/***/ "./node_modules/markdown-it/lib/parser_inline.js":
/*!*******************************************************!*\
  !*** ./node_modules/markdown-it/lib/parser_inline.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/



var Ruler           = __webpack_require__(/*! ./ruler */ "./node_modules/markdown-it/lib/ruler.js");


////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            __webpack_require__(/*! ./rules_inline/text */ "./node_modules/markdown-it/lib/rules_inline/text.js") ],
  [ 'newline',         __webpack_require__(/*! ./rules_inline/newline */ "./node_modules/markdown-it/lib/rules_inline/newline.js") ],
  [ 'escape',          __webpack_require__(/*! ./rules_inline/escape */ "./node_modules/markdown-it/lib/rules_inline/escape.js") ],
  [ 'backticks',       __webpack_require__(/*! ./rules_inline/backticks */ "./node_modules/markdown-it/lib/rules_inline/backticks.js") ],
  [ 'strikethrough',   __webpack_require__(/*! ./rules_inline/strikethrough */ "./node_modules/markdown-it/lib/rules_inline/strikethrough.js").tokenize ],
  [ 'emphasis',        __webpack_require__(/*! ./rules_inline/emphasis */ "./node_modules/markdown-it/lib/rules_inline/emphasis.js").tokenize ],
  [ 'link',            __webpack_require__(/*! ./rules_inline/link */ "./node_modules/markdown-it/lib/rules_inline/link.js") ],
  [ 'image',           __webpack_require__(/*! ./rules_inline/image */ "./node_modules/markdown-it/lib/rules_inline/image.js") ],
  [ 'autolink',        __webpack_require__(/*! ./rules_inline/autolink */ "./node_modules/markdown-it/lib/rules_inline/autolink.js") ],
  [ 'html_inline',     __webpack_require__(/*! ./rules_inline/html_inline */ "./node_modules/markdown-it/lib/rules_inline/html_inline.js") ],
  [ 'entity',          __webpack_require__(/*! ./rules_inline/entity */ "./node_modules/markdown-it/lib/rules_inline/entity.js") ]
];

var _rules2 = [
  [ 'balance_pairs',   __webpack_require__(/*! ./rules_inline/balance_pairs */ "./node_modules/markdown-it/lib/rules_inline/balance_pairs.js") ],
  [ 'strikethrough',   __webpack_require__(/*! ./rules_inline/strikethrough */ "./node_modules/markdown-it/lib/rules_inline/strikethrough.js").postProcess ],
  [ 'emphasis',        __webpack_require__(/*! ./rules_inline/emphasis */ "./node_modules/markdown-it/lib/rules_inline/emphasis.js").postProcess ],
  [ 'text_collapse',   __webpack_require__(/*! ./rules_inline/text_collapse */ "./node_modules/markdown-it/lib/rules_inline/text_collapse.js") ]
];


/**
 * new ParserInline()
 **/
function ParserInline() {
  var i;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var ok, i, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;


  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) { break; }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) { state.pos++; }
  cache[pos] = state.pos;
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) { break; }
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);

  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};


ParserInline.prototype.State = __webpack_require__(/*! ./rules_inline/state_inline */ "./node_modules/markdown-it/lib/rules_inline/state_inline.js");


module.exports = ParserInline;


/***/ }),

/***/ "./node_modules/markdown-it/lib/presets/commonmark.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/presets/commonmark.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Commonmark default options




module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ],
      rules2: [
        'balance_pairs',
        'emphasis',
        'text_collapse'
      ]
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/presets/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/markdown-it/lib/presets/default.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// markdown-it default options




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   100            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/presets/zero.js":
/*!******************************************************!*\
  !*** ./node_modules/markdown-it/lib/presets/zero.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ],
      rules2: [
        'balance_pairs',
        'text_collapse'
      ]
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/renderer.js":
/*!**************************************************!*\
  !*** ./node_modules/markdown-it/lib/renderer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/



var assign          = __webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js").assign;
var unescapeAll     = __webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js").unescapeAll;
var escapeHtml      = __webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js").escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};


default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(tokens[idx].content) +
          '</code>';
};


default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};


default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      langAttrs = '',
      highlighted, i, arr, tmpAttrs, tmpToken;

  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join('');
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .deepClone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};


default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

  return slf.renderToken(tokens, idx, options);
};


default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === 'softbreak') {
      result += '\n';
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;


/***/ }),

/***/ "./node_modules/markdown-it/lib/ruler.js":
/*!***********************************************!*\
  !*** ./node_modules/markdown-it/lib/ruler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/



/**
 * new Ruler()
 **/
function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

module.exports = Ruler;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/blockquote.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/blockquote.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Block quotes



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      isOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // set offset past spaces and ">"
  initial = offset = state.sCount[startLine] + 1;

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20 /* space */) {
    // ' >   test '
    //     ^ -- position start of line here:
    pos++;
    initial++;
    offset++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
    spaceAfterMarker = true;

    if ((state.bsCount[startLine] + offset) % 4 === 3) {
      // '  >\t  test '
      //       ^ -- position start of line here (tab has width===1)
      pos++;
      initial++;
      offset++;
      adjustTab = false;
    } else {
      // ' >\t  test '
      //    ^ -- position start of line here + shift bsCount slightly
      //         to make extra space appear
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  while (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (isSpace(ch)) {
      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset++;
      }
    } else {
      break;
    }

    pos++;
  }

  oldBSCount = [ state.bsCount[startLine] ];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);

  lastLineEmpty = pos >= max;

  oldSCount = [ state.sCount[startLine] ];
  state.sCount[startLine] = offset - initial;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  oldParentType = state.parentType;
  state.parentType = 'blockquote';

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    isOutdented = state.sCount[nextLine] < state.blkIndent;

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !isOutdented) {
      // This line is inside the blockquote.

      // set offset past spaces and ">"
      initial = offset = state.sCount[nextLine] + 1;

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;

      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);

    // A negative indentation means that this is a paragraph continuation
    //
    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  token        = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map    = lines = [ startLine, 0 ];

  state.md.block.tokenize(state, startLine, nextLine);

  token        = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';

  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/code.js":
/*!**********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/code.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Code block (4 spaces padded)




module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/fence.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/fence.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// fences (``` lang, ~~~ lang)




module.exports = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, token, markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (marker === 0x60 /* ` */) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.sCount[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/heading.js":
/*!*************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/heading.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// heading (#, ##, ...)



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && !isSpace(ch))) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;

  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/hr.js":
/*!********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/hr.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Horizontal rule



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 of them

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;

  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/html_block.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/html_block.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// HTML block




var block_names = __webpack_require__(/*! ../common/html_blocks */ "./node_modules/markdown-it/lib/common/html_blocks.js");
var HTML_OPEN_CLOSE_TAG_RE = __webpack_require__(/*! ../common/html_re */ "./node_modules/markdown-it/lib/common/html_re.js").HTML_OPEN_CLOSE_TAG_RE;

// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES = [
  [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true ],
  [ /^<!--/,        /-->/,   true ],
  [ /^<\?/,         /\?>/,   true ],
  [ /^<![A-Z]/,     />/,     true ],
  [ /^<!\[CDATA\[/, /\]\]>/, true ],
  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
];


module.exports = function html_block(state, startLine, endLine, silent) {
  var i, nextLine, token, lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (!state.md.options.html) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
  }

  if (i === HTML_SEQUENCES.length) { return false; }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1;

  // If we are here - we detected HTML block.
  // Let's roll down till block end.
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) { nextLine++; }
        break;
      }
    }
  }

  state.line = nextLine;

  token         = state.push('html_block', '', 0);
  token.map     = [ startLine, nextLine ];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/lheading.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/lheading.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// lheading (---, ===)




module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var content, terminate, i, l, token, pos, max, level, marker,
      nextLine = startLine + 1, oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2);
            break;
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine + 1;

  token          = state.push('heading_open', 'h' + String(level), 1);
  token.markup   = String.fromCharCode(marker);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line - 1 ];
  token.children = [];

  token          = state.push('heading_close', 'h' + String(level), -1);
  token.markup   = String.fromCharCode(marker);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/list.js":
/*!**********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/list.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Lists



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine];

  // List marker should have at least 2 chars (digit + dot)
  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) { return -1; }

      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      nextLine,
      offset,
      oldListIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      isTerminatingParagraph = false,
      tight = true;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // Special case:
  //  - item 1
  //   - item 2
  //    - item 3
  //     - item 4
  //      - this one is a paragraph continuation
  if (state.listIndent >= 0 &&
      state.sCount[startLine] - state.listIndent >= 4 &&
      state.sCount[startLine] < state.blkIndent) {
    return false;
  }

  // limit conditions when list can interrupt
  // a paragraph (validation mode only)
  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.tShift[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.
    if (isTerminatingParagraph && markerValue !== 1) return false;

  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;

  } else {
    return false;
  }

  // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
  }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token       = state.push('ordered_list_open', 'ol', 1);
    if (markerValue !== 1) {
      token.attrs = [ [ 'start', markerValue ] ];
    }

  } else {
    token       = state.push('bullet_list_open', 'ul', 1);
  }

  token.map    = listLines = [ startLine, 0 ];
  token.markup = String.fromCharCode(markerCharCode);

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];

    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = initial + indentAfterMarker;

    // Run subparser & write tokens
    token        = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map    = itemLines = [ startLine, 0 ];

    // change current state, then restore it after parser subcall
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine];

    //  - example list
    // ^ listIndent position will be here
    //   ^ blkIndent position will be here
    //
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;

    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset;

    if (contentStart >= max && state.isEmpty(startLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.tight = oldTight;

    token        = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finalize list
  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }
  token.markup = String.fromCharCode(markerCharCode);

  listLines[1] = nextLine;
  state.line = nextLine;

  state.parentType = oldParentType;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/paragraph.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/paragraph.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Paragraph




module.exports = function paragraph(state, startLine/*, endLine*/) {
  var content, terminate, i, l, token, oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph'),
      endLine = state.lineMax;

  oldParentType = state.parentType;
  state.parentType = 'paragraph';

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/reference.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/reference.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var normalizeReference   = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").normalizeReference;
var isSpace              = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
      if (pos + 1 === max) { return false; }
      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
      break;
    }
  }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  terminatorRules = state.md.block.ruler.getRules('reference');

  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }

  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) { return false; }

  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  }

  // Reference can not terminate anything. This check is for safety only.
  /*istanbul ignore if*/
  if (silent) { return true; }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.parentType = oldParentType;

  state.line = startLine + lines + 1;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/state_block.js":
/*!*****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/state_block.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parser state class



var Token = __webpack_require__(/*! ../token */ "./node_modules/markdown-it/lib/token.js");
var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = [];  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = [];

  // block parser variables
  this.blkIndent  = 0; // required block content indent (for example, if we are
                       // inside a list, it would be positioned after list marker)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
  this.listIndent = -1; // indent of the current list block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root';

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);

      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token(type, tag, nesting);
  token.block = true;

  if (nesting < 0) this.level--; // closing tag
  token.level = this.level;
  if (nesting > 0) this.level++; // opening tag

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
  }
  return pos;
};

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
};

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token;


module.exports = StateBlock;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/table.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/table.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GFM table, https://github.github.com/gfm/#tables-extension-



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      isEscaped = false,
      lastPos = 0,
      current = '';

  ch  = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x7c/* | */) {
      if (!isEscaped) {
        // pipe separating cells, '|'
        result.push(current + str.substring(lastPos, pos));
        current = '';
        lastPos = pos + 1;
      } else {
        // escaped pipe, '\|'
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }

    isEscaped = (ch === 0x5c/* \ */);
    pos++;

    ch = str.charCodeAt(pos);
  }

  result.push(current + str.substring(lastPos));

  return result;
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token,
      aligns, t, tableLines, tbodyLines, oldParentType, terminate,
      terminatorRules, firstCh, secondCh;

  // should have at least two lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) { return false; }

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 0x7C/* | */ && firstCh !== 0x2D/* - */ && firstCh !== 0x3A/* : */) { return false; }

  if (pos >= state.eMarks[nextLine]) { return false; }

  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 0x7C/* | */ && secondCh !== 0x2D/* - */ && secondCh !== 0x3A/* : */ && !isSpace(secondCh)) {
    return false;
  }

  // if first character is '-', then second character must not be a space
  // (due to parsing ambiguity with list)
  if (firstCh === 0x2D/* - */ && isSpace(secondCh)) { return false; }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace(ch)) { return false; }

    pos++;
  }

  lineText = getLine(state, startLine + 1);

  columns = lineText.split('|');
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === '') columns.shift();
  if (columns.length && columns[columns.length - 1] === '') columns.pop();

  // header row will define an amount of columns in the entire table,
  // and align row should be exactly the same (the rest of the rows can differ)
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) { return false; }

  if (silent) { return true; }

  oldParentType = state.parentType;
  state.parentType = 'table';

  // use 'blockquote' lists for termination because it's
  // the most similar to tables
  terminatorRules = state.md.block.ruler.getRules('blockquote');

  token     = state.push('table_open', 'table', 1);
  token.map = tableLines = [ startLine, 0 ];

  token     = state.push('thead_open', 'thead', 1);
  token.map = [ startLine, startLine + 1 ];

  token     = state.push('tr_open', 'tr', 1);
  token.map = [ startLine, startLine + 1 ];

  for (i = 0; i < columns.length; i++) {
    token          = state.push('th_open', 'th', 1);
    if (aligns[i]) {
      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
    }

    token          = state.push('inline', '', 0);
    token.content  = columns[i].trim();
    token.children = [];

    token          = state.push('th_close', 'th', -1);
  }

  token     = state.push('tr_close', 'tr', -1);
  token     = state.push('thead_close', 'thead', -1);

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) { break; }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) { break; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === '') columns.shift();
    if (columns.length && columns[columns.length - 1] === '') columns.pop();

    if (nextLine === startLine + 2) {
      token     = state.push('tbody_open', 'tbody', 1);
      token.map = tbodyLines = [ startLine + 2, 0 ];
    }

    token     = state.push('tr_open', 'tr', 1);
    token.map = [ nextLine, nextLine + 1 ];

    for (i = 0; i < columnCount; i++) {
      token          = state.push('td_open', 'td', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i] ? columns[i].trim() : '';
      token.children = [];

      token          = state.push('td_close', 'td', -1);
    }
    token = state.push('tr_close', 'tr', -1);
  }

  if (tbodyLines) {
    token = state.push('tbody_close', 'tbody', -1);
    tbodyLines[1] = nextLine;
  }

  token = state.push('table_close', 'table', -1);
  tableLines[1] = nextLine;

  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/block.js":
/*!**********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/block.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function block(state) {
  var token;

  if (state.inlineMode) {
    token          = new state.Token('inline', '', 0);
    token.content  = state.src;
    token.map      = [ 0, 1 ];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/inline.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/inline.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/linkify.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/linkify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//



var arrayReplaceAt = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").arrayReplaceAt;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
      level, htmlLinkLevel, url, fullUrl, urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

        text = currentToken.content;
        links = state.md.linkify.match(text);

        // Now split string to nodes
        nodes = [];
        level = currentToken.level;
        lastPos = 0;

        for (ln = 0; ln < links.length; ln++) {

          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) { continue; }

          urlText = links[ln].text;

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level   = level;
            nodes.push(token);
          }

          token         = new state.Token('link_open', 'a', 1);
          token.attrs   = [ [ 'href', fullUrl ] ];
          token.level   = level++;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = urlText;
          token.level   = level;
          nodes.push(token);

          token         = new state.Token('link_close', 'a', -1);
          token.level   = --level;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level   = level;
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/normalize.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/normalize.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Normalize input string




// https://spec.commonmark.org/0.29/#line-ending
var NEWLINES_RE  = /\r\n?|\n/g;
var NULL_RE      = /\0/g;


module.exports = function normalize(state) {
  var str;

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  state.src = str;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/replacements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/replacements.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//


// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  p: '§',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
          .replace(/\+-/g, '±')
          // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
          .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
          // em-dash
          .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
          // en-dash
          .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013');
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}


module.exports = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }

  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/smartquotes.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/smartquotes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Convert straight quotation marks to typographic ones
//



var isWhiteSpace   = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isWhiteSpace;
var isPunctChar    = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isPunctChar;
var isMdAsciiPunct = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isMdAsciiPunct;

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = '\u2019'; /* ’ */


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break; }
    }
    stack.length = j + 1;

    if (token.type !== 'text') { continue; }

    text = token.content;
    pos = 0;
    max = text.length;

    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);
      if (!t) { break; }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = (t[0] === "'");

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // Replace quotes in the middle of punctuation sequence, but not
        // in the middle of the words, i.e.:
        //
        // 1. foo " bar " baz - not replaced
        // 2. foo-"-bar-"-baz - replaced
        // 3. foo"bar"baz     - not replaced
        //
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];
          if (stack[j].level < thisLevel) { break; }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote);

            pos += closeQuote.length - 1;
            if (item.token === i) { pos += openQuote.length - 1; }

            text = token.content;
            max = text.length;

            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/state_core.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/state_core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Core state object
//


var Token = __webpack_require__(/*! ../token */ "./node_modules/markdown-it/lib/token.js");


function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token;


module.exports = StateCore;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/autolink.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/autolink.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process autolinks '<protocol:...>'




/*eslint max-len:0*/
var EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;


module.exports = function autolink(state, silent) {
  var url, fullUrl, token, ch, start, max,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  start = state.pos;
  max = state.posMax;

  for (;;) {
    if (++pos >= max) return false;

    ch = state.src.charCodeAt(pos);

    if (ch === 0x3C /* < */) return false;
    if (ch === 0x3E /* > */) break;
  }

  url = state.src.slice(start + 1, pos);

  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink('mailto:' + url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  return false;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/backticks.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/backticks.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse backticks




module.exports = function backtick(state, silent) {
  var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  // scan marker length
  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);
  openerLength = marker.length;

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  }

  matchStart = matchEnd = pos;

  // Nothing found in the cache, scan until the end of the line (or until marker is found)
  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    // scan marker length
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    closerLength = matchEnd - matchStart;

    if (closerLength === openerLength) {
      // Found matching closer length.
      if (!silent) {
        token     = state.push('code_inline', 'code', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
          .replace(/\n/g, ' ')
          .replace(/^ (.+) $/, '$1');
      }
      state.pos = matchEnd;
      return true;
    }

    // Some different length found, put it in cache as upper limit of where closer can be found
    state.backticks[closerLength] = matchStart;
  }

  // Scanned through the end, didn't find anything
  state.backticksScanned = true;

  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/balance_pairs.js":
/*!********************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/balance_pairs.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// For each opening emphasis-like marker find a matching closing one
//



function processDelimiters(state, delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx,
      isOddMatch, lastJump,
      openersBottom = {},
      max = delimiters.length;

  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];

    // Length is only used for emphasis-specific "rule of 3",
    // if it's not defined (in strikethrough or 3rd party plugins),
    // we can default it to 0 to disable those checks.
    //
    closer.length = closer.length || 0;

    if (!closer.close) continue;

    // Previously calculated lower bounds (previous fails)
    // for each marker and each delimiter length modulo 3.
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [ -1, -1, -1 ];
    }

    minOpenerIdx = openersBottom[closer.marker][closer.length % 3];

    openerIdx = closerIdx - closer.jump - 1;

    // avoid crash if `closer.jump` is pointing outside of the array, see #742
    if (openerIdx < -1) openerIdx = -1;

    newMinOpenerIdx = openerIdx;

    for (; openerIdx > minOpenerIdx; openerIdx -= opener.jump + 1) {
      opener = delimiters[openerIdx];

      if (opener.marker !== closer.marker) continue;

      if (opener.open && opener.end < 0) {

        isOddMatch = false;

        // from spec:
        //
        // If one of the delimiters can both open and close emphasis, then the
        // sum of the lengths of the delimiter runs containing the opening and
        // closing delimiters must not be a multiple of 3 unless both lengths
        // are multiples of 3.
        //
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }

        if (!isOddMatch) {
          // If previous delimiter cannot be an opener, we can safely skip
          // the entire sequence in future checks. This is required to make
          // sure algorithm has linear complexity (see *_*_*_*_*_... case).
          //
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ?
            delimiters[openerIdx - 1].jump + 1 :
            0;

          closer.jump  = closerIdx - openerIdx + lastJump;
          closer.open  = false;
          opener.end   = closerIdx;
          opener.jump  = lastJump;
          opener.close = false;
          newMinOpenerIdx = -1;
          break;
        }
      }
    }

    if (newMinOpenerIdx !== -1) {
      // If match for this delimiter run failed, we want to set lower bound for
      // future lookups. This is required to make sure algorithm has linear
      // complexity.
      //
      // See details here:
      // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
      //
      openersBottom[closer.marker][(closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}


module.exports = function link_pairs(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  processDelimiters(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/emphasis.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/emphasis.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process *this* and _that_
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function emphasis(state, silent) {
  var i, scanned, token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token         = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // An amount of characters before this one that's equivalent to
      // current one. In plain English: if this delimiter does not open
      // an emphasis, neither do previous `jump` characters.
      //
      // Used to skip sequences like "*****" in one step, for 1st asterisk
      // value will be 0, for 2nd it's 1 and so on.
      //
      jump:   i,

      // A position of the token this delimiter corresponds to.
      //
      token:  state.tokens.length - 1,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end:    -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      max = delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue;
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               delimiters[startDelim.end + 1].token === endDelim.token + 1 &&
               delimiters[i - 1].marker === startDelim.marker;

    ch = String.fromCharCode(startDelim.marker);

    token         = state.tokens[startDelim.token];
    token.type    = isStrong ? 'strong_open' : 'em_open';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = isStrong ? 'strong_close' : 'em_close';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function emphasis(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/entity.js":
/*!*************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/entity.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process html entity - &#123;, &#xAF;, &quot;, ...



var entities          = __webpack_require__(/*! ../common/entities */ "./node_modules/markdown-it/lib/common/entities.js");
var has               = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").has;
var isValidEntityCode = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isValidEntityCode;
var fromCodePoint     = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) { state.pending += entities[match[1]]; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/escape.js":
/*!*************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/escape.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process escaped chars and hardbreaks



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push('hardbreak', 'br', 0);
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/html_inline.js":
/*!******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/html_inline.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process html tags




var HTML_TAG_RE = __webpack_require__(/*! ../common/html_re */ "./node_modules/markdown-it/lib/common/html_re.js").HTML_TAG_RE;


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function html_inline(state, silent) {
  var ch, match, max, token,
      pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    token         = state.push('html_inline', '', 0);
    token.content = state.src.slice(pos, pos + match[0].length);
  }
  state.pos += match[0].length;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/image.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/image.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process ![image](<src> "title")



var normalizeReference   = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").normalizeReference;
var isSpace              = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);

    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens = []
    );

    token          = state.push('image', 'img', 0);
    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
    token.children = tokens;
    token.content  = content;

    if (title) {
      attrs.push([ 'title', title ]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/link.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/link.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process [link](<to> "stuff")



var normalizeReference   = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").normalizeReference;
var isSpace              = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      token,
      href = '',
      title = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false;

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 0x0A) { break; }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }
    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    token        = state.push('link_open', 'a', 1);
    token.attrs  = attrs = [ [ 'href', href ] ];
    if (title) {
      attrs.push([ 'title', title ]);
    }

    state.md.inline.tokenize(state);

    token        = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/newline.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/newline.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Proceess '\n'



var isSpace = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace;


module.exports = function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        state.pending = state.pending.replace(/ +$/, '');
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }

    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && isSpace(state.src.charCodeAt(pos))) { pos++; }

  state.pos = pos;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/state_inline.js":
/*!*******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/state_inline.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Inline parser state




var Token          = __webpack_require__(/*! ../token */ "./node_modules/markdown-it/lib/token.js");
var isWhiteSpace   = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isWhiteSpace;
var isPunctChar    = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isPunctChar;
var isMdAsciiPunct = __webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isMdAsciiPunct;


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  // Stores { start: end } pairs. Useful for backtrack
  // optimization of pairs parse (emphasis, strikes).
  this.cache = {};

  // List of emphasis-like delimiters for current tag
  this.delimiters = [];

  // Stack of delimiter lists for upper level tags
  this._prev_delimiters = [];

  // backtick length => last seen position
  this.backticks = {};
  this.backticksScanned = false;
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);
  var token_meta = null;

  if (nesting < 0) {
    // closing tag
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }

  token.level = this.level;

  if (nesting > 0) {
    // opening tag
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
};


// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start);

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

  count = pos - start;

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
  } else {
    can_open  = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open:  can_open,
    can_close: can_close,
    length:    count
  };
};


// re-export Token class to use in block rules
StateInline.prototype.Token = Token;


module.exports = StateInline;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/strikethrough.js":
/*!********************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/strikethrough.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ~~strike through~~
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function strikethrough(state, silent) {
  var i, scanned, token, len, ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x7E/* ~ */) { return false; }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) { return false; }

  if (len % 2) {
    token         = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token         = state.push('text', '', 0);
    token.content = ch + ch;

    state.delimiters.push({
      marker: marker,
      length: 0,     // disable "rule of 3" length checks meant for emphasis
      jump:   i / 2, // for `~~` 1 marker = 2 characters
      token:  state.tokens.length - 1,
      end:    -1,
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i, j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      max = delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E/* ~ */) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    token         = state.tokens[startDelim.token];
    token.type    = 's_open';
    token.tag     = 's';
    token.nesting = 1;
    token.markup  = '~~';
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = 's_close';
    token.tag     = 's';
    token.nesting = -1;
    token.markup  = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' &&
        state.tokens[endDelim.token - 1].content === '~') {

      loneMarkers.push(endDelim.token - 1);
    }
  }

  // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function strikethrough(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Skip text characters for text token, place those to pending buffer
// and increment current pos




// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.

/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/text_collapse.js":
/*!********************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/text_collapse.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//



module.exports = function text_collapse(state) {
  var curr, last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels after emphasis/strikethrough turns some text nodes
    // into opening/closing tags
    if (tokens[curr].nesting < 0) level--; // closing tag
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0) level++; // opening tag

    if (tokens[curr].type === 'text' &&
        curr + 1 < max &&
        tokens[curr + 1].type === 'text') {

      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) { tokens[last] = tokens[curr]; }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/token.js":
/*!***********************************************!*\
  !*** ./node_modules/markdown-it/lib/token.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Token class




/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/
function Token(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type     = type;

  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/
  this.tag      = tag;

  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/
  this.attrs    = null;

  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/
  this.map      = null;

  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/
  this.nesting  = nesting;

  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/
  this.level    = 0;

  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/
  this.children = null;

  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/
  this.content  = '';

  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/
  this.markup   = '';

  /**
   * Token#info -> String
   *
   * Additional information:
   *
   * - Info string for "fence" tokens
   * - The value "auto" for autolink "link_open" and "link_close" tokens
   **/
  this.info     = '';

  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/
  this.meta     = null;

  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/
  this.block    = false;

  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/
  this.hidden   = false;
}


/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) { return -1; }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) { return i; }
  }
  return -1;
};


/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [ attrData ];
  }
};


/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [ name, value ];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};


/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};


/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([ name, value ]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};


module.exports = Token;


/***/ }),

/***/ "./node_modules/mdurl/decode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/decode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) { return cache; }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
}


// Decode percent-encoded string.
//
function decode(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode.defaultChars;
  }

  cache = getDecodeCache(exclude);

  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

          if (chr < 0x80) {
            result += '\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
            result += '\ufffd\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += '\ufffd\ufffd\ufffd\ufffd';
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += '\ufffd';
    }

    return result;
  });
}


decode.defaultChars   = ';/?:@&=+$,#';
decode.componentChars = '';


module.exports = decode;


/***/ }),

/***/ "./node_modules/mdurl/encode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/encode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ "./node_modules/mdurl/format.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/format.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




module.exports = function format(url) {
  var result = '';

  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';

  return result;
};


/***/ }),

/***/ "./node_modules/mdurl/index.js":
/*!*************************************!*\
  !*** ./node_modules/mdurl/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports.encode = __webpack_require__(/*! ./encode */ "./node_modules/mdurl/encode.js");
module.exports.decode = __webpack_require__(/*! ./decode */ "./node_modules/mdurl/decode.js");
module.exports.format = __webpack_require__(/*! ./format */ "./node_modules/mdurl/format.js");
module.exports.parse  = __webpack_require__(/*! ./parse */ "./node_modules/mdurl/parse.js");


/***/ }),

/***/ "./node_modules/mdurl/parse.js":
/*!*************************************!*\
  !*** ./node_modules/mdurl/parse.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//


function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

    // RFC 2396: characters not allowed for various reasons.
    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = [ '\'' ].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
    hostEndingChars = [ '/', '?', '#' ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    /* eslint-disable no-script-url */
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
    /* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes,
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') { hostEnd--; }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost(host);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

module.exports = urlParse;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/github-markdown-css/github-markdown.css":
/*!**************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/github-markdown-css/github-markdown.css ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".markdown-body .octicon {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n\n.markdown-body .anchor {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n\n.markdown-body .anchor:focus {\n  outline: none;\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\n.markdown-body h1:hover .anchor .octicon-link:before,\n.markdown-body h2:hover .anchor .octicon-link:before,\n.markdown-body h3:hover .anchor .octicon-link:before,\n.markdown-body h4:hover .anchor .octicon-link:before,\n.markdown-body h5:hover .anchor .octicon-link:before,\n.markdown-body h6:hover .anchor .octicon-link:before {\n  width: 16px;\n  height: 16px;\n  content: ' ';\n  display: inline-block;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E\");\n}.markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n.markdown-body details {\n  display: block;\n}\n\n.markdown-body summary {\n  display: list-item;\n}\n\n.markdown-body a {\n  background-color: transparent;\n  background-color: initial;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline-width: 0;\n}\n\n.markdown-body strong {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n\n.markdown-body h1 {\n  font-size: 2em;\n  margin: .67em 0;\n}\n\n.markdown-body img {\n  border-style: none;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n\n.markdown-body hr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-box-sizing: initial;\n          box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n\n.markdown-body input {\n  font: inherit;\n  margin: 0;\n}\n\n.markdown-body input {\n  overflow: visible;\n}\n\n.markdown-body [type=checkbox] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\n\n.markdown-body * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.markdown-body input {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.markdown-body a {\n  color: #0366d6;\n  text-decoration: none;\n}\n\n.markdown-body a:hover {\n  text-decoration: underline;\n}\n\n.markdown-body strong {\n  font-weight: 600;\n}\n\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n\n.markdown-body hr:after,\n.markdown-body hr:before {\n  display: table;\n  content: \"\";\n}\n\n.markdown-body hr:after {\n  clear: both;\n}\n\n.markdown-body table {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.markdown-body td,\n.markdown-body th {\n  padding: 0;\n}\n\n.markdown-body details summary {\n  cursor: pointer;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 #d1d5da;\n          box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body h1 {\n  font-size: 32px;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n  font-weight: 600;\n}\n\n.markdown-body h2 {\n  font-size: 24px;\n}\n\n.markdown-body h3 {\n  font-size: 20px;\n}\n\n.markdown-body h3,\n.markdown-body h4 {\n  font-weight: 600;\n}\n\n.markdown-body h4 {\n  font-size: 16px;\n}\n\n.markdown-body h5 {\n  font-size: 14px;\n}\n\n.markdown-body h5,\n.markdown-body h6 {\n  font-weight: 600;\n}\n\n.markdown-body h6 {\n  font-size: 12px;\n}\n\n.markdown-body p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.markdown-body blockquote {\n  margin: 0;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n.markdown-body ol ol ol,\n.markdown-body ol ul ol,\n.markdown-body ul ol ol,\n.markdown-body ul ul ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n  margin-left: 0;\n}\n\n.markdown-body code,\n.markdown-body pre {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body input::-webkit-inner-spin-button,\n.markdown-body input::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.markdown-body :checked+.radio-label {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n\n.markdown-body .border {\n  border: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .border-0 {\n  border: 0!important;\n}\n\n.markdown-body .border-bottom {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .rounded-1 {\n  border-radius: 3px!important;\n}\n\n.markdown-body .bg-white {\n  background-color: #fff!important;\n}\n\n.markdown-body .bg-gray-light {\n  background-color: #fafbfc!important;\n}\n\n.markdown-body .text-gray-light {\n  color: #6a737d!important;\n}\n\n.markdown-body .mb-0 {\n  margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n\n.markdown-body .pl-0 {\n  padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n  padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n  padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3,\n.markdown-body .px-3 {\n  padding-left: 16px!important;\n}\n\n.markdown-body .px-3 {\n  padding-right: 16px!important;\n}\n\n.markdown-body .pl-4 {\n  padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n  padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n  padding-left: 40px!important;\n}\n\n.markdown-body .f6 {\n  font-size: 12px!important;\n}\n\n.markdown-body .lh-condensed {\n  line-height: 1.25!important;\n}\n\n.markdown-body .text-bold {\n  font-weight: 600!important;\n}\n\n.markdown-body .pl-c {\n  color: #6a737d;\n}\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #005cc5;\n}\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #6f42c1;\n}\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n  color: #24292e;\n}\n\n.markdown-body .pl-ent {\n  color: #22863a;\n}\n\n.markdown-body .pl-k {\n  color: #d73a49;\n}\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n  color: #032f62;\n}\n\n.markdown-body .pl-smw,\n.markdown-body .pl-v {\n  color: #e36209;\n}\n\n.markdown-body .pl-bu {\n  color: #b31d28;\n}\n\n.markdown-body .pl-ii {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n\n.markdown-body .pl-c2 {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n\n.markdown-body .pl-c2:before {\n  content: \"^M\";\n}\n\n.markdown-body .pl-sr .pl-cce {\n  font-weight: 700;\n  color: #22863a;\n}\n\n.markdown-body .pl-ml {\n  color: #735c0f;\n}\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  font-weight: 700;\n  color: #005cc5;\n}\n\n.markdown-body .pl-mi {\n  font-style: italic;\n  color: #24292e;\n}\n\n.markdown-body .pl-mb {\n  font-weight: 700;\n  color: #24292e;\n}\n\n.markdown-body .pl-md {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n\n.markdown-body .pl-mi1 {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n\n.markdown-body .pl-mc {\n  color: #e36209;\n  background-color: #ffebda;\n}\n\n.markdown-body .pl-mi2 {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n\n.markdown-body .pl-mdr {\n  font-weight: 700;\n  color: #6f42c1;\n}\n\n.markdown-body .pl-ba {\n  color: #586069;\n}\n\n.markdown-body .pl-sg {\n  color: #959da5;\n}\n\n.markdown-body .pl-corl {\n  text-decoration: underline;\n  color: #032f62;\n}\n\n.markdown-body .mb-0 {\n  margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n  margin-bottom: 8px!important;\n}\n\n.markdown-body .my-2 {\n  margin-top: 8px!important;\n}\n\n.markdown-body .pl-0 {\n  padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n  padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n  padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3 {\n  padding-left: 16px!important;\n}\n\n.markdown-body .pl-4 {\n  padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n  padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n  padding-left: 40px!important;\n}\n\n.markdown-body .pl-7 {\n  padding-left: 48px!important;\n}\n\n.markdown-body .pl-8 {\n  padding-left: 64px!important;\n}\n\n.markdown-body .pl-9 {\n  padding-left: 80px!important;\n}\n\n.markdown-body .pl-10 {\n  padding-left: 96px!important;\n}\n\n.markdown-body .pl-11 {\n  padding-left: 112px!important;\n}\n\n.markdown-body .pl-12 {\n  padding-left: 128px!important;\n}\n\n.markdown-body hr {\n  border-bottom-color: #eee;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 #d1d5da;\n          box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body:after,\n.markdown-body:before {\n  display: table;\n  content: \"\";\n}\n\n.markdown-body:after {\n  clear: both;\n}\n\n.markdown-body>:first-child {\n  margin-top: 0!important;\n}\n\n.markdown-body>:last-child {\n  margin-bottom: 0!important;\n}\n\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.markdown-body blockquote,\n.markdown-body details,\n.markdown-body dl,\n.markdown-body ol,\n.markdown-body p,\n.markdown-body pre,\n.markdown-body table,\n.markdown-body ul {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.markdown-body hr {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n\n.markdown-body blockquote {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n\n.markdown-body blockquote>:first-child {\n  margin-top: 0;\n}\n\n.markdown-body blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n\n.markdown-body h1 {\n  font-size: 2em;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n\n.markdown-body h2 {\n  font-size: 1.5em;\n}\n\n.markdown-body h3 {\n  font-size: 1.25em;\n}\n\n.markdown-body h4 {\n  font-size: 1em;\n}\n\n.markdown-body h5 {\n  font-size: .875em;\n}\n\n.markdown-body h6 {\n  font-size: .85em;\n  color: #6a737d;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n  padding-left: 2em;\n}\n\n.markdown-body ol ol,\n.markdown-body ol ul,\n.markdown-body ul ol,\n.markdown-body ul ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body li {\n  word-wrap: break-all;\n}\n\n.markdown-body li>p {\n  margin-top: 16px;\n}\n\n.markdown-body li+li {\n  margin-top: .25em;\n}\n\n.markdown-body dl {\n  padding: 0;\n}\n\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.markdown-body table th {\n  font-weight: 600;\n}\n\n.markdown-body table td,\n.markdown-body table th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.markdown-body img {\n  max-width: 100%;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-box-sizing: initial;\n          box-sizing: initial;\n  background-color: #fff;\n}\n\n.markdown-body img[align=right] {\n  padding-left: 20px;\n}\n\n.markdown-body img[align=left] {\n  padding-right: 20px;\n}\n\n.markdown-body code {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n\n.markdown-body pre {\n  word-wrap: normal;\n}\n\n.markdown-body pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n\n.markdown-body pre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n\n.markdown-body .commit-tease-sha {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n\n.markdown-body .full-commit .btn-outline:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n\n.markdown-body .blob-wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.markdown-body .blob-wrapper-embedded {\n  max-height: 240px;\n  overflow-y: auto;\n}\n\n.markdown-body .blob-num {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.markdown-body .blob-num:hover {\n  color: rgba(27,31,35,.6);\n}\n\n.markdown-body .blob-num:before {\n  content: attr(data-line-number);\n}\n\n.markdown-body .blob-code {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n\n.markdown-body .blob-code-inner {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n\n.markdown-body .pl-token.active,\n.markdown-body .pl-token:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n\n.markdown-body .tab-size[data-tab-size=\"1\"] {\n  -moz-tab-size: 1;\n  tab-size: 1;\n}\n\n.markdown-body .tab-size[data-tab-size=\"2\"] {\n  -moz-tab-size: 2;\n  tab-size: 2;\n}\n\n.markdown-body .tab-size[data-tab-size=\"3\"] {\n  -moz-tab-size: 3;\n  tab-size: 3;\n}\n\n.markdown-body .tab-size[data-tab-size=\"4\"] {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n.markdown-body .tab-size[data-tab-size=\"5\"] {\n  -moz-tab-size: 5;\n  tab-size: 5;\n}\n\n.markdown-body .tab-size[data-tab-size=\"6\"] {\n  -moz-tab-size: 6;\n  tab-size: 6;\n}\n\n.markdown-body .tab-size[data-tab-size=\"7\"] {\n  -moz-tab-size: 7;\n  tab-size: 7;\n}\n\n.markdown-body .tab-size[data-tab-size=\"8\"] {\n  -moz-tab-size: 8;\n  tab-size: 8;\n}\n\n.markdown-body .tab-size[data-tab-size=\"9\"] {\n  -moz-tab-size: 9;\n  tab-size: 9;\n}\n\n.markdown-body .tab-size[data-tab-size=\"10\"] {\n  -moz-tab-size: 10;\n  tab-size: 10;\n}\n\n.markdown-body .tab-size[data-tab-size=\"11\"] {\n  -moz-tab-size: 11;\n  tab-size: 11;\n}\n\n.markdown-body .tab-size[data-tab-size=\"12\"] {\n  -moz-tab-size: 12;\n  tab-size: 12;\n}\n\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n\n.markdown-body .task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n", "",{"version":3,"sources":["webpack://node_modules/github-markdown-css/github-markdown.css"],"names":[],"mappings":"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","sourcesContent":[".markdown-body .octicon {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n\n.markdown-body .anchor {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n\n.markdown-body .anchor:focus {\n  outline: none;\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\n.markdown-body h1:hover .anchor .octicon-link:before,\n.markdown-body h2:hover .anchor .octicon-link:before,\n.markdown-body h3:hover .anchor .octicon-link:before,\n.markdown-body h4:hover .anchor .octicon-link:before,\n.markdown-body h5:hover .anchor .octicon-link:before,\n.markdown-body h6:hover .anchor .octicon-link:before {\n  width: 16px;\n  height: 16px;\n  content: ' ';\n  display: inline-block;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E\");\n}.markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n.markdown-body details {\n  display: block;\n}\n\n.markdown-body summary {\n  display: list-item;\n}\n\n.markdown-body a {\n  background-color: initial;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline-width: 0;\n}\n\n.markdown-body strong {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n\n.markdown-body h1 {\n  font-size: 2em;\n  margin: .67em 0;\n}\n\n.markdown-body img {\n  border-style: none;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n\n.markdown-body hr {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n\n.markdown-body input {\n  font: inherit;\n  margin: 0;\n}\n\n.markdown-body input {\n  overflow: visible;\n}\n\n.markdown-body [type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.markdown-body * {\n  box-sizing: border-box;\n}\n\n.markdown-body input {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.markdown-body a {\n  color: #0366d6;\n  text-decoration: none;\n}\n\n.markdown-body a:hover {\n  text-decoration: underline;\n}\n\n.markdown-body strong {\n  font-weight: 600;\n}\n\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n\n.markdown-body hr:after,\n.markdown-body hr:before {\n  display: table;\n  content: \"\";\n}\n\n.markdown-body hr:after {\n  clear: both;\n}\n\n.markdown-body table {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.markdown-body td,\n.markdown-body th {\n  padding: 0;\n}\n\n.markdown-body details summary {\n  cursor: pointer;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body h1 {\n  font-size: 32px;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n  font-weight: 600;\n}\n\n.markdown-body h2 {\n  font-size: 24px;\n}\n\n.markdown-body h3 {\n  font-size: 20px;\n}\n\n.markdown-body h3,\n.markdown-body h4 {\n  font-weight: 600;\n}\n\n.markdown-body h4 {\n  font-size: 16px;\n}\n\n.markdown-body h5 {\n  font-size: 14px;\n}\n\n.markdown-body h5,\n.markdown-body h6 {\n  font-weight: 600;\n}\n\n.markdown-body h6 {\n  font-size: 12px;\n}\n\n.markdown-body p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.markdown-body blockquote {\n  margin: 0;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n.markdown-body ol ol ol,\n.markdown-body ol ul ol,\n.markdown-body ul ol ol,\n.markdown-body ul ul ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n  margin-left: 0;\n}\n\n.markdown-body code,\n.markdown-body pre {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body input::-webkit-inner-spin-button,\n.markdown-body input::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.markdown-body :checked+.radio-label {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n\n.markdown-body .border {\n  border: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .border-0 {\n  border: 0!important;\n}\n\n.markdown-body .border-bottom {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .rounded-1 {\n  border-radius: 3px!important;\n}\n\n.markdown-body .bg-white {\n  background-color: #fff!important;\n}\n\n.markdown-body .bg-gray-light {\n  background-color: #fafbfc!important;\n}\n\n.markdown-body .text-gray-light {\n  color: #6a737d!important;\n}\n\n.markdown-body .mb-0 {\n  margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n\n.markdown-body .pl-0 {\n  padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n  padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n  padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3,\n.markdown-body .px-3 {\n  padding-left: 16px!important;\n}\n\n.markdown-body .px-3 {\n  padding-right: 16px!important;\n}\n\n.markdown-body .pl-4 {\n  padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n  padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n  padding-left: 40px!important;\n}\n\n.markdown-body .f6 {\n  font-size: 12px!important;\n}\n\n.markdown-body .lh-condensed {\n  line-height: 1.25!important;\n}\n\n.markdown-body .text-bold {\n  font-weight: 600!important;\n}\n\n.markdown-body .pl-c {\n  color: #6a737d;\n}\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #005cc5;\n}\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #6f42c1;\n}\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n  color: #24292e;\n}\n\n.markdown-body .pl-ent {\n  color: #22863a;\n}\n\n.markdown-body .pl-k {\n  color: #d73a49;\n}\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n  color: #032f62;\n}\n\n.markdown-body .pl-smw,\n.markdown-body .pl-v {\n  color: #e36209;\n}\n\n.markdown-body .pl-bu {\n  color: #b31d28;\n}\n\n.markdown-body .pl-ii {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n\n.markdown-body .pl-c2 {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n\n.markdown-body .pl-c2:before {\n  content: \"^M\";\n}\n\n.markdown-body .pl-sr .pl-cce {\n  font-weight: 700;\n  color: #22863a;\n}\n\n.markdown-body .pl-ml {\n  color: #735c0f;\n}\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  font-weight: 700;\n  color: #005cc5;\n}\n\n.markdown-body .pl-mi {\n  font-style: italic;\n  color: #24292e;\n}\n\n.markdown-body .pl-mb {\n  font-weight: 700;\n  color: #24292e;\n}\n\n.markdown-body .pl-md {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n\n.markdown-body .pl-mi1 {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n\n.markdown-body .pl-mc {\n  color: #e36209;\n  background-color: #ffebda;\n}\n\n.markdown-body .pl-mi2 {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n\n.markdown-body .pl-mdr {\n  font-weight: 700;\n  color: #6f42c1;\n}\n\n.markdown-body .pl-ba {\n  color: #586069;\n}\n\n.markdown-body .pl-sg {\n  color: #959da5;\n}\n\n.markdown-body .pl-corl {\n  text-decoration: underline;\n  color: #032f62;\n}\n\n.markdown-body .mb-0 {\n  margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n  margin-bottom: 8px!important;\n}\n\n.markdown-body .my-2 {\n  margin-top: 8px!important;\n}\n\n.markdown-body .pl-0 {\n  padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n  padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n  padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3 {\n  padding-left: 16px!important;\n}\n\n.markdown-body .pl-4 {\n  padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n  padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n  padding-left: 40px!important;\n}\n\n.markdown-body .pl-7 {\n  padding-left: 48px!important;\n}\n\n.markdown-body .pl-8 {\n  padding-left: 64px!important;\n}\n\n.markdown-body .pl-9 {\n  padding-left: 80px!important;\n}\n\n.markdown-body .pl-10 {\n  padding-left: 96px!important;\n}\n\n.markdown-body .pl-11 {\n  padding-left: 112px!important;\n}\n\n.markdown-body .pl-12 {\n  padding-left: 128px!important;\n}\n\n.markdown-body hr {\n  border-bottom-color: #eee;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body:after,\n.markdown-body:before {\n  display: table;\n  content: \"\";\n}\n\n.markdown-body:after {\n  clear: both;\n}\n\n.markdown-body>:first-child {\n  margin-top: 0!important;\n}\n\n.markdown-body>:last-child {\n  margin-bottom: 0!important;\n}\n\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.markdown-body blockquote,\n.markdown-body details,\n.markdown-body dl,\n.markdown-body ol,\n.markdown-body p,\n.markdown-body pre,\n.markdown-body table,\n.markdown-body ul {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.markdown-body hr {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n\n.markdown-body blockquote {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n\n.markdown-body blockquote>:first-child {\n  margin-top: 0;\n}\n\n.markdown-body blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n\n.markdown-body h1 {\n  font-size: 2em;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n\n.markdown-body h2 {\n  font-size: 1.5em;\n}\n\n.markdown-body h3 {\n  font-size: 1.25em;\n}\n\n.markdown-body h4 {\n  font-size: 1em;\n}\n\n.markdown-body h5 {\n  font-size: .875em;\n}\n\n.markdown-body h6 {\n  font-size: .85em;\n  color: #6a737d;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n  padding-left: 2em;\n}\n\n.markdown-body ol ol,\n.markdown-body ol ul,\n.markdown-body ul ol,\n.markdown-body ul ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body li {\n  word-wrap: break-all;\n}\n\n.markdown-body li>p {\n  margin-top: 16px;\n}\n\n.markdown-body li+li {\n  margin-top: .25em;\n}\n\n.markdown-body dl {\n  padding: 0;\n}\n\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.markdown-body table th {\n  font-weight: 600;\n}\n\n.markdown-body table td,\n.markdown-body table th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.markdown-body img {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n\n.markdown-body img[align=right] {\n  padding-left: 20px;\n}\n\n.markdown-body img[align=left] {\n  padding-right: 20px;\n}\n\n.markdown-body code {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n\n.markdown-body pre {\n  word-wrap: normal;\n}\n\n.markdown-body pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n\n.markdown-body pre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n\n.markdown-body .commit-tease-sha {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n\n.markdown-body .full-commit .btn-outline:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n\n.markdown-body .blob-wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.markdown-body .blob-wrapper-embedded {\n  max-height: 240px;\n  overflow-y: auto;\n}\n\n.markdown-body .blob-num {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.markdown-body .blob-num:hover {\n  color: rgba(27,31,35,.6);\n}\n\n.markdown-body .blob-num:before {\n  content: attr(data-line-number);\n}\n\n.markdown-body .blob-code {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n\n.markdown-body .blob-code-inner {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n\n.markdown-body .pl-token.active,\n.markdown-body .pl-token:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n\n.markdown-body .tab-size[data-tab-size=\"1\"] {\n  -moz-tab-size: 1;\n  tab-size: 1;\n}\n\n.markdown-body .tab-size[data-tab-size=\"2\"] {\n  -moz-tab-size: 2;\n  tab-size: 2;\n}\n\n.markdown-body .tab-size[data-tab-size=\"3\"] {\n  -moz-tab-size: 3;\n  tab-size: 3;\n}\n\n.markdown-body .tab-size[data-tab-size=\"4\"] {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n.markdown-body .tab-size[data-tab-size=\"5\"] {\n  -moz-tab-size: 5;\n  tab-size: 5;\n}\n\n.markdown-body .tab-size[data-tab-size=\"6\"] {\n  -moz-tab-size: 6;\n  tab-size: 6;\n}\n\n.markdown-body .tab-size[data-tab-size=\"7\"] {\n  -moz-tab-size: 7;\n  tab-size: 7;\n}\n\n.markdown-body .tab-size[data-tab-size=\"8\"] {\n  -moz-tab-size: 8;\n  tab-size: 8;\n}\n\n.markdown-body .tab-size[data-tab-size=\"9\"] {\n  -moz-tab-size: 9;\n  tab-size: 9;\n}\n\n.markdown-body .tab-size[data-tab-size=\"10\"] {\n  -moz-tab-size: 10;\n  tab-size: 10;\n}\n\n.markdown-body .tab-size[data-tab-size=\"11\"] {\n  -moz-tab-size: 11;\n  tab-size: 11;\n}\n\n.markdown-body .tab-size[data-tab-size=\"12\"] {\n  -moz-tab-size: 12;\n  tab-size: 12;\n}\n\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n\n.markdown-body .task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module), __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/uc.micro/categories/Cc/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cc/regex.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/Cf/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cf/regex.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/P/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/P/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/Z/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/Z/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

/***/ }),

/***/ "./node_modules/uc.micro/index.js":
/*!****************************************!*\
  !*** ./node_modules/uc.micro/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.Any = __webpack_require__(/*! ./properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js");
exports.Cc  = __webpack_require__(/*! ./categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js");
exports.Cf  = __webpack_require__(/*! ./categories/Cf/regex */ "./node_modules/uc.micro/categories/Cf/regex.js");
exports.P   = __webpack_require__(/*! ./categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js");
exports.Z   = __webpack_require__(/*! ./categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js");


/***/ }),

/***/ "./node_modules/uc.micro/properties/Any/regex.js":
/*!*******************************************************!*\
  !*** ./node_modules/uc.micro/properties/Any/regex.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXJrRmRvd25SZW5kZXJlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9naXRodWItbWFya2Rvd24tY3NzL2dpdGh1Yi1tYXJrZG93bi5jc3M/MGVlZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnktaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9saW5raWZ5LWl0L2xpYi9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2NvbW1vbi9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9jb21tb24vaHRtbF9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL2h0bWxfcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvaGVscGVycy9wYXJzZV9saW5rX2Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfdGl0bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcGFyc2VyX2Jsb2NrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3BhcnNlcl9jb3JlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3BhcnNlcl9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcHJlc2V0cy9jb21tb25tYXJrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3ByZXNldHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wcmVzZXRzL3plcm8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2ZlbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svaHIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svaHRtbF9ibG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9saGVhZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9saXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svc3RhdGVfYmxvY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svdGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9ibG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2lubGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2xpbmtpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9yZXBsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9zbWFydHF1b3Rlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL3N0YXRlX2NvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2F1dG9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9iYWNrdGlja3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2JhbGFuY2VfcGFpcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2VtcGhhc2lzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvaHRtbF9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2ltYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9uZXdsaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3RleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3RleHRfY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kdXJsL3BhcnNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dpdGh1Yi1tYXJrZG93bi1jc3MvZ2l0aHViLW1hcmtkb3duLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdWMubWljcm8vY2F0ZWdvcmllcy9DYy9yZWdleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VjLm1pY3JvL2NhdGVnb3JpZXMvQ2YvcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1AvcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1ovcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91Yy5taWNyby9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VjLm1pY3JvL3Byb3BlcnRpZXMvQW55L3JlZ2V4LmpzIl0sIm5hbWVzIjpbIm1kIiwiTWFya2Rvd25JdCIsImh0bWwiLCJsaW5raWZ5IiwiYjY0X3RvX3V0ZjgiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJhdG9iIiwibWVtbyIsIm1hcmtkb3duUmVuZGVyZXIiLCJjb250ZW50IiwiaXNCYXNlNjQiLCJtYXJrZG93biIsInVzZU1lbW8iLCJyZW5kZXIiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0NBSUE7QUFDQTs7QUFDQSxJQUFNQSxFQUFFLEdBQUcsSUFBSUMsa0RBQUosQ0FBZTtBQUN0QkMsTUFBSSxFQUFFLElBRGdCO0FBRXRCQyxTQUFPLEVBQUU7QUFGYSxDQUFmLENBQVgsQyxDQU1BOztBQUNBLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLGtCQUFrQixDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsR0FBRCxDQUFMLENBQVAsQ0FBekI7QUFDSDs7QUFFYyxrRkFBQUksa0RBQUksU0FBQyxTQUFTQyxnQkFBVCxPQUFpRDtBQUFBOztBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDakUsTUFBTUMsUUFBUSxHQUFHRCxRQUFRLEdBQUdSLFdBQVcsQ0FBQ08sT0FBRCxDQUFkLEdBQTBC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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T0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUss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aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbi8vIOWFt+S9k+a4suafk+WGheWuuemDveaYr+i3nyBwcm9wcyDmnInlhbPvvIzlpoLmnpwgcHJvcHMg5rKh5pyJ5Y+Y5YyW77yM5YiZ5peg6ZyA6YeN5paw5riy5p+TXHJcblxyXG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuaW1wb3J0IFwiZ2l0aHViLW1hcmtkb3duLWNzc1wiO1xyXG5cclxuXHJcbi8vIGh0bWw6IHRydWUgLS0g5b2T5Lyg6YCS5LqG6L+Z5Liq5Y+C5pWw5Lya5oqK5oiR5Lus55qEIGh0bWwg5Lit55qE5YaF5a656L2s5YyW5oiQIGh0bWxcclxuLy8gbGlua2lmeTogdHJ1ZSAtLSDlvZMgaHRtbCDph4zpnaLmnInpk77mjqXlsLHkvJrovazljJbkuLrlj6/ku6Xngrnlh7vnmoTpk77mjqVcclxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCh7XHJcbiAgICBodG1sOiB0cnVlLFxyXG4gICAgbGlua2lmeTogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxuLy8g5Lit5paH6Kej56CBXHJcbmZ1bmN0aW9uIGI2NF90b191dGY4KHN0cikge1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoYXRvYihzdHIpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oZnVuY3Rpb24gbWFya2Rvd25SZW5kZXJlcih7IGNvbnRlbnQsIGlzQmFzZTY0IH0pIHtcclxuICAgIGNvbnN0IG1hcmtkb3duID0gaXNCYXNlNjQgPyBiNjRfdG9fdXRmOChjb250ZW50KSA6IGNvbnRlbnRcclxuICAgIC8vIG1hcmtkb3duIOeahOWGheWuueayoeacieWPmOWMlu+8jOWImSBodG1sIOeahOWGheWuueWwseS4jeS8muWPmOWMlihtZC5yZW5kZXIg6L2s5YyW6L+H56iL5q+U6L6D6ICX5pe2KVxyXG4gICAgY29uc3QgaHRtbCA9IHVzZU1lbW8oKCkgPT4gbWQucmVuZGVyKG1hcmtkb3duKSwgW21hcmtkb3duXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19PjwvZGl2PjtcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9naXRodWItbWFya2Rvd24uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vZ2l0aHViLW1hcmtkb3duLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9naXRodWItbWFya2Rvd24uY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIid1c2Ugc3RyaWN0JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSGVscGVyc1xuXG4vLyBNZXJnZSBvYmplY3RzXG4vL1xuZnVuY3Rpb24gYXNzaWduKG9iaiAvKmZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiovKSB7XG4gIHZhciBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmICghc291cmNlKSB7IHJldHVybjsgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9jbGFzcyhvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopOyB9XG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBTdHJpbmddJzsgfVxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7IH1cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nOyB9XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7IH1cblxuXG5mdW5jdGlvbiBlc2NhcGVSRShzdHIpIHsgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLj8qK14kW1xcXVxcXFwoKXt9fC1dL2csICdcXFxcJCYnKTsgfVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZnV6enlMaW5rOiB0cnVlLFxuICBmdXp6eUVtYWlsOiB0cnVlLFxuICBmdXp6eUlQOiBmYWxzZVxufTtcblxuXG5mdW5jdGlvbiBpc09wdGlvbnNPYmoob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmogfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrKSB7XG4gICAgcmV0dXJuIGFjYyB8fCBkZWZhdWx0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrKTtcbiAgfSwgZmFsc2UpO1xufVxuXG5cbnZhciBkZWZhdWx0U2NoZW1hcyA9IHtcbiAgJ2h0dHA6Jzoge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAodGV4dCwgcG9zLCBzZWxmKSB7XG4gICAgICB2YXIgdGFpbCA9IHRleHQuc2xpY2UocG9zKTtcblxuICAgICAgaWYgKCFzZWxmLnJlLmh0dHApIHtcbiAgICAgICAgLy8gY29tcGlsZSBsYXppbHksIGJlY2F1c2UgXCJob3N0XCItY29udGFpbmluZyB2YXJpYWJsZXMgY2FuIGNoYW5nZSBvbiB0bGRzIHVwZGF0ZS5cbiAgICAgICAgc2VsZi5yZS5odHRwID0gIG5ldyBSZWdFeHAoXG4gICAgICAgICAgJ15cXFxcL1xcXFwvJyArIHNlbGYucmUuc3JjX2F1dGggKyBzZWxmLnJlLnNyY19ob3N0X3BvcnRfc3RyaWN0ICsgc2VsZi5yZS5zcmNfcGF0aCwgJ2knXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoc2VsZi5yZS5odHRwLnRlc3QodGFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRhaWwubWF0Y2goc2VsZi5yZS5odHRwKVswXS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sXG4gICdodHRwczonOiAgJ2h0dHA6JyxcbiAgJ2Z0cDonOiAgICAnaHR0cDonLFxuICAnLy8nOiAgICAgIHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKHRleHQsIHBvcywgc2VsZikge1xuICAgICAgdmFyIHRhaWwgPSB0ZXh0LnNsaWNlKHBvcyk7XG5cbiAgICAgIGlmICghc2VsZi5yZS5ub19odHRwKSB7XG4gICAgICAvLyBjb21waWxlIGxhemlseSwgYmVjYXVzZSBcImhvc3RcIi1jb250YWluaW5nIHZhcmlhYmxlcyBjYW4gY2hhbmdlIG9uIHRsZHMgdXBkYXRlLlxuICAgICAgICBzZWxmLnJlLm5vX2h0dHAgPSAgbmV3IFJlZ0V4cChcbiAgICAgICAgICAnXicgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX2F1dGggK1xuICAgICAgICAgIC8vIERvbid0IGFsbG93IHNpbmdsZS1sZXZlbCBkb21haW5zLCBiZWNhdXNlIG9mIGZhbHNlIHBvc2l0aXZlcyBsaWtlICcvL3Rlc3QnXG4gICAgICAgICAgLy8gd2l0aCBjb2RlIGNvbW1lbnRzXG4gICAgICAgICAgJyg/OmxvY2FsaG9zdHwoPzooPzonICsgc2VsZi5yZS5zcmNfZG9tYWluICsgJylcXFxcLikrJyArIHNlbGYucmUuc3JjX2RvbWFpbl9yb290ICsgJyknICtcbiAgICAgICAgICBzZWxmLnJlLnNyY19wb3J0ICtcbiAgICAgICAgICBzZWxmLnJlLnNyY19ob3N0X3Rlcm1pbmF0b3IgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX3BhdGgsXG5cbiAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYucmUubm9faHR0cC50ZXN0KHRhaWwpKSB7XG4gICAgICAgIC8vIHNob3VsZCBub3QgYmUgYDovL2AgJiBgLy8vYCwgdGhhdCBwcm90ZWN0cyBmcm9tIGVycm9ycyBpbiBwcm90b2NvbCBuYW1lXG4gICAgICAgIGlmIChwb3MgPj0gMyAmJiB0ZXh0W3BvcyAtIDNdID09PSAnOicpIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgaWYgKHBvcyA+PSAzICYmIHRleHRbcG9zIC0gM10gPT09ICcvJykgeyByZXR1cm4gMDsgfVxuICAgICAgICByZXR1cm4gdGFpbC5tYXRjaChzZWxmLnJlLm5vX2h0dHApWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSxcbiAgJ21haWx0bzonOiB7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh0ZXh0LCBwb3MsIHNlbGYpIHtcbiAgICAgIHZhciB0YWlsID0gdGV4dC5zbGljZShwb3MpO1xuXG4gICAgICBpZiAoIXNlbGYucmUubWFpbHRvKSB7XG4gICAgICAgIHNlbGYucmUubWFpbHRvID0gIG5ldyBSZWdFeHAoXG4gICAgICAgICAgJ14nICsgc2VsZi5yZS5zcmNfZW1haWxfbmFtZSArICdAJyArIHNlbGYucmUuc3JjX2hvc3Rfc3RyaWN0LCAnaSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLnJlLm1haWx0by50ZXN0KHRhaWwpKSB7XG4gICAgICAgIHJldHVybiB0YWlsLm1hdGNoKHNlbGYucmUubWFpbHRvKVswXS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cbn07XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbiovXG5cbi8vIFJFIHBhdHRlcm4gZm9yIDItY2hhcmFjdGVyIHRsZHMgKGF1dG9nZW5lcmF0ZWQgYnkgLi9zdXBwb3J0L3RsZHNfMmNoYXJfZ2VuLmpzKVxudmFyIHRsZHNfMmNoX3NyY19yZSA9ICdhW2NkZWZnaWxtbm9xcnN0dXd4el18YlthYmRlZmdoaWptbm9yc3R2d3l6XXxjW2FjZGZnaGlrbG1ub3J1dnd4eXpdfGRbZWprbW96XXxlW2NlZ3JzdHVdfGZbaWprbW9yXXxnW2FiZGVmZ2hpbG1ucHFyc3R1d3ldfGhba21ucnR1XXxpW2RlbG1ub3Fyc3RdfGpbZW1vcF18a1tlZ2hpbW5wcnd5el18bFthYmNpa3JzdHV2eV18bVthY2RlZ2hrbG1ub3BxcnN0dXZ3eHl6XXxuW2FjZWZnaWxvcHJ1el18b218cFthZWZnaGtsbW5yc3R3eV18cWF8cltlb3N1d118c1thYmNkZWdoaWprbG1ub3J0dXZ4eXpdfHRbY2RmZ2hqa2xtbm9ydHZ3el18dVthZ2tzeXpdfHZbYWNlZ2ludV18d1tmc118eVtldF18elthbXddJztcblxuLy8gRE9OJ1QgdHJ5IHRvIG1ha2UgUFJzIHdpdGggY2hhbmdlcy4gRXh0ZW5kIFRMRHMgd2l0aCBMaW5raWZ5SXQudGxkcygpIGluc3RlYWRcbnZhciB0bGRzX2RlZmF1bHQgPSAnYml6fGNvbXxlZHV8Z292fG5ldHxvcmd8cHJvfHdlYnx4eHh8YWVyb3xhc2lhfGNvb3B8aW5mb3xtdXNldW18bmFtZXxzaG9wfNGA0YQnLnNwbGl0KCd8Jyk7XG5cbi8qZXNsaW50LWVuYWJsZSBtYXgtbGVuKi9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gcmVzZXRTY2FuQ2FjaGUoc2VsZikge1xuICBzZWxmLl9faW5kZXhfXyA9IC0xO1xuICBzZWxmLl9fdGV4dF9jYWNoZV9fICAgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFsaWRhdG9yKHJlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGV4dCwgcG9zKSB7XG4gICAgdmFyIHRhaWwgPSB0ZXh0LnNsaWNlKHBvcyk7XG5cbiAgICBpZiAocmUudGVzdCh0YWlsKSkge1xuICAgICAgcmV0dXJuIHRhaWwubWF0Y2gocmUpWzBdLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vcm1hbGl6ZXIoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIHNlbGYpIHtcbiAgICBzZWxmLm5vcm1hbGl6ZShtYXRjaCk7XG4gIH07XG59XG5cbi8vIFNjaGVtYXMgY29tcGlsZXIuIEJ1aWxkIHJlZ2V4cHMuXG4vL1xuZnVuY3Rpb24gY29tcGlsZShzZWxmKSB7XG5cbiAgLy8gTG9hZCAmIGNsb25lIFJFIHBhdHRlcm5zLlxuICB2YXIgcmUgPSBzZWxmLnJlID0gcmVxdWlyZSgnLi9saWIvcmUnKShzZWxmLl9fb3B0c19fKTtcblxuICAvLyBEZWZpbmUgZHluYW1pYyBwYXR0ZXJuc1xuICB2YXIgdGxkcyA9IHNlbGYuX190bGRzX18uc2xpY2UoKTtcblxuICBzZWxmLm9uQ29tcGlsZSgpO1xuXG4gIGlmICghc2VsZi5fX3RsZHNfcmVwbGFjZWRfXykge1xuICAgIHRsZHMucHVzaCh0bGRzXzJjaF9zcmNfcmUpO1xuICB9XG4gIHRsZHMucHVzaChyZS5zcmNfeG4pO1xuXG4gIHJlLnNyY190bGRzID0gdGxkcy5qb2luKCd8Jyk7XG5cbiAgZnVuY3Rpb24gdW50cGwodHBsKSB7IHJldHVybiB0cGwucmVwbGFjZSgnJVRMRFMlJywgcmUuc3JjX3RsZHMpOyB9XG5cbiAgcmUuZW1haWxfZnV6enkgICAgICA9IFJlZ0V4cCh1bnRwbChyZS50cGxfZW1haWxfZnV6enkpLCAnaScpO1xuICByZS5saW5rX2Z1enp5ICAgICAgID0gUmVnRXhwKHVudHBsKHJlLnRwbF9saW5rX2Z1enp5KSwgJ2knKTtcbiAgcmUubGlua19ub19pcF9mdXp6eSA9IFJlZ0V4cCh1bnRwbChyZS50cGxfbGlua19ub19pcF9mdXp6eSksICdpJyk7XG4gIHJlLmhvc3RfZnV6enlfdGVzdCAgPSBSZWdFeHAodW50cGwocmUudHBsX2hvc3RfZnV6enlfdGVzdCksICdpJyk7XG5cbiAgLy9cbiAgLy8gQ29tcGlsZSBlYWNoIHNjaGVtYVxuICAvL1xuXG4gIHZhciBhbGlhc2VzID0gW107XG5cbiAgc2VsZi5fX2NvbXBpbGVkX18gPSB7fTsgLy8gUmVzZXQgY29tcGlsZWQgZGF0YVxuXG4gIGZ1bmN0aW9uIHNjaGVtYUVycm9yKG5hbWUsIHZhbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignKExpbmtpZnlJdCkgSW52YWxpZCBzY2hlbWEgXCInICsgbmFtZSArICdcIjogJyArIHZhbCk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhzZWxmLl9fc2NoZW1hc19fKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHNlbGYuX19zY2hlbWFzX19bbmFtZV07XG5cbiAgICAvLyBza2lwIGRpc2FibGVkIG1ldGhvZHNcbiAgICBpZiAodmFsID09PSBudWxsKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIGNvbXBpbGVkID0geyB2YWxpZGF0ZTogbnVsbCwgbGluazogbnVsbCB9O1xuXG4gICAgc2VsZi5fX2NvbXBpbGVkX19bbmFtZV0gPSBjb21waWxlZDtcblxuICAgIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBpZiAoaXNSZWdFeHAodmFsLnZhbGlkYXRlKSkge1xuICAgICAgICBjb21waWxlZC52YWxpZGF0ZSA9IGNyZWF0ZVZhbGlkYXRvcih2YWwudmFsaWRhdGUpO1xuICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbC52YWxpZGF0ZSkpIHtcbiAgICAgICAgY29tcGlsZWQudmFsaWRhdGUgPSB2YWwudmFsaWRhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2hlbWFFcnJvcihuYW1lLCB2YWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWwubm9ybWFsaXplKSkge1xuICAgICAgICBjb21waWxlZC5ub3JtYWxpemUgPSB2YWwubm9ybWFsaXplO1xuICAgICAgfSBlbHNlIGlmICghdmFsLm5vcm1hbGl6ZSkge1xuICAgICAgICBjb21waWxlZC5ub3JtYWxpemUgPSBjcmVhdGVOb3JtYWxpemVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2hlbWFFcnJvcihuYW1lLCB2YWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcbiAgICAgIGFsaWFzZXMucHVzaChuYW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlbWFFcnJvcihuYW1lLCB2YWwpO1xuICB9KTtcblxuICAvL1xuICAvLyBDb21waWxlIHBvc3Rwb25lZCBhbGlhc2VzXG4gIC8vXG5cbiAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgIGlmICghc2VsZi5fX2NvbXBpbGVkX19bc2VsZi5fX3NjaGVtYXNfX1thbGlhc11dKSB7XG4gICAgICAvLyBTaWxlbnRseSBmYWlsIG9uIG1pc3NlZCBzY2hlbWFzIHRvIGF2b2lkIGVycm9ucyBvbiBkaXNhYmxlLlxuICAgICAgLy8gc2NoZW1hRXJyb3IoYWxpYXMsIHNlbGYuX19zY2hlbWFzX19bYWxpYXNdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLl9fY29tcGlsZWRfX1thbGlhc10udmFsaWRhdGUgPVxuICAgICAgc2VsZi5fX2NvbXBpbGVkX19bc2VsZi5fX3NjaGVtYXNfX1thbGlhc11dLnZhbGlkYXRlO1xuICAgIHNlbGYuX19jb21waWxlZF9fW2FsaWFzXS5ub3JtYWxpemUgPVxuICAgICAgc2VsZi5fX2NvbXBpbGVkX19bc2VsZi5fX3NjaGVtYXNfX1thbGlhc11dLm5vcm1hbGl6ZTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gRmFrZSByZWNvcmQgZm9yIGd1ZXNzZWQgbGlua3NcbiAgLy9cbiAgc2VsZi5fX2NvbXBpbGVkX19bJyddID0geyB2YWxpZGF0ZTogbnVsbCwgbm9ybWFsaXplOiBjcmVhdGVOb3JtYWxpemVyKCkgfTtcblxuICAvL1xuICAvLyBCdWlsZCBzY2hlbWEgY29uZGl0aW9uXG4gIC8vXG4gIHZhciBzbGlzdCA9IE9iamVjdC5rZXlzKHNlbGYuX19jb21waWxlZF9fKVxuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBkaXNhYmxlZCAmIGZha2Ugc2NoZW1hc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUubGVuZ3RoID4gMCAmJiBzZWxmLl9fY29tcGlsZWRfX1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZXNjYXBlUkUpXG4gICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJ3wnKTtcbiAgLy8gKD8hXykgY2F1c2UgMS41eCBzbG93ZG93blxuICBzZWxmLnJlLnNjaGVtYV90ZXN0ICAgPSBSZWdFeHAoJyhefCg/IV8pKD86Wz48XFx1ZmY1Y118JyArIHJlLnNyY19aUENjICsgJykpKCcgKyBzbGlzdCArICcpJywgJ2knKTtcbiAgc2VsZi5yZS5zY2hlbWFfc2VhcmNoID0gUmVnRXhwKCcoXnwoPyFfKSg/Ols+PFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKSgnICsgc2xpc3QgKyAnKScsICdpZycpO1xuXG4gIHNlbGYucmUucHJldGVzdCA9IFJlZ0V4cChcbiAgICAnKCcgKyBzZWxmLnJlLnNjaGVtYV90ZXN0LnNvdXJjZSArICcpfCgnICsgc2VsZi5yZS5ob3N0X2Z1enp5X3Rlc3Quc291cmNlICsgJyl8QCcsXG4gICAgJ2knXG4gICk7XG5cbiAgLy9cbiAgLy8gQ2xlYW51cFxuICAvL1xuXG4gIHJlc2V0U2NhbkNhY2hlKHNlbGYpO1xufVxuXG4vKipcbiAqIGNsYXNzIE1hdGNoXG4gKlxuICogTWF0Y2ggcmVzdWx0LiBTaW5nbGUgZWxlbWVudCBvZiBhcnJheSwgcmV0dXJuZWQgYnkgW1tMaW5raWZ5SXQjbWF0Y2hdXVxuICoqL1xuZnVuY3Rpb24gTWF0Y2goc2VsZiwgc2hpZnQpIHtcbiAgdmFyIHN0YXJ0ID0gc2VsZi5fX2luZGV4X18sXG4gICAgICBlbmQgICA9IHNlbGYuX19sYXN0X2luZGV4X18sXG4gICAgICB0ZXh0ICA9IHNlbGYuX190ZXh0X2NhY2hlX18uc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgLyoqXG4gICAqIE1hdGNoI3NjaGVtYSAtPiBTdHJpbmdcbiAgICpcbiAgICogUHJlZml4IChwcm90b2NvbCkgZm9yIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMuc2NoZW1hICAgID0gc2VsZi5fX3NjaGVtYV9fLnRvTG93ZXJDYXNlKCk7XG4gIC8qKlxuICAgKiBNYXRjaCNpbmRleCAtPiBOdW1iZXJcbiAgICpcbiAgICogRmlyc3QgcG9zaXRpb24gb2YgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5pbmRleCAgICAgPSBzdGFydCArIHNoaWZ0O1xuICAvKipcbiAgICogTWF0Y2gjbGFzdEluZGV4IC0+IE51bWJlclxuICAgKlxuICAgKiBOZXh0IHBvc2l0aW9uIGFmdGVyIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMubGFzdEluZGV4ID0gZW5kICsgc2hpZnQ7XG4gIC8qKlxuICAgKiBNYXRjaCNyYXcgLT4gU3RyaW5nXG4gICAqXG4gICAqIE1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMucmF3ICAgICAgID0gdGV4dDtcbiAgLyoqXG4gICAqIE1hdGNoI3RleHQgLT4gU3RyaW5nXG4gICAqXG4gICAqIE5vdG1hbGl6ZWQgdGV4dCBvZiBtYXRjaGVkIHN0cmluZy5cbiAgICoqL1xuICB0aGlzLnRleHQgICAgICA9IHRleHQ7XG4gIC8qKlxuICAgKiBNYXRjaCN1cmwgLT4gU3RyaW5nXG4gICAqXG4gICAqIE5vcm1hbGl6ZWQgdXJsIG9mIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMudXJsICAgICAgID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWF0Y2goc2VsZiwgc2hpZnQpIHtcbiAgdmFyIG1hdGNoID0gbmV3IE1hdGNoKHNlbGYsIHNoaWZ0KTtcblxuICBzZWxmLl9fY29tcGlsZWRfX1ttYXRjaC5zY2hlbWFdLm5vcm1hbGl6ZShtYXRjaCwgc2VsZik7XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG5cbi8qKlxuICogY2xhc3MgTGlua2lmeUl0XG4gKiovXG5cbi8qKlxuICogbmV3IExpbmtpZnlJdChzY2hlbWFzLCBvcHRpb25zKVxuICogLSBzY2hlbWFzIChPYmplY3QpOiBPcHRpb25hbC4gQWRkaXRpb25hbCBzY2hlbWFzIHRvIHZhbGlkYXRlIChwcmVmaXgvdmFsaWRhdG9yKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB7IGZ1enp5TGlua3xmdXp6eUVtYWlsfGZ1enp5SVA6IHRydWV8ZmFsc2UgfVxuICpcbiAqIENyZWF0ZXMgbmV3IGxpbmtpZmllciBpbnN0YW5jZSB3aXRoIG9wdGlvbmFsIGFkZGl0aW9uYWwgc2NoZW1hcy5cbiAqIENhbiBiZSBjYWxsZWQgd2l0aG91dCBgbmV3YCBrZXl3b3JkIGZvciBjb252ZW5pZW5jZS5cbiAqXG4gKiBCeSBkZWZhdWx0IHVuZGVyc3RhbmRzOlxuICpcbiAqIC0gYGh0dHAocyk6Ly8uLi5gICwgYGZ0cDovLy4uLmAsIGBtYWlsdG86Li4uYCAmIGAvLy4uLmAgbGlua3NcbiAqIC0gXCJmdXp6eVwiIGxpbmtzIGFuZCBlbWFpbHMgKGV4YW1wbGUuY29tLCBmb29AYmFyLmNvbSkuXG4gKlxuICogYHNjaGVtYXNgIGlzIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBrZXkvdmFsdWUgZGVzY3JpYmVzIHByb3RvY29sL3J1bGU6XG4gKlxuICogLSBfX2tleV9fIC0gbGluayBwcmVmaXggKHVzdWFsbHksIHByb3RvY29sIG5hbWUgd2l0aCBgOmAgYXQgdGhlIGVuZCwgYHNreXBlOmBcbiAqICAgZm9yIGV4YW1wbGUpLiBgbGlua2lmeS1pdGAgbWFrZXMgc2h1cmUgdGhhdCBwcmVmaXggaXMgbm90IHByZWNlZWRlZCB3aXRoXG4gKiAgIGFscGhhbnVtZXJpYyBjaGFyIGFuZCBzeW1ib2xzLiBPbmx5IHdoaXRlc3BhY2VzIGFuZCBwdW5jdHVhdGlvbiBhbGxvd2VkLlxuICogLSBfX3ZhbHVlX18gLSBydWxlIHRvIGNoZWNrIHRhaWwgYWZ0ZXIgbGluayBwcmVmaXhcbiAqICAgLSBfU3RyaW5nXyAtIGp1c3QgYWxpYXMgdG8gZXhpc3RpbmcgcnVsZVxuICogICAtIF9PYmplY3RfXG4gKiAgICAgLSBfdmFsaWRhdGVfIC0gdmFsaWRhdG9yIGZ1bmN0aW9uIChzaG91bGQgcmV0dXJuIG1hdGNoZWQgbGVuZ3RoIG9uIHN1Y2Nlc3MpLFxuICogICAgICAgb3IgYFJlZ0V4cGAuXG4gKiAgICAgLSBfbm9ybWFsaXplXyAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIG5vcm1hbGl6ZSB0ZXh0ICYgdXJsIG9mIG1hdGNoZWQgcmVzdWx0XG4gKiAgICAgICAoZm9yIGV4YW1wbGUsIGZvciBAdHdpdHRlciBtZW50aW9ucykuXG4gKlxuICogYG9wdGlvbnNgOlxuICpcbiAqIC0gX19mdXp6eUxpbmtfXyAtIHJlY29nbmlnZSBVUkwtcyB3aXRob3V0IGBodHRwKHMpOmAgcHJlZml4LiBEZWZhdWx0IGB0cnVlYC5cbiAqIC0gX19mdXp6eUlQX18gLSBhbGxvdyBJUHMgaW4gZnV6enkgbGlua3MgYWJvdmUuIENhbiBjb25mbGljdCB3aXRoIHNvbWUgdGV4dHNcbiAqICAgbGlrZSB2ZXJzaW9uIG51bWJlcnMuIERlZmF1bHQgYGZhbHNlYC5cbiAqIC0gX19mdXp6eUVtYWlsX18gLSByZWNvZ25pemUgZW1haWxzIHdpdGhvdXQgYG1haWx0bzpgIHByZWZpeC5cbiAqXG4gKiovXG5mdW5jdGlvbiBMaW5raWZ5SXQoc2NoZW1hcywgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTGlua2lmeUl0KSkge1xuICAgIHJldHVybiBuZXcgTGlua2lmeUl0KHNjaGVtYXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKGlzT3B0aW9uc09iaihzY2hlbWFzKSkge1xuICAgICAgb3B0aW9ucyA9IHNjaGVtYXM7XG4gICAgICBzY2hlbWFzID0ge307XG4gICAgfVxuICB9XG5cbiAgdGhpcy5fX29wdHNfXyAgICAgICAgICAgPSBhc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAvLyBDYWNoZSBsYXN0IHRlc3RlZCByZXN1bHQuIFVzZWQgdG8gc2tpcCByZXBlYXRpbmcgc3RlcHMgb24gbmV4dCBgbWF0Y2hgIGNhbGwuXG4gIHRoaXMuX19pbmRleF9fICAgICAgICAgID0gLTE7XG4gIHRoaXMuX19sYXN0X2luZGV4X18gICAgID0gLTE7IC8vIE5leHQgc2NhbiBwb3NpdGlvblxuICB0aGlzLl9fc2NoZW1hX18gICAgICAgICA9ICcnO1xuICB0aGlzLl9fdGV4dF9jYWNoZV9fICAgICA9ICcnO1xuXG4gIHRoaXMuX19zY2hlbWFzX18gICAgICAgID0gYXNzaWduKHt9LCBkZWZhdWx0U2NoZW1hcywgc2NoZW1hcyk7XG4gIHRoaXMuX19jb21waWxlZF9fICAgICAgID0ge307XG5cbiAgdGhpcy5fX3RsZHNfXyAgICAgICAgICAgPSB0bGRzX2RlZmF1bHQ7XG4gIHRoaXMuX190bGRzX3JlcGxhY2VkX18gID0gZmFsc2U7XG5cbiAgdGhpcy5yZSA9IHt9O1xuXG4gIGNvbXBpbGUodGhpcyk7XG59XG5cblxuLyoqIGNoYWluYWJsZVxuICogTGlua2lmeUl0I2FkZChzY2hlbWEsIGRlZmluaXRpb24pXG4gKiAtIHNjaGVtYSAoU3RyaW5nKTogcnVsZSBuYW1lIChmaXhlZCBwYXR0ZXJuIHByZWZpeClcbiAqIC0gZGVmaW5pdGlvbiAoU3RyaW5nfFJlZ0V4cHxPYmplY3QpOiBzY2hlbWEgZGVmaW5pdGlvblxuICpcbiAqIEFkZCBuZXcgcnVsZSBkZWZpbml0aW9uLiBTZWUgY29uc3RydWN0b3IgZGVzY3JpcHRpb24gZm9yIGRldGFpbHMuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChzY2hlbWEsIGRlZmluaXRpb24pIHtcbiAgdGhpcy5fX3NjaGVtYXNfX1tzY2hlbWFdID0gZGVmaW5pdGlvbjtcbiAgY29tcGlsZSh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKiBjaGFpbmFibGVcbiAqIExpbmtpZnlJdCNzZXQob3B0aW9ucylcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogeyBmdXp6eUxpbmt8ZnV6enlFbWFpbHxmdXp6eUlQOiB0cnVlfGZhbHNlIH1cbiAqXG4gKiBTZXQgcmVjb2duaXRpb24gb3B0aW9ucyBmb3IgbGlua3Mgd2l0aG91dCBzY2hlbWEuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gIHRoaXMuX19vcHRzX18gPSBhc3NpZ24odGhpcy5fX29wdHNfXywgb3B0aW9ucyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIExpbmtpZnlJdCN0ZXN0KHRleHQpIC0+IEJvb2xlYW5cbiAqXG4gKiBTZWFyY2hlcyBsaW5raWZpYWJsZSBwYXR0ZXJuIGFuZCByZXR1cm5zIGB0cnVlYCBvbiBzdWNjZXNzIG9yIGBmYWxzZWAgb24gZmFpbC5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uIHRlc3QodGV4dCkge1xuICAvLyBSZXNldCBzY2FuIGNhY2hlXG4gIHRoaXMuX190ZXh0X2NhY2hlX18gPSB0ZXh0O1xuICB0aGlzLl9faW5kZXhfXyAgICAgID0gLTE7XG5cbiAgaWYgKCF0ZXh0Lmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICB2YXIgbSwgbWwsIG1lLCBsZW4sIHNoaWZ0LCBuZXh0LCByZSwgdGxkX3BvcywgYXRfcG9zO1xuXG4gIC8vIHRyeSB0byBzY2FuIGZvciBsaW5rIHdpdGggc2NoZW1hIC0gdGhhdCdzIHRoZSBtb3N0IHNpbXBsZSBydWxlXG4gIGlmICh0aGlzLnJlLnNjaGVtYV90ZXN0LnRlc3QodGV4dCkpIHtcbiAgICByZSA9IHRoaXMucmUuc2NoZW1hX3NlYXJjaDtcbiAgICByZS5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlICgobSA9IHJlLmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgICBsZW4gPSB0aGlzLnRlc3RTY2hlbWFBdCh0ZXh0LCBtWzJdLCByZS5sYXN0SW5kZXgpO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICB0aGlzLl9fc2NoZW1hX18gICAgID0gbVsyXTtcbiAgICAgICAgdGhpcy5fX2luZGV4X18gICAgICA9IG0uaW5kZXggKyBtWzFdLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fX2xhc3RfaW5kZXhfXyA9IG0uaW5kZXggKyBtWzBdLmxlbmd0aCArIGxlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuX19vcHRzX18uZnV6enlMaW5rICYmIHRoaXMuX19jb21waWxlZF9fWydodHRwOiddKSB7XG4gICAgLy8gZ3Vlc3Mgc2NoZW1hbGVzcyBsaW5rc1xuICAgIHRsZF9wb3MgPSB0ZXh0LnNlYXJjaCh0aGlzLnJlLmhvc3RfZnV6enlfdGVzdCk7XG4gICAgaWYgKHRsZF9wb3MgPj0gMCkge1xuICAgICAgLy8gaWYgdGxkIGlzIGxvY2F0ZWQgYWZ0ZXIgZm91bmQgbGluayAtIG5vIG5lZWQgdG8gY2hlY2sgZnV6enkgcGF0dGVyblxuICAgICAgaWYgKHRoaXMuX19pbmRleF9fIDwgMCB8fCB0bGRfcG9zIDwgdGhpcy5fX2luZGV4X18pIHtcbiAgICAgICAgaWYgKChtbCA9IHRleHQubWF0Y2godGhpcy5fX29wdHNfXy5mdXp6eUlQID8gdGhpcy5yZS5saW5rX2Z1enp5IDogdGhpcy5yZS5saW5rX25vX2lwX2Z1enp5KSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIHNoaWZ0ID0gbWwuaW5kZXggKyBtbFsxXS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHNoaWZ0IDwgdGhpcy5fX2luZGV4X18pIHtcbiAgICAgICAgICAgIHRoaXMuX19zY2hlbWFfXyAgICAgPSAnJztcbiAgICAgICAgICAgIHRoaXMuX19pbmRleF9fICAgICAgPSBzaGlmdDtcbiAgICAgICAgICAgIHRoaXMuX19sYXN0X2luZGV4X18gPSBtbC5pbmRleCArIG1sWzBdLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fX29wdHNfXy5mdXp6eUVtYWlsICYmIHRoaXMuX19jb21waWxlZF9fWydtYWlsdG86J10pIHtcbiAgICAvLyBndWVzcyBzY2hlbWFsZXNzIGVtYWlsc1xuICAgIGF0X3BvcyA9IHRleHQuaW5kZXhPZignQCcpO1xuICAgIGlmIChhdF9wb3MgPj0gMCkge1xuICAgICAgLy8gV2UgY2FuJ3Qgc2tpcCB0aGlzIGNoZWNrLCBiZWNhdXNlIHRoaXMgY2FzZXMgYXJlIHBvc3NpYmxlOlxuICAgICAgLy8gMTkyLjE2OC4xLjFAZ21haWwuY29tLCBteS5pbkBleGFtcGxlLmNvbVxuICAgICAgaWYgKChtZSA9IHRleHQubWF0Y2godGhpcy5yZS5lbWFpbF9mdXp6eSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgc2hpZnQgPSBtZS5pbmRleCArIG1lWzFdLmxlbmd0aDtcbiAgICAgICAgbmV4dCAgPSBtZS5pbmRleCArIG1lWzBdLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHNoaWZ0IDwgdGhpcy5fX2luZGV4X18gfHxcbiAgICAgICAgICAgIChzaGlmdCA9PT0gdGhpcy5fX2luZGV4X18gJiYgbmV4dCA+IHRoaXMuX19sYXN0X2luZGV4X18pKSB7XG4gICAgICAgICAgdGhpcy5fX3NjaGVtYV9fICAgICA9ICdtYWlsdG86JztcbiAgICAgICAgICB0aGlzLl9faW5kZXhfXyAgICAgID0gc2hpZnQ7XG4gICAgICAgICAgdGhpcy5fX2xhc3RfaW5kZXhfXyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX2luZGV4X18gPj0gMDtcbn07XG5cblxuLyoqXG4gKiBMaW5raWZ5SXQjcHJldGVzdCh0ZXh0KSAtPiBCb29sZWFuXG4gKlxuICogVmVyeSBxdWljayBjaGVjaywgdGhhdCBjYW4gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMuIFJldHVybnMgdHJ1ZSBpZiBsaW5rIE1BWSBCRVxuICogY2FuIGV4aXN0cy4gQ2FuIGJlIHVzZWQgZm9yIHNwZWVkIG9wdGltaXphdGlvbiwgd2hlbiB5b3UgbmVlZCB0byBjaGVjayB0aGF0XG4gKiBsaW5rIE5PVCBleGlzdHMuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnByZXRlc3QgPSBmdW5jdGlvbiBwcmV0ZXN0KHRleHQpIHtcbiAgcmV0dXJuIHRoaXMucmUucHJldGVzdC50ZXN0KHRleHQpO1xufTtcblxuXG4vKipcbiAqIExpbmtpZnlJdCN0ZXN0U2NoZW1hQXQodGV4dCwgbmFtZSwgcG9zaXRpb24pIC0+IE51bWJlclxuICogLSB0ZXh0IChTdHJpbmcpOiB0ZXh0IHRvIHNjYW5cbiAqIC0gbmFtZSAoU3RyaW5nKTogcnVsZSAoc2NoZW1hKSBuYW1lXG4gKiAtIHBvc2l0aW9uIChOdW1iZXIpOiB0ZXh0IG9mZnNldCB0byBjaGVjayBmcm9tXG4gKlxuICogU2ltaWxhciB0byBbW0xpbmtpZnlJdCN0ZXN0XV0gYnV0IGNoZWNrcyBvbmx5IHNwZWNpZmljIHByb3RvY29sIHRhaWwgZXhhY3RseVxuICogYXQgZ2l2ZW4gcG9zaXRpb24uIFJldHVybnMgbGVuZ3RoIG9mIGZvdW5kIHBhdHRlcm4gKDAgb24gZmFpbCkuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnRlc3RTY2hlbWFBdCA9IGZ1bmN0aW9uIHRlc3RTY2hlbWFBdCh0ZXh0LCBzY2hlbWEsIHBvcykge1xuICAvLyBJZiBub3Qgc3VwcG9ydGVkIHNjaGVtYSBjaGVjayByZXF1ZXN0ZWQgLSB0ZXJtaW5hdGVcbiAgaWYgKCF0aGlzLl9fY29tcGlsZWRfX1tzY2hlbWEudG9Mb3dlckNhc2UoKV0pIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gdGhpcy5fX2NvbXBpbGVkX19bc2NoZW1hLnRvTG93ZXJDYXNlKCldLnZhbGlkYXRlKHRleHQsIHBvcywgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogTGlua2lmeUl0I21hdGNoKHRleHQpIC0+IEFycmF5fG51bGxcbiAqXG4gKiBSZXR1cm5zIGFycmF5IG9mIGZvdW5kIGxpbmsgZGVzY3JpcHRpb25zIG9yIGBudWxsYCBvbiBmYWlsLiBXZSBzdHJvbmdseVxuICogcmVjb21tZW5kIHRvIHVzZSBbW0xpbmtpZnlJdCN0ZXN0XV0gZmlyc3QsIGZvciBiZXN0IHNwZWVkLlxuICpcbiAqICMjIyMjIFJlc3VsdCBtYXRjaCBkZXNjcmlwdGlvblxuICpcbiAqIC0gX19zY2hlbWFfXyAtIGxpbmsgc2NoZW1hLCBjYW4gYmUgZW1wdHkgZm9yIGZ1enp5IGxpbmtzLCBvciBgLy9gIGZvclxuICogICBwcm90b2NvbC1uZXV0cmFsICBsaW5rcy5cbiAqIC0gX19pbmRleF9fIC0gb2Zmc2V0IG9mIG1hdGNoZWQgdGV4dFxuICogLSBfX2xhc3RJbmRleF9fIC0gaW5kZXggb2YgbmV4dCBjaGFyIGFmdGVyIG1hdGhjaCBlbmRcbiAqIC0gX19yYXdfXyAtIG1hdGNoZWQgdGV4dFxuICogLSBfX3RleHRfXyAtIG5vcm1hbGl6ZWQgdGV4dFxuICogLSBfX3VybF9fIC0gbGluaywgZ2VuZXJhdGVkIGZyb20gbWF0Y2hlZCB0ZXh0XG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gbWF0Y2godGV4dCkge1xuICB2YXIgc2hpZnQgPSAwLCByZXN1bHQgPSBbXTtcblxuICAvLyBUcnkgdG8gdGFrZSBwcmV2aW91cyBlbGVtZW50IGZyb20gY2FjaGUsIGlmIC50ZXN0KCkgY2FsbGVkIGJlZm9yZVxuICBpZiAodGhpcy5fX2luZGV4X18gPj0gMCAmJiB0aGlzLl9fdGV4dF9jYWNoZV9fID09PSB0ZXh0KSB7XG4gICAgcmVzdWx0LnB1c2goY3JlYXRlTWF0Y2godGhpcywgc2hpZnQpKTtcbiAgICBzaGlmdCA9IHRoaXMuX19sYXN0X2luZGV4X187XG4gIH1cblxuICAvLyBDdXQgaGVhZCBpZiBjYWNoZSB3YXMgdXNlZFxuICB2YXIgdGFpbCA9IHNoaWZ0ID8gdGV4dC5zbGljZShzaGlmdCkgOiB0ZXh0O1xuXG4gIC8vIFNjYW4gc3RyaW5nIHVudGlsIGVuZCByZWFjaGVkXG4gIHdoaWxlICh0aGlzLnRlc3QodGFpbCkpIHtcbiAgICByZXN1bHQucHVzaChjcmVhdGVNYXRjaCh0aGlzLCBzaGlmdCkpO1xuXG4gICAgdGFpbCA9IHRhaWwuc2xpY2UodGhpcy5fX2xhc3RfaW5kZXhfXyk7XG4gICAgc2hpZnQgKz0gdGhpcy5fX2xhc3RfaW5kZXhfXztcbiAgfVxuXG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBMaW5raWZ5SXQjdGxkcyhsaXN0IFssIGtlZXBPbGRdKSAtPiB0aGlzXG4gKiAtIGxpc3QgKEFycmF5KTogbGlzdCBvZiB0bGRzXG4gKiAtIGtlZXBPbGQgKEJvb2xlYW4pOiBtZXJnZSB3aXRoIGN1cnJlbnQgbGlzdCBpZiBgdHJ1ZWAgKGBmYWxzZWAgYnkgZGVmYXVsdClcbiAqXG4gKiBMb2FkIChvciBtZXJnZSkgbmV3IHRsZHMgbGlzdC4gVGhvc2UgYXJlIHVzZXIgZm9yIGZ1enp5IGxpbmtzICh3aXRob3V0IHByZWZpeClcbiAqIHRvIGF2b2lkIGZhbHNlIHBvc2l0aXZlcy4gQnkgZGVmYXVsdCB0aGlzIGFsZ29yeXRobSB1c2VkOlxuICpcbiAqIC0gaG9zdG5hbWUgd2l0aCBhbnkgMi1sZXR0ZXIgcm9vdCB6b25lcyBhcmUgb2suXG4gKiAtIGJpenxjb218ZWR1fGdvdnxuZXR8b3JnfHByb3x3ZWJ8eHh4fGFlcm98YXNpYXxjb29wfGluZm98bXVzZXVtfG5hbWV8c2hvcHzRgNGEXG4gKiAgIGFyZSBvay5cbiAqIC0gZW5jb2RlZCAoYHhuLS0uLi5gKSByb290IHpvbmVzIGFyZSBvay5cbiAqXG4gKiBJZiBsaXN0IGlzIHJlcGxhY2VkLCB0aGVuIGV4YWN0IG1hdGNoIGZvciAyLWNoYXJzIHJvb3Qgem9uZXMgd2lsbCBiZSBjaGVja2VkLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS50bGRzID0gZnVuY3Rpb24gdGxkcyhsaXN0LCBrZWVwT2xkKSB7XG4gIGxpc3QgPSBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdCA6IFsgbGlzdCBdO1xuXG4gIGlmICgha2VlcE9sZCkge1xuICAgIHRoaXMuX190bGRzX18gPSBsaXN0LnNsaWNlKCk7XG4gICAgdGhpcy5fX3RsZHNfcmVwbGFjZWRfXyA9IHRydWU7XG4gICAgY29tcGlsZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuX190bGRzX18gPSB0aGlzLl9fdGxkc19fLmNvbmNhdChsaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbCwgaWR4LCBhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbCAhPT0gYXJyW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKTtcblxuICBjb21waWxlKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTGlua2lmeUl0I25vcm1hbGl6ZShtYXRjaClcbiAqXG4gKiBEZWZhdWx0IG5vcm1hbGl6ZXIgKGlmIHNjaGVtYSBkb2VzIG5vdCBkZWZpbmUgaXQncyBvd24pLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWF0Y2gpIHtcblxuICAvLyBEbyBtaW5pbWFsIHBvc3NpYmxlIGNoYW5nZXMgYnkgZGVmYXVsdC4gTmVlZCB0byBjb2xsZWN0IGZlZWRiYWNrIHByaW9yXG4gIC8vIHRvIG1vdmUgZm9yd2FyZCBodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbGlua2lmeS1pdC9pc3N1ZXMvMVxuXG4gIGlmICghbWF0Y2guc2NoZW1hKSB7IG1hdGNoLnVybCA9ICdodHRwOi8vJyArIG1hdGNoLnVybDsgfVxuXG4gIGlmIChtYXRjaC5zY2hlbWEgPT09ICdtYWlsdG86JyAmJiAhL15tYWlsdG86L2kudGVzdChtYXRjaC51cmwpKSB7XG4gICAgbWF0Y2gudXJsID0gJ21haWx0bzonICsgbWF0Y2gudXJsO1xuICB9XG59O1xuXG5cbi8qKlxuICogTGlua2lmeUl0I29uQ29tcGlsZSgpXG4gKlxuICogT3ZlcnJpZGUgdG8gbW9kaWZ5IGJhc2ljIFJlZ0V4cC1zLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5vbkNvbXBpbGUgPSBmdW5jdGlvbiBvbkNvbXBpbGUoKSB7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTGlua2lmeUl0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIHJlID0ge307XG5cbiAgLy8gVXNlIGRpcmVjdCBleHRyYWN0IGluc3RlYWQgb2YgYHJlZ2VuZXJhdGVgIHRvIHJlZHVzZSBicm93c2VyaWZpZWQgc2l6ZVxuICByZS5zcmNfQW55ID0gcmVxdWlyZSgndWMubWljcm8vcHJvcGVydGllcy9BbnkvcmVnZXgnKS5zb3VyY2U7XG4gIHJlLnNyY19DYyAgPSByZXF1aXJlKCd1Yy5taWNyby9jYXRlZ29yaWVzL0NjL3JlZ2V4Jykuc291cmNlO1xuICByZS5zcmNfWiAgID0gcmVxdWlyZSgndWMubWljcm8vY2F0ZWdvcmllcy9aL3JlZ2V4Jykuc291cmNlO1xuICByZS5zcmNfUCAgID0gcmVxdWlyZSgndWMubWljcm8vY2F0ZWdvcmllcy9QL3JlZ2V4Jykuc291cmNlO1xuXG4gIC8vIFxccHtcXFpcXFBcXENjXFxDRn0gKHdoaXRlIHNwYWNlcyArIGNvbnRyb2wgKyBmb3JtYXQgKyBwdW5jdHVhdGlvbilcbiAgcmUuc3JjX1pQQ2MgPSBbIHJlLnNyY19aLCByZS5zcmNfUCwgcmUuc3JjX0NjIF0uam9pbignfCcpO1xuXG4gIC8vIFxccHtcXFpcXENjfSAod2hpdGUgc3BhY2VzICsgY29udHJvbClcbiAgcmUuc3JjX1pDYyA9IFsgcmUuc3JjX1osIHJlLnNyY19DYyBdLmpvaW4oJ3wnKTtcblxuICAvLyBFeHBlcmltZW50YWwuIExpc3Qgb2YgY2hhcnMsIGNvbXBsZXRlbHkgcHJvaGliaXRlZCBpbiBsaW5rc1xuICAvLyBiZWNhdXNlIGNhbiBzZXBhcmF0ZSBpdCBmcm9tIG90aGVyIHBhcnQgb2YgdGV4dFxuICB2YXIgdGV4dF9zZXBhcmF0b3JzID0gJ1s+PFxcdWZmNWNdJztcblxuICAvLyBBbGwgcG9zc2libGUgd29yZCBjaGFyYWN0ZXJzIChldmVyeXRoaW5nIHdpdGhvdXQgcHVuY3R1YXRpb24sIHNwYWNlcyAmIGNvbnRyb2xzKVxuICAvLyBEZWZpbmVkIHZpYSBwdW5jdHVhdGlvbiAmIHNwYWNlcyB0byBzYXZlIHNwYWNlXG4gIC8vIFNob3VsZCBiZSBzb21ldGhpbmcgbGlrZSBcXHB7XFxMXFxOXFxTXFxNfSAoXFx3IGJ1dCB3aXRob3V0IGBfYClcbiAgcmUuc3JjX3BzZXVkb19sZXR0ZXIgICAgICAgPSAnKD86KD8hJyArIHRleHRfc2VwYXJhdG9ycyArICd8JyArIHJlLnNyY19aUENjICsgJyknICsgcmUuc3JjX0FueSArICcpJztcbiAgLy8gVGhlIHNhbWUgYXMgYWJvdGhlIGJ1dCB3aXRob3V0IFswLTldXG4gIC8vIHZhciBzcmNfcHNldWRvX2xldHRlcl9ub25fZCA9ICcoPzooPyFbMC05XXwnICsgc3JjX1pQQ2MgKyAnKScgKyBzcmNfQW55ICsgJyknO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgcmUuc3JjX2lwNCA9XG5cbiAgICAnKD86KDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXFxcLil7M30oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSc7XG5cbiAgLy8gUHJvaGliaXQgYW55IG9mIFwiQC9bXSgpXCIgaW4gdXNlci9wYXNzIHRvIGF2b2lkIHdyb25nIGRvbWFpbiBmZXRjaC5cbiAgcmUuc3JjX2F1dGggICAgPSAnKD86KD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFtAL1xcXFxbXFxcXF0oKV0pLikrQCk/JztcblxuICByZS5zcmNfcG9ydCA9XG5cbiAgICAnKD86Oig/OjYoPzpbMC00XVxcXFxkezN9fDUoPzpbMC00XVxcXFxkezJ9fDUoPzpbMC0yXVxcXFxkfDNbMC01XSkpKXxbMS01XT9cXFxcZHsxLDR9KSk/JztcblxuICByZS5zcmNfaG9zdF90ZXJtaW5hdG9yID1cblxuICAgICcoPz0kfCcgKyB0ZXh0X3NlcGFyYXRvcnMgKyAnfCcgKyByZS5zcmNfWlBDYyArICcpKD8hLXxffDpcXFxcZHxcXFxcLi18XFxcXC4oPyEkfCcgKyByZS5zcmNfWlBDYyArICcpKSc7XG5cbiAgcmUuc3JjX3BhdGggPVxuXG4gICAgJyg/OicgK1xuICAgICAgJ1svPyNdJyArXG4gICAgICAgICcoPzonICtcbiAgICAgICAgICAnKD8hJyArIHJlLnNyY19aQ2MgKyAnfCcgKyB0ZXh0X3NlcGFyYXRvcnMgKyAnfFsoKVtcXFxcXXt9LixcIlxcJz8hXFxcXC1dKS58JyArXG4gICAgICAgICAgJ1xcXFxbKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFxcXFxdKS4pKlxcXFxdfCcgK1xuICAgICAgICAgICdcXFxcKCg/Oig/IScgKyByZS5zcmNfWkNjICsgJ3xbKV0pLikqXFxcXCl8JyArXG4gICAgICAgICAgJ1xcXFx7KD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFt9XSkuKSpcXFxcfXwnICtcbiAgICAgICAgICAnXFxcXFwiKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFtcIl0pLikrXFxcXFwifCcgK1xuICAgICAgICAgIFwiXFxcXCcoPzooPyFcIiArIHJlLnNyY19aQ2MgKyBcInxbJ10pLikrXFxcXCd8XCIgK1xuICAgICAgICAgIFwiXFxcXCcoPz1cIiArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJ3xbLV0pLnwnICsgIC8vIGFsbG93IGBJJ21fa2luZ2AgaWYgbm8gcGFpciBmb3VuZFxuICAgICAgICAgICdcXFxcLnsyLH1bYS16QS1aMC05JS8mXXwnICsgLy8gZ29vZ2xlIGhhcyBtYW55IGRvdHMgaW4gXCJnb29nbGUgc2VhcmNoXCIgbGlua3MgKCM2NiwgIzgxKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnaXRodWIgaGFzIC4uLiBpbiBjb21taXQgcmFuZ2UgbGlua3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdHJpY3QgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtIGVuZ2xpc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtIHBlcmNlbnQtZW5jb2RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0gcGFydHMgb2YgZmlsZSBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLSBwYXJhbXMgc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW50aWwgbW9yZSBleGFtcGxlcyBmb3VuZC5cbiAgICAgICAgICAnXFxcXC4oPyEnICsgcmUuc3JjX1pDYyArICd8Wy5dKS58JyArXG4gICAgICAgICAgKG9wdHMgJiYgb3B0c1snLS0tJ10gP1xuICAgICAgICAgICAgJ1xcXFwtKD8hLS0oPzpbXi1dfCQpKSg/Oi0qKXwnIC8vIGAtLS1gID0+IGxvbmcgZGFzaCwgdGVybWluYXRlXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAnXFxcXC0rfCdcbiAgICAgICAgICApICtcbiAgICAgICAgICAnXFxcXCwoPyEnICsgcmUuc3JjX1pDYyArICcpLnwnICsgICAgICAgLy8gYWxsb3cgYCwsLGAgaW4gcGF0aHNcbiAgICAgICAgICAnXFxcXCErKD8hJyArIHJlLnNyY19aQ2MgKyAnfFshXSkufCcgKyAgLy8gYWxsb3cgYCEhIWAgaW4gcGF0aHMsIGJ1dCBub3QgYXQgdGhlIGVuZFxuICAgICAgICAgICdcXFxcPyg/IScgKyByZS5zcmNfWkNjICsgJ3xbP10pLicgK1xuICAgICAgICAnKSsnICtcbiAgICAgICd8XFxcXC8nICtcbiAgICAnKT8nO1xuXG4gIC8vIEFsbG93IGFueXRoaW5nIGluIG1hcmtkb3duIHNwZWMsIGZvcmJpZCBxdW90ZSAoXCIpIGF0IHRoZSBmaXJzdCBwb3NpdGlvblxuICAvLyBiZWNhdXNlIGVtYWlscyBlbmNsb3NlZCBpbiBxdW90ZXMgYXJlIGZhciBtb3JlIGNvbW1vblxuICByZS5zcmNfZW1haWxfbmFtZSA9XG5cbiAgICAnW1xcXFwtOzomPVxcXFwrXFxcXCQsXFxcXC5hLXpBLVowLTlfXVtcXFxcLTs6Jj1cXFxcK1xcXFwkLFxcXFxcIlxcXFwuYS16QS1aMC05X10qJztcblxuICByZS5zcmNfeG4gPVxuXG4gICAgJ3huLS1bYS16MC05XFxcXC1dezEsNTl9JztcblxuICAvLyBNb3JlIHRvIHJlYWQgYWJvdXQgZG9tYWluIG5hbWVzXG4gIC8vIGh0dHA6Ly9zZXJ2ZXJmYXVsdC5jb20vcXVlc3Rpb25zLzYzODI2MC9cblxuICByZS5zcmNfZG9tYWluX3Jvb3QgPVxuXG4gICAgLy8gQWxsb3cgbGV0dGVycyAmIGRpZ2l0cyAoaHR0cDovL3Rlc3QxKVxuICAgICcoPzonICtcbiAgICAgIHJlLnNyY194biArXG4gICAgICAnfCcgK1xuICAgICAgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnezEsNjN9JyArXG4gICAgJyknO1xuXG4gIHJlLnNyY19kb21haW4gPVxuXG4gICAgJyg/OicgK1xuICAgICAgcmUuc3JjX3huICtcbiAgICAgICd8JyArXG4gICAgICAnKD86JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyknICtcbiAgICAgICd8JyArXG4gICAgICAnKD86JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyg/Oi18JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyl7MCw2MX0nICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnKScgK1xuICAgICcpJztcblxuICByZS5zcmNfaG9zdCA9XG5cbiAgICAnKD86JyArXG4gICAgLy8gRG9uJ3QgbmVlZCBJUCBjaGVjaywgYmVjYXVzZSBkaWdpdHMgYXJlIGFscmVhZHkgYWxsb3dlZCBpbiBub3JtYWwgZG9tYWluIG5hbWVzXG4gICAgLy8gICBzcmNfaXA0ICtcbiAgICAvLyAnfCcgK1xuICAgICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikqJyArIHJlLnNyY19kb21haW4vKl9yb290Ki8gKyAnKScgK1xuICAgICcpJztcblxuICByZS50cGxfaG9zdF9mdXp6eSA9XG5cbiAgICAnKD86JyArXG4gICAgICByZS5zcmNfaXA0ICtcbiAgICAnfCcgK1xuICAgICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikrKD86JVRMRFMlKSknICtcbiAgICAnKSc7XG5cbiAgcmUudHBsX2hvc3Rfbm9faXBfZnV6enkgPVxuXG4gICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikrKD86JVRMRFMlKSknO1xuXG4gIHJlLnNyY19ob3N0X3N0cmljdCA9XG5cbiAgICByZS5zcmNfaG9zdCArIHJlLnNyY19ob3N0X3Rlcm1pbmF0b3I7XG5cbiAgcmUudHBsX2hvc3RfZnV6enlfc3RyaWN0ID1cblxuICAgIHJlLnRwbF9ob3N0X2Z1enp5ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS5zcmNfaG9zdF9wb3J0X3N0cmljdCA9XG5cbiAgICByZS5zcmNfaG9zdCArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS50cGxfaG9zdF9wb3J0X2Z1enp5X3N0cmljdCA9XG5cbiAgICByZS50cGxfaG9zdF9mdXp6eSArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS50cGxfaG9zdF9wb3J0X25vX2lwX2Z1enp5X3N0cmljdCA9XG5cbiAgICByZS50cGxfaG9zdF9ub19pcF9mdXp6eSArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIE1haW4gcnVsZXNcblxuICAvLyBSdWRlIHRlc3QgZnV6enkgbGlua3MgYnkgaG9zdCwgZm9yIHF1aWNrIGRlbnlcbiAgcmUudHBsX2hvc3RfZnV6enlfdGVzdCA9XG5cbiAgICAnbG9jYWxob3N0fHd3d1xcXFwufFxcXFwuXFxcXGR7MSwzfVxcXFwufCg/OlxcXFwuKD86JVRMRFMlKSg/OicgKyByZS5zcmNfWlBDYyArICd8PnwkKSknO1xuXG4gIHJlLnRwbF9lbWFpbF9mdXp6eSA9XG5cbiAgICAgICcoXnwnICsgdGV4dF9zZXBhcmF0b3JzICsgJ3xcInxcXFxcKHwnICsgcmUuc3JjX1pDYyArICcpJyArXG4gICAgICAnKCcgKyByZS5zcmNfZW1haWxfbmFtZSArICdAJyArIHJlLnRwbF9ob3N0X2Z1enp5X3N0cmljdCArICcpJztcblxuICByZS50cGxfbGlua19mdXp6eSA9XG4gICAgICAvLyBGdXp6eSBsaW5rIGNhbid0IGJlIHByZXBlbmRlZCB3aXRoIC46L1xcLSBhbmQgbm9uIHB1bmN0dWF0aW9uLlxuICAgICAgLy8gYnV0IGNhbiBzdGFydCB3aXRoID4gKG1hcmtkb3duIGJsb2NrcXVvdGUpXG4gICAgICAnKF58KD8hWy46L1xcXFwtX0BdKSg/OlskKzw9Pl5gfFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKScgK1xuICAgICAgJygoPyFbJCs8PT5eYHxcXHVmZjVjXSknICsgcmUudHBsX2hvc3RfcG9ydF9mdXp6eV9zdHJpY3QgKyByZS5zcmNfcGF0aCArICcpJztcblxuICByZS50cGxfbGlua19ub19pcF9mdXp6eSA9XG4gICAgICAvLyBGdXp6eSBsaW5rIGNhbid0IGJlIHByZXBlbmRlZCB3aXRoIC46L1xcLSBhbmQgbm9uIHB1bmN0dWF0aW9uLlxuICAgICAgLy8gYnV0IGNhbiBzdGFydCB3aXRoID4gKG1hcmtkb3duIGJsb2NrcXVvdGUpXG4gICAgICAnKF58KD8hWy46L1xcXFwtX0BdKSg/OlskKzw9Pl5gfFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKScgK1xuICAgICAgJygoPyFbJCs8PT5eYHxcXHVmZjVjXSknICsgcmUudHBsX2hvc3RfcG9ydF9ub19pcF9mdXp6eV9zdHJpY3QgKyByZS5zcmNfcGF0aCArICcpJztcblxuICByZXR1cm4gcmU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvJyk7XG4iLCIvLyBIVE1MNSBlbnRpdGllcyBtYXA6IHsgbmFtZSAtPiB1dGYxNnN0cmluZyB9XG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludCBxdW90ZXM6MCovXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2VudGl0aWVzL2xpYi9tYXBzL2VudGl0aWVzLmpzb24nKTtcbiIsIi8vIExpc3Qgb2YgdmFsaWQgaHRtbCBibG9ja3MgbmFtZXMsIGFjY29ydGluZyB0byBjb21tb25tYXJrIHNwZWNcbi8vIGh0dHA6Ly9qZ20uZ2l0aHViLmlvL0NvbW1vbk1hcmsvc3BlYy5odG1sI2h0bWwtYmxvY2tzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3NlY3Rpb24nLFxuICAnc291cmNlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dO1xuIiwiLy8gUmVnZXhwcyB0byBtYXRjaCBodG1sIGVsZW1lbnRzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGF0dHJfbmFtZSAgICAgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonO1xuXG52YXIgdW5xdW90ZWQgICAgICA9ICdbXlwiXFwnPTw+YFxcXFx4MDAtXFxcXHgyMF0rJztcbnZhciBzaW5nbGVfcXVvdGVkID0gXCInW14nXSonXCI7XG52YXIgZG91YmxlX3F1b3RlZCA9ICdcIlteXCJdKlwiJztcblxudmFyIGF0dHJfdmFsdWUgID0gJyg/OicgKyB1bnF1b3RlZCArICd8JyArIHNpbmdsZV9xdW90ZWQgKyAnfCcgKyBkb3VibGVfcXVvdGVkICsgJyknO1xuXG52YXIgYXR0cmlidXRlICAgPSAnKD86XFxcXHMrJyArIGF0dHJfbmFtZSArICcoPzpcXFxccyo9XFxcXHMqJyArIGF0dHJfdmFsdWUgKyAnKT8pJztcblxudmFyIG9wZW5fdGFnICAgID0gJzxbQS1aYS16XVtBLVphLXowLTlcXFxcLV0qJyArIGF0dHJpYnV0ZSArICcqXFxcXHMqXFxcXC8/Pic7XG5cbnZhciBjbG9zZV90YWcgICA9ICc8XFxcXC9bQS1aYS16XVtBLVphLXowLTlcXFxcLV0qXFxcXHMqPic7XG52YXIgY29tbWVudCAgICAgPSAnPCEtLS0tPnw8IS0tKD86LT9bXj4tXSkoPzotP1teLV0pKi0tPic7XG52YXIgcHJvY2Vzc2luZyAgPSAnPFs/XVtcXFxcc1xcXFxTXSo/Wz9dPic7XG52YXIgZGVjbGFyYXRpb24gPSAnPCFbQS1aXStcXFxccytbXj5dKj4nO1xudmFyIGNkYXRhICAgICAgID0gJzwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPic7XG5cbnZhciBIVE1MX1RBR19SRSA9IG5ldyBSZWdFeHAoJ14oPzonICsgb3Blbl90YWcgKyAnfCcgKyBjbG9zZV90YWcgKyAnfCcgKyBjb21tZW50ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHByb2Nlc3NpbmcgKyAnfCcgKyBkZWNsYXJhdGlvbiArICd8JyArIGNkYXRhICsgJyknKTtcbnZhciBIVE1MX09QRU5fQ0xPU0VfVEFHX1JFID0gbmV3IFJlZ0V4cCgnXig/OicgKyBvcGVuX3RhZyArICd8JyArIGNsb3NlX3RhZyArICcpJyk7XG5cbm1vZHVsZS5leHBvcnRzLkhUTUxfVEFHX1JFID0gSFRNTF9UQUdfUkU7XG5tb2R1bGUuZXhwb3J0cy5IVE1MX09QRU5fQ0xPU0VfVEFHX1JFID0gSFRNTF9PUEVOX0NMT1NFX1RBR19SRTtcbiIsIi8vIFV0aWxpdGllc1xuLy9cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBfY2xhc3Mob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTsgfVxuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBTdHJpbmddJzsgfVxuXG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaGFzKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSk7XG59XG5cbi8vIE1lcmdlIG9iamVjdHNcbi8vXG5mdW5jdGlvbiBhc3NpZ24ob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc291cmNlICsgJ211c3QgYmUgb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbi8vIFJlbW92ZSBlbGVtZW50IGZyb20gYXJyYXkgYW5kIHB1dCBhbm90aGVyIGFycmF5IGF0IHRob3NlIHBvc2l0aW9uLlxuLy8gVXNlZnVsIGZvciBzb21lIG9wZXJhdGlvbnMgd2l0aCB0b2tlbnNcbmZ1bmN0aW9uIGFycmF5UmVwbGFjZUF0KHNyYywgcG9zLCBuZXdFbGVtZW50cykge1xuICByZXR1cm4gW10uY29uY2F0KHNyYy5zbGljZSgwLCBwb3MpLCBuZXdFbGVtZW50cywgc3JjLnNsaWNlKHBvcyArIDEpKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNWYWxpZEVudGl0eUNvZGUoYykge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICAvLyBicm9rZW4gc2VxdWVuY2VcbiAgaWYgKGMgPj0gMHhEODAwICYmIGMgPD0gMHhERkZGKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBuZXZlciB1c2VkXG4gIGlmIChjID49IDB4RkREMCAmJiBjIDw9IDB4RkRFRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKChjICYgMHhGRkZGKSA9PT0gMHhGRkZGIHx8IChjICYgMHhGRkZGKSA9PT0gMHhGRkZFKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBjb250cm9sIGNvZGVzXG4gIGlmIChjID49IDB4MDAgJiYgYyA8PSAweDA4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA9PT0gMHgwQikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPj0gMHgwRSAmJiBjIDw9IDB4MUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID49IDB4N0YgJiYgYyA8PSAweDlGKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBvdXQgb2YgcmFuZ2VcbiAgaWYgKGMgPiAweDEwRkZGRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoYykge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICBpZiAoYyA+IDB4ZmZmZikge1xuICAgIGMgLT0gMHgxMDAwMDtcbiAgICB2YXIgc3Vycm9nYXRlMSA9IDB4ZDgwMCArIChjID4+IDEwKSxcbiAgICAgICAgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjICYgMHgzZmYpO1xuXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG4gIH1cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG59XG5cblxudmFyIFVORVNDQVBFX01EX1JFICA9IC9cXFxcKFshXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BbXFxcXFxcXV5fYHt8fX5dKS9nO1xudmFyIEVOVElUWV9SRSAgICAgICA9IC8mKFthLXojXVthLXowLTldezEsMzF9KTsvZ2k7XG52YXIgVU5FU0NBUEVfQUxMX1JFID0gbmV3IFJlZ0V4cChVTkVTQ0FQRV9NRF9SRS5zb3VyY2UgKyAnfCcgKyBFTlRJVFlfUkUuc291cmNlLCAnZ2knKTtcblxudmFyIERJR0lUQUxfRU5USVRZX1RFU1RfUkUgPSAvXiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpL2k7XG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJy4vZW50aXRpZXMnKTtcblxuZnVuY3Rpb24gcmVwbGFjZUVudGl0eVBhdHRlcm4obWF0Y2gsIG5hbWUpIHtcbiAgdmFyIGNvZGUgPSAwO1xuXG4gIGlmIChoYXMoZW50aXRpZXMsIG5hbWUpKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzW25hbWVdO1xuICB9XG5cbiAgaWYgKG5hbWUuY2hhckNvZGVBdCgwKSA9PT0gMHgyMy8qICMgKi8gJiYgRElHSVRBTF9FTlRJVFlfVEVTVF9SRS50ZXN0KG5hbWUpKSB7XG4gICAgY29kZSA9IG5hbWVbMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgIHBhcnNlSW50KG5hbWUuc2xpY2UoMiksIDE2KSA6IHBhcnNlSW50KG5hbWUuc2xpY2UoMSksIDEwKTtcblxuICAgIGlmIChpc1ZhbGlkRW50aXR5Q29kZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGZyb21Db2RlUG9pbnQoY29kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG4vKmZ1bmN0aW9uIHJlcGxhY2VFbnRpdGllcyhzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCcmJykgPCAwKSB7IHJldHVybiBzdHI7IH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoRU5USVRZX1JFLCByZXBsYWNlRW50aXR5UGF0dGVybik7XG59Ki9cblxuZnVuY3Rpb24gdW5lc2NhcGVNZChzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCdcXFxcJykgPCAwKSB7IHJldHVybiBzdHI7IH1cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFVORVNDQVBFX01EX1JFLCAnJDEnKTtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGVBbGwoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignXFxcXCcpIDwgMCAmJiBzdHIuaW5kZXhPZignJicpIDwgMCkgeyByZXR1cm4gc3RyOyB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFVORVNDQVBFX0FMTF9SRSwgZnVuY3Rpb24gKG1hdGNoLCBlc2NhcGVkLCBlbnRpdHkpIHtcbiAgICBpZiAoZXNjYXBlZCkgeyByZXR1cm4gZXNjYXBlZDsgfVxuICAgIHJldHVybiByZXBsYWNlRW50aXR5UGF0dGVybihtYXRjaCwgZW50aXR5KTtcbiAgfSk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBIVE1MX0VTQ0FQRV9URVNUX1JFID0gL1smPD5cIl0vO1xudmFyIEhUTUxfRVNDQVBFX1JFUExBQ0VfUkUgPSAvWyY8PlwiXS9nO1xudmFyIEhUTUxfUkVQTEFDRU1FTlRTID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VVbnNhZmVDaGFyKGNoKSB7XG4gIHJldHVybiBIVE1MX1JFUExBQ0VNRU5UU1tjaF07XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gIGlmIChIVE1MX0VTQ0FQRV9URVNUX1JFLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShIVE1MX0VTQ0FQRV9SRVBMQUNFX1JFLCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIFJFR0VYUF9FU0NBUEVfUkUgPSAvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nO1xuXG5mdW5jdGlvbiBlc2NhcGVSRShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9FU0NBUEVfUkUsICdcXFxcJCYnKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNTcGFjZShjb2RlKSB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwOTpcbiAgICBjYXNlIDB4MjA6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFpzICh1bmljb2RlIGNsYXNzKSB8fCBbXFx0XFxmXFx2XFxyXFxuXVxuZnVuY3Rpb24gaXNXaGl0ZVNwYWNlKGNvZGUpIHtcbiAgaWYgKGNvZGUgPj0gMHgyMDAwICYmIGNvZGUgPD0gMHgyMDBBKSB7IHJldHVybiB0cnVlOyB9XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwOTogLy8gXFx0XG4gICAgY2FzZSAweDBBOiAvLyBcXG5cbiAgICBjYXNlIDB4MEI6IC8vIFxcdlxuICAgIGNhc2UgMHgwQzogLy8gXFxmXG4gICAgY2FzZSAweDBEOiAvLyBcXHJcbiAgICBjYXNlIDB4MjA6XG4gICAgY2FzZSAweEEwOlxuICAgIGNhc2UgMHgxNjgwOlxuICAgIGNhc2UgMHgyMDJGOlxuICAgIGNhc2UgMHgyMDVGOlxuICAgIGNhc2UgMHgzMDAwOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKmVzbGludC1kaXNhYmxlIG1heC1sZW4qL1xudmFyIFVOSUNPREVfUFVOQ1RfUkUgPSByZXF1aXJlKCd1Yy5taWNyby9jYXRlZ29yaWVzL1AvcmVnZXgnKTtcblxuLy8gQ3VycmVudGx5IHdpdGhvdXQgYXN0cmFsIGNoYXJhY3RlcnMgc3VwcG9ydC5cbmZ1bmN0aW9uIGlzUHVuY3RDaGFyKGNoKSB7XG4gIHJldHVybiBVTklDT0RFX1BVTkNUX1JFLnRlc3QoY2gpO1xufVxuXG5cbi8vIE1hcmtkb3duIEFTQ0lJIHB1bmN0dWF0aW9uIGNoYXJhY3RlcnMuXG4vL1xuLy8gISwgXCIsICMsICQsICUsICYsICcsICgsICksICosICssICwsIC0sIC4sIC8sIDosIDssIDwsID0sID4sID8sIEAsIFssIFxcLCBdLCBeLCBfLCBgLCB7LCB8LCB9LCBvciB+XG4vLyBodHRwOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjE1LyNhc2NpaS1wdW5jdHVhdGlvbi1jaGFyYWN0ZXJcbi8vXG4vLyBEb24ndCBjb25mdXNlIHdpdGggdW5pY29kZSBwdW5jdHVhdGlvbiAhISEgSXQgbGFja3Mgc29tZSBjaGFycyBpbiBhc2NpaSByYW5nZS5cbi8vXG5mdW5jdGlvbiBpc01kQXNjaWlQdW5jdChjaCkge1xuICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAweDIxLyogISAqLzpcbiAgICBjYXNlIDB4MjIvKiBcIiAqLzpcbiAgICBjYXNlIDB4MjMvKiAjICovOlxuICAgIGNhc2UgMHgyNC8qICQgKi86XG4gICAgY2FzZSAweDI1LyogJSAqLzpcbiAgICBjYXNlIDB4MjYvKiAmICovOlxuICAgIGNhc2UgMHgyNy8qICcgKi86XG4gICAgY2FzZSAweDI4LyogKCAqLzpcbiAgICBjYXNlIDB4MjkvKiApICovOlxuICAgIGNhc2UgMHgyQS8qICogKi86XG4gICAgY2FzZSAweDJCLyogKyAqLzpcbiAgICBjYXNlIDB4MkMvKiAsICovOlxuICAgIGNhc2UgMHgyRC8qIC0gKi86XG4gICAgY2FzZSAweDJFLyogLiAqLzpcbiAgICBjYXNlIDB4MkYvKiAvICovOlxuICAgIGNhc2UgMHgzQS8qIDogKi86XG4gICAgY2FzZSAweDNCLyogOyAqLzpcbiAgICBjYXNlIDB4M0MvKiA8ICovOlxuICAgIGNhc2UgMHgzRC8qID0gKi86XG4gICAgY2FzZSAweDNFLyogPiAqLzpcbiAgICBjYXNlIDB4M0YvKiA/ICovOlxuICAgIGNhc2UgMHg0MC8qIEAgKi86XG4gICAgY2FzZSAweDVCLyogWyAqLzpcbiAgICBjYXNlIDB4NUMvKiBcXCAqLzpcbiAgICBjYXNlIDB4NUQvKiBdICovOlxuICAgIGNhc2UgMHg1RS8qIF4gKi86XG4gICAgY2FzZSAweDVGLyogXyAqLzpcbiAgICBjYXNlIDB4NjAvKiBgICovOlxuICAgIGNhc2UgMHg3Qi8qIHsgKi86XG4gICAgY2FzZSAweDdDLyogfCAqLzpcbiAgICBjYXNlIDB4N0QvKiB9ICovOlxuICAgIGNhc2UgMHg3RS8qIH4gKi86XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEhlcGxlciB0byB1bmlmeSBbcmVmZXJlbmNlIGxhYmVsc10uXG4vL1xuZnVuY3Rpb24gbm9ybWFsaXplUmVmZXJlbmNlKHN0cikge1xuICAvLyBUcmltIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG4gIC8vXG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gIC8vIEluIG5vZGUgdjEwICfhup4nLnRvTG93ZXJDYXNlKCkgPT09ICfhub4nLCB3aGljaCBpcyBwcmVzdW1lZCB0byBiZSBhIGJ1Z1xuICAvLyBmaXhlZCBpbiB2MTIgKGNvdWxkbid0IGZpbmQgYW55IGRldGFpbHMpLlxuICAvL1xuICAvLyBTbyB0cmVhdCB0aGlzIG9uZSBhcyBhIHNwZWNpYWwgY2FzZVxuICAvLyAocmVtb3ZlIHRoaXMgd2hlbiBub2RlIHYxMCBpcyBubyBsb25nZXIgc3VwcG9ydGVkKS5cbiAgLy9cbiAgaWYgKCfhup4nLnRvTG93ZXJDYXNlKCkgPT09ICfhub4nKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL+G6ni9nLCAnw58nKTtcbiAgfVxuXG4gIC8vIC50b0xvd2VyQ2FzZSgpLnRvVXBwZXJDYXNlKCkgc2hvdWxkIGdldCByaWQgb2YgYWxsIGRpZmZlcmVuY2VzXG4gIC8vIGJldHdlZW4gbGV0dGVyIHZhcmlhbnRzLlxuICAvL1xuICAvLyBTaW1wbGUgLnRvTG93ZXJDYXNlKCkgZG9lc24ndCBub3JtYWxpemUgMTI1IGNvZGUgcG9pbnRzIGNvcnJlY3RseSxcbiAgLy8gYW5kIC50b1VwcGVyQ2FzZSBkb2Vzbid0IG5vcm1hbGl6ZSA2IG9mIHRoZW0gKGxpc3Qgb2YgZXhjZXB0aW9uczpcbiAgLy8gxLAsIM+0LCDhup4sIOKEpiwg4oSqLCDihKsgLSB0aG9zZSBhcmUgYWxyZWFkeSB1cHBlcmNhc2VkLCBidXQgaGF2ZSBkaWZmZXJlbnRseVxuICAvLyB1cHBlcmNhc2VkIHZlcnNpb25zKS5cbiAgLy9cbiAgLy8gSGVyZSdzIGFuIGV4YW1wbGUgc2hvd2luZyBob3cgaXQgaGFwcGVucy4gTGV0cyB0YWtlIGdyZWVrIGxldHRlciBvbWVnYTpcbiAgLy8gdXBwZXJjYXNlIFUrMDM5OCAozpgpLCBVKzAzZjQgKM+0KSBhbmQgbG93ZXJjYXNlIFUrMDNiOCAozrgpLCBVKzAzZDEgKM+RKVxuICAvL1xuICAvLyBVbmljb2RlIGVudHJpZXM6XG4gIC8vIDAzOTg7R1JFRUsgQ0FQSVRBTCBMRVRURVIgVEhFVEE7THU7MDtMOzs7OztOOzs7OzAzQjg7XG4gIC8vIDAzQjg7R1JFRUsgU01BTEwgTEVUVEVSIFRIRVRBO0xsOzA7TDs7Ozs7Tjs7OzAzOTg7OzAzOThcbiAgLy8gMDNEMTtHUkVFSyBUSEVUQSBTWU1CT0w7TGw7MDtMOzxjb21wYXQ+IDAzQjg7Ozs7TjtHUkVFSyBTTUFMTCBMRVRURVIgU0NSSVBUIFRIRVRBOzswMzk4OzswMzk4XG4gIC8vIDAzRjQ7R1JFRUsgQ0FQSVRBTCBUSEVUQSBTWU1CT0w7THU7MDtMOzxjb21wYXQ+IDAzOTg7Ozs7Tjs7OzswM0I4O1xuICAvL1xuICAvLyBDYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb24gc2hvdWxkIHRyZWF0IGFsbCBvZiB0aGVtIGFzIGVxdWl2YWxlbnQuXG4gIC8vXG4gIC8vIEJ1dCAudG9Mb3dlckNhc2UoKSBkb2Vzbid0IGNoYW5nZSDPkSAoaXQncyBhbHJlYWR5IGxvd2VyY2FzZSksXG4gIC8vIGFuZCAudG9VcHBlckNhc2UoKSBkb2Vzbid0IGNoYW5nZSDPtCAoYWxyZWFkeSB1cHBlcmNhc2UpLlxuICAvL1xuICAvLyBBcHBseWluZyBmaXJzdCBsb3dlciB0aGVuIHVwcGVyIGNhc2Ugbm9ybWFsaXplcyBhbnkgY2hhcmFjdGVyOlxuICAvLyAnXFx1MDM5OFxcdTAzZjRcXHUwM2I4XFx1MDNkMScudG9Mb3dlckNhc2UoKS50b1VwcGVyQ2FzZSgpID09PSAnXFx1MDM5OFxcdTAzOThcXHUwMzk4XFx1MDM5OCdcbiAgLy9cbiAgLy8gTm90ZTogdGhpcyBpcyBlcXVpdmFsZW50IHRvIHVuaWNvZGUgY2FzZSBmb2xkaW5nOyB1bmljb2RlIG5vcm1hbGl6YXRpb25cbiAgLy8gaXMgYSBkaWZmZXJlbnQgc3RlcCB0aGF0IGlzIG5vdCByZXF1aXJlZCBoZXJlLlxuICAvL1xuICAvLyBGaW5hbCByZXN1bHQgc2hvdWxkIGJlIHVwcGVyY2FzZWQsIGJlY2F1c2UgaXQncyBsYXRlciBzdG9yZWQgaW4gYW4gb2JqZWN0XG4gIC8vICh0aGlzIGF2b2lkIGEgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIG1lbWJlcnMsXG4gIC8vIG1vc3Qgbm90YWJseSwgYF9fcHJvdG9fX2ApXG4gIC8vXG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS50b1VwcGVyQ2FzZSgpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBSZS1leHBvcnQgbGlicmFyaWVzIGNvbW1vbmx5IHVzZWQgaW4gYm90aCBtYXJrZG93bi1pdCBhbmQgaXRzIHBsdWdpbnMsXG4vLyBzbyBwbHVnaW5zIHdvbid0IGhhdmUgdG8gZGVwZW5kIG9uIHRoZW0gZXhwbGljaXRseSwgd2hpY2ggcmVkdWNlcyB0aGVpclxuLy8gYnVuZGxlZCBzaXplIChlLmcuIGEgYnJvd3NlciBidWlsZCkuXG4vL1xuZXhwb3J0cy5saWIgICAgICAgICAgICAgICAgID0ge307XG5leHBvcnRzLmxpYi5tZHVybCAgICAgICAgICAgPSByZXF1aXJlKCdtZHVybCcpO1xuZXhwb3J0cy5saWIudWNtaWNybyAgICAgICAgID0gcmVxdWlyZSgndWMubWljcm8nKTtcblxuZXhwb3J0cy5hc3NpZ24gICAgICAgICAgICAgID0gYXNzaWduO1xuZXhwb3J0cy5pc1N0cmluZyAgICAgICAgICAgID0gaXNTdHJpbmc7XG5leHBvcnRzLmhhcyAgICAgICAgICAgICAgICAgPSBoYXM7XG5leHBvcnRzLnVuZXNjYXBlTWQgICAgICAgICAgPSB1bmVzY2FwZU1kO1xuZXhwb3J0cy51bmVzY2FwZUFsbCAgICAgICAgID0gdW5lc2NhcGVBbGw7XG5leHBvcnRzLmlzVmFsaWRFbnRpdHlDb2RlICAgPSBpc1ZhbGlkRW50aXR5Q29kZTtcbmV4cG9ydHMuZnJvbUNvZGVQb2ludCAgICAgICA9IGZyb21Db2RlUG9pbnQ7XG4vLyBleHBvcnRzLnJlcGxhY2VFbnRpdGllcyAgICAgPSByZXBsYWNlRW50aXRpZXM7XG5leHBvcnRzLmVzY2FwZUh0bWwgICAgICAgICAgPSBlc2NhcGVIdG1sO1xuZXhwb3J0cy5hcnJheVJlcGxhY2VBdCAgICAgID0gYXJyYXlSZXBsYWNlQXQ7XG5leHBvcnRzLmlzU3BhY2UgICAgICAgICAgICAgPSBpc1NwYWNlO1xuZXhwb3J0cy5pc1doaXRlU3BhY2UgICAgICAgID0gaXNXaGl0ZVNwYWNlO1xuZXhwb3J0cy5pc01kQXNjaWlQdW5jdCAgICAgID0gaXNNZEFzY2lpUHVuY3Q7XG5leHBvcnRzLmlzUHVuY3RDaGFyICAgICAgICAgPSBpc1B1bmN0Q2hhcjtcbmV4cG9ydHMuZXNjYXBlUkUgICAgICAgICAgICA9IGVzY2FwZVJFO1xuZXhwb3J0cy5ub3JtYWxpemVSZWZlcmVuY2UgID0gbm9ybWFsaXplUmVmZXJlbmNlO1xuIiwiLy8gSnVzdCBhIHNob3J0Y3V0IGZvciBidWxrIGV4cG9ydFxuJ3VzZSBzdHJpY3QnO1xuXG5cbmV4cG9ydHMucGFyc2VMaW5rTGFiZWwgICAgICAgPSByZXF1aXJlKCcuL3BhcnNlX2xpbmtfbGFiZWwnKTtcbmV4cG9ydHMucGFyc2VMaW5rRGVzdGluYXRpb24gPSByZXF1aXJlKCcuL3BhcnNlX2xpbmtfZGVzdGluYXRpb24nKTtcbmV4cG9ydHMucGFyc2VMaW5rVGl0bGUgICAgICAgPSByZXF1aXJlKCcuL3BhcnNlX2xpbmtfdGl0bGUnKTtcbiIsIi8vIFBhcnNlIGxpbmsgZGVzdGluYXRpb25cbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIHVuZXNjYXBlQWxsID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVBbGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtEZXN0aW5hdGlvbihzdHIsIHBvcywgbWF4KSB7XG4gIHZhciBjb2RlLCBsZXZlbCxcbiAgICAgIGxpbmVzID0gMCxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIHBvczogMCxcbiAgICAgICAgbGluZXM6IDAsXG4gICAgICAgIHN0cjogJydcbiAgICAgIH07XG5cbiAgaWYgKHN0ci5jaGFyQ29kZUF0KHBvcykgPT09IDB4M0MgLyogPCAqLykge1xuICAgIHBvcysrO1xuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgPT09IDB4MEEgLyogXFxuICovKSB7IHJldHVybiByZXN1bHQ7IH1cbiAgICAgIGlmIChjb2RlID09PSAweDNDIC8qIDwgKi8pIHsgcmV0dXJuIHJlc3VsdDsgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4M0UgLyogPiAqLykge1xuICAgICAgICByZXN1bHQucG9zID0gcG9zICsgMTtcbiAgICAgICAgcmVzdWx0LnN0ciA9IHVuZXNjYXBlQWxsKHN0ci5zbGljZShzdGFydCArIDEsIHBvcykpO1xuICAgICAgICByZXN1bHQub2sgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHBvcysrO1xuICAgIH1cblxuICAgIC8vIG5vIGNsb3NpbmcgJz4nXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkIGJlIC4uLiB9IGVsc2UgeyAuLi4gYnJhbmNoXG5cbiAgbGV2ZWwgPSAwO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyMCkgeyBicmVhazsgfVxuXG4gICAgLy8gYXNjaWkgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAweDIwIHx8IGNvZGUgPT09IDB4N0YpIHsgYnJlYWs7IH1cblxuICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMHgyMCkgeyBicmVhazsgfVxuICAgICAgcG9zICs9IDI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOCAvKiAoICovKSB7XG4gICAgICBsZXZlbCsrO1xuICAgICAgaWYgKGxldmVsID4gMzIpIHsgcmV0dXJuIHJlc3VsdDsgfVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAweDI5IC8qICkgKi8pIHtcbiAgICAgIGlmIChsZXZlbCA9PT0gMCkgeyBicmVhazsgfVxuICAgICAgbGV2ZWwtLTtcbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gcG9zKSB7IHJldHVybiByZXN1bHQ7IH1cbiAgaWYgKGxldmVsICE9PSAwKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICByZXN1bHQuc3RyID0gdW5lc2NhcGVBbGwoc3RyLnNsaWNlKHN0YXJ0LCBwb3MpKTtcbiAgcmVzdWx0LmxpbmVzID0gbGluZXM7XG4gIHJlc3VsdC5wb3MgPSBwb3M7XG4gIHJlc3VsdC5vayA9IHRydWU7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gUGFyc2UgbGluayBsYWJlbFxuLy9cbi8vIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGZpcnN0IGNoYXJhY3RlciAoXCJbXCIpIGFscmVhZHkgbWF0Y2hlcztcbi8vIHJldHVybnMgdGhlIGVuZCBvZiB0aGUgbGFiZWxcbi8vXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXJ0LCBkaXNhYmxlTmVzdGVkKSB7XG4gIHZhciBsZXZlbCwgZm91bmQsIG1hcmtlciwgcHJldlBvcyxcbiAgICAgIGxhYmVsRW5kID0gLTEsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3M7XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuICBsZXZlbCA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyk7XG4gICAgaWYgKG1hcmtlciA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldlBvcyA9IHN0YXRlLnBvcztcbiAgICBzdGF0ZS5tZC5pbmxpbmUuc2tpcFRva2VuKHN0YXRlKTtcbiAgICBpZiAobWFya2VyID09PSAweDVCIC8qIFsgKi8pIHtcbiAgICAgIGlmIChwcmV2UG9zID09PSBzdGF0ZS5wb3MgLSAxKSB7XG4gICAgICAgIC8vIGluY3JlYXNlIGxldmVsIGlmIHdlIGZpbmQgdGV4dCBgW2AsIHdoaWNoIGlzIG5vdCBhIHBhcnQgb2YgYW55IHRva2VuXG4gICAgICAgIGxldmVsKys7XG4gICAgICB9IGVsc2UgaWYgKGRpc2FibGVOZXN0ZWQpIHtcbiAgICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgbGFiZWxFbmQgPSBzdGF0ZS5wb3M7XG4gIH1cblxuICAvLyByZXN0b3JlIG9sZCBzdGF0ZVxuICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG5cbiAgcmV0dXJuIGxhYmVsRW5kO1xufTtcbiIsIi8vIFBhcnNlIGxpbmsgdGl0bGVcbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIHVuZXNjYXBlQWxsID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVBbGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtUaXRsZShzdHIsIHBvcywgbWF4KSB7XG4gIHZhciBjb2RlLFxuICAgICAgbWFya2VyLFxuICAgICAgbGluZXMgPSAwLFxuICAgICAgc3RhcnQgPSBwb3MsXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgcG9zOiAwLFxuICAgICAgICBsaW5lczogMCxcbiAgICAgICAgc3RyOiAnJ1xuICAgICAgfTtcblxuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gcmVzdWx0OyB9XG5cbiAgbWFya2VyID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDIyIC8qIFwiICovICYmIG1hcmtlciAhPT0gMHgyNyAvKiAnICovICYmIG1hcmtlciAhPT0gMHgyOCAvKiAoICovKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICBwb3MrKztcblxuICAvLyBpZiBvcGVuaW5nIG1hcmtlciBpcyBcIihcIiwgc3dpdGNoIGl0IHRvIGNsb3NpbmcgbWFya2VyIFwiKVwiXG4gIGlmIChtYXJrZXIgPT09IDB4MjgpIHsgbWFya2VyID0gMHgyOTsgfVxuXG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICByZXN1bHQucG9zID0gcG9zICsgMTtcbiAgICAgIHJlc3VsdC5saW5lcyA9IGxpbmVzO1xuICAgICAgcmVzdWx0LnN0ciA9IHVuZXNjYXBlQWxsKHN0ci5zbGljZShzdGFydCArIDEsIHBvcykpO1xuICAgICAgcmVzdWx0Lm9rID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDI4IC8qICggKi8gJiYgbWFya2VyID09PSAweDI5IC8qICkgKi8pIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDBBKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICBwb3MrKztcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7XG4gICAgICAgIGxpbmVzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9zKys7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIE1haW4gcGFyc2VyIGNsYXNzXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKTtcbnZhciBoZWxwZXJzICAgICAgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciBSZW5kZXJlciAgICAgPSByZXF1aXJlKCcuL3JlbmRlcmVyJyk7XG52YXIgUGFyc2VyQ29yZSAgID0gcmVxdWlyZSgnLi9wYXJzZXJfY29yZScpO1xudmFyIFBhcnNlckJsb2NrICA9IHJlcXVpcmUoJy4vcGFyc2VyX2Jsb2NrJyk7XG52YXIgUGFyc2VySW5saW5lID0gcmVxdWlyZSgnLi9wYXJzZXJfaW5saW5lJyk7XG52YXIgTGlua2lmeUl0ICAgID0gcmVxdWlyZSgnbGlua2lmeS1pdCcpO1xudmFyIG1kdXJsICAgICAgICA9IHJlcXVpcmUoJ21kdXJsJyk7XG52YXIgcHVueWNvZGUgICAgID0gcmVxdWlyZSgncHVueWNvZGUnKTtcblxuXG52YXIgY29uZmlnID0ge1xuICBkZWZhdWx0OiByZXF1aXJlKCcuL3ByZXNldHMvZGVmYXVsdCcpLFxuICB6ZXJvOiByZXF1aXJlKCcuL3ByZXNldHMvemVybycpLFxuICBjb21tb25tYXJrOiByZXF1aXJlKCcuL3ByZXNldHMvY29tbW9ubWFyaycpXG59O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vIFRoaXMgdmFsaWRhdG9yIGNhbiBwcm9oaWJpdCBtb3JlIHRoYW4gcmVhbGx5IG5lZWRlZCB0byBwcmV2ZW50IFhTUy4gSXQncyBhXG4vLyB0cmFkZW9mZiB0byBrZWVwIGNvZGUgc2ltcGxlIGFuZCB0byBiZSBzZWN1cmUgYnkgZGVmYXVsdC5cbi8vXG4vLyBJZiB5b3UgbmVlZCBkaWZmZXJlbnQgc2V0dXAgLSBvdmVycmlkZSB2YWxpZGF0b3IgbWV0aG9kIGFzIHlvdSB3aXNoLiBPclxuLy8gcmVwbGFjZSBpdCB3aXRoIGR1bW15IGZ1bmN0aW9uIGFuZCB1c2UgZXh0ZXJuYWwgc2FuaXRpemVyLlxuLy9cblxudmFyIEJBRF9QUk9UT19SRSA9IC9eKHZic2NyaXB0fGphdmFzY3JpcHR8ZmlsZXxkYXRhKTovO1xudmFyIEdPT0RfREFUQV9SRSA9IC9eZGF0YTppbWFnZVxcLyhnaWZ8cG5nfGpwZWd8d2VicCk7LztcblxuZnVuY3Rpb24gdmFsaWRhdGVMaW5rKHVybCkge1xuICAvLyB1cmwgc2hvdWxkIGJlIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludCwgYW5kIGV4aXN0aW5nIGVudGl0aWVzIGFyZSBkZWNvZGVkXG4gIHZhciBzdHIgPSB1cmwudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIEJBRF9QUk9UT19SRS50ZXN0KHN0cikgPyAoR09PRF9EQVRBX1JFLnRlc3Qoc3RyKSA/IHRydWUgOiBmYWxzZSkgOiB0cnVlO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBSRUNPREVfSE9TVE5BTUVfRk9SID0gWyAnaHR0cDonLCAnaHR0cHM6JywgJ21haWx0bzonIF07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmsodXJsKSB7XG4gIHZhciBwYXJzZWQgPSBtZHVybC5wYXJzZSh1cmwsIHRydWUpO1xuXG4gIGlmIChwYXJzZWQuaG9zdG5hbWUpIHtcbiAgICAvLyBFbmNvZGUgaG9zdG5hbWVzIGluIHVybHMgbGlrZTpcbiAgICAvLyBgaHR0cDovL2hvc3QvYCwgYGh0dHBzOi8vaG9zdC9gLCBgbWFpbHRvOnVzZXJAaG9zdGAsIGAvL2hvc3QvYFxuICAgIC8vXG4gICAgLy8gV2UgZG9uJ3QgZW5jb2RlIHVua25vd24gc2NoZW1hcywgYmVjYXVzZSBpdCdzIGxpa2VseSB0aGF0IHdlIGVuY29kZVxuICAgIC8vIHNvbWV0aGluZyB3ZSBzaG91bGRuJ3QgKGUuZy4gYHNreXBlOm5hbWVgIHRyZWF0ZWQgYXMgYHNreXBlOmhvc3RgKVxuICAgIC8vXG4gICAgaWYgKCFwYXJzZWQucHJvdG9jb2wgfHwgUkVDT0RFX0hPU1ROQU1FX0ZPUi5pbmRleE9mKHBhcnNlZC5wcm90b2NvbCkgPj0gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkLmhvc3RuYW1lID0gcHVueWNvZGUudG9BU0NJSShwYXJzZWQuaG9zdG5hbWUpO1xuICAgICAgfSBjYXRjaCAoZXIpIHsgLyoqLyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kdXJsLmVuY29kZShtZHVybC5mb3JtYXQocGFyc2VkKSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmtUZXh0KHVybCkge1xuICB2YXIgcGFyc2VkID0gbWR1cmwucGFyc2UodXJsLCB0cnVlKTtcblxuICBpZiAocGFyc2VkLmhvc3RuYW1lKSB7XG4gICAgLy8gRW5jb2RlIGhvc3RuYW1lcyBpbiB1cmxzIGxpa2U6XG4gICAgLy8gYGh0dHA6Ly9ob3N0L2AsIGBodHRwczovL2hvc3QvYCwgYG1haWx0bzp1c2VyQGhvc3RgLCBgLy9ob3N0L2BcbiAgICAvL1xuICAgIC8vIFdlIGRvbid0IGVuY29kZSB1bmtub3duIHNjaGVtYXMsIGJlY2F1c2UgaXQncyBsaWtlbHkgdGhhdCB3ZSBlbmNvZGVcbiAgICAvLyBzb21ldGhpbmcgd2Ugc2hvdWxkbid0IChlLmcuIGBza3lwZTpuYW1lYCB0cmVhdGVkIGFzIGBza3lwZTpob3N0YClcbiAgICAvL1xuICAgIGlmICghcGFyc2VkLnByb3RvY29sIHx8IFJFQ09ERV9IT1NUTkFNRV9GT1IuaW5kZXhPZihwYXJzZWQucHJvdG9jb2wpID49IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZC5ob3N0bmFtZSA9IHB1bnljb2RlLnRvVW5pY29kZShwYXJzZWQuaG9zdG5hbWUpO1xuICAgICAgfSBjYXRjaCAoZXIpIHsgLyoqLyB9XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkICclJyB0byBleGNsdWRlIGxpc3QgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvaXNzdWVzLzcyMFxuICByZXR1cm4gbWR1cmwuZGVjb2RlKG1kdXJsLmZvcm1hdChwYXJzZWQpLCBtZHVybC5kZWNvZGUuZGVmYXVsdENoYXJzICsgJyUnKTtcbn1cblxuXG4vKipcbiAqIGNsYXNzIE1hcmtkb3duSXRcbiAqXG4gKiBNYWluIHBhcnNlci9yZW5kZXJlciBjbGFzcy5cbiAqXG4gKiAjIyMjIyBVc2FnZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIG5vZGUuanMsIFwiY2xhc3NpY1wiIHdheTpcbiAqIHZhciBNYXJrZG93bkl0ID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSxcbiAqICAgICBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVyKCcjIG1hcmtkb3duLWl0IHJ1bGV6eiEnKTtcbiAqXG4gKiAvLyBub2RlLmpzLCB0aGUgc2FtZSwgYnV0IHdpdGggc3VnYXI6XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVyKCcjIG1hcmtkb3duLWl0IHJ1bGV6eiEnKTtcbiAqXG4gKiAvLyBicm93c2VyIHdpdGhvdXQgQU1ELCBhZGRlZCB0byBcIndpbmRvd1wiIG9uIHNjcmlwdCBsb2FkXG4gKiAvLyBOb3RlLCB0aGVyZSBhcmUgbm8gZGFzaC5cbiAqIHZhciBtZCA9IHdpbmRvdy5tYXJrZG93bml0KCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVyKCcjIG1hcmtkb3duLWl0IHJ1bGV6eiEnKTtcbiAqIGBgYFxuICpcbiAqIFNpbmdsZSBsaW5lIHJlbmRlcmluZywgd2l0aG91dCBwYXJhZ3JhcGggd3JhcDpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVySW5saW5lKCdfX21hcmtkb3duLWl0X18gcnVsZXp6IScpO1xuICogYGBgXG4gKiovXG5cbi8qKlxuICogbmV3IE1hcmtkb3duSXQoW3ByZXNldE5hbWUsIG9wdGlvbnNdKVxuICogLSBwcmVzZXROYW1lIChTdHJpbmcpOiBvcHRpb25hbCwgYGNvbW1vbm1hcmtgIC8gYHplcm9gXG4gKiAtIG9wdGlvbnMgKE9iamVjdClcbiAqXG4gKiBDcmVhdGVzIHBhcnNlciBpbnN0YW5zZSB3aXRoIGdpdmVuIGNvbmZpZy4gQ2FuIGJlIGNhbGxlZCB3aXRob3V0IGBuZXdgLlxuICpcbiAqICMjIyMjIHByZXNldE5hbWVcbiAqXG4gKiBNYXJrZG93bkl0IHByb3ZpZGVzIG5hbWVkIHByZXNldHMgYXMgYSBjb252ZW5pZW5jZSB0byBxdWlja2x5XG4gKiBlbmFibGUvZGlzYWJsZSBhY3RpdmUgc3ludGF4IHJ1bGVzIGFuZCBvcHRpb25zIGZvciBjb21tb24gdXNlIGNhc2VzLlxuICpcbiAqIC0gW1wiY29tbW9ubWFya1wiXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvY29tbW9ubWFyay5qcykgLVxuICogICBjb25maWd1cmVzIHBhcnNlciB0byBzdHJpY3QgW0NvbW1vbk1hcmtdKGh0dHA6Ly9jb21tb25tYXJrLm9yZy8pIG1vZGUuXG4gKiAtIFtkZWZhdWx0XShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvZGVmYXVsdC5qcykgLVxuICogICBzaW1pbGFyIHRvIEdGTSwgdXNlZCB3aGVuIG5vIHByZXNldCBuYW1lIGdpdmVuLiBFbmFibGVzIGFsbCBhdmFpbGFibGUgcnVsZXMsXG4gKiAgIGJ1dCBzdGlsbCB3aXRob3V0IGh0bWwsIHR5cG9ncmFwaGVyICYgYXV0b2xpbmtlci5cbiAqIC0gW1wiemVyb1wiXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvemVyby5qcykgLVxuICogICBhbGwgcnVsZXMgZGlzYWJsZWQuIFVzZWZ1bCB0byBxdWlja2x5IHNldHVwIHlvdXIgY29uZmlnIHZpYSBgLmVuYWJsZSgpYC5cbiAqICAgRm9yIGV4YW1wbGUsIHdoZW4geW91IG5lZWQgb25seSBgYm9sZGAgYW5kIGBpdGFsaWNgIG1hcmt1cCBhbmQgbm90aGluZyBlbHNlLlxuICpcbiAqICMjIyMjIG9wdGlvbnM6XG4gKlxuICogLSBfX2h0bWxfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gZW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2UuIEJlIGNhcmVmdWwhXG4gKiAgIFRoYXQncyBub3Qgc2FmZSEgWW91IG1heSBuZWVkIGV4dGVybmFsIHNhbml0aXplciB0byBwcm90ZWN0IG91dHB1dCBmcm9tIFhTUy5cbiAqICAgSXQncyBiZXR0ZXIgdG8gZXh0ZW5kIGZlYXR1cmVzIHZpYSBwbHVnaW5zLCBpbnN0ZWFkIG9mIGVuYWJsaW5nIEhUTUwuXG4gKiAtIF9feGh0bWxPdXRfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gYWRkICcvJyB3aGVuIGNsb3Npbmcgc2luZ2xlIHRhZ3NcbiAqICAgKGA8YnIgLz5gKS4gVGhpcyBpcyBuZWVkZWQgb25seSBmb3IgZnVsbCBDb21tb25NYXJrIGNvbXBhdGliaWxpdHkuIEluIHJlYWxcbiAqICAgd29ybGQgeW91IHdpbGwgbmVlZCBIVE1MIG91dHB1dC5cbiAqIC0gX19icmVha3NfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gY29udmVydCBgXFxuYCBpbiBwYXJhZ3JhcGhzIGludG8gYDxicj5gLlxuICogLSBfX2xhbmdQcmVmaXhfXyAtIGBsYW5ndWFnZS1gLiBDU1MgbGFuZ3VhZ2UgY2xhc3MgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzLlxuICogICBDYW4gYmUgdXNlZnVsIGZvciBleHRlcm5hbCBoaWdobGlnaHRlcnMuXG4gKiAtIF9fbGlua2lmeV9fIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBhdXRvY29udmVydCBVUkwtbGlrZSB0ZXh0IHRvIGxpbmtzLlxuICogLSBfX3R5cG9ncmFwaGVyX18gIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBlbmFibGUgW3NvbWUgbGFuZ3VhZ2UtbmV1dHJhbFxuICogICByZXBsYWNlbWVudF0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cy5qcykgK1xuICogICBxdW90ZXMgYmVhdXRpZmljYXRpb24gKHNtYXJ0cXVvdGVzKS5cbiAqIC0gX19xdW90ZXNfXyAtIGDigJzigJ3igJjigJlgLCBTdHJpbmcgb3IgQXJyYXkuIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnRcbiAqICAgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCBhbmQgc21hcnRxdW90ZXMgb24uIEZvciBleGFtcGxlLCB5b3UgY2FuXG4gKiAgIHVzZSBgJ8KrwrvigJ7igJwnYCBmb3IgUnVzc2lhbiwgYCfigJ7igJzigJrigJgnYCBmb3IgR2VybWFuLCBhbmRcbiAqICAgYFsnwqtcXHhBMCcsICdcXHhBMMK7JywgJ+KAuVxceEEwJywgJ1xceEEw4oC6J11gIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAqIC0gX19oaWdobGlnaHRfXyAtIGBudWxsYC4gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24gZm9yIGZlbmNlZCBjb2RlIGJsb2Nrcy5cbiAqICAgSGlnaGxpZ2h0ZXIgYGZ1bmN0aW9uIChzdHIsIGxhbmcpYCBzaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTC4gSXQgY2FuIGFsc29cbiAqICAgcmV0dXJuIGVtcHR5IHN0cmluZyBpZiB0aGUgc291cmNlIHdhcyBub3QgY2hhbmdlZCBhbmQgc2hvdWxkIGJlIGVzY2FwZWRcbiAqICAgZXh0ZXJuYWx5LiBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIGNvbW1vbm1hcmsgbW9kZVxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgnY29tbW9ubWFyaycpO1xuICpcbiAqIC8vIGRlZmF1bHQgbW9kZVxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICpcbiAqIC8vIGVuYWJsZSBldmVyeXRoaW5nXG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKHtcbiAqICAgaHRtbDogdHJ1ZSxcbiAqICAgbGlua2lmeTogdHJ1ZSxcbiAqICAgdHlwb2dyYXBoZXI6IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogIyMjIyMgU3ludGF4IGhpZ2hsaWdodGluZ1xuICpcbiAqIGBgYGpzXG4gKiB2YXIgaGxqcyA9IHJlcXVpcmUoJ2hpZ2hsaWdodC5qcycpIC8vIGh0dHBzOi8vaGlnaGxpZ2h0anMub3JnL1xuICpcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0Jykoe1xuICogICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChzdHIsIGxhbmcpIHtcbiAqICAgICBpZiAobGFuZyAmJiBobGpzLmdldExhbmd1YWdlKGxhbmcpKSB7XG4gKiAgICAgICB0cnkge1xuICogICAgICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHQobGFuZywgc3RyLCB0cnVlKS52YWx1ZTtcbiAqICAgICAgIH0gY2F0Y2ggKF9fKSB7fVxuICogICAgIH1cbiAqXG4gKiAgICAgcmV0dXJuICcnOyAvLyB1c2UgZXh0ZXJuYWwgZGVmYXVsdCBlc2NhcGluZ1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE9yIHdpdGggZnVsbCB3cmFwcGVyIG92ZXJyaWRlIChpZiB5b3UgbmVlZCBhc3NpZ24gY2xhc3MgdG8gYDxwcmU+YCk6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIGhsanMgPSByZXF1aXJlKCdoaWdobGlnaHQuanMnKSAvLyBodHRwczovL2hpZ2hsaWdodGpzLm9yZy9cbiAqXG4gKiAvLyBBY3R1YWwgZGVmYXVsdCB2YWx1ZXNcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0Jykoe1xuICogICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChzdHIsIGxhbmcpIHtcbiAqICAgICBpZiAobGFuZyAmJiBobGpzLmdldExhbmd1YWdlKGxhbmcpKSB7XG4gKiAgICAgICB0cnkge1xuICogICAgICAgICByZXR1cm4gJzxwcmUgY2xhc3M9XCJobGpzXCI+PGNvZGU+JyArXG4gKiAgICAgICAgICAgICAgICBobGpzLmhpZ2hsaWdodChsYW5nLCBzdHIsIHRydWUpLnZhbHVlICtcbiAqICAgICAgICAgICAgICAgICc8L2NvZGU+PC9wcmU+JztcbiAqICAgICAgIH0gY2F0Y2ggKF9fKSB7fVxuICogICAgIH1cbiAqXG4gKiAgICAgcmV0dXJuICc8cHJlIGNsYXNzPVwiaGxqc1wiPjxjb2RlPicgKyBtZC51dGlscy5lc2NhcGVIdG1sKHN0cikgKyAnPC9jb2RlPjwvcHJlPic7XG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICoqL1xuZnVuY3Rpb24gTWFya2Rvd25JdChwcmVzZXROYW1lLCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXJrZG93bkl0KSkge1xuICAgIHJldHVybiBuZXcgTWFya2Rvd25JdChwcmVzZXROYW1lLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIGlmICghdXRpbHMuaXNTdHJpbmcocHJlc2V0TmFtZSkpIHtcbiAgICAgIG9wdGlvbnMgPSBwcmVzZXROYW1lIHx8IHt9O1xuICAgICAgcHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya2Rvd25JdCNpbmxpbmUgLT4gUGFyc2VySW5saW5lXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbUGFyc2VySW5saW5lXV0uIFlvdSBtYXkgbmVlZCBpdCB0byBhZGQgbmV3IHJ1bGVzIHdoZW5cbiAgICogd3JpdGluZyBwbHVnaW5zLiBGb3Igc2ltcGxlIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0gYW5kXG4gICAqIFtbTWFya2Rvd25JdC5lbmFibGVdXS5cbiAgICoqL1xuICB0aGlzLmlubGluZSA9IG5ldyBQYXJzZXJJbmxpbmUoKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNibG9jayAtPiBQYXJzZXJCbG9ja1xuICAgKlxuICAgKiBJbnN0YW5jZSBvZiBbW1BhcnNlckJsb2NrXV0uIFlvdSBtYXkgbmVlZCBpdCB0byBhZGQgbmV3IHJ1bGVzIHdoZW5cbiAgICogd3JpdGluZyBwbHVnaW5zLiBGb3Igc2ltcGxlIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0gYW5kXG4gICAqIFtbTWFya2Rvd25JdC5lbmFibGVdXS5cbiAgICoqL1xuICB0aGlzLmJsb2NrID0gbmV3IFBhcnNlckJsb2NrKCk7XG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjY29yZSAtPiBDb3JlXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbQ29yZV1dIGNoYWluIGV4ZWN1dG9yLiBZb3UgbWF5IG5lZWQgaXQgdG8gYWRkIG5ldyBydWxlcyB3aGVuXG4gICAqIHdyaXRpbmcgcGx1Z2lucy4gRm9yIHNpbXBsZSBydWxlcyBjb250cm9sIHVzZSBbW01hcmtkb3duSXQuZGlzYWJsZV1dIGFuZFxuICAgKiBbW01hcmtkb3duSXQuZW5hYmxlXV0uXG4gICAqKi9cbiAgdGhpcy5jb3JlID0gbmV3IFBhcnNlckNvcmUoKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNyZW5kZXJlciAtPiBSZW5kZXJlclxuICAgKlxuICAgKiBJbnN0YW5jZSBvZiBbW1JlbmRlcmVyXV0uIFVzZSBpdCB0byBtb2RpZnkgb3V0cHV0IGxvb2suIE9yIHRvIGFkZCByZW5kZXJpbmdcbiAgICogcnVsZXMgZm9yIG5ldyB0b2tlbiB0eXBlcywgZ2VuZXJhdGVkIGJ5IHBsdWdpbnMuXG4gICAqXG4gICAqICMjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gICAqXG4gICAqIGZ1bmN0aW9uIG15VG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikge1xuICAgKiAgIC8vLi4uXG4gICAqICAgcmV0dXJuIHJlc3VsdDtcbiAgICogfTtcbiAgICpcbiAgICogbWQucmVuZGVyZXIucnVsZXNbJ215X3Rva2VuJ10gPSBteVRva2VuXG4gICAqIGBgYFxuICAgKlxuICAgKiBTZWUgW1tSZW5kZXJlcl1dIGRvY3MgYW5kIFtzb3VyY2UgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXJlci5qcykuXG4gICAqKi9cbiAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2xpbmtpZnkgLT4gTGlua2lmeUl0XG4gICAqXG4gICAqIFtsaW5raWZ5LWl0XShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbGlua2lmeS1pdCkgaW5zdGFuY2UuXG4gICAqIFVzZWQgYnkgW2xpbmtpZnldKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcnVsZXNfY29yZS9saW5raWZ5LmpzKVxuICAgKiBydWxlLlxuICAgKiovXG4gIHRoaXMubGlua2lmeSA9IG5ldyBMaW5raWZ5SXQoKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCN2YWxpZGF0ZUxpbmsodXJsKSAtPiBCb29sZWFuXG4gICAqXG4gICAqIExpbmsgdmFsaWRhdGlvbiBmdW5jdGlvbi4gQ29tbW9uTWFyayBhbGxvd3MgdG9vIG11Y2ggaW4gbGlua3MuIEJ5IGRlZmF1bHRcbiAgICogd2UgZGlzYWJsZSBgamF2YXNjcmlwdDpgLCBgdmJzY3JpcHQ6YCwgYGZpbGU6YCBzY2hlbWFzLCBhbmQgYWxtb3N0IGFsbCBgZGF0YTouLi5gIHNjaGVtYXNcbiAgICogZXhjZXB0IHNvbWUgZW1iZWRkZWQgaW1hZ2UgdHlwZXMuXG4gICAqXG4gICAqIFlvdSBjYW4gY2hhbmdlIHRoaXMgYmVoYXZpb3VyOlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAgICogLy8gZW5hYmxlIGV2ZXJ5dGhpbmdcbiAgICogbWQudmFsaWRhdGVMaW5rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgKiBgYGBcbiAgICoqL1xuICB0aGlzLnZhbGlkYXRlTGluayA9IHZhbGlkYXRlTGluaztcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNub3JtYWxpemVMaW5rKHVybCkgLT4gU3RyaW5nXG4gICAqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZW5jb2RlIGxpbmsgdXJsIHRvIGEgbWFjaGluZS1yZWFkYWJsZSBmb3JtYXQsXG4gICAqIHdoaWNoIGluY2x1ZGVzIHVybC1lbmNvZGluZywgcHVueWNvZGUsIGV0Yy5cbiAgICoqL1xuICB0aGlzLm5vcm1hbGl6ZUxpbmsgPSBub3JtYWxpemVMaW5rO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I25vcm1hbGl6ZUxpbmtUZXh0KHVybCkgLT4gU3RyaW5nXG4gICAqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZGVjb2RlIGxpbmsgdXJsIHRvIGEgaHVtYW4tcmVhZGFibGUgZm9ybWF0YFxuICAgKiovXG4gIHRoaXMubm9ybWFsaXplTGlua1RleHQgPSBub3JtYWxpemVMaW5rVGV4dDtcblxuXG4gIC8vIEV4cG9zZSB1dGlscyAmIGhlbHBlcnMgZm9yIGVhc3kgYWNjZXMgZnJvbSBwbHVnaW5zXG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjdXRpbHMgLT4gdXRpbHNcbiAgICpcbiAgICogQXNzb3J0ZWQgdXRpbGl0eSBmdW5jdGlvbnMsIHVzZWZ1bCB0byB3cml0ZSBwbHVnaW5zLiBTZWUgZGV0YWlsc1xuICAgKiBbaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9jb21tb24vdXRpbHMuanMpLlxuICAgKiovXG4gIHRoaXMudXRpbHMgPSB1dGlscztcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNoZWxwZXJzIC0+IGhlbHBlcnNcbiAgICpcbiAgICogTGluayBjb21wb25lbnRzIHBhcnNlciBmdW5jdGlvbnMsIHVzZWZ1bCB0byB3cml0ZSBwbHVnaW5zLiBTZWUgZGV0YWlsc1xuICAgKiBbaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9oZWxwZXJzKS5cbiAgICoqL1xuICB0aGlzLmhlbHBlcnMgPSB1dGlscy5hc3NpZ24oe30sIGhlbHBlcnMpO1xuXG5cbiAgdGhpcy5vcHRpb25zID0ge307XG4gIHRoaXMuY29uZmlndXJlKHByZXNldE5hbWUpO1xuXG4gIGlmIChvcHRpb25zKSB7IHRoaXMuc2V0KG9wdGlvbnMpOyB9XG59XG5cblxuLyoqIGNoYWluYWJsZVxuICogTWFya2Rvd25JdC5zZXQob3B0aW9ucylcbiAqXG4gKiBTZXQgcGFyc2VyIG9wdGlvbnMgKGluIHRoZSBzYW1lIGZvcm1hdCBhcyBpbiBjb25zdHJ1Y3RvcikuIFByb2JhYmx5LCB5b3VcbiAqIHdpbGwgbmV2ZXIgbmVlZCBpdCwgYnV0IHlvdSBjYW4gY2hhbmdlIG9wdGlvbnMgYWZ0ZXIgY29uc3RydWN0b3IgY2FsbC5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpXG4gKiAgICAgICAgICAgICAuc2V0KHsgaHRtbDogdHJ1ZSwgYnJlYWtzOiB0cnVlIH0pXG4gKiAgICAgICAgICAgICAuc2V0KHsgdHlwb2dyYXBoZXIsIHRydWUgfSk7XG4gKiBgYGBcbiAqXG4gKiBfX05vdGU6X18gVG8gYWNoaWV2ZSB0aGUgYmVzdCBwb3NzaWJsZSBwZXJmb3JtYW5jZSwgZG9uJ3QgbW9kaWZ5IGFcbiAqIGBtYXJrZG93bi1pdGAgaW5zdGFuY2Ugb3B0aW9ucyBvbiB0aGUgZmx5LiBJZiB5b3UgbmVlZCBtdWx0aXBsZSBjb25maWd1cmF0aW9uc1xuICogaXQncyBiZXN0IHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXMgYW5kIGluaXRpYWxpemUgZWFjaCB3aXRoIHNlcGFyYXRlXG4gKiBjb25maWcuXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB1dGlscy5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKiBjaGFpbmFibGUsIGludGVybmFsXG4gKiBNYXJrZG93bkl0LmNvbmZpZ3VyZShwcmVzZXRzKVxuICpcbiAqIEJhdGNoIGxvYWQgb2YgYWxsIG9wdGlvbnMgYW5kIGNvbXBlbmVudCBzZXR0aW5ncy4gVGhpcyBpcyBpbnRlcm5hbCBtZXRob2QsXG4gKiBhbmQgeW91IHByb2JhYmx5IHdpbGwgbm90IG5lZWQgaXQuIEJ1dCBpZiB5b3Ugd2lsbCAtIHNlZSBhdmFpbGFibGUgcHJlc2V0c1xuICogYW5kIGRhdGEgc3RydWN0dXJlIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvdHJlZS9tYXN0ZXIvbGliL3ByZXNldHMpXG4gKlxuICogV2Ugc3Ryb25nbHkgcmVjb21tZW5kIHRvIHVzZSBwcmVzZXRzIGluc3RlYWQgb2YgZGlyZWN0IGNvbmZpZyBsb2Fkcy4gVGhhdFxuICogd2lsbCBnaXZlIGJldHRlciBjb21wYXRpYmlsaXR5IHdpdGggbmV4dCB2ZXJzaW9ucy5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChwcmVzZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcywgcHJlc2V0TmFtZTtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcocHJlc2V0cykpIHtcbiAgICBwcmVzZXROYW1lID0gcHJlc2V0cztcbiAgICBwcmVzZXRzID0gY29uZmlnW3ByZXNldE5hbWVdO1xuICAgIGlmICghcHJlc2V0cykgeyB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGBtYXJrZG93bi1pdGAgcHJlc2V0IFwiJyArIHByZXNldE5hbWUgKyAnXCIsIGNoZWNrIG5hbWUnKTsgfVxuICB9XG5cbiAgaWYgKCFwcmVzZXRzKSB7IHRocm93IG5ldyBFcnJvcignV3JvbmcgYG1hcmtkb3duLWl0YCBwcmVzZXQsIGNhblxcJ3QgYmUgZW1wdHknKTsgfVxuXG4gIGlmIChwcmVzZXRzLm9wdGlvbnMpIHsgc2VsZi5zZXQocHJlc2V0cy5vcHRpb25zKTsgfVxuXG4gIGlmIChwcmVzZXRzLmNvbXBvbmVudHMpIHtcbiAgICBPYmplY3Qua2V5cyhwcmVzZXRzLmNvbXBvbmVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMpIHtcbiAgICAgICAgc2VsZltuYW1lXS5ydWxlci5lbmFibGVPbmx5KHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJlc2V0cy5jb21wb25lbnRzW25hbWVdLnJ1bGVzMikge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyMi5lbmFibGVPbmx5KHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlczIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LmVuYWJsZShsaXN0LCBpZ25vcmVJbnZhbGlkKVxuICogLSBsaXN0IChTdHJpbmd8QXJyYXkpOiBydWxlIG5hbWUgb3IgbGlzdCBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZVxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogRW5hYmxlIGxpc3Qgb3IgcnVsZXMuIEl0IHdpbGwgYXV0b21hdGljYWxseSBmaW5kIGFwcHJvcHJpYXRlIGNvbXBvbmVudHMsXG4gKiBjb250YWluaW5nIHJ1bGVzIHdpdGggZ2l2ZW4gbmFtZXMuIElmIHJ1bGUgbm90IGZvdW5kLCBhbmQgYGlnbm9yZUludmFsaWRgXG4gKiBub3Qgc2V0IC0gdGhyb3dzIGV4Y2VwdGlvbi5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpXG4gKiAgICAgICAgICAgICAuZW5hYmxlKFsnc3ViJywgJ3N1cCddKVxuICogICAgICAgICAgICAgLmRpc2FibGUoJ3NtYXJ0cXVvdGVzJyk7XG4gKiBgYGBcbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFsgbGlzdCBdOyB9XG5cbiAgWyAnY29yZScsICdibG9jaycsICdpbmxpbmUnIF0uZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXNbY2hhaW5dLnJ1bGVyLmVuYWJsZShsaXN0LCB0cnVlKSk7XG4gIH0sIHRoaXMpO1xuXG4gIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5pbmxpbmUucnVsZXIyLmVuYWJsZShsaXN0LCB0cnVlKSk7XG5cbiAgdmFyIG1pc3NlZCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiByZXN1bHQuaW5kZXhPZihuYW1lKSA8IDA7IH0pO1xuXG4gIGlmIChtaXNzZWQubGVuZ3RoICYmICFpZ25vcmVJbnZhbGlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNYXJrZG93bkl0LiBGYWlsZWQgdG8gZW5hYmxlIHVua25vd24gcnVsZShzKTogJyArIG1pc3NlZCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqIGNoYWluYWJsZVxuICogTWFya2Rvd25JdC5kaXNhYmxlKGxpc3QsIGlnbm9yZUludmFsaWQpXG4gKiAtIGxpc3QgKFN0cmluZ3xBcnJheSk6IHJ1bGUgbmFtZSBvciBsaXN0IG9mIHJ1bGUgbmFtZXMgdG8gZGlzYWJsZS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbTWFya2Rvd25JdC5lbmFibGVdXSwgYnV0IHR1cm4gc3BlY2lmaWVkIHJ1bGVzIG9mZi5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAobGlzdCwgaWdub3JlSW52YWxpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbIGxpc3QgXTsgfVxuXG4gIFsgJ2NvcmUnLCAnYmxvY2snLCAnaW5saW5lJyBdLmZvckVhY2goZnVuY3Rpb24gKGNoYWluKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzW2NoYWluXS5ydWxlci5kaXNhYmxlKGxpc3QsIHRydWUpKTtcbiAgfSwgdGhpcyk7XG5cbiAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmlubGluZS5ydWxlcjIuZGlzYWJsZShsaXN0LCB0cnVlKSk7XG5cbiAgdmFyIG1pc3NlZCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiByZXN1bHQuaW5kZXhPZihuYW1lKSA8IDA7IH0pO1xuXG4gIGlmIChtaXNzZWQubGVuZ3RoICYmICFpZ25vcmVJbnZhbGlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNYXJrZG93bkl0LiBGYWlsZWQgdG8gZGlzYWJsZSB1bmtub3duIHJ1bGUocyk6ICcgKyBtaXNzZWQpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LnVzZShwbHVnaW4sIHBhcmFtcylcbiAqXG4gKiBMb2FkIHNwZWNpZmllZCBwbHVnaW4gd2l0aCBnaXZlbiBwYXJhbXMgaW50byBjdXJyZW50IHBhcnNlciBpbnN0YW5jZS5cbiAqIEl0J3MganVzdCBhIHN1Z2FyIHRvIGNhbGwgYHBsdWdpbihtZCwgcGFyYW1zKWAgd2l0aCBjdXJyaW5nLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgaXRlcmF0b3IgPSByZXF1aXJlKCdtYXJrZG93bi1pdC1mb3ItaW5saW5lJyk7XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKClcbiAqICAgICAgICAgICAgIC51c2UoaXRlcmF0b3IsICdmb29fcmVwbGFjZScsICd0ZXh0JywgZnVuY3Rpb24gKHRva2VucywgaWR4KSB7XG4gKiAgICAgICAgICAgICAgIHRva2Vuc1tpZHhdLmNvbnRlbnQgPSB0b2tlbnNbaWR4XS5jb250ZW50LnJlcGxhY2UoL2Zvby9nLCAnYmFyJyk7XG4gKiAgICAgICAgICAgICB9KTtcbiAqIGBgYFxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbiAvKiwgcGFyYW1zLCAuLi4gKi8pIHtcbiAgdmFyIGFyZ3MgPSBbIHRoaXMgXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIHBsdWdpbi5hcHBseShwbHVnaW4sIGFyZ3MpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqIGludGVybmFsXG4gKiBNYXJrZG93bkl0LnBhcnNlKHNyYywgZW52KSAtPiBBcnJheVxuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogUGFyc2UgaW5wdXQgc3RyaW5nIGFuZCByZXR1cm4gbGlzdCBvZiBibG9jayB0b2tlbnMgKHNwZWNpYWwgdG9rZW4gdHlwZVxuICogXCJpbmxpbmVcIiB3aWxsIGNvbnRhaW4gbGlzdCBvZiBpbmxpbmUgdG9rZW5zKS4gWW91IHNob3VsZCBub3QgY2FsbCB0aGlzXG4gKiBtZXRob2QgZGlyZWN0bHksIHVudGlsIHlvdSB3cml0ZSBjdXN0b20gcmVuZGVyZXIgKGZvciBleGFtcGxlLCB0byBwcm9kdWNlXG4gKiBBU1QpLlxuICpcbiAqIGBlbnZgIGlzIHVzZWQgdG8gcGFzcyBkYXRhIGJldHdlZW4gXCJkaXN0cmlidXRlZFwiIHJ1bGVzIGFuZCByZXR1cm4gYWRkaXRpb25hbFxuICogbWV0YWRhdGEgbGlrZSByZWZlcmVuY2UgaW5mbywgbmVlZGVkIGZvciB0aGUgcmVuZGVyZXIuIEl0IGFsc28gY2FuIGJlIHVzZWQgdG9cbiAqIGluamVjdCBkYXRhIGluIHNwZWNpZmljIGNhc2VzLiBVc3VhbGx5LCB5b3Ugd2lsbCBiZSBvayB0byBwYXNzIGB7fWAsXG4gKiBhbmQgdGhlbiBwYXNzIHVwZGF0ZWQgb2JqZWN0IHRvIHJlbmRlcmVyLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIHNob3VsZCBiZSBhIFN0cmluZycpO1xuICB9XG5cbiAgdmFyIHN0YXRlID0gbmV3IHRoaXMuY29yZS5TdGF0ZShzcmMsIHRoaXMsIGVudik7XG5cbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG5cbi8qKlxuICogTWFya2Rvd25JdC5yZW5kZXIoc3JjIFssIGVudl0pIC0+IFN0cmluZ1xuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogUmVuZGVyIG1hcmtkb3duIHN0cmluZyBpbnRvIGh0bWwuIEl0IGRvZXMgYWxsIG1hZ2ljIGZvciB5b3UgOikuXG4gKlxuICogYGVudmAgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGFkZGl0aW9uYWwgbWV0YWRhdGEgKGB7fWAgYnkgZGVmYXVsdCkuXG4gKiBCdXQgeW91IHdpbGwgbm90IG5lZWQgaXQgd2l0aCBoaWdoIHByb2JhYmlsaXR5LiBTZWUgYWxzbyBjb21tZW50XG4gKiBpbiBbW01hcmtkb3duSXQucGFyc2VdXS5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChzcmMsIGVudikge1xuICBlbnYgPSBlbnYgfHwge307XG5cbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2Uoc3JjLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudik7XG59O1xuXG5cbi8qKiBpbnRlcm5hbFxuICogTWFya2Rvd25JdC5wYXJzZUlubGluZShzcmMsIGVudikgLT4gQXJyYXlcbiAqIC0gc3JjIChTdHJpbmcpOiBzb3VyY2Ugc3RyaW5nXG4gKiAtIGVudiAoT2JqZWN0KTogZW52aXJvbm1lbnQgc2FuZGJveFxuICpcbiAqIFRoZSBzYW1lIGFzIFtbTWFya2Rvd25JdC5wYXJzZV1dIGJ1dCBza2lwIGFsbCBibG9jayBydWxlcy4gSXQgcmV0dXJucyB0aGVcbiAqIGJsb2NrIHRva2VucyBsaXN0IHdpdGggdGhlIHNpbmdsZSBgaW5saW5lYCBlbGVtZW50LCBjb250YWluaW5nIHBhcnNlZCBpbmxpbmVcbiAqIHRva2VucyBpbiBgY2hpbGRyZW5gIHByb3BlcnR5LiBBbHNvIHVwZGF0ZXMgYGVudmAgb2JqZWN0LlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucGFyc2VJbmxpbmUgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgdmFyIHN0YXRlID0gbmV3IHRoaXMuY29yZS5TdGF0ZShzcmMsIHRoaXMsIGVudik7XG5cbiAgc3RhdGUuaW5saW5lTW9kZSA9IHRydWU7XG4gIHRoaXMuY29yZS5wcm9jZXNzKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGUudG9rZW5zO1xufTtcblxuXG4vKipcbiAqIE1hcmtkb3duSXQucmVuZGVySW5saW5lKHNyYyBbLCBlbnZdKSAtPiBTdHJpbmdcbiAqIC0gc3JjIChTdHJpbmcpOiBzb3VyY2Ugc3RyaW5nXG4gKiAtIGVudiAoT2JqZWN0KTogZW52aXJvbm1lbnQgc2FuZGJveFxuICpcbiAqIFNpbWlsYXIgdG8gW1tNYXJrZG93bkl0LnJlbmRlcl1dIGJ1dCBmb3Igc2luZ2xlIHBhcmFncmFwaCBjb250ZW50LiBSZXN1bHRcbiAqIHdpbGwgTk9UIGJlIHdyYXBwZWQgaW50byBgPHA+YCB0YWdzLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHNyYywgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcblxuICByZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5wYXJzZUlubGluZShzcmMsIGVudiksIHRoaXMub3B0aW9ucywgZW52KTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJrZG93bkl0O1xuIiwiLyoqIGludGVybmFsXG4gKiBjbGFzcyBQYXJzZXJCbG9ja1xuICpcbiAqIEJsb2NrLWxldmVsIHRva2VuaXplci5cbiAqKi9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgUnVsZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi9ydWxlcicpO1xuXG5cbnZhciBfcnVsZXMgPSBbXG4gIC8vIEZpcnN0IDIgcGFyYW1zIC0gcnVsZSBuYW1lICYgc291cmNlLiBTZWNvbmRhcnkgYXJyYXkgLSBsaXN0IG9mIHJ1bGVzLFxuICAvLyB3aGljaCBjYW4gYmUgdGVybWluYXRlZCBieSB0aGlzIG9uZS5cbiAgWyAndGFibGUnLCAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svdGFibGUnKSwgICAgICBbICdwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJyBdIF0sXG4gIFsgJ2NvZGUnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2NvZGUnKSBdLFxuICBbICdmZW5jZScsICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9mZW5jZScpLCAgICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScsICdsaXN0JyBdIF0sXG4gIFsgJ2Jsb2NrcXVvdGUnLCByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2Jsb2NrcXVvdGUnKSwgWyAncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJywgJ2xpc3QnIF0gXSxcbiAgWyAnaHInLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaHInKSwgICAgICAgICBbICdwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdsaXN0JywgICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9saXN0JyksICAgICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdyZWZlcmVuY2UnLCAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9yZWZlcmVuY2UnKSBdLFxuICBbICdodG1sX2Jsb2NrJywgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9odG1sX2Jsb2NrJyksIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdoZWFkaW5nJywgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9oZWFkaW5nJyksICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdsaGVhZGluZycsICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9saGVhZGluZycpIF0sXG4gIFsgJ3BhcmFncmFwaCcsICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL3BhcmFncmFwaCcpIF1cbl07XG5cblxuLyoqXG4gKiBuZXcgUGFyc2VyQmxvY2soKVxuICoqL1xuZnVuY3Rpb24gUGFyc2VyQmxvY2soKSB7XG4gIC8qKlxuICAgKiBQYXJzZXJCbG9jayNydWxlciAtPiBSdWxlclxuICAgKlxuICAgKiBbW1J1bGVyXV0gaW5zdGFuY2UuIEtlZXAgY29uZmlndXJhdGlvbiBvZiBibG9jayBydWxlcy5cbiAgICoqL1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0sIHsgYWx0OiAoX3J1bGVzW2ldWzJdIHx8IFtdKS5zbGljZSgpIH0pO1xuICB9XG59XG5cblxuLy8gR2VuZXJhdGUgdG9rZW5zIGZvciBpbnB1dCByYW5nZVxuLy9cblBhcnNlckJsb2NrLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lKSB7XG4gIHZhciBvaywgaSxcbiAgICAgIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyksXG4gICAgICBsZW4gPSBydWxlcy5sZW5ndGgsXG4gICAgICBsaW5lID0gc3RhcnRMaW5lLFxuICAgICAgaGFzRW1wdHlMaW5lcyA9IGZhbHNlLFxuICAgICAgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZztcblxuICB3aGlsZSAobGluZSA8IGVuZExpbmUpIHtcbiAgICBzdGF0ZS5saW5lID0gbGluZSA9IHN0YXRlLnNraXBFbXB0eUxpbmVzKGxpbmUpO1xuICAgIGlmIChsaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cblxuICAgIC8vIFRlcm1pbmF0aW9uIGNvbmRpdGlvbiBmb3IgbmVzdGVkIGNhbGxzLlxuICAgIC8vIE5lc3RlZCBjYWxscyBjdXJyZW50bHkgdXNlZCBmb3IgYmxvY2txdW90ZXMgJiBsaXN0c1xuICAgIGlmIChzdGF0ZS5zQ291bnRbbGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIC8vIElmIG5lc3RpbmcgbGV2ZWwgZXhjZWVkZWQgLSBza2lwIHRhaWwgdG8gdGhlIGVuZC4gVGhhdCdzIG5vdCBvcmRpbmFyeVxuICAgIC8vIHNpdHVhdGlvbiBhbmQgd2Ugc2hvdWxkIG5vdCBjYXJlIGFib3V0IGNvbnRlbnQuXG4gICAgaWYgKHN0YXRlLmxldmVsID49IG1heE5lc3RpbmcpIHtcbiAgICAgIHN0YXRlLmxpbmUgPSBlbmRMaW5lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5saW5lYFxuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS50b2tlbnNgXG4gICAgLy8gLSByZXR1cm4gdHJ1ZVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCBsaW5lLCBlbmRMaW5lLCBmYWxzZSk7XG4gICAgICBpZiAob2spIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICAvLyBzZXQgc3RhdGUudGlnaHQgaWYgd2UgaGFkIGFuIGVtcHR5IGxpbmUgYmVmb3JlIGN1cnJlbnQgdGFnXG4gICAgLy8gaS5lLiBsYXRlc3QgZW1wdHkgbGluZSBzaG91bGQgbm90IGNvdW50XG4gICAgc3RhdGUudGlnaHQgPSAhaGFzRW1wdHlMaW5lcztcblxuICAgIC8vIHBhcmFncmFwaCBtaWdodCBcImVhdFwiIG9uZSBuZXdsaW5lIGFmdGVyIGl0IGluIG5lc3RlZCBsaXN0c1xuICAgIGlmIChzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICBpZiAobGluZSA8IGVuZExpbmUgJiYgc3RhdGUuaXNFbXB0eShsaW5lKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgICBsaW5lKys7XG4gICAgICBzdGF0ZS5saW5lID0gbGluZTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBQYXJzZXJCbG9jay5wYXJzZShzdHIsIG1kLCBlbnYsIG91dFRva2VucylcbiAqXG4gKiBQcm9jZXNzIGlucHV0IHN0cmluZyBhbmQgcHVzaCBibG9jayB0b2tlbnMgaW50byBgb3V0VG9rZW5zYFxuICoqL1xuUGFyc2VyQmxvY2sucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHZhciBzdGF0ZTtcblxuICBpZiAoIXNyYykgeyByZXR1cm47IH1cblxuICBzdGF0ZSA9IG5ldyB0aGlzLlN0YXRlKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKTtcblxuICB0aGlzLnRva2VuaXplKHN0YXRlLCBzdGF0ZS5saW5lLCBzdGF0ZS5saW5lTWF4KTtcbn07XG5cblxuUGFyc2VyQmxvY2sucHJvdG90eXBlLlN0YXRlID0gcmVxdWlyZSgnLi9ydWxlc19ibG9jay9zdGF0ZV9ibG9jaycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyQmxvY2s7XG4iLCIvKiogaW50ZXJuYWxcbiAqIGNsYXNzIENvcmVcbiAqXG4gKiBUb3AtbGV2ZWwgcnVsZXMgZXhlY3V0b3IuIEdsdWVzIGJsb2NrL2lubGluZSBwYXJzZXJzIGFuZCBkb2VzIGludGVybWVkaWF0ZVxuICogdHJhbnNmb3JtYXRpb25zLlxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBSdWxlciAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cblxudmFyIF9ydWxlcyA9IFtcbiAgWyAnbm9ybWFsaXplJywgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvbm9ybWFsaXplJykgICAgICBdLFxuICBbICdibG9jaycsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9ibG9jaycpICAgICAgICAgIF0sXG4gIFsgJ2lubGluZScsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2lubGluZScpICAgICAgICAgXSxcbiAgWyAnbGlua2lmeScsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvbGlua2lmeScpICAgICAgICBdLFxuICBbICdyZXBsYWNlbWVudHMnLCAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9yZXBsYWNlbWVudHMnKSAgIF0sXG4gIFsgJ3NtYXJ0cXVvdGVzJywgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL3NtYXJ0cXVvdGVzJykgICAgXVxuXTtcblxuXG4vKipcbiAqIG5ldyBDb3JlKClcbiAqKi9cbmZ1bmN0aW9uIENvcmUoKSB7XG4gIC8qKlxuICAgKiBDb3JlI3J1bGVyIC0+IFJ1bGVyXG4gICAqXG4gICAqIFtbUnVsZXJdXSBpbnN0YW5jZS4gS2VlcCBjb25maWd1cmF0aW9uIG9mIGNvcmUgcnVsZXMuXG4gICAqKi9cbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQ29yZS5wcm9jZXNzKHN0YXRlKVxuICpcbiAqIEV4ZWN1dGVzIGNvcmUgY2hhaW4gcnVsZXMuXG4gKiovXG5Db3JlLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHZhciBpLCBsLCBydWxlcztcblxuICBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpO1xuXG4gIGZvciAoaSA9IDAsIGwgPSBydWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBydWxlc1tpXShzdGF0ZSk7XG4gIH1cbn07XG5cbkNvcmUucHJvdG90eXBlLlN0YXRlID0gcmVxdWlyZSgnLi9ydWxlc19jb3JlL3N0YXRlX2NvcmUnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENvcmU7XG4iLCIvKiogaW50ZXJuYWxcbiAqIGNsYXNzIFBhcnNlcklubGluZVxuICpcbiAqIFRva2VuaXplcyBwYXJhZ3JhcGggY29udGVudC5cbiAqKi9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgUnVsZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi9ydWxlcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQYXJzZXIgcnVsZXNcblxudmFyIF9ydWxlcyA9IFtcbiAgWyAndGV4dCcsICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvdGV4dCcpIF0sXG4gIFsgJ25ld2xpbmUnLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL25ld2xpbmUnKSBdLFxuICBbICdlc2NhcGUnLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lc2NhcGUnKSBdLFxuICBbICdiYWNrdGlja3MnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9iYWNrdGlja3MnKSBdLFxuICBbICdzdHJpa2V0aHJvdWdoJywgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9zdHJpa2V0aHJvdWdoJykudG9rZW5pemUgXSxcbiAgWyAnZW1waGFzaXMnLCAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZW1waGFzaXMnKS50b2tlbml6ZSBdLFxuICBbICdsaW5rJywgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9saW5rJykgXSxcbiAgWyAnaW1hZ2UnLCAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvaW1hZ2UnKSBdLFxuICBbICdhdXRvbGluaycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9hdXRvbGluaycpIF0sXG4gIFsgJ2h0bWxfaW5saW5lJywgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2h0bWxfaW5saW5lJykgXSxcbiAgWyAnZW50aXR5JywgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZW50aXR5JykgXVxuXTtcblxudmFyIF9ydWxlczIgPSBbXG4gIFsgJ2JhbGFuY2VfcGFpcnMnLCAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2JhbGFuY2VfcGFpcnMnKSBdLFxuICBbICdzdHJpa2V0aHJvdWdoJywgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9zdHJpa2V0aHJvdWdoJykucG9zdFByb2Nlc3MgXSxcbiAgWyAnZW1waGFzaXMnLCAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZW1waGFzaXMnKS5wb3N0UHJvY2VzcyBdLFxuICBbICd0ZXh0X2NvbGxhcHNlJywgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS90ZXh0X2NvbGxhcHNlJykgXVxuXTtcblxuXG4vKipcbiAqIG5ldyBQYXJzZXJJbmxpbmUoKVxuICoqL1xuZnVuY3Rpb24gUGFyc2VySW5saW5lKCkge1xuICB2YXIgaTtcblxuICAvKipcbiAgICogUGFyc2VySW5saW5lI3J1bGVyIC0+IFJ1bGVyXG4gICAqXG4gICAqIFtbUnVsZXJdXSBpbnN0YW5jZS4gS2VlcCBjb25maWd1cmF0aW9uIG9mIGlubGluZSBydWxlcy5cbiAgICoqL1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG5cbiAgZm9yIChpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VySW5saW5lI3J1bGVyMiAtPiBSdWxlclxuICAgKlxuICAgKiBbW1J1bGVyXV0gaW5zdGFuY2UuIFNlY29uZCBydWxlciB1c2VkIGZvciBwb3N0LXByb2Nlc3NpbmdcbiAgICogKGUuZy4gaW4gZW1waGFzaXMtbGlrZSBydWxlcykuXG4gICAqKi9cbiAgdGhpcy5ydWxlcjIgPSBuZXcgUnVsZXIoKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgX3J1bGVzMi5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIyLnB1c2goX3J1bGVzMltpXVswXSwgX3J1bGVzMltpXVsxXSk7XG4gIH1cbn1cblxuXG4vLyBTa2lwIHNpbmdsZSB0b2tlbiBieSBydW5uaW5nIGFsbCBydWxlcyBpbiB2YWxpZGF0aW9uIG1vZGU7XG4vLyByZXR1cm5zIGB0cnVlYCBpZiBhbnkgcnVsZSByZXBvcnRlZCBzdWNjZXNzXG4vL1xuUGFyc2VySW5saW5lLnByb3RvdHlwZS5za2lwVG9rZW4gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIG9rLCBpLCBwb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpLFxuICAgICAgbGVuID0gcnVsZXMubGVuZ3RoLFxuICAgICAgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZyxcbiAgICAgIGNhY2hlID0gc3RhdGUuY2FjaGU7XG5cblxuICBpZiAodHlwZW9mIGNhY2hlW3Bvc10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdGUucG9zID0gY2FjaGVbcG9zXTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPCBtYXhOZXN0aW5nKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAvLyBJbmNyZW1lbnQgc3RhdGUubGV2ZWwgYW5kIGRlY3JlbWVudCBpdCBsYXRlciB0byBsaW1pdCByZWN1cnNpb24uXG4gICAgICAvLyBJdCdzIGhhcm1sZXNzIHRvIGRvIGhlcmUsIGJlY2F1c2Ugbm8gdG9rZW5zIGFyZSBjcmVhdGVkLiBCdXQgaWRlYWxseSxcbiAgICAgIC8vIHdlJ2QgbmVlZCBhIHNlcGFyYXRlIHByaXZhdGUgc3RhdGUgdmFyaWFibGUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgIC8vXG4gICAgICBzdGF0ZS5sZXZlbCsrO1xuICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgdHJ1ZSk7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuXG4gICAgICBpZiAob2spIHsgYnJlYWs7IH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVG9vIG11Y2ggbmVzdGluZywganVzdCBza2lwIHVudGlsIHRoZSBlbmQgb2YgdGhlIHBhcmFncmFwaC5cbiAgICAvL1xuICAgIC8vIE5PVEU6IHRoaXMgd2lsbCBjYXVzZSBsaW5rcyB0byBiZWhhdmUgaW5jb3JyZWN0bHkgaW4gdGhlIGZvbGxvd2luZyBjYXNlLFxuICAgIC8vICAgICAgIHdoZW4gYW4gYW1vdW50IG9mIGBbYCBpcyBleGFjdGx5IGVxdWFsIHRvIGBtYXhOZXN0aW5nICsgMWA6XG4gICAgLy9cbiAgICAvLyAgICAgICBbW1tbW1tbW1tbW1tbW1tbW1tbW1tmb29dKClcbiAgICAvL1xuICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBDTSBzdGFuZGFyZCB3aWxsIGFsbG93IG5lc3RlZCBsaW5rc1xuICAgIC8vICAgICAgICh3ZSBjYW4gcmVwbGFjZSBpdCBieSBwcmV2ZW50aW5nIGxpbmtzIGZyb20gYmVpbmcgcGFyc2VkIGluXG4gICAgLy8gICAgICAgdmFsaWRhdGlvbiBtb2RlKVxuICAgIC8vXG4gICAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4O1xuICB9XG5cbiAgaWYgKCFvaykgeyBzdGF0ZS5wb3MrKzsgfVxuICBjYWNoZVtwb3NdID0gc3RhdGUucG9zO1xufTtcblxuXG4vLyBHZW5lcmF0ZSB0b2tlbnMgZm9yIGlucHV0IHJhbmdlXG4vL1xuUGFyc2VySW5saW5lLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgb2ssIGksXG4gICAgICBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpLFxuICAgICAgbGVuID0gcnVsZXMubGVuZ3RoLFxuICAgICAgZW5kID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZztcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgZW5kKSB7XG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5wb3NgXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnRva2Vuc2BcbiAgICAvLyAtIHJldHVybiB0cnVlXG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBtYXhOZXN0aW5nKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgZmFsc2UpO1xuICAgICAgICBpZiAob2spIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2spIHtcbiAgICAgIGlmIChzdGF0ZS5wb3MgPj0gZW5kKSB7IGJyZWFrOyB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyY1tzdGF0ZS5wb3MrK107XG4gIH1cblxuICBpZiAoc3RhdGUucGVuZGluZykge1xuICAgIHN0YXRlLnB1c2hQZW5kaW5nKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBQYXJzZXJJbmxpbmUucGFyc2Uoc3RyLCBtZCwgZW52LCBvdXRUb2tlbnMpXG4gKlxuICogUHJvY2VzcyBpbnB1dCBzdHJpbmcgYW5kIHB1c2ggaW5saW5lIHRva2VucyBpbnRvIGBvdXRUb2tlbnNgXG4gKiovXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHZhciBpLCBydWxlcywgbGVuO1xuICB2YXIgc3RhdGUgPSBuZXcgdGhpcy5TdGF0ZShzdHIsIG1kLCBlbnYsIG91dFRva2Vucyk7XG5cbiAgdGhpcy50b2tlbml6ZShzdGF0ZSk7XG5cbiAgcnVsZXMgPSB0aGlzLnJ1bGVyMi5nZXRSdWxlcygnJyk7XG4gIGxlbiA9IHJ1bGVzLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBydWxlc1tpXShzdGF0ZSk7XG4gIH1cbn07XG5cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS5TdGF0ZSA9IHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VySW5saW5lO1xuIiwiLy8gQ29tbW9ubWFyayBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICB0cnVlLCAgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICB0cnVlLCAgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBDb3VsZCBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXkuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgJ8KrwrvigJ7igJwnIGZvciBSdXNzaWFuLCAn4oCe4oCc4oCa4oCYJyBmb3IgR2VybWFuLFxuICAgIC8vIGFuZCBbJ8KrXFx4QTAnLCAnXFx4QTDCuycsICfigLlcXHhBMCcsICdcXHhBMOKAuiddIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAgICBxdW90ZXM6ICdcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5JywgLyog4oCc4oCd4oCY4oCZICovXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaXMgbm90IGNoYW5nZWQgYW5kIHNob3VsZCBiZSBlc2NhcGVkIGV4dGVybmFseS5cbiAgICAvLyBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG5cbiAgICBjb3JlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnbm9ybWFsaXplJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZSdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgYmxvY2s6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnZmVuY2UnLFxuICAgICAgICAnaGVhZGluZycsXG4gICAgICAgICdocicsXG4gICAgICAgICdodG1sX2Jsb2NrJyxcbiAgICAgICAgJ2xoZWFkaW5nJyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAncmVmZXJlbmNlJyxcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgaW5saW5lOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYXV0b2xpbmsnLFxuICAgICAgICAnYmFja3RpY2tzJyxcbiAgICAgICAgJ2VtcGhhc2lzJyxcbiAgICAgICAgJ2VudGl0eScsXG4gICAgICAgICdlc2NhcGUnLFxuICAgICAgICAnaHRtbF9pbmxpbmUnLFxuICAgICAgICAnaW1hZ2UnLFxuICAgICAgICAnbGluaycsXG4gICAgICAgICduZXdsaW5lJyxcbiAgICAgICAgJ3RleHQnXG4gICAgICBdLFxuICAgICAgcnVsZXMyOiBbXG4gICAgICAgICdiYWxhbmNlX3BhaXJzJyxcbiAgICAgICAgJ2VtcGhhc2lzJyxcbiAgICAgICAgJ3RleHRfY29sbGFwc2UnXG4gICAgICBdXG4gICAgfVxuICB9XG59O1xuIiwiLy8gbWFya2Rvd24taXQgZGVmYXVsdCBvcHRpb25zXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGh0bWw6ICAgICAgICAgZmFsc2UsICAgICAgICAvLyBFbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZVxuICAgIHhodG1sT3V0OiAgICAgZmFsc2UsICAgICAgICAvLyBVc2UgJy8nIHRvIGNsb3NlIHNpbmdsZSB0YWdzICg8YnIgLz4pXG4gICAgYnJlYWtzOiAgICAgICBmYWxzZSwgICAgICAgIC8vIENvbnZlcnQgJ1xcbicgaW4gcGFyYWdyYXBocyBpbnRvIDxicj5cbiAgICBsYW5nUHJlZml4OiAgICdsYW5ndWFnZS0nLCAgLy8gQ1NTIGxhbmd1YWdlIHByZWZpeCBmb3IgZmVuY2VkIGJsb2Nrc1xuICAgIGxpbmtpZnk6ICAgICAgZmFsc2UsICAgICAgICAvLyBhdXRvY29udmVydCBVUkwtbGlrZSB0ZXh0cyB0byBsaW5rc1xuXG4gICAgLy8gRW5hYmxlIHNvbWUgbGFuZ3VhZ2UtbmV1dHJhbCByZXBsYWNlbWVudHMgKyBxdW90ZXMgYmVhdXRpZmljYXRpb25cbiAgICB0eXBvZ3JhcGhlcjogIGZhbHNlLFxuXG4gICAgLy8gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudCBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkLFxuICAgIC8vIGFuZCBzbWFydHF1b3RlcyBvbi4gQ291bGQgYmUgZWl0aGVyIGEgU3RyaW5nIG9yIGFuIEFycmF5LlxuICAgIC8vXG4gICAgLy8gRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlICfCq8K74oCe4oCcJyBmb3IgUnVzc2lhbiwgJ+KAnuKAnOKAmuKAmCcgZm9yIEdlcm1hbixcbiAgICAvLyBhbmQgWyfCq1xceEEwJywgJ1xceEEwwrsnLCAn4oC5XFx4QTAnLCAnXFx4QTDigLonXSBmb3IgRnJlbmNoIChpbmNsdWRpbmcgbmJzcCkuXG4gICAgcXVvdGVzOiAnXFx1MjAxY1xcdTIwMWRcXHUyMDE4XFx1MjAxOScsIC8qIOKAnOKAneKAmOKAmSAqL1xuXG4gICAgLy8gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24uIFNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLFxuICAgIC8vIG9yICcnIGlmIHRoZSBzb3VyY2Ugc3RyaW5nIGlzIG5vdCBjaGFuZ2VkIGFuZCBzaG91bGQgYmUgZXNjYXBlZCBleHRlcm5hbHkuXG4gICAgLy8gSWYgcmVzdWx0IHN0YXJ0cyB3aXRoIDxwcmUuLi4gaW50ZXJuYWwgd3JhcHBlciBpcyBza2lwcGVkLlxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6IG51bGwsXG5cbiAgICBtYXhOZXN0aW5nOiAgIDEwMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHt9LFxuICAgIGJsb2NrOiB7fSxcbiAgICBpbmxpbmU6IHt9XG4gIH1cbn07XG4iLCIvLyBcIlplcm9cIiBwcmVzZXQsIHdpdGggbm90aGluZyBlbmFibGVkLiBVc2VmdWwgZm9yIG1hbnVhbCBjb25maWd1cmluZyBvZiBzaW1wbGVcbi8vIG1vZGVzLiBGb3IgZXhhbXBsZSwgdG8gcGFyc2UgYm9sZC9pdGFsaWMgb25seS5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBDb3VsZCBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXkuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgJ8KrwrvigJ7igJwnIGZvciBSdXNzaWFuLCAn4oCe4oCc4oCa4oCYJyBmb3IgR2VybWFuLFxuICAgIC8vIGFuZCBbJ8KrXFx4QTAnLCAnXFx4QTDCuycsICfigLlcXHhBMCcsICdcXHhBMOKAuiddIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAgICBxdW90ZXM6ICdcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5JywgLyog4oCc4oCd4oCY4oCZICovXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaXMgbm90IGNoYW5nZWQgYW5kIHNob3VsZCBiZSBlc2NhcGVkIGV4dGVybmFseS5cbiAgICAvLyBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG5cbiAgICBjb3JlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnbm9ybWFsaXplJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZSdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgYmxvY2s6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdwYXJhZ3JhcGgnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGlubGluZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ3RleHQnXG4gICAgICBdLFxuICAgICAgcnVsZXMyOiBbXG4gICAgICAgICdiYWxhbmNlX3BhaXJzJyxcbiAgICAgICAgJ3RleHRfY29sbGFwc2UnXG4gICAgICBdXG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG4gKiBjbGFzcyBSZW5kZXJlclxuICpcbiAqIEdlbmVyYXRlcyBIVE1MIGZyb20gcGFyc2VkIHRva2VuIHN0cmVhbS4gRWFjaCBpbnN0YW5jZSBoYXMgaW5kZXBlbmRlbnRcbiAqIGNvcHkgb2YgcnVsZXMuIFRob3NlIGNhbiBiZSByZXdyaXR0ZW4gd2l0aCBlYXNlLiBBbHNvLCB5b3UgY2FuIGFkZCBuZXdcbiAqIHJ1bGVzIGlmIHlvdSBjcmVhdGUgcGx1Z2luIGFuZCBhZGRzIG5ldyB0b2tlbiB0eXBlcy5cbiAqKi9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgYXNzaWduICAgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5hc3NpZ247XG52YXIgdW5lc2NhcGVBbGwgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS51bmVzY2FwZUFsbDtcbnZhciBlc2NhcGVIdG1sICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpLmVzY2FwZUh0bWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIGRlZmF1bHRfcnVsZXMgPSB7fTtcblxuXG5kZWZhdWx0X3J1bGVzLmNvZGVfaW5saW5lID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcblxuICByZXR1cm4gICc8Y29kZScgKyBzbGYucmVuZGVyQXR0cnModG9rZW4pICsgJz4nICtcbiAgICAgICAgICBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpICtcbiAgICAgICAgICAnPC9jb2RlPic7XG59O1xuXG5cbmRlZmF1bHRfcnVsZXMuY29kZV9ibG9jayA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG5cbiAgcmV0dXJuICAnPHByZScgKyBzbGYucmVuZGVyQXR0cnModG9rZW4pICsgJz48Y29kZT4nICtcbiAgICAgICAgICBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpICtcbiAgICAgICAgICAnPC9jb2RlPjwvcHJlPlxcbic7XG59O1xuXG5cbmRlZmF1bHRfcnVsZXMuZmVuY2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2xmKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdLFxuICAgICAgaW5mbyA9IHRva2VuLmluZm8gPyB1bmVzY2FwZUFsbCh0b2tlbi5pbmZvKS50cmltKCkgOiAnJyxcbiAgICAgIGxhbmdOYW1lID0gJycsXG4gICAgICBsYW5nQXR0cnMgPSAnJyxcbiAgICAgIGhpZ2hsaWdodGVkLCBpLCBhcnIsIHRtcEF0dHJzLCB0bXBUb2tlbjtcblxuICBpZiAoaW5mbykge1xuICAgIGFyciA9IGluZm8uc3BsaXQoLyhcXHMrKS9nKTtcbiAgICBsYW5nTmFtZSA9IGFyclswXTtcbiAgICBsYW5nQXR0cnMgPSBhcnIuc2xpY2UoMikuam9pbignJyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICBoaWdobGlnaHRlZCA9IG9wdGlvbnMuaGlnaGxpZ2h0KHRva2VuLmNvbnRlbnQsIGxhbmdOYW1lLCBsYW5nQXR0cnMpIHx8IGVzY2FwZUh0bWwodG9rZW4uY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgaGlnaGxpZ2h0ZWQgPSBlc2NhcGVIdG1sKHRva2VuLmNvbnRlbnQpO1xuICB9XG5cbiAgaWYgKGhpZ2hsaWdodGVkLmluZGV4T2YoJzxwcmUnKSA9PT0gMCkge1xuICAgIHJldHVybiBoaWdobGlnaHRlZCArICdcXG4nO1xuICB9XG5cbiAgLy8gSWYgbGFuZ3VhZ2UgZXhpc3RzLCBpbmplY3QgY2xhc3MgZ2VudGx5LCB3aXRob3V0IG1vZGlmeWluZyBvcmlnaW5hbCB0b2tlbi5cbiAgLy8gTWF5IGJlLCBvbmUgZGF5IHdlIHdpbGwgYWRkIC5kZWVwQ2xvbmUoKSBmb3IgdG9rZW4gYW5kIHNpbXBsaWZ5IHRoaXMgcGFydCwgYnV0XG4gIC8vIG5vdyB3ZSBwcmVmZXIgdG8ga2VlcCB0aGluZ3MgbG9jYWwuXG4gIGlmIChpbmZvKSB7XG4gICAgaSAgICAgICAgPSB0b2tlbi5hdHRySW5kZXgoJ2NsYXNzJyk7XG4gICAgdG1wQXR0cnMgPSB0b2tlbi5hdHRycyA/IHRva2VuLmF0dHJzLnNsaWNlKCkgOiBbXTtcblxuICAgIGlmIChpIDwgMCkge1xuICAgICAgdG1wQXR0cnMucHVzaChbICdjbGFzcycsIG9wdGlvbnMubGFuZ1ByZWZpeCArIGxhbmdOYW1lIF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXBBdHRyc1tpXSA9IHRtcEF0dHJzW2ldLnNsaWNlKCk7XG4gICAgICB0bXBBdHRyc1tpXVsxXSArPSAnICcgKyBvcHRpb25zLmxhbmdQcmVmaXggKyBsYW5nTmFtZTtcbiAgICB9XG5cbiAgICAvLyBGYWtlIHRva2VuIGp1c3QgdG8gcmVuZGVyIGF0dHJpYnV0ZXNcbiAgICB0bXBUb2tlbiA9IHtcbiAgICAgIGF0dHJzOiB0bXBBdHRyc1xuICAgIH07XG5cbiAgICByZXR1cm4gICc8cHJlPjxjb2RlJyArIHNsZi5yZW5kZXJBdHRycyh0bXBUb2tlbikgKyAnPidcbiAgICAgICAgICArIGhpZ2hsaWdodGVkXG4gICAgICAgICAgKyAnPC9jb2RlPjwvcHJlPlxcbic7XG4gIH1cblxuXG4gIHJldHVybiAgJzxwcmU+PGNvZGUnICsgc2xmLnJlbmRlckF0dHJzKHRva2VuKSArICc+J1xuICAgICAgICArIGhpZ2hsaWdodGVkXG4gICAgICAgICsgJzwvY29kZT48L3ByZT5cXG4nO1xufTtcblxuXG5kZWZhdWx0X3J1bGVzLmltYWdlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcblxuICAvLyBcImFsdFwiIGF0dHIgTVVTVCBiZSBzZXQsIGV2ZW4gaWYgZW1wdHkuIEJlY2F1c2UgaXQncyBtYW5kYXRvcnkgYW5kXG4gIC8vIHNob3VsZCBiZSBwbGFjZWQgb24gcHJvcGVyIHBvc2l0aW9uIGZvciB0ZXN0cy5cbiAgLy9cbiAgLy8gUmVwbGFjZSBjb250ZW50IHdpdGggYWN0dWFsIHZhbHVlXG5cbiAgdG9rZW4uYXR0cnNbdG9rZW4uYXR0ckluZGV4KCdhbHQnKV1bMV0gPVxuICAgIHNsZi5yZW5kZXJJbmxpbmVBc1RleHQodG9rZW4uY2hpbGRyZW4sIG9wdGlvbnMsIGVudik7XG5cbiAgcmV0dXJuIHNsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucyk7XG59O1xuXG5cbmRlZmF1bHRfcnVsZXMuaGFyZGJyZWFrID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIG9wdGlvbnMueGh0bWxPdXQgPyAnPGJyIC8+XFxuJyA6ICc8YnI+XFxuJztcbn07XG5kZWZhdWx0X3J1bGVzLnNvZnRicmVhayA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucyAvKiwgZW52ICovKSB7XG4gIHJldHVybiBvcHRpb25zLmJyZWFrcyA/IChvcHRpb25zLnhodG1sT3V0ID8gJzxiciAvPlxcbicgOiAnPGJyPlxcbicpIDogJ1xcbic7XG59O1xuXG5cbmRlZmF1bHRfcnVsZXMudGV4dCA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpO1xufTtcblxuXG5kZWZhdWx0X3J1bGVzLmh0bWxfYmxvY2sgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gdG9rZW5zW2lkeF0uY29udGVudDtcbn07XG5kZWZhdWx0X3J1bGVzLmh0bWxfaW5saW5lID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIHRva2Vuc1tpZHhdLmNvbnRlbnQ7XG59O1xuXG5cbi8qKlxuICogbmV3IFJlbmRlcmVyKClcbiAqXG4gKiBDcmVhdGVzIG5ldyBbW1JlbmRlcmVyXV0gaW5zdGFuY2UgYW5kIGZpbGwgW1tSZW5kZXJlciNydWxlc11dIHdpdGggZGVmYXVsdHMuXG4gKiovXG5mdW5jdGlvbiBSZW5kZXJlcigpIHtcblxuICAvKipcbiAgICogUmVuZGVyZXIjcnVsZXMgLT4gT2JqZWN0XG4gICAqXG4gICAqIENvbnRhaW5zIHJlbmRlciBydWxlcyBmb3IgdG9rZW5zLiBDYW4gYmUgdXBkYXRlZCBhbmQgZXh0ZW5kZWQuXG4gICAqXG4gICAqICMjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gICAqXG4gICAqIG1kLnJlbmRlcmVyLnJ1bGVzLnN0cm9uZ19vcGVuICA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICc8Yj4nOyB9O1xuICAgKiBtZC5yZW5kZXJlci5ydWxlcy5zdHJvbmdfY2xvc2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnPC9iPic7IH07XG4gICAqXG4gICAqIHZhciByZXN1bHQgPSBtZC5yZW5kZXJJbmxpbmUoLi4uKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEVhY2ggcnVsZSBpcyBjYWxsZWQgYXMgaW5kZXBlbmRlbnQgc3RhdGljIGZ1bmN0aW9uIHdpdGggZml4ZWQgc2lnbmF0dXJlOlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGZ1bmN0aW9uIG15X3Rva2VuX3JlbmRlcih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCByZW5kZXJlcikge1xuICAgKiAgIC8vIC4uLlxuICAgKiAgIHJldHVybiByZW5kZXJlZEhUTUw7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIFNlZSBbc291cmNlIGNvZGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcmVuZGVyZXIuanMpXG4gICAqIGZvciBtb3JlIGRldGFpbHMgYW5kIGV4YW1wbGVzLlxuICAgKiovXG4gIHRoaXMucnVsZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRfcnVsZXMpO1xufVxuXG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVyQXR0cnModG9rZW4pIC0+IFN0cmluZ1xuICpcbiAqIFJlbmRlciB0b2tlbiBhdHRyaWJ1dGVzIHRvIHN0cmluZy5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJBdHRycyA9IGZ1bmN0aW9uIHJlbmRlckF0dHJzKHRva2VuKSB7XG4gIHZhciBpLCBsLCByZXN1bHQ7XG5cbiAgaWYgKCF0b2tlbi5hdHRycykgeyByZXR1cm4gJyc7IH1cblxuICByZXN1bHQgPSAnJztcblxuICBmb3IgKGkgPSAwLCBsID0gdG9rZW4uYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9ICcgJyArIGVzY2FwZUh0bWwodG9rZW4uYXR0cnNbaV1bMF0pICsgJz1cIicgKyBlc2NhcGVIdG1sKHRva2VuLmF0dHJzW2ldWzFdKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFJlbmRlcmVyLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKSAtPiBTdHJpbmdcbiAqIC0gdG9rZW5zIChBcnJheSk6IGxpc3Qgb2YgdG9rZW5zXG4gKiAtIGlkeCAoTnVtYmVkKTogdG9rZW4gaW5kZXggdG8gcmVuZGVyXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHBhcmFtcyBvZiBwYXJzZXIgaW5zdGFuY2VcbiAqXG4gKiBEZWZhdWx0IHRva2VuIHJlbmRlcmVyLiBDYW4gYmUgb3ZlcnJpZGVuIGJ5IGN1c3RvbSBmdW5jdGlvblxuICogaW4gW1tSZW5kZXJlciNydWxlc11dLlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclRva2VuID0gZnVuY3Rpb24gcmVuZGVyVG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMpIHtcbiAgdmFyIG5leHRUb2tlbixcbiAgICAgIHJlc3VsdCA9ICcnLFxuICAgICAgbmVlZExmID0gZmFsc2UsXG4gICAgICB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuXG4gIC8vIFRpZ2h0IGxpc3QgcGFyYWdyYXBoc1xuICBpZiAodG9rZW4uaGlkZGVuKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gSW5zZXJ0IGEgbmV3bGluZSBiZXR3ZWVuIGhpZGRlbiBwYXJhZ3JhcGggYW5kIHN1YnNlcXVlbnQgb3BlbmluZ1xuICAvLyBibG9jay1sZXZlbCB0YWcuXG4gIC8vXG4gIC8vIEZvciBleGFtcGxlLCBoZXJlIHdlIHNob3VsZCBpbnNlcnQgYSBuZXdsaW5lIGJlZm9yZSBibG9ja3F1b3RlOlxuICAvLyAgLSBhXG4gIC8vICAgID5cbiAgLy9cbiAgaWYgKHRva2VuLmJsb2NrICYmIHRva2VuLm5lc3RpbmcgIT09IC0xICYmIGlkeCAmJiB0b2tlbnNbaWR4IC0gMV0uaGlkZGVuKSB7XG4gICAgcmVzdWx0ICs9ICdcXG4nO1xuICB9XG5cbiAgLy8gQWRkIHRva2VuIG5hbWUsIGUuZy4gYDxpbWdgXG4gIHJlc3VsdCArPSAodG9rZW4ubmVzdGluZyA9PT0gLTEgPyAnPC8nIDogJzwnKSArIHRva2VuLnRhZztcblxuICAvLyBFbmNvZGUgYXR0cmlidXRlcywgZS5nLiBgPGltZyBzcmM9XCJmb29cImBcbiAgcmVzdWx0ICs9IHRoaXMucmVuZGVyQXR0cnModG9rZW4pO1xuXG4gIC8vIEFkZCBhIHNsYXNoIGZvciBzZWxmLWNsb3NpbmcgdGFncywgZS5nLiBgPGltZyBzcmM9XCJmb29cIiAvYFxuICBpZiAodG9rZW4ubmVzdGluZyA9PT0gMCAmJiBvcHRpb25zLnhodG1sT3V0KSB7XG4gICAgcmVzdWx0ICs9ICcgLyc7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGFkZCBhIG5ld2xpbmUgYWZ0ZXIgdGhpcyB0YWdcbiAgaWYgKHRva2VuLmJsb2NrKSB7XG4gICAgbmVlZExmID0gdHJ1ZTtcblxuICAgIGlmICh0b2tlbi5uZXN0aW5nID09PSAxKSB7XG4gICAgICBpZiAoaWR4ICsgMSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dFRva2VuID0gdG9rZW5zW2lkeCArIDFdO1xuXG4gICAgICAgIGlmIChuZXh0VG9rZW4udHlwZSA9PT0gJ2lubGluZScgfHwgbmV4dFRva2VuLmhpZGRlbikge1xuICAgICAgICAgIC8vIEJsb2NrLWxldmVsIHRhZyBjb250YWluaW5nIGFuIGlubGluZSB0YWcuXG4gICAgICAgICAgLy9cbiAgICAgICAgICBuZWVkTGYgPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2UgaWYgKG5leHRUb2tlbi5uZXN0aW5nID09PSAtMSAmJiBuZXh0VG9rZW4udGFnID09PSB0b2tlbi50YWcpIHtcbiAgICAgICAgICAvLyBPcGVuaW5nIHRhZyArIGNsb3NpbmcgdGFnIG9mIHRoZSBzYW1lIHR5cGUuIEUuZy4gYDxsaT48L2xpPmAuXG4gICAgICAgICAgLy9cbiAgICAgICAgICBuZWVkTGYgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc3VsdCArPSBuZWVkTGYgPyAnPlxcbicgOiAnPic7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBSZW5kZXJlci5yZW5kZXJJbmxpbmUodG9rZW5zLCBvcHRpb25zLCBlbnYpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvbiBibG9jayB0b2tlbnMgdG8gcmVudGVyXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHBhcmFtcyBvZiBwYXJzZXIgaW5zdGFuY2VcbiAqIC0gZW52IChPYmplY3QpOiBhZGRpdGlvbmFsIGRhdGEgZnJvbSBwYXJzZWQgaW5wdXQgKHJlZmVyZW5jZXMsIGZvciBleGFtcGxlKVxuICpcbiAqIFRoZSBzYW1lIGFzIFtbUmVuZGVyZXIucmVuZGVyXV0sIGJ1dCBmb3Igc2luZ2xlIHRva2VuIG9mIGBpbmxpbmVgIHR5cGUuXG4gKiovXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucywgZW52KSB7XG4gIHZhciB0eXBlLFxuICAgICAgcmVzdWx0ID0gJycsXG4gICAgICBydWxlcyA9IHRoaXMucnVsZXM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHR5cGUgPSB0b2tlbnNbaV0udHlwZTtcblxuICAgIGlmICh0eXBlb2YgcnVsZXNbdHlwZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgKz0gcnVsZXNbdHlwZV0odG9rZW5zLCBpLCBvcHRpb25zLCBlbnYsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJUb2tlbih0b2tlbnMsIGksIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBpbnRlcm5hbFxuICogUmVuZGVyZXIucmVuZGVySW5saW5lQXNUZXh0KHRva2Vucywgb3B0aW9ucywgZW52KSAtPiBTdHJpbmdcbiAqIC0gdG9rZW5zIChBcnJheSk6IGxpc3Qgb24gYmxvY2sgdG9rZW5zIHRvIHJlbnRlclxuICogLSBvcHRpb25zIChPYmplY3QpOiBwYXJhbXMgb2YgcGFyc2VyIGluc3RhbmNlXG4gKiAtIGVudiAoT2JqZWN0KTogYWRkaXRpb25hbCBkYXRhIGZyb20gcGFyc2VkIGlucHV0IChyZWZlcmVuY2VzLCBmb3IgZXhhbXBsZSlcbiAqXG4gKiBTcGVjaWFsIGtsdWRnZSBmb3IgaW1hZ2UgYGFsdGAgYXR0cmlidXRlcyB0byBjb25mb3JtIENvbW1vbk1hcmsgc3BlYy5cbiAqIERvbid0IHRyeSB0byB1c2UgaXQhIFNwZWMgcmVxdWlyZXMgdG8gc2hvdyBgYWx0YCBjb250ZW50IHdpdGggc3RyaXBwZWQgbWFya3VwLFxuICogaW5zdGVhZCBvZiBzaW1wbGUgZXNjYXBpbmcuXG4gKiovXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVySW5saW5lQXNUZXh0ID0gZnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucywgZW52KSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRva2Vuc1tpXS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHJlc3VsdCArPSB0b2tlbnNbaV0uY29udGVudDtcbiAgICB9IGVsc2UgaWYgKHRva2Vuc1tpXS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJJbmxpbmVBc1RleHQodG9rZW5zW2ldLmNoaWxkcmVuLCBvcHRpb25zLCBlbnYpO1xuICAgIH0gZWxzZSBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdzb2Z0YnJlYWsnKSB7XG4gICAgICByZXN1bHQgKz0gJ1xcbic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBSZW5kZXJlci5yZW5kZXIodG9rZW5zLCBvcHRpb25zLCBlbnYpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvbiBibG9jayB0b2tlbnMgdG8gcmVudGVyXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHBhcmFtcyBvZiBwYXJzZXIgaW5zdGFuY2VcbiAqIC0gZW52IChPYmplY3QpOiBhZGRpdGlvbmFsIGRhdGEgZnJvbSBwYXJzZWQgaW5wdXQgKHJlZmVyZW5jZXMsIGZvciBleGFtcGxlKVxuICpcbiAqIFRha2VzIHRva2VuIHN0cmVhbSBhbmQgZ2VuZXJhdGVzIEhUTUwuIFByb2JhYmx5LCB5b3Ugd2lsbCBuZXZlciBuZWVkIHRvIGNhbGxcbiAqIHRoaXMgbWV0aG9kIGRpcmVjdGx5LlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICB2YXIgaSwgbGVuLCB0eXBlLFxuICAgICAgcmVzdWx0ID0gJycsXG4gICAgICBydWxlcyA9IHRoaXMucnVsZXM7XG5cbiAgZm9yIChpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdHlwZSA9IHRva2Vuc1tpXS50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJJbmxpbmUodG9rZW5zW2ldLmNoaWxkcmVuLCBvcHRpb25zLCBlbnYpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJ1bGVzW3R5cGVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ICs9IHJ1bGVzW3Rva2Vuc1tpXS50eXBlXSh0b2tlbnMsIGksIG9wdGlvbnMsIGVudiwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLnJlbmRlclRva2VuKHRva2VucywgaSwgb3B0aW9ucywgZW52KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlcjtcbiIsIi8qKlxuICogY2xhc3MgUnVsZXJcbiAqXG4gKiBIZWxwZXIgY2xhc3MsIHVzZWQgYnkgW1tNYXJrZG93bkl0I2NvcmVdXSwgW1tNYXJrZG93bkl0I2Jsb2NrXV0gYW5kXG4gKiBbW01hcmtkb3duSXQjaW5saW5lXV0gdG8gbWFuYWdlIHNlcXVlbmNlcyBvZiBmdW5jdGlvbnMgKHJ1bGVzKTpcbiAqXG4gKiAtIGtlZXAgcnVsZXMgaW4gZGVmaW5lZCBvcmRlclxuICogLSBhc3NpZ24gdGhlIG5hbWUgdG8gZWFjaCBydWxlXG4gKiAtIGVuYWJsZS9kaXNhYmxlIHJ1bGVzXG4gKiAtIGFkZC9yZXBsYWNlIHJ1bGVzXG4gKiAtIGFsbG93IGFzc2lnbiBydWxlcyB0byBhZGRpdGlvbmFsIG5hbWVkIGNoYWlucyAoaW4gdGhlIHNhbWUpXG4gKiAtIGNhY2hlaW5nIGxpc3RzIG9mIGFjdGl2ZSBydWxlc1xuICpcbiAqIFlvdSB3aWxsIG5vdCBuZWVkIHVzZSB0aGlzIGNsYXNzIGRpcmVjdGx5IHVudGlsIHdyaXRlIHBsdWdpbnMuIEZvciBzaW1wbGVcbiAqIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0sIFtbTWFya2Rvd25JdC5lbmFibGVdXSBhbmRcbiAqIFtbTWFya2Rvd25JdC51c2VdXS5cbiAqKi9cbid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIG5ldyBSdWxlcigpXG4gKiovXG5mdW5jdGlvbiBSdWxlcigpIHtcbiAgLy8gTGlzdCBvZiBhZGRlZCBydWxlcy4gRWFjaCBlbGVtZW50IGlzOlxuICAvL1xuICAvLyB7XG4gIC8vICAgbmFtZTogWFhYLFxuICAvLyAgIGVuYWJsZWQ6IEJvb2xlYW4sXG4gIC8vICAgZm46IEZ1bmN0aW9uKCksXG4gIC8vICAgYWx0OiBbIG5hbWUyLCBuYW1lMyBdXG4gIC8vIH1cbiAgLy9cbiAgdGhpcy5fX3J1bGVzX18gPSBbXTtcblxuICAvLyBDYWNoZWQgcnVsZSBjaGFpbnMuXG4gIC8vXG4gIC8vIEZpcnN0IGxldmVsIC0gY2hhaW4gbmFtZSwgJycgZm9yIGRlZmF1bHQuXG4gIC8vIFNlY29uZCBsZXZlbCAtIGRpZ2luYWwgYW5jaG9yIGZvciBmYXN0IGZpbHRlcmluZyBieSBjaGFyY29kZXMuXG4gIC8vXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEhlbHBlciBtZXRob2RzLCBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHlcblxuXG4vLyBGaW5kIHJ1bGUgaW5kZXggYnkgbmFtZVxuLy9cblJ1bGVyLnByb3RvdHlwZS5fX2ZpbmRfXyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fX3J1bGVzX18ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5fX3J1bGVzX19baV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG5cblxuLy8gQnVpbGQgcnVsZXMgbG9va3VwIGNhY2hlXG4vL1xuUnVsZXIucHJvdG90eXBlLl9fY29tcGlsZV9fID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFpbnMgPSBbICcnIF07XG5cbiAgLy8gY29sbGVjdCB1bmlxdWUgbmFtZXNcbiAgc2VsZi5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIGlmICghcnVsZS5lbmFibGVkKSB7IHJldHVybjsgfVxuXG4gICAgcnVsZS5hbHQuZm9yRWFjaChmdW5jdGlvbiAoYWx0TmFtZSkge1xuICAgICAgaWYgKGNoYWlucy5pbmRleE9mKGFsdE5hbWUpIDwgMCkge1xuICAgICAgICBjaGFpbnMucHVzaChhbHROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgc2VsZi5fX2NhY2hlX18gPSB7fTtcblxuICBjaGFpbnMuZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICBzZWxmLl9fY2FjaGVfX1tjaGFpbl0gPSBbXTtcbiAgICBzZWxmLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBpZiAoIXJ1bGUuZW5hYmxlZCkgeyByZXR1cm47IH1cblxuICAgICAgaWYgKGNoYWluICYmIHJ1bGUuYWx0LmluZGV4T2YoY2hhaW4pIDwgMCkgeyByZXR1cm47IH1cblxuICAgICAgc2VsZi5fX2NhY2hlX19bY2hhaW5dLnB1c2gocnVsZS5mbik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmF0KG5hbWUsIGZuIFssIG9wdGlvbnNdKVxuICogLSBuYW1lIChTdHJpbmcpOiBydWxlIG5hbWUgdG8gcmVwbGFjZS5cbiAqIC0gZm4gKEZ1bmN0aW9uKTogbmV3IHJ1bGUgZnVuY3Rpb24uXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IG5ldyBydWxlIG9wdGlvbnMgKG5vdCBtYW5kYXRvcnkpLlxuICpcbiAqIFJlcGxhY2UgcnVsZSBieSBuYW1lIHdpdGggbmV3IGZ1bmN0aW9uICYgb3B0aW9ucy4gVGhyb3dzIGVycm9yIGlmIG5hbWUgbm90XG4gKiBmb3VuZC5cbiAqXG4gKiAjIyMjIyBPcHRpb25zOlxuICpcbiAqIC0gX19hbHRfXyAtIGFycmF5IHdpdGggbmFtZXMgb2YgXCJhbHRlcm5hdGVcIiBjaGFpbnMuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIFJlcGxhY2UgZXhpc3RpbmcgdHlwb2dyYXBoZXIgcmVwbGFjZW1lbnQgcnVsZSB3aXRoIG5ldyBvbmU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICpcbiAqIG1kLmNvcmUucnVsZXIuYXQoJ3JlcGxhY2VtZW50cycsIGZ1bmN0aW9uIHJlcGxhY2Uoc3RhdGUpIHtcbiAqICAgLy8uLi5cbiAqIH0pO1xuICogYGBgXG4gKiovXG5SdWxlci5wcm90b3R5cGUuYXQgPSBmdW5jdGlvbiAobmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGluZGV4ID09PSAtMSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIG5hbWUpOyB9XG5cbiAgdGhpcy5fX3J1bGVzX19baW5kZXhdLmZuID0gZm47XG4gIHRoaXMuX19ydWxlc19fW2luZGV4XS5hbHQgPSBvcHQuYWx0IHx8IFtdO1xuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuYmVmb3JlKGJlZm9yZU5hbWUsIHJ1bGVOYW1lLCBmbiBbLCBvcHRpb25zXSlcbiAqIC0gYmVmb3JlTmFtZSAoU3RyaW5nKTogbmV3IHJ1bGUgd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhpcyBvbmUuXG4gKiAtIHJ1bGVOYW1lIChTdHJpbmcpOiBuYW1lIG9mIGFkZGVkIHJ1bGUuXG4gKiAtIGZuIChGdW5jdGlvbik6IHJ1bGUgZnVuY3Rpb24uXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogQWRkIG5ldyBydWxlIHRvIGNoYWluIGJlZm9yZSBvbmUgd2l0aCBnaXZlbiBuYW1lLiBTZWUgYWxzb1xuICogW1tSdWxlci5hZnRlcl1dLCBbW1J1bGVyLnB1c2hdXS5cbiAqXG4gKiAjIyMjIyBPcHRpb25zOlxuICpcbiAqIC0gX19hbHRfXyAtIGFycmF5IHdpdGggbmFtZXMgb2YgXCJhbHRlcm5hdGVcIiBjaGFpbnMuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqXG4gKiBtZC5ibG9jay5ydWxlci5iZWZvcmUoJ3BhcmFncmFwaCcsICdteV9ydWxlJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoYmVmb3JlTmFtZSwgcnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpbmRleCA9IHRoaXMuX19maW5kX18oYmVmb3JlTmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHsgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBiZWZvcmVOYW1lKTsgfVxuXG4gIHRoaXMuX19ydWxlc19fLnNwbGljZShpbmRleCwgMCwge1xuICAgIG5hbWU6IHJ1bGVOYW1lLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm46IGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuYWZ0ZXIoYWZ0ZXJOYW1lLCBydWxlTmFtZSwgZm4gWywgb3B0aW9uc10pXG4gKiAtIGFmdGVyTmFtZSAoU3RyaW5nKTogbmV3IHJ1bGUgd2lsbCBiZSBhZGRlZCBhZnRlciB0aGlzIG9uZS5cbiAqIC0gcnVsZU5hbWUgKFN0cmluZyk6IG5hbWUgb2YgYWRkZWQgcnVsZS5cbiAqIC0gZm4gKEZ1bmN0aW9uKTogcnVsZSBmdW5jdGlvbi5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcnVsZSBvcHRpb25zIChub3QgbWFuZGF0b3J5KS5cbiAqXG4gKiBBZGQgbmV3IHJ1bGUgdG8gY2hhaW4gYWZ0ZXIgb25lIHdpdGggZ2l2ZW4gbmFtZS4gU2VlIGFsc29cbiAqIFtbUnVsZXIuYmVmb3JlXV0sIFtbUnVsZXIucHVzaF1dLlxuICpcbiAqICMjIyMjIE9wdGlvbnM6XG4gKlxuICogLSBfX2FsdF9fIC0gYXJyYXkgd2l0aCBuYW1lcyBvZiBcImFsdGVybmF0ZVwiIGNoYWlucy5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICpcbiAqIG1kLmlubGluZS5ydWxlci5hZnRlcigndGV4dCcsICdteV9ydWxlJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChhZnRlck5hbWUsIHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaW5kZXggPSB0aGlzLl9fZmluZF9fKGFmdGVyTmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHsgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBhZnRlck5hbWUpOyB9XG5cbiAgdGhpcy5fX3J1bGVzX18uc3BsaWNlKGluZGV4ICsgMSwgMCwge1xuICAgIG5hbWU6IHJ1bGVOYW1lLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm46IGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIFJ1bGVyLnB1c2gocnVsZU5hbWUsIGZuIFssIG9wdGlvbnNdKVxuICogLSBydWxlTmFtZSAoU3RyaW5nKTogbmFtZSBvZiBhZGRlZCBydWxlLlxuICogLSBmbiAoRnVuY3Rpb24pOiBydWxlIGZ1bmN0aW9uLlxuICogLSBvcHRpb25zIChPYmplY3QpOiBydWxlIG9wdGlvbnMgKG5vdCBtYW5kYXRvcnkpLlxuICpcbiAqIFB1c2ggbmV3IHJ1bGUgdG8gdGhlIGVuZCBvZiBjaGFpbi4gU2VlIGFsc29cbiAqIFtbUnVsZXIuYmVmb3JlXV0sIFtbUnVsZXIuYWZ0ZXJdXS5cbiAqXG4gKiAjIyMjIyBPcHRpb25zOlxuICpcbiAqIC0gX19hbHRfXyAtIGFycmF5IHdpdGggbmFtZXMgb2YgXCJhbHRlcm5hdGVcIiBjaGFpbnMuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqXG4gKiBtZC5jb3JlLnJ1bGVyLnB1c2goJ215X3J1bGUnLCBmdW5jdGlvbiByZXBsYWNlKHN0YXRlKSB7XG4gKiAgIC8vLi4uXG4gKiB9KTtcbiAqIGBgYFxuICoqL1xuUnVsZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAocnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHRoaXMuX19ydWxlc19fLnB1c2goe1xuICAgIG5hbWU6IHJ1bGVOYW1lLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm46IGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuZW5hYmxlKGxpc3QgWywgaWdub3JlSW52YWxpZF0pIC0+IEFycmF5XG4gKiAtIGxpc3QgKFN0cmluZ3xBcnJheSk6IGxpc3Qgb2YgcnVsZSBuYW1lcyB0byBlbmFibGUuXG4gKiAtIGlnbm9yZUludmFsaWQgKEJvb2xlYW4pOiBzZXQgYHRydWVgIHRvIGlnbm9yZSBlcnJvcnMgd2hlbiBydWxlIG5vdCBmb3VuZC5cbiAqXG4gKiBFbmFibGUgcnVsZXMgd2l0aCBnaXZlbiBuYW1lcy4gSWYgYW55IHJ1bGUgbmFtZSBub3QgZm91bmQgLSB0aHJvdyBFcnJvci5cbiAqIEVycm9ycyBjYW4gYmUgZGlzYWJsZWQgYnkgc2Vjb25kIHBhcmFtLlxuICpcbiAqIFJldHVybnMgbGlzdCBvZiBmb3VuZCBydWxlIG5hbWVzIChpZiBubyBleGNlcHRpb24gaGFwcGVuZWQpLlxuICpcbiAqIFNlZSBhbHNvIFtbUnVsZXIuZGlzYWJsZV1dLCBbW1J1bGVyLmVuYWJsZU9ubHldXS5cbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAobGlzdCwgaWdub3JlSW52YWxpZCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFsgbGlzdCBdOyB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIC8vIFNlYXJjaCBieSBuYW1lIGFuZCBlbmFibGVcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18obmFtZSk7XG5cbiAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgaWYgKGlnbm9yZUludmFsaWQpIHsgcmV0dXJuOyB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fX3J1bGVzX19baWR4XS5lbmFibGVkID0gdHJ1ZTtcbiAgICByZXN1bHQucHVzaChuYW1lKTtcbiAgfSwgdGhpcyk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmVuYWJsZU9ubHkobGlzdCBbLCBpZ25vcmVJbnZhbGlkXSlcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogbGlzdCBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZSAod2hpdGVsaXN0KS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIEVuYWJsZSBydWxlcyB3aXRoIGdpdmVuIG5hbWVzLCBhbmQgZGlzYWJsZSBldmVyeXRoaW5nIGVsc2UuIElmIGFueSBydWxlIG5hbWVcbiAqIG5vdCBmb3VuZCAtIHRocm93IEVycm9yLiBFcnJvcnMgY2FuIGJlIGRpc2FibGVkIGJ5IHNlY29uZCBwYXJhbS5cbiAqXG4gKiBTZWUgYWxzbyBbW1J1bGVyLmRpc2FibGVdXSwgW1tSdWxlci5lbmFibGVdXS5cbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5lbmFibGVPbmx5ID0gZnVuY3Rpb24gKGxpc3QsIGlnbm9yZUludmFsaWQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbIGxpc3QgXTsgfVxuXG4gIHRoaXMuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHsgcnVsZS5lbmFibGVkID0gZmFsc2U7IH0pO1xuXG4gIHRoaXMuZW5hYmxlKGxpc3QsIGlnbm9yZUludmFsaWQpO1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmRpc2FibGUobGlzdCBbLCBpZ25vcmVJbnZhbGlkXSkgLT4gQXJyYXlcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogbGlzdCBvZiBydWxlIG5hbWVzIHRvIGRpc2FibGUuXG4gKiAtIGlnbm9yZUludmFsaWQgKEJvb2xlYW4pOiBzZXQgYHRydWVgIHRvIGlnbm9yZSBlcnJvcnMgd2hlbiBydWxlIG5vdCBmb3VuZC5cbiAqXG4gKiBEaXNhYmxlIHJ1bGVzIHdpdGggZ2l2ZW4gbmFtZXMuIElmIGFueSBydWxlIG5hbWUgbm90IGZvdW5kIC0gdGhyb3cgRXJyb3IuXG4gKiBFcnJvcnMgY2FuIGJlIGRpc2FibGVkIGJ5IHNlY29uZCBwYXJhbS5cbiAqXG4gKiBSZXR1cm5zIGxpc3Qgb2YgZm91bmQgcnVsZSBuYW1lcyAoaWYgbm8gZXhjZXB0aW9uIGhhcHBlbmVkKS5cbiAqXG4gKiBTZWUgYWxzbyBbW1J1bGVyLmVuYWJsZV1dLCBbW1J1bGVyLmVuYWJsZU9ubHldXS5cbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKGxpc3QsIGlnbm9yZUludmFsaWQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbIGxpc3QgXTsgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcblxuICAvLyBTZWFyY2ggYnkgbmFtZSBhbmQgZGlzYWJsZVxuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcblxuICAgIGlmIChpZHggPCAwKSB7XG4gICAgICBpZiAoaWdub3JlSW52YWxpZCkgeyByZXR1cm47IH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignUnVsZXMgbWFuYWdlcjogaW52YWxpZCBydWxlIG5hbWUgJyArIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9fcnVsZXNfX1tpZHhdLmVuYWJsZWQgPSBmYWxzZTtcbiAgICByZXN1bHQucHVzaChuYW1lKTtcbiAgfSwgdGhpcyk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmdldFJ1bGVzKGNoYWluTmFtZSkgLT4gQXJyYXlcbiAqXG4gKiBSZXR1cm4gYXJyYXkgb2YgYWN0aXZlIGZ1bmN0aW9ucyAocnVsZXMpIGZvciBnaXZlbiBjaGFpbiBuYW1lLiBJdCBhbmFseXplc1xuICogcnVsZXMgY29uZmlndXJhdGlvbiwgY29tcGlsZXMgY2FjaGVzIGlmIG5vdCBleGlzdHMgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIERlZmF1bHQgY2hhaW4gbmFtZSBpcyBgJydgIChlbXB0eSBzdHJpbmcpLiBJdCBjYW4ndCBiZSBza2lwcGVkLiBUaGF0J3NcbiAqIGRvbmUgaW50ZW50aW9uYWxseSwgdG8ga2VlcCBzaWduYXR1cmUgbW9ub21vcnBoaWMgZm9yIGhpZ2ggc3BlZWQuXG4gKiovXG5SdWxlci5wcm90b3R5cGUuZ2V0UnVsZXMgPSBmdW5jdGlvbiAoY2hhaW5OYW1lKSB7XG4gIGlmICh0aGlzLl9fY2FjaGVfXyA9PT0gbnVsbCkge1xuICAgIHRoaXMuX19jb21waWxlX18oKTtcbiAgfVxuXG4gIC8vIENoYWluIGNhbiBiZSBlbXB0eSwgaWYgcnVsZXMgZGlzYWJsZWQuIEJ1dCB3ZSBzdGlsbCBoYXZlIHRvIHJldHVybiBBcnJheS5cbiAgcmV0dXJuIHRoaXMuX19jYWNoZV9fW2NoYWluTmFtZV0gfHwgW107XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVyO1xuIiwiLy8gQmxvY2sgcXVvdGVzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmxvY2txdW90ZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGFkanVzdFRhYixcbiAgICAgIGNoLFxuICAgICAgaSxcbiAgICAgIGluaXRpYWwsXG4gICAgICBsLFxuICAgICAgbGFzdExpbmVFbXB0eSxcbiAgICAgIGxpbmVzLFxuICAgICAgbmV4dExpbmUsXG4gICAgICBvZmZzZXQsXG4gICAgICBvbGRCTWFya3MsXG4gICAgICBvbGRCU0NvdW50LFxuICAgICAgb2xkSW5kZW50LFxuICAgICAgb2xkUGFyZW50VHlwZSxcbiAgICAgIG9sZFNDb3VudCxcbiAgICAgIG9sZFRTaGlmdCxcbiAgICAgIHNwYWNlQWZ0ZXJNYXJrZXIsXG4gICAgICB0ZXJtaW5hdGUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICB0b2tlbixcbiAgICAgIGlzT3V0ZGVudGVkLFxuICAgICAgb2xkTGluZU1heCA9IHN0YXRlLmxpbmVNYXgsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY2hlY2sgdGhlIGJsb2NrIHF1b3RlIG1hcmtlclxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspICE9PSAweDNFLyogPiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyB3ZSBrbm93IHRoYXQgaXQncyBnb2luZyB0byBiZSBhIHZhbGlkIGJsb2NrcXVvdGUsXG4gIC8vIHNvIG5vIHBvaW50IHRyeWluZyB0byBmaW5kIHRoZSBlbmQgb2YgaXQgaW4gc2lsZW50IG1vZGVcbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIHNldCBvZmZzZXQgcGFzdCBzcGFjZXMgYW5kIFwiPlwiXG4gIGluaXRpYWwgPSBvZmZzZXQgPSBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSArIDE7XG5cbiAgLy8gc2tpcCBvbmUgb3B0aW9uYWwgc3BhY2UgYWZ0ZXIgJz4nXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwIC8qIHNwYWNlICovKSB7XG4gICAgLy8gJyA+ICAgdGVzdCAnXG4gICAgLy8gICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlOlxuICAgIHBvcysrO1xuICAgIGluaXRpYWwrKztcbiAgICBvZmZzZXQrKztcbiAgICBhZGp1c3RUYWIgPSBmYWxzZTtcbiAgICBzcGFjZUFmdGVyTWFya2VyID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDA5IC8qIHRhYiAqLykge1xuICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSB0cnVlO1xuXG4gICAgaWYgKChzdGF0ZS5ic0NvdW50W3N0YXJ0TGluZV0gKyBvZmZzZXQpICUgNCA9PT0gMykge1xuICAgICAgLy8gJyAgPlxcdCAgdGVzdCAnXG4gICAgICAvLyAgICAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZSAodGFiIGhhcyB3aWR0aD09PTEpXG4gICAgICBwb3MrKztcbiAgICAgIGluaXRpYWwrKztcbiAgICAgIG9mZnNldCsrO1xuICAgICAgYWRqdXN0VGFiID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICcgPlxcdCAgdGVzdCAnXG4gICAgICAvLyAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZSArIHNoaWZ0IGJzQ291bnQgc2xpZ2h0bHlcbiAgICAgIC8vICAgICAgICAgdG8gbWFrZSBleHRyYSBzcGFjZSBhcHBlYXJcbiAgICAgIGFkanVzdFRhYiA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSBmYWxzZTtcbiAgfVxuXG4gIG9sZEJNYXJrcyA9IFsgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBwb3M7XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChpc1NwYWNlKGNoKSkge1xuICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgIG9mZnNldCArPSA0IC0gKG9mZnNldCArIHN0YXRlLmJzQ291bnRbc3RhcnRMaW5lXSArIChhZGp1c3RUYWIgPyAxIDogMCkpICUgNDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIG9sZEJTQ291bnQgPSBbIHN0YXRlLmJzQ291bnRbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS5ic0NvdW50W3N0YXJ0TGluZV0gPSBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSArIDEgKyAoc3BhY2VBZnRlck1hcmtlciA/IDEgOiAwKTtcblxuICBsYXN0TGluZUVtcHR5ID0gcG9zID49IG1heDtcblxuICBvbGRTQ291bnQgPSBbIHN0YXRlLnNDb3VudFtzdGFydExpbmVdIF07XG4gIHN0YXRlLnNDb3VudFtzdGFydExpbmVdID0gb2Zmc2V0IC0gaW5pdGlhbDtcblxuICBvbGRUU2hpZnQgPSBbIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdIF07XG4gIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gcG9zIC0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG5cbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ2Jsb2NrcXVvdGUnKTtcblxuICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgc3RhdGUucGFyZW50VHlwZSA9ICdibG9ja3F1b3RlJztcblxuICAvLyBTZWFyY2ggdGhlIGVuZCBvZiB0aGUgYmxvY2tcbiAgLy9cbiAgLy8gQmxvY2sgZW5kcyB3aXRoIGVpdGhlcjpcbiAgLy8gIDEuIGFuIGVtcHR5IGxpbmUgb3V0c2lkZTpcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPiB0ZXN0XG4gIC8vXG4gIC8vICAgICBgYGBcbiAgLy8gIDIuIGFuIGVtcHR5IGxpbmUgaW5zaWRlOlxuICAvLyAgICAgYGBgXG4gIC8vICAgICA+XG4gIC8vICAgICB0ZXN0XG4gIC8vICAgICBgYGBcbiAgLy8gIDMuIGFub3RoZXIgdGFnOlxuICAvLyAgICAgYGBgXG4gIC8vICAgICA+IHRlc3RcbiAgLy8gICAgICAtIC0gLVxuICAvLyAgICAgYGBgXG4gIGZvciAobmV4dExpbmUgPSBzdGFydExpbmUgKyAxOyBuZXh0TGluZSA8IGVuZExpbmU7IG5leHRMaW5lKyspIHtcbiAgICAvLyBjaGVjayBpZiBpdCdzIG91dGRlbnRlZCwgaS5lLiBpdCdzIGluc2lkZSBsaXN0IGl0ZW0gYW5kIGluZGVudGVkXG4gICAgLy8gbGVzcyB0aGFuIHNhaWQgbGlzdCBpdGVtOlxuICAgIC8vXG4gICAgLy8gYGBgXG4gICAgLy8gMS4gYW55dGhpbmdcbiAgICAvLyAgICA+IGN1cnJlbnQgYmxvY2txdW90ZVxuICAgIC8vIDIuIGNoZWNraW5nIHRoaXMgbGluZVxuICAgIC8vIGBgYFxuICAgIGlzT3V0ZGVudGVkID0gc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudDtcblxuICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICBpZiAocG9zID49IG1heCkge1xuICAgICAgLy8gQ2FzZSAxOiBsaW5lIGlzIG5vdCBpbnNpZGUgdGhlIGJsb2NrcXVvdGUsIGFuZCB0aGlzIGxpbmUgaXMgZW1wdHkuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspID09PSAweDNFLyogPiAqLyAmJiAhaXNPdXRkZW50ZWQpIHtcbiAgICAgIC8vIFRoaXMgbGluZSBpcyBpbnNpZGUgdGhlIGJsb2NrcXVvdGUuXG5cbiAgICAgIC8vIHNldCBvZmZzZXQgcGFzdCBzcGFjZXMgYW5kIFwiPlwiXG4gICAgICBpbml0aWFsID0gb2Zmc2V0ID0gc3RhdGUuc0NvdW50W25leHRMaW5lXSArIDE7XG5cbiAgICAgIC8vIHNraXAgb25lIG9wdGlvbmFsIHNwYWNlIGFmdGVyICc+J1xuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjAgLyogc3BhY2UgKi8pIHtcbiAgICAgICAgLy8gJyA+ICAgdGVzdCAnXG4gICAgICAgIC8vICAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZTpcbiAgICAgICAgcG9zKys7XG4gICAgICAgIGluaXRpYWwrKztcbiAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgIGFkanVzdFRhYiA9IGZhbHNlO1xuICAgICAgICBzcGFjZUFmdGVyTWFya2VyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgwOSAvKiB0YWIgKi8pIHtcbiAgICAgICAgc3BhY2VBZnRlck1hcmtlciA9IHRydWU7XG5cbiAgICAgICAgaWYgKChzdGF0ZS5ic0NvdW50W25leHRMaW5lXSArIG9mZnNldCkgJSA0ID09PSAzKSB7XG4gICAgICAgICAgLy8gJyAgPlxcdCAgdGVzdCAnXG4gICAgICAgICAgLy8gICAgICAgXiAtLSBwb3NpdGlvbiBzdGFydCBvZiBsaW5lIGhlcmUgKHRhYiBoYXMgd2lkdGg9PT0xKVxuICAgICAgICAgIHBvcysrO1xuICAgICAgICAgIGluaXRpYWwrKztcbiAgICAgICAgICBvZmZzZXQrKztcbiAgICAgICAgICBhZGp1c3RUYWIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAnID5cXHQgIHRlc3QgJ1xuICAgICAgICAgIC8vICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlICsgc2hpZnQgYnNDb3VudCBzbGlnaHRseVxuICAgICAgICAgIC8vICAgICAgICAgdG8gbWFrZSBleHRyYSBzcGFjZSBhcHBlYXJcbiAgICAgICAgICBhZGp1c3RUYWIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFjZUFmdGVyTWFya2VyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgICAgc3RhdGUuYk1hcmtzW25leHRMaW5lXSA9IHBvcztcblxuICAgICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICAgICAgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gNCAtIChvZmZzZXQgKyBzdGF0ZS5ic0NvdW50W25leHRMaW5lXSArIChhZGp1c3RUYWIgPyAxIDogMCkpICUgNDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zKys7XG4gICAgICB9XG5cbiAgICAgIGxhc3RMaW5lRW1wdHkgPSBwb3MgPj0gbWF4O1xuXG4gICAgICBvbGRCU0NvdW50LnB1c2goc3RhdGUuYnNDb3VudFtuZXh0TGluZV0pO1xuICAgICAgc3RhdGUuYnNDb3VudFtuZXh0TGluZV0gPSBzdGF0ZS5zQ291bnRbbmV4dExpbmVdICsgMSArIChzcGFjZUFmdGVyTWFya2VyID8gMSA6IDApO1xuXG4gICAgICBvbGRTQ291bnQucHVzaChzdGF0ZS5zQ291bnRbbmV4dExpbmVdKTtcbiAgICAgIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPSBvZmZzZXQgLSBpbml0aWFsO1xuXG4gICAgICBvbGRUU2hpZnQucHVzaChzdGF0ZS50U2hpZnRbbmV4dExpbmVdKTtcbiAgICAgIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPSBwb3MgLSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gQ2FzZSAyOiBsaW5lIGlzIG5vdCBpbnNpZGUgdGhlIGJsb2NrcXVvdGUsIGFuZCB0aGUgbGFzdCBsaW5lIHdhcyBlbXB0eS5cbiAgICBpZiAobGFzdExpbmVFbXB0eSkgeyBicmVhazsgfVxuXG4gICAgLy8gQ2FzZSAzOiBhbm90aGVyIHRhZyBmb3VuZC5cbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgIC8vIFF1aXJrIHRvIGVuZm9yY2UgXCJoYXJkIHRlcm1pbmF0aW9uIG1vZGVcIiBmb3IgcGFyYWdyYXBocztcbiAgICAgIC8vIG5vcm1hbGx5IGlmIHlvdSBjYWxsIGB0b2tlbml6ZShzdGF0ZSwgc3RhcnRMaW5lLCBuZXh0TGluZSlgLFxuICAgICAgLy8gcGFyYWdyYXBocyB3aWxsIGxvb2sgYmVsb3cgbmV4dExpbmUgZm9yIHBhcmFncmFwaCBjb250aW51YXRpb24sXG4gICAgICAvLyBidXQgaWYgYmxvY2txdW90ZSBpcyB0ZXJtaW5hdGVkIGJ5IGFub3RoZXIgdGFnLCB0aGV5IHNob3VsZG4ndFxuICAgICAgc3RhdGUubGluZU1heCA9IG5leHRMaW5lO1xuXG4gICAgICBpZiAoc3RhdGUuYmxrSW5kZW50ICE9PSAwKSB7XG4gICAgICAgIC8vIHN0YXRlLmJsa0luZGVudCB3YXMgbm9uLXplcm8sIHdlIG5vdyBzZXQgaXQgdG8gemVybyxcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byByZS1jYWxjdWxhdGUgYWxsIG9mZnNldHMgdG8gYXBwZWFyIGFzXG4gICAgICAgIC8vIGlmIGluZGVudCB3YXNuJ3QgY2hhbmdlZFxuICAgICAgICBvbGRCTWFya3MucHVzaChzdGF0ZS5iTWFya3NbbmV4dExpbmVdKTtcbiAgICAgICAgb2xkQlNDb3VudC5wdXNoKHN0YXRlLmJzQ291bnRbbmV4dExpbmVdKTtcbiAgICAgICAgb2xkVFNoaWZ0LnB1c2goc3RhdGUudFNoaWZ0W25leHRMaW5lXSk7XG4gICAgICAgIG9sZFNDb3VudC5wdXNoKHN0YXRlLnNDb3VudFtuZXh0TGluZV0pO1xuICAgICAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC09IHN0YXRlLmJsa0luZGVudDtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgb2xkQk1hcmtzLnB1c2goc3RhdGUuYk1hcmtzW25leHRMaW5lXSk7XG4gICAgb2xkQlNDb3VudC5wdXNoKHN0YXRlLmJzQ291bnRbbmV4dExpbmVdKTtcbiAgICBvbGRUU2hpZnQucHVzaChzdGF0ZS50U2hpZnRbbmV4dExpbmVdKTtcbiAgICBvbGRTQ291bnQucHVzaChzdGF0ZS5zQ291bnRbbmV4dExpbmVdKTtcblxuICAgIC8vIEEgbmVnYXRpdmUgaW5kZW50YXRpb24gbWVhbnMgdGhhdCB0aGlzIGlzIGEgcGFyYWdyYXBoIGNvbnRpbnVhdGlvblxuICAgIC8vXG4gICAgc3RhdGUuc0NvdW50W25leHRMaW5lXSA9IC0xO1xuICB9XG5cbiAgb2xkSW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICBzdGF0ZS5ibGtJbmRlbnQgPSAwO1xuXG4gIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2Jsb2NrcXVvdGVfb3BlbicsICdibG9ja3F1b3RlJywgMSk7XG4gIHRva2VuLm1hcmt1cCA9ICc+JztcbiAgdG9rZW4ubWFwICAgID0gbGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdO1xuXG4gIHN0YXRlLm1kLmJsb2NrLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIG5leHRMaW5lKTtcblxuICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdibG9ja3F1b3RlX2Nsb3NlJywgJ2Jsb2NrcXVvdGUnLCAtMSk7XG4gIHRva2VuLm1hcmt1cCA9ICc+JztcblxuICBzdGF0ZS5saW5lTWF4ID0gb2xkTGluZU1heDtcbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIGxpbmVzWzFdID0gc3RhdGUubGluZTtcblxuICAvLyBSZXN0b3JlIG9yaWdpbmFsIHRTaGlmdDsgdGhpcyBtaWdodCBub3QgYmUgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwYXJzZXJcbiAgLy8gaGFzIGFscmVhZHkgYmVlbiBoZXJlLCBidXQganVzdCB0byBtYWtlIHN1cmUgd2UgY2FuIGRvIHRoYXQuXG4gIGZvciAoaSA9IDA7IGkgPCBvbGRUU2hpZnQubGVuZ3RoOyBpKyspIHtcbiAgICBzdGF0ZS5iTWFya3NbaSArIHN0YXJ0TGluZV0gPSBvbGRCTWFya3NbaV07XG4gICAgc3RhdGUudFNoaWZ0W2kgKyBzdGFydExpbmVdID0gb2xkVFNoaWZ0W2ldO1xuICAgIHN0YXRlLnNDb3VudFtpICsgc3RhcnRMaW5lXSA9IG9sZFNDb3VudFtpXTtcbiAgICBzdGF0ZS5ic0NvdW50W2kgKyBzdGFydExpbmVdID0gb2xkQlNDb3VudFtpXTtcbiAgfVxuICBzdGF0ZS5ibGtJbmRlbnQgPSBvbGRJbmRlbnQ7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gQ29kZSBibG9jayAoNCBzcGFjZXMgcGFkZGVkKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb2RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUvKiwgc2lsZW50Ki8pIHtcbiAgdmFyIG5leHRMaW5lLCBsYXN0LCB0b2tlbjtcblxuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPCA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3QgPSBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgd2hpbGUgKG5leHRMaW5lIDwgZW5kTGluZSkge1xuICAgIGlmIChzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgICAgbmV4dExpbmUrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHtcbiAgICAgIG5leHRMaW5lKys7XG4gICAgICBsYXN0ID0gbmV4dExpbmU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gbGFzdDtcblxuICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnY29kZV9ibG9jaycsICdjb2RlJywgMCk7XG4gIHRva2VuLmNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIGxhc3QsIDQgKyBzdGF0ZS5ibGtJbmRlbnQsIHRydWUpO1xuICB0b2tlbi5tYXAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBmZW5jZXMgKGBgYCBsYW5nLCB+fn4gbGFuZylcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmVuY2Uoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBtYXJrZXIsIGxlbiwgcGFyYW1zLCBuZXh0TGluZSwgbWVtLCB0b2tlbiwgbWFya3VwLFxuICAgICAgaGF2ZUVuZE1hcmtlciA9IGZhbHNlLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChwb3MgKyAzID4gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKG1hcmtlciAhPT0gMHg3RS8qIH4gKi8gJiYgbWFya2VyICE9PSAweDYwIC8qIGAgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgbWVtID0gcG9zO1xuICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gIGxlbiA9IHBvcyAtIG1lbTtcblxuICBpZiAobGVuIDwgMykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrdXAgPSBzdGF0ZS5zcmMuc2xpY2UobWVtLCBwb3MpO1xuICBwYXJhbXMgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpO1xuXG4gIGlmIChtYXJrZXIgPT09IDB4NjAgLyogYCAqLykge1xuICAgIGlmIChwYXJhbXMuaW5kZXhPZihTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcikpID49IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBTaW5jZSBzdGFydCBpcyBmb3VuZCwgd2UgY2FuIHJlcG9ydCBzdWNjZXNzIGhlcmUgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBzZWFyY2ggZW5kIG9mIGJsb2NrXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lO1xuXG4gIGZvciAoOzspIHtcbiAgICBuZXh0TGluZSsrO1xuICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7XG4gICAgICAvLyB1bmNsb3NlZCBibG9jayBzaG91bGQgYmUgYXV0b2Nsb3NlZCBieSBlbmQgb2YgZG9jdW1lbnQuXG4gICAgICAvLyBhbHNvIGJsb2NrIHNlZW1zIHRvIGJlIGF1dG9jbG9zZWQgYnkgZW5kIG9mIHBhcmVudFxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcG9zID0gbWVtID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkge1xuICAgICAgLy8gbm9uLWVtcHR5IGxpbmUgd2l0aCBuZWdhdGl2ZSBpbmRlbnQgc2hvdWxkIHN0b3AgdGhlIGxpc3Q6XG4gICAgICAvLyAtIGBgYFxuICAgICAgLy8gIHRlc3RcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSBtYXJrZXIpIHsgY29udGludWU7IH1cblxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHtcbiAgICAgIC8vIGNsb3NpbmcgZmVuY2Ugc2hvdWxkIGJlIGluZGVudGVkIGxlc3MgdGhhbiA0IHNwYWNlc1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKTtcblxuICAgIC8vIGNsb3NpbmcgY29kZSBmZW5jZSBtdXN0IGJlIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhlIG9wZW5pbmcgb25lXG4gICAgaWYgKHBvcyAtIG1lbSA8IGxlbikgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHRhaWwgaGFzIHNwYWNlcyBvbmx5XG4gICAgcG9zID0gc3RhdGUuc2tpcFNwYWNlcyhwb3MpO1xuXG4gICAgaWYgKHBvcyA8IG1heCkgeyBjb250aW51ZTsgfVxuXG4gICAgaGF2ZUVuZE1hcmtlciA9IHRydWU7XG4gICAgLy8gZm91bmQhXG4gICAgYnJlYWs7XG4gIH1cblxuICAvLyBJZiBhIGZlbmNlIGhhcyBoZWFkaW5nIHNwYWNlcywgdGhleSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIGl0cyBpbm5lciBibG9ja1xuICBsZW4gPSBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmUgKyAoaGF2ZUVuZE1hcmtlciA/IDEgOiAwKTtcblxuICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnZmVuY2UnLCAnY29kZScsIDApO1xuICB0b2tlbi5pbmZvICAgID0gcGFyYW1zO1xuICB0b2tlbi5jb250ZW50ID0gc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lICsgMSwgbmV4dExpbmUsIGxlbiwgdHJ1ZSk7XG4gIHRva2VuLm1hcmt1cCAgPSBtYXJrdXA7XG4gIHRva2VuLm1hcCAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIGhlYWRpbmcgKCMsICMjLCAuLi4pXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGVhZGluZyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBsZXZlbCwgdG1wLCB0b2tlbixcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjaCAgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChjaCAhPT0gMHgyMy8qICMgKi8gfHwgcG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBjb3VudCBoZWFkaW5nIGxldmVsXG4gIGxldmVsID0gMTtcbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3Bvcyk7XG4gIHdoaWxlIChjaCA9PT0gMHgyMy8qICMgKi8gJiYgcG9zIDwgbWF4ICYmIGxldmVsIDw9IDYpIHtcbiAgICBsZXZlbCsrO1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpO1xuICB9XG5cbiAgaWYgKGxldmVsID4gNiB8fCAocG9zIDwgbWF4ICYmICFpc1NwYWNlKGNoKSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIExldCdzIGN1dCB0YWlscyBsaWtlICcgICAgIyMjICAnIGZyb20gdGhlIGVuZCBvZiBzdHJpbmdcblxuICBtYXggPSBzdGF0ZS5za2lwU3BhY2VzQmFjayhtYXgsIHBvcyk7XG4gIHRtcCA9IHN0YXRlLnNraXBDaGFyc0JhY2sobWF4LCAweDIzLCBwb3MpOyAvLyAjXG4gIGlmICh0bXAgPiBwb3MgJiYgaXNTcGFjZShzdGF0ZS5zcmMuY2hhckNvZGVBdCh0bXAgLSAxKSkpIHtcbiAgICBtYXggPSB0bXA7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgMTtcblxuICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdoZWFkaW5nX29wZW4nLCAnaCcgKyBTdHJpbmcobGV2ZWwpLCAxKTtcbiAgdG9rZW4ubWFya3VwID0gJyMjIyMjIyMjJy5zbGljZSgwLCBsZXZlbCk7XG4gIHRva2VuLm1hcCAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbmxpbmUnLCAnJywgMCk7XG4gIHRva2VuLmNvbnRlbnQgID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KS50cmltKCk7XG4gIHRva2VuLm1hcCAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcbiAgdG9rZW4uY2hpbGRyZW4gPSBbXTtcblxuICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdoZWFkaW5nX2Nsb3NlJywgJ2gnICsgU3RyaW5nKGxldmVsKSwgLTEpO1xuICB0b2tlbi5tYXJrdXAgPSAnIyMjIyMjIyMnLnNsaWNlKDAsIGxldmVsKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBIb3Jpem9udGFsIHJ1bGVcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBocihzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG1hcmtlciwgY250LCBjaCwgdG9rZW4sXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuXG4gIC8vIENoZWNrIGhyIG1hcmtlclxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDVGLyogXyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIG1hcmtlcnMgY2FuIGJlIG1peGVkIHdpdGggc3BhY2VzLCBidXQgdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IDMgb2YgdGhlbVxuXG4gIGNudCA9IDE7XG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcbiAgICBpZiAoY2ggIT09IG1hcmtlciAmJiAhaXNTcGFjZShjaCkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKGNoID09PSBtYXJrZXIpIHsgY250Kys7IH1cbiAgfVxuXG4gIGlmIChjbnQgPCAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgMTtcblxuICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdocicsICdocicsIDApO1xuICB0b2tlbi5tYXAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuICB0b2tlbi5tYXJrdXAgPSBBcnJheShjbnQgKyAxKS5qb2luKFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gSFRNTCBibG9ja1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGJsb2NrX25hbWVzID0gcmVxdWlyZSgnLi4vY29tbW9uL2h0bWxfYmxvY2tzJyk7XG52YXIgSFRNTF9PUEVOX0NMT1NFX1RBR19SRSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9odG1sX3JlJykuSFRNTF9PUEVOX0NMT1NFX1RBR19SRTtcblxuLy8gQW4gYXJyYXkgb2Ygb3BlbmluZyBhbmQgY29ycmVzcG9uZGluZyBjbG9zaW5nIHNlcXVlbmNlcyBmb3IgaHRtbCB0YWdzLFxuLy8gbGFzdCBhcmd1bWVudCBkZWZpbmVzIHdoZXRoZXIgaXQgY2FuIHRlcm1pbmF0ZSBhIHBhcmFncmFwaCBvciBub3Rcbi8vXG52YXIgSFRNTF9TRVFVRU5DRVMgPSBbXG4gIFsgL148KHNjcmlwdHxwcmV8c3R5bGUpKD89KFxcc3w+fCQpKS9pLCAvPFxcLyhzY3JpcHR8cHJlfHN0eWxlKT4vaSwgdHJ1ZSBdLFxuICBbIC9ePCEtLS8sICAgICAgICAvLS0+LywgICB0cnVlIF0sXG4gIFsgL148XFw/LywgICAgICAgICAvXFw/Pi8sICAgdHJ1ZSBdLFxuICBbIC9ePCFbQS1aXS8sICAgICAvPi8sICAgICB0cnVlIF0sXG4gIFsgL148IVxcW0NEQVRBXFxbLywgL1xcXVxcXT4vLCB0cnVlIF0sXG4gIFsgbmV3IFJlZ0V4cCgnXjwvPygnICsgYmxvY2tfbmFtZXMuam9pbignfCcpICsgJykoPz0oXFxcXHN8Lz8+fCQpKScsICdpJyksIC9eJC8sIHRydWUgXSxcbiAgWyBuZXcgUmVnRXhwKEhUTUxfT1BFTl9DTE9TRV9UQUdfUkUuc291cmNlICsgJ1xcXFxzKiQnKSwgIC9eJC8sIGZhbHNlIF1cbl07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodG1sX2Jsb2NrKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgaSwgbmV4dExpbmUsIHRva2VuLCBsaW5lVGV4dCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQy8qIDwgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGluZVRleHQgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBIVE1MX1NFUVVFTkNFUy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChIVE1MX1NFUVVFTkNFU1tpXVswXS50ZXN0KGxpbmVUZXh0KSkgeyBicmVhazsgfVxuICB9XG5cbiAgaWYgKGkgPT09IEhUTUxfU0VRVUVOQ0VTLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgLy8gdHJ1ZSBpZiB0aGlzIHNlcXVlbmNlIGNhbiBiZSBhIHRlcm1pbmF0b3IsIGZhbHNlIG90aGVyd2lzZVxuICAgIHJldHVybiBIVE1MX1NFUVVFTkNFU1tpXVsyXTtcbiAgfVxuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICAvLyBJZiB3ZSBhcmUgaGVyZSAtIHdlIGRldGVjdGVkIEhUTUwgYmxvY2suXG4gIC8vIExldCdzIHJvbGwgZG93biB0aWxsIGJsb2NrIGVuZC5cbiAgaWYgKCFIVE1MX1NFUVVFTkNFU1tpXVsxXS50ZXN0KGxpbmVUZXh0KSkge1xuICAgIGZvciAoOyBuZXh0TGluZSA8IGVuZExpbmU7IG5leHRMaW5lKyspIHtcbiAgICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG5cbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcbiAgICAgIGxpbmVUZXh0ID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KTtcblxuICAgICAgaWYgKEhUTUxfU0VRVUVOQ0VTW2ldWzFdLnRlc3QobGluZVRleHQpKSB7XG4gICAgICAgIGlmIChsaW5lVGV4dC5sZW5ndGggIT09IDApIHsgbmV4dExpbmUrKzsgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG5cbiAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2h0bWxfYmxvY2snLCAnJywgMCk7XG4gIHRva2VuLm1hcCAgICAgPSBbIHN0YXJ0TGluZSwgbmV4dExpbmUgXTtcbiAgdG9rZW4uY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gbGhlYWRpbmcgKC0tLSwgPT09KVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaGVhZGluZyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLyosIHNpbGVudCovKSB7XG4gIHZhciBjb250ZW50LCB0ZXJtaW5hdGUsIGksIGwsIHRva2VuLCBwb3MsIG1heCwgbGV2ZWwsIG1hcmtlcixcbiAgICAgIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMSwgb2xkUGFyZW50VHlwZSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdwYXJhZ3JhcGgnKTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgc3RhdGUucGFyZW50VHlwZSA9ICdwYXJhZ3JhcGgnOyAvLyB1c2UgcGFyYWdyYXBoIHRvIG1hdGNoIHRlcm1pbmF0b3JSdWxlc1xuXG4gIC8vIGp1bXAgbGluZS1ieS1saW5lIHVudGlsIGVtcHR5IG9uZSBvciBFT0ZcbiAgZm9yICg7IG5leHRMaW5lIDwgZW5kTGluZSAmJiAhc3RhdGUuaXNFbXB0eShuZXh0TGluZSk7IG5leHRMaW5lKyspIHtcbiAgICAvLyB0aGlzIHdvdWxkIGJlIGEgY29kZSBibG9jayBub3JtYWxseSwgYnV0IGFmdGVyIHBhcmFncmFwaFxuICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvL1xuICAgIC8vIENoZWNrIGZvciB1bmRlcmxpbmUgaW4gc2V0ZXh0IGhlYWRlclxuICAgIC8vXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPj0gc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICAgIGlmIChwb3MgPCBtYXgpIHtcbiAgICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgICAgICBpZiAobWFya2VyID09PSAweDJELyogLSAqLyB8fCBtYXJrZXIgPT09IDB4M0QvKiA9ICovKSB7XG4gICAgICAgICAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKTtcbiAgICAgICAgICBwb3MgPSBzdGF0ZS5za2lwU3BhY2VzKHBvcyk7XG5cbiAgICAgICAgICBpZiAocG9zID49IG1heCkge1xuICAgICAgICAgICAgbGV2ZWwgPSAobWFya2VyID09PSAweDNELyogPSAqLyA/IDEgOiAyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHF1aXJrIGZvciBibG9ja3F1b3RlcywgdGhpcyBsaW5lIHNob3VsZCBhbHJlYWR5IGJlIGNoZWNrZWQgYnkgdGhhdCBydWxlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBTb21lIHRhZ3MgY2FuIHRlcm1pbmF0ZSBwYXJhZ3JhcGggd2l0aG91dCBlbXB0eSBsaW5lLlxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cbiAgfVxuXG4gIGlmICghbGV2ZWwpIHtcbiAgICAvLyBEaWRuJ3QgZmluZCB2YWxpZCB1bmRlcmxpbmVcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb250ZW50ID0gc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBuZXh0TGluZSwgc3RhdGUuYmxrSW5kZW50LCBmYWxzZSkudHJpbSgpO1xuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZSArIDE7XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdoZWFkaW5nX29wZW4nLCAnaCcgKyBTdHJpbmcobGV2ZWwpLCAxKTtcbiAgdG9rZW4ubWFya3VwICAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcik7XG4gIHRva2VuLm1hcCAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcblxuICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKTtcbiAgdG9rZW4uY29udGVudCAgPSBjb250ZW50O1xuICB0b2tlbi5tYXAgICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIC0gMSBdO1xuICB0b2tlbi5jaGlsZHJlbiA9IFtdO1xuXG4gIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaGVhZGluZ19jbG9zZScsICdoJyArIFN0cmluZyhsZXZlbCksIC0xKTtcbiAgdG9rZW4ubWFya3VwICAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcik7XG5cbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gTGlzdHNcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxuLy8gU2VhcmNoIGBbLSsqXVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYWZ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSB7XG4gIHZhciBtYXJrZXIsIHBvcywgbWF4LCBjaDtcblxuICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gIC8vIENoZWNrIGJ1bGxldFxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJCLyogKyAqLykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoIWlzU3BhY2UoY2gpKSB7XG4gICAgICAvLyBcIiAtdGVzdCBcIiAtIGlzIG5vdCBhIGxpc3QgaXRlbVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbi8vIFNlYXJjaCBgXFxkK1suKV1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFmdGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpIHtcbiAgdmFyIGNoLFxuICAgICAgc3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgcG9zID0gc3RhcnQsXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBMaXN0IG1hcmtlciBzaG91bGQgaGF2ZSBhdCBsZWFzdCAyIGNoYXJzIChkaWdpdCArIGRvdClcbiAgaWYgKHBvcyArIDEgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuXG4gIGlmIChjaCA8IDB4MzAvKiAwICovIHx8IGNoID4gMHgzOS8qIDkgKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgZm9yICg7Oykge1xuICAgIC8vIEVPTCAtPiBmYWlsXG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICAgIGlmIChjaCA+PSAweDMwLyogMCAqLyAmJiBjaCA8PSAweDM5LyogOSAqLykge1xuXG4gICAgICAvLyBMaXN0IG1hcmtlciBzaG91bGQgaGF2ZSBubyBtb3JlIHRoYW4gOSBkaWdpdHNcbiAgICAgIC8vIChwcmV2ZW50cyBpbnRlZ2VyIG92ZXJmbG93IGluIGJyb3dzZXJzKVxuICAgICAgaWYgKHBvcyAtIHN0YXJ0ID49IDEwKSB7IHJldHVybiAtMTsgfVxuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmb3VuZCB2YWxpZCBtYXJrZXJcbiAgICBpZiAoY2ggPT09IDB4MjkvKiApICovIHx8IGNoID09PSAweDJlLyogLiAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cblxuICBpZiAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKCFpc1NwYWNlKGNoKSkge1xuICAgICAgLy8gXCIgMS50ZXN0IFwiIC0gaXMgbm90IGEgbGlzdCBpdGVtXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG4gIHJldHVybiBwb3M7XG59XG5cbmZ1bmN0aW9uIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGlkeCkge1xuICB2YXIgaSwgbCxcbiAgICAgIGxldmVsID0gc3RhdGUubGV2ZWwgKyAyO1xuXG4gIGZvciAoaSA9IGlkeCArIDIsIGwgPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMjsgaSA8IGw7IGkrKykge1xuICAgIGlmIChzdGF0ZS50b2tlbnNbaV0ubGV2ZWwgPT09IGxldmVsICYmIHN0YXRlLnRva2Vuc1tpXS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nKSB7XG4gICAgICBzdGF0ZS50b2tlbnNbaSArIDJdLmhpZGRlbiA9IHRydWU7XG4gICAgICBzdGF0ZS50b2tlbnNbaV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3Qoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCxcbiAgICAgIGNvbnRlbnRTdGFydCxcbiAgICAgIGksXG4gICAgICBpbmRlbnQsXG4gICAgICBpbmRlbnRBZnRlck1hcmtlcixcbiAgICAgIGluaXRpYWwsXG4gICAgICBpc09yZGVyZWQsXG4gICAgICBpdGVtTGluZXMsXG4gICAgICBsLFxuICAgICAgbGlzdExpbmVzLFxuICAgICAgbGlzdFRva0lkeCxcbiAgICAgIG1hcmtlckNoYXJDb2RlLFxuICAgICAgbWFya2VyVmFsdWUsXG4gICAgICBtYXgsXG4gICAgICBuZXh0TGluZSxcbiAgICAgIG9mZnNldCxcbiAgICAgIG9sZExpc3RJbmRlbnQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgb2xkU0NvdW50LFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgb2xkVGlnaHQsXG4gICAgICBwb3MsXG4gICAgICBwb3NBZnRlck1hcmtlcixcbiAgICAgIHByZXZFbXB0eUVuZCxcbiAgICAgIHN0YXJ0LFxuICAgICAgdGVybWluYXRlLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgdG9rZW4sXG4gICAgICBpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoID0gZmFsc2UsXG4gICAgICB0aWdodCA9IHRydWU7XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gU3BlY2lhbCBjYXNlOlxuICAvLyAgLSBpdGVtIDFcbiAgLy8gICAtIGl0ZW0gMlxuICAvLyAgICAtIGl0ZW0gM1xuICAvLyAgICAgLSBpdGVtIDRcbiAgLy8gICAgICAtIHRoaXMgb25lIGlzIGEgcGFyYWdyYXBoIGNvbnRpbnVhdGlvblxuICBpZiAoc3RhdGUubGlzdEluZGVudCA+PSAwICYmXG4gICAgICBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmxpc3RJbmRlbnQgPj0gNCAmJlxuICAgICAgc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBsaW1pdCBjb25kaXRpb25zIHdoZW4gbGlzdCBjYW4gaW50ZXJydXB0XG4gIC8vIGEgcGFyYWdyYXBoICh2YWxpZGF0aW9uIG1vZGUgb25seSlcbiAgaWYgKHNpbGVudCAmJiBzdGF0ZS5wYXJlbnRUeXBlID09PSAncGFyYWdyYXBoJykge1xuICAgIC8vIE5leHQgbGlzdCBpdGVtIHNob3VsZCBzdGlsbCB0ZXJtaW5hdGUgcHJldmlvdXMgbGlzdCBpdGVtO1xuICAgIC8vXG4gICAgLy8gVGhpcyBjb2RlIGNhbiBmYWlsIGlmIHBsdWdpbnMgdXNlIGJsa0luZGVudCBhcyB3ZWxsIGFzIGxpc3RzLFxuICAgIC8vIGJ1dCBJIGhvcGUgdGhlIHNwZWMgZ2V0cyBmaXhlZCBsb25nIGJlZm9yZSB0aGF0IGhhcHBlbnMuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPj0gc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgICBpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBEZXRlY3QgbGlzdCB0eXBlIGFuZCBwb3NpdGlvbiBhZnRlciBtYXJrZXJcbiAgaWYgKChwb3NBZnRlck1hcmtlciA9IHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSkgPj0gMCkge1xuICAgIGlzT3JkZXJlZCA9IHRydWU7XG4gICAgc3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICAgIG1hcmtlclZhbHVlID0gTnVtYmVyKHN0YXRlLnNyYy5zdWJzdHIoc3RhcnQsIHBvc0FmdGVyTWFya2VyIC0gc3RhcnQgLSAxKSk7XG5cbiAgICAvLyBJZiB3ZSdyZSBzdGFydGluZyBhIG5ldyBvcmRlcmVkIGxpc3QgcmlnaHQgYWZ0ZXJcbiAgICAvLyBhIHBhcmFncmFwaCwgaXQgc2hvdWxkIHN0YXJ0IHdpdGggMS5cbiAgICBpZiAoaXNUZXJtaW5hdGluZ1BhcmFncmFwaCAmJiBtYXJrZXJWYWx1ZSAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXG4gIH0gZWxzZSBpZiAoKHBvc0FmdGVyTWFya2VyID0gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkpID49IDApIHtcbiAgICBpc09yZGVyZWQgPSBmYWxzZTtcblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIElmIHdlJ3JlIHN0YXJ0aW5nIGEgbmV3IHVub3JkZXJlZCBsaXN0IHJpZ2h0IGFmdGVyXG4gIC8vIGEgcGFyYWdyYXBoLCBmaXJzdCBsaW5lIHNob3VsZCBub3QgYmUgZW1wdHkuXG4gIGlmIChpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoKSB7XG4gICAgaWYgKHN0YXRlLnNraXBTcGFjZXMocG9zQWZ0ZXJNYXJrZXIpID49IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBXZSBzaG91bGQgdGVybWluYXRlIGxpc3Qgb24gc3R5bGUgY2hhbmdlLiBSZW1lbWJlciBmaXJzdCBvbmUgdG8gY29tcGFyZS5cbiAgbWFya2VyQ2hhckNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3NBZnRlck1hcmtlciAtIDEpO1xuXG4gIC8vIEZvciB2YWxpZGF0aW9uIG1vZGUgd2UgY2FuIHRlcm1pbmF0ZSBpbW1lZGlhdGVseVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gU3RhcnQgbGlzdFxuICBsaXN0VG9rSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aDtcblxuICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgdG9rZW4gICAgICAgPSBzdGF0ZS5wdXNoKCdvcmRlcmVkX2xpc3Rfb3BlbicsICdvbCcsIDEpO1xuICAgIGlmIChtYXJrZXJWYWx1ZSAhPT0gMSkge1xuICAgICAgdG9rZW4uYXR0cnMgPSBbIFsgJ3N0YXJ0JywgbWFya2VyVmFsdWUgXSBdO1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIHRva2VuICAgICAgID0gc3RhdGUucHVzaCgnYnVsbGV0X2xpc3Rfb3BlbicsICd1bCcsIDEpO1xuICB9XG5cbiAgdG9rZW4ubWFwICAgID0gbGlzdExpbmVzID0gWyBzdGFydExpbmUsIDAgXTtcbiAgdG9rZW4ubWFya3VwID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXJDaGFyQ29kZSk7XG5cbiAgLy9cbiAgLy8gSXRlcmF0ZSBsaXN0IGl0ZW1zXG4gIC8vXG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmU7XG4gIHByZXZFbXB0eUVuZCA9IGZhbHNlO1xuICB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5tZC5ibG9jay5ydWxlci5nZXRSdWxlcygnbGlzdCcpO1xuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2xpc3QnO1xuXG4gIHdoaWxlIChuZXh0TGluZSA8IGVuZExpbmUpIHtcbiAgICBwb3MgPSBwb3NBZnRlck1hcmtlcjtcbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgaW5pdGlhbCA9IG9mZnNldCA9IHN0YXRlLnNDb3VudFtuZXh0TGluZV0gKyBwb3NBZnRlck1hcmtlciAtIChzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdKTtcblxuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgIG9mZnNldCArPSA0IC0gKG9mZnNldCArIHN0YXRlLmJzQ291bnRbbmV4dExpbmVdKSAlIDQ7XG4gICAgICB9IGVsc2UgaWYgKGNoID09PSAweDIwKSB7XG4gICAgICAgIG9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHBvcysrO1xuICAgIH1cblxuICAgIGNvbnRlbnRTdGFydCA9IHBvcztcblxuICAgIGlmIChjb250ZW50U3RhcnQgPj0gbWF4KSB7XG4gICAgICAvLyB0cmltbWluZyBzcGFjZSBpbiBcIi0gICAgXFxuICAzXCIgY2FzZSwgaW5kZW50IGlzIDEgaGVyZVxuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRlbnRBZnRlck1hcmtlciA9IG9mZnNldCAtIGluaXRpYWw7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gNCBzcGFjZXMsIHRoZSBpbmRlbnQgaXMgMVxuICAgIC8vICh0aGUgcmVzdCBpcyBqdXN0IGluZGVudGVkIGNvZGUgYmxvY2spXG4gICAgaWYgKGluZGVudEFmdGVyTWFya2VyID4gNCkgeyBpbmRlbnRBZnRlck1hcmtlciA9IDE7IH1cblxuICAgIC8vIFwiICAtICB0ZXN0XCJcbiAgICAvLyAgXl5eXl4gLSBjYWxjdWxhdGluZyB0b3RhbCBsZW5ndGggb2YgdGhpcyB0aGluZ1xuICAgIGluZGVudCA9IGluaXRpYWwgKyBpbmRlbnRBZnRlck1hcmtlcjtcblxuICAgIC8vIFJ1biBzdWJwYXJzZXIgJiB3cml0ZSB0b2tlbnNcbiAgICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaXN0X2l0ZW1fb3BlbicsICdsaScsIDEpO1xuICAgIHRva2VuLm1hcmt1cCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyQ2hhckNvZGUpO1xuICAgIHRva2VuLm1hcCAgICA9IGl0ZW1MaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF07XG5cbiAgICAvLyBjaGFuZ2UgY3VycmVudCBzdGF0ZSwgdGhlbiByZXN0b3JlIGl0IGFmdGVyIHBhcnNlciBzdWJjYWxsXG4gICAgb2xkVGlnaHQgPSBzdGF0ZS50aWdodDtcbiAgICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgICBvbGRTQ291bnQgPSBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXTtcblxuICAgIC8vICAtIGV4YW1wbGUgbGlzdFxuICAgIC8vIF4gbGlzdEluZGVudCBwb3NpdGlvbiB3aWxsIGJlIGhlcmVcbiAgICAvLyAgIF4gYmxrSW5kZW50IHBvc2l0aW9uIHdpbGwgYmUgaGVyZVxuICAgIC8vXG4gICAgb2xkTGlzdEluZGVudCA9IHN0YXRlLmxpc3RJbmRlbnQ7XG4gICAgc3RhdGUubGlzdEluZGVudCA9IHN0YXRlLmJsa0luZGVudDtcbiAgICBzdGF0ZS5ibGtJbmRlbnQgPSBpbmRlbnQ7XG5cbiAgICBzdGF0ZS50aWdodCA9IHRydWU7XG4gICAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBjb250ZW50U3RhcnQgLSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcbiAgICBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSA9IG9mZnNldDtcblxuICAgIGlmIChjb250ZW50U3RhcnQgPj0gbWF4ICYmIHN0YXRlLmlzRW1wdHkoc3RhcnRMaW5lICsgMSkpIHtcbiAgICAgIC8vIHdvcmthcm91bmQgZm9yIHRoaXMgY2FzZVxuICAgICAgLy8gKGxpc3QgaXRlbSBpcyBlbXB0eSwgbGlzdCB0ZXJtaW5hdGVzIGJlZm9yZSBcImZvb1wiKTpcbiAgICAgIC8vIH5+fn5+fn5+XG4gICAgICAvLyAgIC1cbiAgICAgIC8vXG4gICAgICAvLyAgICAgZm9vXG4gICAgICAvLyB+fn5+fn5+flxuICAgICAgc3RhdGUubGluZSA9IE1hdGgubWluKHN0YXRlLmxpbmUgKyAyLCBlbmRMaW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUubWQuYmxvY2sudG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gSWYgYW55IG9mIGxpc3QgaXRlbSBpcyB0aWdodCwgbWFyayBsaXN0IGFzIHRpZ2h0XG4gICAgaWYgKCFzdGF0ZS50aWdodCB8fCBwcmV2RW1wdHlFbmQpIHtcbiAgICAgIHRpZ2h0ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIEl0ZW0gYmVjb21lIGxvb3NlIGlmIGZpbmlzaCB3aXRoIGVtcHR5IGxpbmUsXG4gICAgLy8gYnV0IHdlIHNob3VsZCBmaWx0ZXIgbGFzdCBlbGVtZW50LCBiZWNhdXNlIGl0IG1lYW5zIGxpc3QgZmluaXNoXG4gICAgcHJldkVtcHR5RW5kID0gKHN0YXRlLmxpbmUgLSBzdGFydExpbmUpID4gMSAmJiBzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKTtcblxuICAgIHN0YXRlLmJsa0luZGVudCA9IHN0YXRlLmxpc3RJbmRlbnQ7XG4gICAgc3RhdGUubGlzdEluZGVudCA9IG9sZExpc3RJbmRlbnQ7XG4gICAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBvbGRUU2hpZnQ7XG4gICAgc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gPSBvbGRTQ291bnQ7XG4gICAgc3RhdGUudGlnaHQgPSBvbGRUaWdodDtcblxuICAgIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2xpc3RfaXRlbV9jbG9zZScsICdsaScsIC0xKTtcbiAgICB0b2tlbi5tYXJrdXAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlckNoYXJDb2RlKTtcblxuICAgIG5leHRMaW5lID0gc3RhcnRMaW5lID0gc3RhdGUubGluZTtcbiAgICBpdGVtTGluZXNbMV0gPSBuZXh0TGluZTtcbiAgICBjb250ZW50U3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcblxuICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG5cbiAgICAvL1xuICAgIC8vIFRyeSB0byBjaGVjayBpZiBsaXN0IGlzIHRlcm1pbmF0ZWQgb3IgY29udGludWVkLlxuICAgIC8vXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gICAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgYnJlYWs7IH1cblxuICAgIC8vIGZhaWwgaWYgdGVybWluYXRpbmcgYmxvY2sgZm91bmRcbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBmYWlsIGlmIGxpc3QgaGFzIGFub3RoZXIgdHlwZVxuICAgIGlmIChpc09yZGVyZWQpIHtcbiAgICAgIHBvc0FmdGVyTWFya2VyID0gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBuZXh0TGluZSk7XG4gICAgICBpZiAocG9zQWZ0ZXJNYXJrZXIgPCAwKSB7IGJyZWFrOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc0FmdGVyTWFya2VyID0gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIG5leHRMaW5lKTtcbiAgICAgIGlmIChwb3NBZnRlck1hcmtlciA8IDApIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBpZiAobWFya2VyQ2hhckNvZGUgIT09IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvc0FmdGVyTWFya2VyIC0gMSkpIHsgYnJlYWs7IH1cbiAgfVxuXG4gIC8vIEZpbmFsaXplIGxpc3RcbiAgaWYgKGlzT3JkZXJlZCkge1xuICAgIHRva2VuID0gc3RhdGUucHVzaCgnb3JkZXJlZF9saXN0X2Nsb3NlJywgJ29sJywgLTEpO1xuICB9IGVsc2Uge1xuICAgIHRva2VuID0gc3RhdGUucHVzaCgnYnVsbGV0X2xpc3RfY2xvc2UnLCAndWwnLCAtMSk7XG4gIH1cbiAgdG9rZW4ubWFya3VwID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXJDaGFyQ29kZSk7XG5cbiAgbGlzdExpbmVzWzFdID0gbmV4dExpbmU7XG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICAvLyBtYXJrIHBhcmFncmFwaHMgdGlnaHQgaWYgbmVlZGVkXG4gIGlmICh0aWdodCkge1xuICAgIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGxpc3RUb2tJZHgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUGFyYWdyYXBoXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcmFncmFwaChzdGF0ZSwgc3RhcnRMaW5lLyosIGVuZExpbmUqLykge1xuICB2YXIgY29udGVudCwgdGVybWluYXRlLCBpLCBsLCB0b2tlbiwgb2xkUGFyZW50VHlwZSxcbiAgICAgIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdwYXJhZ3JhcGgnKSxcbiAgICAgIGVuZExpbmUgPSBzdGF0ZS5saW5lTWF4O1xuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3BhcmFncmFwaCc7XG5cbiAgLy8ganVtcCBsaW5lLWJ5LWxpbmUgdW50aWwgZW1wdHkgb25lIG9yIEVPRlxuICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKTsgbmV4dExpbmUrKykge1xuICAgIC8vIHRoaXMgd291bGQgYmUgYSBjb2RlIGJsb2NrIG5vcm1hbGx5LCBidXQgYWZ0ZXIgcGFyYWdyYXBoXG4gICAgLy8gaXQncyBjb25zaWRlcmVkIGEgbGF6eSBjb250aW51YXRpb24gcmVnYXJkbGVzcyBvZiB3aGF0J3MgdGhlcmVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgY29udGludWU7IH1cblxuICAgIC8vIHF1aXJrIGZvciBibG9ja3F1b3RlcywgdGhpcyBsaW5lIHNob3VsZCBhbHJlYWR5IGJlIGNoZWNrZWQgYnkgdGhhdCBydWxlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBTb21lIHRhZ3MgY2FuIHRlcm1pbmF0ZSBwYXJhZ3JhcGggd2l0aG91dCBlbXB0eSBsaW5lLlxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgncGFyYWdyYXBoX29wZW4nLCAncCcsIDEpO1xuICB0b2tlbi5tYXAgICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbmxpbmUnLCAnJywgMCk7XG4gIHRva2VuLmNvbnRlbnQgID0gY29udGVudDtcbiAgdG9rZW4ubWFwICAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuICB0b2tlbi5jaGlsZHJlbiA9IFtdO1xuXG4gIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgncGFyYWdyYXBoX2Nsb3NlJywgJ3AnLCAtMSk7XG5cbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBub3JtYWxpemVSZWZlcmVuY2UgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLm5vcm1hbGl6ZVJlZmVyZW5jZTtcbnZhciBpc1NwYWNlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWZlcmVuY2Uoc3RhdGUsIHN0YXJ0TGluZSwgX2VuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsXG4gICAgICBkZXN0RW5kUG9zLFxuICAgICAgZGVzdEVuZExpbmVObyxcbiAgICAgIGVuZExpbmUsXG4gICAgICBocmVmLFxuICAgICAgaSxcbiAgICAgIGwsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRW5kLFxuICAgICAgb2xkUGFyZW50VHlwZSxcbiAgICAgIHJlcyxcbiAgICAgIHN0YXJ0LFxuICAgICAgc3RyLFxuICAgICAgdGVybWluYXRlLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgdGl0bGUsXG4gICAgICBsaW5lcyA9IDAsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0sXG4gICAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFNpbXBsZSBjaGVjayB0byBxdWlja2x5IGludGVycnVwdCBzY2FuIG9uIFtsaW5rXSh1cmwpIGF0IHRoZSBzdGFydCBvZiBsaW5lLlxuICAvLyBDYW4gYmUgdXNlZnVsIG9uIHByYWN0aWNlOiBodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvaXNzdWVzLzU0XG4gIHdoaWxlICgrK3BvcyA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVEIC8qIF0gKi8gJiZcbiAgICAgICAgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zIC0gMSkgIT09IDB4NUMvKiBcXCAqLykge1xuICAgICAgaWYgKHBvcyArIDEgPT09IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKSAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBlbmRMaW5lID0gc3RhdGUubGluZU1heDtcblxuICAvLyBqdW1wIGxpbmUtYnktbGluZSB1bnRpbCBlbXB0eSBvbmUgb3IgRU9GXG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdyZWZlcmVuY2UnKTtcblxuICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgc3RhdGUucGFyZW50VHlwZSA9ICdyZWZlcmVuY2UnO1xuXG4gIGZvciAoOyBuZXh0TGluZSA8IGVuZExpbmUgJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpOyBuZXh0TGluZSsrKSB7XG4gICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAvLyBpdCdzIGNvbnNpZGVyZWQgYSBsYXp5IGNvbnRpbnVhdGlvbiByZWdhcmRsZXNzIG9mIHdoYXQncyB0aGVyZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID4gMykgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gcXVpcmsgZm9yIGJsb2NrcXVvdGVzLCB0aGlzIGxpbmUgc2hvdWxkIGFscmVhZHkgYmUgY2hlY2tlZCBieSB0aGF0IHJ1bGVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IDApIHsgY29udGludWU7IH1cblxuICAgIC8vIFNvbWUgdGFncyBjYW4gdGVybWluYXRlIHBhcmFncmFwaCB3aXRob3V0IGVtcHR5IGxpbmUuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICB9XG5cbiAgc3RyID0gc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBuZXh0TGluZSwgc3RhdGUuYmxrSW5kZW50LCBmYWxzZSkudHJpbSgpO1xuICBtYXggPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAocG9zID0gMTsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY2ggPT09IDB4NUIgLyogWyAqLykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUQgLyogXSAqLykge1xuICAgICAgbGFiZWxFbmQgPSBwb3M7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDBBIC8qIFxcbiAqLykge1xuICAgICAgbGluZXMrKztcbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDVDIC8qIFxcICovKSB7XG4gICAgICBwb3MrKztcbiAgICAgIGlmIChwb3MgPCBtYXggJiYgc3RyLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgwQSkge1xuICAgICAgICBsaW5lcysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChsYWJlbEVuZCA8IDAgfHwgc3RyLmNoYXJDb2RlQXQobGFiZWxFbmQgKyAxKSAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICBeXl4gc2tpcCBvcHRpb25hbCB3aGl0ZXNwYWNlIGhlcmVcbiAgZm9yIChwb3MgPSBsYWJlbEVuZCArIDI7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNoID09PSAweDBBKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgIC8qZXNsaW50IG5vLWVtcHR5OjAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgIF5eXl5eXl5eXl5eIHBhcnNlIHRoaXNcbiAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtEZXN0aW5hdGlvbihzdHIsIHBvcywgbWF4KTtcbiAgaWYgKCFyZXMub2spIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaHJlZiA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsocmVzLnN0cik7XG4gIGlmICghc3RhdGUubWQudmFsaWRhdGVMaW5rKGhyZWYpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHJlcy5wb3M7XG4gIGxpbmVzICs9IHJlcy5saW5lcztcblxuICAvLyBzYXZlIGN1cnNvciBzdGF0ZSwgd2UgY291bGQgcmVxdWlyZSB0byByb2xsYmFjayBsYXRlclxuICBkZXN0RW5kUG9zID0gcG9zO1xuICBkZXN0RW5kTGluZU5vID0gbGluZXM7XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIF5eXiBza2lwcGluZyB0aG9zZSBzcGFjZXNcbiAgc3RhcnQgPSBwb3M7XG4gIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjaCA9PT0gMHgwQSkge1xuICAgICAgbGluZXMrKztcbiAgICB9IGVsc2UgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAvKmVzbGludCBuby1lbXB0eTowKi9cbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXl4gcGFyc2UgdGhpc1xuICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua1RpdGxlKHN0ciwgcG9zLCBtYXgpO1xuICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcmVzLm9rKSB7XG4gICAgdGl0bGUgPSByZXMuc3RyO1xuICAgIHBvcyA9IHJlcy5wb3M7XG4gICAgbGluZXMgKz0gcmVzLmxpbmVzO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gJyc7XG4gICAgcG9zID0gZGVzdEVuZFBvcztcbiAgICBsaW5lcyA9IGRlc3RFbmRMaW5lTm87XG4gIH1cblxuICAvLyBza2lwIHRyYWlsaW5nIHNwYWNlcyB1bnRpbCB0aGUgcmVzdCBvZiB0aGUgbGluZVxuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmICghaXNTcGFjZShjaCkpIHsgYnJlYWs7IH1cbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RyLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgLy8gZ2FyYmFnZSBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIGFmdGVyIHRpdGxlLFxuICAgICAgLy8gYnV0IGl0IGNvdWxkIHN0aWxsIGJlIGEgdmFsaWQgcmVmZXJlbmNlIGlmIHdlIHJvbGwgYmFja1xuICAgICAgdGl0bGUgPSAnJztcbiAgICAgIHBvcyA9IGRlc3RFbmRQb3M7XG4gICAgICBsaW5lcyA9IGRlc3RFbmRMaW5lTm87XG4gICAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNoKSkgeyBicmVhazsgfVxuICAgICAgICBwb3MrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocG9zIDwgbWF4ICYmIHN0ci5jaGFyQ29kZUF0KHBvcykgIT09IDB4MEEpIHtcbiAgICAvLyBnYXJiYWdlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShzdHIuc2xpY2UoMSwgbGFiZWxFbmQpKTtcbiAgaWYgKCFsYWJlbCkge1xuICAgIC8vIENvbW1vbk1hcmsgMC4yMCBkaXNhbGxvd3MgZW1wdHkgbGFiZWxzXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUmVmZXJlbmNlIGNhbiBub3QgdGVybWluYXRlIGFueXRoaW5nLiBUaGlzIGNoZWNrIGlzIGZvciBzYWZldHkgb25seS5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgaWYqL1xuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygc3RhdGUuZW52LnJlZmVyZW5jZXNbbGFiZWxdID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0YXRlLmVudi5yZWZlcmVuY2VzW2xhYmVsXSA9IHsgdGl0bGU6IHRpdGxlLCBocmVmOiBocmVmIH07XG4gIH1cblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgbGluZXMgKyAxO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQYXJzZXIgc3RhdGUgY2xhc3NcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9rZW4gPSByZXF1aXJlKCcuLi90b2tlbicpO1xudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbmZ1bmN0aW9uIFN0YXRlQmxvY2soc3JjLCBtZCwgZW52LCB0b2tlbnMpIHtcbiAgdmFyIGNoLCBzLCBzdGFydCwgcG9zLCBsZW4sIGluZGVudCwgb2Zmc2V0LCBpbmRlbnRfZm91bmQ7XG5cbiAgdGhpcy5zcmMgPSBzcmM7XG5cbiAgLy8gbGluayB0byBwYXJzZXIgaW5zdGFuY2VcbiAgdGhpcy5tZCAgICAgPSBtZDtcblxuICB0aGlzLmVudiA9IGVudjtcblxuICAvL1xuICAvLyBJbnRlcm5hbCBzdGF0ZSB2YXJ0aWFibGVzXG4gIC8vXG5cbiAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgdGhpcy5iTWFya3MgPSBbXTsgIC8vIGxpbmUgYmVnaW4gb2Zmc2V0cyBmb3IgZmFzdCBqdW1wc1xuICB0aGlzLmVNYXJrcyA9IFtdOyAgLy8gbGluZSBlbmQgb2Zmc2V0cyBmb3IgZmFzdCBqdW1wc1xuICB0aGlzLnRTaGlmdCA9IFtdOyAgLy8gb2Zmc2V0cyBvZiB0aGUgZmlyc3Qgbm9uLXNwYWNlIGNoYXJhY3RlcnMgKHRhYnMgbm90IGV4cGFuZGVkKVxuICB0aGlzLnNDb3VudCA9IFtdOyAgLy8gaW5kZW50cyBmb3IgZWFjaCBsaW5lICh0YWJzIGV4cGFuZGVkKVxuXG4gIC8vIEFuIGFtb3VudCBvZiB2aXJ0dWFsIHNwYWNlcyAodGFicyBleHBhbmRlZCkgYmV0d2VlbiBiZWdpbm5pbmdcbiAgLy8gb2YgZWFjaCBsaW5lIChiTWFya3MpIGFuZCByZWFsIGJlZ2lubmluZyBvZiB0aGF0IGxpbmUuXG4gIC8vXG4gIC8vIEl0IGV4aXN0cyBvbmx5IGFzIGEgaGFjayBiZWNhdXNlIGJsb2NrcXVvdGVzIG92ZXJyaWRlIGJNYXJrc1xuICAvLyBsb3NpbmcgaW5mb3JtYXRpb24gaW4gdGhlIHByb2Nlc3MuXG4gIC8vXG4gIC8vIEl0J3MgdXNlZCBvbmx5IHdoZW4gZXhwYW5kaW5nIHRhYnMsIHlvdSBjYW4gdGhpbmsgYWJvdXQgaXQgYXNcbiAgLy8gYW4gaW5pdGlhbCB0YWIgbGVuZ3RoLCBlLmcuIGJzQ291bnQ9MjEgYXBwbGllZCB0byBzdHJpbmcgYFxcdDEyM2BcbiAgLy8gbWVhbnMgZmlyc3QgdGFiIHNob3VsZCBiZSBleHBhbmRlZCB0byA0LTIxJTQgPT09IDMgc3BhY2VzLlxuICAvL1xuICB0aGlzLmJzQ291bnQgPSBbXTtcblxuICAvLyBibG9jayBwYXJzZXIgdmFyaWFibGVzXG4gIHRoaXMuYmxrSW5kZW50ICA9IDA7IC8vIHJlcXVpcmVkIGJsb2NrIGNvbnRlbnQgaW5kZW50IChmb3IgZXhhbXBsZSwgaWYgd2UgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGluc2lkZSBhIGxpc3QsIGl0IHdvdWxkIGJlIHBvc2l0aW9uZWQgYWZ0ZXIgbGlzdCBtYXJrZXIpXG4gIHRoaXMubGluZSAgICAgICA9IDA7IC8vIGxpbmUgaW5kZXggaW4gc3JjXG4gIHRoaXMubGluZU1heCAgICA9IDA7IC8vIGxpbmVzIGNvdW50XG4gIHRoaXMudGlnaHQgICAgICA9IGZhbHNlOyAgLy8gbG9vc2UvdGlnaHQgbW9kZSBmb3IgbGlzdHNcbiAgdGhpcy5kZEluZGVudCAgID0gLTE7IC8vIGluZGVudCBvZiB0aGUgY3VycmVudCBkZCBibG9jayAoLTEgaWYgdGhlcmUgaXNuJ3QgYW55KVxuICB0aGlzLmxpc3RJbmRlbnQgPSAtMTsgLy8gaW5kZW50IG9mIHRoZSBjdXJyZW50IGxpc3QgYmxvY2sgKC0xIGlmIHRoZXJlIGlzbid0IGFueSlcblxuICAvLyBjYW4gYmUgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcsICdyb290JywgJ3BhcmFncmFwaCcgb3IgJ3JlZmVyZW5jZSdcbiAgLy8gdXNlZCBpbiBsaXN0cyB0byBkZXRlcm1pbmUgaWYgdGhleSBpbnRlcnJ1cHQgYSBwYXJhZ3JhcGhcbiAgdGhpcy5wYXJlbnRUeXBlID0gJ3Jvb3QnO1xuXG4gIHRoaXMubGV2ZWwgPSAwO1xuXG4gIC8vIHJlbmRlcmVyXG4gIHRoaXMucmVzdWx0ID0gJyc7XG5cbiAgLy8gQ3JlYXRlIGNhY2hlc1xuICAvLyBHZW5lcmF0ZSBtYXJrZXJzLlxuICBzID0gdGhpcy5zcmM7XG4gIGluZGVudF9mb3VuZCA9IGZhbHNlO1xuXG4gIGZvciAoc3RhcnQgPSBwb3MgPSBpbmRlbnQgPSBvZmZzZXQgPSAwLCBsZW4gPSBzLmxlbmd0aDsgcG9zIDwgbGVuOyBwb3MrKykge1xuICAgIGNoID0gcy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoIWluZGVudF9mb3VuZCkge1xuICAgICAgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAgIGluZGVudCsrO1xuXG4gICAgICAgIGlmIChjaCA9PT0gMHgwOSkge1xuICAgICAgICAgIG9mZnNldCArPSA0IC0gb2Zmc2V0ICUgNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQrKztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGVudF9mb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAweDBBIHx8IHBvcyA9PT0gbGVuIC0gMSkge1xuICAgICAgaWYgKGNoICE9PSAweDBBKSB7IHBvcysrOyB9XG4gICAgICB0aGlzLmJNYXJrcy5wdXNoKHN0YXJ0KTtcbiAgICAgIHRoaXMuZU1hcmtzLnB1c2gocG9zKTtcbiAgICAgIHRoaXMudFNoaWZ0LnB1c2goaW5kZW50KTtcbiAgICAgIHRoaXMuc0NvdW50LnB1c2gob2Zmc2V0KTtcbiAgICAgIHRoaXMuYnNDb3VudC5wdXNoKDApO1xuXG4gICAgICBpbmRlbnRfZm91bmQgPSBmYWxzZTtcbiAgICAgIGluZGVudCA9IDA7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1c2ggZmFrZSBlbnRyeSB0byBzaW1wbGlmeSBjYWNoZSBib3VuZHMgY2hlY2tzXG4gIHRoaXMuYk1hcmtzLnB1c2gocy5sZW5ndGgpO1xuICB0aGlzLmVNYXJrcy5wdXNoKHMubGVuZ3RoKTtcbiAgdGhpcy50U2hpZnQucHVzaCgwKTtcbiAgdGhpcy5zQ291bnQucHVzaCgwKTtcbiAgdGhpcy5ic0NvdW50LnB1c2goMCk7XG5cbiAgdGhpcy5saW5lTWF4ID0gdGhpcy5iTWFya3MubGVuZ3RoIC0gMTsgLy8gZG9uJ3QgY291bnQgbGFzdCBmYWtlIGxpbmVcbn1cblxuLy8gUHVzaCBuZXcgdG9rZW4gdG8gXCJzdHJlYW1cIi5cbi8vXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHR5cGUsIHRhZywgbmVzdGluZykge1xuICB2YXIgdG9rZW4gPSBuZXcgVG9rZW4odHlwZSwgdGFnLCBuZXN0aW5nKTtcbiAgdG9rZW4uYmxvY2sgPSB0cnVlO1xuXG4gIGlmIChuZXN0aW5nIDwgMCkgdGhpcy5sZXZlbC0tOyAvLyBjbG9zaW5nIHRhZ1xuICB0b2tlbi5sZXZlbCA9IHRoaXMubGV2ZWw7XG4gIGlmIChuZXN0aW5nID4gMCkgdGhpcy5sZXZlbCsrOyAvLyBvcGVuaW5nIHRhZ1xuXG4gIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICByZXR1cm4gdG9rZW47XG59O1xuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eShsaW5lKSB7XG4gIHJldHVybiB0aGlzLmJNYXJrc1tsaW5lXSArIHRoaXMudFNoaWZ0W2xpbmVdID49IHRoaXMuZU1hcmtzW2xpbmVdO1xufTtcblxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcEVtcHR5TGluZXMgPSBmdW5jdGlvbiBza2lwRW1wdHlMaW5lcyhmcm9tKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMubGluZU1heDsgZnJvbSA8IG1heDsgZnJvbSsrKSB7XG4gICAgaWYgKHRoaXMuYk1hcmtzW2Zyb21dICsgdGhpcy50U2hpZnRbZnJvbV0gPCB0aGlzLmVNYXJrc1tmcm9tXSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmcm9tO1xufTtcblxuLy8gU2tpcCBzcGFjZXMgZnJvbSBnaXZlbiBwb3NpdGlvbi5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXMgPSBmdW5jdGlvbiBza2lwU3BhY2VzKHBvcykge1xuICB2YXIgY2g7XG5cbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5zcmMubGVuZ3RoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY2ggPSB0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKCFpc1NwYWNlKGNoKSkgeyBicmVhazsgfVxuICB9XG4gIHJldHVybiBwb3M7XG59O1xuXG4vLyBTa2lwIHNwYWNlcyBmcm9tIGdpdmVuIHBvc2l0aW9uIGluIHJldmVyc2UuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwU3BhY2VzQmFjayA9IGZ1bmN0aW9uIHNraXBTcGFjZXNCYWNrKHBvcywgbWluKSB7XG4gIGlmIChwb3MgPD0gbWluKSB7IHJldHVybiBwb3M7IH1cblxuICB3aGlsZSAocG9zID4gbWluKSB7XG4gICAgaWYgKCFpc1NwYWNlKHRoaXMuc3JjLmNoYXJDb2RlQXQoLS1wb3MpKSkgeyByZXR1cm4gcG9zICsgMTsgfVxuICB9XG4gIHJldHVybiBwb3M7XG59O1xuXG4vLyBTa2lwIGNoYXIgY29kZXMgZnJvbSBnaXZlbiBwb3NpdGlvblxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcENoYXJzID0gZnVuY3Rpb24gc2tpcENoYXJzKHBvcywgY29kZSkge1xuICBmb3IgKHZhciBtYXggPSB0aGlzLnNyYy5sZW5ndGg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAodGhpcy5zcmMuY2hhckNvZGVBdChwb3MpICE9PSBjb2RlKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgY2hhciBjb2RlcyByZXZlcnNlIGZyb20gZ2l2ZW4gcG9zaXRpb24gLSAxXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnNCYWNrID0gZnVuY3Rpb24gc2tpcENoYXJzQmFjayhwb3MsIGNvZGUsIG1pbikge1xuICBpZiAocG9zIDw9IG1pbikgeyByZXR1cm4gcG9zOyB9XG5cbiAgd2hpbGUgKHBvcyA+IG1pbikge1xuICAgIGlmIChjb2RlICE9PSB0aGlzLnNyYy5jaGFyQ29kZUF0KC0tcG9zKSkgeyByZXR1cm4gcG9zICsgMTsgfVxuICB9XG4gIHJldHVybiBwb3M7XG59O1xuXG4vLyBjdXQgbGluZXMgcmFuZ2UgZnJvbSBzb3VyY2UuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5nZXRMaW5lcyA9IGZ1bmN0aW9uIGdldExpbmVzKGJlZ2luLCBlbmQsIGluZGVudCwga2VlcExhc3RMRikge1xuICB2YXIgaSwgbGluZUluZGVudCwgY2gsIGZpcnN0LCBsYXN0LCBxdWV1ZSwgbGluZVN0YXJ0LFxuICAgICAgbGluZSA9IGJlZ2luO1xuXG4gIGlmIChiZWdpbiA+PSBlbmQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBxdWV1ZSA9IG5ldyBBcnJheShlbmQgLSBiZWdpbik7XG5cbiAgZm9yIChpID0gMDsgbGluZSA8IGVuZDsgbGluZSsrLCBpKyspIHtcbiAgICBsaW5lSW5kZW50ID0gMDtcbiAgICBsaW5lU3RhcnQgPSBmaXJzdCA9IHRoaXMuYk1hcmtzW2xpbmVdO1xuXG4gICAgaWYgKGxpbmUgKyAxIDwgZW5kIHx8IGtlZXBMYXN0TEYpIHtcbiAgICAgIC8vIE5vIG5lZWQgZm9yIGJvdW5kcyBjaGVjayBiZWNhdXNlIHdlIGhhdmUgZmFrZSBlbnRyeSBvbiB0YWlsLlxuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdO1xuICAgIH1cblxuICAgIHdoaWxlIChmaXJzdCA8IGxhc3QgJiYgbGluZUluZGVudCA8IGluZGVudCkge1xuICAgICAgY2ggPSB0aGlzLnNyYy5jaGFyQ29kZUF0KGZpcnN0KTtcblxuICAgICAgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAgIGlmIChjaCA9PT0gMHgwOSkge1xuICAgICAgICAgIGxpbmVJbmRlbnQgKz0gNCAtIChsaW5lSW5kZW50ICsgdGhpcy5ic0NvdW50W2xpbmVdKSAlIDQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZUluZGVudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0IC0gbGluZVN0YXJ0IDwgdGhpcy50U2hpZnRbbGluZV0pIHtcbiAgICAgICAgLy8gcGF0Y2hlZCB0U2hpZnQgbWFza2VkIGNoYXJhY3RlcnMgdG8gbG9vayBsaWtlIHNwYWNlcyAoYmxvY2txdW90ZXMsIGxpc3QgbWFya2VycylcbiAgICAgICAgbGluZUluZGVudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZpcnN0Kys7XG4gICAgfVxuXG4gICAgaWYgKGxpbmVJbmRlbnQgPiBpbmRlbnQpIHtcbiAgICAgIC8vIHBhcnRpYWxseSBleHBhbmRpbmcgdGFicyBpbiBjb2RlIGJsb2NrcywgZS5nICdcXHRcXHRmb29iYXInXG4gICAgICAvLyB3aXRoIGluZGVudD0yIGJlY29tZXMgJyAgXFx0Zm9vYmFyJ1xuICAgICAgcXVldWVbaV0gPSBuZXcgQXJyYXkobGluZUluZGVudCAtIGluZGVudCArIDEpLmpvaW4oJyAnKSArIHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVldWVbaV0gPSB0aGlzLnNyYy5zbGljZShmaXJzdCwgbGFzdCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpO1xufTtcblxuLy8gcmUtZXhwb3J0IFRva2VuIGNsYXNzIHRvIHVzZSBpbiBibG9jayBydWxlc1xuU3RhdGVCbG9jay5wcm90b3R5cGUuVG9rZW4gPSBUb2tlbjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlQmxvY2s7XG4iLCIvLyBHRk0gdGFibGUsIGh0dHBzOi8vZ2l0aHViLmdpdGh1Yi5jb20vZ2ZtLyN0YWJsZXMtZXh0ZW5zaW9uLVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5mdW5jdGlvbiBnZXRMaW5lKHN0YXRlLCBsaW5lKSB7XG4gIHZhciBwb3MgPSBzdGF0ZS5iTWFya3NbbGluZV0gKyBzdGF0ZS50U2hpZnRbbGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3NbbGluZV07XG5cbiAgcmV0dXJuIHN0YXRlLnNyYy5zdWJzdHIocG9zLCBtYXggLSBwb3MpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVkU3BsaXQoc3RyKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIHBvcyA9IDAsXG4gICAgICBtYXggPSBzdHIubGVuZ3RoLFxuICAgICAgY2gsXG4gICAgICBpc0VzY2FwZWQgPSBmYWxzZSxcbiAgICAgIGxhc3RQb3MgPSAwLFxuICAgICAgY3VycmVudCA9ICcnO1xuXG4gIGNoICA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGlmIChjaCA9PT0gMHg3Yy8qIHwgKi8pIHtcbiAgICAgIGlmICghaXNFc2NhcGVkKSB7XG4gICAgICAgIC8vIHBpcGUgc2VwYXJhdGluZyBjZWxscywgJ3wnXG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQgKyBzdHIuc3Vic3RyaW5nKGxhc3RQb3MsIHBvcykpO1xuICAgICAgICBjdXJyZW50ID0gJyc7XG4gICAgICAgIGxhc3RQb3MgPSBwb3MgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNjYXBlZCBwaXBlLCAnXFx8J1xuICAgICAgICBjdXJyZW50ICs9IHN0ci5zdWJzdHJpbmcobGFzdFBvcywgcG9zIC0gMSk7XG4gICAgICAgIGxhc3RQb3MgPSBwb3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNFc2NhcGVkID0gKGNoID09PSAweDVjLyogXFwgKi8pO1xuICAgIHBvcysrO1xuXG4gICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICB9XG5cbiAgcmVzdWx0LnB1c2goY3VycmVudCArIHN0ci5zdWJzdHJpbmcobGFzdFBvcykpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0YWJsZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBsaW5lVGV4dCwgcG9zLCBpLCBsLCBuZXh0TGluZSwgY29sdW1ucywgY29sdW1uQ291bnQsIHRva2VuLFxuICAgICAgYWxpZ25zLCB0LCB0YWJsZUxpbmVzLCB0Ym9keUxpbmVzLCBvbGRQYXJlbnRUeXBlLCB0ZXJtaW5hdGUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsIGZpcnN0Q2gsIHNlY29uZENoO1xuXG4gIC8vIHNob3VsZCBoYXZlIGF0IGxlYXN0IHR3byBsaW5lc1xuICBpZiAoc3RhcnRMaW5lICsgMiA+IGVuZExpbmUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSBzZWNvbmQgbGluZSBzaG91bGQgYmUgJ3wnLCAnLScsICc6JyxcbiAgLy8gYW5kIG5vIG90aGVyIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQgYnV0IHNwYWNlcztcbiAgLy8gYmFzaWNhbGx5LCB0aGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIC9eWy06fF1bLTp8XFxzXSokLyByZWdleHBcblxuICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgaWYgKHBvcyA+PSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGZpcnN0Q2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gIGlmIChmaXJzdENoICE9PSAweDdDLyogfCAqLyAmJiBmaXJzdENoICE9PSAweDJELyogLSAqLyAmJiBmaXJzdENoICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAocG9zID49IHN0YXRlLmVNYXJrc1tuZXh0TGluZV0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc2Vjb25kQ2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gIGlmIChzZWNvbmRDaCAhPT0gMHg3Qy8qIHwgKi8gJiYgc2Vjb25kQ2ggIT09IDB4MkQvKiAtICovICYmIHNlY29uZENoICE9PSAweDNBLyogOiAqLyAmJiAhaXNTcGFjZShzZWNvbmRDaCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpZiBmaXJzdCBjaGFyYWN0ZXIgaXMgJy0nLCB0aGVuIHNlY29uZCBjaGFyYWN0ZXIgbXVzdCBub3QgYmUgYSBzcGFjZVxuICAvLyAoZHVlIHRvIHBhcnNpbmcgYW1iaWd1aXR5IHdpdGggbGlzdClcbiAgaWYgKGZpcnN0Q2ggPT09IDB4MkQvKiAtICovICYmIGlzU3BhY2Uoc2Vjb25kQ2gpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHdoaWxlIChwb3MgPCBzdGF0ZS5lTWFya3NbbmV4dExpbmVdKSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKGNoICE9PSAweDdDLyogfCAqLyAmJiBjaCAhPT0gMHgyRC8qIC0gKi8gJiYgY2ggIT09IDB4M0EvKiA6ICovICYmICFpc1NwYWNlKGNoKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBzdGFydExpbmUgKyAxKTtcblxuICBjb2x1bW5zID0gbGluZVRleHQuc3BsaXQoJ3wnKTtcbiAgYWxpZ25zID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdCA9IGNvbHVtbnNbaV0udHJpbSgpO1xuICAgIGlmICghdCkge1xuICAgICAgLy8gYWxsb3cgZW1wdHkgY29sdW1ucyBiZWZvcmUgYW5kIGFmdGVyIHRhYmxlLCBidXQgbm90IGluIGJldHdlZW4gY29sdW1ucztcbiAgICAgIC8vIGUuZy4gYWxsb3cgYCB8LS0tfCBgLCBkaXNhbGxvdyBgIC0tLXx8LS0tIGBcbiAgICAgIGlmIChpID09PSAwIHx8IGkgPT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIS9eOj8tKzo/JC8udGVzdCh0KSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodC5jaGFyQ29kZUF0KHQubGVuZ3RoIC0gMSkgPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBhbGlnbnMucHVzaCh0LmNoYXJDb2RlQXQoMCkgPT09IDB4M0EvKiA6ICovID8gJ2NlbnRlcicgOiAncmlnaHQnKTtcbiAgICB9IGVsc2UgaWYgKHQuY2hhckNvZGVBdCgwKSA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGFsaWducy5wdXNoKCdsZWZ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsaWducy5wdXNoKCcnKTtcbiAgICB9XG4gIH1cblxuICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIHN0YXJ0TGluZSkudHJpbSgpO1xuICBpZiAobGluZVRleHQuaW5kZXhPZignfCcpID09PSAtMSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbHVtbnMgPSBlc2NhcGVkU3BsaXQobGluZVRleHQpO1xuICBpZiAoY29sdW1ucy5sZW5ndGggJiYgY29sdW1uc1swXSA9PT0gJycpIGNvbHVtbnMuc2hpZnQoKTtcbiAgaWYgKGNvbHVtbnMubGVuZ3RoICYmIGNvbHVtbnNbY29sdW1ucy5sZW5ndGggLSAxXSA9PT0gJycpIGNvbHVtbnMucG9wKCk7XG5cbiAgLy8gaGVhZGVyIHJvdyB3aWxsIGRlZmluZSBhbiBhbW91bnQgb2YgY29sdW1ucyBpbiB0aGUgZW50aXJlIHRhYmxlLFxuICAvLyBhbmQgYWxpZ24gcm93IHNob3VsZCBiZSBleGFjdGx5IHRoZSBzYW1lICh0aGUgcmVzdCBvZiB0aGUgcm93cyBjYW4gZGlmZmVyKVxuICBjb2x1bW5Db3VudCA9IGNvbHVtbnMubGVuZ3RoO1xuICBpZiAoY29sdW1uQ291bnQgPT09IDAgfHwgY29sdW1uQ291bnQgIT09IGFsaWducy5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3RhYmxlJztcblxuICAvLyB1c2UgJ2Jsb2NrcXVvdGUnIGxpc3RzIGZvciB0ZXJtaW5hdGlvbiBiZWNhdXNlIGl0J3NcbiAgLy8gdGhlIG1vc3Qgc2ltaWxhciB0byB0YWJsZXNcbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ2Jsb2NrcXVvdGUnKTtcblxuICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0YWJsZV9vcGVuJywgJ3RhYmxlJywgMSk7XG4gIHRva2VuLm1hcCA9IHRhYmxlTGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdO1xuXG4gIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3RoZWFkX29wZW4nLCAndGhlYWQnLCAxKTtcbiAgdG9rZW4ubWFwID0gWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXTtcblxuICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0cl9vcGVuJywgJ3RyJywgMSk7XG4gIHRva2VuLm1hcCA9IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF07XG5cbiAgZm9yIChpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ3RoX29wZW4nLCAndGgnLCAxKTtcbiAgICBpZiAoYWxpZ25zW2ldKSB7XG4gICAgICB0b2tlbi5hdHRycyAgPSBbIFsgJ3N0eWxlJywgJ3RleHQtYWxpZ246JyArIGFsaWduc1tpXSBdIF07XG4gICAgfVxuXG4gICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbmxpbmUnLCAnJywgMCk7XG4gICAgdG9rZW4uY29udGVudCAgPSBjb2x1bW5zW2ldLnRyaW0oKTtcbiAgICB0b2tlbi5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0aF9jbG9zZScsICd0aCcsIC0xKTtcbiAgfVxuXG4gIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3RyX2Nsb3NlJywgJ3RyJywgLTEpO1xuICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0aGVhZF9jbG9zZScsICd0aGVhZCcsIC0xKTtcblxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMjsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICAgIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgbmV4dExpbmUpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmVUZXh0KSB7IGJyZWFrOyB9XG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyBicmVhazsgfVxuICAgIGNvbHVtbnMgPSBlc2NhcGVkU3BsaXQobGluZVRleHQpO1xuICAgIGlmIChjb2x1bW5zLmxlbmd0aCAmJiBjb2x1bW5zWzBdID09PSAnJykgY29sdW1ucy5zaGlmdCgpO1xuICAgIGlmIChjb2x1bW5zLmxlbmd0aCAmJiBjb2x1bW5zW2NvbHVtbnMubGVuZ3RoIC0gMV0gPT09ICcnKSBjb2x1bW5zLnBvcCgpO1xuXG4gICAgaWYgKG5leHRMaW5lID09PSBzdGFydExpbmUgKyAyKSB7XG4gICAgICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0Ym9keV9vcGVuJywgJ3Rib2R5JywgMSk7XG4gICAgICB0b2tlbi5tYXAgPSB0Ym9keUxpbmVzID0gWyBzdGFydExpbmUgKyAyLCAwIF07XG4gICAgfVxuXG4gICAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndHJfb3BlbicsICd0cicsIDEpO1xuICAgIHRva2VuLm1hcCA9IFsgbmV4dExpbmUsIG5leHRMaW5lICsgMSBdO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgndGRfb3BlbicsICd0ZCcsIDEpO1xuICAgICAgaWYgKGFsaWduc1tpXSkge1xuICAgICAgICB0b2tlbi5hdHRycyAgPSBbIFsgJ3N0eWxlJywgJ3RleHQtYWxpZ246JyArIGFsaWduc1tpXSBdIF07XG4gICAgICB9XG5cbiAgICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaW5saW5lJywgJycsIDApO1xuICAgICAgdG9rZW4uY29udGVudCAgPSBjb2x1bW5zW2ldID8gY29sdW1uc1tpXS50cmltKCkgOiAnJztcbiAgICAgIHRva2VuLmNoaWxkcmVuID0gW107XG5cbiAgICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgndGRfY2xvc2UnLCAndGQnLCAtMSk7XG4gICAgfVxuICAgIHRva2VuID0gc3RhdGUucHVzaCgndHJfY2xvc2UnLCAndHInLCAtMSk7XG4gIH1cblxuICBpZiAodGJvZHlMaW5lcykge1xuICAgIHRva2VuID0gc3RhdGUucHVzaCgndGJvZHlfY2xvc2UnLCAndGJvZHknLCAtMSk7XG4gICAgdGJvZHlMaW5lc1sxXSA9IG5leHRMaW5lO1xuICB9XG5cbiAgdG9rZW4gPSBzdGF0ZS5wdXNoKCd0YWJsZV9jbG9zZScsICd0YWJsZScsIC0xKTtcbiAgdGFibGVMaW5lc1sxXSA9IG5leHRMaW5lO1xuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJsb2NrKHN0YXRlKSB7XG4gIHZhciB0b2tlbjtcblxuICBpZiAoc3RhdGUuaW5saW5lTW9kZSkge1xuICAgIHRva2VuICAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCdpbmxpbmUnLCAnJywgMCk7XG4gICAgdG9rZW4uY29udGVudCAgPSBzdGF0ZS5zcmM7XG4gICAgdG9rZW4ubWFwICAgICAgPSBbIDAsIDEgXTtcbiAgICB0b2tlbi5jaGlsZHJlbiA9IFtdO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHRva2VuKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5tZC5ibG9jay5wYXJzZShzdGF0ZS5zcmMsIHN0YXRlLm1kLCBzdGF0ZS5lbnYsIHN0YXRlLnRva2Vucyk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5saW5lKHN0YXRlKSB7XG4gIHZhciB0b2tlbnMgPSBzdGF0ZS50b2tlbnMsIHRvaywgaSwgbDtcblxuICAvLyBQYXJzZSBpbmxpbmVzXG4gIGZvciAoaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdG9rID0gdG9rZW5zW2ldO1xuICAgIGlmICh0b2sudHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHN0YXRlLm1kLmlubGluZS5wYXJzZSh0b2suY29udGVudCwgc3RhdGUubWQsIHN0YXRlLmVudiwgdG9rLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBSZXBsYWNlIGxpbmstbGlrZSB0ZXh0cyB3aXRoIGxpbmsgbm9kZXMuXG4vL1xuLy8gQ3VycmVudGx5IHJlc3RyaWN0ZWQgYnkgYG1kLnZhbGlkYXRlTGluaygpYCB0byBodHRwL2h0dHBzL2Z0cFxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgYXJyYXlSZXBsYWNlQXQgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5hcnJheVJlcGxhY2VBdDtcblxuXG5mdW5jdGlvbiBpc0xpbmtPcGVuKHN0cikge1xuICByZXR1cm4gL148YVs+XFxzXS9pLnRlc3Qoc3RyKTtcbn1cbmZ1bmN0aW9uIGlzTGlua0Nsb3NlKHN0cikge1xuICByZXR1cm4gL148XFwvYVxccyo+L2kudGVzdChzdHIpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlua2lmeShzdGF0ZSkge1xuICB2YXIgaSwgaiwgbCwgdG9rZW5zLCB0b2tlbiwgY3VycmVudFRva2VuLCBub2RlcywgbG4sIHRleHQsIHBvcywgbGFzdFBvcyxcbiAgICAgIGxldmVsLCBodG1sTGlua0xldmVsLCB1cmwsIGZ1bGxVcmwsIHVybFRleHQsXG4gICAgICBibG9ja1Rva2VucyA9IHN0YXRlLnRva2VucyxcbiAgICAgIGxpbmtzO1xuXG4gIGlmICghc3RhdGUubWQub3B0aW9ucy5saW5raWZ5KSB7IHJldHVybjsgfVxuXG4gIGZvciAoaiA9IDAsIGwgPSBibG9ja1Rva2Vucy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICBpZiAoYmxvY2tUb2tlbnNbal0udHlwZSAhPT0gJ2lubGluZScgfHxcbiAgICAgICAgIXN0YXRlLm1kLmxpbmtpZnkucHJldGVzdChibG9ja1Rva2Vuc1tqXS5jb250ZW50KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gYmxvY2tUb2tlbnNbal0uY2hpbGRyZW47XG5cbiAgICBodG1sTGlua0xldmVsID0gMDtcblxuICAgIC8vIFdlIHNjYW4gZnJvbSB0aGUgZW5kLCB0byBrZWVwIHBvc2l0aW9uIHdoZW4gbmV3IHRhZ3MgYWRkZWQuXG4gICAgLy8gVXNlIHJldmVyc2VkIGxvZ2ljIGluIGxpbmtzIHN0YXJ0L2VuZCBtYXRjaFxuICAgIGZvciAoaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY3VycmVudFRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAvLyBTa2lwIGNvbnRlbnQgb2YgbWFya2Rvd24gbGlua3NcbiAgICAgIGlmIChjdXJyZW50VG9rZW4udHlwZSA9PT0gJ2xpbmtfY2xvc2UnKSB7XG4gICAgICAgIGktLTtcbiAgICAgICAgd2hpbGUgKHRva2Vuc1tpXS5sZXZlbCAhPT0gY3VycmVudFRva2VuLmxldmVsICYmIHRva2Vuc1tpXS50eXBlICE9PSAnbGlua19vcGVuJykge1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCBjb250ZW50IG9mIGh0bWwgdGFnIGxpbmtzXG4gICAgICBpZiAoY3VycmVudFRva2VuLnR5cGUgPT09ICdodG1sX2lubGluZScpIHtcbiAgICAgICAgaWYgKGlzTGlua09wZW4oY3VycmVudFRva2VuLmNvbnRlbnQpICYmIGh0bWxMaW5rTGV2ZWwgPiAwKSB7XG4gICAgICAgICAgaHRtbExpbmtMZXZlbC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xpbmtDbG9zZShjdXJyZW50VG9rZW4uY29udGVudCkpIHtcbiAgICAgICAgICBodG1sTGlua0xldmVsKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChodG1sTGlua0xldmVsID4gMCkgeyBjb250aW51ZTsgfVxuXG4gICAgICBpZiAoY3VycmVudFRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiBzdGF0ZS5tZC5saW5raWZ5LnRlc3QoY3VycmVudFRva2VuLmNvbnRlbnQpKSB7XG5cbiAgICAgICAgdGV4dCA9IGN1cnJlbnRUb2tlbi5jb250ZW50O1xuICAgICAgICBsaW5rcyA9IHN0YXRlLm1kLmxpbmtpZnkubWF0Y2godGV4dCk7XG5cbiAgICAgICAgLy8gTm93IHNwbGl0IHN0cmluZyB0byBub2Rlc1xuICAgICAgICBub2RlcyA9IFtdO1xuICAgICAgICBsZXZlbCA9IGN1cnJlbnRUb2tlbi5sZXZlbDtcbiAgICAgICAgbGFzdFBvcyA9IDA7XG5cbiAgICAgICAgZm9yIChsbiA9IDA7IGxuIDwgbGlua3MubGVuZ3RoOyBsbisrKSB7XG5cbiAgICAgICAgICB1cmwgPSBsaW5rc1tsbl0udXJsO1xuICAgICAgICAgIGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHVybCk7XG4gICAgICAgICAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgY29udGludWU7IH1cblxuICAgICAgICAgIHVybFRleHQgPSBsaW5rc1tsbl0udGV4dDtcblxuICAgICAgICAgIC8vIExpbmtpZmllciBtaWdodCBzZW5kIHJhdyBob3N0bmFtZXMgbGlrZSBcImV4YW1wbGUuY29tXCIsIHdoZXJlIHVybFxuICAgICAgICAgIC8vIHN0YXJ0cyB3aXRoIGRvbWFpbiBuYW1lLiBTbyB3ZSBwcmVwZW5kIGh0dHA6Ly8gaW4gdGhvc2UgY2FzZXMsXG4gICAgICAgICAgLy8gYW5kIHJlbW92ZSBpdCBhZnRlcndhcmRzLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgaWYgKCFsaW5rc1tsbl0uc2NoZW1hKSB7XG4gICAgICAgICAgICB1cmxUZXh0ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQoJ2h0dHA6Ly8nICsgdXJsVGV4dCkucmVwbGFjZSgvXmh0dHA6XFwvXFwvLywgJycpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGlua3NbbG5dLnNjaGVtYSA9PT0gJ21haWx0bzonICYmICEvXm1haWx0bzovaS50ZXN0KHVybFRleHQpKSB7XG4gICAgICAgICAgICB1cmxUZXh0ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQoJ21haWx0bzonICsgdXJsVGV4dCkucmVwbGFjZSgvXm1haWx0bzovLCAnJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybFRleHQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCh1cmxUZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwb3MgPSBsaW5rc1tsbl0uaW5kZXg7XG5cbiAgICAgICAgICBpZiAocG9zID4gbGFzdFBvcykge1xuICAgICAgICAgICAgdG9rZW4gICAgICAgICA9IG5ldyBzdGF0ZS5Ub2tlbigndGV4dCcsICcnLCAwKTtcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSB0ZXh0LnNsaWNlKGxhc3RQb3MsIHBvcyk7XG4gICAgICAgICAgICB0b2tlbi5sZXZlbCAgID0gbGV2ZWw7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b2tlbiAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCdsaW5rX29wZW4nLCAnYScsIDEpO1xuICAgICAgICAgIHRva2VuLmF0dHJzICAgPSBbIFsgJ2hyZWYnLCBmdWxsVXJsIF0gXTtcbiAgICAgICAgICB0b2tlbi5sZXZlbCAgID0gbGV2ZWwrKztcbiAgICAgICAgICB0b2tlbi5tYXJrdXAgID0gJ2xpbmtpZnknO1xuICAgICAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG4gICAgICAgICAgbm9kZXMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICB0b2tlbiAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApO1xuICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSB1cmxUZXh0O1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbDtcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcblxuICAgICAgICAgIHRva2VuICAgICAgICAgPSBuZXcgc3RhdGUuVG9rZW4oJ2xpbmtfY2xvc2UnLCAnYScsIC0xKTtcbiAgICAgICAgICB0b2tlbi5sZXZlbCAgID0gLS1sZXZlbDtcbiAgICAgICAgICB0b2tlbi5tYXJrdXAgID0gJ2xpbmtpZnknO1xuICAgICAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG4gICAgICAgICAgbm9kZXMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICBsYXN0UG9zID0gbGlua3NbbG5dLmxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdFBvcyA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgdG9rZW4gICAgICAgICA9IG5ldyBzdGF0ZS5Ub2tlbigndGV4dCcsICcnLCAwKTtcbiAgICAgICAgICB0b2tlbi5jb250ZW50ID0gdGV4dC5zbGljZShsYXN0UG9zKTtcbiAgICAgICAgICB0b2tlbi5sZXZlbCAgID0gbGV2ZWw7XG4gICAgICAgICAgbm9kZXMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbm9kZVxuICAgICAgICBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlbiA9IHRva2VucyA9IGFycmF5UmVwbGFjZUF0KHRva2VucywgaSwgbm9kZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIi8vIE5vcm1hbGl6ZSBpbnB1dCBzdHJpbmdcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNsaW5lLWVuZGluZ1xudmFyIE5FV0xJTkVTX1JFICA9IC9cXHJcXG4/fFxcbi9nO1xudmFyIE5VTExfUkUgICAgICA9IC9cXDAvZztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShzdGF0ZSkge1xuICB2YXIgc3RyO1xuXG4gIC8vIE5vcm1hbGl6ZSBuZXdsaW5lc1xuICBzdHIgPSBzdGF0ZS5zcmMucmVwbGFjZShORVdMSU5FU19SRSwgJ1xcbicpO1xuXG4gIC8vIFJlcGxhY2UgTlVMTCBjaGFyYWN0ZXJzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKE5VTExfUkUsICdcXHVGRkZEJyk7XG5cbiAgc3RhdGUuc3JjID0gc3RyO1xufTtcbiIsIi8vIFNpbXBsZSB0eXBvZ3JhcGhpYyByZXBsYWNlbWVudHNcbi8vXG4vLyAoYykgKEMpIOKGkiDCqVxuLy8gKHRtKSAoVE0pIOKGkiDihKJcbi8vIChyKSAoUikg4oaSIMKuXG4vLyArLSDihpIgwrFcbi8vIChwKSAoUCkgLT4gwqdcbi8vIC4uLiDihpIg4oCmIChhbHNvID8uLi4uIOKGkiA/Li4sICEuLi4uIOKGkiAhLi4pXG4vLyA/Pz8/Pz8/PyDihpIgPz8/LCAhISEhISDihpIgISEhLCBgLCxgIOKGkiBgLGBcbi8vIC0tIOKGkiAmbmRhc2g7LCAtLS0g4oaSICZtZGFzaDtcbi8vXG4ndXNlIHN0cmljdCc7XG5cbi8vIFRPRE86XG4vLyAtIGZyYWN0aW9uYWxzIDEvMiwgMS80LCAzLzQgLT4gwr0sIMK8LCDCvlxuLy8gLSBtaWx0aXBsaWNhdGlvbiAyIHggNCAtPiAyIMOXIDRcblxudmFyIFJBUkVfUkUgPSAvXFwrLXxcXC5cXC58XFw/XFw/XFw/XFw/fCEhISF8LCx8LS0vO1xuXG4vLyBXb3JrYXJvdW5kIGZvciBwaGFudG9tanMgLSBuZWVkIHJlZ2V4IHdpdGhvdXQgL2cgZmxhZyxcbi8vIG9yIHJvb3QgY2hlY2sgd2lsbCBmYWlsIGV2ZXJ5IHNlY29uZCB0aW1lXG52YXIgU0NPUEVEX0FCQlJfVEVTVF9SRSA9IC9cXCgoY3x0bXxyfHApXFwpL2k7XG5cbnZhciBTQ09QRURfQUJCUl9SRSA9IC9cXCgoY3x0bXxyfHApXFwpL2lnO1xudmFyIFNDT1BFRF9BQkJSID0ge1xuICBjOiAnwqknLFxuICByOiAnwq4nLFxuICBwOiAnwqcnLFxuICB0bTogJ+KEoidcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VGbihtYXRjaCwgbmFtZSkge1xuICByZXR1cm4gU0NPUEVEX0FCQlJbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZV9zY29wZWQoaW5saW5lVG9rZW5zKSB7XG4gIHZhciBpLCB0b2tlbiwgaW5zaWRlX2F1dG9saW5rID0gMDtcblxuICBmb3IgKGkgPSBpbmxpbmVUb2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB0b2tlbiA9IGlubGluZVRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbi50eXBlID09PSAndGV4dCcgJiYgIWluc2lkZV9hdXRvbGluaykge1xuICAgICAgdG9rZW4uY29udGVudCA9IHRva2VuLmNvbnRlbnQucmVwbGFjZShTQ09QRURfQUJCUl9SRSwgcmVwbGFjZUZuKTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmtfb3BlbicgJiYgdG9rZW4uaW5mbyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpbnNpZGVfYXV0b2xpbmstLTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmtfY2xvc2UnICYmIHRva2VuLmluZm8gPT09ICdhdXRvJykge1xuICAgICAgaW5zaWRlX2F1dG9saW5rKys7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VfcmFyZShpbmxpbmVUb2tlbnMpIHtcbiAgdmFyIGksIHRva2VuLCBpbnNpZGVfYXV0b2xpbmsgPSAwO1xuXG4gIGZvciAoaSA9IGlubGluZVRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHRva2VuID0gaW5saW5lVG9rZW5zW2ldO1xuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiAhaW5zaWRlX2F1dG9saW5rKSB7XG4gICAgICBpZiAoUkFSRV9SRS50ZXN0KHRva2VuLmNvbnRlbnQpKSB7XG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSB0b2tlbi5jb250ZW50XG4gICAgICAgICAgLnJlcGxhY2UoL1xcKy0vZywgJ8KxJylcbiAgICAgICAgICAvLyAuLiwgLi4uLCAuLi4uLi4uIC0+IOKAplxuICAgICAgICAgIC8vIGJ1dCA/Li4uLi4gJiAhLi4uLi4gLT4gPy4uICYgIS4uXG4gICAgICAgICAgLnJlcGxhY2UoL1xcLnsyLH0vZywgJ+KApicpLnJlcGxhY2UoLyhbPyFdKeKApi9nLCAnJDEuLicpXG4gICAgICAgICAgLnJlcGxhY2UoLyhbPyFdKXs0LH0vZywgJyQxJDEkMScpLnJlcGxhY2UoLyx7Mix9L2csICcsJylcbiAgICAgICAgICAvLyBlbS1kYXNoXG4gICAgICAgICAgLnJlcGxhY2UoLyhefFteLV0pLS0tKD89W14tXXwkKS9tZywgJyQxXFx1MjAxNCcpXG4gICAgICAgICAgLy8gZW4tZGFzaFxuICAgICAgICAgIC5yZXBsYWNlKC8oXnxcXHMpLS0oPz1cXHN8JCkvbWcsICckMVxcdTIwMTMnKVxuICAgICAgICAgIC5yZXBsYWNlKC8oXnxbXi1cXHNdKS0tKD89W14tXFxzXXwkKS9tZywgJyQxXFx1MjAxMycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19vcGVuJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluay0tO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19jbG9zZScgJiYgdG9rZW4uaW5mbyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpbnNpZGVfYXV0b2xpbmsrKztcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RhdGUpIHtcbiAgdmFyIGJsa0lkeDtcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMudHlwb2dyYXBoZXIpIHsgcmV0dXJuOyB9XG5cbiAgZm9yIChibGtJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMTsgYmxrSWR4ID49IDA7IGJsa0lkeC0tKSB7XG5cbiAgICBpZiAoc3RhdGUudG9rZW5zW2Jsa0lkeF0udHlwZSAhPT0gJ2lubGluZScpIHsgY29udGludWU7IH1cblxuICAgIGlmIChTQ09QRURfQUJCUl9URVNUX1JFLnRlc3Qoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY29udGVudCkpIHtcbiAgICAgIHJlcGxhY2Vfc2NvcGVkKHN0YXRlLnRva2Vuc1tibGtJZHhdLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBpZiAoUkFSRV9SRS50ZXN0KHN0YXRlLnRva2Vuc1tibGtJZHhdLmNvbnRlbnQpKSB7XG4gICAgICByZXBsYWNlX3JhcmUoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW4pO1xuICAgIH1cblxuICB9XG59O1xuIiwiLy8gQ29udmVydCBzdHJhaWdodCBxdW90YXRpb24gbWFya3MgdG8gdHlwb2dyYXBoaWMgb25lc1xuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgaXNXaGl0ZVNwYWNlICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1doaXRlU3BhY2U7XG52YXIgaXNQdW5jdENoYXIgICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1B1bmN0Q2hhcjtcbnZhciBpc01kQXNjaWlQdW5jdCA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzTWRBc2NpaVB1bmN0O1xuXG52YXIgUVVPVEVfVEVTVF9SRSA9IC9bJ1wiXS87XG52YXIgUVVPVEVfUkUgPSAvWydcIl0vZztcbnZhciBBUE9TVFJPUEhFID0gJ1xcdTIwMTknOyAvKiDigJkgKi9cblxuXG5mdW5jdGlvbiByZXBsYWNlQXQoc3RyLCBpbmRleCwgY2gpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaW5kZXgpICsgY2ggKyBzdHIuc3Vic3RyKGluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NfaW5saW5lcyh0b2tlbnMsIHN0YXRlKSB7XG4gIHZhciBpLCB0b2tlbiwgdGV4dCwgdCwgcG9zLCBtYXgsIHRoaXNMZXZlbCwgaXRlbSwgbGFzdENoYXIsIG5leHRDaGFyLFxuICAgICAgaXNMYXN0UHVuY3RDaGFyLCBpc05leHRQdW5jdENoYXIsIGlzTGFzdFdoaXRlU3BhY2UsIGlzTmV4dFdoaXRlU3BhY2UsXG4gICAgICBjYW5PcGVuLCBjYW5DbG9zZSwgaiwgaXNTaW5nbGUsIHN0YWNrLCBvcGVuUXVvdGUsIGNsb3NlUXVvdGU7XG5cbiAgc3RhY2sgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICB0aGlzTGV2ZWwgPSB0b2tlbnNbaV0ubGV2ZWw7XG5cbiAgICBmb3IgKGogPSBzdGFjay5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgaWYgKHN0YWNrW2pdLmxldmVsIDw9IHRoaXNMZXZlbCkgeyBicmVhazsgfVxuICAgIH1cbiAgICBzdGFjay5sZW5ndGggPSBqICsgMTtcblxuICAgIGlmICh0b2tlbi50eXBlICE9PSAndGV4dCcpIHsgY29udGludWU7IH1cblxuICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuICAgIHBvcyA9IDA7XG4gICAgbWF4ID0gdGV4dC5sZW5ndGg7XG5cbiAgICAvKmVzbGludCBuby1sYWJlbHM6MCxibG9jay1zY29wZWQtdmFyOjAqL1xuICAgIE9VVEVSOlxuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIFFVT1RFX1JFLmxhc3RJbmRleCA9IHBvcztcbiAgICAgIHQgPSBRVU9URV9SRS5leGVjKHRleHQpO1xuICAgICAgaWYgKCF0KSB7IGJyZWFrOyB9XG5cbiAgICAgIGNhbk9wZW4gPSBjYW5DbG9zZSA9IHRydWU7XG4gICAgICBwb3MgPSB0LmluZGV4ICsgMTtcbiAgICAgIGlzU2luZ2xlID0gKHRbMF0gPT09IFwiJ1wiKTtcblxuICAgICAgLy8gRmluZCBwcmV2aW91cyBjaGFyYWN0ZXIsXG4gICAgICAvLyBkZWZhdWx0IHRvIHNwYWNlIGlmIGl0J3MgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZVxuICAgICAgLy9cbiAgICAgIGxhc3RDaGFyID0gMHgyMDtcblxuICAgICAgaWYgKHQuaW5kZXggLSAxID49IDApIHtcbiAgICAgICAgbGFzdENoYXIgPSB0ZXh0LmNoYXJDb2RlQXQodC5pbmRleCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChqID0gaSAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgaWYgKHRva2Vuc1tqXS50eXBlID09PSAnc29mdGJyZWFrJyB8fCB0b2tlbnNbal0udHlwZSA9PT0gJ2hhcmRicmVhaycpIGJyZWFrOyAvLyBsYXN0Q2hhciBkZWZhdWx0cyB0byAweDIwXG4gICAgICAgICAgaWYgKCF0b2tlbnNbal0uY29udGVudCkgY29udGludWU7IC8vIHNob3VsZCBza2lwIGFsbCB0b2tlbnMgZXhjZXB0ICd0ZXh0JywgJ2h0bWxfaW5saW5lJyBvciAnY29kZV9pbmxpbmUnXG5cbiAgICAgICAgICBsYXN0Q2hhciA9IHRva2Vuc1tqXS5jb250ZW50LmNoYXJDb2RlQXQodG9rZW5zW2pdLmNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBuZXh0IGNoYXJhY3RlcixcbiAgICAgIC8vIGRlZmF1bHQgdG8gc3BhY2UgaWYgaXQncyB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAvL1xuICAgICAgbmV4dENoYXIgPSAweDIwO1xuXG4gICAgICBpZiAocG9zIDwgbWF4KSB7XG4gICAgICAgIG5leHRDaGFyID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICh0b2tlbnNbal0udHlwZSA9PT0gJ3NvZnRicmVhaycgfHwgdG9rZW5zW2pdLnR5cGUgPT09ICdoYXJkYnJlYWsnKSBicmVhazsgLy8gbmV4dENoYXIgZGVmYXVsdHMgdG8gMHgyMFxuICAgICAgICAgIGlmICghdG9rZW5zW2pdLmNvbnRlbnQpIGNvbnRpbnVlOyAvLyBzaG91bGQgc2tpcCBhbGwgdG9rZW5zIGV4Y2VwdCAndGV4dCcsICdodG1sX2lubGluZScgb3IgJ2NvZGVfaW5saW5lJ1xuXG4gICAgICAgICAgbmV4dENoYXIgPSB0b2tlbnNbal0uY29udGVudC5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlzTGFzdFB1bmN0Q2hhciA9IGlzTWRBc2NpaVB1bmN0KGxhc3RDaGFyKSB8fCBpc1B1bmN0Q2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKGxhc3RDaGFyKSk7XG4gICAgICBpc05leHRQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChuZXh0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhcikpO1xuXG4gICAgICBpc0xhc3RXaGl0ZVNwYWNlID0gaXNXaGl0ZVNwYWNlKGxhc3RDaGFyKTtcbiAgICAgIGlzTmV4dFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobmV4dENoYXIpO1xuXG4gICAgICBpZiAoaXNOZXh0V2hpdGVTcGFjZSkge1xuICAgICAgICBjYW5PcGVuID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGlzTmV4dFB1bmN0Q2hhcikge1xuICAgICAgICBpZiAoIShpc0xhc3RXaGl0ZVNwYWNlIHx8IGlzTGFzdFB1bmN0Q2hhcikpIHtcbiAgICAgICAgICBjYW5PcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzTGFzdFdoaXRlU3BhY2UpIHtcbiAgICAgICAgY2FuQ2xvc2UgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UHVuY3RDaGFyKSB7XG4gICAgICAgIGlmICghKGlzTmV4dFdoaXRlU3BhY2UgfHwgaXNOZXh0UHVuY3RDaGFyKSkge1xuICAgICAgICAgIGNhbkNsb3NlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRDaGFyID09PSAweDIyIC8qIFwiICovICYmIHRbMF0gPT09ICdcIicpIHtcbiAgICAgICAgaWYgKGxhc3RDaGFyID49IDB4MzAgLyogMCAqLyAmJiBsYXN0Q2hhciA8PSAweDM5IC8qIDkgKi8pIHtcbiAgICAgICAgICAvLyBzcGVjaWFsIGNhc2U6IDFcIlwiIC0gY291bnQgZmlyc3QgcXVvdGUgYXMgYW4gaW5jaFxuICAgICAgICAgIGNhbkNsb3NlID0gY2FuT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5PcGVuICYmIGNhbkNsb3NlKSB7XG4gICAgICAgIC8vIFJlcGxhY2UgcXVvdGVzIGluIHRoZSBtaWRkbGUgb2YgcHVuY3R1YXRpb24gc2VxdWVuY2UsIGJ1dCBub3RcbiAgICAgICAgLy8gaW4gdGhlIG1pZGRsZSBvZiB0aGUgd29yZHMsIGkuZS46XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDEuIGZvbyBcIiBiYXIgXCIgYmF6IC0gbm90IHJlcGxhY2VkXG4gICAgICAgIC8vIDIuIGZvby1cIi1iYXItXCItYmF6IC0gcmVwbGFjZWRcbiAgICAgICAgLy8gMy4gZm9vXCJiYXJcImJheiAgICAgLSBub3QgcmVwbGFjZWRcbiAgICAgICAgLy9cbiAgICAgICAgY2FuT3BlbiA9IGlzTGFzdFB1bmN0Q2hhcjtcbiAgICAgICAgY2FuQ2xvc2UgPSBpc05leHRQdW5jdENoYXI7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2FuT3BlbiAmJiAhY2FuQ2xvc2UpIHtcbiAgICAgICAgLy8gbWlkZGxlIG9mIHdvcmRcbiAgICAgICAgaWYgKGlzU2luZ2xlKSB7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBBUE9TVFJPUEhFKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbkNsb3NlKSB7XG4gICAgICAgIC8vIHRoaXMgY291bGQgYmUgYSBjbG9zaW5nIHF1b3RlLCByZXdpbmQgdGhlIHN0YWNrIHRvIGdldCBhIG1hdGNoXG4gICAgICAgIGZvciAoaiA9IHN0YWNrLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuICAgICAgICAgIGlmIChzdGFja1tqXS5sZXZlbCA8IHRoaXNMZXZlbCkgeyBicmVhazsgfVxuICAgICAgICAgIGlmIChpdGVtLnNpbmdsZSA9PT0gaXNTaW5nbGUgJiYgc3RhY2tbal0ubGV2ZWwgPT09IHRoaXNMZXZlbCkge1xuICAgICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuXG4gICAgICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICAgICAgb3BlblF1b3RlID0gc3RhdGUubWQub3B0aW9ucy5xdW90ZXNbMl07XG4gICAgICAgICAgICAgIGNsb3NlUXVvdGUgPSBzdGF0ZS5tZC5vcHRpb25zLnF1b3Rlc1szXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wZW5RdW90ZSA9IHN0YXRlLm1kLm9wdGlvbnMucXVvdGVzWzBdO1xuICAgICAgICAgICAgICBjbG9zZVF1b3RlID0gc3RhdGUubWQub3B0aW9ucy5xdW90ZXNbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdG9rZW4uY29udGVudCAqYmVmb3JlKiB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCxcbiAgICAgICAgICAgIC8vIGJlY2F1c2UsIGlmIHRoZXkgYXJlIHBvaW50aW5nIGF0IHRoZSBzYW1lIHRva2VuLCByZXBsYWNlQXRcbiAgICAgICAgICAgIC8vIGNvdWxkIG1lc3MgdXAgaW5kaWNlcyB3aGVuIHF1b3RlIGxlbmd0aCAhPSAxXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIGNsb3NlUXVvdGUpO1xuICAgICAgICAgICAgdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQgPSByZXBsYWNlQXQoXG4gICAgICAgICAgICAgIHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50LCBpdGVtLnBvcywgb3BlblF1b3RlKTtcblxuICAgICAgICAgICAgcG9zICs9IGNsb3NlUXVvdGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChpdGVtLnRva2VuID09PSBpKSB7IHBvcyArPSBvcGVuUXVvdGUubGVuZ3RoIC0gMTsgfVxuXG4gICAgICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgICAgICAgIG1heCA9IHRleHQubGVuZ3RoO1xuXG4gICAgICAgICAgICBzdGFjay5sZW5ndGggPSBqO1xuICAgICAgICAgICAgY29udGludWUgT1VURVI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5PcGVuKSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIHRva2VuOiBpLFxuICAgICAgICAgIHBvczogdC5pbmRleCxcbiAgICAgICAgICBzaW5nbGU6IGlzU2luZ2xlLFxuICAgICAgICAgIGxldmVsOiB0aGlzTGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNhbkNsb3NlICYmIGlzU2luZ2xlKSB7XG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgQVBPU1RST1BIRSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzbWFydHF1b3RlcyhzdGF0ZSkge1xuICAvKmVzbGludCBtYXgtZGVwdGg6MCovXG4gIHZhciBibGtJZHg7XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLnR5cG9ncmFwaGVyKSB7IHJldHVybjsgfVxuXG4gIGZvciAoYmxrSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDE7IGJsa0lkeCA+PSAwOyBibGtJZHgtLSkge1xuXG4gICAgaWYgKHN0YXRlLnRva2Vuc1tibGtJZHhdLnR5cGUgIT09ICdpbmxpbmUnIHx8XG4gICAgICAgICFRVU9URV9URVNUX1JFLnRlc3Qoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY29udGVudCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb2Nlc3NfaW5saW5lcyhzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbiwgc3RhdGUpO1xuICB9XG59O1xuIiwiLy8gQ29yZSBzdGF0ZSBvYmplY3Rcbi8vXG4ndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cblxuZnVuY3Rpb24gU3RhdGVDb3JlKHNyYywgbWQsIGVudikge1xuICB0aGlzLnNyYyA9IHNyYztcbiAgdGhpcy5lbnYgPSBlbnY7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMuaW5saW5lTW9kZSA9IGZhbHNlO1xuICB0aGlzLm1kID0gbWQ7IC8vIGxpbmsgdG8gcGFyc2VyIGluc3RhbmNlXG59XG5cbi8vIHJlLWV4cG9ydCBUb2tlbiBjbGFzcyB0byB1c2UgaW4gY29yZSBydWxlc1xuU3RhdGVDb3JlLnByb3RvdHlwZS5Ub2tlbiA9IFRva2VuO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVDb3JlO1xuIiwiLy8gUHJvY2VzcyBhdXRvbGlua3MgJzxwcm90b2NvbDouLi4+J1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyplc2xpbnQgbWF4LWxlbjowKi9cbnZhciBFTUFJTF9SRSAgICA9IC9eKFthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSopJC87XG52YXIgQVVUT0xJTktfUkUgPSAvXihbYS16QS1aXVthLXpBLVowLTkrLlxcLV17MSwzMX0pOihbXjw+XFx4MDAtXFx4MjBdKikkLztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGF1dG9saW5rKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHVybCwgZnVsbFVybCwgdG9rZW4sIGNoLCBzdGFydCwgbWF4LFxuICAgICAgcG9zID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGFydCA9IHN0YXRlLnBvcztcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGZvciAoOzspIHtcbiAgICBpZiAoKytwb3MgPj0gbWF4KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY2ggPT09IDB4M0MgLyogPCAqLykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjaCA9PT0gMHgzRSAvKiA+ICovKSBicmVhaztcbiAgfVxuXG4gIHVybCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDEsIHBvcyk7XG5cbiAgaWYgKEFVVE9MSU5LX1JFLnRlc3QodXJsKSkge1xuICAgIGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHVybCk7XG4gICAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgICB0b2tlbi5hdHRycyAgID0gWyBbICdocmVmJywgZnVsbFVybCBdIF07XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgICAgdG9rZW4uY29udGVudCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmtUZXh0KHVybCk7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSk7XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IHVybC5sZW5ndGggKyAyO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKEVNQUlMX1JFLnRlc3QodXJsKSkge1xuICAgIGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKCdtYWlsdG86JyArIHVybCk7XG4gICAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgICB0b2tlbi5hdHRycyAgID0gWyBbICdocmVmJywgZnVsbFVybCBdIF07XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgICAgdG9rZW4uY29udGVudCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmtUZXh0KHVybCk7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSk7XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IHVybC5sZW5ndGggKyAyO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIi8vIFBhcnNlIGJhY2t0aWNrc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYWNrdGljayhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBzdGFydCwgbWF4LCBtYXJrZXIsIHRva2VuLCBtYXRjaFN0YXJ0LCBtYXRjaEVuZCwgb3BlbmVyTGVuZ3RoLCBjbG9zZXJMZW5ndGgsXG4gICAgICBwb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKGNoICE9PSAweDYwLyogYCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGFydCA9IHBvcztcbiAgcG9zKys7XG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDYwLyogYCAqLykgeyBwb3MrKzsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTtcbiAgb3BlbmVyTGVuZ3RoID0gbWFya2VyLmxlbmd0aDtcblxuICBpZiAoc3RhdGUuYmFja3RpY2tzU2Nhbm5lZCAmJiAoc3RhdGUuYmFja3RpY2tzW29wZW5lckxlbmd0aF0gfHwgMCkgPD0gc3RhcnQpIHtcbiAgICBpZiAoIXNpbGVudCkgc3RhdGUucGVuZGluZyArPSBtYXJrZXI7XG4gICAgc3RhdGUucG9zICs9IG9wZW5lckxlbmd0aDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG1hdGNoU3RhcnQgPSBtYXRjaEVuZCA9IHBvcztcblxuICAvLyBOb3RoaW5nIGZvdW5kIGluIHRoZSBjYWNoZSwgc2NhbiB1bnRpbCB0aGUgZW5kIG9mIHRoZSBsaW5lIChvciB1bnRpbCBtYXJrZXIgaXMgZm91bmQpXG4gIHdoaWxlICgobWF0Y2hTdGFydCA9IHN0YXRlLnNyYy5pbmRleE9mKCdgJywgbWF0Y2hFbmQpKSAhPT0gLTEpIHtcbiAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyAxO1xuXG4gICAgLy8gc2NhbiBtYXJrZXIgbGVuZ3RoXG4gICAgd2hpbGUgKG1hdGNoRW5kIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KG1hdGNoRW5kKSA9PT0gMHg2MC8qIGAgKi8pIHsgbWF0Y2hFbmQrKzsgfVxuXG4gICAgY2xvc2VyTGVuZ3RoID0gbWF0Y2hFbmQgLSBtYXRjaFN0YXJ0O1xuXG4gICAgaWYgKGNsb3Nlckxlbmd0aCA9PT0gb3BlbmVyTGVuZ3RoKSB7XG4gICAgICAvLyBGb3VuZCBtYXRjaGluZyBjbG9zZXIgbGVuZ3RoLlxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgnY29kZV9pbmxpbmUnLCAnY29kZScsIDApO1xuICAgICAgICB0b2tlbi5tYXJrdXAgID0gbWFya2VyO1xuICAgICAgICB0b2tlbi5jb250ZW50ID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF0Y2hTdGFydClcbiAgICAgICAgICAucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAucmVwbGFjZSgvXiAoLispICQvLCAnJDEnKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBvcyA9IG1hdGNoRW5kO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gU29tZSBkaWZmZXJlbnQgbGVuZ3RoIGZvdW5kLCBwdXQgaXQgaW4gY2FjaGUgYXMgdXBwZXIgbGltaXQgb2Ygd2hlcmUgY2xvc2VyIGNhbiBiZSBmb3VuZFxuICAgIHN0YXRlLmJhY2t0aWNrc1tjbG9zZXJMZW5ndGhdID0gbWF0Y2hTdGFydDtcbiAgfVxuXG4gIC8vIFNjYW5uZWQgdGhyb3VnaCB0aGUgZW5kLCBkaWRuJ3QgZmluZCBhbnl0aGluZ1xuICBzdGF0ZS5iYWNrdGlja3NTY2FubmVkID0gdHJ1ZTtcblxuICBpZiAoIXNpbGVudCkgc3RhdGUucGVuZGluZyArPSBtYXJrZXI7XG4gIHN0YXRlLnBvcyArPSBvcGVuZXJMZW5ndGg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIEZvciBlYWNoIG9wZW5pbmcgZW1waGFzaXMtbGlrZSBtYXJrZXIgZmluZCBhIG1hdGNoaW5nIGNsb3Npbmcgb25lXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NEZWxpbWl0ZXJzKHN0YXRlLCBkZWxpbWl0ZXJzKSB7XG4gIHZhciBjbG9zZXJJZHgsIG9wZW5lcklkeCwgY2xvc2VyLCBvcGVuZXIsIG1pbk9wZW5lcklkeCwgbmV3TWluT3BlbmVySWR4LFxuICAgICAgaXNPZGRNYXRjaCwgbGFzdEp1bXAsXG4gICAgICBvcGVuZXJzQm90dG9tID0ge30sXG4gICAgICBtYXggPSBkZWxpbWl0ZXJzLmxlbmd0aDtcblxuICBmb3IgKGNsb3NlcklkeCA9IDA7IGNsb3NlcklkeCA8IG1heDsgY2xvc2VySWR4KyspIHtcbiAgICBjbG9zZXIgPSBkZWxpbWl0ZXJzW2Nsb3NlcklkeF07XG5cbiAgICAvLyBMZW5ndGggaXMgb25seSB1c2VkIGZvciBlbXBoYXNpcy1zcGVjaWZpYyBcInJ1bGUgb2YgM1wiLFxuICAgIC8vIGlmIGl0J3Mgbm90IGRlZmluZWQgKGluIHN0cmlrZXRocm91Z2ggb3IgM3JkIHBhcnR5IHBsdWdpbnMpLFxuICAgIC8vIHdlIGNhbiBkZWZhdWx0IGl0IHRvIDAgdG8gZGlzYWJsZSB0aG9zZSBjaGVja3MuXG4gICAgLy9cbiAgICBjbG9zZXIubGVuZ3RoID0gY2xvc2VyLmxlbmd0aCB8fCAwO1xuXG4gICAgaWYgKCFjbG9zZXIuY2xvc2UpIGNvbnRpbnVlO1xuXG4gICAgLy8gUHJldmlvdXNseSBjYWxjdWxhdGVkIGxvd2VyIGJvdW5kcyAocHJldmlvdXMgZmFpbHMpXG4gICAgLy8gZm9yIGVhY2ggbWFya2VyIGFuZCBlYWNoIGRlbGltaXRlciBsZW5ndGggbW9kdWxvIDMuXG4gICAgaWYgKCFvcGVuZXJzQm90dG9tLmhhc093blByb3BlcnR5KGNsb3Nlci5tYXJrZXIpKSB7XG4gICAgICBvcGVuZXJzQm90dG9tW2Nsb3Nlci5tYXJrZXJdID0gWyAtMSwgLTEsIC0xIF07XG4gICAgfVxuXG4gICAgbWluT3BlbmVySWR4ID0gb3BlbmVyc0JvdHRvbVtjbG9zZXIubWFya2VyXVtjbG9zZXIubGVuZ3RoICUgM107XG5cbiAgICBvcGVuZXJJZHggPSBjbG9zZXJJZHggLSBjbG9zZXIuanVtcCAtIDE7XG5cbiAgICAvLyBhdm9pZCBjcmFzaCBpZiBgY2xvc2VyLmp1bXBgIGlzIHBvaW50aW5nIG91dHNpZGUgb2YgdGhlIGFycmF5LCBzZWUgIzc0MlxuICAgIGlmIChvcGVuZXJJZHggPCAtMSkgb3BlbmVySWR4ID0gLTE7XG5cbiAgICBuZXdNaW5PcGVuZXJJZHggPSBvcGVuZXJJZHg7XG5cbiAgICBmb3IgKDsgb3BlbmVySWR4ID4gbWluT3BlbmVySWR4OyBvcGVuZXJJZHggLT0gb3BlbmVyLmp1bXAgKyAxKSB7XG4gICAgICBvcGVuZXIgPSBkZWxpbWl0ZXJzW29wZW5lcklkeF07XG5cbiAgICAgIGlmIChvcGVuZXIubWFya2VyICE9PSBjbG9zZXIubWFya2VyKSBjb250aW51ZTtcblxuICAgICAgaWYgKG9wZW5lci5vcGVuICYmIG9wZW5lci5lbmQgPCAwKSB7XG5cbiAgICAgICAgaXNPZGRNYXRjaCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGZyb20gc3BlYzpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBkZWxpbWl0ZXJzIGNhbiBib3RoIG9wZW4gYW5kIGNsb3NlIGVtcGhhc2lzLCB0aGVuIHRoZVxuICAgICAgICAvLyBzdW0gb2YgdGhlIGxlbmd0aHMgb2YgdGhlIGRlbGltaXRlciBydW5zIGNvbnRhaW5pbmcgdGhlIG9wZW5pbmcgYW5kXG4gICAgICAgIC8vIGNsb3NpbmcgZGVsaW1pdGVycyBtdXN0IG5vdCBiZSBhIG11bHRpcGxlIG9mIDMgdW5sZXNzIGJvdGggbGVuZ3Roc1xuICAgICAgICAvLyBhcmUgbXVsdGlwbGVzIG9mIDMuXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChvcGVuZXIuY2xvc2UgfHwgY2xvc2VyLm9wZW4pIHtcbiAgICAgICAgICBpZiAoKG9wZW5lci5sZW5ndGggKyBjbG9zZXIubGVuZ3RoKSAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChvcGVuZXIubGVuZ3RoICUgMyAhPT0gMCB8fCBjbG9zZXIubGVuZ3RoICUgMyAhPT0gMCkge1xuICAgICAgICAgICAgICBpc09kZE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT2RkTWF0Y2gpIHtcbiAgICAgICAgICAvLyBJZiBwcmV2aW91cyBkZWxpbWl0ZXIgY2Fubm90IGJlIGFuIG9wZW5lciwgd2UgY2FuIHNhZmVseSBza2lwXG4gICAgICAgICAgLy8gdGhlIGVudGlyZSBzZXF1ZW5jZSBpbiBmdXR1cmUgY2hlY2tzLiBUaGlzIGlzIHJlcXVpcmVkIHRvIG1ha2VcbiAgICAgICAgICAvLyBzdXJlIGFsZ29yaXRobSBoYXMgbGluZWFyIGNvbXBsZXhpdHkgKHNlZSAqXypfKl8qXypfLi4uIGNhc2UpLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgbGFzdEp1bXAgPSBvcGVuZXJJZHggPiAwICYmICFkZWxpbWl0ZXJzW29wZW5lcklkeCAtIDFdLm9wZW4gP1xuICAgICAgICAgICAgZGVsaW1pdGVyc1tvcGVuZXJJZHggLSAxXS5qdW1wICsgMSA6XG4gICAgICAgICAgICAwO1xuXG4gICAgICAgICAgY2xvc2VyLmp1bXAgID0gY2xvc2VySWR4IC0gb3BlbmVySWR4ICsgbGFzdEp1bXA7XG4gICAgICAgICAgY2xvc2VyLm9wZW4gID0gZmFsc2U7XG4gICAgICAgICAgb3BlbmVyLmVuZCAgID0gY2xvc2VySWR4O1xuICAgICAgICAgIG9wZW5lci5qdW1wICA9IGxhc3RKdW1wO1xuICAgICAgICAgIG9wZW5lci5jbG9zZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld01pbk9wZW5lcklkeCA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld01pbk9wZW5lcklkeCAhPT0gLTEpIHtcbiAgICAgIC8vIElmIG1hdGNoIGZvciB0aGlzIGRlbGltaXRlciBydW4gZmFpbGVkLCB3ZSB3YW50IHRvIHNldCBsb3dlciBib3VuZCBmb3JcbiAgICAgIC8vIGZ1dHVyZSBsb29rdXBzLiBUaGlzIGlzIHJlcXVpcmVkIHRvIG1ha2Ugc3VyZSBhbGdvcml0aG0gaGFzIGxpbmVhclxuICAgICAgLy8gY29tcGxleGl0eS5cbiAgICAgIC8vXG4gICAgICAvLyBTZWUgZGV0YWlscyBoZXJlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvbW1vbm1hcmsvY21hcmsvaXNzdWVzLzE3OCNpc3N1ZWNvbW1lbnQtMjcwNDE3NDQyXG4gICAgICAvL1xuICAgICAgb3BlbmVyc0JvdHRvbVtjbG9zZXIubWFya2VyXVsoY2xvc2VyLmxlbmd0aCB8fCAwKSAlIDNdID0gbmV3TWluT3BlbmVySWR4O1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlua19wYWlycyhzdGF0ZSkge1xuICB2YXIgY3VycixcbiAgICAgIHRva2Vuc19tZXRhID0gc3RhdGUudG9rZW5zX21ldGEsXG4gICAgICBtYXggPSBzdGF0ZS50b2tlbnNfbWV0YS5sZW5ndGg7XG5cbiAgcHJvY2Vzc0RlbGltaXRlcnMoc3RhdGUsIHN0YXRlLmRlbGltaXRlcnMpO1xuXG4gIGZvciAoY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgIGlmICh0b2tlbnNfbWV0YVtjdXJyXSAmJiB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKSB7XG4gICAgICBwcm9jZXNzRGVsaW1pdGVycyhzdGF0ZSwgdG9rZW5zX21ldGFbY3Vycl0uZGVsaW1pdGVycyk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gUHJvY2VzcyAqdGhpcyogYW5kIF90aGF0X1xuLy9cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBJbnNlcnQgZWFjaCBtYXJrZXIgYXMgYSBzZXBhcmF0ZSB0ZXh0IHRva2VuLCBhbmQgYWRkIGl0IHRvIGRlbGltaXRlciBsaXN0XG4vL1xubW9kdWxlLmV4cG9ydHMudG9rZW5pemUgPSBmdW5jdGlvbiBlbXBoYXNpcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBpLCBzY2FubmVkLCB0b2tlbixcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKG1hcmtlciAhPT0gMHg1RiAvKiBfICovICYmIG1hcmtlciAhPT0gMHgyQSAvKiAqICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHNjYW5uZWQgPSBzdGF0ZS5zY2FuRGVsaW1zKHN0YXRlLnBvcywgbWFya2VyID09PSAweDJBKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc2Nhbm5lZC5sZW5ndGg7IGkrKykge1xuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcik7XG5cbiAgICBzdGF0ZS5kZWxpbWl0ZXJzLnB1c2goe1xuICAgICAgLy8gQ2hhciBjb2RlIG9mIHRoZSBzdGFydGluZyBtYXJrZXIgKG51bWJlcikuXG4gICAgICAvL1xuICAgICAgbWFya2VyOiBtYXJrZXIsXG5cbiAgICAgIC8vIFRvdGFsIGxlbmd0aCBvZiB0aGVzZSBzZXJpZXMgb2YgZGVsaW1pdGVycy5cbiAgICAgIC8vXG4gICAgICBsZW5ndGg6IHNjYW5uZWQubGVuZ3RoLFxuXG4gICAgICAvLyBBbiBhbW91bnQgb2YgY2hhcmFjdGVycyBiZWZvcmUgdGhpcyBvbmUgdGhhdCdzIGVxdWl2YWxlbnQgdG9cbiAgICAgIC8vIGN1cnJlbnQgb25lLiBJbiBwbGFpbiBFbmdsaXNoOiBpZiB0aGlzIGRlbGltaXRlciBkb2VzIG5vdCBvcGVuXG4gICAgICAvLyBhbiBlbXBoYXNpcywgbmVpdGhlciBkbyBwcmV2aW91cyBganVtcGAgY2hhcmFjdGVycy5cbiAgICAgIC8vXG4gICAgICAvLyBVc2VkIHRvIHNraXAgc2VxdWVuY2VzIGxpa2UgXCIqKioqKlwiIGluIG9uZSBzdGVwLCBmb3IgMXN0IGFzdGVyaXNrXG4gICAgICAvLyB2YWx1ZSB3aWxsIGJlIDAsIGZvciAybmQgaXQncyAxIGFuZCBzbyBvbi5cbiAgICAgIC8vXG4gICAgICBqdW1wOiAgIGksXG5cbiAgICAgIC8vIEEgcG9zaXRpb24gb2YgdGhlIHRva2VuIHRoaXMgZGVsaW1pdGVyIGNvcnJlc3BvbmRzIHRvLlxuICAgICAgLy9cbiAgICAgIHRva2VuOiAgc3RhdGUudG9rZW5zLmxlbmd0aCAtIDEsXG5cbiAgICAgIC8vIElmIHRoaXMgZGVsaW1pdGVyIGlzIG1hdGNoZWQgYXMgYSB2YWxpZCBvcGVuZXIsIGBlbmRgIHdpbGwgYmVcbiAgICAgIC8vIGVxdWFsIHRvIGl0cyBwb3NpdGlvbiwgb3RoZXJ3aXNlIGl0J3MgYC0xYC5cbiAgICAgIC8vXG4gICAgICBlbmQ6ICAgIC0xLFxuXG4gICAgICAvLyBCb29sZWFuIGZsYWdzIHRoYXQgZGV0ZXJtaW5lIGlmIHRoaXMgZGVsaW1pdGVyIGNvdWxkIG9wZW4gb3IgY2xvc2VcbiAgICAgIC8vIGFuIGVtcGhhc2lzLlxuICAgICAgLy9cbiAgICAgIG9wZW46ICAgc2Nhbm5lZC5jYW5fb3BlbixcbiAgICAgIGNsb3NlOiAgc2Nhbm5lZC5jYW5fY2xvc2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyArPSBzY2FubmVkLmxlbmd0aDtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuZnVuY3Rpb24gcG9zdFByb2Nlc3Moc3RhdGUsIGRlbGltaXRlcnMpIHtcbiAgdmFyIGksXG4gICAgICBzdGFydERlbGltLFxuICAgICAgZW5kRGVsaW0sXG4gICAgICB0b2tlbixcbiAgICAgIGNoLFxuICAgICAgaXNTdHJvbmcsXG4gICAgICBtYXggPSBkZWxpbWl0ZXJzLmxlbmd0aDtcblxuICBmb3IgKGkgPSBtYXggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHN0YXJ0RGVsaW0gPSBkZWxpbWl0ZXJzW2ldO1xuXG4gICAgaWYgKHN0YXJ0RGVsaW0ubWFya2VyICE9PSAweDVGLyogXyAqLyAmJiBzdGFydERlbGltLm1hcmtlciAhPT0gMHgyQS8qICogKi8pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFByb2Nlc3Mgb25seSBvcGVuaW5nIG1hcmtlcnNcbiAgICBpZiAoc3RhcnREZWxpbS5lbmQgPT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBlbmREZWxpbSA9IGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmRdO1xuXG4gICAgLy8gSWYgdGhlIHByZXZpb3VzIGRlbGltaXRlciBoYXMgdGhlIHNhbWUgbWFya2VyIGFuZCBpcyBhZGphY2VudCB0byB0aGlzIG9uZSxcbiAgICAvLyBtZXJnZSB0aG9zZSBpbnRvIG9uZSBzdHJvbmcgZGVsaW1pdGVyLlxuICAgIC8vXG4gICAgLy8gYDxlbT48ZW0+d2hhdGV2ZXI8L2VtPjwvZW0+YCAtPiBgPHN0cm9uZz53aGF0ZXZlcjwvc3Ryb25nPmBcbiAgICAvL1xuICAgIGlzU3Ryb25nID0gaSA+IDAgJiZcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbaSAtIDFdLmVuZCA9PT0gc3RhcnREZWxpbS5lbmQgKyAxICYmXG4gICAgICAgICAgICAgICBkZWxpbWl0ZXJzW2kgLSAxXS50b2tlbiA9PT0gc3RhcnREZWxpbS50b2tlbiAtIDEgJiZcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmQgKyAxXS50b2tlbiA9PT0gZW5kRGVsaW0udG9rZW4gKyAxICYmXG4gICAgICAgICAgICAgICBkZWxpbWl0ZXJzW2kgLSAxXS5tYXJrZXIgPT09IHN0YXJ0RGVsaW0ubWFya2VyO1xuXG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0RGVsaW0ubWFya2VyKTtcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS50b2tlbnNbc3RhcnREZWxpbS50b2tlbl07XG4gICAgdG9rZW4udHlwZSAgICA9IGlzU3Ryb25nID8gJ3N0cm9uZ19vcGVuJyA6ICdlbV9vcGVuJztcbiAgICB0b2tlbi50YWcgICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdlbSc7XG4gICAgdG9rZW4ubmVzdGluZyA9IDE7XG4gICAgdG9rZW4ubWFya3VwICA9IGlzU3Ryb25nID8gY2ggKyBjaCA6IGNoO1xuICAgIHRva2VuLmNvbnRlbnQgPSAnJztcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS50b2tlbnNbZW5kRGVsaW0udG9rZW5dO1xuICAgIHRva2VuLnR5cGUgICAgPSBpc1N0cm9uZyA/ICdzdHJvbmdfY2xvc2UnIDogJ2VtX2Nsb3NlJztcbiAgICB0b2tlbi50YWcgICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdlbSc7XG4gICAgdG9rZW4ubmVzdGluZyA9IC0xO1xuICAgIHRva2VuLm1hcmt1cCAgPSBpc1N0cm9uZyA/IGNoICsgY2ggOiBjaDtcbiAgICB0b2tlbi5jb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNTdHJvbmcpIHtcbiAgICAgIHN0YXRlLnRva2Vuc1tkZWxpbWl0ZXJzW2kgLSAxXS50b2tlbl0uY29udGVudCA9ICcnO1xuICAgICAgc3RhdGUudG9rZW5zW2RlbGltaXRlcnNbc3RhcnREZWxpbS5lbmQgKyAxXS50b2tlbl0uY29udGVudCA9ICcnO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdhbGsgdGhyb3VnaCBkZWxpbWl0ZXIgbGlzdCBhbmQgcmVwbGFjZSB0ZXh0IHRva2VucyB3aXRoIHRhZ3Ncbi8vXG5tb2R1bGUuZXhwb3J0cy5wb3N0UHJvY2VzcyA9IGZ1bmN0aW9uIGVtcGhhc2lzKHN0YXRlKSB7XG4gIHZhciBjdXJyLFxuICAgICAgdG9rZW5zX21ldGEgPSBzdGF0ZS50b2tlbnNfbWV0YSxcbiAgICAgIG1heCA9IHN0YXRlLnRva2Vuc19tZXRhLmxlbmd0aDtcblxuICBwb3N0UHJvY2VzcyhzdGF0ZSwgc3RhdGUuZGVsaW1pdGVycyk7XG5cbiAgZm9yIChjdXJyID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgaWYgKHRva2Vuc19tZXRhW2N1cnJdICYmIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpIHtcbiAgICAgIHBvc3RQcm9jZXNzKHN0YXRlLCB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBQcm9jZXNzIGh0bWwgZW50aXR5IC0gJiMxMjM7LCAmI3hBRjssICZxdW90OywgLi4uXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVudGl0aWVzICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL2VudGl0aWVzJyk7XG52YXIgaGFzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5oYXM7XG52YXIgaXNWYWxpZEVudGl0eUNvZGUgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1ZhbGlkRW50aXR5Q29kZTtcbnZhciBmcm9tQ29kZVBvaW50ICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmZyb21Db2RlUG9pbnQ7XG5cblxudmFyIERJR0lUQUxfUkUgPSAvXiYjKCg/OnhbYS1mMC05XXsxLDZ9fFswLTldezEsN30pKTsvaTtcbnZhciBOQU1FRF9SRSAgID0gL14mKFthLXpdW2EtejAtOV17MSwzMX0pOy9pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW50aXR5KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBjb2RlLCBtYXRjaCwgcG9zID0gc3RhdGUucG9zLCBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjYvKiAmICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChwb3MgKyAxIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKTtcblxuICAgIGlmIChjaCA9PT0gMHgyMyAvKiAjICovKSB7XG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKERJR0lUQUxfUkUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgY29kZSA9IG1hdGNoWzFdWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/IHBhcnNlSW50KG1hdGNoWzFdLnNsaWNlKDEpLCAxNikgOiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgICAgICAgIHN0YXRlLnBlbmRpbmcgKz0gaXNWYWxpZEVudGl0eUNvZGUoY29kZSkgPyBmcm9tQ29kZVBvaW50KGNvZGUpIDogZnJvbUNvZGVQb2ludCgweEZGRkQpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKE5BTUVEX1JFKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBpZiAoaGFzKGVudGl0aWVzLCBtYXRjaFsxXSkpIHtcbiAgICAgICAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IGVudGl0aWVzW21hdGNoWzFdXTsgfVxuICAgICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9ICcmJzsgfVxuICBzdGF0ZS5wb3MrKztcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyBlc2NhcGVkIGNoYXJzIGFuZCBoYXJkYnJlYWtzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG52YXIgRVNDQVBFRCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7IEVTQ0FQRUQucHVzaCgwKTsgfVxuXG4nXFxcXCFcIiMkJSZcXCcoKSorLC4vOjs8PT4/QFtdXl9ge3x9fi0nXG4gIC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2gpIHsgRVNDQVBFRFtjaC5jaGFyQ29kZUF0KDApXSA9IDE7IH0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBwb3MgPSBzdGF0ZS5wb3MsIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHg1Qy8qIFxcICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcysrO1xuXG4gIGlmIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY2ggPCAyNTYgJiYgRVNDQVBFRFtjaF0gIT09IDApIHtcbiAgICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjW3Bvc107IH1cbiAgICAgIHN0YXRlLnBvcyArPSAyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAweDBBKSB7XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBzdGF0ZS5wdXNoKCdoYXJkYnJlYWsnLCAnYnInLCAwKTtcbiAgICAgIH1cblxuICAgICAgcG9zKys7XG4gICAgICAvLyBza2lwIGxlYWRpbmcgd2hpdGVzcGFjZXMgZnJvbSBuZXh0IGxpbmVcbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoIWlzU3BhY2UoY2gpKSB7IGJyZWFrOyB9XG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5wb3MgPSBwb3M7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9ICdcXFxcJzsgfVxuICBzdGF0ZS5wb3MrKztcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyBodG1sIHRhZ3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBIVE1MX1RBR19SRSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9odG1sX3JlJykuSFRNTF9UQUdfUkU7XG5cblxuZnVuY3Rpb24gaXNMZXR0ZXIoY2gpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgdmFyIGxjID0gY2ggfCAweDIwOyAvLyB0byBsb3dlciBjYXNlXG4gIHJldHVybiAobGMgPj0gMHg2MS8qIGEgKi8pICYmIChsYyA8PSAweDdhLyogeiAqLyk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodG1sX2lubGluZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbWF0Y2gsIG1heCwgdG9rZW4sXG4gICAgICBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLmh0bWwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gQ2hlY2sgc3RhcnRcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQy8qIDwgKi8gfHxcbiAgICAgIHBvcyArIDIgPj0gbWF4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUXVpY2sgZmFpbCBvbiBzZWNvbmQgY2hhclxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuICBpZiAoY2ggIT09IDB4MjEvKiAhICovICYmXG4gICAgICBjaCAhPT0gMHgzRi8qID8gKi8gJiZcbiAgICAgIGNoICE9PSAweDJGLyogLyAqLyAmJlxuICAgICAgIWlzTGV0dGVyKGNoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goSFRNTF9UQUdfUkUpO1xuICBpZiAoIW1hdGNoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2h0bWxfaW5saW5lJywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBwb3MgKyBtYXRjaFswXS5sZW5ndGgpO1xuICB9XG4gIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgIVtpbWFnZV0oPHNyYz4gXCJ0aXRsZVwiKVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBub3JtYWxpemVSZWZlcmVuY2UgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLm5vcm1hbGl6ZVJlZmVyZW5jZTtcbnZhciBpc1NwYWNlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbWFnZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBhdHRycyxcbiAgICAgIGNvZGUsXG4gICAgICBjb250ZW50LFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbEVuZCxcbiAgICAgIGxhYmVsU3RhcnQsXG4gICAgICBwb3MsXG4gICAgICByZWYsXG4gICAgICByZXMsXG4gICAgICB0aXRsZSxcbiAgICAgIHRva2VuLFxuICAgICAgdG9rZW5zLFxuICAgICAgc3RhcnQsXG4gICAgICBocmVmID0gJycsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgIT09IDB4MjEvKiAhICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhYmVsU3RhcnQgPSBzdGF0ZS5wb3MgKyAyO1xuICBsYWJlbEVuZCA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXRlLnBvcyArIDEsIGZhbHNlKTtcblxuICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIGxpbmtcbiAgaWYgKGxhYmVsRW5kIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyOC8qICggKi8pIHtcbiAgICAvL1xuICAgIC8vIElubGluZSBsaW5rXG4gICAgLy9cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgIHBvcysrO1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICBeXl5eXl4gcGFyc2luZyBsaW5rIGRlc3RpbmF0aW9uXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KTtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBocmVmID0gc3RhdGUubWQubm9ybWFsaXplTGluayhyZXMuc3RyKTtcbiAgICAgIGlmIChzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoaHJlZikpIHtcbiAgICAgICAgcG9zID0gcmVzLnBvcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhyZWYgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgIHN0YXJ0ID0gcG9zO1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICAgICAgICAgIF5eXl5eXl4gcGFyc2luZyBsaW5rIHRpdGxlXG4gICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtUaXRsZShzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KTtcbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcmVzLm9rKSB7XG4gICAgICB0aXRsZSA9IHJlcy5zdHI7XG4gICAgICBwb3MgPSByZXMucG9zO1xuXG4gICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAocG9zID49IG1heCB8fCBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDI5LyogKSAqLykge1xuICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwb3MrKztcbiAgfSBlbHNlIHtcbiAgICAvL1xuICAgIC8vIExpbmsgcmVmZXJlbmNlXG4gICAgLy9cbiAgICBpZiAodHlwZW9mIHN0YXRlLmVudi5yZWZlcmVuY2VzID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg1Qi8qIFsgKi8pIHtcbiAgICAgIHN0YXJ0ID0gcG9zICsgMTtcbiAgICAgIHBvcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rTGFiZWwoc3RhdGUsIHBvcyk7XG4gICAgICBpZiAocG9zID49IDApIHtcbiAgICAgICAgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcysrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zID0gbGFiZWxFbmQgKyAxO1xuICAgIH1cblxuICAgIC8vIGNvdmVycyBsYWJlbCA9PT0gJycgYW5kIGxhYmVsID09PSB1bmRlZmluZWRcbiAgICAvLyAoY29sbGFwc2VkIHJlZmVyZW5jZSBsaW5rIGFuZCBzaG9ydGN1dCByZWZlcmVuY2UgbGluayByZXNwZWN0aXZlbHkpXG4gICAgaWYgKCFsYWJlbCkgeyBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShsYWJlbFN0YXJ0LCBsYWJlbEVuZCk7IH1cblxuICAgIHJlZiA9IHN0YXRlLmVudi5yZWZlcmVuY2VzW25vcm1hbGl6ZVJlZmVyZW5jZShsYWJlbCldO1xuICAgIGlmICghcmVmKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhyZWYgPSByZWYuaHJlZjtcbiAgICB0aXRsZSA9IHJlZi50aXRsZTtcbiAgfVxuXG4gIC8vXG4gIC8vIFdlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmssIGFuZCBrbm93IGZvciBhIGZhY3QgaXQncyBhIHZhbGlkIGxpbms7XG4gIC8vIHNvIGFsbCB0aGF0J3MgbGVmdCB0byBkbyBpcyB0byBjYWxsIHRva2VuaXplci5cbiAgLy9cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBjb250ZW50ID0gc3RhdGUuc3JjLnNsaWNlKGxhYmVsU3RhcnQsIGxhYmVsRW5kKTtcblxuICAgIHN0YXRlLm1kLmlubGluZS5wYXJzZShcbiAgICAgIGNvbnRlbnQsXG4gICAgICBzdGF0ZS5tZCxcbiAgICAgIHN0YXRlLmVudixcbiAgICAgIHRva2VucyA9IFtdXG4gICAgKTtcblxuICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaW1hZ2UnLCAnaW1nJywgMCk7XG4gICAgdG9rZW4uYXR0cnMgICAgPSBhdHRycyA9IFsgWyAnc3JjJywgaHJlZiBdLCBbICdhbHQnLCAnJyBdIF07XG4gICAgdG9rZW4uY2hpbGRyZW4gPSB0b2tlbnM7XG4gICAgdG9rZW4uY29udGVudCAgPSBjb250ZW50O1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBhdHRycy5wdXNoKFsgJ3RpdGxlJywgdGl0bGUgXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgW2xpbmtdKDx0bz4gXCJzdHVmZlwiKVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBub3JtYWxpemVSZWZlcmVuY2UgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLm5vcm1hbGl6ZVJlZmVyZW5jZTtcbnZhciBpc1NwYWNlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaW5rKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGF0dHJzLFxuICAgICAgY29kZSxcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxFbmQsXG4gICAgICBsYWJlbFN0YXJ0LFxuICAgICAgcG9zLFxuICAgICAgcmVzLFxuICAgICAgcmVmLFxuICAgICAgdG9rZW4sXG4gICAgICBocmVmID0gJycsXG4gICAgICB0aXRsZSA9ICcnLFxuICAgICAgb2xkUG9zID0gc3RhdGUucG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBwYXJzZVJlZmVyZW5jZSA9IHRydWU7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhYmVsU3RhcnQgPSBzdGF0ZS5wb3MgKyAxO1xuICBsYWJlbEVuZCA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXRlLnBvcywgdHJ1ZSk7XG5cbiAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kICddJywgc28gaXQncyBub3QgYSB2YWxpZCBsaW5rXG4gIGlmIChsYWJlbEVuZCA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gbGFiZWxFbmQgKyAxO1xuICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjgvKiAoICovKSB7XG4gICAgLy9cbiAgICAvLyBJbmxpbmUgbGlua1xuICAgIC8vXG5cbiAgICAvLyBtaWdodCBoYXZlIGZvdW5kIGEgdmFsaWQgc2hvcnRjdXQgbGluaywgZGlzYWJsZSByZWZlcmVuY2UgcGFyc2luZ1xuICAgIHBhcnNlUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICBwb3MrKztcbiAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoIWlzU3BhY2UoY29kZSkgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgIH1cbiAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgXl5eXl5eIHBhcnNpbmcgbGluayBkZXN0aW5hdGlvblxuICAgIHN0YXJ0ID0gcG9zO1xuICAgIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rRGVzdGluYXRpb24oc3RhdGUuc3JjLCBwb3MsIHN0YXRlLnBvc01heCk7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgaHJlZiA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsocmVzLnN0cik7XG4gICAgICBpZiAoc3RhdGUubWQudmFsaWRhdGVMaW5rKGhyZWYpKSB7XG4gICAgICAgIHBvcyA9IHJlcy5wb3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBocmVmID0gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgICAvLyAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICAgIHN0YXJ0ID0gcG9zO1xuICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgICB9XG5cbiAgICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgICAvLyAgICAgICAgICAgICAgICAgIF5eXl5eXl4gcGFyc2luZyBsaW5rIHRpdGxlXG4gICAgICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua1RpdGxlKHN0YXRlLnNyYywgcG9zLCBzdGF0ZS5wb3NNYXgpO1xuICAgICAgaWYgKHBvcyA8IG1heCAmJiBzdGFydCAhPT0gcG9zICYmIHJlcy5vaykge1xuICAgICAgICB0aXRsZSA9IHJlcy5zdHI7XG4gICAgICAgIHBvcyA9IHJlcy5wb3M7XG5cbiAgICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3MgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjkvKiApICovKSB7XG4gICAgICAvLyBwYXJzaW5nIGEgdmFsaWQgc2hvcnRjdXQgbGluayBmYWlsZWQsIGZhbGxiYWNrIHRvIHJlZmVyZW5jZVxuICAgICAgcGFyc2VSZWZlcmVuY2UgPSB0cnVlO1xuICAgIH1cbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChwYXJzZVJlZmVyZW5jZSkge1xuICAgIC8vXG4gICAgLy8gTGluayByZWZlcmVuY2VcbiAgICAvL1xuICAgIGlmICh0eXBlb2Ygc3RhdGUuZW52LnJlZmVyZW5jZXMgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVCLyogWyAqLykge1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgICAgcG9zID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgcG9zKTtcbiAgICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKyspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zID0gbGFiZWxFbmQgKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gICAgfVxuXG4gICAgLy8gY292ZXJzIGxhYmVsID09PSAnJyBhbmQgbGFiZWwgPT09IHVuZGVmaW5lZFxuICAgIC8vIChjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmsgYW5kIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rIHJlc3BlY3RpdmVseSlcbiAgICBpZiAoIWxhYmVsKSB7IGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKGxhYmVsU3RhcnQsIGxhYmVsRW5kKTsgfVxuXG4gICAgcmVmID0gc3RhdGUuZW52LnJlZmVyZW5jZXNbbm9ybWFsaXplUmVmZXJlbmNlKGxhYmVsKV07XG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaHJlZiA9IHJlZi5ocmVmO1xuICAgIHRpdGxlID0gcmVmLnRpdGxlO1xuICB9XG5cbiAgLy9cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnBvcyA9IGxhYmVsU3RhcnQ7XG4gICAgc3RhdGUucG9zTWF4ID0gbGFiZWxFbmQ7XG5cbiAgICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX29wZW4nLCAnYScsIDEpO1xuICAgIHRva2VuLmF0dHJzICA9IGF0dHJzID0gWyBbICdocmVmJywgaHJlZiBdIF07XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBhdHRycy5wdXNoKFsgJ3RpdGxlJywgdGl0bGUgXSk7XG4gICAgfVxuXG4gICAgc3RhdGUubWQuaW5saW5lLnRva2VuaXplKHN0YXRlKTtcblxuICAgIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfY2xvc2UnLCAnYScsIC0xKTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZWVzcyAnXFxuJ1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5ld2xpbmUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG1heCwgbWF4LCBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MEEvKiBcXG4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG1heCA9IHN0YXRlLnBlbmRpbmcubGVuZ3RoIC0gMTtcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vICcgIFxcbicgLT4gaGFyZGJyZWFrXG4gIC8vIExvb2t1cCBpbiBwZW5kaW5nIGNoYXJzIGlzIGJhZCBwcmFjdGljZSEgRG9uJ3QgY29weSB0byBvdGhlciBydWxlcyFcbiAgLy8gUGVuZGluZyBzdHJpbmcgaXMgc3RvcmVkIGluIGNvbmNhdCBtb2RlLCBpbmRleGVkIGxvb2t1cHMgd2lsbCBjYXVzZVxuICAvLyBjb252ZXJ0aW9uIHRvIGZsYXQgbW9kZS5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAocG1heCA+PSAwICYmIHN0YXRlLnBlbmRpbmcuY2hhckNvZGVBdChwbWF4KSA9PT0gMHgyMCkge1xuICAgICAgaWYgKHBtYXggPj0gMSAmJiBzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQocG1heCAtIDEpID09PSAweDIwKSB7XG4gICAgICAgIHN0YXRlLnBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLnJlcGxhY2UoLyArJC8sICcnKTtcbiAgICAgICAgc3RhdGUucHVzaCgnaGFyZGJyZWFrJywgJ2JyJywgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5zbGljZSgwLCAtMSk7XG4gICAgICAgIHN0YXRlLnB1c2goJ3NvZnRicmVhaycsICdicicsIDApO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnB1c2goJ3NvZnRicmVhaycsICdicicsIDApO1xuICAgIH1cbiAgfVxuXG4gIHBvcysrO1xuXG4gIC8vIHNraXAgaGVhZGluZyBzcGFjZXMgZm9yIG5leHQgbGluZVxuICB3aGlsZSAocG9zIDwgbWF4ICYmIGlzU3BhY2Uoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSkpIHsgcG9zKys7IH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIElubGluZSBwYXJzZXIgc3RhdGVcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBUb2tlbiAgICAgICAgICA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG52YXIgaXNXaGl0ZVNwYWNlICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1doaXRlU3BhY2U7XG52YXIgaXNQdW5jdENoYXIgICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1B1bmN0Q2hhcjtcbnZhciBpc01kQXNjaWlQdW5jdCA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzTWRBc2NpaVB1bmN0O1xuXG5cbmZ1bmN0aW9uIFN0YXRlSW5saW5lKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHRoaXMuc3JjID0gc3JjO1xuICB0aGlzLmVudiA9IGVudjtcbiAgdGhpcy5tZCA9IG1kO1xuICB0aGlzLnRva2VucyA9IG91dFRva2VucztcbiAgdGhpcy50b2tlbnNfbWV0YSA9IEFycmF5KG91dFRva2Vucy5sZW5ndGgpO1xuXG4gIHRoaXMucG9zID0gMDtcbiAgdGhpcy5wb3NNYXggPSB0aGlzLnNyYy5sZW5ndGg7XG4gIHRoaXMubGV2ZWwgPSAwO1xuICB0aGlzLnBlbmRpbmcgPSAnJztcbiAgdGhpcy5wZW5kaW5nTGV2ZWwgPSAwO1xuXG4gIC8vIFN0b3JlcyB7IHN0YXJ0OiBlbmQgfSBwYWlycy4gVXNlZnVsIGZvciBiYWNrdHJhY2tcbiAgLy8gb3B0aW1pemF0aW9uIG9mIHBhaXJzIHBhcnNlIChlbXBoYXNpcywgc3RyaWtlcykuXG4gIHRoaXMuY2FjaGUgPSB7fTtcblxuICAvLyBMaXN0IG9mIGVtcGhhc2lzLWxpa2UgZGVsaW1pdGVycyBmb3IgY3VycmVudCB0YWdcbiAgdGhpcy5kZWxpbWl0ZXJzID0gW107XG5cbiAgLy8gU3RhY2sgb2YgZGVsaW1pdGVyIGxpc3RzIGZvciB1cHBlciBsZXZlbCB0YWdzXG4gIHRoaXMuX3ByZXZfZGVsaW1pdGVycyA9IFtdO1xuXG4gIC8vIGJhY2t0aWNrIGxlbmd0aCA9PiBsYXN0IHNlZW4gcG9zaXRpb25cbiAgdGhpcy5iYWNrdGlja3MgPSB7fTtcbiAgdGhpcy5iYWNrdGlja3NTY2FubmVkID0gZmFsc2U7XG59XG5cblxuLy8gRmx1c2ggcGVuZGluZyB0ZXh0XG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnB1c2hQZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG9rZW4gPSBuZXcgVG9rZW4oJ3RleHQnLCAnJywgMCk7XG4gIHRva2VuLmNvbnRlbnQgPSB0aGlzLnBlbmRpbmc7XG4gIHRva2VuLmxldmVsID0gdGhpcy5wZW5kaW5nTGV2ZWw7XG4gIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICB0aGlzLnBlbmRpbmcgPSAnJztcbiAgcmV0dXJuIHRva2VuO1xufTtcblxuXG4vLyBQdXNoIG5ldyB0b2tlbiB0byBcInN0cmVhbVwiLlxuLy8gSWYgcGVuZGluZyB0ZXh0IGV4aXN0cyAtIGZsdXNoIGl0IGFzIHRleHQgdG9rZW5cbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICh0eXBlLCB0YWcsIG5lc3RpbmcpIHtcbiAgaWYgKHRoaXMucGVuZGluZykge1xuICAgIHRoaXMucHVzaFBlbmRpbmcoKTtcbiAgfVxuXG4gIHZhciB0b2tlbiA9IG5ldyBUb2tlbih0eXBlLCB0YWcsIG5lc3RpbmcpO1xuICB2YXIgdG9rZW5fbWV0YSA9IG51bGw7XG5cbiAgaWYgKG5lc3RpbmcgPCAwKSB7XG4gICAgLy8gY2xvc2luZyB0YWdcbiAgICB0aGlzLmxldmVsLS07XG4gICAgdGhpcy5kZWxpbWl0ZXJzID0gdGhpcy5fcHJldl9kZWxpbWl0ZXJzLnBvcCgpO1xuICB9XG5cbiAgdG9rZW4ubGV2ZWwgPSB0aGlzLmxldmVsO1xuXG4gIGlmIChuZXN0aW5nID4gMCkge1xuICAgIC8vIG9wZW5pbmcgdGFnXG4gICAgdGhpcy5sZXZlbCsrO1xuICAgIHRoaXMuX3ByZXZfZGVsaW1pdGVycy5wdXNoKHRoaXMuZGVsaW1pdGVycyk7XG4gICAgdGhpcy5kZWxpbWl0ZXJzID0gW107XG4gICAgdG9rZW5fbWV0YSA9IHsgZGVsaW1pdGVyczogdGhpcy5kZWxpbWl0ZXJzIH07XG4gIH1cblxuICB0aGlzLnBlbmRpbmdMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICB0aGlzLnRva2Vuc19tZXRhLnB1c2godG9rZW5fbWV0YSk7XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblxuLy8gU2NhbiBhIHNlcXVlbmNlIG9mIGVtcGhhc2lzLWxpa2UgbWFya2VycywgYW5kIGRldGVybWluZSB3aGV0aGVyXG4vLyBpdCBjYW4gc3RhcnQgYW4gZW1waGFzaXMgc2VxdWVuY2Ugb3IgZW5kIGFuIGVtcGhhc2lzIHNlcXVlbmNlLlxuLy9cbi8vICAtIHN0YXJ0IC0gcG9zaXRpb24gdG8gc2NhbiBmcm9tIChpdCBzaG91bGQgcG9pbnQgYXQgYSB2YWxpZCBtYXJrZXIpO1xuLy8gIC0gY2FuU3BsaXRXb3JkIC0gZGV0ZXJtaW5lIGlmIHRoZXNlIG1hcmtlcnMgY2FuIGJlIGZvdW5kIGluc2lkZSBhIHdvcmRcbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUuc2NhbkRlbGltcyA9IGZ1bmN0aW9uIChzdGFydCwgY2FuU3BsaXRXb3JkKSB7XG4gIHZhciBwb3MgPSBzdGFydCwgbGFzdENoYXIsIG5leHRDaGFyLCBjb3VudCwgY2FuX29wZW4sIGNhbl9jbG9zZSxcbiAgICAgIGlzTGFzdFdoaXRlU3BhY2UsIGlzTGFzdFB1bmN0Q2hhcixcbiAgICAgIGlzTmV4dFdoaXRlU3BhY2UsIGlzTmV4dFB1bmN0Q2hhcixcbiAgICAgIGxlZnRfZmxhbmtpbmcgPSB0cnVlLFxuICAgICAgcmlnaHRfZmxhbmtpbmcgPSB0cnVlLFxuICAgICAgbWF4ID0gdGhpcy5wb3NNYXgsXG4gICAgICBtYXJrZXIgPSB0aGlzLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICAvLyB0cmVhdCBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgYXMgYSB3aGl0ZXNwYWNlXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gdGhpcy5zcmMuY2hhckNvZGVBdChzdGFydCAtIDEpIDogMHgyMDtcblxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gbWFya2VyKSB7IHBvcysrOyB9XG5cbiAgY291bnQgPSBwb3MgLSBzdGFydDtcblxuICAvLyB0cmVhdCBlbmQgb2YgdGhlIGxpbmUgYXMgYSB3aGl0ZXNwYWNlXG4gIG5leHRDaGFyID0gcG9zIDwgbWF4ID8gdGhpcy5zcmMuY2hhckNvZGVBdChwb3MpIDogMHgyMDtcblxuICBpc0xhc3RQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChsYXN0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShsYXN0Q2hhcikpO1xuICBpc05leHRQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChuZXh0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhcikpO1xuXG4gIGlzTGFzdFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobGFzdENoYXIpO1xuICBpc05leHRXaGl0ZVNwYWNlID0gaXNXaGl0ZVNwYWNlKG5leHRDaGFyKTtcblxuICBpZiAoaXNOZXh0V2hpdGVTcGFjZSkge1xuICAgIGxlZnRfZmxhbmtpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpc05leHRQdW5jdENoYXIpIHtcbiAgICBpZiAoIShpc0xhc3RXaGl0ZVNwYWNlIHx8IGlzTGFzdFB1bmN0Q2hhcikpIHtcbiAgICAgIGxlZnRfZmxhbmtpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNMYXN0V2hpdGVTcGFjZSkge1xuICAgIHJpZ2h0X2ZsYW5raW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaXNMYXN0UHVuY3RDaGFyKSB7XG4gICAgaWYgKCEoaXNOZXh0V2hpdGVTcGFjZSB8fCBpc05leHRQdW5jdENoYXIpKSB7XG4gICAgICByaWdodF9mbGFua2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY2FuU3BsaXRXb3JkKSB7XG4gICAgY2FuX29wZW4gID0gbGVmdF9mbGFua2luZyAgJiYgKCFyaWdodF9mbGFua2luZyB8fCBpc0xhc3RQdW5jdENoYXIpO1xuICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nICYmICghbGVmdF9mbGFua2luZyAgfHwgaXNOZXh0UHVuY3RDaGFyKTtcbiAgfSBlbHNlIHtcbiAgICBjYW5fb3BlbiAgPSBsZWZ0X2ZsYW5raW5nO1xuICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5fb3BlbjogIGNhbl9vcGVuLFxuICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlLFxuICAgIGxlbmd0aDogICAgY291bnRcbiAgfTtcbn07XG5cblxuLy8gcmUtZXhwb3J0IFRva2VuIGNsYXNzIHRvIHVzZSBpbiBibG9jayBydWxlc1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLlRva2VuID0gVG9rZW47XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUlubGluZTtcbiIsIi8vIH5+c3RyaWtlIHRocm91Z2h+flxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBJbnNlcnQgZWFjaCBtYXJrZXIgYXMgYSBzZXBhcmF0ZSB0ZXh0IHRva2VuLCBhbmQgYWRkIGl0IHRvIGRlbGltaXRlciBsaXN0XG4vL1xubW9kdWxlLmV4cG9ydHMudG9rZW5pemUgPSBmdW5jdGlvbiBzdHJpa2V0aHJvdWdoKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGksIHNjYW5uZWQsIHRva2VuLCBsZW4sIGNoLFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCk7XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzY2FubmVkID0gc3RhdGUuc2NhbkRlbGltcyhzdGF0ZS5wb3MsIHRydWUpO1xuICBsZW4gPSBzY2FubmVkLmxlbmd0aDtcbiAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcik7XG5cbiAgaWYgKGxlbiA8IDIpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGxlbiAlIDIpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ID0gY2g7XG4gICAgbGVuLS07XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ID0gY2ggKyBjaDtcblxuICAgIHN0YXRlLmRlbGltaXRlcnMucHVzaCh7XG4gICAgICBtYXJrZXI6IG1hcmtlcixcbiAgICAgIGxlbmd0aDogMCwgICAgIC8vIGRpc2FibGUgXCJydWxlIG9mIDNcIiBsZW5ndGggY2hlY2tzIG1lYW50IGZvciBlbXBoYXNpc1xuICAgICAganVtcDogICBpIC8gMiwgLy8gZm9yIGB+fmAgMSBtYXJrZXIgPSAyIGNoYXJhY3RlcnNcbiAgICAgIHRva2VuOiAgc3RhdGUudG9rZW5zLmxlbmd0aCAtIDEsXG4gICAgICBlbmQ6ICAgIC0xLFxuICAgICAgb3BlbjogICBzY2FubmVkLmNhbl9vcGVuLFxuICAgICAgY2xvc2U6ICBzY2FubmVkLmNhbl9jbG9zZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zICs9IHNjYW5uZWQubGVuZ3RoO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5mdW5jdGlvbiBwb3N0UHJvY2VzcyhzdGF0ZSwgZGVsaW1pdGVycykge1xuICB2YXIgaSwgaixcbiAgICAgIHN0YXJ0RGVsaW0sXG4gICAgICBlbmREZWxpbSxcbiAgICAgIHRva2VuLFxuICAgICAgbG9uZU1hcmtlcnMgPSBbXSxcbiAgICAgIG1heCA9IGRlbGltaXRlcnMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgIHN0YXJ0RGVsaW0gPSBkZWxpbWl0ZXJzW2ldO1xuXG4gICAgaWYgKHN0YXJ0RGVsaW0ubWFya2VyICE9PSAweDdFLyogfiAqLykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0RGVsaW0uZW5kID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZW5kRGVsaW0gPSBkZWxpbWl0ZXJzW3N0YXJ0RGVsaW0uZW5kXTtcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS50b2tlbnNbc3RhcnREZWxpbS50b2tlbl07XG4gICAgdG9rZW4udHlwZSAgICA9ICdzX29wZW4nO1xuICAgIHRva2VuLnRhZyAgICAgPSAncyc7XG4gICAgdG9rZW4ubmVzdGluZyA9IDE7XG4gICAgdG9rZW4ubWFya3VwICA9ICd+fic7XG4gICAgdG9rZW4uY29udGVudCA9ICcnO1xuXG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnRva2Vuc1tlbmREZWxpbS50b2tlbl07XG4gICAgdG9rZW4udHlwZSAgICA9ICdzX2Nsb3NlJztcbiAgICB0b2tlbi50YWcgICAgID0gJ3MnO1xuICAgIHRva2VuLm5lc3RpbmcgPSAtMTtcbiAgICB0b2tlbi5tYXJrdXAgID0gJ35+JztcbiAgICB0b2tlbi5jb250ZW50ID0gJyc7XG5cbiAgICBpZiAoc3RhdGUudG9rZW5zW2VuZERlbGltLnRva2VuIC0gMV0udHlwZSA9PT0gJ3RleHQnICYmXG4gICAgICAgIHN0YXRlLnRva2Vuc1tlbmREZWxpbS50b2tlbiAtIDFdLmNvbnRlbnQgPT09ICd+Jykge1xuXG4gICAgICBsb25lTWFya2Vycy5wdXNoKGVuZERlbGltLnRva2VuIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgYSBtYXJrZXIgc2VxdWVuY2UgaGFzIGFuIG9kZCBudW1iZXIgb2YgY2hhcmFjdGVycywgaXQncyBzcGxpdHRlZFxuICAvLyBsaWtlIHRoaXM6IGB+fn5+fmAgLT4gYH5gICsgYH5+YCArIGB+fmAsIGxlYXZpbmcgb25lIG1hcmtlciBhdCB0aGVcbiAgLy8gc3RhcnQgb2YgdGhlIHNlcXVlbmNlLlxuICAvL1xuICAvLyBTbywgd2UgaGF2ZSB0byBtb3ZlIGFsbCB0aG9zZSBtYXJrZXJzIGFmdGVyIHN1YnNlcXVlbnQgc19jbG9zZSB0YWdzLlxuICAvL1xuICB3aGlsZSAobG9uZU1hcmtlcnMubGVuZ3RoKSB7XG4gICAgaSA9IGxvbmVNYXJrZXJzLnBvcCgpO1xuICAgIGogPSBpICsgMTtcblxuICAgIHdoaWxlIChqIDwgc3RhdGUudG9rZW5zLmxlbmd0aCAmJiBzdGF0ZS50b2tlbnNbal0udHlwZSA9PT0gJ3NfY2xvc2UnKSB7XG4gICAgICBqKys7XG4gICAgfVxuXG4gICAgai0tO1xuXG4gICAgaWYgKGkgIT09IGopIHtcbiAgICAgIHRva2VuID0gc3RhdGUudG9rZW5zW2pdO1xuICAgICAgc3RhdGUudG9rZW5zW2pdID0gc3RhdGUudG9rZW5zW2ldO1xuICAgICAgc3RhdGUudG9rZW5zW2ldID0gdG9rZW47XG4gICAgfVxuICB9XG59XG5cblxuLy8gV2FsayB0aHJvdWdoIGRlbGltaXRlciBsaXN0IGFuZCByZXBsYWNlIHRleHQgdG9rZW5zIHdpdGggdGFnc1xuLy9cbm1vZHVsZS5leHBvcnRzLnBvc3RQcm9jZXNzID0gZnVuY3Rpb24gc3RyaWtldGhyb3VnaChzdGF0ZSkge1xuICB2YXIgY3VycixcbiAgICAgIHRva2Vuc19tZXRhID0gc3RhdGUudG9rZW5zX21ldGEsXG4gICAgICBtYXggPSBzdGF0ZS50b2tlbnNfbWV0YS5sZW5ndGg7XG5cbiAgcG9zdFByb2Nlc3Moc3RhdGUsIHN0YXRlLmRlbGltaXRlcnMpO1xuXG4gIGZvciAoY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgIGlmICh0b2tlbnNfbWV0YVtjdXJyXSAmJiB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKSB7XG4gICAgICBwb3N0UHJvY2VzcyhzdGF0ZSwgdG9rZW5zX21ldGFbY3Vycl0uZGVsaW1pdGVycyk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gU2tpcCB0ZXh0IGNoYXJhY3RlcnMgZm9yIHRleHQgdG9rZW4sIHBsYWNlIHRob3NlIHRvIHBlbmRpbmcgYnVmZmVyXG4vLyBhbmQgaW5jcmVtZW50IGN1cnJlbnQgcG9zXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBSdWxlIHRvIHNraXAgcHVyZSB0ZXh0XG4vLyAne30kJUB+Kz06JyByZXNlcnZlZCBmb3IgZXh0ZW50aW9uc1xuXG4vLyAhLCBcIiwgIywgJCwgJSwgJiwgJywgKCwgKSwgKiwgKywgLCwgLSwgLiwgLywgOiwgOywgPCwgPSwgPiwgPywgQCwgWywgXFwsIF0sIF4sIF8sIGAsIHssIHwsIH0sIG9yIH5cblxuLy8gISEhISBEb24ndCBjb25mdXNlIHdpdGggXCJNYXJrZG93biBBU0NJSSBQdW5jdHVhdGlvblwiIGNoYXJzXG4vLyBodHRwOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjE1LyNhc2NpaS1wdW5jdHVhdGlvbi1jaGFyYWN0ZXJcbmZ1bmN0aW9uIGlzVGVybWluYXRvckNoYXIoY2gpIHtcbiAgc3dpdGNoIChjaCkge1xuICAgIGNhc2UgMHgwQS8qIFxcbiAqLzpcbiAgICBjYXNlIDB4MjEvKiAhICovOlxuICAgIGNhc2UgMHgyMy8qICMgKi86XG4gICAgY2FzZSAweDI0LyogJCAqLzpcbiAgICBjYXNlIDB4MjUvKiAlICovOlxuICAgIGNhc2UgMHgyNi8qICYgKi86XG4gICAgY2FzZSAweDJBLyogKiAqLzpcbiAgICBjYXNlIDB4MkIvKiArICovOlxuICAgIGNhc2UgMHgyRC8qIC0gKi86XG4gICAgY2FzZSAweDNBLyogOiAqLzpcbiAgICBjYXNlIDB4M0MvKiA8ICovOlxuICAgIGNhc2UgMHgzRC8qID0gKi86XG4gICAgY2FzZSAweDNFLyogPiAqLzpcbiAgICBjYXNlIDB4NDAvKiBAICovOlxuICAgIGNhc2UgMHg1Qi8qIFsgKi86XG4gICAgY2FzZSAweDVDLyogXFwgKi86XG4gICAgY2FzZSAweDVELyogXSAqLzpcbiAgICBjYXNlIDB4NUUvKiBeICovOlxuICAgIGNhc2UgMHg1Ri8qIF8gKi86XG4gICAgY2FzZSAweDYwLyogYCAqLzpcbiAgICBjYXNlIDB4N0IvKiB7ICovOlxuICAgIGNhc2UgMHg3RC8qIH0gKi86XG4gICAgY2FzZSAweDdFLyogfiAqLzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXh0KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLnBvcztcblxuICB3aGlsZSAocG9zIDwgc3RhdGUucG9zTWF4ICYmICFpc1Rlcm1pbmF0b3JDaGFyKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgcG9zKys7XG4gIH1cblxuICBpZiAocG9zID09PSBzdGF0ZS5wb3MpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhdGUucG9zLCBwb3MpOyB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gQWx0ZXJuYXRpdmUgaW1wbGVtZW50YXRpb24sIGZvciBtZW1vcnkuXG4vL1xuLy8gSXQgY29zdHMgMTAlIG9mIHBlcmZvcm1hbmNlLCBidXQgYWxsb3dzIGV4dGVuZCB0ZXJtaW5hdG9ycyBsaXN0LCBpZiBwbGFjZSBpdFxuLy8gdG8gYFBhcmNlcklubGluZWAgcHJvcGVydHkuIFByb2JhYmx5LCB3aWxsIHN3aXRjaCB0byBpdCBzb21ldGltZSwgc3VjaFxuLy8gZmxleGliaWxpdHkgcmVxdWlyZWQuXG5cbi8qXG52YXIgVEVSTUlOQVRPUl9SRSA9IC9bXFxuISMkJSYqK1xcLTo8PT5AW1xcXFxcXF1eX2B7fX5dLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXh0KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIGlkeCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLnNlYXJjaChURVJNSU5BVE9SX1JFKTtcblxuICAvLyBmaXJzdCBjaGFyIGlzIHRlcm1pbmF0b3IgLT4gZW1wdHkgdGV4dFxuICBpZiAoaWR4ID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIG5vIHRlcm1pbmF0b3IgLT4gdGV4dCB0aWxsIGVuZCBvZiBzdHJpbmdcbiAgaWYgKGlkeCA8IDApIHtcbiAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShwb3MpOyB9XG4gICAgc3RhdGUucG9zID0gc3RhdGUuc3JjLmxlbmd0aDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHBvcywgcG9zICsgaWR4KTsgfVxuXG4gIHN0YXRlLnBvcyArPSBpZHg7XG5cbiAgcmV0dXJuIHRydWU7XG59OyovXG4iLCIvLyBDbGVhbiB1cCB0b2tlbnMgYWZ0ZXIgZW1waGFzaXMgYW5kIHN0cmlrZXRocm91Z2ggcG9zdHByb2Nlc3Npbmc6XG4vLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzIGludG8gb25lIGFuZCByZS1jYWxjdWxhdGUgYWxsIHRva2VuIGxldmVsc1xuLy9cbi8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaW5pdGlhbGx5IGVtcGhhc2lzIGRlbGltaXRlciBtYXJrZXJzICgqLCBfLCB+KVxuLy8gYXJlIHRyZWF0ZWQgYXMgdGhlaXIgb3duIHNlcGFyYXRlIHRleHQgdG9rZW5zLiBUaGVuIGVtcGhhc2lzIHJ1bGUgZWl0aGVyXG4vLyBsZWF2ZXMgdGhlbSBhcyB0ZXh0IChuZWVkZWQgdG8gbWVyZ2Ugd2l0aCBhZGphY2VudCB0ZXh0KSBvciB0dXJucyB0aGVtXG4vLyBpbnRvIG9wZW5pbmcvY2xvc2luZyB0YWdzICh3aGljaCBtZXNzZXMgdXAgbGV2ZWxzIGluc2lkZSkuXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGV4dF9jb2xsYXBzZShzdGF0ZSkge1xuICB2YXIgY3VyciwgbGFzdCxcbiAgICAgIGxldmVsID0gMCxcbiAgICAgIHRva2VucyA9IHN0YXRlLnRva2VucyxcbiAgICAgIG1heCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG5cbiAgZm9yIChjdXJyID0gbGFzdCA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgIC8vIHJlLWNhbGN1bGF0ZSBsZXZlbHMgYWZ0ZXIgZW1waGFzaXMvc3RyaWtldGhyb3VnaCB0dXJucyBzb21lIHRleHQgbm9kZXNcbiAgICAvLyBpbnRvIG9wZW5pbmcvY2xvc2luZyB0YWdzXG4gICAgaWYgKHRva2Vuc1tjdXJyXS5uZXN0aW5nIDwgMCkgbGV2ZWwtLTsgLy8gY2xvc2luZyB0YWdcbiAgICB0b2tlbnNbY3Vycl0ubGV2ZWwgPSBsZXZlbDtcbiAgICBpZiAodG9rZW5zW2N1cnJdLm5lc3RpbmcgPiAwKSBsZXZlbCsrOyAvLyBvcGVuaW5nIHRhZ1xuXG4gICAgaWYgKHRva2Vuc1tjdXJyXS50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgY3VyciArIDEgPCBtYXggJiZcbiAgICAgICAgdG9rZW5zW2N1cnIgKyAxXS50eXBlID09PSAndGV4dCcpIHtcblxuICAgICAgLy8gY29sbGFwc2UgdHdvIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgIHRva2Vuc1tjdXJyICsgMV0uY29udGVudCA9IHRva2Vuc1tjdXJyXS5jb250ZW50ICsgdG9rZW5zW2N1cnIgKyAxXS5jb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VyciAhPT0gbGFzdCkgeyB0b2tlbnNbbGFzdF0gPSB0b2tlbnNbY3Vycl07IH1cblxuICAgICAgbGFzdCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjdXJyICE9PSBsYXN0KSB7XG4gICAgdG9rZW5zLmxlbmd0aCA9IGxhc3Q7XG4gIH1cbn07XG4iLCIvLyBUb2tlbiBjbGFzc1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBjbGFzcyBUb2tlblxuICoqL1xuXG4vKipcbiAqIG5ldyBUb2tlbih0eXBlLCB0YWcsIG5lc3RpbmcpXG4gKlxuICogQ3JlYXRlIG5ldyB0b2tlbiBhbmQgZmlsbCBwYXNzZWQgcHJvcGVydGllcy5cbiAqKi9cbmZ1bmN0aW9uIFRva2VuKHR5cGUsIHRhZywgbmVzdGluZykge1xuICAvKipcbiAgICogVG9rZW4jdHlwZSAtPiBTdHJpbmdcbiAgICpcbiAgICogVHlwZSBvZiB0aGUgdG9rZW4gKHN0cmluZywgZS5nLiBcInBhcmFncmFwaF9vcGVuXCIpXG4gICAqKi9cbiAgdGhpcy50eXBlICAgICA9IHR5cGU7XG5cbiAgLyoqXG4gICAqIFRva2VuI3RhZyAtPiBTdHJpbmdcbiAgICpcbiAgICogaHRtbCB0YWcgbmFtZSwgZS5nLiBcInBcIlxuICAgKiovXG4gIHRoaXMudGFnICAgICAgPSB0YWc7XG5cbiAgLyoqXG4gICAqIFRva2VuI2F0dHJzIC0+IEFycmF5XG4gICAqXG4gICAqIEh0bWwgYXR0cmlidXRlcy4gRm9ybWF0OiBgWyBbIG5hbWUxLCB2YWx1ZTEgXSwgWyBuYW1lMiwgdmFsdWUyIF0gXWBcbiAgICoqL1xuICB0aGlzLmF0dHJzICAgID0gbnVsbDtcblxuICAvKipcbiAgICogVG9rZW4jbWFwIC0+IEFycmF5XG4gICAqXG4gICAqIFNvdXJjZSBtYXAgaW5mby4gRm9ybWF0OiBgWyBsaW5lX2JlZ2luLCBsaW5lX2VuZCBdYFxuICAgKiovXG4gIHRoaXMubWFwICAgICAgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNuZXN0aW5nIC0+IE51bWJlclxuICAgKlxuICAgKiBMZXZlbCBjaGFuZ2UgKG51bWJlciBpbiB7LTEsIDAsIDF9IHNldCksIHdoZXJlOlxuICAgKlxuICAgKiAtICBgMWAgbWVhbnMgdGhlIHRhZyBpcyBvcGVuaW5nXG4gICAqIC0gIGAwYCBtZWFucyB0aGUgdGFnIGlzIHNlbGYtY2xvc2luZ1xuICAgKiAtIGAtMWAgbWVhbnMgdGhlIHRhZyBpcyBjbG9zaW5nXG4gICAqKi9cbiAgdGhpcy5uZXN0aW5nICA9IG5lc3Rpbmc7XG5cbiAgLyoqXG4gICAqIFRva2VuI2xldmVsIC0+IE51bWJlclxuICAgKlxuICAgKiBuZXN0aW5nIGxldmVsLCB0aGUgc2FtZSBhcyBgc3RhdGUubGV2ZWxgXG4gICAqKi9cbiAgdGhpcy5sZXZlbCAgICA9IDA7XG5cbiAgLyoqXG4gICAqIFRva2VuI2NoaWxkcmVuIC0+IEFycmF5XG4gICAqXG4gICAqIEFuIGFycmF5IG9mIGNoaWxkIG5vZGVzIChpbmxpbmUgYW5kIGltZyB0b2tlbnMpXG4gICAqKi9cbiAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRva2VuI2NvbnRlbnQgLT4gU3RyaW5nXG4gICAqXG4gICAqIEluIGEgY2FzZSBvZiBzZWxmLWNsb3NpbmcgdGFnIChjb2RlLCBodG1sLCBmZW5jZSwgZXRjLiksXG4gICAqIGl0IGhhcyBjb250ZW50cyBvZiB0aGlzIHRhZy5cbiAgICoqL1xuICB0aGlzLmNvbnRlbnQgID0gJyc7XG5cbiAgLyoqXG4gICAqIFRva2VuI21hcmt1cCAtPiBTdHJpbmdcbiAgICpcbiAgICogJyonIG9yICdfJyBmb3IgZW1waGFzaXMsIGZlbmNlIHN0cmluZyBmb3IgZmVuY2UsIGV0Yy5cbiAgICoqL1xuICB0aGlzLm1hcmt1cCAgID0gJyc7XG5cbiAgLyoqXG4gICAqIFRva2VuI2luZm8gLT4gU3RyaW5nXG4gICAqXG4gICAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb246XG4gICAqXG4gICAqIC0gSW5mbyBzdHJpbmcgZm9yIFwiZmVuY2VcIiB0b2tlbnNcbiAgICogLSBUaGUgdmFsdWUgXCJhdXRvXCIgZm9yIGF1dG9saW5rIFwibGlua19vcGVuXCIgYW5kIFwibGlua19jbG9zZVwiIHRva2Vuc1xuICAgKiovXG4gIHRoaXMuaW5mbyAgICAgPSAnJztcblxuICAvKipcbiAgICogVG9rZW4jbWV0YSAtPiBPYmplY3RcbiAgICpcbiAgICogQSBwbGFjZSBmb3IgcGx1Z2lucyB0byBzdG9yZSBhbiBhcmJpdHJhcnkgZGF0YVxuICAgKiovXG4gIHRoaXMubWV0YSAgICAgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNibG9jayAtPiBCb29sZWFuXG4gICAqXG4gICAqIFRydWUgZm9yIGJsb2NrLWxldmVsIHRva2VucywgZmFsc2UgZm9yIGlubGluZSB0b2tlbnMuXG4gICAqIFVzZWQgaW4gcmVuZGVyZXIgdG8gY2FsY3VsYXRlIGxpbmUgYnJlYWtzXG4gICAqKi9cbiAgdGhpcy5ibG9jayAgICA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNoaWRkZW4gLT4gQm9vbGVhblxuICAgKlxuICAgKiBJZiBpdCdzIHRydWUsIGlnbm9yZSB0aGlzIGVsZW1lbnQgd2hlbiByZW5kZXJpbmcuIFVzZWQgZm9yIHRpZ2h0IGxpc3RzXG4gICAqIHRvIGhpZGUgcGFyYWdyYXBocy5cbiAgICoqL1xuICB0aGlzLmhpZGRlbiAgID0gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBUb2tlbi5hdHRySW5kZXgobmFtZSkgLT4gTnVtYmVyXG4gKlxuICogU2VhcmNoIGF0dHJpYnV0ZSBpbmRleCBieSBuYW1lLlxuICoqL1xuVG9rZW4ucHJvdG90eXBlLmF0dHJJbmRleCA9IGZ1bmN0aW9uIGF0dHJJbmRleChuYW1lKSB7XG4gIHZhciBhdHRycywgaSwgbGVuO1xuXG4gIGlmICghdGhpcy5hdHRycykgeyByZXR1cm4gLTE7IH1cblxuICBhdHRycyA9IHRoaXMuYXR0cnM7XG5cbiAgZm9yIChpID0gMCwgbGVuID0gYXR0cnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXR0cnNbaV1bMF0gPT09IG5hbWUpIHsgcmV0dXJuIGk7IH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5cbi8qKlxuICogVG9rZW4uYXR0clB1c2goYXR0ckRhdGEpXG4gKlxuICogQWRkIGBbIG5hbWUsIHZhbHVlIF1gIGF0dHJpYnV0ZSB0byBsaXN0LiBJbml0IGF0dHJzIGlmIG5lY2Vzc2FyeVxuICoqL1xuVG9rZW4ucHJvdG90eXBlLmF0dHJQdXNoID0gZnVuY3Rpb24gYXR0clB1c2goYXR0ckRhdGEpIHtcbiAgaWYgKHRoaXMuYXR0cnMpIHtcbiAgICB0aGlzLmF0dHJzLnB1c2goYXR0ckRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cnMgPSBbIGF0dHJEYXRhIF07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBUb2tlbi5hdHRyU2V0KG5hbWUsIHZhbHVlKVxuICpcbiAqIFNldCBgbmFtZWAgYXR0cmlidXRlIHRvIGB2YWx1ZWAuIE92ZXJyaWRlIG9sZCB2YWx1ZSBpZiBleGlzdHMuXG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0clNldCA9IGZ1bmN0aW9uIGF0dHJTZXQobmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkeCA9IHRoaXMuYXR0ckluZGV4KG5hbWUpLFxuICAgICAgYXR0ckRhdGEgPSBbIG5hbWUsIHZhbHVlIF07XG5cbiAgaWYgKGlkeCA8IDApIHtcbiAgICB0aGlzLmF0dHJQdXNoKGF0dHJEYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmF0dHJzW2lkeF0gPSBhdHRyRGF0YTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFRva2VuLmF0dHJHZXQobmFtZSlcbiAqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGF0dHJpYnV0ZSBgbmFtZWAsIG9yIG51bGwgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0ckdldCA9IGZ1bmN0aW9uIGF0dHJHZXQobmFtZSkge1xuICB2YXIgaWR4ID0gdGhpcy5hdHRySW5kZXgobmFtZSksIHZhbHVlID0gbnVsbDtcbiAgaWYgKGlkeCA+PSAwKSB7XG4gICAgdmFsdWUgPSB0aGlzLmF0dHJzW2lkeF1bMV07XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIFRva2VuLmF0dHJKb2luKG5hbWUsIHZhbHVlKVxuICpcbiAqIEpvaW4gdmFsdWUgdG8gZXhpc3RpbmcgYXR0cmlidXRlIHZpYSBzcGFjZS4gT3IgY3JlYXRlIG5ldyBhdHRyaWJ1dGUgaWYgbm90XG4gKiBleGlzdHMuIFVzZWZ1bCB0byBvcGVyYXRlIHdpdGggdG9rZW4gY2xhc3Nlcy5cbiAqKi9cblRva2VuLnByb3RvdHlwZS5hdHRySm9pbiA9IGZ1bmN0aW9uIGF0dHJKb2luKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZHggPSB0aGlzLmF0dHJJbmRleChuYW1lKTtcblxuICBpZiAoaWR4IDwgMCkge1xuICAgIHRoaXMuYXR0clB1c2goWyBuYW1lLCB2YWx1ZSBdKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmF0dHJzW2lkeF1bMV0gPSB0aGlzLmF0dHJzW2lkeF1bMV0gKyAnICcgKyB2YWx1ZTtcbiAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIiwiXG4ndXNlIHN0cmljdCc7XG5cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG52YXIgZGVjb2RlQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RGVjb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGRlY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgIGNhY2hlLnB1c2goY2gpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4Y2x1ZGUubGVuZ3RoOyBpKyspIHtcbiAgICBjaCA9IGV4Y2x1ZGUuY2hhckNvZGVBdChpKTtcbiAgICBjYWNoZVtjaF0gPSAnJScgKyAoJzAnICsgY2gudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuXG4vLyBEZWNvZGUgcGVyY2VudC1lbmNvZGVkIHN0cmluZy5cbi8vXG5mdW5jdGlvbiBkZWNvZGUoc3RyaW5nLCBleGNsdWRlKSB7XG4gIHZhciBjYWNoZTtcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgZXhjbHVkZSA9IGRlY29kZS5kZWZhdWx0Q2hhcnM7XG4gIH1cblxuICBjYWNoZSA9IGdldERlY29kZUNhY2hlKGV4Y2x1ZGUpO1xuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2dpLCBmdW5jdGlvbihzZXEpIHtcbiAgICB2YXIgaSwgbCwgYjEsIGIyLCBiMywgYjQsIGNocixcbiAgICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gc2VxLmxlbmd0aDsgaSA8IGw7IGkgKz0gMykge1xuICAgICAgYjEgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEsIGkgKyAzKSwgMTYpO1xuXG4gICAgICBpZiAoYjEgPCAweDgwKSB7XG4gICAgICAgIHJlc3VsdCArPSBjYWNoZVtiMV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhFMCkgPT09IDB4QzAgJiYgKGkgKyAzIDwgbCkpIHtcbiAgICAgICAgLy8gMTEweHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNociA9ICgoYjEgPDwgNikgJiAweDdDMCkgfCAoYjIgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaHIgPCAweDgwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDM7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RjApID09PSAweEUwICYmIChpICsgNiA8IGwpKSB7XG4gICAgICAgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KTtcbiAgICAgICAgYjMgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDcsIGkgKyA5KSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjMgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNociA9ICgoYjEgPDwgMTIpICYgMHhGMDAwKSB8ICgoYjIgPDwgNikgJiAweEZDMCkgfCAoYjMgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaHIgPCAweDgwMCB8fCAoY2hyID49IDB4RDgwMCAmJiBjaHIgPD0gMHhERkZGKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gNjtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGOCkgPT09IDB4RjAgJiYgKGkgKyA5IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMTEweHggMTB4eHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuICAgICAgICBiMyA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNywgaSArIDkpLCAxNik7XG4gICAgICAgIGI0ID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyAxMCwgaSArIDEyKSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjMgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjQgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNociA9ICgoYjEgPDwgMTgpICYgMHgxQzAwMDApIHwgKChiMiA8PCAxMikgJiAweDNGMDAwKSB8ICgoYjMgPDwgNikgJiAweEZDMCkgfCAoYjQgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaHIgPCAweDEwMDAwIHx8IGNociA+IDB4MTBGRkZGKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCArIChjaHIgPj4gMTApLCAweERDMDAgKyAoY2hyICYgMHgzRkYpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ICs9ICdcXHVmZmZkJztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuXG5kZWNvZGUuZGVmYXVsdENoYXJzICAgPSAnOy8/OkAmPSskLCMnO1xuZGVjb2RlLmNvbXBvbmVudENoYXJzID0gJyc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgZW5jb2RlQ2FjaGUgPSB7fTtcblxuXG4vLyBDcmVhdGUgYSBsb29rdXAgYXJyYXkgd2hlcmUgYW55dGhpbmcgYnV0IGNoYXJhY3RlcnMgaW4gYGNoYXJzYCBzdHJpbmdcbi8vIGFuZCBhbHBoYW51bWVyaWMgY2hhcnMgaXMgcGVyY2VudC1lbmNvZGVkLlxuLy9cbmZ1bmN0aW9uIGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpIHtcbiAgdmFyIGksIGNoLCBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdO1xuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlOyB9XG5cbiAgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXSA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcblxuICAgIGlmICgvXlswLTlhLXpdJC9pLnRlc3QoY2gpKSB7XG4gICAgICAvLyBhbHdheXMgYWxsb3cgdW5lbmNvZGVkIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgICBjYWNoZS5wdXNoKGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUucHVzaCgnJScgKyAoJzAnICsgaS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW2V4Y2x1ZGUuY2hhckNvZGVBdChpKV0gPSBleGNsdWRlW2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIEVuY29kZSB1bnNhZmUgY2hhcmFjdGVycyB3aXRoIHBlcmNlbnQtZW5jb2RpbmcsIHNraXBwaW5nIGFscmVhZHlcbi8vIGVuY29kZWQgc2VxdWVuY2VzLlxuLy9cbi8vICAtIHN0cmluZyAgICAgICAtIHN0cmluZyB0byBlbmNvZGVcbi8vICAtIGV4Y2x1ZGUgICAgICAtIGxpc3Qgb2YgY2hhcmFjdGVycyB0byBpZ25vcmUgKGluIGFkZGl0aW9uIHRvIGEtekEtWjAtOSlcbi8vICAtIGtlZXBFc2NhcGVkICAtIGRvbid0IGVuY29kZSAnJScgaW4gYSBjb3JyZWN0IGVzY2FwZSBzZXF1ZW5jZSAoZGVmYXVsdDogdHJ1ZSlcbi8vXG5mdW5jdGlvbiBlbmNvZGUoc3RyaW5nLCBleGNsdWRlLCBrZWVwRXNjYXBlZCkge1xuICB2YXIgaSwgbCwgY29kZSwgbmV4dENvZGUsIGNhY2hlLFxuICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBleGNsdWRlICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGVuY29kZShzdHJpbmcsIGtlZXBFc2NhcGVkKVxuICAgIGtlZXBFc2NhcGVkICA9IGV4Y2x1ZGU7XG4gICAgZXhjbHVkZSA9IGVuY29kZS5kZWZhdWx0Q2hhcnM7XG4gIH1cblxuICBpZiAodHlwZW9mIGtlZXBFc2NhcGVkID09PSAndW5kZWZpbmVkJykge1xuICAgIGtlZXBFc2NhcGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgZm9yIChpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoa2VlcEVzY2FwZWQgJiYgY29kZSA9PT0gMHgyNSAvKiAlICovICYmIGkgKyAyIDwgbCkge1xuICAgICAgaWYgKC9eWzAtOWEtZl17Mn0kL2kudGVzdChzdHJpbmcuc2xpY2UoaSArIDEsIGkgKyAzKSkpIHtcbiAgICAgICAgcmVzdWx0ICs9IHN0cmluZy5zbGljZShpLCBpICsgMyk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgIHJlc3VsdCArPSBjYWNoZVtjb2RlXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REZGRikge1xuICAgICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhEQkZGICYmIGkgKyAxIDwgbCkge1xuICAgICAgICBuZXh0Q29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgaWYgKG5leHRDb2RlID49IDB4REMwMCAmJiBuZXh0Q29kZSA8PSAweERGRkYpIHtcbiAgICAgICAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSArIHN0cmluZ1tpICsgMV0pO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0ICs9ICclRUYlQkYlQkQnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZW5jb2RlLmRlZmF1bHRDaGFycyAgID0gXCI7Lz86QCY9KyQsLV8uIX4qJygpI1wiO1xuZW5jb2RlLmNvbXBvbmVudENoYXJzID0gXCItXy4hfionKClcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9ybWF0KHVybCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgcmVzdWx0ICs9IHVybC5wcm90b2NvbCB8fCAnJztcbiAgcmVzdWx0ICs9IHVybC5zbGFzaGVzID8gJy8vJyA6ICcnO1xuICByZXN1bHQgKz0gdXJsLmF1dGggPyB1cmwuYXV0aCArICdAJyA6ICcnO1xuXG4gIGlmICh1cmwuaG9zdG5hbWUgJiYgdXJsLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAvLyBpcHY2IGFkZHJlc3NcbiAgICByZXN1bHQgKz0gJ1snICsgdXJsLmhvc3RuYW1lICsgJ10nO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSB1cmwuaG9zdG5hbWUgfHwgJyc7XG4gIH1cblxuICByZXN1bHQgKz0gdXJsLnBvcnQgPyAnOicgKyB1cmwucG9ydCA6ICcnO1xuICByZXN1bHQgKz0gdXJsLnBhdGhuYW1lIHx8ICcnO1xuICByZXN1bHQgKz0gdXJsLnNlYXJjaCB8fCAnJztcbiAgcmVzdWx0ICs9IHVybC5oYXNoIHx8ICcnO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzLmVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xubW9kdWxlLmV4cG9ydHMuZm9ybWF0ID0gcmVxdWlyZSgnLi9mb3JtYXQnKTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlICA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vXG4vLyBDaGFuZ2VzIGZyb20gam95ZW50L25vZGU6XG4vL1xuLy8gMS4gTm8gbGVhZGluZyBzbGFzaCBpbiBwYXRocyxcbi8vICAgIGUuZy4gaW4gYHVybC5wYXJzZSgnaHR0cDovL2Zvbz9iYXInKWAgcGF0aG5hbWUgaXMgYGAsIG5vdCBgL2Bcbi8vXG4vLyAyLiBCYWNrc2xhc2hlcyBhcmUgbm90IHJlcGxhY2VkIHdpdGggc2xhc2hlcyxcbi8vICAgIHNvIGBodHRwOlxcXFxleGFtcGxlLm9yZ1xcYCBpcyB0cmVhdGVkIGxpa2UgYSByZWxhdGl2ZSBwYXRoXG4vL1xuLy8gMy4gVHJhaWxpbmcgY29sb24gaXMgdHJlYXRlZCBsaWtlIGEgcGFydCBvZiB0aGUgcGF0aCxcbi8vICAgIGkuZS4gaW4gYGh0dHA6Ly9leGFtcGxlLm9yZzpmb29gIHBhdGhuYW1lIGlzIGA6Zm9vYFxuLy9cbi8vIDQuIE5vdGhpbmcgaXMgVVJMLWVuY29kZWQgaW4gdGhlIHJlc3VsdGluZyBvYmplY3QsXG4vLyAgICAoaW4gam95ZW50L25vZGUgc29tZSBjaGFycyBpbiBhdXRoIGFuZCBwYXRocyBhcmUgZW5jb2RlZClcbi8vXG4vLyA1LiBgdXJsLnBhcnNlKClgIGRvZXMgbm90IGhhdmUgYHBhcnNlUXVlcnlTdHJpbmdgIGFyZ3VtZW50XG4vL1xuLy8gNi4gUmVtb3ZlZCBleHRyYW5lb3VzIHJlc3VsdCBwcm9wZXJ0aWVzOiBgaG9zdGAsIGBwYXRoYCwgYHF1ZXJ5YCwgZXRjLixcbi8vICAgIHdoaWNoIGNhbiBiZSBjb25zdHJ1Y3RlZCB1c2luZyBvdGhlciBwYXJ0cyBvZiB0aGUgdXJsLlxuLy9cblxuXG5mdW5jdGlvbiBVcmwoKSB7XG4gIHRoaXMucHJvdG9jb2wgPSBudWxsO1xuICB0aGlzLnNsYXNoZXMgPSBudWxsO1xuICB0aGlzLmF1dGggPSBudWxsO1xuICB0aGlzLnBvcnQgPSBudWxsO1xuICB0aGlzLmhvc3RuYW1lID0gbnVsbDtcbiAgdGhpcy5oYXNoID0gbnVsbDtcbiAgdGhpcy5zZWFyY2ggPSBudWxsO1xuICB0aGlzLnBhdGhuYW1lID0gbnVsbDtcbn1cblxuLy8gUmVmZXJlbmNlOiBSRkMgMzk4NiwgUkZDIDE4MDgsIFJGQyAyMzk2XG5cbi8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG4vLyBjb21waWxlZCBvbmNlIG9uIHRoZSBmaXJzdCBtb2R1bGUgbG9hZC5cbnZhciBwcm90b2NvbFBhdHRlcm4gPSAvXihbYS16MC05ListXSs6KS9pLFxuICAgIHBvcnRQYXR0ZXJuID0gLzpbMC05XSokLyxcblxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYSBzaW1wbGUgcGF0aCBVUkxcbiAgICBzaW1wbGVQYXRoUGF0dGVybiA9IC9eKFxcL1xcLz8oPyFcXC8pW15cXD9cXHNdKikoXFw/W15cXHNdKik/JC8sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuICAgIC8vIFdlIGFjdHVhbGx5IGp1c3QgYXV0by1lc2NhcGUgdGhlc2UuXG4gICAgZGVsaW1zID0gWyAnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCcgXSxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGZvciB2YXJpb3VzIHJlYXNvbnMuXG4gICAgdW53aXNlID0gWyAneycsICd9JywgJ3wnLCAnXFxcXCcsICdeJywgJ2AnIF0uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsgJ1xcJycgXS5jb25jYXQodW53aXNlKSxcbiAgICAvLyBDaGFyYWN0ZXJzIHRoYXQgYXJlIG5ldmVyIGV2ZXIgYWxsb3dlZCBpbiBhIGhvc3RuYW1lLlxuICAgIC8vIE5vdGUgdGhhdCBhbnkgaW52YWxpZCBjaGFycyBhcmUgYWxzbyBoYW5kbGVkLCBidXQgdGhlc2VcbiAgICAvLyBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgKmV4cGVjdGVkKiB0byBiZSBzZWVuLCBzbyB3ZSBmYXN0LXBhdGhcbiAgICAvLyB0aGVtLlxuICAgIG5vbkhvc3RDaGFycyA9IFsgJyUnLCAnLycsICc/JywgJzsnLCAnIycgXS5jb25jYXQoYXV0b0VzY2FwZSksXG4gICAgaG9zdEVuZGluZ0NoYXJzID0gWyAnLycsICc/JywgJyMnIF0sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eWythLXowLTlBLVpfLV17MCw2M30kLyxcbiAgICBob3N0bmFtZVBhcnRTdGFydCA9IC9eKFsrYS16MC05QS1aXy1dezAsNjN9KSguKikkLyxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBjYW4gYWxsb3cgXCJ1bnNhZmVcIiBhbmQgXCJ1bndpc2VcIiBjaGFycy5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zY3JpcHQtdXJsICovXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgbmV2ZXIgaGF2ZSBhIGhvc3RuYW1lLlxuICAgIGhvc3RsZXNzUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBhbHdheXMgY29udGFpbiBhIC8vIGJpdC5cbiAgICBzbGFzaGVkUHJvdG9jb2wgPSB7XG4gICAgICAnaHR0cCc6IHRydWUsXG4gICAgICAnaHR0cHMnOiB0cnVlLFxuICAgICAgJ2Z0cCc6IHRydWUsXG4gICAgICAnZ29waGVyJzogdHJ1ZSxcbiAgICAgICdmaWxlJzogdHJ1ZSxcbiAgICAgICdodHRwOic6IHRydWUsXG4gICAgICAnaHR0cHM6JzogdHJ1ZSxcbiAgICAgICdmdHA6JzogdHJ1ZSxcbiAgICAgICdnb3BoZXI6JzogdHJ1ZSxcbiAgICAgICdmaWxlOic6IHRydWVcbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2NyaXB0LXVybCAqL1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgdXJsIGluc3RhbmNlb2YgVXJsKSB7IHJldHVybiB1cmw7IH1cblxuICB2YXIgdSA9IG5ldyBVcmwoKTtcbiAgdS5wYXJzZSh1cmwsIHNsYXNoZXNEZW5vdGVIb3N0KTtcbiAgcmV0dXJuIHU7XG59XG5cblVybC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbih1cmwsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIHZhciBpLCBsLCBsb3dlclByb3RvLCBoZWMsIHNsYXNoZXMsXG4gICAgICByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIGlmICghc2xhc2hlc0Rlbm90ZUhvc3QgJiYgdXJsLnNwbGl0KCcjJykubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gVHJ5IGZhc3QgcGF0aCByZWdleHBcbiAgICB2YXIgc2ltcGxlUGF0aCA9IHNpbXBsZVBhdGhQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gICAgaWYgKHNpbXBsZVBhdGgpIHtcbiAgICAgIHRoaXMucGF0aG5hbWUgPSBzaW1wbGVQYXRoWzFdO1xuICAgICAgaWYgKHNpbXBsZVBhdGhbMl0pIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzaW1wbGVQYXRoWzJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3RvID0gcHJvdG9jb2xQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gIGlmIChwcm90bykge1xuICAgIHByb3RvID0gcHJvdG9bMF07XG4gICAgbG93ZXJQcm90byA9IHByb3RvLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wcm90b2NvbCA9IHByb3RvO1xuICAgIHJlc3QgPSByZXN0LnN1YnN0cihwcm90by5sZW5ndGgpO1xuICB9XG5cbiAgLy8gZmlndXJlIG91dCBpZiBpdCdzIGdvdCBhIGhvc3RcbiAgLy8gdXNlckBzZXJ2ZXIgaXMgKmFsd2F5cyogaW50ZXJwcmV0ZWQgYXMgYSBob3N0bmFtZSwgYW5kIHVybFxuICAvLyByZXNvbHV0aW9uIHdpbGwgdHJlYXQgLy9mb28vYmFyIGFzIGhvc3Q9Zm9vLHBhdGg9YmFyIGJlY2F1c2UgdGhhdCdzXG4gIC8vIGhvdyB0aGUgYnJvd3NlciByZXNvbHZlcyByZWxhdGl2ZSBVUkxzLlxuICBpZiAoc2xhc2hlc0Rlbm90ZUhvc3QgfHwgcHJvdG8gfHwgcmVzdC5tYXRjaCgvXlxcL1xcL1teQFxcL10rQFteQFxcL10rLykpIHtcbiAgICBzbGFzaGVzID0gcmVzdC5zdWJzdHIoMCwgMikgPT09ICcvLyc7XG4gICAgaWYgKHNsYXNoZXMgJiYgIShwcm90byAmJiBob3N0bGVzc1Byb3RvY29sW3Byb3RvXSkpIHtcbiAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKTtcbiAgICAgIHRoaXMuc2xhc2hlcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFob3N0bGVzc1Byb3RvY29sW3Byb3RvXSAmJlxuICAgICAgKHNsYXNoZXMgfHwgKHByb3RvICYmICFzbGFzaGVkUHJvdG9jb2xbcHJvdG9dKSkpIHtcblxuICAgIC8vIHRoZXJlJ3MgYSBob3N0bmFtZS5cbiAgICAvLyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgLywgPywgOywgb3IgIyBlbmRzIHRoZSBob3N0LlxuICAgIC8vXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gQCBpbiB0aGUgaG9zdG5hbWUsIHRoZW4gbm9uLWhvc3QgY2hhcnMgKmFyZSogYWxsb3dlZFxuICAgIC8vIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IEAgc2lnbiwgdW5sZXNzIHNvbWUgaG9zdC1lbmRpbmcgY2hhcmFjdGVyXG4gICAgLy8gY29tZXMgKmJlZm9yZSogdGhlIEAtc2lnbi5cbiAgICAvLyBVUkxzIGFyZSBvYm5veGlvdXMuXG4gICAgLy9cbiAgICAvLyBleDpcbiAgICAvLyBodHRwOi8vYUBiQGMvID0+IHVzZXI6YUBiIGhvc3Q6Y1xuICAgIC8vIGh0dHA6Ly9hQGI/QGMgPT4gdXNlcjphIGhvc3Q6YyBwYXRoOi8/QGNcblxuICAgIC8vIHYwLjEyIFRPRE8oaXNhYWNzKTogVGhpcyBpcyBub3QgcXVpdGUgaG93IENocm9tZSBkb2VzIHRoaW5ncy5cbiAgICAvLyBSZXZpZXcgb3VyIHRlc3QgY2FzZSBhZ2FpbnN0IGJyb3dzZXJzIG1vcmUgY29tcHJlaGVuc2l2ZWx5LlxuXG4gICAgLy8gZmluZCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW55IGhvc3RFbmRpbmdDaGFyc1xuICAgIHZhciBob3N0RW5kID0gLTE7XG4gICAgZm9yIChpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaGVjID0gcmVzdC5pbmRleE9mKGhvc3RFbmRpbmdDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpIHtcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhdCB0aGlzIHBvaW50LCBlaXRoZXIgd2UgaGF2ZSBhbiBleHBsaWNpdCBwb2ludCB3aGVyZSB0aGVcbiAgICAvLyBhdXRoIHBvcnRpb24gY2Fubm90IGdvIHBhc3QsIG9yIHRoZSBsYXN0IEAgY2hhciBpcyB0aGUgZGVjaWRlci5cbiAgICB2YXIgYXV0aCwgYXRTaWduO1xuICAgIGlmIChob3N0RW5kID09PSAtMSkge1xuICAgICAgLy8gYXRTaWduIGNhbiBiZSBhbnl3aGVyZS5cbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXRTaWduIG11c3QgYmUgaW4gYXV0aCBwb3J0aW9uLlxuICAgICAgLy8gaHR0cDovL2FAYi9jQGQgPT4gaG9zdDpiIGF1dGg6YSBwYXRoOi9jQGRcbiAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnLCBob3N0RW5kKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgd2UgaGF2ZSBhIHBvcnRpb24gd2hpY2ggaXMgZGVmaW5pdGVseSB0aGUgYXV0aC5cbiAgICAvLyBQdWxsIHRoYXQgb2ZmLlxuICAgIGlmIChhdFNpZ24gIT09IC0xKSB7XG4gICAgICBhdXRoID0gcmVzdC5zbGljZSgwLCBhdFNpZ24pO1xuICAgICAgcmVzdCA9IHJlc3Quc2xpY2UoYXRTaWduICsgMSk7XG4gICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIH1cblxuICAgIC8vIHRoZSBob3N0IGlzIHRoZSByZW1haW5pbmcgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IG5vbi1ob3N0IGNoYXJcbiAgICBob3N0RW5kID0gLTE7XG4gICAgZm9yIChpID0gMDsgaSA8IG5vbkhvc3RDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpIHtcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgd2Ugc3RpbGwgaGF2ZSBub3QgaGl0IGl0LCB0aGVuIHRoZSBlbnRpcmUgdGhpbmcgaXMgYSBob3N0LlxuICAgIGlmIChob3N0RW5kID09PSAtMSkge1xuICAgICAgaG9zdEVuZCA9IHJlc3QubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChyZXN0W2hvc3RFbmQgLSAxXSA9PT0gJzonKSB7IGhvc3RFbmQtLTsgfVxuICAgIHZhciBob3N0ID0gcmVzdC5zbGljZSgwLCBob3N0RW5kKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZShob3N0RW5kKTtcblxuICAgIC8vIHB1bGwgb3V0IHBvcnQuXG4gICAgdGhpcy5wYXJzZUhvc3QoaG9zdCk7XG5cbiAgICAvLyB3ZSd2ZSBpbmRpY2F0ZWQgdGhhdCB0aGVyZSBpcyBhIGhvc3RuYW1lLFxuICAgIC8vIHNvIGV2ZW4gaWYgaXQncyBlbXB0eSwgaXQgaGFzIHRvIGJlIHByZXNlbnQuXG4gICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG5cbiAgICAvLyBpZiBob3N0bmFtZSBiZWdpbnMgd2l0aCBbIGFuZCBlbmRzIHdpdGggXVxuICAgIC8vIGFzc3VtZSB0aGF0IGl0J3MgYW4gSVB2NiBhZGRyZXNzLlxuICAgIHZhciBpcHY2SG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lWzBdID09PSAnWycgJiZcbiAgICAgICAgdGhpcy5ob3N0bmFtZVt0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDFdID09PSAnXSc7XG5cbiAgICAvLyB2YWxpZGF0ZSBhIGxpdHRsZS5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgdmFyIGhvc3RwYXJ0cyA9IHRoaXMuaG9zdG5hbWUuc3BsaXQoL1xcLi8pO1xuICAgICAgZm9yIChpID0gMCwgbCA9IGhvc3RwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBob3N0cGFydHNbaV07XG4gICAgICAgIGlmICghcGFydCkgeyBjb250aW51ZTsgfVxuICAgICAgICBpZiAoIXBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICB2YXIgbmV3cGFydCA9ICcnO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gcGFydC5sZW5ndGg7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LmNoYXJDb2RlQXQoaikgPiAxMjcpIHtcbiAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSBub24tQVNDSUkgY2hhciB3aXRoIGEgdGVtcG9yYXJ5IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcyB0byBtYWtlIHN1cmUgc2l6ZSBvZiBob3N0bmFtZSBpcyBub3RcbiAgICAgICAgICAgICAgLy8gYnJva2VuIGJ5IHJlcGxhY2luZyBub24tQVNDSUkgYnkgbm90aGluZ1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9ICd4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gcGFydFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2UgdGVzdCBhZ2FpbiB3aXRoIEFTQ0lJIGNoYXIgb25seVxuICAgICAgICAgIGlmICghbmV3cGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkUGFydHMgPSBob3N0cGFydHMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB2YXIgbm90SG9zdCA9IGhvc3RwYXJ0cy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICB2YXIgYml0ID0gcGFydC5tYXRjaChob3N0bmFtZVBhcnRTdGFydCk7XG4gICAgICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICAgIHZhbGlkUGFydHMucHVzaChiaXRbMV0pO1xuICAgICAgICAgICAgICBub3RIb3N0LnVuc2hpZnQoYml0WzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RIb3N0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXN0ID0gbm90SG9zdC5qb2luKCcuJykgKyByZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHZhbGlkUGFydHMuam9pbignLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9zdG5hbWUubGVuZ3RoID4gaG9zdG5hbWVNYXhMZW4pIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBzdHJpcCBbIGFuZCBdIGZyb20gdGhlIGhvc3RuYW1lXG4gICAgLy8gdGhlIGhvc3QgZmllbGQgc3RpbGwgcmV0YWlucyB0aGVtLCB0aG91Z2hcbiAgICBpZiAoaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS5zdWJzdHIoMSwgdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAyKTtcbiAgICB9XG4gIH1cblxuICAvLyBjaG9wIG9mZiBmcm9tIHRoZSB0YWlsIGZpcnN0LlxuICB2YXIgaGFzaCA9IHJlc3QuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaCAhPT0gLTEpIHtcbiAgICAvLyBnb3QgYSBmcmFnbWVudCBzdHJpbmcuXG4gICAgdGhpcy5oYXNoID0gcmVzdC5zdWJzdHIoaGFzaCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgaGFzaCk7XG4gIH1cbiAgdmFyIHFtID0gcmVzdC5pbmRleE9mKCc/Jyk7XG4gIGlmIChxbSAhPT0gLTEpIHtcbiAgICB0aGlzLnNlYXJjaCA9IHJlc3Quc3Vic3RyKHFtKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBxbSk7XG4gIH1cbiAgaWYgKHJlc3QpIHsgdGhpcy5wYXRobmFtZSA9IHJlc3Q7IH1cbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnJztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbihob3N0KSB7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB7IHRoaXMuaG9zdG5hbWUgPSBob3N0OyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybFBhcnNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcmtkb3duLWJvZHkgLm9jdGljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYW5jaG9yIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5hbmNob3I6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoMiAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGgzIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDQgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNSAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg2IC5vY3RpY29uLWxpbmsge1xcbiAgY29sb3I6ICMxYjFmMjM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMTpob3ZlciAuYW5jaG9yLFxcbi5tYXJrZG93bi1ib2R5IGgyOmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDM6aG92ZXIgLmFuY2hvcixcXG4ubWFya2Rvd24tYm9keSBoNDpob3ZlciAuYW5jaG9yLFxcbi5tYXJrZG93bi1ib2R5IGg1OmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDY6aG92ZXIgLmFuY2hvciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoMjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDM6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDY6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXFxuLm1hcmtkb3duLWJvZHkgaDI6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXFxuLm1hcmtkb3duLWJvZHkgaDU6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogJyAnO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgYXJpYS1oaWRkZW49J3RydWUnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J000IDloMXYxSDRjLTEuNSAwLTMtMS42OS0zLTMuNVMyLjU1IDMgNCAzaDRjMS40NSAwIDMgMS42OSAzIDMuNSAwIDEuNDEtLjkxIDIuNzItMiAzLjI1VjguNTljLjU4LS40NSAxLTEuMjcgMS0yLjA5QzEwIDUuMjIgOC45OCA0IDggNEg0Yy0uOTggMC0yIDEuMjItMiAyLjVTMyA5IDQgOXptOS0zaC0xdjFoMWMxIDAgMiAxLjIyIDIgMi41UzEzLjk4IDEyIDEzIDEySDljLS45OCAwLTItMS4yMi0yLTIuNSAwLS44My40Mi0xLjY0IDEtMi4wOVY2LjI1Yy0xLjA5LjUzLTIgMS44NC0yIDMuMjVDNiAxMS4zMSA3LjU1IDEzIDkgMTNoNGMxLjQ1IDAgMy0xLjY5IDMtMy41UzE0LjUgNiAxMyA2eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59Lm1hcmtkb3duLWJvZHkge1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICMyNDI5MmU7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGE6YWN0aXZlLFxcbi5tYXJrZG93bi1ib2R5IGE6aG92ZXIge1xcbiAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IC42N2VtIDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGNvZGUsXFxuLm1hcmtkb3duLWJvZHkga2JkLFxcbi5tYXJrZG93bi1ib2R5IHByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5pdGlhbDtcXG4gICAgICAgICAgYm94LXNpemluZzogaW5pdGlhbDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbnB1dCB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbnB1dCB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgW3R5cGU9Y2hlY2tib3hdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5ICoge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBhIHtcXG4gIGNvbG9yOiAjMDM2NmQ2O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBzdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaHIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZTJlNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaHI6YWZ0ZXIsXFxuLm1hcmtkb3duLWJvZHkgaHI6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRkLFxcbi5tYXJrZG93bi1ib2R5IHRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRldGFpbHMgc3VtbWFyeSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGtiZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgZm9udDogMTFweCBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICBjb2xvcjogIzQ0NGQ1NjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2QxZDVkYTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2QxZDVkYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIsXFxuLm1hcmtkb3duLWJvZHkgaDMsXFxuLm1hcmtkb3duLWJvZHkgaDQsXFxuLm1hcmtkb3duLWJvZHkgaDUsXFxuLm1hcmtkb3duLWJvZHkgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgzLFxcbi5tYXJrZG93bi1ib2R5IGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNSxcXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgb2wgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgb2wgdWwgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgdWwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1hbHBoYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGNvZGUsXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbi5tYXJrZG93bi1ib2R5IGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IDpjaGVja2VkKy5yYWRpby1sYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDM2NmQ2O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWU0ZTghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyLTAge1xcbiAgYm9yZGVyOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJvcmRlci1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWU0ZTghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucm91bmRlZC0xIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJnLWdyYXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYyFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50ZXh0LWdyYXktbGlnaHQge1xcbiAgY29sb3I6ICM2YTczN2QhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLm15LTIge1xcbiAgbWFyZ2luLXRvcDogOHB4IWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5weS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTEge1xcbiAgcGFkZGluZy1sZWZ0OiA0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiA4cHghaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0zLFxcbi5tYXJrZG93bi1ib2R5IC5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMTZweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5weC0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuZjYge1xcbiAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmxoLWNvbmRlbnNlZCB7XFxuICBsaW5lLWhlaWdodDogMS4yNSFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50ZXh0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jIHtcXG4gIGNvbG9yOiAjNmE3MzdkO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYzEsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXYge1xcbiAgY29sb3I6ICMwMDVjYzU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1lLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1lbiB7XFxuICBjb2xvcjogIzZmNDJjMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXMxLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zbWkge1xcbiAgY29sb3I6ICMyNDI5MmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1lbnQge1xcbiAgY29sb3I6ICMyMjg2M2E7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1rIHtcXG4gIGNvbG9yOiAjZDczYTQ5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtcGRzLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zIC5wbC1wc2UgLnBsLXMxLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zcixcXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLWNjZSxcXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLXNyYSxcXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLXNyZSB7XFxuICBjb2xvcjogIzAzMmY2MjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNtdyxcXG4ubWFya2Rvd24tYm9keSAucGwtdiB7XFxuICBjb2xvcjogI2UzNjIwOTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWJ1IHtcXG4gIGNvbG9yOiAjYjMxZDI4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtaWkge1xcbiAgY29sb3I6ICNmYWZiZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjMxZDI4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYzIge1xcbiAgY29sb3I6ICNmYWZiZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDczYTQ5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJeTVxcXCI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtY2NlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzIyODYzYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1sIHtcXG4gIGNvbG9yOiAjNzM1YzBmO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWgsXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1oIC5wbC1lbixcXG4ubWFya2Rvd24tYm9keSAucGwtbXMge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMDA1Y2M1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWkge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICMyNDI5MmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1tYiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMyNDI5MmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1tZCB7XFxuICBjb2xvcjogI2IzMWQyODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZjA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taTEge1xcbiAgY29sb3I6ICMyMjg2M2E7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmY0O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWMge1xcbiAgY29sb3I6ICNlMzYyMDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmRhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWkyIHtcXG4gIGNvbG9yOiAjZjZmOGZhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWNjNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1kciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM2ZjQyYzE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1iYSB7XFxuICBjb2xvcjogIzU4NjA2OTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNnIHtcXG4gIGNvbG9yOiAjOTU5ZGE1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtY29ybCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjMDMyZjYyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLm15LTIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLm15LTIge1xcbiAgbWFyZ2luLXRvcDogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTAge1xcbiAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDRweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDhweCFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTMge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTUge1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTYge1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTcge1xcbiAgcGFkZGluZy1sZWZ0OiA0OHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA2NHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTkge1xcbiAgcGFkZGluZy1sZWZ0OiA4MHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogOTZweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0xMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDExMnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBrYmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQ6IDExcHggU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICM0NDRkNTY7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGE7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkMWQ1ZGE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkMWQ1ZGE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5OmFmdGVyLFxcbi5tYXJrZG93bi1ib2R5OmJlZm9yZSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHk+OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keT46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYTpub3QoW2hyZWZdKSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSxcXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzLFxcbi5tYXJrZG93bi1ib2R5IGRsLFxcbi5tYXJrZG93bi1ib2R5IG9sLFxcbi5tYXJrZG93bi1ib2R5IHAsXFxuLm1hcmtkb3duLWJvZHkgcHJlLFxcbi5tYXJrZG93bi1ib2R5IHRhYmxlLFxcbi5tYXJrZG93bi1ib2R5IHVsIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBoZWlnaHQ6IC4yNWVtO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMjRweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTRlODtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSB7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG4gIGNvbG9yOiAjNmE3MzdkO1xcbiAgYm9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNkZmUyZTU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGU+OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGU+Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIsXFxuLm1hcmtkb3duLWJvZHkgaDMsXFxuLm1hcmtkb3duLWJvZHkgaDQsXFxuLm1hcmtkb3duLWJvZHkgaDUsXFxuLm1hcmtkb3duLWJvZHkgaDYge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogLjNlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlY2VmO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMyB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDQge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg1IHtcXG4gIGZvbnQtc2l6ZTogLjg3NWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBmb250LXNpemU6IC44NWVtO1xcbiAgY29sb3I6ICM2YTczN2Q7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IG9sLFxcbi5tYXJrZG93bi1ib2R5IHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSBvbCB1bCxcXG4ubWFya2Rvd24tYm9keSB1bCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB1bCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgbGkge1xcbiAgd29yZC13cmFwOiBicmVhay1hbGw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGxpPnAge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgbGkrbGkge1xcbiAgbWFyZ2luLXRvcDogLjI1ZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRsIGR0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkbCBkZCB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRoIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRkLFxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRoIHtcXG4gIHBhZGRpbmc6IDZweCAxM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUgdHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzZjYmQxO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5pdGlhbDtcXG4gICAgICAgICAgYm94LXNpemluZzogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZ1thbGlnbj1yaWdodF0ge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbWdbYWxpZ249bGVmdF0ge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgY29kZSB7XFxuICBwYWRkaW5nOiAuMmVtIC40ZW07XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDg1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsMzEsMzUsLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmU+Y29kZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgd29yZC1icmVhazogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuaGlnaGxpZ2h0IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQgcHJlIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQgcHJlLFxcbi5tYXJrZG93bi1ib2R5IHByZSB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LXNpemU6IDg1JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcHJlIGNvZGUge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmNvbW1pdC10ZWFzZS1zaGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGNvbG9yOiAjNDQ0ZDU2O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuZnVsbC1jb21taXQgLmJ0bi1vdXRsaW5lOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA1Y2M1O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA1Y2M1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi13cmFwcGVyIHtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLXdyYXBwZXItZW1iZWRkZWQge1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1udW0ge1xcbiAgd2lkdGg6IDElO1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgyNywzMSwzNSwuMyk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1udW06aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjcsMzEsMzUsLjYpO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1udW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1saW5lLW51bWJlcik7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLWNvZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2ItY29kZS1pbm5lciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMyNDI5MmU7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC10b2tlbi5hY3RpdmUsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXRva2VuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmVhN2Y7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIxXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMTtcXG4gIHRhYi1zaXplOiAxO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiMlxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDI7XFxuICB0YWItc2l6ZTogMjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjNcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAzO1xcbiAgdGFiLXNpemU6IDM7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI0XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogNDtcXG4gIHRhYi1zaXplOiA0O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiNVxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDU7XFxuICB0YWItc2l6ZTogNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjZcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA2O1xcbiAgdGFiLXNpemU6IDY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI3XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogNztcXG4gIHRhYi1zaXplOiA3O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiOFxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDg7XFxuICB0YWItc2l6ZTogODtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjlcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA5O1xcbiAgdGFiLXNpemU6IDk7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIxMFxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDEwO1xcbiAgdGFiLXNpemU6IDEwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiMTFcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAxMTtcXG4gIHRhYi1zaXplOiAxMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjEyXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMTI7XFxuICB0YWItc2l6ZTogMTI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YXNrLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YXNrLWxpc3QtaXRlbSsudGFzay1saXN0LWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0gaW5wdXQge1xcbiAgbWFyZ2luOiAwIC4yZW0gLjI1ZW0gLTEuNmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9naXRodWItbWFya2Rvd24tY3NzL2dpdGh1Yi1tYXJrZG93bi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7O0VBTUUsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7OztFQU1FLHFCQUFxQjtBQUN2Qjs7QUFFQTs7Ozs7O0VBTUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7RUFNRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseWlCQUF5aUI7QUFDM2lCLENBQUM7RUFDQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0hBQWtIO0VBQ2xILGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FB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QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0VBQW9FO0VBQ3BFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hcmtkb3duLWJvZHkgLm9jdGljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYW5jaG9yIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5hbmNob3I6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoMiAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGgzIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDQgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNSAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg2IC5vY3RpY29uLWxpbmsge1xcbiAgY29sb3I6ICMxYjFmMjM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMTpob3ZlciAuYW5jaG9yLFxcbi5tYXJrZG93bi1ib2R5IGgyOmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDM6aG92ZXIgLmFuY2hvcixcXG4ubWFya2Rvd24tYm9keSBoNDpob3ZlciAuYW5jaG9yLFxcbi5tYXJrZG93bi1ib2R5IGg1OmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDY6aG92ZXIgLmFuY2hvciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoMjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDM6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDY6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXFxuLm1hcmtkb3duLWJvZHkgaDI6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXFxuLm1hcmtkb3duLWJvZHkgaDU6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY29udGVudDogJyAnO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgYXJpYS1oaWRkZW49J3RydWUnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J000IDloMXYxSDRjLTEuNSAwLTMtMS42OS0zLTMuNVMyLjU1IDMgNCAzaDRjMS40NSAwIDMgMS42OSAzIDMuNSAwIDEuNDEtLjkxIDIuNzItMiAzLjI1VjguNTljLjU4LS40NSAxLTEuMjcgMS0yLjA5QzEwIDUuMjIgOC45OCA0IDggNEg0Yy0uOTggMC0yIDEuMjItMiAyLjVTMyA5IDQgOXptOS0zaC0xdjFoMWMxIDAgMiAxLjIyIDIgMi41UzEzLjk4IDEyIDEzIDEySDljLS45OCAwLTItMS4yMi0yLTIuNSAwLS44My40Mi0xLjY0IDEtMi4wOVY2LjI1Yy0xLjA5LjUzLTIgMS44NC0yIDMuMjVDNiAxMS4zMSA3LjU1IDEzIDkgMTNoNGMxLjQ1IDAgMy0xLjY5IDMtMy41UzE0LjUgNiAxMyA2eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG59Lm1hcmtkb3duLWJvZHkge1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICMyNDI5MmU7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBhOmFjdGl2ZSxcXG4ubWFya2Rvd24tYm9keSBhOmhvdmVyIHtcXG4gIG91dGxpbmUtd2lkdGg6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAuNjdlbSAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBjb2RlLFxcbi5tYXJrZG93bi1ib2R5IGtiZCxcXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaHIge1xcbiAgYm94LXNpemluZzogaW5pdGlhbDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbnB1dCB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbnB1dCB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgW3R5cGU9Y2hlY2tib3hdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGEge1xcbiAgY29sb3I6ICMwMzY2ZDY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHN0cm9uZyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBoZWlnaHQ6IDA7XFxuICBtYXJnaW46IDE1cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlMmU1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBocjphZnRlcixcXG4ubWFya2Rvd24tYm9keSBocjpiZWZvcmUge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaHI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGQsXFxuLm1hcmtkb3duLWJvZHkgdGgge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGV0YWlscyBzdW1tYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkga2JkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250OiAxMXB4IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBsaW5lLWhlaWdodDogMTBweDtcXG4gIGNvbG9yOiAjNDQ0ZDU2O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRhO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2QxZDVkYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIsXFxuLm1hcmtkb3duLWJvZHkgaDMsXFxuLm1hcmtkb3duLWJvZHkgaDQsXFxuLm1hcmtkb3duLWJvZHkgaDUsXFxuLm1hcmtkb3duLWJvZHkgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgzLFxcbi5tYXJrZG93bi1ib2R5IGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNSxcXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgb2wgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgb2wgdWwgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgdWwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1hbHBoYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGNvZGUsXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbi5tYXJrZG93bi1ib2R5IGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IDpjaGVja2VkKy5yYWRpby1sYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDM2NmQ2O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWU0ZTghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyLTAge1xcbiAgYm9yZGVyOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJvcmRlci1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWU0ZTghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucm91bmRlZC0xIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJnLWdyYXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYyFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50ZXh0LWdyYXktbGlnaHQge1xcbiAgY29sb3I6ICM2YTczN2QhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLm15LTIge1xcbiAgbWFyZ2luLXRvcDogOHB4IWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5weS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTEge1xcbiAgcGFkZGluZy1sZWZ0OiA0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiA4cHghaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0zLFxcbi5tYXJrZG93bi1ib2R5IC5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMTZweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5weC0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuZjYge1xcbiAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmxoLWNvbmRlbnNlZCB7XFxuICBsaW5lLWhlaWdodDogMS4yNSFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50ZXh0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jIHtcXG4gIGNvbG9yOiAjNmE3MzdkO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYzEsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXYge1xcbiAgY29sb3I6ICMwMDVjYzU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1lLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1lbiB7XFxuICBjb2xvcjogIzZmNDJjMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXMxLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zbWkge1xcbiAgY29sb3I6ICMyNDI5MmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1lbnQge1xcbiAgY29sb3I6ICMyMjg2M2E7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1rIHtcXG4gIGNvbG9yOiAjZDczYTQ5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtcGRzLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zIC5wbC1wc2UgLnBsLXMxLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zcixcXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLWNjZSxcXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLXNyYSxcXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLXNyZSB7XFxuICBjb2xvcjogIzAzMmY2MjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNtdyxcXG4ubWFya2Rvd24tYm9keSAucGwtdiB7XFxuICBjb2xvcjogI2UzNjIwOTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWJ1IHtcXG4gIGNvbG9yOiAjYjMxZDI4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtaWkge1xcbiAgY29sb3I6ICNmYWZiZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjMxZDI4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYzIge1xcbiAgY29sb3I6ICNmYWZiZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDczYTQ5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJeTVxcXCI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtY2NlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzIyODYzYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1sIHtcXG4gIGNvbG9yOiAjNzM1YzBmO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWgsXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1oIC5wbC1lbixcXG4ubWFya2Rvd24tYm9keSAucGwtbXMge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMDA1Y2M1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWkge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICMyNDI5MmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1tYiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMyNDI5MmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1tZCB7XFxuICBjb2xvcjogI2IzMWQyODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZjA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taTEge1xcbiAgY29sb3I6ICMyMjg2M2E7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmY0O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWMge1xcbiAgY29sb3I6ICNlMzYyMDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmRhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWkyIHtcXG4gIGNvbG9yOiAjZjZmOGZhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWNjNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1kciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM2ZjQyYzE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1iYSB7XFxuICBjb2xvcjogIzU4NjA2OTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNnIHtcXG4gIGNvbG9yOiAjOTU5ZGE1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtY29ybCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjMDMyZjYyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLm15LTIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLm15LTIge1xcbiAgbWFyZ2luLXRvcDogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTAge1xcbiAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDRweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDhweCFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTMge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTUge1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTYge1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTcge1xcbiAgcGFkZGluZy1sZWZ0OiA0OHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA2NHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTkge1xcbiAgcGFkZGluZy1sZWZ0OiA4MHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogOTZweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0xMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDExMnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBrYmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQ6IDExcHggU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICM0NDRkNTY7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGE7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZDFkNWRhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keTphZnRlcixcXG4ubWFya2Rvd24tYm9keTpiZWZvcmUge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHk6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5PjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHk+Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGE6bm90KFtocmVmXSkge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUsXFxuLm1hcmtkb3duLWJvZHkgZGV0YWlscyxcXG4ubWFya2Rvd24tYm9keSBkbCxcXG4ubWFya2Rvd24tYm9keSBvbCxcXG4ubWFya2Rvd24tYm9keSBwLFxcbi5tYXJrZG93bi1ib2R5IHByZSxcXG4ubWFya2Rvd24tYm9keSB0YWJsZSxcXG4ubWFya2Rvd24tYm9keSB1bCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaHIge1xcbiAgaGVpZ2h0OiAuMjVlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDI0cHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU0ZTg7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUge1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBjb2xvcjogIzZhNzM3ZDtcXG4gIGJvcmRlci1sZWZ0OiAuMjVlbSBzb2xpZCAjZGZlMmU1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlPjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlPjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxLFxcbi5tYXJrZG93bi1ib2R5IGgyLFxcbi5tYXJrZG93bi1ib2R5IGgzLFxcbi5tYXJrZG93bi1ib2R5IGg0LFxcbi5tYXJrZG93bi1ib2R5IGg1LFxcbi5tYXJrZG93bi1ib2R5IGg2IHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgcGFkZGluZy1ib3R0b206IC4zZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWNlZjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDMge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNSB7XFxuICBmb250LXNpemU6IC44NzVlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDYge1xcbiAgZm9udC1zaXplOiAuODVlbTtcXG4gIGNvbG9yOiAjNmE3MzdkO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgb2wgb2wsXFxuLm1hcmtkb3duLWJvZHkgb2wgdWwsXFxuLm1hcmtkb3duLWJvZHkgdWwgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwgdWwge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGxpIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstYWxsO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBsaT5wIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGxpK2xpIHtcXG4gIG1hcmdpbi10b3A6IC4yNWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkbCBkdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGwgZGQge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0aCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0ZCxcXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0aCB7XFxuICBwYWRkaW5nOiA2cHggMTNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M2Y2JkMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZ1thbGlnbj1yaWdodF0ge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBpbWdbYWxpZ249bGVmdF0ge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgY29kZSB7XFxuICBwYWRkaW5nOiAuMmVtIC40ZW07XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDg1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsMzEsMzUsLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmU+Y29kZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgd29yZC1icmVhazogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuaGlnaGxpZ2h0IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQgcHJlIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQgcHJlLFxcbi5tYXJrZG93bi1ib2R5IHByZSB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LXNpemU6IDg1JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcHJlIGNvZGUge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5jb21taXQtdGVhc2Utc2hhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBjb2xvcjogIzQ0NGQ1NjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmZ1bGwtY29tbWl0IC5idG4tb3V0bGluZTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBjb2xvcjogIzAwNWNjNTtcXG4gIGJvcmRlci1jb2xvcjogIzAwNWNjNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2Itd3JhcHBlciB7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi13cmFwcGVyLWVtYmVkZGVkIHtcXG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2ItbnVtIHtcXG4gIHdpZHRoOiAxJTtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMjcsMzEsMzUsLjMpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLW51bTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNywzMSwzNSwuNik7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLW51bTpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLWxpbmUtbnVtYmVyKTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2ItY29kZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1jb2RlLWlubmVyIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI0MjkyZTtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXRva2VuLmFjdGl2ZSxcXG4ubWFya2Rvd24tYm9keSAucGwtdG9rZW46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZWE3ZjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjFcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAxO1xcbiAgdGFiLXNpemU6IDE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIyXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMjtcXG4gIHRhYi1zaXplOiAyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiM1xcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDM7XFxuICB0YWItc2l6ZTogMztcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjRcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgdGFiLXNpemU6IDQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI1XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogNTtcXG4gIHRhYi1zaXplOiA1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiNlxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDY7XFxuICB0YWItc2l6ZTogNjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjdcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA3O1xcbiAgdGFiLXNpemU6IDc7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI4XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogODtcXG4gIHRhYi1zaXplOiA4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiOVxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDk7XFxuICB0YWItc2l6ZTogOTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjEwXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMTA7XFxuICB0YWItc2l6ZTogMTA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIxMVxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDExO1xcbiAgdGFiLXNpemU6IDExO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiMTJcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAxMjtcXG4gIHRhYi1zaXplOiAxMjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhc2stbGlzdC1pdGVtKy50YXNrLWxpc3QtaXRlbSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YXNrLWxpc3QtaXRlbSBpbnB1dCB7XFxuICBtYXJnaW46IDAgLjJlbSAuMjVlbSAtMS42ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS40LjEgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdH1cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuXHQgKiBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGZuKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHQgKiBhZGRyZXNzZXMuXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuXHQgKiBjaGFyYWN0ZXIuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHRcdC8vIHRoZSBsb2NhbCBwYXJ0IChpLmUuIGV2ZXJ5dGhpbmcgdXAgdG8gYEBgKSBpbnRhY3QuXG5cdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHRcdH1cblx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0XHR2YXIgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcblx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHQgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuXHQgKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcblx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcblx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGRlY29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgY291bnRlciA9IDAsXG5cdFx0ICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG5cdFx0ICAgIHZhbHVlLFxuXHRcdCAgICBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZW5jb2RlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuXHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuXHQgKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50IC0gNDggPCAxMCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gNjUgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gOTcgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuXHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0ICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcblx0ICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cblx0ICovXG5cdGZ1bmN0aW9uIGRpZ2l0VG9CYXNpYyhkaWdpdCwgZmxhZykge1xuXHRcdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS40LjEnLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzLCBpby5qcywgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcbiIsIm1vZHVsZS5leHBvcnRzPS9bXFwwLVxceDFGXFx4N0YtXFx4OUZdLyIsIm1vZHVsZS5leHBvcnRzPS9bXFx4QURcXHUwNjAwLVxcdTA2MDVcXHUwNjFDXFx1MDZERFxcdTA3MEZcXHUwOEUyXFx1MTgwRVxcdTIwMEItXFx1MjAwRlxcdTIwMkEtXFx1MjAyRVxcdTIwNjAtXFx1MjA2NFxcdTIwNjYtXFx1MjA2RlxcdUZFRkZcXHVGRkY5LVxcdUZGRkJdfFxcdUQ4MDRbXFx1RENCRFxcdURDQ0RdfFxcdUQ4MkZbXFx1RENBMC1cXHVEQ0EzXXxcXHVEODM0W1xcdURENzMtXFx1REQ3QV18XFx1REI0MFtcXHVEQzAxXFx1REMyMC1cXHVEQzdGXS8iLCJtb2R1bGUuZXhwb3J0cz0vWyEtIyUtXFwqLC1cXC86O1xcP0BcXFstXFxdX1xce1xcfVxceEExXFx4QTdcXHhBQlxceEI2XFx4QjdcXHhCQlxceEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTA5RkRcXHUwQTc2XFx1MEFGMFxcdTBDODRcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNEVcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XXxcXHVEODAwW1xcdUREMDAtXFx1REQwMlxcdURGOUZcXHVERkQwXXxcXHVEODAxXFx1REQ2RnxcXHVEODAyW1xcdURDNTdcXHVERDFGXFx1REQzRlxcdURFNTAtXFx1REU1OFxcdURFN0ZcXHVERUYwLVxcdURFRjZcXHVERjM5LVxcdURGM0ZcXHVERjk5LVxcdURGOUNdfFxcdUQ4MDNbXFx1REY1NS1cXHVERjU5XXxcXHVEODA0W1xcdURDNDctXFx1REM0RFxcdURDQkJcXHVEQ0JDXFx1RENCRS1cXHVEQ0MxXFx1REQ0MC1cXHVERDQzXFx1REQ3NFxcdURENzVcXHVEREM1LVxcdUREQzhcXHVERENEXFx1REREQlxcdUREREQtXFx1RERERlxcdURFMzgtXFx1REUzRFxcdURFQTldfFxcdUQ4MDVbXFx1REM0Qi1cXHVEQzRGXFx1REM1QlxcdURDNURcXHVEQ0M2XFx1RERDMS1cXHVEREQ3XFx1REU0MS1cXHVERTQzXFx1REU2MC1cXHVERTZDXFx1REYzQy1cXHVERjNFXXxcXHVEODA2W1xcdURDM0JcXHVERTNGLVxcdURFNDZcXHVERTlBLVxcdURFOUNcXHVERTlFLVxcdURFQTJdfFxcdUQ4MDdbXFx1REM0MS1cXHVEQzQ1XFx1REM3MFxcdURDNzFcXHVERUY3XFx1REVGOF18XFx1RDgwOVtcXHVEQzcwLVxcdURDNzRdfFxcdUQ4MUFbXFx1REU2RVxcdURFNkZcXHVERUY1XFx1REYzNy1cXHVERjNCXFx1REY0NF18XFx1RDgxQltcXHVERTk3LVxcdURFOUFdfFxcdUQ4MkZcXHVEQzlGfFxcdUQ4MzZbXFx1REU4Ny1cXHVERThCXXxcXHVEODNBW1xcdURENUVcXHVERDVGXS8iLCJtb2R1bGUuZXhwb3J0cz0vWyBcXHhBMFxcdTE2ODBcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0vIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLkFueSA9IHJlcXVpcmUoJy4vcHJvcGVydGllcy9BbnkvcmVnZXgnKTtcbmV4cG9ydHMuQ2MgID0gcmVxdWlyZSgnLi9jYXRlZ29yaWVzL0NjL3JlZ2V4Jyk7XG5leHBvcnRzLkNmICA9IHJlcXVpcmUoJy4vY2F0ZWdvcmllcy9DZi9yZWdleCcpO1xuZXhwb3J0cy5QICAgPSByZXF1aXJlKCcuL2NhdGVnb3JpZXMvUC9yZWdleCcpO1xuZXhwb3J0cy5aICAgPSByZXF1aXJlKCcuL2NhdGVnb3JpZXMvWi9yZWdleCcpO1xuIiwibW9kdWxlLmV4cG9ydHM9L1tcXDAtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS8iXSwic291cmNlUm9vdCI6IiJ9