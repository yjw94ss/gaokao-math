/* ============================================================
 * 高中数学公式大全 · 数据
 * ------------------------------------------------------------
 * 覆盖人教A版（2019 新课标）必修 + 选择性必修全部主题。
 * 每个公式包含四项：
 *   t    公式名称
 *   f    公式本体
 *   mean 含义（这个公式在说什么）
 *   sym  符号说明（每个字母代表什么）
 *   cond 适用条件（什么时候能用、什么时候不能）
 * 想补充内容，往对应章节的 items 里加对象即可。
 * ============================================================ */

const FORMULAS = [

  /* ==================== 必修第一册 ==================== */
  {
    id: 'f-set',
    no: '01',
    name: '集合与常用逻辑用语',
    book: '必修第一册',
    items: [
      {
        t: '子集个数公式',
        f: '含 <i>n</i> 个元素的集合共有 <b>2<sup><i>n</i></sup></b> 个子集，<b>2<sup><i>n</i></sup> − 1</b> 个真子集，<b>2<sup><i>n</i></sup> − 2</b> 个非空真子集',
        mean: '把"取子集"看成对每个元素做一次"选或不选"的决定：<i>n</i> 个元素就有 2<sup><i>n</i></sup> 种取法。再扣掉"它自己"（真子集）和"空集"（非空真子集）。',
        sym: '<i>n</i> — 集合中元素的个数；<b>真子集</b> — 不含原集合本身的子集；<b>非空真子集</b> — 真子集中再排除 ∅',
        cond: '<i>n</i> 为非负整数。前提是集合元素互异（集合本身不允许重复元素）。'
      },
      {
        t: '集合的三种运算',
        f: '<i>A</i> ∩ <i>B</i> = {<i>x</i> | <i>x</i> ∈ <i>A</i> 且 <i>x</i> ∈ <i>B</i>}<br><i>A</i> ∪ <i>B</i> = {<i>x</i> | <i>x</i> ∈ <i>A</i> 或 <i>x</i> ∈ <i>B</i>}<br>∁<sub><i>U</i></sub><i>A</i> = {<i>x</i> | <i>x</i> ∈ <i>U</i> 且 <i>x</i> ∉ <i>A</i>}',
        mean: '交集是"两个都要"，并集是"有一个就行"，补集是"在全集中但不在 A 里"。做题时画数轴或韦恩图最快。',
        sym: '<i>U</i> — 全集（研究范围内所有元素构成的集合）；∁<sub><i>U</i></sub><i>A</i> — <i>A</i> 在 <i>U</i> 中的补集',
        cond: '补集必须先明确全集 <i>U</i>，换全集则补集不同。'
      },
      {
        t: '德摩根定律',
        f: '∁<sub><i>U</i></sub>(<i>A</i> ∩ <i>B</i>) = (∁<sub><i>U</i></sub><i>A</i>) ∪ (∁<sub><i>U</i></sub><i>B</i>)<br>∁<sub><i>U</i></sub>(<i>A</i> ∪ <i>B</i>) = (∁<sub><i>U</i></sub><i>A</i>) ∩ (∁<sub><i>U</i></sub><i>B</i>)',
        mean: '"交的补等于补的并，并的补等于补的交"——取补时交集并集要互换。',
        sym: '同前，<i>U</i> 为全集',
        cond: '两个集合必须在同一个全集 <i>U</i> 下讨论。'
      },
      {
        t: '充分必要条件与集合的对应',
        f: '<i>p</i> ⇒ <i>q</i>　⇔　<i>A</i> ⊆ <i>B</i>',
        mean: '把命题成立的条件写成集合后，"推出"就等价于"包含"。<b>小范围能推出大范围</b>：条件越苛刻（集合越小），越"充分"。',
        sym: '<i>A</i> = {<i>x</i> | <i>p</i>(<i>x</i>) 成立}，<i>B</i> = {<i>x</i> | <i>q</i>(<i>x</i>) 成立}；<i>p</i> 是 <i>q</i> 的充分条件，<i>q</i> 是 <i>p</i> 的必要条件',
        cond: '需先把两个命题各自成立的元素集合写出来，再比包含关系。'
      },
      {
        t: '全称量词与存在量词的否定',
        f: '¬(∀<i>x</i> ∈ <i>M</i>, <i>p</i>(<i>x</i>)) ⇔ ∃<i>x</i> ∈ <i>M</i>, ¬<i>p</i>(<i>x</i>)<br>¬(∃<i>x</i> ∈ <i>M</i>, <i>p</i>(<i>x</i>)) ⇔ ∀<i>x</i> ∈ <i>M</i>, ¬<i>p</i>(<i>x</i>)',
        mean: '否定时"两处都要改"：量词 ∀ 与 ∃ 互换，结论 <i>p</i> 取反。只改一处是最常见的错误。',
        sym: '∀ — 全称量词（对任意）；∃ — 存在量词（存在）；¬ — 否定；<i>M</i> — 讨论范围',
        cond: '<i>M</i> 非空。否定后量词的作用范围不变，仍是 <i>M</i>。'
      }
    ]
  },
  {
    id: 'f-ineq',
    no: '02',
    name: '一元二次函数、方程和不等式',
    book: '必修第一册',
    items: [
      {
        t: '一元二次不等式解集（a > 0）',
        f: '设 Δ = <i>b</i><sup>2</sup> − 4<i>ac</i>，方程 <i>ax</i><sup>2</sup>+<i>bx</i>+<i>c</i> = 0 的两根为 <i>x</i><sub>1</sub> &lt; <i>x</i><sub>2</sub>：<br>Δ &gt; 0：<i>ax</i><sup>2</sup>+<i>bx</i>+<i>c</i> &gt; 0 的解集为 (−∞, <i>x</i><sub>1</sub>) ∪ (<i>x</i><sub>2</sub>, +∞)<br>Δ = 0：解集为 {<i>x</i> | <i>x</i> ≠ −<span class="frac"><span class="num"><i>b</i></span><span class="den">2<i>a</i></span></span>}<br>Δ &lt; 0：解集为 <b>R</b>（全体实数）',
        mean: '结合二次函数图象记："开口向上，<b>大于取两边，小于取中间</b>"。Δ 决定图象与 <i>x</i> 轴有没有交点。',
        sym: '<i>a</i> — 二次项系数；Δ — 判别式；<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub> — 方程的两实根',
        cond: '<b>必须先保证 <i>a</i> &gt; 0</b>。若 <i>a</i> &lt; 0，两边同乘 −1 并改变不等号方向。求 <i>ax</i><sup>2</sup>+<i>bx</i>+<i>c</i> &lt; 0 时取上述解集的补集。'
      },
      {
        t: '一元二次方程求根公式',
        f: '<i>x</i> = <span class="frac"><span class="num">−<i>b</i> ± √(<i>b</i><sup>2</sup> − 4<i>ac</i>)</span><span class="den">2<i>a</i></span></span>',
        mean: '直接由系数算出两根。Δ &gt; 0 两个不等实根，Δ = 0 一个重根，Δ &lt; 0 无实根。',
        sym: '<i>a</i>, <i>b</i>, <i>c</i> — 方程 <i>ax</i><sup>2</sup>+<i>bx</i>+<i>c</i>=0 的系数；Δ = <i>b</i><sup>2</sup>−4<i>ac</i>',
        cond: '<i>a</i> ≠ 0 且 Δ ≥ 0（在实数范围内）。'
      },
      {
        t: '韦达定理（根与系数的关系）',
        f: '<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = −<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span>　，　<i>x</i><sub>1</sub><i>x</i><sub>2</sub> = <span class="frac"><span class="num"><i>c</i></span><span class="den"><i>a</i></span></span>',
        mean: '不解方程也能得到两根的和与积。解析几何里联立直线与圆锥曲线后，几乎全靠它。',
        sym: '<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub> — 方程 <i>ax</i><sup>2</sup>+<i>bx</i>+<i>c</i>=0 的两根',
        cond: '<i>a</i> ≠ 0 且 Δ ≥ 0（保证有实根，否则"根"不存在）。'
      },
      {
        t: '基本不等式（均值不等式）',
        f: '<span class="frac"><span class="num"><i>a</i> + <i>b</i></span><span class="den">2</span></span> ≥ √(<i>ab</i>)　，即　<i>a</i> + <i>b</i> ≥ 2√(<i>ab</i>)',
        mean: '两个正数的<b>算术平均数不小于几何平均数</b>。取等时两数相等，此时和最小、积最大。',
        sym: '<span class="frac"><span class="num"><i>a</i>+<i>b</i></span><span class="den">2</span></span> — 算术平均数；√(<i>ab</i>) — 几何平均数',
        cond: '<b>一正、二定、三相等</b>：① <i>a</i> &gt; 0, <i>b</i> &gt; 0；② 求和的最小值需积为定值，求积的最大值需和为定值；③ 等号成立当且仅当 <i>a</i> = <i>b</i>。三条缺一不可，尤其要验证取等条件能否取到。'
      },
      {
        t: '重要不等式',
        f: '<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> ≥ 2<i>ab</i>',
        mean: '由 (<i>a</i>−<i>b</i>)<sup>2</sup> ≥ 0 展开得到。对<b>任意实数</b>都成立，不要求正数。',
        sym: '<i>a</i>, <i>b</i> — 任意实数',
        cond: '<i>a</i>, <i>b</i> ∈ <b>R</b>，无正负限制。等号成立当且仅当 <i>a</i> = <i>b</i>。'
      },
      {
        t: '基本不等式的常用变形',
        f: '<i>ab</i> ≤ (<span class="frac"><span class="num"><i>a</i>+<i>b</i></span><span class="den">2</span></span>)<sup>2</sup>　；　<span class="frac"><span class="num"><i>a</i><sup>2</sup>+<i>b</i><sup>2</sup></span><span class="den">2</span></span> ≥ (<span class="frac"><span class="num"><i>a</i>+<i>b</i></span><span class="den">2</span></span>)<sup>2</sup>　；　<span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">1</span><span class="den"><i>b</i></span></span> ≥ <span class="frac"><span class="num">4</span><span class="den"><i>a</i>+<i>b</i></span></span>',
        mean: '同一个不等式的不同外衣。"乘 1 法"求 <span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>+<span class="frac"><span class="num">k</span><span class="den"><i>b</i></span></span> 型最小值时，用的就是第三条。',
        sym: '同上；后两式的 <i>a</i>, <i>b</i> 均为正数',
        cond: '前两式要求 <i>a</i> &gt; 0, <i>b</i> &gt; 0（第三条同样要求正数）。等号均在 <i>a</i> = <i>b</i> 时成立。'
      }
    ]
  },
  {
    id: 'f-func',
    no: '03',
    name: '函数的概念与性质',
    book: '必修第一册',
    items: [
      {
        t: '单调性的定义',
        f: '任取 <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub> ∈ <i>D</i> 且 <i>x</i><sub>1</sub> &lt; <i>x</i><sub>2</sub>：<br>若恒有 <i>f</i>(<i>x</i><sub>1</sub>) &lt; <i>f</i>(<i>x</i><sub>2</sub>)，则 <i>f</i>(<i>x</i>) 在 <i>D</i> 上单调递增；<br>若恒有 <i>f</i>(<i>x</i><sub>1</sub>) &gt; <i>f</i>(<i>x</i><sub>2</sub>)，则 <i>f</i>(<i>x</i>) 在 <i>D</i> 上单调递减',
        mean: '单调性是<b>区间上的性质</b>，必须指明在哪个区间。证明时用"作差比较法"。',
        sym: '<i>D</i> — 定义域内的某个区间；<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub> — <i>D</i> 内任意两个自变量',
        cond: '必须在定义域的子区间上讨论。单调区间<b>不能写成并集</b>（如 (−∞,0)∪(0,+∞) 是错的），要用"和"或分开写。'
      },
      {
        t: '奇偶性的定义',
        f: '<i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>) ⇒ 偶函数　；　<i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>) ⇒ 奇函数',
        mean: '偶函数图象关于 <i>y</i> 轴对称，奇函数图象关于原点对称。',
        sym: '<i>x</i> — 定义域内任意值，−<i>x</i> 也必须在定义域内',
        cond: '<b>定义域必须关于原点对称</b>，否则既不是奇函数也不是偶函数（例如 <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>, <i>x</i> ∈ [−1, 2)）。奇函数若在 <i>x</i> = 0 处有定义，则必有 <i>f</i>(0) = 0。'
      },
      {
        t: '周期性常用结论',
        f: '<i>f</i>(<i>x</i>+<i>a</i>) = <i>f</i>(<i>x</i>)　⇒　<i>T</i> = <i>a</i><br><i>f</i>(<i>x</i>+<i>a</i>) = −<i>f</i>(<i>x</i>)　⇒　<i>T</i> = 2<i>a</i><br><i>f</i>(<i>x</i>+<i>a</i>) = <span class="frac"><span class="num">1</span><span class="den"><i>f</i>(<i>x</i>)</span></span>　⇒　<i>T</i> = 2<i>a</i>',
        mean: '由自变量的"平移关系"读出函数的重复周期。第二条推两次就回到原式，所以周期翻倍。',
        sym: '<i>a</i> — 正常数；<i>T</i> — 函数的一个周期',
        cond: '等式要对定义域内<b>一切</b> <i>x</i> 成立。第三条还要求 <i>f</i>(<i>x</i>) ≠ 0。'
      },
      {
        t: '对称性结论',
        f: '<i>f</i>(<i>a</i>+<i>x</i>) = <i>f</i>(<i>a</i>−<i>x</i>)　⇒　图象关于直线 <i>x</i> = <i>a</i> 对称<br><i>f</i>(<i>a</i>+<i>x</i>) = −<i>f</i>(<i>a</i>−<i>x</i>)　⇒　图象关于点 (<i>a</i>, 0) 对称',
        mean: '把 <i>x</i> = <i>a</i> 看作对称轴或对称中心。奇函数、偶函数是 <i>a</i> = 0 的特例。',
        sym: '<i>a</i> — 对称轴（或对称中心）的横坐标',
        cond: '对定义域内一切 <i>x</i> 成立，且 <i>a</i>+<i>x</i>、<i>a</i>−<i>x</i> 都要在定义域内。'
      }
    ]
  },
  {
    id: 'f-explog',
    no: '04',
    name: '指数函数与对数函数',
    book: '必修第一册',
    items: [
      {
        t: '指数运算法则',
        f: '<i>a</i><sup><i>m</i></sup> · <i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i>+<i>n</i></sup>　；　(<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup>　；　(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup><br><i>a</i><sup>−<i>n</i></sup> = <span class="frac"><span class="num">1</span><span class="den"><i>a</i><sup><i>n</i></sup></span></span>　；　<i>a</i><sup>0</sup> = 1（<i>a</i> ≠ 0）',
        mean: '同底数幂相乘指数相加，幂的乘方指数相乘。这是化简指数式的基本工具。',
        sym: '<i>a</i> &gt; 0，<i>b</i> &gt; 0 — 底数；<i>m</i>, <i>n</i> ∈ <b>R</b> — 指数',
        cond: '底数必须为正数。<b>注意没有</b> <i>a</i><sup><i>m</i></sup>+<i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i>+<i>n</i></sup> 这种"法则"。'
      },
      {
        t: '分数指数幂与根式互化',
        f: '<span style="white-space:nowrap"><sup><i>n</i></sup>√(<i>a</i><sup><i>m</i></sup>)</span> = <i>a</i><sup><span class="frac"><span class="num"><i>m</i></span><span class="den"><i>n</i></span></span></sup>　（<i>a</i> &gt; 0）',
        mean: '根式与分数指数幂是一回事，统一写成指数形式后才能用指数运算法则。',
        sym: '<i>n</i> — 根指数；<i>m</i> — 被开方数的指数；<i>a</i> — 底数',
        cond: '<i>a</i> &gt; 0，<i>m</i>, <i>n</i> ∈ <b>N</b>*，<i>n</i> &gt; 1。若 <i>a</i> &lt; 0 则不能这样转化（偶次根号下无意义）。'
      },
      {
        t: '对数运算法则',
        f: 'log<sub><i>a</i></sub>(<i>MN</i>) = log<sub><i>a</i></sub><i>M</i> + log<sub><i>a</i></sub><i>N</i><br>log<sub><i>a</i></sub><span class="frac"><span class="num"><i>M</i></span><span class="den"><i>N</i></span></span> = log<sub><i>a</i></sub><i>M</i> − log<sub><i>a</i></sub><i>N</i><br>log<sub><i>a</i></sub><i>M</i><sup><i>n</i></sup> = <i>n</i> · log<sub><i>a</i></sub><i>M</i>',
        mean: '对数把"乘除"降级成"加减"，把"乘方"降级成"乘"——这正是它最大的用处。',
        sym: '<i>a</i> — 底数；<i>M</i>, <i>N</i> — 真数；<i>n</i> ∈ <b>R</b>',
        cond: '<i>a</i> &gt; 0 且 <i>a</i> ≠ 1；<b><i>M</i> &gt; 0，<i>N</i> &gt; 0</b>（真数必须为正）。<b>log<sub><i>a</i></sub>(<i>M</i>+<i>N</i>) 不能拆开</b>，只有乘除才能拆。'
      },
      {
        t: '换底公式',
        f: 'log<sub><i>a</i></sub><i>b</i> = <span class="frac"><span class="num">log<sub><i>c</i></sub><i>b</i></span><span class="den">log<sub><i>c</i></sub><i>a</i></span></span><br>推论：log<sub><i>a</i></sub><i>b</i> · log<sub><i>b</i></sub><i>a</i> = 1　；　log<sub><i>a</i><sup><i>n</i></sup></sub><i>b</i><sup><i>m</i></sup> = <span class="frac"><span class="num"><i>m</i></span><span class="den"><i>n</i></span></span> log<sub><i>a</i></sub><i>b</i>',
        mean: '把不同底的对数统一成同一个底（通常换成 10 或 e），才能比较大小或合并。',
        sym: '<i>a</i> — 原底数；<i>b</i> — 真数；<i>c</i> — 新底数',
        cond: '<i>a</i> &gt; 0 且 <i>a</i> ≠ 1；<i>c</i> &gt; 0 且 <i>c</i> ≠ 1；<i>b</i> &gt; 0。'
      },
      {
        t: '对数恒等式',
        f: '<i>a</i><sup>log<sub><i>a</i></sub><i>N</i></sup> = <i>N</i>　；　log<sub><i>a</i></sub><i>a</i> = 1　；　log<sub><i>a</i></sub>1 = 0',
        mean: '指数与对数互为逆运算的体现。化简形如 <i>a</i><sup>log<sub><i>a</i></sub><i>N</i></sup> 的式子时一步到位。',
        sym: '<i>a</i> — 底数；<i>N</i> — 真数',
        cond: '<i>a</i> &gt; 0 且 <i>a</i> ≠ 1；<i>N</i> &gt; 0。'
      },
      {
        t: '零点存在定理',
        f: '若 <i>f</i>(<i>x</i>) 在 [<i>a</i>, <i>b</i>] 上图象连续不断，且 <i>f</i>(<i>a</i>) · <i>f</i>(<i>b</i>) &lt; 0，<br>则存在 <i>c</i> ∈ (<i>a</i>, <i>b</i>)，使 <i>f</i>(<i>c</i>) = 0',
        mean: '两端点函数值异号，中间必然穿过 <i>x</i> 轴。这是判断"零点所在区间"的唯一依据。',
        sym: '<i>a</i>, <i>b</i> — 区间端点；<i>c</i> — 存在的零点',
        cond: '① 函数在闭区间上<b>连续不断</b>；② 两端点函数值<b>异号</b>。定理只保证"存在"，不保证唯一；若再结合单调性才能确定唯一。'
      }
    ]
  },
  {
    id: 'f-trig',
    no: '05',
    name: '三角函数',
    book: '必修第一册',
    items: [
      {
        t: '角度与弧度的换算',
        f: '180° = π rad　；　1 rad = (<span class="frac"><span class="num">180</span><span class="den">π</span></span>)° ≈ 57.30°',
        mean: '弧度是"弧长与半径的比值"，是个纯数（无单位）。微积分和物理里一律用弧度。',
        sym: 'rad — 弧度单位（常省略）；π ≈ 3.14159',
        cond: '无特殊限制。换算时记住"度变弧度乘 π/180"。'
      },
      {
        t: '弧长公式与扇形面积公式',
        f: '弧长　<i>l</i> = |α| <i>r</i><br>扇形面积　<i>S</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>lr</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>|α| <i>r</i><sup>2</sup>',
        mean: '圆心角越大、半径越大，弧越长。面积公式可以对比圆的面积 π<i>r</i><sup>2</sup> 理解：整个圆是 α = 2π。',
        sym: '<i>l</i> — 弧长；α — 圆心角的弧度数；<i>r</i> — 半径；<i>S</i> — 扇形面积',
        cond: '<b>α 必须用弧度制</b>。若题目给的是角度，先换算。'
      },
      {
        t: '同角三角函数的基本关系',
        f: 'sin<sup>2</sup>α + cos<sup>2</sup>α = 1<br>tanα = <span class="frac"><span class="num">sinα</span><span class="den">cosα</span></span>',
        mean: '"平方关系"和"商数关系"。已知一个三角函数值求其余两个，就靠这两条（注意判断象限定符号）。',
        sym: 'α — 任意角；sinα, cosα, tanα — 正弦、余弦、正切',
        cond: '平方关系对一切 α 成立；商数关系要求 <b>cosα ≠ 0</b>，即 α ≠ <span class="frac"><span class="num">π</span><span class="den">2</span></span> + <i>k</i>π（<i>k</i> ∈ <b>Z</b>）。'
      },
      {
        t: '诱导公式（口诀）',
        f: '<b>奇变偶不变，符号看象限</b><br>sin(π − α) = sinα　；　cos(π − α) = −cosα<br>sin(π + α) = −sinα　；　cos(π + α) = −cosα<br>sin(−α) = −sinα　；　cos(−α) = cosα<br>sin(<span class="frac"><span class="num">π</span><span class="den">2</span></span> − α) = cosα　；　cos(<span class="frac"><span class="num">π</span><span class="den">2</span></span> − α) = sinα',
        mean: '"奇变偶不变"指 <span class="frac"><span class="num">π</span><span class="den">2</span></span> 的奇数倍要换函数名、偶数倍不换；"符号看象限"指把 α 当作锐角，判断原角所在象限的三角函数符号。',
        sym: 'α — 任意角（口诀中当锐角处理）；<i>k</i> — 整数',
        cond: '所有 α 均成立。口诀里"看象限"是判断<b>化简前</b>那个角的象限。'
      },
      {
        t: '两角和与差公式',
        f: 'sin(α ± β) = sinα cosβ ± cosα sinβ<br>cos(α ± β) = cosα cosβ ∓ sinα sinβ<br>tan(α ± β) = <span class="frac"><span class="num">tanα ± tanβ</span><span class="den">1 ∓ tanα tanβ</span></span>',
        mean: '把两个角的三角函数合成一个角。注意余弦公式中间的符号<b>与左边相反</b>（这是最容易记错的地方）。',
        sym: 'α, β — 任意角',
        cond: '正切公式要求 tanα、tanβ 及分母都有意义，即 α、β、α±β 均不等于 <span class="frac"><span class="num">π</span><span class="den">2</span></span> + <i>k</i>π。'
      },
      {
        t: '二倍角公式',
        f: 'sin2α = 2 sinα cosα<br>cos2α = cos<sup>2</sup>α − sin<sup>2</sup>α = 2cos<sup>2</sup>α − 1 = 1 − 2sin<sup>2</sup>α<br>tan2α = <span class="frac"><span class="num">2 tanα</span><span class="den">1 − tan<sup>2</sup>α</span></span>',
        mean: '和角公式中令 β = α 即得。余弦有三种等价写法，按题目需要挑最方便的那个。',
        sym: 'α — 任意角',
        cond: '正切公式要求 tanα 存在且 <b>tanα ≠ ±1</b>（分母不为 0），即 α ≠ <span class="frac"><span class="num">π</span><span class="den">2</span></span> + <i>k</i>π 且 α ≠ <span class="frac"><span class="num">π</span><span class="den">4</span></span> + <span class="frac"><span class="num"><i>k</i>π</span><span class="den">2</span></span>。'
      },
      {
        t: '降幂公式（半角变形）',
        f: 'sin<sup>2</sup>α = <span class="frac"><span class="num">1 − cos2α</span><span class="den">2</span></span>　；　cos<sup>2</sup>α = <span class="frac"><span class="num">1 + cos2α</span><span class="den">2</span></span>',
        mean: '由 cos2α 的两种写法反解得到。作用是<b>把平方降成一次</b>，从而求周期、求最值。',
        sym: 'α — 任意角',
        cond: '对一切 α 成立。常用于化简 sin<sup>2</sup><i>x</i> + sin<i>x</i>cos<i>x</i> 这类式子。'
      },
      {
        t: '辅助角公式',
        f: '<i>a</i> sin<i>x</i> + <i>b</i> cos<i>x</i> = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) · sin(<i>x</i> + φ)　，其中 tanφ = <span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span>',
        mean: '把"一个正弦加一个余弦"合成<b>一个</b>正弦，从而直接读出振幅、周期和最值。这是三角函数解答题的主线方法。',
        sym: '<i>a</i>, <i>b</i> — 系数；√(<i>a</i><sup>2</sup>+<i>b</i><sup>2</sup>) — 合成后的振幅；φ — 辅助角，由点 (<i>a</i>, <i>b</i>) 所在象限确定',
        cond: '<i>a</i>, <i>b</i> 不同时为 0。<b>φ 不能只写成 arctan(<i>b</i>/<i>a</i>)</b>，还要看 (<i>a</i>, <i>b</i>) 的象限来定终边位置。'
      },
      {
        t: '正弦型函数的性质',
        f: '<i>y</i> = <i>A</i> sin(ω<i>x</i> + φ) + <i>k</i>　（<i>A</i> &gt; 0, ω &gt; 0）<br>振幅 <i>A</i>　；　周期 <i>T</i> = <span class="frac"><span class="num">2π</span><span class="den">ω</span></span>　；　频率 <i>f</i> = <span class="frac"><span class="num">1</span><span class="den"><i>T</i></span></span> = <span class="frac"><span class="num">ω</span><span class="den">2π</span></span><br>最大值 <i>A</i> + <i>k</i>　；　最小值 −<i>A</i> + <i>k</i>',
        mean: '四个参数各管一件事：<i>A</i> 管"多高"，ω 管"多密"，φ 管"左右挪"，<i>k</i> 管"上下挪"。',
        sym: '<i>A</i> — 振幅；ω — 角频率；φ — 初相；ω<i>x</i> + φ — 相位；<i>k</i> — 纵向平移量',
        cond: '要求 <i>A</i> &gt; 0 且 <b>ω &gt; 0</b>。若 ω &lt; 0，先用诱导公式把负号提出去再套公式。'
      }
    ]
  },

  /* ==================== 必修第二册 ==================== */
  {
    id: 'f-vector',
    no: '06',
    name: '平面向量及其应用',
    book: '必修第二册',
    items: [
      {
        t: '向量的数量积（点积）',
        f: '<b>a</b> · <b>b</b> = |<b>a</b>| |<b>b</b>| cos⟨<b>a</b>, <b>b</b>⟩<br>坐标形式：<b>a</b> · <b>b</b> = <i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub>',
        mean: '数量积的结果是<b>一个数</b>（不是向量）。它把"长度"和"夹角"打包在一起，是向量与代数之间的桥梁。',
        sym: '<b>a</b>, <b>b</b> — 两个非零向量；|<b>a</b>| — 向量的模（长度）；⟨<b>a</b>,<b>b</b>⟩ — 两向量夹角；<b>a</b> = (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)，<b>b</b> = (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)',
        cond: '夹角 ⟨<b>a</b>,<b>b</b>⟩ ∈ [0, π]。数量积为负说明夹角是钝角，为零说明垂直——这是快速自检的办法。'
      },
      {
        t: '向量的模与夹角',
        f: '|<b>a</b>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)<br>cos⟨<b>a</b>, <b>b</b>⟩ = <span class="frac"><span class="num"><b>a</b> · <b>b</b></span><span class="den">|<b>a</b>| |<b>b</b>|</span></span>',
        mean: '模是勾股定理的向量版；夹角余弦把数量积"归一化"成只跟方向有关的量。',
        sym: '同上；|<b>a</b>| — 向量 <b>a</b> 的模',
        cond: '求夹角要求 |<b>a</b>| ≠ 0 且 |<b>b</b>| ≠ 0（零向量方向不确定，不谈夹角）。常用技巧：|<b>a</b> ± <b>b</b>|<sup>2</sup> = |<b>a</b>|<sup>2</sup> ± 2<b>a</b>·<b>b</b> + |<b>b</b>|<sup>2</sup>。'
      },
      {
        t: '平行与垂直的判定',
        f: '<b>a</b> ∥ <b>b</b>　⇔　<b>a</b> = λ<b>b</b>　⇔　<i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>x</i><sub>2</sub><i>y</i><sub>1</sub> = 0<br><b>a</b> ⊥ <b>b</b>　⇔　<b>a</b> · <b>b</b> = 0　⇔　<i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub> = 0',
        mean: '平行看"交叉相乘相减"，垂直看"对应相乘相加"。两个坐标式长得很像，<b>千万别记反</b>。',
        sym: 'λ — 实数（存在且唯一，若 <b>b</b> ≠ <b>0</b>）',
        cond: '平行判定中若 <b>b</b> = <b>0</b> 则 λ 不唯一，但坐标式仍成立。零向量与任何向量都平行。'
      },
      {
        t: '投影向量与投影数量',
        f: '向量 <b>b</b> 在 <b>a</b> 方向上的投影向量 = <span class="frac"><span class="num"><b>a</b> · <b>b</b></span><span class="den">|<b>a</b>|<sup>2</sup></span></span> · <b>a</b><br>投影数量 = <span class="frac"><span class="num"><b>a</b> · <b>b</b></span><span class="den">|<b>a</b>|</span></span> = |<b>b</b>| cos⟨<b>a</b>, <b>b</b>⟩',
        mean: '把 <b>b</b> "拍扁"到 <b>a</b> 的方向上。投影数量可正可负：夹角为钝角时为负。',
        sym: '<b>a</b> — 作为基准方向的向量；<b>b</b> — 被投影的向量',
        cond: '<b>a</b> ≠ <b>0</b>（投影方向必须存在）。'
      },
      {
        t: '三角形中的向量结论',
        f: '<i>D</i> 为 <i>BC</i> 中点：<b>AD</b> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>(<b>AB</b> + <b>AC</b>)<br><i>G</i> 为重心：<b>GA</b> + <b>GB</b> + <b>GC</b> = <b>0</b>',
        mean: '把几何中点、重心翻译成向量关系，处理"中线""重心"类问题比纯几何快得多。',
        sym: '<i>D</i> — <i>BC</i> 中点；<i>G</i> — 三角形重心；<b>0</b> — 零向量',
        cond: '无特殊限制，适用于任意三角形。'
      },
      {
        t: '正弦定理',
        f: '<span class="frac"><span class="num"><i>a</i></span><span class="den">sin<i>A</i></span></span> = <span class="frac"><span class="num"><i>b</i></span><span class="den">sin<i>B</i></span></span> = <span class="frac"><span class="num"><i>c</i></span><span class="den">sin<i>C</i></span></span> = 2<i>R</i>',
        mean: '边与对角的正弦成正比，比值等于外接圆直径。已知"两角一边"或"两边及一边对角"时用它。',
        sym: '<i>a</i>, <i>b</i>, <i>c</i> — 角 <i>A</i>, <i>B</i>, <i>C</i> 的对边；<i>R</i> — 三角形外接圆半径',
        cond: '任意三角形都成立。用它求角时，sin 值对应<b>两个角</b>（锐角与钝角），必须检验是否满足内角和 &lt; 180°。'
      },
      {
        t: '余弦定理',
        f: '<i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos<i>A</i><br>cos<i>A</i> = <span class="frac"><span class="num"><i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>a</i><sup>2</sup></span><span class="den">2<i>bc</i></span></span>',
        mean: '已知"两边及夹角"求第三边，或已知"三边"求角。<b>判断角是锐角还是钝角</b>用它最稳。',
        sym: '同上；<i>A</i> — 边 <i>a</i> 所对的角',
        cond: '任意三角形都成立。推论：若 <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> &gt; <i>c</i><sup>2</sup> 则角 <i>C</i> 为锐角，等于则为直角，小于则为钝角。'
      },
      {
        t: '三角形面积公式',
        f: '<i>S</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>ab</i> sin<i>C</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>bc</i> sin<i>A</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>ac</i> sin<i>B</i>',
        mean: '"两边夹一角"就能算面积。解三角形大题里，求面积往往是最后一问。',
        sym: '<i>S</i> — 三角形面积；<i>a</i>, <i>b</i>, <i>c</i> — 三边；<i>A</i>, <i>B</i>, <i>C</i> — 对应的三个内角',
        cond: '任意三角形。用的角必须是<b>所选两边夹的那个角</b>。'
      }
    ]
  },
  {
    id: 'f-complex',
    no: '07',
    name: '复数',
    book: '必修第二册',
    items: [
      {
        t: '复数的代数形式与相等',
        f: '<i>z</i> = <i>a</i> + <i>b</i>i　（<i>a</i>, <i>b</i> ∈ <b>R</b>）<br><i>a</i><sub>1</sub> + <i>b</i><sub>1</sub>i = <i>a</i><sub>2</sub> + <i>b</i><sub>2</sub>i　⇔　<i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> 且 <i>b</i><sub>1</sub> = <i>b</i><sub>2</sub>',
        mean: '复数由实部和虚部唯一确定。两个复数相等，必须实部、虚部<b>分别</b>相等。',
        sym: '<i>a</i> — 实部；<i>b</i> — 虚部（是实数）；i — 虚数单位，满足 i<sup>2</sup> = −1',
        cond: '比较大小只能在实数范围内。两个虚部不为 0 的复数<b>不能比大小</b>。'
      },
      {
        t: '共轭复数与模',
        f: '<span style="text-decoration:overline"><i>z</i></span> = <i>a</i> − <i>b</i>i　；　|<i>z</i>| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)<br><i>z</i> · <span style="text-decoration:overline"><i>z</i></span> = |<i>z</i>|<sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>',
        mean: '共轭就是虚部变号。复数乘它的共轭得到<b>实数</b>，这是复数除法"分母实数化"的关键。',
        sym: '<span style="text-decoration:overline"><i>z</i></span> — <i>z</i> 的共轭复数；|<i>z</i>| — 复数 <i>z</i> 的模（非负实数）',
        cond: '对任意复数成立。|<i>z</i><sub>1</sub><i>z</i><sub>2</sub>| = |<i>z</i><sub>1</sub>||<i>z</i><sub>2</sub>| 成立，但 |<i>z</i><sub>1</sub>+<i>z</i><sub>2</sub>| ≤ |<i>z</i><sub>1</sub>|+|<i>z</i><sub>2</sub>| 一般取不到等号。'
      },
      {
        t: '复数的四则运算',
        f: '(<i>a</i>+<i>b</i>i) ± (<i>c</i>+<i>d</i>i) = (<i>a</i>±<i>c</i>) + (<i>b</i>±<i>d</i>)i<br>(<i>a</i>+<i>b</i>i)(<i>c</i>+<i>d</i>i) = (<i>ac</i>−<i>bd</i>) + (<i>ad</i>+<i>bc</i>)i<br><span class="frac"><span class="num"><i>a</i>+<i>b</i>i</span><span class="den"><i>c</i>+<i>d</i>i</span></span> = <span class="frac"><span class="num">(<i>a</i>+<i>b</i>i)(<i>c</i>−<i>d</i>i)</span><span class="den"><i>c</i><sup>2</sup>+<i>d</i><sup>2</sup></span></span>',
        mean: '加减法按分量算；乘法像多项式展开，只是把 i<sup>2</sup> 换成 −1；除法<b>分子分母同乘分母的共轭</b>。',
        sym: '<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> ∈ <b>R</b>',
        cond: '除法要求分母 <i>c</i>+<i>d</i>i ≠ 0（即 <i>c</i>, <i>d</i> 不同时为 0）。'
      },
      {
        t: '虚数单位 i 的幂的周期性',
        f: 'i<sup>4<i>n</i></sup> = 1　；　i<sup>4<i>n</i>+1</sup> = i　；　i<sup>4<i>n</i>+2</sup> = −1　；　i<sup>4<i>n</i>+3</sup> = −i',
        mean: 'i 的幂每 4 次循环一轮。算高次幂时，先把指数除以 4 取余数。',
        sym: '<i>n</i> ∈ <b>Z</b>（整数）',
        cond: '对一切整数 <i>n</i> 成立。'
      },
      {
        t: '复数的几何意义',
        f: '复数 <i>z</i> = <i>a</i> + <i>b</i>i　↔　复平面内的点 <i>Z</i>(<i>a</i>, <i>b</i>)　↔　向量 <b>OZ</b><br>|<i>z</i><sub>1</sub> − <i>z</i><sub>2</sub>| 表示两点 <i>Z</i><sub>1</sub>, <i>Z</i><sub>2</sub> 间的距离',
        mean: '复数、点、向量三者一一对应。于是"求 |<i>z</i>−<i>z</i><sub>0</sub>| = <i>r</i>"就等价于"求以 <i>z</i><sub>0</sub> 为圆心、<i>r</i> 为半径的圆"。',
        sym: '<i>a</i> — 横坐标（实轴）；<i>b</i> — 纵坐标（虚轴）；|<i>z</i><sub>1</sub>−<i>z</i><sub>2</sub>| — 两点距离',
        cond: '无特殊限制。'
      }
    ]
  },
  {
    id: 'f-solid',
    no: '08',
    name: '立体几何初步',
    book: '必修第二册',
    items: [
      {
        t: '柱、锥、台的体积公式',
        f: '柱体　<i>V</i> = <i>Sh</i><br>锥体　<i>V</i> = <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>Sh</i><br>台体　<i>V</i> = <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>h</i>(<i>S</i> + √(<i>SS</i>′) + <i>S</i>′)',
        mean: '锥体是同底同高柱体的三分之一。台体公式在 <i>S</i>′ = 0 时退化为锥体、<i>S</i>′ = <i>S</i> 时退化为柱体。',
        sym: '<i>S</i> — 底面积；<i>h</i> — 高；<i>S</i>, <i>S</i>′ — 台体的上、下底面积',
        cond: '锥体、柱体的高必须是<b>垂直</b>于底面的距离。台体公式中的 <i>S</i>, <i>S</i>′ 要对应上下底面。'
      },
      {
        t: '球的体积与表面积',
        f: '体积　<i>V</i> = <span class="frac"><span class="num">4</span><span class="den">3</span></span>π<i>R</i><sup>3</sup><br>表面积　<i>S</i> = 4π<i>R</i><sup>2</sup>',
        mean: '球是唯一用一个参数就能确定的几何体。表面积恰好是"大圆面积的 4 倍"。',
        sym: '<i>R</i> — 球的半径',
        cond: '无特殊限制。求外接球时关键是找球心：通常在各条棱的垂直平分面交点上。'
      },
      {
        t: '旋转体的侧面积',
        f: '圆柱侧面积　<i>S</i> = 2π<i>rl</i><br>圆锥侧面积　<i>S</i> = π<i>rl</i><br>圆台侧面积　<i>S</i> = π(<i>r</i> + <i>r</i>′)<i>l</i>',
        mean: '把侧面"剪开摊平"：圆柱摊成矩形，圆锥摊成扇形。这是记忆公式最直观的方式。',
        sym: '<i>r</i> — 底面半径；<i>r</i>′ — 台体上底半径；<i>l</i> — 母线长（侧面展开后矩形的高或扇形的半径）',
        cond: '只算<b>侧面</b>，不含底面。全面积要再加底面积。'
      },
      {
        t: '斜二测画法的面积关系',
        f: '<i>S</i>′ = <span class="frac"><span class="num">√2</span><span class="den">4</span></span><i>S</i>',
        mean: '斜二测画法画出的直观图会被"压扁"，面积变为原来的 <span class="frac"><span class="num">√2</span><span class="den">4</span></span> 倍。',
        sym: '<i>S</i> — 原平面图形的面积；<i>S</i>′ — 直观图的面积',
        cond: '仅适用于<b>水平放置</b>的平面图形的斜二测直观图。'
      },
      {
        t: '平行与垂直的判定定理',
        f: '线面平行：平面外一条直线与平面内一条直线平行 ⇒ 该直线与此平面平行<br>线面垂直：一条直线垂直于平面内<b>两条相交直线</b> ⇒ 该直线与此平面垂直<br>面面垂直：一个平面经过另一个平面的垂线 ⇒ 这两个平面垂直',
        mean: '立体几何证明题的"三条主干定理"。写证明时必须逐条写清条件，不能只给结论。',
        sym: '判定定理 — 由"线线关系"推出"线面/面面关系"',
        cond: '线面平行必须强调"直线在平面<b>外</b>"；线面垂直必须强调两条直线<b>相交</b>（平行不算）。'
      }
    ]
  },
  {
    id: 'f-stat',
    no: '09',
    name: '统计',
    book: '必修第二册',
    items: [
      {
        t: '平均数与加权平均数',
        f: '<i>x̄</i> = <span class="frac"><span class="num"><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + … + <i>x</i><sub><i>n</i></sub></span><span class="den"><i>n</i></span></span><br>加权：<i>x̄</i> = <span class="frac"><span class="num"><i>w</i><sub>1</sub><i>x</i><sub>1</sub> + … + <i>w</i><sub><i>n</i></sub><i>x</i><sub><i>n</i></sub></span><span class="den"><i>w</i><sub>1</sub> + … + <i>w</i><sub><i>n</i></sub></span></span>',
        mean: '平均数刻画数据的"中心位置"。加权平均是给不同数据不同的"话语权"。',
        sym: '<i>x̄</i> — 样本平均数；<i>x<sub>i</sub></i> — 第 <i>i</i> 个数据；<i>n</i> — 样本容量；<i>w<sub>i</sub></i> — 第 <i>i</i> 个数据的权重',
        cond: '无特殊限制。平均数易受极端值影响，此时用中位数更稳健。'
      },
      {
        t: '方差与标准差',
        f: '<i>s</i><sup>2</sup> = <span class="frac"><span class="num">1</span><span class="den"><i>n</i></span></span> Σ(<i>x<sub>i</sub></i> − <i>x̄</i>)<sup>2</sup>　；　<i>s</i> = √(<i>s</i><sup>2</sup>)<br>简化公式：<i>s</i><sup>2</sup> = <span class="frac"><span class="num">1</span><span class="den"><i>n</i></span></span> Σ<i>x<sub>i</sub></i><sup>2</sup> − <i>x̄</i><sup>2</sup>',
        mean: '方差衡量数据的<b>离散程度</b>：越大越"散"，越小越"齐"。标准差与原始数据同单位，更直观。',
        sym: '<i>s</i><sup>2</sup> — 方差；<i>s</i> — 标准差；<i>x<sub>i</sub></i> — 第 <i>i</i> 个数据；<i>x̄</i> — 平均数',
        cond: '无特殊限制。所有数据同加一个常数，方差不变；同乘常数 <i>k</i>，方差变为 <i>k</i><sup>2</sup> 倍。'
      },
      {
        t: '百分位数',
        f: '把 <i>n</i> 个数据从小到大排列，第 <i>p</i> 百分位数的位置为<br><i>i</i> = <i>n</i> × <i>p</i>%',
        mean: '第 <i>p</i> 百分位数表示"至少有 <i>p</i>% 的数据不超过它"。中位数就是第 50 百分位数。',
        sym: '<i>n</i> — 数据个数；<i>p</i> — 百分位（0 &lt; <i>p</i> &lt; 100）；<i>i</i> — 位置',
        cond: '若 <i>i</i> 不是整数则向上取整；若是整数则取第 <i>i</i> 与第 <i>i</i>+1 个数据的平均数。'
      },
      {
        t: '分层随机抽样的均值',
        f: '<i>x̄</i> = <span class="frac"><span class="num"><i>n</i><sub>1</sub></span><span class="den"><i>n</i></span></span><i>x̄</i><sub>1</sub> + <span class="frac"><span class="num"><i>n</i><sub>2</sub></span><span class="den"><i>n</i></span></span><i>x̄</i><sub>2</sub> + … + <span class="frac"><span class="num"><i>n</i><sub><i>k</i></sub></span><span class="den"><i>n</i></span></span><i>x̄</i><sub><i>k</i></sub>',
        mean: '总样本均值是各层均值的<b>加权平均</b>，权重是各层样本量占比。',
        sym: '<i>n<sub>i</sub></i> — 第 <i>i</i> 层的样本量；<i>n</i> — 总样本量；<i>x̄<sub>i</sub></i> — 第 <i>i</i> 层的样本均值',
        cond: '各层样本量之和等于总样本量，即 Σ<i>n<sub>i</sub></i> = <i>n</i>。'
      }
    ]
  },
  {
    id: 'f-prob',
    no: '10',
    name: '概率',
    book: '必修第二册',
    items: [
      {
        t: '古典概型概率公式',
        f: '<i>P</i>(<i>A</i>) = <span class="frac"><span class="num"><i>m</i></span><span class="den"><i>n</i></span></span>',
        mean: '在"每个结果等可能"的前提下，概率就是"有利结果数 ÷ 全部结果数"。',
        sym: '<i>n</i> — 样本空间包含的样本点总数；<i>m</i> — 事件 <i>A</i> 包含的样本点数',
        cond: '两个前提缺一不可：① 样本点<b>只有有限个</b>；② 每个样本点发生的<b>可能性相等</b>。不等可能时不能直接用。'
      },
      {
        t: '互斥事件与对立事件',
        f: '互斥：<i>P</i>(<i>A</i> ∪ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>)<br>对立：<i>P</i>(<i>A</i>) + <i>P</i>(<span style="text-decoration:overline"><i>A</i></span>) = 1',
        mean: '互斥是"不能同时发生"；对立是"必有一个发生"。对立一定是互斥，互斥不一定是对立。',
        sym: '<i>A</i>, <i>B</i> — 两个事件；<span style="text-decoration:overline"><i>A</i></span> — <i>A</i> 的对立事件',
        cond: '加法公式只对<b>互斥</b>事件成立。不互斥时要用 <i>P</i>(<i>A</i>∪<i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>) − <i>P</i>(<i>AB</i>)。'
      },
      {
        t: '相互独立事件',
        f: '<i>P</i>(<i>AB</i>) = <i>P</i>(<i>A</i>) <i>P</i>(<i>B</i>)',
        mean: '一个事件发生与否<b>不影响</b>另一个事件的概率。独立与互斥是两回事，别混。',
        sym: '<i>AB</i> — <i>A</i> 与 <i>B</i> 同时发生；<i>P</i>(<i>A</i>) — 事件 <i>A</i> 发生的概率',
        cond: '要求 <i>A</i>, <i>B</i> <b>相互独立</b>。判断独立靠实际意义（如"两次射击"）而非公式本身。'
      },
      {
        t: '概率的基本性质',
        f: '0 ≤ <i>P</i>(<i>A</i>) ≤ 1<br><i>P</i>(Ω) = 1　；　<i>P</i>(∅) = 0<br>若 <i>A</i> ⊆ <i>B</i>，则 <i>P</i>(<i>A</i>) ≤ <i>P</i>(<i>B</i>)',
        mean: '概率是 [0,1] 之间的数。必然事件概率为 1，不可能事件概率为 0（反之不成立）。',
        sym: 'Ω — 样本空间（必然事件）；∅ — 不可能事件',
        cond: '对任何事件都成立。注意 <i>P</i>(<i>A</i>) = 0 <b>不能</b>推出 <i>A</i> 是不可能事件。'
      }
    ]
  },

  /* ==================== 选择性必修第一册 ==================== */
  {
    id: 'f-spacevec',
    no: '11',
    name: '空间向量与立体几何',
    book: '选择性必修第一册',
    items: [
      {
        t: '空间向量的坐标运算',
        f: '<b>a</b> · <b>b</b> = <i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub> + <i>z</i><sub>1</sub><i>z</i><sub>2</sub><br>|<b>a</b>| = √(<i>x</i><sub>1</sub><sup>2</sup> + <i>y</i><sub>1</sub><sup>2</sup> + <i>z</i><sub>1</sub><sup>2</sup>)<br>cos⟨<b>a</b>, <b>b</b>⟩ = <span class="frac"><span class="num"><b>a</b> · <b>b</b></span><span class="den">|<b>a</b>| |<b>b</b>|</span></span>',
        mean: '平面向量公式在三维中的直接推广，多了一项 <i>z</i>。建立空间直角坐标系后，所有几何量都变成代数计算。',
        sym: '<b>a</b> = (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>)，<b>b</b> = (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>) — 两个空间向量',
        cond: '求夹角要求两向量均非零向量。'
      },
      {
        t: '两点间距离公式（空间）',
        f: '|<i>AB</i>| = √((<i>x</i><sub>1</sub>−<i>x</i><sub>2</sub>)<sup>2</sup> + (<i>y</i><sub>1</sub>−<i>y</i><sub>2</sub>)<sup>2</sup> + (<i>z</i><sub>1</sub>−<i>z</i><sub>2</sub>)<sup>2</sup>)',
        mean: '空间两点间距离，本质是三维勾股定理。',
        sym: '<i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>)，<i>B</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>)',
        cond: '无特殊限制。'
      },
      {
        t: '直线与平面所成的角',
        f: 'sinθ = |cos⟨<b>a</b>, <b>n</b>⟩| = <span class="frac"><span class="num">|<b>a</b> · <b>n</b>|</span><span class="den">|<b>a</b>| |<b>n</b>|</span></span>',
        mean: '线面角是直线与它在平面内<b>射影</b>的夹角。用方向向量与法向量算，得到的是 cos，取绝对值后正好是 sinθ。',
        sym: '<b>a</b> — 直线的方向向量；<b>n</b> — 平面的法向量；θ — 直线与平面所成的角',
        cond: 'θ ∈ [0°, 90°]，所以结果必为<b>非负</b>，要取绝对值。写成 cosθ = … 是最常见的错误。'
      },
      {
        t: '二面角',
        f: 'cos⟨<b>n</b><sub>1</sub>, <b>n</b><sub>2</sub>⟩ = <span class="frac"><span class="num"><b>n</b><sub>1</sub> · <b>n</b><sub>2</sub></span><span class="den">|<b>n</b><sub>1</sub>| |<b>n</b><sub>2</sub>|</span></span>',
        mean: '用两个半平面的法向量夹角来表示二面角。但法向量夹角与二面角<b>可能相等也可能互补</b>。',
        sym: '<b>n</b><sub>1</sub>, <b>n</b><sub>2</sub> — 两个半平面（或两个平面）的法向量',
        cond: '算出余弦值后，<b>必须结合图形判断二面角是锐角还是钝角</b>，再决定取该值还是它的相反数。直接取绝对值可能丢分。'
      },
      {
        t: '点到平面的距离',
        f: '<i>d</i> = <span class="frac"><span class="num">|<b>AP</b> · <b>n</b>|</span><span class="den">|<b>n</b>|</span></span>',
        mean: '把"点到平面的垂线段长度"转化为向量在法向量上的<b>投影</b>，避开找垂足。',
        sym: '<i>A</i> — 平面内任意一点；<i>P</i> — 平面外的点；<b>n</b> — 平面的法向量；<i>d</i> — 点到平面的距离',
        cond: '<b>n</b> 必须是该平面的法向量（非零）。<i>A</i> 可取平面内任何一点，结果相同。'
      }
    ]
  },
  {
    id: 'f-line',
    no: '12',
    name: '直线和圆的方程',
    book: '选择性必修第一册',
    items: [
      {
        t: '直线的斜率',
        f: '<i>k</i> = <span class="frac"><span class="num"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span class="den"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span> = tanα',
        mean: '斜率刻画直线的"倾斜程度"。倾斜角 α 是直线与 <i>x</i> 轴正方向的夹角。',
        sym: '<i>k</i> — 斜率；α — 倾斜角，α ∈ [0, π)；(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>), (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) — 直线上两点',
        cond: '要求 <b><i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub></b>。当 α = 90° 时斜率<b>不存在</b>（垂直于 <i>x</i> 轴），这类情况必须单独讨论。'
      },
      {
        t: '直线方程的五种形式',
        f: '点斜式　<i>y</i> − <i>y</i><sub>0</sub> = <i>k</i>(<i>x</i> − <i>x</i><sub>0</sub>)<br>斜截式　<i>y</i> = <i>kx</i> + <i>b</i><br>两点式　<span class="frac"><span class="num"><i>y</i>−<i>y</i><sub>1</sub></span><span class="den"><i>y</i><sub>2</sub>−<i>y</i><sub>1</sub></span></span> = <span class="frac"><span class="num"><i>x</i>−<i>x</i><sub>1</sub></span><span class="den"><i>x</i><sub>2</sub>−<i>x</i><sub>1</sub></span></span><br>截距式　<span class="frac"><span class="num"><i>x</i></span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num"><i>y</i></span><span class="den"><i>b</i></span></span> = 1<br>一般式　<i>Ax</i> + <i>By</i> + <i>C</i> = 0',
        mean: '五种写法各有适用场合。<b>一般式</b>能表示所有直线，其他四种都有"死角"。',
        sym: '(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) — 已知点；<i>k</i> — 斜率；<i>b</i> — 纵截距；<i>a</i>, <i>b</i> — 横、纵截距；<i>A</i>, <i>B</i> 不同时为 0',
        cond: '点斜式、斜截式要求斜率存在；两点式要求 <i>x</i><sub>1</sub>≠<i>x</i><sub>2</sub> 且 <i>y</i><sub>1</sub>≠<i>y</i><sub>2</sub>；截距式要求截距存在且不为 0。'
      },
      {
        t: '两直线的平行与垂直',
        f: '一般式：<i>A</i><sub>1</sub><i>B</i><sub>2</sub> − <i>A</i><sub>2</sub><i>B</i><sub>1</sub> = 0　⇔　平行（或重合）<br><i>A</i><sub>1</sub><i>A</i><sub>2</sub> + <i>B</i><sub>1</sub><i>B</i><sub>2</sub> = 0　⇔　垂直<br>斜截式：<i>k</i><sub>1</sub> = <i>k</i><sub>2</sub> 且 <i>b</i><sub>1</sub> ≠ <i>b</i><sub>2</sub> ⇔ 平行；<i>k</i><sub>1</sub><i>k</i><sub>2</sub> = −1 ⇔ 垂直',
        mean: '平行看系数"交叉相乘相减"，垂直看"对应相乘相加"。用一般式可以避开斜率不存在的讨论。',
        sym: '<i>A</i><sub>1</sub>, <i>B</i><sub>1</sub>, <i>C</i><sub>1</sub> 与 <i>A</i><sub>2</sub>, <i>B</i><sub>2</sub>, <i>C</i><sub>2</sub> — 两条直线一般式的系数',
        cond: '斜截式判断<b>必须保证斜率存在</b>。用一般式判断平行时还要排除"重合"（需再比较 <i>C</i>）。'
      },
      {
        t: '三种距离公式',
        f: '两点间　|<i>AB</i>| = √((<i>x</i><sub>2</sub>−<i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub>−<i>y</i><sub>1</sub>)<sup>2</sup>)<br>点到直线　<i>d</i> = <span class="frac"><span class="num">|<i>Ax</i><sub>0</sub> + <i>By</i><sub>0</sub> + <i>C</i>|</span><span class="den">√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)</span></span><br>两平行线　<i>d</i> = <span class="frac"><span class="num">|<i>C</i><sub>1</sub> − <i>C</i><sub>2</sub>|</span><span class="den">√(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)</span></span>',
        mean: '点到直线距离是"垂线段长度"。求弦长时，先算圆心到直线的距离 <i>d</i>，再用勾股定理。',
        sym: '<i>P</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) — 点；<i>Ax</i>+<i>By</i>+<i>C</i>=0 — 直线；<i>C</i><sub>1</sub>, <i>C</i><sub>2</sub> — 两平行线的常数项',
        cond: '两平行线距离公式要求两条直线的 <b><i>A</i>、<i>B</i> 已化成相同</b>（否则先同乘系数）。'
      },
      {
        t: '圆的方程',
        f: '标准式　(<i>x</i> − <i>a</i>)<sup>2</sup> + (<i>y</i> − <i>b</i>)<sup>2</sup> = <i>r</i><sup>2</sup><br>一般式　<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>Dx</i> + <i>Ey</i> + <i>F</i> = 0<br>　圆心 (−<span class="frac"><span class="num"><i>D</i></span><span class="den">2</span></span>, −<span class="frac"><span class="num"><i>E</i></span><span class="den">2</span></span>)，半径 <i>r</i> = <span class="frac"><span class="num">√(<i>D</i><sup>2</sup> + <i>E</i><sup>2</sup> − 4<i>F</i>)</span><span class="den">2</span></span>',
        mean: '标准式直接读出圆心和半径，一般式需要配方还原。求圆的方程常用"待定系数法"。',
        sym: '(<i>a</i>, <i>b</i>) — 圆心坐标；<i>r</i> — 半径；<i>D</i>, <i>E</i>, <i>F</i> — 一般式系数',
        cond: '一般式表示圆的条件是 <b><i>D</i><sup>2</sup> + <i>E</i><sup>2</sup> − 4<i>F</i> &gt; 0</b>；等于 0 时是一个点，小于 0 时不表示任何图形。'
      },
      {
        t: '直线与圆的位置关系与弦长',
        f: '设圆心到直线的距离为 <i>d</i>：<br><i>d</i> &lt; <i>r</i> ⇒ 相交　；　<i>d</i> = <i>r</i> ⇒ 相切　；　<i>d</i> &gt; <i>r</i> ⇒ 相离<br>弦长　|<i>AB</i>| = 2√(<i>r</i><sup>2</sup> − <i>d</i><sup>2</sup>)',
        mean: '判断位置关系用"圆心到直线的距离"与半径比大小，比联立求判别式快得多。弦长公式来自"半弦、半径、弦心距"构成的直角三角形。',
        sym: '<i>d</i> — 圆心到直线的距离；<i>r</i> — 半径；|<i>AB</i>| — 弦长',
        cond: '弦长公式仅当直线与圆<b>相交</b>（<i>d</i> &lt; <i>r</i>）时才有意义。'
      },
      {
        t: '圆的切线方程',
        f: '过圆上一点 <i>P</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) 的切线：<br>(<i>x</i><sub>0</sub>−<i>a</i>)(<i>x</i>−<i>a</i>) + (<i>y</i><sub>0</sub>−<i>b</i>)(<i>y</i>−<i>b</i>) = <i>r</i><sup>2</sup>',
        mean: '"把平方拆成两半"的记忆法：<i>x</i><sup>2</sup> → <i>x</i><sub>0</sub><i>x</i>，<i>y</i><sup>2</sup> → <i>y</i><sub>0</sub><i>y</i>。',
        sym: '(<i>a</i>, <i>b</i>) — 圆心；<i>r</i> — 半径；<i>P</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) — 圆上的切点',
        cond: '该公式要求点 <i>P</i> <b>在圆上</b>。若点在圆外，切线有<b>两条</b>，要设斜率为 <i>k</i> 用点到直线距离等于 <i>r</i> 求解，并单独检查斜率不存在的情况。'
      }
    ]
  },
  {
    id: 'f-conic',
    no: '13',
    name: '圆锥曲线的方程',
    book: '选择性必修第一册',
    items: [
      {
        t: '椭圆的定义与标准方程',
        f: '定义：||<i>PF</i><sub>1</sub>| + |<i>PF</i><sub>2</sub>|| = 2<i>a</i>　(2<i>a</i> &gt; |<i>F</i><sub>1</sub><i>F</i><sub>2</sub>|)<br>标准方程：<span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den"><i>a</i><sup>2</sup></span></span> + <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den"><i>b</i><sup>2</sup></span></span> = 1　(<i>a</i> &gt; <i>b</i> &gt; 0)<br>关系：<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>',
        mean: '椭圆是"到两个定点距离之和为定值"的点的轨迹。焦点在长轴所在的坐标轴上。',
        sym: '<i>a</i> — 长半轴长；<i>b</i> — 短半轴长；<i>c</i> — 半焦距；<i>F</i><sub>1</sub>, <i>F</i><sub>2</sub> — 两个焦点；<i>P</i> — 椭圆上任意一点',
        cond: '必须满足 <b><i>a</i> &gt; <i>b</i> &gt; 0</b> 且 <b>2<i>a</i> &gt; |<i>F</i><sub>1</sub><i>F</i><sub>2</sub>|</b>（否则轨迹不是椭圆）。焦点在 <i>x</i> 轴时用上式；焦点在 <i>y</i> 轴时 <i>x</i>、<i>y</i> 的分母互换。'
      },
      {
        t: '椭圆的离心率',
        f: '<i>e</i> = <span class="frac"><span class="num"><i>c</i></span><span class="den"><i>a</i></span></span> ∈ (0, 1)',
        mean: '离心率刻画椭圆的"扁平程度"：<i>e</i> 越接近 0 越接近圆，越接近 1 越扁。',
        sym: '<i>c</i> — 半焦距；<i>a</i> — 长半轴长',
        cond: '椭圆中恒有 0 &lt; <i>e</i> &lt; 1。<b>注意椭圆是 <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>，双曲线是 <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></b>，两者别记混。'
      },
      {
        t: '椭圆的焦点三角形面积',
        f: '<i>S</i> = <i>b</i><sup>2</sup> tan<span class="frac"><span class="num">θ</span><span class="den">2</span></span>　，θ = ∠<i>F</i><sub>1</sub><i>PF</i><sub>2</sub>',
        mean: '已知顶角求焦点三角形面积，可以跳过求两腰长的过程，一步出结果。',
        sym: '<i>b</i> — 短半轴长；θ — 点 <i>P</i> 处两焦点连线的夹角；<i>S</i> — △<i>F</i><sub>1</sub><i>PF</i><sub>2</sub> 的面积',
        cond: '点 <i>P</i> 在椭圆上，θ 是 ∠<i>F</i><sub>1</sub><i>PF</i><sub>2</sub>。这是二级结论，解答题中建议用余弦定理推导一遍再写结论。'
      },
      {
        t: '双曲线的定义与标准方程',
        f: '定义：||<i>PF</i><sub>1</sub>| − |<i>PF</i><sub>2</sub>|| = 2<i>a</i>　(0 &lt; 2<i>a</i> &lt; |<i>F</i><sub>1</sub><i>F</i><sub>2</sub>|)<br>标准方程：<span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den"><i>a</i><sup>2</sup></span></span> − <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den"><i>b</i><sup>2</sup></span></span> = 1<br>关系：<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>　；　渐近线 <i>y</i> = ±<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span><i>x</i><br>离心率 <i>e</i> = <span class="frac"><span class="num"><i>c</i></span><span class="den"><i>a</i></span></span> &gt; 1',
        mean: '双曲线是"到两定点距离之差的绝对值为定值"的轨迹。渐近线是它独有的特征——曲线无限接近但永不相交。',
        sym: '<i>a</i> — 实半轴长；<i>b</i> — 虚半轴长；<i>c</i> — 半焦距',
        cond: '必须满足 <b>0 &lt; 2<i>a</i> &lt; |<i>F</i><sub>1</sub><i>F</i><sub>2</sub>|</b>。当 <i>a</i> = <i>b</i> 时叫等轴双曲线，渐近线互相垂直。'
      },
      {
        t: '抛物线的定义与标准方程',
        f: '定义：|<i>PF</i>| = <i>d</i>（<i>d</i> 为 <i>P</i> 到准线的距离）<br><i>y</i><sup>2</sup> = 2<i>px</i>　(p &gt; 0)：焦点 (<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>, 0)，准线 <i>x</i> = −<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span><br><i>y</i><sup>2</sup> = −2<i>px</i>：焦点 (−<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>, 0)，准线 <i>x</i> = <span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span><br><i>x</i><sup>2</sup> = 2<i>py</i>：焦点 (0, <span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>)，准线 <i>y</i> = −<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span><br><i>x</i><sup>2</sup> = −2<i>py</i>：焦点 (0, −<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>)，准线 <i>y</i> = <span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>',
        mean: '抛物线是"到定点和定直线距离相等"的轨迹。四种形式由开口方向决定，一次项是哪个字母就沿哪个轴对称。',
        sym: '<i>p</i> — 焦点到准线的距离（<i>p</i> &gt; 0）；<i>F</i> — 焦点；通径长 = 2<i>p</i>',
        cond: '<i>p</i> &gt; 0。<b>一次项决定对称轴</b>：含 <i>x</i> 则对称轴为 <i>x</i> 轴，含 <i>y</i> 则对称轴为 <i>y</i> 轴；系数正负决定开口方向。'
      },
      {
        t: '抛物线的焦半径',
        f: '对 <i>y</i><sup>2</sup> = 2<i>px</i> 上一点 <i>P</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>)：<br>|<i>PF</i>| = <i>x</i><sub>0</sub> + <span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>',
        mean: '由抛物线定义（到焦点距离 = 到准线距离）直接得到，是解决焦半径问题最快的方法。',
        sym: '<i>P</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) — 抛物线上一点；|<i>PF</i>| — 焦半径长',
        cond: '仅对 <i>y</i><sup>2</sup> = 2<i>px</i> 这一形式。其他三种形式需按"到准线的距离"重新写。'
      },
      {
        t: '弦长公式',
        f: '|<i>AB</i>| = √(1 + <i>k</i><sup>2</sup>) · |<i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>|<br>　　= √(1 + <i>k</i><sup>2</sup>) · √((<i>x</i><sub>1</sub>+<i>x</i><sub>2</sub>)<sup>2</sup> − 4<i>x</i><sub>1</sub><i>x</i><sub>2</sub>)<br>　　= √(1 + <span class="frac"><span class="num">1</span><span class="den"><i>k</i><sup>2</sup></span></span>) · |<i>y</i><sub>1</sub> − <i>y</i><sub>2</sub>|',
        mean: '直线与圆锥曲线相交时，用韦达定理算出两根和与积，再套弦长公式，不必真的求出交点坐标。',
        sym: '<i>k</i> — 直线斜率；<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub> — 两交点的横坐标；<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub> — 两交点的纵坐标',
        cond: '斜率存在时用前两式，斜率不存在时直接算纵坐标之差。联立后<b>必须先验证判别式 Δ &gt; 0</b>，否则"交点"不存在。'
      },
      {
        t: '点差法（弦的中点问题）',
        f: '对椭圆 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den"><i>a</i><sup>2</sup></span></span> + <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den"><i>b</i><sup>2</sup></span></span> = 1，若弦 <i>AB</i> 的中点为 (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>)，则<br><i>k<sub>AB</sub></i> = −<span class="frac"><span class="num"><i>b</i><sup>2</sup><i>x</i><sub>0</sub></span><span class="den"><i>a</i><sup>2</sup><i>y</i><sub>0</sub></span></span>',
        mean: '把两个交点分别代入曲线方程后相减，直接得到"中点坐标与弦斜率"的关系，省去一半计算量。',
        sym: '(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) — 弦 <i>AB</i> 的中点；<i>k<sub>AB</sub></i> — 弦所在直线的斜率',
        cond: '要求 <b><i>y</i><sub>0</sub> ≠ 0</b> 且弦所在直线斜率存在。使用时别忘了检验直线与曲线确实有两个交点。'
      }
    ]
  },

  /* ==================== 选择性必修第二册 ==================== */
  {
    id: 'f-seq',
    no: '14',
    name: '数列',
    book: '选择性必修第二册',
    items: [
      {
        t: '等差数列的通项公式',
        f: '<i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i>　；　<i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>m</i></sub> + (<i>n</i> − <i>m</i>)<i>d</i>',
        mean: '从首项出发，每往后一项加一个公差。第二个形式（通项推广式）在已知某两项时更好用。',
        sym: '<i>a</i><sub>1</sub> — 首项；<i>d</i> — 公差（相邻两项的差）；<i>n</i> — 项数；<i>a</i><sub><i>n</i></sub> — 第 <i>n</i> 项',
        cond: '<i>n</i> ∈ <b>N</b>*。<i>d</i> &gt; 0 时数列递增，<i>d</i> &lt; 0 时递减，<i>d</i> = 0 时为常数列。'
      },
      {
        t: '等差数列的前 n 项和',
        f: '<i>S</i><sub><i>n</i></sub> = <span class="frac"><span class="num"><i>n</i>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)</span><span class="den">2</span></span> = <i>na</i><sub>1</sub> + <span class="frac"><span class="num"><i>n</i>(<i>n</i> − 1)</span><span class="den">2</span></span><i>d</i>',
        mean: '首尾配对相加（高斯求和法）。第二个形式说明 <i>S</i><sub><i>n</i></sub> 是关于 <i>n</i> 的<b>没有常数项的二次函数</b>。',
        sym: '<i>S</i><sub><i>n</i></sub> — 前 <i>n</i> 项的和；其余同上',
        cond: '<i>n</i> ∈ <b>N</b>*。已知 <i>a</i><sub>1</sub> 和 <i>d</i> 用第二个式子，已知首末两项用第一个。'
      },
      {
        t: '等差中项',
        f: '2<i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>n</i>−1</sub> + <i>a</i><sub><i>n</i>+1</sub>　(<i>n</i> ≥ 2)',
        mean: '中间项是前后两项的算术平均。反过来，若一个数列满足此式，它就是等差数列。',
        sym: '<i>a</i><sub><i>n</i>−1</sub>, <i>a</i><sub><i>n</i></sub>, <i>a</i><sub><i>n</i>+1</sub> — 连续三项',
        cond: '要求 <i>n</i> ≥ 2。推广：若 <i>m</i> + <i>n</i> = <i>p</i> + <i>q</i>，则 <i>a</i><sub><i>m</i></sub> + <i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>p</i></sub> + <i>a</i><sub><i>q</i></sub>。'
      },
      {
        t: '等比数列的通项公式',
        f: '<i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> <i>q</i><sup><i>n</i>−1</sup>　；　<i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>m</i></sub> <i>q</i><sup><i>n</i>−<i>m</i></sup>',
        mean: '从首项出发，每往后一项乘一个公比。',
        sym: '<i>a</i><sub>1</sub> — 首项；<i>q</i> — 公比；<i>a</i><sub><i>n</i></sub> — 第 <i>n</i> 项',
        cond: '<b><i>q</i> ≠ 0</b>（公比为零则后面的项全为 0，不成等比）。各项均不为 0。'
      },
      {
        t: '等比数列的前 n 项和',
        f: '<i>q</i> ≠ 1 时：<i>S</i><sub><i>n</i></sub> = <span class="frac"><span class="num"><i>a</i><sub>1</sub>(1 − <i>q</i><sup><i>n</i></sup>)</span><span class="den">1 − <i>q</i></span></span> = <span class="frac"><span class="num"><i>a</i><sub>1</sub>(<i>q</i><sup><i>n</i></sup> − 1)</span><span class="den"><i>q</i> − 1</span></span><br><i>q</i> = 1 时：<i>S</i><sub><i>n</i></sub> = <i>na</i><sub>1</sub>',
        mean: '错位相减的结论。分母写成 <i>q</i> − 1 时分子也跟着变号，两种写法等价。',
        sym: '<i>S</i><sub><i>n</i></sub> — 前 <i>n</i> 项和；<i>a</i><sub>1</sub> — 首项；<i>q</i> — 公比',
        cond: '<b>必须先讨论 <i>q</i> = 1</b> 的情形！直接套公式而漏掉 <i>q</i> = 1 是等比数列最常见的失分点。'
      },
      {
        t: '等比中项',
        f: '<i>b</i><sub><i>n</i></sub><sup>2</sup> = <i>b</i><sub><i>n</i>−1</sub> <i>b</i><sub><i>n</i>+1</sub>　(<i>n</i> ≥ 2)',
        mean: '中间项的平方等于前后两项之积。注意与等差中项区分：一个是"2 倍"，一个是"平方"。',
        sym: '<i>b</i><sub><i>n</i>−1</sub>, <i>b</i><sub><i>n</i></sub>, <i>b</i><sub><i>n</i>+1</sub> — 连续三项',
        cond: '要求 <i>n</i> ≥ 2 且各项均不为 0。<b>注意</b>：由 <i>b</i><sup>2</sup> = <i>ac</i> 不能推出 <i>a</i>, <i>b</i>, <i>c</i> 成等比（<i>b</i> 可能取负号）。'
      },
      {
        t: '由前 n 项和求通项',
        f: '<i>a</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub>　(<i>n</i> ≥ 2)<br><i>a</i><sub>1</sub> = <i>S</i><sub>1</sub>　(<i>n</i> = 1)',
        mean: '相邻两个前 <i>n</i> 项和相减，剩下的就是第 <i>n</i> 项。这是已知 <i>S</i><sub><i>n</i></sub> 求 <i>a</i><sub><i>n</i></sub> 的<b>唯一</b>方法。',
        sym: '<i>S</i><sub><i>n</i></sub> — 前 <i>n</i> 项和；<i>a</i><sub><i>n</i></sub> — 第 <i>n</i> 项',
        cond: '<b><i>n</i> = 1 必须单独验证</b>！公式只对 <i>n</i> ≥ 2 成立。若 <i>a</i><sub>1</sub> 也满足算出的式子，才能合并写成一个通项；否则要写成分段形式。'
      },
      {
        t: '构造法求通项',
        f: '<i>a</i><sub><i>n</i>+1</sub> = <i>p</i> <i>a</i><sub><i>n</i></sub> + <i>q</i> 型：<br>设 <i>a</i><sub><i>n</i>+1</sub> + λ = <i>p</i>(<i>a</i><sub><i>n</i></sub> + λ)，其中 λ = <span class="frac"><span class="num"><i>q</i></span><span class="den"><i>p</i> − 1</span></span><br>则 {<i>a</i><sub><i>n</i></sub> + λ} 是公比为 <i>p</i> 的等比数列',
        mean: '把"线性递推"平移一下，凑成一个等比数列，从而求出通项。',
        sym: '<i>p</i>, <i>q</i> — 常数（<i>p</i> ≠ 0, <i>p</i> ≠ 1）；λ — 待定常数',
        cond: '要求 <b><i>p</i> ≠ 1</b>。若 <i>p</i> = 1，则 <i>a</i><sub><i>n</i></sub> 本身是等差数列，直接套等差公式。'
      },
      {
        t: '裂项相消的常见形式',
        f: '<span class="frac"><span class="num">1</span><span class="den"><i>n</i>(<i>n</i>+1)</span></span> = <span class="frac"><span class="num">1</span><span class="den"><i>n</i></span></span> − <span class="frac"><span class="num">1</span><span class="den"><i>n</i>+1</span></span><br><span class="frac"><span class="num">1</span><span class="den"><i>n</i>(<i>n</i>+2)</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>(<span class="frac"><span class="num">1</span><span class="den"><i>n</i></span></span> − <span class="frac"><span class="num">1</span><span class="den"><i>n</i>+2</span></span>)<br><span class="frac"><span class="num">1</span><span class="den">√<i>n</i> + √(<i>n</i>+1)</span></span> = √(<i>n</i>+1) − √<i>n</i><br><span class="frac"><span class="num">2<sup><i>n</i></sup></span><span class="den">(2<sup><i>n</i></sup>−1)(2<sup><i>n</i>+1</sup>−1)</span></span> = <span class="frac"><span class="num">1</span><span class="den">2<sup><i>n</i></sup>−1</span></span> − <span class="frac"><span class="num">1</span><span class="den">2<sup><i>n</i>+1</sup>−1</span></span>',
        mean: '把一项拆成两项之差，求和时中间项两两抵消，只剩首尾。',
        sym: '<i>n</i> ∈ <b>N</b>*',
        cond: '分母的<b>差为定值</b>时才能拆。拆完后一定要动笔写出前几项和后几项，数清楚剩下哪些没抵消。'
      },
      {
        t: '错位相减法',
        f: '对 <i>a</i><sub><i>n</i></sub> = <i>b</i><sub><i>n</i></sub> <i>c</i><sub><i>n</i></sub>（{<i>b</i><sub><i>n</i></sub>} 等差、{<i>c</i><sub><i>n</i></sub>} 等比）：<br>写出 <i>S</i><sub><i>n</i></sub> 后两边同乘公比 <i>q</i>，再作差 <i>S</i><sub><i>n</i></sub> − <i>qS</i><sub><i>n</i></sub>',
        mean: '"等差 × 等比"型求和的固定套路。作差后中间部分变成等比数列，可以套公式。',
        sym: '{<i>b</i><sub><i>n</i></sub>} — 等差数列；{<i>c</i><sub><i>n</i></sub>} — 等比数列，公比为 <i>q</i>',
        cond: '<i>q</i> ≠ 1。作差时<b>末项别漏写</b>，最后用 <i>n</i> = 1 代入检验（<i>S</i><sub>1</sub> 应等于 <i>a</i><sub>1</sub>）。'
      }
    ]
  },
  {
    id: 'f-deriv',
    no: '15',
    name: '一元函数的导数及其应用',
    book: '选择性必修第二册',
    items: [
      {
        t: '导数的定义',
        f: "<i>f</i>&#8242;(<i>x</i><sub>0</sub>) = lim<sub>Δ<i>x</i>→0</sub> <span class=\"frac\"><span class=\"num\"><i>f</i>(<i>x</i><sub>0</sub> + Δ<i>x</i>) − <i>f</i>(<i>x</i><sub>0</sub>)</span><span class=\"den\">Δ<i>x</i></span></span>",
        mean: '函数在 <i>x</i><sub>0</sub> 处的<b>瞬时变化率</b>，即函数值随自变量变化的快慢。',
        sym: '<i>f</i>&#8242;(<i>x</i><sub>0</sub>) — 函数在 <i>x</i><sub>0</sub> 处的导数；Δ<i>x</i> — 自变量的增量（趋近于 0）',
        cond: '该极限必须存在，此时称函数在 <i>x</i><sub>0</sub> 处可导。可导必连续，连续不一定可导。'
      },
      {
        t: '导数的几何意义与切线方程',
        f: '<i>f</i>&#8242;(<i>x</i><sub>0</sub>) 是曲线 <i>y</i> = <i>f</i>(<i>x</i>) 在点 (<i>x</i><sub>0</sub>, <i>f</i>(<i>x</i><sub>0</sub>)) 处<b>切线的斜率</b><br>切线方程：<i>y</i> − <i>f</i>(<i>x</i><sub>0</sub>) = <i>f</i>&#8242;(<i>x</i><sub>0</sub>)(<i>x</i> − <i>x</i><sub>0</sub>)',
        mean: '导数值 = 切线斜率。这是导数最直观的用途，也是导数题第一问的标准考法。',
        sym: '<i>x</i><sub>0</sub> — 切点的横坐标；<i>f</i>(<i>x</i><sub>0</sub>) — 切点的纵坐标；<i>f</i>&#8242;(<i>x</i><sub>0</sub>) — 切线斜率',
        cond: '<b>"在点 <i>P</i> 处的切线"与"过点 <i>P</i> 的切线"完全不同</b>：前者 <i>P</i> 就是切点，后者要设切点 (<i>t</i>, <i>f</i>(<i>t</i>)) 再解方程，且可能有<b>多条</b>。'
      },
      {
        t: '基本初等函数的导数公式',
        f: '(<i>C</i>)&#8242; = 0　；　(<i>x</i><sup>α</sup>)&#8242; = α<i>x</i><sup>α−1</sup><br>(<i>a</i><sup><i>x</i></sup>)&#8242; = <i>a</i><sup><i>x</i></sup> ln <i>a</i>　；　(<i>e</i><sup><i>x</i></sup>)&#8242; = <i>e</i><sup><i>x</i></sup><br>(log<sub><i>a</i></sub><i>x</i>)&#8242; = <span class="frac"><span class="num">1</span><span class="den"><i>x</i> ln <i>a</i></span></span>　；　(ln <i>x</i>)&#8242; = <span class="frac"><span class="num">1</span><span class="den"><i>x</i></span></span><br>(sin <i>x</i>)&#8242; = cos <i>x</i>　；　(cos <i>x</i>)&#8242; = −sin <i>x</i>',
        mean: '八条必背公式。<i>e</i><sup><i>x</i></sup> 的导数还是它自己，这是自然常数 <i>e</i> 最特别的性质。',
        sym: '<i>C</i> — 常数；α — 实数指数；<i>a</i> — 底数；ln — 自然对数（以 <i>e</i> 为底）',
        cond: '对数函数的导数要求 <b><i>x</i> &gt; 0</b>；<i>a</i><sup><i>x</i></sup> 要求 <i>a</i> &gt; 0 且 <i>a</i> ≠ 1。幂函数 (x<sup>α</sup>)′ 对 α ∈ <b>R</b> 成立（定义域内）。'
      },
      {
        t: '导数的四则运算法则',
        f: '【<i>f</i>(<i>x</i>) ± <i>g</i>(<i>x</i>)】&#8242; = <i>f</i>&#8242;(<i>x</i>) ± <i>g</i>&#8242;(<i>x</i>)<br>【<i>f</i>(<i>x</i>)<i>g</i>(<i>x</i>)】&#8242; = <i>f</i>&#8242;<i>g</i> + <i>fg</i>&#8242;<br>【<span class="frac"><span class="num"><i>f</i>(<i>x</i>)</span><span class="den"><i>g</i>(<i>x</i>)</span></span>】&#8242; = <span class="frac"><span class="num"><i>f</i>&#8242;<i>g</i> − <i>fg</i>&#8242;</span><span class="den"><i>g</i><sup>2</sup></span></span>',
        mean: '乘法法则记作"前导后不导，加上前不导后导"；除法法则分子是"上导下不导，减去上不导下导"，<b>顺序不能反</b>。',
        sym: '<i>f</i>, <i>g</i> — 可导函数；<i>f</i>&#8242;, <i>g</i>&#8242; — 各自的导数',
        cond: '商法则要求 <b><i>g</i>(<i>x</i>) ≠ 0</b>。注意<b>没有</b>【<i>fg</i>】&#8242; = <i>f</i>&#8242;<i>g</i>&#8242; 这种"法则"。'
      },
      {
        t: '复合函数的求导法则（链式法则）',
        f: '若 <i>y</i> = <i>f</i>(<i>u</i>)，<i>u</i> = <i>g</i>(<i>x</i>)，则<br><i>y</i>&#8242; = <i>f</i>&#8242;(<i>u</i>) · <i>g</i>&#8242;(<i>x</i>)　，即"外层导数 × 内层导数"',
        mean: '由外向内逐层求导，每层都要乘上内层的导数，像剥洋葱一样。',
        sym: '<i>u</i> — 中间变量；<i>f</i> — 外层函数；<i>g</i> — 内层函数',
        cond: '内外层导数都要存在。<b>常见错误是漏乘内层导数</b>，例如 【<i>f</i>(2<i>x</i>)】&#8242; = 2<i>f</i>&#8242;(2<i>x</i>)，那个 2 不能丢。'
      },
      {
        t: '导数与单调性',
        f: '在区间 (<i>a</i>, <i>b</i>) 内：<br><i>f</i>&#8242;(<i>x</i>) &gt; 0　⇒　<i>f</i>(<i>x</i>) 单调递增<br><i>f</i>&#8242;(<i>x</i>) &lt; 0　⇒　<i>f</i>(<i>x</i>) 单调递减',
        mean: '导数的正负决定函数的增减。求单调区间的标准流程：定义域 → 求导 → 解不等式 → 写区间。',
        sym: '(<i>a</i>, <i>b</i>) — 定义域内的区间',
        cond: '结论在<b>区间内</b>成立。若 <i>f</i>&#8242;(<i>x</i>) ≥ 0 且等号只在有限个点成立，仍可判定递增。<b>先求定义域</b>（尤其含对数时），再求单调区间。'
      },
      {
        t: '极值的判定',
        f: '<i>x</i><sub>0</sub> 是极值点　⇔　<i>f</i>&#8242;(<i>x</i><sub>0</sub>) = 0 <b>且</b> <i>x</i><sub>0</sub> 左右两侧导数异号<br>左正右负 ⇒ 极大值；左负右正 ⇒ 极小值',
        mean: '极值是"局部最大/最小"，是函数由增转减（或由减转增）的转折点。',
        sym: '<i>x</i><sub>0</sub> — 极值点（自变量）；<i>f</i>(<i>x</i><sub>0</sub>) — 极值',
        cond: '<b><i>f</i>&#8242;(<i>x</i><sub>0</sub>) = 0 只是必要条件</b>，不能推出 <i>x</i><sub>0</sub> 是极值点（如 <i>y</i> = <i>x</i><sup>3</sup> 在 <i>x</i> = 0 处）。必须判断左右两侧导数的符号是否变化。'
      },
      {
        t: '闭区间上的最值',
        f: '求 <i>f</i>(<i>x</i>) 在 [<i>a</i>, <i>b</i>] 上的最值：<br>比较<b>所有极值点</b>与<b>两个端点</b>处的函数值，最大者为最大值，最小者为最小值',
        mean: '最值是"整体"概念，必须把端点和极值点一起比较，不能只看极值。',
        sym: '<i>a</i>, <i>b</i> — 闭区间端点',
        cond: '要求 <i>f</i>(<i>x</i>) 在 [<i>a</i>, <i>b</i>] 上连续。若区间是<b>开区间</b>或含参数，要讨论极值点是否落在区间内。'
      }
    ]
  },

  /* ==================== 选择性必修第三册 ==================== */
  {
    id: 'f-count',
    no: '16',
    name: '计数原理',
    book: '选择性必修第三册',
    items: [
      {
        t: '分类加法与分步乘法计数原理',
        f: '分类加法：<i>N</i> = <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> + … + <i>m</i><sub><i>n</i></sub><br>分步乘法：<i>N</i> = <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × … × <i>m</i><sub><i>n</i></sub>',
        mean: '判断标准只有一条：<b>各类方法之间是"或"还是"且"</b>。"任选一种就能完成"用加法，"每一步都必须做完"用乘法。',
        sym: '<i>N</i> — 完成这件事的方法总数；<i>m<sub>i</sub></i> — 第 <i>i</i> 类（或第 <i>i</i> 步）的方法数',
        cond: '加法原理要求各类方法<b>互不重叠</b>（不重不漏）；乘法原理要求各步骤<b>相互独立、依次进行</b>。'
      },
      {
        t: '排列数公式',
        f: '<i>A</i><sub><i>n</i></sub><sup><i>m</i></sup> = <i>n</i>(<i>n</i>−1)(<i>n</i>−2)…(<i>n</i>−<i>m</i>+1) = <span class="frac"><span class="num"><i>n</i>!</span><span class="den">(<i>n</i>−<i>m</i>)!</span></span><br>全排列：<i>A</i><sub><i>n</i></sub><sup><i>n</i></sup> = <i>n</i>! = <i>n</i>(<i>n</i>−1)×…×2×1',
        mean: '从 <i>n</i> 个不同元素中取 <i>m</i> 个<b>按顺序排成一列</b>。有顺序就用排列。',
        sym: '<i>n</i> — 元素总数；<i>m</i> — 取出的个数；<i>n</i>! — <i>n</i> 的阶乘；规定 0! = 1',
        cond: '<i>m</i> ≤ <i>n</i>，且 <i>m</i>, <i>n</i> ∈ <b>N</b>*。<b>有顺序</b>才能用排列数，无序要用组合数。'
      },
      {
        t: '组合数公式与性质',
        f: '<i>C</i><sub><i>n</i></sub><sup><i>m</i></sup> = <span class="frac"><span class="num"><i>A</i><sub><i>n</i></sub><sup><i>m</i></sup></span><span class="den"><i>m</i>!</span></span> = <span class="frac"><span class="num"><i>n</i>!</span><span class="den"><i>m</i>!(<i>n</i>−<i>m</i>)!</span></span><br>性质：<i>C</i><sub><i>n</i></sub><sup><i>m</i></sup> = <i>C</i><sub><i>n</i></sub><sup><i>n</i>−<i>m</i></sup>　；　<i>C</i><sub><i>n</i>+1</sub><sup><i>m</i></sup> = <i>C</i><sub><i>n</i></sub><sup><i>m</i></sup> + <i>C</i><sub><i>n</i></sub><sup><i>m</i>−1</sup>',
        mean: '从 <i>n</i> 个不同元素中取 <i>m</i> 个<b>组成一组</b>（不计顺序）。第一个性质让计算量减半，第二个是"杨辉三角"的来源。',
        sym: '<i>C</i><sub><i>n</i></sub><sup><i>m</i></sup> — 组合数（也写作 <span class="frac"><span class="num"><i>n</i></span><span class="den"><i>m</i></span></span>）',
        cond: '<i>m</i> ≤ <i>n</i>。<b>"至少/至多"类问题常正难则反</b>：总数减去反面情况。'
      },
      {
        t: '二项式定理',
        f: '(<i>a</i> + <i>b</i>)<sup><i>n</i></sup> = <i>C</i><sub><i>n</i></sub><sup>0</sup><i>a</i><sup><i>n</i></sup> + <i>C</i><sub><i>n</i></sub><sup>1</sup><i>a</i><sup><i>n</i>−1</sup><i>b</i> + … + <i>C</i><sub><i>n</i></sub><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup><br>通项：<i>T</i><sub><i>k</i>+1</sub> = <i>C</i><sub><i>n</i></sub><sup><i>k</i></sup> <i>a</i><sup><i>n</i>−<i>k</i></sup> <i>b</i><sup><i>k</i></sup>　(<i>k</i> = 0, 1, …, <i>n</i>)',
        mean: '展开式的每一项都是"从 <i>n</i> 个括号里各挑一个字母"的结果。求特定项（如常数项、含 <i>x</i><sup>3</sup> 的项）全靠通项公式。',
        sym: '<i>n</i> — 二项式的次数；<i>k</i> — 项的序号（从 0 开始）；<i>T</i><sub><i>k</i>+1</sub> — 第 <i>k</i>+1 项',
        cond: '<i>n</i> ∈ <b>N</b>*。<b>注意"二项式系数"<i>C</i><sub><i>n</i></sub><sup><i>k</i></sup> 与"项的系数"不是一回事</b>：后者还包含 <i>a</i>、<i>b</i> 中带出的数字因子与符号。'
      },
      {
        t: '二项式系数的性质',
        f: '各二项式系数之和：<i>C</i><sub><i>n</i></sub><sup>0</sup> + <i>C</i><sub><i>n</i></sub><sup>1</sup> + … + <i>C</i><sub><i>n</i></sub><sup><i>n</i></sup> = 2<sup><i>n</i></sup><br>奇数项与偶数项的二项式系数和相等，均为 2<sup><i>n</i>−1</sup><br>最大值：<i>n</i> 为偶数时中间一项最大；<i>n</i> 为奇数时中间两项最大且相等',
        mean: '在 (<i>a</i>+<i>b</i>)<sup><i>n</i></sup> 中令 <i>a</i> = <i>b</i> = 1 即得系数和。',
        sym: '<i>C</i><sub><i>n</i></sub><sup><i>k</i></sup> — 二项式系数',
        cond: '求"所有项的系数和"时令 <i>x</i> = 1 代入即可；求"奇数项系数和与偶数项系数和之差"则令 <i>x</i> = −1。'
      }
    ]
  },
  {
    id: 'f-rv',
    no: '17',
    name: '随机变量及其分布',
    book: '选择性必修第三册',
    items: [
      {
        t: '分布列的性质',
        f: '<i>p</i><sub><i>i</i></sub> ≥ 0　(<i>i</i> = 1, 2, …, <i>n</i>)<br><i>p</i><sub>1</sub> + <i>p</i><sub>2</sub> + … + <i>p</i><sub><i>n</i></sub> = 1',
        mean: '分布列把随机变量的每个取值与它的概率对应起来。<b>所有概率之和必须等于 1</b>，这是检验分布列算没算错的标准。',
        sym: '<i>p<sub>i</sub></i> — 随机变量取第 <i>i</i> 个值的概率；<i>n</i> — 取值的个数',
        cond: '只适用于<b>离散型</b>随机变量（取值可以一一列出）。'
      },
      {
        t: '数学期望（均值）',
        f: '<i>E</i>(<i>X</i>) = <i>x</i><sub>1</sub><i>p</i><sub>1</sub> + <i>x</i><sub>2</sub><i>p</i><sub>2</sub> + … + <i>x</i><sub><i>n</i></sub><i>p</i><sub><i>n</i></sub><br>性质：<i>E</i>(<i>aX</i> + <i>b</i>) = <i>aE</i>(<i>X</i>) + <i>b</i>',
        mean: '期望是随机变量的"加权平均"，反映取值的<b>平均水平</b>。性质说明线性变换可以直接提到外面。',
        sym: '<i>E</i>(<i>X</i>) — 随机变量 <i>X</i> 的数学期望；<i>x<sub>i</sub></i> — 第 <i>i</i> 个取值；<i>p<sub>i</sub></i> — 对应概率；<i>a</i>, <i>b</i> — 常数',
        cond: '无特殊限制。<b>期望是常数不是随机变量</b>，所以 <i>E</i>(<i>E</i>(<i>X</i>)) = <i>E</i>(<i>X</i>)。'
      },
      {
        t: '方差与标准差',
        f: '<i>D</i>(<i>X</i>) = (<i>x</i><sub>1</sub>−<i>E</i>(<i>X</i>))<sup>2</sup><i>p</i><sub>1</sub> + … + (<i>x</i><sub><i>n</i></sub>−<i>E</i>(<i>X</i>))<sup>2</sup><i>p</i><sub><i>n</i></sub><br>简化式：<i>D</i>(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − 【<i>E</i>(<i>X</i>)】<sup>2</sup><br>性质：<i>D</i>(<i>aX</i> + <i>b</i>) = <i>a</i><sup>2</sup><i>D</i>(<i>X</i>)　；　σ(<i>X</i>) = √(<i>D</i>(<i>X</i>))',
        mean: '方差衡量取值的<b>离散程度</b>，越大越不稳定。简化式在实际计算中比定义式快得多。',
        sym: '<i>D</i>(<i>X</i>) — 方差；σ(<i>X</i>) — 标准差；其余同上',
        cond: '无特殊限制。<b>注意 <i>D</i>(<i>aX</i>+<i>b</i>) 中系数 <i>a</i> 要平方</b>，常数 <i>b</i> 对离散程度没有影响（平移不改变"散"的程度）。'
      },
      {
        t: '两点分布（0-1 分布）',
        f: '<i>P</i>(<i>X</i> = 1) = <i>p</i>　；　<i>P</i>(<i>X</i> = 0) = 1 − <i>p</i><br><i>E</i>(<i>X</i>) = <i>p</i>　；　<i>D</i>(<i>X</i>) = <i>p</i>(1 − <i>p</i>)',
        mean: '只有"成功/失败"两种结果的单次试验，是最简单的随机变量模型。',
        sym: '<i>p</i> — 取 1（通常表示"成功"）的概率',
        cond: '0 ≤ <i>p</i> ≤ 1。<i>X</i> 只能取 0 和 1 两个值。'
      },
      {
        t: '二项分布',
        f: '若 <i>X</i> ~ <i>B</i>(<i>n</i>, <i>p</i>)，则<br><i>P</i>(<i>X</i> = <i>k</i>) = <i>C</i><sub><i>n</i></sub><sup><i>k</i></sup> <i>p</i><sup><i>k</i></sup> (1 − <i>p</i>)<sup><i>n</i>−<i>k</i></sup>　(<i>k</i> = 0, 1, …, <i>n</i>)<br><i>E</i>(<i>X</i>) = <i>np</i>　；　<i>D</i>(<i>X</i>) = <i>np</i>(1 − <i>p</i>)',
        mean: '<i>n</i> 次独立重复试验中"成功"的次数。<i>C</i><sub><i>n</i></sub><sup><i>k</i></sup> 选出哪 <i>k</i> 次成功，后面的幂分别给出成功与失败的概率。',
        sym: '<i>n</i> — 试验总次数；<i>p</i> — 每次试验成功的概率；<i>k</i> — 成功次数；<i>B</i> — 二项分布记号',
        cond: '三个条件缺一不可：① 试验次数 <i>n</i> 固定；② 每次试验<b>相互独立</b>；③ 每次成功概率 <i>p</i> <b>保持不变</b>。'
      },
      {
        t: '超几何分布',
        f: '<i>P</i>(<i>X</i> = <i>k</i>) = <span class="frac"><span class="num"><i>C</i><sub><i>M</i></sub><sup><i>k</i></sup> <i>C</i><sub><i>N</i>−<i>M</i></sub><sup><i>n</i>−<i>k</i></sup></span><span class="den"><i>C</i><sub><i>N</i></sub><sup><i>n</i></sup></span></span><br><i>E</i>(<i>X</i>) = <span class="frac"><span class="num"><i>nM</i></span><span class="den"><i>N</i></span></span>',
        mean: '从含 <i>M</i> 件次品的 <i>N</i> 件产品中<b>不放回</b>地抽 <i>n</i> 件，抽到次品的件数。',
        sym: '<i>N</i> — 产品总数；<i>M</i> — 其中的次品数；<i>n</i> — 抽取件数；<i>k</i> — 抽到的次品数',
        cond: '<b>不放回</b>抽样（这是与二项分布的关键区别）。要求 <i>n</i> ≤ <i>N</i>，且 <i>k</i> 的取值需使组合数有意义。'
      },
      {
        t: '条件概率',
        f: '<i>P</i>(<i>B</i> | <i>A</i>) = <span class="frac"><span class="num"><i>P</i>(<i>AB</i>)</span><span class="den"><i>P</i>(<i>A</i>)</span></span>',
        mean: '在"已知 <i>A</i> 已经发生"的前提下，<i>B</i> 发生的概率。相当于把样本空间缩小到 <i>A</i> 里。',
        sym: '<i>P</i>(<i>B</i>|<i>A</i>) — 在 <i>A</i> 发生的条件下 <i>B</i> 发生的概率；<i>P</i>(<i>AB</i>) — <i>A</i>、<i>B</i> 同时发生的概率',
        cond: '<b><i>P</i>(<i>A</i>) &gt; 0</b>。分母是 <i>P</i>(<i>A</i>) 而不是样本点总数——直接拿总数当分母是最常见的错误。'
      },
      {
        t: '全概率公式与贝叶斯公式',
        f: '全概率：<i>P</i>(<i>B</i>) = <i>P</i>(<i>A</i><sub>1</sub>)<i>P</i>(<i>B</i>|<i>A</i><sub>1</sub>) + <i>P</i>(<i>A</i><sub>2</sub>)<i>P</i>(<i>B</i>|<i>A</i><sub>2</sub>) + … + <i>P</i>(<i>A</i><sub><i>n</i></sub>)<i>P</i>(<i>B</i>|<i>A</i><sub><i>n</i></sub>)<br>贝叶斯：<i>P</i>(<i>A</i><sub><i>i</i></sub> | <i>B</i>) = <span class="frac"><span class="num"><i>P</i>(<i>A</i><sub><i>i</i></sub>) <i>P</i>(<i>B</i> | <i>A</i><sub><i>i</i></sub>)</span><span class="den"><i>P</i>(<i>B</i>)</span></span>',
        mean: '全概率是"分情况讨论"求概率：把复杂事件拆成几种互斥的情形。<br>贝叶斯是"由结果反推原因"：已知 <i>B</i> 发生了，问它来自哪种原因。',
        sym: '<i>A</i><sub>1</sub>, …, <i>A</i><sub><i>n</i></sub> — 完备事件组（两两互斥且并集为全集）；<i>P</i>(<i>A<sub>i</sub></i>) — 先验概率；<i>P</i>(<i>A<sub>i</sub></i>|<i>B</i>) — 后验概率',
        cond: '要求 <i>A</i><sub>1</sub>, …, <i>A</i><sub><i>n</i></sub> 构成<b>完备事件组</b>（互斥且覆盖所有可能），且各 <i>P</i>(<i>A<sub>i</sub></i>) &gt; 0。'
      },
      {
        t: '正态分布',
        f: '若 <i>X</i> ~ <i>N</i>(μ, σ<sup>2</sup>)，则密度曲线关于直线 <b><i>x</i> = μ</b> 对称<br><i>P</i>(μ−σ &lt; <i>X</i> &lt; μ+σ) ≈ 0.6827<br><i>P</i>(μ−2σ &lt; <i>X</i> &lt; μ+2σ) ≈ 0.9545<br><i>P</i>(μ−3σ &lt; <i>X</i> &lt; μ+3σ) ≈ 0.9973',
        mean: '正态曲线是"中间高、两头低"的钟形曲线。μ 决定对称轴位置（"中心在哪"），σ 决定胖瘦（"多集中"）。',
        sym: 'μ — 均值（对称轴位置）；σ — 标准差（σ &gt; 0）；<i>N</i>(μ, σ<sup>2</sup>) — 正态分布记号',
        cond: 'σ &gt; 0。这三个百分比称为"3σ 原则"。解题时主要利用<b>对称性</b>：曲线与 <i>x</i> 轴之间的总面积为 1。'
      }
    ]
  },
  {
    id: 'f-reg',
    no: '18',
    name: '成对数据的统计分析',
    book: '选择性必修第三册',
    items: [
      {
        t: '样本相关系数',
        f: '<i>r</i> = <span class="frac"><span class="num">Σ(<i>x<sub>i</sub></i> − <i>x̄</i>)(<i>y<sub>i</sub></i> − <i>ȳ</i>)</span><span class="den">√(Σ(<i>x<sub>i</sub></i> − <i>x̄</i>)<sup>2</sup>) · √(Σ(<i>y<sub>i</sub></i> − <i>ȳ</i>)<sup>2</sup>)</span></span>',
        mean: '衡量两个变量<b>线性相关</b>的强弱与方向。',
        sym: '<i>r</i> — 相关系数，取值在 [−1, 1]；<i>x̄</i>, <i>ȳ</i> — 两组数据的平均数',
        cond: '<i>r</i> &gt; 0 正相关，<i>r</i> &lt; 0 负相关。<b>|r| 越接近 1，线性相关越强</b>；接近 0 则线性相关很弱。<b>注意：<i>r</i> 只反映线性关系</b>，<i>r</i> ≈ 0 不代表两变量没关系（可能存在非线性关系）。'
      },
      {
        t: '一元线性回归方程',
        f: '<i>ŷ</i> = <i>b̂</i><i>x</i> + <i>â</i><br><i>b̂</i> = <span class="frac"><span class="num">Σ(<i>x<sub>i</sub></i> − <i>x̄</i>)(<i>y<sub>i</sub></i> − <i>ȳ</i>)</span><span class="den">Σ(<i>x<sub>i</sub></i> − <i>x̄</i>)<sup>2</sup></span></span>　；　<i>â</i> = <i>ȳ</i> − <i>b̂</i> <i>x̄</i>',
        mean: '用一条直线去"拟合"散点，使各点到直线的距离平方和最小（最小二乘法）。',
        sym: '<i>b̂</i> — 回归系数（斜率）；<i>â</i> — 截距；<i>ŷ</i> — 预测值；<i>x̄</i>, <i>ȳ</i> — 样本均值',
        cond: '要求两个变量存在<b>线性相关</b>关系（先看 <i>r</i>）。回归直线<b>必过样本中心点</b> (<i>x̄</i>, <i>ȳ</i>)，这是求 <i>â</i> 的捷径。'
      },
      {
        t: '独立性检验（χ² 检验）',
        f: 'χ<sup>2</sup> = <span class="frac"><span class="num"><i>n</i>(<i>ad</i> − <i>bc</i>)<sup>2</sup></span><span class="den">(<i>a</i>+<i>b</i>)(<i>c</i>+<i>d</i>)(<i>a</i>+<i>c</i>)(<i>b</i>+<i>d</i>)</span></span>',
        mean: '判断两个分类变量是否<b>有关联</b>。χ<sup>2</sup> 越大，"有关联"的证据越强。',
        sym: '<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> — 2×2 列联表的四个频数；<i>n</i> = <i>a</i>+<i>b</i>+<i>c</i>+<i>d</i> — 样本总量；χ<sup>2</sup> — 卡方统计量',
        cond: '适用于 2×2 列联表。查临界值表后判断：若 χ<sup>2</sup> 大于临界值，则拒绝"两变量无关"的原假设，认为在相应显著性水平下有关联。<b>结论要说成"有 XX% 的把握认为两者有关"，不能直接说"两者有关"</b>。'
      }
    ]
  }
];
