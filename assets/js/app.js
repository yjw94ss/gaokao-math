/* ============================================================
 * 高三数学学习站 · 交互逻辑
 * 依赖：data.js（CHAPTERS / EXAMPLES / EXERCISES）
 * ============================================================ */
(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var LEVEL = { 1: '基础', 2: '中档', 3: '拔高' };
  var LEVEL_CLS = { 1: 'ok', 2: 'primary', 3: 'err' };
  var TYPE_NAME = { choice: '选择题', fill: '填空题', solve: '解答题' };
  var TYPE_CLS  = { choice: 'primary', fill: 'accent', solve: 'warn' };

  var state = {
    view: 'overview',
    kb: CHAPTERS[0].id,
    exCh: 'all',
    pracType: 'all',
    pracCh: 'all',
    wOwner: 'all',
    wStatus: 'all'
  };

  /* ---------------- 工具 ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function chapterName(id) {
    for (var i = 0; i < CHAPTERS.length; i++) {
      if (CHAPTERS[i].id === id) return CHAPTERS[i].name;
    }
    return '未分类';
  }
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1900);
  }

  /* ---------------- 主题 ---------------- */
  var THEME_KEY = 'gkm_theme_v1';
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    var btn = $('#themeBtn');
    btn.textContent = t === 'dark' ? '☀️' : '🌙';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0f1118' : '#4f46e5');
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (!saved) {
      saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    applyTheme(saved);
    $('#themeBtn').addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------------- 路由 ---------------- */
  function go(view, sub) {
    location.hash = '#' + view + (sub ? '/' + sub : '');
  }
  function parseHash() {
    var raw = location.hash.replace(/^#\/?/, '');
    var parts = raw.split('/');
    var v = parts[0] || 'overview';
    if (!document.getElementById('view-' + v)) v = 'overview';
    state.view = v;
    if (v === 'knowledge' && parts[1]) {
      for (var i = 0; i < CHAPTERS.length; i++) {
        if (CHAPTERS[i].id === parts[1]) { state.kb = parts[1]; break; }
      }
    }
    render();
  }

  function render() {
    $$('.view').forEach(function (s) { s.hidden = true; });
    var cur = $('#view-' + state.view);
    if (cur) {
      cur.hidden = false;
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    $$('#nav button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.dataset.view === state.view));
    });
    if (state.view === 'knowledge') renderKnowledge();
    if (state.view === 'examples')  renderExamples();
    if (state.view === 'practice')  renderPractice();
    if (state.view === 'wrong')     renderWrong();
    if (state.view === 'overview')  renderStats();
  }

  /* ---------------- 首页统计 ---------------- */
  function renderStats() {
    $('#stChapters').textContent  = CHAPTERS.length;
    $('#stExamples').textContent  = EXAMPLES.length;
    $('#stExercises').textContent = EXERCISES.length;
    $('#stWrong').textContent     = loadWrong().length;
  }

  /* ---------------- 知识要点 ---------------- */
  function renderKnowledge() {
    var side = $('#kbSide');
    side.innerHTML = '<div class="side-label">章节</div>' + CHAPTERS.map(function (c) {
      return '<button data-ch="' + c.id + '"' + (c.id === state.kb ? ' aria-current="true"' : '') + '>' +
             '<span class="no">' + c.no + '</span><span>' + esc(c.name) + '</span></button>';
    }).join('');
    $$('#kbSide button').forEach(function (b) {
      b.addEventListener('click', function () { go('knowledge', b.dataset.ch); });
    });

    var c = null;
    for (var i = 0; i < CHAPTERS.length; i++) if (CHAPTERS[i].id === state.kb) c = CHAPTERS[i];
    if (!c) return;

    var idx = CHAPTERS.indexOf(c);
    var prev = CHAPTERS[idx - 1], next = CHAPTERS[idx + 1];

    var html = '' +
      '<div class="kb-title"><h2>' + c.no + '. ' + esc(c.name) + '</h2>' +
      '<span class="chip accent">' + esc(c.tag) + '</span></div>' +
      '<div class="kb-desc">共 ' + c.points.length + ' 个核心要点，末尾附易错提醒</div>';

    html += c.points.map(function (p) {
      return '<div class="point"><h4>' + esc(p.t) + '</h4><div class="body">' + p.c + '</div></div>';
    }).join('');

    html += '<div class="trap-box"><h4>⚠ 易错提醒</h4><ul>' +
      c.traps.map(function (t) { return '<li>' + t + '</li>'; }).join('') +
      '</ul></div>';

    html += '<div class="btn-row" style="margin-top:18px">' +
      (prev ? '<button class="btn" data-go-ch="' + prev.id + '">← ' + esc(prev.name) + '</button>' : '') +
      (next ? '<button class="btn primary" data-go-ch="' + next.id + '" style="margin-left:auto">' + esc(next.name) + ' →</button>' : '') +
      '</div>';

    $('#kbBody').innerHTML = html;
    $$('#kbBody [data-go-ch]').forEach(function (b) {
      b.addEventListener('click', function () { go('knowledge', b.dataset.goCh); });
    });
  }

  /* ---------------- 典型例题 ---------------- */
  function renderExamples() {
    var bar = $('#exFilter');
    var opts = [{ id: 'all', name: '全部章节' }].concat(CHAPTERS.map(function (c) {
      return { id: c.id, name: c.name };
    }));
    bar.innerHTML = opts.map(function (o) {
      return '<button class="fbtn" data-f="' + o.id + '" aria-pressed="' +
             String(o.id === state.exCh) + '">' + esc(o.name) + '</button>';
    }).join('');
    $$('#exFilter .fbtn').forEach(function (b) {
      b.addEventListener('click', function () { state.exCh = b.dataset.f; renderExamples(); });
    });

    var list = EXAMPLES.filter(function (e) {
      return state.exCh === 'all' || e.ch === state.exCh;
    });

    if (!list.length) {
      $('#exList').innerHTML = '<div class="empty"><div class="big">📭</div>该章节暂无例题</div>';
      return;
    }

    $('#exList').innerHTML = list.map(function (e) {
      return '' +
        '<div class="ex-card">' +
          '<div class="ex-head">' +
            '<h3>' + esc(e.title) + '</h3>' +
            '<span class="chip accent">' + esc(chapterName(e.ch)) + '</span>' +
            '<span class="chip ' + LEVEL_CLS[e.level] + '">' + LEVEL[e.level] + '</span>' +
          '</div>' +
          '<div class="ex-q">' + e.q + '</div>' +
          '<div class="ex-think"><b>思路　</b>' + e.think + '</div>' +
          '<details class="acc">' +
            '<summary>查看详细解答</summary>' +
            '<div class="acc-body">' +
              '<ol>' + e.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
              '<div class="ans-line"><strong>答案　</strong>' + e.ans + '</div>' +
              '<div class="key-line"><b>关键提醒　</b>' + e.key + '</div>' +
            '</div>' +
          '</details>' +
        '</div>';
    }).join('');
  }

  /* ---------------- 练习自测 ---------------- */
  function renderPractice() {
    var types = [
      { id: 'all', name: '全部题型' },
      { id: 'choice', name: '选择题' },
      { id: 'fill', name: '填空题' },
      { id: 'solve', name: '解答题' }
    ];
    $('#pracFilter').innerHTML = types.map(function (t) {
      return '<button class="fbtn" data-t="' + t.id + '" aria-pressed="' +
             String(t.id === state.pracType) + '">' + t.name + '</button>';
    }).join('') +
    '<select id="pracChSel" class="fbtn" style="padding:6px 10px">' +
      '<option value="all">全部章节</option>' +
      CHAPTERS.map(function (c) {
        return '<option value="' + c.id + '"' + (c.id === state.pracCh ? ' selected' : '') + '>' + esc(c.name) + '</option>';
      }).join('') +
    '</select>';

    $$('#pracFilter .fbtn[data-t]').forEach(function (b) {
      b.addEventListener('click', function () { state.pracType = b.dataset.t; renderPractice(); });
    });
    var sel = $('#pracChSel');
    sel.addEventListener('change', function () { state.pracCh = sel.value; renderPractice(); });

    var list = EXERCISES.filter(function (p) {
      return (state.pracType === 'all' || p.type === state.pracType) &&
             (state.pracCh === 'all' || p.ch === state.pracCh);
    });

    $('#pracCount').textContent = list.length;

    if (!list.length) {
      $('#pracList').innerHTML = '<div class="empty"><div class="big">📭</div>当前筛选条件下没有题目</div>';
      return;
    }

    var n = 0;
    $('#pracList').innerHTML = list.map(function (p) {
      n++;
      var optsHtml = '';
      if (p.type === 'choice' && p.opts) {
        optsHtml = '<div class="opts">' + p.opts.map(function (o, i) {
          return '<div class="opt"><span class="opt-key">' + 'ABCD'[i] + '.</span>' + o + '</div>';
        }).join('') + '</div>';
      }
      return '' +
        '<div class="ex-item">' +
          '<div class="q-head">' +
            '<span class="q-no">第 ' + n + ' 题</span>' +
            '<span class="chip ' + TYPE_CLS[p.type] + '">' + TYPE_NAME[p.type] + '</span>' +
            '<span class="chip">' + esc(chapterName(p.ch)) + '</span>' +
            '<span class="chip ' + LEVEL_CLS[p.level] + '">' + LEVEL[p.level] + '</span>' +
          '</div>' +
          '<div class="q-stem">' + p.stem + '</div>' +
          optsHtml +
          '<details class="acc" style="margin-top:10px">' +
            '<summary>查看解析</summary>' +
            '<div class="acc-body">' +
              '<div class="sol-body">' + p.sol + '</div>' +
              '<div class="ans-line"><strong>答案　</strong>' + p.ans + '</div>' +
            '</div>' +
          '</details>' +
        '</div>';
    }).join('');
  }

  /* ---------------- 错题本 ---------------- */
  var WKEY = 'gkm_wrong_v1';
  var OWNER_KEY = 'gkm_owner_v1';

  function getOwner() {
    try { return localStorage.getItem(OWNER_KEY) || ''; } catch (e) { return ''; }
  }
  function setOwner(n) {
    try { localStorage.setItem(OWNER_KEY, n); } catch (e) {}
  }
  function ownerOf(w) { return w.owner || '未标注'; }

  function stamp() {
    var d = new Date(), p = function (n) { return n < 10 ? '0' + n : '' + n; };
    return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate());
  }
  function download(text, filename, mime) {
    var blob = new Blob([text], { type: (mime || 'text/plain') + ';charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function loadWrong() {
    try {
      var raw = localStorage.getItem(WKEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }
  function saveWrong(arr) {
    try {
      localStorage.setItem(WKEY, JSON.stringify(arr));
      return true;
    } catch (e) {
      toast('保存失败：浏览器存储不可用');
      return false;
    }
  }

  function ownerCounts(arr) {
    var m = {};
    arr.forEach(function (w) {
      var o = ownerOf(w);
      m[o] = (m[o] || 0) + 1;
    });
    return m;
  }

  function renderWrong() {
    /* 章节下拉（只建一次） */
    var sel = $('#wch');
    if (sel.options.length <= 1) {
      sel.innerHTML = '<option value="">未分类</option>' +
        CHAPTERS.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('');
    }

    /* 当前使用者回填（别打断正在输入的人） */
    var nameInput = $('#ownerName');
    if (document.activeElement !== nameInput) nameInput.value = getOwner();
    var me = getOwner();
    $('#ownerHint').textContent = me ? '录入归属：' + me : '未设置（新错题会标成「未标注」）';

    var all = loadWrong();
    var counts = ownerCounts(all);
    var owners = Object.keys(counts).sort();
    var todo = all.filter(function (w) { return !w.done; }).length;

    /* 汇总统计 */
    if (all.length) {
      $('#wrongStats').hidden = false;
      $('#wsTotal').textContent = all.length;
      $('#wsStudents').textContent = owners.length;
      $('#wsTodo').textContent = todo;
      $('#wsDone').textContent = all.length - todo;
    } else {
      $('#wrongStats').hidden = true;
    }
    $('#wrongCount').textContent = all.length + ' 条';

    /* 筛选栏 */
    var statusBtns = [
      { id: 'all', name: '全部' },
      { id: 'todo', name: '待复习' },
      { id: 'done', name: '已掌握' }
    ];
    $('#wrongFilter').innerHTML =
      '<select id="wOwnerSel" class="fbtn" style="padding:6px 10px">' +
        '<option value="all">全部学生（' + owners.length + ' 人）</option>' +
        owners.map(function (o, i) {
          return '<option value="' + i + '"' + (o === state.wOwner ? ' selected' : '') + '>' +
                 esc(o) + '（' + counts[o] + '）</option>';
        }).join('') +
      '</select>' +
      statusBtns.map(function (s) {
        return '<button class="fbtn" data-s="' + s.id + '" aria-pressed="' +
               String(s.id === state.wStatus) + '">' + s.name + '</button>';
      }).join('');

    $$('#wrongFilter .fbtn[data-s]').forEach(function (b) {
      b.addEventListener('click', function () { state.wStatus = b.dataset.s; renderWrong(); });
    });
    var os = $('#wOwnerSel');
    os.addEventListener('change', function () {
      state.wOwner = os.value === 'all' ? 'all' : owners[+os.value];
      renderWrong();
    });

    /* 过滤 + 排序 */
    var arr = all.filter(function (w) {
      if (state.wOwner !== 'all' && ownerOf(w) !== state.wOwner) return false;
      if (state.wStatus === 'todo' && w.done) return false;
      if (state.wStatus === 'done' && !w.done) return false;
      return true;
    });
    arr.sort(function (a, b) { return (a.done ? 1 : 0) - (b.done ? 1 : 0) || b.ts - a.ts; });

    if (!arr.length) {
      $('#wrongList').innerHTML = all.length
        ? '<div class="empty"><div class="big">🔍</div>当前筛选条件下没有错题</div>'
        : '<div class="empty"><div class="big">📕</div>还没有收录错题。<br>' +
          '<b>学生</b>：填上名字后把错题录进来，再点「导出发给老师」。<br>' +
          '<b>老师</b>：直接点「导入学生错题」，把收到的文件合进来。</div>';
      return;
    }

    $('#wrongList').innerHTML = arr.map(function (w) {
      return '' +
        '<div class="wrong-item' + (w.done ? ' done' : '') + '">' +
          '<div class="wrong-head">' +
            '<span class="chip accent">' + esc(ownerOf(w)) + '</span>' +
            (w.ch ? '<span class="chip primary">' + esc(chapterName(w.ch)) + '</span>' : '<span class="chip">未分类</span>') +
            (w.src ? '<span class="src">' + esc(w.src) + '</span>' : '') +
            '<span class="chip ' + (w.done ? 'ok' : 'err') + '">' + (w.done ? '已掌握' : '待复习') + '</span>' +
            '<span class="src" style="margin-left:auto">' + fmtDate(w.ts) + '</span>' +
          '</div>' +
          '<div class="wq">' + esc(w.q) + '</div>' +
          (w.cause ? '<div class="wfield"><span class="lab">错因</span>' + esc(w.cause) + '</div>' : '') +
          (w.fix ? '<div class="wfield ok"><span class="lab">正解</span><pre>' + esc(w.fix) + '</pre></div>' : '') +
          '<div class="wrong-acts">' +
            '<button class="btn sm" data-act="toggle" data-id="' + w.id + '">' + (w.done ? '标记为待复习' : '标记为已掌握') + '</button>' +
            '<button class="btn sm" data-act="edit" data-id="' + w.id + '">重新编辑</button>' +
            '<button class="btn sm danger" data-act="del" data-id="' + w.id + '">删除</button>' +
          '</div>' +
        '</div>';
    }).join('');

    $$('#wrongList [data-act]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.dataset.id, act = b.dataset.act;
        var list = loadWrong();
        if (act === 'toggle') {
          list.forEach(function (w) { if (w.id === id) w.done = !w.done; });
          saveWrong(list); renderWrong();
        } else if (act === 'del') {
          if (!confirm('确定删除这条错题吗？删除后无法恢复。')) return;
          saveWrong(list.filter(function (w) { return w.id !== id; }));
          renderWrong(); toast('已删除');
        } else if (act === 'edit') {
          var w = null;
          list.forEach(function (x) { if (x.id === id) w = x; });
          if (!w) return;
          $('#wq').value = w.q || '';
          $('#wsrc').value = w.src || '';
          $('#wch').value = w.ch || '';
          $('#wcause').value = w.cause || '';
          $('#wfix').value = w.fix || '';
          saveWrong(list.filter(function (x) { return x.id !== id; }));
          renderWrong();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          $('#wq').focus();
          toast('已载入表单，修改后重新提交');
        }
      });
    });
  }

  function fmtDate(ts) {
    if (!ts) return '';
    var d = new Date(ts);
    var p = function (n) { return n < 10 ? '0' + n : '' + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  /* 导入学生导出的 json，按 id 去重 */
  function importFiles(files) {
    var list = loadWrong();
    var seen = {};
    list.forEach(function (w) { seen[w.id] = true; });

    var added = 0, dup = 0, bad = 0, pending = files.length;

    function done() {
      if (--pending > 0) return;
      if (added) saveWrong(list);
      renderWrong();
      var msg = '导入完成：新增 ' + added + ' 条';
      if (dup) msg += '，跳过重复 ' + dup + ' 条';
      if (bad) msg += '，' + bad + ' 个文件读不了';
      toast(msg);
    }

    files.forEach(function (f) {
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          var items = Array.isArray(data) ? data
                    : (data && Array.isArray(data.items) ? data.items : null);
          if (!items) throw new Error('格式不对');
          var fallback = (data && data.owner) ? String(data.owner).slice(0, 20) : '未标注';
          items.forEach(function (it) {
            if (!it || !it.q) { dup++; return; }
            var id = it.id || ('w' + Date.now() + Math.random().toString(36).slice(2, 7));
            if (seen[id]) { dup++; return; }
            seen[id] = true;
            list.push({
              id: id,
              owner: it.owner ? String(it.owner).slice(0, 20) : fallback,
              q: String(it.q),
              src: it.src ? String(it.src) : '',
              ch: it.ch ? String(it.ch) : '',
              cause: it.cause ? String(it.cause) : '',
              fix: it.fix ? String(it.fix) : '',
              done: !!it.done,
              ts: it.ts || Date.now()
            });
            added++;
          });
        } catch (e) { bad++; }
        done();
      };
      reader.onerror = function () { bad++; done(); };
      reader.readAsText(f, 'utf-8');
    });
  }

  function initWrong() {
    /* 当前使用者 */
    var nameInput = $('#ownerName');
    nameInput.value = getOwner();
    nameInput.addEventListener('input', function () {
      setOwner(nameInput.value.trim());
      var v = nameInput.value.trim();
      $('#ownerHint').textContent = v ? '录入归属：' + v : '未设置（新错题会标成「未标注」）';
    });
    nameInput.addEventListener('change', function () { renderWrong(); });

    /* 录入 */
    $('#wrongForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = $('#wq').value.trim();
      if (!q) { toast('请先填写题目'); return; }
      var list = loadWrong();
      list.push({
        id: 'w' + Date.now() + Math.random().toString(36).slice(2, 6),
        owner: getOwner() || '未标注',
        q: q,
        src: $('#wsrc').value.trim(),
        ch: $('#wch').value,
        cause: $('#wcause').value.trim(),
        fix: $('#wfix').value.trim(),
        done: false,
        ts: Date.now()
      });
      if (saveWrong(list)) {
        this.reset();
        renderWrong();
        toast(getOwner() ? '已加入错题本' : '已加入。建议填上「当前使用者」，老师才好认领');
      }
    });

    /* 导出发给老师（结构化 json，给程序读） */
    $('#exportJson').addEventListener('click', function () {
      var arr = loadWrong();
      if (!arr.length) { toast('还没有错题，先录几道再导出'); return; }
      var owner = getOwner();
      if (!owner) {
        toast('请先在「当前使用者」填上你的名字，老师才知道是谁的');
        nameInput.focus();
        return;
      }
      var payload = {
        app: 'gaokao-math',
        type: 'wrong-book',
        version: 1,
        owner: owner,
        exportedAt: new Date().toISOString(),
        count: arr.length,
        items: arr
      };
      download(JSON.stringify(payload, null, 2),
        '数学错题-' + owner + '-' + stamp() + '.json', 'application/json');
      toast('已导出 ' + arr.length + ' 条，把文件发给老师');
    });

    /* 导入学生错题（支持一次选多个文件） */
    $('#importJson').addEventListener('click', function () { $('#importFile').click(); });
    $('#importFile').addEventListener('change', function () {
      var files = Array.prototype.slice.call(this.files || []);
      this.value = '';
      if (files.length) importFiles(files);
    });

    /* 导出为文本（打印复习用） */
    $('#exportTxt').addEventListener('click', function () {
      var arr = loadWrong();
      if (!arr.length) { toast('错题本还是空的'); return; }
      var lines = ['高三数学错题本  导出时间：' + new Date().toLocaleString('zh-CN'), ''];
      arr.forEach(function (w, i) {
        lines.push('【' + (i + 1) + '】' + ownerOf(w) + (w.done ? '  [已掌握]' : ''));
        if (w.src)   lines.push('来源：' + w.src);
        lines.push('章节：' + (w.ch ? chapterName(w.ch) : '未分类'));
        lines.push('题目：' + w.q);
        if (w.cause) lines.push('错因：' + w.cause);
        if (w.fix)   lines.push('正解：' + w.fix);
        lines.push('');
      });
      download(lines.join('\n'), '高三数学错题本-' + stamp() + '.txt');
      toast('已导出为文本文件');
    });

    $('#clearDone').addEventListener('click', function () {
      var list = loadWrong();
      var left = list.filter(function (w) { return !w.done; });
      if (left.length === list.length) { toast('没有已掌握的错题'); return; }
      if (!confirm('确定清除 ' + (list.length - left.length) + ' 条已掌握的错题吗？')) return;
      saveWrong(left); renderWrong(); toast('已清除');
    });

    $('#clearAll').addEventListener('click', function () {
      var list = loadWrong();
      if (!list.length) { toast('错题本还是空的'); return; }
      if (!confirm('确定清空全部 ' + list.length + ' 条错题吗？此操作不可恢复，建议先导出备份。')) return;
      if (!confirm('再次确认：真的要清空吗？')) return;
      saveWrong([]); renderWrong(); toast('已清空');
    });
  }

  /* ---------------- 全局事件 ---------------- */
  function initGlobal() {
    $$('#nav button').forEach(function (b) {
      b.addEventListener('click', function () { go(b.dataset.view); });
    });
    $$('[data-goto]').forEach(function (b) {
      b.addEventListener('click', function () { go(b.dataset.goto); });
    });
    $('#openAllSol').addEventListener('click', function () {
      $$('#pracList details.acc').forEach(function (d) { d.open = true; });
    });
    $('#closeAllSol').addEventListener('click', function () {
      $$('#pracList details.acc').forEach(function (d) { d.open = false; });
    });
    window.addEventListener('hashchange', parseHash);
  }

  /* ---------------- 启动 ---------------- */
  initTheme();
  initGlobal();
  initWrong();
  parseHash();
})();
