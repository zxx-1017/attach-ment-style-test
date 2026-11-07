"use strict";

const APP_TITLE = "靠近 · 依恋类型自测";
const CUTOFF = 3;
const MIXED_BAND = 0.2;

const QUESTIONS = [
  {
    id: "a01",
    dimension: "anxiety",
    text: "当我在意的人没有及时回应时，我会很难把注意力放在其他事情上。",
  },
  {
    id: "a02",
    dimension: "anxiety",
    text: "在亲近关系里，我会担心对方其实没有我以为的那么在意我。",
  },
  {
    id: "a03",
    dimension: "anxiety",
    text: "关系出现距离感时，我会反复确认对方是否还愿意靠近我。",
  },
  {
    id: "a04",
    dimension: "anxiety",
    text: "我容易从对方语气或表情的小变化里，猜测关系是不是出了问题。",
  },
  {
    id: "a05",
    dimension: "anxiety",
    text: "当伴侣需要独处时，我可能会担心自己正在被疏远。",
  },
  {
    id: "a06",
    dimension: "anxiety",
    text: "我常常需要得到明确回应，才能确认自己在关系里是被重视的。",
  },
  {
    id: "a07",
    dimension: "anxiety",
    text: "如果和亲近的人发生分歧，我会很难停下来，直到关系重新恢复亲密。",
  },
  {
    id: "a08",
    dimension: "anxiety",
    text: "当我感到不安时，很难直接说清楚自己需要什么。",
  },
  {
    id: "a09",
    dimension: "anxiety",
    text: "当关系不够确定时，我会花很多时间分析对方的想法。",
  },
  {
    id: "a10",
    dimension: "anxiety",
    text: "我很在意对方回复消息的速度或语气变化。",
  },
  {
    id: "a11",
    dimension: "anxiety",
    text: "我担心自己表达需要太多，会让对方离开。",
  },
  {
    id: "a12",
    dimension: "anxiety",
    text: "即使对方暂时没有回应，我也能安心做自己的事。",
    reverse: true,
  },
  {
    id: "a13",
    dimension: "anxiety",
    text: "我能相信关系中的短暂距离，并不一定意味着被抛弃。",
    reverse: true,
  },
  {
    id: "a14",
    dimension: "anxiety",
    text: "当我不安时，我能够先安抚自己，再决定要不要沟通。",
    reverse: true,
  },
  {
    id: "v01",
    dimension: "avoidance",
    text: "我更愿意独自处理压力，而不是向亲近的人寻求安慰。",
  },
  {
    id: "v02",
    dimension: "avoidance",
    text: "当别人想和我深入谈感受时，我会本能地想拉开一点距离。",
  },
  {
    id: "v03",
    dimension: "avoidance",
    text: "我通常不太愿意让伴侣知道我的脆弱和不安。",
  },
  {
    id: "v04",
    dimension: "avoidance",
    text: "在关系里，我需要大量独处空间，否则会觉得被挤压。",
  },
  {
    id: "v05",
    dimension: "avoidance",
    text: "依赖别人会让我不太自在。",
  },
  {
    id: "v06",
    dimension: "avoidance",
    text: "遇到冲突时，我倾向于先回避或冷却，而不是马上沟通。",
  },
  {
    id: "v07",
    dimension: "avoidance",
    text: "我不太习惯主动表达想念或需要。",
  },
  {
    id: "v08",
    dimension: "avoidance",
    text: "即使亲近的人愿意支持我，我也更愿意自己解决。",
  },
  {
    id: "v09",
    dimension: "avoidance",
    text: "别人过度靠近时，我会想退后一点。",
  },
  {
    id: "v10",
    dimension: "avoidance",
    text: "关系变得很亲密时，我会感到些许压力。",
  },
  {
    id: "v11",
    dimension: "avoidance",
    text: "向亲近的人求助，对我来说是自然的。",
    reverse: true,
  },
  {
    id: "v12",
    dimension: "avoidance",
    text: "我能比较直接地表达自己的感受和需要。",
    reverse: true,
  },
  {
    id: "v13",
    dimension: "avoidance",
    text: "和伴侣讨论关系问题，通常不会让我想逃开。",
    reverse: true,
  },
  {
    id: "v14",
    dimension: "avoidance",
    text: "我能在依赖对方和保持独立之间找到平衡。",
    reverse: true,
  },
];

