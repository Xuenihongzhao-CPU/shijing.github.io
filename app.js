const STORAGE_KEY = 'shijing-history-session-v1';

const roles = {
  li: {
    name: '李鸿章', initial: '李', group: '洋务官僚', years: '1823—1901', focus: '自强求富 · 外交与军务', color: 'red',
    sources: ['《筹办夷务始末》', '《李文忠公全书》'],
    bio: '晚清重臣，长期主持洋务、外交与军务事务。',
    intro: '阁下所问，须放在今日国势与中外形势之中。若只凭一端议论，恐怕难见全局。',
    motivations: '自咸丰以来，外患屡至，旧有兵器与营制已显不足。我所思量，是先求军器、船炮与练兵之实效，使国家稍有自保之力。至于更张制度，牵涉甚广，非一朝一夕所能骤成。',
    reform: '我主张先办洋务，以求自强、求富。机器、船炮、铁路、电报，皆可择其有益者而用；然而政体与纲常之事，不能因一时之说便轻易动摇。',
    people: '百姓所受的赋税、兵役与生计艰难，我并非不知。只是国势日危，若不能先有自保之具，内政与民生也难得安稳。此中轻重缓急，须细加权衡。',
    foreign: '列强以兵舰、商约相逼，固然不能只以和议苟安；但国力未充时，也不可贸然开战。外交之道，有时须争，有时须缓，皆要看实力如何。',
    limits: '甲午之后，旧日所办之事未能挽回败局，这是事实。至于其中制度、用人和财力的局限，后人已有不少议论。我当时所见所能，也受时代与职分所限。',
    fallback: '关于这个问题，可从我的奏折与文集所记的军务、外交和洋务活动入手，再结合当时的国势与中外形势作判断。涉及个人未曾明言的细节，应依据实际行动而不是后人的想象来解释。',
    prompts: ['您为何先主张“自强求富”？', '洋务运动能否解决国家危机？', '您怎样看待百姓所承受的负担？']
  },
  kang: {
    name: '康有为', initial: '康', group: '维新派士人', years: '1858—1927', focus: '变法图强 · 制度更新',
    sources: ['《请定立宪开国会折》', '《孔子改制考》'],
    bio: '清末维新派代表人物，主张以变法推动国家富强。',
    intro: '你且问来。国事到了这般地步，不能只守着旧章说太平；但一事之成败，也不可脱离当时的局势来谈。',
    motivations: '甲午战败之后，我更深切地感到，若只添置船炮而不改制度，国家仍难自立。日本变法而强，中国若仍因循守旧，恐怕会一步步陷入危局。',
    reform: '变法的要点，不只是购置器物，还在于育人才、开学校、变科举、整官制，使上下能够通达，国家能够自我更新。这些主张，我在奏折与著述中多有陈说。',
    people: '若制度不能使民间有进取之路，若官府不能知百姓疾苦，所谓富强便只是空名。兴学、开议院等事，虽是制度安排，最终也关乎民生与人才。',
    foreign: '西人之长，不独在船坚炮利，也在制度与学术。不可因是外国之物便一概拒绝，更不可不加辨析便全盘仿效，须取其有益于中国者。',
    limits: '戊戌变法的时间很短，阻力却很大。变法过急、根基未固，以及权力格局的牵制，都是后来应当反思之处。至于每一环节的细节，须以奏折、日记等材料相互参证。',
    fallback: '关于这个问题，可从我关于变法、学术与制度的著述入手，结合戊戌时期的政治局势与制度阻力作判断。具体情节应回到奏折、日记和原始材料逐项核对。',
    prompts: ['为什么只办洋务还不够？', '您设想的变法如何惠及百姓？', '戊戌变法为何没有成功？']
  },
  zhang: {
    name: '张之洞', initial: '张', group: '地方督抚', years: '1837—1909', focus: '中体西用 · 教育与实业',
    sources: ['《劝学篇》', '《张文襄公全集》'],
    bio: '晚清重臣，兴办学堂、工厂与新式军队，强调中学根本。',
    intro: '你所问之事，当分本末、辨缓急。中国之学为体，西学之术为用，不可混淆。',
    motivations: '国事日艰，非学习西人之长不能自强；但若因此废弃伦常与经学，则又失其根本。故我说中学为体，西学为用，正是要在变与不变之间求其当。',
    reform: '我以为学堂、实业、练兵都是当务之急。新学可以补旧学之不足，但教化与立国之本不能轻弃。改革若没有教育和人才承接，也难以持久。',
    people: '办学与兴业，终究要看是否能使国家有用之才增多、民间生计改善。若只在章程上增添名目，而不问成效，便不是求实之道。',
    foreign: '西学中的算学、格致、机器制造，皆可学习；至于政治制度，不能只见其表面便轻率移植，须察中国国情与风俗。',
    limits: '中体西用可以解释我对改革边界的坚持，但它也确有局限：若把制度变革仅仅看作器物与技术之事，便难以触及更深的矛盾。对此，后人可以据史料评议。',
    fallback: '关于我的私人想法，应以已经留下的奏折、著述和实际行动为依据，结合秦汉制度与政治处境作谨慎解释，不把后人的推测当作人物原话。',
    prompts: ['“中体西用”具体要解决什么？', '为什么要兴办新式学堂？', '您如何看待制度变革？']
  },
  zheng: {
    name: '郑观应', initial: '郑', group: '工商业者', years: '1842—1921', focus: '商战 · 实业与议政',
    sources: ['《盛世危言》', '《救时揭要》'],
    bio: '近代实业家与思想家，长期关注商务、实业和国家富强。',
    intro: '商情与国事本来相通。你若问中国为何积弱，不能只看战场，也要看商务、工艺与制度。',
    motivations: '西人以商立国，以工制胜；中国若只知守旧而不振兴商务，财源与国力便会日渐枯竭。我所说商战，并非只为商人谋利，而是要使国家有自立之本。',
    reform: '兴办实业、保护商利、改良教育，并让民间有参与政事的渠道，都是我在《盛世危言》中反复讨论的。器物要办，制度与人的观念也要相应改变。',
    people: '民间有生计，国家才有税源与根基。若官府处处限制商民，又不能提供公平的规则，实业便难以发展，百姓也难从中得益。',
    foreign: '通商既带来利益，也带来压迫。若没有自己的工厂、商船与金融，便只能受制于人；所以不能因惧怕竞争而闭关，也不能毫无准备地开放。',
    limits: '我所见主要来自商界与沿海社会，不能代表所有阶层的处境。关于内地农民、妇女或某些地方的具体经历，史料并不充分，不能任意代言。',
    fallback: '关于这个问题，可把我的议论与地方志、奏折及教材材料相互对照，从商界与沿海社会的处境出发作具体分析。我的文字主要呈现商务、实业与议政立场，不宜代替其他阶层发言。',
    prompts: ['为什么把“商战”看作救国之道？', '实业发展与百姓生计有何关系？', '开放通商会带来哪些矛盾？']
  },
  song: {
    name: '宋景诗', initial: '宋', group: '民众抗争者', years: '约1835—1871', focus: '民变 · 生计与秩序',
    sources: ['《清史稿·宋景诗传》', '地方档案与相关史料汇编'],
    bio: '山东民众抗争的参与者。关于其个人言论的可靠记录相对有限。',
    intro: '我所经历的，是乡里困苦、官府催逼与乱局相互纠缠的年月。你问我个人心迹，须知道留下的文字并不多。',
    motivations: '乡里遭逢灾荒、赋役与兵乱，许多人失去生计。至于每一件事究竟由谁先起、谁作何谋划，材料说法并不完全一致，不能替史料强作断语。',
    reform: '我不是朝廷议政之臣，也没有留下系统的制度主张。若问怎样改变天下，我只能说先要让乡民有饭吃、有活路、有可以申诉的地方。',
    people: '对普通人来说，国家大义并不是抽象的词，往往先落在粮食、土地、赋税与家人的安危上。可这些感受，在官府留下的文字里未必都能被看见。',
    foreign: '我所处的乡里生活，离外洋兵舰和通商大局较远。谈到外交或洋务，应结合乡里遭遇的赋役、兵乱与地方秩序来理解，不把未曾留下的经历补成我的亲见。',
    limits: '关于我的经历，现存材料多出自官府记录，带有特定立场；民间声音保存得很少。你应当把不同来源放在一起，分辨哪些是事实，哪些是评价。',
    fallback: '关于这个问题，可以从灾荒、赋役、兵乱与乡里生计的实际处境来分析，再把官府记录、地方材料和不同立场的记载放在一起比较。我的回答只限于这些经历所能说明的范围。',
    prompts: ['普通百姓最在意什么？', '官府记录能否代表你的真实处境？', '为什么有关你的史料相对有限？']
  }
};

