(function(){
  "use strict";
  var D={
    ar:{
      dir:"rtl", brand:"شاهر", navCta:"Audit مجاني",
      nav:[["#problem","المشكلة"],["#about","مين أنا"],["#approach","طريقة التفكير"],["#services","الخدمات"],["#work","النتائج"],["#proof","إثبات"]],
      heroH1:['الفاشون اللي بيكسب،','<span class="hl">مش اللي بيبيع بس.</span>'],
      heroLead:"مش بشغّل إعلانات وأسيبك. ببني نظام كامل لبراند الفاشون بتاعك يخلّي كل جنيه بتصرفه يرجع ومعاه ربح: كرييتف يبيع، وستور يحوّل، وأوفر يرجّع العميل تاني.",
      cta1:"احجز AUDIT مجاني", cta2:"اعرف إزاي بشتغل",
      chipA:"سكيلينج بالأرقام", chipB:"عائد مضمون له رقم",
      stats:[["+200M","مبيعات أدرتها"],["سنتين","في فاشون مصر"],["19×","أعلى ROAS"]],
      probEye:"المشكلة الحقيقية", probTitle:"مبيعات كتير… وربح قليل. تعرف السبب؟",
      probs:[
        "بتصرف أكتر كل شهر وبتجيب نفس المبيعات. تكلفة الأوردر بتغلى وإنت واقف مكانك.",
        "الكولكشن الجديد بيشتعل أول أسبوع، وبعدين الأداء بيقع ومتعرفش ليه.",
        "المقاسات والمرتجعات بتاكل الهامش. الأوردر اللي فرحت بيه بيرجعلك تاني.",
        "العميل بيشتري مرة ويختفي. مفيش حاجة بترجّعه، فبتدفع من الأول كل مرة."
      ],
      probClose:'دي مش مشاكل إعلان. دي مشاكل <b>نظام</b>. وده بالظبط اللي بشتغل عليه.',
      aboutEye:"مين أنا", aboutTitle:"متخصص في الفاشون بس، وده مقصود.",
      about:[
        "أنا شاهر، Media Buyer و Performance Marketer بشتغل على براندات الفاشون في مصر بس. في سنتين أدرت أكتر من 200 مليون جنيه مبيعات لبراندات ملابس أونلاين، ومبشتغلش في كل حاجة عشان أبقى كويس في حاجة واحدة: الفاشون.",
        "التخصص ده معناه إني فاهم لعبتك من جوه: الكرييتف اللي بيبيع، المقاسات والمرتجعات اللي بتاكل الربح، الدروبس والمواسم، والعميل اللي لازم يرجع. مش بجرّب عليك، أنا شغال في السوق ده كل يوم.",
        "وقراراتي كلها من الأرقام والـ unit economics، مش من الإحساس. كل جنيه له مكان وله سبب."
      ],
      sig:"— شاهر",
      apprEye:"طريقة التفكير",
      apprQuote:"إنت مش بتدفع في الأوردر. إنت بتدفع في الزيارة. خلّي الزيارة تتحوّل، والسعر بينزل لوحده.",
      principles:[
        ["i","الكرييتف هو 80% من نتيجتك","مش الـ Targeting. في الفاشون الاستايل هو اللي بيبيع، والكرييتف بيتجدد كل أسبوع مش بيتحرق. لوكبوك و UGC وريلز صح بيعملوا فرق أكبر من أي تعديل في الأودينس."],
        ["ii","الربح جوّه الأوردر، مش في عددهم","الباندل و«كمّلي اللوك» وتقليل المرتجع بيرفعوا صافي الربح أكتر من أي زيادة صرف. بنكبّر قيمة الأوردر قبل ما نكبّر الميزانية."],
        ["iii","العميل اللي بيرجع أرخص من عميل جديد","نص اللعبة ريتنشن. اللي بيرجع يشتري تاني بيخلّي تكلفة البيعة الجاية تقرب من صفر. بنلعب LTV مش CPO."],
        ["iv","الترافيك آخر خطوة، مش أولها","نظبّط الأوفر والستور والكرييتف الأول. لما الأرقام تسمح نفتح الصرف، مش قبل كده. أقوى إعلان على أوفر ضعيف بيخسر."]
      ],
      svcEye:"بشتغل على إيه", svcTitle:"نظام نمو كامل لبراند الفاشون",
      services:[
        ["fa-rocket","ميديا باينج وسكيلينج","Media Buying & Scaling","ستراكشر وصرف وسكيلينج ذكي على Meta و TikTok، مبني على إيقاع الدروبس والمواسم. الكامبين اللي بيغلى بيتقفل، والصرف بيزيد لما الأرقام تسمح، مش بالإحساس."],
        ["fa-clapperboard","الكرييتف والـ UGC","Creative Direction & UGC","بريفات كرييتف ولوكبوك و UGC مصمّمة للبيع. الرسالة والاستايل قبل الميزانية، لأن كتير المشكلة مش في الـ Budget، المشكلة في إنت بتقول إيه وبتوريه إزاي."],
        ["fa-arrows-rotate","الكاتالوج والريتارجتنج","Catalog / DPA & Retargeting","كاتالوج نضيف وداينمك آدز وريتارجتنج بيرجّع السلة المتروكة ويبيع الكولكشن كله مش منتج واحد. ده اللي بيرخّص الأوردر في الفاشون."],
        ["fa-wand-magic-sparkles","تحسين الستور (CRO)","Conversion Optimization","صفحة المنتج، جدول المقاسات، الباندلز، والـ checkout. كل تحسين في التحويل بينزّل تكلفة الأوردر من غير ما نلمس الإعلان."],
        ["fa-arrow-trend-up","استراتيجية النمو والريتنشن","Growth & Retention","Unit economics و LTV وأنظمة بترجّع العميل يشتري تاني. البيع بالأوفر مش بالخصم، وكل قرار له رقم وراه."]
      ],
      procEye:"إزاي بشتغل معاك", procTitle:"من التشخيص للسكيلينج",
      steps:[
        ["Audit وتشخيص","نبص ع الأكونت والفانل والأرقام سوا، ونحدد فين الفلوس بتضيع، من غير ما نصرف جنيه زيادة.","أسبوع 1"],
        ["الأوفر والبوزيشننج","نظبّط الأوفر وقيمة العميل الأول. ده اللي بيحدد سقف النمو كله.","أسبوع 1–2"],
        ["الكرييتف والفانل","نجهّز كرييتف بيبيع ونحسّن التحويل عشان كل زيارة تطلّع أكتر قبل ما نزوّد الصرف.","أسبوع 2–3"],
        ["ميديا باينج وسكيلينج","ستراكشر وتوزيع ميزانية وسكيلينج بيزيد لما الأرقام تسمح، مش قبلها.","مستمر"],
        ["تحسين وريتنشن","نرجّع العميل يشتري تاني، ونحسّن كل أسبوع بالأرقام مش بالإحساس.","مستمر"]
      ],
      resEye:"النتائج", resTitle:"كان… وبقى. الأرقام بتتكلم.",
      cases:[
        {name:"براند فاشون للجنسين",meta:"Meta · 8 شهور",
         metrics:[["ROAS · العائد","3×","9×"],["تكلفة الأوردر","400ج","150ج"],["المبيعات (Meta)","10M / 2025","27M / 8 شهور"],["نسبة التسليم","50%","75%"],["الريتنشن","0%","17%"]],
         did:"صحّحت اختيار الموديلات وطريقة عرضها على الموقع، وظبطت التسعير من جذوره: نوع قماش أنسب وتغيير موردين عشان هامش أوسع نسعّر بيه براحتنا، وأوفرز موسمية بتحرّك الكاش فلو. النتيجة: مبيعات 8 شهور على Meta فوق ضِعف سنة كاملة، وعائد اتضاعف 3 مرات."},
        {name:"براند فاشون حريمي",meta:"Meta · شهرين",
         metrics:[["ROAS · العائد","10.46×"],["الصرف ← المبيعات","1.09M","11.4M"],["الأوردرات","9,886"],["CR · التحويل","1.67%","4.37%"],["نسبة التسليم","87%"]],
         did:"رحلة تحوّل من ستوك واقف وكاش فلو غرقان لتصفية المخزون كله في شهرين. بدأت بدراسة التسعير والموقع والأوبريشن: صحّحت التسعير بناءً على المنافسين والـ COGS، وحّدت هوية الموقع وسهّلت الفانل وضفت آراء عملاء حقيقية، واشتغلت مع UGC Creators بسكريبتات مختلفة لكل مرحلة فانل (Cold / Warm / Hot / Retention). ظبطت الأوبريشن والشحن (مناديب خاصة داخل القاهرة والجيزة) فنزلت نسبة الإلغاء، وبنيت الأوفر على القيمة مش على السعر. على مستوى الحملات: اختبار كل كرييتف حسب مرحلة الفانل، وسكيلينج منظّم من ABO للـ CBO. وأقوى نقطة: جملة واحدة في صفحة السلة رفعت التحويل من 1.67% لـ 4.37% (+162%): «ضمان استرداد كافة الأموال لمدة 90 يوم في حالة وجود عيب تصنيع أو ظهور وبر أو انكماش في المقاس». لعبت على أكتر قلق بيشغل العميلة وهي بتشتري، وكتبناها لأننا اختبرنا الخامة فعلاً وكنا واثقين فيها."},
        {name:"براند ملابس أطفال",meta:"Meta · من سبتمبر 2025",
         metrics:[["ROAS · العائد","19×"],["المبيعات (Meta)","300 ألف / سنة","18.7M"],["نسبة التسليم","78%"],["الريتنشن","23%"]],
         did:"مسكت البراند وهو بايع بـ 300 ألف في السنة، وبنيت كل حاجة من الصفر: موقع جديد، اختبار موديلات، اختبار صور، اختبار تسعير، وكرييتف دايركشن كامل. الشغل المنظّم ده وصل بالمبيعات لـ 18.7 مليون بعائد ثابت 19×، من غير ما نضحّي بالتسليم (78%) ولا الريتنشن (23%)."}
      ],
      privNote:"كل الأرقام من شغل حقيقي، معروضة بدون أسماء عملاء التزامًا بالخصوصية.",
      proofEye:"إثبات", proofTitle:"مش كلام. ده من الـ Ads Manager نفسه.",
      proofs:[
        ["assets/img/proof/meta-roas.jpg","حساب براند فاشون واحد · Meta · 8 شهور (يناير–أغسطس 2026): متوسط ROAS 10.24× على صرف 2.5 مليون جنيه و17,729 أوردر من 160 حملة. أسماء الحملات مخفية للخصوصية."],
        ["assets/img/proof/store-sales.jpg","براند فاشون تاني · داشبورد المتجر · 9 شهور (يناير–سبتمبر 2026): مبيعات 30.26 مليون ج.م أدرتها بالإعلانات، 20 ألف طلب، ومعدل تحويل 3.02% على 663 ألف زيارة."],
        ["assets/img/proof/shopify-sales.jpg","براند فاشون على Shopify · 8 شهور (يناير–أغسطس 2026): مبيعات 16.29 مليون ج.م (+55%) و16 ألف طلب (+142%) أدرتها بالإعلانات، مقارنةً بالفترة اللي قبلها."],
        ["assets/img/proof/kids-meta.jpg","براند ملابس أطفال · Meta · سنة (سبتمبر 2025–أغسطس 2026): متوسط ROAS 13.47× على صرف 1.44 مليون جنيه، بمبيعات 19.4 مليون و13,067 أوردر من 99 حملة. أسماء الحملات مخفية للخصوصية."]
      ],
      fitGoodEye:"مناسب لو", fitGoodTitle:"نبدأ سوا",
      fitGood:["عندك براند فاشون بيبيع فعلاً وعندك مبيعات.","عندك ميزانية ماركتنج وعايز توسّع بجد.","بتدوّر على حد فاهم الفاشون، مش بس بيدوس زراير."],
      fitBadEye:"مش مناسب لو", fitBadTitle:"الوقت لسه بدري",
      fitBad:["لسه بتبدأ ومفيش منتج بيبيع.","بتدوّر على أرخص خدمة في الماركت.","الميزانية محدودة جداً ومفيش مساحة توسّع."],
      faqEye:"أسئلة شائعة", faqTitle:"أسئلة شائعة",
      faqs:[
        ["بتشتغل مع أي براندات؟","فاشون بس، في مصر. براندات عندها منتج بيبيع فعلاً وميزانية وعايزة توسّع. التخصص ده اللي بيخلّي شغلي أعمق من أي ميديا باير بيشتغل في كل حاجة."],
        ["إيه اللي بيفرقك؟","إني متخصص في الفاشون فبفهم الكرييتف والمقاسات والمرتجعات والدروبس من جوه، وإني بشوف النمو كنظام كامل: الأوفر والفانل والتحويل والريتنشن، مش بس الإعلان. علشان كده النتيجة بتفضل مش بتقف بوقفة الصرف."],
        ["امتى أشوف نتيجة؟","أول تشخيص وتحسينات بتبان في أول أسابيع. السكيلينج الحقيقي بيجي لما الأرقام (CVR و AOV و ROAS) تستقر، مش بضغطة زر."],
        ["بتضمن أرقام؟","محدش بيضمن أرقام بصدق. اللي بضمنه إن كل قرار له رقم وراه، وإننا بنشتغل على أعلى عائد على كل جنيه بيتصرف."],
        ["بتاخد كام براند؟","عدد محدود عشان الشغل يفضل بجودة. علشان كده الـ Audit المجاني لعدد قليل بس، لو الأرقام بتناسب نبدأ."]
      ],
      contactTitle:"عندك براند فاشون بيبيع وعايز توسّع؟",
      contactText:"بعمل Audit مجاني لعدد محدود بس. نبص سوا فين الفلوس بتضيع وفين أقرب فرصة نمو حقيقية. لو الكلام ده بيوصفك، ابعتلي.",
      waBtn:"كلّمني على واتساب", egypt:"مصر"
    },
    en:{
      dir:"ltr", brand:"shaher", navCta:"Free Audit",
      nav:[["#problem","Problem"],["#about","About"],["#approach","Approach"],["#services","Services"],["#work","Results"],["#proof","Proof"]],
      heroH1:['Fashion that wins,','<span class="hl">not just sells.</span>'],
      heroLead:"I don't just run ads and leave. I build a complete system for your fashion brand that makes every pound you spend come back with profit: creative that sells, a store that converts, and an offer that brings the customer back.",
      cta1:"Book a free audit", cta2:"See how I work",
      chipA:"Data-driven scaling", chipB:"Every return has a number",
      stats:[["+200M","EGP sales managed"],["2 yrs","in Egyptian fashion"],["19×","Top ROAS"]],
      probEye:"The real problem", probTitle:"Lots of sales… little profit. Know why?",
      probs:[
        "You spend more every month and get the same sales. Cost per order climbs while you stand still.",
        "The new collection catches fire in week one, then performance drops and you don't know why.",
        "Sizing and returns eat your margin. The order you celebrated comes right back.",
        "The customer buys once and disappears. Nothing brings them back, so you pay from scratch every time."
      ],
      probClose:'These aren\'t ad problems. They\'re <b>system</b> problems. And that\'s exactly what I work on.',
      aboutEye:"About me", aboutTitle:"Fashion only — and that's on purpose.",
      about:[
        "I'm Shaher, a Media Buyer and Performance Marketer working only with fashion brands in Egypt. Over two years I've managed more than 200 million EGP in sales for online clothing brands. I don't do everything, so I can be great at one thing: fashion.",
        "That focus means I understand your game from the inside: the creative that sells, the sizing and returns that eat profit, the drops and seasons, and the customer who has to come back. I'm not experimenting on you — I'm in this market every single day.",
        "And every decision I make comes from the numbers and unit economics, not from gut feeling. Every pound has a place and a reason."
      ],
      sig:"— Shaher",
      apprEye:"How I think",
      apprQuote:"You're not paying per order. You're paying per visit. Make the visit convert, and the cost drops on its own.",
      principles:[
        ["i","Creative is 80% of your result","Not targeting. In fashion, style is what sells, and creative renews weekly instead of burning out. A proper lookbook, UGC and reels make a bigger difference than any audience tweak."],
        ["ii","Profit is inside the order, not the count","Bundles, \"complete the look\" and fewer returns lift net profit more than any spend increase. We grow order value before we grow the budget."],
        ["iii","A returning customer is cheaper than a new one","Half the game is retention. Someone who buys again makes the next sale's cost near zero. We play LTV, not CPO."],
        ["iv","Traffic is the last step, not the first","We fix the offer, store and creative first. We open spend once the numbers allow it, not before. The strongest ad on a weak offer loses."]
      ],
      svcEye:"What I do", svcTitle:"A complete growth system for your fashion brand",
      services:[
        ["fa-rocket","Media Buying & Scaling","Media Buying & Scaling","Smart structure, spend and scaling on Meta and TikTok, built around your drops and seasons. Campaigns that get expensive get cut, and spend grows when the numbers allow — not on a hunch."],
        ["fa-clapperboard","Creative Direction & UGC","Creative Direction & UGC","Creative briefs, lookbooks and UGC built to sell. Message and style before budget, because often the problem isn't the budget — it's what you say and how you show it."],
        ["fa-arrows-rotate","Catalog / DPA & Retargeting","Catalog / DPA & Retargeting","A clean catalog, dynamic ads and retargeting that recover the abandoned cart and sell the whole collection, not one product. That's what lowers cost per order in fashion."],
        ["fa-wand-magic-sparkles","Conversion Optimization (CRO)","Conversion Optimization","The product page, size chart, bundles and checkout. Every lift in conversion lowers cost per order without touching the ad."],
        ["fa-arrow-trend-up","Growth & Retention","Growth & Retention","Unit economics, LTV and systems that bring the customer back. Selling on offer, not discount — and every decision has a number behind it."]
      ],
      procEye:"How I work with you", procTitle:"From diagnosis to scaling",
      steps:[
        ["Audit & diagnosis","We look at the account, funnel and numbers together and pinpoint where money leaks — without spending an extra pound.","Week 1"],
        ["Offer & positioning","We fix the offer and customer value first. This sets the ceiling for all growth.","Week 1–2"],
        ["Creative & funnel","We prepare creative that sells and improve conversion so every visit yields more, before we raise spend.","Week 2–3"],
        ["Media buying & scaling","Structure, budget allocation and scaling that grows when the numbers allow — not before.","Ongoing"],
        ["Optimization & retention","We bring the customer back to buy again, and improve weekly by the numbers, not by feel.","Ongoing"]
      ],
      resEye:"Results", resTitle:"Before… and after. The numbers talk.",
      cases:[
        {name:"Unisex fashion brand",meta:"Meta · 8 months",
         metrics:[["ROAS · return","3×","9×"],["Cost per order","400 EGP","150 EGP"],["Sales (Meta)","10M / 2025","27M / 8 mo"],["Delivery rate","50%","75%"],["Retention","0%","17%"]],
         did:"I fixed the model choices and how products were shown on the site, and corrected pricing from the roots: a more suitable fabric and a supplier change for a wider margin we could price freely with, plus seasonal offers that move cash flow. Result: 8 months of Meta sales above a full year, with return tripled."},
        {name:"Women's fashion brand",meta:"Meta · 2 months",
         metrics:[["ROAS · return","10.46×"],["Spend → sales","1.09M","11.4M"],["Orders","9,886"],["CR · conversion","1.67%","4.37%"],["Delivery rate","87%"]],
         did:"A turnaround from dead stock and drowning cash flow to clearing the entire inventory in two months. I started with pricing, site and operations: corrected pricing against competitors and COGS, unified the site identity, simplified the funnel and added real customer reviews, and worked with UGC creators using different scripts per funnel stage (Cold / Warm / Hot / Retention). I fixed operations and shipping (dedicated couriers inside Cairo and Giza) so cancellations dropped, and built the offer on value not price. On campaigns: testing each creative by funnel stage, and organized scaling from ABO to CBO. The strongest point: a single line on the cart page lifted conversion from 1.67% to 4.37% (+162%): \"Full money-back guarantee for 90 days in case of a manufacturing defect, pilling, or size shrinkage.\" It addressed the biggest worry a customer has while buying — and we wrote it because we had actually tested the fabric and were confident in it."},
        {name:"Kids' clothing brand",meta:"Meta · since Sept 2025",
         metrics:[["ROAS · return","19×"],["Sales (Meta)","300K / yr","18.7M"],["Delivery rate","78%"],["Retention","23%"]],
         did:"I took over the brand while it was selling 300K a year, and built everything from scratch: a new site, model testing, image testing, pricing testing, and full creative direction. That organized work took sales to 18.7 million at a steady 19× return — without sacrificing delivery (78%) or retention (23%)."}
      ],
      privNote:"All numbers are from real work, shown without client names out of respect for privacy.",
      proofEye:"Proof", proofTitle:"Not just talk. Straight from the Ads Manager.",
      proofs:[
        ["assets/img/proof/meta-roas.jpg","One fashion brand account · Meta · 8 months (Jan–Aug 2026): average ROAS 10.24× on 2.5M EGP spend and 17,729 orders across 160 campaigns. Campaign names hidden for privacy."],
        ["assets/img/proof/store-sales.jpg","Another fashion brand · store dashboard · 9 months (Jan–Sep 2026): 30.26M EGP in ad-driven sales, 20K orders, and a 3.02% conversion rate on 663K visits."],
        ["assets/img/proof/shopify-sales.jpg","A fashion brand on Shopify · 8 months (Jan–Aug 2026): 16.29M EGP in sales (+55%) and 16K orders (+142%) driven by ads, versus the prior period."],
        ["assets/img/proof/kids-meta.jpg","Kids' clothing brand · Meta · one year (Sep 2025–Aug 2026): average ROAS 13.47× on 1.44M EGP spend, with 19.4M in sales and 13,067 orders across 99 campaigns. Campaign names hidden for privacy."]
      ],
      fitGoodEye:"A fit if", fitGoodTitle:"We start together",
      fitGood:["You have a fashion brand that actually sells, with existing sales.","You have a marketing budget and genuinely want to scale.","You want someone who understands fashion, not just someone pushing buttons."],
      fitBadEye:"Not yet if", fitBadTitle:"It's still early",
      fitBad:["You're just starting and have no product that sells yet.","You're looking for the cheapest service on the market.","The budget is very limited with no room to scale."],
      faqEye:"FAQ", faqTitle:"Frequently asked",
      faqs:[
        ["Which brands do you work with?","Fashion only, in Egypt. Brands with a product that actually sells, a budget, and a goal to scale. That focus makes my work deeper than any media buyer who does everything."],
        ["What makes you different?","I specialize in fashion, so I understand creative, sizing, returns and drops from the inside — and I see growth as a complete system: offer, funnel, conversion and retention, not just the ad. That's why results hold instead of stopping when spend stops."],
        ["When do I see results?","The first diagnosis and improvements show in the first weeks. Real scaling comes once the numbers (CVR, AOV, ROAS) stabilize — not at the push of a button."],
        ["Do you guarantee numbers?","Honestly, no one guarantees numbers. What I guarantee is that every decision has a number behind it, and that we work for the highest return on every pound spent."],
        ["How many brands do you take?","A limited number so the work stays high quality. That's why the free audit is for just a few — if the numbers fit, we start."]
      ],
      contactTitle:"Have a fashion brand that sells and want to scale?",
      contactText:"I do a free audit for a limited number only. We look together at where money leaks and where the nearest real growth opportunity is. If this sounds like you, reach out.",
      waBtn:"Message me on WhatsApp", egypt:"Egypt"
    }
  };

  var el=function(id){return document.getElementById(id);};
  var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");};

  function render(lang){
    var t=D[lang];
    document.documentElement.lang=lang;
    document.documentElement.dir=t.dir;
    document.body.setAttribute("data-lang",lang);
    // simple [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach(function(n){
      var k=n.getAttribute("data-i18n"); if(t[k]!=null) n.innerHTML=t[k];
    });
    // hero h1
    el("heroH1").innerHTML=t.heroH1.join("<br>");
    // nav
    el("navlinks").innerHTML=t.nav.map(function(x){return '<a href="'+x[0]+'">'+esc(x[1])+'</a>';}).join("");
    // stats
    el("statsBox").innerHTML=t.stats.map(function(s){return '<div class="stat"><div class="num">'+esc(s[0])+'</div><div class="lbl">'+esc(s[1])+'</div></div>';}).join("");
    // problems
    el("probGrid").innerHTML=t.probs.map(function(p,i){return '<div class="prob"><div class="n">0'+(i+1)+'</div><p>'+esc(p)+'</p></div>';}).join("");
    el("probClose").innerHTML=t.probClose;
    // about
    el("aboutBody").innerHTML=t.about.map(function(p){return '<p>'+esc(p)+'</p>';}).join("");
    // principles
    el("principles").innerHTML=t.principles.map(function(p){return '<div class="principle"><div class="ri">'+esc(p[0])+'</div><h3>'+esc(p[1])+'</h3><p>'+esc(p[2])+'</p></div>';}).join("");
    // services
    el("svcGrid").innerHTML=t.services.map(function(s){return '<div class="svc"><div class="ic"><i class="fa-solid '+s[0]+'"></i></div><h3>'+esc(s[1])+'</h3><div class="en-sub">'+esc(s[2])+'</div><p>'+esc(s[3])+'</p></div>';}).join("");
    // steps
    el("steps").innerHTML=t.steps.map(function(s,i){return '<div class="step"><div class="sn">'+(i+1)+'</div><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p><span class="when">'+esc(s[2])+'</span></div>';}).join("");
    // cases
    el("cases").innerHTML=t.cases.map(function(c){
      var m=c.metrics.map(function(x){
        var val = x.length===3
          ? '<span class="was">'+esc(x[1])+'</span><span class="arrow"><i class="fa-solid fa-arrow-'+(t.dir==="rtl"?"left":"right")+'"></i></span><span class="now">'+esc(x[2])+'</span>'
          : '<span class="solo">'+esc(x[1])+'</span>';
        return '<div class="metric"><div class="ml">'+esc(x[0])+'</div><div class="mv">'+val+'</div></div>';
      }).join("");
      return '<div class="case"><div class="case-head"><h3>'+esc(c.name)+'</h3><span class="meta">'+esc(c.meta)+'</span></div><div class="metrics">'+m+'</div><div class="case-did">'+esc(c.did)+'</div></div>';
    }).join("");
    // proof
    el("proofGrid").innerHTML=t.proofs.map(function(p){return '<div class="proof-card"><img src="'+p[0]+'" alt="" loading="lazy"><p>'+esc(p[1])+'</p></div>';}).join("");
    // fit
    el("fitGood").innerHTML=t.fitGood.map(function(x){return '<li><i class="fa-solid fa-circle-check"></i><span>'+esc(x)+'</span></li>';}).join("");
    el("fitBad").innerHTML=t.fitBad.map(function(x){return '<li><i class="fa-solid fa-circle-xmark"></i><span>'+esc(x)+'</span></li>';}).join("");
    // faq
    el("faqList").innerHTML=t.faqs.map(function(f){return '<div class="faq"><button type="button"><span>'+esc(f[0])+'</span><i class="fa-solid fa-plus"></i></button><div class="ans"><p>'+esc(f[1])+'</p></div></div>';}).join("");
    bindFaq();
    el("langLabel").textContent = lang==="ar" ? "EN" : "ع";
    // re-render FA icons for newly injected markup
    if(window.FontAwesome && window.FontAwesome.dom && window.FontAwesome.dom.i2svg){
      try{window.FontAwesome.dom.i2svg();}catch(e){}
    }
    try{localStorage.setItem("sh_lang",lang);}catch(e){}
  }

  function bindFaq(){
    document.querySelectorAll(".faq button").forEach(function(b){
      b.addEventListener("click",function(){
        var box=b.parentElement, ans=box.querySelector(".ans");
        var open=box.classList.toggle("open");
        ans.style.maxHeight = open ? ans.scrollHeight+"px" : "0px";
      });
    });
  }

  el("yr").textContent=new Date().getFullYear();

  var cur="ar";
  try{var saved=localStorage.getItem("sh_lang"); if(saved==="ar"||saved==="en") cur=saved;}catch(e){}
  render(cur);

  el("langBtn").addEventListener("click",function(){
    cur = cur==="ar" ? "en" : "ar";
    render(cur);
  });
})();