const TYPE_DATA = {
  secure: {
    name: "安全型",
    title: "安全型",
    alias: "低焦虑 · 低回避",
    color: "#426b60",
    pale: "#dfe9e4",
    tagline: "你更容易在亲密与独立之间找到呼吸感。",
    short:
      "既能靠近，也能保有自己；在关系里更容易表达需要，也更能容纳彼此的空间。",
    mapPosition: { x: 26, y: 26 },
    strengths: [
      "较能直接表达需要，也愿意听见对方的感受。",
      "亲密感通常不会让你失去自我，独处也不会被理解成疏远。",
      "面对分歧时，较容易把注意力放在解决问题和修复连接上。",
    ],
    challenges: [
      "安全型也会不安，不必把所有波动都理解成自己的问题。",
      "过度相信关系会自动稳固，可能让你忽略对方需要明确回应。",
      "在对方压力很大时，单靠稳定未必足够，仍需要具体沟通。",
    ],
    suggestions: [
      "继续保持表达与倾听之间的双向流动。",
      "把“我最近有点需要你”说成具体请求，比如一次散步或十分钟的专注对话。",
      "当关系出现距离时，先核对事实，再决定是否需要处理。",
    ],
    guide:
      "安全型不是永远镇定，而是更能把不安转化为可沟通的内容。亲密与独立在这里不是对立选项。",
    withThem:
      "回应清楚、边界稳定、说到做到，通常比过度试探更能让关系保持松弛。",
  },
  anxious: {
    name: "焦虑专注型",
    title: "焦虑专注型",
    alias: "高焦虑 · 低回避",
    color: "#5d7588",
    pale: "#e2e9ed",
    tagline: "你很在意连接，也常比别人更快察觉关系里的小变化。",
    short:
      "对亲密有很强的需要，能够敏锐感知关系温度，也容易在不确定时反复确认。",
    mapPosition: { x: 26, y: 74 },
    strengths: [
      "对关系变化敏锐，常常能先发现需要被照顾的情绪。",
      "愿意投入亲密，也愿意为重要关系付出时间和注意力。",
      "表达感受的能力通常不弱，只是需要更多确定感来承载表达。",
    ],
    challenges: [
      "对方回应变慢时，容易把“暂时没空”理解成“关系变淡”。",
      "反复确认可能带来短暂安心，却很难真正结束不安。",
      "为了维持亲密，有时会压住自己的需要，或过度迁就。",
    ],
    suggestions: [
      "不安出现时，先给感受命名：“我现在有些害怕被忽略。”",
      "把确认请求改成具体、可回应的问题，减少开放式揣测。",
      "给自己安排不依赖关系反馈的小活动，练习在自己的节奏里安定下来。",
    ],
    guide:
      "焦虑专注型常被称为“痴迷型”，名字听起来很重，但它描述的是对连接的强烈关注，而不是一个人好不好。",
    withThem:
      "及时说明近况、避免冷处理，并主动给出可预期的回应，会比反复让你猜更有效。",
  },
  avoidant: {
    name: "回避疏离型",
    title: "回避疏离型",
    alias: "低焦虑 · 高回避",
    color: "#a47c38",
    pale: "#eee5d4",
    tagline: "你很重视独立，也习惯先靠自己把情绪安放好。",
    short:
      "独处与自主让你更有安全感；面对高浓度亲密或情绪表达时，常会本能地想保留空间。",
    mapPosition: { x: 74, y: 26 },
    strengths: [
      "自我依靠能力强，遇到压力时通常能先稳住自己的生活。",
      "尊重个人空间，也较少因为短暂的距离感而失去安全感。",
      "在需要理性处理问题时，往往能保持清晰和边界。",
    ],
    challenges: [
      "需要空间时如果没有说明，对方可能理解成冷淡或拒绝。",
      "习惯独自消化情绪，会让亲近的人难以真正参与你的感受。",
      "冲突时先退开可能有效，但退得太久会让问题更难回到对话。",
    ],
    suggestions: [
      "在需要独处时补一句：“我需要一点时间整理，不是要离开关系。”",
      "从低强度表达开始，比如先说一件小压力，而不是一次谈完所有感受。",
      "把“我自己来”偶尔换成“你愿意陪我一起想办法吗”。",
    ],
    guide:
      "回避疏离型不等于不需要爱，更常见的体验是：靠近有时会带来压力，所以会先保护自己的空间。",
    withThem:
      "尊重他们需要缓冲的时间，同时把边界和期待说清楚，比追问“你到底在不在乎”更容易建立信任。",
  },
  fearful: {
    name: "恐惧回避型",
    title: "恐惧回避型",
    alias: "高焦虑 · 高回避",
    color: "#92616b",
    pale: "#eee1e3",
    tagline: "你可能既渴望靠近，也会在真正靠近时本能地保护自己。",
    short:
      "亲密对你既有吸引力，也可能唤起不确定和压力；想靠近与想退开有时会同时出现。",
    mapPosition: { x: 74, y: 74 },
    strengths: [
      "对关系中的风险与自己的感受都很敏感。",
      "通常会认真观察对方是否可靠，不轻易把信任交出去。",
      "一旦感到足够安全，也能展现出细腻、投入和照顾他人的一面。",
    ],
    challenges: [
      "靠近时担心受伤，退开时又担心失去，容易在关系里反复摆动。",
      "情绪负荷较高时，可能既想确认对方，又难以把真实需要说出口。",
      "过去的受伤经验有时会被带到新的关系里，让当下变得比实际更危险。",
    ],
    suggestions: [
      "把节奏放慢，先建立可预测的小承诺，而不是一次证明整段关系的安全。",
      "遇到想逃开的冲动时，先记录下来，等情绪下降后再决定是否沟通。",
      "如果不安长期影响生活，考虑和咨询师一起梳理关系经验，不必独自硬撑。",
    ],
    guide:
      "恐惧回避型也常被称为“矛盾型”。它不是一个固定的坏结局，更多是在提醒你：靠近与保护自己这两件事都真实存在。",
    withThem:
      "一致、可预测和尊重边界最重要。避免忽冷忽热，也别把退开直接理解成不在乎。",
  },
};

TYPE_DATA.centered = {
  name: "居中混合倾向",
  title: "居中混合倾向",
  alias: "焦虑与回避均在中间带",
  color: "#68746f",
  pale: "#e6e8e4",
  tagline: "你的两个维度都靠近中间，暂时更适合保留弹性，而不是急着归入单一类型。",
  short:
    "焦虑与回避都没有明显偏向一端；在不同关系或压力情境下，你的模式可能呈现不同侧面。",
  strengths: [
    "对亲密与独立两端都保留了一定弹性，不一定会被单一模式困住。",
    "可能更容易根据关系情境调整距离与表达方式。",
    "处在中间带，也意味着你有空间观察自己在不同关系里的变化。",
  ],
  challenges: [
    "单次结果可能不足以描述你在不同关系中的稳定模式。",
    "压力较大时，倾向可能更明显地倒向焦虑或回避一端。",
    "中间分容易让人忽略真正影响自己的具体情境。",
  ],
  suggestions: [
    "回想最近一次关系压力，看看自己更常靠近确认，还是先退开整理。",
    "换一个关系语境后再次作答，比较两次结果是否不同。",
    "不必急着选择类型，先记录哪种情境最容易让你失去安全感。",
  ],
  guide:
    "居中混合不是第五种人格，而是表示这一次的双轴结果落在四象限交界附近，不足以稳定归入某一种单一倾向。",
  withThem:
    "避免用一次测试替对方定型，关注具体情境中的表达、边界和可预测性更重要。",
};

