/* ============================================================
 * 高三数学学习站 · 内容数据
 * ------------------------------------------------------------
 * 想自己加内容，改这个文件就行，不用动 app.js。
 *   CHAPTERS   知识要点（按章节）
 *   EXAMPLES   典型例题
 *   EXERCISES  练习题
 * 公式写法：变量用 <i>，上标 <sup>，下标 <sub>，
 * 分式用 <span class="frac"><span class="num">上</span><span class="den">下</span></span>
 * ============================================================ */

const CHAPTERS = [
  {
    id: 'sets',
    no: '01',
    name: '集合与常用逻辑用语',
    tag: '基础必考',
    points: [
      {
        t: '集合的三种运算',
        c: '交集 <i>A</i>∩<i>B</i> = {<i>x</i> | <i>x</i>∈<i>A</i> 且 <i>x</i>∈<i>B</i>}；并集 <i>A</i>∪<i>B</i> = {<i>x</i> | <i>x</i>∈<i>A</i> 或 <i>x</i>∈<i>B</i>}；补集 ∁<sub><i>U</i></sub><i>A</i> = {<i>x</i> | <i>x</i>∈<i>U</i> 且 <i>x</i>∉<i>A</i>}。数轴与韦恩图是最快的工具，含参问题先画图再列式。'
      },
      {
        t: '子集个数公式',
        c: '含 <i>n</i> 个元素的集合：子集共 2<sup><i>n</i></sup> 个，真子集 2<sup><i>n</i></sup>−1 个，非空真子集 2<sup><i>n</i></sup>−2 个。'
      },
      {
        t: '充分条件与必要条件',
        c: '若 <i>p</i> ⇒ <i>q</i>，则 <i>p</i> 是 <i>q</i> 的充分条件，<i>q</i> 是 <i>p</i> 的必要条件；<i>p</i> ⇔ <i>q</i> 则互为充要条件。判断口诀：<b>小范围推大范围</b>——条件对应的集合越小，越"充分"。'
      },
      {
        t: '全称量词与存在量词',
        c: '否定时量词要互换、结论要否定：¬(∀<i>x</i>∈<i>M</i>, <i>p</i>(<i>x</i>)) ⇔ ∃<i>x</i>∈<i>M</i>, ¬<i>p</i>(<i>x</i>)；¬(∃<i>x</i>∈<i>M</i>, <i>p</i>(<i>x</i>)) ⇔ ∀<i>x</i>∈<i>M</i>, ¬<i>p</i>(<i>x</i>)。'
      }
    ],
    traps: [
      '讨论 <i>A</i>⊆<i>B</i> 时若没限定 <i>A</i>≠∅，<b>必须单独讨论 <i>A</i>=∅</b>，这是最常见的丢分点',
      '集合元素具有互异性，含参求出结果后要代回检验是否产生重复元素',
      '空集是任何集合的子集，也是任何非空集合的真子集'
    ]
  },
  {
    id: 'func',
    no: '02',
    name: '函数概念与基本初等函数',
    tag: '核心主干',
    points: [
      {
        t: '定义域优先原则',
        c: '先求定义域，再谈一切性质。常见限制：分式分母 ≠ 0；偶次根式被开方数 ≥ 0；对数真数 &gt; 0 且底数 &gt; 0 且 ≠ 1；<i>y</i>=tan<i>x</i> 中 <i>x</i> ≠ <span class="frac"><span class="num">π</span><span class="den">2</span></span> + <i>k</i>π。'
      },
      {
        t: '单调性',
        c: '定义法作差比较，或导数法（<i>f</i>&#8242;(<i>x</i>) &gt; 0 则递增）。复合函数 <i>y</i>=<i>f</i>(<i>g</i>(<i>x</i>)) 遵循<b>同增异减</b>。'
      },
      {
        t: '奇偶性',
        c: '前提：定义域关于原点对称。<i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>) 为偶函数，<i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>) 为奇函数。奇函数若在 <i>x</i>=0 处有定义，则 <i>f</i>(0) = 0。'
      },
      {
        t: '指数与对数运算',
        c: '<i>a</i><sup><i>m</i></sup>·<i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i>+<i>n</i></sup>，(<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup>；log<sub><i>a</i></sub>(<i>MN</i>) = log<sub><i>a</i></sub><i>M</i> + log<sub><i>a</i></sub><i>N</i>，log<sub><i>a</i></sub><span class="frac"><span class="num"><i>M</i></span><span class="den"><i>N</i></span></span> = log<sub><i>a</i></sub><i>M</i> − log<sub><i>a</i></sub><i>N</i>；换底 log<sub><i>a</i></sub><i>b</i> = <span class="frac"><span class="num">log<sub><i>c</i></sub><i>b</i></span><span class="den">log<sub><i>c</i></sub><i>a</i></span></span>。'
      },
      {
        t: '零点存在定理',
        c: '若 <i>f</i>(<i>x</i>) 在 [<i>a</i>,<i>b</i>] 上图象连续不断，且 <i>f</i>(<i>a</i>)·<i>f</i>(<i>b</i>) &lt; 0，则存在 <i>c</i>∈(<i>a</i>,<i>b</i>) 使 <i>f</i>(<i>c</i>) = 0。这是"零点所在区间"题的唯一依据。'
      }
    ],
    traps: [
      '判断奇偶性前先看定义域是否对称，如 <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>, <i>x</i>∈[−1,2) 既非奇也非偶',
      'log(<i>M</i>+<i>N</i>) 不能拆成 log<i>M</i> + log<i>N</i>，只有乘除才能拆',
      '单调区间不能写成并集 <i>A</i>∪<i>B</i>，要用"和"或分开写'
    ]
  },
  {
    id: 'trig',
    no: '03',
    name: '三角函数与解三角形',
    tag: '必考大题',
    points: [
      {
        t: '同角关系与诱导公式',
        c: 'sin<sup>2</sup>α + cos<sup>2</sup>α = 1，tanα = <span class="frac"><span class="num">sinα</span><span class="den">cosα</span></span>。诱导公式口诀：<b>奇变偶不变，符号看象限</b>（把 α 当锐角判断原函数符号）。'
      },
      {
        t: '和差角与二倍角',
        c: 'sin(α±β) = sinαcosβ ± cosαsinβ；cos(α±β) = cosαcosβ ∓ sinαsinβ；sin2α = 2sinαcosα；cos2α = cos<sup>2</sup>α − sin<sup>2</sup>α = 2cos<sup>2</sup>α − 1 = 1 − 2sin<sup>2</sup>α。'
      },
      {
        t: '辅助角公式',
        c: '<i>a</i>sin<i>x</i> + <i>b</i>cos<i>x</i> = √(<i>a</i><sup>2</sup>+<i>b</i><sup>2</sup>)·sin(<i>x</i>+φ)，其中 tanφ = <span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span>。这是求三角函数最值、周期的主线方法。'
      },
      {
        t: '正弦定理与余弦定理',
        c: '<span class="frac"><span class="num"><i>a</i></span><span class="den">sin<i>A</i></span></span> = <span class="frac"><span class="num"><i>b</i></span><span class="den">sin<i>B</i></span></span> = <span class="frac"><span class="num"><i>c</i></span><span class="den">sin<i>C</i></span></span> = 2<i>R</i>；<i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i>cos<i>A</i>；面积 <i>S</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>ab</i>sin<i>C</i>。'
      }
    ],
    traps: [
      '已知两边及其中一边的对角（SSA）时三角形<b>可能有两解</b>，务必用"大边对大角"逐一检验',
      '用正弦定理求角时不能直接写 arcsin 的结果，钝角情况要补上',
      '辅助角公式中 φ 的象限由系数 (<i>a</i>,<i>b</i>) 共同决定，不能只写 arctan(<i>b</i>/<i>a</i>)'
    ]
  },
  {
    id: 'vector',
    no: '04',
    name: '平面向量与复数',
    tag: '基础必考',
    points: [
      {
        t: '向量的数量积',
        c: '<b>a</b>·<b>b</b> = |<b>a</b>||<b>b</b>|cos⟨<b>a</b>,<b>b</b>⟩。坐标形式：设 <b>a</b> = (<i>x</i><sub>1</sub>,<i>y</i><sub>1</sub>)，<b>b</b> = (<i>x</i><sub>2</sub>,<i>y</i><sub>2</sub>)，则 <b>a</b>·<b>b</b> = <i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub>。'
      },
      {
        t: '平行与垂直的坐标条件',
        c: '<b>a</b>∥<b>b</b> ⇔ <i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>x</i><sub>2</sub><i>y</i><sub>1</sub> = 0；<b>a</b>⊥<b>b</b> ⇔ <i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub> = 0。两者极易混淆，务必分清。'
      },
      {
        t: '模与夹角',
        c: '|<b>a</b>| = √(<i>x</i><sup>2</sup>+<i>y</i><sup>2</sup>)；cos⟨<b>a</b>,<b>b</b>⟩ = <span class="frac"><span class="num"><b>a</b>·<b>b</b></span><span class="den">|<b>a</b>||<b>b</b>|</span></span>。常用技巧：|<b>a</b>±<b>b</b>|<sup>2</sup> = |<b>a</b>|<sup>2</sup> ± 2<b>a</b>·<b>b</b> + |<b>b</b>|<sup>2</sup>。'
      },
      {
        t: '复数',
        c: 'i<sup>2</sup> = −1；<i>z</i> = <i>a</i>+<i>b</i>i 的共轭 <span style="text-decoration:overline"><i>z</i></span> = <i>a</i>−<i>b</i>i，模 |<i>z</i>| = √(<i>a</i><sup>2</sup>+<i>b</i><sup>2</sup>)，且 <i>z</i>·<span style="text-decoration:overline"><i>z</i></span> = |<i>z</i>|<sup>2</sup>。除法：分子分母同乘分母的共轭复数。'
      }
    ],
    traps: [
      '向量平行用行列式，垂直用数量积，两个坐标式不能记反',
      '复数 <i>z</i> 为纯虚数 ⇔ 实部 = 0 <b>且</b>虚部 ≠ 0，只写实部为 0 会漏掉 <i>z</i>=0',
      '|<i>z</i><sub>1</sub><i>z</i><sub>2</sub>| = |<i>z</i><sub>1</sub>||<i>z</i><sub>2</sub>| 成立，但 |<i>z</i><sub>1</sub>+<i>z</i><sub>2</sub>| ≤ |<i>z</i><sub>1</sub>|+|<i>z</i><sub>2</sub>| 不能取等号乱用'
    ]
  },
  {
    id: 'seq',
    no: '05',
    name: '数列',
    tag: '必考大题',
    points: [
      {
        t: '等差数列',
        c: '<i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i>−1)<i>d</i>；<i>S</i><sub><i>n</i></sub> = <span class="frac"><span class="num"><i>n</i>(<i>a</i><sub>1</sub>+<i>a</i><sub><i>n</i></sub>)</span><span class="den">2</span></span> = <i>na</i><sub>1</sub> + <span class="frac"><span class="num"><i>n</i>(<i>n</i>−1)</span><span class="den">2</span></span><i>d</i>；中项 2<i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>n</i>−1</sub> + <i>a</i><sub><i>n</i>+1</sub>。'
      },
      {
        t: '等比数列',
        c: '<i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub><i>q</i><sup><i>n</i>−1</sup>；<i>S</i><sub><i>n</i></sub> = <span class="frac"><span class="num"><i>a</i><sub>1</sub>(1−<i>q</i><sup><i>n</i></sup>)</span><span class="den">1−<i>q</i></span></span>（<i>q</i>≠1），<i>q</i> = 1 时 <i>S</i><sub><i>n</i></sub> = <i>na</i><sub>1</sub>。中项 <i>b</i><sub><i>n</i></sub><sup>2</sup> = <i>b</i><sub><i>n</i>−1</sub><i>b</i><sub><i>n</i>+1</sub>。'
      },
      {
        t: '求通项的四种套路',
        c: '① 累加：<i>a</i><sub><i>n</i></sub>−<i>a</i><sub><i>n</i>−1</sub> = <i>f</i>(<i>n</i>)；② 累乘：<span class="frac"><span class="num"><i>a</i><sub><i>n</i></sub></span><span class="den"><i>a</i><sub><i>n</i>−1</sub></span></span> = <i>f</i>(<i>n</i>)；③ 构造：<i>a</i><sub><i>n</i></sub> = <i>pa</i><sub><i>n</i>−1</sub>+<i>q</i> 型设 <i>a</i><sub><i>n</i></sub>+λ = <i>p</i>(<i>a</i><sub><i>n</i>−1</sub>+λ)；④ 由 <i>S</i><sub><i>n</i></sub> 求 <i>a</i><sub><i>n</i></sub>：<i>a</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub>（<i>n</i>≥2）。'
      },
      {
        t: '求和的三种方法',
        c: '① 错位相减：等差 × 等比型；② 裂项相消：<span class="frac"><span class="num">1</span><span class="den"><i>n</i>(<i>n</i>+1)</span></span> = <span class="frac"><span class="num">1</span><span class="den"><i>n</i></span></span> − <span class="frac"><span class="num">1</span><span class="den"><i>n</i>+1</span></span>；③ 分组求和：拆成等差、等比分别求和。'
      }
    ],
    traps: [
      '等比数列求和<b>必须先讨论 <i>q</i> = 1</b>，直接套公式是每年都在重复的错',
      '用 <i>a</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub>−<i>S</i><sub><i>n</i>−1</sub> 时只对 <i>n</i> ≥ 2 成立，<i>n</i> = 1 要单独验证',
      '裂项相消后剩余项不一定是首尾各一项，动笔把前几项后几项写出来数清楚'
    ]
  },
  {
    id: 'ineq',
    no: '06',
    name: '不等式',
    tag: '工具方法',
    points: [
      {
        t: '基本不等式',
        c: '<i>a</i> &gt; 0, <i>b</i> &gt; 0 时 <i>a</i>+<i>b</i> ≥ 2√(<i>ab</i>)，当且仅当 <i>a</i> = <i>b</i> 时取等。常用变形：<i>ab</i> ≤ (<span class="frac"><span class="num"><i>a</i>+<i>b</i></span><span class="den">2</span></span>)<sup>2</sup>，<span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">1</span><span class="den"><i>b</i></span></span> ≥ <span class="frac"><span class="num">4</span><span class="den"><i>a</i>+<i>b</i></span></span>。'
      },
      {
        t: '一元二次不等式',
        c: '先化二次项系数为正，再求对应方程的根，最后"<b>大于取两边，小于取中间</b>"。含参时按判别式 Δ 和两根大小分类讨论。'
      },
      {
        t: '恒成立问题',
        c: '<i>a</i> ≥ <i>f</i>(<i>x</i>) 恒成立 ⇔ <i>a</i> ≥ <i>f</i>(<i>x</i>)<sub>max</sub>；<i>a</i> ≤ <i>f</i>(<i>x</i>) 恒成立 ⇔ <i>a</i> ≤ <i>f</i>(<i>x</i>)<sub>min</sub>。能分离参数就分离参数，这是最省事的路子。'
      }
    ],
    traps: [
      '基本不等式要求"<b>一正二定三相等</b>"，三项缺一不可，尤其是取等条件必须验证',
      '用基本不等式求最值时，若取等条件取不到，要改用单调性求最值',
      '多次使用基本不等式时，各次取等条件必须能同时满足'
    ]
  },
  {
    id: 'solid',
    no: '07',
    name: '立体几何',
    tag: '必考大题',
    points: [
      {
        t: '平行与垂直的判定',
        c: '线面平行：平面外一条直线与平面内一条直线平行；线面垂直：直线垂直于平面内<b>两条相交直线</b>；面面垂直：一个平面经过另一个平面的垂线。证明题务必写清依据定理。'
      },
      {
        t: '空间向量法（建系）',
        c: '先证三线两两垂直再建系。设平面法向量 <b>n</b>，则线面角 sinθ = |cos⟨<b>a</b>,<b>n</b>⟩|；二面角先由图判断锐钝，再决定取 |cos⟨<b>n</b><sub>1</sub>,<b>n</b><sub>2</sub>⟩| 还是加负号；点 <i>P</i> 到平面距离 <i>d</i> = <span class="frac"><span class="num">|<b>AP</b>·<b>n</b>|</span><span class="den">|<b>n</b>|</span></span>。'
      },
      {
        t: '表面积与体积',
        c: '柱体 <i>V</i> = <i>Sh</i>；锥体 <i>V</i> = <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>Sh</i>；球 <i>V</i> = <span class="frac"><span class="num">4</span><span class="den">3</span></span>π<i>R</i><sup>3</sup>，<i>S</i> = 4π<i>R</i><sup>2</sup>。等体积法是求点到平面距离的常用技巧。'
      }
    ],
    traps: [
      '二面角是锐角还是钝角必须由图判断，直接取绝对值可能丢分',
      '建系前必须先证明三条坐标轴两两垂直，否则算出来的坐标全错',
      '证明题不能只写结论，判定定理的条件要逐条写出来'
    ]
  },
  {
    id: 'conic',
    no: '08',
    name: '解析几何',
    tag: '必考大题',
    points: [
      {
        t: '直线',
        c: '斜率 <i>k</i> = <span class="frac"><span class="num"><i>y</i><sub>2</sub>−<i>y</i><sub>1</sub></span><span class="den"><i>x</i><sub>2</sub>−<i>x</i><sub>1</sub></span></span>；点斜式 <i>y</i>−<i>y</i><sub>1</sub> = <i>k</i>(<i>x</i>−<i>x</i><sub>1</sub>)；平行 <i>k</i><sub>1</sub> = <i>k</i><sub>2</sub>，垂直 <i>k</i><sub>1</sub><i>k</i><sub>2</sub> = −1（斜率不存在要单独讨论）；点 <i>P</i>(<i>x</i><sub>0</sub>,<i>y</i><sub>0</sub>) 到直线 <i>Ax</i>+<i>By</i>+<i>C</i>=0 的距离 <i>d</i> = <span class="frac"><span class="num">|<i>Ax</i><sub>0</sub>+<i>By</i><sub>0</sub>+<i>C</i>|</span><span class="den">√(<i>A</i><sup>2</sup>+<i>B</i><sup>2</sup>)</span></span>。'
      },
      {
        t: '圆',
        c: '标准方程 (<i>x</i>−<i>a</i>)<sup>2</sup> + (<i>y</i>−<i>b</i>)<sup>2</sup> = <i>r</i><sup>2</sup>。弦长 = 2√(<i>r</i><sup>2</sup>−<i>d</i><sup>2</sup>)，其中 <i>d</i> 是圆心到直线的距离——"半弦、半径、弦心距"构成直角三角形。'
      },
      {
        t: '三种圆锥曲线的核心参数',
        c: '椭圆 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den"><i>a</i><sup>2</sup></span></span> + <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den"><i>b</i><sup>2</sup></span></span> = 1（<i>a</i> &gt; <i>b</i> &gt; 0）：<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup>−<i>b</i><sup>2</sup>，<i>e</i> = <span class="frac"><span class="num"><i>c</i></span><span class="den"><i>a</i></span></span> ∈ (0,1)；双曲线 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den"><i>a</i><sup>2</sup></span></span> − <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den"><i>b</i><sup>2</sup></span></span> = 1：<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup>+<i>b</i><sup>2</sup>，渐近线 <i>y</i> = ±<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span><i>x</i>；抛物线 <i>y</i><sup>2</sup> = 2<i>px</i>：焦点 (<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>, 0)，准线 <i>x</i> = −<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>，通径长 2<i>p</i>。'
      },
      {
        t: '弦长公式与点差法',
        c: '|AB| = √(1+<i>k</i><sup>2</sup>)·|<i>x</i><sub>1</sub>−<i>x</i><sub>2</sub>| = √(1+<i>k</i><sup>2</sup>)·√((<i>x</i><sub>1</sub>+<i>x</i><sub>2</sub>)<sup>2</sup>−4<i>x</i><sub>1</sub><i>x</i><sub>2</sub>)。涉及弦中点的问题优先用<b>点差法</b>，可省去一半计算量。'
      }
    ],
    traps: [
      '设直线方程前先讨论斜率不存在的情况，漏掉就是漏解',
      '联立后必须验证判别式 Δ &gt; 0，否则求出的参数可能不成立',
      '椭圆与双曲线中 <i>a</i>、<i>b</i>、<i>c</i> 的关系式不同，别记混'
    ]
  },
  {
    id: 'deriv',
    no: '09',
    name: '导数及其应用',
    tag: '压轴核心',
    points: [
      {
        t: '几何意义',
        c: '<i>f</i>&#8242;(<i>x</i><sub>0</sub>) 是曲线 <i>y</i> = <i>f</i>(<i>x</i>) 在点 (<i>x</i><sub>0</sub>, <i>f</i>(<i>x</i><sub>0</sub>)) 处切线的斜率。切线方程：<i>y</i> − <i>f</i>(<i>x</i><sub>0</sub>) = <i>f</i>&#8242;(<i>x</i><sub>0</sub>)(<i>x</i> − <i>x</i><sub>0</sub>)。'
      },
      {
        t: '求导公式',
        c: '(<i>x</i><sup><i>n</i></sup>)&#8242; = <i>nx</i><sup><i>n</i>−1</sup>，(<i>e</i><sup><i>x</i></sup>)&#8242; = <i>e</i><sup><i>x</i></sup>，(<i>a</i><sup><i>x</i></sup>)&#8242; = <i>a</i><sup><i>x</i></sup>ln<i>a</i>，(ln<i>x</i>)&#8242; = <span class="frac"><span class="num">1</span><span class="den"><i>x</i></span></span>，(sin<i>x</i>)&#8242; = cos<i>x</i>，(cos<i>x</i>)&#8242; = −sin<i>x</i>；[<i>f</i>(<i>x</i>)<i>g</i>(<i>x</i>)]&#8242; = <i>f</i>&#8242;<i>g</i> + <i>fg</i>&#8242;，[<span class="frac"><span class="num"><i>f</i></span><span class="den"><i>g</i></span></span>]&#8242; = <span class="frac"><span class="num"><i>f</i>&#8242;<i>g</i> − <i>fg</i>&#8242;</span><span class="den"><i>g</i><sup>2</sup></span></span>。'
      },
      {
        t: '单调性与极值',
        c: '<i>f</i>&#8242;(<i>x</i>) &gt; 0 则递增，<i>f</i>&#8242;(<i>x</i>) &lt; 0 则递减。极值点处 <i>f</i>&#8242;(<i>x</i><sub>0</sub>) = 0 <b>且左右两侧导数异号</b>。闭区间上的最值：比较所有极值点与两端点的函数值。'
      }
    ],
    traps: [
      '"在点 <i>P</i> 处的切线"与"过点 <i>P</i> 的切线"是两回事，后者要设切点坐标再解方程',
      '<i>f</i>&#8242;(<i>x</i><sub>0</sub>) = 0 推不出 <i>x</i><sub>0</sub> 是极值点（如 <i>y</i> = <i>x</i><sup>3</sup> 在 <i>x</i> = 0 处）',
      '讨论含参函数的单调性时必须按参数分类，别只写一种情况'
    ]
  },
  {
    id: 'prob',
    no: '10',
    name: '计数原理与概率统计',
    tag: '必考',
    points: [
      {
        t: '计数原理与排列组合',
        c: '分类用加法、分步用乘法。排列 <i>A</i><sub><i>n</i></sub><sup><i>m</i></sup> = <span class="frac"><span class="num"><i>n</i>!</span><span class="den">(<i>n</i>−<i>m</i>)!</span></span>（有序），组合 <i>C</i><sub><i>n</i></sub><sup><i>m</i></sup> = <span class="frac"><span class="num"><i>n</i>!</span><span class="den"><i>m</i>!(<i>n</i>−<i>m</i>)!</span></span>（无序），且 <i>C</i><sub><i>n</i></sub><sup><i>m</i></sup> = <i>C</i><sub><i>n</i></sub><sup><i>n</i>−<i>m</i></sup>。'
      },
      {
        t: '二项式定理',
        c: '(<i>a</i>+<i>b</i>)<sup><i>n</i></sup> 的通项 <i>T</i><sub><i>k</i>+1</sub> = <i>C</i><sub><i>n</i></sub><sup><i>k</i></sup><i>a</i><sup><i>n</i>−<i>k</i></sup><i>b</i><sup><i>k</i></sup>。二项式系数之和为 2<sup><i>n</i></sup>，奇数项与偶数项的二项式系数和均为 2<sup><i>n</i>−1</sup>。'
      },
      {
        t: '概率的基本公式',
        c: '古典概型 <i>P</i>(<i>A</i>) = <span class="frac"><span class="num"><i>m</i></span><span class="den"><i>n</i></span></span>；条件概率 <i>P</i>(<i>B</i>|<i>A</i>) = <span class="frac"><span class="num"><i>P</i>(<i>AB</i>)</span><span class="den"><i>P</i>(<i>A</i>)</span></span>；相互独立 <i>P</i>(<i>AB</i>) = <i>P</i>(<i>A</i>)<i>P</i>(<i>B</i>)；全概率 <i>P</i>(<i>B</i>) = Σ<i>P</i>(<i>A</i><sub><i>i</i></sub>)<i>P</i>(<i>B</i>|<i>A</i><sub><i>i</i></sub>)。'
      },
      {
        t: '随机变量的期望与方差',
        c: '<i>E</i>(<i>X</i>) = Σ<i>x</i><sub><i>i</i></sub><i>p</i><sub><i>i</i></sub>；<i>D</i>(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup>。二项分布 <i>X</i> ~ <i>B</i>(<i>n</i>,<i>p</i>)：<i>E</i>(<i>X</i>) = <i>np</i>，<i>D</i>(<i>X</i>) = <i>np</i>(1−<i>p</i>)。性质：<i>E</i>(<i>aX</i>+<i>b</i>) = <i>aE</i>(<i>X</i>)+<i>b</i>，<i>D</i>(<i>aX</i>+<i>b</i>) = <i>a</i><sup>2</sup><i>D</i>(<i>X</i>)。'
      }
    ],
    traps: [
      '二项展开式中"二项式系数"与"项的系数"不是一回事，后者含符号与常数因子',
      '条件概率的分母是 <i>P</i>(<i>A</i>) 而不是 <i>P</i>(Ω)，别拿总数当分母',
      '方差公式 <i>D</i>(<i>aX</i>+<i>b</i>) = <i>a</i><sup>2</sup><i>D</i>(<i>X</i>) 中系数要平方，常数 <i>b</i> 不影响方差'
    ]
  }
];

