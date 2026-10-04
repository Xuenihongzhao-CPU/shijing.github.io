const characterBank = {};

function sourceCharacter({id,name,initial,group,years,focus,sources,stance,prompts}){
  const address=/皇帝|太祖|世祖/.test(group)?'朕':/丞相|官员|督抚|大臣|将领/.test(group)?'臣':'我';
  characterBank[id]={
    name,initial,group,years,focus,sources,
    bio:`关于${name}的回应仅依据所列公开材料，不补写未见于史料的私人经历。`,
    intro:`${address}所能据现存材料相告的，是${stance}你可以据此继续追问；材料未直接记载的细节，${address}只能结合当时身份与处境作谨慎解释。`,
    motivations:stance,
    reform:stance,
    people:`关于普通民众与地方社会，可以从${focus}如何影响赋税、生计、劳役、迁徙和秩序来理解。人物的制度主张未必直接记录每个人的感受，但可以结合地方材料观察它如何落实，以及不同群体承担了什么代价。`,
    foreign:`关于对外关系，可以从${focus}所面对的国家安全、交通贸易、知识传播和边疆秩序来理解。现有材料能够说明人物关注的方向与行动依据，也应结合不同立场的记录比较其实际影响。`,
    limits:`${name}的立场首先回应了当时的${focus}问题，在特定时代确有其现实作用；但它也受人物身份、制度环境和当时知识范围限制，容易忽略其他群体的处境。理解这一立场的边界，应同时比较它解决了什么问题、把什么代价转移给了谁，以及${sources.join('、')}所呈现的不同侧面。`,
    fallback:`关于这个问题，可以从${focus}入手，结合${sources.join('、')}中记载的言论、行动和制度背景来解释。人物的回答应放回当时的身份与时代处境，不能直接套用后来的概念。`,
    prompts:prompts || [`${name}的主要主张是什么？`,`哪些材料可以支持这一判断？`,`这一立场有哪些时代局限？`]
  };
}