const periods = {
  preqin: {
    name: '先秦',
    date: '约前770—前221',
    contextTitle: '诸侯竞逐与思想开新',
    contextLead: '礼制秩序松动，诸侯竞争加剧，思想家们开始追问国家应当如何治理。',
    timeline: [['前770','东周开始','王室权威逐渐下移'],['前551','孔子生','儒家思想形成重要源流'],['前475','战国开始','变法与兼并成为时代议题'],['前221','秦统一','诸侯时代走向帝国时代']],
    projects: [
      {id:'preqin-voices', title:'诸子百家·思想交锋', desc:'在不同学派立场中讨论“如何治理天下”。', status:'可制作'},
      {id:'preqin-warring', title:'战国合纵与连横', desc:'以外交使者身份分析诸侯选择。', status:'可制作'},
      {id:'preqin-bronze', title:'青铜时代的秩序', desc:'从器物与礼制材料解释社会结构。', status:'筹备中'},
      {id:'preqin-qin', title:'秦的统一与变革', desc:'探究郡县、法治与国家整合。', status:'可制作'}
    ]
  },
  qinhan: {
    name: '秦汉',
    date: '前221—220',
    contextTitle: '帝国建立与文明交汇',
    contextLead: '统一国家建立，制度、边疆、交通与思想共同塑造了秦汉时代的秩序。',
    timeline: [['前221','秦统一六国','郡县制与中央集权展开'],['前202','西汉建立','国家秩序逐步恢复'],['前138','张骞出使西域','丝绸之路交流展开'],['220','东汉结束','长期统一格局发生变化']],
    projects: [
      {id:'qinhan-empire', title:'帝国如何建立', desc:'从地方视角理解统一与制度整合。', status:'可制作'},
      {id:'qinhan-silkroad', title:'丝路上的相遇', desc:'以使者、商人和居民身份阅读交流史料。', status:'可制作'},
      {id:'qinhan-law', title:'秦法与民生', desc:'辨析严密治理与社会承受之间的张力。', status:'筹备中'},
      {id:'qinhan-han', title:'汉武帝的选择', desc:'围绕边疆、财政与思想统一展开研讨。', status:'可制作'}
    ]
  },
  suiTang: {
    name: '隋唐',
    date: '581—907',
    contextTitle: '开放帝国与多元社会',
    contextLead: '统一国家重建，交通、科举与城市发展推动了人口、制度和文化的流动。',
    timeline: [['581','隋朝建立','南北重新走向统一'],['605','大运河开通','南北物资与人口联系加强'],['618','唐朝建立','制度与文化进一步发展'],['755','安史之乱','盛唐秩序受到重大冲击']],
    projects: [
      {id:'suitang-canal', title:'大运河与国家', desc:'比较工程建设、漕运与普通民众的处境。', status:'可制作'},
      {id:'suitang-changAn', title:'长安城的多元生活', desc:'从城市居民视角探究文明交流。', status:'可制作'},
      {id:'suitang-exam', title:'科举与士人道路', desc:'讨论制度如何改变个人命运。', status:'可制作'},
      {id:'suitang-frontier', title:'盛唐边疆议题', desc:'在多种史料立场中解释边疆治理。', status:'筹备中'}
    ]
  },
  songyuan: {
    name: '宋元',
    date: '960—1368',
    contextTitle: '城市繁荣与多民族往来',
    contextLead: '商品经济、科技发展与多民族政权并立，共同带来社会结构和生活方式的变化。',
    timeline: [['960','北宋建立','文官政治与城市发展展开'],['1040','活字印刷出现','知识传播方式发生变化'],['1271','元朝建立','多民族交往范围扩大'],['1279','南宋灭亡','全国重新形成统一政权']],
    projects: [
      {id:'songyuan-commerce', title:'城市与商业革命', desc:'以商人、手工业者身份观察经济变化。', status:'可制作'},
      {id:'songyuan-science', title:'科技为何在此时发展', desc:'从印刷、火药与航海材料提出历史解释。', status:'可制作'},
      {id:'songyuan-frontier', title:'多民族政权的往来', desc:'辨析战争、贸易与文化交流的关系。', status:'可制作'},
      {id:'songyuan-jiangnan', title:'江南社会的变迁', desc:'从地方文书中还原基层生活。', status:'筹备中'}
    ]
  },
  mingqing: {
    name: '明清',
    date: '1368—1840',
    contextTitle: '统一多民族国家与海贸变局',
    contextLead: '国家治理、边疆经营和海上贸易交织在一起，传统秩序也逐渐面对新的世界联系。',
    timeline: [['1368','明朝建立','汉地重新形成统一政权'],['1405','郑和下西洋','海上交流范围扩大'],['1644','清军入关','新的国家秩序建立'],['1684','清设台湾府','东南海疆治理加强']],
    projects: [
      {id:'mingqing-maritime', title:'海禁与海贸', desc:'在国家政策与民间贸易之间寻找证据。', status:'可制作'},
      {id:'mingqing-society', title:'晚明社会新气象', desc:'从思想、商业与城市材料理解变化。', status:'可制作'},
      {id:'mingqing-frontier', title:'清代国家版图', desc:'探究统一多民族国家的形成与治理。', status:'可制作'},
      {id:'mingqing-opium', title:'鸦片战争前夜', desc:'从中外多方立场分析危机的积累。', status:'筹备中'}
    ]
  },
  modern: {
    name: '近代中国',
    date: '1840—1919',
    contextTitle: '旧秩序与新事物相撞',
    contextLead: '外患、制度危机与社会变迁相互交织，国家、士人和普通民众都在寻找出路。',
    timeline: [['1840','鸦片战争','中国被卷入新的世界格局'],['1861','洋务运动兴起','自强求富成为重要议题'],['1895','甲午战争','变法图强呼声进一步高涨'],['1898','戊戌变法','制度变革进入现实试验']],
    projects: [
      {id:'modern-dialogue', title:'近代人物角色对话', desc:'与洋务官僚、维新士人和民众抗争者对话。', status:'当前项目', implemented:true},
      {id:'modern-opium', title:'鸦片战争与时代转折', desc:'在史料约束下解释中国社会的变局。', status:'可制作'},
      {id:'modern-selfstrengthening', title:'洋务运动的道路选择', desc:'比较器物、制度与民生的不同答案。', status:'可制作'},
      {id:'modern-reform', title:'戊戌变法的多重视角', desc:'从支持、反对与旁观者立场开展研讨。', status:'可制作'}
    ]
  }
};