/* ============================================================
 * 典型例题
 * level: 1 基础 / 2 中档 / 3 拔高
 * ============================================================ */
const EXAMPLES = [
  {
    id: 'ex-sets',
    ch: 'sets',
    title: '含参集合的子集关系',
    level: 2,
    q: '已知集合 <i>A</i> = {<i>x</i> | <i>x</i><sup>2</sup> − 3<i>x</i> + 2 ≤ 0}，<i>B</i> = {<i>x</i> | <i>x</i> &lt; <i>a</i>}，若 <i>A</i> ⊆ <i>B</i>，求实数 <i>a</i> 的取值范围。',
    think: '先把 <i>A</i> 解出来，再把它画到数轴上。子集关系在数轴上就是"位置关系"，比死算不等式直观得多。',
    steps: [
      '解 <i>A</i>：<i>x</i><sup>2</sup> − 3<i>x</i> + 2 ≤ 0，因式分解得 (<i>x</i>−1)(<i>x</i>−2) ≤ 0，所以 1 ≤ <i>x</i> ≤ 2，即 <i>A</i> = [1, 2]。',
      '<i>B</i> = (−∞, <i>a</i>)，在数轴上是一条向左无限延伸、右端点在 <i>a</i> 的射线。',
      '要 <i>A</i> ⊆ <i>B</i>，就是 [1,2] 整段都落在 (−∞,<i>a</i>) 内，所以右端点 2 必须严格小于 <i>a</i>，即 <i>a</i> &gt; 2。'
    ],
    ans: '<i>a</i> &gt; 2（即 <i>a</i> ∈ (2, +∞)）',
    key: '注意 <i>B</i> 是开区间，<i>a</i> = 2 时 2 ∉ <i>B</i>，而 2 ∈ <i>A</i>，所以 <i>a</i> = 2 取不到。端点是否可取，是这类题唯一容易翻车的地方。'
  },
  {
    id: 'ex-func',
    ch: 'func',
    title: '零点所在区间的判断',
    level: 1,
    q: '函数 <i>f</i>(<i>x</i>) = ln(<i>x</i>+1) − <span class="frac"><span class="num">2</span><span class="den"><i>x</i></span></span> 的零点所在的区间是（　　）<br>A. (0,1)　B. (1,2)　C. (2,3)　D. (3,4)',
    think: '零点存在定理只看两件事：函数在区间上连续，两端点函数值异号。先算定义域，再逐个端点试值。',
    steps: [
      '定义域：<i>x</i>+1 &gt; 0 且 <i>x</i> ≠ 0，即 <i>x</i> &gt; −1 且 <i>x</i> ≠ 0。四个选项都在定义域内。',
      '在 (0,+∞) 上 ln(<i>x</i>+1) 递增，−<span class="frac"><span class="num">2</span><span class="den"><i>x</i></span></span> 也递增（<span class="frac"><span class="num">2</span><span class="den"><i>x</i></span></span> 递减，加负号后递增），所以 <i>f</i>(<i>x</i>) 在 (0,+∞) 上单调递增，零点至多一个。',
      '试值：<i>f</i>(1) = ln2 − 2 ≈ 0.693 − 2 = −1.307 &lt; 0；<i>f</i>(2) = ln3 − 1 ≈ 1.099 − 1 = 0.099 &gt; 0。',
      '两端点异号且函数连续，由零点存在定理，零点在 (1, 2) 内。'
    ],
    ans: 'B',
    key: '先判断单调性可以保证"零点唯一"，再算端点值即可锁定区间，不用把四个选项都试一遍。'
  },
  {
    id: 'ex-trig-1',
    ch: 'trig',
    title: '已知两边一对角的三角形解个数',
    level: 2,
    q: '在 △<i>ABC</i> 中，<i>a</i> = 2，<i>b</i> = √6，<i>A</i> = 45°，求角 <i>B</i>。',
    think: '已知条件是 SSA（两边及其中一边的对角），这正是"可能有两解"的典型结构，解完必须回头检验。',
    steps: [
      '由正弦定理 <span class="frac"><span class="num"><i>a</i></span><span class="den">sin<i>A</i></span></span> = <span class="frac"><span class="num"><i>b</i></span><span class="den">sin<i>B</i></span></span>，得 sin<i>B</i> = <span class="frac"><span class="num"><i>b</i>·sin<i>A</i></span><span class="den"><i>a</i></span></span> = <span class="frac"><span class="num">√6 · (√2/2)</span><span class="den">2</span></span> = <span class="frac"><span class="num">√3</span><span class="den">2</span></span>。',
      '所以 <i>B</i> = 60° 或 <i>B</i> = 120°。',
      '检验 <i>B</i> = 60°：<i>A</i>+<i>B</i> = 105° &lt; 180°，<i>C</i> = 75°，成立。',
      '检验 <i>B</i> = 120°：<i>A</i>+<i>B</i> = 165° &lt; 180°，<i>C</i> = 15°，也成立。',
      '两个都满足三角形内角和，故两解都保留。'
    ],
    ans: '<i>B</i> = 60° 或 <i>B</i> = 120°',
    key: 'SSA 型题目<b>必须先算出 sin 值再讨论两个角</b>，然后用"内角和小于 180°"筛掉不合法的解。很多人直接写 60° 就交卷了。'
  },
  {
    id: 'ex-trig-2',
    ch: 'trig',
    title: '辅助角公式求最值与周期',
    level: 2,
    q: '求函数 <i>f</i>(<i>x</i>) = sin2<i>x</i> + √3·cos2<i>x</i> 的最小正周期和最大值。',
    think: '"一个正弦 + 一个余弦，且角相同"，这是辅助角公式的固定信号。',
    steps: [
      '提出 √(1<sup>2</sup> + (√3)<sup>2</sup>) = √4 = 2，得 <i>f</i>(<i>x</i>) = 2[<span class="frac"><span class="num">1</span><span class="den">2</span></span>sin2<i>x</i> + <span class="frac"><span class="num">√3</span><span class="den">2</span></span>cos2<i>x</i>]。',
      '把系数写成余弦、正弦：<span class="frac"><span class="num">1</span><span class="den">2</span></span> = cos<span class="frac"><span class="num">π</span><span class="den">3</span></span>，<span class="frac"><span class="num">√3</span><span class="den">2</span></span> = sin<span class="frac"><span class="num">π</span><span class="den">3</span></span>。',
      '逆用和角公式：<i>f</i>(<i>x</i>) = 2[sin2<i>x</i>cos<span class="frac"><span class="num">π</span><span class="den">3</span></span> + cos2<i>x</i>sin<span class="frac"><span class="num">π</span><span class="den">3</span></span>] = 2sin(2<i>x</i> + <span class="frac"><span class="num">π</span><span class="den">3</span></span>)。',
      '所以最小正周期 <i>T</i> = <span class="frac"><span class="num">2π</span><span class="den">2</span></span> = π；由 sin 的有界性，最大值是 2。'
    ],
    ans: '最小正周期 <i>T</i> = π，最大值 2',
    key: '辅助角公式的本质是"逆用和角公式"，系数 <span class="frac"><span class="num">1</span><span class="den">2</span></span> 与 <span class="frac"><span class="num">√3</span><span class="den">2</span></span> 是特殊值，一眼就能认出对应 π/3。'
  },
  {
    id: 'ex-vector',
    ch: 'vector',
    title: '数量积、模与夹角',
    level: 1,
    q: '已知 <b>a</b> = (1, 2)，<b>b</b> = (−3, 2)。求 <b>a</b>·<b>b</b>、|<b>a</b>+<b>b</b>| 以及 <b>a</b> 与 <b>b</b> 夹角的余弦值。',
    think: '坐标形式的向量题，三步走：算数量积 → 算模 → 代夹角公式。',
    steps: [
      '<b>a</b>·<b>b</b> = 1×(−3) + 2×2 = −3 + 4 = 1。',
      '<b>a</b>+<b>b</b> = (1−3, 2+2) = (−2, 4)，所以 |<b>a</b>+<b>b</b>| = √((−2)<sup>2</sup>+4<sup>2</sup>) = √20 = 2√5。',
      '|<b>a</b>| = √(1<sup>2</sup>+2<sup>2</sup>) = √5，|<b>b</b>| = √((−3)<sup>2</sup>+2<sup>2</sup>) = √13。',
      'cosθ = <span class="frac"><span class="num"><b>a</b>·<b>b</b></span><span class="den">|<b>a</b>||<b>b</b>|</span></span> = <span class="frac"><span class="num">1</span><span class="den">√5·√13</span></span> = <span class="frac"><span class="num">1</span><span class="den">√65</span></span> = <span class="frac"><span class="num">√65</span><span class="den">65</span></span>。'
    ],
    ans: '<b>a</b>·<b>b</b> = 1，|<b>a</b>+<b>b</b>| = 2√5，cosθ = <span class="frac"><span class="num">√65</span><span class="den">65</span></span>',
    key: '结果是 √65 这类非特殊值时，分母有理化后再写；另外数量积可能为负，说明夹角是钝角，可以据此自检。'
  },
  {
    id: 'ex-seq-1',
    ch: 'seq',
    title: '等比数列的公比与求和',
    level: 2,
    q: '等比数列 {<i>a</i><sub><i>n</i></sub>} 中，<i>a</i><sub>1</sub> = 1，<i>a</i><sub>5</sub> = 16，求 <i>S</i><sub>6</sub>。',
    think: '先由 <i>a</i><sub>5</sub> = <i>a</i><sub>1</sub><i>q</i><sup>4</sup> 求 <i>q</i>。注意奇次幂才能定号，偶次幂会得到两个相反的根。',
    steps: [
      '由 <i>a</i><sub>5</sub> = <i>a</i><sub>1</sub><i>q</i><sup>4</sup> 得 <i>q</i><sup>4</sup> = 16，所以 <i>q</i> = 2 或 <i>q</i> = −2。',
      '当 <i>q</i> = 2 时：<i>S</i><sub>6</sub> = <span class="frac"><span class="num">1·(1−2<sup>6</sup>)</span><span class="den">1−2</span></span> = <span class="frac"><span class="num">1−64</span><span class="den">−1</span></span> = 63。',
      '当 <i>q</i> = −2 时：<i>S</i><sub>6</sub> = <span class="frac"><span class="num">1·(1−(−2)<sup>6</sup>)</span><span class="den">1−(−2)</span></span> = <span class="frac"><span class="num">1−64</span><span class="den">3</span></span> = −21。'
    ],
    ans: '<i>S</i><sub>6</sub> = 63 或 <i>S</i><sub>6</sub> = −21',
    key: '公比开偶次方一定要取 ±，这是等比数列最容易漏解的地方。另外本题 <i>q</i> ≠ 1，可以直接用求和公式。'
  },
  {
    id: 'ex-seq-2',
    ch: 'seq',
    title: '错位相减法求和',
    level: 3,
    q: '已知数列 {<i>a</i><sub><i>n</i></sub>} 的通项 <i>a</i><sub><i>n</i></sub> = <i>n</i>·2<sup><i>n</i></sup>，求其前 <i>n</i> 项和 <i>S</i><sub><i>n</i></sub>。',
    think: '通项是"一次式 × 指数式"，典型的错位相减结构。做法是写出 <i>S</i><sub><i>n</i></sub> 后两边乘公比 2，再相减。',
    steps: [
      '写出 <i>S</i><sub><i>n</i></sub> = 1·2<sup>1</sup> + 2·2<sup>2</sup> + 3·2<sup>3</sup> + … + <i>n</i>·2<sup><i>n</i></sup>　……①',
      '两边同乘 2：2<i>S</i><sub><i>n</i></sub> = 1·2<sup>2</sup> + 2·2<sup>3</sup> + … + (<i>n</i>−1)·2<sup><i>n</i></sup> + <i>n</i>·2<sup><i>n</i>+1</sup>　……②',
      '① − ② 得 −<i>S</i><sub><i>n</i></sub> = 2 + 2<sup>2</sup> + 2<sup>3</sup> + … + 2<sup><i>n</i></sup> − <i>n</i>·2<sup><i>n</i>+1</sup>。',
      '中间的等比部分求和：2 + 2<sup>2</sup> + … + 2<sup><i>n</i></sup> = <span class="frac"><span class="num">2(1−2<sup><i>n</i></sup>)</span><span class="den">1−2</span></span> = 2<sup><i>n</i>+1</sup> − 2。',
      '代回：−<i>S</i><sub><i>n</i></sub> = (2<sup><i>n</i>+1</sup> − 2) − <i>n</i>·2<sup><i>n</i>+1</sup> = (1−<i>n</i>)·2<sup><i>n</i>+1</sup> − 2。',
      '所以 <i>S</i><sub><i>n</i></sub> = (<i>n</i>−1)·2<sup><i>n</i>+1</sup> + 2。'
    ],
    ans: '<i>S</i><sub><i>n</i></sub> = (<i>n</i>−1)·2<sup><i>n</i>+1</sup> + 2',
    key: '错位相减有两个常见错误：一是②式末项忘记写成 <i>n</i>·2<sup><i>n</i>+1</sup>；二是最后一步符号搞错。做完代 <i>n</i> = 1 检验，<i>S</i><sub>1</sub> 应等于 <i>a</i><sub>1</sub> = 2。'
  },
  {
    id: 'ex-deriv',
    ch: 'deriv',
    title: '三次函数的极值与闭区间最值',
    level: 2,
    q: '已知 <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 2。求 <i>f</i>(<i>x</i>) 的极值，以及在区间 [0, 3] 上的最大值与最小值。',
    think: '三步：求导 → 令导数为零找驻点 → 判断导数变号确定极值。闭区间最值再补上端点比较。',
    steps: [
      '<i>f</i>&#8242;(<i>x</i>) = 3<i>x</i><sup>2</sup> − 6<i>x</i> = 3<i>x</i>(<i>x</i>−2)，令 <i>f</i>&#8242;(<i>x</i>) = 0 得 <i>x</i> = 0 或 <i>x</i> = 2。',
      '当 <i>x</i> &lt; 0 时 <i>f</i>&#8242; &gt; 0；当 0 &lt; <i>x</i> &lt; 2 时 <i>f</i>&#8242; &lt; 0；当 <i>x</i> &gt; 2 时 <i>f</i>&#8242; &gt; 0。',
      '导数在 <i>x</i> = 0 处由正变负，取极大值 <i>f</i>(0) = 2；在 <i>x</i> = 2 处由负变正，取极小值 <i>f</i>(2) = 8 − 12 + 2 = −2。',
      '求 [0,3] 上的最值，比较极值点与端点：<i>f</i>(0) = 2，<i>f</i>(2) = −2，<i>f</i>(3) = 27 − 27 + 2 = 2。',
      '三者中最大值为 2，最小值为 −2。'
    ],
    ans: '极大值 <i>f</i>(0) = 2，极小值 <i>f</i>(2) = −2；在 [0,3] 上最大值 2，最小值 −2',
    key: '极值是局部概念、最值是整体概念，两者不能混说。闭区间最值必须把端点值一起比较，本题两端点值恰好相等，别以为算错了。'
  },
  {
    id: 'ex-conic',
    ch: 'conic',
    title: '直线与椭圆相交的弦长',
    level: 3,
    q: '已知椭圆 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">4</span></span> + <i>y</i><sup>2</sup> = 1 与直线 <i>y</i> = <i>x</i> + 1 交于 <i>A</i>、<i>B</i> 两点。(1) 求椭圆的离心率与焦点坐标；(2) 求 |<i>AB</i>|。',
    think: '第一问直接读参数；第二问联立消元后用弦长公式，注意先用判别式确认确实有两个交点。',
    steps: [
      '椭圆中 <i>a</i><sup>2</sup> = 4，<i>b</i><sup>2</sup> = 1，所以 <i>a</i> = 2，<i>b</i> = 1，<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup> = 3，<i>c</i> = √3。',
      '离心率 <i>e</i> = <span class="frac"><span class="num"><i>c</i></span><span class="den"><i>a</i></span></span> = <span class="frac"><span class="num">√3</span><span class="den">2</span></span>，焦点为 (±√3, 0)。',
      '联立：把 <i>y</i> = <i>x</i> + 1 代入椭圆方程得 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">4</span></span> + (<i>x</i>+1)<sup>2</sup> = 1。',
      '两边乘 4：<i>x</i><sup>2</sup> + 4(<i>x</i><sup>2</sup>+2<i>x</i>+1) = 4，整理得 5<i>x</i><sup>2</sup> + 8<i>x</i> = 0，即 <i>x</i>(5<i>x</i>+8) = 0。',
      '解得 <i>x</i><sub>1</sub> = 0，<i>x</i><sub>2</sub> = −<span class="frac"><span class="num">8</span><span class="den">5</span></span>，确实有两个交点。',
      '由弦长公式：|<i>AB</i>| = √(1+<i>k</i><sup>2</sup>)·|<i>x</i><sub>1</sub>−<i>x</i><sub>2</sub>| = √2 × <span class="frac"><span class="num">8</span><span class="den">5</span></span> = <span class="frac"><span class="num">8√2</span><span class="den">5</span></span>。'
    ],
    ans: '<i>e</i> = <span class="frac"><span class="num">√3</span><span class="den">2</span></span>，焦点 (±√3, 0)；|<i>AB</i>| = <span class="frac"><span class="num">8√2</span><span class="den">5</span></span>',
    key: '弦长公式 |<i>AB</i>| = √(1+<i>k</i><sup>2</sup>)|<i>x</i><sub>1</sub>−<i>x</i><sub>2</sub>| 中的 √(1+<i>k</i><sup>2</sup>) 是"斜率因子"，别漏乘。本题因式分解后直接读出两根，比套韦达定理更快。'
  },
  {
    id: 'ex-solid',
    ch: 'solid',
    title: '正方体中的线面角',
    level: 3,
    q: '在棱长为 1 的正方体 <i>ABCD</i>-<i>A</i><sub>1</sub><i>B</i><sub>1</sub><i>C</i><sub>1</sub><i>D</i><sub>1</sub> 中，求直线 <i>A</i><sub>1</sub><i>B</i> 与平面 <i>BB</i><sub>1</sub><i>D</i><sub>1</sub><i>D</i> 所成角的大小。',
    think: '正方体天然三线垂直，是建系最方便的场景。线面角要用"方向向量与法向量的夹角"，注意是 sin 不是 cos。',
    steps: [
      '以 <i>D</i> 为原点，<b>DA</b>、<b>DC</b>、<b>DD</b><sub>1</sub> 方向为 <i>x</i>、<i>y</i>、<i>z</i> 轴建立空间直角坐标系。',
      '各点坐标：<i>D</i>(0,0,0)，<i>A</i>(1,0,0)，<i>B</i>(1,1,0)，<i>C</i>(0,1,0)，<i>D</i><sub>1</sub>(0,0,1)，<i>A</i><sub>1</sub>(1,0,1)，<i>B</i><sub>1</sub>(1,1,1)。',
      '平面 <i>BB</i><sub>1</sub><i>D</i><sub>1</sub><i>D</i> 由 <i>D</i>(0,0,0)、<i>B</i>(1,1,0)、<i>D</i><sub>1</sub>(0,0,1) 确定，即平面 <i>y</i> = <i>x</i>，取法向量 <b>n</b> = (1, −1, 0)。',
      '直线 <i>A</i><sub>1</sub><i>B</i> 的方向向量 <b>A</b><sub>1</sub><b>B</b> = (1,1,0) − (1,0,1) = (0, 1, −1)。',
      '设所成角为 θ，则 sinθ = |cos⟨<b>A</b><sub>1</sub><b>B</b>, <b>n</b>⟩| = <span class="frac"><span class="num">|<b>A</b><sub>1</sub><b>B</b>·<b>n</b>|</span><span class="den">|<b>A</b><sub>1</sub><b>B</b>|·|<b>n</b>|</span></span> = <span class="frac"><span class="num">|0×1 + 1×(−1) + (−1)×0|</span><span class="den">√2 × √2</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>。',
      '所以 θ = 30°。'
    ],
    ans: '30°',
    key: '线面角公式是 <b>sinθ = |cos⟨方向向量, 法向量⟩|</b>，写成 cos 是最常见的错误。另外建系前要说明三条轴两两垂直（正方体天然满足）。'
  },
  {
    id: 'ex-prob',
    ch: 'prob',
    title: '独立重复试验的概率',
    level: 2,
    q: '某射手每次射击命中目标的概率为 0.8，各次射击相互独立。求射击 3 次中至少命中 2 次的概率。',
    think: '"至少"通常考虑分类相加或正难则反。本题只有 3 次，直接分类（恰好 2 次 + 恰好 3 次）最快。',
    steps: [
      '设 <i>X</i> 为 3 次中命中的次数，则 <i>X</i> ~ <i>B</i>(3, 0.8)。',
      '恰好命中 2 次：<i>P</i>(<i>X</i>=2) = <i>C</i><sub>3</sub><sup>2</sup> × 0.8<sup>2</sup> × 0.2<sup>1</sup> = 3 × 0.64 × 0.2 = 0.384。',
      '恰好命中 3 次：<i>P</i>(<i>X</i>=3) = <i>C</i><sub>3</sub><sup>3</sup> × 0.8<sup>3</sup> = 0.512。',
      '两情况互斥，相加得 <i>P</i> = 0.384 + 0.512 = 0.896。'
    ],
    ans: '0.896',
    key: '也可以正难则反：<i>P</i> = 1 − <i>P</i>(<i>X</i>=0) − <i>P</i>(<i>X</i>=1) = 1 − 0.008 − 0.096 = 0.896，结果一致。二项分布的模型识别（"<i>n</i> 次独立重复、每次成功概率相同"）是这类题的入口。'
  }
];