const TYPE_ORDER = ["secure", "anxious", "avoidant", "fearful"];

const state = {
  view: "home",
  currentQuestion: 0,
  answers: {},
  result: null,
  lastFocusedElement: null,
  shareIncludeScores: false,
};

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");

function icon(name, className = "icon") {
  return `<svg class="${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function siteHeader({ back = false, compact = false } = {}) {
  const brandAction = back
    ? '<button class="brand" type="button" data-action="go-home" aria-label="回到首页">'
    : '<button class="brand" type="button" data-action="go-home" aria-label="回到首页">';

  return `
    <header class="site-header">
      ${brandAction}
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-copy">
          <span class="brand-name">靠近</span>
          <span class="brand-sub">Attachment self-check</span>
        </span>
      </button>
      <nav class="header-actions" aria-label="主导航">
        ${
          compact
            ? `
              <button class="icon-button" type="button" data-action="open-about" aria-label="关于与免责声明">
                ${icon("info", "icon")}
              </button>
            `
            : `
              <button class="text-button" type="button" data-action="open-about">
                ${icon("info", "icon icon-sm")}
                <span>关于与免责声明</span>
              </button>
            `
        }
      </nav>
    </header>
  `;
}

function siteFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <p style="margin:0">仅作依恋科普与自我觉察，不构成心理诊断或治疗建议。</p>
        <div class="footer-actions">
          <button class="text-button" type="button" data-action="open-about">量表说明</button>
          <button class="text-button" type="button" data-action="open-types">四种类型</button>
        </div>
      </div>
    </footer>
  `;
}

function homeView() {
  return `
    <div class="page home">
      ${siteHeader({ compact: true })}
      <main class="home-entry">
        <div class="banner-decor" aria-hidden="true">
          <span class="banner-halo"></span>
          <span class="banner-ring banner-ring-one"></span>
          <span class="banner-ring banner-ring-two"></span>
          <span class="banner-triangle banner-triangle-one"></span>
          <span class="banner-triangle banner-triangle-two"></span>
          <span class="banner-triangle banner-triangle-three"></span>
          <span class="banner-spark banner-spark-one"></span>
          <span class="banner-spark banner-spark-two"></span>
          <span class="banner-spark banner-spark-three"></span>
          <span class="banner-spark banner-spark-four"></span>
          <span class="banner-spark banner-spark-five"></span>
        </div>
        <section class="entry-window" aria-labelledby="home-title">
          <h1 class="hero-title entry-title" id="home-title">依恋类型<em>自测</em></h1>
          <button class="button button-primary entry-start" type="button" data-action="start-test">
            开始测试
            ${icon("arrow-right", "icon")}
          </button>
        </section>
      </main>
    </div>
  `;
}

function testView() {
  const question = QUESTIONS[state.currentQuestion];
  const selected = state.answers[question.id];
  const total = QUESTIONS.length;
  const current = state.currentQuestion + 1;
  const progress = (current / total) * 100;
  const isLast = current === total;

  return `
    <div class="page test-page">
      <header class="test-header">
        <div class="test-header-inner">
          <span class="brand">
            <span class="brand-mark" aria-hidden="true"></span>
            <span class="brand-copy">
              <span class="brand-name">靠近</span>
              <span class="brand-sub">Attachment self-check</span>
            </span>
          </span>
          <div class="test-progress-copy">
            <strong>${String(current).padStart(2, "0")} / ${total}</strong>
            <span>第 ${current} 题</span>
            <button class="exit-button" type="button" data-action="exit-test">退出测试</button>
          </div>
        </div>
        <div
          class="progress-track"
          role="progressbar"
          aria-label="测试进度"
          aria-valuemin="1"
          aria-valuemax="${total}"
          aria-valuenow="${current}"
          aria-valuetext="第 ${current} 题，共 ${total} 题"
        >
          <div class="progress-bar" style="width:${progress}%"></div>
        </div>
      </header>

      <main class="test-main" id="test-main">
        <div class="context-note">
          ${icon("info", "icon icon-sm")}
          <span>请以过去或当前亲密关系中的普遍感受为准。没有伴侣，也可以按与亲近的人相处时的一般模式作答。</span>
        </div>

        <section class="question-shell" aria-labelledby="question-title">
          <p class="question-kicker">${question.dimension === "anxiety" ? "关系中的确定感" : "关系中的空间感"}</p>
          <h1 class="question-title" id="question-title" tabindex="-1">${question.text}</h1>
          <fieldset class="options" style="border:0;padding:0;margin-left:0;margin-right:0">
            <legend class="sr-only">请选择一个最符合你真实体验的选项</legend>
            ${["非常不同意", "不太同意", "中立", "比较同意", "非常同意"]
              .map(
                (label, index) => `
                <label class="option">
                  <input
                    type="radio"
                    name="answer"
                    value="${index + 1}"
                    ${selected === index + 1 ? "checked" : ""}
                    data-action="answer"
                  />
                  <span class="option-inner">
                    <span class="option-number">${index + 1}</span>
                    <span class="option-label">${label}</span>
                  </span>
                </label>
              `,
              )
              .join("")}
          </fieldset>
          <div class="scale-anchors" aria-hidden="true">
            <span>与我不符</span>
            <span>与我很符</span>
          </div>
        </section>

        <div class="test-controls">
          <button
            class="button button-secondary button-sm"
            type="button"
            data-action="prev-question"
            ${state.currentQuestion === 0 ? "disabled" : ""}
          >
            ${icon("arrow-left", "icon")}
            上一题
          </button>
          <div class="test-controls-right">
            <span class="answer-status">${selected ? "已选择" : "选择后继续"}</span>
            <button
              class="button button-primary button-sm button-wide"
              type="button"
              data-action="${isLast ? "show-result" : "next-question"}"
              ${selected ? "" : "disabled"}
            >
              ${isLast ? "查看结果" : "下一题"}
              ${icon(isLast ? "spark" : "arrow-right", "icon")}
            </button>
          </div>
        </div>
      </main>
    </div>
  `;
}