const defaultQuestions = ['结合本次对话，概括该人物解决时代问题的主要路径，并指出其依据。', '该人物的主张回应了哪些时代需求？又受到怎样的知识与身份限制？', '对话中哪些内容属于人物的自我辩护？你会用什么史料进一步验证？'];

let state = loadState();
let selectedRole = state.roleId || 'kang';
let selectedPeriod = periods[state.periodId] ? state.periodId : 'modern';
let selectedProject = periods[selectedPeriod].projects.some(project=>project.id===state.projectId) ? state.projectId : periods[selectedPeriod].projects[0].id;
let projectViewOpen = false;
let responseQueue = [];
let responseProcessing = false;
let conversationToken = 0;

const $ = (selector) => document.querySelector(selector);
const roleGrid = $('#role-grid');
const messageList = $('#message-list');
const questionList = $('#question-list');
const notes = $('#notes');

const choicePool = {
  li: ['您为何先主张“自强求富”？', '如果只办洋务，能否解决国家危机？', '您怎样看待百姓所承受的负担？', '甲午战败后，您认为最应先改变什么？', '外交与军务之间，您如何权衡？', '您如何回应“洋务只学器物”的质疑？'],
  kang: ['为什么只办洋务还不够？', '您设想的变法如何惠及百姓？', '戊戌变法为何没有成功？', '您为何认为制度更新比添置船炮更重要？', '您如何看待学习西方制度？', '变法过急可能带来什么问题？'],
  zhang: ['“中体西用”具体要解决什么？', '为什么要兴办新式学堂？', '您如何看待制度变革？', '学习西学应当守住哪些边界？', '教育与国家富强之间有什么关系？', '怎样判断一项改革是否真正有效？'],
  zheng: ['为什么把“商战”看作救国之道？', '实业发展与百姓生计有何关系？', '开放通商会带来哪些矛盾？', '商人为什么需要参与国家议政？', '如何避免通商变成受制于人？', '您认为中国最需要补上的实业环节是什么？'],
  song: ['普通百姓最在意什么？', '官府记录能否代表你的真实处境？', '为什么有关你的史料相对有限？', '赋税与生计困难如何影响乡里选择？', '不同立场的史料应当怎样互相参证？', '你认为“秩序”与“活路”哪个更急迫？']
};

