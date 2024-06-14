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
      'https://py.kjol.cc/tube'
    )
  },
  {
    name: '1808.ga',
    homepage: 'https://1808.ga/',
    url: 'https://sub.5112233.xyz/auto'
  },
  {
    name: 'butnono',
    homepage: 'https://www.butnono.com/daily-vmess.html',
    url: 'https://oss.v2rayse.com/proxies/data/2024-01-17/hYWvrPB.txt'
  },
  {
    name: 'NodeFree',
    homepage: '',
    url: 'https://nodefree.org/dy/2023/01/20230105.txt'
  },
  {
    name: 'pojiezhiyuanjun/freev2',
    homepage: 'https://github.com/pojiezhiyuanjun/freev2',
    url: getGithubRawContentUrl(
      'https://nodefree.org/dy/2023/01/20230106.txt'
    )
  },
  {
    name: 'xiyaowong/freeFQ',
    homepage: 'https://github.com/xiyaowong/freeFQ',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/AzadNetCH/Clash/main/AzadNet_iOS.txt'
    )
  },
  {
    name: 'ClashNode',
    homepage: 'https://clashnode.com/f/freenode',
    url: 'https://tgscan.onrender.com/sub3'
  },
  {
    name: 'kxswa/k',
    homepage: 'https://github.com/kxswa/k',
    url: getGithubRawContentUrl(
      'https://oss.v2rayse.com/proxies/data/2024-06-07/UMY0p4t.txt'
    )
  },
  {
    name: 'vpei/Free-Node-Merge',
    homepage: 'https://github.com/vpei/Free-Node-Merge/',
    url: getGithubRawContentUrl(
      'https://oss.v2rayse.com/proxies/data/2024-06-06/QUttNPn.txt'
    )
  },
  {
    name: 'Jsnzkpg',
    homepage: 'https://github.com/Jsnzkpg/Jsnzkpg',
    url: getGithubRawContentUrl(
      'https://oss.v2rayse.com/proxies/data/2024-06-04/ncRBcxb.txt'
    )
  },
  {
    name: 'peasoft/NoMoreWalls',
    homepage: 'https://github.com/peasoft/NoMoreWalls',
    url: getGithubRawContentUrl(
      'https://oss.v2rayse.com/proxies/data/2024-06-04/ncRBcxb.txt'
    )
  },
  {
    name: 'mianfeifq/share',
    homepage: 'https://github.com/mianfeifq/share',
    url: getGithubRawContentUrl(
      'https://oss.v2rayse.com/proxies/data/2024-05-19/0RR4qd1.txt'
    )
  },
  {
    name: 'Rawdroid/Free-servers',
    homepage: 'https://github.com/Pawdroid/Free-servers',
    url: getGithubRawContentUrl(
      'https://oss.v2rayse.com/proxies/data/2024-03-03/nxJNBGJ.txt'
    )
  },
  {
    name: 'aiboboxx/v2rayfree',
    homepage: 'https://github.com/aiboboxx/v2rayfree',
    url: getGithubRawContentUrl(
      'https://shadowmere.akiel.dev/api/b64sub/'
    )
  },
  {
    name: 'adiwzx/freenode',
    homepage: 'https://github.com/adiwzx/freenode',
    url: getGithubRawContentUrl(
      'https://v2rayshare.com/wp-content/uploads/2024/03/20240305.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://tgscan.onrender.com/sub5'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://nodefree.org/dy/2023/12/20231222.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://nodefree.org/dy/2023/12/20231223.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://nodefree.org/dy/2023/12/20231221.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://nodefree.org/dy/2024/06/20240612.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/mheidari98/.proxy/main/all'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://github.com/Kwinshadow/TelegramV2rayCollector/raw/main/sublinks/b64mix.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://github.com/m3hdio1/v2ray_sub/raw/main/v2ray_sub.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://github.com/amirhosein24/v2ray-config-farmer/raw/main/zout.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/MrMohebi/xray-proxy-grabber-telegram/master/collected-proxies/row-url/all.txt'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://github.com/Everyday-VPN/Everyday-VPN/raw/main/subscription/main.txt'
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
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      ''
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
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      ''
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
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      ''
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
