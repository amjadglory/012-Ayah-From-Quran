//! get the elements
var ayahBtn = document.getElementById("ayahBtn");
var content = document.getElementById("content");

//! ayat array
var ayat = [
  {
    ayahInAr:
      "﴾ يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ ﴿",
    ayahInEn:
      "O you who believe! Endure and be more patient (than your enemy), and guard your territory by stationing army units permanently at the places from where the enemy can attack you, and fear Allah, so that you may be successful.",
    ayahNum: "آل عمران: 200",
  },
  {
    ayahInAr:
      "﴾ وَمَنْ أَحْسَنُ دِينًا مِّمَّنْ أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ وَاتَّبَعَ مِلَّةَ إِبْرَاهِيمَ حَنِيفًا ۗ وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا ﴿",
    ayahInEn:
      "And who can be better in religion than one who submits his face (himself) to Allah (i.e. follows Allah's Religion of Islamic Monotheism); and he is a Muhsin (a good-doer - see V. 2:112). And follows the religion of Ibrahim (Abraham) Hanifa (Islamic Monotheism - to worship none but Allah Alone). And Allah did take Ibrahim (Abraham) as a Khalil (an intimate friend).",
    ayahNum: "النساء: 125",
  },
  {
    ayahInAr: "﴾ يَا وَيْلَتَىٰ لَيْتَنِي لَمْ أَتَّخِذْ فُلَانًا خَلِيلًا ﴿",
    ayahInEn:
      "Ah! Woe to me! Would that I had never taken so-and-so as a friend!",
    ayahNum: "الفرقان: 28",
  },
  {
    ayahInAr:
      "﴾ مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً ۖ وَلَنَجْزِيَنَّهُمْ أَجْرَهُم بِأَحْسَنِ مَا كَانُوا يَعْمَلُونَ ﴿",
    ayahInEn:
      "Whoever works righteousness, whether male or female, while he (or she) is a true believer (of Islamic Monotheism) verily, to him We will give a good life (in this world with respect, contentment and lawful provision), and We shall pay them certainly a reward in proportion to the best of what they used to do (i.e. Paradise in the Hereafter).",
    ayahNum: " النحل: 97",
  },
  {
    ayahInAr:
      "﴾  إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا ﴿",
    ayahInEn:
      "Verily! We have made that which is on earth as an adornment for it, in order that We may test them (mankind) as to which of them are best in deeds. [i.e. those who do good deeds in the most perfect manner, that means to do them (deeds) totally for Allah's sake and in accordance to the legal ways of the Prophet SAW].",
    ayahNum: "الكهف: 7",
  },
  {
    ayahInAr:
      "﴾ وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُمْ بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ وَلَا تَعْدُ عَيْنَاكَ عَنْهُمْ تُرِيدُ زِينَةَ الْحَيَاةِ الدُّنْيَا وَلَا تُطِعْ مَنْ أَغْفَلْنَا قَلْبَهُ عَنْ ذِكْرِنَا وَاتَّبَعَ هَوَاهُ وَكَانَ أَمْرُهُ فُرُطًا ﴿",
    ayahInEn:
      "And keep yourself (O Muhammad SAW) patiently with those who call on their Lord (i.e. your companions who remember their Lord with glorification, praising in prayers, etc., and other righteous deeds, etc.) morning and afternoon, seeking His Face, and let not your eyes overlook them, desiring the pomp and glitter of the life of the world; and obey not him whose heart We have made heedless of Our Remembrance, one who follows his own lusts and whose affair (deeds) has been lost.",
    ayahNum: "الكهف: 28",
  },
  {
    ayahInAr:
      "﴾ الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِنْدَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا ﴿",
    ayahInEn:
      "Wealth and children are the adornment of the life of this world. But the good righteous deeds (five compulsory prayers, deeds of Allah's obedience, good and nice talk, remembrance of Allah with glorification, praises and thanks, etc.), that last, are better with your Lord for rewards and better in respect of hope.",
    ayahNum: "الكهف: 46",
  },
];

var randomchecker;

ayahBtn.addEventListener("click", function () {
  for (var i = 0; i < 100; i++) {
    var randomIndex = Math.floor(Math.random() * ayat.length);
    if (randomIndex !== randomchecker) {
      break;
    }
  }

  randomchecker = randomIndex;

  content.innerHTML = `
    <p>${ayat[randomIndex].ayahInAr}</p>
    <p>${ayat[randomIndex].ayahInEn}</p>
    <p>${ayat[randomIndex].ayahNum}</p>
    `;
});