function getDimensionScore(dimension) {
  const items = QUESTIONS.filter((question) => question.dimension === dimension);
  const total = items.reduce((sum, question) => {
    const answer = Number(state.answers[question.id]);
    const score = question.reverse ? 6 - answer : answer;
    return sum + score;
  }, 0);

  return total / items.length;
}

function classify(anxiety, avoidance) {
  const highAnxiety = anxiety >= CUTOFF;
  const highAvoidance = avoidance >= CUTOFF;
  if (!highAnxiety && !highAvoidance) return "secure";
  if (highAnxiety && !highAvoidance) return "anxious";
  if (!highAnxiety && highAvoidance) return "avoidant";
  return "fearful";
}

function tendencyLabel(score) {
  if (score < 2.65) return "偏低";
  if (score > 3.35) return "偏高";
  return "中间";
}

function calculateResult() {
  const anxiety = getDimensionScore("anxiety");
  const avoidance = getDimensionScore("avoidance");
  const anxietyDistance = Math.abs(anxiety - CUTOFF);
  const avoidanceDistance = Math.abs(avoidance - CUTOFF);
  const mixedAxes = [];

  if (anxietyDistance <= MIXED_BAND) mixedAxes.push("焦虑");
  if (avoidanceDistance <= MIXED_BAND) mixedAxes.push("回避");
  const centered = mixedAxes.length === 2;
  const typeKey = centered ? "centered" : classify(anxiety, avoidance);

  return {
    typeKey,
    anxiety,
    avoidance,
    mixed: mixedAxes.length > 0,
    centered,
    mixedAxes,
  };
}

function chartPoint(result) {
  const x = 110 + ((result.avoidance - 1) / 4) * 330;
  const y = 320 - ((result.anxiety - 1) / 4) * 240;
  return { x, y };
}

function resultChart(result) {
  const point = chartPoint(result);
  return `
    <svg
      class="result-chart"
      viewBox="0 0 550 430"
      role="img"
      aria-labelledby="result-chart-title result-chart-desc"
    >
      <title id="result-chart-title">你的依恋双轴位置</title>
      <desc id="result-chart-desc">横轴回避倾向为${tendencyLabel(result.avoidance)}，纵轴焦虑倾向为${tendencyLabel(result.anxiety)}，落点最接近${TYPE_DATA[result.typeKey].name}。</desc>
      <rect x="110" y="80" width="165" height="120" fill="#e2e9ed"></rect>
      <rect x="275" y="80" width="165" height="120" fill="#eee1e3"></rect>
      <rect x="110" y="200" width="165" height="120" fill="#dfe9e4"></rect>
      <rect x="275" y="200" width="165" height="120" fill="#eee5d4"></rect>
      <line x1="110" y1="80" x2="440" y2="80" stroke="#d8d3c9"></line>
      <line x1="110" y1="200" x2="440" y2="200" stroke="#a9a69d" stroke-dasharray="4 4"></line>
      <line x1="275" y1="80" x2="275" y2="320" stroke="#a9a69d" stroke-dasharray="4 4"></line>
      <line x1="110" y1="320" x2="440" y2="320" stroke="#d8d3c9"></line>
      <line x1="110" y1="80" x2="110" y2="320" stroke="#d8d3c9"></line>

      <text class="chart-quadrant-label" x="126" y="111">焦虑专注型</text>
      <text class="chart-quadrant-sub" x="126" y="129">高焦虑 · 低回避</text>
      <text class="chart-quadrant-label" x="291" y="111">恐惧回避型</text>
      <text class="chart-quadrant-sub" x="291" y="129">高焦虑 · 高回避</text>
      <text class="chart-quadrant-label" x="126" y="231">安全型</text>
      <text class="chart-quadrant-sub" x="126" y="249">低焦虑 · 低回避</text>
      <text class="chart-quadrant-label" x="291" y="231">回避疏离型</text>
      <text class="chart-quadrant-sub" x="291" y="249">低焦虑 · 高回避</text>

      <text class="chart-axis-label" x="275" y="38" text-anchor="middle">焦虑倾向 ↑</text>
      <text class="chart-axis-label" x="275" y="365" text-anchor="middle">焦虑倾向 ↓</text>
      <text class="chart-axis-label" x="95" y="205" text-anchor="end">回避 ←</text>
      <text class="chart-axis-label" x="455" y="205">回避 →</text>

      <circle cx="${point.x}" cy="${point.y}" r="18" fill="#ffffff" opacity="0.82"></circle>
      <circle cx="${point.x}" cy="${point.y}" r="10" fill="${TYPE_DATA[result.typeKey].color}" stroke="#ffffff" stroke-width="3"></circle>
      <line x1="${point.x}" y1="${point.y + 14}" x2="${point.x}" y2="320" stroke="${TYPE_DATA[result.typeKey].color}" stroke-width="1" stroke-dasharray="2 4" opacity="0.55"></line>
      <line x1="110" y1="${point.y}" x2="${point.x - 14}" y2="${point.y}" stroke="${TYPE_DATA[result.typeKey].color}" stroke-width="1" stroke-dasharray="2 4" opacity="0.55"></line>
      <text
        x="${Math.min(Math.max(point.x + 18, 120), 388)}"
        y="${Math.max(point.y - 16, 96)}"
        fill="${TYPE_DATA[result.typeKey].color}"
        font-size="11"
        font-weight="700"
      >你的位置</text>
    </svg>
  `;
}