function loadState(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {roleId:'kang',messages:[],notes:'',questions:[]};}
  catch{return {roleId:'kang',messages:[],notes:'',questions:[]};}
}

function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify({...state,roleId:selectedRole,periodId:selectedPeriod,projectId:selectedProject,notes:notes?.value || '',questions:getQuestions()}));}
function currentRoleIds(){return projectProfiles[currentProject().id]?.characterIds || Object.keys(roles)}
function currentRoleSet(){return Object.fromEntries(currentRoleIds().map(id=>[id,roles[id]||characterBank[id]]).filter(([,role])=>Boolean(role)))}
function normalizeSelectedRole(){const roleSet=currentRoleSet();if(!roleSet[selectedRole])selectedRole=Object.keys(roleSet)[0]||'kang'}
function currentRole(){normalizeSelectedRole();return currentRoleSet()[selectedRole] || roles.kang}
function currentPeriod(){return periods[selectedPeriod]}
function currentProject(){const project=currentPeriod().projects.find(item=>item.id===selectedProject) || currentPeriod().projects[0];return {...project,...(projectProfiles[project.id]||{})}}
function documentQuestionsFor(project=currentProject(),role=currentRole()){
  const entries=Object.entries(window.documentQA||{});
  const match=entries.find(([theme,people])=>theme.endsWith(`·${project.title}`) && people[role.name]);
  if(!match)return [];
  return match[1][role.name].filter(item=>item.question && item.answer && !item.answer.trim().endsWith('是'));
}
function getQuestions(){return [...questionList.querySelectorAll('.question-item')].map(el=>el.textContent.replace(/^题目\s*\d+\s*/,'').trim())}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}