sourceCharacter({id:'confucius',name:'孔子',initial:'孔',group:'思想家',years:'前551—前479',focus:'礼制与社会秩序',sources:['《论语》','《史记·孔子世家》'],stance:'《论语》所见，我所重在于以“仁”与礼修养个人、整顿关系；关于具体制度的讨论，必须区分后人解释与当时文字。',prompts:['“仁”与“礼”如何维系社会秩序？','《论语》中的话能否代表你的全部思想？','如何避免把后世儒学直接等同于先秦孔学？']});
sourceCharacter({id:'mencius',name:'孟子',initial:'孟',group:'思想家',years:'约前372—前289',focus:'民本与政治正当性',sources:['《孟子》','《史记·孟子荀卿列传》'],stance:'《孟子》多次以民生、仁政和君臣关系论政；“民为贵”等语句应放在文本语境中解释，不能脱离先秦政治结构。'});
sourceCharacter({id:'hanfeizi',name:'韩非',initial:'韩',group:'法家思想家',years:'约前280—前233',focus:'法、术、势与国家治理',sources:['《韩非子》','《史记·老子韩非列传》'],stance:'《韩非子》强调法、术、势在君主治理中的作用，主张以明确的制度和赏罚维持秩序；这不等于可以替他补写未见于文本的政策细节。'});
sourceCharacter({id:'suyang',name:'苏秦',initial:'苏',group:'纵横家',years:'约前337—前284',focus:'合纵外交',sources:['《战国策》','《史记·苏秦列传》'],stance:'《战国策》和《史记》记载了苏秦游说诸侯、主张合纵的故事，但具体游说辞的成文年代与史实层次需要辨析，不能把全部辞令当作逐字实录。'});
sourceCharacter({id:'zhangyi',name:'张仪',initial:'张',group:'纵横家',years:'约前373—前310',focus:'连横外交',sources:['《战国策》','《史记·张仪列传》'],stance:'相关材料把张仪置于秦国连横外交的叙事中；对于个别游说细节，需注意战国策士故事的文学加工，不可过度确定。'});
sourceCharacter({id:'zhougong',name:'周公旦',initial:'周',group:'周代政治人物',years:'西周初年',focus:'礼制与分封秩序',sources:['《尚书》','《左传》','《史记·周本纪》'],stance:'现存文献把周公与周初礼制、政治秩序和成王辅政相联系，但文献形成层次复杂，涉及个人言行的细节必须谨慎。'});
sourceCharacter({id:'mozi',name:'墨子',initial:'墨',group:'思想家',years:'约前468—前376',focus:'兼爱、非攻与技术实践',sources:['《墨子》','《史记·孟子荀卿列传》'],stance:'《墨子》文本主张兼爱、非攻、尚贤等观念，并保存了守城与技术知识；篇章成书情况复杂，应区分墨子本人和后学材料。'});
sourceCharacter({id:'shangyang',name:'商鞅',initial:'商',group:'变法政治家',years:'约前390—前338',focus:'变法、军功与国家动员',sources:['《商君书》','《史记·商君列传》'],stance:'《史记》记载商鞅在秦主持变法，《商君书》保存了法治、农战等主张；二者不能简单视为同一作者、同一时代的逐字记录。'});
sourceCharacter({id:'qinshihuang',name:'秦始皇',initial:'秦',group:'皇帝',years:'前259—前210',focus:'统一与中央集权',sources:['《史记·秦始皇本纪》','秦诏版与出土文书'],stance:'统一文字、度量衡和行政体系等内容有《史记》及出土材料可相互参证；对于个人内心动机，现有材料不足，不能替其虚构自白。'});
sourceCharacter({id:'lisi',name:'李斯',initial:'李',group:'秦代丞相',years:'？—前208',focus:'郡县、统一与君主权力',sources:['《史记·李斯列传》','《史记·秦始皇本纪》'],stance:'《史记》记载李斯参与秦的政治与制度安排，相关奏议和焚书叙事应结合文本来源与后世编纂背景加以判断。'});
sourceCharacter({id:'zhangqian',name:'张骞',initial:'张',group:'汉代使者',years:'？—前114',focus:'西域交通与国家视野',sources:['《史记·大宛列传》','《汉书·张骞李广利传》'],stance:'张骞出使西域、返回报告等内容有《史记》《汉书》记载；具体路线、对话和个人感受不能超出材料随意扩写。'});
sourceCharacter({id:'simaqian',name:'司马迁',initial:'司',group:'史学家',years:'约前145—前86',focus:'史家记录与历史解释',sources:['《史记》','《报任安书》'],stance:'《史记》提供了理解秦汉人物与制度的重要文本，《报任安书》也有关于著史缘由的自述；应区分史料事实、叙事选择和后人解释。'});
sourceCharacter({id:'ban chao'.replace(' ',''),name:'班超',initial:'班',group:'东汉将领',years:'32—102',focus:'西域经营与边疆治理',sources:['《后汉书·班超传》','《后汉书·西域传》'],stance:'《后汉书》记载班超经营西域的经历与相关政务；关于个别战事细节、当地民众的完整立场，材料并不充分。'});
sourceCharacter({id:'hanwudi',name:'汉武帝',initial:'汉',group:'皇帝',years:'前156—前87',focus:'国家扩张、财政与思想统一',sources:['《史记·孝武本纪》','《汉书·武帝纪》'],stance:'《史记》《汉书》可用于讨论汉武帝时期的对外战争、财政政策和思想安排；对于个人动机需结合多种材料，不作单一心理推断。'});
sourceCharacter({id:'dongzhongshu',name:'董仲舒',initial:'董',group:'汉代士人',years:'约前179—前104',focus:'天人关系与政治秩序',sources:['《汉书·董仲舒传》','《春秋繁露》'],stance:'《汉书》与《春秋繁露》呈现了董仲舒关于天人关系、尊王与教化的思想，但文本归属和成书层次需要注意。'});
sourceCharacter({id:'suiwendi',name:'隋文帝',initial:'隋',group:'皇帝',years:'541—604',focus:'统一、制度与国家重建',sources:['《隋书·高祖纪》','《资治通鉴》'],stance:'隋文帝时期统一南北、整顿制度等内容有正史与编年史可据；对于政策效果，应同时考察不同阶层和地区的材料。'});
sourceCharacter({id:'suiyangdi',name:'隋炀帝',initial:'炀',group:'皇帝',years:'569—618',focus:'大运河、工程与国家动员',sources:['《隋书·炀帝纪》','《资治通鉴》','运河相关出土文书'],stance:'大运河、巡游与征伐等事项见于正史和考古材料，但后世叙事常带有评价色彩，需要区分事实与道德判断。'});
sourceCharacter({id:'wei zheng'.replace(' ',''),name:'魏征',initial:'魏',group:'唐代大臣',years:'580—643',focus:'谏诤与政治治理',sources:['《旧唐书·魏征传》','《新唐书·魏征传》','《贞观政要》'],stance:'相关材料记录魏征进谏和唐太宗君臣关系，但《贞观政要》具有编纂目的，不能把所有对话视为现场实录。'});
sourceCharacter({id:'tangtaizong',name:'唐太宗',initial:'唐',group:'皇帝',years:'598—649',focus:'贞观政治与国家治理',sources:['《旧唐书·太宗本纪》','《资治通鉴》','《贞观政要》'],stance:'“贞观之治”的制度与政治叙事有多种材料可参照；对个人品格和动机的概括，不应只依赖后世颂扬性记录。'});
sourceCharacter({id:'xuanzang',name:'玄奘',initial:'玄',group:'僧人、译经家',years:'602—664',focus:'跨区域交流与知识传播',sources:['《大唐西域记》','《续高僧传》'],stance:'《大唐西域记》是理解唐代西域与南亚社会的重要材料，但它是见闻记录，有其观察范围和叙事角度。'});
sourceCharacter({id:'wuzetian',name:'武则天',initial:'武',group:'皇帝',years:'624—705',focus:'政治权力与用人制度',sources:['《旧唐书·则天皇后本纪》','《资治通鉴》','墓志与碑刻材料'],stance:'关于武则天的政治经历，正史与碑刻可相互参证；正史中的褒贬语气不能直接等同于事实本身。'});
sourceCharacter({id:'songtaizu',name:'宋太祖',initial:'宋',group:'皇帝',years:'927—976',focus:'文官政治与国家整合',sources:['《宋史·太祖本纪》','《续资治通鉴长编》'],stance:'宋初整顿军政、强化中央等内容有编年史与正史依据；“杯酒释兵权”的叙事细节应注意材料成书年代。'});
sourceCharacter({id:'shen kuo'.replace(' ',''),name:'沈括',initial:'沈',group:'宋代士人、科学家',years:'1031—1095',focus:'科技观察与知识生产',sources:['《梦溪笔谈》','《宋史·沈括传》'],stance:'《梦溪笔谈》保存了丰富的自然、技术和社会观察，但其中部分内容是见闻与转述，需结合其他材料验证。'});
sourceCharacter({id:'su shi'.replace(' ',''),name:'苏轼',initial:'苏',group:'宋代士大夫',years:'1037—1101',focus:'政治立场与地方治理',sources:['《苏轼文集》','《宋史·苏轼传》'],stance:'苏轼文集与传记材料可用于讨论其政治主张和地方经历；文学作品不应直接当作所有历史事实的实录。'});
sourceCharacter({id:'bisheng',name:'毕昇',initial:'毕',group:'宋代工匠',years:'北宋',focus:'活字印刷与技术传播',sources:['《梦溪笔谈》','宋代印刷实物与考古材料'],stance:'关于毕昇和活字印刷，主要依据《梦溪笔谈》与实物材料；个人生平、工匠群体内部情况的细节记录有限。'});
sourceCharacter({id:'guo shoujing'.replace(' ',''),name:'郭守敬',initial:'郭',group:'元代科学家',years:'1231—1316',focus:'历法、水利与国家工程',sources:['《元史·郭守敬传》','《授时历》相关材料'],stance:'郭守敬参与历法、水利等事务有正史与技术文献可据；具体工程现场的全部过程不能由后人想当然补齐。'});
sourceCharacter({id:'kublai',name:'忽必烈',initial:'忽',group:'元世祖',years:'1215—1294',focus:'多民族国家治理',sources:['《元史·世祖本纪》','《马可·波罗游记》及相关译注'],stance:'元代制度与统治范围需结合汉文正史、文书和外来记录；不同材料的观察位置不同，不能只用一种叙事概括。'});
sourceCharacter({id:'zhuyuanzhang',name:'朱元璋',initial:'朱',group:'明太祖',years:'1328—1398',focus:'国家重建与基层治理',sources:['《明太祖实录》','《明史·太祖本纪》'],stance:'明初制度、户籍和基层治理可由实录、正史与制度文书讨论；对个人心理和未留下记录的政策效果不作臆测。'});
sourceCharacter({id:'zhenghe',name:'郑和',initial:'郑',group:'明代使者、航海者',years:'约1371—1433',focus:'海上交通与国家交往',sources:['《明史·郑和传》','《瀛涯胜览》','《星槎胜览》'],stance:'郑和下西洋的航次与交往可据正史及航海文献讨论；航海者、当地居民和商人的全部经验并未完整保存。'});
sourceCharacter({id:'hai rui'.replace(' ',''),name:'海瑞',initial:'海',group:'明代官员',years:'1514—1587',focus:'吏治、赋役与地方社会',sources:['《明史·海瑞传》','《海瑞集》'],stance:'海瑞的奏疏与传记可用于讨论吏治和赋役问题；后世“清官”形象有概括和加工，需回到具体文本。'});
sourceCharacter({id:'wangyangming',name:'王阳明',initial:'王',group:'明代思想家、官员',years:'1472—1529',focus:'心学与地方治理',sources:['《王阳明全集》','《明史·王守仁传》'],stance:'王阳明文集与传记材料呈现其心学与平乱、施政经历；思想概念需要放在明代语境中理解，不能直接现代化解释。'});
sourceCharacter({id:'lizh i'.replace(' ',''),name:'李贽',initial:'李',group:'明代思想家',years:'1527—1602',focus:'思想异议与社会观念',sources:['《焚书》','《藏书》','《明史·李贽传》'],stance:'《焚书》《藏书》及相关传记可用于讨论李贽的思想异议；作品中的论辩文字不能任意推导出未曾表达的政治方案。'});
sourceCharacter({id:'xuguangqi',name:'徐光启',initial:'徐',group:'明代士大夫、科学家',years:'1562—1633',focus:'中西知识交流与实学',sources:['《徐光启集》','《明史·徐光启传》'],stance:'徐光启关于农政、历法和西学的文字有文集与制度材料可据；对中西交流的具体效果要结合技术文本和历史情境辨析。'});
sourceCharacter({id:'kangxi',name:'康熙帝',initial:'康',group:'皇帝',years:'1654—1722',focus:'统一多民族国家治理',sources:['《清圣祖实录》','《康熙起居注》'],stance:'康熙时期的政务、边疆与国家治理可据实录、起居注等材料讨论；宫廷记录有其制度视角，不能代表所有地方社会声音。'});
sourceCharacter({id:'qianlong',name:'乾隆帝',initial:'乾',group:'皇帝',years:'1711—1799',focus:'疆域治理与文化政策',sources:['《清高宗实录》','《清史稿·高宗本纪》'],stance:'乾隆时期的疆域与文化政策有实录和制度文书可据；“盛世”评价需要同时考察财政、民生与地方材料。'});
sourceCharacter({id:'lin zexu'.replace(' ',''),name:'林则徐',initial:'林',group:'晚清官员',years:'1785—1850',focus:'禁烟、外交与国家危机',sources:['《林则徐集》','《鸦片战争档案史料》'],stance:'林则徐的奏折、书信和档案可用于讨论禁烟与对外认识；不能把后来的民族国家观念直接当作其原有完整思想。'});
sourceCharacter({id:'daoguang',name:'道光帝',initial:'道',group:'皇帝',years:'1782—1850',focus:'鸦片战争前后的国家决策',sources:['《清宣宗实录》','《鸦片战争档案史料》'],stance:'道光时期的决策可据实录、奏折与档案相互参证；宫廷决策过程存在材料空白，不能替皇帝补写未留下的内心独白。'});
sourceCharacter({id:'wei yuan'.replace(' ',''),name:'魏源',initial:'魏',group:'晚清士人',years:'1794—1857',focus:'海国认识与经世思想',sources:['《海国图志》','《圣武记》'],stance:'《海国图志》《圣武记》体现魏源对世界知识、海防和经世问题的讨论；书中资料来源复杂，应区分转述与亲见。'});
sourceCharacter({id:'zengguofan',name:'曾国藩',initial:'曾',group:'晚清官员',years:'1811—1872',focus:'军政、洋务与地方治理',sources:['《曾国藩全集》','《筹办夷务始末》'],stance:'曾国藩的奏折、家书和洋务活动有文集与档案可据；家书是私人文字，但也不能代表其全部政治思想。'});
sourceCharacter({id:'liangqichao',name:'梁启超',initial:'梁',group:'维新派士人',years:'1873—1929',focus:'变法、报刊与新民观念',sources:['《饮冰室合集》','《戊戌变法档案史料》'],stance:'梁启超的政论与报刊文字可用于讨论变法和公共舆论；政论有论辩目的，不能把修辞性判断直接当作客观事实。'});