function resultView() {
  if (!state.result) {
    return homeView();
  }

  const result = state.result;
  const type = TYPE_DATA[result.typeKey];
  const mixedText = result.centered
    ? "你的焦虑与回避倾向都落在中间带，因此暂时不强行归入单一象限。改变生活或关系语境后，可以再次观察。"
    : result.mixed
      ? `你的${result.mixedAxes.join("与")}倾向接近高低分界，因此结果带有混合倾向，不必把它理解为绝对标签。`
      : "你的两个维度没有明显贴近高低分界，结果更接近单一类型。";
  const mixedTag = result.mixed
    ? `<span class="tag">${icon("spark", "icon icon-sm")}混合倾向</span>`
    : "";

  return `
    <div class="page result-page">
      ${siteHeader()}
      <main class="result-main">
        <section class="result-hero" aria-labelledby="result-title">
          <div class="result-copy">
            <div class="result-tags">
              <span class="tag tag-accent">${type.alias}</span>
              ${mixedTag}
            </div>
            <h1 class="result-title" id="result-title">${type.title}</h1>
            <p class="result-tagline">${type.tagline}</p>
            <p class="result-summary-note">${mixedText}</p>
            <div class="result-actions">
              <button class="button button-secondary button-sm" type="button" data-action="restart-test">
                ${icon("rotate", "icon")}
                重新测试
              </button>
              <button class="button button-primary button-sm" type="button" data-action="open-share">
                ${icon("share", "icon")}
                分享结果卡片
              </button>
              <button class="button button-quiet button-sm" type="button" data-action="go-guide">
                ${icon("book", "icon")}
                查看全部四种依恋
              </button>
            </div>
          </div>

          <aside class="chart-panel" aria-labelledby="chart-heading">
            <div class="chart-panel-head">
              <div>
                <h2 id="chart-heading">你的双轴位置</h2>
                <p>横轴：回避倾向 · 纵轴：焦虑倾向</p>
              </div>
              <span class="chart-status">${result.centered ? "双轴居中" : result.mixed ? "临界附近" : "倾向清晰"}</span>
            </div>
            <div class="chart-wrap">${resultChart(result)}</div>
            <div class="score-bars" aria-label="双轴倾向概览">
              <div class="score-row">
                <span class="score-name">焦虑倾向</span>
                <span class="score-track"><span class="score-fill" style="width:${((result.anxiety - 1) / 4) * 100}%"></span></span>
                <span class="score-value">${tendencyLabel(result.anxiety)}</span>
              </div>
              <div class="score-row">
                <span class="score-name">回避倾向</span>
                <span class="score-track"><span class="score-fill" style="width:${((result.avoidance - 1) / 4) * 100}%"></span></span>
                <span class="score-value">${tendencyLabel(result.avoidance)}</span>
              </div>
            </div>
          </aside>
        </section>

        <section class="result-details" aria-label="${type.name}详细解读">
          <article class="result-detail">
            <div class="detail-head">
              <span class="detail-icon">${icon("check", "icon")}</span>
              <h2>你的优势</h2>
            </div>
            <div class="detail-grid">
              <p class="detail-intro">这些倾向在合适的关系里，可以成为稳定的资源。</p>
              <ul class="detail-list">
                ${type.strengths.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </article>

          <article class="result-detail">
            <div class="detail-head">
              <span class="detail-icon">${icon("alert", "icon")}</span>
              <h2>关系里容易出现的困扰</h2>
            </div>
            <div class="detail-grid">
              <p class="detail-intro">这些并不是缺点，而是压力出现时较常走的老路。</p>
              <ul class="detail-list">
                ${type.challenges.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </article>

          <article class="result-detail">
            <div class="detail-head">
              <span class="detail-icon">${icon("bulb", "icon")}</span>
              <h2>适合你的自我调节小建议</h2>
            </div>
            <div class="detail-grid">
              <p class="detail-intro">从很小的一步开始，比要求自己立刻改变更有用。</p>
              <ul class="detail-list">
                ${type.suggestions.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </article>
        </section>

        <aside class="result-footnote">
          <div>
            <strong>依恋不是一成不变的标签。</strong>
            <p>它会随关系经验、自我觉察与治疗经历发生变化。此刻的倾向，只是理解自己的一个入口。</p>
          </div>
          <button class="button button-secondary button-sm" style="border-color:#6f7d76;color:#fff" type="button" data-action="open-about">
            了解量表与隐私
          </button>
        </aside>
      </main>
      ${siteFooter()}
    </div>
  `;
}

function guideView() {
  return `
    <div class="page guide-page">
      ${siteHeader({ back: true })}
      <main class="guide-main">
        <header class="guide-heading">
          <div>
            <p class="eyebrow">Attachment guide</p>
            <h1>四种依恋完整科普</h1>
          </div>
          <p>
            下面的描述是常见倾向，不是临床诊断，也不代表一个人只能属于某一类。你可以把每种类型都当作一副观察关系的镜片。
          </p>
        </header>

        <div class="guide-grid">
          ${TYPE_ORDER.map((typeKey) => TYPE_DATA[typeKey])
            .map(
              (type, index) => `
              <article class="guide-card">
                <div class="guide-card-head">
                  <div>
                    <h2>${type.name}</h2>
                    <p>${type.alias}</p>
                  </div>
                  <span class="guide-card-index">0${index + 1}</span>
                </div>
                <p class="guide-card-lead">${type.guide}</p>
                <dl>
                  <div>
                    <dt>常见优势</dt>
                    <dd>${type.strengths[0]}</dd>
                  </div>
                  <div>
                    <dt>容易出现的困扰</dt>
                    <dd>${type.challenges[0]}</dd>
                  </div>
                  <div>
                    <dt>和这类倾向相处</dt>
                    <dd>${type.withThem}</dd>
                  </div>
                </dl>
              </article>
            `,
            )
            .join("")}
        </div>

        <div class="guide-footnote" role="note">
          ${icon("info", "icon")}
          <span>
            依恋类型更适合用来描述“在关系压力下较常出现的模式”，而不是判断一个人是否成熟、值得被爱或适合进入关系。
          </span>
        </div>
        <div style="margin-top:26px">
          <button class="button button-primary" type="button" data-action="start-test">
            开始自测
            ${icon("arrow-right", "icon")}
          </button>
        </div>
      </main>
      ${siteFooter()}
    </div>
  `;
}

