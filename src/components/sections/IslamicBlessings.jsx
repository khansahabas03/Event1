import React from "react";
import { Sparkles } from "lucide-react";
import GoldDivider from "../shared/GoldDivider";

export default function IslamicBlessings() {
  return (
    <section className="section-pad islamic-blessings-section" id="blessings">
      <div className="blessing-ornament">۞</div>
      <p className="eyebrow">A PRAYER FOR A BLESSED UNION</p>
      <h2>May Allah bless this <em>new beginning</em></h2>
      <GoldDivider />
      <p className="blessing-arabic" lang="ar" dir="rtl">بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
      <p className="blessing-transliteration">BarakAllahu laka, wa baraka ‘alayka, wa jama‘a baynakuma fi khayr.</p>
      <p className="blessing-translation">“May Allah bless you, shower His blessings upon you, and bring you together in goodness.”</p>
      <small>Wedding congratulation dua · Sunan Abi Dawud 2130</small>
      <div className="blessing-footer"><Sparkles size={16} /> Please remember the couple and their families in your duas.</div>
    </section>
  );
}