const projectProfiles = {
  'preqin-voices': {characterIds:['confucius','mencius','hanfeizi']},
  'preqin-warring': {characterIds:['suyang','zhangyi','mencius']},
  'preqin-bronze': {characterIds:['zhougong','confucius','mozi']},
  'preqin-qin': {characterIds:['shangyang','hanfeizi','qinshihuang']},
  'qinhan-empire': {characterIds:['qinshihuang','lisi','simaqian']},
  'qinhan-silkroad': {characterIds:['zhangqian','simaqian','ban chao'.replace(' ','')]},
  'qinhan-law': {characterIds:['qinshihuang','lisi','mencius']},
  'qinhan-han': {characterIds:['hanwudi','dongzhongshu','simaqian']},
  'suitang-canal': {characterIds:['suiwendi','suiyangdi','wei zheng'.replace(' ','')]},
  'suitang-changAn': {characterIds:['tangtaizong','xuanzang','wuzetian']},
  'suitang-exam': {characterIds:['tangtaizong','wei zheng'.replace(' ',''),'wuzetian']},
  'suitang-frontier': {characterIds:['tangtaizong','xuanzang','wuzetian']},
  'songyuan-commerce': {characterIds:['songtaizu','shen kuo'.replace(' ',''),'su shi'.replace(' ','')]},
  'songyuan-science': {characterIds:['shen kuo'.replace(' ',''),'bisheng','guo shoujing'.replace(' ','')]},
  'songyuan-frontier': {characterIds:['kublai','guo shoujing'.replace(' ',''),'su shi'.replace(' ','')]},
  'songyuan-jiangnan': {characterIds:['su shi'.replace(' ',''),'shen kuo'.replace(' ',''),'songtaizu']},
  'mingqing-maritime': {characterIds:['zhuyuanzhang','zhenghe','hai rui'.replace(' ','')]},
  'mingqing-society': {characterIds:['wangyangming','lizh i'.replace(' ',''),'xuguangqi']},
  'mingqing-frontier': {characterIds:['kangxi','qianlong','zhuyuanzhang']},
  'mingqing-opium': {characterIds:['lin zexu'.replace(' ',''),'daoguang','wei yuan'.replace(' ','')]},
  'modern-dialogue': {characterIds:['li','kang','zhang','zheng','song']},
  'modern-opium': {characterIds:['lin zexu'.replace(' ',''),'daoguang','wei yuan'.replace(' ','')]},
  'modern-selfstrengthening': {characterIds:['li','zengguofan','zhang']},
  'modern-reform': {characterIds:['kang','liangqichao','zhang']}
};