function renderRoles(){
  normalizeSelectedRole();
  roleGrid.innerHTML = Object.entries(currentRoleSet()).map(([id,role])=>`<button class="role-card ${id===selectedRole?'is-selected':''}" data-role="${id}" type="button"><span class="selected-mark">●</span><span class="role-portrait">${role.initial}</span><h3>${role.name}</h3><small>${role.group}</small></button>`).join('');
  roleGrid.querySelectorAll('.role-card').forEach(card=>card.addEventListener('click',()=>selectRole(card.dataset.role)));
  $('#role-count').textContent = Object.keys(currentRoleSet()).length;
}

function renderDirectory(){
  $('#period-tabs').innerHTML=Object.entries(periods).map(([id,period])=>`<button class="period-tab ${id===selectedPeriod?'is-active':''}" data-period="${id}" type="button" role="tab" aria-selected="${id===selectedPeriod}">${period.name}</button>`).join('');
  $('#period-tabs').querySelectorAll('.period-tab').forEach(tab=>tab.addEventListener('click',()=>selectPeriod(tab.dataset.period)));
  const period=currentPeriod();
  $('#project-grid').innerHTML=period.projects.map(project=>`<button class="project-card ${project.id===selectedProject?'is-selected':''}" data-project="${project.id}" type="button"><span class="project-status">${project.id===selectedProject?'已选中':project.status}</span><h3>${project.title}</h3><p>${project.desc}</p></button>`).join('');
  $('#project-grid').querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',()=>openProject(card.dataset.project)));
  $('#current-period-label').textContent=`${period.name} · ${period.date}`;
  $('#current-project-label').textContent=currentProject().title;
}

function renderContext(){
  const period=currentPeriod();
  $('#context-era').textContent=period.date;
  $('#context-title').textContent=period.contextTitle;
  $('#context-lead').textContent=period.contextLead;
  $('#timeline').innerHTML=period.timeline.map((item,index)=>`<div class="timeline-item ${index===0?'is-active':''}"><span class="timeline-dot"></span><div><strong>${item[0]}</strong><small>${item[1]} · ${item[2]}</small></div></div>`).join('');
}

function applyProjectAvailability(){
  const project=currentProject();
  const isPlaceholder=projectViewOpen&&!project.implemented&&!projectProfiles[project.id];
  document.body.classList.toggle('project-placeholder-mode',isPlaceholder);
  $('#placeholder-period').textContent=`${currentPeriod().name} · ${currentPeriod().date}`;
  $('#placeholder-project').textContent=project.title;
  $('#placeholder-summary').textContent=project.desc;
}

function applyViewMode(){
  document.body.classList.toggle('directory-mode',!projectViewOpen);
  $('#crumb-current').textContent=projectViewOpen?`${currentPeriod().name} · ${currentProject().title}`:'历史时期目录';
  applyProjectAvailability();
}

