/* Prototype-only: which data state the dashboard shows (?state=loading|empty|error|offline).
   Each direction renders these states in its own way; this file only reads the choice. */
window.ProtoState = (function () {
  const list = ['normal', 'loading', 'empty', 'error', 'offline'];
  let s = new URLSearchParams(location.search).get('state');
  if (!list.includes(s)) s = 'normal';
  document.documentElement.dataset.state = s;
  // Any [data-retry] button: show a short "retrying" moment, then load the normal state.
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-retry]');
    if (!b) return;
    e.preventDefault();
    b.disabled = true;
    b.textContent = b.dataset.retry || 'Retrying…';
    setTimeout(() => { location.href = location.pathname; }, 1100);
  });
  return { current: s, is: (x) => s === x, list, offlineAt: '10:42', offlineFor: '3 h 18 min' };
})();
