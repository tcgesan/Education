let timer;
let timeLeft = 20;


let questions = [

{
    question: "বাংলাদেশের সকল পৌরসভার সদস্য সংখ্যা--",
    options: ["সমান","এলাকা ও জনসংখ্যার ভিত্তিতে নির্ধারিত","সরকার কর্তৃক নির্ধারিত","মেয়র কর্তৃক নির্ধারিত"],
    answer: 1 
},

{
    question: "Time difference of Bangladesh with Greenwich Meantime is--",
    options: ["5 hours","6 hours","7 hours","8 hours"],
    answer: 1 
},

{
    question: "ঢাকায় সর্বপ্রথম কবে রাজধানী স্থাপিত হয়? ",
    options: ["১২১০ খ্রিষ্টাব্দে","১৩১০ খ্রিষ্টাব্দে","১৫২০ খ্রিষ্টাব্দে","১৬১০ খ্রিষ্টাব্দে"],
    answer: 3 
},

{
    question: "বাংলাদেশে সিটি কর্পোরেশনের সংখ্যা কয়টি?",
    options: ["12","15","4","9"],
    answer: 0 
},

{
    question: "বাংলাদেশের প্রথম 'সাইবার সিটি'-",
    options: ["চট্টগ্রাম","ঢাকা","কুমিল্লা","সিলেট"],
    answer: 3 
},



{
    question: "নিচের কোনটি ছিদ্রায়িত রাষ্ট্র ?",
    options: ["কানাডা","ঘানা","দক্ষিণ আফ্রিকা","পেরু"],
    answer: 2 
},

{
    question: "নিচের কোন সেতুটি প্রথম ঢালাই লোহা দিয়ে তৈরি ?",
    options: ["হার্বার ব্রিজ","আকাশি কাইকিও","আয়রন ব্রিজ","দ্য ফোর্থ ব্রিজ"],
    answer: 2 
},

{
    question: "অপারেশন সার্চলাইট চালু হয় কখন ?",
    options: ["২৯ জানুয়ারি","২১ ফেব্রুয়ারি","২৫ মার্চ","২৫ এপ্রিল"],
    answer: 2 
},

{
    question: "ইউরোপীয় ইউনিয়নের সদর দপ্তর কোথায় ?",
    options: ["লন্ডন","রোমে","কোপেনহেগেন","ব্রাসেলস"],
    answer: 3 
},

     {
    question: "'ব্রেটন উডস ইনস্টিটিউট' নিচের কোন সংস্থাকে বোঝায়?",
    options: ["আইএমএফ","বিশ্বব্যাংক","এডিবি","আইডিবি"],
    answer: 0 
},

{
    question: "আন্তর্জাতিক মুদ্রা তহবিল কোন সালে গঠিত হয়?",
    options: ["১৯৪৪ সালে","১৯৪৫ সালে","১৯৪৮ সালে","১৯৪৯ সালে"],
    answer: 0 
},

{
    question: "পৃথিবীর সর্বত্র দিবারাত্রি সমান হয়--",
    options: ["২৩ জুন ও ২২ ডিসেম্বর","২১ মার্চ ও ২৩ সেপ্টেম্বর","২৩ মার্চ ও ২৪ সেপ্টেম্বর","২২ এপ্রিল ও ২৩ অক্টোবর"],
    answer: 1 
},
{
    question: "ইরানে ইসলামি বিপ্লব সংঘটিত হয় কত সালে ?",
    options: ["১৯৬৯ সালে","১৯৭৫ সালে","১৯৭৯ সালে","১৯৮৩ সালে"],
    answer: 2 
},

{
    question: "সৌরজগতের কোন গ্রহের সবচেয়ে বেশি উপগ্রহ আছে ?",
    options: ["শনি","বৃহস্পতি","শুক্র","মঙ্গল"],
    answer: 0 
},

{
    question: "উরুগুয়ে রাউন্ডের সংলাপ কত বছর ধরে চলেছিল?",
    options: ["২ বছর","৮ বছর","৬ বছর","৫ বছর"],
    answer: 1 
},

          
    // 1
    {
          question: 'PIB কোন দেশের সংবাদ সংস্থা?',
          options: ['পাকিস্তান', 'আমেরিকা', 'পর্তুগাল', 'বাংলাদেশ'],
          answer: 3 // Index of the correct answer
      },
  
  
  
      // 2
      {
          question: 'জাতিসংঘের বর্তমান মহাসচিব কে?',
          options: ['আন্তোনিও গুতেরেস', 'ব্যারাক ওবামা', 'বিল গেটস', 'জ্যাক মা'],
          answer: 0
      },
  
  
      // 3
      {
          question: '  রামাল্লা কোথায় অবস্থিত  ?',
          options: ['ইরাক', 'আফগানিস্তান', 'ফিলিস্তিন', 'মিসর'],
          answer: 2
      },
  
      // 4
      {
          question: 'আর্য এটি কীসের নাম ?',
          options: ['ভাষার নাম', 'স্থানের নাম', 'জাতিগোষ্ঠীর নাম', 'গ্রহের নাম'],
          answer: 2
      },
  
  
      // 5
      {
          question: 'আর্যদের ধর্মগ্রন্থের নাম কি ?',
          options: ['ত্রিপিটক', 'উপনিষদ', 'বেদ', 'ভগবৎ গীতা'],
          answer: 2
      },
  
      // 6
      {
          question: 'বাংলাদেশের প্রাচীন জাতি কোনটি?',
          options: ['আর্য', 'মোঙ্গল ', ' পুণ্ড্র', ' দ্রাবিড়'],
          answer: 3
      },
  
  
      // 7
      {
          question: 'আর্য জাতি কোন দেশ থেকে এসেছিল?',
          options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
          answer: 2
      },
  
      
      // 8
      {
          question: ' মাতাবাড়ির বিদ্যুৎকেন্দ্রের  কাঁচামাল কোনটি ?',
          options: ['পানি', 'গ্যাস ', ' ইউরেনিয়াম', ' কয়লা'],
          answer: 3
      },
      
      
      // 9
      {
          question: 'পিরানহা কী?',
          options: ['সাপ', 'মাছ ', ' ব্যাঙ', ' কচ্ছপ'],
          answer: 1
      },
  
      
      // 10
      {
          question: ' বাংলাদেশে নাটক ও নাট্যতত্ত্ব বিষয়ের প্রবর্তক কে?',
          options: ['মৃদুল কান্তি চক্রবর্তী', 'সেলিম আল দীন ', ' জামিল আহমেদ', ' আহমদ ছফা'],
          answer: 1
      },
  
  
      
      // 11
      {
          question: ' ম্যাডোনা-৪৩ কি?',
          options: ['প্রখ্যাত মডেল', 'বিখ্যাত ভাস্কর্য ', ' অস্কার জয়ী ফিল্ম', ' একটি  চিত্রকর্ম'],
          answer: 3
      },
  
  
      
      // 12
      {
          question: 'আমি বাংলায় গান গাই এর প্রথম গায়ক কে?',
          options: ['সুবীর নন্দী', 'প্রতুল বন্দ্যোপাধ্যায়', ' মাহমুদুজ্জামান বাবু', ' আব্দুল জব্বার'],
          answer: 1
      },
  
      // 13
      
      {
          question: ' ভাওয়াইয়া কোন অঞ্চলের লোকসংগীত ?',
          options: ['রাজশাহী', ' রংপুর ', ' কুষ্টিয়া', ' ময়মনসিংহে'],
          answer: 1
      },
  
      
      // 14
      {
          question: ' সব কটি জানালা খুলে দাও না , গানটির সুরকার কে ?',
          options: ['সত্য সাহা ', 'আজাদ রহমান', ' ইমতিয়াজ আহমেদ বুলবুল', ' আলতাফ মাহমুদ'],
          answer: 2
      },
  
  
      
      // 15
      {
          question: ' পেরেস্ত্রইকার উদ্ভাবক কে?',
          options: ['ক্লিনটন  ', 'গর্বাচেভ  ', ' ওয়ালেসা', ' ইয়েলৎসিন'],
          answer: 1
      },
  
  
      
      // 16
      {
          question: 'কোন বিখ্যাত নেতার মরদেহ এখনো সংরক্ষণ করা আছে ?',
          options: ['   Karl Markru', ' Udro Wilson ', '  Ho Ca Min ', '  Vlademir Elich Lenin '],
          answer: 3
      },
  
      
      // 17
      {
          question: '    কোন  বছরে রাশিয়ার বলশেভিক বিপ্লব সংঘটিত হয়েছিল?',
          options: ['  ১৯১৬ ', '    ১৯১৭   ', '   ১৯৪৯    ', '  ১৯৬২    '],
          answer: 1
      },
  
  
      
      // 18
      {
          question: '          পৃথিবীর প্রথম সমাজতান্ত্রিক দেশের নাম কী  ?',
          options: ['        ভিয়েতনাম  ', '   সোভিয়েত রাশিয়া    ', 'ফ্রান্স   ', '   চীন   '],
          answer:1
      },
  
  
  
  
  
      // 19
      {
          question: ' সিআইএস এর  সদরদপ্তর কোথায়  ?',
          options: ['     মস্কোতে  ', ' বাকুতে    ', '   মিনস্কে    ', '    দুশানবে  '],
          answer:2
      },
  
  
      // 20
      {
          question: ' Virtue is Knowledge - কার বিখ্যাত উক্তি ?',
          options: ['   প্লেটো  ', '  সক্রেটিস   ', '    এরিস্টটল   ', ' রুশো '],
          answer:1
      },
  
  
      // 21
      {
          question: '     হোমার কোন ভাষার কবি ?',
          options: ['    ইংরেজি' ,  '  ল্যাটিন ',' গ্রিক ',' স্প্যানিশ  '],
          answer:2
      },
  
  
      // 22
      {
          question: '  বীর আলেকজান্ডারের শিক্ষক কে ছিলেন ?',
          options: ['       সফোক্লিস     ', '  সক্রেটিস     ', ' এরিস্টটল        ', '     প্লেটো '],
          answer:2
      },
      
  // 23
      {
          question: '   হেরোডোটাস-এর জন্মভূমি কোথায়      ?',
          options: ['      ইতালি     ', '   গ্রিস    ', '   স্পেন    ', '    মিশর  '],
          answer:1
      },
  
  
  
      // 24
      {
          question: '      গণতন্ত্রের ধারণা উৎসারিত হয় প্রথম কোন দেশে ?',
          options: ['     যুক্তরাষ্ট্র      ', '    প্রাচীন গ্রিস   ', '     প্রাচীন রোম   ', ' প্রাচীন ভারত   '],
          answer:1
      },
  
  
  // 25
      {
          question: '    নিজেকে জানো-উক্তিটি কার ?',
          options: ['    সক্রেটিস     ', '   প্লেটো   ', '    পিথাগোরাস  ', ' গৌতম বুদ্ধ   '],
          answer:0
      },
  
  
      // 26
      {
          question: '  বর্তমান বিশ্বে নিউ সিল্ক রোড এর প্রবক্তা - ',
          options: ['    জাপান    ', '   ভারত  ', '    আফগানিস্তান   ', '    চীন  '],
          answer:3
      },
  
          
      // 27
      {
          question: '  দ্য ওয়ার্ল্ড ডেভেলপমেন্ট রিপোর্ট প্রকাশ করে কে ?',
          options: ['    ব্যাংক  অব আমেরিকা  ', '  বিশ্বব্যাংক   ', '   ইউএনডিপি    ', '  আইএমএফ   '],
          answer:1
      },
  
  
  
  // 28
      {
          question: ' এ পর্যন্ত বাংলাদেশ এর সংবিধান কতবার সংশোধিত হয়েছে ?',
          options: ['১৪', '১৫', '২০', '১৭'],
          answer: 3
      },
  
      // 29
      {
          question: ' বর্তমান বৃৃহত্তর ঢাকা জেলা প্রাচীনকালে কোন জনপদের অন্তর্ভুক্ত ছিলো?',
          options: ['সমতট', ' পুন্ড্র ', ' বঙ্গ ', 'হরিকেল'],
          answer: 2
      },
  
  
  
  // 30

      {
          question: '  কবে ফরাসি বিপ্লব সংঘটিত হয় ?',
          options: ['    ১৭৮৯  ', '   ১৭৯১   ', '   ১৭৯৫ ', '   ১৮০০   '],
          answer:0
      },
  
      
      // 31
      {
          question: ' বাংলাদেশকে স্বীকৃতি প্রদানকারী প্রথম আরব দেশ কোনটি ?',
          options: ['  সৌদি আরব ', '  ইরাক   ', ' কুয়েত   ', '  মিসর    '],
          answer:1
      },
  
  
      // 32
      {
          question: '  TI এর সদর দপ্তর কোথায়  ?',
          options: ['   ম্যানিলা  ', '   বার্লিন ', '  ব্যাংকক  ', '  সিঙ্গাপুর    '],
          answer:1
      },
  
  
      // 33
      {
          question: '  আকাবা একটি --- ',
          options: ['   সমুদ্র বন্দর  ', '   বিমান বন্দর     ', '   স্থল বন্দর ', '  নদী বন্দর  '],
          answer:0
      },
  
  
      // 34
      {
          question: '  ঢাকার লালবাগের দুর্গ নির্মাণ করেন ---- ',
          options: ['    শায়েস্তা খান   ', '  শাহ সুজা     ', ' মীর জুমলা    ', '    সুবেদার ইসলাম খান'],
          answer:0
      },
  
  
      // 35
      {
          question: '   ইউরোপীয় ইউনিয়নের কোন দেশ এখনো ইউরো গ্রহণ করেনি?',
          options: ['    জার্মানি  ', '  অস্ট্রিয়া   ', '  ইংল্যান্ড     ', '  ফ্রান্স '],
          answer:2
      },
  
  
      // 36
      {
          question: '  জার্মানীর প্রথম নারী চ্যান্সেলর কে ?',
          options: [' অ্যানেগরেট ক্রাম্প ', '      লিনা হেডরিচ   ', '   অ্যাঞ্জেলা মারকেল ', '  পেট্রা কেলি   '],
          answer:2
      },
  
      // 37
      {
          question: '  উপমহাদেশের প্রাচীনতম সভ্যতা কোনটি ?',
          options: ['   সিন্ধু সভ্যতা   ', '   বৌদ্ধ সভ্যতা     ', ' মাহেনজোদারো সভ্যতা   ', '  আর্য সভ্যতা   '],
          answer:0
      },
  
  
  
      // 38
      {
          question: ' ঢাকার চকবাজার শাহী মসজিদ নির্মাণ করেন কে  ?',
          options: ['   শায়েস্তা খান    ', '    আওরঙ্গজেব   ', ' শাহ সুজা   ', '  মীর জুমলা '],
          answer:0
      },
  
      
      // 39
      {
          question: '  ----- সেপ্টেম্বর বিশ্ব নিরক্ষরতা দিবস। শূন্যস্থান পূরণ করুন।',
          options: ['   ৮ ', '   ১০    ', '  ৬  ', '  ৯    '],
          answer:0
      },
  
      
      // 40
      {
          question: ' বাংলাদেশের বিখ্যাত মণিপুরী নাচ কোন অঞ্চলের?',
          options: ['    সিলেট    ', '    রংপুর    ', ' রাজশাহী   ', '  যশোর     '],
          answer:0
      },
  
      
      // 41
      {
          question: ' বাংলদেশে  শহীদ বুদ্ধিজীবি দিবস কবে ? ',
          options: ['   ১৪ ডিসেম্বর ', '    ১৫ জানুয়ারি   ', '   ১৭ এপ্রিল' ,' ২০ জুলাই'],
          answer:0
      },
  
      // 42
      {
          question: '  বাংলাদেশ এর বৃহত্তম বিল কোনটি ?',
          options: ['   চলন বিল    ', '   আড়িয়াল বিল    ', ' তামাবিল   ', '   চাতলার বিল   '],
          answer:0
      },
  
      // 43
      {
          question: '  বিশ্ব মানবাধিকার দিবস কবে ?',
          options: ['     ৮ ডিসেম্বর   ', '   ১০ ডিসেম্বর    ', '  ১১ ডিসেম্বর  ', '    ১৩ ডিসেম্বর  '],
          answer:1
      },
  
      
      // 44
      {
          question: 'হিজরি সন গণনা শুরু হয় কোন সালে ?',
          options: ['    ৬০২ সালে   ', '    ৬১৪ সালে   ', '  ৬২২ সালে  ', '  ৬২৪ সালে    '],
          answer:2
      },
  
  
  
      // 45
      {
          question: '  হামাস কোন দেশের সংগঠন ?',
          options: ['   লেবানন   ', '  ফিলিস্তিন   ', '  মিশর  ', '  ইরাক    '],
          answer:1
      },
  
      // 46
      {
          question: '  বিশ্বসাহিত্য  কেন্দ্রের স্লোগান কী ?',
          options: ['   আলোকিত মানুষ গড়ো  ', '  আলোকিত মানুষ চাই     ', '  সবার জন্য শিক্ষা  ', '   ঘরে ঘরে শিক্ষার আলো   '],
          answer:1
      },
  
      // 47
      {
          question: '  একুশে পদক কোন সালে চালু হয় ?',
          options: ['   ১৯৭৬ সালে     ', '  ১৯৭২ সালে     ', '  ১৯৭৫ সালে   ', '   ১৯৮১ সালে   '],
          answer:0
      },
  
      // 48
      {
          question: '  ইউনেস্কোর প্রধান কার্যালয় কোথায় অবস্থিত ?',
          options: ['   নিউইয়র্ক    ', '     প্যারিস      ', 'রোম     ', '    জেনেভা  '],
          answer:1
      },
  




      
      // 49
      {
          question: '  কোন ক্ষুদ্র নৃ-গোষ্ঠীর ধর্ম ইসলাম ?',
          options: ['    রাখাইন   ', '    মারমা    ', ' পাঙ্গন    ', '    খিয়াং'],
          answer :2
      },
  
      // 50
      {
          question: '  আন্তর্জাতিক রেড ক্রস-এর সদর দপ্তর কোথায় ?',
          options: ['    ভিয়েনা    ', '     জেনেভা      ', '   প্যারিস  ', '   লন্ডন   '],
          answer :1
      },
      
  
      // /51
      {
          question: '   বাঙালি জাতির প্রধান অংশ কোন মূল জাতিগোষ্ঠীর অন্তর্ভুক্ত ?',
          options: ['     দ্রাবিড়  ', '    নেগ্রিটো   ', '  ভোটচীন  ', '   অস্ট্রিক   '],
          answer :3
      },
      
  
      // 52
      {
          question: '  দারফুর  হলো -- ',
          options: ['    ইরাকের একটি শহরের নাম   ', '   ইরানের একটি শহরের নাম   ', '  সুদানের একটি অঞ্চলের নাম  ', '    আফগানিস্তানের একটি অঞ্চলের নাম  '],
          answer :2
      },
      
      // 53
      {
          question: '  লেবানন কোন দেশের কাছ থেকে স্বাধীনতা লাভ করে ?',
          options: ['   ব্রিটেন    ', '   ফ্রান্স     ', ' তুরস্ক   ', '  স্পেন    '],
          answer :1
      },
  
  
      // 54
      {
          question: '  মিয়ানমারে রোহিঙ্গারা তাদের নাগরিকত্ব হারায় --',
          options: ['     ১৯৬২ সনে  ', '     ১৯৮৬ সনে    ', '   ১৯৭৮ সনে ', '    ১৯৮২ সনে  '],
          answer :3
      },
  
  
      // 55
      {
          question: '  মালয়েশিয়া কোন দেশের উপনিবেশ ছিল ?',
          options: ['  ব্রিটেন      ', '   পর্তুগাল    ', ' ফ্রান্স   ', '  যুক্তরাষ্ট্র     '],
          answer :0
      },
  
      // 56
      {
          question: '   প্রাচীন বাংলার হরিকেল জনপদ অন্তর্ভুক্ত এলাকা --',
          options: ['   রাজশাহী ', '     দিনাজপুর   ', '  খুলনা  ', '  চট্টগ্রাম    '],
          answer :3
      },
  
  // 57
      {
          question: '  ন্যায়পাল প্রতিষ্ঠানটির উদ্ভব কোথায় ?',
          options: ['    ফিনল্যান্ড     ', '   নেদারল্যান্ড     ', '   আইসল্যান্ড   ', '   সুইডেন    '],
          answer :3
      },
  
  
  // 58
      {
          question: '  বাংলাদেশ সবচেয়ে বেশি সাহায্য পায় কোন দেশ থেকে ?',
          options: ['  জাপান      ', '   ভারত      ', '  সৌদি আরব  ', '   সুইজারল্যান্ড   '],
          answer :0
      },
  
  
  // 59
      {
          question: '  দেশের প্রথম ভাসমান হাসপাতাল কোনটি ?',
          options: ['  জীবনতরী    ', ' সবুজ ছাতা       ', '   ময়না    ', '   সন্ধানী      '],
          answer :0
      },
  
  // 60
      {
          question: '   Which constitutional amendment Dacca as Dhaka?',
          options: [' The Fourth Amendment, 1975    ', '  The Sixth Amendment, 1981  ', ' The Eighth Amendment, 1988   ', '  The Tenth Amendment, 1990    '],
          answer :2
      },
  
  // 61
      {
          question: '  মুঘল আমলে ঢাকার নাম কি ছিল ?',
          options: ['  ইসলামাবাদ     ', '  জাহাঙ্গীরনগর     ', '  বিক্রমপুর  ', '   সোনারগাঁও   '],
          answer:1
      },
  
  // 62
      {
          question: '   জাতিসংঘের সাধারণ পরিষদের অধিবেশনে প্রতিটি সদস্যরাষ্ট্র সর্বোচ্চ কত জন প্রতিনিধি পাঠাতে পারে ?',
          options: ['   তিনজন   ', '       চারজন', '    পাঁচজন   ', '   ছয়জন  '],
          answer:2
      },
  
  

    //   63
      {
          question: '   কারা বর্গী নামে পরিচিত ?',
          options: ['    ইংরেজ  ', '  মারাঠি   ', '  আকবর  ', '  তামিল '],
          answer:1
      },


  
      {
          question: ' ভারতের শেষ মোঘল সম্রাট কে ছিলেন ?',
          options: ['  শাহজাহান  ', '   আকবর ', '  বাহাদুর শাহ্   ', ' হুমায়ূন '],
          answer:2
      },


      {
          question: '  বাংলাকে জান্নাতাবাদ নামকরণ করেন কে?',
          options: ['     বাবর  ', '    আকবর   ', '  হুমায়ুন   ', '    জাহাঙ্গীর  '],
          answer:2
      },

  
      {
          question: '   বাংলার প্রথম নবাব কে ছিলেন  ?',
          options: ['    আলীবর্দী খান   ', '    সুজাউদ্দীন মুহাম্মদ খান   ', '   মুর্শিদকুলী খান ', '   সিরাজ-উদ-দৌলা   '],
          answer:2
      },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

      // {
      //     question: '   ?',
      //     options: ['       ', '       ', '    ', '      '],
      //     answer:
      // },
  

]