function typesModal() {
  return `
    <div class="modal" data-modal="types" data-action="close-modal" role="presentation">
      <div
        class="modal-dialog modal-dialog-wide"
        role="dialog"
        aria-modal="true"
        aria-labelledby="types-modal-title"
        data-modal-panel
      >
        <button class="icon-button modal-close" type="button" data-action="close-modal" aria-label="关闭弹窗">
          ${icon("x", "icon")}
        </button>
        <p class="modal-kicker">Attachment guide</p>
        <h2 class="modal-title" id="types-modal-title">四种依恋快速对照</h2>
        <p class="modal-intro">两个维度交叉出四种常见倾向。这里的“高”和“低”描述的是关系中的体验频率，不是能力高低。</p>
        <div class="modal-types">
          ${TYPE_ORDER.map((typeKey) => TYPE_DATA[typeKey])
            .map(
              (type) => `
              <article class="modal-type">
                <h3>${type.name}</h3>
                <p>${type.tagline}</p>
              </article>
            `,
            )
            .join("")}
        </div>
        <div class="modal-section">
          <button class="button button-primary button-sm" type="button" data-action="go-guide-from-modal">
            查看完整科普
            ${icon("arrow-right", "icon")}
          </button>
        </div>
      </div>
    </div>
  `;
}

function aboutModal() {
  return `
    <div class="modal" data-modal="about" data-action="close-modal" role="presentation">
      <div
        class="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
        data-modal-panel
      >
        <button class="icon-button modal-close" type="button" data-action="close-modal" aria-label="关闭弹窗">
          ${icon("x", "icon")}
        </button>
        <p class="modal-kicker">About & privacy</p>
        <h2 class="modal-title" id="about-modal-title">关于这个自测</h2>
        <p class="modal-intro">本页面是一款依恋模式科普自测，不是一个经过临床常模验证的心理测评工具。</p>

        <section class="modal-section">
          <h3>量表说明</h3>
          <p>
            题目围绕成人依恋研究中的两个常用维度设计：焦虑（对关系不确定与被拒绝的敏感）和回避（对亲密、依赖与情绪表达的不适）。两个维度共同形成四象限结果。
          </p>
          <p>
            成人依恋访谈（AAI）是临床半结构式访谈，本测试不使用 AAI 编码或评分，也不能通过本测试推断 AAI 结果。本测试也不是 ECR 或 ECR-R 的官方中文版本，未建立临床常模。
          </p>
        </section>

        <section class="modal-section">
          <h3>计分与混合倾向</h3>
          <p>
            28 道题每个维度各 14 题，其中包含反向计分题。每题计 1–5 分，维度均分高于或等于 3.0 归为较高倾向。得分距离 3.0 不超过 0.20 时，结果会提示“混合倾向”；两个维度都落在中间带时，会显示“居中混合倾向”，不强行归入单一象限。
          </p>
          <p>该临界值和混合区间是为本页面展示设置，不构成诊断阈值，也不应与其他量表结果直接比较。</p>
        </section>

        <section class="modal-section">
          <h3>隐私说明</h3>
          <p>
            页面不要求姓名、手机号、微信或其他身份信息，不发送答题记录，不使用答题分析服务。所有答案只在当前页面内计算，刷新或关闭页面后不会保留。
          </p>
          <p>分享卡片由你的设备本地生成。是否显示焦虑与回避倾向由你自行选择，页面不会自动上传图片。</p>
        </section>

        <section class="modal-section">
          <h3>免责声明</h3>
          <p>
            本测试仅用于心理科普与自我觉察，不能替代心理咨询、精神科评估、诊断或治疗。结果会受近期关系、情绪状态和答题语境影响，不应作为评价自己或他人的依据。
          </p>
          <p>
            如果你正持续经历强烈痛苦、关系暴力或人身安全风险，请优先联系可信任的人、当地紧急服务或持证心理/医疗专业人员。
          </p>
        </section>

        <section class="modal-section">
          <h3>参考方向</h3>
          <ul class="source-list">
            <li>Bowlby, J. (1969). Attachment and Loss, Vol. 1: Attachment.</li>
            <li>Brennan, K. A., Clark, C. L., &amp; Shaver, P. R. (1998). Self-report measurement of adult attachment.</li>
            <li>Fraley, R. C., Waller, N. G., &amp; Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment.</li>
            <li>Mikulincer, M., &amp; Shaver, P. R. (2016). Attachment in Adulthood: Structure, Dynamics, and Change.</li>
          </ul>
          <p style="margin-top:12px">内容更新时间：2026 年 11 月</p>
        </section>
      </div>
    </div>
  `;
}

function exitConfirmModal() {
  return `
    <div class="modal" data-modal="confirm-exit" data-action="close-modal" role="presentation">
      <div
        class="modal-dialog modal-dialog-sm"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
        aria-describedby="exit-modal-desc"
        data-modal-panel
      >
        <p class="modal-kicker">Leave test</p>
        <h2 class="modal-title" id="exit-modal-title">要退出这次自测吗？</h2>
        <p class="modal-intro" id="exit-modal-desc">当前作答只存在这个页面里，退出后不会保存。</p>
        <div class="confirm-actions">
          <button class="button button-secondary" type="button" data-action="close-modal">继续作答</button>
          <button class="button button-primary" type="button" data-action="confirm-exit">退出测试</button>
        </div>
      </div>
    </div>
  `;
}