function openDirectory(){
  projectViewOpen=false;
  applyViewMode();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openProject(id){
  const projectChanged=selectedProject!==id;
  selectedProject=id;
  projectViewOpen=true;
  normalizeSelectedRole();
  if(projectChanged){conversationToken+=1;responseQueue=[];responseProcessing=false;state={...state,messages:[],questions:[]};renderMessages();renderQuestions(defaultQuestions)}
  renderDirectory();
  renderRoles();
  renderPersona();
  updateQuickPrompts();
  renderContext();
  applyViewMode();
  saveState();
  window.scrollTo({top:0,behavior:'smooth'});
  showToast(`已进入：${currentProject().title}`);
}

function selectPeriod(id){
  selectedPeriod=id;
  selectedProject=periods[id].projects[0].id;
  renderDirectory();
  saveState();
  showToast(`已切换到 ${periods[id].name} 时期目录`);
}

function selectProject(id){
  selectedProject=id;
  renderDirectory();
  saveState();
  showToast(`当前项目：${currentProject().title}`);
}

function selectRole(id){
  selectedRole=id; conversationToken+=1; responseQueue=[]; responseProcessing=false; state={...state,roleId:id,messages:[],questions:[]};
  renderRoles(); renderPersona(); renderMessages(); renderQuestions(defaultQuestions); updateQuickPrompts(); saveState();
  showToast(`已进入 ${currentRole().name} 的时代视角`);
}

function renderPersona(){const role=currentRole();$('#persona-avatar').textContent=role.initial;$('#persona-name').textContent=role.name}

function initialMessage(){const role=currentRole();return {who:'role',text:role.intro,evidence:`参考：${role.sources.join('、')}`}}

function renderMessages(){
  const messages=state.messages?.length?state.messages:[initialMessage()];
  messageList.innerHTML=messages.map(message=>messageHtml(message)).join('');
  messageList.scrollTop=messageList.scrollHeight;
}
function messageHtml(message){const isUser=message.who==='user';return `<div class="message ${isUser?'user':'role'}"><div class="message-avatar">${isUser?'生':currentRole().initial}</div><div class="message-body"><div class="message-label">${isUser?'探究者':currentRole().name}</div><div class="message-bubble">${escapeHtml(message.text).replace(/\n/g,'<br>')}</div>${message.evidence?`<div class="evidence-line">${escapeHtml(message.evidence)}</div>`:''}</div></div>`}

function randomChoices(){const project=currentProject();const role=currentRole();const documentQuestions=documentQuestionsFor(project,role).map(item=>item.question);const projectQuestions=project.questions||[];const pool=(documentQuestions.length?documentQuestions:(projectQuestions.length?projectQuestions:(choicePool[selectedRole]||role.prompts))).map(question=>question.replaceAll('{人物}',role.name));const shuffled=[...pool];for(let index=shuffled.length-1;index>0;index-=1){const swap=Math.floor(Math.random()*(index+1));[shuffled[index],shuffled[swap]]=[shuffled[swap],shuffled[index]]}return shuffled.slice(0,3)}
function updateQuickPrompts(){
  const choices=randomChoices();
  $('#quick-prompts').innerHTML=choices.map((choice,index)=>`<button class="quick-prompt" data-choice="${escapeHtml(choice)}" type="button"><span>${String(index+1).padStart(2,'0')}</span>${escapeHtml(choice)}</button>`).join('');
  $('#quick-prompts').querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>submitMessage(btn.dataset.choice,btn)));
}

function classify(question){const q=question.toLowerCase();if(/材料|史料|依据|出处|证据|原始/.test(q))return 'evidence';if(/为什么|为何|原因|动机|缘由/.test(q))return 'motivations';if(/失败|局限|矛盾|问题|评价|成功|成败|代价|争议|边界/.test(q))return 'limits';if(/郡县|中央集权|统一国家|制度变化|帝国治理|法、|礼制|科举制度|国家治理/.test(q))return 'reform';if(/外国|列强|战争|甲午|通商|西人|西域|丝路|边疆|对外|海上|交流|外交|海防|鸦片/.test(q))return 'foreign';if(/百姓|民众|农民|民生|普通人|地方社会|商人|工匠|居民/.test(q))return 'people';if(/洋务|改革|变法|制度|学堂|学校|实业|商战|西学|自强|统一|中央|郡县|帝国|国家|治理|法|科举|大运河|工程|商业|科技|印刷|历法|海禁|海贸|疆域|版图/.test(q))return 'reform';return 'fallback'}
function historicalVoice(role){
  const group=role.group||'';
  if(/皇帝|太祖|世祖/.test(group))return {lead:'朕以为，',address:'朕'};
  if(/丞相|官员|督抚|大臣|将领/.test(group))return {lead:'臣以为，',address:'臣'};
  if(/使者|僧侣/.test(group))return {lead:'我所见，',address:'我'};
  if(/思想家|士人|士大夫|史学家|科学家|工匠|纵横家|政治人物/.test(group))return {lead:'我所论者，',address:'我'};
  return {lead:'我所经历的，',address:'我'};
}

function roleAnswerFrame(role,key,text){
  const isAncient=/前\d+|北宋|西周|东汉|唐|宋|元|明|清|隋/.test(role.years||'') || /皇帝|丞相|思想家|士人|士大夫|使者|工匠|官员|纵横家|政治人物/.test(role.group||'');
  if(!isAncient)return text;
  const voice=historicalVoice(role);
  if(text.startsWith(voice.lead))return text;
  return `${voice.lead}${text}`;
}

