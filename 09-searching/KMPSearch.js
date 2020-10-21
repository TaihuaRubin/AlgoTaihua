/** KMP
 * The Knuth–Morris–Pratt string searching algorithm (or KMP algorithm) searches for occurrences of a "word" W within a main "text string" T by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin, thus bypassing re-examination of previously matched characters.
 *
 * Complexity:
 * Time: O(|W| + |T|) (much faster comparing to trivial O(|W| * |T|))
 * Space: O(|W|)
 */

function kmp_search(s, w) {
  var m = 0,
    i = 0,
    pos,
    cnd,
    t,
    slen = s.length,
    wlen = w.length;

  /* String to array conversion */
  s = s.split("");
  w = w.split("");

  /* Construct the lookup table */
  t = [-1, 0];
  for (pos = 2, cnd = 0; pos < wlen; ) {
    if (w[pos - 1] === w[cnd]) {
      t[pos] = cnd + 1;
      pos++;
      cnd++;
    } else if (cnd > 0) cnd = t[cnd];
    else t[pos++] = 0;
  }

  /* Perform the search */
  while (m + i < slen) {
    if (s[m + i] === w[i]) {
      i++;
      if (i === wlen) return m;
    } else {
      m += i - t[i];
      if (t[i] > -1) i = t[i];
      else i = 0;
    }
  }
  return -1;
}
