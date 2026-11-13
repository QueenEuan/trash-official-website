export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

// Facts checked against press coverage and award records on 2026-11-13.
export const timeline: TimelineEvent[] = [
  { year: "2009", title: "Formation", description: "TRASH forms in Taipei in December 2009. Vocalist Marz23 and drummer Kuei gun, who met in high school, have been in the band from the start.", tag: "Origin" },
  { year: "2012", title: "Debut Album", description: "The self-titled debut album TRASH is released.", tag: "Album" },
  { year: "2013", title: "Ocean Independent Music Award", description: "In July, TRASH wins the Ocean Independent Music Award at the 14th Gongliao Ho-Hai-Yan Rock Festival.", tag: "Award" },
  { year: "2013", title: "Euan Joins", description: "Guitarist Euan joins TRASH in September.", tag: "Member" },
  { year: "2014", title: "Reset / 歸零", description: "The second album, 歸零 (Reset), is released.", tag: "Album" },
  { year: "2015", title: "First Golden Melody Nomination", description: "歸零 earns nominations for Best Band at the 26th Golden Melody Awards and Best Live Performance at the 6th Golden Indie Music Awards.", tag: "Nomination" },
  { year: "2015", title: "TTeng Joins", description: "Bassist TTeng, who first filled in on an Asia tour, becomes a full member and completes the current lineup.", tag: "Member" },
  { year: "2016", title: "CPBL Theme Song", description: "TRASH writes and performs 我們的歌, the annual theme song of Taiwan’s professional baseball league (CPBL).", tag: "Song" },
  { year: "2017", title: "11:11", description: "The third album, 11:11, arrives three years after 歸零. The same year TRASH performs at the Taipei Summer Universiade closing ceremony and opens the Golden Indie Music Awards.", tag: "Album" },
  { year: "2018", title: "Hiatus", description: "After selling out the 火星的班機 show at Legacy, the band — struggling to make ends meet — decides to go on a one-year hiatus.", tag: "Hiatus" },
  { year: "2019", title: "Return with Warner Music", description: "TRASH signs with Warner Music Taiwan and returns in July with the single 重感情的廢物 (Heavyhearted Loser), followed by the EP Never Die in November.", tag: "Comeback" },
  { year: "2020", title: "Second Golden Melody Nomination", description: "Never Die is nominated for Best Band at the 31st Golden Melody Awards. With touring cancelled by the pandemic, the four members retreat to a mountain cabin to write.", tag: "Nomination" },
  { year: "2021", title: "Holy Trip!", description: "The album Holy Trip!, written during the cabin retreat, is released in September.", tag: "Album" },
  { year: "2022", title: "Third Golden Melody Nomination", description: "Holy Trip! is nominated for Best Band at the 33rd Golden Melody Awards, and the Holy Trip! concert takes place in Taipei.", tag: "Nomination" },
  { year: "2024", title: "The Last Train of Happiness / 幸福的末班車", description: "The fifth album, 幸福的末班車 (The Last Train of Happiness), is released on September 13 to mark the band’s 15th anniversary, alongside the documentary TRASH CAN!.", tag: "Album" },
  { year: "2024", title: "Taipei Arena", description: "On December 14, TRASH headlines Taipei Arena for the first time.", tag: "Arena" },
  { year: "2025", title: "Kaohsiung Arena", description: "The 15th-anniversary concert comes to Kaohsiung Arena on May 3 and later travels to Malaysia.", tag: "Arena" },
  { year: "2025", title: "Golden Melody Awards Best Band", description: "On its fourth nomination, TRASH wins Best Band at the 36th Golden Melody Awards with 幸福的末班車.", tag: "Award" },
  { year: "2026", title: "New Single: I don’t belong here", description: "TRASH releases 只剩後悔在等待 (I don’t belong here), its first new song since winning Best Band, written during a retreat on Miyako Island, Okinawa.", tag: "Single" },
];
