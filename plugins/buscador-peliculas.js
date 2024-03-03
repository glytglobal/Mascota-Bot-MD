/* Creado/adaptado por Bruno Sobrino (https://github.com/BrunoSobrino) */

import fetch from 'node-fetch';
import axios from 'axios';
import {load} from 'cheerio';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  if (!text) throw '🜲 𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗟𝗔 𝗣𝗘𝗟𝗜𝗖𝗨𝗟𝗔 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘 𝗕𝗨𝗦𝗖𝗔𝗥';
  let aaaa;
  let img;
  try {
    aaaa = await searchC(text);
    img = 'https://telegra.ph/file/cb2dd11e85858ef8d1edb.jpg';
  } catch {
    aaaa = await searchP(text);
    img = 'https://telegra.ph/file/126000076384c1cd9dff3.jpg';
  }
  if (aaaa == '') throw '✿ 𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗢 𝗟𝗔 𝗣𝗘𝗟𝗜𝗖𝗨𝗟𝗔 𝗤𝗨𝗘 𝗘𝗦𝗧𝗘𝗦 𝗕𝗨𝗦𝗖𝗔𝗡𝗗𝗢';
  const res = await aaaa.map((v) => `❑ • 𝗡𝗢𝗠𝗕𝗥𝗘: ${v.title}\n*🍿 • 𝗨𝗥𝗟: ${v.link}`).join`\n\n───────────────\n\n`;
  const ads = '*💫 • 𝗗𝗡𝗦 𝗥𝗘𝗖𝗢𝗠𝗘𝗡𝗗𝗔𝗗𝗢 𝗣𝗔𝗥𝗔 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗥 𝗔𝗡𝗨𝗡𝗖𝗜𝗢𝗦:\n ❀ • 𝗗𝗡𝗦: dns.adguard.com \n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n';
  conn.sendMessage(m.chat, {image: {url: img}, caption: ads + res}, {quoted: m});
};
handler.command = ['cuevana', 'pelisplus'];
export default handler;

const safeLoad = async (url, options = {}) => {
  try {
    const {data: pageData} = await axios.get(url, options);
    const $ = load(pageData);
    return $;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.statusText);
    }
    throw err;
  }
};

async function searchC(query, numberPage = 1) {
  const $ = await safeLoad(`https://hackstore.rs/?s=`, {
    params: {s: query}});
  const resultSearch = [];
  $('.results-post > article').each((_, e) => {
    const element = $(e);
    const title = element.find('header > h2').text();
    const link = element.find('.lnk-blk').attr('href');
    resultSearch.push({title: title, link: link});
  });
  return resultSearch;
}

async function searchP(query, numberPage = 1) {
  const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
    params: {s: query, page: numberPage}});
  const resultSearch = [];
  $('a[class^=\'Posters\']').each((_, e) => {
    const element = $(e);
    const title = element.find('.listing-content > p').text();
    const link = element.attr('href');
    resultSearch.push({title: title, link: link});
  });
  return resultSearch;
}
