// import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'

// const lang = language.getLang() || 'zh-cn';
const lang = localStorage.getItem('currLang') || 'zh-cn'

// const loadLocaleMessages = async () => {
//     const messages: Record<string, string> = {};
//     const modules = import.meta.glob('./i18n/**/*.ts');

//     const arr: any[] = [];
//     Object.keys(modules).forEach((key: string) => {
//         if (key.indexOf(lang) !== -1) {
//             arr.push(modules[key]());
//         }
//     });

//     const res = await Promise.all(arr);
//     Object.values(res).forEach(value => {
//         if (import.meta.env.DEV) {
//             Object.keys(value.default).forEach(item => {
//                 if (messages[item]) {
//                     throw new Error(`多语言存在相同的key:${item}`);
//                 }
//             });
//         }
//         Object.assign(messages, value.default);
//     });

//     i18n.global.setLocaleMessage(lang, messages);
// };
// modules[`./i18n/zh-cn/common.ts`]().then((data: any) => {
//     // 因为用到 esm，所以要加 `default`
//     console.log(data.default);
// });

export const i18n = createI18n({
  locale: lang,
  legacy: false,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
})

export const SUPPORT_LOCALE_LIST = [
  { lang: 'en-us', value: 'English' },
  { lang: 'zh-cn', value: '简体中文' },
]

const LOADED_LANGUAGES = []

const findLocaleLang = (locale) => {
  return SUPPORT_LOCALE_LIST.findIndex((item) => item.lang === locale)
}

const loadLocaleMessages = async (locale) => {
  if (findLocaleLang(locale) === -1) {
    return nextTick()
  }
  const messages = await import(`./i18n/${locale}.js`)
  i18n.global.setLocaleMessage(locale, messages?.default)

  LOADED_LANGUAGES.push(locale)

  return nextTick()
}

export const setI18nLanguage = async () => {
  let locale = localStorage.getItem('currLang')

  if (locale === 'zh-cn') {
    locale = 'en-us'
  } else {
    locale = 'zh-cn'
  }

  if (findLocaleLang(locale) === -1) {
    return
  }

  if (LOADED_LANGUAGES.indexOf(locale) === -1) {
    await loadLocaleMessages(locale)
  }

  localStorage.setItem('currLang', locale)

  i18n.global.locale.value = locale
}

loadLocaleMessages(lang)
// loadLocaleMessages(language.getLang());
