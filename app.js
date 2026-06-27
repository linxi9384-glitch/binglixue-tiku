const PAPER_NAMES = ["卷一", "卷二", "卷三", "随机卷"];
const EXAM_DURATION_SECONDS = 90 * 60;

const SUBJECTIVE_ANSWERS = {
  "0-60": "由新生毛细血管和增生的成纤维细胞构成，并伴有炎症细胞浸润的幼稚结缔组织。肉眼呈鲜红色、颗粒状、柔软湿润，形似鲜嫩的肉芽。其作用包括抗感染保护创面、填补组织缺损以及机化坏死组织和血栓等。",
  "0-61": "肝硬化时，正常肝小叶结构被破坏，肝细胞团被增生的纤维组织分割包绕，形成大小不等、形态不规则的肝细胞团，称为假小叶。假小叶是肝硬化的特征性病变。",
  "0-62": "异型增生累及上皮全层，但尚未突破基底膜的癌，称为原位癌。原位癌无浸润、无转移，若能早期发现并彻底切除，多可治愈。",
  "0-63": "风湿小体又称 Aschoff 小体，是风湿病的特征性病变，属于风湿性肉芽肿。其中心为纤维素样坏死，周围有风湿细胞、淋巴细胞和成纤维细胞。",
  "0-64": "干酪样坏死是凝固性坏死的一种特殊类型，多见于结核病。坏死灶呈淡黄色、干燥、松脆，外观似奶酪；镜下原有组织结构完全消失，呈红染无结构颗粒状物质。",
  "0-65": "血栓形成的条件即 Virchow 三联征：①心血管内皮损伤：最重要、最常见，可暴露内皮下胶原并激活血小板和凝血系统；②血流状态改变：如血流减慢或涡流形成，促使血小板易于黏附并减少凝血因子稀释；③血液凝固性增高：包括遗传性和获得性高凝状态。三者常协同作用。",
  "0-66": "良性与恶性肿瘤的区别主要包括：①分化程度：良性高，恶性低；②异型性：良性小，恶性大；③核分裂象：良性少，恶性多且可见病理性核分裂；④生长方式：良性多膨胀性，恶性多浸润性；⑤生长速度：良性慢，恶性快；⑥转移：良性无，恶性有；⑦复发：良性少，恶性多；⑧对机体影响：良性多为局部压迫，恶性可致恶病质。",
  "0-67": "大叶性肺炎的典型病理变化分四期：①充血水肿期：肺泡壁毛细血管扩张充血，肺泡腔内浆液渗出；②红色肝样变期：肺泡内大量红细胞、纤维素及少量中性粒细胞，使肺组织暗红实变；③灰色肝样变期：红细胞减少，大量中性粒细胞和纤维素使肺呈灰白色实变；④溶解消散期：渗出物被酶解、吸收或咳出，肺组织逐渐恢复。",
  "0-68": "肝硬化的临床病理联系主要表现为：①门静脉高压症：脾大及脾功能亢进、腹水、侧支循环形成（尤以食管胃底静脉曲张最危险）；②肝功能不全：低蛋白血���、黄疸、出血倾向、激素灭活障碍（肝掌、蜘蛛痣）以及肝性脑病等。",
  "0-69": "（1）最可能的病理诊断：右肺中央型鳞状细胞癌。依据为长期吸烟史、肺门附近肿块、痰中带血以及镜下见角化珠和细胞间桥。\n（2）其大体类型属于中央型肺癌，组织学类型属于鳞状细胞癌。\n（3）扩散途径包括：直接蔓延至周围肺组织和胸膜；经淋巴道转移至肺门和纵隔淋巴结；晚期还可经血道转移至肝、脑、骨和肾上腺等。",
  "1-60": "异型性是指肿瘤组织在细胞形态和组织结构上与其来源的正常组织相比所表现出的差异程度。异型性越大，通常提示分化越差、恶性程度越高。",
  "1-61": "假膜性炎是纤维素性炎发生于黏膜时的一种特殊类型。渗出的纤维素、中性粒细胞和坏死黏膜组织共同形成灰白色膜状物，称为假膜。常见于白喉和细菌性痢疾。",
  "1-62": "粥样斑块（粥瘤）是动脉粥样硬化的特征性病变。其表面为纤维帽，深部为脂质核心，核心内含胆固醇结晶、坏死物和泡沫细胞。",
  "1-63": "原发复合征是原发性肺结核的典型病变组合，包括肺内原发灶、引流淋巴管炎和肺门淋巴结结核三部分。",
  "1-64": "肝硬化是由多种原因所致的肝细���弥漫性变性坏死、继发纤维组织增生及肝细胞结节状再生，导致肝小叶结构改建和假小叶形成，使肝脏变形、变硬。",
  "1-65": "炎症渗出的有利作用：①稀释毒素；②带来抗体、补体等防御物质；③纤维素形成网架限制病原体扩散；④白细胞渗出有利于吞噬和杀菌。其有害作用：①渗出过多可压迫重要器官；②纤维素机化可引起粘连；③严重水肿可影响组织功能，如喉头水肿可致窒息。",
  "1-66": "癌与肉瘤的区别：①来源：癌来源于上皮组织，肉瘤来源于间叶组织；②发病率：癌多见，肉瘤少见；③年龄：癌多见于中老年，肉瘤多见于青少年；④转移：癌多经淋巴道，肉瘤多经血道；⑤组织学上癌常形成癌巢，肉瘤多呈弥漫分布。",
  "1-67": "结核病的基本病理变化包括渗出、增生和变质三种，其中最特征性的病变是结核结节和干酪样坏死。其转归可为吸收消散、纤维化包裹、钙化，或坏死液化形成空洞并进一步播散。",
  "1-68": "病毒性肝炎的基本病理变化包括：①肝细胞变性，如气球样变、嗜酸性变；②肝细胞坏死，如点状坏死、碎片状坏死、桥接坏死等；③炎症细胞浸润，主要位于门管区和肝小叶内；④Kupffer 细胞及肝细胞再生，严重者可伴纤维化。",
  "1-69": "（1）最可能的病理诊断：乙型肝炎后肝硬化（失代偿期）。依据包括乙肝病史、黄疸、腹水、脾大、肝掌、蜘蛛痣及低白蛋白血症等。\n（2）其特征性病变是假小叶形成。\n（3）脾大由于门静脉高压引起脾淤血所致；腹水则与门静脉高压、低蛋白血症以及醛固酮和抗利尿激素灭活减少导致的水钠潴留有关。",
  "2-60": "槟榔肝是慢性肝淤血时的特征性肉眼改变。肝小叶中央区淤血呈暗红色，周边肝细胞脂肪变性呈黄色，红黄相间，似槟榔切面。",
  "2-61": "心衰细胞是慢性肺淤血时肺泡腔内吞噬了含铁血黄素的巨噬细胞，是左心衰竭所致慢性肺淤血的重要镜下表现。",
  "2-62": "非典型增生（异型增生）是指上皮细胞增生过程中出现细胞大小不一、核大深染、极性紊乱和核分裂增多等异常改变，但尚未突破基底膜。",
  "2-63": "伤寒小结是伤寒病的特征性病变，由吞噬细菌及组织碎屑的巨噬细胞聚集形成，常见于回肠集合淋巴结、肝、脾和骨髓。",
  "2-64": "Barrett 食管是指食管下段鳞状上皮被柱状上皮取代的化生性改变，多由长期胃食管反流引起，属于食管腺癌的癌前病变。",
  "2-65": "原发性肺结���与继发性肺结核的区别：①原发性多为初次感染，多见于儿童，常形成原发复合征；②继发性多为再感染或潜伏灶复燃，多见于成人；③原发性多经淋巴道或血道播散，继发性多发生于肺尖，易形成空洞并经支气管播散。",
  "2-66": "心肌梗死的并发症包括：①心律失常；②心力衰竭和心源性休克；③心脏破裂（室壁、室间隔或乳头肌破裂）；④附壁血栓形成及栓塞；⑤室壁瘤形成；⑥心包炎等。",
  "2-67": "消化性溃疡底部自浅至深可分为四层：①炎性渗出层；②坏死组织层；③肉芽组织层；④瘢痕组织层。其常见并发症有出血、穿孔、幽门狭窄和癌变（主要见于胃溃疡）。",
  "2-68": "动脉粥样硬化的基本病理变化可概括为：①脂纹形成；②纤维斑块形成；③粥样斑块（粥瘤）形成；④复合病变，如斑块破裂出血、血栓形成、钙化及动脉瘤形成等。",
  "2-69": "（1）最可能的病理诊断：急性前壁透壁性心肌梗死。依据为典型胸痛、危险因素、V1-V5 导联 ST 段抬高以及肌钙蛋白和 CK-MB 升高。\n（2）ST 段抬高是心肌急性损伤所致损伤电流改变；心肌酶升高是心肌细胞坏死后细胞内成分释放入血所致。\n（3）病理演变大致为：早期凝固��坏死→中性粒细胞浸润→肉芽组织形成→最终瘢痕修复。"
};