function shareModal() {
  if (!state.result) return "";
  const type = TYPE_DATA[state.result.typeKey];
  return `
    <div class="modal" data-modal="share" data-action="close-modal" role="presentation">
      <div
        class="modal-dialog modal-dialog-wide"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
        data-modal-panel
      >
        <button class="icon-button modal-close" type="button" data-action="close-modal" aria-label="关闭弹窗">
          ${icon("x", "icon")}
        </button>
        <p class="modal-kicker">Share card</p>
        <h2 class="modal-title" id="share-modal-title">分享你的结果卡片</h2>
        <p class="modal-intro">卡片在你的设备上生成。默认只展示类型，不显示具体倾向。</p>
        <div class="share-layout">
          <div class="share-preview">
            <img id="share-preview-image" alt="${type.name}依恋结果卡片预览" />
          </div>
          <div class="share-controls">
            <label class="switch">
              <span>显示双轴倾向</span>
              <input type="checkbox" id="share-scores-toggle" ${state.shareIncludeScores ? "checked" : ""} />
              <span class="switch-track" aria-hidden="true"></span>
            </label>
            <button class="button button-primary button-sm" type="button" data-action="share-image">
              ${icon("share", "icon")}
              分享图片
            </button>
            <button class="button button-secondary button-sm" type="button" data-action="download-image">
              ${icon("download", "icon")}
              保存图片
            </button>
            <p class="share-privacy">图片不会自动上传。是否发送给他人，由你决定。</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function render() {
  if (state.view === "home") app.innerHTML = homeView();
  if (state.view === "test") app.innerHTML = testView();
  if (state.view === "result") app.innerHTML = resultView();
  if (state.view === "guide") app.innerHTML = guideView();
  document.title =
    state.view === "result" && state.result
      ? `${TYPE_DATA[state.result.typeKey].name}｜${APP_TITLE}`
      : state.view === "guide"
        ? `四种依恋科普｜${APP_TITLE}`
        : state.view === "test"
          ? `第 ${state.currentQuestion + 1} 题｜${APP_TITLE}`
          : APP_TITLE;
}

function scrollToTop(behavior = "auto") {
  window.scrollTo({ top: 0, behavior });
}

function goHome() {
  closeModal();
  state.view = "home";
  state.currentQuestion = 0;
  state.answers = {};
  state.result = null;
  render();
  scrollToTop();
}

function startTest() {
  closeModal();
  state.view = "test";
  state.currentQuestion = 0;
  state.answers = {};
  state.result = null;
  render();
  scrollToTop();
  requestAnimationFrame(() => {
    document.querySelector("#question-title")?.focus({ preventScroll: true });
  });
}

function goGuide() {
  closeModal();
  state.view = "guide";
  render();
  scrollToTop();
}

function updateTestView() {
  if (state.view !== "test") return;
  render();
  requestAnimationFrame(() => {
    const shell = document.querySelector(".question-shell");
    if (shell) shell.classList.add("is-changing");
    document.querySelector("#question-title")?.focus({ preventScroll: true });
  });
}

function nextQuestion() {
  if (!state.answers[QUESTIONS[state.currentQuestion].id]) return;
  if (state.currentQuestion < QUESTIONS.length - 1) {
    state.currentQuestion += 1;
    updateTestView();
    scrollToTop();
  }
}

function previousQuestion() {
  if (state.currentQuestion > 0) {
    state.currentQuestion -= 1;
    updateTestView();
    scrollToTop();
  }
}

function finishTest() {
  if (!state.answers[QUESTIONS[state.currentQuestion].id]) return;
  state.result = calculateResult();
  state.view = "result";
  render();
  scrollToTop();
}

function restartTest() {
  state.currentQuestion = 0;
  state.answers = {};
  state.result = null;
  state.view = "test";
  render();
  scrollToTop();
}

function openModal(markup, name) {
  state.lastFocusedElement = document.activeElement;
  modalRoot.innerHTML = markup;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    const panel = modalRoot.querySelector("[data-modal-panel]");
    const focusable = panel?.querySelector(
      'button, [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();
    if (name === "share") renderSharePreview();
  });
}

function closeModal() {
  if (!modalRoot.innerHTML) return;
  modalRoot.innerHTML = "";
  document.body.classList.remove("modal-open");
  state.lastFocusedElement?.focus?.();
}

function trapModalFocus(event) {
  if (event.key === "Escape") {
    closeModal();
    return;
  }

  if (event.key !== "Tab") return;
  const modal = modalRoot.querySelector(".modal");
  if (!modal) return;
  const focusable = [...modal.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )].filter((element) => element.offsetParent !== null);

  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const characters = [...text];
  let line = "";
  let lineCount = 0;

  for (let index = 0; index < characters.length; index += 1) {
    const testLine = line + characters[index];
    const width = context.measureText(testLine).width;
    if (width > maxWidth && line) {
      context.fillText(line, x, y + lineCount * lineHeight);
      line = characters[index];
      lineCount += 1;
      if (lineCount >= maxLines - 1) {
        const remaining = characters.slice(index).join("");
        const clipped = remaining.length > 17 ? `${remaining.slice(0, 17)}…` : remaining;
        context.fillText(clipped, x, y + lineCount * lineHeight);
        return y + lineCount * lineHeight;
      }
    } else {
      line = testLine;
    }
  }

  if (line) {
    context.fillText(line, x, y + lineCount * lineHeight);
    lineCount += 1;
  }
  return y + (lineCount - 1) * lineHeight;
}

function drawShareCard(includeScores) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");
  const result = state.result;
  const type = TYPE_DATA[result.typeKey];
  const fontFamily =
    '"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", "Aptos", sans-serif';

  context.fillStyle = "#f4f1ea";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = type.color;
  context.fillRect(0, 0, canvas.width, 24);

  context.fillStyle = "#24312d";
  context.font = `700 30px ${fontFamily}`;
  context.fillText("靠近", 74, 102);
  context.fillStyle = "#7b847f";
  context.font = `500 18px ${fontFamily}`;
  context.fillText("ATTACHMENT SELF-CHECK  /  依恋类型自测", 156, 101);

  context.strokeStyle = "#d8d3c9";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(74, 140);
  context.lineTo(1006, 140);
  context.stroke();

  context.fillStyle = type.color;
  context.font = `700 20px ${fontFamily}`;
  context.fillText("我的依恋倾向", 74, 226);

  context.fillStyle = "#24312d";
  context.font = `700 104px ${fontFamily}`;
  context.fillText(type.name, 70, 360);

  context.fillStyle = "#58635e";
  context.font = `400 34px ${fontFamily}`;
  wrapCanvasText(context, type.tagline, 74, 440, 880, 58, 3);

  context.fillStyle = type.pale;
  context.fillRect(74, 620, 932, 260);
  context.fillStyle = type.color;
  context.fillRect(74, 620, 7, 260);
  context.fillStyle = "#24312d";
  context.font = `600 24px ${fontFamily}`;
  context.fillText("一个理解自己的入口", 116, 675);
  context.fillStyle = "#58635e";
  context.font = `400 27px ${fontFamily}`;
  wrapCanvasText(context, type.short, 116, 727, 820, 46, 3);

  if (includeScores) {
    context.fillStyle = "#24312d";
    context.font = `600 22px ${fontFamily}`;
    context.fillText("焦虑倾向", 74, 944);
    context.fillText("回避倾向", 74, 1000);
    context.fillStyle = "#e2ddd3";
    context.fillRect(210, 928, 680, 10);
    context.fillRect(210, 984, 680, 10);
    context.fillStyle = "#5d7588";
    context.fillRect(210, 928, ((result.anxiety - 1) / 4) * 680, 10);
    context.fillStyle = "#a47c38";
    context.fillRect(210, 984, ((result.avoidance - 1) / 4) * 680, 10);
    context.fillStyle = "#58635e";
    context.font = `500 20px ${fontFamily}`;
    context.fillText(tendencyLabel(result.anxiety), 914, 941);
    context.fillText(tendencyLabel(result.avoidance), 914, 997);
  }

  const noteY = includeScores ? 1124 : 1046;
  context.fillStyle = "#24312d";
  context.font = `600 22px ${fontFamily}`;
  context.fillText("依恋会改变，此刻只是倾向，不是标签。", 74, noteY);
  context.fillStyle = "#7b847f";
  context.font = `400 17px ${fontFamily}`;
  context.fillText("本测试仅作心理科普与自我觉察，不能替代心理咨询或专业评估。", 74, noteY + 42);

  context.strokeStyle = "#d8d3c9";
  context.beginPath();
  context.moveTo(74, 1244);
  context.lineTo(1006, 1244);
  context.stroke();
  context.fillStyle = "#7b847f";
  context.font = `500 16px ${fontFamily}`;
  context.fillText("靠近 · 依恋类型自测", 74, 1290);
  context.textAlign = "right";
  context.fillText("仅趣味自测", 1006, 1290);
  context.textAlign = "left";

  return canvas;
}

function renderSharePreview() {
  const image = document.querySelector("#share-preview-image");
  if (!image) return;
  const canvas = drawShareCard(state.shareIncludeScores);
  image.src = canvas.toDataURL("image/png");
  image.dataset.canvas = canvas.toDataURL("image/png");
}

function downloadShareImage() {
  const canvas = drawShareCard(state.shareIncludeScores);
  const link = document.createElement("a");
  link.download = `依恋类型_${TYPE_DATA[state.result.typeKey].name}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("结果卡片已保存到你的下载目录");
}