/* ============================================================
 * 练习题
 * type: choice 选择 / fill 填空 / solve 解答
 * level: 1 基础 / 2 中档 / 3 拔高
 * ============================================================ */
const EXERCISES = [
  /* ---- 选择 ---- */
  {
    id: 'p01', ch: 'sets', type: 'choice', level: 1,
    stem: '已知集合 <i>A</i> = {1, 2, 3}，<i>B</i> = {2, 3, 4}，则 <i>A</i>∩<i>B</i> =',
    opts: ['{1, 2, 3, 4}', '{2, 3}', '{1, 4}', '∅'],
    ans: 'B',
    sol: '交集取两个集合的公共元素。1 只在 <i>A</i> 中，4 只在 <i>B</i> 中，公共的只有 2 和 3，所以 <i>A</i>∩<i>B</i> = {2, 3}。'
  },
  {
    id: 'p02', ch: 'sets', type: 'choice', level: 1,
    stem: '命题 <i>p</i>：∀<i>x</i>∈<b>R</b>，<i>x</i><sup>2</sup> ≥ 0 的否定是',
    opts: ['∀<i>x</i>∈<b>R</b>，<i>x</i><sup>2</sup> &lt; 0', '∃<i>x</i>∈<b>R</b>，<i>x</i><sup>2</sup> &lt; 0', '∃<i>x</i>∈<b>R</b>，<i>x</i><sup>2</sup> ≥ 0', '∀<i>x</i>∈<b>R</b>，<i>x</i><sup>2</sup> ≤ 0'],
    ans: 'B',
    sol: '全称命题的否定要"改量词、否结论"：∀ 变成 ∃，≥ 变成 &lt;，得到 ∃<i>x</i>∈<b>R</b>，<i>x</i><sup>2</sup> &lt; 0。'
  },
  {
    id: 'p03', ch: 'func', type: 'choice', level: 1,
    stem: '函数 <i>f</i>(<i>x</i>) = √(2−<i>x</i>) + lg(<i>x</i>+1) 的定义域是',
    opts: ['(−1, 2]', '[−1, 2]', '(−1, 2)', '(−∞, 2]'],
    ans: 'A',
    sol: '两个限制同时满足：偶次根式要求 2−<i>x</i> ≥ 0，即 <i>x</i> ≤ 2；对数真数要求 <i>x</i>+1 &gt; 0，即 <i>x</i> &gt; −1。取交集得 −1 &lt; <i>x</i> ≤ 2，即 (−1, 2]。'
  },
  {
    id: 'p04', ch: 'func', type: 'choice', level: 2,
    stem: '设 <i>a</i> = 2<sup>0.3</sup>，<i>b</i> = 0.3<sup>2</sup>，<i>c</i> = log<sub>2</sub>0.3，则三者大小关系为',
    opts: ['<i>a</i> &gt; <i>b</i> &gt; <i>c</i>', '<i>b</i> &gt; <i>a</i> &gt; <i>c</i>', '<i>c</i> &gt; <i>a</i> &gt; <i>b</i>', '<i>a</i> &gt; <i>c</i> &gt; <i>b</i>'],
    ans: 'A',
    sol: '用 0 和 1 作中间量。<i>a</i> = 2<sup>0.3</sup> &gt; 2<sup>0</sup> = 1；<i>b</i> = 0.3<sup>2</sup> = 0.09，介于 0 和 1 之间；<i>c</i> = log<sub>2</sub>0.3 &lt; log<sub>2</sub>1 = 0。所以 <i>a</i> &gt; <i>b</i> &gt; <i>c</i>。'
  },
  {
    id: 'p05', ch: 'trig', type: 'choice', level: 2,
    stem: '已知 sinα = <span class="frac"><span class="num">3</span><span class="den">5</span></span>，且 α ∈ (<span class="frac"><span class="num">π</span><span class="den">2</span></span>, π)，则 tanα =',
    opts: ['<span class="frac"><span class="num">3</span><span class="den">4</span></span>', '−<span class="frac"><span class="num">3</span><span class="den">4</span></span>', '<span class="frac"><span class="num">4</span><span class="den">3</span></span>', '−<span class="frac"><span class="num">4</span><span class="den">3</span></span>'],
    ans: 'B',
    sol: 'α 在第二象限，cosα &lt; 0。由 sin<sup>2</sup>α + cos<sup>2</sup>α = 1 得 cosα = −√(1 − 9/25) = −<span class="frac"><span class="num">4</span><span class="den">5</span></span>。所以 tanα = sinα/cosα = <span class="frac"><span class="num">3/5</span><span class="den">−4/5</span></span> = −<span class="frac"><span class="num">3</span><span class="den">4</span></span>。'
  },
  {
    id: 'p06', ch: 'trig', type: 'choice', level: 3,
    stem: '在 △<i>ABC</i> 中，<i>a</i> = 1，<i>b</i> = √3，<i>A</i> = 30°，则 <i>B</i> =',
    opts: ['60°', '120°', '60° 或 120°', '30° 或 150°'],
    ans: 'C',
    sol: '由正弦定理 sin<i>B</i> = <i>b</i>sin<i>A</i>/<i>a</i> = √3 × 0.5 / 1 = <span class="frac"><span class="num">√3</span><span class="den">2</span></span>，所以 <i>B</i> = 60° 或 120°。逐一检验：60°+30° = 90° &lt; 180° 成立；120°+30° = 150° &lt; 180° 也成立，故两解都保留。'
  },
  {
    id: 'p07', ch: 'seq', type: 'choice', level: 1,
    stem: '等差数列 {<i>a</i><sub><i>n</i></sub>} 中，<i>a</i><sub>3</sub> = 7，<i>a</i><sub>7</sub> = 15，则 <i>a</i><sub>1</sub> =',
    opts: ['1', '2', '3', '4'],
    ans: 'C',
    sol: '由 <i>a</i><sub>7</sub> − <i>a</i><sub>3</sub> = 4<i>d</i> 得 4<i>d</i> = 8，<i>d</i> = 2。再由 <i>a</i><sub>3</sub> = <i>a</i><sub>1</sub> + 2<i>d</i> 得 7 = <i>a</i><sub>1</sub> + 4，所以 <i>a</i><sub>1</sub> = 3。'
  },
  {
    id: 'p08', ch: 'seq', type: 'choice', level: 2,
    stem: '等比数列 {<i>a</i><sub><i>n</i></sub>} 中，<i>a</i><sub>2</sub> = 2，<i>a</i><sub>4</sub> = 8，则 <i>a</i><sub>6</sub> =',
    opts: ['16', '32', '64', '32 或 −32'],
    ans: 'B',
    sol: '由 <i>a</i><sub>4</sub> = <i>a</i><sub>2</sub><i>q</i><sup>2</sup> 得 <i>q</i><sup>2</sup> = 4。而 <i>a</i><sub>6</sub> = <i>a</i><sub>4</sub><i>q</i><sup>2</sup> = 8 × 4 = 32，与 <i>q</i> 的正负无关，答案是唯一的 32。'
  },
  {
    id: 'p09', ch: 'vector', type: 'choice', level: 1,
    stem: '已知向量 <b>a</b> = (2, 1)，<b>b</b> = (−1, 3)，则 <b>a</b>·<b>b</b> =',
    opts: ['−1', '1', '5', '−5'],
    ans: 'B',
    sol: '坐标形式的数量积是"对应坐标相乘再相加"：<b>a</b>·<b>b</b> = 2×(−1) + 1×3 = −2 + 3 = 1。'
  },
  {
    id: 'p10', ch: 'vector', type: 'choice', level: 2,
    stem: '复数 <i>z</i> = (2+i)(1−i) 的虚部是',
    opts: ['−1', '1', '−i', '3'],
    ans: 'A',
    sol: '展开：<i>z</i> = 2 − 2i + i − i<sup>2</sup> = 2 − i + 1 = 3 − i。虚部是 i 前面的系数，为 −1（注意虚部是实数 −1，不是 −i）。'
  },
  {
    id: 'p11', ch: 'deriv', type: 'choice', level: 2,
    stem: '函数 <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i> 的极大值是',
    opts: ['−2', '0', '2', '4'],
    ans: 'C',
    sol: '<i>f</i>&#8242;(<i>x</i>) = 3<i>x</i><sup>2</sup> − 3 = 3(<i>x</i>−1)(<i>x</i>+1)，令之为 0 得 <i>x</i> = ±1。在 <i>x</i> = −1 处导数由正变负，取极大值 <i>f</i>(−1) = −1 + 3 = 2；在 <i>x</i> = 1 处取极小值 −2。'
  },
  {
    id: 'p12', ch: 'prob', type: 'choice', level: 2,
    stem: '从 5 名男生和 4 名女生中任选 3 人，至少选中 1 名女生的选法共有',
    opts: ['64 种', '74 种', '84 种', '44 种'],
    ans: 'B',
    sol: '正难则反。总的选法 <i>C</i><sub>9</sub><sup>3</sup> = 84 种，其中"全是男生"的选法 <i>C</i><sub>5</sub><sup>3</sup> = 10 种。所以至少 1 名女生的选法为 84 − 10 = 74 种。'
  },
  {
    id: 'p13', ch: 'prob', type: 'choice', level: 3,
    stem: '(<i>x</i> + <span class="frac"><span class="num">1</span><span class="den"><i>x</i></span></span>)<sup>6</sup> 的展开式中的常数项是',
    opts: ['15', '20', '−20', '6'],
    ans: 'B',
    sol: '通项 <i>T</i><sub><i>k</i>+1</sub> = <i>C</i><sub>6</sub><sup><i>k</i></sup><i>x</i><sup>6−<i>k</i></sup>·<i>x</i><sup>−<i>k</i></sup> = <i>C</i><sub>6</sub><sup><i>k</i></sup><i>x</i><sup>6−2<i>k</i></sup>。常数项要求 <i>x</i> 的次数为 0，即 6 − 2<i>k</i> = 0，<i>k</i> = 3。所以常数项为 <i>C</i><sub>6</sub><sup>3</sup> = 20。'
  },
  {
    id: 'p14', ch: 'conic', type: 'choice', level: 1,
    stem: '抛物线 <i>y</i><sup>2</sup> = 8<i>x</i> 的焦点坐标是',
    opts: ['(2, 0)', '(4, 0)', '(0, 2)', '(−2, 0)'],
    ans: 'A',
    sol: '标准形式 <i>y</i><sup>2</sup> = 2<i>px</i> 中，2<i>p</i> = 8，所以 <i>p</i> = 4，焦点坐标为 (<span class="frac"><span class="num"><i>p</i></span><span class="den">2</span></span>, 0) = (2, 0)。'

  },
  /* ---- 填空 ---- */
  {
    id: 'p15', ch: 'sets', type: 'fill', level: 1,
    stem: '集合 {<i>a</i>, <i>b</i>, <i>c</i>} 的非空真子集共有 ______ 个。',
    ans: '6',
    sol: '<i>n</i> = 3，子集共 2<sup>3</sup> = 8 个。去掉它本身（1 个真子集条件）和空集，非空真子集为 2<sup>3</sup> − 2 = 6 个。'
  },
  {
    id: 'p16', ch: 'func', type: 'fill', level: 1,
    stem: '计算：log<sub>2</sub>8 + log<sub>3</sub><span class="frac"><span class="num">1</span><span class="den">9</span></span> = ______。',
    ans: '1',
    sol: 'log<sub>2</sub>8 = 3；log<sub>3</sub><span class="frac"><span class="num">1</span><span class="den">9</span></span> = log<sub>3</sub>3<sup>−2</sup> = −2。所以原式 = 3 + (−2) = 1。'
  },
  {
    id: 'p17', ch: 'trig', type: 'fill', level: 1,
    stem: '函数 <i>f</i>(<i>x</i>) = 2sin(2<i>x</i> − <span class="frac"><span class="num">π</span><span class="den">6</span></span>) 的最小正周期是 ______。',
    ans: 'π',
    sol: '对 <i>y</i> = <i>A</i>sin(ω<i>x</i>+φ)，最小正周期 <i>T</i> = <span class="frac"><span class="num">2π</span><span class="den">|ω|</span></span>。这里 ω = 2，故 <i>T</i> = π。'
  },
  {
    id: 'p18', ch: 'trig', type: 'fill', level: 2,
    stem: '已知 tanα = 2，则 sinαcosα = ______。',
    ans: '<span class="frac"><span class="num">2</span><span class="den">5</span></span>',
    sol: '把式子化为只含 tan 的形式：sinαcosα = <span class="frac"><span class="num">sinαcosα</span><span class="den">sin<sup>2</sup>α+cos<sup>2</sup>α</span></span>，分子分母同除 cos<sup>2</sup>α 得 <span class="frac"><span class="num">tanα</span><span class="den">tan<sup>2</sup>α+1</span></span> = <span class="frac"><span class="num">2</span><span class="den">4+1</span></span> = <span class="frac"><span class="num">2</span><span class="den">5</span></span>。'
  },
  {
    id: 'p19', ch: 'seq', type: 'fill', level: 1,
    stem: '等比数列 1, 2, 4, … 的前 10 项和为 ______。',
    ans: '1023',
    sol: '<i>a</i><sub>1</sub> = 1，<i>q</i> = 2，<i>q</i> ≠ 1。<i>S</i><sub>10</sub> = <span class="frac"><span class="num">1×(1−2<sup>10</sup>)</span><span class="den">1−2</span></span> = <span class="frac"><span class="num">1−1024</span><span class="den">−1</span></span> = 1023。'
  },
  {
    id: 'p20', ch: 'conic', type: 'fill', level: 1,
    stem: '双曲线 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">9</span></span> − <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den">16</span></span> = 1 的渐近线方程是 ______。',
    ans: '<i>y</i> = ±<span class="frac"><span class="num">4</span><span class="den">3</span></span><i>x</i>',
    sol: '<i>a</i><sup>2</sup> = 9，<i>a</i> = 3；<i>b</i><sup>2</sup> = 16，<i>b</i> = 4。渐近线为 <i>y</i> = ±<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span><i>x</i> = ±<span class="frac"><span class="num">4</span><span class="den">3</span></span><i>x</i>。'
  },
  {
    id: 'p21', ch: 'deriv', type: 'fill', level: 2,
    stem: '曲线 <i>y</i> = <i>x</i><sup>3</sup> 在点 (1, 1) 处的切线方程是 ______。',
    ans: '<i>y</i> = 3<i>x</i> − 2',
    sol: '<i>y</i>&#8242; = 3<i>x</i><sup>2</sup>，在 <i>x</i> = 1 处斜率 <i>k</i> = 3。由点斜式：<i>y</i> − 1 = 3(<i>x</i> − 1)，整理得 <i>y</i> = 3<i>x</i> − 2。'
  },
  {
    id: 'p22', ch: 'prob', type: 'fill', level: 2,
    stem: '随机变量 <i>X</i> ~ <i>B</i>(10, 0.4)，则 <i>D</i>(<i>X</i>) = ______。',
    ans: '2.4',
    sol: '二项分布的方差公式 <i>D</i>(<i>X</i>) = <i>np</i>(1−<i>p</i>) = 10 × 0.4 × 0.6 = 2.4。'
  },
  /* ---- 解答 ---- */
  {
    id: 'p23', ch: 'seq', type: 'solve', level: 2,
    stem: '已知数列 {<i>a</i><sub><i>n</i></sub>} 满足 <i>a</i><sub>1</sub> = 1，<i>a</i><sub><i>n</i>+1</sub> = 2<i>a</i><sub><i>n</i></sub> + 1（<i>n</i> ∈ <b>N</b>*）。求数列 {<i>a</i><sub><i>n</i></sub>} 的通项公式。',
    ans: '<i>a</i><sub><i>n</i></sub> = 2<sup><i>n</i></sup> − 1',
    sol: '递推式 <i>a</i><sub><i>n</i>+1</sub> = 2<i>a</i><sub><i>n</i></sub>+1 属于"<i>a</i><sub><i>n</i>+1</sub> = <i>pa</i><sub><i>n</i></sub>+<i>q</i>"型，用构造法。<br>两边同时加 1：<i>a</i><sub><i>n</i>+1</sub> + 1 = 2(<i>a</i><sub><i>n</i></sub> + 1)。<br>令 <i>b</i><sub><i>n</i></sub> = <i>a</i><sub><i>n</i></sub> + 1，则 <i>b</i><sub><i>n</i>+1</sub> = 2<i>b</i><sub><i>n</i></sub>，且 <i>b</i><sub>1</sub> = <i>a</i><sub>1</sub> + 1 = 2。<br>所以 {<i>b</i><sub><i>n</i></sub>} 是首项为 2、公比为 2 的等比数列，<i>b</i><sub><i>n</i></sub> = 2·2<sup><i>n</i>−1</sup> = 2<sup><i>n</i></sup>。<br>故 <i>a</i><sub><i>n</i></sub> = <i>b</i><sub><i>n</i></sub> − 1 = 2<sup><i>n</i></sup> − 1。<br>检验：<i>n</i> = 1 时 2 − 1 = 1 ✓。'
  },
  {
    id: 'p24', ch: 'trig', type: 'solve', level: 2,
    stem: '在 △<i>ABC</i> 中，<i>a</i> = 2，<i>b</i> = 3，<i>C</i> = 60°。求边 <i>c</i> 的长及 △<i>ABC</i> 的面积。',
    ans: '<i>c</i> = √7，<i>S</i> = <span class="frac"><span class="num">3√3</span><span class="den">2</span></span>',
    sol: '已知两边及夹角，直接用余弦定理：<br><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i>cos<i>C</i> = 4 + 9 − 2×2×3×<span class="frac"><span class="num">1</span><span class="den">2</span></span> = 13 − 6 = 7，所以 <i>c</i> = √7。<br>面积 <i>S</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>ab</i>sin<i>C</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>×2×3×<span class="frac"><span class="num">√3</span><span class="den">2</span></span> = <span class="frac"><span class="num">3√3</span><span class="den">2</span></span>。'
  },
  {
    id: 'p25', ch: 'deriv', type: 'solve', level: 2,
    stem: '已知函数 <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 9<i>x</i> + 5。求 <i>f</i>(<i>x</i>) 的单调区间与极值。',
    ans: '递增区间 (−∞, −1) 与 (3, +∞)，递减区间 (−1, 3)；极大值 <i>f</i>(−1) = 10，极小值 <i>f</i>(3) = −22',
    sol: '<i>f</i>&#8242;(<i>x</i>) = 3<i>x</i><sup>2</sup> − 6<i>x</i> − 9 = 3(<i>x</i><sup>2</sup>−2<i>x</i>−3) = 3(<i>x</i>−3)(<i>x</i>+1)。<br>令 <i>f</i>&#8242;(<i>x</i>) &gt; 0，得 <i>x</i> &lt; −1 或 <i>x</i> &gt; 3，即递增区间为 (−∞, −1) 和 (3, +∞)。<br>令 <i>f</i>&#8242;(<i>x</i>) &lt; 0，得 −1 &lt; <i>x</i> &lt; 3，即递减区间为 (−1, 3)。<br>导数在 <i>x</i> = −1 处由正变负，取极大值 <i>f</i>(−1) = −1 − 3 + 9 + 5 = 10。<br>导数在 <i>x</i> = 3 处由负变正，取极小值 <i>f</i>(3) = 27 − 27 − 27 + 5 = −22。'
  },
  {
    id: 'p26', ch: 'conic', type: 'solve', level: 3,
    stem: '已知椭圆 <span class="frac"><span class="num"><i>x</i><sup>2</sup></span><span class="den">25</span></span> + <span class="frac"><span class="num"><i>y</i><sup>2</sup></span><span class="den">9</span></span> = 1 的左、右焦点分别为 <i>F</i><sub>1</sub>、<i>F</i><sub>2</sub>，点 <i>P</i> 在椭圆上且 ∠<i>F</i><sub>1</sub><i>PF</i><sub>2</sub> = 60°，求 △<i>F</i><sub>1</sub><i>PF</i><sub>2</sub> 的面积。',
    ans: '3√3',
    sol: '由椭圆方程得 <i>a</i> = 5，<i>b</i> = 3，<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup>−<i>b</i><sup>2</sup> = 25 − 9 = 16，<i>c</i> = 4，故 |<i>F</i><sub>1</sub><i>F</i><sub>2</sub>| = 8。<br>由椭圆定义，|<i>PF</i><sub>1</sub>| + |<i>PF</i><sub>2</sub>| = 2<i>a</i> = 10。<br>在 △<i>F</i><sub>1</sub><i>PF</i><sub>2</sub> 中用余弦定理：<br>64 = |<i>PF</i><sub>1</sub>|<sup>2</sup> + |<i>PF</i><sub>2</sub>|<sup>2</sup> − 2|<i>PF</i><sub>1</sub>||<i>PF</i><sub>2</sub>|cos60°<br>= (|<i>PF</i><sub>1</sub>| + |<i>PF</i><sub>2</sub>|)<sup>2</sup> − 2|<i>PF</i><sub>1</sub>||<i>PF</i><sub>2</sub>| − |<i>PF</i><sub>1</sub>||<i>PF</i><sub>2</sub>|<br>= 100 − 3|<i>PF</i><sub>1</sub>||<i>PF</i><sub>2</sub>|。<br>所以 3|<i>PF</i><sub>1</sub>||<i>PF</i><sub>2</sub>| = 36，|<i>PF</i><sub>1</sub>||<i>PF</i><sub>2</sub>| = 12。<br>面积 <i>S</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>×12×sin60° = <span class="frac"><span class="num">1</span><span class="den">2</span></span>×12×<span class="frac"><span class="num">√3</span><span class="den">2</span></span> = 3√3。<br><b>秒杀验证</b>：焦点三角形面积公式 <i>S</i> = <i>b</i><sup>2</sup>tan<span class="frac"><span class="num">θ</span><span class="den">2</span></span> = 9 × tan30° = 9 × <span class="frac"><span class="num">√3</span><span class="den">3</span></span> = 3√3 ✓。'
  },
  {
    id: 'p27', ch: 'deriv', type: 'solve', level: 3,
    stem: '已知函数 <i>f</i>(<i>x</i>) = ln<i>x</i> − <i>ax</i>（<i>a</i> ∈ <b>R</b>）。讨论 <i>f</i>(<i>x</i>) 的单调性。',
    ans: '当 <i>a</i> ≤ 0 时，<i>f</i>(<i>x</i>) 在 (0, +∞) 上单调递增；当 <i>a</i> &gt; 0 时，在 (0, <span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>) 上递增，在 (<span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>, +∞) 上递减',
    sol: '定义域为 (0, +∞)。<br><i>f</i>&#8242;(<i>x</i>) = <span class="frac"><span class="num">1</span><span class="den"><i>x</i></span></span> − <i>a</i> = <span class="frac"><span class="num">1 − <i>ax</i></span><span class="den"><i>x</i></span></span>，分母 <i>x</i> &gt; 0，符号由分子 1 − <i>ax</i> 决定。<br>① 当 <i>a</i> ≤ 0 时，−<i>ax</i> ≥ 0，故 1 − <i>ax</i> &gt; 0 恒成立，<i>f</i>&#8242;(<i>x</i>) &gt; 0，<i>f</i>(<i>x</i>) 在 (0, +∞) 上单调递增。<br>② 当 <i>a</i> &gt; 0 时，令 <i>f</i>&#8242;(<i>x</i>) &gt; 0 得 <i>x</i> &lt; <span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>，所以 <i>f</i>(<i>x</i>) 在 (0, <span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>) 上递增；令 <i>f</i>&#8242;(<i>x</i>) &lt; 0 得 <i>x</i> &gt; <span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>，在 (<span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span>, +∞) 上递减。<br>综上即可。'
  },
  {
    id: 'p28', ch: 'prob', type: 'solve', level: 2,
    stem: '从 1, 2, 3, 4, 5 中任取 3 个不同数字，组成无重复数字的三位数。求所得三位数是偶数的概率。',
    ans: '<span class="frac"><span class="num">2</span><span class="den">5</span></span>',
    sol: '总的三位数个数：从 5 个数字中选 3 个并排列，<i>A</i><sub>5</sub><sup>3</sup> = 5×4×3 = 60 个。<br>是偶数则个位必须为偶数，可选 2 或 4。<br>个位为 2 时，剩下两位从其余 4 个数字中选排：<i>A</i><sub>4</sub><sup>2</sup> = 4×3 = 12 个；个位为 4 时同理 12 个。<br>偶数共 12 + 12 = 24 个。<br>所以概率 <i>P</i> = <span class="frac"><span class="num">24</span><span class="den">60</span></span> = <span class="frac"><span class="num">2</span><span class="den">5</span></span>。'
  },
  {
    id: 'p29', ch: 'seq', type: 'solve', level: 2,
    stem: '已知数列 {<i>a</i><sub><i>n</i></sub>} 的前 <i>n</i> 项和 <i>S</i><sub><i>n</i></sub> = <i>n</i><sup>2</sup> + <i>n</i>，求数列的通项公式 <i>a</i><sub><i>n</i></sub>。',
    ans: '<i>a</i><sub><i>n</i></sub> = 2<i>n</i>',
    sol: '当 <i>n</i> ≥ 2 时，<i>a</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (<i>n</i><sup>2</sup>+<i>n</i>) − [(<i>n</i>−1)<sup>2</sup>+(<i>n</i>−1)] = <i>n</i><sup>2</sup>+<i>n</i> − (<i>n</i><sup>2</sup>−<i>n</i>) = 2<i>n</i>。<br>当 <i>n</i> = 1 时，<i>a</i><sub>1</sub> = <i>S</i><sub>1</sub> = 1 + 1 = 2，也满足 <i>a</i><sub><i>n</i></sub> = 2<i>n</i>。<br>所以对一切 <i>n</i> ∈ <b>N</b>*，<i>a</i><sub><i>n</i></sub> = 2<i>n</i>。<br><b>提醒</b>：<i>n</i> = 1 必须单独验证，若不符合则要写成分段形式。'
  },
  {
    id: 'p30', ch: 'solid', type: 'solve', level: 3,
    stem: '在直三棱柱 <i>ABC</i>-<i>A</i><sub>1</sub><i>B</i><sub>1</sub><i>C</i><sub>1</sub> 中，<i>AB</i> ⊥ <i>AC</i>，<i>AB</i> = <i>AC</i> = 2，<i>AA</i><sub>1</sub> = 3。求点 <i>A</i><sub>1</sub> 到平面 <i>AB</i><sub>1</sub><i>C</i> 的距离。',
    ans: '<span class="frac"><span class="num">6√13</span><span class="den">13</span></span>',
    sol: '<i>AB</i> ⊥ <i>AC</i> 且柱体为直三棱柱，故 <i>AA</i><sub>1</sub> ⊥ 底面，三线两两垂直，可以 <i>A</i> 为原点建系。<br>取 <b>AB</b>、<b>AC</b>、<b>AA</b><sub>1</sub> 方向为 <i>x</i>、<i>y</i>、<i>z</i> 轴，则<br><i>A</i>(0,0,0)，<i>B</i>(2,0,0)，<i>C</i>(0,2,0)，<i>A</i><sub>1</sub>(0,0,3)，<i>B</i><sub>1</sub>(2,0,3)。<br>设平面 <i>AB</i><sub>1</sub><i>C</i> 的法向量 <b>n</b> = (<i>x</i>, <i>y</i>, <i>z</i>)。<br><b>AB</b><sub>1</sub> = (2,0,3)，<b>AC</b> = (0,2,0)。<br>由 <b>n</b>·<b>AB</b><sub>1</sub> = 2<i>x</i> + 3<i>z</i> = 0 与 <b>n</b>·<b>AC</b> = 2<i>y</i> = 0，得 <i>y</i> = 0，取 <i>x</i> = 3，则 <i>z</i> = −2，故 <b>n</b> = (3, 0, −2)。<br>点 <i>A</i><sub>1</sub> 到平面的距离 <i>d</i> = <span class="frac"><span class="num">|<b>AA</b><sub>1</sub>·<b>n</b>|</span><span class="den">|<b>n</b>|</span></span> = <span class="frac"><span class="num">|0×3 + 0×0 + 3×(−2)|</span><span class="den">√13</span></span> = <span class="frac"><span class="num">6</span><span class="den">√13</span></span> = <span class="frac"><span class="num">6√13</span><span class="den">13</span></span>。'
  },
  {
    id: 'p31', ch: 'ineq', type: 'solve', level: 2,
    stem: '已知 <i>a</i> &gt; 0，<i>b</i> &gt; 0，且 <i>a</i> + <i>b</i> = 1。求 <span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">4</span><span class="den"><i>b</i></span></span> 的最小值。',
    ans: '9',
    sol: '这是"乘 1 法"的经典结构。因为 <i>a</i> + <i>b</i> = 1，可以把原式乘以 (<i>a</i>+<i>b</i>)：<br>(<span class="frac"><span class="num">1</span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">4</span><span class="den"><i>b</i></span></span>)(<i>a</i>+<i>b</i>) = 1 + <span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">4<i>a</i></span><span class="den"><i>b</i></span></span> + 4 = 5 + <span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">4<i>a</i></span><span class="den"><i>b</i></span></span>。<br>由基本不等式，<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span> + <span class="frac"><span class="num">4<i>a</i></span><span class="den"><i>b</i></span></span> ≥ 2√(<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span>·<span class="frac"><span class="num">4<i>a</i></span><span class="den"><i>b</i></span></span>) = 2√4 = 4。<br>所以原式 ≥ 5 + 4 = 9。<br>取等条件：<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span> = <span class="frac"><span class="num">4<i>a</i></span><span class="den"><i>b</i></span></span>，即 <i>b</i><sup>2</sup> = 4<i>a</i><sup>2</sup>，也就是 <i>b</i> = 2<i>a</i>；结合 <i>a</i>+<i>b</i> = 1 得 <i>a</i> = <span class="frac"><span class="num">1</span><span class="den">3</span></span>，<i>b</i> = <span class="frac"><span class="num">2</span><span class="den">3</span></span>，符合 <i>a</i>, <i>b</i> &gt; 0。<br>故最小值为 9。'
  },
  {
    id: 'p32', ch: 'prob', type: 'solve', level: 3,
    stem: '已知随机变量 <i>X</i> 服从正态分布 <i>N</i>(100, <i>σ</i><sup>2</sup>)，且 <i>P</i>(<i>X</i> &gt; 120) = 0.2。求 <i>P</i>(80 &lt; <i>X</i> &lt; 100)。',
    ans: '0.3',
    sol: '正态曲线关于均值 <i>μ</i> = 100 对称，所以 <i>P</i>(<i>X</i> &lt; 80) = <i>P</i>(<i>X</i> &gt; 120) = 0.2。<br>于是 <i>P</i>(80 ≤ <i>X</i> ≤ 120) = 1 − 0.2 − 0.2 = 0.6。<br>再由对称性，区间 (80, 100) 与 (100, 120) 概率相等，各占一半：<br><i>P</i>(80 &lt; <i>X</i> &lt; 100) = 0.6 ÷ 2 = 0.3。'
  }
];