const projectQuestionSets = {
  'preqin-voices': ['{人物}如何理解理想的社会秩序？','如果面对诸侯纷争，{人物}会把什么放在治理的首位？','哪一则《论语》《孟子》或《韩非子》材料能够支持你的判断？','这一思想回应了先秦什么现实问题？','这一主张可能忽略了哪些社会处境？'],
  'preqin-warring': ['{人物}会支持合纵、连横，还是主张以国内变法求强？','游说辞中的哪些内容可能带有后人加工？','诸侯选择外交道路时最看重什么？','《战国策》与《史记》的记载应如何互相参证？','纵横家的策略有什么时代局限？'],
  'preqin-bronze': ['{人物}如何理解礼制与政治秩序的关系？','现存材料能否证明普通人如何看待礼制？','周初制度与春秋战国思想之间有什么变化？','哪些内容来自文献，哪些需要借助考古材料？','你认为该时期的秩序主要依靠什么维系？'],
  'preqin-qin': ['{人物}如何解释秦国变法与统一之间的关系？','法、军功和郡县制度分别解决了什么问题？','《商君书》与《史记》的材料可以怎样互证？','统一之后，国家治理面临哪些新问题？','秦制的效率与社会代价如何同时解释？'],
  'qinhan-empire': ['{人物}如何看待统一与中央集权？','郡县制对地方社会意味着什么？','哪些制度变化有《史记》或出土材料可以支持？','统一国家如何处理地方差异？','帝国治理的边界和代价是什么？'],
  'qinhan-silkroad': ['{人物}如何理解出使西域的国家目的？','丝路交流中有哪些内容可以由《史记》《汉书》直接支持？','使者、商人和当地居民的立场是否相同？','交通与信息如何改变汉朝的世界认识？','关于具体旅途细节，哪些地方需要回到原始材料核对？'],
  'qinhan-law': ['{人物}如何理解法律、秩序与民生的关系？','秦汉法律材料能说明普通人的全部生活吗？','严密治理为何可能带来新的社会矛盾？','《史记》中的评价与制度事实应如何区分？','法治传统在秦汉语境中有哪些边界？'],
  'qinhan-han': ['{人物}如何看待对外战争、财政与思想统一？','汉武帝时期的国家动员带来了哪些变化？','董仲舒的思想如何进入政治秩序讨论？','司马迁的叙述与官方纪传体有什么差异？','这一治理路径有哪些长期影响与局限？'],
  'suitang-canal': ['{人物}如何解释大运河与国家治理的关系？','工程建设对漕运、城市和百姓分别意味着什么？','《隋书》中的评价是否足以代表民众处境？','怎样结合出土文书理解运河的实际作用？','国家工程的收益与代价应如何衡量？'],
  'suitang-changAn': ['{人物}如何看待长安城中的多元人群与文化交流？','《大唐西域记》能让我们看到哪些社会面向？','宫廷、僧侣与普通居民的城市经验有何不同？','哪些交流事实有材料支持，哪些只是后人想象？','开放城市是否意味着所有人都拥有同样机会？'],
  'suitang-exam': ['{人物}如何理解选官制度与国家治理？','科举为士人提供了怎样的道路？','魏征的谏诤材料能否代表所有官员的声音？','武则天时期用人制度有哪些可考变化？','科举制度的进步性与局限分别是什么？'],
  'suitang-frontier': ['{人物}如何理解统一国家与边疆往来的关系？','军事、外交和文化交流各自发挥了什么作用？','边疆地区居民的声音在现存材料中是否充分？','《大唐西域记》与正史的观察角度有什么差异？','用“盛唐”概括边疆关系会遗漏什么？'],
  'songyuan-commerce': ['{人物}如何解释宋代城市和商业的发展？','商人、士人和政府对商业的看法是否一致？','《梦溪笔谈》与宋代文集能够支持哪些判断？','市场扩大如何影响普通人的生活？','“商业革命”这个概念有哪些需要谨慎之处？'],
  'songyuan-science': ['{人物}如何理解技术知识与国家需求的关系？','活字印刷、历法和工程各自解决了什么问题？','《梦溪笔谈》中的见闻应怎样核验？','工匠在技术发展中扮演了什么角色？','为什么不能只用个人天才解释科技发展？'],
  'songyuan-frontier': ['{人物}如何理解多民族政权之间的竞争与交往？','战争、贸易和制度交流之间有什么联系？','不同政权的正史为何会有不同叙述？','元代国家治理如何面对地域与民族差异？','“征服”或“融合”哪一种概括更完整？'],
  'songyuan-jiangnan': ['{人物}如何看待江南社会的经济与文化变化？','地方治理与士大夫责任之间有什么联系？','文学作品可以作为哪些历史材料，不能证明什么？','江南繁荣是否惠及所有社会群体？','现有材料中哪些群体仍然缺少声音？'],
  'mingqing-maritime': ['{人物}如何理解海禁、海贸与国家安全？','郑和下西洋与民间贸易的目标是否相同？','海瑞的地方治理材料能说明海商处境吗？','国家政策如何影响沿海社会？','关于民间航海者的经历，哪些内容需要更多材料互相核对？'],
  'mingqing-society': ['{人物}如何理解思想、商业与社会变化的关系？','王阳明、李贽和徐光启的道路有何不同？','思想家的著述能否直接代表普通民众？','中西知识交流改变了哪些问题的讨论方式？','明代社会“新气象”有哪些边界？'],
  'mingqing-frontier': ['{人物}如何理解统一多民族国家的治理？','疆域扩展与地方社会之间是什么关系？','实录与地方材料的视角有哪些差异？','国家版图的形成是否等同于社会完全整合？','“盛世”评价需要补充哪些民生证据？'],
  'mingqing-opium': ['{人物}如何解释鸦片战争前的国家危机？','禁烟、外交与海防之间有什么联系？','林则徐、道光帝和魏源的材料关注点有何不同？','《海国图志》如何改变对世界的认识？','哪些关于战争前夜的细节仍需回到档案核对？'],
  'modern-dialogue': ['{人物}为什么会选择这条自强或救国道路？','这一主张回应了哪些时代压力？','人物身份如何影响他对改革、实业或民生的判断？','哪一条奏折、文集或档案可以支持他的说法？','这一立场有哪些时代局限？'],
  'modern-opium': ['{人物}如何理解禁烟与国家主权的关系？','战争前的中外关系有哪些材料可以互证？','官方档案与个人文集的记述有什么差异？','普通民众在战争叙事中是否被充分看见？','关于具体对话和个人心理，哪些地方不能臆断？'],
  'modern-selfstrengthening': ['{人物}如何理解“自强求富”？','洋务事业为什么集中在军务、教育和实业？','地方督抚、中央官员与士人的判断有何差异？','甲午战争暴露了哪些制度问题？','洋务运动的成效与局限如何同时解释？'],
  'modern-reform': ['{人物}为什么主张变法或反对过快变法？','维新派的制度设想有哪些史料依据？','报刊政论与奏折材料的表达方式有何不同？','戊戌变法为何在短时间内遭遇阻力？','后人评价人物时应避免哪些时代错置？']
};

Object.entries(projectQuestionSets).forEach(([projectId,questions])=>{
  if(projectProfiles[projectId])projectProfiles[projectId].questions=questions;
});