let currentPaper = -1;
let currentQ = 0;
let timeLeft = EXAM_DURATION_SECONDS;
let userAnswers = [];
let markedQs = new Set();
let timerInterval = null;
let examActive = false;
let selfScores = {};
let resultState = null;
const OPTION_HOVER_SUPPRESS_CLASS = "suppress-option-hover";
const OPTION_HOVER_RESTORE_EVENTS = ["pointermove", "pointerdown", "mousemove", "mousedown", "touchstart", "keydown"];
const DEEPSEEK_API_BASE = "https://api.deepseek.com/v1";
const DEEPSEEK_MODEL = "deepseek-chat";
const AI_STORAGE_KEY = "pathology_deepseek_key";
const WRONG_BOOK_KEY = "pathology_wrong_book";
const HISTORY_KEY = "pathology_exam_history";
let aiResponses = {};
let deepseekApiKey = "";

function byId(id) {
  return document.getElementById(id);
}

function clearOptionHoverSuppression() {
  document.body.classList.remove(OPTION_HOVER_SUPPRESS_CLASS);
  OPTION_HOVER_RESTORE_EVENTS.forEach((eventName) => window.removeEventListener(eventName, clearOptionHoverSuppression));
}

function suppressOptionHoverUntilInput() {
  clearOptionHoverSuppression();
  document.body.classList.add(OPTION_HOVER_SUPPRESS_CLASS);
  OPTION_HOVER_RESTORE_EVENTS.forEach((eventName) => window.addEventListener(eventName, clearOptionHoverSuppression, { once: true }));
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function br(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function storageKey(paperIndex) {
  return `pathology_exam_${paperIndex}`;
}

function initAnswers(paper) {
  return paper.map((question) => {
    if (question.type === "single") return { val: -1 };
    if (question.type === "multi") return { val: [] };
    return { val: "" };
  });
}

function checkResume() {
  for (let paperIndex = 0; paperIndex < 4; paperIndex += 1) {
    if (paperIndex === 3 && !PAPERS[3]) continue;
    const raw = localStorage.getItem(storageKey(paperIndex));
    if (!raw) continue;
    try {
      const saved = JSON.parse(raw);
      if (saved.examActive && saved.timeLeft > 0) {
        byId("resumeMsg").textContent = `检测到未完成的${PAPER_NAMES[paperIndex]}（剩余 ${Math.floor(saved.timeLeft / 60)} 分 ${saved.timeLeft % 60} 秒），是否继续？`;
        byId("resumeBox").style.display = "block";
        byId("resumeBox").dataset.paper = String(paperIndex);
        return;
      }
    } catch (_error) {
      localStorage.removeItem(storageKey(paperIndex));
    }
  }
}

function resumeExam() {
  const paperIndex = Number(byId("resumeBox").dataset.paper);
  if (Number.isInteger(paperIndex)) loadExam(paperIndex, true);
}

function dismissResume() {
  const paperIndex = Number(byId("resumeBox").dataset.paper);
  if (Number.isInteger(paperIndex)) localStorage.removeItem(storageKey(paperIndex));
  byId("resumeBox").style.display = "none";
}

function startExam(paperIndex) {
  localStorage.removeItem(storageKey(paperIndex));
  if (paperIndex === 3) {
    var newPaper = buildRandomPaper();
    localStorage.setItem("pathology_random_paper", JSON.stringify(newPaper));
    PAPERS[3] = newPaper;
  }
  loadExam(paperIndex, false);
}

function loadExam(paperIndex, resume) {
  currentPaper = paperIndex;
  if (paperIndex === 3 && !PAPERS[3]) {
    alert("随机卷尚未生成，请重新点击随机卷卡片。");
    backToLanding();
    return;
  }
  const saved = resume ? JSON.parse(localStorage.getItem(storageKey(paperIndex)) || "null") : null;

  if (saved && saved.answers) {
    userAnswers = saved.answers;
    timeLeft = saved.timeLeft;
    currentQ = saved.currentQ;
    markedQs = new Set(saved.markedQs || []);
    selfScores = saved.selfScores || {};
  } else {
    userAnswers = initAnswers(PAPERS[paperIndex]);
    timeLeft = EXAM_DURATION_SECONDS;
    currentQ = 0;
    markedQs = new Set();
    selfScores = {};
  }

  document.body.classList.add("exam-open");
  byId("landing").style.display = "none";
  byId("results").style.display = "none";
  byId("examArea").style.display = "block";
  byId("sidebar").style.display = "block";
  byId("paperTitle").textContent = `${PAPER_NAMES[paperIndex]} · 病理学模拟考试`;

  examActive = true;
  renderSidebar();
  renderQuestion();
  startTimer();
  saveProgress();
}

function saveProgress() {
  if (!examActive) return;
  const payload = {
    examActive,
    timeLeft,
    currentQ,
    answers: userAnswers,
    markedQs: [...markedQs],
    selfScores
  };
  localStorage.setItem(storageKey(currentPaper), JSON.stringify(payload));
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
      return;
    }
    if (timeLeft % 30 === 0) saveProgress();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timer = byId("timer");
  timer.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
  timer.classList.toggle("warn", timeLeft < 300);
}

function isAnswered(question, answer) {
  if (!answer) return false;
  if (question.type === "single") return answer.val >= 0;
  if (question.type === "multi") return answer.val.length > 0;
  return answer.val.trim().length > 0;
}

function renderSidebar() {
  const paper = PAPERS[currentPaper];
  const sections = [
    { label: "单选题", start: 0, end: 50 },
    { label: "多选题", start: 50, end: 60 },
    { label: "名��解释", start: 60, end: 65 },
    { label: "简答题", start: 65, end: 69 },
    { label: "病例分析", start: 69, end: 70 }
  ];

  let html = '<h3>答题卡</h3><div class="q-grid">';
  for (const section of sections) {
    html += `<div class="section-label">${section.label}</div>`;
    for (let index = section.start; index < section.end; index += 1) {
      let className = "q-dot";
      if (index === currentQ) className += " current";
      if (markedQs.has(index)) className += " marked";
      if (isAnswered(paper[index], userAnswers[index])) className += " answered";
      html += `<div class="${className}" onclick="jumpTo(${index})">${index + 1}</div>`;
    }
  }
  html += "</div>";
  const answeredCount = paper.filter((question, index) => isAnswered(question, userAnswers[index])).length;
  html += `<div class="progress-text">${answeredCount}/${paper.length} 已答</div>`;
  byId("sidebar").innerHTML = html;
}

function renderQuestion() {
  const question = PAPERS[currentPaper][currentQ];
  const answer = userAnswers[currentQ];
  const typeNames = {
    single: "单选题",
    multi: "多选题（全对得分）",
    term: "名词解释",
    short: "简答题",
    essay: "病例分析"
  };

  let html = '<article class="question-card">';
  html += `<span class="badge ${question.type}">${typeNames[question.type]} · ${currentQ + 1}/${PAPERS[currentPaper].length}</span>`;
  html += `<div class="question-text">${br(question.q)}</div>`;

  if (question.type === "single") {
    html += '<div class="options">';
    question.options.forEach((option, optionIndex) => {
      const selected = answer.val === optionIndex ? " selected" : "";
      html += `<label class="option${selected}" onclick="selectSingle(${optionIndex})">${escapeHtml(option)}</label>`;
    });
    html += "</div>";
  } else if (question.type === "multi") {
    html += '<div class="options">';
    question.options.forEach((option, optionIndex) => {
      const selected = answer.val.includes(optionIndex) ? " selected" : "";
      html += `<label class="option${selected}" onclick="selectMulti(${optionIndex})">${escapeHtml(option)}</label>`;
    });
    html += "</div>";
  } else {
    html += `<textarea class="text-answer" id="textAnswer" placeholder="在此输入你的答案..." oninput="saveTextAnswer()">${escapeHtml(answer.val)}</textarea>`;
  }

  html += "</article>";
  byId("questionContainer").innerHTML = html;
}

function jumpTo(index) {
  currentQ = index;
  renderQuestion();
  renderSidebar();
  saveProgress();
}

function prevQ() {
  if (currentQ <= 0) return;
  jumpTo(currentQ - 1);
}

function nextQ() {
  if (currentQ >= PAPERS[currentPaper].length - 1) return;
  jumpTo(currentQ + 1);
}

function toggleMark() {
  if (markedQs.has(currentQ)) markedQs.delete(currentQ);
  else markedQs.add(currentQ);
  renderSidebar();
  saveProgress();
}

function selectSingle(optionIndex) {
  userAnswers[currentQ].val = optionIndex;
  renderQuestion();
  renderSidebar();
  saveProgress();
  if (currentQ < PAPERS[currentPaper].length - 1) {
    window.setTimeout(() => {
      nextQ();
      suppressOptionHoverUntilInput();
    }, 280);
  }
}

function selectMulti(optionIndex) {
  const selected = userAnswers[currentQ].val;
  const existingIndex = selected.indexOf(optionIndex);
  if (existingIndex >= 0) selected.splice(existingIndex, 1);
  else selected.push(optionIndex);
  renderQuestion();
  renderSidebar();
  saveProgress();
}

function saveTextAnswer() {
  userAnswers[currentQ].val = byId("textAnswer").value;
  renderSidebar();
  saveProgress();
}

function confirmSubmit() {
  const paper = PAPERS[currentPaper];
  const unanswered = paper.filter((question, index) => !isAnswered(question, userAnswers[index])).length;
  const message = unanswered > 0 ? `确定要交卷吗？\n还有 ${unanswered} 道题未作答。` : "确定要交卷吗？";
  if (confirm(message)) submitExam();
}

function arraysEqual(first, second) {
  if (first.length !== second.length) return false;
  const firstSorted = first.slice().sort((a, b) => a - b);
  const secondSorted = second.slice().sort((a, b) => a - b);
  return firstSorted.every((value, index) => value === secondSorted[index]);
}

function formatOptions(question, indexes) {
  if (!indexes || indexes.length === 0) return "（未作答）";
  return indexes.map((index) => question.options[index]).join("、");
}

function subjectiveMaxScore(type) {
  if (type === "term") return 2;
  if (type === "short") return 3;
  return 8;
}

function submitExam() {
  if (!examActive) return;
  examActive = false;
  clearInterval(timerInterval);
  document.body.classList.remove("exam-open");

  const paper = PAPERS[currentPaper];
  let singleScore = 0;
  let multiCorrect = 0;
  const results = paper.map((question, index) => {
    const answer = userAnswers[index];
    const result = { index, type: question.type };
    if (question.type === "single") {
      result.correct = answer.val === question.answer;
      if (result.correct) singleScore += 1;
      result.userDisplay = answer.val >= 0 ? question.options[answer.val] : "（未作答）";
      result.correctDisplay = question.options[question.answer];
    } else if (question.type === "multi") {
      result.correct = arraysEqual(answer.val, question.answer);
      if (result.correct) multiCorrect += 1;
      result.userDisplay = formatOptions(question, answer.val);
      result.correctDisplay = formatOptions(question, question.answer);
    } else {
      result.userDisplay = answer.val || "（未作答）";
      var subjKey;
      if (currentPaper === 3 && question.sourcePaper !== undefined) {
        subjKey = question.sourcePaper + "-" + question.sourceIndex;
      } else {
        subjKey = currentPaper + "-" + index;
      }
      result.reference = SUBJECTIVE_ANSWERS[subjKey] || "暂无参考答案";
    }
    return result;
  });

  const objectiveScore = singleScore + multiCorrect * 2;
  resultState = { paperIndex: currentPaper, objectiveScore, results };
  localStorage.removeItem(storageKey(currentPaper));
  renderResults(singleScore, multiCorrect, objectiveScore, results);
  saveWrongQuestions();
  saveExamRecord(singleScore, multiCorrect, objectiveScore, results);
  autoGradeAllSubjective();
}

function renderResults(singleScore, multiCorrect, objectiveScore, results) {
  const paper = PAPERS[currentPaper];
  let html = `<section class="score-card"><div class="big-score" id="totalScore">${objectiveScore}</div><p>客观题得分：单选 ${singleScore}/50，多选 ${multiCorrect * 2}/20，满分 70</p></section>`;
  html += '<section class="answer-review subj"><strong>主观题自评</strong><p style="color:#64748b;margin-top:6px">请对照参考答案自评，评完点击底部“计算总分”。</p></section>';

  const wrongResults = results.filter((result) => ["single", "multi"].includes(result.type) && !result.correct);
  if (wrongResults.length > 0) {
    html += '<section class="answer-review incorrect" id="wrong-summary"><strong>错题汇总</strong>';
    html += `<p style="color:#64748b;font-size:.9rem;margin:6px 0 12px">本次客观题共错 ${wrongResults.length} 题，已保存到首页错题册。</p>`;
    wrongResults.forEach((result) => {
      const question = paper[result.index];
      html += '<div style="border-top:1px solid var(--line);padding-top:10px;margin-top:10px">';
      html += '<strong>第 ' + (result.index + 1) + ' 题（' + (result.type === "single" ? "单选" : "多选") + '）</strong>';
      html += '<p style="font-size:.9rem;margin:6px 0">' + escapeHtml(question.q) + '</p>';
      html += '<p style="color:var(--danger);font-size:.85rem;margin:3px 0"><b>你的答案：</b>' + escapeHtml(result.userDisplay) + '</p>';
      html += '<p style="color:var(--ok);font-size:.85rem;margin:3px 0"><b>正确答案：</b>' + escapeHtml(result.correctDisplay) + '</p>';
      html += '</div>';
    });
    html += '</section>';
  } else {
    html += '<section class="answer-review correct" id="wrong-summary"><strong>错题汇总</strong><p style="color:#16a34a;font-size:.9rem;margin-top:6px">本次客观题全部正确。</p></section>';
  }

  results.forEach((result) => {
    const question = paper[result.index];
    const questionNumber = result.index + 1;
    if (["term", "short", "essay"].includes(result.type)) {
      const maxScore = subjectiveMaxScore(result.type);
      const label = { term: "名词解释", short: "简答题", essay: "病例分析" }[result.type];
      html += `<section class="answer-review subj"><strong>第 ${questionNumber} 题（${label}，${maxScore} 分）</strong>`;
      html += `<div class="question-text">${br(question.q)}</div>`;
      html += `<p style="color:#64748b;font-size:.9rem"><b>你的答案：</b><br>${br(result.userDisplay)}</p>`;
      html += `<div class="ref-answer"><b>参考答案：</b><br>${br(result.reference)}</div>`;
      html += '<div class="self-assess"><span style="font-size:.86rem;color:#64748b">自评：</span>';
      if (maxScore === 8) {
        html += `<button type="button" onclick="selfAssess(${result.index},8,this)">完全正确（8分）</button>`;
        html += `<button type="button" onclick="selfAssess(${result.index},6,this)">大部分正确（6分）</button>`;
        html += `<button type="button" onclick="selfAssess(${result.index},4,this)">基本正确（4分）</button>`;
        html += `<button type="button" onclick="selfAssess(${result.index},0,this)">基本不会（0分）</button>`;
      } else {
        html += `<button type="button" onclick="selfAssess(${result.index},${maxScore},this)">完全正确</button>`;
        html += `<button type="button" onclick="selfAssess(${result.index},${Math.round(maxScore / 2)},this)">部分正确</button>`;
        html += `<button type="button" onclick="selfAssess(${result.index},0,this)">基本不会</button>`;
      }
      html += '<button class="btn ai-grade-btn" type="button" onclick="aiGradeSubjective(' + result.index + ')">AI 批改</button>';
      html += '</div><div class="ai-grade-box" id="ai-grade-' + result.index + '"></div></section>';
    } else {
      html += `<section class="answer-review ${result.correct ? "correct" : "incorrect"}">`;
      html += `<strong>第 ${questionNumber} 题 ${result.correct ? "✓ 正确" : "✗ 错误"}</strong>`;
      html += `<div class="question-text">${br(question.q)}</div>`;
      html += `<p style="color:${result.correct ? "#16a34a" : "#dc2626"};font-size:.9rem"><b>你的答案：</b>${escapeHtml(result.userDisplay)}</p>`;
      if (!result.correct) {
        html += '<p style="color:#16a34a;font-size:.9rem"><b>正确答案：</b>' + escapeHtml(result.correctDisplay) + '</p>';
        html += '<button class="btn ai-explain-btn" type="button" onclick="aiExplainWrong(' + result.index + ')">AI 解析</button>';
        html += '<div class="ai-explain-box" id="ai-explain-' + result.index + '"></div>';
      }
      html += "</section>";
    }
  });

  html += '<div style="text-align:center;margin:22px 0"><button class="btn btn-primary" type="button" onclick="calcTotalScore()">计算总分</button></div>';
  html += '<section id="finalScoreBox" style="display:none;text-align:center"><div class="big-score" id="finalScore" style="color:#2f5bea"></div><div id="finalGrade" style="font-size:1.25rem;font-weight:800;margin-top:6px"></div></section>';
  html += '<div style="text-align:center;margin:24px 0"><button class="btn" type="button" onclick="backToLanding()">返回试卷选择</button></div>';

  byId("examArea").style.display = "none";
  byId("sidebar").style.display = "none";
  byId("results").style.display = "block";
  byId("results").innerHTML = html;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selfAssess(questionIndex, score, button) {
  if (button) {
    button.parentElement.querySelectorAll("button").forEach((item) => item.classList.remove("picked"));
    button.classList.add("picked");
  }
  selfScores[questionIndex] = score;
  updateTotalScoreDisplay();
}

function updateTotalScoreDisplay() {
  if (!resultState) return;
  const total = resultState.objectiveScore + currentSubjectiveScore();
  const el = document.getElementById("totalScore");
  if (el) el.textContent = String(total);
}

function currentSubjectiveScore() {
  if (!resultState) return 0;
  const paper = PAPERS[resultState.paperIndex];
  return paper.reduce((total, question, index) => {
    if (["term", "short", "essay"].includes(question.type) && selfScores[index] !== undefined) {
      return total + selfScores[index];
    }
    return total;
  }, 0);
}

function calcTotalScore() {
  if (!resultState) return;
  const total = resultState.objectiveScore + currentSubjectiveScore();
  const grade = total >= 90 ? "优秀" : total >= 80 ? "良好" : total >= 70 ? "中等" : total >= 60 ? "及格" : "需努力";
  byId("finalScoreBox").style.display = "block";
  byId("finalScore").textContent = `${total} / 100`;
  byId("finalGrade").textContent = grade;
  byId("totalScore").textContent = `${total}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  if (examActive) {
    saveProgress();
    if (!confirm("确定返回主页吗？当前进度已保存，下次可继续。")) return;
  }
  if (currentPaper === 3) {
    localStorage.removeItem("pathology_random_paper");
    PAPERS[3] = null;
  }
  backToLanding();
}

function backToLanding() {
  examActive = false;
  clearInterval(timerInterval);
  currentPaper = -1;
  resultState = null;
  selfScores = {};
  document.body.classList.remove("exam-open");
  byId("examArea").style.display = "none";
  byId("sidebar").style.display = "none";
  byId("results").style.display = "none";
  byId("landing").style.display = "flex";
}

function saveExamRecord(singleScore, multiCorrect, objectiveScore, results) {
  try {
    const paper = PAPERS[currentPaper];
    const paperName = PAPER_NAMES[currentPaper];
    const now = new Date();
    const ts = now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, "0") + "-" +
      String(now.getDate()).padStart(2, "0") + " " +
      String(now.getHours()).padStart(2, "0") + ":" +
      String(now.getMinutes()).padStart(2, "0");
    const record = {
      ts: ts,
      paperName: paperName,
      singleScore: singleScore,
      multiScore: multiCorrect * 2,
      objectiveScore: objectiveScore,
      totalQuestions: paper.length
    };
    var history = [];
    var raw = localStorage.getItem(HISTORY_KEY);
    if (raw) { try { history = JSON.parse(raw); } catch(e) {} }
    history.push(record);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch(e) {}
}

function showHistory() {
  var history = [];
  try { history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch(e) {}
  if (history.length === 0) {
    alert("??????");
    return;
  }
  var html = '<div id="historyOverlay" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,.6);z-index:200;display:flex;align-items:center;justify-content:center" onclick="if(event.target===this)this.remove()">';
  html += '<div style="background:#fff;border-radius:18px;padding:24px;max-width:660px;width:90%;max-height:80vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.25)">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><h2 style="font-size:1.2rem;margin:0">???? (' + history.length + '?)</h2>';
  html += '<div><button class="btn" style="font-size:.82rem;padding:6px 12px;margin-right:8px" onclick="clearHistory()">??</button>';
  html += '<button class="btn" style="font-size:.82rem;padding:6px 12px" onclick="document.getElementById(\"historyOverlay\").remove()">??</button></div></div>';

  // Reverse chronological order (newest first)
  for (var i = history.length - 1; i >= 0; i--) {
    var r = history[i];
    var pct = r.objectiveScore ? Math.round(r.objectiveScore / 70 * 100) : 0;
    var color = pct >= 80 ? "var(--ok)" : pct >= 60 ? "var(--warn)" : "var(--danger)";
    html += '<div style="background:#f8fafc;border-radius:12px;padding:14px 16px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">';
    html += '<div><strong>' + escapeHtml(r.paperName) + '</strong><span style="color:var(--muted);font-size:.82rem;margin-left:8px">' + escapeHtml(r.ts) + '</span></div>';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<span style="font-size:.9rem;color:var(--muted)">?? ' + (r.singleScore || 0) + '/50 ?? ' + (r.multiScore || 0) + '/20</span>';
    html += '<span style="font-weight:900;font-size:1.1rem;color:' + color + '">' + (r.objectiveScore || 0) + '/70 (' + pct + '%)</span>';
    html += '</div></div>';
  }
  html += '</div></div>';
  document.body.insertAdjacentHTML("beforeend", html);
}

function clearHistory() {
  if (confirm("?????????????")) {
    localStorage.removeItem(HISTORY_KEY);
    var overlay = document.getElementById("historyOverlay");
    if (overlay) overlay.remove();
    alert("???????");
  }
}

function saveWrongQuestions() {
  if (!resultState) return;
  const paper = PAPERS[resultState.paperIndex];
  let book = [];
  try { book = JSON.parse(localStorage.getItem(WRONG_BOOK_KEY) || "[]"); } catch(e) {}
  resultState.results.forEach((r) => {
    const q = paper[r.index];
    if (["single", "multi"].includes(r.type) && !r.correct) {
      const key = PAPER_NAMES[resultState.paperIndex] + "-" + r.index;
      if (!book.find(e => e.key === key)) {
        book.push({
          key: key,
          paper: PAPER_NAMES[resultState.paperIndex],
          paperIndex: resultState.paperIndex,
          index: r.index,
          type: r.type,
          question: q.q,
          options: q.options || [],
          userAnswer: r.userDisplay,
          correctAnswer: r.correctDisplay,
          time: new Date().toISOString().slice(0, 10)
        });
      }
    }
  });
  localStorage.setItem(WRONG_BOOK_KEY, JSON.stringify(book));
}

function showWrongBook() {
  let book = [];
  try { book = JSON.parse(localStorage.getItem(WRONG_BOOK_KEY) || "[]"); } catch(e) {}
  if (book.length === 0) {
    alert("暂无错题记录");
    return;
  }
  let html = '<div id="wrongBookOverlay" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,.6);z-index:200;display:flex;align-items:center;justify-content:center" onclick="if(event.target===this)this.remove()">';
  html += '<div style="background:#fff;border-radius:18px;padding:24px;max-width:720px;width:90%;max-height:80vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.25)">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><h2 style="font-size:1.2rem">错题册 (' + book.length + '题)</h2>';
  html += '<div><button class="btn" style="font-size:.82rem;padding:6px 12px;margin-right:8px" onclick="clearWrongBook()">清空</button>';
  html += '<button class="btn" style="font-size:.82rem;padding:6px 12px" onclick="document.getElementById(\"wrongBookOverlay\").remove()">关闭</button></div></div>';

  // Group by paper
  const groups = {};
  book.forEach(e => { if (!groups[e.paper]) groups[e.paper] = []; groups[e.paper].push(e); });

  for (const [paperName, items] of Object.entries(groups)) {
    html += '<h3 style="color:var(--primary);margin:14px 0 8px;font-size:1rem">' + escapeHtml(paperName) + '</h3>';
    items.forEach(e => {
      html += '<div style="background:#fef2f2;border-left:4px solid var(--danger);border-radius:10px;padding:12px 14px;margin-bottom:10px">';
      html += '<strong>第 ' + (e.index + 1) + ' 题 (' + (e.type === "single" ? "单选" : "多选") + ')</strong>';
      html += '<p style="margin:6px 0;font-size:.92rem">' + escapeHtml(e.question) + '</p>';
      html += '<p style="color:var(--danger);font-size:.85rem;margin:3px 0"><b>你的答案：</b>' + escapeHtml(e.userAnswer) + '</p>';
      html += '<p style="color:var(--ok);font-size:.85rem;margin:3px 0"><b>正确答案：</b>' + escapeHtml(e.correctAnswer) + '</p>';
      html += '</div>';
    });
  }
  html += '</div></div>';
  document.body.insertAdjacentHTML("beforeend", html);
}

function clearWrongBook() {
  if (confirm("确定要清空所有错题记录吗？")) {
    localStorage.removeItem(WRONG_BOOK_KEY);
    const overlay = document.getElementById("wrongBookOverlay");
    if (overlay) overlay.remove();
    alert("错题册已清空");
  }
}

function getApiKey() {
  if (deepseekApiKey) return deepseekApiKey;
  deepseekApiKey = (localStorage.getItem(AI_STORAGE_KEY) || "").trim();
  return deepseekApiKey;
}

function saveApiKey(key) {
  deepseekApiKey = key.trim();
  localStorage.setItem(AI_STORAGE_KEY, deepseekApiKey);
  var statusEl = byId("apiKeyStatus");
  if (statusEl) statusEl.textContent = deepseekApiKey ? "✓ API Key 已保存" : "";
}

async function callDeepSeek(systemPrompt, userPrompt) {
  const key = getApiKey();
  if (!key) throw new Error("API Key 未设置");
  const resp = await fetch(DEEPSEEK_API_BASE + "/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.3,
      max_tokens: 2048
    })
  });
  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error?.message || "API 请求失败: " + resp.status);
  }
  const data = await resp.json();
  return data.choices[0].message.content;
}

async function aiExplainWrong(index) {
  if (!resultState) return;
  const result = resultState.results[index];
  const question = PAPERS[resultState.paperIndex][index];
  const box = byId("ai-explain-" + index);
  if (!box) return;
  box.innerHTML = '<span style="color:var(--muted)">正在请 DeepSeek 解析...</span>';
  try {
    const systemPrompt = "你是一位病理学教授。请用中文简要解释这道病理学题目的正确答案，说明为什么这个答案是正确的，并指出常见错误选项的误区。请直接给出解析，不要问候。";
    const userPrompt = "题目：" + question.q + "\n选项：" + question.options.join("\n") + "\n正确答案：" + result.correctDisplay + "\n我的答案：" + result.userDisplay;
    const content = await callDeepSeek(systemPrompt, userPrompt);
    box.innerHTML = '<div class="ai-response"><strong>✓ AI 解析</strong><p>' + br(content) + '</p></div>';
    aiResponses[index] = content;
  } catch (e) {
    box.innerHTML = '<div class="ai-response ai-error"><strong>✗ 解析失败</strong><p>' + escapeHtml(e.message) + '</p></div>';
  }
}

async function aiGradeSubjective(index) {
  if (!resultState) return;
  const result = resultState.results[index];
  const question = PAPERS[resultState.paperIndex][index];
  const maxScore = subjectiveMaxScore(result.type);
  const box = byId("ai-grade-" + index);
  if (!box) return;
  box.innerHTML = '<span style="color:var(--muted)">正在请 DeepSeek 批改...</span>';
  try {
    const systemPrompt = "你是一位病理学教授。请根据参考答案，对学生作答进行批改。请给出：1) 得分（满分" + maxScore + "分） 2) 简短评语 3) 改进建议。请直接给出批改结果，不要问候。最后一行用【得分：X】格式输出分数。";
    const userPrompt = "题目：" + question.q + "\n参考答案：" + (result.reference || "无") + "\n学生作答：" + (result.userDisplay || "（未作答）");
    const content = await callDeepSeek(systemPrompt, userPrompt);
    box.innerHTML = '<div class="ai-response"><strong>✓ AI 批改</strong><p>' + br(content) + '</p></div>';
    aiResponses[index] = content;
    const scoreMatch = content.match(/【得分[：:]\s*(\d+)】/);
    if (scoreMatch) {
      const score = parseInt(scoreMatch[1]);
      selfScores[index] = Math.min(score, maxScore);
      updateTotalScoreDisplay();
    }
  } catch (e) {
    box.innerHTML = '<div class="ai-response ai-error"><strong>✗ 批改失败</strong><p>' + escapeHtml(e.message) + '</p></div>';
  }
}


async function autoGradeAllSubjective() {
  if (!resultState || !getApiKey()) return;
  const paper = PAPERS[resultState.paperIndex];
  for (let i = 0; i < paper.length; i++) {
    const q = paper[i];
    if (["term", "short", "essay"].includes(q.type)) {
      await aiGradeSubjective(i);
      await new Promise(r => setTimeout(r, 800));
    }
  }
}

window.addEventListener("keydown", (event) => {
  if (!examActive) return;
  if (event.key === "ArrowLeft") prevQ();
  if (event.key === "ArrowRight") nextQ();
});

checkResume();
loadApiKeyStatus();

function loadApiKeyStatus() {
  var key = getApiKey();
  var input = byId("apiKeyInput");
  if (input) input.value = key;
  var statusEl = byId("apiKeyStatus");
  if (statusEl) statusEl.textContent = key ? "✓ API Key 已载入" : "";
}
