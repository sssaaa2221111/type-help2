import {getTranslations} from "next-intl/server";

export const getIndexLanguageText = async () => {
  const tIndex = await getTranslations('IndexPage');
  return {
    title: tIndex('title'),
    description: tIndex('description'),
    loadingText: tIndex('loadingText'),
    generateText: tIndex('generateText'),
    buttonText: tIndex('buttonText'),
    placeholderText: tIndex('placeholderText'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    soraVideoExample: tIndex('soraVideoExample'),
    prompt: tIndex('prompt'),
    moreExample: tIndex('moreExample'),
    soraResultTitle: tIndex('soraResultTitle'),
    fakeSoraTip: tIndex('fakeSoraTip'),
    soraTip: tIndex('soraTip'),
  };
}


export const getQuestionLanguageText = async () => {
  const tIndexQuestion = await getTranslations('indexQuestion');
  return {
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_1_p2: tIndexQuestion('h2_1_p2'),
    h2_1_p3: tIndexQuestion('h2_1_p3'),
    h2_1_p4: tIndexQuestion('h2_1_p4'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_2_p2: tIndexQuestion('h2_2_p2'),
    h2_2_p3: tIndexQuestion('h2_2_p3'),
    h2_2_p4a: tIndexQuestion('h2_2_p4a'),
    h2_2_p4b: tIndexQuestion('h2_2_p4b'),
  }
}


export const getPrivacyPolicyLanguageText = async () => {
  const tPrivacyPolicy = await getTranslations('privacyPolicy');
  return {
    title: tPrivacyPolicy('title'),
    description: tPrivacyPolicy('description'),
    h1: tPrivacyPolicy('h1'),
    date: tPrivacyPolicy('date'),
    desc: tPrivacyPolicy('desc'),
    h4_1: tPrivacyPolicy('h4_1'),
    h4_1_pa: tPrivacyPolicy('h4_1_pa'),
    h4_1_pb: tPrivacyPolicy('h4_1_pb'),
    h4_2: tPrivacyPolicy('h4_2'),
    h4_2_p: tPrivacyPolicy('h4_2_p'),
    h4_3: tPrivacyPolicy('h4_3'),
    h4_3_p: tPrivacyPolicy('h4_3_p'),
    h4_4: tPrivacyPolicy('h4_4'),
    h4_4_p: tPrivacyPolicy('h4_4_p'),
    h4_5: tPrivacyPolicy('h4_5'),
    h4_5_p: tPrivacyPolicy('h4_5_p'),
    h4_6: tPrivacyPolicy('h4_6'),
    h4_6_p: tPrivacyPolicy('h4_6_p'),
  }
}

export const getTermsOfServiceLanguageText = async () => {
  const tTermsOfService = await getTranslations('termsOfService');
  return {
    title: tTermsOfService('title'),
    description: tTermsOfService('description'),
    h1: tTermsOfService('h1'),
    date: tTermsOfService('date'),
    desc: tTermsOfService('desc'),
    h4_1: tTermsOfService('h4_1'),
    h4_1_p: tTermsOfService('h4_1_p'),
    h4_2: tTermsOfService('h4_2'),
    h4_2_p: tTermsOfService('h4_2_p'),
    h4_3: tTermsOfService('h4_3'),
    h4_3_p: tTermsOfService('h4_3_p'),
    h4_4: tTermsOfService('h4_4'),
    h4_4_p: tTermsOfService('h4_4_p'),
    h4_5: tTermsOfService('h4_5'),
    h4_5_p: tTermsOfService('h4_5_p'),
    h4_6: tTermsOfService('h4_6'),
    h4_6_p: tTermsOfService('h4_6_p'),
    h4_7: tTermsOfService('h4_7'),
    h4_7_p: tTermsOfService('h4_7_p'),
    h4_8: tTermsOfService('h4_8'),
    h4_8_p: tTermsOfService('h4_8_p'),
  }
}

export const getPageComponentLanguageText = async () => {
  const tPageComponent = await getTranslations('PageComponent');
  return {
    howToPlayTitle: tPageComponent('title'),
    description: tPageComponent('description'),
    h1: tPageComponent('h1'),
    h1_p: tPageComponent('h1_p'),
    h2_1: tPageComponent('h2_1'),
    h2_1_p: tPageComponent('h2_1_p'),
    h2_2: tPageComponent('h2_2'),
    h2_2_p: tPageComponent('h2_2_p'),
    h2_3: tPageComponent('h2_3'),
    h2_3_p: tPageComponent('h2_3_p'),
    h2_4: tPageComponent('h2_4'),
    h2_4_p: tPageComponent('h2_4_p'),
    h2_5: tPageComponent('h2_5'),
    h2_5_p: tPageComponent('h2_5_p'),
  }
}
export const getAboutLanguageText = async () => {
  const tAbout = await getTranslations('About');
  return {
    whyChooseTitle: tAbout('whyChooseTitle'),
    browserBasedGaming: tAbout('browserBasedGaming'),
    diverseCharacterSelection: tAbout('diverseCharacterSelection'),
    progressiveDifficulty: tAbout('progressiveDifficulty'),
    enhancedGameplayFeatures: tAbout('enhancedGameplayFeatures'),
    dynamicObstacles: tAbout('dynamicObstacles'),
    rhythmIntegration: tAbout('rhythmIntegration'),
    achievementSystem: tAbout('achievementSystem'),
    simpleControlsTitle: tAbout('simpleControlsTitle'),
    simpleControlsDescription: tAbout('simpleControlsDescription'),
    controls1: tAbout('controls1'),
    controls2: tAbout('controls2'),
    controls3: tAbout('controls3'),
    controls4: tAbout('controls4'),
    controls5: tAbout('controls5'),
    controls6: tAbout('controls6'),
  }
}
export const getHowToPlayLanguageText = async () => {
  const tHowToPlay = await getTranslations('howToPlay');
  return {
    howToPlayTitle: tHowToPlay('howToPlayTitle'),
    gettingStartedTitle: tHowToPlay('gettingStartedTitle'),
    gettingStartedDescription: tHowToPlay('gettingStartedDescription'),
    masterTheRhythmTitle: tHowToPlay('masterTheRhythmTitle'),
    masterTheRhythmDescription: tHowToPlay('masterTheRhythmDescription'),
    practiceModeTitle: tHowToPlay('practiceModeTitle'),
    practiceModeDescription: tHowToPlay('practiceModeDescription'),
    levelProgressionTitle: tHowToPlay('levelProgressionTitle'),
    levelProgressionDescription: tHowToPlay('levelProgressionDescription'),
    proTipsTitle: tHowToPlay('proTipsTitle'),
    proTipsList1: tHowToPlay('proTipsList1'),
    proTipsList2: tHowToPlay('proTipsList2'),
    proTipsList3: tHowToPlay('proTipsList3'),
    proTipsList4: tHowToPlay('proTipsList4'),
    proTipsList5: tHowToPlay('proTipsList5'),
  } 
}
export const getFAQLanguageText = async () => {
  const tFAQ = await getTranslations('FAQ');
  return {
    faqTitle: tFAQ('faqTitle'),
    faqItem1Title: tFAQ('faqItem1Title'),
    faqItem1Description: tFAQ('faqItem1Description'),
    faqItem2Title: tFAQ('faqItem2Title'),
    faqItem2Description: tFAQ('faqItem2Description'),
    faqItem3Title: tFAQ('faqItem3Title'),
    faqItem3Description: tFAQ('faqItem3Description'),
    faqItem4Title: tFAQ('faqItem4Title'),
    faqItem4Description: tFAQ('faqItem4Description'),
    faqItem5Title: tFAQ('faqItem5Title'),
    faqItem5Description: tFAQ('faqItem5Description'),
  }
}
