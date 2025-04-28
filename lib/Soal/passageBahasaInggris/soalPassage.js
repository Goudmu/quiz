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
  {
    title:
      "The Rise and Decline of Sriwijaya: A Pillar of Maritime Power in Southeast Asia",
    storyP1:
      "The Kingdom of Sriwijaya was a powerful maritime and commercial empire based on the island of Sumatra. It rose to prominence between the 7th and 13th centuries, controlling critical trade routes throughout Southeast Asia. Sriwijaya’s strategic location along the Malacca and Sunda Straits enabled it to dominate international trade between China and India. The kingdom was also a vibrant center for the spread of Mahayana Buddhism, attracting scholars, monks, and pilgrims from across Asia. Its wealth and influence were documented by Chinese travelers and Arabic geographers who marveled at Sriwijaya’s prosperity.",

    storyP2:
      "The rulers of Sriwijaya exercised control over a vast network of tributary states and important ports. To maintain their dominance, they developed a powerful navy capable of enforcing their authority and protecting merchant vessels. The empire fostered diplomatic relations with major civilizations, sending emissaries to the Chinese Tang Dynasty and receiving recognition from Indian rulers. One of the most notable kings was Balaputradewa, who strengthened Sriwijaya's religious and political stature. Through skillful diplomacy and military prowess, the kingdom maintained its supremacy over the region for centuries.",

    storyP3:
      "Economically, Sriwijaya’s wealth was primarily derived from controlling the lucrative trade of spices, gold, and camphor. It served as an essential stopping point for merchants who needed to restock supplies before continuing their voyages. Additionally, the kingdom imposed taxes on passing ships, further enriching its coffers. The capital, believed to be located near present-day Palembang, bustled with markets, temples, and shipyards. This economic prosperity allowed Sriwijaya to fund religious, cultural, and architectural projects that showcased its affluence.",

    storyP4:
      "Religion played a central role in the life of the Sriwijaya kingdom. As a hub of Mahayana Buddhism, it hosted numerous monasteries and attracted Buddhist scholars from countries such as China and India. The Nalanda inscription in India mentions that King Balaputradewa built a monastery for Sriwijayan monks studying abroad. These religious activities strengthened the kingdom’s prestige and created strong cultural links with the broader Buddhist world. Despite its Buddhist orientation, Sriwijaya remained tolerant toward diverse religious practices within its territories.",

    storyP5:
      "Sriwijaya's decline began in the 11th century due to several factors, including internal strife and external attacks. The Chola dynasty from southern India launched devastating raids against Sriwijaya’s key ports, severely weakening its power. As a result, the kingdom gradually lost control over its tributary states and vital trade routes. Eventually, Sriwijaya fragmented into smaller states that were no longer able to dominate regional commerce. Nevertheless, Sriwijaya’s legacy as a major maritime power continues to be celebrated in Southeast Asian history.",

    question1:
      "What geographical advantage did Sriwijaya have that contributed to its power?",
    optionsQuestion1: [
      "It was located near mountain ranges",
      "It was located along important trade routes",
      "It was located on a large desert",
      "It was protected by vast forests",
      "It was situated on fertile plains",
    ],
    answerQuestion1: "It was located along important trade routes",

    question2: "Which religion flourished under the rule of Sriwijaya?",
    optionsQuestion2: [
      "Islam",
      "Christianity",
      "Hinduism",
      "Mahayana Buddhism",
      "Animism",
    ],
    answerQuestion2: "Mahayana Buddhism",

    question3: "Who was one of the most notable rulers of Sriwijaya?",
    optionsQuestion3: [
      "Purnawarman",
      "Mulawarman",
      "Balaputradewa",
      "Hayam Wuruk",
      "Kertanegara",
    ],
    answerQuestion3: "Balaputradewa",

    question4:
      "What major economic activity contributed to Sriwijaya's wealth?",
    optionsQuestion4: [
      "Agricultural expansion",
      "Shipbuilding only",
      "Controlling trade and taxing merchants",
      "Mining iron and copper",
      "Fishing and forestry",
    ],
    answerQuestion4: "Controlling trade and taxing merchants",

    question5: "Which external force launched attacks that weakened Sriwijaya?",
    optionsQuestion5: [
      "The Mongol Empire",
      "The Majapahit Kingdom",
      "The Chola Dynasty",
      "The Khmer Empire",
      "The Gupta Empire",
    ],
    answerQuestion5: "The Chola Dynasty",
  },
  {
    title: "The Glory and Decline of the Ancient Mataram Kingdom in Java",
    storyP1:
      "The Kingdom of Mataram Kuno, also known as the Medang Kingdom, was an influential Hindu-Buddhist kingdom in Central Java. It flourished between the 8th and 10th centuries, leaving behind numerous monumental temples as evidence of its grandeur. Mataram was a highly sophisticated society with strong religious and cultural traditions. Its rulers were deeply committed to both Hinduism and Mahayana Buddhism, leading to the construction of magnificent religious sites such as Borobudur and Prambanan. These achievements marked Mataram Kuno as a center of learning, art, and spirituality in Southeast Asia.",

    storyP2:
      "King Sanjaya, founder of the Sanjaya Dynasty, established a solid foundation for Mataram’s political power. Under his leadership, the kingdom expanded its territories and promoted Hinduism, particularly Shaivism. Later, the Shailendra Dynasty rose to prominence, favoring Mahayana Buddhism and contributing to the kingdom's golden age. The rulers skillfully balanced religious coexistence, allowing both Hindu and Buddhist traditions to thrive. This dual religious influence made Mataram culturally rich and diverse, distinguishing it from other contemporary kingdoms.",

    storyP3:
      "The economy of Mataram Kuno was primarily based on agriculture, supported by the fertile volcanic soil of Central Java. Advanced irrigation systems were developed to maximize rice production, ensuring food security and supporting a growing population. Trade also played a crucial role, with merchants exchanging goods such as rice, spices, and crafts with other parts of Asia. This economic prosperity enabled the kingdom to fund grand architectural projects and religious ceremonies. Mataram’s wealth and stability made it a beacon of civilization in early Indonesian history.",

    storyP4:
      "Religious devotion was at the heart of daily life in Mataram Kuno. Temples were not only places of worship but also centers of education, art, and philosophy. Monumental structures like Borobudur, the world’s largest Buddhist temple, exemplify the kingdom’s architectural brilliance and spiritual dedication. Hindu temples, such as Prambanan, showcased intricate carvings and towering spires dedicated to gods like Shiva. These masterpieces reflected both religious fervor and the sophisticated artistry of the Mataram people.",

    storyP5:
      "Mataram Kuno eventually declined due to a combination of natural disasters and political instability. A major eruption of Mount Merapi may have devastated agricultural lands, prompting a shift of power toward East Java. Internal conflicts among noble families weakened the central authority, making the kingdom vulnerable to outside threats. By the 10th century, the kingdom had fragmented, leading to the rise of new powers like the Kingdom of Kediri. Nevertheless, the legacy of Mataram Kuno endures through its enduring monuments and profound cultural contributions.",

    question1:
      "Which two religions flourished under the Kingdom of Mataram Kuno?",
    optionsQuestion1: [
      "Islam and Buddhism",
      "Hinduism and Christianity",
      "Hinduism and Buddhism",
      "Animism and Buddhism",
      "Islam and Hinduism",
    ],
    answerQuestion1: "Hinduism and Buddhism",

    question2: "Which king founded the Sanjaya Dynasty?",
    optionsQuestion2: [
      "Balaputradewa",
      "Samaratungga",
      "San jaya",
      "Purnawarman",
      "Kudungga",
    ],
    answerQuestion2: "Sanjaya",

    question3:
      "What was one of the major economic foundations of Mataram Kuno?",
    optionsQuestion3: [
      "Maritime conquest",
      "Rice agriculture",
      "Gold mining",
      "Shipbuilding",
      "Fishing",
    ],
    answerQuestion3: "Rice agriculture",

    question4:
      "Which monumental Buddhist structure was built during the reign of Mataram Kuno?",
    optionsQuestion4: [
      "Angkor Wat",
      "Borobudur",
      "Prambanan",
      "Mendut",
      "Tanah Lot",
    ],
    answerQuestion4: "Borobudur",

    question5: "What factor likely contributed to the decline of Mataram Kuno?",
    optionsQuestion5: [
      "Invasion by the Mongols",
      "Overexpansion",
      "Mount Merapi's eruption",
      "Religious persecution",
      "Economic collapse",
    ],
    answerQuestion5: "Mount Merapi's eruption",
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
  ListSoalFinal = ListSoalFinal.map((item) => {
    return {
      ...item,
      options: item.options.filter(Boolean).sort(() => Math.random() - 0.5),
    };
  });

  return {
    story: finalStory,
    title: listSoalPassage[nomorPassage].title,
    ListSoalFinal: ListSoalFinal,
  };
};

export const optionsPassage = [
  {
    value: 0,
    label: "Kutai Kingdom",
  },
  {
    value: 1,
    label: "Tarumanegara Kingdom",
  },
  {
    value: 2,
    label: "Sriwijaya Kingdom",
  },
  {
    value: 3,
    label: "Mataram Kuno Kingdom",
  },
];