async function shareImage() {
  const canvas = drawShareCard(state.shareIncludeScores);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  const file = new File([blob], `依恋类型_${TYPE_DATA[state.result.typeKey].name}.png`, {
    type: "image/png",
  });

  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({
        title: "我的依恋类型自测结果",
        text: `我的结果更接近${TYPE_DATA[state.result.typeKey].name}。`,
        files: [file],
      });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  downloadShareImage();
}

let toastTimer;
function showToast(message) {
  document.querySelector(".toast")?.remove();
  clearTimeout(toastTimer);
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);
  toastTimer = setTimeout(() => toast.remove(), 2600);
}

function handleAction(action, target) {
  switch (action) {
    case "go-home":
      goHome();
      break;
    case "start-test":
      startTest();
      break;
    case "open-about":
      openModal(aboutModal(), "about");
      break;
    case "open-types":
      openModal(typesModal(), "types");
      break;
    case "close-modal":
      closeModal();
      break;
    case "go-guide":
    case "go-guide-from-modal":
      goGuide();
      break;
    case "exit-test":
      if (Object.keys(state.answers).length > 0) {
        openModal(exitConfirmModal(), "confirm-exit");
      } else {
        goHome();
      }
      break;
    case "confirm-exit":
      goHome();
      break;
    case "prev-question":
      previousQuestion();
      break;
    case "next-question":
      nextQuestion();
      break;
    case "show-result":
      finishTest();
      break;
    case "restart-test":
      restartTest();
      break;
    case "open-share":
      openModal(shareModal(), "share");
      break;
    case "download-image":
      downloadShareImage();
      break;
    case "share-image":
      shareImage();
      break;
    default:
      if (target?.matches('[data-action="close-modal"]') && target.classList.contains("modal")) {
        closeModal();
      }
  }
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;

  if (action === "close-modal" && actionTarget.classList.contains("modal")) {
    if (event.target === actionTarget) closeModal();
    return;
  }

  handleAction(action, actionTarget);
});

document.addEventListener("change", (event) => {
  if (event.target.matches('input[name="answer"]')) {
    state.answers[QUESTIONS[state.currentQuestion].id] = Number(event.target.value);
    render();
    requestAnimationFrame(() => {
      const selected = document.querySelector('input[name="answer"]:checked');
      selected?.focus({ preventScroll: true });
    });
  }

  if (event.target.id === "share-scores-toggle") {
    state.shareIncludeScores = event.target.checked;
    renderSharePreview();
  }
});

document.addEventListener("keydown", (event) => {
  if (modalRoot.innerHTML) {
    trapModalFocus(event);
    return;
  }

  if (state.view !== "test") return;
  const selected = document.querySelector('input[name="answer"]:checked');
  if (event.key === "Enter" && selected) {
    event.preventDefault();
    if (state.currentQuestion === QUESTIONS.length - 1) finishTest();
    else nextQuestion();
  }
});

window.addEventListener("beforeunload", (event) => {
  if (state.view === "test" && Object.keys(state.answers).length > 0) {
    event.preventDefault();
  }
});

render();
