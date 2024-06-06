const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;

// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);

function getGithubRawContentUrl(url) {
  return useFastGitMirror
    ? url.replace(
        /^https:\/\/raw\.githubusercontent\.com\//,
        'https://raw.fastgit.org/'
      )
    : url;
}

export const publicCollections = [
  {
    name: 'freefq',
    homepage: 'https://github.com/freefq/free',
    url: getGithubRawContentUrl(
      'https://github.com/FNET00bot/FNET00BOT/raw/Config/Normal/Config'
    )
  },
  {
    name: '1808.ga',
    homepage: 'https://1808.ga/',
    url: 'https://github.com/Epodonios/v2ray-configs/raw/main/All_Configs_Sub.txt'
  },
  {
    name: 'butnono',
    homepage: 'https://www.butnono.com/daily-vmess.html',
    url: 'https://github.com/FNET00bot/FNET00BOT/raw/Config/Shadowrocket/Normal'
  },
  {
    name: 'NodeFree',
    homepage: '',
    url: 'https://raw.githubusercontent.com/m3hdio1/v2ray_sub/main/v2ray_sub.txt'
  },
  {
    name: 'pojiezhiyuanjun/freev2',
    homepage: 'https://github.com/pojiezhiyuanjun/freev2',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/amirhosein24/v2ray-config-farmer/main/zout.txt'
    )
  },
  {
    name: 'xiyaowong/freeFQ',
    homepage: 'https://github.com/xiyaowong/freeFQ',
    url: getGithubRawContentUrl(
      'https://github.com/v2clash/V2ray-Configs/raw/main/All_Configs_Sub.txt'
    )
  },
  {
    name: 'ClashNode',
    homepage: 'https://clashnode.com/f/freenode',
    url: 'https://github.com/ALIILAPRO/v2rayNG-Config/raw/main/server.txt'
  },
  {
    name: 'kxswa/k',
    homepage: 'https://github.com/kxswa/k',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/qjlxg/ss/master/list_raw.txt'
    )
  },
  {
    name: 'vpei/Free-Node-Merge',
    homepage: 'https://github.com/vpei/Free-Node-Merge/',
    url: getGithubRawContentUrl(
      'https://github.com/Ennzo0/V2ray/raw/main/all.txt'
    )
  },
  {
    name: 'Jsnzkpg',
    homepage: 'https://github.com/Jsnzkpg/Jsnzkpg',
    url: getGithubRawContentUrl(
      'https://github.com/electron-v2ray/Telegram-Config-Dumpr/raw/main/config.txt'
    )
  },
  {
    name: 'peasoft/NoMoreWalls',
    homepage: 'https://github.com/peasoft/NoMoreWalls',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'mianfeifq/share',
    homepage: 'https://github.com/mianfeifq/share',
    url: getGithubRawContentUrl(
      'https://github.com/Pasimand/v2ray-config-agg/raw/main/config.txt'
    )
  },
  {
    name: 'Rawdroid/Free-servers',
    homepage: 'https://github.com/Pawdroid/Free-servers',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/liketolivefree/kobabi/main/sub_all.txt'
    )
  },
  {
    name: 'aiboboxx/v2rayfree',
    homepage: 'https://github.com/aiboboxx/v2rayfree',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/MrMohebi/xray-proxy-grabber-telegram/master/collected-proxies/row-url/all.txt'
    )
  },
  {
    name: 'adiwzx/freenode',
    homepage: 'https://github.com/adiwzx/freenode',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/splitted/mixed'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'xrayfree',
    homepage: 'https://github.com/xrayfree/free-ssr-ss-v2ray-vpn-clash',
    url: ''
  }
];

export const privateCollections = [
  {
    name: 'bulink',
    url: `https://bulink.me/${process.env.BULINK_SUB_URL}`
  },
  {
    name: 'getafreenode',
    url: `https://getafreenode.com/subscribe/?uuid=${process.env.GETAFREENODE_UUID}`
  }
];

export const nodeNameFormatter = (raw = '', collection = {}) => {
  const replacements = [
    ['github.com/freefq - ', ''],
    ['二爷翻墙网 https://1808.ga', ''],
    [/-付费推荐(?:.*)$/, ''],
    ['(油管:破解资源君)', ''],
    ['(TG频道@kxswa)', ''],
    ['_油管：全网最强白嫖', ''],
    ['_来源：kkzui.com', ''],
    ['(TG频道@kxswa)', ''],
    ['(youtube阿伟科技)', ''],
    ['v2rayfree.eu.org - ', ''],
    [/^adi\|/, ''],
    [/【付费推荐：(.*?)】/, '']
  ];

  let name = raw;

  for (const [searchValue, replaceValue] of replacements) {
    name = name.replace(searchValue, replaceValue);
  }

  if (!collection?.name) {
    return name.trim();
  }

  return `[${collection.name}]${name.trim()}`;
};