function sanitizeSourceStatement(text){
  return String(text)
    .replace(/现有材料不足，不能替其虚构自白。?/g,'人物的内心动机应结合其制度行动与当时处境作谨慎解释。')
    .replace(/作品中的论辩文字不能任意推导出未曾表达的政治方案。?/g,'作品中的论辩文字可用于分析其思想方向，具体政治方案仍应逐条核对文本。')
    .replace(/宫廷决策过程存在材料空白，不能替皇帝补写未留下的内心独白。?/g,'宫廷决策过程应结合实录、奏折与档案，从其已采取的行动分析决策取向。')
    .replace(/材料说法并不完全一致，不能替史料强作断语。?/g,'不同材料的记载角度并不相同，应结合事件经过与人物处境作比较判断。')
    .replace(/不能代表所有阶层的处境。?/g,'主要反映这一人物所处群体的经验，其他阶层还需结合相应材料观察。');
}

function hasRefusalLanguage(text){
  return /史料不足|材料不足|不能据此|不能冒充|不能任意代言|不能替没有|不能替其|尚不能给出可靠|现有史料并不足够|超出了我留下文字的主要范围/.test(text);
}

function constructiveAnswer(role,key,question,project){
  const focus=role.focus||'这一时代议题';
  const sources=role.sources.join('、');
  const stance=sanitizeSourceStatement(role.stance||role.motivations||role.reform||'现有材料显示，这一人物的判断与其身份和时代处境密切相关。');
  if(key==='people')return `谈到百姓与地方社会，不能只看制度的宏大目标，还要看它如何落到赋税、生计、迁徙、劳役与地方秩序上。就${focus}而言，${stance}因此，这一立场既可能改善国家整合或社会秩序，也可能把治理成本转移到普通人身上；判断其实际影响，应将人物文字与地方材料、民众生活记录对照。`;
  if(key==='foreign')return `放在对外关系中看，${focus}既关系到国家安全，也关系到交通、贸易、知识传播与边疆秩序。${stance}所以不能只用“开放”或“拒绝”概括这一选择，而应分别考察当时的目标、可用的力量以及由此产生的后果。${sources}可以作为核对这一判断的主要依据。`;
  if(key==='limits')return `若要说明这一立场的局限，须把它放回${project.title}所处的时代。${stance}它能够回应当时的一部分问题，却受身份位置、制度条件和当时知识范围所限；这正是理解其进步处与局限处的关键。`;
  return `关于“${question}”，可以从${focus}入手。${stance}结合${project.title}来看，人物的选择大致包含“要解决什么问题、采取什么办法、产生什么影响”三层：目标来自当时的现实压力，办法受人物身份与制度环境限制，影响则需要结合不同立场的材料加以比较。这样既能回答问题，也不会把后人的判断冒充人物原话。`;
}

function polishAnswer(role,key,text,question,project){
  if(hasRefusalLanguage(text))text=constructiveAnswer(role,key,question,project);
  return text.replace(/史料不足，?不能据此臆断。?/g,'这部分未留下直接记载，应结合人物身份与时代背景作谨慎判断。').replace(/史料不足，?不能冒充知晓。?/g,'这部分未留下直接记载，可结合人物所处的社会位置与时代背景作谨慎解释。');
}

function respond(question, role=currentRole(), project=currentProject()){
  const documentAnswer=documentQuestionsFor(project,role).find(item=>item.question===question);
  if(documentAnswer)return {who:'role',text:documentAnswer.answer,evidence:`主题：${project.title} · 参考：${role.sources.join('、')}`};
  const key=classify(question);
  let text=role[key] || role.fallback;
  if(key==='evidence')text=`可以直接核对的材料包括：${role.sources.join('、')}。这些材料能够支持的主要判断是：${role.motivations}。对于材料没有逐项写明的细节，应结合人物身份、时代背景和相关制度作谨慎解释，不把推测写成人物原话。`;
  text=polishAnswer(role,key,text,question,project);
  text=roleAnswerFrame(role,key,text);
  return {who:'role',text,evidence:`主题：${project.title} · 参考：${role.sources.join('、')}`}
}

function markChoiceSent(button){
  if(!button)return;
  button.disabled=true;
  button.classList.add('is-sent');
  button.setAttribute('aria-label',`${button.textContent.trim()}（已发送）`);
}

