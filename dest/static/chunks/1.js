(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

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

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
/*!***********************************!*\
  !*** (webpack)/webpack/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 149:
/***/ (function(module) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(149);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXJrRmRvd25SZW5kZXJlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9naXRodWItbWFya2Rvd24tY3NzL2dpdGh1Yi1tYXJrZG93bi5jc3M/MGVlZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnktaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9saW5raWZ5LWl0L2xpYi9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2NvbW1vbi9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9jb21tb24vaHRtbF9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL2h0bWxfcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvaGVscGVycy9wYXJzZV9saW5rX2Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfdGl0bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcGFyc2VyX2Jsb2NrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3BhcnNlcl9jb3JlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3BhcnNlcl9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcHJlc2V0cy9jb21tb25tYXJrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3ByZXNldHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wcmVzZXRzL3plcm8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2ZlbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svaHIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svaHRtbF9ibG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9saGVhZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9saXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svc3RhdGVfYmxvY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svdGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9ibG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2lubGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2xpbmtpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9yZXBsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9zbWFydHF1b3Rlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL3N0YXRlX2NvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2F1dG9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9iYWNrdGlja3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2JhbGFuY2VfcGFpcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2VtcGhhc2lzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvaHRtbF9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2ltYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9uZXdsaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3RleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3RleHRfY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZHVybC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kdXJsL3BhcnNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dpdGh1Yi1tYXJrZG93bi1jc3MvZ2l0aHViLW1hcmtkb3duLmNzcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdWMubWljcm8vY2F0ZWdvcmllcy9DYy9yZWdleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VjLm1pY3JvL2NhdGVnb3JpZXMvQ2YvcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1AvcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1ovcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91Yy5taWNyby9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VjLm1pY3JvL3Byb3BlcnRpZXMvQW55L3JlZ2V4LmpzIl0sIm5hbWVzIjpbIm1kIiwiTWFya2Rvd25JdCIsImh0bWwiLCJsaW5raWZ5IiwiYjY0X3RvX3V0ZjgiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJhdG9iIiwibWVtbyIsIm1hcmtkb3duUmVuZGVyZXIiLCJjb250ZW50IiwiaXNCYXNlNjQiLCJtYXJrZG93biIsInVzZU1lbW8iLCJyZW5kZXIiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0NBSUE7QUFDQTs7QUFDQSxJQUFNQSxFQUFFLEdBQUcsSUFBSUMsa0RBQUosQ0FBZTtBQUN0QkMsTUFBSSxFQUFFLElBRGdCO0FBRXRCQyxTQUFPLEVBQUU7QUFGYSxDQUFmLENBQVgsQyxDQU1BOztBQUNBLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLGtCQUFrQixDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsR0FBRCxDQUFMLENBQVAsQ0FBekI7QUFDSDs7QUFFYyxrRkFBQUksa0RBQUksU0FBQyxTQUFTQyxnQkFBVCxPQUFpRDtBQUFBOztBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDakUsTUFBTUMsUUFBUSxHQUFHRCxRQUFRLEdBQUdSLFdBQVcsQ0FBQ08sT0FBRCxDQUFkLEdBQTBCQSxPQUFuRCxDQURpRSxDQUVqRTs7QUFDQSxNQUFNVCxJQUFJLEdBQUdZLHFEQUFPLENBQUM7QUFBQSxXQUFNZCxFQUFFLENBQUNlLE1BQUgsQ0FBVUYsUUFBVixDQUFOO0FBQUEsR0FBRCxFQUE0QixDQUFDQSxRQUFELENBQTVCLENBQXBCO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNJO0FBQUssNkJBQXVCLEVBQUU7QUFBRUcsY0FBTSxFQUFFZDtBQUFWO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtILENBVGtCLGtDQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyxzTUFBMkY7QUFDN0csMEJBQTBCLG1CQUFPLENBQUMsNFRBQWlKOztBQUVuTDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSw0VEFBaUo7QUFDdko7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0VEFBaUo7O0FBRTNLOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7OztBQzNEYTs7O0FBR2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFROztBQUUxQjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxzQkFBc0IsNENBQTRDO0FBQ2xFLHdCQUF3QiwwQ0FBMEM7QUFDbEUsd0JBQXdCLDBDQUEwQztBQUNsRSx3QkFBd0IsMENBQTBDO0FBQ2xFLDBCQUEwQiw0Q0FBNEM7OztBQUd0RSx3QkFBd0IscUNBQXFDLGVBQWU7O0FBRTVFOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRCxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscURBQVU7O0FBRXZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDJDQUEyQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsUUFBUTs7QUFFL0Isb0JBQW9COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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T0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0s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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFFVTtBQUNaO0FBQ0EsRUFBRSxtQ0FBbUI7QUFDckI7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFhTjs7QUFFRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDcGhCRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxzTzs7Ozs7Ozs7Ozs7QUNBQSw4QkFBOEIsV0FBVyxFQUFFLHcwRDs7Ozs7Ozs7Ozs7QUNBM0MseUU7Ozs7Ozs7Ozs7OztBQ0FhOztBQUViLGNBQWMsbUJBQU8sQ0FBQywrRUFBd0I7QUFDOUMsY0FBYyxtQkFBTyxDQUFDLDZFQUF1QjtBQUM3QyxjQUFjLG1CQUFPLENBQUMsNkVBQXVCO0FBQzdDLGNBQWMsbUJBQU8sQ0FBQywyRUFBc0I7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLDJFQUFzQjs7Ozs7Ozs7Ozs7O0FDTjVDLGlKIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuLy8g5YW35L2T5riy5p+T5YaF5a656YO95piv6LefIHByb3BzIOacieWFs++8jOWmguaenCBwcm9wcyDmsqHmnInlj5jljJbvvIzliJnml6DpnIDph43mlrDmuLLmn5NcclxuXHJcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xyXG5pbXBvcnQgXCJnaXRodWItbWFya2Rvd24tY3NzXCI7XHJcblxyXG5cclxuLy8gaHRtbDogdHJ1ZSAtLSDlvZPkvKDpgJLkuobov5nkuKrlj4LmlbDkvJrmiormiJHku6znmoQgaHRtbCDkuK3nmoTlhoXlrrnovazljJbmiJAgaHRtbFxyXG4vLyBsaW5raWZ5OiB0cnVlIC0tIOW9kyBodG1sIOmHjOmdouaciemTvuaOpeWwseS8mui9rOWMluS4uuWPr+S7peeCueWHu+eahOmTvuaOpVxyXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KHtcclxuICAgIGh0bWw6IHRydWUsXHJcbiAgICBsaW5raWZ5OiB0cnVlLFxyXG59KTtcclxuXHJcblxyXG4vLyDkuK3mlofop6PnoIFcclxuZnVuY3Rpb24gYjY0X3RvX3V0Zjgoc3RyKSB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShhdG9iKHN0cikpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhmdW5jdGlvbiBtYXJrZG93blJlbmRlcmVyKHsgY29udGVudCwgaXNCYXNlNjQgfSkge1xyXG4gICAgY29uc3QgbWFya2Rvd24gPSBpc0Jhc2U2NCA/IGI2NF90b191dGY4KGNvbnRlbnQpIDogY29udGVudFxyXG4gICAgLy8gbWFya2Rvd24g55qE5YaF5a655rKh5pyJ5Y+Y5YyW77yM5YiZIGh0bWwg55qE5YaF5a655bCx5LiN5Lya5Y+Y5YyWKG1kLnJlbmRlciDovazljJbov4fnqIvmr5TovoPogJfml7YpXHJcbiAgICBjb25zdCBodG1sID0gdXNlTWVtbygoKSA9PiBtZC5yZW5kZXIobWFya2Rvd24pLCBbbWFya2Rvd25dKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0+PC9kaXY+O1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2dpdGh1Yi1tYXJrZG93bi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9naXRodWItbWFya2Rvd24uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2dpdGh1Yi1tYXJrZG93bi5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiJ3VzZSBzdHJpY3QnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBIZWxwZXJzXG5cbi8vIE1lcmdlIG9iamVjdHNcbi8vXG5mdW5jdGlvbiBhc3NpZ24ob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuOyB9XG5cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2NsYXNzKG9iaikgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7IH1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nOyB9XG5mdW5jdGlvbiBpc09iamVjdChvYmopIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBPYmplY3RdJzsgfVxuZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7IH1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJzsgfVxuXG5cbmZ1bmN0aW9uIGVzY2FwZVJFKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgJ1xcXFwkJicpOyB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBmdXp6eUxpbms6IHRydWUsXG4gIGZ1enp5RW1haWw6IHRydWUsXG4gIGZ1enp5SVA6IGZhbHNlXG59O1xuXG5cbmZ1bmN0aW9uIGlzT3B0aW9uc09iaihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaiB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGspIHtcbiAgICByZXR1cm4gYWNjIHx8IGRlZmF1bHRPcHRpb25zLmhhc093blByb3BlcnR5KGspO1xuICB9LCBmYWxzZSk7XG59XG5cblxudmFyIGRlZmF1bHRTY2hlbWFzID0ge1xuICAnaHR0cDonOiB7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh0ZXh0LCBwb3MsIHNlbGYpIHtcbiAgICAgIHZhciB0YWlsID0gdGV4dC5zbGljZShwb3MpO1xuXG4gICAgICBpZiAoIXNlbGYucmUuaHR0cCkge1xuICAgICAgICAvLyBjb21waWxlIGxhemlseSwgYmVjYXVzZSBcImhvc3RcIi1jb250YWluaW5nIHZhcmlhYmxlcyBjYW4gY2hhbmdlIG9uIHRsZHMgdXBkYXRlLlxuICAgICAgICBzZWxmLnJlLmh0dHAgPSAgbmV3IFJlZ0V4cChcbiAgICAgICAgICAnXlxcXFwvXFxcXC8nICsgc2VsZi5yZS5zcmNfYXV0aCArIHNlbGYucmUuc3JjX2hvc3RfcG9ydF9zdHJpY3QgKyBzZWxmLnJlLnNyY19wYXRoLCAnaSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLnJlLmh0dHAudGVzdCh0YWlsKSkge1xuICAgICAgICByZXR1cm4gdGFpbC5tYXRjaChzZWxmLnJlLmh0dHApWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSxcbiAgJ2h0dHBzOic6ICAnaHR0cDonLFxuICAnZnRwOic6ICAgICdodHRwOicsXG4gICcvLyc6ICAgICAge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAodGV4dCwgcG9zLCBzZWxmKSB7XG4gICAgICB2YXIgdGFpbCA9IHRleHQuc2xpY2UocG9zKTtcblxuICAgICAgaWYgKCFzZWxmLnJlLm5vX2h0dHApIHtcbiAgICAgIC8vIGNvbXBpbGUgbGF6aWx5LCBiZWNhdXNlIFwiaG9zdFwiLWNvbnRhaW5pbmcgdmFyaWFibGVzIGNhbiBjaGFuZ2Ugb24gdGxkcyB1cGRhdGUuXG4gICAgICAgIHNlbGYucmUubm9faHR0cCA9ICBuZXcgUmVnRXhwKFxuICAgICAgICAgICdeJyArXG4gICAgICAgICAgc2VsZi5yZS5zcmNfYXV0aCArXG4gICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgc2luZ2xlLWxldmVsIGRvbWFpbnMsIGJlY2F1c2Ugb2YgZmFsc2UgcG9zaXRpdmVzIGxpa2UgJy8vdGVzdCdcbiAgICAgICAgICAvLyB3aXRoIGNvZGUgY29tbWVudHNcbiAgICAgICAgICAnKD86bG9jYWxob3N0fCg/Oig/OicgKyBzZWxmLnJlLnNyY19kb21haW4gKyAnKVxcXFwuKSsnICsgc2VsZi5yZS5zcmNfZG9tYWluX3Jvb3QgKyAnKScgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX3BvcnQgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX2hvc3RfdGVybWluYXRvciArXG4gICAgICAgICAgc2VsZi5yZS5zcmNfcGF0aCxcblxuICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5yZS5ub19odHRwLnRlc3QodGFpbCkpIHtcbiAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBgOi8vYCAmIGAvLy9gLCB0aGF0IHByb3RlY3RzIGZyb20gZXJyb3JzIGluIHByb3RvY29sIG5hbWVcbiAgICAgICAgaWYgKHBvcyA+PSAzICYmIHRleHRbcG9zIC0gM10gPT09ICc6JykgeyByZXR1cm4gMDsgfVxuICAgICAgICBpZiAocG9zID49IDMgJiYgdGV4dFtwb3MgLSAzXSA9PT0gJy8nKSB7IHJldHVybiAwOyB9XG4gICAgICAgIHJldHVybiB0YWlsLm1hdGNoKHNlbGYucmUubm9faHR0cClbMF0ubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LFxuICAnbWFpbHRvOic6IHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKHRleHQsIHBvcywgc2VsZikge1xuICAgICAgdmFyIHRhaWwgPSB0ZXh0LnNsaWNlKHBvcyk7XG5cbiAgICAgIGlmICghc2VsZi5yZS5tYWlsdG8pIHtcbiAgICAgICAgc2VsZi5yZS5tYWlsdG8gPSAgbmV3IFJlZ0V4cChcbiAgICAgICAgICAnXicgKyBzZWxmLnJlLnNyY19lbWFpbF9uYW1lICsgJ0AnICsgc2VsZi5yZS5zcmNfaG9zdF9zdHJpY3QsICdpJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGYucmUubWFpbHRvLnRlc3QodGFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRhaWwubWF0Y2goc2VsZi5yZS5tYWlsdG8pWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxufTtcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuKi9cblxuLy8gUkUgcGF0dGVybiBmb3IgMi1jaGFyYWN0ZXIgdGxkcyAoYXV0b2dlbmVyYXRlZCBieSAuL3N1cHBvcnQvdGxkc18yY2hhcl9nZW4uanMpXG52YXIgdGxkc18yY2hfc3JjX3JlID0gJ2FbY2RlZmdpbG1ub3Fyc3R1d3h6XXxiW2FiZGVmZ2hpam1ub3JzdHZ3eXpdfGNbYWNkZmdoaWtsbW5vcnV2d3h5el18ZFtlamttb3pdfGVbY2VncnN0dV18Zltpamttb3JdfGdbYWJkZWZnaGlsbW5wcXJzdHV3eV18aFtrbW5ydHVdfGlbZGVsbW5vcXJzdF18altlbW9wXXxrW2VnaGltbnByd3l6XXxsW2FiY2lrcnN0dXZ5XXxtW2FjZGVnaGtsbW5vcHFyc3R1dnd4eXpdfG5bYWNlZmdpbG9wcnV6XXxvbXxwW2FlZmdoa2xtbnJzdHd5XXxxYXxyW2Vvc3V3XXxzW2FiY2RlZ2hpamtsbW5vcnR1dnh5el18dFtjZGZnaGprbG1ub3J0dnd6XXx1W2Fna3N5el18dlthY2VnaW51XXx3W2ZzXXx5W2V0XXx6W2Ftd10nO1xuXG4vLyBET04nVCB0cnkgdG8gbWFrZSBQUnMgd2l0aCBjaGFuZ2VzLiBFeHRlbmQgVExEcyB3aXRoIExpbmtpZnlJdC50bGRzKCkgaW5zdGVhZFxudmFyIHRsZHNfZGVmYXVsdCA9ICdiaXp8Y29tfGVkdXxnb3Z8bmV0fG9yZ3xwcm98d2VifHh4eHxhZXJvfGFzaWF8Y29vcHxpbmZvfG11c2V1bXxuYW1lfHNob3B80YDRhCcuc3BsaXQoJ3wnKTtcblxuLyplc2xpbnQtZW5hYmxlIG1heC1sZW4qL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiByZXNldFNjYW5DYWNoZShzZWxmKSB7XG4gIHNlbGYuX19pbmRleF9fID0gLTE7XG4gIHNlbGYuX190ZXh0X2NhY2hlX18gICA9ICcnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWxpZGF0b3IocmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0LCBwb3MpIHtcbiAgICB2YXIgdGFpbCA9IHRleHQuc2xpY2UocG9zKTtcblxuICAgIGlmIChyZS50ZXN0KHRhaWwpKSB7XG4gICAgICByZXR1cm4gdGFpbC5tYXRjaChyZSlbMF0ubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9ybWFsaXplcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgc2VsZikge1xuICAgIHNlbGYubm9ybWFsaXplKG1hdGNoKTtcbiAgfTtcbn1cblxuLy8gU2NoZW1hcyBjb21waWxlci4gQnVpbGQgcmVnZXhwcy5cbi8vXG5mdW5jdGlvbiBjb21waWxlKHNlbGYpIHtcblxuICAvLyBMb2FkICYgY2xvbmUgUkUgcGF0dGVybnMuXG4gIHZhciByZSA9IHNlbGYucmUgPSByZXF1aXJlKCcuL2xpYi9yZScpKHNlbGYuX19vcHRzX18pO1xuXG4gIC8vIERlZmluZSBkeW5hbWljIHBhdHRlcm5zXG4gIHZhciB0bGRzID0gc2VsZi5fX3RsZHNfXy5zbGljZSgpO1xuXG4gIHNlbGYub25Db21waWxlKCk7XG5cbiAgaWYgKCFzZWxmLl9fdGxkc19yZXBsYWNlZF9fKSB7XG4gICAgdGxkcy5wdXNoKHRsZHNfMmNoX3NyY19yZSk7XG4gIH1cbiAgdGxkcy5wdXNoKHJlLnNyY194bik7XG5cbiAgcmUuc3JjX3RsZHMgPSB0bGRzLmpvaW4oJ3wnKTtcblxuICBmdW5jdGlvbiB1bnRwbCh0cGwpIHsgcmV0dXJuIHRwbC5yZXBsYWNlKCclVExEUyUnLCByZS5zcmNfdGxkcyk7IH1cblxuICByZS5lbWFpbF9mdXp6eSAgICAgID0gUmVnRXhwKHVudHBsKHJlLnRwbF9lbWFpbF9mdXp6eSksICdpJyk7XG4gIHJlLmxpbmtfZnV6enkgICAgICAgPSBSZWdFeHAodW50cGwocmUudHBsX2xpbmtfZnV6enkpLCAnaScpO1xuICByZS5saW5rX25vX2lwX2Z1enp5ID0gUmVnRXhwKHVudHBsKHJlLnRwbF9saW5rX25vX2lwX2Z1enp5KSwgJ2knKTtcbiAgcmUuaG9zdF9mdXp6eV90ZXN0ICA9IFJlZ0V4cCh1bnRwbChyZS50cGxfaG9zdF9mdXp6eV90ZXN0KSwgJ2knKTtcblxuICAvL1xuICAvLyBDb21waWxlIGVhY2ggc2NoZW1hXG4gIC8vXG5cbiAgdmFyIGFsaWFzZXMgPSBbXTtcblxuICBzZWxmLl9fY29tcGlsZWRfXyA9IHt9OyAvLyBSZXNldCBjb21waWxlZCBkYXRhXG5cbiAgZnVuY3Rpb24gc2NoZW1hRXJyb3IobmFtZSwgdmFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcoTGlua2lmeUl0KSBJbnZhbGlkIHNjaGVtYSBcIicgKyBuYW1lICsgJ1wiOiAnICsgdmFsKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNlbGYuX19zY2hlbWFzX18pLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgdmFsID0gc2VsZi5fX3NjaGVtYXNfX1tuYW1lXTtcblxuICAgIC8vIHNraXAgZGlzYWJsZWQgbWV0aG9kc1xuICAgIGlmICh2YWwgPT09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgY29tcGlsZWQgPSB7IHZhbGlkYXRlOiBudWxsLCBsaW5rOiBudWxsIH07XG5cbiAgICBzZWxmLl9fY29tcGlsZWRfX1tuYW1lXSA9IGNvbXBpbGVkO1xuXG4gICAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGlmIChpc1JlZ0V4cCh2YWwudmFsaWRhdGUpKSB7XG4gICAgICAgIGNvbXBpbGVkLnZhbGlkYXRlID0gY3JlYXRlVmFsaWRhdG9yKHZhbC52YWxpZGF0ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsLnZhbGlkYXRlKSkge1xuICAgICAgICBjb21waWxlZC52YWxpZGF0ZSA9IHZhbC52YWxpZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVtYUVycm9yKG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbC5ub3JtYWxpemUpKSB7XG4gICAgICAgIGNvbXBpbGVkLm5vcm1hbGl6ZSA9IHZhbC5ub3JtYWxpemU7XG4gICAgICB9IGVsc2UgaWYgKCF2YWwubm9ybWFsaXplKSB7XG4gICAgICAgIGNvbXBpbGVkLm5vcm1hbGl6ZSA9IGNyZWF0ZU5vcm1hbGl6ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVtYUVycm9yKG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgYWxpYXNlcy5wdXNoKG5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVtYUVycm9yKG5hbWUsIHZhbCk7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIENvbXBpbGUgcG9zdHBvbmVkIGFsaWFzZXNcbiAgLy9cblxuICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgaWYgKCFzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0pIHtcbiAgICAgIC8vIFNpbGVudGx5IGZhaWwgb24gbWlzc2VkIHNjaGVtYXMgdG8gYXZvaWQgZXJyb25zIG9uIGRpc2FibGUuXG4gICAgICAvLyBzY2hlbWFFcnJvcihhbGlhcywgc2VsZi5fX3NjaGVtYXNfX1thbGlhc10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuX19jb21waWxlZF9fW2FsaWFzXS52YWxpZGF0ZSA9XG4gICAgICBzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0udmFsaWRhdGU7XG4gICAgc2VsZi5fX2NvbXBpbGVkX19bYWxpYXNdLm5vcm1hbGl6ZSA9XG4gICAgICBzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0ubm9ybWFsaXplO1xuICB9KTtcblxuICAvL1xuICAvLyBGYWtlIHJlY29yZCBmb3IgZ3Vlc3NlZCBsaW5rc1xuICAvL1xuICBzZWxmLl9fY29tcGlsZWRfX1snJ10gPSB7IHZhbGlkYXRlOiBudWxsLCBub3JtYWxpemU6IGNyZWF0ZU5vcm1hbGl6ZXIoKSB9O1xuXG4gIC8vXG4gIC8vIEJ1aWxkIHNjaGVtYSBjb25kaXRpb25cbiAgLy9cbiAgdmFyIHNsaXN0ID0gT2JqZWN0LmtleXMoc2VsZi5fX2NvbXBpbGVkX18pXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIGRpc2FibGVkICYgZmFrZSBzY2hlbWFzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZS5sZW5ndGggPiAwICYmIHNlbGYuX19jb21waWxlZF9fW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcChlc2NhcGVSRSlcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbignfCcpO1xuICAvLyAoPyFfKSBjYXVzZSAxLjV4IHNsb3dkb3duXG4gIHNlbGYucmUuc2NoZW1hX3Rlc3QgICA9IFJlZ0V4cCgnKF58KD8hXykoPzpbPjxcXHVmZjVjXXwnICsgcmUuc3JjX1pQQ2MgKyAnKSkoJyArIHNsaXN0ICsgJyknLCAnaScpO1xuICBzZWxmLnJlLnNjaGVtYV9zZWFyY2ggPSBSZWdFeHAoJyhefCg/IV8pKD86Wz48XFx1ZmY1Y118JyArIHJlLnNyY19aUENjICsgJykpKCcgKyBzbGlzdCArICcpJywgJ2lnJyk7XG5cbiAgc2VsZi5yZS5wcmV0ZXN0ID0gUmVnRXhwKFxuICAgICcoJyArIHNlbGYucmUuc2NoZW1hX3Rlc3Quc291cmNlICsgJyl8KCcgKyBzZWxmLnJlLmhvc3RfZnV6enlfdGVzdC5zb3VyY2UgKyAnKXxAJyxcbiAgICAnaSdcbiAgKTtcblxuICAvL1xuICAvLyBDbGVhbnVwXG4gIC8vXG5cbiAgcmVzZXRTY2FuQ2FjaGUoc2VsZik7XG59XG5cbi8qKlxuICogY2xhc3MgTWF0Y2hcbiAqXG4gKiBNYXRjaCByZXN1bHQuIFNpbmdsZSBlbGVtZW50IG9mIGFycmF5LCByZXR1cm5lZCBieSBbW0xpbmtpZnlJdCNtYXRjaF1dXG4gKiovXG5mdW5jdGlvbiBNYXRjaChzZWxmLCBzaGlmdCkge1xuICB2YXIgc3RhcnQgPSBzZWxmLl9faW5kZXhfXyxcbiAgICAgIGVuZCAgID0gc2VsZi5fX2xhc3RfaW5kZXhfXyxcbiAgICAgIHRleHQgID0gc2VsZi5fX3RleHRfY2FjaGVfXy5zbGljZShzdGFydCwgZW5kKTtcblxuICAvKipcbiAgICogTWF0Y2gjc2NoZW1hIC0+IFN0cmluZ1xuICAgKlxuICAgKiBQcmVmaXggKHByb3RvY29sKSBmb3IgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5zY2hlbWEgICAgPSBzZWxmLl9fc2NoZW1hX18udG9Mb3dlckNhc2UoKTtcbiAgLyoqXG4gICAqIE1hdGNoI2luZGV4IC0+IE51bWJlclxuICAgKlxuICAgKiBGaXJzdCBwb3NpdGlvbiBvZiBtYXRjaGVkIHN0cmluZy5cbiAgICoqL1xuICB0aGlzLmluZGV4ICAgICA9IHN0YXJ0ICsgc2hpZnQ7XG4gIC8qKlxuICAgKiBNYXRjaCNsYXN0SW5kZXggLT4gTnVtYmVyXG4gICAqXG4gICAqIE5leHQgcG9zaXRpb24gYWZ0ZXIgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5sYXN0SW5kZXggPSBlbmQgKyBzaGlmdDtcbiAgLyoqXG4gICAqIE1hdGNoI3JhdyAtPiBTdHJpbmdcbiAgICpcbiAgICogTWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5yYXcgICAgICAgPSB0ZXh0O1xuICAvKipcbiAgICogTWF0Y2gjdGV4dCAtPiBTdHJpbmdcbiAgICpcbiAgICogTm90bWFsaXplZCB0ZXh0IG9mIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMudGV4dCAgICAgID0gdGV4dDtcbiAgLyoqXG4gICAqIE1hdGNoI3VybCAtPiBTdHJpbmdcbiAgICpcbiAgICogTm9ybWFsaXplZCB1cmwgb2YgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy51cmwgICAgICAgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaChzZWxmLCBzaGlmdCkge1xuICB2YXIgbWF0Y2ggPSBuZXcgTWF0Y2goc2VsZiwgc2hpZnQpO1xuXG4gIHNlbGYuX19jb21waWxlZF9fW21hdGNoLnNjaGVtYV0ubm9ybWFsaXplKG1hdGNoLCBzZWxmKTtcblxuICByZXR1cm4gbWF0Y2g7XG59XG5cblxuLyoqXG4gKiBjbGFzcyBMaW5raWZ5SXRcbiAqKi9cblxuLyoqXG4gKiBuZXcgTGlua2lmeUl0KHNjaGVtYXMsIG9wdGlvbnMpXG4gKiAtIHNjaGVtYXMgKE9iamVjdCk6IE9wdGlvbmFsLiBBZGRpdGlvbmFsIHNjaGVtYXMgdG8gdmFsaWRhdGUgKHByZWZpeC92YWxpZGF0b3IpXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHsgZnV6enlMaW5rfGZ1enp5RW1haWx8ZnV6enlJUDogdHJ1ZXxmYWxzZSB9XG4gKlxuICogQ3JlYXRlcyBuZXcgbGlua2lmaWVyIGluc3RhbmNlIHdpdGggb3B0aW9uYWwgYWRkaXRpb25hbCBzY2hlbWFzLlxuICogQ2FuIGJlIGNhbGxlZCB3aXRob3V0IGBuZXdgIGtleXdvcmQgZm9yIGNvbnZlbmllbmNlLlxuICpcbiAqIEJ5IGRlZmF1bHQgdW5kZXJzdGFuZHM6XG4gKlxuICogLSBgaHR0cChzKTovLy4uLmAgLCBgZnRwOi8vLi4uYCwgYG1haWx0bzouLi5gICYgYC8vLi4uYCBsaW5rc1xuICogLSBcImZ1enp5XCIgbGlua3MgYW5kIGVtYWlscyAoZXhhbXBsZS5jb20sIGZvb0BiYXIuY29tKS5cbiAqXG4gKiBgc2NoZW1hc2AgaXMgYW4gb2JqZWN0LCB3aGVyZSBlYWNoIGtleS92YWx1ZSBkZXNjcmliZXMgcHJvdG9jb2wvcnVsZTpcbiAqXG4gKiAtIF9fa2V5X18gLSBsaW5rIHByZWZpeCAodXN1YWxseSwgcHJvdG9jb2wgbmFtZSB3aXRoIGA6YCBhdCB0aGUgZW5kLCBgc2t5cGU6YFxuICogICBmb3IgZXhhbXBsZSkuIGBsaW5raWZ5LWl0YCBtYWtlcyBzaHVyZSB0aGF0IHByZWZpeCBpcyBub3QgcHJlY2VlZGVkIHdpdGhcbiAqICAgYWxwaGFudW1lcmljIGNoYXIgYW5kIHN5bWJvbHMuIE9ubHkgd2hpdGVzcGFjZXMgYW5kIHB1bmN0dWF0aW9uIGFsbG93ZWQuXG4gKiAtIF9fdmFsdWVfXyAtIHJ1bGUgdG8gY2hlY2sgdGFpbCBhZnRlciBsaW5rIHByZWZpeFxuICogICAtIF9TdHJpbmdfIC0ganVzdCBhbGlhcyB0byBleGlzdGluZyBydWxlXG4gKiAgIC0gX09iamVjdF9cbiAqICAgICAtIF92YWxpZGF0ZV8gLSB2YWxpZGF0b3IgZnVuY3Rpb24gKHNob3VsZCByZXR1cm4gbWF0Y2hlZCBsZW5ndGggb24gc3VjY2VzcyksXG4gKiAgICAgICBvciBgUmVnRXhwYC5cbiAqICAgICAtIF9ub3JtYWxpemVfIC0gb3B0aW9uYWwgZnVuY3Rpb24gdG8gbm9ybWFsaXplIHRleHQgJiB1cmwgb2YgbWF0Y2hlZCByZXN1bHRcbiAqICAgICAgIChmb3IgZXhhbXBsZSwgZm9yIEB0d2l0dGVyIG1lbnRpb25zKS5cbiAqXG4gKiBgb3B0aW9uc2A6XG4gKlxuICogLSBfX2Z1enp5TGlua19fIC0gcmVjb2duaWdlIFVSTC1zIHdpdGhvdXQgYGh0dHAocyk6YCBwcmVmaXguIERlZmF1bHQgYHRydWVgLlxuICogLSBfX2Z1enp5SVBfXyAtIGFsbG93IElQcyBpbiBmdXp6eSBsaW5rcyBhYm92ZS4gQ2FuIGNvbmZsaWN0IHdpdGggc29tZSB0ZXh0c1xuICogICBsaWtlIHZlcnNpb24gbnVtYmVycy4gRGVmYXVsdCBgZmFsc2VgLlxuICogLSBfX2Z1enp5RW1haWxfXyAtIHJlY29nbml6ZSBlbWFpbHMgd2l0aG91dCBgbWFpbHRvOmAgcHJlZml4LlxuICpcbiAqKi9cbmZ1bmN0aW9uIExpbmtpZnlJdChzY2hlbWFzLCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMaW5raWZ5SXQpKSB7XG4gICAgcmV0dXJuIG5ldyBMaW5raWZ5SXQoc2NoZW1hcywgb3B0aW9ucyk7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBpZiAoaXNPcHRpb25zT2JqKHNjaGVtYXMpKSB7XG4gICAgICBvcHRpb25zID0gc2NoZW1hcztcbiAgICAgIHNjaGVtYXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9fb3B0c19fICAgICAgICAgICA9IGFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gIC8vIENhY2hlIGxhc3QgdGVzdGVkIHJlc3VsdC4gVXNlZCB0byBza2lwIHJlcGVhdGluZyBzdGVwcyBvbiBuZXh0IGBtYXRjaGAgY2FsbC5cbiAgdGhpcy5fX2luZGV4X18gICAgICAgICAgPSAtMTtcbiAgdGhpcy5fX2xhc3RfaW5kZXhfXyAgICAgPSAtMTsgLy8gTmV4dCBzY2FuIHBvc2l0aW9uXG4gIHRoaXMuX19zY2hlbWFfXyAgICAgICAgID0gJyc7XG4gIHRoaXMuX190ZXh0X2NhY2hlX18gICAgID0gJyc7XG5cbiAgdGhpcy5fX3NjaGVtYXNfXyAgICAgICAgPSBhc3NpZ24oe30sIGRlZmF1bHRTY2hlbWFzLCBzY2hlbWFzKTtcbiAgdGhpcy5fX2NvbXBpbGVkX18gICAgICAgPSB7fTtcblxuICB0aGlzLl9fdGxkc19fICAgICAgICAgICA9IHRsZHNfZGVmYXVsdDtcbiAgdGhpcy5fX3RsZHNfcmVwbGFjZWRfXyAgPSBmYWxzZTtcblxuICB0aGlzLnJlID0ge307XG5cbiAgY29tcGlsZSh0aGlzKTtcbn1cblxuXG4vKiogY2hhaW5hYmxlXG4gKiBMaW5raWZ5SXQjYWRkKHNjaGVtYSwgZGVmaW5pdGlvbilcbiAqIC0gc2NoZW1hIChTdHJpbmcpOiBydWxlIG5hbWUgKGZpeGVkIHBhdHRlcm4gcHJlZml4KVxuICogLSBkZWZpbml0aW9uIChTdHJpbmd8UmVnRXhwfE9iamVjdCk6IHNjaGVtYSBkZWZpbml0aW9uXG4gKlxuICogQWRkIG5ldyBydWxlIGRlZmluaXRpb24uIFNlZSBjb25zdHJ1Y3RvciBkZXNjcmlwdGlvbiBmb3IgZGV0YWlscy5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKHNjaGVtYSwgZGVmaW5pdGlvbikge1xuICB0aGlzLl9fc2NoZW1hc19fW3NjaGVtYV0gPSBkZWZpbml0aW9uO1xuICBjb21waWxlKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqIGNoYWluYWJsZVxuICogTGlua2lmeUl0I3NldChvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB7IGZ1enp5TGlua3xmdXp6eUVtYWlsfGZ1enp5SVA6IHRydWV8ZmFsc2UgfVxuICpcbiAqIFNldCByZWNvZ25pdGlvbiBvcHRpb25zIGZvciBsaW5rcyB3aXRob3V0IHNjaGVtYS5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcbiAgdGhpcy5fX29wdHNfXyA9IGFzc2lnbih0aGlzLl9fb3B0c19fLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICogTGlua2lmeUl0I3Rlc3QodGV4dCkgLT4gQm9vbGVhblxuICpcbiAqIFNlYXJjaGVzIGxpbmtpZmlhYmxlIHBhdHRlcm4gYW5kIHJldHVybnMgYHRydWVgIG9uIHN1Y2Nlc3Mgb3IgYGZhbHNlYCBvbiBmYWlsLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24gdGVzdCh0ZXh0KSB7XG4gIC8vIFJlc2V0IHNjYW4gY2FjaGVcbiAgdGhpcy5fX3RleHRfY2FjaGVfXyA9IHRleHQ7XG4gIHRoaXMuX19pbmRleF9fICAgICAgPSAtMTtcblxuICBpZiAoIXRleHQubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHZhciBtLCBtbCwgbWUsIGxlbiwgc2hpZnQsIG5leHQsIHJlLCB0bGRfcG9zLCBhdF9wb3M7XG5cbiAgLy8gdHJ5IHRvIHNjYW4gZm9yIGxpbmsgd2l0aCBzY2hlbWEgLSB0aGF0J3MgdGhlIG1vc3Qgc2ltcGxlIHJ1bGVcbiAgaWYgKHRoaXMucmUuc2NoZW1hX3Rlc3QudGVzdCh0ZXh0KSkge1xuICAgIHJlID0gdGhpcy5yZS5zY2hlbWFfc2VhcmNoO1xuICAgIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKChtID0gcmUuZXhlYyh0ZXh0KSkgIT09IG51bGwpIHtcbiAgICAgIGxlbiA9IHRoaXMudGVzdFNjaGVtYUF0KHRleHQsIG1bMl0sIHJlLmxhc3RJbmRleCk7XG4gICAgICBpZiAobGVuKSB7XG4gICAgICAgIHRoaXMuX19zY2hlbWFfXyAgICAgPSBtWzJdO1xuICAgICAgICB0aGlzLl9faW5kZXhfXyAgICAgID0gbS5pbmRleCArIG1bMV0ubGVuZ3RoO1xuICAgICAgICB0aGlzLl9fbGFzdF9pbmRleF9fID0gbS5pbmRleCArIG1bMF0ubGVuZ3RoICsgbGVuO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fX29wdHNfXy5mdXp6eUxpbmsgJiYgdGhpcy5fX2NvbXBpbGVkX19bJ2h0dHA6J10pIHtcbiAgICAvLyBndWVzcyBzY2hlbWFsZXNzIGxpbmtzXG4gICAgdGxkX3BvcyA9IHRleHQuc2VhcmNoKHRoaXMucmUuaG9zdF9mdXp6eV90ZXN0KTtcbiAgICBpZiAodGxkX3BvcyA+PSAwKSB7XG4gICAgICAvLyBpZiB0bGQgaXMgbG9jYXRlZCBhZnRlciBmb3VuZCBsaW5rIC0gbm8gbmVlZCB0byBjaGVjayBmdXp6eSBwYXR0ZXJuXG4gICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHRsZF9wb3MgPCB0aGlzLl9faW5kZXhfXykge1xuICAgICAgICBpZiAoKG1sID0gdGV4dC5tYXRjaCh0aGlzLl9fb3B0c19fLmZ1enp5SVAgPyB0aGlzLnJlLmxpbmtfZnV6enkgOiB0aGlzLnJlLmxpbmtfbm9faXBfZnV6enkpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgc2hpZnQgPSBtbC5pbmRleCArIG1sWzFdLmxlbmd0aDtcblxuICAgICAgICAgIGlmICh0aGlzLl9faW5kZXhfXyA8IDAgfHwgc2hpZnQgPCB0aGlzLl9faW5kZXhfXykge1xuICAgICAgICAgICAgdGhpcy5fX3NjaGVtYV9fICAgICA9ICcnO1xuICAgICAgICAgICAgdGhpcy5fX2luZGV4X18gICAgICA9IHNoaWZ0O1xuICAgICAgICAgICAgdGhpcy5fX2xhc3RfaW5kZXhfXyA9IG1sLmluZGV4ICsgbWxbMF0ubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLl9fb3B0c19fLmZ1enp5RW1haWwgJiYgdGhpcy5fX2NvbXBpbGVkX19bJ21haWx0bzonXSkge1xuICAgIC8vIGd1ZXNzIHNjaGVtYWxlc3MgZW1haWxzXG4gICAgYXRfcG9zID0gdGV4dC5pbmRleE9mKCdAJyk7XG4gICAgaWYgKGF0X3BvcyA+PSAwKSB7XG4gICAgICAvLyBXZSBjYW4ndCBza2lwIHRoaXMgY2hlY2ssIGJlY2F1c2UgdGhpcyBjYXNlcyBhcmUgcG9zc2libGU6XG4gICAgICAvLyAxOTIuMTY4LjEuMUBnbWFpbC5jb20sIG15LmluQGV4YW1wbGUuY29tXG4gICAgICBpZiAoKG1lID0gdGV4dC5tYXRjaCh0aGlzLnJlLmVtYWlsX2Z1enp5KSkgIT09IG51bGwpIHtcblxuICAgICAgICBzaGlmdCA9IG1lLmluZGV4ICsgbWVbMV0ubGVuZ3RoO1xuICAgICAgICBuZXh0ICA9IG1lLmluZGV4ICsgbWVbMF0ubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLl9faW5kZXhfXyA8IDAgfHwgc2hpZnQgPCB0aGlzLl9faW5kZXhfXyB8fFxuICAgICAgICAgICAgKHNoaWZ0ID09PSB0aGlzLl9faW5kZXhfXyAmJiBuZXh0ID4gdGhpcy5fX2xhc3RfaW5kZXhfXykpIHtcbiAgICAgICAgICB0aGlzLl9fc2NoZW1hX18gICAgID0gJ21haWx0bzonO1xuICAgICAgICAgIHRoaXMuX19pbmRleF9fICAgICAgPSBzaGlmdDtcbiAgICAgICAgICB0aGlzLl9fbGFzdF9pbmRleF9fID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLl9faW5kZXhfXyA+PSAwO1xufTtcblxuXG4vKipcbiAqIExpbmtpZnlJdCNwcmV0ZXN0KHRleHQpIC0+IEJvb2xlYW5cbiAqXG4gKiBWZXJ5IHF1aWNrIGNoZWNrLCB0aGF0IGNhbiBnaXZlIGZhbHNlIHBvc2l0aXZlcy4gUmV0dXJucyB0cnVlIGlmIGxpbmsgTUFZIEJFXG4gKiBjYW4gZXhpc3RzLiBDYW4gYmUgdXNlZCBmb3Igc3BlZWQgb3B0aW1pemF0aW9uLCB3aGVuIHlvdSBuZWVkIHRvIGNoZWNrIHRoYXRcbiAqIGxpbmsgTk9UIGV4aXN0cy5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUucHJldGVzdCA9IGZ1bmN0aW9uIHByZXRlc3QodGV4dCkge1xuICByZXR1cm4gdGhpcy5yZS5wcmV0ZXN0LnRlc3QodGV4dCk7XG59O1xuXG5cbi8qKlxuICogTGlua2lmeUl0I3Rlc3RTY2hlbWFBdCh0ZXh0LCBuYW1lLCBwb3NpdGlvbikgLT4gTnVtYmVyXG4gKiAtIHRleHQgKFN0cmluZyk6IHRleHQgdG8gc2NhblxuICogLSBuYW1lIChTdHJpbmcpOiBydWxlIChzY2hlbWEpIG5hbWVcbiAqIC0gcG9zaXRpb24gKE51bWJlcik6IHRleHQgb2Zmc2V0IHRvIGNoZWNrIGZyb21cbiAqXG4gKiBTaW1pbGFyIHRvIFtbTGlua2lmeUl0I3Rlc3RdXSBidXQgY2hlY2tzIG9ubHkgc3BlY2lmaWMgcHJvdG9jb2wgdGFpbCBleGFjdGx5XG4gKiBhdCBnaXZlbiBwb3NpdGlvbi4gUmV0dXJucyBsZW5ndGggb2YgZm91bmQgcGF0dGVybiAoMCBvbiBmYWlsKS5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUudGVzdFNjaGVtYUF0ID0gZnVuY3Rpb24gdGVzdFNjaGVtYUF0KHRleHQsIHNjaGVtYSwgcG9zKSB7XG4gIC8vIElmIG5vdCBzdXBwb3J0ZWQgc2NoZW1hIGNoZWNrIHJlcXVlc3RlZCAtIHRlcm1pbmF0ZVxuICBpZiAoIXRoaXMuX19jb21waWxlZF9fW3NjaGVtYS50b0xvd2VyQ2FzZSgpXSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiB0aGlzLl9fY29tcGlsZWRfX1tzY2hlbWEudG9Mb3dlckNhc2UoKV0udmFsaWRhdGUodGV4dCwgcG9zLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBMaW5raWZ5SXQjbWF0Y2godGV4dCkgLT4gQXJyYXl8bnVsbFxuICpcbiAqIFJldHVybnMgYXJyYXkgb2YgZm91bmQgbGluayBkZXNjcmlwdGlvbnMgb3IgYG51bGxgIG9uIGZhaWwuIFdlIHN0cm9uZ2x5XG4gKiByZWNvbW1lbmQgdG8gdXNlIFtbTGlua2lmeUl0I3Rlc3RdXSBmaXJzdCwgZm9yIGJlc3Qgc3BlZWQuXG4gKlxuICogIyMjIyMgUmVzdWx0IG1hdGNoIGRlc2NyaXB0aW9uXG4gKlxuICogLSBfX3NjaGVtYV9fIC0gbGluayBzY2hlbWEsIGNhbiBiZSBlbXB0eSBmb3IgZnV6enkgbGlua3MsIG9yIGAvL2AgZm9yXG4gKiAgIHByb3RvY29sLW5ldXRyYWwgIGxpbmtzLlxuICogLSBfX2luZGV4X18gLSBvZmZzZXQgb2YgbWF0Y2hlZCB0ZXh0XG4gKiAtIF9fbGFzdEluZGV4X18gLSBpbmRleCBvZiBuZXh0IGNoYXIgYWZ0ZXIgbWF0aGNoIGVuZFxuICogLSBfX3Jhd19fIC0gbWF0Y2hlZCB0ZXh0XG4gKiAtIF9fdGV4dF9fIC0gbm9ybWFsaXplZCB0ZXh0XG4gKiAtIF9fdXJsX18gLSBsaW5rLCBnZW5lcmF0ZWQgZnJvbSBtYXRjaGVkIHRleHRcbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiBtYXRjaCh0ZXh0KSB7XG4gIHZhciBzaGlmdCA9IDAsIHJlc3VsdCA9IFtdO1xuXG4gIC8vIFRyeSB0byB0YWtlIHByZXZpb3VzIGVsZW1lbnQgZnJvbSBjYWNoZSwgaWYgLnRlc3QoKSBjYWxsZWQgYmVmb3JlXG4gIGlmICh0aGlzLl9faW5kZXhfXyA+PSAwICYmIHRoaXMuX190ZXh0X2NhY2hlX18gPT09IHRleHQpIHtcbiAgICByZXN1bHQucHVzaChjcmVhdGVNYXRjaCh0aGlzLCBzaGlmdCkpO1xuICAgIHNoaWZ0ID0gdGhpcy5fX2xhc3RfaW5kZXhfXztcbiAgfVxuXG4gIC8vIEN1dCBoZWFkIGlmIGNhY2hlIHdhcyB1c2VkXG4gIHZhciB0YWlsID0gc2hpZnQgPyB0ZXh0LnNsaWNlKHNoaWZ0KSA6IHRleHQ7XG5cbiAgLy8gU2NhbiBzdHJpbmcgdW50aWwgZW5kIHJlYWNoZWRcbiAgd2hpbGUgKHRoaXMudGVzdCh0YWlsKSkge1xuICAgIHJlc3VsdC5wdXNoKGNyZWF0ZU1hdGNoKHRoaXMsIHNoaWZ0KSk7XG5cbiAgICB0YWlsID0gdGFpbC5zbGljZSh0aGlzLl9fbGFzdF9pbmRleF9fKTtcbiAgICBzaGlmdCArPSB0aGlzLl9fbGFzdF9pbmRleF9fO1xuICB9XG5cbiAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5cbi8qKiBjaGFpbmFibGVcbiAqIExpbmtpZnlJdCN0bGRzKGxpc3QgWywga2VlcE9sZF0pIC0+IHRoaXNcbiAqIC0gbGlzdCAoQXJyYXkpOiBsaXN0IG9mIHRsZHNcbiAqIC0ga2VlcE9sZCAoQm9vbGVhbik6IG1lcmdlIHdpdGggY3VycmVudCBsaXN0IGlmIGB0cnVlYCAoYGZhbHNlYCBieSBkZWZhdWx0KVxuICpcbiAqIExvYWQgKG9yIG1lcmdlKSBuZXcgdGxkcyBsaXN0LiBUaG9zZSBhcmUgdXNlciBmb3IgZnV6enkgbGlua3MgKHdpdGhvdXQgcHJlZml4KVxuICogdG8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzLiBCeSBkZWZhdWx0IHRoaXMgYWxnb3J5dGhtIHVzZWQ6XG4gKlxuICogLSBob3N0bmFtZSB3aXRoIGFueSAyLWxldHRlciByb290IHpvbmVzIGFyZSBvay5cbiAqIC0gYml6fGNvbXxlZHV8Z292fG5ldHxvcmd8cHJvfHdlYnx4eHh8YWVyb3xhc2lhfGNvb3B8aW5mb3xtdXNldW18bmFtZXxzaG9wfNGA0YRcbiAqICAgYXJlIG9rLlxuICogLSBlbmNvZGVkIChgeG4tLS4uLmApIHJvb3Qgem9uZXMgYXJlIG9rLlxuICpcbiAqIElmIGxpc3QgaXMgcmVwbGFjZWQsIHRoZW4gZXhhY3QgbWF0Y2ggZm9yIDItY2hhcnMgcm9vdCB6b25lcyB3aWxsIGJlIGNoZWNrZWQuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnRsZHMgPSBmdW5jdGlvbiB0bGRzKGxpc3QsIGtlZXBPbGQpIHtcbiAgbGlzdCA9IEFycmF5LmlzQXJyYXkobGlzdCkgPyBsaXN0IDogWyBsaXN0IF07XG5cbiAgaWYgKCFrZWVwT2xkKSB7XG4gICAgdGhpcy5fX3RsZHNfXyA9IGxpc3Quc2xpY2UoKTtcbiAgICB0aGlzLl9fdGxkc19yZXBsYWNlZF9fID0gdHJ1ZTtcbiAgICBjb21waWxlKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5fX3RsZHNfXyA9IHRoaXMuX190bGRzX18uY29uY2F0KGxpc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsLCBpZHgsIGFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsICE9PSBhcnJbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpO1xuXG4gIGNvbXBpbGUodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBMaW5raWZ5SXQjbm9ybWFsaXplKG1hdGNoKVxuICpcbiAqIERlZmF1bHQgbm9ybWFsaXplciAoaWYgc2NoZW1hIGRvZXMgbm90IGRlZmluZSBpdCdzIG93bikuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShtYXRjaCkge1xuXG4gIC8vIERvIG1pbmltYWwgcG9zc2libGUgY2hhbmdlcyBieSBkZWZhdWx0LiBOZWVkIHRvIGNvbGxlY3QgZmVlZGJhY2sgcHJpb3JcbiAgLy8gdG8gbW92ZSBmb3J3YXJkIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9saW5raWZ5LWl0L2lzc3Vlcy8xXG5cbiAgaWYgKCFtYXRjaC5zY2hlbWEpIHsgbWF0Y2gudXJsID0gJ2h0dHA6Ly8nICsgbWF0Y2gudXJsOyB9XG5cbiAgaWYgKG1hdGNoLnNjaGVtYSA9PT0gJ21haWx0bzonICYmICEvXm1haWx0bzovaS50ZXN0KG1hdGNoLnVybCkpIHtcbiAgICBtYXRjaC51cmwgPSAnbWFpbHRvOicgKyBtYXRjaC51cmw7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBMaW5raWZ5SXQjb25Db21waWxlKClcbiAqXG4gKiBPdmVycmlkZSB0byBtb2RpZnkgYmFzaWMgUmVnRXhwLXMuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLm9uQ29tcGlsZSA9IGZ1bmN0aW9uIG9uQ29tcGlsZSgpIHtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5raWZ5SXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICB2YXIgcmUgPSB7fTtcblxuICAvLyBVc2UgZGlyZWN0IGV4dHJhY3QgaW5zdGVhZCBvZiBgcmVnZW5lcmF0ZWAgdG8gcmVkdXNlIGJyb3dzZXJpZmllZCBzaXplXG4gIHJlLnNyY19BbnkgPSByZXF1aXJlKCd1Yy5taWNyby9wcm9wZXJ0aWVzL0FueS9yZWdleCcpLnNvdXJjZTtcbiAgcmUuc3JjX0NjICA9IHJlcXVpcmUoJ3VjLm1pY3JvL2NhdGVnb3JpZXMvQ2MvcmVnZXgnKS5zb3VyY2U7XG4gIHJlLnNyY19aICAgPSByZXF1aXJlKCd1Yy5taWNyby9jYXRlZ29yaWVzL1ovcmVnZXgnKS5zb3VyY2U7XG4gIHJlLnNyY19QICAgPSByZXF1aXJlKCd1Yy5taWNyby9jYXRlZ29yaWVzL1AvcmVnZXgnKS5zb3VyY2U7XG5cbiAgLy8gXFxwe1xcWlxcUFxcQ2NcXENGfSAod2hpdGUgc3BhY2VzICsgY29udHJvbCArIGZvcm1hdCArIHB1bmN0dWF0aW9uKVxuICByZS5zcmNfWlBDYyA9IFsgcmUuc3JjX1osIHJlLnNyY19QLCByZS5zcmNfQ2MgXS5qb2luKCd8Jyk7XG5cbiAgLy8gXFxwe1xcWlxcQ2N9ICh3aGl0ZSBzcGFjZXMgKyBjb250cm9sKVxuICByZS5zcmNfWkNjID0gWyByZS5zcmNfWiwgcmUuc3JjX0NjIF0uam9pbignfCcpO1xuXG4gIC8vIEV4cGVyaW1lbnRhbC4gTGlzdCBvZiBjaGFycywgY29tcGxldGVseSBwcm9oaWJpdGVkIGluIGxpbmtzXG4gIC8vIGJlY2F1c2UgY2FuIHNlcGFyYXRlIGl0IGZyb20gb3RoZXIgcGFydCBvZiB0ZXh0XG4gIHZhciB0ZXh0X3NlcGFyYXRvcnMgPSAnWz48XFx1ZmY1Y10nO1xuXG4gIC8vIEFsbCBwb3NzaWJsZSB3b3JkIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgd2l0aG91dCBwdW5jdHVhdGlvbiwgc3BhY2VzICYgY29udHJvbHMpXG4gIC8vIERlZmluZWQgdmlhIHB1bmN0dWF0aW9uICYgc3BhY2VzIHRvIHNhdmUgc3BhY2VcbiAgLy8gU2hvdWxkIGJlIHNvbWV0aGluZyBsaWtlIFxccHtcXExcXE5cXFNcXE19IChcXHcgYnV0IHdpdGhvdXQgYF9gKVxuICByZS5zcmNfcHNldWRvX2xldHRlciAgICAgICA9ICcoPzooPyEnICsgdGV4dF9zZXBhcmF0b3JzICsgJ3wnICsgcmUuc3JjX1pQQ2MgKyAnKScgKyByZS5zcmNfQW55ICsgJyknO1xuICAvLyBUaGUgc2FtZSBhcyBhYm90aGUgYnV0IHdpdGhvdXQgWzAtOV1cbiAgLy8gdmFyIHNyY19wc2V1ZG9fbGV0dGVyX25vbl9kID0gJyg/Oig/IVswLTldfCcgKyBzcmNfWlBDYyArICcpJyArIHNyY19BbnkgKyAnKSc7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZS5zcmNfaXA0ID1cblxuICAgICcoPzooMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcXFwuKXszfSgyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJztcblxuICAvLyBQcm9oaWJpdCBhbnkgb2YgXCJAL1tdKClcIiBpbiB1c2VyL3Bhc3MgdG8gYXZvaWQgd3JvbmcgZG9tYWluIGZldGNoLlxuICByZS5zcmNfYXV0aCAgICA9ICcoPzooPzooPyEnICsgcmUuc3JjX1pDYyArICd8W0AvXFxcXFtcXFxcXSgpXSkuKStAKT8nO1xuXG4gIHJlLnNyY19wb3J0ID1cblxuICAgICcoPzo6KD86Nig/OlswLTRdXFxcXGR7M318NSg/OlswLTRdXFxcXGR7Mn18NSg/OlswLTJdXFxcXGR8M1swLTVdKSkpfFsxLTVdP1xcXFxkezEsNH0pKT8nO1xuXG4gIHJlLnNyY19ob3N0X3Rlcm1pbmF0b3IgPVxuXG4gICAgJyg/PSR8JyArIHRleHRfc2VwYXJhdG9ycyArICd8JyArIHJlLnNyY19aUENjICsgJykoPyEtfF98OlxcXFxkfFxcXFwuLXxcXFxcLig/ISR8JyArIHJlLnNyY19aUENjICsgJykpJztcblxuICByZS5zcmNfcGF0aCA9XG5cbiAgICAnKD86JyArXG4gICAgICAnWy8/I10nICtcbiAgICAgICAgJyg/OicgK1xuICAgICAgICAgICcoPyEnICsgcmUuc3JjX1pDYyArICd8JyArIHRleHRfc2VwYXJhdG9ycyArICd8WygpW1xcXFxde30uLFwiXFwnPyFcXFxcLV0pLnwnICtcbiAgICAgICAgICAnXFxcXFsoPzooPyEnICsgcmUuc3JjX1pDYyArICd8XFxcXF0pLikqXFxcXF18JyArXG4gICAgICAgICAgJ1xcXFwoKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFspXSkuKSpcXFxcKXwnICtcbiAgICAgICAgICAnXFxcXHsoPzooPyEnICsgcmUuc3JjX1pDYyArICd8W31dKS4pKlxcXFx9fCcgK1xuICAgICAgICAgICdcXFxcXCIoPzooPyEnICsgcmUuc3JjX1pDYyArICd8W1wiXSkuKStcXFxcXCJ8JyArXG4gICAgICAgICAgXCJcXFxcJyg/Oig/IVwiICsgcmUuc3JjX1pDYyArIFwifFsnXSkuKStcXFxcJ3xcIiArXG4gICAgICAgICAgXCJcXFxcJyg/PVwiICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnfFstXSkufCcgKyAgLy8gYWxsb3cgYEknbV9raW5nYCBpZiBubyBwYWlyIGZvdW5kXG4gICAgICAgICAgJ1xcXFwuezIsfVthLXpBLVowLTklLyZdfCcgKyAvLyBnb29nbGUgaGFzIG1hbnkgZG90cyBpbiBcImdvb2dsZSBzZWFyY2hcIiBsaW5rcyAoIzY2LCAjODEpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdpdGh1YiBoYXMgLi4uIGluIGNvbW1pdCByYW5nZSBsaW5rcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0cmljdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0gZW5nbGlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0gcGVyY2VudC1lbmNvZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLSBwYXJ0cyBvZiBmaWxlIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtIHBhcmFtcyBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1bnRpbCBtb3JlIGV4YW1wbGVzIGZvdW5kLlxuICAgICAgICAgICdcXFxcLig/IScgKyByZS5zcmNfWkNjICsgJ3xbLl0pLnwnICtcbiAgICAgICAgICAob3B0cyAmJiBvcHRzWyctLS0nXSA/XG4gICAgICAgICAgICAnXFxcXC0oPyEtLSg/OlteLV18JCkpKD86LSopfCcgLy8gYC0tLWAgPT4gbG9uZyBkYXNoLCB0ZXJtaW5hdGVcbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICdcXFxcLSt8J1xuICAgICAgICAgICkgK1xuICAgICAgICAgICdcXFxcLCg/IScgKyByZS5zcmNfWkNjICsgJykufCcgKyAgICAgICAvLyBhbGxvdyBgLCwsYCBpbiBwYXRoc1xuICAgICAgICAgICdcXFxcISsoPyEnICsgcmUuc3JjX1pDYyArICd8WyFdKS58JyArICAvLyBhbGxvdyBgISEhYCBpbiBwYXRocywgYnV0IG5vdCBhdCB0aGUgZW5kXG4gICAgICAgICAgJ1xcXFw/KD8hJyArIHJlLnNyY19aQ2MgKyAnfFs/XSkuJyArXG4gICAgICAgICcpKycgK1xuICAgICAgJ3xcXFxcLycgK1xuICAgICcpPyc7XG5cbiAgLy8gQWxsb3cgYW55dGhpbmcgaW4gbWFya2Rvd24gc3BlYywgZm9yYmlkIHF1b3RlIChcIikgYXQgdGhlIGZpcnN0IHBvc2l0aW9uXG4gIC8vIGJlY2F1c2UgZW1haWxzIGVuY2xvc2VkIGluIHF1b3RlcyBhcmUgZmFyIG1vcmUgY29tbW9uXG4gIHJlLnNyY19lbWFpbF9uYW1lID1cblxuICAgICdbXFxcXC07OiY9XFxcXCtcXFxcJCxcXFxcLmEtekEtWjAtOV9dW1xcXFwtOzomPVxcXFwrXFxcXCQsXFxcXFwiXFxcXC5hLXpBLVowLTlfXSonO1xuXG4gIHJlLnNyY194biA9XG5cbiAgICAneG4tLVthLXowLTlcXFxcLV17MSw1OX0nO1xuXG4gIC8vIE1vcmUgdG8gcmVhZCBhYm91dCBkb21haW4gbmFtZXNcbiAgLy8gaHR0cDovL3NlcnZlcmZhdWx0LmNvbS9xdWVzdGlvbnMvNjM4MjYwL1xuXG4gIHJlLnNyY19kb21haW5fcm9vdCA9XG5cbiAgICAvLyBBbGxvdyBsZXR0ZXJzICYgZGlnaXRzIChodHRwOi8vdGVzdDEpXG4gICAgJyg/OicgK1xuICAgICAgcmUuc3JjX3huICtcbiAgICAgICd8JyArXG4gICAgICByZS5zcmNfcHNldWRvX2xldHRlciArICd7MSw2M30nICtcbiAgICAnKSc7XG5cbiAgcmUuc3JjX2RvbWFpbiA9XG5cbiAgICAnKD86JyArXG4gICAgICByZS5zcmNfeG4gK1xuICAgICAgJ3wnICtcbiAgICAgICcoPzonICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnKScgK1xuICAgICAgJ3wnICtcbiAgICAgICcoPzonICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnKD86LXwnICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnKXswLDYxfScgKyByZS5zcmNfcHNldWRvX2xldHRlciArICcpJyArXG4gICAgJyknO1xuXG4gIHJlLnNyY19ob3N0ID1cblxuICAgICcoPzonICtcbiAgICAvLyBEb24ndCBuZWVkIElQIGNoZWNrLCBiZWNhdXNlIGRpZ2l0cyBhcmUgYWxyZWFkeSBhbGxvd2VkIGluIG5vcm1hbCBkb21haW4gbmFtZXNcbiAgICAvLyAgIHNyY19pcDQgK1xuICAgIC8vICd8JyArXG4gICAgICAnKD86KD86KD86JyArIHJlLnNyY19kb21haW4gKyAnKVxcXFwuKSonICsgcmUuc3JjX2RvbWFpbi8qX3Jvb3QqLyArICcpJyArXG4gICAgJyknO1xuXG4gIHJlLnRwbF9ob3N0X2Z1enp5ID1cblxuICAgICcoPzonICtcbiAgICAgIHJlLnNyY19pcDQgK1xuICAgICd8JyArXG4gICAgICAnKD86KD86KD86JyArIHJlLnNyY19kb21haW4gKyAnKVxcXFwuKSsoPzolVExEUyUpKScgK1xuICAgICcpJztcblxuICByZS50cGxfaG9zdF9ub19pcF9mdXp6eSA9XG5cbiAgICAnKD86KD86KD86JyArIHJlLnNyY19kb21haW4gKyAnKVxcXFwuKSsoPzolVExEUyUpKSc7XG5cbiAgcmUuc3JjX2hvc3Rfc3RyaWN0ID1cblxuICAgIHJlLnNyY19ob3N0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS50cGxfaG9zdF9mdXp6eV9zdHJpY3QgPVxuXG4gICAgcmUudHBsX2hvc3RfZnV6enkgKyByZS5zcmNfaG9zdF90ZXJtaW5hdG9yO1xuXG4gIHJlLnNyY19ob3N0X3BvcnRfc3RyaWN0ID1cblxuICAgIHJlLnNyY19ob3N0ICsgcmUuc3JjX3BvcnQgKyByZS5zcmNfaG9zdF90ZXJtaW5hdG9yO1xuXG4gIHJlLnRwbF9ob3N0X3BvcnRfZnV6enlfc3RyaWN0ID1cblxuICAgIHJlLnRwbF9ob3N0X2Z1enp5ICsgcmUuc3JjX3BvcnQgKyByZS5zcmNfaG9zdF90ZXJtaW5hdG9yO1xuXG4gIHJlLnRwbF9ob3N0X3BvcnRfbm9faXBfZnV6enlfc3RyaWN0ID1cblxuICAgIHJlLnRwbF9ob3N0X25vX2lwX2Z1enp5ICsgcmUuc3JjX3BvcnQgKyByZS5zcmNfaG9zdF90ZXJtaW5hdG9yO1xuXG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gTWFpbiBydWxlc1xuXG4gIC8vIFJ1ZGUgdGVzdCBmdXp6eSBsaW5rcyBieSBob3N0LCBmb3IgcXVpY2sgZGVueVxuICByZS50cGxfaG9zdF9mdXp6eV90ZXN0ID1cblxuICAgICdsb2NhbGhvc3R8d3d3XFxcXC58XFxcXC5cXFxcZHsxLDN9XFxcXC58KD86XFxcXC4oPzolVExEUyUpKD86JyArIHJlLnNyY19aUENjICsgJ3w+fCQpKSc7XG5cbiAgcmUudHBsX2VtYWlsX2Z1enp5ID1cblxuICAgICAgJyhefCcgKyB0ZXh0X3NlcGFyYXRvcnMgKyAnfFwifFxcXFwofCcgKyByZS5zcmNfWkNjICsgJyknICtcbiAgICAgICcoJyArIHJlLnNyY19lbWFpbF9uYW1lICsgJ0AnICsgcmUudHBsX2hvc3RfZnV6enlfc3RyaWN0ICsgJyknO1xuXG4gIHJlLnRwbF9saW5rX2Z1enp5ID1cbiAgICAgIC8vIEZ1enp5IGxpbmsgY2FuJ3QgYmUgcHJlcGVuZGVkIHdpdGggLjovXFwtIGFuZCBub24gcHVuY3R1YXRpb24uXG4gICAgICAvLyBidXQgY2FuIHN0YXJ0IHdpdGggPiAobWFya2Rvd24gYmxvY2txdW90ZSlcbiAgICAgICcoXnwoPyFbLjovXFxcXC1fQF0pKD86WyQrPD0+XmB8XFx1ZmY1Y118JyArIHJlLnNyY19aUENjICsgJykpJyArXG4gICAgICAnKCg/IVskKzw9Pl5gfFxcdWZmNWNdKScgKyByZS50cGxfaG9zdF9wb3J0X2Z1enp5X3N0cmljdCArIHJlLnNyY19wYXRoICsgJyknO1xuXG4gIHJlLnRwbF9saW5rX25vX2lwX2Z1enp5ID1cbiAgICAgIC8vIEZ1enp5IGxpbmsgY2FuJ3QgYmUgcHJlcGVuZGVkIHdpdGggLjovXFwtIGFuZCBub24gcHVuY3R1YXRpb24uXG4gICAgICAvLyBidXQgY2FuIHN0YXJ0IHdpdGggPiAobWFya2Rvd24gYmxvY2txdW90ZSlcbiAgICAgICcoXnwoPyFbLjovXFxcXC1fQF0pKD86WyQrPD0+XmB8XFx1ZmY1Y118JyArIHJlLnNyY19aUENjICsgJykpJyArXG4gICAgICAnKCg/IVskKzw9Pl5gfFxcdWZmNWNdKScgKyByZS50cGxfaG9zdF9wb3J0X25vX2lwX2Z1enp5X3N0cmljdCArIHJlLnNyY19wYXRoICsgJyknO1xuXG4gIHJldHVybiByZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi8nKTtcbiIsIi8vIEhUTUw1IGVudGl0aWVzIG1hcDogeyBuYW1lIC0+IHV0ZjE2c3RyaW5nIH1cbi8vXG4ndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50IHF1b3RlczowKi9cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZW50aXRpZXMvbGliL21hcHMvZW50aXRpZXMuanNvbicpO1xuIiwiLy8gTGlzdCBvZiB2YWxpZCBodG1sIGJsb2NrcyBuYW1lcywgYWNjb3J0aW5nIHRvIGNvbW1vbm1hcmsgc3BlY1xuLy8gaHR0cDovL2pnbS5naXRodWIuaW8vQ29tbW9uTWFyay9zcGVjLmh0bWwjaHRtbC1ibG9ja3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAnc2VjdGlvbicsXG4gICdzb3VyY2UnLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl07XG4iLCIvLyBSZWdleHBzIHRvIG1hdGNoIGh0bWwgZWxlbWVudHNcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXR0cl9uYW1lICAgICA9ICdbYS16QS1aXzpdW2EtekEtWjAtOTouXy1dKic7XG5cbnZhciB1bnF1b3RlZCAgICAgID0gJ1teXCJcXCc9PD5gXFxcXHgwMC1cXFxceDIwXSsnO1xudmFyIHNpbmdsZV9xdW90ZWQgPSBcIidbXiddKidcIjtcbnZhciBkb3VibGVfcXVvdGVkID0gJ1wiW15cIl0qXCInO1xuXG52YXIgYXR0cl92YWx1ZSAgPSAnKD86JyArIHVucXVvdGVkICsgJ3wnICsgc2luZ2xlX3F1b3RlZCArICd8JyArIGRvdWJsZV9xdW90ZWQgKyAnKSc7XG5cbnZhciBhdHRyaWJ1dGUgICA9ICcoPzpcXFxccysnICsgYXR0cl9uYW1lICsgJyg/OlxcXFxzKj1cXFxccyonICsgYXR0cl92YWx1ZSArICcpPyknO1xuXG52YXIgb3Blbl90YWcgICAgPSAnPFtBLVphLXpdW0EtWmEtejAtOVxcXFwtXSonICsgYXR0cmlidXRlICsgJypcXFxccypcXFxcLz8+JztcblxudmFyIGNsb3NlX3RhZyAgID0gJzxcXFxcL1tBLVphLXpdW0EtWmEtejAtOVxcXFwtXSpcXFxccyo+JztcbnZhciBjb21tZW50ICAgICA9ICc8IS0tLS0+fDwhLS0oPzotP1tePi1dKSg/Oi0/W14tXSkqLS0+JztcbnZhciBwcm9jZXNzaW5nICA9ICc8Wz9dW1xcXFxzXFxcXFNdKj9bP10+JztcbnZhciBkZWNsYXJhdGlvbiA9ICc8IVtBLVpdK1xcXFxzK1tePl0qPic7XG52YXIgY2RhdGEgICAgICAgPSAnPCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+JztcblxudmFyIEhUTUxfVEFHX1JFID0gbmV3IFJlZ0V4cCgnXig/OicgKyBvcGVuX3RhZyArICd8JyArIGNsb3NlX3RhZyArICd8JyArIGNvbW1lbnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgcHJvY2Vzc2luZyArICd8JyArIGRlY2xhcmF0aW9uICsgJ3wnICsgY2RhdGEgKyAnKScpO1xudmFyIEhUTUxfT1BFTl9DTE9TRV9UQUdfUkUgPSBuZXcgUmVnRXhwKCdeKD86JyArIG9wZW5fdGFnICsgJ3wnICsgY2xvc2VfdGFnICsgJyknKTtcblxubW9kdWxlLmV4cG9ydHMuSFRNTF9UQUdfUkUgPSBIVE1MX1RBR19SRTtcbm1vZHVsZS5leHBvcnRzLkhUTUxfT1BFTl9DTE9TRV9UQUdfUkUgPSBIVE1MX09QRU5fQ0xPU0VfVEFHX1JFO1xuIiwiLy8gVXRpbGl0aWVzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIF9jbGFzcyhvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopOyB9XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nOyB9XG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBoYXMob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KTtcbn1cblxuLy8gTWVyZ2Ugb2JqZWN0c1xuLy9cbmZ1bmN0aW9uIGFzc2lnbihvYmogLypmcm9tMSwgZnJvbTIsIGZyb20zLCAuLi4qLykge1xuICB2YXIgc291cmNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZSkgeyByZXR1cm47IH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzb3VyY2UgKyAnbXVzdCBiZSBvYmplY3QnKTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSBhcnJheSBhbmQgcHV0IGFub3RoZXIgYXJyYXkgYXQgdGhvc2UgcG9zaXRpb24uXG4vLyBVc2VmdWwgZm9yIHNvbWUgb3BlcmF0aW9ucyB3aXRoIHRva2Vuc1xuZnVuY3Rpb24gYXJyYXlSZXBsYWNlQXQoc3JjLCBwb3MsIG5ld0VsZW1lbnRzKSB7XG4gIHJldHVybiBbXS5jb25jYXQoc3JjLnNsaWNlKDAsIHBvcyksIG5ld0VsZW1lbnRzLCBzcmMuc2xpY2UocG9zICsgMSkpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRW50aXR5Q29kZShjKSB7XG4gIC8qZXNsaW50IG5vLWJpdHdpc2U6MCovXG4gIC8vIGJyb2tlbiBzZXF1ZW5jZVxuICBpZiAoYyA+PSAweEQ4MDAgJiYgYyA8PSAweERGRkYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIC8vIG5ldmVyIHVzZWRcbiAgaWYgKGMgPj0gMHhGREQwICYmIGMgPD0gMHhGREVGKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoKGMgJiAweEZGRkYpID09PSAweEZGRkYgfHwgKGMgJiAweEZGRkYpID09PSAweEZGRkUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIC8vIGNvbnRyb2wgY29kZXNcbiAgaWYgKGMgPj0gMHgwMCAmJiBjIDw9IDB4MDgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID09PSAweDBCKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA+PSAweDBFICYmIGMgPD0gMHgxRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPj0gMHg3RiAmJiBjIDw9IDB4OUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIC8vIG91dCBvZiByYW5nZVxuICBpZiAoYyA+IDB4MTBGRkZGKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZnJvbUNvZGVQb2ludChjKSB7XG4gIC8qZXNsaW50IG5vLWJpdHdpc2U6MCovXG4gIGlmIChjID4gMHhmZmZmKSB7XG4gICAgYyAtPSAweDEwMDAwO1xuICAgIHZhciBzdXJyb2dhdGUxID0gMHhkODAwICsgKGMgPj4gMTApLFxuICAgICAgICBzdXJyb2dhdGUyID0gMHhkYzAwICsgKGMgJiAweDNmZik7XG5cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdXJyb2dhdGUxLCBzdXJyb2dhdGUyKTtcbiAgfVxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbn1cblxuXG52YXIgVU5FU0NBUEVfTURfUkUgID0gL1xcXFwoWyFcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFtcXFxcXFxdXl9ge3x9fl0pL2c7XG52YXIgRU5USVRZX1JFICAgICAgID0gLyYoW2EteiNdW2EtejAtOV17MSwzMX0pOy9naTtcbnZhciBVTkVTQ0FQRV9BTExfUkUgPSBuZXcgUmVnRXhwKFVORVNDQVBFX01EX1JFLnNvdXJjZSArICd8JyArIEVOVElUWV9SRS5zb3VyY2UsICdnaScpO1xuXG52YXIgRElHSVRBTF9FTlRJVFlfVEVTVF9SRSA9IC9eIygoPzp4W2EtZjAtOV17MSw4fXxbMC05XXsxLDh9KSkvaTtcblxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnLi9lbnRpdGllcycpO1xuXG5mdW5jdGlvbiByZXBsYWNlRW50aXR5UGF0dGVybihtYXRjaCwgbmFtZSkge1xuICB2YXIgY29kZSA9IDA7XG5cbiAgaWYgKGhhcyhlbnRpdGllcywgbmFtZSkpIHtcbiAgICByZXR1cm4gZW50aXRpZXNbbmFtZV07XG4gIH1cblxuICBpZiAobmFtZS5jaGFyQ29kZUF0KDApID09PSAweDIzLyogIyAqLyAmJiBESUdJVEFMX0VOVElUWV9URVNUX1JFLnRlc3QobmFtZSkpIHtcbiAgICBjb2RlID0gbmFtZVsxXS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgcGFyc2VJbnQobmFtZS5zbGljZSgyKSwgMTYpIDogcGFyc2VJbnQobmFtZS5zbGljZSgxKSwgMTApO1xuXG4gICAgaWYgKGlzVmFsaWRFbnRpdHlDb2RlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZnJvbUNvZGVQb2ludChjb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2g7XG59XG5cbi8qZnVuY3Rpb24gcmVwbGFjZUVudGl0aWVzKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJyYnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZShFTlRJVFlfUkUsIHJlcGxhY2VFbnRpdHlQYXR0ZXJuKTtcbn0qL1xuXG5mdW5jdGlvbiB1bmVzY2FwZU1kKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJ1xcXFwnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuICByZXR1cm4gc3RyLnJlcGxhY2UoVU5FU0NBUEVfTURfUkUsICckMScpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZUFsbChzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCdcXFxcJykgPCAwICYmIHN0ci5pbmRleE9mKCcmJykgPCAwKSB7IHJldHVybiBzdHI7IH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoVU5FU0NBUEVfQUxMX1JFLCBmdW5jdGlvbiAobWF0Y2gsIGVzY2FwZWQsIGVudGl0eSkge1xuICAgIGlmIChlc2NhcGVkKSB7IHJldHVybiBlc2NhcGVkOyB9XG4gICAgcmV0dXJuIHJlcGxhY2VFbnRpdHlQYXR0ZXJuKG1hdGNoLCBlbnRpdHkpO1xuICB9KTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIEhUTUxfRVNDQVBFX1RFU1RfUkUgPSAvWyY8PlwiXS87XG52YXIgSFRNTF9FU0NBUEVfUkVQTEFDRV9SRSA9IC9bJjw+XCJdL2c7XG52YXIgSFRNTF9SRVBMQUNFTUVOVFMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7J1xufTtcblxuZnVuY3Rpb24gcmVwbGFjZVVuc2FmZUNoYXIoY2gpIHtcbiAgcmV0dXJuIEhUTUxfUkVQTEFDRU1FTlRTW2NoXTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgaWYgKEhUTUxfRVNDQVBFX1RFU1RfUkUudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKEhUTUxfRVNDQVBFX1JFUExBQ0VfUkUsIHJlcGxhY2VVbnNhZmVDaGFyKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgUkVHRVhQX0VTQ0FQRV9SRSA9IC9bLj8qK14kW1xcXVxcXFwoKXt9fC1dL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVJFKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVHRVhQX0VTQ0FQRV9SRSwgJ1xcXFwkJicpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBpc1NwYWNlKGNvZGUpIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDA5OlxuICAgIGNhc2UgMHgyMDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gWnMgKHVuaWNvZGUgY2xhc3MpIHx8IFtcXHRcXGZcXHZcXHJcXG5dXG5mdW5jdGlvbiBpc1doaXRlU3BhY2UoY29kZSkge1xuICBpZiAoY29kZSA+PSAweDIwMDAgJiYgY29kZSA8PSAweDIwMEEpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDA5OiAvLyBcXHRcbiAgICBjYXNlIDB4MEE6IC8vIFxcblxuICAgIGNhc2UgMHgwQjogLy8gXFx2XG4gICAgY2FzZSAweDBDOiAvLyBcXGZcbiAgICBjYXNlIDB4MEQ6IC8vIFxcclxuICAgIGNhc2UgMHgyMDpcbiAgICBjYXNlIDB4QTA6XG4gICAgY2FzZSAweDE2ODA6XG4gICAgY2FzZSAweDIwMkY6XG4gICAgY2FzZSAweDIwNUY6XG4gICAgY2FzZSAweDMwMDA6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbiovXG52YXIgVU5JQ09ERV9QVU5DVF9SRSA9IHJlcXVpcmUoJ3VjLm1pY3JvL2NhdGVnb3JpZXMvUC9yZWdleCcpO1xuXG4vLyBDdXJyZW50bHkgd2l0aG91dCBhc3RyYWwgY2hhcmFjdGVycyBzdXBwb3J0LlxuZnVuY3Rpb24gaXNQdW5jdENoYXIoY2gpIHtcbiAgcmV0dXJuIFVOSUNPREVfUFVOQ1RfUkUudGVzdChjaCk7XG59XG5cblxuLy8gTWFya2Rvd24gQVNDSUkgcHVuY3R1YXRpb24gY2hhcmFjdGVycy5cbi8vXG4vLyAhLCBcIiwgIywgJCwgJSwgJiwgJywgKCwgKSwgKiwgKywgLCwgLSwgLiwgLywgOiwgOywgPCwgPSwgPiwgPywgQCwgWywgXFwsIF0sIF4sIF8sIGAsIHssIHwsIH0sIG9yIH5cbi8vIGh0dHA6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMTUvI2FzY2lpLXB1bmN0dWF0aW9uLWNoYXJhY3RlclxuLy9cbi8vIERvbid0IGNvbmZ1c2Ugd2l0aCB1bmljb2RlIHB1bmN0dWF0aW9uICEhISBJdCBsYWNrcyBzb21lIGNoYXJzIGluIGFzY2lpIHJhbmdlLlxuLy9cbmZ1bmN0aW9uIGlzTWRBc2NpaVB1bmN0KGNoKSB7XG4gIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlIDB4MjEvKiAhICovOlxuICAgIGNhc2UgMHgyMi8qIFwiICovOlxuICAgIGNhc2UgMHgyMy8qICMgKi86XG4gICAgY2FzZSAweDI0LyogJCAqLzpcbiAgICBjYXNlIDB4MjUvKiAlICovOlxuICAgIGNhc2UgMHgyNi8qICYgKi86XG4gICAgY2FzZSAweDI3LyogJyAqLzpcbiAgICBjYXNlIDB4MjgvKiAoICovOlxuICAgIGNhc2UgMHgyOS8qICkgKi86XG4gICAgY2FzZSAweDJBLyogKiAqLzpcbiAgICBjYXNlIDB4MkIvKiArICovOlxuICAgIGNhc2UgMHgyQy8qICwgKi86XG4gICAgY2FzZSAweDJELyogLSAqLzpcbiAgICBjYXNlIDB4MkUvKiAuICovOlxuICAgIGNhc2UgMHgyRi8qIC8gKi86XG4gICAgY2FzZSAweDNBLyogOiAqLzpcbiAgICBjYXNlIDB4M0IvKiA7ICovOlxuICAgIGNhc2UgMHgzQy8qIDwgKi86XG4gICAgY2FzZSAweDNELyogPSAqLzpcbiAgICBjYXNlIDB4M0UvKiA+ICovOlxuICAgIGNhc2UgMHgzRi8qID8gKi86XG4gICAgY2FzZSAweDQwLyogQCAqLzpcbiAgICBjYXNlIDB4NUIvKiBbICovOlxuICAgIGNhc2UgMHg1Qy8qIFxcICovOlxuICAgIGNhc2UgMHg1RC8qIF0gKi86XG4gICAgY2FzZSAweDVFLyogXiAqLzpcbiAgICBjYXNlIDB4NUYvKiBfICovOlxuICAgIGNhc2UgMHg2MC8qIGAgKi86XG4gICAgY2FzZSAweDdCLyogeyAqLzpcbiAgICBjYXNlIDB4N0MvKiB8ICovOlxuICAgIGNhc2UgMHg3RC8qIH0gKi86XG4gICAgY2FzZSAweDdFLyogfiAqLzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gSGVwbGVyIHRvIHVuaWZ5IFtyZWZlcmVuY2UgbGFiZWxzXS5cbi8vXG5mdW5jdGlvbiBub3JtYWxpemVSZWZlcmVuY2Uoc3RyKSB7XG4gIC8vIFRyaW0gYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2VcbiAgLy9cbiAgc3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG5cbiAgLy8gSW4gbm9kZSB2MTAgJ+G6nicudG9Mb3dlckNhc2UoKSA9PT0gJ+G5vicsIHdoaWNoIGlzIHByZXN1bWVkIHRvIGJlIGEgYnVnXG4gIC8vIGZpeGVkIGluIHYxMiAoY291bGRuJ3QgZmluZCBhbnkgZGV0YWlscykuXG4gIC8vXG4gIC8vIFNvIHRyZWF0IHRoaXMgb25lIGFzIGEgc3BlY2lhbCBjYXNlXG4gIC8vIChyZW1vdmUgdGhpcyB3aGVuIG5vZGUgdjEwIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQpLlxuICAvL1xuICBpZiAoJ+G6nicudG9Mb3dlckNhc2UoKSA9PT0gJ+G5vicpIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgv4bqeL2csICfDnycpO1xuICB9XG5cbiAgLy8gLnRvTG93ZXJDYXNlKCkudG9VcHBlckNhc2UoKSBzaG91bGQgZ2V0IHJpZCBvZiBhbGwgZGlmZmVyZW5jZXNcbiAgLy8gYmV0d2VlbiBsZXR0ZXIgdmFyaWFudHMuXG4gIC8vXG4gIC8vIFNpbXBsZSAudG9Mb3dlckNhc2UoKSBkb2Vzbid0IG5vcm1hbGl6ZSAxMjUgY29kZSBwb2ludHMgY29ycmVjdGx5LFxuICAvLyBhbmQgLnRvVXBwZXJDYXNlIGRvZXNuJ3Qgbm9ybWFsaXplIDYgb2YgdGhlbSAobGlzdCBvZiBleGNlcHRpb25zOlxuICAvLyDEsCwgz7QsIOG6niwg4oSmLCDihKosIOKEqyAtIHRob3NlIGFyZSBhbHJlYWR5IHVwcGVyY2FzZWQsIGJ1dCBoYXZlIGRpZmZlcmVudGx5XG4gIC8vIHVwcGVyY2FzZWQgdmVyc2lvbnMpLlxuICAvL1xuICAvLyBIZXJlJ3MgYW4gZXhhbXBsZSBzaG93aW5nIGhvdyBpdCBoYXBwZW5zLiBMZXRzIHRha2UgZ3JlZWsgbGV0dGVyIG9tZWdhOlxuICAvLyB1cHBlcmNhc2UgVSswMzk4ICjOmCksIFUrMDNmNCAoz7QpIGFuZCBsb3dlcmNhc2UgVSswM2I4ICjOuCksIFUrMDNkMSAoz5EpXG4gIC8vXG4gIC8vIFVuaWNvZGUgZW50cmllczpcbiAgLy8gMDM5ODtHUkVFSyBDQVBJVEFMIExFVFRFUiBUSEVUQTtMdTswO0w7Ozs7O047Ozs7MDNCODtcbiAgLy8gMDNCODtHUkVFSyBTTUFMTCBMRVRURVIgVEhFVEE7TGw7MDtMOzs7OztOOzs7MDM5ODs7MDM5OFxuICAvLyAwM0QxO0dSRUVLIFRIRVRBIFNZTUJPTDtMbDswO0w7PGNvbXBhdD4gMDNCODs7OztOO0dSRUVLIFNNQUxMIExFVFRFUiBTQ1JJUFQgVEhFVEE7OzAzOTg7OzAzOThcbiAgLy8gMDNGNDtHUkVFSyBDQVBJVEFMIFRIRVRBIFNZTUJPTDtMdTswO0w7PGNvbXBhdD4gMDM5ODs7OztOOzs7OzAzQjg7XG4gIC8vXG4gIC8vIENhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbiBzaG91bGQgdHJlYXQgYWxsIG9mIHRoZW0gYXMgZXF1aXZhbGVudC5cbiAgLy9cbiAgLy8gQnV0IC50b0xvd2VyQ2FzZSgpIGRvZXNuJ3QgY2hhbmdlIM+RIChpdCdzIGFscmVhZHkgbG93ZXJjYXNlKSxcbiAgLy8gYW5kIC50b1VwcGVyQ2FzZSgpIGRvZXNuJ3QgY2hhbmdlIM+0IChhbHJlYWR5IHVwcGVyY2FzZSkuXG4gIC8vXG4gIC8vIEFwcGx5aW5nIGZpcnN0IGxvd2VyIHRoZW4gdXBwZXIgY2FzZSBub3JtYWxpemVzIGFueSBjaGFyYWN0ZXI6XG4gIC8vICdcXHUwMzk4XFx1MDNmNFxcdTAzYjhcXHUwM2QxJy50b0xvd2VyQ2FzZSgpLnRvVXBwZXJDYXNlKCkgPT09ICdcXHUwMzk4XFx1MDM5OFxcdTAzOThcXHUwMzk4J1xuICAvL1xuICAvLyBOb3RlOiB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gdW5pY29kZSBjYXNlIGZvbGRpbmc7IHVuaWNvZGUgbm9ybWFsaXphdGlvblxuICAvLyBpcyBhIGRpZmZlcmVudCBzdGVwIHRoYXQgaXMgbm90IHJlcXVpcmVkIGhlcmUuXG4gIC8vXG4gIC8vIEZpbmFsIHJlc3VsdCBzaG91bGQgYmUgdXBwZXJjYXNlZCwgYmVjYXVzZSBpdCdzIGxhdGVyIHN0b3JlZCBpbiBhbiBvYmplY3RcbiAgLy8gKHRoaXMgYXZvaWQgYSBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgbWVtYmVycyxcbiAgLy8gbW9zdCBub3RhYmx5LCBgX19wcm90b19fYClcbiAgLy9cbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFJlLWV4cG9ydCBsaWJyYXJpZXMgY29tbW9ubHkgdXNlZCBpbiBib3RoIG1hcmtkb3duLWl0IGFuZCBpdHMgcGx1Z2lucyxcbi8vIHNvIHBsdWdpbnMgd29uJ3QgaGF2ZSB0byBkZXBlbmQgb24gdGhlbSBleHBsaWNpdGx5LCB3aGljaCByZWR1Y2VzIHRoZWlyXG4vLyBidW5kbGVkIHNpemUgKGUuZy4gYSBicm93c2VyIGJ1aWxkKS5cbi8vXG5leHBvcnRzLmxpYiAgICAgICAgICAgICAgICAgPSB7fTtcbmV4cG9ydHMubGliLm1kdXJsICAgICAgICAgICA9IHJlcXVpcmUoJ21kdXJsJyk7XG5leHBvcnRzLmxpYi51Y21pY3JvICAgICAgICAgPSByZXF1aXJlKCd1Yy5taWNybycpO1xuXG5leHBvcnRzLmFzc2lnbiAgICAgICAgICAgICAgPSBhc3NpZ247XG5leHBvcnRzLmlzU3RyaW5nICAgICAgICAgICAgPSBpc1N0cmluZztcbmV4cG9ydHMuaGFzICAgICAgICAgICAgICAgICA9IGhhcztcbmV4cG9ydHMudW5lc2NhcGVNZCAgICAgICAgICA9IHVuZXNjYXBlTWQ7XG5leHBvcnRzLnVuZXNjYXBlQWxsICAgICAgICAgPSB1bmVzY2FwZUFsbDtcbmV4cG9ydHMuaXNWYWxpZEVudGl0eUNvZGUgICA9IGlzVmFsaWRFbnRpdHlDb2RlO1xuZXhwb3J0cy5mcm9tQ29kZVBvaW50ICAgICAgID0gZnJvbUNvZGVQb2ludDtcbi8vIGV4cG9ydHMucmVwbGFjZUVudGl0aWVzICAgICA9IHJlcGxhY2VFbnRpdGllcztcbmV4cG9ydHMuZXNjYXBlSHRtbCAgICAgICAgICA9IGVzY2FwZUh0bWw7XG5leHBvcnRzLmFycmF5UmVwbGFjZUF0ICAgICAgPSBhcnJheVJlcGxhY2VBdDtcbmV4cG9ydHMuaXNTcGFjZSAgICAgICAgICAgICA9IGlzU3BhY2U7XG5leHBvcnRzLmlzV2hpdGVTcGFjZSAgICAgICAgPSBpc1doaXRlU3BhY2U7XG5leHBvcnRzLmlzTWRBc2NpaVB1bmN0ICAgICAgPSBpc01kQXNjaWlQdW5jdDtcbmV4cG9ydHMuaXNQdW5jdENoYXIgICAgICAgICA9IGlzUHVuY3RDaGFyO1xuZXhwb3J0cy5lc2NhcGVSRSAgICAgICAgICAgID0gZXNjYXBlUkU7XG5leHBvcnRzLm5vcm1hbGl6ZVJlZmVyZW5jZSAgPSBub3JtYWxpemVSZWZlcmVuY2U7XG4iLCIvLyBKdXN0IGEgc2hvcnRjdXQgZm9yIGJ1bGsgZXhwb3J0XG4ndXNlIHN0cmljdCc7XG5cblxuZXhwb3J0cy5wYXJzZUxpbmtMYWJlbCAgICAgICA9IHJlcXVpcmUoJy4vcGFyc2VfbGlua19sYWJlbCcpO1xuZXhwb3J0cy5wYXJzZUxpbmtEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2VfbGlua19kZXN0aW5hdGlvbicpO1xuZXhwb3J0cy5wYXJzZUxpbmtUaXRsZSAgICAgICA9IHJlcXVpcmUoJy4vcGFyc2VfbGlua190aXRsZScpO1xuIiwiLy8gUGFyc2UgbGluayBkZXN0aW5hdGlvblxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdW5lc2NhcGVBbGwgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS51bmVzY2FwZUFsbDtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0ciwgcG9zLCBtYXgpIHtcbiAgdmFyIGNvZGUsIGxldmVsLFxuICAgICAgbGluZXMgPSAwLFxuICAgICAgc3RhcnQgPSBwb3MsXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgcG9zOiAwLFxuICAgICAgICBsaW5lczogMCxcbiAgICAgICAgc3RyOiAnJ1xuICAgICAgfTtcblxuICBpZiAoc3RyLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgzQyAvKiA8ICovKSB7XG4gICAgcG9zKys7XG4gICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoY29kZSA9PT0gMHgwQSAvKiBcXG4gKi8pIHsgcmV0dXJuIHJlc3VsdDsgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4M0MgLyogPCAqLykgeyByZXR1cm4gcmVzdWx0OyB9XG4gICAgICBpZiAoY29kZSA9PT0gMHgzRSAvKiA+ICovKSB7XG4gICAgICAgIHJlc3VsdC5wb3MgPSBwb3MgKyAxO1xuICAgICAgICByZXN1bHQuc3RyID0gdW5lc2NhcGVBbGwoc3RyLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKSk7XG4gICAgICAgIHJlc3VsdC5vayA9IHRydWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICAgIHBvcyArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcG9zKys7XG4gICAgfVxuXG4gICAgLy8gbm8gY2xvc2luZyAnPidcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gdGhpcyBzaG91bGQgYmUgLi4uIH0gZWxzZSB7IC4uLiBicmFuY2hcblxuICBsZXZlbCA9IDA7XG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjb2RlID09PSAweDIwKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBhc2NpaSBjb250cm9sIGNoYXJhY3RlcnNcbiAgICBpZiAoY29kZSA8IDB4MjAgfHwgY29kZSA9PT0gMHg3RikgeyBicmVhazsgfVxuXG4gICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgaWYgKHN0ci5jaGFyQ29kZUF0KHBvcyArIDEpID09PSAweDIwKSB7IGJyZWFrOyB9XG4gICAgICBwb3MgKz0gMjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAweDI4IC8qICggKi8pIHtcbiAgICAgIGxldmVsKys7XG4gICAgICBpZiAobGV2ZWwgPiAzMikgeyByZXR1cm4gcmVzdWx0OyB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDB4MjkgLyogKSAqLykge1xuICAgICAgaWYgKGxldmVsID09PSAwKSB7IGJyZWFrOyB9XG4gICAgICBsZXZlbC0tO1xuICAgIH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIHJlc3VsdDsgfVxuICBpZiAobGV2ZWwgIT09IDApIHsgcmV0dXJuIHJlc3VsdDsgfVxuXG4gIHJlc3VsdC5zdHIgPSB1bmVzY2FwZUFsbChzdHIuc2xpY2Uoc3RhcnQsIHBvcykpO1xuICByZXN1bHQubGluZXMgPSBsaW5lcztcbiAgcmVzdWx0LnBvcyA9IHBvcztcbiAgcmVzdWx0Lm9rID0gdHJ1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBQYXJzZSBsaW5rIGxhYmVsXG4vL1xuLy8gdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgZmlyc3QgY2hhcmFjdGVyIChcIltcIikgYWxyZWFkeSBtYXRjaGVzO1xuLy8gcmV0dXJucyB0aGUgZW5kIG9mIHRoZSBsYWJlbFxuLy9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhcnQsIGRpc2FibGVOZXN0ZWQpIHtcbiAgdmFyIGxldmVsLCBmb3VuZCwgbWFya2VyLCBwcmV2UG9zLFxuICAgICAgbGFiZWxFbmQgPSAtMSxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIG9sZFBvcyA9IHN0YXRlLnBvcztcblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG4gIGxldmVsID0gMTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKTtcbiAgICBpZiAobWFya2VyID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGxldmVsLS07XG4gICAgICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2UG9zID0gc3RhdGUucG9zO1xuICAgIHN0YXRlLm1kLmlubGluZS5za2lwVG9rZW4oc3RhdGUpO1xuICAgIGlmIChtYXJrZXIgPT09IDB4NUIgLyogWyAqLykge1xuICAgICAgaWYgKHByZXZQb3MgPT09IHN0YXRlLnBvcyAtIDEpIHtcbiAgICAgICAgLy8gaW5jcmVhc2UgbGV2ZWwgaWYgd2UgZmluZCB0ZXh0IGBbYCwgd2hpY2ggaXMgbm90IGEgcGFydCBvZiBhbnkgdG9rZW5cbiAgICAgICAgbGV2ZWwrKztcbiAgICAgIH0gZWxzZSBpZiAoZGlzYWJsZU5lc3RlZCkge1xuICAgICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZm91bmQpIHtcbiAgICBsYWJlbEVuZCA9IHN0YXRlLnBvcztcbiAgfVxuXG4gIC8vIHJlc3RvcmUgb2xkIHN0YXRlXG4gIHN0YXRlLnBvcyA9IG9sZFBvcztcblxuICByZXR1cm4gbGFiZWxFbmQ7XG59O1xuIiwiLy8gUGFyc2UgbGluayB0aXRsZVxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdW5lc2NhcGVBbGwgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS51bmVzY2FwZUFsbDtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlTGlua1RpdGxlKHN0ciwgcG9zLCBtYXgpIHtcbiAgdmFyIGNvZGUsXG4gICAgICBtYXJrZXIsXG4gICAgICBsaW5lcyA9IDAsXG4gICAgICBzdGFydCA9IHBvcyxcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBwb3M6IDAsXG4gICAgICAgIGxpbmVzOiAwLFxuICAgICAgICBzdHI6ICcnXG4gICAgICB9O1xuXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiByZXN1bHQ7IH1cblxuICBtYXJrZXIgPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4MjIgLyogXCIgKi8gJiYgbWFya2VyICE9PSAweDI3IC8qICcgKi8gJiYgbWFya2VyICE9PSAweDI4IC8qICggKi8pIHsgcmV0dXJuIHJlc3VsdDsgfVxuXG4gIHBvcysrO1xuXG4gIC8vIGlmIG9wZW5pbmcgbWFya2VyIGlzIFwiKFwiLCBzd2l0Y2ggaXQgdG8gY2xvc2luZyBtYXJrZXIgXCIpXCJcbiAgaWYgKG1hcmtlciA9PT0gMHgyOCkgeyBtYXJrZXIgPSAweDI5OyB9XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIHJlc3VsdC5wb3MgPSBwb3MgKyAxO1xuICAgICAgcmVzdWx0LmxpbmVzID0gbGluZXM7XG4gICAgICByZXN1bHQuc3RyID0gdW5lc2NhcGVBbGwoc3RyLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKSk7XG4gICAgICByZXN1bHQub2sgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjggLyogKCAqLyAmJiBtYXJrZXIgPT09IDB4MjkgLyogKSAqLykge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MEEpIHtcbiAgICAgIGxpbmVzKys7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIHBvcysrO1xuICAgICAgaWYgKHN0ci5jaGFyQ29kZUF0KHBvcykgPT09IDB4MEEpIHtcbiAgICAgICAgbGluZXMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gTWFpbiBwYXJzZXIgY2xhc3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpO1xudmFyIGhlbHBlcnMgICAgICA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xudmFyIFJlbmRlcmVyICAgICA9IHJlcXVpcmUoJy4vcmVuZGVyZXInKTtcbnZhciBQYXJzZXJDb3JlICAgPSByZXF1aXJlKCcuL3BhcnNlcl9jb3JlJyk7XG52YXIgUGFyc2VyQmxvY2sgID0gcmVxdWlyZSgnLi9wYXJzZXJfYmxvY2snKTtcbnZhciBQYXJzZXJJbmxpbmUgPSByZXF1aXJlKCcuL3BhcnNlcl9pbmxpbmUnKTtcbnZhciBMaW5raWZ5SXQgICAgPSByZXF1aXJlKCdsaW5raWZ5LWl0Jyk7XG52YXIgbWR1cmwgICAgICAgID0gcmVxdWlyZSgnbWR1cmwnKTtcbnZhciBwdW55Y29kZSAgICAgPSByZXF1aXJlKCdwdW55Y29kZScpO1xuXG5cbnZhciBjb25maWcgPSB7XG4gIGRlZmF1bHQ6IHJlcXVpcmUoJy4vcHJlc2V0cy9kZWZhdWx0JyksXG4gIHplcm86IHJlcXVpcmUoJy4vcHJlc2V0cy96ZXJvJyksXG4gIGNvbW1vbm1hcms6IHJlcXVpcmUoJy4vcHJlc2V0cy9jb21tb25tYXJrJylcbn07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gVGhpcyB2YWxpZGF0b3IgY2FuIHByb2hpYml0IG1vcmUgdGhhbiByZWFsbHkgbmVlZGVkIHRvIHByZXZlbnQgWFNTLiBJdCdzIGFcbi8vIHRyYWRlb2ZmIHRvIGtlZXAgY29kZSBzaW1wbGUgYW5kIHRvIGJlIHNlY3VyZSBieSBkZWZhdWx0LlxuLy9cbi8vIElmIHlvdSBuZWVkIGRpZmZlcmVudCBzZXR1cCAtIG92ZXJyaWRlIHZhbGlkYXRvciBtZXRob2QgYXMgeW91IHdpc2guIE9yXG4vLyByZXBsYWNlIGl0IHdpdGggZHVtbXkgZnVuY3Rpb24gYW5kIHVzZSBleHRlcm5hbCBzYW5pdGl6ZXIuXG4vL1xuXG52YXIgQkFEX1BST1RPX1JFID0gL14odmJzY3JpcHR8amF2YXNjcmlwdHxmaWxlfGRhdGEpOi87XG52YXIgR09PRF9EQVRBX1JFID0gL15kYXRhOmltYWdlXFwvKGdpZnxwbmd8anBlZ3x3ZWJwKTsvO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpbmsodXJsKSB7XG4gIC8vIHVybCBzaG91bGQgYmUgbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50LCBhbmQgZXhpc3RpbmcgZW50aXRpZXMgYXJlIGRlY29kZWRcbiAgdmFyIHN0ciA9IHVybC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gQkFEX1BST1RPX1JFLnRlc3Qoc3RyKSA/IChHT09EX0RBVEFfUkUudGVzdChzdHIpID8gdHJ1ZSA6IGZhbHNlKSA6IHRydWU7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxudmFyIFJFQ09ERV9IT1NUTkFNRV9GT1IgPSBbICdodHRwOicsICdodHRwczonLCAnbWFpbHRvOicgXTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTGluayh1cmwpIHtcbiAgdmFyIHBhcnNlZCA9IG1kdXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG5cbiAgaWYgKHBhcnNlZC5ob3N0bmFtZSkge1xuICAgIC8vIEVuY29kZSBob3N0bmFtZXMgaW4gdXJscyBsaWtlOlxuICAgIC8vIGBodHRwOi8vaG9zdC9gLCBgaHR0cHM6Ly9ob3N0L2AsIGBtYWlsdG86dXNlckBob3N0YCwgYC8vaG9zdC9gXG4gICAgLy9cbiAgICAvLyBXZSBkb24ndCBlbmNvZGUgdW5rbm93biBzY2hlbWFzLCBiZWNhdXNlIGl0J3MgbGlrZWx5IHRoYXQgd2UgZW5jb2RlXG4gICAgLy8gc29tZXRoaW5nIHdlIHNob3VsZG4ndCAoZS5nLiBgc2t5cGU6bmFtZWAgdHJlYXRlZCBhcyBgc2t5cGU6aG9zdGApXG4gICAgLy9cbiAgICBpZiAoIXBhcnNlZC5wcm90b2NvbCB8fCBSRUNPREVfSE9TVE5BTUVfRk9SLmluZGV4T2YocGFyc2VkLnByb3RvY29sKSA+PSAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWQuaG9zdG5hbWUgPSBwdW55Y29kZS50b0FTQ0lJKHBhcnNlZC5ob3N0bmFtZSk7XG4gICAgICB9IGNhdGNoIChlcikgeyAvKiovIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWR1cmwuZW5jb2RlKG1kdXJsLmZvcm1hdChwYXJzZWQpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTGlua1RleHQodXJsKSB7XG4gIHZhciBwYXJzZWQgPSBtZHVybC5wYXJzZSh1cmwsIHRydWUpO1xuXG4gIGlmIChwYXJzZWQuaG9zdG5hbWUpIHtcbiAgICAvLyBFbmNvZGUgaG9zdG5hbWVzIGluIHVybHMgbGlrZTpcbiAgICAvLyBgaHR0cDovL2hvc3QvYCwgYGh0dHBzOi8vaG9zdC9gLCBgbWFpbHRvOnVzZXJAaG9zdGAsIGAvL2hvc3QvYFxuICAgIC8vXG4gICAgLy8gV2UgZG9uJ3QgZW5jb2RlIHVua25vd24gc2NoZW1hcywgYmVjYXVzZSBpdCdzIGxpa2VseSB0aGF0IHdlIGVuY29kZVxuICAgIC8vIHNvbWV0aGluZyB3ZSBzaG91bGRuJ3QgKGUuZy4gYHNreXBlOm5hbWVgIHRyZWF0ZWQgYXMgYHNreXBlOmhvc3RgKVxuICAgIC8vXG4gICAgaWYgKCFwYXJzZWQucHJvdG9jb2wgfHwgUkVDT0RFX0hPU1ROQU1FX0ZPUi5pbmRleE9mKHBhcnNlZC5wcm90b2NvbCkgPj0gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkLmhvc3RuYW1lID0gcHVueWNvZGUudG9Vbmljb2RlKHBhcnNlZC5ob3N0bmFtZSk7XG4gICAgICB9IGNhdGNoIChlcikgeyAvKiovIH1cbiAgICB9XG4gIH1cblxuICAvLyBhZGQgJyUnIHRvIGV4Y2x1ZGUgbGlzdCBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9pc3N1ZXMvNzIwXG4gIHJldHVybiBtZHVybC5kZWNvZGUobWR1cmwuZm9ybWF0KHBhcnNlZCksIG1kdXJsLmRlY29kZS5kZWZhdWx0Q2hhcnMgKyAnJScpO1xufVxuXG5cbi8qKlxuICogY2xhc3MgTWFya2Rvd25JdFxuICpcbiAqIE1haW4gcGFyc2VyL3JlbmRlcmVyIGNsYXNzLlxuICpcbiAqICMjIyMjIFVzYWdlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogLy8gbm9kZS5qcywgXCJjbGFzc2ljXCIgd2F5OlxuICogdmFyIE1hcmtkb3duSXQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpLFxuICogICAgIG1kID0gbmV3IE1hcmtkb3duSXQoKTtcbiAqIHZhciByZXN1bHQgPSBtZC5yZW5kZXIoJyMgbWFya2Rvd24taXQgcnVsZXp6IScpO1xuICpcbiAqIC8vIG5vZGUuanMsIHRoZSBzYW1lLCBidXQgd2l0aCBzdWdhcjpcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqIHZhciByZXN1bHQgPSBtZC5yZW5kZXIoJyMgbWFya2Rvd24taXQgcnVsZXp6IScpO1xuICpcbiAqIC8vIGJyb3dzZXIgd2l0aG91dCBBTUQsIGFkZGVkIHRvIFwid2luZG93XCIgb24gc2NyaXB0IGxvYWRcbiAqIC8vIE5vdGUsIHRoZXJlIGFyZSBubyBkYXNoLlxuICogdmFyIG1kID0gd2luZG93Lm1hcmtkb3duaXQoKTtcbiAqIHZhciByZXN1bHQgPSBtZC5yZW5kZXIoJyMgbWFya2Rvd24taXQgcnVsZXp6IScpO1xuICogYGBgXG4gKlxuICogU2luZ2xlIGxpbmUgcmVuZGVyaW5nLCB3aXRob3V0IHBhcmFncmFwaCB3cmFwOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqIHZhciByZXN1bHQgPSBtZC5yZW5kZXJJbmxpbmUoJ19fbWFya2Rvd24taXRfXyBydWxlenohJyk7XG4gKiBgYGBcbiAqKi9cblxuLyoqXG4gKiBuZXcgTWFya2Rvd25JdChbcHJlc2V0TmFtZSwgb3B0aW9uc10pXG4gKiAtIHByZXNldE5hbWUgKFN0cmluZyk6IG9wdGlvbmFsLCBgY29tbW9ubWFya2AgLyBgemVyb2BcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KVxuICpcbiAqIENyZWF0ZXMgcGFyc2VyIGluc3RhbnNlIHdpdGggZ2l2ZW4gY29uZmlnLiBDYW4gYmUgY2FsbGVkIHdpdGhvdXQgYG5ld2AuXG4gKlxuICogIyMjIyMgcHJlc2V0TmFtZVxuICpcbiAqIE1hcmtkb3duSXQgcHJvdmlkZXMgbmFtZWQgcHJlc2V0cyBhcyBhIGNvbnZlbmllbmNlIHRvIHF1aWNrbHlcbiAqIGVuYWJsZS9kaXNhYmxlIGFjdGl2ZSBzeW50YXggcnVsZXMgYW5kIG9wdGlvbnMgZm9yIGNvbW1vbiB1c2UgY2FzZXMuXG4gKlxuICogLSBbXCJjb21tb25tYXJrXCJdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcHJlc2V0cy9jb21tb25tYXJrLmpzKSAtXG4gKiAgIGNvbmZpZ3VyZXMgcGFyc2VyIHRvIHN0cmljdCBbQ29tbW9uTWFya10oaHR0cDovL2NvbW1vbm1hcmsub3JnLykgbW9kZS5cbiAqIC0gW2RlZmF1bHRdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcHJlc2V0cy9kZWZhdWx0LmpzKSAtXG4gKiAgIHNpbWlsYXIgdG8gR0ZNLCB1c2VkIHdoZW4gbm8gcHJlc2V0IG5hbWUgZ2l2ZW4uIEVuYWJsZXMgYWxsIGF2YWlsYWJsZSBydWxlcyxcbiAqICAgYnV0IHN0aWxsIHdpdGhvdXQgaHRtbCwgdHlwb2dyYXBoZXIgJiBhdXRvbGlua2VyLlxuICogLSBbXCJ6ZXJvXCJdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcHJlc2V0cy96ZXJvLmpzKSAtXG4gKiAgIGFsbCBydWxlcyBkaXNhYmxlZC4gVXNlZnVsIHRvIHF1aWNrbHkgc2V0dXAgeW91ciBjb25maWcgdmlhIGAuZW5hYmxlKClgLlxuICogICBGb3IgZXhhbXBsZSwgd2hlbiB5b3UgbmVlZCBvbmx5IGBib2xkYCBhbmQgYGl0YWxpY2AgbWFya3VwIGFuZCBub3RoaW5nIGVsc2UuXG4gKlxuICogIyMjIyMgb3B0aW9uczpcbiAqXG4gKiAtIF9faHRtbF9fIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBlbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZS4gQmUgY2FyZWZ1bCFcbiAqICAgVGhhdCdzIG5vdCBzYWZlISBZb3UgbWF5IG5lZWQgZXh0ZXJuYWwgc2FuaXRpemVyIHRvIHByb3RlY3Qgb3V0cHV0IGZyb20gWFNTLlxuICogICBJdCdzIGJldHRlciB0byBleHRlbmQgZmVhdHVyZXMgdmlhIHBsdWdpbnMsIGluc3RlYWQgb2YgZW5hYmxpbmcgSFRNTC5cbiAqIC0gX194aHRtbE91dF9fIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBhZGQgJy8nIHdoZW4gY2xvc2luZyBzaW5nbGUgdGFnc1xuICogICAoYDxiciAvPmApLiBUaGlzIGlzIG5lZWRlZCBvbmx5IGZvciBmdWxsIENvbW1vbk1hcmsgY29tcGF0aWJpbGl0eS4gSW4gcmVhbFxuICogICB3b3JsZCB5b3Ugd2lsbCBuZWVkIEhUTUwgb3V0cHV0LlxuICogLSBfX2JyZWFrc19fIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBjb252ZXJ0IGBcXG5gIGluIHBhcmFncmFwaHMgaW50byBgPGJyPmAuXG4gKiAtIF9fbGFuZ1ByZWZpeF9fIC0gYGxhbmd1YWdlLWAuIENTUyBsYW5ndWFnZSBjbGFzcyBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3MuXG4gKiAgIENhbiBiZSB1c2VmdWwgZm9yIGV4dGVybmFsIGhpZ2hsaWdodGVycy5cbiAqIC0gX19saW5raWZ5X18gLSBgZmFsc2VgLiBTZXQgYHRydWVgIHRvIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHQgdG8gbGlua3MuXG4gKiAtIF9fdHlwb2dyYXBoZXJfXyAgLSBgZmFsc2VgLiBTZXQgYHRydWVgIHRvIGVuYWJsZSBbc29tZSBsYW5ndWFnZS1uZXV0cmFsXG4gKiAgIHJlcGxhY2VtZW50XShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3J1bGVzX2NvcmUvcmVwbGFjZW1lbnRzLmpzKSArXG4gKiAgIHF1b3RlcyBiZWF1dGlmaWNhdGlvbiAoc21hcnRxdW90ZXMpLlxuICogLSBfX3F1b3Rlc19fIC0gYOKAnOKAneKAmOKAmWAsIFN0cmluZyBvciBBcnJheS4gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudFxuICogICBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkIGFuZCBzbWFydHF1b3RlcyBvbi4gRm9yIGV4YW1wbGUsIHlvdSBjYW5cbiAqICAgdXNlIGAnwqvCu+KAnuKAnCdgIGZvciBSdXNzaWFuLCBgJ+KAnuKAnOKAmuKAmCdgIGZvciBHZXJtYW4sIGFuZFxuICogICBgWyfCq1xceEEwJywgJ1xceEEwwrsnLCAn4oC5XFx4QTAnLCAnXFx4QTDigLonXWAgZm9yIEZyZW5jaCAoaW5jbHVkaW5nIG5ic3ApLlxuICogLSBfX2hpZ2hsaWdodF9fIC0gYG51bGxgLiBIaWdobGlnaHRlciBmdW5jdGlvbiBmb3IgZmVuY2VkIGNvZGUgYmxvY2tzLlxuICogICBIaWdobGlnaHRlciBgZnVuY3Rpb24gKHN0ciwgbGFuZylgIHNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLiBJdCBjYW4gYWxzb1xuICogICByZXR1cm4gZW1wdHkgc3RyaW5nIGlmIHRoZSBzb3VyY2Ugd2FzIG5vdCBjaGFuZ2VkIGFuZCBzaG91bGQgYmUgZXNjYXBlZFxuICogICBleHRlcm5hbHkuIElmIHJlc3VsdCBzdGFydHMgd2l0aCA8cHJlLi4uIGludGVybmFsIHdyYXBwZXIgaXMgc2tpcHBlZC5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogLy8gY29tbW9ubWFyayBtb2RlXG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCdjb21tb25tYXJrJyk7XG4gKlxuICogLy8gZGVmYXVsdCBtb2RlXG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogLy8gZW5hYmxlIGV2ZXJ5dGhpbmdcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0Jykoe1xuICogICBodG1sOiB0cnVlLFxuICogICBsaW5raWZ5OiB0cnVlLFxuICogICB0eXBvZ3JhcGhlcjogdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyMjIyBTeW50YXggaGlnaGxpZ2h0aW5nXG4gKlxuICogYGBganNcbiAqIHZhciBobGpzID0gcmVxdWlyZSgnaGlnaGxpZ2h0LmpzJykgLy8gaHR0cHM6Ly9oaWdobGlnaHRqcy5vcmcvXG4gKlxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSh7XG4gKiAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKHN0ciwgbGFuZykge1xuICogICAgIGlmIChsYW5nICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZykpIHtcbiAqICAgICAgIHRyeSB7XG4gKiAgICAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodChsYW5nLCBzdHIsIHRydWUpLnZhbHVlO1xuICogICAgICAgfSBjYXRjaCAoX18pIHt9XG4gKiAgICAgfVxuICpcbiAqICAgICByZXR1cm4gJyc7IC8vIHVzZSBleHRlcm5hbCBkZWZhdWx0IGVzY2FwaW5nXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogT3Igd2l0aCBmdWxsIHdyYXBwZXIgb3ZlcnJpZGUgKGlmIHlvdSBuZWVkIGFzc2lnbiBjbGFzcyB0byBgPHByZT5gKTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgaGxqcyA9IHJlcXVpcmUoJ2hpZ2hsaWdodC5qcycpIC8vIGh0dHBzOi8vaGlnaGxpZ2h0anMub3JnL1xuICpcbiAqIC8vIEFjdHVhbCBkZWZhdWx0IHZhbHVlc1xuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSh7XG4gKiAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKHN0ciwgbGFuZykge1xuICogICAgIGlmIChsYW5nICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZykpIHtcbiAqICAgICAgIHRyeSB7XG4gKiAgICAgICAgIHJldHVybiAnPHByZSBjbGFzcz1cImhsanNcIj48Y29kZT4nICtcbiAqICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0KGxhbmcsIHN0ciwgdHJ1ZSkudmFsdWUgK1xuICogICAgICAgICAgICAgICAgJzwvY29kZT48L3ByZT4nO1xuICogICAgICAgfSBjYXRjaCAoX18pIHt9XG4gKiAgICAgfVxuICpcbiAqICAgICByZXR1cm4gJzxwcmUgY2xhc3M9XCJobGpzXCI+PGNvZGU+JyArIG1kLnV0aWxzLmVzY2FwZUh0bWwoc3RyKSArICc8L2NvZGU+PC9wcmU+JztcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiovXG5mdW5jdGlvbiBNYXJrZG93bkl0KHByZXNldE5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hcmtkb3duSXQpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXJrZG93bkl0KHByZXNldE5hbWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKCF1dGlscy5pc1N0cmluZyhwcmVzZXROYW1lKSkge1xuICAgICAgb3B0aW9ucyA9IHByZXNldE5hbWUgfHwge307XG4gICAgICBwcmVzZXROYW1lID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2lubGluZSAtPiBQYXJzZXJJbmxpbmVcbiAgICpcbiAgICogSW5zdGFuY2Ugb2YgW1tQYXJzZXJJbmxpbmVdXS4gWW91IG1heSBuZWVkIGl0IHRvIGFkZCBuZXcgcnVsZXMgd2hlblxuICAgKiB3cml0aW5nIHBsdWdpbnMuIEZvciBzaW1wbGUgcnVsZXMgY29udHJvbCB1c2UgW1tNYXJrZG93bkl0LmRpc2FibGVdXSBhbmRcbiAgICogW1tNYXJrZG93bkl0LmVuYWJsZV1dLlxuICAgKiovXG4gIHRoaXMuaW5saW5lID0gbmV3IFBhcnNlcklubGluZSgpO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2Jsb2NrIC0+IFBhcnNlckJsb2NrXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbUGFyc2VyQmxvY2tdXS4gWW91IG1heSBuZWVkIGl0IHRvIGFkZCBuZXcgcnVsZXMgd2hlblxuICAgKiB3cml0aW5nIHBsdWdpbnMuIEZvciBzaW1wbGUgcnVsZXMgY29udHJvbCB1c2UgW1tNYXJrZG93bkl0LmRpc2FibGVdXSBhbmRcbiAgICogW1tNYXJrZG93bkl0LmVuYWJsZV1dLlxuICAgKiovXG4gIHRoaXMuYmxvY2sgPSBuZXcgUGFyc2VyQmxvY2soKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNjb3JlIC0+IENvcmVcbiAgICpcbiAgICogSW5zdGFuY2Ugb2YgW1tDb3JlXV0gY2hhaW4gZXhlY3V0b3IuIFlvdSBtYXkgbmVlZCBpdCB0byBhZGQgbmV3IHJ1bGVzIHdoZW5cbiAgICogd3JpdGluZyBwbHVnaW5zLiBGb3Igc2ltcGxlIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0gYW5kXG4gICAqIFtbTWFya2Rvd25JdC5lbmFibGVdXS5cbiAgICoqL1xuICB0aGlzLmNvcmUgPSBuZXcgUGFyc2VyQ29yZSgpO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I3JlbmRlcmVyIC0+IFJlbmRlcmVyXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbUmVuZGVyZXJdXS4gVXNlIGl0IHRvIG1vZGlmeSBvdXRwdXQgbG9vay4gT3IgdG8gYWRkIHJlbmRlcmluZ1xuICAgKiBydWxlcyBmb3IgbmV3IHRva2VuIHR5cGVzLCBnZW5lcmF0ZWQgYnkgcGx1Z2lucy5cbiAgICpcbiAgICogIyMjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAgICpcbiAgICogZnVuY3Rpb24gbXlUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKSB7XG4gICAqICAgLy8uLi5cbiAgICogICByZXR1cm4gcmVzdWx0O1xuICAgKiB9O1xuICAgKlxuICAgKiBtZC5yZW5kZXJlci5ydWxlc1snbXlfdG9rZW4nXSA9IG15VG9rZW5cbiAgICogYGBgXG4gICAqXG4gICAqIFNlZSBbW1JlbmRlcmVyXV0gZG9jcyBhbmQgW3NvdXJjZSBjb2RlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3JlbmRlcmVyLmpzKS5cbiAgICoqL1xuICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjbGlua2lmeSAtPiBMaW5raWZ5SXRcbiAgICpcbiAgICogW2xpbmtpZnktaXRdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9saW5raWZ5LWl0KSBpbnN0YW5jZS5cbiAgICogVXNlZCBieSBbbGlua2lmeV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9ydWxlc19jb3JlL2xpbmtpZnkuanMpXG4gICAqIHJ1bGUuXG4gICAqKi9cbiAgdGhpcy5saW5raWZ5ID0gbmV3IExpbmtpZnlJdCgpO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I3ZhbGlkYXRlTGluayh1cmwpIC0+IEJvb2xlYW5cbiAgICpcbiAgICogTGluayB2YWxpZGF0aW9uIGZ1bmN0aW9uLiBDb21tb25NYXJrIGFsbG93cyB0b28gbXVjaCBpbiBsaW5rcy4gQnkgZGVmYXVsdFxuICAgKiB3ZSBkaXNhYmxlIGBqYXZhc2NyaXB0OmAsIGB2YnNjcmlwdDpgLCBgZmlsZTpgIHNjaGVtYXMsIGFuZCBhbG1vc3QgYWxsIGBkYXRhOi4uLmAgc2NoZW1hc1xuICAgKiBleGNlcHQgc29tZSBlbWJlZGRlZCBpbWFnZSB0eXBlcy5cbiAgICpcbiAgICogWW91IGNhbiBjaGFuZ2UgdGhpcyBiZWhhdmlvdXI6XG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICAgKiAvLyBlbmFibGUgZXZlcnl0aGluZ1xuICAgKiBtZC52YWxpZGF0ZUxpbmsgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9XG4gICAqIGBgYFxuICAgKiovXG4gIHRoaXMudmFsaWRhdGVMaW5rID0gdmFsaWRhdGVMaW5rO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I25vcm1hbGl6ZUxpbmsodXJsKSAtPiBTdHJpbmdcbiAgICpcbiAgICogRnVuY3Rpb24gdXNlZCB0byBlbmNvZGUgbGluayB1cmwgdG8gYSBtYWNoaW5lLXJlYWRhYmxlIGZvcm1hdCxcbiAgICogd2hpY2ggaW5jbHVkZXMgdXJsLWVuY29kaW5nLCBwdW55Y29kZSwgZXRjLlxuICAgKiovXG4gIHRoaXMubm9ybWFsaXplTGluayA9IG5vcm1hbGl6ZUxpbms7XG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjbm9ybWFsaXplTGlua1RleHQodXJsKSAtPiBTdHJpbmdcbiAgICpcbiAgICogRnVuY3Rpb24gdXNlZCB0byBkZWNvZGUgbGluayB1cmwgdG8gYSBodW1hbi1yZWFkYWJsZSBmb3JtYXRgXG4gICAqKi9cbiAgdGhpcy5ub3JtYWxpemVMaW5rVGV4dCA9IG5vcm1hbGl6ZUxpbmtUZXh0O1xuXG5cbiAgLy8gRXhwb3NlIHV0aWxzICYgaGVscGVycyBmb3IgZWFzeSBhY2NlcyBmcm9tIHBsdWdpbnNcblxuICAvKipcbiAgICogTWFya2Rvd25JdCN1dGlscyAtPiB1dGlsc1xuICAgKlxuICAgKiBBc3NvcnRlZCB1dGlsaXR5IGZ1bmN0aW9ucywgdXNlZnVsIHRvIHdyaXRlIHBsdWdpbnMuIFNlZSBkZXRhaWxzXG4gICAqIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL2NvbW1vbi91dGlscy5qcykuXG4gICAqKi9cbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2hlbHBlcnMgLT4gaGVscGVyc1xuICAgKlxuICAgKiBMaW5rIGNvbXBvbmVudHMgcGFyc2VyIGZ1bmN0aW9ucywgdXNlZnVsIHRvIHdyaXRlIHBsdWdpbnMuIFNlZSBkZXRhaWxzXG4gICAqIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL2hlbHBlcnMpLlxuICAgKiovXG4gIHRoaXMuaGVscGVycyA9IHV0aWxzLmFzc2lnbih7fSwgaGVscGVycyk7XG5cblxuICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgdGhpcy5jb25maWd1cmUocHJlc2V0TmFtZSk7XG5cbiAgaWYgKG9wdGlvbnMpIHsgdGhpcy5zZXQob3B0aW9ucyk7IH1cbn1cblxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LnNldChvcHRpb25zKVxuICpcbiAqIFNldCBwYXJzZXIgb3B0aW9ucyAoaW4gdGhlIHNhbWUgZm9ybWF0IGFzIGluIGNvbnN0cnVjdG9yKS4gUHJvYmFibHksIHlvdVxuICogd2lsbCBuZXZlciBuZWVkIGl0LCBidXQgeW91IGNhbiBjaGFuZ2Ugb3B0aW9ucyBhZnRlciBjb25zdHJ1Y3RvciBjYWxsLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKClcbiAqICAgICAgICAgICAgIC5zZXQoeyBodG1sOiB0cnVlLCBicmVha3M6IHRydWUgfSlcbiAqICAgICAgICAgICAgIC5zZXQoeyB0eXBvZ3JhcGhlciwgdHJ1ZSB9KTtcbiAqIGBgYFxuICpcbiAqIF9fTm90ZTpfXyBUbyBhY2hpZXZlIHRoZSBiZXN0IHBvc3NpYmxlIHBlcmZvcm1hbmNlLCBkb24ndCBtb2RpZnkgYVxuICogYG1hcmtkb3duLWl0YCBpbnN0YW5jZSBvcHRpb25zIG9uIHRoZSBmbHkuIElmIHlvdSBuZWVkIG11bHRpcGxlIGNvbmZpZ3VyYXRpb25zXG4gKiBpdCdzIGJlc3QgdG8gY3JlYXRlIG11bHRpcGxlIGluc3RhbmNlcyBhbmQgaW5pdGlhbGl6ZSBlYWNoIHdpdGggc2VwYXJhdGVcbiAqIGNvbmZpZy5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHV0aWxzLmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqIGNoYWluYWJsZSwgaW50ZXJuYWxcbiAqIE1hcmtkb3duSXQuY29uZmlndXJlKHByZXNldHMpXG4gKlxuICogQmF0Y2ggbG9hZCBvZiBhbGwgb3B0aW9ucyBhbmQgY29tcGVuZW50IHNldHRpbmdzLiBUaGlzIGlzIGludGVybmFsIG1ldGhvZCxcbiAqIGFuZCB5b3UgcHJvYmFibHkgd2lsbCBub3QgbmVlZCBpdC4gQnV0IGlmIHlvdSB3aWxsIC0gc2VlIGF2YWlsYWJsZSBwcmVzZXRzXG4gKiBhbmQgZGF0YSBzdHJ1Y3R1cmUgW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC90cmVlL21hc3Rlci9saWIvcHJlc2V0cylcbiAqXG4gKiBXZSBzdHJvbmdseSByZWNvbW1lbmQgdG8gdXNlIHByZXNldHMgaW5zdGVhZCBvZiBkaXJlY3QgY29uZmlnIGxvYWRzLiBUaGF0XG4gKiB3aWxsIGdpdmUgYmV0dGVyIGNvbXBhdGliaWxpdHkgd2l0aCBuZXh0IHZlcnNpb25zLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKHByZXNldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzLCBwcmVzZXROYW1lO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhwcmVzZXRzKSkge1xuICAgIHByZXNldE5hbWUgPSBwcmVzZXRzO1xuICAgIHByZXNldHMgPSBjb25maWdbcHJlc2V0TmFtZV07XG4gICAgaWYgKCFwcmVzZXRzKSB7IHRocm93IG5ldyBFcnJvcignV3JvbmcgYG1hcmtkb3duLWl0YCBwcmVzZXQgXCInICsgcHJlc2V0TmFtZSArICdcIiwgY2hlY2sgbmFtZScpOyB9XG4gIH1cblxuICBpZiAoIXByZXNldHMpIHsgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBgbWFya2Rvd24taXRgIHByZXNldCwgY2FuXFwndCBiZSBlbXB0eScpOyB9XG5cbiAgaWYgKHByZXNldHMub3B0aW9ucykgeyBzZWxmLnNldChwcmVzZXRzLm9wdGlvbnMpOyB9XG5cbiAgaWYgKHByZXNldHMuY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKHByZXNldHMuY29tcG9uZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcykge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyLmVuYWJsZU9ubHkocHJlc2V0cy5jb21wb25lbnRzW25hbWVdLnJ1bGVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMyKSB7XG4gICAgICAgIHNlbGZbbmFtZV0ucnVsZXIyLmVuYWJsZU9ubHkocHJlc2V0cy5jb21wb25lbnRzW25hbWVdLnJ1bGVzMik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKiBjaGFpbmFibGVcbiAqIE1hcmtkb3duSXQuZW5hYmxlKGxpc3QsIGlnbm9yZUludmFsaWQpXG4gKiAtIGxpc3QgKFN0cmluZ3xBcnJheSk6IHJ1bGUgbmFtZSBvciBsaXN0IG9mIHJ1bGUgbmFtZXMgdG8gZW5hYmxlXG4gKiAtIGlnbm9yZUludmFsaWQgKEJvb2xlYW4pOiBzZXQgYHRydWVgIHRvIGlnbm9yZSBlcnJvcnMgd2hlbiBydWxlIG5vdCBmb3VuZC5cbiAqXG4gKiBFbmFibGUgbGlzdCBvciBydWxlcy4gSXQgd2lsbCBhdXRvbWF0aWNhbGx5IGZpbmQgYXBwcm9wcmlhdGUgY29tcG9uZW50cyxcbiAqIGNvbnRhaW5pbmcgcnVsZXMgd2l0aCBnaXZlbiBuYW1lcy4gSWYgcnVsZSBub3QgZm91bmQsIGFuZCBgaWdub3JlSW52YWxpZGBcbiAqIG5vdCBzZXQgLSB0aHJvd3MgZXhjZXB0aW9uLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKClcbiAqICAgICAgICAgICAgIC5lbmFibGUoWydzdWInLCAnc3VwJ10pXG4gKiAgICAgICAgICAgICAuZGlzYWJsZSgnc21hcnRxdW90ZXMnKTtcbiAqIGBgYFxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKGxpc3QsIGlnbm9yZUludmFsaWQpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgeyBsaXN0ID0gWyBsaXN0IF07IH1cblxuICBbICdjb3JlJywgJ2Jsb2NrJywgJ2lubGluZScgXS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFpbikge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpc1tjaGFpbl0ucnVsZXIuZW5hYmxlKGxpc3QsIHRydWUpKTtcbiAgfSwgdGhpcyk7XG5cbiAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmlubGluZS5ydWxlcjIuZW5hYmxlKGxpc3QsIHRydWUpKTtcblxuICB2YXIgbWlzc2VkID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHJlc3VsdC5pbmRleE9mKG5hbWUpIDwgMDsgfSk7XG5cbiAgaWYgKG1pc3NlZC5sZW5ndGggJiYgIWlnbm9yZUludmFsaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcmtkb3duSXQuIEZhaWxlZCB0byBlbmFibGUgdW5rbm93biBydWxlKHMpOiAnICsgbWlzc2VkKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LmRpc2FibGUobGlzdCwgaWdub3JlSW52YWxpZClcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogcnVsZSBuYW1lIG9yIGxpc3Qgb2YgcnVsZSBuYW1lcyB0byBkaXNhYmxlLlxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tNYXJrZG93bkl0LmVuYWJsZV1dLCBidXQgdHVybiBzcGVjaWZpZWQgcnVsZXMgb2ZmLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFsgbGlzdCBdOyB9XG5cbiAgWyAnY29yZScsICdibG9jaycsICdpbmxpbmUnIF0uZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXNbY2hhaW5dLnJ1bGVyLmRpc2FibGUobGlzdCwgdHJ1ZSkpO1xuICB9LCB0aGlzKTtcblxuICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuaW5saW5lLnJ1bGVyMi5kaXNhYmxlKGxpc3QsIHRydWUpKTtcblxuICB2YXIgbWlzc2VkID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHJlc3VsdC5pbmRleE9mKG5hbWUpIDwgMDsgfSk7XG5cbiAgaWYgKG1pc3NlZC5sZW5ndGggJiYgIWlnbm9yZUludmFsaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcmtkb3duSXQuIEZhaWxlZCB0byBkaXNhYmxlIHVua25vd24gcnVsZShzKTogJyArIG1pc3NlZCk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKiBjaGFpbmFibGVcbiAqIE1hcmtkb3duSXQudXNlKHBsdWdpbiwgcGFyYW1zKVxuICpcbiAqIExvYWQgc3BlY2lmaWVkIHBsdWdpbiB3aXRoIGdpdmVuIHBhcmFtcyBpbnRvIGN1cnJlbnQgcGFyc2VyIGluc3RhbmNlLlxuICogSXQncyBqdXN0IGEgc3VnYXIgdG8gY2FsbCBgcGx1Z2luKG1kLCBwYXJhbXMpYCB3aXRoIGN1cnJpbmcuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBpdGVyYXRvciA9IHJlcXVpcmUoJ21hcmtkb3duLWl0LWZvci1pbmxpbmUnKTtcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKVxuICogICAgICAgICAgICAgLnVzZShpdGVyYXRvciwgJ2Zvb19yZXBsYWNlJywgJ3RleHQnLCBmdW5jdGlvbiAodG9rZW5zLCBpZHgpIHtcbiAqICAgICAgICAgICAgICAgdG9rZW5zW2lkeF0uY29udGVudCA9IHRva2Vuc1tpZHhdLmNvbnRlbnQucmVwbGFjZSgvZm9vL2csICdiYXInKTtcbiAqICAgICAgICAgICAgIH0pO1xuICogYGBgXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luIC8qLCBwYXJhbXMsIC4uLiAqLykge1xuICB2YXIgYXJncyA9IFsgdGhpcyBdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgcGx1Z2luLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKiogaW50ZXJuYWxcbiAqIE1hcmtkb3duSXQucGFyc2Uoc3JjLCBlbnYpIC0+IEFycmF5XG4gKiAtIHNyYyAoU3RyaW5nKTogc291cmNlIHN0cmluZ1xuICogLSBlbnYgKE9iamVjdCk6IGVudmlyb25tZW50IHNhbmRib3hcbiAqXG4gKiBQYXJzZSBpbnB1dCBzdHJpbmcgYW5kIHJldHVybiBsaXN0IG9mIGJsb2NrIHRva2VucyAoc3BlY2lhbCB0b2tlbiB0eXBlXG4gKiBcImlubGluZVwiIHdpbGwgY29udGFpbiBsaXN0IG9mIGlubGluZSB0b2tlbnMpLiBZb3Ugc2hvdWxkIG5vdCBjYWxsIHRoaXNcbiAqIG1ldGhvZCBkaXJlY3RseSwgdW50aWwgeW91IHdyaXRlIGN1c3RvbSByZW5kZXJlciAoZm9yIGV4YW1wbGUsIHRvIHByb2R1Y2VcbiAqIEFTVCkuXG4gKlxuICogYGVudmAgaXMgdXNlZCB0byBwYXNzIGRhdGEgYmV0d2VlbiBcImRpc3RyaWJ1dGVkXCIgcnVsZXMgYW5kIHJldHVybiBhZGRpdGlvbmFsXG4gKiBtZXRhZGF0YSBsaWtlIHJlZmVyZW5jZSBpbmZvLCBuZWVkZWQgZm9yIHRoZSByZW5kZXJlci4gSXQgYWxzbyBjYW4gYmUgdXNlZCB0b1xuICogaW5qZWN0IGRhdGEgaW4gc3BlY2lmaWMgY2FzZXMuIFVzdWFsbHksIHlvdSB3aWxsIGJlIG9rIHRvIHBhc3MgYHt9YCxcbiAqIGFuZCB0aGVuIHBhc3MgdXBkYXRlZCBvYmplY3QgdG8gcmVuZGVyZXIuXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzcmMsIGVudikge1xuICBpZiAodHlwZW9mIHNyYyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGRhdGEgc2hvdWxkIGJlIGEgU3RyaW5nJyk7XG4gIH1cblxuICB2YXIgc3RhdGUgPSBuZXcgdGhpcy5jb3JlLlN0YXRlKHNyYywgdGhpcywgZW52KTtcblxuICB0aGlzLmNvcmUucHJvY2VzcyhzdGF0ZSk7XG5cbiAgcmV0dXJuIHN0YXRlLnRva2Vucztcbn07XG5cblxuLyoqXG4gKiBNYXJrZG93bkl0LnJlbmRlcihzcmMgWywgZW52XSkgLT4gU3RyaW5nXG4gKiAtIHNyYyAoU3RyaW5nKTogc291cmNlIHN0cmluZ1xuICogLSBlbnYgKE9iamVjdCk6IGVudmlyb25tZW50IHNhbmRib3hcbiAqXG4gKiBSZW5kZXIgbWFya2Rvd24gc3RyaW5nIGludG8gaHRtbC4gSXQgZG9lcyBhbGwgbWFnaWMgZm9yIHlvdSA6KS5cbiAqXG4gKiBgZW52YCBjYW4gYmUgdXNlZCB0byBpbmplY3QgYWRkaXRpb25hbCBtZXRhZGF0YSAoYHt9YCBieSBkZWZhdWx0KS5cbiAqIEJ1dCB5b3Ugd2lsbCBub3QgbmVlZCBpdCB3aXRoIGhpZ2ggcHJvYmFiaWxpdHkuIFNlZSBhbHNvIGNvbW1lbnRcbiAqIGluIFtbTWFya2Rvd25JdC5wYXJzZV1dLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHNyYywgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcblxuICByZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5wYXJzZShzcmMsIGVudiksIHRoaXMub3B0aW9ucywgZW52KTtcbn07XG5cblxuLyoqIGludGVybmFsXG4gKiBNYXJrZG93bkl0LnBhcnNlSW5saW5lKHNyYywgZW52KSAtPiBBcnJheVxuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogVGhlIHNhbWUgYXMgW1tNYXJrZG93bkl0LnBhcnNlXV0gYnV0IHNraXAgYWxsIGJsb2NrIHJ1bGVzLiBJdCByZXR1cm5zIHRoZVxuICogYmxvY2sgdG9rZW5zIGxpc3Qgd2l0aCB0aGUgc2luZ2xlIGBpbmxpbmVgIGVsZW1lbnQsIGNvbnRhaW5pbmcgcGFyc2VkIGlubGluZVxuICogdG9rZW5zIGluIGBjaGlsZHJlbmAgcHJvcGVydHkuIEFsc28gdXBkYXRlcyBgZW52YCBvYmplY3QuXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5wYXJzZUlubGluZSA9IGZ1bmN0aW9uIChzcmMsIGVudikge1xuICB2YXIgc3RhdGUgPSBuZXcgdGhpcy5jb3JlLlN0YXRlKHNyYywgdGhpcywgZW52KTtcblxuICBzdGF0ZS5pbmxpbmVNb2RlID0gdHJ1ZTtcbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG5cbi8qKlxuICogTWFya2Rvd25JdC5yZW5kZXJJbmxpbmUoc3JjIFssIGVudl0pIC0+IFN0cmluZ1xuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogU2ltaWxhciB0byBbW01hcmtkb3duSXQucmVuZGVyXV0gYnV0IGZvciBzaW5nbGUgcGFyYWdyYXBoIGNvbnRlbnQuIFJlc3VsdFxuICogd2lsbCBOT1QgYmUgd3JhcHBlZCBpbnRvIGA8cD5gIHRhZ3MuXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5yZW5kZXJJbmxpbmUgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgZW52ID0gZW52IHx8IHt9O1xuXG4gIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnBhcnNlSW5saW5lKHNyYywgZW52KSwgdGhpcy5vcHRpb25zLCBlbnYpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmtkb3duSXQ7XG4iLCIvKiogaW50ZXJuYWxcbiAqIGNsYXNzIFBhcnNlckJsb2NrXG4gKlxuICogQmxvY2stbGV2ZWwgdG9rZW5pemVyLlxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBSdWxlciAgICAgICAgICAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cblxudmFyIF9ydWxlcyA9IFtcbiAgLy8gRmlyc3QgMiBwYXJhbXMgLSBydWxlIG5hbWUgJiBzb3VyY2UuIFNlY29uZGFyeSBhcnJheSAtIGxpc3Qgb2YgcnVsZXMsXG4gIC8vIHdoaWNoIGNhbiBiZSB0ZXJtaW5hdGVkIGJ5IHRoaXMgb25lLlxuICBbICd0YWJsZScsICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay90YWJsZScpLCAgICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnIF0gXSxcbiAgWyAnY29kZScsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svY29kZScpIF0sXG4gIFsgJ2ZlbmNlJywgICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2ZlbmNlJyksICAgICAgWyAncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJywgJ2xpc3QnIF0gXSxcbiAgWyAnYmxvY2txdW90ZScsIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svYmxvY2txdW90ZScpLCBbICdwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdocicsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9ocicpLCAgICAgICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScsICdsaXN0JyBdIF0sXG4gIFsgJ2xpc3QnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2xpc3QnKSwgICAgICAgWyAncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJyBdIF0sXG4gIFsgJ3JlZmVyZW5jZScsICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL3JlZmVyZW5jZScpIF0sXG4gIFsgJ2h0bWxfYmxvY2snLCByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2h0bWxfYmxvY2snKSwgWyAncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJyBdIF0sXG4gIFsgJ2hlYWRpbmcnLCAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2hlYWRpbmcnKSwgICAgWyAncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJyBdIF0sXG4gIFsgJ2xoZWFkaW5nJywgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2xoZWFkaW5nJykgXSxcbiAgWyAncGFyYWdyYXBoJywgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svcGFyYWdyYXBoJykgXVxuXTtcblxuXG4vKipcbiAqIG5ldyBQYXJzZXJCbG9jaygpXG4gKiovXG5mdW5jdGlvbiBQYXJzZXJCbG9jaygpIHtcbiAgLyoqXG4gICAqIFBhcnNlckJsb2NrI3J1bGVyIC0+IFJ1bGVyXG4gICAqXG4gICAqIFtbUnVsZXJdXSBpbnN0YW5jZS4gS2VlcCBjb25maWd1cmF0aW9uIG9mIGJsb2NrIHJ1bGVzLlxuICAgKiovXG4gIHRoaXMucnVsZXIgPSBuZXcgUnVsZXIoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSwgeyBhbHQ6IChfcnVsZXNbaV1bMl0gfHwgW10pLnNsaWNlKCkgfSk7XG4gIH1cbn1cblxuXG4vLyBHZW5lcmF0ZSB0b2tlbnMgZm9yIGlucHV0IHJhbmdlXG4vL1xuUGFyc2VyQmxvY2sucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24gKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUpIHtcbiAgdmFyIG9rLCBpLFxuICAgICAgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKSxcbiAgICAgIGxlbiA9IHJ1bGVzLmxlbmd0aCxcbiAgICAgIGxpbmUgPSBzdGFydExpbmUsXG4gICAgICBoYXNFbXB0eUxpbmVzID0gZmFsc2UsXG4gICAgICBtYXhOZXN0aW5nID0gc3RhdGUubWQub3B0aW9ucy5tYXhOZXN0aW5nO1xuXG4gIHdoaWxlIChsaW5lIDwgZW5kTGluZSkge1xuICAgIHN0YXRlLmxpbmUgPSBsaW5lID0gc3RhdGUuc2tpcEVtcHR5TGluZXMobGluZSk7XG4gICAgaWYgKGxpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuXG4gICAgLy8gVGVybWluYXRpb24gY29uZGl0aW9uIGZvciBuZXN0ZWQgY2FsbHMuXG4gICAgLy8gTmVzdGVkIGNhbGxzIGN1cnJlbnRseSB1c2VkIGZvciBibG9ja3F1b3RlcyAmIGxpc3RzXG4gICAgaWYgKHN0YXRlLnNDb3VudFtsaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgLy8gSWYgbmVzdGluZyBsZXZlbCBleGNlZWRlZCAtIHNraXAgdGFpbCB0byB0aGUgZW5kLiBUaGF0J3Mgbm90IG9yZGluYXJ5XG4gICAgLy8gc2l0dWF0aW9uIGFuZCB3ZSBzaG91bGQgbm90IGNhcmUgYWJvdXQgY29udGVudC5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPj0gbWF4TmVzdGluZykge1xuICAgICAgc3RhdGUubGluZSA9IGVuZExpbmU7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBUcnkgYWxsIHBvc3NpYmxlIHJ1bGVzLlxuICAgIC8vIE9uIHN1Y2Nlc3MsIHJ1bGUgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLmxpbmVgXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnRva2Vuc2BcbiAgICAvLyAtIHJldHVybiB0cnVlXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG9rID0gcnVsZXNbaV0oc3RhdGUsIGxpbmUsIGVuZExpbmUsIGZhbHNlKTtcbiAgICAgIGlmIChvaykgeyBicmVhazsgfVxuICAgIH1cblxuICAgIC8vIHNldCBzdGF0ZS50aWdodCBpZiB3ZSBoYWQgYW4gZW1wdHkgbGluZSBiZWZvcmUgY3VycmVudCB0YWdcbiAgICAvLyBpLmUuIGxhdGVzdCBlbXB0eSBsaW5lIHNob3VsZCBub3QgY291bnRcbiAgICBzdGF0ZS50aWdodCA9ICFoYXNFbXB0eUxpbmVzO1xuXG4gICAgLy8gcGFyYWdyYXBoIG1pZ2h0IFwiZWF0XCIgb25lIG5ld2xpbmUgYWZ0ZXIgaXQgaW4gbmVzdGVkIGxpc3RzXG4gICAgaWYgKHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpKSB7XG4gICAgICBoYXNFbXB0eUxpbmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsaW5lID0gc3RhdGUubGluZTtcblxuICAgIGlmIChsaW5lIDwgZW5kTGluZSAmJiBzdGF0ZS5pc0VtcHR5KGxpbmUpKSB7XG4gICAgICBoYXNFbXB0eUxpbmVzID0gdHJ1ZTtcbiAgICAgIGxpbmUrKztcbiAgICAgIHN0YXRlLmxpbmUgPSBsaW5lO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFBhcnNlckJsb2NrLnBhcnNlKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKVxuICpcbiAqIFByb2Nlc3MgaW5wdXQgc3RyaW5nIGFuZCBwdXNoIGJsb2NrIHRva2VucyBpbnRvIGBvdXRUb2tlbnNgXG4gKiovXG5QYXJzZXJCbG9jay5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3JjLCBtZCwgZW52LCBvdXRUb2tlbnMpIHtcbiAgdmFyIHN0YXRlO1xuXG4gIGlmICghc3JjKSB7IHJldHVybjsgfVxuXG4gIHN0YXRlID0gbmV3IHRoaXMuU3RhdGUoc3JjLCBtZCwgZW52LCBvdXRUb2tlbnMpO1xuXG4gIHRoaXMudG9rZW5pemUoc3RhdGUsIHN0YXRlLmxpbmUsIHN0YXRlLmxpbmVNYXgpO1xufTtcblxuXG5QYXJzZXJCbG9jay5wcm90b3R5cGUuU3RhdGUgPSByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL3N0YXRlX2Jsb2NrJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJCbG9jaztcbiIsIi8qKiBpbnRlcm5hbFxuICogY2xhc3MgQ29yZVxuICpcbiAqIFRvcC1sZXZlbCBydWxlcyBleGVjdXRvci4gR2x1ZXMgYmxvY2svaW5saW5lIHBhcnNlcnMgYW5kIGRvZXMgaW50ZXJtZWRpYXRlXG4gKiB0cmFuc2Zvcm1hdGlvbnMuXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFJ1bGVyICA9IHJlcXVpcmUoJy4vcnVsZXInKTtcblxuXG52YXIgX3J1bGVzID0gW1xuICBbICdub3JtYWxpemUnLCAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9ub3JtYWxpemUnKSAgICAgIF0sXG4gIFsgJ2Jsb2NrJywgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2Jsb2NrJykgICAgICAgICAgXSxcbiAgWyAnaW5saW5lJywgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvaW5saW5lJykgICAgICAgICBdLFxuICBbICdsaW5raWZ5JywgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9saW5raWZ5JykgICAgICAgIF0sXG4gIFsgJ3JlcGxhY2VtZW50cycsICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cycpICAgXSxcbiAgWyAnc21hcnRxdW90ZXMnLCAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvc21hcnRxdW90ZXMnKSAgICBdXG5dO1xuXG5cbi8qKlxuICogbmV3IENvcmUoKVxuICoqL1xuZnVuY3Rpb24gQ29yZSgpIHtcbiAgLyoqXG4gICAqIENvcmUjcnVsZXIgLT4gUnVsZXJcbiAgICpcbiAgICogW1tSdWxlcl1dIGluc3RhbmNlLiBLZWVwIGNvbmZpZ3VyYXRpb24gb2YgY29yZSBydWxlcy5cbiAgICoqL1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0pO1xuICB9XG59XG5cblxuLyoqXG4gKiBDb3JlLnByb2Nlc3Moc3RhdGUpXG4gKlxuICogRXhlY3V0ZXMgY29yZSBjaGFpbiBydWxlcy5cbiAqKi9cbkNvcmUucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIGksIGwsIHJ1bGVzO1xuXG4gIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG5cbiAgZm9yIChpID0gMCwgbCA9IHJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHJ1bGVzW2ldKHN0YXRlKTtcbiAgfVxufTtcblxuQ29yZS5wcm90b3R5cGUuU3RhdGUgPSByZXF1aXJlKCcuL3J1bGVzX2NvcmUvc3RhdGVfY29yZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQ29yZTtcbiIsIi8qKiBpbnRlcm5hbFxuICogY2xhc3MgUGFyc2VySW5saW5lXG4gKlxuICogVG9rZW5pemVzIHBhcmFncmFwaCBjb250ZW50LlxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBSdWxlciAgICAgICAgICAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBhcnNlciBydWxlc1xuXG52YXIgX3J1bGVzID0gW1xuICBbICd0ZXh0JywgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS90ZXh0JykgXSxcbiAgWyAnbmV3bGluZScsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvbmV3bGluZScpIF0sXG4gIFsgJ2VzY2FwZScsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2VzY2FwZScpIF0sXG4gIFsgJ2JhY2t0aWNrcycsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2JhY2t0aWNrcycpIF0sXG4gIFsgJ3N0cmlrZXRocm91Z2gnLCAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2gnKS50b2tlbml6ZSBdLFxuICBbICdlbXBoYXNpcycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbXBoYXNpcycpLnRva2VuaXplIF0sXG4gIFsgJ2xpbmsnLCAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2xpbmsnKSBdLFxuICBbICdpbWFnZScsICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9pbWFnZScpIF0sXG4gIFsgJ2F1dG9saW5rJywgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2F1dG9saW5rJykgXSxcbiAgWyAnaHRtbF9pbmxpbmUnLCAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvaHRtbF9pbmxpbmUnKSBdLFxuICBbICdlbnRpdHknLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbnRpdHknKSBdXG5dO1xuXG52YXIgX3J1bGVzMiA9IFtcbiAgWyAnYmFsYW5jZV9wYWlycycsICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvYmFsYW5jZV9wYWlycycpIF0sXG4gIFsgJ3N0cmlrZXRocm91Z2gnLCAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2gnKS5wb3N0UHJvY2VzcyBdLFxuICBbICdlbXBoYXNpcycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbXBoYXNpcycpLnBvc3RQcm9jZXNzIF0sXG4gIFsgJ3RleHRfY29sbGFwc2UnLCAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3RleHRfY29sbGFwc2UnKSBdXG5dO1xuXG5cbi8qKlxuICogbmV3IFBhcnNlcklubGluZSgpXG4gKiovXG5mdW5jdGlvbiBQYXJzZXJJbmxpbmUoKSB7XG4gIHZhciBpO1xuXG4gIC8qKlxuICAgKiBQYXJzZXJJbmxpbmUjcnVsZXIgLT4gUnVsZXJcbiAgICpcbiAgICogW1tSdWxlcl1dIGluc3RhbmNlLiBLZWVwIGNvbmZpZ3VyYXRpb24gb2YgaW5saW5lIHJ1bGVzLlxuICAgKiovXG4gIHRoaXMucnVsZXIgPSBuZXcgUnVsZXIoKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXJJbmxpbmUjcnVsZXIyIC0+IFJ1bGVyXG4gICAqXG4gICAqIFtbUnVsZXJdXSBpbnN0YW5jZS4gU2Vjb25kIHJ1bGVyIHVzZWQgZm9yIHBvc3QtcHJvY2Vzc2luZ1xuICAgKiAoZS5nLiBpbiBlbXBoYXNpcy1saWtlIHJ1bGVzKS5cbiAgICoqL1xuICB0aGlzLnJ1bGVyMiA9IG5ldyBSdWxlcigpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBfcnVsZXMyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlcjIucHVzaChfcnVsZXMyW2ldWzBdLCBfcnVsZXMyW2ldWzFdKTtcbiAgfVxufVxuXG5cbi8vIFNraXAgc2luZ2xlIHRva2VuIGJ5IHJ1bm5pbmcgYWxsIHJ1bGVzIGluIHZhbGlkYXRpb24gbW9kZTtcbi8vIHJldHVybnMgYHRydWVgIGlmIGFueSBydWxlIHJlcG9ydGVkIHN1Y2Nlc3Ncbi8vXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnNraXBUb2tlbiA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgb2ssIGksIHBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyksXG4gICAgICBsZW4gPSBydWxlcy5sZW5ndGgsXG4gICAgICBtYXhOZXN0aW5nID0gc3RhdGUubWQub3B0aW9ucy5tYXhOZXN0aW5nLFxuICAgICAgY2FjaGUgPSBzdGF0ZS5jYWNoZTtcblxuXG4gIGlmICh0eXBlb2YgY2FjaGVbcG9zXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGF0ZS5wb3MgPSBjYWNoZVtwb3NdO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZXZlbCA8IG1heE5lc3RpbmcpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIC8vIEluY3JlbWVudCBzdGF0ZS5sZXZlbCBhbmQgZGVjcmVtZW50IGl0IGxhdGVyIHRvIGxpbWl0IHJlY3Vyc2lvbi5cbiAgICAgIC8vIEl0J3MgaGFybWxlc3MgdG8gZG8gaGVyZSwgYmVjYXVzZSBubyB0b2tlbnMgYXJlIGNyZWF0ZWQuIEJ1dCBpZGVhbGx5LFxuICAgICAgLy8gd2UnZCBuZWVkIGEgc2VwYXJhdGUgcHJpdmF0ZSBzdGF0ZSB2YXJpYWJsZSBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgLy9cbiAgICAgIHN0YXRlLmxldmVsKys7XG4gICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCB0cnVlKTtcbiAgICAgIHN0YXRlLmxldmVsLS07XG5cbiAgICAgIGlmIChvaykgeyBicmVhazsgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUb28gbXVjaCBuZXN0aW5nLCBqdXN0IHNraXAgdW50aWwgdGhlIGVuZCBvZiB0aGUgcGFyYWdyYXBoLlxuICAgIC8vXG4gICAgLy8gTk9URTogdGhpcyB3aWxsIGNhdXNlIGxpbmtzIHRvIGJlaGF2ZSBpbmNvcnJlY3RseSBpbiB0aGUgZm9sbG93aW5nIGNhc2UsXG4gICAgLy8gICAgICAgd2hlbiBhbiBhbW91bnQgb2YgYFtgIGlzIGV4YWN0bHkgZXF1YWwgdG8gYG1heE5lc3RpbmcgKyAxYDpcbiAgICAvL1xuICAgIC8vICAgICAgIFtbW1tbW1tbW1tbW1tbW1tbW1tbW2Zvb10oKVxuICAgIC8vXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIENNIHN0YW5kYXJkIHdpbGwgYWxsb3cgbmVzdGVkIGxpbmtzXG4gICAgLy8gICAgICAgKHdlIGNhbiByZXBsYWNlIGl0IGJ5IHByZXZlbnRpbmcgbGlua3MgZnJvbSBiZWluZyBwYXJzZWQgaW5cbiAgICAvLyAgICAgICB2YWxpZGF0aW9uIG1vZGUpXG4gICAgLy9cbiAgICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXg7XG4gIH1cblxuICBpZiAoIW9rKSB7IHN0YXRlLnBvcysrOyB9XG4gIGNhY2hlW3Bvc10gPSBzdGF0ZS5wb3M7XG59O1xuXG5cbi8vIEdlbmVyYXRlIHRva2VucyBmb3IgaW5wdXQgcmFuZ2Vcbi8vXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHZhciBvaywgaSxcbiAgICAgIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyksXG4gICAgICBsZW4gPSBydWxlcy5sZW5ndGgsXG4gICAgICBlbmQgPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBtYXhOZXN0aW5nID0gc3RhdGUubWQub3B0aW9ucy5tYXhOZXN0aW5nO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBlbmQpIHtcbiAgICAvLyBUcnkgYWxsIHBvc3NpYmxlIHJ1bGVzLlxuICAgIC8vIE9uIHN1Y2Nlc3MsIHJ1bGUgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnBvc2BcbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUudG9rZW5zYFxuICAgIC8vIC0gcmV0dXJuIHRydWVcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IG1heE5lc3RpbmcpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCBmYWxzZSk7XG4gICAgICAgIGlmIChvaykgeyBicmVhazsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvaykge1xuICAgICAgaWYgKHN0YXRlLnBvcyA+PSBlbmQpIHsgYnJlYWs7IH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjW3N0YXRlLnBvcysrXTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wZW5kaW5nKSB7XG4gICAgc3RhdGUucHVzaFBlbmRpbmcoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFBhcnNlcklubGluZS5wYXJzZShzdHIsIG1kLCBlbnYsIG91dFRva2VucylcbiAqXG4gKiBQcm9jZXNzIGlucHV0IHN0cmluZyBhbmQgcHVzaCBpbmxpbmUgdG9rZW5zIGludG8gYG91dFRva2Vuc2BcbiAqKi9cblBhcnNlcklubGluZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBtZCwgZW52LCBvdXRUb2tlbnMpIHtcbiAgdmFyIGksIHJ1bGVzLCBsZW47XG4gIHZhciBzdGF0ZSA9IG5ldyB0aGlzLlN0YXRlKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKTtcblxuICB0aGlzLnRva2VuaXplKHN0YXRlKTtcblxuICBydWxlcyA9IHRoaXMucnVsZXIyLmdldFJ1bGVzKCcnKTtcbiAgbGVuID0gcnVsZXMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHJ1bGVzW2ldKHN0YXRlKTtcbiAgfVxufTtcblxuXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLlN0YXRlID0gcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvc3RhdGVfaW5saW5lJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJJbmxpbmU7XG4iLCIvLyBDb21tb25tYXJrIGRlZmF1bHQgb3B0aW9uc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBodG1sOiAgICAgICAgIHRydWUsICAgICAgICAgLy8gRW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2VcbiAgICB4aHRtbE91dDogICAgIHRydWUsICAgICAgICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIGJyZWFrczogICAgICAgZmFsc2UsICAgICAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgbGFuZ1ByZWZpeDogICAnbGFuZ3VhZ2UtJywgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsaW5raWZ5OiAgICAgIGZhbHNlLCAgICAgICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6ICBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIENvdWxkIGJlIGVpdGhlciBhIFN0cmluZyBvciBhbiBBcnJheS5cbiAgICAvL1xuICAgIC8vIEZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSAnwqvCu+KAnuKAnCcgZm9yIFJ1c3NpYW4sICfigJ7igJzigJrigJgnIGZvciBHZXJtYW4sXG4gICAgLy8gYW5kIFsnwqtcXHhBMCcsICdcXHhBMMK7JywgJ+KAuVxceEEwJywgJ1xceEEw4oC6J10gZm9yIEZyZW5jaCAoaW5jbHVkaW5nIG5ic3ApLlxuICAgIHF1b3RlczogJ1xcdTIwMWNcXHUyMDFkXFx1MjAxOFxcdTIwMTknLCAvKiDigJzigJ3igJjigJkgKi9cblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiB0aGUgc291cmNlIHN0cmluZyBpcyBub3QgY2hhbmdlZCBhbmQgc2hvdWxkIGJlIGVzY2FwZWQgZXh0ZXJuYWx5LlxuICAgIC8vIElmIHJlc3VsdCBzdGFydHMgd2l0aCA8cHJlLi4uIGludGVybmFsIHdyYXBwZXIgaXMgc2tpcHBlZC5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdub3JtYWxpemUnLFxuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnaW5saW5lJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBibG9jazoge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnY29kZScsXG4gICAgICAgICdmZW5jZScsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ2hyJyxcbiAgICAgICAgJ2h0bWxfYmxvY2snLFxuICAgICAgICAnbGhlYWRpbmcnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdyZWZlcmVuY2UnLFxuICAgICAgICAncGFyYWdyYXBoJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBpbmxpbmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdhdXRvbGluaycsXG4gICAgICAgICdiYWNrdGlja3MnLFxuICAgICAgICAnZW1waGFzaXMnLFxuICAgICAgICAnZW50aXR5JyxcbiAgICAgICAgJ2VzY2FwZScsXG4gICAgICAgICdodG1sX2lubGluZScsXG4gICAgICAgICdpbWFnZScsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAgJ25ld2xpbmUnLFxuICAgICAgICAndGV4dCdcbiAgICAgIF0sXG4gICAgICBydWxlczI6IFtcbiAgICAgICAgJ2JhbGFuY2VfcGFpcnMnLFxuICAgICAgICAnZW1waGFzaXMnLFxuICAgICAgICAndGV4dF9jb2xsYXBzZSdcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBtYXJrZG93bi1pdCBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBDb3VsZCBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXkuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgJ8KrwrvigJ7igJwnIGZvciBSdXNzaWFuLCAn4oCe4oCc4oCa4oCYJyBmb3IgR2VybWFuLFxuICAgIC8vIGFuZCBbJ8KrXFx4QTAnLCAnXFx4QTDCuycsICfigLlcXHhBMCcsICdcXHhBMOKAuiddIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAgICBxdW90ZXM6ICdcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5JywgLyog4oCc4oCd4oCY4oCZICovXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaXMgbm90IGNoYW5nZWQgYW5kIHNob3VsZCBiZSBlc2NhcGVkIGV4dGVybmFseS5cbiAgICAvLyBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMTAwICAgICAgICAgICAgLy8gSW50ZXJuYWwgcHJvdGVjdGlvbiwgcmVjdXJzaW9uIGxpbWl0XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuXG4gICAgY29yZToge30sXG4gICAgYmxvY2s6IHt9LFxuICAgIGlubGluZToge31cbiAgfVxufTtcbiIsIi8vIFwiWmVyb1wiIHByZXNldCwgd2l0aCBub3RoaW5nIGVuYWJsZWQuIFVzZWZ1bCBmb3IgbWFudWFsIGNvbmZpZ3VyaW5nIG9mIHNpbXBsZVxuLy8gbW9kZXMuIEZvciBleGFtcGxlLCB0byBwYXJzZSBib2xkL2l0YWxpYyBvbmx5LlxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBodG1sOiAgICAgICAgIGZhbHNlLCAgICAgICAgLy8gRW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2VcbiAgICB4aHRtbE91dDogICAgIGZhbHNlLCAgICAgICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIGJyZWFrczogICAgICAgZmFsc2UsICAgICAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgbGFuZ1ByZWZpeDogICAnbGFuZ3VhZ2UtJywgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsaW5raWZ5OiAgICAgIGZhbHNlLCAgICAgICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6ICBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIENvdWxkIGJlIGVpdGhlciBhIFN0cmluZyBvciBhbiBBcnJheS5cbiAgICAvL1xuICAgIC8vIEZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSAnwqvCu+KAnuKAnCcgZm9yIFJ1c3NpYW4sICfigJ7igJzigJrigJgnIGZvciBHZXJtYW4sXG4gICAgLy8gYW5kIFsnwqtcXHhBMCcsICdcXHhBMMK7JywgJ+KAuVxceEEwJywgJ1xceEEw4oC6J10gZm9yIEZyZW5jaCAoaW5jbHVkaW5nIG5ic3ApLlxuICAgIHF1b3RlczogJ1xcdTIwMWNcXHUyMDFkXFx1MjAxOFxcdTIwMTknLCAvKiDigJzigJ3igJjigJkgKi9cblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiB0aGUgc291cmNlIHN0cmluZyBpcyBub3QgY2hhbmdlZCBhbmQgc2hvdWxkIGJlIGVzY2FwZWQgZXh0ZXJuYWx5LlxuICAgIC8vIElmIHJlc3VsdCBzdGFydHMgd2l0aCA8cHJlLi4uIGludGVybmFsIHdyYXBwZXIgaXMgc2tpcHBlZC5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdub3JtYWxpemUnLFxuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnaW5saW5lJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBibG9jazoge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgaW5saW5lOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAndGV4dCdcbiAgICAgIF0sXG4gICAgICBydWxlczI6IFtcbiAgICAgICAgJ2JhbGFuY2VfcGFpcnMnLFxuICAgICAgICAndGV4dF9jb2xsYXBzZSdcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbiAqIGNsYXNzIFJlbmRlcmVyXG4gKlxuICogR2VuZXJhdGVzIEhUTUwgZnJvbSBwYXJzZWQgdG9rZW4gc3RyZWFtLiBFYWNoIGluc3RhbmNlIGhhcyBpbmRlcGVuZGVudFxuICogY29weSBvZiBydWxlcy4gVGhvc2UgY2FuIGJlIHJld3JpdHRlbiB3aXRoIGVhc2UuIEFsc28sIHlvdSBjYW4gYWRkIG5ld1xuICogcnVsZXMgaWYgeW91IGNyZWF0ZSBwbHVnaW4gYW5kIGFkZHMgbmV3IHRva2VuIHR5cGVzLlxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBhc3NpZ24gICAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpLmFzc2lnbjtcbnZhciB1bmVzY2FwZUFsbCAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpLnVuZXNjYXBlQWxsO1xudmFyIGVzY2FwZUh0bWwgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykuZXNjYXBlSHRtbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgZGVmYXVsdF9ydWxlcyA9IHt9O1xuXG5cbmRlZmF1bHRfcnVsZXMuY29kZV9pbmxpbmUgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2xmKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuXG4gIHJldHVybiAgJzxjb2RlJyArIHNsZi5yZW5kZXJBdHRycyh0b2tlbikgKyAnPicgK1xuICAgICAgICAgIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgK1xuICAgICAgICAgICc8L2NvZGU+Jztcbn07XG5cblxuZGVmYXVsdF9ydWxlcy5jb2RlX2Jsb2NrID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcblxuICByZXR1cm4gICc8cHJlJyArIHNsZi5yZW5kZXJBdHRycyh0b2tlbikgKyAnPjxjb2RlPicgK1xuICAgICAgICAgIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgK1xuICAgICAgICAgICc8L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblxuZGVmYXVsdF9ydWxlcy5mZW5jZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF0sXG4gICAgICBpbmZvID0gdG9rZW4uaW5mbyA/IHVuZXNjYXBlQWxsKHRva2VuLmluZm8pLnRyaW0oKSA6ICcnLFxuICAgICAgbGFuZ05hbWUgPSAnJyxcbiAgICAgIGxhbmdBdHRycyA9ICcnLFxuICAgICAgaGlnaGxpZ2h0ZWQsIGksIGFyciwgdG1wQXR0cnMsIHRtcFRva2VuO1xuXG4gIGlmIChpbmZvKSB7XG4gICAgYXJyID0gaW5mby5zcGxpdCgvKFxccyspL2cpO1xuICAgIGxhbmdOYW1lID0gYXJyWzBdO1xuICAgIGxhbmdBdHRycyA9IGFyci5zbGljZSgyKS5qb2luKCcnKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhpZ2hsaWdodCkge1xuICAgIGhpZ2hsaWdodGVkID0gb3B0aW9ucy5oaWdobGlnaHQodG9rZW4uY29udGVudCwgbGFuZ05hbWUsIGxhbmdBdHRycykgfHwgZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBoaWdobGlnaHRlZCA9IGVzY2FwZUh0bWwodG9rZW4uY29udGVudCk7XG4gIH1cblxuICBpZiAoaGlnaGxpZ2h0ZWQuaW5kZXhPZignPHByZScpID09PSAwKSB7XG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkICsgJ1xcbic7XG4gIH1cblxuICAvLyBJZiBsYW5ndWFnZSBleGlzdHMsIGluamVjdCBjbGFzcyBnZW50bHksIHdpdGhvdXQgbW9kaWZ5aW5nIG9yaWdpbmFsIHRva2VuLlxuICAvLyBNYXkgYmUsIG9uZSBkYXkgd2Ugd2lsbCBhZGQgLmRlZXBDbG9uZSgpIGZvciB0b2tlbiBhbmQgc2ltcGxpZnkgdGhpcyBwYXJ0LCBidXRcbiAgLy8gbm93IHdlIHByZWZlciB0byBrZWVwIHRoaW5ncyBsb2NhbC5cbiAgaWYgKGluZm8pIHtcbiAgICBpICAgICAgICA9IHRva2VuLmF0dHJJbmRleCgnY2xhc3MnKTtcbiAgICB0bXBBdHRycyA9IHRva2VuLmF0dHJzID8gdG9rZW4uYXR0cnMuc2xpY2UoKSA6IFtdO1xuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0bXBBdHRycy5wdXNoKFsgJ2NsYXNzJywgb3B0aW9ucy5sYW5nUHJlZml4ICsgbGFuZ05hbWUgXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEF0dHJzW2ldID0gdG1wQXR0cnNbaV0uc2xpY2UoKTtcbiAgICAgIHRtcEF0dHJzW2ldWzFdICs9ICcgJyArIG9wdGlvbnMubGFuZ1ByZWZpeCArIGxhbmdOYW1lO1xuICAgIH1cblxuICAgIC8vIEZha2UgdG9rZW4ganVzdCB0byByZW5kZXIgYXR0cmlidXRlc1xuICAgIHRtcFRva2VuID0ge1xuICAgICAgYXR0cnM6IHRtcEF0dHJzXG4gICAgfTtcblxuICAgIHJldHVybiAgJzxwcmU+PGNvZGUnICsgc2xmLnJlbmRlckF0dHJzKHRtcFRva2VuKSArICc+J1xuICAgICAgICAgICsgaGlnaGxpZ2h0ZWRcbiAgICAgICAgICArICc8L2NvZGU+PC9wcmU+XFxuJztcbiAgfVxuXG5cbiAgcmV0dXJuICAnPHByZT48Y29kZScgKyBzbGYucmVuZGVyQXR0cnModG9rZW4pICsgJz4nXG4gICAgICAgICsgaGlnaGxpZ2h0ZWRcbiAgICAgICAgKyAnPC9jb2RlPjwvcHJlPlxcbic7XG59O1xuXG5cbmRlZmF1bHRfcnVsZXMuaW1hZ2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2xmKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuXG4gIC8vIFwiYWx0XCIgYXR0ciBNVVNUIGJlIHNldCwgZXZlbiBpZiBlbXB0eS4gQmVjYXVzZSBpdCdzIG1hbmRhdG9yeSBhbmRcbiAgLy8gc2hvdWxkIGJlIHBsYWNlZCBvbiBwcm9wZXIgcG9zaXRpb24gZm9yIHRlc3RzLlxuICAvL1xuICAvLyBSZXBsYWNlIGNvbnRlbnQgd2l0aCBhY3R1YWwgdmFsdWVcblxuICB0b2tlbi5hdHRyc1t0b2tlbi5hdHRySW5kZXgoJ2FsdCcpXVsxXSA9XG4gICAgc2xmLnJlbmRlcklubGluZUFzVGV4dCh0b2tlbi5jaGlsZHJlbiwgb3B0aW9ucywgZW52KTtcblxuICByZXR1cm4gc2xmLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKTtcbn07XG5cblxuZGVmYXVsdF9ydWxlcy5oYXJkYnJlYWsgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gb3B0aW9ucy54aHRtbE91dCA/ICc8YnIgLz5cXG4nIDogJzxicj5cXG4nO1xufTtcbmRlZmF1bHRfcnVsZXMuc29mdGJyZWFrID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIG9wdGlvbnMuYnJlYWtzID8gKG9wdGlvbnMueGh0bWxPdXQgPyAnPGJyIC8+XFxuJyA6ICc8YnI+XFxuJykgOiAnXFxuJztcbn07XG5cblxuZGVmYXVsdF9ydWxlcy50ZXh0ID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCk7XG59O1xuXG5cbmRlZmF1bHRfcnVsZXMuaHRtbF9ibG9jayA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS5jb250ZW50O1xufTtcbmRlZmF1bHRfcnVsZXMuaHRtbF9pbmxpbmUgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gdG9rZW5zW2lkeF0uY29udGVudDtcbn07XG5cblxuLyoqXG4gKiBuZXcgUmVuZGVyZXIoKVxuICpcbiAqIENyZWF0ZXMgbmV3IFtbUmVuZGVyZXJdXSBpbnN0YW5jZSBhbmQgZmlsbCBbW1JlbmRlcmVyI3J1bGVzXV0gd2l0aCBkZWZhdWx0cy5cbiAqKi9cbmZ1bmN0aW9uIFJlbmRlcmVyKCkge1xuXG4gIC8qKlxuICAgKiBSZW5kZXJlciNydWxlcyAtPiBPYmplY3RcbiAgICpcbiAgICogQ29udGFpbnMgcmVuZGVyIHJ1bGVzIGZvciB0b2tlbnMuIENhbiBiZSB1cGRhdGVkIGFuZCBleHRlbmRlZC5cbiAgICpcbiAgICogIyMjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAgICpcbiAgICogbWQucmVuZGVyZXIucnVsZXMuc3Ryb25nX29wZW4gID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJzxiPic7IH07XG4gICAqIG1kLnJlbmRlcmVyLnJ1bGVzLnN0cm9uZ19jbG9zZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICc8L2I+JzsgfTtcbiAgICpcbiAgICogdmFyIHJlc3VsdCA9IG1kLnJlbmRlcklubGluZSguLi4pO1xuICAgKiBgYGBcbiAgICpcbiAgICogRWFjaCBydWxlIGlzIGNhbGxlZCBhcyBpbmRlcGVuZGVudCBzdGF0aWMgZnVuY3Rpb24gd2l0aCBmaXhlZCBzaWduYXR1cmU6XG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogZnVuY3Rpb24gbXlfdG9rZW5fcmVuZGVyKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHJlbmRlcmVyKSB7XG4gICAqICAgLy8gLi4uXG4gICAqICAgcmV0dXJuIHJlbmRlcmVkSFRNTDtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogU2VlIFtzb3VyY2UgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXJlci5qcylcbiAgICogZm9yIG1vcmUgZGV0YWlscyBhbmQgZXhhbXBsZXMuXG4gICAqKi9cbiAgdGhpcy5ydWxlcyA9IGFzc2lnbih7fSwgZGVmYXVsdF9ydWxlcyk7XG59XG5cblxuLyoqXG4gKiBSZW5kZXJlci5yZW5kZXJBdHRycyh0b2tlbikgLT4gU3RyaW5nXG4gKlxuICogUmVuZGVyIHRva2VuIGF0dHJpYnV0ZXMgdG8gc3RyaW5nLlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckF0dHJzID0gZnVuY3Rpb24gcmVuZGVyQXR0cnModG9rZW4pIHtcbiAgdmFyIGksIGwsIHJlc3VsdDtcblxuICBpZiAoIXRva2VuLmF0dHJzKSB7IHJldHVybiAnJzsgfVxuXG4gIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAoaSA9IDAsIGwgPSB0b2tlbi5hdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICByZXN1bHQgKz0gJyAnICsgZXNjYXBlSHRtbCh0b2tlbi5hdHRyc1tpXVswXSkgKyAnPVwiJyArIGVzY2FwZUh0bWwodG9rZW4uYXR0cnNbaV1bMV0pICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVyVG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvZiB0b2tlbnNcbiAqIC0gaWR4IChOdW1iZWQpOiB0b2tlbiBpbmRleCB0byByZW5kZXJcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcGFyYW1zIG9mIHBhcnNlciBpbnN0YW5jZVxuICpcbiAqIERlZmF1bHQgdG9rZW4gcmVuZGVyZXIuIENhbiBiZSBvdmVycmlkZW4gYnkgY3VzdG9tIGZ1bmN0aW9uXG4gKiBpbiBbW1JlbmRlcmVyI3J1bGVzXV0uXG4gKiovXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVyVG9rZW4gPSBmdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucykge1xuICB2YXIgbmV4dFRva2VuLFxuICAgICAgcmVzdWx0ID0gJycsXG4gICAgICBuZWVkTGYgPSBmYWxzZSxcbiAgICAgIHRva2VuID0gdG9rZW5zW2lkeF07XG5cbiAgLy8gVGlnaHQgbGlzdCBwYXJhZ3JhcGhzXG4gIGlmICh0b2tlbi5oaWRkZW4pIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBJbnNlcnQgYSBuZXdsaW5lIGJldHdlZW4gaGlkZGVuIHBhcmFncmFwaCBhbmQgc3Vic2VxdWVudCBvcGVuaW5nXG4gIC8vIGJsb2NrLWxldmVsIHRhZy5cbiAgLy9cbiAgLy8gRm9yIGV4YW1wbGUsIGhlcmUgd2Ugc2hvdWxkIGluc2VydCBhIG5ld2xpbmUgYmVmb3JlIGJsb2NrcXVvdGU6XG4gIC8vICAtIGFcbiAgLy8gICAgPlxuICAvL1xuICBpZiAodG9rZW4uYmxvY2sgJiYgdG9rZW4ubmVzdGluZyAhPT0gLTEgJiYgaWR4ICYmIHRva2Vuc1tpZHggLSAxXS5oaWRkZW4pIHtcbiAgICByZXN1bHQgKz0gJ1xcbic7XG4gIH1cblxuICAvLyBBZGQgdG9rZW4gbmFtZSwgZS5nLiBgPGltZ2BcbiAgcmVzdWx0ICs9ICh0b2tlbi5uZXN0aW5nID09PSAtMSA/ICc8LycgOiAnPCcpICsgdG9rZW4udGFnO1xuXG4gIC8vIEVuY29kZSBhdHRyaWJ1dGVzLCBlLmcuIGA8aW1nIHNyYz1cImZvb1wiYFxuICByZXN1bHQgKz0gdGhpcy5yZW5kZXJBdHRycyh0b2tlbik7XG5cbiAgLy8gQWRkIGEgc2xhc2ggZm9yIHNlbGYtY2xvc2luZyB0YWdzLCBlLmcuIGA8aW1nIHNyYz1cImZvb1wiIC9gXG4gIGlmICh0b2tlbi5uZXN0aW5nID09PSAwICYmIG9wdGlvbnMueGh0bWxPdXQpIHtcbiAgICByZXN1bHQgKz0gJyAvJztcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIGEgbmV3bGluZSBhZnRlciB0aGlzIHRhZ1xuICBpZiAodG9rZW4uYmxvY2spIHtcbiAgICBuZWVkTGYgPSB0cnVlO1xuXG4gICAgaWYgKHRva2VuLm5lc3RpbmcgPT09IDEpIHtcbiAgICAgIGlmIChpZHggKyAxIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBuZXh0VG9rZW4gPSB0b2tlbnNbaWR4ICsgMV07XG5cbiAgICAgICAgaWYgKG5leHRUb2tlbi50eXBlID09PSAnaW5saW5lJyB8fCBuZXh0VG9rZW4uaGlkZGVuKSB7XG4gICAgICAgICAgLy8gQmxvY2stbGV2ZWwgdGFnIGNvbnRhaW5pbmcgYW4gaW5saW5lIHRhZy5cbiAgICAgICAgICAvL1xuICAgICAgICAgIG5lZWRMZiA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobmV4dFRva2VuLm5lc3RpbmcgPT09IC0xICYmIG5leHRUb2tlbi50YWcgPT09IHRva2VuLnRhZykge1xuICAgICAgICAgIC8vIE9wZW5pbmcgdGFnICsgY2xvc2luZyB0YWcgb2YgdGhlIHNhbWUgdHlwZS4gRS5nLiBgPGxpPjwvbGk+YC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIG5lZWRMZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzdWx0ICs9IG5lZWRMZiA/ICc+XFxuJyA6ICc+JztcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFJlbmRlcmVyLnJlbmRlcklubGluZSh0b2tlbnMsIG9wdGlvbnMsIGVudikgLT4gU3RyaW5nXG4gKiAtIHRva2VucyAoQXJyYXkpOiBsaXN0IG9uIGJsb2NrIHRva2VucyB0byByZW50ZXJcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcGFyYW1zIG9mIHBhcnNlciBpbnN0YW5jZVxuICogLSBlbnYgKE9iamVjdCk6IGFkZGl0aW9uYWwgZGF0YSBmcm9tIHBhcnNlZCBpbnB1dCAocmVmZXJlbmNlcywgZm9yIGV4YW1wbGUpXG4gKlxuICogVGhlIHNhbWUgYXMgW1tSZW5kZXJlci5yZW5kZXJdXSwgYnV0IGZvciBzaW5nbGUgdG9rZW4gb2YgYGlubGluZWAgdHlwZS5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJJbmxpbmUgPSBmdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIHR5cGUsXG4gICAgICByZXN1bHQgPSAnJyxcbiAgICAgIHJ1bGVzID0gdGhpcy5ydWxlcztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdHlwZSA9IHRva2Vuc1tpXS50eXBlO1xuXG4gICAgaWYgKHR5cGVvZiBydWxlc1t0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCArPSBydWxlc1t0eXBlXSh0b2tlbnMsIGksIG9wdGlvbnMsIGVudiwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLnJlbmRlclRva2VuKHRva2VucywgaSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqIGludGVybmFsXG4gKiBSZW5kZXJlci5yZW5kZXJJbmxpbmVBc1RleHQodG9rZW5zLCBvcHRpb25zLCBlbnYpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvbiBibG9jayB0b2tlbnMgdG8gcmVudGVyXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHBhcmFtcyBvZiBwYXJzZXIgaW5zdGFuY2VcbiAqIC0gZW52IChPYmplY3QpOiBhZGRpdGlvbmFsIGRhdGEgZnJvbSBwYXJzZWQgaW5wdXQgKHJlZmVyZW5jZXMsIGZvciBleGFtcGxlKVxuICpcbiAqIFNwZWNpYWwga2x1ZGdlIGZvciBpbWFnZSBgYWx0YCBhdHRyaWJ1dGVzIHRvIGNvbmZvcm0gQ29tbW9uTWFyayBzcGVjLlxuICogRG9uJ3QgdHJ5IHRvIHVzZSBpdCEgU3BlYyByZXF1aXJlcyB0byBzaG93IGBhbHRgIGNvbnRlbnQgd2l0aCBzdHJpcHBlZCBtYXJrdXAsXG4gKiBpbnN0ZWFkIG9mIHNpbXBsZSBlc2NhcGluZy5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJJbmxpbmVBc1RleHQgPSBmdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgcmVzdWx0ICs9IHRva2Vuc1tpXS5jb250ZW50O1xuICAgIH0gZWxzZSBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLnJlbmRlcklubGluZUFzVGV4dCh0b2tlbnNbaV0uY2hpbGRyZW4sIG9wdGlvbnMsIGVudik7XG4gICAgfSBlbHNlIGlmICh0b2tlbnNbaV0udHlwZSA9PT0gJ3NvZnRicmVhaycpIHtcbiAgICAgIHJlc3VsdCArPSAnXFxuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFJlbmRlcmVyLnJlbmRlcih0b2tlbnMsIG9wdGlvbnMsIGVudikgLT4gU3RyaW5nXG4gKiAtIHRva2VucyAoQXJyYXkpOiBsaXN0IG9uIGJsb2NrIHRva2VucyB0byByZW50ZXJcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcGFyYW1zIG9mIHBhcnNlciBpbnN0YW5jZVxuICogLSBlbnYgKE9iamVjdCk6IGFkZGl0aW9uYWwgZGF0YSBmcm9tIHBhcnNlZCBpbnB1dCAocmVmZXJlbmNlcywgZm9yIGV4YW1wbGUpXG4gKlxuICogVGFrZXMgdG9rZW4gc3RyZWFtIGFuZCBnZW5lcmF0ZXMgSFRNTC4gUHJvYmFibHksIHlvdSB3aWxsIG5ldmVyIG5lZWQgdG8gY2FsbFxuICogdGhpcyBtZXRob2QgZGlyZWN0bHkuXG4gKiovXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucywgZW52KSB7XG4gIHZhciBpLCBsZW4sIHR5cGUsXG4gICAgICByZXN1bHQgPSAnJyxcbiAgICAgIHJ1bGVzID0gdGhpcy5ydWxlcztcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB0eXBlID0gdG9rZW5zW2ldLnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLnJlbmRlcklubGluZSh0b2tlbnNbaV0uY2hpbGRyZW4sIG9wdGlvbnMsIGVudik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcnVsZXNbdHlwZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgKz0gcnVsZXNbdG9rZW5zW2ldLnR5cGVdKHRva2VucywgaSwgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVyVG9rZW4odG9rZW5zLCBpLCBvcHRpb25zLCBlbnYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiLyoqXG4gKiBjbGFzcyBSdWxlclxuICpcbiAqIEhlbHBlciBjbGFzcywgdXNlZCBieSBbW01hcmtkb3duSXQjY29yZV1dLCBbW01hcmtkb3duSXQjYmxvY2tdXSBhbmRcbiAqIFtbTWFya2Rvd25JdCNpbmxpbmVdXSB0byBtYW5hZ2Ugc2VxdWVuY2VzIG9mIGZ1bmN0aW9ucyAocnVsZXMpOlxuICpcbiAqIC0ga2VlcCBydWxlcyBpbiBkZWZpbmVkIG9yZGVyXG4gKiAtIGFzc2lnbiB0aGUgbmFtZSB0byBlYWNoIHJ1bGVcbiAqIC0gZW5hYmxlL2Rpc2FibGUgcnVsZXNcbiAqIC0gYWRkL3JlcGxhY2UgcnVsZXNcbiAqIC0gYWxsb3cgYXNzaWduIHJ1bGVzIHRvIGFkZGl0aW9uYWwgbmFtZWQgY2hhaW5zIChpbiB0aGUgc2FtZSlcbiAqIC0gY2FjaGVpbmcgbGlzdHMgb2YgYWN0aXZlIHJ1bGVzXG4gKlxuICogWW91IHdpbGwgbm90IG5lZWQgdXNlIHRoaXMgY2xhc3MgZGlyZWN0bHkgdW50aWwgd3JpdGUgcGx1Z2lucy4gRm9yIHNpbXBsZVxuICogcnVsZXMgY29udHJvbCB1c2UgW1tNYXJrZG93bkl0LmRpc2FibGVdXSwgW1tNYXJrZG93bkl0LmVuYWJsZV1dIGFuZFxuICogW1tNYXJrZG93bkl0LnVzZV1dLlxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qKlxuICogbmV3IFJ1bGVyKClcbiAqKi9cbmZ1bmN0aW9uIFJ1bGVyKCkge1xuICAvLyBMaXN0IG9mIGFkZGVkIHJ1bGVzLiBFYWNoIGVsZW1lbnQgaXM6XG4gIC8vXG4gIC8vIHtcbiAgLy8gICBuYW1lOiBYWFgsXG4gIC8vICAgZW5hYmxlZDogQm9vbGVhbixcbiAgLy8gICBmbjogRnVuY3Rpb24oKSxcbiAgLy8gICBhbHQ6IFsgbmFtZTIsIG5hbWUzIF1cbiAgLy8gfVxuICAvL1xuICB0aGlzLl9fcnVsZXNfXyA9IFtdO1xuXG4gIC8vIENhY2hlZCBydWxlIGNoYWlucy5cbiAgLy9cbiAgLy8gRmlyc3QgbGV2ZWwgLSBjaGFpbiBuYW1lLCAnJyBmb3IgZGVmYXVsdC5cbiAgLy8gU2Vjb25kIGxldmVsIC0gZGlnaW5hbCBhbmNob3IgZm9yIGZhc3QgZmlsdGVyaW5nIGJ5IGNoYXJjb2Rlcy5cbiAgLy9cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSGVscGVyIG1ldGhvZHMsIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseVxuXG5cbi8vIEZpbmQgcnVsZSBpbmRleCBieSBuYW1lXG4vL1xuUnVsZXIucHJvdG90eXBlLl9fZmluZF9fID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9fcnVsZXNfXy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLl9fcnVsZXNfX1tpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuXG4vLyBCdWlsZCBydWxlcyBsb29rdXAgY2FjaGVcbi8vXG5SdWxlci5wcm90b3R5cGUuX19jb21waWxlX18gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGNoYWlucyA9IFsgJycgXTtcblxuICAvLyBjb2xsZWN0IHVuaXF1ZSBuYW1lc1xuICBzZWxmLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWYgKCFydWxlLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBydWxlLmFsdC5mb3JFYWNoKGZ1bmN0aW9uIChhbHROYW1lKSB7XG4gICAgICBpZiAoY2hhaW5zLmluZGV4T2YoYWx0TmFtZSkgPCAwKSB7XG4gICAgICAgIGNoYWlucy5wdXNoKGFsdE5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBzZWxmLl9fY2FjaGVfXyA9IHt9O1xuXG4gIGNoYWlucy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFpbikge1xuICAgIHNlbGYuX19jYWNoZV9fW2NoYWluXSA9IFtdO1xuICAgIHNlbGYuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGlmICghcnVsZS5lbmFibGVkKSB7IHJldHVybjsgfVxuXG4gICAgICBpZiAoY2hhaW4gJiYgcnVsZS5hbHQuaW5kZXhPZihjaGFpbikgPCAwKSB7IHJldHVybjsgfVxuXG4gICAgICBzZWxmLl9fY2FjaGVfX1tjaGFpbl0ucHVzaChydWxlLmZuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuYXQobmFtZSwgZm4gWywgb3B0aW9uc10pXG4gKiAtIG5hbWUgKFN0cmluZyk6IHJ1bGUgbmFtZSB0byByZXBsYWNlLlxuICogLSBmbiAoRnVuY3Rpb24pOiBuZXcgcnVsZSBmdW5jdGlvbi5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogbmV3IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogUmVwbGFjZSBydWxlIGJ5IG5hbWUgd2l0aCBuZXcgZnVuY3Rpb24gJiBvcHRpb25zLiBUaHJvd3MgZXJyb3IgaWYgbmFtZSBub3RcbiAqIGZvdW5kLlxuICpcbiAqICMjIyMjIE9wdGlvbnM6XG4gKlxuICogLSBfX2FsdF9fIC0gYXJyYXkgd2l0aCBuYW1lcyBvZiBcImFsdGVybmF0ZVwiIGNoYWlucy5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogUmVwbGFjZSBleGlzdGluZyB0eXBvZ3JhcGhlciByZXBsYWNlbWVudCBydWxlIHdpdGggbmV3IG9uZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogbWQuY29yZS5ydWxlci5hdCgncmVwbGFjZW1lbnRzJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChuYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaW5kZXggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7IHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgbmFtZSk7IH1cblxuICB0aGlzLl9fcnVsZXNfX1tpbmRleF0uZm4gPSBmbjtcbiAgdGhpcy5fX3J1bGVzX19baW5kZXhdLmFsdCA9IG9wdC5hbHQgfHwgW107XG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5iZWZvcmUoYmVmb3JlTmFtZSwgcnVsZU5hbWUsIGZuIFssIG9wdGlvbnNdKVxuICogLSBiZWZvcmVOYW1lIChTdHJpbmcpOiBuZXcgcnVsZSB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGlzIG9uZS5cbiAqIC0gcnVsZU5hbWUgKFN0cmluZyk6IG5hbWUgb2YgYWRkZWQgcnVsZS5cbiAqIC0gZm4gKEZ1bmN0aW9uKTogcnVsZSBmdW5jdGlvbi5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcnVsZSBvcHRpb25zIChub3QgbWFuZGF0b3J5KS5cbiAqXG4gKiBBZGQgbmV3IHJ1bGUgdG8gY2hhaW4gYmVmb3JlIG9uZSB3aXRoIGdpdmVuIG5hbWUuIFNlZSBhbHNvXG4gKiBbW1J1bGVyLmFmdGVyXV0sIFtbUnVsZXIucHVzaF1dLlxuICpcbiAqICMjIyMjIE9wdGlvbnM6XG4gKlxuICogLSBfX2FsdF9fIC0gYXJyYXkgd2l0aCBuYW1lcyBvZiBcImFsdGVybmF0ZVwiIGNoYWlucy5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICpcbiAqIG1kLmJsb2NrLnJ1bGVyLmJlZm9yZSgncGFyYWdyYXBoJywgJ215X3J1bGUnLCBmdW5jdGlvbiByZXBsYWNlKHN0YXRlKSB7XG4gKiAgIC8vLi4uXG4gKiB9KTtcbiAqIGBgYFxuICoqL1xuUnVsZXIucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uIChiZWZvcmVOYW1lLCBydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fX2ZpbmRfXyhiZWZvcmVOYW1lKTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGluZGV4ID09PSAtMSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIGJlZm9yZU5hbWUpOyB9XG5cbiAgdGhpcy5fX3J1bGVzX18uc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5hZnRlcihhZnRlck5hbWUsIHJ1bGVOYW1lLCBmbiBbLCBvcHRpb25zXSlcbiAqIC0gYWZ0ZXJOYW1lIChTdHJpbmcpOiBuZXcgcnVsZSB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoaXMgb25lLlxuICogLSBydWxlTmFtZSAoU3RyaW5nKTogbmFtZSBvZiBhZGRlZCBydWxlLlxuICogLSBmbiAoRnVuY3Rpb24pOiBydWxlIGZ1bmN0aW9uLlxuICogLSBvcHRpb25zIChPYmplY3QpOiBydWxlIG9wdGlvbnMgKG5vdCBtYW5kYXRvcnkpLlxuICpcbiAqIEFkZCBuZXcgcnVsZSB0byBjaGFpbiBhZnRlciBvbmUgd2l0aCBnaXZlbiBuYW1lLiBTZWUgYWxzb1xuICogW1tSdWxlci5iZWZvcmVdXSwgW1tSdWxlci5wdXNoXV0uXG4gKlxuICogIyMjIyMgT3B0aW9uczpcbiAqXG4gKiAtIF9fYWx0X18gLSBhcnJheSB3aXRoIG5hbWVzIG9mIFwiYWx0ZXJuYXRlXCIgY2hhaW5zLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogbWQuaW5saW5lLnJ1bGVyLmFmdGVyKCd0ZXh0JywgJ215X3J1bGUnLCBmdW5jdGlvbiByZXBsYWNlKHN0YXRlKSB7XG4gKiAgIC8vLi4uXG4gKiB9KTtcbiAqIGBgYFxuICoqL1xuUnVsZXIucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGFmdGVyTmFtZSwgcnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpbmRleCA9IHRoaXMuX19maW5kX18oYWZ0ZXJOYW1lKTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGluZGV4ID09PSAtMSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIGFmdGVyTmFtZSk7IH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaW5kZXggKyAxLCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogUnVsZXIucHVzaChydWxlTmFtZSwgZm4gWywgb3B0aW9uc10pXG4gKiAtIHJ1bGVOYW1lIChTdHJpbmcpOiBuYW1lIG9mIGFkZGVkIHJ1bGUuXG4gKiAtIGZuIChGdW5jdGlvbik6IHJ1bGUgZnVuY3Rpb24uXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogUHVzaCBuZXcgcnVsZSB0byB0aGUgZW5kIG9mIGNoYWluLiBTZWUgYWxzb1xuICogW1tSdWxlci5iZWZvcmVdXSwgW1tSdWxlci5hZnRlcl1dLlxuICpcbiAqICMjIyMjIE9wdGlvbnM6XG4gKlxuICogLSBfX2FsdF9fIC0gYXJyYXkgd2l0aCBuYW1lcyBvZiBcImFsdGVybmF0ZVwiIGNoYWlucy5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICpcbiAqIG1kLmNvcmUucnVsZXIucHVzaCgnbXlfcnVsZScsIGZ1bmN0aW9uIHJlcGxhY2Uoc3RhdGUpIHtcbiAqICAgLy8uLi5cbiAqIH0pO1xuICogYGBgXG4gKiovXG5SdWxlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgdGhpcy5fX3J1bGVzX18ucHVzaCh7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5lbmFibGUobGlzdCBbLCBpZ25vcmVJbnZhbGlkXSkgLT4gQXJyYXlcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogbGlzdCBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIEVuYWJsZSBydWxlcyB3aXRoIGdpdmVuIG5hbWVzLiBJZiBhbnkgcnVsZSBuYW1lIG5vdCBmb3VuZCAtIHRocm93IEVycm9yLlxuICogRXJyb3JzIGNhbiBiZSBkaXNhYmxlZCBieSBzZWNvbmQgcGFyYW0uXG4gKlxuICogUmV0dXJucyBsaXN0IG9mIGZvdW5kIHJ1bGUgbmFtZXMgKGlmIG5vIGV4Y2VwdGlvbiBoYXBwZW5lZCkuXG4gKlxuICogU2VlIGFsc28gW1tSdWxlci5kaXNhYmxlXV0sIFtbUnVsZXIuZW5hYmxlT25seV1dLlxuICoqL1xuUnVsZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgeyBsaXN0ID0gWyBsaXN0IF07IH1cblxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgLy8gU2VhcmNoIGJ5IG5hbWUgYW5kIGVuYWJsZVxuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcblxuICAgIGlmIChpZHggPCAwKSB7XG4gICAgICBpZiAoaWdub3JlSW52YWxpZCkgeyByZXR1cm47IH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignUnVsZXMgbWFuYWdlcjogaW52YWxpZCBydWxlIG5hbWUgJyArIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9fcnVsZXNfX1tpZHhdLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJlc3VsdC5wdXNoKG5hbWUpO1xuICB9LCB0aGlzKTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuZW5hYmxlT25seShsaXN0IFssIGlnbm9yZUludmFsaWRdKVxuICogLSBsaXN0IChTdHJpbmd8QXJyYXkpOiBsaXN0IG9mIHJ1bGUgbmFtZXMgdG8gZW5hYmxlICh3aGl0ZWxpc3QpLlxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogRW5hYmxlIHJ1bGVzIHdpdGggZ2l2ZW4gbmFtZXMsIGFuZCBkaXNhYmxlIGV2ZXJ5dGhpbmcgZWxzZS4gSWYgYW55IHJ1bGUgbmFtZVxuICogbm90IGZvdW5kIC0gdGhyb3cgRXJyb3IuIEVycm9ycyBjYW4gYmUgZGlzYWJsZWQgYnkgc2Vjb25kIHBhcmFtLlxuICpcbiAqIFNlZSBhbHNvIFtbUnVsZXIuZGlzYWJsZV1dLCBbW1J1bGVyLmVuYWJsZV1dLlxuICoqL1xuUnVsZXIucHJvdG90eXBlLmVuYWJsZU9ubHkgPSBmdW5jdGlvbiAobGlzdCwgaWdub3JlSW52YWxpZCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFsgbGlzdCBdOyB9XG5cbiAgdGhpcy5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkgeyBydWxlLmVuYWJsZWQgPSBmYWxzZTsgfSk7XG5cbiAgdGhpcy5lbmFibGUobGlzdCwgaWdub3JlSW52YWxpZCk7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuZGlzYWJsZShsaXN0IFssIGlnbm9yZUludmFsaWRdKSAtPiBBcnJheVxuICogLSBsaXN0IChTdHJpbmd8QXJyYXkpOiBsaXN0IG9mIHJ1bGUgbmFtZXMgdG8gZGlzYWJsZS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIERpc2FibGUgcnVsZXMgd2l0aCBnaXZlbiBuYW1lcy4gSWYgYW55IHJ1bGUgbmFtZSBub3QgZm91bmQgLSB0aHJvdyBFcnJvci5cbiAqIEVycm9ycyBjYW4gYmUgZGlzYWJsZWQgYnkgc2Vjb25kIHBhcmFtLlxuICpcbiAqIFJldHVybnMgbGlzdCBvZiBmb3VuZCBydWxlIG5hbWVzIChpZiBubyBleGNlcHRpb24gaGFwcGVuZWQpLlxuICpcbiAqIFNlZSBhbHNvIFtbUnVsZXIuZW5hYmxlXV0sIFtbUnVsZXIuZW5hYmxlT25seV1dLlxuICoqL1xuUnVsZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAobGlzdCwgaWdub3JlSW52YWxpZCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFsgbGlzdCBdOyB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIC8vIFNlYXJjaCBieSBuYW1lIGFuZCBkaXNhYmxlXG4gIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuXG4gICAgaWYgKGlkeCA8IDApIHtcbiAgICAgIGlmIChpZ25vcmVJbnZhbGlkKSB7IHJldHVybjsgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtYW5hZ2VyOiBpbnZhbGlkIHJ1bGUgbmFtZSAnICsgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX19ydWxlc19fW2lkeF0uZW5hYmxlZCA9IGZhbHNlO1xuICAgIHJlc3VsdC5wdXNoKG5hbWUpO1xuICB9LCB0aGlzKTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogUnVsZXIuZ2V0UnVsZXMoY2hhaW5OYW1lKSAtPiBBcnJheVxuICpcbiAqIFJldHVybiBhcnJheSBvZiBhY3RpdmUgZnVuY3Rpb25zIChydWxlcykgZm9yIGdpdmVuIGNoYWluIG5hbWUuIEl0IGFuYWx5emVzXG4gKiBydWxlcyBjb25maWd1cmF0aW9uLCBjb21waWxlcyBjYWNoZXMgaWYgbm90IGV4aXN0cyBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogRGVmYXVsdCBjaGFpbiBuYW1lIGlzIGAnJ2AgKGVtcHR5IHN0cmluZykuIEl0IGNhbid0IGJlIHNraXBwZWQuIFRoYXQnc1xuICogZG9uZSBpbnRlbnRpb25hbGx5LCB0byBrZWVwIHNpZ25hdHVyZSBtb25vbW9ycGhpYyBmb3IgaGlnaCBzcGVlZC5cbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5nZXRSdWxlcyA9IGZ1bmN0aW9uIChjaGFpbk5hbWUpIHtcbiAgaWYgKHRoaXMuX19jYWNoZV9fID09PSBudWxsKSB7XG4gICAgdGhpcy5fX2NvbXBpbGVfXygpO1xuICB9XG5cbiAgLy8gQ2hhaW4gY2FuIGJlIGVtcHR5LCBpZiBydWxlcyBkaXNhYmxlZC4gQnV0IHdlIHN0aWxsIGhhdmUgdG8gcmV0dXJuIEFycmF5LlxuICByZXR1cm4gdGhpcy5fX2NhY2hlX19bY2hhaW5OYW1lXSB8fCBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXI7XG4iLCIvLyBCbG9jayBxdW90ZXNcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBibG9ja3F1b3RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgYWRqdXN0VGFiLFxuICAgICAgY2gsXG4gICAgICBpLFxuICAgICAgaW5pdGlhbCxcbiAgICAgIGwsXG4gICAgICBsYXN0TGluZUVtcHR5LFxuICAgICAgbGluZXMsXG4gICAgICBuZXh0TGluZSxcbiAgICAgIG9mZnNldCxcbiAgICAgIG9sZEJNYXJrcyxcbiAgICAgIG9sZEJTQ291bnQsXG4gICAgICBvbGRJbmRlbnQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgb2xkU0NvdW50LFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgc3BhY2VBZnRlck1hcmtlcixcbiAgICAgIHRlcm1pbmF0ZSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcyxcbiAgICAgIHRva2VuLFxuICAgICAgaXNPdXRkZW50ZWQsXG4gICAgICBvbGRMaW5lTWF4ID0gc3RhdGUubGluZU1heCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBjaGVjayB0aGUgYmxvY2sgcXVvdGUgbWFya2VyXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgIT09IDB4M0UvKiA+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIHdlIGtub3cgdGhhdCBpdCdzIGdvaW5nIHRvIGJlIGEgdmFsaWQgYmxvY2txdW90ZSxcbiAgLy8gc28gbm8gcG9pbnQgdHJ5aW5nIHRvIGZpbmQgdGhlIGVuZCBvZiBpdCBpbiBzaWxlbnQgbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2V0IG9mZnNldCBwYXN0IHNwYWNlcyBhbmQgXCI+XCJcbiAgaW5pdGlhbCA9IG9mZnNldCA9IHN0YXRlLnNDb3VudFtzdGFydExpbmVdICsgMTtcblxuICAvLyBza2lwIG9uZSBvcHRpb25hbCBzcGFjZSBhZnRlciAnPidcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjAgLyogc3BhY2UgKi8pIHtcbiAgICAvLyAnID4gICB0ZXN0ICdcbiAgICAvLyAgICAgXiAtLSBwb3NpdGlvbiBzdGFydCBvZiBsaW5lIGhlcmU6XG4gICAgcG9zKys7XG4gICAgaW5pdGlhbCsrO1xuICAgIG9mZnNldCsrO1xuICAgIGFkanVzdFRhYiA9IGZhbHNlO1xuICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MDkgLyogdGFiICovKSB7XG4gICAgc3BhY2VBZnRlck1hcmtlciA9IHRydWU7XG5cbiAgICBpZiAoKHN0YXRlLmJzQ291bnRbc3RhcnRMaW5lXSArIG9mZnNldCkgJSA0ID09PSAzKSB7XG4gICAgICAvLyAnICA+XFx0ICB0ZXN0ICdcbiAgICAgIC8vICAgICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlICh0YWIgaGFzIHdpZHRoPT09MSlcbiAgICAgIHBvcysrO1xuICAgICAgaW5pdGlhbCsrO1xuICAgICAgb2Zmc2V0Kys7XG4gICAgICBhZGp1c3RUYWIgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJyA+XFx0ICB0ZXN0ICdcbiAgICAgIC8vICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlICsgc2hpZnQgYnNDb3VudCBzbGlnaHRseVxuICAgICAgLy8gICAgICAgICB0byBtYWtlIGV4dHJhIHNwYWNlIGFwcGVhclxuICAgICAgYWRqdXN0VGFiID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3BhY2VBZnRlck1hcmtlciA9IGZhbHNlO1xuICB9XG5cbiAgb2xkQk1hcmtzID0gWyBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSA9IHBvcztcblxuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICBpZiAoY2ggPT09IDB4MDkpIHtcbiAgICAgICAgb2Zmc2V0ICs9IDQgLSAob2Zmc2V0ICsgc3RhdGUuYnNDb3VudFtzdGFydExpbmVdICsgKGFkanVzdFRhYiA/IDEgOiAwKSkgJSA0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgb2xkQlNDb3VudCA9IFsgc3RhdGUuYnNDb3VudFtzdGFydExpbmVdIF07XG4gIHN0YXRlLmJzQ291bnRbc3RhcnRMaW5lXSA9IHN0YXRlLnNDb3VudFtzdGFydExpbmVdICsgMSArIChzcGFjZUFmdGVyTWFya2VyID8gMSA6IDApO1xuXG4gIGxhc3RMaW5lRW1wdHkgPSBwb3MgPj0gbWF4O1xuXG4gIG9sZFNDb3VudCA9IFsgc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gPSBvZmZzZXQgLSBpbml0aWFsO1xuXG4gIG9sZFRTaGlmdCA9IFsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBwb3MgLSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcblxuICB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5tZC5ibG9jay5ydWxlci5nZXRSdWxlcygnYmxvY2txdW90ZScpO1xuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2Jsb2NrcXVvdGUnO1xuXG4gIC8vIFNlYXJjaCB0aGUgZW5kIG9mIHRoZSBibG9ja1xuICAvL1xuICAvLyBCbG9jayBlbmRzIHdpdGggZWl0aGVyOlxuICAvLyAgMS4gYW4gZW1wdHkgbGluZSBvdXRzaWRlOlxuICAvLyAgICAgYGBgXG4gIC8vICAgICA+IHRlc3RcbiAgLy9cbiAgLy8gICAgIGBgYFxuICAvLyAgMi4gYW4gZW1wdHkgbGluZSBpbnNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID5cbiAgLy8gICAgIHRlc3RcbiAgLy8gICAgIGBgYFxuICAvLyAgMy4gYW5vdGhlciB0YWc6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID4gdGVzdFxuICAvLyAgICAgIC0gLSAtXG4gIC8vICAgICBgYGBcbiAgZm9yIChuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7IG5leHRMaW5lIDwgZW5kTGluZTsgbmV4dExpbmUrKykge1xuICAgIC8vIGNoZWNrIGlmIGl0J3Mgb3V0ZGVudGVkLCBpLmUuIGl0J3MgaW5zaWRlIGxpc3QgaXRlbSBhbmQgaW5kZW50ZWRcbiAgICAvLyBsZXNzIHRoYW4gc2FpZCBsaXN0IGl0ZW06XG4gICAgLy9cbiAgICAvLyBgYGBcbiAgICAvLyAxLiBhbnl0aGluZ1xuICAgIC8vICAgID4gY3VycmVudCBibG9ja3F1b3RlXG4gICAgLy8gMi4gY2hlY2tpbmcgdGhpcyBsaW5lXG4gICAgLy8gYGBgXG4gICAgaXNPdXRkZW50ZWQgPSBzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50O1xuXG4gICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChwb3MgPj0gbWF4KSB7XG4gICAgICAvLyBDYXNlIDE6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoaXMgbGluZSBpcyBlbXB0eS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgPT09IDB4M0UvKiA+ICovICYmICFpc091dGRlbnRlZCkge1xuICAgICAgLy8gVGhpcyBsaW5lIGlzIGluc2lkZSB0aGUgYmxvY2txdW90ZS5cblxuICAgICAgLy8gc2V0IG9mZnNldCBwYXN0IHNwYWNlcyBhbmQgXCI+XCJcbiAgICAgIGluaXRpYWwgPSBvZmZzZXQgPSBzdGF0ZS5zQ291bnRbbmV4dExpbmVdICsgMTtcblxuICAgICAgLy8gc2tpcCBvbmUgb3B0aW9uYWwgc3BhY2UgYWZ0ZXIgJz4nXG4gICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCAvKiBzcGFjZSAqLykge1xuICAgICAgICAvLyAnID4gICB0ZXN0ICdcbiAgICAgICAgLy8gICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlOlxuICAgICAgICBwb3MrKztcbiAgICAgICAgaW5pdGlhbCsrO1xuICAgICAgICBvZmZzZXQrKztcbiAgICAgICAgYWRqdXN0VGFiID0gZmFsc2U7XG4gICAgICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDA5IC8qIHRhYiAqLykge1xuICAgICAgICBzcGFjZUFmdGVyTWFya2VyID0gdHJ1ZTtcblxuICAgICAgICBpZiAoKHN0YXRlLmJzQ291bnRbbmV4dExpbmVdICsgb2Zmc2V0KSAlIDQgPT09IDMpIHtcbiAgICAgICAgICAvLyAnICA+XFx0ICB0ZXN0ICdcbiAgICAgICAgICAvLyAgICAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZSAodGFiIGhhcyB3aWR0aD09PTEpXG4gICAgICAgICAgcG9zKys7XG4gICAgICAgICAgaW5pdGlhbCsrO1xuICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICAgIGFkanVzdFRhYiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vICcgPlxcdCAgdGVzdCAnXG4gICAgICAgICAgLy8gICAgXiAtLSBwb3NpdGlvbiBzdGFydCBvZiBsaW5lIGhlcmUgKyBzaGlmdCBic0NvdW50IHNsaWdodGx5XG4gICAgICAgICAgLy8gICAgICAgICB0byBtYWtlIGV4dHJhIHNwYWNlIGFwcGVhclxuICAgICAgICAgIGFkanVzdFRhYiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgb2xkQk1hcmtzLnB1c2goc3RhdGUuYk1hcmtzW25leHRMaW5lXSk7XG4gICAgICBzdGF0ZS5iTWFya3NbbmV4dExpbmVdID0gcG9zO1xuXG4gICAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgICAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgICAgICBpZiAoY2ggPT09IDB4MDkpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSA0IC0gKG9mZnNldCArIHN0YXRlLmJzQ291bnRbbmV4dExpbmVdICsgKGFkanVzdFRhYiA/IDEgOiAwKSkgJSA0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwb3MrKztcbiAgICAgIH1cblxuICAgICAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgICAgIG9sZEJTQ291bnQucHVzaChzdGF0ZS5ic0NvdW50W25leHRMaW5lXSk7XG4gICAgICBzdGF0ZS5ic0NvdW50W25leHRMaW5lXSA9IHN0YXRlLnNDb3VudFtuZXh0TGluZV0gKyAxICsgKHNwYWNlQWZ0ZXJNYXJrZXIgPyAxIDogMCk7XG5cbiAgICAgIG9sZFNDb3VudC5wdXNoKHN0YXRlLnNDb3VudFtuZXh0TGluZV0pO1xuICAgICAgc3RhdGUuc0NvdW50W25leHRMaW5lXSA9IG9mZnNldCAtIGluaXRpYWw7XG5cbiAgICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuICAgICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBDYXNlIDI6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoZSBsYXN0IGxpbmUgd2FzIGVtcHR5LlxuICAgIGlmIChsYXN0TGluZUVtcHR5KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBDYXNlIDM6IGFub3RoZXIgdGFnIGZvdW5kLlxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgLy8gUXVpcmsgdG8gZW5mb3JjZSBcImhhcmQgdGVybWluYXRpb24gbW9kZVwiIGZvciBwYXJhZ3JhcGhzO1xuICAgICAgLy8gbm9ybWFsbHkgaWYgeW91IGNhbGwgYHRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIG5leHRMaW5lKWAsXG4gICAgICAvLyBwYXJhZ3JhcGhzIHdpbGwgbG9vayBiZWxvdyBuZXh0TGluZSBmb3IgcGFyYWdyYXBoIGNvbnRpbnVhdGlvbixcbiAgICAgIC8vIGJ1dCBpZiBibG9ja3F1b3RlIGlzIHRlcm1pbmF0ZWQgYnkgYW5vdGhlciB0YWcsIHRoZXkgc2hvdWxkbid0XG4gICAgICBzdGF0ZS5saW5lTWF4ID0gbmV4dExpbmU7XG5cbiAgICAgIGlmIChzdGF0ZS5ibGtJbmRlbnQgIT09IDApIHtcbiAgICAgICAgLy8gc3RhdGUuYmxrSW5kZW50IHdhcyBub24temVybywgd2Ugbm93IHNldCBpdCB0byB6ZXJvLFxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHJlLWNhbGN1bGF0ZSBhbGwgb2Zmc2V0cyB0byBhcHBlYXIgYXNcbiAgICAgICAgLy8gaWYgaW5kZW50IHdhc24ndCBjaGFuZ2VkXG4gICAgICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgICAgICBvbGRCU0NvdW50LnB1c2goc3RhdGUuYnNDb3VudFtuZXh0TGluZV0pO1xuICAgICAgICBvbGRUU2hpZnQucHVzaChzdGF0ZS50U2hpZnRbbmV4dExpbmVdKTtcbiAgICAgICAgb2xkU0NvdW50LnB1c2goc3RhdGUuc0NvdW50W25leHRMaW5lXSk7XG4gICAgICAgIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLT0gc3RhdGUuYmxrSW5kZW50O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBvbGRCTWFya3MucHVzaChzdGF0ZS5iTWFya3NbbmV4dExpbmVdKTtcbiAgICBvbGRCU0NvdW50LnB1c2goc3RhdGUuYnNDb3VudFtuZXh0TGluZV0pO1xuICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuICAgIG9sZFNDb3VudC5wdXNoKHN0YXRlLnNDb3VudFtuZXh0TGluZV0pO1xuXG4gICAgLy8gQSBuZWdhdGl2ZSBpbmRlbnRhdGlvbiBtZWFucyB0aGF0IHRoaXMgaXMgYSBwYXJhZ3JhcGggY29udGludWF0aW9uXG4gICAgLy9cbiAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdID0gLTE7XG4gIH1cblxuICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gIHN0YXRlLmJsa0luZGVudCA9IDA7XG5cbiAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnYmxvY2txdW90ZV9vcGVuJywgJ2Jsb2NrcXVvdGUnLCAxKTtcbiAgdG9rZW4ubWFya3VwID0gJz4nO1xuICB0b2tlbi5tYXAgICAgPSBsaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF07XG5cbiAgc3RhdGUubWQuYmxvY2sudG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgbmV4dExpbmUpO1xuXG4gIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2Jsb2NrcXVvdGVfY2xvc2UnLCAnYmxvY2txdW90ZScsIC0xKTtcbiAgdG9rZW4ubWFya3VwID0gJz4nO1xuXG4gIHN0YXRlLmxpbmVNYXggPSBvbGRMaW5lTWF4O1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgbGluZXNbMV0gPSBzdGF0ZS5saW5lO1xuXG4gIC8vIFJlc3RvcmUgb3JpZ2luYWwgdFNoaWZ0OyB0aGlzIG1pZ2h0IG5vdCBiZSBuZWNlc3Nhcnkgc2luY2UgdGhlIHBhcnNlclxuICAvLyBoYXMgYWxyZWFkeSBiZWVuIGhlcmUsIGJ1dCBqdXN0IHRvIG1ha2Ugc3VyZSB3ZSBjYW4gZG8gdGhhdC5cbiAgZm9yIChpID0gMDsgaSA8IG9sZFRTaGlmdC5sZW5ndGg7IGkrKykge1xuICAgIHN0YXRlLmJNYXJrc1tpICsgc3RhcnRMaW5lXSA9IG9sZEJNYXJrc1tpXTtcbiAgICBzdGF0ZS50U2hpZnRbaSArIHN0YXJ0TGluZV0gPSBvbGRUU2hpZnRbaV07XG4gICAgc3RhdGUuc0NvdW50W2kgKyBzdGFydExpbmVdID0gb2xkU0NvdW50W2ldO1xuICAgIHN0YXRlLmJzQ291bnRbaSArIHN0YXJ0TGluZV0gPSBvbGRCU0NvdW50W2ldO1xuICB9XG4gIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBDb2RlIGJsb2NrICg0IHNwYWNlcyBwYWRkZWQpXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvZGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZS8qLCBzaWxlbnQqLykge1xuICB2YXIgbmV4dExpbmUsIGxhc3QsIHRva2VuO1xuXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA8IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdCA9IG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgaWYgKHN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgICBuZXh0TGluZSsrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkge1xuICAgICAgbmV4dExpbmUrKztcbiAgICAgIGxhc3QgPSBuZXh0TGluZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBsYXN0O1xuXG4gIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdjb2RlX2Jsb2NrJywgJ2NvZGUnLCAwKTtcbiAgdG9rZW4uY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbGFzdCwgNCArIHN0YXRlLmJsa0luZGVudCwgdHJ1ZSk7XG4gIHRva2VuLm1hcCAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIGZlbmNlcyAoYGBgIGxhbmcsIH5+fiBsYW5nKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmZW5jZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG1hcmtlciwgbGVuLCBwYXJhbXMsIG5leHRMaW5lLCBtZW0sIHRva2VuLCBtYXJrdXAsXG4gICAgICBoYXZlRW5kTWFya2VyID0gZmFsc2UsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHBvcyArIDMgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLyAmJiBtYXJrZXIgIT09IDB4NjAgLyogYCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHNjYW4gbWFya2VyIGxlbmd0aFxuICBtZW0gPSBwb3M7XG4gIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG5cbiAgbGVuID0gcG9zIC0gbWVtO1xuXG4gIGlmIChsZW4gPCAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmt1cCA9IHN0YXRlLnNyYy5zbGljZShtZW0sIHBvcyk7XG4gIHBhcmFtcyA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCk7XG5cbiAgaWYgKG1hcmtlciA9PT0gMHg2MCAvKiBgICovKSB7XG4gICAgaWYgKHBhcmFtcy5pbmRleE9mKFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKSkgPj0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNpbmNlIHN0YXJ0IGlzIGZvdW5kLCB3ZSBjYW4gcmVwb3J0IHN1Y2Nlc3MgaGVyZSBpbiB2YWxpZGF0aW9uIG1vZGVcbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIHNlYXJjaCBlbmQgb2YgYmxvY2tcbiAgbmV4dExpbmUgPSBzdGFydExpbmU7XG5cbiAgZm9yICg7Oykge1xuICAgIG5leHRMaW5lKys7XG4gICAgaWYgKG5leHRMaW5lID49IGVuZExpbmUpIHtcbiAgICAgIC8vIHVuY2xvc2VkIGJsb2NrIHNob3VsZCBiZSBhdXRvY2xvc2VkIGJ5IGVuZCBvZiBkb2N1bWVudC5cbiAgICAgIC8vIGFsc28gYmxvY2sgc2VlbXMgdG8gYmUgYXV0b2Nsb3NlZCBieSBlbmQgb2YgcGFyZW50XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwb3MgPSBtZW0gPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgICAvLyBub24tZW1wdHkgbGluZSB3aXRoIG5lZ2F0aXZlIGluZGVudCBzaG91bGQgc3RvcCB0aGUgbGlzdDpcbiAgICAgIC8vIC0gYGBgXG4gICAgICAvLyAgdGVzdFxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IG1hcmtlcikgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkge1xuICAgICAgLy8gY2xvc2luZyBmZW5jZSBzaG91bGQgYmUgaW5kZW50ZWQgbGVzcyB0aGFuIDQgc3BhY2VzXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gICAgLy8gY2xvc2luZyBjb2RlIGZlbmNlIG11c3QgYmUgYXQgbGVhc3QgYXMgbG9uZyBhcyB0aGUgb3BlbmluZyBvbmVcbiAgICBpZiAocG9zIC0gbWVtIDwgbGVuKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGFpbCBoYXMgc3BhY2VzIG9ubHlcbiAgICBwb3MgPSBzdGF0ZS5za2lwU3BhY2VzKHBvcyk7XG5cbiAgICBpZiAocG9zIDwgbWF4KSB7IGNvbnRpbnVlOyB9XG5cbiAgICBoYXZlRW5kTWFya2VyID0gdHJ1ZTtcbiAgICAvLyBmb3VuZCFcbiAgICBicmVhaztcbiAgfVxuXG4gIC8vIElmIGEgZmVuY2UgaGFzIGhlYWRpbmcgc3BhY2VzLCB0aGV5IHNob3VsZCBiZSByZW1vdmVkIGZyb20gaXRzIGlubmVyIGJsb2NrXG4gIGxlbiA9IHN0YXRlLnNDb3VudFtzdGFydExpbmVdO1xuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZSArIChoYXZlRW5kTWFya2VyID8gMSA6IDApO1xuXG4gIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdmZW5jZScsICdjb2RlJywgMCk7XG4gIHRva2VuLmluZm8gICAgPSBwYXJhbXM7XG4gIHRva2VuLmNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUgKyAxLCBuZXh0TGluZSwgbGVuLCB0cnVlKTtcbiAgdG9rZW4ubWFya3VwICA9IG1hcmt1cDtcbiAgdG9rZW4ubWFwICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gaGVhZGluZyAoIywgIyMsIC4uLilcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoZWFkaW5nKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIGxldmVsLCB0bXAsIHRva2VuLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGNoICA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKGNoICE9PSAweDIzLyogIyAqLyB8fCBwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGNvdW50IGhlYWRpbmcgbGV2ZWxcbiAgbGV2ZWwgPSAxO1xuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKTtcbiAgd2hpbGUgKGNoID09PSAweDIzLyogIyAqLyAmJiBwb3MgPCBtYXggJiYgbGV2ZWwgPD0gNikge1xuICAgIGxldmVsKys7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3Bvcyk7XG4gIH1cblxuICBpZiAobGV2ZWwgPiA2IHx8IChwb3MgPCBtYXggJiYgIWlzU3BhY2UoY2gpKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gTGV0J3MgY3V0IHRhaWxzIGxpa2UgJyAgICAjIyMgICcgZnJvbSB0aGUgZW5kIG9mIHN0cmluZ1xuXG4gIG1heCA9IHN0YXRlLnNraXBTcGFjZXNCYWNrKG1heCwgcG9zKTtcbiAgdG1wID0gc3RhdGUuc2tpcENoYXJzQmFjayhtYXgsIDB4MjMsIHBvcyk7IC8vICNcbiAgaWYgKHRtcCA+IHBvcyAmJiBpc1NwYWNlKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHRtcCAtIDEpKSkge1xuICAgIG1heCA9IHRtcDtcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2hlYWRpbmdfb3BlbicsICdoJyArIFN0cmluZyhsZXZlbCksIDEpO1xuICB0b2tlbi5tYXJrdXAgPSAnIyMjIyMjIyMnLnNsaWNlKDAsIGxldmVsKTtcbiAgdG9rZW4ubWFwICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcblxuICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKTtcbiAgdG9rZW4uY29udGVudCAgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLnRyaW0oKTtcbiAgdG9rZW4ubWFwICAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuICB0b2tlbi5jaGlsZHJlbiA9IFtdO1xuXG4gIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2hlYWRpbmdfY2xvc2UnLCAnaCcgKyBTdHJpbmcobGV2ZWwpLCAtMSk7XG4gIHRva2VuLm1hcmt1cCA9ICcjIyMjIyMjIycuc2xpY2UoMCwgbGV2ZWwpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIEhvcml6b250YWwgcnVsZVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhyKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbWFya2VyLCBjbnQsIGNoLCB0b2tlbixcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgLy8gQ2hlY2sgaHIgbWFya2VyXG4gIGlmIChtYXJrZXIgIT09IDB4MkEvKiAqICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkQvKiAtICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4NUYvKiBfICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbWFya2VycyBjYW4gYmUgbWl4ZWQgd2l0aCBzcGFjZXMsIGJ1dCB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3QgMyBvZiB0aGVtXG5cbiAgY250ID0gMTtcbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuICAgIGlmIChjaCAhPT0gbWFya2VyICYmICFpc1NwYWNlKGNoKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoY2ggPT09IG1hcmtlcikgeyBjbnQrKzsgfVxuICB9XG5cbiAgaWYgKGNudCA8IDMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2hyJywgJ2hyJywgMCk7XG4gIHRva2VuLm1hcCAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG4gIHRva2VuLm1hcmt1cCA9IEFycmF5KGNudCArIDEpLmpvaW4oU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXIpKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBIVE1MIGJsb2NrXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgYmxvY2tfbmFtZXMgPSByZXF1aXJlKCcuLi9jb21tb24vaHRtbF9ibG9ja3MnKTtcbnZhciBIVE1MX09QRU5fQ0xPU0VfVEFHX1JFID0gcmVxdWlyZSgnLi4vY29tbW9uL2h0bWxfcmUnKS5IVE1MX09QRU5fQ0xPU0VfVEFHX1JFO1xuXG4vLyBBbiBhcnJheSBvZiBvcGVuaW5nIGFuZCBjb3JyZXNwb25kaW5nIGNsb3Npbmcgc2VxdWVuY2VzIGZvciBodG1sIHRhZ3MsXG4vLyBsYXN0IGFyZ3VtZW50IGRlZmluZXMgd2hldGhlciBpdCBjYW4gdGVybWluYXRlIGEgcGFyYWdyYXBoIG9yIG5vdFxuLy9cbnZhciBIVE1MX1NFUVVFTkNFUyA9IFtcbiAgWyAvXjwoc2NyaXB0fHByZXxzdHlsZSkoPz0oXFxzfD58JCkpL2ksIC88XFwvKHNjcmlwdHxwcmV8c3R5bGUpPi9pLCB0cnVlIF0sXG4gIFsgL148IS0tLywgICAgICAgIC8tLT4vLCAgIHRydWUgXSxcbiAgWyAvXjxcXD8vLCAgICAgICAgIC9cXD8+LywgICB0cnVlIF0sXG4gIFsgL148IVtBLVpdLywgICAgIC8+LywgICAgIHRydWUgXSxcbiAgWyAvXjwhXFxbQ0RBVEFcXFsvLCAvXFxdXFxdPi8sIHRydWUgXSxcbiAgWyBuZXcgUmVnRXhwKCdePC8/KCcgKyBibG9ja19uYW1lcy5qb2luKCd8JykgKyAnKSg/PShcXFxcc3wvPz58JCkpJywgJ2knKSwgL14kLywgdHJ1ZSBdLFxuICBbIG5ldyBSZWdFeHAoSFRNTF9PUEVOX0NMT1NFX1RBR19SRS5zb3VyY2UgKyAnXFxcXHMqJCcpLCAgL14kLywgZmFsc2UgXVxuXTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0bWxfYmxvY2soc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBpLCBuZXh0TGluZSwgdG9rZW4sIGxpbmVUZXh0LFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc3RhdGUubWQub3B0aW9ucy5odG1sKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsaW5lVGV4dCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCk7XG5cbiAgZm9yIChpID0gMDsgaSA8IEhUTUxfU0VRVUVOQ0VTLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEhUTUxfU0VRVUVOQ0VTW2ldWzBdLnRlc3QobGluZVRleHQpKSB7IGJyZWFrOyB9XG4gIH1cblxuICBpZiAoaSA9PT0gSFRNTF9TRVFVRU5DRVMubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICAvLyB0cnVlIGlmIHRoaXMgc2VxdWVuY2UgY2FuIGJlIGEgdGVybWluYXRvciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgcmV0dXJuIEhUTUxfU0VRVUVOQ0VTW2ldWzJdO1xuICB9XG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIC8vIElmIHdlIGFyZSBoZXJlIC0gd2UgZGV0ZWN0ZWQgSFRNTCBibG9jay5cbiAgLy8gTGV0J3Mgcm9sbCBkb3duIHRpbGwgYmxvY2sgZW5kLlxuICBpZiAoIUhUTUxfU0VRVUVOQ0VTW2ldWzFdLnRlc3QobGluZVRleHQpKSB7XG4gICAgZm9yICg7IG5leHRMaW5lIDwgZW5kTGluZTsgbmV4dExpbmUrKykge1xuICAgICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuICAgICAgbGluZVRleHQgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpO1xuXG4gICAgICBpZiAoSFRNTF9TRVFVRU5DRVNbaV1bMV0udGVzdChsaW5lVGV4dCkpIHtcbiAgICAgICAgaWYgKGxpbmVUZXh0Lmxlbmd0aCAhPT0gMCkgeyBuZXh0TGluZSsrOyB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcblxuICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnaHRtbF9ibG9jaycsICcnLCAwKTtcbiAgdG9rZW4ubWFwICAgICA9IFsgc3RhcnRMaW5lLCBuZXh0TGluZSBdO1xuICB0b2tlbi5jb250ZW50ID0gc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBuZXh0TGluZSwgc3RhdGUuYmxrSW5kZW50LCB0cnVlKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBsaGVhZGluZyAoLS0tLCA9PT0pXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxoZWFkaW5nKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUvKiwgc2lsZW50Ki8pIHtcbiAgdmFyIGNvbnRlbnQsIHRlcm1pbmF0ZSwgaSwgbCwgdG9rZW4sIHBvcywgbWF4LCBsZXZlbCwgbWFya2VyLFxuICAgICAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxLCBvbGRQYXJlbnRUeXBlLFxuICAgICAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3BhcmFncmFwaCcpO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3BhcmFncmFwaCc7IC8vIHVzZSBwYXJhZ3JhcGggdG8gbWF0Y2ggdGVybWluYXRvclJ1bGVzXG5cbiAgLy8ganVtcCBsaW5lLWJ5LWxpbmUgdW50aWwgZW1wdHkgb25lIG9yIEVPRlxuICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKTsgbmV4dExpbmUrKykge1xuICAgIC8vIHRoaXMgd291bGQgYmUgYSBjb2RlIGJsb2NrIG5vcm1hbGx5LCBidXQgYWZ0ZXIgcGFyYWdyYXBoXG4gICAgLy8gaXQncyBjb25zaWRlcmVkIGEgbGF6eSBjb250aW51YXRpb24gcmVnYXJkbGVzcyBvZiB3aGF0J3MgdGhlcmVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgY29udGludWU7IH1cblxuICAgIC8vXG4gICAgLy8gQ2hlY2sgZm9yIHVuZGVybGluZSBpbiBzZXRleHQgaGVhZGVyXG4gICAgLy9cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA+PSBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgICAgaWYgKHBvcyA8IG1heCkge1xuICAgICAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgICAgIGlmIChtYXJrZXIgPT09IDB4MkQvKiAtICovIHx8IG1hcmtlciA9PT0gMHgzRC8qID0gKi8pIHtcbiAgICAgICAgICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuICAgICAgICAgIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICAgICAgICAgIGlmIChwb3MgPj0gbWF4KSB7XG4gICAgICAgICAgICBsZXZlbCA9IChtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcXVpcmsgZm9yIGJsb2NrcXVvdGVzLCB0aGlzIGxpbmUgc2hvdWxkIGFscmVhZHkgYmUgY2hlY2tlZCBieSB0aGF0IHJ1bGVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IDApIHsgY29udGludWU7IH1cblxuICAgIC8vIFNvbWUgdGFncyBjYW4gdGVybWluYXRlIHBhcmFncmFwaCB3aXRob3V0IGVtcHR5IGxpbmUuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICB9XG5cbiAgaWYgKCFsZXZlbCkge1xuICAgIC8vIERpZG4ndCBmaW5kIHZhbGlkIHVuZGVybGluZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lICsgMTtcblxuICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2hlYWRpbmdfb3BlbicsICdoJyArIFN0cmluZyhsZXZlbCksIDEpO1xuICB0b2tlbi5tYXJrdXAgICA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKTtcbiAgdG9rZW4ubWFwICAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuXG4gIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaW5saW5lJywgJycsIDApO1xuICB0b2tlbi5jb250ZW50ICA9IGNvbnRlbnQ7XG4gIHRva2VuLm1hcCAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgLSAxIF07XG4gIHRva2VuLmNoaWxkcmVuID0gW107XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdoZWFkaW5nX2Nsb3NlJywgJ2gnICsgU3RyaW5nKGxldmVsKSwgLTEpO1xuICB0b2tlbi5tYXJrdXAgICA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKTtcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBMaXN0c1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG4vLyBTZWFyY2ggYFstKypdW1xcbiBdYCwgcmV0dXJucyBuZXh0IHBvcyBhZnRlciBtYXJrZXIgb24gc3VjY2Vzc1xuLy8gb3IgLTEgb24gZmFpbC5cbmZ1bmN0aW9uIHNraXBCdWxsZXRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpIHtcbiAgdmFyIG1hcmtlciwgcG9zLCBtYXgsIGNoO1xuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcbiAgLy8gQ2hlY2sgYnVsbGV0XG4gIGlmIChtYXJrZXIgIT09IDB4MkEvKiAqICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkQvKiAtICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkIvKiArICovKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmICghaXNTcGFjZShjaCkpIHtcbiAgICAgIC8vIFwiIC10ZXN0IFwiIC0gaXMgbm90IGEgbGlzdCBpdGVtXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvcztcbn1cblxuLy8gU2VhcmNoIGBcXGQrWy4pXVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYWZ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkge1xuICB2YXIgY2gsXG4gICAgICBzdGFydCA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBwb3MgPSBzdGFydCxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIExpc3QgbWFya2VyIHNob3VsZCBoYXZlIGF0IGxlYXN0IDIgY2hhcnMgKGRpZ2l0ICsgZG90KVxuICBpZiAocG9zICsgMSA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgaWYgKGNoIDwgMHgzMC8qIDAgKi8gfHwgY2ggPiAweDM5LyogOSAqLykgeyByZXR1cm4gLTE7IH1cblxuICBmb3IgKDs7KSB7XG4gICAgLy8gRU9MIC0+IGZhaWxcbiAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuXG4gICAgaWYgKGNoID49IDB4MzAvKiAwICovICYmIGNoIDw9IDB4MzkvKiA5ICovKSB7XG5cbiAgICAgIC8vIExpc3QgbWFya2VyIHNob3VsZCBoYXZlIG5vIG1vcmUgdGhhbiA5IGRpZ2l0c1xuICAgICAgLy8gKHByZXZlbnRzIGludGVnZXIgb3ZlcmZsb3cgaW4gYnJvd3NlcnMpXG4gICAgICBpZiAocG9zIC0gc3RhcnQgPj0gMTApIHsgcmV0dXJuIC0xOyB9XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGZvdW5kIHZhbGlkIG1hcmtlclxuICAgIGlmIChjaCA9PT0gMHgyOS8qICkgKi8gfHwgY2ggPT09IDB4MmUvKiAuICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuXG4gIGlmIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoIWlzU3BhY2UoY2gpKSB7XG4gICAgICAvLyBcIiAxLnRlc3QgXCIgLSBpcyBub3QgYSBsaXN0IGl0ZW1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn1cblxuZnVuY3Rpb24gbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgaWR4KSB7XG4gIHZhciBpLCBsLFxuICAgICAgbGV2ZWwgPSBzdGF0ZS5sZXZlbCArIDI7XG5cbiAgZm9yIChpID0gaWR4ICsgMiwgbCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAyOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHN0YXRlLnRva2Vuc1tpXS5sZXZlbCA9PT0gbGV2ZWwgJiYgc3RhdGUudG9rZW5zW2ldLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicpIHtcbiAgICAgIHN0YXRlLnRva2Vuc1tpICsgMl0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnRva2Vuc1tpXS5oaWRkZW4gPSB0cnVlO1xuICAgICAgaSArPSAyO1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNoLFxuICAgICAgY29udGVudFN0YXJ0LFxuICAgICAgaSxcbiAgICAgIGluZGVudCxcbiAgICAgIGluZGVudEFmdGVyTWFya2VyLFxuICAgICAgaW5pdGlhbCxcbiAgICAgIGlzT3JkZXJlZCxcbiAgICAgIGl0ZW1MaW5lcyxcbiAgICAgIGwsXG4gICAgICBsaXN0TGluZXMsXG4gICAgICBsaXN0VG9rSWR4LFxuICAgICAgbWFya2VyQ2hhckNvZGUsXG4gICAgICBtYXJrZXJWYWx1ZSxcbiAgICAgIG1heCxcbiAgICAgIG5leHRMaW5lLFxuICAgICAgb2Zmc2V0LFxuICAgICAgb2xkTGlzdEluZGVudCxcbiAgICAgIG9sZFBhcmVudFR5cGUsXG4gICAgICBvbGRTQ291bnQsXG4gICAgICBvbGRUU2hpZnQsXG4gICAgICBvbGRUaWdodCxcbiAgICAgIHBvcyxcbiAgICAgIHBvc0FmdGVyTWFya2VyLFxuICAgICAgcHJldkVtcHR5RW5kLFxuICAgICAgc3RhcnQsXG4gICAgICB0ZXJtaW5hdGUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICB0b2tlbixcbiAgICAgIGlzVGVybWluYXRpbmdQYXJhZ3JhcGggPSBmYWxzZSxcbiAgICAgIHRpZ2h0ID0gdHJ1ZTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBTcGVjaWFsIGNhc2U6XG4gIC8vICAtIGl0ZW0gMVxuICAvLyAgIC0gaXRlbSAyXG4gIC8vICAgIC0gaXRlbSAzXG4gIC8vICAgICAtIGl0ZW0gNFxuICAvLyAgICAgIC0gdGhpcyBvbmUgaXMgYSBwYXJhZ3JhcGggY29udGludWF0aW9uXG4gIGlmIChzdGF0ZS5saXN0SW5kZW50ID49IDAgJiZcbiAgICAgIHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUubGlzdEluZGVudCA+PSA0ICYmXG4gICAgICBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGxpbWl0IGNvbmRpdGlvbnMgd2hlbiBsaXN0IGNhbiBpbnRlcnJ1cHRcbiAgLy8gYSBwYXJhZ3JhcGggKHZhbGlkYXRpb24gbW9kZSBvbmx5KVxuICBpZiAoc2lsZW50ICYmIHN0YXRlLnBhcmVudFR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgLy8gTmV4dCBsaXN0IGl0ZW0gc2hvdWxkIHN0aWxsIHRlcm1pbmF0ZSBwcmV2aW91cyBsaXN0IGl0ZW07XG4gICAgLy9cbiAgICAvLyBUaGlzIGNvZGUgY2FuIGZhaWwgaWYgcGx1Z2lucyB1c2UgYmxrSW5kZW50IGFzIHdlbGwgYXMgbGlzdHMsXG4gICAgLy8gYnV0IEkgaG9wZSB0aGUgc3BlYyBnZXRzIGZpeGVkIGxvbmcgYmVmb3JlIHRoYXQgaGFwcGVucy5cbiAgICAvL1xuICAgIGlmIChzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA+PSBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIGlzVGVybWluYXRpbmdQYXJhZ3JhcGggPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIERldGVjdCBsaXN0IHR5cGUgYW5kIHBvc2l0aW9uIGFmdGVyIG1hcmtlclxuICBpZiAoKHBvc0FmdGVyTWFya2VyID0gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpKSA+PSAwKSB7XG4gICAgaXNPcmRlcmVkID0gdHJ1ZTtcbiAgICBzdGFydCA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gICAgbWFya2VyVmFsdWUgPSBOdW1iZXIoc3RhdGUuc3JjLnN1YnN0cihzdGFydCwgcG9zQWZ0ZXJNYXJrZXIgLSBzdGFydCAtIDEpKTtcblxuICAgIC8vIElmIHdlJ3JlIHN0YXJ0aW5nIGEgbmV3IG9yZGVyZWQgbGlzdCByaWdodCBhZnRlclxuICAgIC8vIGEgcGFyYWdyYXBoLCBpdCBzaG91bGQgc3RhcnQgd2l0aCAxLlxuICAgIGlmIChpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoICYmIG1hcmtlclZhbHVlICE9PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgfSBlbHNlIGlmICgocG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSkgPj0gMCkge1xuICAgIGlzT3JkZXJlZCA9IGZhbHNlO1xuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gSWYgd2UncmUgc3RhcnRpbmcgYSBuZXcgdW5vcmRlcmVkIGxpc3QgcmlnaHQgYWZ0ZXJcbiAgLy8gYSBwYXJhZ3JhcGgsIGZpcnN0IGxpbmUgc2hvdWxkIG5vdCBiZSBlbXB0eS5cbiAgaWYgKGlzVGVybWluYXRpbmdQYXJhZ3JhcGgpIHtcbiAgICBpZiAoc3RhdGUuc2tpcFNwYWNlcyhwb3NBZnRlck1hcmtlcikgPj0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0pIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFdlIHNob3VsZCB0ZXJtaW5hdGUgbGlzdCBvbiBzdHlsZSBjaGFuZ2UuIFJlbWVtYmVyIGZpcnN0IG9uZSB0byBjb21wYXJlLlxuICBtYXJrZXJDaGFyQ29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvc0FmdGVyTWFya2VyIC0gMSk7XG5cbiAgLy8gRm9yIHZhbGlkYXRpb24gbW9kZSB3ZSBjYW4gdGVybWluYXRlIGltbWVkaWF0ZWx5XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBTdGFydCBsaXN0XG4gIGxpc3RUb2tJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoO1xuXG4gIGlmIChpc09yZGVyZWQpIHtcbiAgICB0b2tlbiAgICAgICA9IHN0YXRlLnB1c2goJ29yZGVyZWRfbGlzdF9vcGVuJywgJ29sJywgMSk7XG4gICAgaWYgKG1hcmtlclZhbHVlICE9PSAxKSB7XG4gICAgICB0b2tlbi5hdHRycyA9IFsgWyAnc3RhcnQnLCBtYXJrZXJWYWx1ZSBdIF07XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgdG9rZW4gICAgICAgPSBzdGF0ZS5wdXNoKCdidWxsZXRfbGlzdF9vcGVuJywgJ3VsJywgMSk7XG4gIH1cblxuICB0b2tlbi5tYXAgICAgPSBsaXN0TGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdO1xuICB0b2tlbi5tYXJrdXAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlckNoYXJDb2RlKTtcblxuICAvL1xuICAvLyBJdGVyYXRlIGxpc3QgaXRlbXNcbiAgLy9cblxuICBuZXh0TGluZSA9IHN0YXJ0TGluZTtcbiAgcHJldkVtcHR5RW5kID0gZmFsc2U7XG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdsaXN0Jyk7XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAnbGlzdCc7XG5cbiAgd2hpbGUgKG5leHRMaW5lIDwgZW5kTGluZSkge1xuICAgIHBvcyA9IHBvc0FmdGVyTWFya2VyO1xuICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICBpbml0aWFsID0gb2Zmc2V0ID0gc3RhdGUuc0NvdW50W25leHRMaW5lXSArIHBvc0FmdGVyTWFya2VyIC0gKHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0pO1xuXG4gICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgICBpZiAoY2ggPT09IDB4MDkpIHtcbiAgICAgICAgb2Zmc2V0ICs9IDQgLSAob2Zmc2V0ICsgc3RhdGUuYnNDb3VudFtuZXh0TGluZV0pICUgNDtcbiAgICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4MjApIHtcbiAgICAgICAgb2Zmc2V0Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcG9zKys7XG4gICAgfVxuXG4gICAgY29udGVudFN0YXJ0ID0gcG9zO1xuXG4gICAgaWYgKGNvbnRlbnRTdGFydCA+PSBtYXgpIHtcbiAgICAgIC8vIHRyaW1taW5nIHNwYWNlIGluIFwiLSAgICBcXG4gIDNcIiBjYXNlLCBpbmRlbnQgaXMgMSBoZXJlXG4gICAgICBpbmRlbnRBZnRlck1hcmtlciA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGVudEFmdGVyTWFya2VyID0gb2Zmc2V0IC0gaW5pdGlhbDtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdGhhbiA0IHNwYWNlcywgdGhlIGluZGVudCBpcyAxXG4gICAgLy8gKHRoZSByZXN0IGlzIGp1c3QgaW5kZW50ZWQgY29kZSBibG9jaylcbiAgICBpZiAoaW5kZW50QWZ0ZXJNYXJrZXIgPiA0KSB7IGluZGVudEFmdGVyTWFya2VyID0gMTsgfVxuXG4gICAgLy8gXCIgIC0gIHRlc3RcIlxuICAgIC8vICBeXl5eXiAtIGNhbGN1bGF0aW5nIHRvdGFsIGxlbmd0aCBvZiB0aGlzIHRoaW5nXG4gICAgaW5kZW50ID0gaW5pdGlhbCArIGluZGVudEFmdGVyTWFya2VyO1xuXG4gICAgLy8gUnVuIHN1YnBhcnNlciAmIHdyaXRlIHRva2Vuc1xuICAgIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2xpc3RfaXRlbV9vcGVuJywgJ2xpJywgMSk7XG4gICAgdG9rZW4ubWFya3VwID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXJDaGFyQ29kZSk7XG4gICAgdG9rZW4ubWFwICAgID0gaXRlbUxpbmVzID0gWyBzdGFydExpbmUsIDAgXTtcblxuICAgIC8vIGNoYW5nZSBjdXJyZW50IHN0YXRlLCB0aGVuIHJlc3RvcmUgaXQgYWZ0ZXIgcGFyc2VyIHN1YmNhbGxcbiAgICBvbGRUaWdodCA9IHN0YXRlLnRpZ2h0O1xuICAgIG9sZFRTaGlmdCA9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICAgIG9sZFNDb3VudCA9IHN0YXRlLnNDb3VudFtzdGFydExpbmVdO1xuXG4gICAgLy8gIC0gZXhhbXBsZSBsaXN0XG4gICAgLy8gXiBsaXN0SW5kZW50IHBvc2l0aW9uIHdpbGwgYmUgaGVyZVxuICAgIC8vICAgXiBibGtJbmRlbnQgcG9zaXRpb24gd2lsbCBiZSBoZXJlXG4gICAgLy9cbiAgICBvbGRMaXN0SW5kZW50ID0gc3RhdGUubGlzdEluZGVudDtcbiAgICBzdGF0ZS5saXN0SW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICAgIHN0YXRlLmJsa0luZGVudCA9IGluZGVudDtcblxuICAgIHN0YXRlLnRpZ2h0ID0gdHJ1ZTtcbiAgICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuICAgIHN0YXRlLnNDb3VudFtzdGFydExpbmVdID0gb2Zmc2V0O1xuXG4gICAgaWYgKGNvbnRlbnRTdGFydCA+PSBtYXggJiYgc3RhdGUuaXNFbXB0eShzdGFydExpbmUgKyAxKSkge1xuICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgdGhpcyBjYXNlXG4gICAgICAvLyAobGlzdCBpdGVtIGlzIGVtcHR5LCBsaXN0IHRlcm1pbmF0ZXMgYmVmb3JlIFwiZm9vXCIpOlxuICAgICAgLy8gfn5+fn5+fn5cbiAgICAgIC8vICAgLVxuICAgICAgLy9cbiAgICAgIC8vICAgICBmb29cbiAgICAgIC8vIH5+fn5+fn5+XG4gICAgICBzdGF0ZS5saW5lID0gTWF0aC5taW4oc3RhdGUubGluZSArIDIsIGVuZExpbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5tZC5ibG9jay50b2tlbml6ZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhbnkgb2YgbGlzdCBpdGVtIGlzIHRpZ2h0LCBtYXJrIGxpc3QgYXMgdGlnaHRcbiAgICBpZiAoIXN0YXRlLnRpZ2h0IHx8IHByZXZFbXB0eUVuZCkge1xuICAgICAgdGlnaHQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gSXRlbSBiZWNvbWUgbG9vc2UgaWYgZmluaXNoIHdpdGggZW1wdHkgbGluZSxcbiAgICAvLyBidXQgd2Ugc2hvdWxkIGZpbHRlciBsYXN0IGVsZW1lbnQsIGJlY2F1c2UgaXQgbWVhbnMgbGlzdCBmaW5pc2hcbiAgICBwcmV2RW1wdHlFbmQgPSAoc3RhdGUubGluZSAtIHN0YXJ0TGluZSkgPiAxICYmIHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpO1xuXG4gICAgc3RhdGUuYmxrSW5kZW50ID0gc3RhdGUubGlzdEluZGVudDtcbiAgICBzdGF0ZS5saXN0SW5kZW50ID0gb2xkTGlzdEluZGVudDtcbiAgICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgICBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSA9IG9sZFNDb3VudDtcbiAgICBzdGF0ZS50aWdodCA9IG9sZFRpZ2h0O1xuXG4gICAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnbGlzdF9pdGVtX2Nsb3NlJywgJ2xpJywgLTEpO1xuICAgIHRva2VuLm1hcmt1cCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyQ2hhckNvZGUpO1xuXG4gICAgbmV4dExpbmUgPSBzdGFydExpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGl0ZW1MaW5lc1sxXSA9IG5leHRMaW5lO1xuICAgIGNvbnRlbnRTdGFydCA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuXG4gICAgaWYgKG5leHRMaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cblxuICAgIC8vXG4gICAgLy8gVHJ5IHRvIGNoZWNrIGlmIGxpc3QgaXMgdGVybWluYXRlZCBvciBjb250aW51ZWQuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyBicmVhazsgfVxuXG4gICAgLy8gZmFpbCBpZiB0ZXJtaW5hdGluZyBibG9jayBmb3VuZFxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cblxuICAgIC8vIGZhaWwgaWYgbGlzdCBoYXMgYW5vdGhlciB0eXBlXG4gICAgaWYgKGlzT3JkZXJlZCkge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIG5leHRMaW5lKTtcbiAgICAgIGlmIChwb3NBZnRlck1hcmtlciA8IDApIHsgYnJlYWs7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKHBvc0FmdGVyTWFya2VyIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIGlmIChtYXJrZXJDaGFyQ29kZSAhPT0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zQWZ0ZXJNYXJrZXIgLSAxKSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gRmluYWxpemUgbGlzdFxuICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCdvcmRlcmVkX2xpc3RfY2xvc2UnLCAnb2wnLCAtMSk7XG4gIH0gZWxzZSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCdidWxsZXRfbGlzdF9jbG9zZScsICd1bCcsIC0xKTtcbiAgfVxuICB0b2tlbi5tYXJrdXAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlckNoYXJDb2RlKTtcblxuICBsaXN0TGluZXNbMV0gPSBuZXh0TGluZTtcbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgbGlzdFRva0lkeCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQYXJhZ3JhcGhcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyYWdyYXBoKHN0YXRlLCBzdGFydExpbmUvKiwgZW5kTGluZSovKSB7XG4gIHZhciBjb250ZW50LCB0ZXJtaW5hdGUsIGksIGwsIHRva2VuLCBvbGRQYXJlbnRUeXBlLFxuICAgICAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxLFxuICAgICAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3BhcmFncmFwaCcpLFxuICAgICAgZW5kTGluZSA9IHN0YXRlLmxpbmVNYXg7XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAncGFyYWdyYXBoJztcblxuICAvLyBqdW1wIGxpbmUtYnktbGluZSB1bnRpbCBlbXB0eSBvbmUgb3IgRU9GXG4gIGZvciAoOyBuZXh0TGluZSA8IGVuZExpbmUgJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpOyBuZXh0TGluZSsrKSB7XG4gICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAvLyBpdCdzIGNvbnNpZGVyZWQgYSBsYXp5IGNvbnRpbnVhdGlvbiByZWdhcmRsZXNzIG9mIHdoYXQncyB0aGVyZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID4gMykgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gcXVpcmsgZm9yIGJsb2NrcXVvdGVzLCB0aGlzIGxpbmUgc2hvdWxkIGFscmVhZHkgYmUgY2hlY2tlZCBieSB0aGF0IHJ1bGVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IDApIHsgY29udGludWU7IH1cblxuICAgIC8vIFNvbWUgdGFncyBjYW4gdGVybWluYXRlIHBhcmFncmFwaCB3aXRob3V0IGVtcHR5IGxpbmUuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgZmFsc2UpLnRyaW0oKTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdwYXJhZ3JhcGhfb3BlbicsICdwJywgMSk7XG4gIHRva2VuLm1hcCAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcblxuICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKTtcbiAgdG9rZW4uY29udGVudCAgPSBjb250ZW50O1xuICB0b2tlbi5tYXAgICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG4gIHRva2VuLmNoaWxkcmVuID0gW107XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdwYXJhZ3JhcGhfY2xvc2UnLCAncCcsIC0xKTtcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykubm9ybWFsaXplUmVmZXJlbmNlO1xudmFyIGlzU3BhY2UgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlZmVyZW5jZShzdGF0ZSwgc3RhcnRMaW5lLCBfZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCxcbiAgICAgIGRlc3RFbmRQb3MsXG4gICAgICBkZXN0RW5kTGluZU5vLFxuICAgICAgZW5kTGluZSxcbiAgICAgIGhyZWYsXG4gICAgICBpLFxuICAgICAgbCxcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxFbmQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgcmVzLFxuICAgICAgc3RhcnQsXG4gICAgICBzdHIsXG4gICAgICB0ZXJtaW5hdGUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICB0aXRsZSxcbiAgICAgIGxpbmVzID0gMCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXSxcbiAgICAgIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gU2ltcGxlIGNoZWNrIHRvIHF1aWNrbHkgaW50ZXJydXB0IHNjYW4gb24gW2xpbmtdKHVybCkgYXQgdGhlIHN0YXJ0IG9mIGxpbmUuXG4gIC8vIENhbiBiZSB1c2VmdWwgb24gcHJhY3RpY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9pc3N1ZXMvNTRcbiAgd2hpbGUgKCsrcG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUQgLyogXSAqLyAmJlxuICAgICAgICBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgLSAxKSAhPT0gMHg1Qy8qIFxcICovKSB7XG4gICAgICBpZiAocG9zICsgMSA9PT0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGVuZExpbmUgPSBzdGF0ZS5saW5lTWF4O1xuXG4gIC8vIGp1bXAgbGluZS1ieS1saW5lIHVudGlsIGVtcHR5IG9uZSBvciBFT0ZcbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3JlZmVyZW5jZScpO1xuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3JlZmVyZW5jZSc7XG5cbiAgZm9yICg7IG5leHRMaW5lIDwgZW5kTGluZSAmJiAhc3RhdGUuaXNFbXB0eShuZXh0TGluZSk7IG5leHRMaW5lKyspIHtcbiAgICAvLyB0aGlzIHdvdWxkIGJlIGEgY29kZSBibG9jayBub3JtYWxseSwgYnV0IGFmdGVyIHBhcmFncmFwaFxuICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBxdWlyayBmb3IgYmxvY2txdW90ZXMsIHRoaXMgbGluZSBzaG91bGQgYWxyZWFkeSBiZSBjaGVja2VkIGJ5IHRoYXQgcnVsZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgMCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG4gIH1cblxuICBzdHIgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG4gIG1heCA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yIChwb3MgPSAxOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjaCA9PT0gMHg1QiAvKiBbICovKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBsYWJlbEVuZCA9IHBvcztcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4MEEgLyogXFxuICovKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUMgLyogXFwgKi8pIHtcbiAgICAgIHBvcysrO1xuICAgICAgaWYgKHBvcyA8IG1heCAmJiBzdHIuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7XG4gICAgICAgIGxpbmVzKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxhYmVsRW5kIDwgMCB8fCBzdHIuY2hhckNvZGVBdChsYWJlbEVuZCArIDEpICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgIF5eXiBza2lwIG9wdGlvbmFsIHdoaXRlc3BhY2UgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY2ggPT09IDB4MEEpIHtcbiAgICAgIGxpbmVzKys7XG4gICAgfSBlbHNlIGlmIChpc1NwYWNlKGNoKSkge1xuICAgICAgLyplc2xpbnQgbm8tZW1wdHk6MCovXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgXl5eXl5eXl5eXl4gcGFyc2UgdGhpc1xuICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0ciwgcG9zLCBtYXgpO1xuICBpZiAoIXJlcy5vaykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBocmVmID0gc3RhdGUubWQubm9ybWFsaXplTGluayhyZXMuc3RyKTtcbiAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoaHJlZikpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gcmVzLnBvcztcbiAgbGluZXMgKz0gcmVzLmxpbmVzO1xuXG4gIC8vIHNhdmUgY3Vyc29yIHN0YXRlLCB3ZSBjb3VsZCByZXF1aXJlIHRvIHJvbGxiYWNrIGxhdGVyXG4gIGRlc3RFbmRQb3MgPSBwb3M7XG4gIGRlc3RFbmRMaW5lTm8gPSBsaW5lcztcblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgXl5eIHNraXBwaW5nIHRob3NlIHNwYWNlc1xuICBzdGFydCA9IHBvcztcbiAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNoID09PSAweDBBKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgIC8qZXNsaW50IG5vLWVtcHR5OjAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzZSB0aGlzXG4gIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RyLCBwb3MsIG1heCk7XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiByZXMub2spIHtcbiAgICB0aXRsZSA9IHJlcy5zdHI7XG4gICAgcG9zID0gcmVzLnBvcztcbiAgICBsaW5lcyArPSByZXMubGluZXM7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUgPSAnJztcbiAgICBwb3MgPSBkZXN0RW5kUG9zO1xuICAgIGxpbmVzID0gZGVzdEVuZExpbmVObztcbiAgfVxuXG4gIC8vIHNraXAgdHJhaWxpbmcgc3BhY2VzIHVudGlsIHRoZSByZXN0IG9mIHRoZSBsaW5lXG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKCFpc1NwYWNlKGNoKSkgeyBicmVhazsgfVxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHBvcyA8IG1heCAmJiBzdHIuY2hhckNvZGVBdChwb3MpICE9PSAweDBBKSB7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAvLyBnYXJiYWdlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYWZ0ZXIgdGl0bGUsXG4gICAgICAvLyBidXQgaXQgY291bGQgc3RpbGwgYmUgYSB2YWxpZCByZWZlcmVuY2UgaWYgd2Ugcm9sbCBiYWNrXG4gICAgICB0aXRsZSA9ICcnO1xuICAgICAgcG9zID0gZGVzdEVuZFBvcztcbiAgICAgIGxpbmVzID0gZGVzdEVuZExpbmVObztcbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoIWlzU3BhY2UoY2gpKSB7IGJyZWFrOyB9XG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RyLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQSkge1xuICAgIC8vIGdhcmJhZ2UgYXQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxhYmVsID0gbm9ybWFsaXplUmVmZXJlbmNlKHN0ci5zbGljZSgxLCBsYWJlbEVuZCkpO1xuICBpZiAoIWxhYmVsKSB7XG4gICAgLy8gQ29tbW9uTWFyayAwLjIwIGRpc2FsbG93cyBlbXB0eSBsYWJlbHNcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBSZWZlcmVuY2UgY2FuIG5vdCB0ZXJtaW5hdGUgYW55dGhpbmcuIFRoaXMgY2hlY2sgaXMgZm9yIHNhZmV0eSBvbmx5LlxuICAvKmlzdGFuYnVsIGlnbm9yZSBpZiovXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICBpZiAodHlwZW9mIHN0YXRlLmVudi5yZWZlcmVuY2VzID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0YXRlLmVudi5yZWZlcmVuY2VzID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYucmVmZXJlbmNlc1tsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdGUuZW52LnJlZmVyZW5jZXNbbGFiZWxdID0geyB0aXRsZTogdGl0bGUsIGhyZWY6IGhyZWYgfTtcbiAgfVxuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyBsaW5lcyArIDE7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFBhcnNlciBzdGF0ZSBjbGFzc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxuZnVuY3Rpb24gU3RhdGVCbG9jayhzcmMsIG1kLCBlbnYsIHRva2Vucykge1xuICB2YXIgY2gsIHMsIHN0YXJ0LCBwb3MsIGxlbiwgaW5kZW50LCBvZmZzZXQsIGluZGVudF9mb3VuZDtcblxuICB0aGlzLnNyYyA9IHNyYztcblxuICAvLyBsaW5rIHRvIHBhcnNlciBpbnN0YW5jZVxuICB0aGlzLm1kICAgICA9IG1kO1xuXG4gIHRoaXMuZW52ID0gZW52O1xuXG4gIC8vXG4gIC8vIEludGVybmFsIHN0YXRlIHZhcnRpYWJsZXNcbiAgLy9cblxuICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICB0aGlzLmJNYXJrcyA9IFtdOyAgLy8gbGluZSBiZWdpbiBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMuZU1hcmtzID0gW107ICAvLyBsaW5lIGVuZCBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMudFNoaWZ0ID0gW107ICAvLyBvZmZzZXRzIG9mIHRoZSBmaXJzdCBub24tc3BhY2UgY2hhcmFjdGVycyAodGFicyBub3QgZXhwYW5kZWQpXG4gIHRoaXMuc0NvdW50ID0gW107ICAvLyBpbmRlbnRzIGZvciBlYWNoIGxpbmUgKHRhYnMgZXhwYW5kZWQpXG5cbiAgLy8gQW4gYW1vdW50IG9mIHZpcnR1YWwgc3BhY2VzICh0YWJzIGV4cGFuZGVkKSBiZXR3ZWVuIGJlZ2lubmluZ1xuICAvLyBvZiBlYWNoIGxpbmUgKGJNYXJrcykgYW5kIHJlYWwgYmVnaW5uaW5nIG9mIHRoYXQgbGluZS5cbiAgLy9cbiAgLy8gSXQgZXhpc3RzIG9ubHkgYXMgYSBoYWNrIGJlY2F1c2UgYmxvY2txdW90ZXMgb3ZlcnJpZGUgYk1hcmtzXG4gIC8vIGxvc2luZyBpbmZvcm1hdGlvbiBpbiB0aGUgcHJvY2Vzcy5cbiAgLy9cbiAgLy8gSXQncyB1c2VkIG9ubHkgd2hlbiBleHBhbmRpbmcgdGFicywgeW91IGNhbiB0aGluayBhYm91dCBpdCBhc1xuICAvLyBhbiBpbml0aWFsIHRhYiBsZW5ndGgsIGUuZy4gYnNDb3VudD0yMSBhcHBsaWVkIHRvIHN0cmluZyBgXFx0MTIzYFxuICAvLyBtZWFucyBmaXJzdCB0YWIgc2hvdWxkIGJlIGV4cGFuZGVkIHRvIDQtMjElNCA9PT0gMyBzcGFjZXMuXG4gIC8vXG4gIHRoaXMuYnNDb3VudCA9IFtdO1xuXG4gIC8vIGJsb2NrIHBhcnNlciB2YXJpYWJsZXNcbiAgdGhpcy5ibGtJbmRlbnQgID0gMDsgLy8gcmVxdWlyZWQgYmxvY2sgY29udGVudCBpbmRlbnQgKGZvciBleGFtcGxlLCBpZiB3ZSBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zaWRlIGEgbGlzdCwgaXQgd291bGQgYmUgcG9zaXRpb25lZCBhZnRlciBsaXN0IG1hcmtlcilcbiAgdGhpcy5saW5lICAgICAgID0gMDsgLy8gbGluZSBpbmRleCBpbiBzcmNcbiAgdGhpcy5saW5lTWF4ICAgID0gMDsgLy8gbGluZXMgY291bnRcbiAgdGhpcy50aWdodCAgICAgID0gZmFsc2U7ICAvLyBsb29zZS90aWdodCBtb2RlIGZvciBsaXN0c1xuICB0aGlzLmRkSW5kZW50ICAgPSAtMTsgLy8gaW5kZW50IG9mIHRoZSBjdXJyZW50IGRkIGJsb2NrICgtMSBpZiB0aGVyZSBpc24ndCBhbnkpXG4gIHRoaXMubGlzdEluZGVudCA9IC0xOyAvLyBpbmRlbnQgb2YgdGhlIGN1cnJlbnQgbGlzdCBibG9jayAoLTEgaWYgdGhlcmUgaXNuJ3QgYW55KVxuXG4gIC8vIGNhbiBiZSAnYmxvY2txdW90ZScsICdsaXN0JywgJ3Jvb3QnLCAncGFyYWdyYXBoJyBvciAncmVmZXJlbmNlJ1xuICAvLyB1c2VkIGluIGxpc3RzIHRvIGRldGVybWluZSBpZiB0aGV5IGludGVycnVwdCBhIHBhcmFncmFwaFxuICB0aGlzLnBhcmVudFR5cGUgPSAncm9vdCc7XG5cbiAgdGhpcy5sZXZlbCA9IDA7XG5cbiAgLy8gcmVuZGVyZXJcbiAgdGhpcy5yZXN1bHQgPSAnJztcblxuICAvLyBDcmVhdGUgY2FjaGVzXG4gIC8vIEdlbmVyYXRlIG1hcmtlcnMuXG4gIHMgPSB0aGlzLnNyYztcbiAgaW5kZW50X2ZvdW5kID0gZmFsc2U7XG5cbiAgZm9yIChzdGFydCA9IHBvcyA9IGluZGVudCA9IG9mZnNldCA9IDAsIGxlbiA9IHMubGVuZ3RoOyBwb3MgPCBsZW47IHBvcysrKSB7XG4gICAgY2ggPSBzLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmICghaW5kZW50X2ZvdW5kKSB7XG4gICAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgICAgaW5kZW50Kys7XG5cbiAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgb2Zmc2V0ICs9IDQgLSBvZmZzZXQgJSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZW50X2ZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2ggPT09IDB4MEEgfHwgcG9zID09PSBsZW4gLSAxKSB7XG4gICAgICBpZiAoY2ggIT09IDB4MEEpIHsgcG9zKys7IH1cbiAgICAgIHRoaXMuYk1hcmtzLnB1c2goc3RhcnQpO1xuICAgICAgdGhpcy5lTWFya3MucHVzaChwb3MpO1xuICAgICAgdGhpcy50U2hpZnQucHVzaChpbmRlbnQpO1xuICAgICAgdGhpcy5zQ291bnQucHVzaChvZmZzZXQpO1xuICAgICAgdGhpcy5ic0NvdW50LnB1c2goMCk7XG5cbiAgICAgIGluZGVudF9mb3VuZCA9IGZhbHNlO1xuICAgICAgaW5kZW50ID0gMDtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgICBzdGFydCA9IHBvcyArIDE7XG4gICAgfVxuICB9XG5cbiAgLy8gUHVzaCBmYWtlIGVudHJ5IHRvIHNpbXBsaWZ5IGNhY2hlIGJvdW5kcyBjaGVja3NcbiAgdGhpcy5iTWFya3MucHVzaChzLmxlbmd0aCk7XG4gIHRoaXMuZU1hcmtzLnB1c2gocy5sZW5ndGgpO1xuICB0aGlzLnRTaGlmdC5wdXNoKDApO1xuICB0aGlzLnNDb3VudC5wdXNoKDApO1xuICB0aGlzLmJzQ291bnQucHVzaCgwKTtcblxuICB0aGlzLmxpbmVNYXggPSB0aGlzLmJNYXJrcy5sZW5ndGggLSAxOyAvLyBkb24ndCBjb3VudCBsYXN0IGZha2UgbGluZVxufVxuXG4vLyBQdXNoIG5ldyB0b2tlbiB0byBcInN0cmVhbVwiLlxuLy9cblN0YXRlQmxvY2sucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAodHlwZSwgdGFnLCBuZXN0aW5nKSB7XG4gIHZhciB0b2tlbiA9IG5ldyBUb2tlbih0eXBlLCB0YWcsIG5lc3RpbmcpO1xuICB0b2tlbi5ibG9jayA9IHRydWU7XG5cbiAgaWYgKG5lc3RpbmcgPCAwKSB0aGlzLmxldmVsLS07IC8vIGNsb3NpbmcgdGFnXG4gIHRva2VuLmxldmVsID0gdGhpcy5sZXZlbDtcbiAgaWYgKG5lc3RpbmcgPiAwKSB0aGlzLmxldmVsKys7IC8vIG9wZW5pbmcgdGFnXG5cbiAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblN0YXRlQmxvY2sucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KGxpbmUpIHtcbiAgcmV0dXJuIHRoaXMuYk1hcmtzW2xpbmVdICsgdGhpcy50U2hpZnRbbGluZV0gPj0gdGhpcy5lTWFya3NbbGluZV07XG59O1xuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwRW1wdHlMaW5lcyA9IGZ1bmN0aW9uIHNraXBFbXB0eUxpbmVzKGZyb20pIHtcbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5saW5lTWF4OyBmcm9tIDwgbWF4OyBmcm9tKyspIHtcbiAgICBpZiAodGhpcy5iTWFya3NbZnJvbV0gKyB0aGlzLnRTaGlmdFtmcm9tXSA8IHRoaXMuZU1hcmtzW2Zyb21dKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZyb207XG59O1xuXG4vLyBTa2lwIHNwYWNlcyBmcm9tIGdpdmVuIHBvc2l0aW9uLlxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcFNwYWNlcyA9IGZ1bmN0aW9uIHNraXBTcGFjZXMocG9zKSB7XG4gIHZhciBjaDtcblxuICBmb3IgKHZhciBtYXggPSB0aGlzLnNyYy5sZW5ndGg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjaCA9IHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoIWlzU3BhY2UoY2gpKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgc3BhY2VzIGZyb20gZ2l2ZW4gcG9zaXRpb24gaW4gcmV2ZXJzZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXNCYWNrID0gZnVuY3Rpb24gc2tpcFNwYWNlc0JhY2socG9zLCBtaW4pIHtcbiAgaWYgKHBvcyA8PSBtaW4pIHsgcmV0dXJuIHBvczsgfVxuXG4gIHdoaWxlIChwb3MgPiBtaW4pIHtcbiAgICBpZiAoIWlzU3BhY2UodGhpcy5zcmMuY2hhckNvZGVBdCgtLXBvcykpKSB7IHJldHVybiBwb3MgKyAxOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgY2hhciBjb2RlcyBmcm9tIGdpdmVuIHBvc2l0aW9uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnMgPSBmdW5jdGlvbiBza2lwQ2hhcnMocG9zLCBjb2RlKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMuc3JjLmxlbmd0aDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmICh0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IGNvZGUpIHsgYnJlYWs7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gU2tpcCBjaGFyIGNvZGVzIHJldmVyc2UgZnJvbSBnaXZlbiBwb3NpdGlvbiAtIDFcblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBDaGFyc0JhY2sgPSBmdW5jdGlvbiBza2lwQ2hhcnNCYWNrKHBvcywgY29kZSwgbWluKSB7XG4gIGlmIChwb3MgPD0gbWluKSB7IHJldHVybiBwb3M7IH1cblxuICB3aGlsZSAocG9zID4gbWluKSB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuc3JjLmNoYXJDb2RlQXQoLS1wb3MpKSB7IHJldHVybiBwb3MgKyAxOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIGN1dCBsaW5lcyByYW5nZSBmcm9tIHNvdXJjZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLmdldExpbmVzID0gZnVuY3Rpb24gZ2V0TGluZXMoYmVnaW4sIGVuZCwgaW5kZW50LCBrZWVwTGFzdExGKSB7XG4gIHZhciBpLCBsaW5lSW5kZW50LCBjaCwgZmlyc3QsIGxhc3QsIHF1ZXVlLCBsaW5lU3RhcnQsXG4gICAgICBsaW5lID0gYmVnaW47XG5cbiAgaWYgKGJlZ2luID49IGVuZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHF1ZXVlID0gbmV3IEFycmF5KGVuZCAtIGJlZ2luKTtcblxuICBmb3IgKGkgPSAwOyBsaW5lIDwgZW5kOyBsaW5lKyssIGkrKykge1xuICAgIGxpbmVJbmRlbnQgPSAwO1xuICAgIGxpbmVTdGFydCA9IGZpcnN0ID0gdGhpcy5iTWFya3NbbGluZV07XG5cbiAgICBpZiAobGluZSArIDEgPCBlbmQgfHwga2VlcExhc3RMRikge1xuICAgICAgLy8gTm8gbmVlZCBmb3IgYm91bmRzIGNoZWNrIGJlY2F1c2Ugd2UgaGF2ZSBmYWtlIGVudHJ5IG9uIHRhaWwuXG4gICAgICBsYXN0ID0gdGhpcy5lTWFya3NbbGluZV0gKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gdGhpcy5lTWFya3NbbGluZV07XG4gICAgfVxuXG4gICAgd2hpbGUgKGZpcnN0IDwgbGFzdCAmJiBsaW5lSW5kZW50IDwgaW5kZW50KSB7XG4gICAgICBjaCA9IHRoaXMuc3JjLmNoYXJDb2RlQXQoZmlyc3QpO1xuXG4gICAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgbGluZUluZGVudCArPSA0IC0gKGxpbmVJbmRlbnQgKyB0aGlzLmJzQ291bnRbbGluZV0pICUgNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lSW5kZW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZmlyc3QgLSBsaW5lU3RhcnQgPCB0aGlzLnRTaGlmdFtsaW5lXSkge1xuICAgICAgICAvLyBwYXRjaGVkIHRTaGlmdCBtYXNrZWQgY2hhcmFjdGVycyB0byBsb29rIGxpa2Ugc3BhY2VzIChibG9ja3F1b3RlcywgbGlzdCBtYXJrZXJzKVxuICAgICAgICBsaW5lSW5kZW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZmlyc3QrKztcbiAgICB9XG5cbiAgICBpZiAobGluZUluZGVudCA+IGluZGVudCkge1xuICAgICAgLy8gcGFydGlhbGx5IGV4cGFuZGluZyB0YWJzIGluIGNvZGUgYmxvY2tzLCBlLmcgJ1xcdFxcdGZvb2JhcidcbiAgICAgIC8vIHdpdGggaW5kZW50PTIgYmVjb21lcyAnICBcXHRmb29iYXInXG4gICAgICBxdWV1ZVtpXSA9IG5ldyBBcnJheShsaW5lSW5kZW50IC0gaW5kZW50ICsgMSkuam9pbignICcpICsgdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZVtpXSA9IHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVldWUuam9pbignJyk7XG59O1xuXG4vLyByZS1leHBvcnQgVG9rZW4gY2xhc3MgdG8gdXNlIGluIGJsb2NrIHJ1bGVzXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5Ub2tlbiA9IFRva2VuO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVCbG9jaztcbiIsIi8vIEdGTSB0YWJsZSwgaHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vI3RhYmxlcy1leHRlbnNpb24tXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbmZ1bmN0aW9uIGdldExpbmUoc3RhdGUsIGxpbmUpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLmJNYXJrc1tsaW5lXSArIHN0YXRlLnRTaGlmdFtsaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tsaW5lXTtcblxuICByZXR1cm4gc3RhdGUuc3JjLnN1YnN0cihwb3MsIG1heCAtIHBvcyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZWRTcGxpdChzdHIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgcG9zID0gMCxcbiAgICAgIG1heCA9IHN0ci5sZW5ndGgsXG4gICAgICBjaCxcbiAgICAgIGlzRXNjYXBlZCA9IGZhbHNlLFxuICAgICAgbGFzdFBvcyA9IDAsXG4gICAgICBjdXJyZW50ID0gJyc7XG5cbiAgY2ggID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcblxuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgaWYgKGNoID09PSAweDdjLyogfCAqLykge1xuICAgICAgaWYgKCFpc0VzY2FwZWQpIHtcbiAgICAgICAgLy8gcGlwZSBzZXBhcmF0aW5nIGNlbGxzLCAnfCdcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCArIHN0ci5zdWJzdHJpbmcobGFzdFBvcywgcG9zKSk7XG4gICAgICAgIGN1cnJlbnQgPSAnJztcbiAgICAgICAgbGFzdFBvcyA9IHBvcyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2NhcGVkIHBpcGUsICdcXHwnXG4gICAgICAgIGN1cnJlbnQgKz0gc3RyLnN1YnN0cmluZyhsYXN0UG9zLCBwb3MgLSAxKTtcbiAgICAgICAgbGFzdFBvcyA9IHBvcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VzY2FwZWQgPSAoY2ggPT09IDB4NWMvKiBcXCAqLyk7XG4gICAgcG9zKys7XG5cbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gIH1cblxuICByZXN1bHQucHVzaChjdXJyZW50ICsgc3RyLnN1YnN0cmluZyhsYXN0UG9zKSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRhYmxlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIGxpbmVUZXh0LCBwb3MsIGksIGwsIG5leHRMaW5lLCBjb2x1bW5zLCBjb2x1bW5Db3VudCwgdG9rZW4sXG4gICAgICBhbGlnbnMsIHQsIHRhYmxlTGluZXMsIHRib2R5TGluZXMsIG9sZFBhcmVudFR5cGUsIHRlcm1pbmF0ZSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcywgZmlyc3RDaCwgc2Vjb25kQ2g7XG5cbiAgLy8gc2hvdWxkIGhhdmUgYXQgbGVhc3QgdHdvIGxpbmVzXG4gIGlmIChzdGFydExpbmUgKyAyID4gZW5kTGluZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBmaXJzdCBjaGFyYWN0ZXIgb2YgdGhlIHNlY29uZCBsaW5lIHNob3VsZCBiZSAnfCcsICctJywgJzonLFxuICAvLyBhbmQgbm8gb3RoZXIgY2hhcmFjdGVycyBhcmUgYWxsb3dlZCBidXQgc3BhY2VzO1xuICAvLyBiYXNpY2FsbHksIHRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgL15bLTp8XVstOnxcXHNdKiQvIHJlZ2V4cFxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICBpZiAocG9zID49IHN0YXRlLmVNYXJrc1tuZXh0TGluZV0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgZmlyc3RDaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcbiAgaWYgKGZpcnN0Q2ggIT09IDB4N0MvKiB8ICovICYmIGZpcnN0Q2ggIT09IDB4MkQvKiAtICovICYmIGZpcnN0Q2ggIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChwb3MgPj0gc3RhdGUuZU1hcmtzW25leHRMaW5lXSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzZWNvbmRDaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcbiAgaWYgKHNlY29uZENoICE9PSAweDdDLyogfCAqLyAmJiBzZWNvbmRDaCAhPT0gMHgyRC8qIC0gKi8gJiYgc2Vjb25kQ2ggIT09IDB4M0EvKiA6ICovICYmICFpc1NwYWNlKHNlY29uZENoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlmIGZpcnN0IGNoYXJhY3RlciBpcyAnLScsIHRoZW4gc2Vjb25kIGNoYXJhY3RlciBtdXN0IG5vdCBiZSBhIHNwYWNlXG4gIC8vIChkdWUgdG8gcGFyc2luZyBhbWJpZ3VpdHkgd2l0aCBsaXN0KVxuICBpZiAoZmlyc3RDaCA9PT0gMHgyRC8qIC0gKi8gJiYgaXNTcGFjZShzZWNvbmRDaCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgd2hpbGUgKHBvcyA8IHN0YXRlLmVNYXJrc1tuZXh0TGluZV0pIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY2ggIT09IDB4N0MvKiB8ICovICYmIGNoICE9PSAweDJELyogLSAqLyAmJiBjaCAhPT0gMHgzQS8qIDogKi8gJiYgIWlzU3BhY2UoY2gpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgcG9zKys7XG4gIH1cblxuICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIHN0YXJ0TGluZSArIDEpO1xuXG4gIGNvbHVtbnMgPSBsaW5lVGV4dC5zcGxpdCgnfCcpO1xuICBhbGlnbnMgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICB0ID0gY29sdW1uc1tpXS50cmltKCk7XG4gICAgaWYgKCF0KSB7XG4gICAgICAvLyBhbGxvdyBlbXB0eSBjb2x1bW5zIGJlZm9yZSBhbmQgYWZ0ZXIgdGFibGUsIGJ1dCBub3QgaW4gYmV0d2VlbiBjb2x1bW5zO1xuICAgICAgLy8gZS5nLiBhbGxvdyBgIHwtLS18IGAsIGRpc2FsbG93IGAgLS0tfHwtLS0gYFxuICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghL146Py0rOj8kLy50ZXN0KHQpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICh0LmNoYXJDb2RlQXQodC5sZW5ndGggLSAxKSA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGFsaWducy5wdXNoKHQuY2hhckNvZGVBdCgwKSA9PT0gMHgzQS8qIDogKi8gPyAnY2VudGVyJyA6ICdyaWdodCcpO1xuICAgIH0gZWxzZSBpZiAodC5jaGFyQ29kZUF0KDApID09PSAweDNBLyogOiAqLykge1xuICAgICAgYWxpZ25zLnB1c2goJ2xlZnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxpZ25zLnB1c2goJycpO1xuICAgIH1cbiAgfVxuXG4gIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgc3RhcnRMaW5lKS50cmltKCk7XG4gIGlmIChsaW5lVGV4dC5pbmRleE9mKCd8JykgPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29sdW1ucyA9IGVzY2FwZWRTcGxpdChsaW5lVGV4dCk7XG4gIGlmIChjb2x1bW5zLmxlbmd0aCAmJiBjb2x1bW5zWzBdID09PSAnJykgY29sdW1ucy5zaGlmdCgpO1xuICBpZiAoY29sdW1ucy5sZW5ndGggJiYgY29sdW1uc1tjb2x1bW5zLmxlbmd0aCAtIDFdID09PSAnJykgY29sdW1ucy5wb3AoKTtcblxuICAvLyBoZWFkZXIgcm93IHdpbGwgZGVmaW5lIGFuIGFtb3VudCBvZiBjb2x1bW5zIGluIHRoZSBlbnRpcmUgdGFibGUsXG4gIC8vIGFuZCBhbGlnbiByb3cgc2hvdWxkIGJlIGV4YWN0bHkgdGhlIHNhbWUgKHRoZSByZXN0IG9mIHRoZSByb3dzIGNhbiBkaWZmZXIpXG4gIGNvbHVtbkNvdW50ID0gY29sdW1ucy5sZW5ndGg7XG4gIGlmIChjb2x1bW5Db3VudCA9PT0gMCB8fCBjb2x1bW5Db3VudCAhPT0gYWxpZ25zLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAndGFibGUnO1xuXG4gIC8vIHVzZSAnYmxvY2txdW90ZScgbGlzdHMgZm9yIHRlcm1pbmF0aW9uIGJlY2F1c2UgaXQnc1xuICAvLyB0aGUgbW9zdCBzaW1pbGFyIHRvIHRhYmxlc1xuICB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5tZC5ibG9jay5ydWxlci5nZXRSdWxlcygnYmxvY2txdW90ZScpO1xuXG4gIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3RhYmxlX29wZW4nLCAndGFibGUnLCAxKTtcbiAgdG9rZW4ubWFwID0gdGFibGVMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF07XG5cbiAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndGhlYWRfb3BlbicsICd0aGVhZCcsIDEpO1xuICB0b2tlbi5tYXAgPSBbIHN0YXJ0TGluZSwgc3RhcnRMaW5lICsgMSBdO1xuXG4gIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3RyX29wZW4nLCAndHInLCAxKTtcbiAgdG9rZW4ubWFwID0gWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgndGhfb3BlbicsICd0aCcsIDEpO1xuICAgIGlmIChhbGlnbnNbaV0pIHtcbiAgICAgIHRva2VuLmF0dHJzICA9IFsgWyAnc3R5bGUnLCAndGV4dC1hbGlnbjonICsgYWxpZ25zW2ldIF0gXTtcbiAgICB9XG5cbiAgICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ICA9IGNvbHVtbnNbaV0udHJpbSgpO1xuICAgIHRva2VuLmNoaWxkcmVuID0gW107XG5cbiAgICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ3RoX2Nsb3NlJywgJ3RoJywgLTEpO1xuICB9XG5cbiAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndHJfY2xvc2UnLCAndHInLCAtMSk7XG4gIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3RoZWFkX2Nsb3NlJywgJ3RoZWFkJywgLTEpO1xuXG4gIGZvciAobmV4dExpbmUgPSBzdGFydExpbmUgKyAyOyBuZXh0TGluZSA8IGVuZExpbmU7IG5leHRMaW5lKyspIHtcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG4gICAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBuZXh0TGluZSkudHJpbSgpO1xuICAgIGlmICghbGluZVRleHQpIHsgYnJlYWs7IH1cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IGJyZWFrOyB9XG4gICAgY29sdW1ucyA9IGVzY2FwZWRTcGxpdChsaW5lVGV4dCk7XG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoICYmIGNvbHVtbnNbMF0gPT09ICcnKSBjb2x1bW5zLnNoaWZ0KCk7XG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoICYmIGNvbHVtbnNbY29sdW1ucy5sZW5ndGggLSAxXSA9PT0gJycpIGNvbHVtbnMucG9wKCk7XG5cbiAgICBpZiAobmV4dExpbmUgPT09IHN0YXJ0TGluZSArIDIpIHtcbiAgICAgIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3Rib2R5X29wZW4nLCAndGJvZHknLCAxKTtcbiAgICAgIHRva2VuLm1hcCA9IHRib2R5TGluZXMgPSBbIHN0YXJ0TGluZSArIDIsIDAgXTtcbiAgICB9XG5cbiAgICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0cl9vcGVuJywgJ3RyJywgMSk7XG4gICAgdG9rZW4ubWFwID0gWyBuZXh0TGluZSwgbmV4dExpbmUgKyAxIF07XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZF9vcGVuJywgJ3RkJywgMSk7XG4gICAgICBpZiAoYWxpZ25zW2ldKSB7XG4gICAgICAgIHRva2VuLmF0dHJzICA9IFsgWyAnc3R5bGUnLCAndGV4dC1hbGlnbjonICsgYWxpZ25zW2ldIF0gXTtcbiAgICAgIH1cblxuICAgICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbmxpbmUnLCAnJywgMCk7XG4gICAgICB0b2tlbi5jb250ZW50ICA9IGNvbHVtbnNbaV0gPyBjb2x1bW5zW2ldLnRyaW0oKSA6ICcnO1xuICAgICAgdG9rZW4uY2hpbGRyZW4gPSBbXTtcblxuICAgICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZF9jbG9zZScsICd0ZCcsIC0xKTtcbiAgICB9XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCd0cl9jbG9zZScsICd0cicsIC0xKTtcbiAgfVxuXG4gIGlmICh0Ym9keUxpbmVzKSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCd0Ym9keV9jbG9zZScsICd0Ym9keScsIC0xKTtcbiAgICB0Ym9keUxpbmVzWzFdID0gbmV4dExpbmU7XG4gIH1cblxuICB0b2tlbiA9IHN0YXRlLnB1c2goJ3RhYmxlX2Nsb3NlJywgJ3RhYmxlJywgLTEpO1xuICB0YWJsZUxpbmVzWzFdID0gbmV4dExpbmU7XG5cbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmxvY2soc3RhdGUpIHtcbiAgdmFyIHRva2VuO1xuXG4gIGlmIChzdGF0ZS5pbmxpbmVNb2RlKSB7XG4gICAgdG9rZW4gICAgICAgICAgPSBuZXcgc3RhdGUuVG9rZW4oJ2lubGluZScsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ICA9IHN0YXRlLnNyYztcbiAgICB0b2tlbi5tYXAgICAgICA9IFsgMCwgMSBdO1xuICAgIHRva2VuLmNoaWxkcmVuID0gW107XG4gICAgc3RhdGUudG9rZW5zLnB1c2godG9rZW4pO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLm1kLmJsb2NrLnBhcnNlKHN0YXRlLnNyYywgc3RhdGUubWQsIHN0YXRlLmVudiwgc3RhdGUudG9rZW5zKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmxpbmUoc3RhdGUpIHtcbiAgdmFyIHRva2VucyA9IHN0YXRlLnRva2VucywgdG9rLCBpLCBsO1xuXG4gIC8vIFBhcnNlIGlubGluZXNcbiAgZm9yIChpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0b2sgPSB0b2tlbnNbaV07XG4gICAgaWYgKHRvay50eXBlID09PSAnaW5saW5lJykge1xuICAgICAgc3RhdGUubWQuaW5saW5lLnBhcnNlKHRvay5jb250ZW50LCBzdGF0ZS5tZCwgc3RhdGUuZW52LCB0b2suY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIFJlcGxhY2UgbGluay1saWtlIHRleHRzIHdpdGggbGluayBub2Rlcy5cbi8vXG4vLyBDdXJyZW50bHkgcmVzdHJpY3RlZCBieSBgbWQudmFsaWRhdGVMaW5rKClgIHRvIGh0dHAvaHR0cHMvZnRwXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBhcnJheVJlcGxhY2VBdCA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmFycmF5UmVwbGFjZUF0O1xuXG5cbmZ1bmN0aW9uIGlzTGlua09wZW4oc3RyKSB7XG4gIHJldHVybiAvXjxhWz5cXHNdL2kudGVzdChzdHIpO1xufVxuZnVuY3Rpb24gaXNMaW5rQ2xvc2Uoc3RyKSB7XG4gIHJldHVybiAvXjxcXC9hXFxzKj4vaS50ZXN0KHN0cik7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaW5raWZ5KHN0YXRlKSB7XG4gIHZhciBpLCBqLCBsLCB0b2tlbnMsIHRva2VuLCBjdXJyZW50VG9rZW4sIG5vZGVzLCBsbiwgdGV4dCwgcG9zLCBsYXN0UG9zLFxuICAgICAgbGV2ZWwsIGh0bWxMaW5rTGV2ZWwsIHVybCwgZnVsbFVybCwgdXJsVGV4dCxcbiAgICAgIGJsb2NrVG9rZW5zID0gc3RhdGUudG9rZW5zLFxuICAgICAgbGlua3M7XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLmxpbmtpZnkpIHsgcmV0dXJuOyB9XG5cbiAgZm9yIChqID0gMCwgbCA9IGJsb2NrVG9rZW5zLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgIGlmIChibG9ja1Rva2Vuc1tqXS50eXBlICE9PSAnaW5saW5lJyB8fFxuICAgICAgICAhc3RhdGUubWQubGlua2lmeS5wcmV0ZXN0KGJsb2NrVG9rZW5zW2pdLmNvbnRlbnQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlbjtcblxuICAgIGh0bWxMaW5rTGV2ZWwgPSAwO1xuXG4gICAgLy8gV2Ugc2NhbiBmcm9tIHRoZSBlbmQsIHRvIGtlZXAgcG9zaXRpb24gd2hlbiBuZXcgdGFncyBhZGRlZC5cbiAgICAvLyBVc2UgcmV2ZXJzZWQgbG9naWMgaW4gbGlua3Mgc3RhcnQvZW5kIG1hdGNoXG4gICAgZm9yIChpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjdXJyZW50VG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIC8vIFNraXAgY29udGVudCBvZiBtYXJrZG93biBsaW5rc1xuICAgICAgaWYgKGN1cnJlbnRUb2tlbi50eXBlID09PSAnbGlua19jbG9zZScpIHtcbiAgICAgICAgaS0tO1xuICAgICAgICB3aGlsZSAodG9rZW5zW2ldLmxldmVsICE9PSBjdXJyZW50VG9rZW4ubGV2ZWwgJiYgdG9rZW5zW2ldLnR5cGUgIT09ICdsaW5rX29wZW4nKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIGNvbnRlbnQgb2YgaHRtbCB0YWcgbGlua3NcbiAgICAgIGlmIChjdXJyZW50VG9rZW4udHlwZSA9PT0gJ2h0bWxfaW5saW5lJykge1xuICAgICAgICBpZiAoaXNMaW5rT3BlbihjdXJyZW50VG9rZW4uY29udGVudCkgJiYgaHRtbExpbmtMZXZlbCA+IDApIHtcbiAgICAgICAgICBodG1sTGlua0xldmVsLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGlua0Nsb3NlKGN1cnJlbnRUb2tlbi5jb250ZW50KSkge1xuICAgICAgICAgIGh0bWxMaW5rTGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGh0bWxMaW5rTGV2ZWwgPiAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIGlmIChjdXJyZW50VG9rZW4udHlwZSA9PT0gJ3RleHQnICYmIHN0YXRlLm1kLmxpbmtpZnkudGVzdChjdXJyZW50VG9rZW4uY29udGVudCkpIHtcblxuICAgICAgICB0ZXh0ID0gY3VycmVudFRva2VuLmNvbnRlbnQ7XG4gICAgICAgIGxpbmtzID0gc3RhdGUubWQubGlua2lmeS5tYXRjaCh0ZXh0KTtcblxuICAgICAgICAvLyBOb3cgc3BsaXQgc3RyaW5nIHRvIG5vZGVzXG4gICAgICAgIG5vZGVzID0gW107XG4gICAgICAgIGxldmVsID0gY3VycmVudFRva2VuLmxldmVsO1xuICAgICAgICBsYXN0UG9zID0gMDtcblxuICAgICAgICBmb3IgKGxuID0gMDsgbG4gPCBsaW5rcy5sZW5ndGg7IGxuKyspIHtcblxuICAgICAgICAgIHVybCA9IGxpbmtzW2xuXS51cmw7XG4gICAgICAgICAgZnVsbFVybCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsodXJsKTtcbiAgICAgICAgICBpZiAoIXN0YXRlLm1kLnZhbGlkYXRlTGluayhmdWxsVXJsKSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgdXJsVGV4dCA9IGxpbmtzW2xuXS50ZXh0O1xuXG4gICAgICAgICAgLy8gTGlua2lmaWVyIG1pZ2h0IHNlbmQgcmF3IGhvc3RuYW1lcyBsaWtlIFwiZXhhbXBsZS5jb21cIiwgd2hlcmUgdXJsXG4gICAgICAgICAgLy8gc3RhcnRzIHdpdGggZG9tYWluIG5hbWUuIFNvIHdlIHByZXBlbmQgaHR0cDovLyBpbiB0aG9zZSBjYXNlcyxcbiAgICAgICAgICAvLyBhbmQgcmVtb3ZlIGl0IGFmdGVyd2FyZHMuXG4gICAgICAgICAgLy9cbiAgICAgICAgICBpZiAoIWxpbmtzW2xuXS5zY2hlbWEpIHtcbiAgICAgICAgICAgIHVybFRleHQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCgnaHR0cDovLycgKyB1cmxUZXh0KS5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vLCAnJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5rc1tsbl0uc2NoZW1hID09PSAnbWFpbHRvOicgJiYgIS9ebWFpbHRvOi9pLnRlc3QodXJsVGV4dCkpIHtcbiAgICAgICAgICAgIHVybFRleHQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCgnbWFpbHRvOicgKyB1cmxUZXh0KS5yZXBsYWNlKC9ebWFpbHRvOi8sICcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsVGV4dCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmtUZXh0KHVybFRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBvcyA9IGxpbmtzW2xuXS5pbmRleDtcblxuICAgICAgICAgIGlmIChwb3MgPiBsYXN0UG9zKSB7XG4gICAgICAgICAgICB0b2tlbiAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApO1xuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHRleHQuc2xpY2UobGFzdFBvcywgcG9zKTtcbiAgICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbDtcbiAgICAgICAgICAgIG5vZGVzLnB1c2godG9rZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2VuICAgICAgICAgPSBuZXcgc3RhdGUuVG9rZW4oJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgICAgICAgdG9rZW4uYXR0cnMgICA9IFsgWyAnaHJlZicsIGZ1bGxVcmwgXSBdO1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbCsrO1xuICAgICAgICAgIHRva2VuLm1hcmt1cCAgPSAnbGlua2lmeSc7XG4gICAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcblxuICAgICAgICAgIHRva2VuICAgICAgICAgPSBuZXcgc3RhdGUuVG9rZW4oJ3RleHQnLCAnJywgMCk7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHVybFRleHQ7XG4gICAgICAgICAgdG9rZW4ubGV2ZWwgICA9IGxldmVsO1xuICAgICAgICAgIG5vZGVzLnB1c2godG9rZW4pO1xuXG4gICAgICAgICAgdG9rZW4gICAgICAgICA9IG5ldyBzdGF0ZS5Ub2tlbignbGlua19jbG9zZScsICdhJywgLTEpO1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSAtLWxldmVsO1xuICAgICAgICAgIHRva2VuLm1hcmt1cCAgPSAnbGlua2lmeSc7XG4gICAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcblxuICAgICAgICAgIGxhc3RQb3MgPSBsaW5rc1tsbl0ubGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0UG9zIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICB0b2tlbiAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApO1xuICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSB0ZXh0LnNsaWNlKGxhc3RQb3MpO1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbDtcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBub2RlXG4gICAgICAgIGJsb2NrVG9rZW5zW2pdLmNoaWxkcmVuID0gdG9rZW5zID0gYXJyYXlSZXBsYWNlQXQodG9rZW5zLCBpLCBub2Rlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiLy8gTm9ybWFsaXplIGlucHV0IHN0cmluZ1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gaHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2xpbmUtZW5kaW5nXG52YXIgTkVXTElORVNfUkUgID0gL1xcclxcbj98XFxuL2c7XG52YXIgTlVMTF9SRSAgICAgID0gL1xcMC9nO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplKHN0YXRlKSB7XG4gIHZhciBzdHI7XG5cbiAgLy8gTm9ybWFsaXplIG5ld2xpbmVzXG4gIHN0ciA9IHN0YXRlLnNyYy5yZXBsYWNlKE5FV0xJTkVTX1JFLCAnXFxuJyk7XG5cbiAgLy8gUmVwbGFjZSBOVUxMIGNoYXJhY3RlcnNcbiAgc3RyID0gc3RyLnJlcGxhY2UoTlVMTF9SRSwgJ1xcdUZGRkQnKTtcblxuICBzdGF0ZS5zcmMgPSBzdHI7XG59O1xuIiwiLy8gU2ltcGxlIHR5cG9ncmFwaGljIHJlcGxhY2VtZW50c1xuLy9cbi8vIChjKSAoQykg4oaSIMKpXG4vLyAodG0pIChUTSkg4oaSIOKEolxuLy8gKHIpIChSKSDihpIgwq5cbi8vICstIOKGkiDCsVxuLy8gKHApIChQKSAtPiDCp1xuLy8gLi4uIOKGkiDigKYgKGFsc28gPy4uLi4g4oaSID8uLiwgIS4uLi4g4oaSICEuLilcbi8vID8/Pz8/Pz8/IOKGkiA/Pz8sICEhISEhIOKGkiAhISEsIGAsLGAg4oaSIGAsYFxuLy8gLS0g4oaSICZuZGFzaDssIC0tLSDihpIgJm1kYXNoO1xuLy9cbid1c2Ugc3RyaWN0JztcblxuLy8gVE9ETzpcbi8vIC0gZnJhY3Rpb25hbHMgMS8yLCAxLzQsIDMvNCAtPiDCvSwgwrwsIMK+XG4vLyAtIG1pbHRpcGxpY2F0aW9uIDIgeCA0IC0+IDIgw5cgNFxuXG52YXIgUkFSRV9SRSA9IC9cXCstfFxcLlxcLnxcXD9cXD9cXD9cXD98ISEhIXwsLHwtLS87XG5cbi8vIFdvcmthcm91bmQgZm9yIHBoYW50b21qcyAtIG5lZWQgcmVnZXggd2l0aG91dCAvZyBmbGFnLFxuLy8gb3Igcm9vdCBjaGVjayB3aWxsIGZhaWwgZXZlcnkgc2Vjb25kIHRpbWVcbnZhciBTQ09QRURfQUJCUl9URVNUX1JFID0gL1xcKChjfHRtfHJ8cClcXCkvaTtcblxudmFyIFNDT1BFRF9BQkJSX1JFID0gL1xcKChjfHRtfHJ8cClcXCkvaWc7XG52YXIgU0NPUEVEX0FCQlIgPSB7XG4gIGM6ICfCqScsXG4gIHI6ICfCricsXG4gIHA6ICfCpycsXG4gIHRtOiAn4oSiJ1xufTtcblxuZnVuY3Rpb24gcmVwbGFjZUZuKG1hdGNoLCBuYW1lKSB7XG4gIHJldHVybiBTQ09QRURfQUJCUltuYW1lLnRvTG93ZXJDYXNlKCldO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlX3Njb3BlZChpbmxpbmVUb2tlbnMpIHtcbiAgdmFyIGksIHRva2VuLCBpbnNpZGVfYXV0b2xpbmsgPSAwO1xuXG4gIGZvciAoaSA9IGlubGluZVRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHRva2VuID0gaW5saW5lVG9rZW5zW2ldO1xuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiAhaW5zaWRlX2F1dG9saW5rKSB7XG4gICAgICB0b2tlbi5jb250ZW50ID0gdG9rZW4uY29udGVudC5yZXBsYWNlKFNDT1BFRF9BQkJSX1JFLCByZXBsYWNlRm4pO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19vcGVuJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluay0tO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19jbG9zZScgJiYgdG9rZW4uaW5mbyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpbnNpZGVfYXV0b2xpbmsrKztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZV9yYXJlKGlubGluZVRva2Vucykge1xuICB2YXIgaSwgdG9rZW4sIGluc2lkZV9hdXRvbGluayA9IDA7XG5cbiAgZm9yIChpID0gaW5saW5lVG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdG9rZW4gPSBpbmxpbmVUb2tlbnNbaV07XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RleHQnICYmICFpbnNpZGVfYXV0b2xpbmspIHtcbiAgICAgIGlmIChSQVJFX1JFLnRlc3QodG9rZW4uY29udGVudCkpIHtcbiAgICAgICAgdG9rZW4uY29udGVudCA9IHRva2VuLmNvbnRlbnRcbiAgICAgICAgICAucmVwbGFjZSgvXFwrLS9nLCAnwrEnKVxuICAgICAgICAgIC8vIC4uLCAuLi4sIC4uLi4uLi4gLT4g4oCmXG4gICAgICAgICAgLy8gYnV0ID8uLi4uLiAmICEuLi4uLiAtPiA/Li4gJiAhLi5cbiAgICAgICAgICAucmVwbGFjZSgvXFwuezIsfS9nLCAn4oCmJykucmVwbGFjZSgvKFs/IV0p4oCmL2csICckMS4uJylcbiAgICAgICAgICAucmVwbGFjZSgvKFs/IV0pezQsfS9nLCAnJDEkMSQxJykucmVwbGFjZSgvLHsyLH0vZywgJywnKVxuICAgICAgICAgIC8vIGVtLWRhc2hcbiAgICAgICAgICAucmVwbGFjZSgvKF58W14tXSktLS0oPz1bXi1dfCQpL21nLCAnJDFcXHUyMDE0JylcbiAgICAgICAgICAvLyBlbi1kYXNoXG4gICAgICAgICAgLnJlcGxhY2UoLyhefFxccyktLSg/PVxcc3wkKS9tZywgJyQxXFx1MjAxMycpXG4gICAgICAgICAgLnJlcGxhY2UoLyhefFteLVxcc10pLS0oPz1bXi1cXHNdfCQpL21nLCAnJDFcXHUyMDEzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX29wZW4nICYmIHRva2VuLmluZm8gPT09ICdhdXRvJykge1xuICAgICAgaW5zaWRlX2F1dG9saW5rLS07XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX2Nsb3NlJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluaysrO1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICB2YXIgYmxrSWR4O1xuXG4gIGlmICghc3RhdGUubWQub3B0aW9ucy50eXBvZ3JhcGhlcikgeyByZXR1cm47IH1cblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKFNDT1BFRF9BQkJSX1RFU1RfUkUudGVzdChzdGF0ZS50b2tlbnNbYmxrSWR4XS5jb250ZW50KSkge1xuICAgICAgcmVwbGFjZV9zY29wZWQoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGlmIChSQVJFX1JFLnRlc3Qoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY29udGVudCkpIHtcbiAgICAgIHJlcGxhY2VfcmFyZShzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbik7XG4gICAgfVxuXG4gIH1cbn07XG4iLCIvLyBDb252ZXJ0IHN0cmFpZ2h0IHF1b3RhdGlvbiBtYXJrcyB0byB0eXBvZ3JhcGhpYyBvbmVzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBpc1doaXRlU3BhY2UgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzV2hpdGVTcGFjZTtcbnZhciBpc1B1bmN0Q2hhciAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzUHVuY3RDaGFyO1xudmFyIGlzTWRBc2NpaVB1bmN0ID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNNZEFzY2lpUHVuY3Q7XG5cbnZhciBRVU9URV9URVNUX1JFID0gL1snXCJdLztcbnZhciBRVU9URV9SRSA9IC9bJ1wiXS9nO1xudmFyIEFQT1NUUk9QSEUgPSAnXFx1MjAxOSc7IC8qIOKAmSAqL1xuXG5cbmZ1bmN0aW9uIHJlcGxhY2VBdChzdHIsIGluZGV4LCBjaCkge1xuICByZXR1cm4gc3RyLnN1YnN0cigwLCBpbmRleCkgKyBjaCArIHN0ci5zdWJzdHIoaW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc19pbmxpbmVzKHRva2Vucywgc3RhdGUpIHtcbiAgdmFyIGksIHRva2VuLCB0ZXh0LCB0LCBwb3MsIG1heCwgdGhpc0xldmVsLCBpdGVtLCBsYXN0Q2hhciwgbmV4dENoYXIsXG4gICAgICBpc0xhc3RQdW5jdENoYXIsIGlzTmV4dFB1bmN0Q2hhciwgaXNMYXN0V2hpdGVTcGFjZSwgaXNOZXh0V2hpdGVTcGFjZSxcbiAgICAgIGNhbk9wZW4sIGNhbkNsb3NlLCBqLCBpc1NpbmdsZSwgc3RhY2ssIG9wZW5RdW90ZSwgY2xvc2VRdW90ZTtcblxuICBzdGFjayA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIHRoaXNMZXZlbCA9IHRva2Vuc1tpXS5sZXZlbDtcblxuICAgIGZvciAoaiA9IHN0YWNrLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICBpZiAoc3RhY2tbal0ubGV2ZWwgPD0gdGhpc0xldmVsKSB7IGJyZWFrOyB9XG4gICAgfVxuICAgIHN0YWNrLmxlbmd0aCA9IGogKyAxO1xuXG4gICAgaWYgKHRva2VuLnR5cGUgIT09ICd0ZXh0JykgeyBjb250aW51ZTsgfVxuXG4gICAgdGV4dCA9IHRva2VuLmNvbnRlbnQ7XG4gICAgcG9zID0gMDtcbiAgICBtYXggPSB0ZXh0Lmxlbmd0aDtcblxuICAgIC8qZXNsaW50IG5vLWxhYmVsczowLGJsb2NrLXNjb3BlZC12YXI6MCovXG4gICAgT1VURVI6XG4gICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgUVVPVEVfUkUubGFzdEluZGV4ID0gcG9zO1xuICAgICAgdCA9IFFVT1RFX1JFLmV4ZWModGV4dCk7XG4gICAgICBpZiAoIXQpIHsgYnJlYWs7IH1cblxuICAgICAgY2FuT3BlbiA9IGNhbkNsb3NlID0gdHJ1ZTtcbiAgICAgIHBvcyA9IHQuaW5kZXggKyAxO1xuICAgICAgaXNTaW5nbGUgPSAodFswXSA9PT0gXCInXCIpO1xuXG4gICAgICAvLyBGaW5kIHByZXZpb3VzIGNoYXJhY3RlcixcbiAgICAgIC8vIGRlZmF1bHQgdG8gc3BhY2UgaWYgaXQncyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lXG4gICAgICAvL1xuICAgICAgbGFzdENoYXIgPSAweDIwO1xuXG4gICAgICBpZiAodC5pbmRleCAtIDEgPj0gMCkge1xuICAgICAgICBsYXN0Q2hhciA9IHRleHQuY2hhckNvZGVBdCh0LmluZGV4IC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGogPSBpIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICBpZiAodG9rZW5zW2pdLnR5cGUgPT09ICdzb2Z0YnJlYWsnIHx8IHRva2Vuc1tqXS50eXBlID09PSAnaGFyZGJyZWFrJykgYnJlYWs7IC8vIGxhc3RDaGFyIGRlZmF1bHRzIHRvIDB4MjBcbiAgICAgICAgICBpZiAoIXRva2Vuc1tqXS5jb250ZW50KSBjb250aW51ZTsgLy8gc2hvdWxkIHNraXAgYWxsIHRva2VucyBleGNlcHQgJ3RleHQnLCAnaHRtbF9pbmxpbmUnIG9yICdjb2RlX2lubGluZSdcblxuICAgICAgICAgIGxhc3RDaGFyID0gdG9rZW5zW2pdLmNvbnRlbnQuY2hhckNvZGVBdCh0b2tlbnNbal0uY29udGVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG5leHQgY2hhcmFjdGVyLFxuICAgICAgLy8gZGVmYXVsdCB0byBzcGFjZSBpZiBpdCdzIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgIC8vXG4gICAgICBuZXh0Q2hhciA9IDB4MjA7XG5cbiAgICAgIGlmIChwb3MgPCBtYXgpIHtcbiAgICAgICAgbmV4dENoYXIgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgdG9rZW5zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRva2Vuc1tqXS50eXBlID09PSAnc29mdGJyZWFrJyB8fCB0b2tlbnNbal0udHlwZSA9PT0gJ2hhcmRicmVhaycpIGJyZWFrOyAvLyBuZXh0Q2hhciBkZWZhdWx0cyB0byAweDIwXG4gICAgICAgICAgaWYgKCF0b2tlbnNbal0uY29udGVudCkgY29udGludWU7IC8vIHNob3VsZCBza2lwIGFsbCB0b2tlbnMgZXhjZXB0ICd0ZXh0JywgJ2h0bWxfaW5saW5lJyBvciAnY29kZV9pbmxpbmUnXG5cbiAgICAgICAgICBuZXh0Q2hhciA9IHRva2Vuc1tqXS5jb250ZW50LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXNMYXN0UHVuY3RDaGFyID0gaXNNZEFzY2lpUHVuY3QobGFzdENoYXIpIHx8IGlzUHVuY3RDaGFyKFN0cmluZy5mcm9tQ2hhckNvZGUobGFzdENoYXIpKTtcbiAgICAgIGlzTmV4dFB1bmN0Q2hhciA9IGlzTWRBc2NpaVB1bmN0KG5leHRDaGFyKSB8fCBpc1B1bmN0Q2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyKSk7XG5cbiAgICAgIGlzTGFzdFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobGFzdENoYXIpO1xuICAgICAgaXNOZXh0V2hpdGVTcGFjZSA9IGlzV2hpdGVTcGFjZShuZXh0Q2hhcik7XG5cbiAgICAgIGlmIChpc05leHRXaGl0ZVNwYWNlKSB7XG4gICAgICAgIGNhbk9wZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOZXh0UHVuY3RDaGFyKSB7XG4gICAgICAgIGlmICghKGlzTGFzdFdoaXRlU3BhY2UgfHwgaXNMYXN0UHVuY3RDaGFyKSkge1xuICAgICAgICAgIGNhbk9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNMYXN0V2hpdGVTcGFjZSkge1xuICAgICAgICBjYW5DbG9zZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpc0xhc3RQdW5jdENoYXIpIHtcbiAgICAgICAgaWYgKCEoaXNOZXh0V2hpdGVTcGFjZSB8fCBpc05leHRQdW5jdENoYXIpKSB7XG4gICAgICAgICAgY2FuQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV4dENoYXIgPT09IDB4MjIgLyogXCIgKi8gJiYgdFswXSA9PT0gJ1wiJykge1xuICAgICAgICBpZiAobGFzdENoYXIgPj0gMHgzMCAvKiAwICovICYmIGxhc3RDaGFyIDw9IDB4MzkgLyogOSAqLykge1xuICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogMVwiXCIgLSBjb3VudCBmaXJzdCBxdW90ZSBhcyBhbiBpbmNoXG4gICAgICAgICAgY2FuQ2xvc2UgPSBjYW5PcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhbk9wZW4gJiYgY2FuQ2xvc2UpIHtcbiAgICAgICAgLy8gUmVwbGFjZSBxdW90ZXMgaW4gdGhlIG1pZGRsZSBvZiBwdW5jdHVhdGlvbiBzZXF1ZW5jZSwgYnV0IG5vdFxuICAgICAgICAvLyBpbiB0aGUgbWlkZGxlIG9mIHRoZSB3b3JkcywgaS5lLjpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMS4gZm9vIFwiIGJhciBcIiBiYXogLSBub3QgcmVwbGFjZWRcbiAgICAgICAgLy8gMi4gZm9vLVwiLWJhci1cIi1iYXogLSByZXBsYWNlZFxuICAgICAgICAvLyAzLiBmb29cImJhclwiYmF6ICAgICAtIG5vdCByZXBsYWNlZFxuICAgICAgICAvL1xuICAgICAgICBjYW5PcGVuID0gaXNMYXN0UHVuY3RDaGFyO1xuICAgICAgICBjYW5DbG9zZSA9IGlzTmV4dFB1bmN0Q2hhcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYW5PcGVuICYmICFjYW5DbG9zZSkge1xuICAgICAgICAvLyBtaWRkbGUgb2Ygd29yZFxuICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIEFQT1NUUk9QSEUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FuQ2xvc2UpIHtcbiAgICAgICAgLy8gdGhpcyBjb3VsZCBiZSBhIGNsb3NpbmcgcXVvdGUsIHJld2luZCB0aGUgc3RhY2sgdG8gZ2V0IGEgbWF0Y2hcbiAgICAgICAgZm9yIChqID0gc3RhY2subGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICBpdGVtID0gc3RhY2tbal07XG4gICAgICAgICAgaWYgKHN0YWNrW2pdLmxldmVsIDwgdGhpc0xldmVsKSB7IGJyZWFrOyB9XG4gICAgICAgICAgaWYgKGl0ZW0uc2luZ2xlID09PSBpc1NpbmdsZSAmJiBzdGFja1tqXS5sZXZlbCA9PT0gdGhpc0xldmVsKSB7XG4gICAgICAgICAgICBpdGVtID0gc3RhY2tbal07XG5cbiAgICAgICAgICAgIGlmIChpc1NpbmdsZSkge1xuICAgICAgICAgICAgICBvcGVuUXVvdGUgPSBzdGF0ZS5tZC5vcHRpb25zLnF1b3Rlc1syXTtcbiAgICAgICAgICAgICAgY2xvc2VRdW90ZSA9IHN0YXRlLm1kLm9wdGlvbnMucXVvdGVzWzNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3BlblF1b3RlID0gc3RhdGUubWQub3B0aW9ucy5xdW90ZXNbMF07XG4gICAgICAgICAgICAgIGNsb3NlUXVvdGUgPSBzdGF0ZS5tZC5vcHRpb25zLnF1b3Rlc1sxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0b2tlbi5jb250ZW50ICpiZWZvcmUqIHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50LFxuICAgICAgICAgICAgLy8gYmVjYXVzZSwgaWYgdGhleSBhcmUgcG9pbnRpbmcgYXQgdGhlIHNhbWUgdG9rZW4sIHJlcGxhY2VBdFxuICAgICAgICAgICAgLy8gY291bGQgbWVzcyB1cCBpbmRpY2VzIHdoZW4gcXVvdGUgbGVuZ3RoICE9IDFcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgY2xvc2VRdW90ZSk7XG4gICAgICAgICAgICB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCA9IHJlcGxhY2VBdChcbiAgICAgICAgICAgICAgdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQsIGl0ZW0ucG9zLCBvcGVuUXVvdGUpO1xuXG4gICAgICAgICAgICBwb3MgKz0gY2xvc2VRdW90ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKGl0ZW0udG9rZW4gPT09IGkpIHsgcG9zICs9IG9wZW5RdW90ZS5sZW5ndGggLSAxOyB9XG5cbiAgICAgICAgICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuICAgICAgICAgICAgbWF4ID0gdGV4dC5sZW5ndGg7XG5cbiAgICAgICAgICAgIHN0YWNrLmxlbmd0aCA9IGo7XG4gICAgICAgICAgICBjb250aW51ZSBPVVRFUjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhbk9wZW4pIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgdG9rZW46IGksXG4gICAgICAgICAgcG9zOiB0LmluZGV4LFxuICAgICAgICAgIHNpbmdsZTogaXNTaW5nbGUsXG4gICAgICAgICAgbGV2ZWw6IHRoaXNMZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuQ2xvc2UgJiYgaXNTaW5nbGUpIHtcbiAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBBUE9TVFJPUEhFKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNtYXJ0cXVvdGVzKHN0YXRlKSB7XG4gIC8qZXNsaW50IG1heC1kZXB0aDowKi9cbiAgdmFyIGJsa0lkeDtcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMudHlwb2dyYXBoZXIpIHsgcmV0dXJuOyB9XG5cbiAgZm9yIChibGtJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMTsgYmxrSWR4ID49IDA7IGJsa0lkeC0tKSB7XG5cbiAgICBpZiAoc3RhdGUudG9rZW5zW2Jsa0lkeF0udHlwZSAhPT0gJ2lubGluZScgfHxcbiAgICAgICAgIVFVT1RFX1RFU1RfUkUudGVzdChzdGF0ZS50b2tlbnNbYmxrSWR4XS5jb250ZW50KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvY2Vzc19pbmxpbmVzKHN0YXRlLnRva2Vuc1tibGtJZHhdLmNoaWxkcmVuLCBzdGF0ZSk7XG4gIH1cbn07XG4iLCIvLyBDb3JlIHN0YXRlIG9iamVjdFxuLy9cbid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuXG5mdW5jdGlvbiBTdGF0ZUNvcmUoc3JjLCBtZCwgZW52KSB7XG4gIHRoaXMuc3JjID0gc3JjO1xuICB0aGlzLmVudiA9IGVudjtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy5pbmxpbmVNb2RlID0gZmFsc2U7XG4gIHRoaXMubWQgPSBtZDsgLy8gbGluayB0byBwYXJzZXIgaW5zdGFuY2Vcbn1cblxuLy8gcmUtZXhwb3J0IFRva2VuIGNsYXNzIHRvIHVzZSBpbiBjb3JlIHJ1bGVzXG5TdGF0ZUNvcmUucHJvdG90eXBlLlRva2VuID0gVG9rZW47XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUNvcmU7XG4iLCIvLyBQcm9jZXNzIGF1dG9saW5rcyAnPHByb3RvY29sOi4uLj4nXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKmVzbGludCBtYXgtbGVuOjAqL1xudmFyIEVNQUlMX1JFICAgID0gL14oW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKikkLztcbnZhciBBVVRPTElOS19SRSA9IC9eKFthLXpBLVpdW2EtekEtWjAtOSsuXFwtXXsxLDMxfSk6KFtePD5cXHgwMC1cXHgyMF0qKSQvO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXV0b2xpbmsoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgdXJsLCBmdWxsVXJsLCB0b2tlbiwgY2gsIHN0YXJ0LCBtYXgsXG4gICAgICBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0MvKiA8ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXJ0ID0gc3RhdGUucG9zO1xuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgZm9yICg7Oykge1xuICAgIGlmICgrK3BvcyA+PSBtYXgpIHJldHVybiBmYWxzZTtcblxuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjaCA9PT0gMHgzQyAvKiA8ICovKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGNoID09PSAweDNFIC8qID4gKi8pIGJyZWFrO1xuICB9XG5cbiAgdXJsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKTtcblxuICBpZiAoQVVUT0xJTktfUkUudGVzdCh1cmwpKSB7XG4gICAgZnVsbFVybCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsodXJsKTtcbiAgICBpZiAoIXN0YXRlLm1kLnZhbGlkYXRlTGluayhmdWxsVXJsKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnbGlua19vcGVuJywgJ2EnLCAxKTtcbiAgICAgIHRva2VuLmF0dHJzICAgPSBbIFsgJ2hyZWYnLCBmdWxsVXJsIF0gXTtcbiAgICAgIHRva2VuLm1hcmt1cCAgPSAnYXV0b2xpbmsnO1xuICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcblxuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ3RleHQnLCAnJywgMCk7XG4gICAgICB0b2tlbi5jb250ZW50ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQodXJsKTtcblxuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfY2xvc2UnLCAnYScsIC0xKTtcbiAgICAgIHRva2VuLm1hcmt1cCAgPSAnYXV0b2xpbmsnO1xuICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBzdGF0ZS5wb3MgKz0gdXJsLmxlbmd0aCArIDI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoRU1BSUxfUkUudGVzdCh1cmwpKSB7XG4gICAgZnVsbFVybCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsoJ21haWx0bzonICsgdXJsKTtcbiAgICBpZiAoIXN0YXRlLm1kLnZhbGlkYXRlTGluayhmdWxsVXJsKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnbGlua19vcGVuJywgJ2EnLCAxKTtcbiAgICAgIHRva2VuLmF0dHJzICAgPSBbIFsgJ2hyZWYnLCBmdWxsVXJsIF0gXTtcbiAgICAgIHRva2VuLm1hcmt1cCAgPSAnYXV0b2xpbmsnO1xuICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcblxuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ3RleHQnLCAnJywgMCk7XG4gICAgICB0b2tlbi5jb250ZW50ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQodXJsKTtcblxuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfY2xvc2UnLCAnYScsIC0xKTtcbiAgICAgIHRva2VuLm1hcmt1cCAgPSAnYXV0b2xpbmsnO1xuICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBzdGF0ZS5wb3MgKz0gdXJsLmxlbmd0aCArIDI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiLy8gUGFyc2UgYmFja3RpY2tzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhY2t0aWNrKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHN0YXJ0LCBtYXgsIG1hcmtlciwgdG9rZW4sIG1hdGNoU3RhcnQsIG1hdGNoRW5kLCBvcGVuZXJMZW5ndGgsIGNsb3Nlckxlbmd0aCxcbiAgICAgIHBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2ggIT09IDB4NjAvKiBgICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXJ0ID0gcG9zO1xuICBwb3MrKztcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vIHNjYW4gbWFya2VyIGxlbmd0aFxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NjAvKiBgICovKSB7IHBvcysrOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpO1xuICBvcGVuZXJMZW5ndGggPSBtYXJrZXIubGVuZ3RoO1xuXG4gIGlmIChzdGF0ZS5iYWNrdGlja3NTY2FubmVkICYmIChzdGF0ZS5iYWNrdGlja3Nbb3BlbmVyTGVuZ3RoXSB8fCAwKSA8PSBzdGFydCkge1xuICAgIGlmICghc2lsZW50KSBzdGF0ZS5wZW5kaW5nICs9IG1hcmtlcjtcbiAgICBzdGF0ZS5wb3MgKz0gb3BlbmVyTGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbWF0Y2hTdGFydCA9IG1hdGNoRW5kID0gcG9zO1xuXG4gIC8vIE5vdGhpbmcgZm91bmQgaW4gdGhlIGNhY2hlLCBzY2FuIHVudGlsIHRoZSBlbmQgb2YgdGhlIGxpbmUgKG9yIHVudGlsIG1hcmtlciBpcyBmb3VuZClcbiAgd2hpbGUgKChtYXRjaFN0YXJ0ID0gc3RhdGUuc3JjLmluZGV4T2YoJ2AnLCBtYXRjaEVuZCkpICE9PSAtMSkge1xuICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIDE7XG5cbiAgICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgICB3aGlsZSAobWF0Y2hFbmQgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQobWF0Y2hFbmQpID09PSAweDYwLyogYCAqLykgeyBtYXRjaEVuZCsrOyB9XG5cbiAgICBjbG9zZXJMZW5ndGggPSBtYXRjaEVuZCAtIG1hdGNoU3RhcnQ7XG5cbiAgICBpZiAoY2xvc2VyTGVuZ3RoID09PSBvcGVuZXJMZW5ndGgpIHtcbiAgICAgIC8vIEZvdW5kIG1hdGNoaW5nIGNsb3NlciBsZW5ndGguXG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCdjb2RlX2lubGluZScsICdjb2RlJywgMCk7XG4gICAgICAgIHRva2VuLm1hcmt1cCAgPSBtYXJrZXI7XG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXRjaFN0YXJ0KVxuICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eICguKykgJC8sICckMScpO1xuICAgICAgfVxuICAgICAgc3RhdGUucG9zID0gbWF0Y2hFbmQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTb21lIGRpZmZlcmVudCBsZW5ndGggZm91bmQsIHB1dCBpdCBpbiBjYWNoZSBhcyB1cHBlciBsaW1pdCBvZiB3aGVyZSBjbG9zZXIgY2FuIGJlIGZvdW5kXG4gICAgc3RhdGUuYmFja3RpY2tzW2Nsb3Nlckxlbmd0aF0gPSBtYXRjaFN0YXJ0O1xuICB9XG5cbiAgLy8gU2Nhbm5lZCB0aHJvdWdoIHRoZSBlbmQsIGRpZG4ndCBmaW5kIGFueXRoaW5nXG4gIHN0YXRlLmJhY2t0aWNrc1NjYW5uZWQgPSB0cnVlO1xuXG4gIGlmICghc2lsZW50KSBzdGF0ZS5wZW5kaW5nICs9IG1hcmtlcjtcbiAgc3RhdGUucG9zICs9IG9wZW5lckxlbmd0aDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gRm9yIGVhY2ggb3BlbmluZyBlbXBoYXNpcy1saWtlIG1hcmtlciBmaW5kIGEgbWF0Y2hpbmcgY2xvc2luZyBvbmVcbi8vXG4ndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gcHJvY2Vzc0RlbGltaXRlcnMoc3RhdGUsIGRlbGltaXRlcnMpIHtcbiAgdmFyIGNsb3NlcklkeCwgb3BlbmVySWR4LCBjbG9zZXIsIG9wZW5lciwgbWluT3BlbmVySWR4LCBuZXdNaW5PcGVuZXJJZHgsXG4gICAgICBpc09kZE1hdGNoLCBsYXN0SnVtcCxcbiAgICAgIG9wZW5lcnNCb3R0b20gPSB7fSxcbiAgICAgIG1heCA9IGRlbGltaXRlcnMubGVuZ3RoO1xuXG4gIGZvciAoY2xvc2VySWR4ID0gMDsgY2xvc2VySWR4IDwgbWF4OyBjbG9zZXJJZHgrKykge1xuICAgIGNsb3NlciA9IGRlbGltaXRlcnNbY2xvc2VySWR4XTtcblxuICAgIC8vIExlbmd0aCBpcyBvbmx5IHVzZWQgZm9yIGVtcGhhc2lzLXNwZWNpZmljIFwicnVsZSBvZiAzXCIsXG4gICAgLy8gaWYgaXQncyBub3QgZGVmaW5lZCAoaW4gc3RyaWtldGhyb3VnaCBvciAzcmQgcGFydHkgcGx1Z2lucyksXG4gICAgLy8gd2UgY2FuIGRlZmF1bHQgaXQgdG8gMCB0byBkaXNhYmxlIHRob3NlIGNoZWNrcy5cbiAgICAvL1xuICAgIGNsb3Nlci5sZW5ndGggPSBjbG9zZXIubGVuZ3RoIHx8IDA7XG5cbiAgICBpZiAoIWNsb3Nlci5jbG9zZSkgY29udGludWU7XG5cbiAgICAvLyBQcmV2aW91c2x5IGNhbGN1bGF0ZWQgbG93ZXIgYm91bmRzIChwcmV2aW91cyBmYWlscylcbiAgICAvLyBmb3IgZWFjaCBtYXJrZXIgYW5kIGVhY2ggZGVsaW1pdGVyIGxlbmd0aCBtb2R1bG8gMy5cbiAgICBpZiAoIW9wZW5lcnNCb3R0b20uaGFzT3duUHJvcGVydHkoY2xvc2VyLm1hcmtlcikpIHtcbiAgICAgIG9wZW5lcnNCb3R0b21bY2xvc2VyLm1hcmtlcl0gPSBbIC0xLCAtMSwgLTEgXTtcbiAgICB9XG5cbiAgICBtaW5PcGVuZXJJZHggPSBvcGVuZXJzQm90dG9tW2Nsb3Nlci5tYXJrZXJdW2Nsb3Nlci5sZW5ndGggJSAzXTtcblxuICAgIG9wZW5lcklkeCA9IGNsb3NlcklkeCAtIGNsb3Nlci5qdW1wIC0gMTtcblxuICAgIC8vIGF2b2lkIGNyYXNoIGlmIGBjbG9zZXIuanVtcGAgaXMgcG9pbnRpbmcgb3V0c2lkZSBvZiB0aGUgYXJyYXksIHNlZSAjNzQyXG4gICAgaWYgKG9wZW5lcklkeCA8IC0xKSBvcGVuZXJJZHggPSAtMTtcblxuICAgIG5ld01pbk9wZW5lcklkeCA9IG9wZW5lcklkeDtcblxuICAgIGZvciAoOyBvcGVuZXJJZHggPiBtaW5PcGVuZXJJZHg7IG9wZW5lcklkeCAtPSBvcGVuZXIuanVtcCArIDEpIHtcbiAgICAgIG9wZW5lciA9IGRlbGltaXRlcnNbb3BlbmVySWR4XTtcblxuICAgICAgaWYgKG9wZW5lci5tYXJrZXIgIT09IGNsb3Nlci5tYXJrZXIpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAob3BlbmVyLm9wZW4gJiYgb3BlbmVyLmVuZCA8IDApIHtcblxuICAgICAgICBpc09kZE1hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgLy8gZnJvbSBzcGVjOlxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGRlbGltaXRlcnMgY2FuIGJvdGggb3BlbiBhbmQgY2xvc2UgZW1waGFzaXMsIHRoZW4gdGhlXG4gICAgICAgIC8vIHN1bSBvZiB0aGUgbGVuZ3RocyBvZiB0aGUgZGVsaW1pdGVyIHJ1bnMgY29udGFpbmluZyB0aGUgb3BlbmluZyBhbmRcbiAgICAgICAgLy8gY2xvc2luZyBkZWxpbWl0ZXJzIG11c3Qgbm90IGJlIGEgbXVsdGlwbGUgb2YgMyB1bmxlc3MgYm90aCBsZW5ndGhzXG4gICAgICAgIC8vIGFyZSBtdWx0aXBsZXMgb2YgMy5cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKG9wZW5lci5jbG9zZSB8fCBjbG9zZXIub3Blbikge1xuICAgICAgICAgIGlmICgob3BlbmVyLmxlbmd0aCArIGNsb3Nlci5sZW5ndGgpICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKG9wZW5lci5sZW5ndGggJSAzICE9PSAwIHx8IGNsb3Nlci5sZW5ndGggJSAzICE9PSAwKSB7XG4gICAgICAgICAgICAgIGlzT2RkTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNPZGRNYXRjaCkge1xuICAgICAgICAgIC8vIElmIHByZXZpb3VzIGRlbGltaXRlciBjYW5ub3QgYmUgYW4gb3BlbmVyLCB3ZSBjYW4gc2FmZWx5IHNraXBcbiAgICAgICAgICAvLyB0aGUgZW50aXJlIHNlcXVlbmNlIGluIGZ1dHVyZSBjaGVja3MuIFRoaXMgaXMgcmVxdWlyZWQgdG8gbWFrZVxuICAgICAgICAgIC8vIHN1cmUgYWxnb3JpdGhtIGhhcyBsaW5lYXIgY29tcGxleGl0eSAoc2VlICpfKl8qXypfKl8uLi4gY2FzZSkuXG4gICAgICAgICAgLy9cbiAgICAgICAgICBsYXN0SnVtcCA9IG9wZW5lcklkeCA+IDAgJiYgIWRlbGltaXRlcnNbb3BlbmVySWR4IC0gMV0ub3BlbiA/XG4gICAgICAgICAgICBkZWxpbWl0ZXJzW29wZW5lcklkeCAtIDFdLmp1bXAgKyAxIDpcbiAgICAgICAgICAgIDA7XG5cbiAgICAgICAgICBjbG9zZXIuanVtcCAgPSBjbG9zZXJJZHggLSBvcGVuZXJJZHggKyBsYXN0SnVtcDtcbiAgICAgICAgICBjbG9zZXIub3BlbiAgPSBmYWxzZTtcbiAgICAgICAgICBvcGVuZXIuZW5kICAgPSBjbG9zZXJJZHg7XG4gICAgICAgICAgb3BlbmVyLmp1bXAgID0gbGFzdEp1bXA7XG4gICAgICAgICAgb3BlbmVyLmNsb3NlID0gZmFsc2U7XG4gICAgICAgICAgbmV3TWluT3BlbmVySWR4ID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TWluT3BlbmVySWR4ICE9PSAtMSkge1xuICAgICAgLy8gSWYgbWF0Y2ggZm9yIHRoaXMgZGVsaW1pdGVyIHJ1biBmYWlsZWQsIHdlIHdhbnQgdG8gc2V0IGxvd2VyIGJvdW5kIGZvclxuICAgICAgLy8gZnV0dXJlIGxvb2t1cHMuIFRoaXMgaXMgcmVxdWlyZWQgdG8gbWFrZSBzdXJlIGFsZ29yaXRobSBoYXMgbGluZWFyXG4gICAgICAvLyBjb21wbGV4aXR5LlxuICAgICAgLy9cbiAgICAgIC8vIFNlZSBkZXRhaWxzIGhlcmU6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY29tbW9ubWFyay9jbWFyay9pc3N1ZXMvMTc4I2lzc3VlY29tbWVudC0yNzA0MTc0NDJcbiAgICAgIC8vXG4gICAgICBvcGVuZXJzQm90dG9tW2Nsb3Nlci5tYXJrZXJdWyhjbG9zZXIubGVuZ3RoIHx8IDApICUgM10gPSBuZXdNaW5PcGVuZXJJZHg7XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaW5rX3BhaXJzKHN0YXRlKSB7XG4gIHZhciBjdXJyLFxuICAgICAgdG9rZW5zX21ldGEgPSBzdGF0ZS50b2tlbnNfbWV0YSxcbiAgICAgIG1heCA9IHN0YXRlLnRva2Vuc19tZXRhLmxlbmd0aDtcblxuICBwcm9jZXNzRGVsaW1pdGVycyhzdGF0ZSwgc3RhdGUuZGVsaW1pdGVycyk7XG5cbiAgZm9yIChjdXJyID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgaWYgKHRva2Vuc19tZXRhW2N1cnJdICYmIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpIHtcbiAgICAgIHByb2Nlc3NEZWxpbWl0ZXJzKHN0YXRlLCB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBQcm9jZXNzICp0aGlzKiBhbmQgX3RoYXRfXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIEluc2VydCBlYWNoIG1hcmtlciBhcyBhIHNlcGFyYXRlIHRleHQgdG9rZW4sIGFuZCBhZGQgaXQgdG8gZGVsaW1pdGVyIGxpc3Rcbi8vXG5tb2R1bGUuZXhwb3J0cy50b2tlbml6ZSA9IGZ1bmN0aW9uIGVtcGhhc2lzKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGksIHNjYW5uZWQsIHRva2VuLFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCk7XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAobWFya2VyICE9PSAweDVGIC8qIF8gKi8gJiYgbWFya2VyICE9PSAweDJBIC8qICogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc2Nhbm5lZCA9IHN0YXRlLnNjYW5EZWxpbXMoc3RhdGUucG9zLCBtYXJrZXIgPT09IDB4MkEpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzY2FubmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ3RleHQnLCAnJywgMCk7XG4gICAgdG9rZW4uY29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKTtcblxuICAgIHN0YXRlLmRlbGltaXRlcnMucHVzaCh7XG4gICAgICAvLyBDaGFyIGNvZGUgb2YgdGhlIHN0YXJ0aW5nIG1hcmtlciAobnVtYmVyKS5cbiAgICAgIC8vXG4gICAgICBtYXJrZXI6IG1hcmtlcixcblxuICAgICAgLy8gVG90YWwgbGVuZ3RoIG9mIHRoZXNlIHNlcmllcyBvZiBkZWxpbWl0ZXJzLlxuICAgICAgLy9cbiAgICAgIGxlbmd0aDogc2Nhbm5lZC5sZW5ndGgsXG5cbiAgICAgIC8vIEFuIGFtb3VudCBvZiBjaGFyYWN0ZXJzIGJlZm9yZSB0aGlzIG9uZSB0aGF0J3MgZXF1aXZhbGVudCB0b1xuICAgICAgLy8gY3VycmVudCBvbmUuIEluIHBsYWluIEVuZ2xpc2g6IGlmIHRoaXMgZGVsaW1pdGVyIGRvZXMgbm90IG9wZW5cbiAgICAgIC8vIGFuIGVtcGhhc2lzLCBuZWl0aGVyIGRvIHByZXZpb3VzIGBqdW1wYCBjaGFyYWN0ZXJzLlxuICAgICAgLy9cbiAgICAgIC8vIFVzZWQgdG8gc2tpcCBzZXF1ZW5jZXMgbGlrZSBcIioqKioqXCIgaW4gb25lIHN0ZXAsIGZvciAxc3QgYXN0ZXJpc2tcbiAgICAgIC8vIHZhbHVlIHdpbGwgYmUgMCwgZm9yIDJuZCBpdCdzIDEgYW5kIHNvIG9uLlxuICAgICAgLy9cbiAgICAgIGp1bXA6ICAgaSxcblxuICAgICAgLy8gQSBwb3NpdGlvbiBvZiB0aGUgdG9rZW4gdGhpcyBkZWxpbWl0ZXIgY29ycmVzcG9uZHMgdG8uXG4gICAgICAvL1xuICAgICAgdG9rZW46ICBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMSxcblxuICAgICAgLy8gSWYgdGhpcyBkZWxpbWl0ZXIgaXMgbWF0Y2hlZCBhcyBhIHZhbGlkIG9wZW5lciwgYGVuZGAgd2lsbCBiZVxuICAgICAgLy8gZXF1YWwgdG8gaXRzIHBvc2l0aW9uLCBvdGhlcndpc2UgaXQncyBgLTFgLlxuICAgICAgLy9cbiAgICAgIGVuZDogICAgLTEsXG5cbiAgICAgIC8vIEJvb2xlYW4gZmxhZ3MgdGhhdCBkZXRlcm1pbmUgaWYgdGhpcyBkZWxpbWl0ZXIgY291bGQgb3BlbiBvciBjbG9zZVxuICAgICAgLy8gYW4gZW1waGFzaXMuXG4gICAgICAvL1xuICAgICAgb3BlbjogICBzY2FubmVkLmNhbl9vcGVuLFxuICAgICAgY2xvc2U6ICBzY2FubmVkLmNhbl9jbG9zZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zICs9IHNjYW5uZWQubGVuZ3RoO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5mdW5jdGlvbiBwb3N0UHJvY2VzcyhzdGF0ZSwgZGVsaW1pdGVycykge1xuICB2YXIgaSxcbiAgICAgIHN0YXJ0RGVsaW0sXG4gICAgICBlbmREZWxpbSxcbiAgICAgIHRva2VuLFxuICAgICAgY2gsXG4gICAgICBpc1N0cm9uZyxcbiAgICAgIG1heCA9IGRlbGltaXRlcnMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IG1heCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgc3RhcnREZWxpbSA9IGRlbGltaXRlcnNbaV07XG5cbiAgICBpZiAoc3RhcnREZWxpbS5tYXJrZXIgIT09IDB4NUYvKiBfICovICYmIHN0YXJ0RGVsaW0ubWFya2VyICE9PSAweDJBLyogKiAqLykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyBvbmx5IG9wZW5pbmcgbWFya2Vyc1xuICAgIGlmIChzdGFydERlbGltLmVuZCA9PT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGVuZERlbGltID0gZGVsaW1pdGVyc1tzdGFydERlbGltLmVuZF07XG5cbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgZGVsaW1pdGVyIGhhcyB0aGUgc2FtZSBtYXJrZXIgYW5kIGlzIGFkamFjZW50IHRvIHRoaXMgb25lLFxuICAgIC8vIG1lcmdlIHRob3NlIGludG8gb25lIHN0cm9uZyBkZWxpbWl0ZXIuXG4gICAgLy9cbiAgICAvLyBgPGVtPjxlbT53aGF0ZXZlcjwvZW0+PC9lbT5gIC0+IGA8c3Ryb25nPndoYXRldmVyPC9zdHJvbmc+YFxuICAgIC8vXG4gICAgaXNTdHJvbmcgPSBpID4gMCAmJlxuICAgICAgICAgICAgICAgZGVsaW1pdGVyc1tpIC0gMV0uZW5kID09PSBzdGFydERlbGltLmVuZCArIDEgJiZcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbaSAtIDFdLnRva2VuID09PSBzdGFydERlbGltLnRva2VuIC0gMSAmJlxuICAgICAgICAgICAgICAgZGVsaW1pdGVyc1tzdGFydERlbGltLmVuZCArIDFdLnRva2VuID09PSBlbmREZWxpbS50b2tlbiArIDEgJiZcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbaSAtIDFdLm1hcmtlciA9PT0gc3RhcnREZWxpbS5tYXJrZXI7XG5cbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnREZWxpbS5tYXJrZXIpO1xuXG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnRva2Vuc1tzdGFydERlbGltLnRva2VuXTtcbiAgICB0b2tlbi50eXBlICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nX29wZW4nIDogJ2VtX29wZW4nO1xuICAgIHRva2VuLnRhZyAgICAgPSBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ2VtJztcbiAgICB0b2tlbi5uZXN0aW5nID0gMTtcbiAgICB0b2tlbi5tYXJrdXAgID0gaXNTdHJvbmcgPyBjaCArIGNoIDogY2g7XG4gICAgdG9rZW4uY29udGVudCA9ICcnO1xuXG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnRva2Vuc1tlbmREZWxpbS50b2tlbl07XG4gICAgdG9rZW4udHlwZSAgICA9IGlzU3Ryb25nID8gJ3N0cm9uZ19jbG9zZScgOiAnZW1fY2xvc2UnO1xuICAgIHRva2VuLnRhZyAgICAgPSBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ2VtJztcbiAgICB0b2tlbi5uZXN0aW5nID0gLTE7XG4gICAgdG9rZW4ubWFya3VwICA9IGlzU3Ryb25nID8gY2ggKyBjaCA6IGNoO1xuICAgIHRva2VuLmNvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc1N0cm9uZykge1xuICAgICAgc3RhdGUudG9rZW5zW2RlbGltaXRlcnNbaSAtIDFdLnRva2VuXS5jb250ZW50ID0gJyc7XG4gICAgICBzdGF0ZS50b2tlbnNbZGVsaW1pdGVyc1tzdGFydERlbGltLmVuZCArIDFdLnRva2VuXS5jb250ZW50ID0gJyc7XG4gICAgICBpLS07XG4gICAgfVxuICB9XG59XG5cblxuLy8gV2FsayB0aHJvdWdoIGRlbGltaXRlciBsaXN0IGFuZCByZXBsYWNlIHRleHQgdG9rZW5zIHdpdGggdGFnc1xuLy9cbm1vZHVsZS5leHBvcnRzLnBvc3RQcm9jZXNzID0gZnVuY3Rpb24gZW1waGFzaXMoc3RhdGUpIHtcbiAgdmFyIGN1cnIsXG4gICAgICB0b2tlbnNfbWV0YSA9IHN0YXRlLnRva2Vuc19tZXRhLFxuICAgICAgbWF4ID0gc3RhdGUudG9rZW5zX21ldGEubGVuZ3RoO1xuXG4gIHBvc3RQcm9jZXNzKHN0YXRlLCBzdGF0ZS5kZWxpbWl0ZXJzKTtcblxuICBmb3IgKGN1cnIgPSAwOyBjdXJyIDwgbWF4OyBjdXJyKyspIHtcbiAgICBpZiAodG9rZW5zX21ldGFbY3Vycl0gJiYgdG9rZW5zX21ldGFbY3Vycl0uZGVsaW1pdGVycykge1xuICAgICAgcG9zdFByb2Nlc3Moc3RhdGUsIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIFByb2Nlc3MgaHRtbCBlbnRpdHkgLSAmIzEyMzssICYjeEFGOywgJnF1b3Q7LCAuLi5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW50aXRpZXMgICAgICAgICAgPSByZXF1aXJlKCcuLi9jb21tb24vZW50aXRpZXMnKTtcbnZhciBoYXMgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmhhcztcbnZhciBpc1ZhbGlkRW50aXR5Q29kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzVmFsaWRFbnRpdHlDb2RlO1xudmFyIGZyb21Db2RlUG9pbnQgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuZnJvbUNvZGVQb2ludDtcblxuXG52YXIgRElHSVRBTF9SRSA9IC9eJiMoKD86eFthLWYwLTldezEsNn18WzAtOV17MSw3fSkpOy9pO1xudmFyIE5BTUVEX1JFICAgPSAvXiYoW2Etel1bYS16MC05XXsxLDMxfSk7L2k7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbnRpdHkoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIGNvZGUsIG1hdGNoLCBwb3MgPSBzdGF0ZS5wb3MsIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyNi8qICYgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHBvcyArIDEgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuXG4gICAgaWYgKGNoID09PSAweDIzIC8qICMgKi8pIHtcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goRElHSVRBTF9SRSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICBjb2RlID0gbWF0Y2hbMV1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnID8gcGFyc2VJbnQobWF0Y2hbMV0uc2xpY2UoMSksIDE2KSA6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgICAgICAgc3RhdGUucGVuZGluZyArPSBpc1ZhbGlkRW50aXR5Q29kZShjb2RlKSA/IGZyb21Db2RlUG9pbnQoY29kZSkgOiBmcm9tQ29kZVBvaW50KDB4RkZGRCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goTkFNRURfUkUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmIChoYXMoZW50aXRpZXMsIG1hdGNoWzFdKSkge1xuICAgICAgICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gZW50aXRpZXNbbWF0Y2hbMV1dOyB9XG4gICAgICAgICAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gJyYnOyB9XG4gIHN0YXRlLnBvcysrO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGVzY2FwZWQgY2hhcnMgYW5kIGhhcmRicmVha3NcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cbnZhciBFU0NBUEVEID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgRVNDQVBFRC5wdXNoKDApOyB9XG5cbidcXFxcIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW11eX2B7fH1+LSdcbiAgLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaCkgeyBFU0NBUEVEW2NoLmNoYXJDb2RlQXQoMCldID0gMTsgfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIHBvcyA9IHN0YXRlLnBvcywgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDVDLyogXFwgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zKys7XG5cbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjaCA8IDI1NiAmJiBFU0NBUEVEW2NoXSAhPT0gMCkge1xuICAgICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmNbcG9zXTsgfVxuICAgICAgc3RhdGUucG9zICs9IDI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2ggPT09IDB4MEEpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHN0YXRlLnB1c2goJ2hhcmRicmVhaycsICdicicsIDApO1xuICAgICAgfVxuXG4gICAgICBwb3MrKztcbiAgICAgIC8vIHNraXAgbGVhZGluZyB3aGl0ZXNwYWNlcyBmcm9tIG5leHQgbGluZVxuICAgICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgIGlmICghaXNTcGFjZShjaCkpIHsgYnJlYWs7IH1cbiAgICAgICAgcG9zKys7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBvcyA9IHBvcztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gJ1xcXFwnOyB9XG4gIHN0YXRlLnBvcysrO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGh0bWwgdGFnc1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIEhUTUxfVEFHX1JFID0gcmVxdWlyZSgnLi4vY29tbW9uL2h0bWxfcmUnKS5IVE1MX1RBR19SRTtcblxuXG5mdW5jdGlvbiBpc0xldHRlcihjaCkge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICB2YXIgbGMgPSBjaCB8IDB4MjA7IC8vIHRvIGxvd2VyIGNhc2VcbiAgcmV0dXJuIChsYyA+PSAweDYxLyogYSAqLykgJiYgKGxjIDw9IDB4N2EvKiB6ICovKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0bWxfaW5saW5lKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBtYXRjaCwgbWF4LCB0b2tlbixcbiAgICAgIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBDaGVjayBzdGFydFxuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLyB8fFxuICAgICAgcG9zICsgMiA+PSBtYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBRdWljayBmYWlsIG9uIHNlY29uZCBjaGFyXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG4gIGlmIChjaCAhPT0gMHgyMS8qICEgKi8gJiZcbiAgICAgIGNoICE9PSAweDNGLyogPyAqLyAmJlxuICAgICAgY2ggIT09IDB4MkYvKiAvICovICYmXG4gICAgICAhaXNMZXR0ZXIoY2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChIVE1MX1RBR19SRSk7XG4gIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnaHRtbF9pbmxpbmUnLCAnJywgMCk7XG4gICAgdG9rZW4uY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIHBvcyArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cbiAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyAhW2ltYWdlXSg8c3JjPiBcInRpdGxlXCIpXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykubm9ybWFsaXplUmVmZXJlbmNlO1xudmFyIGlzU3BhY2UgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGltYWdlKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGF0dHJzLFxuICAgICAgY29kZSxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRW5kLFxuICAgICAgbGFiZWxTdGFydCxcbiAgICAgIHBvcyxcbiAgICAgIHJlZixcbiAgICAgIHJlcyxcbiAgICAgIHRpdGxlLFxuICAgICAgdG9rZW4sXG4gICAgICB0b2tlbnMsXG4gICAgICBzdGFydCxcbiAgICAgIGhyZWYgPSAnJyxcbiAgICAgIG9sZFBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSAhPT0gMHgyMS8qICEgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXRlLnBvcyArIDI7XG4gIGxhYmVsRW5kID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhdGUucG9zICsgMSwgZmFsc2UpO1xuXG4gIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCAnXScsIHNvIGl0J3Mgbm90IGEgdmFsaWQgbGlua1xuICBpZiAobGFiZWxFbmQgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDI4LyogKCAqLykge1xuICAgIC8vXG4gICAgLy8gSW5saW5lIGxpbmtcbiAgICAvL1xuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgcG9zKys7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgIF5eXl5eXiBwYXJzaW5nIGxpbmsgZGVzdGluYXRpb25cbiAgICBzdGFydCA9IHBvcztcbiAgICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0YXRlLnNyYywgcG9zLCBzdGF0ZS5wb3NNYXgpO1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGhyZWYgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHJlcy5zdHIpO1xuICAgICAgaWYgKHN0YXRlLm1kLnZhbGlkYXRlTGluayhocmVmKSkge1xuICAgICAgICBwb3MgPSByZXMucG9zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHJlZiA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzaW5nIGxpbmsgdGl0bGVcbiAgICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua1RpdGxlKHN0YXRlLnNyYywgcG9zLCBzdGF0ZS5wb3NNYXgpO1xuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiByZXMub2spIHtcbiAgICAgIHRpdGxlID0gcmVzLnN0cjtcbiAgICAgIHBvcyA9IHJlcy5wb3M7XG5cbiAgICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoIWlzU3BhY2UoY29kZSkgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwb3MgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjkvKiApICovKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBvcysrO1xuICB9IGVsc2Uge1xuICAgIC8vXG4gICAgLy8gTGluayByZWZlcmVuY2VcbiAgICAvL1xuICAgIGlmICh0eXBlb2Ygc3RhdGUuZW52LnJlZmVyZW5jZXMgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVCLyogWyAqLykge1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgICAgcG9zID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgcG9zKTtcbiAgICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKyspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zID0gbGFiZWxFbmQgKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gICAgfVxuXG4gICAgLy8gY292ZXJzIGxhYmVsID09PSAnJyBhbmQgbGFiZWwgPT09IHVuZGVmaW5lZFxuICAgIC8vIChjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmsgYW5kIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rIHJlc3BlY3RpdmVseSlcbiAgICBpZiAoIWxhYmVsKSB7IGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKGxhYmVsU3RhcnQsIGxhYmVsRW5kKTsgfVxuXG4gICAgcmVmID0gc3RhdGUuZW52LnJlZmVyZW5jZXNbbm9ybWFsaXplUmVmZXJlbmNlKGxhYmVsKV07XG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaHJlZiA9IHJlZi5ocmVmO1xuICAgIHRpdGxlID0gcmVmLnRpdGxlO1xuICB9XG5cbiAgLy9cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIGNvbnRlbnQgPSBzdGF0ZS5zcmMuc2xpY2UobGFiZWxTdGFydCwgbGFiZWxFbmQpO1xuXG4gICAgc3RhdGUubWQuaW5saW5lLnBhcnNlKFxuICAgICAgY29udGVudCxcbiAgICAgIHN0YXRlLm1kLFxuICAgICAgc3RhdGUuZW52LFxuICAgICAgdG9rZW5zID0gW11cbiAgICApO1xuXG4gICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbWFnZScsICdpbWcnLCAwKTtcbiAgICB0b2tlbi5hdHRycyAgICA9IGF0dHJzID0gWyBbICdzcmMnLCBocmVmIF0sIFsgJ2FsdCcsICcnIF0gXTtcbiAgICB0b2tlbi5jaGlsZHJlbiA9IHRva2VucztcbiAgICB0b2tlbi5jb250ZW50ICA9IGNvbnRlbnQ7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGF0dHJzLnB1c2goWyAndGl0bGUnLCB0aXRsZSBdKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyBbbGlua10oPHRvPiBcInN0dWZmXCIpXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykubm9ybWFsaXplUmVmZXJlbmNlO1xudmFyIGlzU3BhY2UgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpbmsoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgYXR0cnMsXG4gICAgICBjb2RlLFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbEVuZCxcbiAgICAgIGxhYmVsU3RhcnQsXG4gICAgICBwb3MsXG4gICAgICByZXMsXG4gICAgICByZWYsXG4gICAgICB0b2tlbixcbiAgICAgIGhyZWYgPSAnJyxcbiAgICAgIHRpdGxlID0gJycsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIHBhcnNlUmVmZXJlbmNlID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXRlLnBvcyArIDE7XG4gIGxhYmVsRW5kID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhdGUucG9zLCB0cnVlKTtcblxuICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIGxpbmtcbiAgaWYgKGxhYmVsRW5kIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyOC8qICggKi8pIHtcbiAgICAvL1xuICAgIC8vIElubGluZSBsaW5rXG4gICAgLy9cblxuICAgIC8vIG1pZ2h0IGhhdmUgZm91bmQgYSB2YWxpZCBzaG9ydGN1dCBsaW5rLCBkaXNhYmxlIHJlZmVyZW5jZSBwYXJzaW5nXG4gICAgcGFyc2VSZWZlcmVuY2UgPSBmYWxzZTtcblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgIHBvcysrO1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICBeXl5eXl4gcGFyc2luZyBsaW5rIGRlc3RpbmF0aW9uXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KTtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBocmVmID0gc3RhdGUubWQubm9ybWFsaXplTGluayhyZXMuc3RyKTtcbiAgICAgIGlmIChzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoaHJlZikpIHtcbiAgICAgICAgcG9zID0gcmVzLnBvcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhyZWYgPSAnJztcbiAgICAgIH1cblxuICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgIC8vICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgICAgc3RhcnQgPSBwb3M7XG4gICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICAgIH1cblxuICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzaW5nIGxpbmsgdGl0bGVcbiAgICAgIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RhdGUuc3JjLCBwb3MsIHN0YXRlLnBvc01heCk7XG4gICAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcmVzLm9rKSB7XG4gICAgICAgIHRpdGxlID0gcmVzLnN0cjtcbiAgICAgICAgcG9zID0gcmVzLnBvcztcblxuICAgICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICBpZiAoIWlzU3BhY2UoY29kZSkgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyOS8qICkgKi8pIHtcbiAgICAgIC8vIHBhcnNpbmcgYSB2YWxpZCBzaG9ydGN1dCBsaW5rIGZhaWxlZCwgZmFsbGJhY2sgdG8gcmVmZXJlbmNlXG4gICAgICBwYXJzZVJlZmVyZW5jZSA9IHRydWU7XG4gICAgfVxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHBhcnNlUmVmZXJlbmNlKSB7XG4gICAgLy9cbiAgICAvLyBMaW5rIHJlZmVyZW5jZVxuICAgIC8vXG4gICAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUIvKiBbICovKSB7XG4gICAgICBzdGFydCA9IHBvcyArIDE7XG4gICAgICBwb3MgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0xhYmVsKHN0YXRlLCBwb3MpO1xuICAgICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAgIGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MrKyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgICB9XG5cbiAgICAvLyBjb3ZlcnMgbGFiZWwgPT09ICcnIGFuZCBsYWJlbCA9PT0gdW5kZWZpbmVkXG4gICAgLy8gKGNvbGxhcHNlZCByZWZlcmVuY2UgbGluayBhbmQgc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmsgcmVzcGVjdGl2ZWx5KVxuICAgIGlmICghbGFiZWwpIHsgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2UobGFiZWxTdGFydCwgbGFiZWxFbmQpOyB9XG5cbiAgICByZWYgPSBzdGF0ZS5lbnYucmVmZXJlbmNlc1tub3JtYWxpemVSZWZlcmVuY2UobGFiZWwpXTtcbiAgICBpZiAoIXJlZikge1xuICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBocmVmID0gcmVmLmhyZWY7XG4gICAgdGl0bGUgPSByZWYudGl0bGU7XG4gIH1cblxuICAvL1xuICAvLyBXZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5rLCBhbmQga25vdyBmb3IgYSBmYWN0IGl0J3MgYSB2YWxpZCBsaW5rO1xuICAvLyBzbyBhbGwgdGhhdCdzIGxlZnQgdG8gZG8gaXMgdG8gY2FsbCB0b2tlbml6ZXIuXG4gIC8vXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucG9zID0gbGFiZWxTdGFydDtcbiAgICBzdGF0ZS5wb3NNYXggPSBsYWJlbEVuZDtcblxuICAgIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgdG9rZW4uYXR0cnMgID0gYXR0cnMgPSBbIFsgJ2hyZWYnLCBocmVmIF0gXTtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGF0dHJzLnB1c2goWyAndGl0bGUnLCB0aXRsZSBdKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5tZC5pbmxpbmUudG9rZW5pemUoc3RhdGUpO1xuXG4gICAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnbGlua19jbG9zZScsICdhJywgLTEpO1xuICB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2NlZXNzICdcXG4nXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbmV3bGluZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBwbWF4LCBtYXgsIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQS8qIFxcbiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwbWF4ID0gc3RhdGUucGVuZGluZy5sZW5ndGggLSAxO1xuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgLy8gJyAgXFxuJyAtPiBoYXJkYnJlYWtcbiAgLy8gTG9va3VwIGluIHBlbmRpbmcgY2hhcnMgaXMgYmFkIHByYWN0aWNlISBEb24ndCBjb3B5IHRvIG90aGVyIHJ1bGVzIVxuICAvLyBQZW5kaW5nIHN0cmluZyBpcyBzdG9yZWQgaW4gY29uY2F0IG1vZGUsIGluZGV4ZWQgbG9va3VwcyB3aWxsIGNhdXNlXG4gIC8vIGNvbnZlcnRpb24gdG8gZmxhdCBtb2RlLlxuICBpZiAoIXNpbGVudCkge1xuICAgIGlmIChwbWF4ID49IDAgJiYgc3RhdGUucGVuZGluZy5jaGFyQ29kZUF0KHBtYXgpID09PSAweDIwKSB7XG4gICAgICBpZiAocG1heCA+PSAxICYmIHN0YXRlLnBlbmRpbmcuY2hhckNvZGVBdChwbWF4IC0gMSkgPT09IDB4MjApIHtcbiAgICAgICAgc3RhdGUucGVuZGluZyA9IHN0YXRlLnBlbmRpbmcucmVwbGFjZSgvICskLywgJycpO1xuICAgICAgICBzdGF0ZS5wdXNoKCdoYXJkYnJlYWsnLCAnYnInLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgc3RhdGUucHVzaCgnc29mdGJyZWFrJywgJ2JyJywgMCk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucHVzaCgnc29mdGJyZWFrJywgJ2JyJywgMCk7XG4gICAgfVxuICB9XG5cbiAgcG9zKys7XG5cbiAgLy8gc2tpcCBoZWFkaW5nIHNwYWNlcyBmb3IgbmV4dCBsaW5lXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgaXNTcGFjZShzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpKSkgeyBwb3MrKzsgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gSW5saW5lIHBhcnNlciBzdGF0ZVxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFRva2VuICAgICAgICAgID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcbnZhciBpc1doaXRlU3BhY2UgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzV2hpdGVTcGFjZTtcbnZhciBpc1B1bmN0Q2hhciAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzUHVuY3RDaGFyO1xudmFyIGlzTWRBc2NpaVB1bmN0ID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNNZEFzY2lpUHVuY3Q7XG5cblxuZnVuY3Rpb24gU3RhdGVJbmxpbmUoc3JjLCBtZCwgZW52LCBvdXRUb2tlbnMpIHtcbiAgdGhpcy5zcmMgPSBzcmM7XG4gIHRoaXMuZW52ID0gZW52O1xuICB0aGlzLm1kID0gbWQ7XG4gIHRoaXMudG9rZW5zID0gb3V0VG9rZW5zO1xuICB0aGlzLnRva2Vuc19tZXRhID0gQXJyYXkob3V0VG9rZW5zLmxlbmd0aCk7XG5cbiAgdGhpcy5wb3MgPSAwO1xuICB0aGlzLnBvc01heCA9IHRoaXMuc3JjLmxlbmd0aDtcbiAgdGhpcy5sZXZlbCA9IDA7XG4gIHRoaXMucGVuZGluZyA9ICcnO1xuICB0aGlzLnBlbmRpbmdMZXZlbCA9IDA7XG5cbiAgLy8gU3RvcmVzIHsgc3RhcnQ6IGVuZCB9IHBhaXJzLiBVc2VmdWwgZm9yIGJhY2t0cmFja1xuICAvLyBvcHRpbWl6YXRpb24gb2YgcGFpcnMgcGFyc2UgKGVtcGhhc2lzLCBzdHJpa2VzKS5cbiAgdGhpcy5jYWNoZSA9IHt9O1xuXG4gIC8vIExpc3Qgb2YgZW1waGFzaXMtbGlrZSBkZWxpbWl0ZXJzIGZvciBjdXJyZW50IHRhZ1xuICB0aGlzLmRlbGltaXRlcnMgPSBbXTtcblxuICAvLyBTdGFjayBvZiBkZWxpbWl0ZXIgbGlzdHMgZm9yIHVwcGVyIGxldmVsIHRhZ3NcbiAgdGhpcy5fcHJldl9kZWxpbWl0ZXJzID0gW107XG5cbiAgLy8gYmFja3RpY2sgbGVuZ3RoID0+IGxhc3Qgc2VlbiBwb3NpdGlvblxuICB0aGlzLmJhY2t0aWNrcyA9IHt9O1xuICB0aGlzLmJhY2t0aWNrc1NjYW5uZWQgPSBmYWxzZTtcbn1cblxuXG4vLyBGbHVzaCBwZW5kaW5nIHRleHRcbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUucHVzaFBlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0b2tlbiA9IG5ldyBUb2tlbigndGV4dCcsICcnLCAwKTtcbiAgdG9rZW4uY29udGVudCA9IHRoaXMucGVuZGluZztcbiAgdG9rZW4ubGV2ZWwgPSB0aGlzLnBlbmRpbmdMZXZlbDtcbiAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gIHRoaXMucGVuZGluZyA9ICcnO1xuICByZXR1cm4gdG9rZW47XG59O1xuXG5cbi8vIFB1c2ggbmV3IHRva2VuIHRvIFwic3RyZWFtXCIuXG4vLyBJZiBwZW5kaW5nIHRleHQgZXhpc3RzIC0gZmx1c2ggaXQgYXMgdGV4dCB0b2tlblxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHR5cGUsIHRhZywgbmVzdGluZykge1xuICBpZiAodGhpcy5wZW5kaW5nKSB7XG4gICAgdGhpcy5wdXNoUGVuZGluZygpO1xuICB9XG5cbiAgdmFyIHRva2VuID0gbmV3IFRva2VuKHR5cGUsIHRhZywgbmVzdGluZyk7XG4gIHZhciB0b2tlbl9tZXRhID0gbnVsbDtcblxuICBpZiAobmVzdGluZyA8IDApIHtcbiAgICAvLyBjbG9zaW5nIHRhZ1xuICAgIHRoaXMubGV2ZWwtLTtcbiAgICB0aGlzLmRlbGltaXRlcnMgPSB0aGlzLl9wcmV2X2RlbGltaXRlcnMucG9wKCk7XG4gIH1cblxuICB0b2tlbi5sZXZlbCA9IHRoaXMubGV2ZWw7XG5cbiAgaWYgKG5lc3RpbmcgPiAwKSB7XG4gICAgLy8gb3BlbmluZyB0YWdcbiAgICB0aGlzLmxldmVsKys7XG4gICAgdGhpcy5fcHJldl9kZWxpbWl0ZXJzLnB1c2godGhpcy5kZWxpbWl0ZXJzKTtcbiAgICB0aGlzLmRlbGltaXRlcnMgPSBbXTtcbiAgICB0b2tlbl9tZXRhID0geyBkZWxpbWl0ZXJzOiB0aGlzLmRlbGltaXRlcnMgfTtcbiAgfVxuXG4gIHRoaXMucGVuZGluZ0xldmVsID0gdGhpcy5sZXZlbDtcbiAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gIHRoaXMudG9rZW5zX21ldGEucHVzaCh0b2tlbl9tZXRhKTtcbiAgcmV0dXJuIHRva2VuO1xufTtcblxuXG4vLyBTY2FuIGEgc2VxdWVuY2Ugb2YgZW1waGFzaXMtbGlrZSBtYXJrZXJzLCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXJcbi8vIGl0IGNhbiBzdGFydCBhbiBlbXBoYXNpcyBzZXF1ZW5jZSBvciBlbmQgYW4gZW1waGFzaXMgc2VxdWVuY2UuXG4vL1xuLy8gIC0gc3RhcnQgLSBwb3NpdGlvbiB0byBzY2FuIGZyb20gKGl0IHNob3VsZCBwb2ludCBhdCBhIHZhbGlkIG1hcmtlcik7XG4vLyAgLSBjYW5TcGxpdFdvcmQgLSBkZXRlcm1pbmUgaWYgdGhlc2UgbWFya2VycyBjYW4gYmUgZm91bmQgaW5zaWRlIGEgd29yZFxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5zY2FuRGVsaW1zID0gZnVuY3Rpb24gKHN0YXJ0LCBjYW5TcGxpdFdvcmQpIHtcbiAgdmFyIHBvcyA9IHN0YXJ0LCBsYXN0Q2hhciwgbmV4dENoYXIsIGNvdW50LCBjYW5fb3BlbiwgY2FuX2Nsb3NlLFxuICAgICAgaXNMYXN0V2hpdGVTcGFjZSwgaXNMYXN0UHVuY3RDaGFyLFxuICAgICAgaXNOZXh0V2hpdGVTcGFjZSwgaXNOZXh0UHVuY3RDaGFyLFxuICAgICAgbGVmdF9mbGFua2luZyA9IHRydWUsXG4gICAgICByaWdodF9mbGFua2luZyA9IHRydWUsXG4gICAgICBtYXggPSB0aGlzLnBvc01heCxcbiAgICAgIG1hcmtlciA9IHRoaXMuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIC8vIHRyZWF0IGJlZ2lubmluZyBvZiB0aGUgbGluZSBhcyBhIHdoaXRlc3BhY2VcbiAgbGFzdENoYXIgPSBzdGFydCA+IDAgPyB0aGlzLnNyYy5jaGFyQ29kZUF0KHN0YXJ0IC0gMSkgOiAweDIwO1xuXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgdGhpcy5zcmMuY2hhckNvZGVBdChwb3MpID09PSBtYXJrZXIpIHsgcG9zKys7IH1cblxuICBjb3VudCA9IHBvcyAtIHN0YXJ0O1xuXG4gIC8vIHRyZWF0IGVuZCBvZiB0aGUgbGluZSBhcyBhIHdoaXRlc3BhY2VcbiAgbmV4dENoYXIgPSBwb3MgPCBtYXggPyB0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcykgOiAweDIwO1xuXG4gIGlzTGFzdFB1bmN0Q2hhciA9IGlzTWRBc2NpaVB1bmN0KGxhc3RDaGFyKSB8fCBpc1B1bmN0Q2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKGxhc3RDaGFyKSk7XG4gIGlzTmV4dFB1bmN0Q2hhciA9IGlzTWRBc2NpaVB1bmN0KG5leHRDaGFyKSB8fCBpc1B1bmN0Q2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyKSk7XG5cbiAgaXNMYXN0V2hpdGVTcGFjZSA9IGlzV2hpdGVTcGFjZShsYXN0Q2hhcik7XG4gIGlzTmV4dFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobmV4dENoYXIpO1xuXG4gIGlmIChpc05leHRXaGl0ZVNwYWNlKSB7XG4gICAgbGVmdF9mbGFua2luZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGlzTmV4dFB1bmN0Q2hhcikge1xuICAgIGlmICghKGlzTGFzdFdoaXRlU3BhY2UgfHwgaXNMYXN0UHVuY3RDaGFyKSkge1xuICAgICAgbGVmdF9mbGFua2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc0xhc3RXaGl0ZVNwYWNlKSB7XG4gICAgcmlnaHRfZmxhbmtpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpc0xhc3RQdW5jdENoYXIpIHtcbiAgICBpZiAoIShpc05leHRXaGl0ZVNwYWNlIHx8IGlzTmV4dFB1bmN0Q2hhcikpIHtcbiAgICAgIHJpZ2h0X2ZsYW5raW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYW5TcGxpdFdvcmQpIHtcbiAgICBjYW5fb3BlbiAgPSBsZWZ0X2ZsYW5raW5nICAmJiAoIXJpZ2h0X2ZsYW5raW5nIHx8IGlzTGFzdFB1bmN0Q2hhcik7XG4gICAgY2FuX2Nsb3NlID0gcmlnaHRfZmxhbmtpbmcgJiYgKCFsZWZ0X2ZsYW5raW5nICB8fCBpc05leHRQdW5jdENoYXIpO1xuICB9IGVsc2Uge1xuICAgIGNhbl9vcGVuICA9IGxlZnRfZmxhbmtpbmc7XG4gICAgY2FuX2Nsb3NlID0gcmlnaHRfZmxhbmtpbmc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNhbl9vcGVuOiAgY2FuX29wZW4sXG4gICAgY2FuX2Nsb3NlOiBjYW5fY2xvc2UsXG4gICAgbGVuZ3RoOiAgICBjb3VudFxuICB9O1xufTtcblxuXG4vLyByZS1leHBvcnQgVG9rZW4gY2xhc3MgdG8gdXNlIGluIGJsb2NrIHJ1bGVzXG5TdGF0ZUlubGluZS5wcm90b3R5cGUuVG9rZW4gPSBUb2tlbjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlSW5saW5lO1xuIiwiLy8gfn5zdHJpa2UgdGhyb3VnaH5+XG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIEluc2VydCBlYWNoIG1hcmtlciBhcyBhIHNlcGFyYXRlIHRleHQgdG9rZW4sIGFuZCBhZGQgaXQgdG8gZGVsaW1pdGVyIGxpc3Rcbi8vXG5tb2R1bGUuZXhwb3J0cy50b2tlbml6ZSA9IGZ1bmN0aW9uIHN0cmlrZXRocm91Z2goc3RhdGUsIHNpbGVudCkge1xuICB2YXIgaSwgc2Nhbm5lZCwgdG9rZW4sIGxlbiwgY2gsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChtYXJrZXIgIT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHNjYW5uZWQgPSBzdGF0ZS5zY2FuRGVsaW1zKHN0YXRlLnBvcywgdHJ1ZSk7XG4gIGxlbiA9IHNjYW5uZWQubGVuZ3RoO1xuICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKTtcblxuICBpZiAobGVuIDwgMikgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAobGVuICUgMikge1xuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgPSBjaDtcbiAgICBsZW4tLTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgPSBjaCArIGNoO1xuXG4gICAgc3RhdGUuZGVsaW1pdGVycy5wdXNoKHtcbiAgICAgIG1hcmtlcjogbWFya2VyLFxuICAgICAgbGVuZ3RoOiAwLCAgICAgLy8gZGlzYWJsZSBcInJ1bGUgb2YgM1wiIGxlbmd0aCBjaGVja3MgbWVhbnQgZm9yIGVtcGhhc2lzXG4gICAgICBqdW1wOiAgIGkgLyAyLCAvLyBmb3IgYH5+YCAxIG1hcmtlciA9IDIgY2hhcmFjdGVyc1xuICAgICAgdG9rZW46ICBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMSxcbiAgICAgIGVuZDogICAgLTEsXG4gICAgICBvcGVuOiAgIHNjYW5uZWQuY2FuX29wZW4sXG4gICAgICBjbG9zZTogIHNjYW5uZWQuY2FuX2Nsb3NlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgKz0gc2Nhbm5lZC5sZW5ndGg7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbmZ1bmN0aW9uIHBvc3RQcm9jZXNzKHN0YXRlLCBkZWxpbWl0ZXJzKSB7XG4gIHZhciBpLCBqLFxuICAgICAgc3RhcnREZWxpbSxcbiAgICAgIGVuZERlbGltLFxuICAgICAgdG9rZW4sXG4gICAgICBsb25lTWFya2VycyA9IFtdLFxuICAgICAgbWF4ID0gZGVsaW1pdGVycy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgc3RhcnREZWxpbSA9IGRlbGltaXRlcnNbaV07XG5cbiAgICBpZiAoc3RhcnREZWxpbS5tYXJrZXIgIT09IDB4N0UvKiB+ICovKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnREZWxpbS5lbmQgPT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBlbmREZWxpbSA9IGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmRdO1xuXG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnRva2Vuc1tzdGFydERlbGltLnRva2VuXTtcbiAgICB0b2tlbi50eXBlICAgID0gJ3Nfb3Blbic7XG4gICAgdG9rZW4udGFnICAgICA9ICdzJztcbiAgICB0b2tlbi5uZXN0aW5nID0gMTtcbiAgICB0b2tlbi5tYXJrdXAgID0gJ35+JztcbiAgICB0b2tlbi5jb250ZW50ID0gJyc7XG5cbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUudG9rZW5zW2VuZERlbGltLnRva2VuXTtcbiAgICB0b2tlbi50eXBlICAgID0gJ3NfY2xvc2UnO1xuICAgIHRva2VuLnRhZyAgICAgPSAncyc7XG4gICAgdG9rZW4ubmVzdGluZyA9IC0xO1xuICAgIHRva2VuLm1hcmt1cCAgPSAnfn4nO1xuICAgIHRva2VuLmNvbnRlbnQgPSAnJztcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbZW5kRGVsaW0udG9rZW4gLSAxXS50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgc3RhdGUudG9rZW5zW2VuZERlbGltLnRva2VuIC0gMV0uY29udGVudCA9PT0gJ34nKSB7XG5cbiAgICAgIGxvbmVNYXJrZXJzLnB1c2goZW5kRGVsaW0udG9rZW4gLSAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBhIG1hcmtlciBzZXF1ZW5jZSBoYXMgYW4gb2RkIG51bWJlciBvZiBjaGFyYWN0ZXJzLCBpdCdzIHNwbGl0dGVkXG4gIC8vIGxpa2UgdGhpczogYH5+fn5+YCAtPiBgfmAgKyBgfn5gICsgYH5+YCwgbGVhdmluZyBvbmUgbWFya2VyIGF0IHRoZVxuICAvLyBzdGFydCBvZiB0aGUgc2VxdWVuY2UuXG4gIC8vXG4gIC8vIFNvLCB3ZSBoYXZlIHRvIG1vdmUgYWxsIHRob3NlIG1hcmtlcnMgYWZ0ZXIgc3Vic2VxdWVudCBzX2Nsb3NlIHRhZ3MuXG4gIC8vXG4gIHdoaWxlIChsb25lTWFya2Vycy5sZW5ndGgpIHtcbiAgICBpID0gbG9uZU1hcmtlcnMucG9wKCk7XG4gICAgaiA9IGkgKyAxO1xuXG4gICAgd2hpbGUgKGogPCBzdGF0ZS50b2tlbnMubGVuZ3RoICYmIHN0YXRlLnRva2Vuc1tqXS50eXBlID09PSAnc19jbG9zZScpIHtcbiAgICAgIGorKztcbiAgICB9XG5cbiAgICBqLS07XG5cbiAgICBpZiAoaSAhPT0gaikge1xuICAgICAgdG9rZW4gPSBzdGF0ZS50b2tlbnNbal07XG4gICAgICBzdGF0ZS50b2tlbnNbal0gPSBzdGF0ZS50b2tlbnNbaV07XG4gICAgICBzdGF0ZS50b2tlbnNbaV0gPSB0b2tlbjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXYWxrIHRocm91Z2ggZGVsaW1pdGVyIGxpc3QgYW5kIHJlcGxhY2UgdGV4dCB0b2tlbnMgd2l0aCB0YWdzXG4vL1xubW9kdWxlLmV4cG9ydHMucG9zdFByb2Nlc3MgPSBmdW5jdGlvbiBzdHJpa2V0aHJvdWdoKHN0YXRlKSB7XG4gIHZhciBjdXJyLFxuICAgICAgdG9rZW5zX21ldGEgPSBzdGF0ZS50b2tlbnNfbWV0YSxcbiAgICAgIG1heCA9IHN0YXRlLnRva2Vuc19tZXRhLmxlbmd0aDtcblxuICBwb3N0UHJvY2VzcyhzdGF0ZSwgc3RhdGUuZGVsaW1pdGVycyk7XG5cbiAgZm9yIChjdXJyID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgaWYgKHRva2Vuc19tZXRhW2N1cnJdICYmIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpIHtcbiAgICAgIHBvc3RQcm9jZXNzKHN0YXRlLCB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBTa2lwIHRleHQgY2hhcmFjdGVycyBmb3IgdGV4dCB0b2tlbiwgcGxhY2UgdGhvc2UgdG8gcGVuZGluZyBidWZmZXJcbi8vIGFuZCBpbmNyZW1lbnQgY3VycmVudCBwb3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIFJ1bGUgdG8gc2tpcCBwdXJlIHRleHRcbi8vICd7fSQlQH4rPTonIHJlc2VydmVkIGZvciBleHRlbnRpb25zXG5cbi8vICEsIFwiLCAjLCAkLCAlLCAmLCAnLCAoLCApLCAqLCArLCAsLCAtLCAuLCAvLCA6LCA7LCA8LCA9LCA+LCA/LCBALCBbLCBcXCwgXSwgXiwgXywgYCwgeywgfCwgfSwgb3IgflxuXG4vLyAhISEhIERvbid0IGNvbmZ1c2Ugd2l0aCBcIk1hcmtkb3duIEFTQ0lJIFB1bmN0dWF0aW9uXCIgY2hhcnNcbi8vIGh0dHA6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMTUvI2FzY2lpLXB1bmN0dWF0aW9uLWNoYXJhY3RlclxuZnVuY3Rpb24gaXNUZXJtaW5hdG9yQ2hhcihjaCkge1xuICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAweDBBLyogXFxuICovOlxuICAgIGNhc2UgMHgyMS8qICEgKi86XG4gICAgY2FzZSAweDIzLyogIyAqLzpcbiAgICBjYXNlIDB4MjQvKiAkICovOlxuICAgIGNhc2UgMHgyNS8qICUgKi86XG4gICAgY2FzZSAweDI2LyogJiAqLzpcbiAgICBjYXNlIDB4MkEvKiAqICovOlxuICAgIGNhc2UgMHgyQi8qICsgKi86XG4gICAgY2FzZSAweDJELyogLSAqLzpcbiAgICBjYXNlIDB4M0EvKiA6ICovOlxuICAgIGNhc2UgMHgzQy8qIDwgKi86XG4gICAgY2FzZSAweDNELyogPSAqLzpcbiAgICBjYXNlIDB4M0UvKiA+ICovOlxuICAgIGNhc2UgMHg0MC8qIEAgKi86XG4gICAgY2FzZSAweDVCLyogWyAqLzpcbiAgICBjYXNlIDB4NUMvKiBcXCAqLzpcbiAgICBjYXNlIDB4NUQvKiBdICovOlxuICAgIGNhc2UgMHg1RS8qIF4gKi86XG4gICAgY2FzZSAweDVGLyogXyAqLzpcbiAgICBjYXNlIDB4NjAvKiBgICovOlxuICAgIGNhc2UgMHg3Qi8qIHsgKi86XG4gICAgY2FzZSAweDdELyogfSAqLzpcbiAgICBjYXNlIDB4N0UvKiB+ICovOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRleHQoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG9zID0gc3RhdGUucG9zO1xuXG4gIHdoaWxlIChwb3MgPCBzdGF0ZS5wb3NNYXggJiYgIWlzVGVybWluYXRvckNoYXIoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSkpIHtcbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXRlLnBvcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGF0ZS5wb3MsIHBvcyk7IH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgZm9yIG1lbW9yeS5cbi8vXG4vLyBJdCBjb3N0cyAxMCUgb2YgcGVyZm9ybWFuY2UsIGJ1dCBhbGxvd3MgZXh0ZW5kIHRlcm1pbmF0b3JzIGxpc3QsIGlmIHBsYWNlIGl0XG4vLyB0byBgUGFyY2VySW5saW5lYCBwcm9wZXJ0eS4gUHJvYmFibHksIHdpbGwgc3dpdGNoIHRvIGl0IHNvbWV0aW1lLCBzdWNoXG4vLyBmbGV4aWJpbGl0eSByZXF1aXJlZC5cblxuLypcbnZhciBURVJNSU5BVE9SX1JFID0gL1tcXG4hIyQlJiorXFwtOjw9PkBbXFxcXFxcXV5fYHt9fl0vO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRleHQoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG9zID0gc3RhdGUucG9zLFxuICAgICAgaWR4ID0gc3RhdGUuc3JjLnNsaWNlKHBvcykuc2VhcmNoKFRFUk1JTkFUT1JfUkUpO1xuXG4gIC8vIGZpcnN0IGNoYXIgaXMgdGVybWluYXRvciAtPiBlbXB0eSB0ZXh0XG4gIGlmIChpZHggPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gbm8gdGVybWluYXRvciAtPiB0ZXh0IHRpbGwgZW5kIG9mIHN0cmluZ1xuICBpZiAoaWR4IDwgMCkge1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHBvcyk7IH1cbiAgICBzdGF0ZS5wb3MgPSBzdGF0ZS5zcmMubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBwb3MgKyBpZHgpOyB9XG5cbiAgc3RhdGUucG9zICs9IGlkeDtcblxuICByZXR1cm4gdHJ1ZTtcbn07Ki9cbiIsIi8vIENsZWFuIHVwIHRva2VucyBhZnRlciBlbXBoYXNpcyBhbmQgc3RyaWtldGhyb3VnaCBwb3N0cHJvY2Vzc2luZzpcbi8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXMgaW50byBvbmUgYW5kIHJlLWNhbGN1bGF0ZSBhbGwgdG9rZW4gbGV2ZWxzXG4vL1xuLy8gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpbml0aWFsbHkgZW1waGFzaXMgZGVsaW1pdGVyIG1hcmtlcnMgKCosIF8sIH4pXG4vLyBhcmUgdHJlYXRlZCBhcyB0aGVpciBvd24gc2VwYXJhdGUgdGV4dCB0b2tlbnMuIFRoZW4gZW1waGFzaXMgcnVsZSBlaXRoZXJcbi8vIGxlYXZlcyB0aGVtIGFzIHRleHQgKG5lZWRlZCB0byBtZXJnZSB3aXRoIGFkamFjZW50IHRleHQpIG9yIHR1cm5zIHRoZW1cbi8vIGludG8gb3BlbmluZy9jbG9zaW5nIHRhZ3MgKHdoaWNoIG1lc3NlcyB1cCBsZXZlbHMgaW5zaWRlKS5cbi8vXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXh0X2NvbGxhcHNlKHN0YXRlKSB7XG4gIHZhciBjdXJyLCBsYXN0LFxuICAgICAgbGV2ZWwgPSAwLFxuICAgICAgdG9rZW5zID0gc3RhdGUudG9rZW5zLFxuICAgICAgbWF4ID0gc3RhdGUudG9rZW5zLmxlbmd0aDtcblxuICBmb3IgKGN1cnIgPSBsYXN0ID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgLy8gcmUtY2FsY3VsYXRlIGxldmVscyBhZnRlciBlbXBoYXNpcy9zdHJpa2V0aHJvdWdoIHR1cm5zIHNvbWUgdGV4dCBub2Rlc1xuICAgIC8vIGludG8gb3BlbmluZy9jbG9zaW5nIHRhZ3NcbiAgICBpZiAodG9rZW5zW2N1cnJdLm5lc3RpbmcgPCAwKSBsZXZlbC0tOyAvLyBjbG9zaW5nIHRhZ1xuICAgIHRva2Vuc1tjdXJyXS5sZXZlbCA9IGxldmVsO1xuICAgIGlmICh0b2tlbnNbY3Vycl0ubmVzdGluZyA+IDApIGxldmVsKys7IC8vIG9wZW5pbmcgdGFnXG5cbiAgICBpZiAodG9rZW5zW2N1cnJdLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICBjdXJyICsgMSA8IG1heCAmJlxuICAgICAgICB0b2tlbnNbY3VyciArIDFdLnR5cGUgPT09ICd0ZXh0Jykge1xuXG4gICAgICAvLyBjb2xsYXBzZSB0d28gYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgdG9rZW5zW2N1cnIgKyAxXS5jb250ZW50ID0gdG9rZW5zW2N1cnJdLmNvbnRlbnQgKyB0b2tlbnNbY3VyciArIDFdLmNvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyICE9PSBsYXN0KSB7IHRva2Vuc1tsYXN0XSA9IHRva2Vuc1tjdXJyXTsgfVxuXG4gICAgICBsYXN0Kys7XG4gICAgfVxuICB9XG5cbiAgaWYgKGN1cnIgIT09IGxhc3QpIHtcbiAgICB0b2tlbnMubGVuZ3RoID0gbGFzdDtcbiAgfVxufTtcbiIsIi8vIFRva2VuIGNsYXNzXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIGNsYXNzIFRva2VuXG4gKiovXG5cbi8qKlxuICogbmV3IFRva2VuKHR5cGUsIHRhZywgbmVzdGluZylcbiAqXG4gKiBDcmVhdGUgbmV3IHRva2VuIGFuZCBmaWxsIHBhc3NlZCBwcm9wZXJ0aWVzLlxuICoqL1xuZnVuY3Rpb24gVG9rZW4odHlwZSwgdGFnLCBuZXN0aW5nKSB7XG4gIC8qKlxuICAgKiBUb2tlbiN0eXBlIC0+IFN0cmluZ1xuICAgKlxuICAgKiBUeXBlIG9mIHRoZSB0b2tlbiAoc3RyaW5nLCBlLmcuIFwicGFyYWdyYXBoX29wZW5cIilcbiAgICoqL1xuICB0aGlzLnR5cGUgICAgID0gdHlwZTtcblxuICAvKipcbiAgICogVG9rZW4jdGFnIC0+IFN0cmluZ1xuICAgKlxuICAgKiBodG1sIHRhZyBuYW1lLCBlLmcuIFwicFwiXG4gICAqKi9cbiAgdGhpcy50YWcgICAgICA9IHRhZztcblxuICAvKipcbiAgICogVG9rZW4jYXR0cnMgLT4gQXJyYXlcbiAgICpcbiAgICogSHRtbCBhdHRyaWJ1dGVzLiBGb3JtYXQ6IGBbIFsgbmFtZTEsIHZhbHVlMSBdLCBbIG5hbWUyLCB2YWx1ZTIgXSBdYFxuICAgKiovXG4gIHRoaXMuYXR0cnMgICAgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNtYXAgLT4gQXJyYXlcbiAgICpcbiAgICogU291cmNlIG1hcCBpbmZvLiBGb3JtYXQ6IGBbIGxpbmVfYmVnaW4sIGxpbmVfZW5kIF1gXG4gICAqKi9cbiAgdGhpcy5tYXAgICAgICA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRva2VuI25lc3RpbmcgLT4gTnVtYmVyXG4gICAqXG4gICAqIExldmVsIGNoYW5nZSAobnVtYmVyIGluIHstMSwgMCwgMX0gc2V0KSwgd2hlcmU6XG4gICAqXG4gICAqIC0gIGAxYCBtZWFucyB0aGUgdGFnIGlzIG9wZW5pbmdcbiAgICogLSAgYDBgIG1lYW5zIHRoZSB0YWcgaXMgc2VsZi1jbG9zaW5nXG4gICAqIC0gYC0xYCBtZWFucyB0aGUgdGFnIGlzIGNsb3NpbmdcbiAgICoqL1xuICB0aGlzLm5lc3RpbmcgID0gbmVzdGluZztcblxuICAvKipcbiAgICogVG9rZW4jbGV2ZWwgLT4gTnVtYmVyXG4gICAqXG4gICAqIG5lc3RpbmcgbGV2ZWwsIHRoZSBzYW1lIGFzIGBzdGF0ZS5sZXZlbGBcbiAgICoqL1xuICB0aGlzLmxldmVsICAgID0gMDtcblxuICAvKipcbiAgICogVG9rZW4jY2hpbGRyZW4gLT4gQXJyYXlcbiAgICpcbiAgICogQW4gYXJyYXkgb2YgY2hpbGQgbm9kZXMgKGlubGluZSBhbmQgaW1nIHRva2VucylcbiAgICoqL1xuICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcblxuICAvKipcbiAgICogVG9rZW4jY29udGVudCAtPiBTdHJpbmdcbiAgICpcbiAgICogSW4gYSBjYXNlIG9mIHNlbGYtY2xvc2luZyB0YWcgKGNvZGUsIGh0bWwsIGZlbmNlLCBldGMuKSxcbiAgICogaXQgaGFzIGNvbnRlbnRzIG9mIHRoaXMgdGFnLlxuICAgKiovXG4gIHRoaXMuY29udGVudCAgPSAnJztcblxuICAvKipcbiAgICogVG9rZW4jbWFya3VwIC0+IFN0cmluZ1xuICAgKlxuICAgKiAnKicgb3IgJ18nIGZvciBlbXBoYXNpcywgZmVuY2Ugc3RyaW5nIGZvciBmZW5jZSwgZXRjLlxuICAgKiovXG4gIHRoaXMubWFya3VwICAgPSAnJztcblxuICAvKipcbiAgICogVG9rZW4jaW5mbyAtPiBTdHJpbmdcbiAgICpcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbjpcbiAgICpcbiAgICogLSBJbmZvIHN0cmluZyBmb3IgXCJmZW5jZVwiIHRva2Vuc1xuICAgKiAtIFRoZSB2YWx1ZSBcImF1dG9cIiBmb3IgYXV0b2xpbmsgXCJsaW5rX29wZW5cIiBhbmQgXCJsaW5rX2Nsb3NlXCIgdG9rZW5zXG4gICAqKi9cbiAgdGhpcy5pbmZvICAgICA9ICcnO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNtZXRhIC0+IE9iamVjdFxuICAgKlxuICAgKiBBIHBsYWNlIGZvciBwbHVnaW5zIHRvIHN0b3JlIGFuIGFyYml0cmFyeSBkYXRhXG4gICAqKi9cbiAgdGhpcy5tZXRhICAgICA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRva2VuI2Jsb2NrIC0+IEJvb2xlYW5cbiAgICpcbiAgICogVHJ1ZSBmb3IgYmxvY2stbGV2ZWwgdG9rZW5zLCBmYWxzZSBmb3IgaW5saW5lIHRva2Vucy5cbiAgICogVXNlZCBpbiByZW5kZXJlciB0byBjYWxjdWxhdGUgbGluZSBicmVha3NcbiAgICoqL1xuICB0aGlzLmJsb2NrICAgID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRva2VuI2hpZGRlbiAtPiBCb29sZWFuXG4gICAqXG4gICAqIElmIGl0J3MgdHJ1ZSwgaWdub3JlIHRoaXMgZWxlbWVudCB3aGVuIHJlbmRlcmluZy4gVXNlZCBmb3IgdGlnaHQgbGlzdHNcbiAgICogdG8gaGlkZSBwYXJhZ3JhcGhzLlxuICAgKiovXG4gIHRoaXMuaGlkZGVuICAgPSBmYWxzZTtcbn1cblxuXG4vKipcbiAqIFRva2VuLmF0dHJJbmRleChuYW1lKSAtPiBOdW1iZXJcbiAqXG4gKiBTZWFyY2ggYXR0cmlidXRlIGluZGV4IGJ5IG5hbWUuXG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0ckluZGV4ID0gZnVuY3Rpb24gYXR0ckluZGV4KG5hbWUpIHtcbiAgdmFyIGF0dHJzLCBpLCBsZW47XG5cbiAgaWYgKCF0aGlzLmF0dHJzKSB7IHJldHVybiAtMTsgfVxuXG4gIGF0dHJzID0gdGhpcy5hdHRycztcblxuICBmb3IgKGkgPSAwLCBsZW4gPSBhdHRycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhdHRyc1tpXVswXSA9PT0gbmFtZSkgeyByZXR1cm4gaTsgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG5cblxuLyoqXG4gKiBUb2tlbi5hdHRyUHVzaChhdHRyRGF0YSlcbiAqXG4gKiBBZGQgYFsgbmFtZSwgdmFsdWUgXWAgYXR0cmlidXRlIHRvIGxpc3QuIEluaXQgYXR0cnMgaWYgbmVjZXNzYXJ5XG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0clB1c2ggPSBmdW5jdGlvbiBhdHRyUHVzaChhdHRyRGF0YSkge1xuICBpZiAodGhpcy5hdHRycykge1xuICAgIHRoaXMuYXR0cnMucHVzaChhdHRyRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hdHRycyA9IFsgYXR0ckRhdGEgXTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFRva2VuLmF0dHJTZXQobmFtZSwgdmFsdWUpXG4gKlxuICogU2V0IGBuYW1lYCBhdHRyaWJ1dGUgdG8gYHZhbHVlYC4gT3ZlcnJpZGUgb2xkIHZhbHVlIGlmIGV4aXN0cy5cbiAqKi9cblRva2VuLnByb3RvdHlwZS5hdHRyU2V0ID0gZnVuY3Rpb24gYXR0clNldChuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWR4ID0gdGhpcy5hdHRySW5kZXgobmFtZSksXG4gICAgICBhdHRyRGF0YSA9IFsgbmFtZSwgdmFsdWUgXTtcblxuICBpZiAoaWR4IDwgMCkge1xuICAgIHRoaXMuYXR0clB1c2goYXR0ckRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cnNbaWR4XSA9IGF0dHJEYXRhO1xuICB9XG59O1xuXG5cbi8qKlxuICogVG9rZW4uYXR0ckdldChuYW1lKVxuICpcbiAqIEdldCB0aGUgdmFsdWUgb2YgYXR0cmlidXRlIGBuYW1lYCwgb3IgbnVsbCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAqKi9cblRva2VuLnByb3RvdHlwZS5hdHRyR2V0ID0gZnVuY3Rpb24gYXR0ckdldChuYW1lKSB7XG4gIHZhciBpZHggPSB0aGlzLmF0dHJJbmRleChuYW1lKSwgdmFsdWUgPSBudWxsO1xuICBpZiAoaWR4ID49IDApIHtcbiAgICB2YWx1ZSA9IHRoaXMuYXR0cnNbaWR4XVsxXTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogVG9rZW4uYXR0ckpvaW4obmFtZSwgdmFsdWUpXG4gKlxuICogSm9pbiB2YWx1ZSB0byBleGlzdGluZyBhdHRyaWJ1dGUgdmlhIHNwYWNlLiBPciBjcmVhdGUgbmV3IGF0dHJpYnV0ZSBpZiBub3RcbiAqIGV4aXN0cy4gVXNlZnVsIHRvIG9wZXJhdGUgd2l0aCB0b2tlbiBjbGFzc2VzLlxuICoqL1xuVG9rZW4ucHJvdG90eXBlLmF0dHJKb2luID0gZnVuY3Rpb24gYXR0ckpvaW4obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkeCA9IHRoaXMuYXR0ckluZGV4KG5hbWUpO1xuXG4gIGlmIChpZHggPCAwKSB7XG4gICAgdGhpcy5hdHRyUHVzaChbIG5hbWUsIHZhbHVlIF0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cnNbaWR4XVsxXSA9IHRoaXMuYXR0cnNbaWR4XVsxXSArICcgJyArIHZhbHVlO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cbnZhciBkZWNvZGVDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBkZWNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgY2FjaGUucHVzaChjaCk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNoID0gZXhjbHVkZS5jaGFyQ29kZUF0KGkpO1xuICAgIGNhY2hlW2NoXSA9ICclJyArICgnMCcgKyBjaC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIERlY29kZSBwZXJjZW50LWVuY29kZWQgc3RyaW5nLlxuLy9cbmZ1bmN0aW9uIGRlY29kZShzdHJpbmcsIGV4Y2x1ZGUpIHtcbiAgdmFyIGNhY2hlO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICBleGNsdWRlID0gZGVjb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RGVjb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oJVthLWYwLTldezJ9KSsvZ2ksIGZ1bmN0aW9uKHNlcSkge1xuICAgIHZhciBpLCBsLCBiMSwgYjIsIGIzLCBiNCwgY2hyLFxuICAgICAgICByZXN1bHQgPSAnJztcblxuICAgIGZvciAoaSA9IDAsIGwgPSBzZXEubGVuZ3RoOyBpIDwgbDsgaSArPSAzKSB7XG4gICAgICBiMSA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMSwgaSArIDMpLCAxNik7XG5cbiAgICAgIGlmIChiMSA8IDB4ODApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNhY2hlW2IxXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEUwKSA9PT0gMHhDMCAmJiAoaSArIDMgPCBsKSkge1xuICAgICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hyID0gKChiMSA8PCA2KSAmIDB4N0MwKSB8IChiMiAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNociA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGMCkgPT09IDB4RTAgJiYgKGkgKyA2IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuICAgICAgICBiMyA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNywgaSArIDkpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hyID0gKChiMSA8PCAxMikgJiAweEYwMDApIHwgKChiMiA8PCA2KSAmIDB4RkMwKSB8IChiMyAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNociA8IDB4ODAwIHx8IChjaHIgPj0gMHhEODAwICYmIGNociA8PSAweERGRkYpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA2O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEY4KSA9PT0gMHhGMCAmJiAoaSArIDkgPCBsKSkge1xuICAgICAgICAvLyAxMTExMTB4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG4gICAgICAgIGIzID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA3LCBpICsgOSksIDE2KTtcbiAgICAgICAgYjQgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEwLCBpICsgMTIpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwICYmIChiNCAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hyID0gKChiMSA8PCAxOCkgJiAweDFDMDAwMCkgfCAoKGIyIDw8IDEyKSAmIDB4M0YwMDApIHwgKChiMyA8PCA2KSAmIDB4RkMwKSB8IChiNCAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNociA8IDB4MTAwMDAgfHwgY2hyID4gMHgxMEZGRkYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociAtPSAweDEwMDAwO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwICsgKGNociA+PiAxMCksIDB4REMwMCArIChjaHIgJiAweDNGRikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gOTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gJ1xcdWZmZmQnO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5cbmRlY29kZS5kZWZhdWx0Q2hhcnMgICA9ICc7Lz86QCY9KyQsIyc7XG5kZWNvZGUuY29tcG9uZW50Q2hhcnMgPSAnJztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbmNvZGVDYWNoZSA9IHt9O1xuXG5cbi8vIENyZWF0ZSBhIGxvb2t1cCBhcnJheSB3aGVyZSBhbnl0aGluZyBidXQgY2hhcmFjdGVycyBpbiBgY2hhcnNgIHN0cmluZ1xuLy8gYW5kIGFscGhhbnVtZXJpYyBjaGFycyBpcyBwZXJjZW50LWVuY29kZWQuXG4vL1xuZnVuY3Rpb24gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuXG4gICAgaWYgKC9eWzAtOWEtel0kL2kudGVzdChjaCkpIHtcbiAgICAgIC8vIGFsd2F5cyBhbGxvdyB1bmVuY29kZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcbiAgICAgIGNhY2hlLnB1c2goY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5wdXNoKCclJyArICgnMCcgKyBpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMikpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FjaGVbZXhjbHVkZS5jaGFyQ29kZUF0KGkpXSA9IGV4Y2x1ZGVbaV07XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZShzdHJpbmcsIGV4Y2x1ZGUsIGtlZXBFc2NhcGVkKSB7XG4gIHZhciBpLCBsLCBjb2RlLCBuZXh0Q29kZSwgY2FjaGUsXG4gICAgICByZXN1bHQgPSAnJztcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgID0gZXhjbHVkZTtcbiAgICBleGNsdWRlID0gZW5jb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FjaGUgPSBnZXRFbmNvZGVDYWNoZShleGNsdWRlKTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChrZWVwRXNjYXBlZCAmJiBjb2RlID09PSAweDI1IC8qICUgKi8gJiYgaSArIDIgPCBsKSB7XG4gICAgICBpZiAoL15bMC05YS1mXXsyfSQvaS50ZXN0KHN0cmluZy5zbGljZShpICsgMSwgaSArIDMpKSkge1xuICAgICAgICByZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGksIGkgKyAzKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgcmVzdWx0ICs9IGNhY2hlW2NvZGVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBpZiAobmV4dENvZGUgPj0gMHhEQzAwICYmIG5leHRDb2RlIDw9IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldICsgc3RyaW5nW2kgKyAxXSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gJyVFRiVCRiVCRCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5lbmNvZGUuZGVmYXVsdENoYXJzICAgPSBcIjsvPzpAJj0rJCwtXy4hfionKCkjXCI7XG5lbmNvZGUuY29tcG9uZW50Q2hhcnMgPSBcIi1fLiF+KicoKVwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuIiwiXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JtYXQodXJsKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICByZXN1bHQgKz0gdXJsLnByb3RvY29sIHx8ICcnO1xuICByZXN1bHQgKz0gdXJsLnNsYXNoZXMgPyAnLy8nIDogJyc7XG4gIHJlc3VsdCArPSB1cmwuYXV0aCA/IHVybC5hdXRoICsgJ0AnIDogJyc7XG5cbiAgaWYgKHVybC5ob3N0bmFtZSAmJiB1cmwuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIC8vIGlwdjYgYWRkcmVzc1xuICAgIHJlc3VsdCArPSAnWycgKyB1cmwuaG9zdG5hbWUgKyAnXSc7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ICs9IHVybC5ob3N0bmFtZSB8fCAnJztcbiAgfVxuXG4gIHJlc3VsdCArPSB1cmwucG9ydCA/ICc6JyArIHVybC5wb3J0IDogJyc7XG4gIHJlc3VsdCArPSB1cmwucGF0aG5hbWUgfHwgJyc7XG4gIHJlc3VsdCArPSB1cmwuc2VhcmNoIHx8ICcnO1xuICByZXN1bHQgKz0gdXJsLmhhc2ggfHwgJyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMuZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5mb3JtYXQgPSByZXF1aXJlKCcuL2Zvcm1hdCcpO1xubW9kdWxlLmV4cG9ydHMucGFyc2UgID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy9cbi8vIENoYW5nZXMgZnJvbSBqb3llbnQvbm9kZTpcbi8vXG4vLyAxLiBObyBsZWFkaW5nIHNsYXNoIGluIHBhdGhzLFxuLy8gICAgZS5nLiBpbiBgdXJsLnBhcnNlKCdodHRwOi8vZm9vP2JhcicpYCBwYXRobmFtZSBpcyBgYCwgbm90IGAvYFxuLy9cbi8vIDIuIEJhY2tzbGFzaGVzIGFyZSBub3QgcmVwbGFjZWQgd2l0aCBzbGFzaGVzLFxuLy8gICAgc28gYGh0dHA6XFxcXGV4YW1wbGUub3JnXFxgIGlzIHRyZWF0ZWQgbGlrZSBhIHJlbGF0aXZlIHBhdGhcbi8vXG4vLyAzLiBUcmFpbGluZyBjb2xvbiBpcyB0cmVhdGVkIGxpa2UgYSBwYXJ0IG9mIHRoZSBwYXRoLFxuLy8gICAgaS5lLiBpbiBgaHR0cDovL2V4YW1wbGUub3JnOmZvb2AgcGF0aG5hbWUgaXMgYDpmb29gXG4vL1xuLy8gNC4gTm90aGluZyBpcyBVUkwtZW5jb2RlZCBpbiB0aGUgcmVzdWx0aW5nIG9iamVjdCxcbi8vICAgIChpbiBqb3llbnQvbm9kZSBzb21lIGNoYXJzIGluIGF1dGggYW5kIHBhdGhzIGFyZSBlbmNvZGVkKVxuLy9cbi8vIDUuIGB1cmwucGFyc2UoKWAgZG9lcyBub3QgaGF2ZSBgcGFyc2VRdWVyeVN0cmluZ2AgYXJndW1lbnRcbi8vXG4vLyA2LiBSZW1vdmVkIGV4dHJhbmVvdXMgcmVzdWx0IHByb3BlcnRpZXM6IGBob3N0YCwgYHBhdGhgLCBgcXVlcnlgLCBldGMuLFxuLy8gICAgd2hpY2ggY2FuIGJlIGNvbnN0cnVjdGVkIHVzaW5nIG90aGVyIHBhcnRzIG9mIHRoZSB1cmwuXG4vL1xuXG5cbmZ1bmN0aW9uIFVybCgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG4gIHRoaXMuc2xhc2hlcyA9IG51bGw7XG4gIHRoaXMuYXV0aCA9IG51bGw7XG4gIHRoaXMucG9ydCA9IG51bGw7XG4gIHRoaXMuaG9zdG5hbWUgPSBudWxsO1xuICB0aGlzLmhhc2ggPSBudWxsO1xuICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBhIHNpbXBsZSBwYXRoIFVSTFxuICAgIHNpbXBsZVBhdGhQYXR0ZXJuID0gL14oXFwvXFwvPyg/IVxcLylbXlxcP1xcc10qKShcXD9bXlxcc10qKT8kLyxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIHJlc2VydmVkIGZvciBkZWxpbWl0aW5nIFVSTHMuXG4gICAgLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cbiAgICBkZWxpbXMgPSBbICc8JywgJz4nLCAnXCInLCAnYCcsICcgJywgJ1xccicsICdcXG4nLCAnXFx0JyBdLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbICd7JywgJ30nLCAnfCcsICdcXFxcJywgJ14nLCAnYCcgXS5jb25jYXQoZGVsaW1zKSxcblxuICAgIC8vIEFsbG93ZWQgYnkgUkZDcywgYnV0IGNhdXNlIG9mIFhTUyBhdHRhY2tzLiAgQWx3YXlzIGVzY2FwZSB0aGVzZS5cbiAgICBhdXRvRXNjYXBlID0gWyAnXFwnJyBdLmNvbmNhdCh1bndpc2UpLFxuICAgIC8vIENoYXJhY3RlcnMgdGhhdCBhcmUgbmV2ZXIgZXZlciBhbGxvd2VkIGluIGEgaG9zdG5hbWUuXG4gICAgLy8gTm90ZSB0aGF0IGFueSBpbnZhbGlkIGNoYXJzIGFyZSBhbHNvIGhhbmRsZWQsIGJ1dCB0aGVzZVxuICAgIC8vIGFyZSB0aGUgb25lcyB0aGF0IGFyZSAqZXhwZWN0ZWQqIHRvIGJlIHNlZW4sIHNvIHdlIGZhc3QtcGF0aFxuICAgIC8vIHRoZW0uXG4gICAgbm9uSG9zdENoYXJzID0gWyAnJScsICcvJywgJz8nLCAnOycsICcjJyBdLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbICcvJywgJz8nLCAnIycgXSxcbiAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcbiAgICBob3N0bmFtZVBhcnRQYXR0ZXJuID0gL15bK2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oWythLXowLTlBLVpfLV17MCw2M30pKC4qKSQvLFxuICAgIC8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNjcmlwdC11cmwgKi9cbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1zY3JpcHQtdXJsICovXG5cbmZ1bmN0aW9uIHVybFBhcnNlKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKHVybCAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHsgcmV0dXJuIHVybDsgfVxuXG4gIHZhciB1ID0gbmV3IFVybCgpO1xuICB1LnBhcnNlKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgdmFyIGksIGwsIGxvd2VyUHJvdG8sIGhlYywgc2xhc2hlcyxcbiAgICAgIHJlc3QgPSB1cmw7XG5cbiAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgLy8gVGhpcyBpcyB0byBzdXBwb3J0IHBhcnNlIHN0dWZmIGxpa2UgXCIgIGh0dHA6Ly9mb28uY29tICBcXG5cIlxuICByZXN0ID0gcmVzdC50cmltKCk7XG5cbiAgaWYgKCFzbGFzaGVzRGVub3RlSG9zdCAmJiB1cmwuc3BsaXQoJyMnKS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBUcnkgZmFzdCBwYXRoIHJlZ2V4cFxuICAgIHZhciBzaW1wbGVQYXRoID0gc2ltcGxlUGF0aFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgICBpZiAoc2ltcGxlUGF0aCkge1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV07XG4gICAgICBpZiAoc2ltcGxlUGF0aFsyXSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNpbXBsZVBhdGhbMl07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgaWYgKHByb3RvKSB7XG4gICAgcHJvdG8gPSBwcm90b1swXTtcbiAgICBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gcHJvdG87XG4gICAgcmVzdCA9IHJlc3Quc3Vic3RyKHByb3RvLmxlbmd0aCk7XG4gIH1cblxuICAvLyBmaWd1cmUgb3V0IGlmIGl0J3MgZ290IGEgaG9zdFxuICAvLyB1c2VyQHNlcnZlciBpcyAqYWx3YXlzKiBpbnRlcnByZXRlZCBhcyBhIGhvc3RuYW1lLCBhbmQgdXJsXG4gIC8vIHJlc29sdXRpb24gd2lsbCB0cmVhdCAvL2Zvby9iYXIgYXMgaG9zdD1mb28scGF0aD1iYXIgYmVjYXVzZSB0aGF0J3NcbiAgLy8gaG93IHRoZSBicm93c2VyIHJlc29sdmVzIHJlbGF0aXZlIFVSTHMuXG4gIGlmIChzbGFzaGVzRGVub3RlSG9zdCB8fCBwcm90byB8fCByZXN0Lm1hdGNoKC9eXFwvXFwvW15AXFwvXStAW15AXFwvXSsvKSkge1xuICAgIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaG9zdEVuZGluZ0NoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoZWMgPSByZXN0LmluZGV4T2YoaG9zdEVuZGluZ0NoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSkge1xuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgfVxuXG4gICAgLy8gdGhlIGhvc3QgaXMgdGhlIHJlbWFpbmluZyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3Qgbm9uLWhvc3QgY2hhclxuICAgIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoZWMgPSByZXN0LmluZGV4T2Yobm9uSG9zdENoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSkge1xuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB3ZSBzdGlsbCBoYXZlIG5vdCBoaXQgaXQsIHRoZW4gdGhlIGVudGlyZSB0aGluZyBpcyBhIGhvc3QuXG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHJlc3RbaG9zdEVuZCAtIDFdID09PSAnOicpIHsgaG9zdEVuZC0tOyB9XG4gICAgdmFyIGhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdChob3N0KTtcblxuICAgIC8vIHdlJ3ZlIGluZGljYXRlZCB0aGF0IHRoZXJlIGlzIGEgaG9zdG5hbWUsXG4gICAgLy8gc28gZXZlbiBpZiBpdCdzIGVtcHR5LCBpdCBoYXMgdG8gYmUgcHJlc2VudC5cbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcblxuICAgIC8vIGlmIGhvc3RuYW1lIGJlZ2lucyB3aXRoIFsgYW5kIGVuZHMgd2l0aCBdXG4gICAgLy8gYXNzdW1lIHRoYXQgaXQncyBhbiBJUHY2IGFkZHJlc3MuXG4gICAgdmFyIGlwdjZIb3N0bmFtZSA9IHRoaXMuaG9zdG5hbWVbMF0gPT09ICdbJyAmJlxuICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJztcblxuICAgIC8vIHZhbGlkYXRlIGEgbGl0dGxlLlxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB2YXIgaG9zdHBhcnRzID0gdGhpcy5ob3N0bmFtZS5zcGxpdCgvXFwuLyk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSB7IGNvbnRpbnVlOyB9XG4gICAgICAgIGlmICghcGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgIHZhciBuZXdwYXJ0ID0gJyc7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBwYXJ0Lmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnQuY2hhckNvZGVBdChqKSA+IDEyNykge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBzaXplIG9mIGhvc3RuYW1lIGlzIG5vdFxuICAgICAgICAgICAgICAvLyBicm9rZW4gYnkgcmVwbGFjaW5nIG5vbi1BU0NJSSBieSBub3RoaW5nXG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3cGFydCArPSBwYXJ0W2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3ZSB0ZXN0IGFnYWluIHdpdGggQVNDSUkgY2hhciBvbmx5XG4gICAgICAgICAgaWYgKCFuZXdwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRQYXJ0cyA9IGhvc3RwYXJ0cy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHZhciBub3RIb3N0ID0gaG9zdHBhcnRzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgIHZhciBiaXQgPSBwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICAgICAgdmFsaWRQYXJ0cy5wdXNoKGJpdFsxXSk7XG4gICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdEhvc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlc3QgPSBub3RIb3N0LmpvaW4oJy4nKSArIHJlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gdmFsaWRQYXJ0cy5qb2luKCcuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob3N0bmFtZS5sZW5ndGggPiBob3N0bmFtZU1heExlbikge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIHN0cmlwIFsgYW5kIF0gZnJvbSB0aGUgaG9zdG5hbWVcbiAgICAvLyB0aGUgaG9zdCBmaWVsZCBzdGlsbCByZXRhaW5zIHRoZW0sIHRob3VnaFxuICAgIGlmIChpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnN1YnN0cigxLCB0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIHZhciBoYXNoID0gcmVzdC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoICE9PSAtMSkge1xuICAgIC8vIGdvdCBhIGZyYWdtZW50IHN0cmluZy5cbiAgICB0aGlzLmhhc2ggPSByZXN0LnN1YnN0cihoYXNoKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcbiAgfVxuICB2YXIgcW0gPSByZXN0LmluZGV4T2YoJz8nKTtcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcbiAgfVxuICBpZiAocmVzdCkgeyB0aGlzLnBhdGhuYW1lID0gcmVzdDsgfVxuICBpZiAoc2xhc2hlZFByb3RvY29sW2xvd2VyUHJvdG9dICYmXG4gICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG4gICAgdGhpcy5wYXRobmFtZSA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKGhvc3QpIHtcbiAgdmFyIHBvcnQgPSBwb3J0UGF0dGVybi5leGVjKGhvc3QpO1xuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdO1xuICAgIGlmIChwb3J0ICE9PSAnOicpIHtcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCwgaG9zdC5sZW5ndGggLSBwb3J0Lmxlbmd0aCk7XG4gIH1cbiAgaWYgKGhvc3QpIHsgdGhpcy5ob3N0bmFtZSA9IGhvc3Q7IH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXJsUGFyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1gJHtpZH0gJHtjb3VudH1gO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChrZXk9PntzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/YEBtZWRpYSAke29iai5tZWRpYX0geyR7b2JqLmNzc319YDpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPWBcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCR7YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKX0gKi9gO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPSgpPT57cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9KGxpc3Qsb3B0aW9ucyk9PntvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFya2Rvd24tYm9keSAub2N0aWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5hbmNob3Ige1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmFuY2hvcjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGgyIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDMgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNCAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg1IC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDYgLm9jdGljb24tbGluayB7XFxuICBjb2xvcjogIzFiMWYyMztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDI6aG92ZXIgLmFuY2hvcixcXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yLFxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDU6aG92ZXIgLmFuY2hvcixcXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDE6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGgyOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDQ6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg1OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmsge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDE6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoMjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxcbi5tYXJrZG93bi1ib2R5IGgzOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXFxuLm1hcmtkb3duLWJvZHkgaDQ6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoNTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxcbi5tYXJrZG93bi1ib2R5IGg2OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBhcmlhLWhpZGRlbj0ndHJ1ZSclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTQgOWgxdjFINGMtMS41IDAtMy0xLjY5LTMtMy41UzIuNTUgMyA0IDNoNGMxLjQ1IDAgMyAxLjY5IDMgMy41IDAgMS40MS0uOTEgMi43Mi0yIDMuMjVWOC41OWMuNTgtLjQ1IDEtMS4yNyAxLTIuMDlDMTAgNS4yMiA4Ljk4IDQgOCA0SDRjLS45OCAwLTIgMS4yMi0yIDIuNVMzIDkgNCA5em05LTNoLTF2MWgxYzEgMCAyIDEuMjIgMiAyLjVTMTMuOTggMTIgMTMgMTJIOWMtLjk4IDAtMi0xLjIyLTItMi41IDAtLjgzLjQyLTEuNjQgMS0yLjA5VjYuMjVjLTEuMDkuNTMtMiAxLjg0LTIgMy4yNUM2IDExLjMxIDcuNTUgMTMgOSAxM2g0YzEuNDUgMCAzLTEuNjkgMy0zLjVTMTQuNSA2IDEzIDZ6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn0ubWFya2Rvd24tYm9keSB7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzI0MjkyZTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYTphY3RpdmUsXFxuLm1hcmtkb3duLWJvZHkgYTpob3ZlciB7XFxuICBvdXRsaW5lLXdpZHRoOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBzdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogLjY3ZW0gMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgY29kZSxcXG4ubWFya2Rvd24tYm9keSBrYmQsXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBbdHlwZT1jaGVja2JveF0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGEge1xcbiAgY29sb3I6ICMwMzY2ZDY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHN0cm9uZyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBoZWlnaHQ6IDA7XFxuICBtYXJnaW46IDE1cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlMmU1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBocjphZnRlcixcXG4ubWFya2Rvd24tYm9keSBocjpiZWZvcmUge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaHI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGQsXFxuLm1hcmtkb3duLWJvZHkgdGgge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGV0YWlscyBzdW1tYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkga2JkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250OiAxMXB4IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBsaW5lLWhlaWdodDogMTBweDtcXG4gIGNvbG9yOiAjNDQ0ZDU2O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRhO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZDFkNWRhO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZDFkNWRhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMixcXG4ubWFya2Rvd24tYm9keSBoMyxcXG4ubWFya2Rvd24tYm9keSBoNCxcXG4ubWFya2Rvd24tYm9keSBoNSxcXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDMsXFxuLm1hcmtkb3duLWJvZHkgaDQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg1LFxcbi5tYXJrZG93bi1ib2R5IGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg2IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IG9sLFxcbi5tYXJrZG93bi1ib2R5IHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCBvbCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSBvbCB1bCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB1bCBvbCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLWFscGhhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkZCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgY29kZSxcXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHByZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuLm1hcmtkb3duLWJvZHkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgOmNoZWNrZWQrLnJhZGlvLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItY29sb3I6ICMwMzY2ZDY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ib3JkZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTRlOCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ib3JkZXItMCB7XFxuICBib3JkZXI6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTRlOCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5yb3VuZGVkLTEge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmctZ3JheS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRleHQtZ3JheS1saWdodCB7XFxuICBjb2xvcjogIzZhNzM3ZCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubXktMiB7XFxuICBtYXJnaW4tdG9wOiA4cHghaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTAge1xcbiAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDRweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDhweCFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTMsXFxuLm1hcmtkb3duLWJvZHkgLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB4LTMge1xcbiAgcGFkZGluZy1yaWdodDogMTZweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC00IHtcXG4gIHBhZGRpbmctbGVmdDogMjRweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC01IHtcXG4gIHBhZGRpbmctbGVmdDogMzJweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC02IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5mNiB7XFxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubGgtY29uZGVuc2VkIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRleHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWMge1xcbiAgY29sb3I6ICM2YTczN2Q7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jMSxcXG4ubWFya2Rvd24tYm9keSAucGwtcyAucGwtdiB7XFxuICBjb2xvcjogIzAwNWNjNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWUsXFxuLm1hcmtkb3duLWJvZHkgLnBsLWVuIHtcXG4gIGNvbG9yOiAjNmY0MmMxO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtcyAucGwtczEsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNtaSB7XFxuICBjb2xvcjogIzI0MjkyZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWVudCB7XFxuICBjb2xvcjogIzIyODYzYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWsge1xcbiAgY29sb3I6ICNkNzNhNDk7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1wZHMsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXBzZSAucGwtczEsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtY2NlLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtc3JhLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtc3JlIHtcXG4gIGNvbG9yOiAjMDMyZjYyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtc213LFxcbi5tYXJrZG93bi1ib2R5IC5wbC12IHtcXG4gIGNvbG9yOiAjZTM2MjA5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYnUge1xcbiAgY29sb3I6ICNiMzFkMjg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1paSB7XFxuICBjb2xvcjogI2ZhZmJmYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMzFkMjg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jMiB7XFxuICBjb2xvcjogI2ZhZmJmYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzNhNDk7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIl5NXFxcIjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyIC5wbC1jY2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMjI4NjNhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWwge1xcbiAgY29sb3I6ICM3MzVjMGY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taCxcXG4ubWFya2Rvd24tYm9keSAucGwtbWggLnBsLWVuLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1tcyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMwMDVjYzU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzI0MjkyZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1iIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzI0MjkyZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1kIHtcXG4gIGNvbG9yOiAjYjMxZDI4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVmMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1pMSB7XFxuICBjb2xvcjogIzIyODYzYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1tYyB7XFxuICBjb2xvcjogI2UzNjIwOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZGE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taTIge1xcbiAgY29sb3I6ICNmNmY4ZmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Y2M1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWRyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzZmNDJjMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWJhIHtcXG4gIGNvbG9yOiAjNTg2MDY5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtc2cge1xcbiAgY29sb3I6ICM5NTlkYTU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jb3JsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICMwMzJmNjI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubXktMiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubXktMiB7XFxuICBtYXJnaW4tdG9wOiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucHktMCB7XFxuICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0xIHtcXG4gIHBhZGRpbmctbGVmdDogNHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTIge1xcbiAgcGFkZGluZy1sZWZ0OiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucHktMiB7XFxuICBwYWRkaW5nLXRvcDogOHB4IWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDY0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtOSB7XFxuICBwYWRkaW5nLWxlZnQ6IDgwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiA5NnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTExIHtcXG4gIHBhZGRpbmctbGVmdDogMTEycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlZWU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGtiZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgZm9udDogMTFweCBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICBjb2xvcjogIzQ0NGQ1NjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2QxZDVkYTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2QxZDVkYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHk6YWZ0ZXIsXFxuLm1hcmtkb3duLWJvZHk6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keT46Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5PjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBhOm5vdChbaHJlZl0pIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlLFxcbi5tYXJrZG93bi1ib2R5IGRldGFpbHMsXFxuLm1hcmtkb3duLWJvZHkgZGwsXFxuLm1hcmtkb3duLWJvZHkgb2wsXFxuLm1hcmtkb3duLWJvZHkgcCxcXG4ubWFya2Rvd24tYm9keSBwcmUsXFxuLm1hcmtkb3duLWJvZHkgdGFibGUsXFxuLm1hcmtkb3duLWJvZHkgdWwge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyIHtcXG4gIGhlaWdodDogLjI1ZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAyNHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlNGU4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlIHtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgY29sb3I6ICM2YTczN2Q7XFxuICBib3JkZXItbGVmdDogLjI1ZW0gc29saWQgI2RmZTJlNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZT46Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZT46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMixcXG4ubWFya2Rvd24tYm9keSBoMyxcXG4ubWFya2Rvd24tYm9keSBoNCxcXG4ubWFya2Rvd24tYm9keSBoNSxcXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxLFxcbi5tYXJrZG93bi1ib2R5IGgyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAuM2VtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVjZWY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgyIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDUge1xcbiAgZm9udC1zaXplOiAuODc1ZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg2IHtcXG4gIGZvbnQtc2l6ZTogLjg1ZW07XFxuICBjb2xvcjogIzZhNzM3ZDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgb2wsXFxuLm1hcmtkb3duLWJvZHkgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IG9sIG9sLFxcbi5tYXJrZG93bi1ib2R5IG9sIHVsLFxcbi5tYXJrZG93bi1ib2R5IHVsIG9sLFxcbi5tYXJrZG93bi1ib2R5IHVsIHVsIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBsaSB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgbGk+cCB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBsaStsaSB7XFxuICBtYXJnaW4tdG9wOiAuMjVlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgZGwgZHQge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRsIGRkIHtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUgdGgge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUgdGQsXFxuLm1hcmtkb3duLWJvZHkgdGFibGUgdGgge1xcbiAgcGFkZGluZzogNnB4IDEzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0ciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjNmNiZDE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW1nW2FsaWduPXJpZ2h0XSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZ1thbGlnbj1sZWZ0XSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBjb2RlIHtcXG4gIHBhZGRpbmc6IC4yZW0gLjRlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogODUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywzMSwzNSwuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHByZT5jb2RlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmhpZ2hsaWdodCBwcmUge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmhpZ2hsaWdodCBwcmUsXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZvbnQtc2l6ZTogODUlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUgY29kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuY29tbWl0LXRlYXNlLXNoYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgY29sb3I6ICM0NDRkNTY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5mdWxsLWNvbW1pdCAuYnRuLW91dGxpbmU6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgY29sb3I6ICMwMDVjYzU7XFxuICBib3JkZXItY29sb3I6ICMwMDVjYzU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2Itd3JhcHBlci1lbWJlZGRlZCB7XFxuICBtYXgtaGVpZ2h0OiAyNDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLW51bSB7XFxuICB3aWR0aDogMSU7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zKTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLW51bTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNywzMSwzNSwuNik7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLW51bTpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLWxpbmUtbnVtYmVyKTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2ItY29kZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1jb2RlLWlubmVyIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI0MjkyZTtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXRva2VuLmFjdGl2ZSxcXG4ubWFya2Rvd24tYm9keSAucGwtdG9rZW46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZWE3ZjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjFcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAxO1xcbiAgdGFiLXNpemU6IDE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIyXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMjtcXG4gIHRhYi1zaXplOiAyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiM1xcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDM7XFxuICB0YWItc2l6ZTogMztcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjRcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgdGFiLXNpemU6IDQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI1XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogNTtcXG4gIHRhYi1zaXplOiA1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiNlxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDY7XFxuICB0YWItc2l6ZTogNjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjdcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA3O1xcbiAgdGFiLXNpemU6IDc7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI4XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogODtcXG4gIHRhYi1zaXplOiA4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiOVxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDk7XFxuICB0YWItc2l6ZTogOTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjEwXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMTA7XFxuICB0YWItc2l6ZTogMTA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIxMVxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDExO1xcbiAgdGFiLXNpemU6IDExO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiMTJcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAxMjtcXG4gIHRhYi1zaXplOiAxMjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhc2stbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhc2stbGlzdC1pdGVtKy50YXNrLWxpc3QtaXRlbSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YXNrLWxpc3QtaXRlbSBpbnB1dCB7XFxuICBtYXJnaW46IDAgLjJlbSAuMjVlbSAtMS42ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL2dpdGh1Yi1tYXJrZG93bi1jc3MvZ2l0aHViLW1hcmtkb3duLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wi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RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFya2Rvd24tYm9keSAub2N0aWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5hbmNob3Ige1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmFuY2hvcjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGgyIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDMgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNCAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg1IC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDYgLm9jdGljb24tbGluayB7XFxuICBjb2xvcjogIzFiMWYyMztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxOmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDI6aG92ZXIgLmFuY2hvcixcXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yLFxcbi5tYXJrZG93bi1ib2R5IGg0OmhvdmVyIC5hbmNob3IsXFxuLm1hcmtkb3duLWJvZHkgaDU6aG92ZXIgLmFuY2hvcixcXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDE6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGgyOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXFxuLm1hcmtkb3duLWJvZHkgaDQ6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rLFxcbi5tYXJrZG93bi1ib2R5IGg1OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluayxcXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmsge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDE6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoMjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxcbi5tYXJrZG93bi1ib2R5IGgzOmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUsXFxuLm1hcmtkb3duLWJvZHkgaDQ6aG92ZXIgLmFuY2hvciAub2N0aWNvbi1saW5rOmJlZm9yZSxcXG4ubWFya2Rvd24tYm9keSBoNTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbms6YmVmb3JlLFxcbi5tYXJrZG93bi1ib2R5IGg2OmhvdmVyIC5hbmNob3IgLm9jdGljb24tbGluazpiZWZvcmUge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBhcmlhLWhpZGRlbj0ndHJ1ZSclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTQgOWgxdjFINGMtMS41IDAtMy0xLjY5LTMtMy41UzIuNTUgMyA0IDNoNGMxLjQ1IDAgMyAxLjY5IDMgMy41IDAgMS40MS0uOTEgMi43Mi0yIDMuMjVWOC41OWMuNTgtLjQ1IDEtMS4yNyAxLTIuMDlDMTAgNS4yMiA4Ljk4IDQgOCA0SDRjLS45OCAwLTIgMS4yMi0yIDIuNVMzIDkgNCA5em05LTNoLTF2MWgxYzEgMCAyIDEuMjIgMiAyLjVTMTMuOTggMTIgMTMgMTJIOWMtLjk4IDAtMi0xLjIyLTItMi41IDAtLjgzLjQyLTEuNjQgMS0yLjA5VjYuMjVjLTEuMDkuNTMtMiAxLjg0LTIgMy4yNUM2IDExLjMxIDcuNTUgMTMgOSAxM2g0YzEuNDUgMCAzLTEuNjkgMy0zLjVTMTQuNSA2IDEzIDZ6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn0ubWFya2Rvd24tYm9keSB7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzI0MjkyZTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGE6YWN0aXZlLFxcbi5tYXJrZG93bi1ib2R5IGE6aG92ZXIge1xcbiAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IC42N2VtIDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGNvZGUsXFxuLm1hcmtkb3duLWJvZHkga2JkLFxcbi5tYXJrZG93bi1ib2R5IHByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBbdHlwZT1jaGVja2JveF0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYSB7XFxuICBjb2xvcjogIzAzNjZkNjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyIHtcXG4gIGhlaWdodDogMDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmUyZTU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyOmFmdGVyLFxcbi5tYXJrZG93bi1ib2R5IGhyOmJlZm9yZSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBocjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUge1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0ZCxcXG4ubWFya2Rvd24tYm9keSB0aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzIHN1bW1hcnkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBrYmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQ6IDExcHggU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICM0NDRkNTY7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGE7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZDFkNWRhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMixcXG4ubWFya2Rvd24tYm9keSBoMyxcXG4ubWFya2Rvd24tYm9keSBoNCxcXG4ubWFya2Rvd24tYm9keSBoNSxcXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDMsXFxuLm1hcmtkb3duLWJvZHkgaDQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg1LFxcbi5tYXJrZG93bi1ib2R5IGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg2IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IG9sLFxcbi5tYXJrZG93bi1ib2R5IHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCBvbCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSBvbCB1bCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB1bCBvbCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLWFscGhhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkZCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgY29kZSxcXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHByZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuLm1hcmtkb3duLWJvZHkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgOmNoZWNrZWQrLnJhZGlvLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItY29sb3I6ICMwMzY2ZDY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ib3JkZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTRlOCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ib3JkZXItMCB7XFxuICBib3JkZXI6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTRlOCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5yb3VuZGVkLTEge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmctZ3JheS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRleHQtZ3JheS1saWdodCB7XFxuICBjb2xvcjogIzZhNzM3ZCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubXktMiB7XFxuICBtYXJnaW4tdG9wOiA4cHghaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTAge1xcbiAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDRweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDhweCFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTMsXFxuLm1hcmtkb3duLWJvZHkgLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnB4LTMge1xcbiAgcGFkZGluZy1yaWdodDogMTZweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC00IHtcXG4gIHBhZGRpbmctbGVmdDogMjRweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC01IHtcXG4gIHBhZGRpbmctbGVmdDogMzJweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC02IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5mNiB7XFxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubGgtY29uZGVuc2VkIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRleHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWMge1xcbiAgY29sb3I6ICM2YTczN2Q7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jMSxcXG4ubWFya2Rvd24tYm9keSAucGwtcyAucGwtdiB7XFxuICBjb2xvcjogIzAwNWNjNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWUsXFxuLm1hcmtkb3duLWJvZHkgLnBsLWVuIHtcXG4gIGNvbG9yOiAjNmY0MmMxO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtcyAucGwtczEsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNtaSB7XFxuICBjb2xvcjogIzI0MjkyZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWVudCB7XFxuICBjb2xvcjogIzIyODYzYTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWsge1xcbiAgY29sb3I6ICNkNzNhNDk7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1wZHMsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXBzZSAucGwtczEsXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtY2NlLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtc3JhLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtc3JlIHtcXG4gIGNvbG9yOiAjMDMyZjYyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtc213LFxcbi5tYXJrZG93bi1ib2R5IC5wbC12IHtcXG4gIGNvbG9yOiAjZTM2MjA5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtYnUge1xcbiAgY29sb3I6ICNiMzFkMjg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1paSB7XFxuICBjb2xvcjogI2ZhZmJmYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMzFkMjg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jMiB7XFxuICBjb2xvcjogI2ZhZmJmYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzNhNDk7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIl5NXFxcIjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyIC5wbC1jY2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMjI4NjNhO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWwge1xcbiAgY29sb3I6ICM3MzVjMGY7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taCxcXG4ubWFya2Rvd24tYm9keSAucGwtbWggLnBsLWVuLFxcbi5tYXJrZG93bi1ib2R5IC5wbC1tcyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMwMDVjYzU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzI0MjkyZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1iIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzI0MjkyZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1kIHtcXG4gIGNvbG9yOiAjYjMxZDI4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVmMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLW1pMSB7XFxuICBjb2xvcjogIzIyODYzYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1tYyB7XFxuICBjb2xvcjogI2UzNjIwOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZGE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1taTIge1xcbiAgY29sb3I6ICNmNmY4ZmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Y2M1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtbWRyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzZmNDJjMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLWJhIHtcXG4gIGNvbG9yOiAjNTg2MDY5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtc2cge1xcbiAgY29sb3I6ICM5NTlkYTU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC1jb3JsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICMwMzJmNjI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubXktMiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAubXktMiB7XFxuICBtYXJnaW4tdG9wOiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucHktMCB7XFxuICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5wbC0xIHtcXG4gIHBhZGRpbmctbGVmdDogNHB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTIge1xcbiAgcGFkZGluZy1sZWZ0OiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucHktMiB7XFxuICBwYWRkaW5nLXRvcDogOHB4IWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtNyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ4cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDY0cHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtOSB7XFxuICBwYWRkaW5nLWxlZnQ6IDgwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiA5NnB4IWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnBsLTExIHtcXG4gIHBhZGRpbmctbGVmdDogMTEycHghaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjhweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGhyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlZWU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGtiZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgZm9udDogMTFweCBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICBjb2xvcjogIzQ0NGQ1NjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkMWQ1ZGE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5OmFmdGVyLFxcbi5tYXJrZG93bi1ib2R5OmJlZm9yZSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHk+OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keT46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYTpub3QoW2hyZWZdKSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSxcXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzLFxcbi5tYXJrZG93bi1ib2R5IGRsLFxcbi5tYXJrZG93bi1ib2R5IG9sLFxcbi5tYXJrZG93bi1ib2R5IHAsXFxuLm1hcmtkb3duLWJvZHkgcHJlLFxcbi5tYXJrZG93bi1ib2R5IHRhYmxlLFxcbi5tYXJrZG93bi1ib2R5IHVsIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBociB7XFxuICBoZWlnaHQ6IC4yNWVtO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMjRweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTRlODtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSB7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG4gIGNvbG9yOiAjNmE3MzdkO1xcbiAgYm9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNkZmUyZTU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGU+OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGU+Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEsXFxuLm1hcmtkb3duLWJvZHkgaDIsXFxuLm1hcmtkb3duLWJvZHkgaDMsXFxuLm1hcmtkb3duLWJvZHkgaDQsXFxuLm1hcmtkb3duLWJvZHkgaDUsXFxuLm1hcmtkb3duLWJvZHkgaDYge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogLjNlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlY2VmO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMiB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMyB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDQge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGg1IHtcXG4gIGZvbnQtc2l6ZTogLjg3NWVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoNiB7XFxuICBmb250LXNpemU6IC44NWVtO1xcbiAgY29sb3I6ICM2YTczN2Q7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IG9sLFxcbi5tYXJrZG93bi1ib2R5IHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBvbCBvbCxcXG4ubWFya2Rvd24tYm9keSBvbCB1bCxcXG4ubWFya2Rvd24tYm9keSB1bCBvbCxcXG4ubWFya2Rvd24tYm9keSB1bCB1bCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgbGkge1xcbiAgd29yZC13cmFwOiBicmVhay1hbGw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGxpPnAge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgbGkrbGkge1xcbiAgbWFyZ2luLXRvcDogLjI1ZW07XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGRsIGR0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBkbCBkZCB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRoIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRkLFxcbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRoIHtcXG4gIHBhZGRpbmc6IDZweCAxM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdGFibGUgdHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzZjYmQxO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBpbml0aWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaW1nW2FsaWduPXJpZ2h0XSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGltZ1thbGlnbj1sZWZ0XSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBjb2RlIHtcXG4gIHBhZGRpbmc6IC4yZW0gLjRlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogODUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywzMSwzNSwuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IHByZT5jb2RlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmhpZ2hsaWdodCBwcmUge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmhpZ2hsaWdodCBwcmUsXFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZvbnQtc2l6ZTogODUlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUgY29kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmNvbW1pdC10ZWFzZS1zaGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGNvbG9yOiAjNDQ0ZDU2O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuZnVsbC1jb21taXQgLmJ0bi1vdXRsaW5lOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA1Y2M1O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA1Y2M1O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi13cmFwcGVyIHtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLXdyYXBwZXItZW1iZWRkZWQge1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1udW0ge1xcbiAgd2lkdGg6IDElO1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgyNywzMSwzNSwuMyk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2ItbnVtOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI3LDMxLDM1LC42KTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLmJsb2ItbnVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtbGluZS1udW1iZXIpO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAuYmxvYi1jb2RlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC5ibG9iLWNvZGUtaW5uZXIge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMjQyOTJlO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAucGwtdG9rZW4uYWN0aXZlLFxcbi5tYXJrZG93bi1ib2R5IC5wbC10b2tlbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZlYTdmO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiMVxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDE7XFxuICB0YWItc2l6ZTogMTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjJcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAyO1xcbiAgdGFiLXNpemU6IDI7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIzXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMztcXG4gIHRhYi1zaXplOiAzO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiNFxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxuICB0YWItc2l6ZTogNDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjVcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA1O1xcbiAgdGFiLXNpemU6IDU7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI2XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogNjtcXG4gIHRhYi1zaXplOiA2O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiN1xcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDc7XFxuICB0YWItc2l6ZTogNztcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjhcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiA4O1xcbiAgdGFiLXNpemU6IDg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCI5XFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogOTtcXG4gIHRhYi1zaXplOiA5O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cXFwiMTBcXFwiXSB7XFxuICAtbW96LXRhYi1zaXplOiAxMDtcXG4gIHRhYi1zaXplOiAxMDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XFxcIjExXFxcIl0ge1xcbiAgLW1vei10YWItc2l6ZTogMTE7XFxuICB0YWItc2l6ZTogMTE7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVxcXCIxMlxcXCJdIHtcXG4gIC1tb3otdGFiLXNpemU6IDEyO1xcbiAgdGFiLXNpemU6IDEyO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0ge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0rLnRhc2stbGlzdC1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgLnRhc2stbGlzdC1pdGVtIGlucHV0IHtcXG4gIG1hcmdpbjogMCAuMmVtIC4yNWVtIC0xLjZlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyAxNDk6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oMTQ5KTtcbi8qKioqKiovIH0pKClcbjsiLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlIHYxLjQuMSBieSBAbWF0aGlhcyAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0LyoqIERldGVjdCBmcmVlIHZhcmlhYmxlcyAqL1xuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmXG5cdFx0IWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdCFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoXG5cdFx0ZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbFxuXHQpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYHB1bnljb2RlYCBvYmplY3QuXG5cdCAqIEBuYW1lIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0dmFyIHB1bnljb2RlLFxuXG5cdC8qKiBIaWdoZXN0IHBvc2l0aXZlIHNpZ25lZCAzMi1iaXQgZmxvYXQgdmFsdWUgKi9cblx0bWF4SW50ID0gMjE0NzQ4MzY0NywgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG5cdC8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cblx0YmFzZSA9IDM2LFxuXHR0TWluID0gMSxcblx0dE1heCA9IDI2LFxuXHRza2V3ID0gMzgsXG5cdGRhbXAgPSA3MDAsXG5cdGluaXRpYWxCaWFzID0gNzIsXG5cdGluaXRpYWxOID0gMTI4LCAvLyAweDgwXG5cdGRlbGltaXRlciA9ICctJywgLy8gJ1xceDJEJ1xuXG5cdC8qKiBSZWd1bGFyIGV4cHJlc3Npb25zICovXG5cdHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vLFxuXHRyZWdleE5vbkFTQ0lJID0gL1teXFx4MjAtXFx4N0VdLywgLy8gdW5wcmludGFibGUgQVNDSUkgY2hhcnMgKyBub24tQVNDSUkgY2hhcnNcblx0cmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZywgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG5cdC8qKiBFcnJvciBtZXNzYWdlcyAqL1xuXHRlcnJvcnMgPSB7XG5cdFx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0XHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHRcdCdpbnZhbGlkLWlucHV0JzogJ0ludmFsaWQgaW5wdXQnXG5cdH0sXG5cblx0LyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xuXHRiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW4sXG5cdGZsb29yID0gTWF0aC5mbG9vcixcblx0c3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSxcblxuXHQvKiogVGVtcG9yYXJ5IHZhcmlhYmxlICovXG5cdGtleTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoZXJyb3JzW3R5cGVdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgYEFycmF5I21hcGAgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5IGFycmF5XG5cdCAqIGl0ZW0uXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcChhcnJheSwgZm4pIHtcblx0XHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR3aGlsZSAobGVuZ3RoLS0pIHtcblx0XHRcdHJlc3VsdFtsZW5ndGhdID0gZm4oYXJyYXlbbGVuZ3RoXSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQSBzaW1wbGUgYEFycmF5I21hcGAtbGlrZSB3cmFwcGVyIHRvIHdvcmsgd2l0aCBkb21haW4gbmFtZSBzdHJpbmdzIG9yIGVtYWlsXG5cdCAqIGFkZHJlc3Nlcy5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5XG5cdCAqIGNoYXJhY3Rlci5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBzdHJpbmcgb2YgY2hhcmFjdGVycyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXBEb21haW4oc3RyaW5nLCBmbikge1xuXHRcdHZhciBwYXJ0cyA9IHN0cmluZy5zcGxpdCgnQCcpO1xuXHRcdHZhciByZXN1bHQgPSAnJztcblx0XHRpZiAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0Ly8gSW4gZW1haWwgYWRkcmVzc2VzLCBvbmx5IHRoZSBkb21haW4gbmFtZSBzaG91bGQgYmUgcHVueWNvZGVkLiBMZWF2ZVxuXHRcdFx0Ly8gdGhlIGxvY2FsIHBhcnQgKGkuZS4gZXZlcnl0aGluZyB1cCB0byBgQGApIGludGFjdC5cblx0XHRcdHJlc3VsdCA9IHBhcnRzWzBdICsgJ0AnO1xuXHRcdFx0c3RyaW5nID0gcGFydHNbMV07XG5cdFx0fVxuXHRcdC8vIEF2b2lkIGBzcGxpdChyZWdleClgIGZvciBJRTggY29tcGF0aWJpbGl0eS4gU2VlICMxNy5cblx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleFNlcGFyYXRvcnMsICdcXHgyRScpO1xuXHRcdHZhciBsYWJlbHMgPSBzdHJpbmcuc3BsaXQoJy4nKTtcblx0XHR2YXIgZW5jb2RlZCA9IG1hcChsYWJlbHMsIGZuKS5qb2luKCcuJyk7XG5cdFx0cmV0dXJuIHJlc3VsdCArIGVuY29kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBudW1lcmljIGNvZGUgcG9pbnRzIG9mIGVhY2ggVW5pY29kZVxuXHQgKiBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZy4gV2hpbGUgSmF2YVNjcmlwdCB1c2VzIFVDUy0yIGludGVybmFsbHksXG5cdCAqIHRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGEgcGFpciBvZiBzdXJyb2dhdGUgaGFsdmVzIChlYWNoIG9mIHdoaWNoXG5cdCAqIFVDUy0yIGV4cG9zZXMgYXMgc2VwYXJhdGUgY2hhcmFjdGVycykgaW50byBhIHNpbmdsZSBjb2RlIHBvaW50LFxuXHQgKiBtYXRjaGluZyBVVEYtMTYuXG5cdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZW5jb2RlYFxuXHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZGVjb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIFVuaWNvZGUgaW5wdXQgc3RyaW5nIChVQ1MtMikuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIG5ldyBhcnJheSBvZiBjb2RlIHBvaW50cy5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdFx0dmFyIG91dHB1dCA9IFtdLFxuXHRcdCAgICBjb3VudGVyID0gMCxcblx0XHQgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcblx0XHQgICAgdmFsdWUsXG5cdFx0ICAgIGV4dHJhO1xuXHRcdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHR2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHRcdC8vIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3RlclxuXHRcdFx0XHRleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHRcdC8vIGNvZGUgdW5pdCBpcyB0aGUgaGlnaCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpclxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc3RyaW5nIGJhc2VkIG9uIGFuIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZGVjb2RlYFxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBlbmNvZGVcblx0ICogQHBhcmFtIHtBcnJheX0gY29kZVBvaW50cyBUaGUgYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHRcdHJldHVybiBtYXAoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0XHRpZiAodmFsdWUgPiAweEZGRkYpIHtcblx0XHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHRcdHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcblx0XHRcdH1cblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGJhc2ljIGNvZGUgcG9pbnQgaW50byBhIGRpZ2l0L2ludGVnZXIuXG5cdCAqIEBzZWUgYGRpZ2l0VG9CYXNpYygpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gY29kZVBvaW50IFRoZSBiYXNpYyBudW1lcmljIGNvZGUgcG9pbnQgdmFsdWUuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludCAoZm9yIHVzZSBpblxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGluIHRoZSByYW5nZSBgMGAgdG8gYGJhc2UgLSAxYCwgb3IgYGJhc2VgIGlmXG5cdCAqIHRoZSBjb2RlIHBvaW50IGRvZXMgbm90IHJlcHJlc2VudCBhIHZhbHVlLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzaWNUb0RpZ2l0KGNvZGVQb2ludCkge1xuXHRcdGlmIChjb2RlUG9pbnQgLSA0OCA8IDEwKSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gMjI7XG5cdFx0fVxuXHRcdGlmIChjb2RlUG9pbnQgLSA2NSA8IDI2KSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gNjU7XG5cdFx0fVxuXHRcdGlmIChjb2RlUG9pbnQgLSA5NyA8IDI2KSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gOTc7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgZGlnaXQvaW50ZWdlciBpbnRvIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHNlZSBgYmFzaWNUb0RpZ2l0KClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkaWdpdCBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBiYXNpYyBjb2RlIHBvaW50IHdob3NlIHZhbHVlICh3aGVuIHVzZWQgZm9yXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaXMgYGRpZ2l0YCwgd2hpY2ggbmVlZHMgdG8gYmUgaW4gdGhlIHJhbmdlXG5cdCAqIGAwYCB0byBgYmFzZSAtIDFgLiBJZiBgZmxhZ2AgaXMgbm9uLXplcm8sIHRoZSB1cHBlcmNhc2UgZm9ybSBpc1xuXHQgKiB1c2VkOyBlbHNlLCB0aGUgbG93ZXJjYXNlIGZvcm0gaXMgdXNlZC4gVGhlIGJlaGF2aW9yIGlzIHVuZGVmaW5lZFxuXHQgKiBpZiBgZmxhZ2AgaXMgbm9uLXplcm8gYW5kIGBkaWdpdGAgaGFzIG5vIHVwcGVyY2FzZSBmb3JtLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGlnaXRUb0Jhc2ljKGRpZ2l0LCBmbGFnKSB7XG5cdFx0Ly8gIDAuLjI1IG1hcCB0byBBU0NJSSBhLi56IG9yIEEuLlpcblx0XHQvLyAyNi4uMzUgbWFwIHRvIEFTQ0lJIDAuLjlcblx0XHRyZXR1cm4gZGlnaXQgKyAyMiArIDc1ICogKGRpZ2l0IDwgMjYpIC0gKChmbGFnICE9IDApIDw8IDUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJpYXMgYWRhcHRhdGlvbiBmdW5jdGlvbiBhcyBwZXIgc2VjdGlvbiAzLjQgb2YgUkZDIDM0OTIuXG5cdCAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzNDkyI3NlY3Rpb24tMy40XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGFwdChkZWx0YSwgbnVtUG9pbnRzLCBmaXJzdFRpbWUpIHtcblx0XHR2YXIgayA9IDA7XG5cdFx0ZGVsdGEgPSBmaXJzdFRpbWUgPyBmbG9vcihkZWx0YSAvIGRhbXApIDogZGVsdGEgPj4gMTtcblx0XHRkZWx0YSArPSBmbG9vcihkZWx0YSAvIG51bVBvaW50cyk7XG5cdFx0Zm9yICgvKiBubyBpbml0aWFsaXphdGlvbiAqLzsgZGVsdGEgPiBiYXNlTWludXNUTWluICogdE1heCA+PiAxOyBrICs9IGJhc2UpIHtcblx0XHRcdGRlbHRhID0gZmxvb3IoZGVsdGEgLyBiYXNlTWludXNUTWluKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZsb29yKGsgKyAoYmFzZU1pbnVzVE1pbiArIDEpICogZGVsdGEgLyAoZGVsdGEgKyBza2V3KSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzIHRvIGEgc3RyaW5nIG9mIFVuaWNvZGVcblx0ICogc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdFx0Ly8gRG9uJ3QgdXNlIFVDUy0yXG5cdFx0dmFyIG91dHB1dCA9IFtdLFxuXHRcdCAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgb3V0LFxuXHRcdCAgICBpID0gMCxcblx0XHQgICAgbiA9IGluaXRpYWxOLFxuXHRcdCAgICBiaWFzID0gaW5pdGlhbEJpYXMsXG5cdFx0ICAgIGJhc2ljLFxuXHRcdCAgICBqLFxuXHRcdCAgICBpbmRleCxcblx0XHQgICAgb2xkaSxcblx0XHQgICAgdyxcblx0XHQgICAgayxcblx0XHQgICAgZGlnaXQsXG5cdFx0ICAgIHQsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBiYXNlTWludXNUO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50czogbGV0IGBiYXNpY2AgYmUgdGhlIG51bWJlciBvZiBpbnB1dCBjb2RlXG5cdFx0Ly8gcG9pbnRzIGJlZm9yZSB0aGUgbGFzdCBkZWxpbWl0ZXIsIG9yIGAwYCBpZiB0aGVyZSBpcyBub25lLCB0aGVuIGNvcHlcblx0XHQvLyB0aGUgZmlyc3QgYmFzaWMgY29kZSBwb2ludHMgdG8gdGhlIG91dHB1dC5cblxuXHRcdGJhc2ljID0gaW5wdXQubGFzdEluZGV4T2YoZGVsaW1pdGVyKTtcblx0XHRpZiAoYmFzaWMgPCAwKSB7XG5cdFx0XHRiYXNpYyA9IDA7XG5cdFx0fVxuXG5cdFx0Zm9yIChqID0gMDsgaiA8IGJhc2ljOyArK2opIHtcblx0XHRcdC8vIGlmIGl0J3Mgbm90IGEgYmFzaWMgY29kZSBwb2ludFxuXHRcdFx0aWYgKGlucHV0LmNoYXJDb2RlQXQoaikgPj0gMHg4MCkge1xuXHRcdFx0XHRlcnJvcignbm90LWJhc2ljJyk7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQucHVzaChpbnB1dC5jaGFyQ29kZUF0KGopKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGRlY29kaW5nIGxvb3A6IHN0YXJ0IGp1c3QgYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyIGlmIGFueSBiYXNpYyBjb2RlXG5cdFx0Ly8gcG9pbnRzIHdlcmUgY29waWVkOyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG90aGVyd2lzZS5cblxuXHRcdGZvciAoaW5kZXggPSBiYXNpYyA+IDAgPyBiYXNpYyArIDEgOiAwOyBpbmRleCA8IGlucHV0TGVuZ3RoOyAvKiBubyBmaW5hbCBleHByZXNzaW9uICovKSB7XG5cblx0XHRcdC8vIGBpbmRleGAgaXMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IGNoYXJhY3RlciB0byBiZSBjb25zdW1lZC5cblx0XHRcdC8vIERlY29kZSBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyIGludG8gYGRlbHRhYCxcblx0XHRcdC8vIHdoaWNoIGdldHMgYWRkZWQgdG8gYGlgLiBUaGUgb3ZlcmZsb3cgY2hlY2tpbmcgaXMgZWFzaWVyXG5cdFx0XHQvLyBpZiB3ZSBpbmNyZWFzZSBgaWAgYXMgd2UgZ28sIHRoZW4gc3VidHJhY3Qgb2ZmIGl0cyBzdGFydGluZ1xuXHRcdFx0Ly8gdmFsdWUgYXQgdGhlIGVuZCB0byBvYnRhaW4gYGRlbHRhYC5cblx0XHRcdGZvciAob2xkaSA9IGksIHcgPSAxLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblxuXHRcdFx0XHRpZiAoaW5kZXggPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0XHRlcnJvcignaW52YWxpZC1pbnB1dCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGlnaXQgPSBiYXNpY1RvRGlnaXQoaW5wdXQuY2hhckNvZGVBdChpbmRleCsrKSk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0ID49IGJhc2UgfHwgZGlnaXQgPiBmbG9vcigobWF4SW50IC0gaSkgLyB3KSkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aSArPSBkaWdpdCAqIHc7XG5cdFx0XHRcdHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA8IHQpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0aWYgKHcgPiBmbG9vcihtYXhJbnQgLyBiYXNlTWludXNUKSkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dyAqPSBiYXNlTWludXNUO1xuXG5cdFx0XHR9XG5cblx0XHRcdG91dCA9IG91dHB1dC5sZW5ndGggKyAxO1xuXHRcdFx0YmlhcyA9IGFkYXB0KGkgLSBvbGRpLCBvdXQsIG9sZGkgPT0gMCk7XG5cblx0XHRcdC8vIGBpYCB3YXMgc3VwcG9zZWQgdG8gd3JhcCBhcm91bmQgZnJvbSBgb3V0YCB0byBgMGAsXG5cdFx0XHQvLyBpbmNyZW1lbnRpbmcgYG5gIGVhY2ggdGltZSwgc28gd2UnbGwgZml4IHRoYXQgbm93OlxuXHRcdFx0aWYgKGZsb29yKGkgLyBvdXQpID4gbWF4SW50IC0gbikge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0biArPSBmbG9vcihpIC8gb3V0KTtcblx0XHRcdGkgJT0gb3V0O1xuXG5cdFx0XHQvLyBJbnNlcnQgYG5gIGF0IHBvc2l0aW9uIGBpYCBvZiB0aGUgb3V0cHV0XG5cdFx0XHRvdXRwdXQuc3BsaWNlKGkrKywgMCwgbik7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdWNzMmVuY29kZShvdXRwdXQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scyAoZS5nLiBhIGRvbWFpbiBuYW1lIGxhYmVsKSB0byBhXG5cdCAqIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuXHRcdHZhciBuLFxuXHRcdCAgICBkZWx0YSxcblx0XHQgICAgaGFuZGxlZENQQ291bnQsXG5cdFx0ICAgIGJhc2ljTGVuZ3RoLFxuXHRcdCAgICBiaWFzLFxuXHRcdCAgICBqLFxuXHRcdCAgICBtLFxuXHRcdCAgICBxLFxuXHRcdCAgICBrLFxuXHRcdCAgICB0LFxuXHRcdCAgICBjdXJyZW50VmFsdWUsXG5cdFx0ICAgIG91dHB1dCA9IFtdLFxuXHRcdCAgICAvKiogYGlucHV0TGVuZ3RoYCB3aWxsIGhvbGQgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyBpbiBgaW5wdXRgLiAqL1xuXHRcdCAgICBpbnB1dExlbmd0aCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50UGx1c09uZSxcblx0XHQgICAgYmFzZU1pbnVzVCxcblx0XHQgICAgcU1pbnVzVDtcblxuXHRcdC8vIENvbnZlcnQgdGhlIGlucHV0IGluIFVDUy0yIHRvIFVuaWNvZGVcblx0XHRpbnB1dCA9IHVjczJkZWNvZGUoaW5wdXQpO1xuXG5cdFx0Ly8gQ2FjaGUgdGhlIGxlbmd0aFxuXHRcdGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgc3RhdGVcblx0XHRuID0gaW5pdGlhbE47XG5cdFx0ZGVsdGEgPSAwO1xuXHRcdGJpYXMgPSBpbml0aWFsQmlhcztcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHNcblx0XHRmb3IgKGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRpZiAoY3VycmVudFZhbHVlIDwgMHg4MCkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoY3VycmVudFZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aGFuZGxlZENQQ291bnQgPSBiYXNpY0xlbmd0aCA9IG91dHB1dC5sZW5ndGg7XG5cblx0XHQvLyBgaGFuZGxlZENQQ291bnRgIGlzIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgdGhhdCBoYXZlIGJlZW4gaGFuZGxlZDtcblx0XHQvLyBgYmFzaWNMZW5ndGhgIGlzIHRoZSBudW1iZXIgb2YgYmFzaWMgY29kZSBwb2ludHMuXG5cblx0XHQvLyBGaW5pc2ggdGhlIGJhc2ljIHN0cmluZyAtIGlmIGl0IGlzIG5vdCBlbXB0eSAtIHdpdGggYSBkZWxpbWl0ZXJcblx0XHRpZiAoYmFzaWNMZW5ndGgpIHtcblx0XHRcdG91dHB1dC5wdXNoKGRlbGltaXRlcik7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBlbmNvZGluZyBsb29wOlxuXHRcdHdoaWxlIChoYW5kbGVkQ1BDb3VudCA8IGlucHV0TGVuZ3RoKSB7XG5cblx0XHRcdC8vIEFsbCBub24tYmFzaWMgY29kZSBwb2ludHMgPCBuIGhhdmUgYmVlbiBoYW5kbGVkIGFscmVhZHkuIEZpbmQgdGhlIG5leHRcblx0XHRcdC8vIGxhcmdlciBvbmU6XG5cdFx0XHRmb3IgKG0gPSBtYXhJbnQsIGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA+PSBuICYmIGN1cnJlbnRWYWx1ZSA8IG0pIHtcblx0XHRcdFx0XHRtID0gY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEluY3JlYXNlIGBkZWx0YWAgZW5vdWdoIHRvIGFkdmFuY2UgdGhlIGRlY29kZXIncyA8bixpPiBzdGF0ZSB0byA8bSwwPixcblx0XHRcdC8vIGJ1dCBndWFyZCBhZ2FpbnN0IG92ZXJmbG93XG5cdFx0XHRoYW5kbGVkQ1BDb3VudFBsdXNPbmUgPSBoYW5kbGVkQ1BDb3VudCArIDE7XG5cdFx0XHRpZiAobSAtIG4gPiBmbG9vcigobWF4SW50IC0gZGVsdGEpIC8gaGFuZGxlZENQQ291bnRQbHVzT25lKSkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGEgKz0gKG0gLSBuKSAqIGhhbmRsZWRDUENvdW50UGx1c09uZTtcblx0XHRcdG4gPSBtO1xuXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlIDwgbiAmJiArK2RlbHRhID4gbWF4SW50KSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09IG4pIHtcblx0XHRcdFx0XHQvLyBSZXByZXNlbnQgZGVsdGEgYXMgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlclxuXHRcdFx0XHRcdGZvciAocSA9IGRlbHRhLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblx0XHRcdFx0XHRcdHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXHRcdFx0XHRcdFx0aWYgKHEgPCB0KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cU1pbnVzVCA9IHEgLSB0O1xuXHRcdFx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdFx0b3V0cHV0LnB1c2goXG5cdFx0XHRcdFx0XHRcdHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWModCArIHFNaW51c1QgJSBiYXNlTWludXNULCAwKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRxID0gZmxvb3IocU1pbnVzVCAvIGJhc2VNaW51c1QpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWMocSwgMCkpKTtcblx0XHRcdFx0XHRiaWFzID0gYWRhcHQoZGVsdGEsIGhhbmRsZWRDUENvdW50UGx1c09uZSwgaGFuZGxlZENQQ291bnQgPT0gYmFzaWNMZW5ndGgpO1xuXHRcdFx0XHRcdGRlbHRhID0gMDtcblx0XHRcdFx0XHQrK2hhbmRsZWRDUENvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCsrZGVsdGE7XG5cdFx0XHQrK247XG5cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyByZXByZXNlbnRpbmcgYSBkb21haW4gbmFtZSBvciBhbiBlbWFpbCBhZGRyZXNzXG5cdCAqIHRvIFVuaWNvZGUuIE9ubHkgdGhlIFB1bnljb2RlZCBwYXJ0cyBvZiB0aGUgaW5wdXQgd2lsbCBiZSBjb252ZXJ0ZWQsIGkuZS5cblx0ICogaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgb24gYSBzdHJpbmcgdGhhdCBoYXMgYWxyZWFkeSBiZWVuXG5cdCAqIGNvbnZlcnRlZCB0byBVbmljb2RlLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZWQgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBjb252ZXJ0IHRvIFVuaWNvZGUuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBVbmljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBQdW55Y29kZVxuXHQgKiBzdHJpbmcuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b1VuaWNvZGUoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleFB1bnljb2RlLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/IGRlY29kZShzdHJpbmcuc2xpY2UoNCkudG9Mb3dlckNhc2UoKSlcblx0XHRcdFx0OiBzdHJpbmc7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBVbmljb2RlIHN0cmluZyByZXByZXNlbnRpbmcgYSBkb21haW4gbmFtZSBvciBhbiBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIFB1bnljb2RlLiBPbmx5IHRoZSBub24tQVNDSUkgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHdpbGwgYmUgY29udmVydGVkLFxuXHQgKiBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCdzIGFscmVhZHkgaW5cblx0ICogQVNDSUkuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG8gY29udmVydCwgYXMgYVxuXHQgKiBVbmljb2RlIHN0cmluZy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFB1bnljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBkb21haW4gbmFtZSBvclxuXHQgKiBlbWFpbCBhZGRyZXNzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9BU0NJSShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4Tm9uQVNDSUkudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gJ3huLS0nICsgZW5jb2RlKHN0cmluZylcblx0XHRcdFx0OiBzdHJpbmc7XG5cdFx0fSk7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKiogRGVmaW5lIHRoZSBwdWJsaWMgQVBJICovXG5cdHB1bnljb2RlID0ge1xuXHRcdC8qKlxuXHRcdCAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBQdW55Y29kZS5qcyB2ZXJzaW9uIG51bWJlci5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHQndmVyc2lvbic6ICcxLjQuMScsXG5cdFx0LyoqXG5cdFx0ICogQW4gb2JqZWN0IG9mIG1ldGhvZHMgdG8gY29udmVydCBmcm9tIEphdmFTY3JpcHQncyBpbnRlcm5hbCBjaGFyYWN0ZXJcblx0XHQgKiByZXByZXNlbnRhdGlvbiAoVUNTLTIpIHRvIFVuaWNvZGUgY29kZSBwb2ludHMsIGFuZCBiYWNrLlxuXHRcdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIE9iamVjdFxuXHRcdCAqL1xuXHRcdCd1Y3MyJzoge1xuXHRcdFx0J2RlY29kZSc6IHVjczJkZWNvZGUsXG5cdFx0XHQnZW5jb2RlJzogdWNzMmVuY29kZVxuXHRcdH0sXG5cdFx0J2RlY29kZSc6IGRlY29kZSxcblx0XHQnZW5jb2RlJzogZW5jb2RlLFxuXHRcdCd0b0FTQ0lJJzogdG9BU0NJSSxcblx0XHQndG9Vbmljb2RlJzogdG9Vbmljb2RlXG5cdH07XG5cblx0LyoqIEV4cG9zZSBgcHVueWNvZGVgICovXG5cdC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xuXHQvLyBsaWtlIHRoZSBmb2xsb3dpbmc6XG5cdGlmIChcblx0XHR0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJlxuXHRcdGRlZmluZS5hbWRcblx0KSB7XG5cdFx0ZGVmaW5lKCdwdW55Y29kZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHB1bnljb2RlO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmIGZyZWVNb2R1bGUpIHtcblx0XHRpZiAobW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMpIHtcblx0XHRcdC8vIGluIE5vZGUuanMsIGlvLmpzLCBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IHB1bnljb2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yIChrZXkgaW4gcHVueWNvZGUpIHtcblx0XHRcdFx0cHVueWNvZGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHB1bnljb2RlW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC5wdW55Y29kZSA9IHB1bnljb2RlO1xuXHR9XG5cbn0odGhpcykpO1xuIiwibW9kdWxlLmV4cG9ydHM9L1tcXDAtXFx4MUZcXHg3Ri1cXHg5Rl0vIiwibW9kdWxlLmV4cG9ydHM9L1tcXHhBRFxcdTA2MDAtXFx1MDYwNVxcdTA2MUNcXHUwNkREXFx1MDcwRlxcdTA4RTJcXHUxODBFXFx1MjAwQi1cXHUyMDBGXFx1MjAyQS1cXHUyMDJFXFx1MjA2MC1cXHUyMDY0XFx1MjA2Ni1cXHUyMDZGXFx1RkVGRlxcdUZGRjktXFx1RkZGQl18XFx1RDgwNFtcXHVEQ0JEXFx1RENDRF18XFx1RDgyRltcXHVEQ0EwLVxcdURDQTNdfFxcdUQ4MzRbXFx1REQ3My1cXHVERDdBXXxcXHVEQjQwW1xcdURDMDFcXHVEQzIwLVxcdURDN0ZdLyIsIm1vZHVsZS5leHBvcnRzPS9bIS0jJS1cXCosLVxcLzo7XFw/QFxcWy1cXF1fXFx7XFx9XFx4QTFcXHhBN1xceEFCXFx4QjZcXHhCN1xceEJCXFx4QkZcXHUwMzdFXFx1MDM4N1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MDlGRFxcdTBBNzZcXHUwQUYwXFx1MEM4NFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZEXFx1MTY2RVxcdTE2OUJcXHUxNjlDXFx1MTZFQi1cXHUxNkVEXFx1MTczNVxcdTE3MzZcXHUxN0Q0LVxcdTE3RDZcXHUxN0Q4LVxcdTE3REFcXHUxODAwLVxcdTE4MEFcXHUxOTQ0XFx1MTk0NVxcdTFBMUVcXHUxQTFGXFx1MUFBMC1cXHUxQUE2XFx1MUFBOC1cXHUxQUFEXFx1MUI1QS1cXHUxQjYwXFx1MUJGQy1cXHUxQkZGXFx1MUMzQi1cXHUxQzNGXFx1MUM3RVxcdTFDN0ZcXHUxQ0MwLVxcdTFDQzdcXHUxQ0QzXFx1MjAxMC1cXHUyMDI3XFx1MjAzMC1cXHUyMDQzXFx1MjA0NS1cXHUyMDUxXFx1MjA1My1cXHUyMDVFXFx1MjA3RFxcdTIwN0VcXHUyMDhEXFx1MjA4RVxcdTIzMDgtXFx1MjMwQlxcdTIzMjlcXHUyMzJBXFx1Mjc2OC1cXHUyNzc1XFx1MjdDNVxcdTI3QzZcXHUyN0U2LVxcdTI3RUZcXHUyOTgzLVxcdTI5OThcXHUyOUQ4LVxcdTI5REJcXHUyOUZDXFx1MjlGRFxcdTJDRjktXFx1MkNGQ1xcdTJDRkVcXHUyQ0ZGXFx1MkQ3MFxcdTJFMDAtXFx1MkUyRVxcdTJFMzAtXFx1MkU0RVxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOEZDXFx1QTkyRVxcdUE5MkZcXHVBOTVGXFx1QTlDMS1cXHVBOUNEXFx1QTlERVxcdUE5REZcXHVBQTVDLVxcdUFBNUZcXHVBQURFXFx1QUFERlxcdUFBRjBcXHVBQUYxXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdfFxcdUQ4MDBbXFx1REQwMC1cXHVERDAyXFx1REY5RlxcdURGRDBdfFxcdUQ4MDFcXHVERDZGfFxcdUQ4MDJbXFx1REM1N1xcdUREMUZcXHVERDNGXFx1REU1MC1cXHVERTU4XFx1REU3RlxcdURFRjAtXFx1REVGNlxcdURGMzktXFx1REYzRlxcdURGOTktXFx1REY5Q118XFx1RDgwM1tcXHVERjU1LVxcdURGNTldfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOFxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQzRCLVxcdURDNEZcXHVEQzVCXFx1REM1RFxcdURDQzZcXHVEREMxLVxcdURERDdcXHVERTQxLVxcdURFNDNcXHVERTYwLVxcdURFNkNcXHVERjNDLVxcdURGM0VdfFxcdUQ4MDZbXFx1REMzQlxcdURFM0YtXFx1REU0NlxcdURFOUEtXFx1REU5Q1xcdURFOUUtXFx1REVBMl18XFx1RDgwN1tcXHVEQzQxLVxcdURDNDVcXHVEQzcwXFx1REM3MVxcdURFRjdcXHVERUY4XXxcXHVEODA5W1xcdURDNzAtXFx1REM3NF18XFx1RDgxQVtcXHVERTZFXFx1REU2RlxcdURFRjVcXHVERjM3LVxcdURGM0JcXHVERjQ0XXxcXHVEODFCW1xcdURFOTctXFx1REU5QV18XFx1RDgyRlxcdURDOUZ8XFx1RDgzNltcXHVERTg3LVxcdURFOEJdfFxcdUQ4M0FbXFx1REQ1RVxcdURENUZdLyIsIm1vZHVsZS5leHBvcnRzPS9bIFxceEEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXS8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuQW55ID0gcmVxdWlyZSgnLi9wcm9wZXJ0aWVzL0FueS9yZWdleCcpO1xuZXhwb3J0cy5DYyAgPSByZXF1aXJlKCcuL2NhdGVnb3JpZXMvQ2MvcmVnZXgnKTtcbmV4cG9ydHMuQ2YgID0gcmVxdWlyZSgnLi9jYXRlZ29yaWVzL0NmL3JlZ2V4Jyk7XG5leHBvcnRzLlAgICA9IHJlcXVpcmUoJy4vY2F0ZWdvcmllcy9QL3JlZ2V4Jyk7XG5leHBvcnRzLlogICA9IHJlcXVpcmUoJy4vY2F0ZWdvcmllcy9aL3JlZ2V4Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cz0vW1xcMC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLyJdLCJzb3VyY2VSb290IjoiIn0=