let currentQuestionIndex;

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            document.getElementById("next").style.display = "block";
        }
    }, 1000);
}

function displayQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[currentQuestionIndex];
    
    document.getElementById("question").innerText = currentQuestion.question;
    
    const answerDivs = document.querySelectorAll('.answer');
    answerDivs.forEach((div, index) => {
        div.innerText = currentQuestion.options[index];
        div.className = "answer"; // Reset class
        div.style.pointerEvents = 'auto'; // Enable clicks
    });

    timeLeft = 20;
    document.getElementById("timer").innerText = timeLeft;
    startTimer();
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    const answerDivs = document.querySelectorAll('.answer');

    if (selectedIndex === currentQuestion.answer) {
        document.getElementById("correctSound").play();
        answerDivs[selectedIndex].classList.add("correct");
        answerDivs.forEach(div => div.style.pointerEvents = 'none'); // Disable clicks after correct answer
    } else {
        document.getElementById("incorrectSound").play();
        answerDivs[selectedIndex].classList.add("incorrect");
        // Do not disable clicks, allowing the user to try again
    }

    // Show the next button after selecting an answer
    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    displayQuestion();
    document.getElementById("next").style.display = "none";
    const answerDivs = document.querySelectorAll('.answer');
    answerDivs.forEach(div => {
        div.classList.remove("correct", "incorrect");
    });
}


window.onload = displayQuestion;



// Back Button
function goBack() {
    window.history.back();
}