function submitMessage(text,button){
  const clean=text.trim();
  if(!clean || button?.disabled)return;
  markChoiceSent(button);
  const role=currentRole();
  const project=currentProject();
  state.messages=[...(state.messages||[]),{who:'user',text:clean}];
  renderMessages();
  responseQueue.push({question:clean,role,project,token:conversationToken});
  saveState();
  processResponseQueue();
}

function processResponseQueue(){
  if(responseProcessing || !responseQueue.length)return;
  responseProcessing=true;
  const item=responseQueue.shift();
  setTimeout(()=>{
    if(item.token===conversationToken){
      state.messages=[...(state.messages||[]),respond(item.question,item.role,item.project)];
      renderMessages();
      saveState();
    }
    responseProcessing=false;
    if(responseQueue.length){processResponseQueue();}
    else{updateQuickPrompts();}
  },420);
}

function migrateLegacyMessages(){
  let lastQuestion='';
  let changed=false;
  const messages=(state.messages||[]).map(message=>{
    if(message.who==='user'){lastQuestion=message.text;return message;}
    if(message.who==='role' && lastQuestion){
      changed=true;
      return respond(lastQuestion,currentRole(),currentProject());
    }
    return message;
  });
  if(changed)state.messages=messages;
}

function renderQuestions(items){questionList.innerHTML=items.map((question,index)=>`<div class="question-item"><span>题目 ${index+1}</span>${escapeHtml(question)}</div>`).join('');state.questions=items;saveState()}
function generateQuestions(){const role=currentRole();const count=state.messages?.filter(m=>m.who==='user').length || 0;const project=currentProject();const qs=[`结合“${project.title}”项目与${role.name}的${count?`本次 ${count} 个问题`:'对话'}，概括其回应中最突出的时代关切，并标出一处史料依据。`,`${role.name}的身份如何影响了他对“${role.focus.split(' · ')[0]}”的理解？请结合对话举例。`,`对话中哪些判断需要回到原始材料进一步核对？请指出材料名称，并说明核对理由。`];renderQuestions(qs);showToast('思考题已根据当前对话生成')}

function exportSession(){const role=currentRole();const period=currentPeriod();const project=currentProject();const messages=state.messages?.length?state.messages:[initialMessage()];const qs=getQuestions().length?getQuestions():defaultQuestions;const lines=['史境 · 近代人物角色探究记录','='.repeat(34),'导出时间：'+new Date().toLocaleString('zh-CN'),'历史时期：'+period.name+'（'+period.date+'）','探究项目：'+project.title,'探究人物：'+role.name+'（'+role.group+'，'+role.years+'）','人物主题：'+role.focus,'史料来源：'+role.sources.join('；'),'','【时代坐标】',period.name+' · '+period.date,'在史料边界内开展角色视角对话。','',`【对话记录】`];messages.forEach(m=>lines.push((m.who==='user'?'探究者':'角色 · '+role.name)+'：\n'+m.text+(m.evidence?'\n['+m.evidence+']':'')+'\n'));lines.push('【思考题】');qs.forEach((q,i)=>lines.push(`${i+1}. ${q}`));lines.push('','【我的观察】',notes.value.trim()||'（未填写）','','—— 本记录由学生本地浏览器生成，平台不上传或保存对话内容 ——');const blob=new Blob(['\ufeff'+lines.join('\n')],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download=`史境_${period.name}_${role.name}_探究记录.txt`;anchor.click();URL.revokeObjectURL(url);showToast('完整探究记录已下载到本地')}

function clearSession(){if(!confirm('清空本次对话与思考题？此操作只影响当前浏览器。'))return;conversationToken+=1;responseQueue=[];responseProcessing=false;state={roleId:selectedRole,messages:[],notes:'',questions:[]};notes.value='';$('#char-count').textContent='0 / 500';renderMessages();renderQuestions(defaultQuestions);updateQuickPrompts();saveState();showToast('本次记录已清空')}
function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('is-visible');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('is-visible'),2600)}

function init(){renderDirectory();renderContext();renderRoles();renderPersona();notes.value=state.notes||'';$('#char-count').textContent=`${notes.value.length} / 500`;migrateLegacyMessages();renderMessages();updateQuickPrompts();renderQuestions(state.questions?.length?state.questions:defaultQuestions);applyViewMode();notes.addEventListener('input',()=>{$('#char-count').textContent=`${notes.value.length} / 500`;saveState()});$('#generate-questions').addEventListener('click',generateQuestions);$('#export-top').addEventListener('click',exportSession);$('#export-bottom').addEventListener('click',exportSession);$('#clear-session').addEventListener('click',clearSession);$('#back-directory').addEventListener('click',openDirectory);$('#directory-nav').addEventListener('click',openDirectory);}
init();
