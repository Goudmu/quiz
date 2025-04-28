import { getShuffledIndexes } from "@/lib/utils";

const listSoalPassage = [
  {
    title:
      "The Kingdom of Kutai: A Glimpse into Indonesia's Ancient Civilization",
    storyP1:
      "The Kingdom of Kutai is considered one of the oldest known kingdoms in Indonesia, dating back to the 4th century. Situated along the Mahakam River in East Kalimantan, Kutai was a flourishing center of trade and culture. The kingdom was greatly influenced by Indian civilization, particularly Hinduism, which was evident from the discovery of the Yupa inscriptions.",
    storyP2:
      "King Kudungga is widely acknowledged as the founder of Kutai. However, it was his son, Aswawarman, who established a structured monarchy and expanded the kingdom's influence. Aswawarman was later succeeded by his son, Mulawarman, who became the most celebrated ruler of Kutai.",
    storyP3:
      "Economically, Kutai thrived due to its strategic location along major trade routes. Merchants from India, China, and other parts of Southeast Asia frequented Kutai's markets, exchanging goods such as spices, textiles, and precious metals. This trade brought not only wealth but also new ideas and cultural practices that shaped Kutai’s society.",
    storyP4:
      "Religiously, the kingdom was a stronghold of Hinduism, specifically the Shaivism sect, as many rituals and practices were dedicated to the god Shiva. Temples and shrines were constructed along the riverbanks, serving as places of worship and learning.",
    storyP5:
      "Despite its prosperity, the Kingdom of Kutai eventually declined due to internal conflicts and external pressures. Over time, it fragmented into smaller principalities and lost its dominance. However, its legacy endures, providing critical insights into the early development of Indonesian civilization.",

    question1: "Who is recognized as the founder of the Kingdom of Kutai?",
    optionsQuestion1: [
      "Aswawarman",
      "Mulawarman",
      "Kudungga",
      "Gajah Mada",
      "Hayam Wuruk",
    ],
    answerQuestion1: "Kudungga",

    question2:
      "Which ruler of Kutai is celebrated for his generosity towards Brahmins?",
    optionsQuestion2: [
      "Aswawarman",
      "Kudungga",
      "Mulawarman",
      "Hayam Wuruk",
      "Samaratungga",
    ],
    answerQuestion2: "Mulawarman",

    question3: "What was the main religion practiced in the Kingdom of Kutai?",
    optionsQuestion3: [
      "Buddhism",
      "Shaivism",
      "Islam",
      "Animism",
      "Christianity",
    ],
    answerQuestion3: "Shaivism",

    question4:
      "What important artifacts were found that revealed Kutai’s historical records?",
    optionsQuestion4: [
      "Manuscripts",
      "Temples",
      "Yupa inscriptions",
      "Gold coins",
      "Bronze statues",
    ],
    answerQuestion4: "Yupa inscriptions",

    question5:
      "What factor contributed significantly to Kutai's economic prosperity?",
    optionsQuestion5: [
      "Agriculture",
      "Military conquest",
      "Strategic trade location",
      "Mining",
      "Shipbuilding",
    ],
    answerQuestion5: "Strategic trade location",
  },
  {
    title:
      "The Rise and Legacy of the Tarumanegara Kingdom in Early Indonesian History",
    storyP1:
      "The Kingdom of Tarumanegara was one of the earliest Hindu kingdoms in the Indonesian archipelago, flourishing between the 4th and 7th centuries. It was located in what is now the western part of Java, near the modern-day city of Jakarta. Tarumanegara is most famous for its close connections to Indian culture, particularly the influence of Hinduism. Evidence of its existence comes primarily from stone inscriptions written in Sanskrit and Pallava script. These artifacts reveal the political structure, religious practices, and the accomplishments of its rulers.",

    storyP2:
      "King Purnawarman was the most renowned ruler of Tarumanegara, noted for his leadership, wisdom, and devotion to Hinduism. Under his reign, the kingdom expanded its influence significantly across the western regions of Java. Purnawarman is especially remembered for his public works, such as the construction of irrigation canals to aid agriculture. Several inscriptions, including the famous Tugu Inscription, document his generous donations to religious institutions and his contributions to the prosperity of his people. His reign marked the golden age of Tarumanegara.",

    storyP3:
      "The economy of Tarumanegara was largely based on agriculture, facilitated by sophisticated irrigation systems. In addition to farming, the kingdom also engaged in trade with foreign merchants, particularly those from India and China. Goods such as spices, precious stones, and textiles were commonly traded. These economic activities not only brought wealth but also fostered cultural exchanges that enriched Tarumanegara's traditions. As a result, the kingdom developed a highly stratified society with a ruling elite, traders, artisans, and farmers.",

    storyP4:
      "Religious life in Tarumanegara revolved primarily around Hindu practices, especially the worship of Vishnu. Temples were built to honor Hindu deities, and rituals were conducted by Brahmin priests who played influential roles in society. However, traces of indigenous animistic beliefs also persisted among the common people. The blending of local traditions with Hindu teachings created a unique spiritual landscape. Education and literacy were valued, particularly among the nobility and the priestly class.",

    storyP5:
      "Despite its early achievements, Tarumanegara eventually declined due to a combination of internal weaknesses and external pressures. Fragmentation among regional rulers weakened the central authority, making the kingdom vulnerable to outside threats. Over time, successor states such as the Kingdom of Sunda emerged from the remnants of Tarumanegara. Nevertheless, the legacy of Tarumanegara remains significant in the history of Indonesia, providing important insights into the early development of statecraft, religion, and culture in the archipelago.",

    question1: "Who was the most famous ruler of the Kingdom of Tarumanegara?",
    optionsQuestion1: [
      "Mulawarman",
      "Purnawarman",
      "Kudungga",
      "Samaratungga",
      "Hayam Wuruk",
    ],
    answerQuestion1: "Purnawarman",

    question2:
      "What major infrastructure did King Purnawarman build to support agriculture?",
    optionsQuestion2: [
      "Bridges",
      "Temples",
      "Irrigation canals",
      "Roads",
      "Dams",
    ],
    answerQuestion2: "Irrigation canals",

    question3:
      "Which foreign cultures had a significant influence on Tarumanegara?",
    optionsQuestion3: [
      "Chinese and Indian",
      "Arab and Chinese",
      "Greek and Roman",
      "Mongol and Persian",
      "Egyptian and Indian",
    ],
    answerQuestion3: "Chinese and Indian",

    question4: "What was the primary religion practiced in Tarumanegara?",
    optionsQuestion4: [
      "Buddhism",
      "Christianity",
      "Hinduism",
      "Islam",
      "Animism",
    ],
    answerQuestion4: "Hinduism",

    question5: "What eventually happened to the Kingdom of Tarumanegara?",
    optionsQuestion5: [
      "It expanded into a vast empire",
      "It merged with Sriwijaya",
      "It declined and gave rise to new kingdoms",
      "It was conquered by Majapahit",
      "It transformed into a Buddhist kingdom",
    ],
    answerQuestion5: "It declined and gave rise to new kingdoms",
  },
];

export const soalPassage = (nomorPassage) => {
  let finalStory = [];
  let ListSoalFinal = [];

  for (let i = 1; i <= 5; i++) {
    finalStory.push(listSoalPassage[nomorPassage]["storyP" + i]);
  }

  for (let i = 1; i <= 5; i++) {
    ListSoalFinal.push({
      id: i,
      question: listSoalPassage[nomorPassage]["question" + i],
      options: listSoalPassage[nomorPassage]["optionsQuestion" + i],
      correctAnswer: listSoalPassage[nomorPassage]["answerQuestion" + i],
    });
  }
  return {
    story: finalStory,
    title: listSoalPassage[nomorPassage].title,
    ListSoalFinal: ListSoalFinal,
  };
};
