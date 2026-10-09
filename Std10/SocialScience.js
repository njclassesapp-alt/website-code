function loadStd10SocialScience() {

    // ૧. સામાજિક વિજ્ઞાનના ડેટાબેઝ લોડ કરવા માટેની સ્ક્રિપ્ટ્સ
    var ssScripts = [
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_SS_Right-Wrong.js",
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/std10-ss-mcq.js",
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_ss_jodaka.js",
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_ss_exercise.js?v=1",
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_socialSci_FillBlanks.js",
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_ss_1MarkQ.js",
        "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/SocialScience/IMPQ.js"
    ];

    ssScripts.forEach(function(src) {
        var s = document.createElement('script');
        s.src = src + (src.indexOf('?') === -1 ? '?t=' : '&t=') + new Date().getTime();
        s.charset = "UTF-8";
        document.body.appendChild(s);
    });

    // ૨. સમજૂતી લિંક્સ અને હેન્ડલર
    window.ssTheoryLinks = {
        1: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%201",
        2: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%202",
        3: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%203",
        4: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%204",
        5: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%205",
        6: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%206",
        7: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%207",
        8: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%208",
        9: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%209",
        10: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2010",
        11: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2011",
        12: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2012",
        13: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2013",
        14: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2014",
        15: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2015",
        16: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2016",
        17: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2017",
        18: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2018",
        19: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2019",
        20: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2020",
        21: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2021",
        22: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2022",
        23: "https://njclasses.in/search/label/Std%2010%20S%20S%20Ch%2023"
    };

    window.openSSTheory = function() {
        var targetUrl = window.ssTheoryLinks[currentChapId];
        if (targetUrl) {
            window.location.assign(targetUrl); 
        } else {
            alert("આ ચેપ્ટરની સમજૂતી લિંક હજુ ઉમેરવામાં આવી નથી. ચેપ્ટર નંબર: " + currentChapId);
        }
    };

    function structureSSData(flatArray) {
        let structured = {};
        flatArray.forEach(item => {
            let ch = item.chapter;
            if (!structured[ch]) { structured[ch] = { qa_list: [] }; }
            let questionText = item.q || item.question || "";
            let answerText = item.ans || item.answer || "";
            structured[ch].qa_list.push({ q: questionText, ans: answerText, question: questionText, answer: answerText });
        });
        return structured;
    }

    window.prepareSSData = function() {
        if (typeof socialSciExerciseDB !== 'undefined') { window.njMathsExercise = structureSSData(socialSciExerciseDB); }
        if (typeof socialsciOneLineDB !== 'undefined') { window.mathOneLineDB = socialsciOneLineDB; }
        if (typeof socialSciFillBlanksDB !== 'undefined') { window.mathFillInTheBlanksDB = socialSciFillBlanksDB; } 
        else if (typeof socialSciBlanksDB !== 'undefined') { window.mathFillInTheBlanksDB = socialSciBlanksDB; }
        if (typeof socialSciTrueFalseDB !== 'undefined') { window.mathTrueFalseDB = socialSciTrueFalseDB; }
        if (typeof socialSciMatchDB !== 'undefined') { window.mathMatchDB = socialSciMatchDB; }
        if (typeof Std10_SocialSci_MCQ !== 'undefined') { window.njQuestionsDatabase = Std10_SocialSci_MCQ; }
        if (typeof Std10_SocialScience_imp !== 'undefined') { window.Std10_SS_imp = Std10_SocialScience_imp; }
    };

    setTimeout(function() {
        if (typeof openNjCategory !== 'undefined' && !window.__ssCategoryWrapped) {
            var originalOpenNjCategory = openNjCategory;
            window.openNjCategory = function(catType, catName) {
                if (catType === 'theory') {
                    window.openSSTheory();
                    return;
                }
                window.prepareSSData();
                originalOpenNjCategory(catType, catName);
            };
            window.__ssCategoryWrapped = true;
        }

        var categoryView = document.getElementById('nj-sol-category-view');
        if(categoryView) {
            categoryView.innerHTML = `
                <div class='nj-cat-heading'>તમારે શું શીખવું છે?</div>
                <div class='nj-cat-card nj-bg-theory' onclick='openSSTheory()'>
                    <div class='nj-cat-icon'><i class='fa fa-book'></i></div>
                    <div class='nj-cat-info'><h3>સમજૂતી</h3><p>પ્રકરણની સંપૂર્ણ અને વિસ્તૃત સમજૂતી</p></div>
                    <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
                </div>
                <div class='nj-cat-card nj-bg-exercise' onclick='openNjCategory("exercise", "સ્વાધ્યાયના પ્રશ્નો")'>
                    <div class='nj-cat-icon'><i class='fa fa-pencil-square-o'></i></div>
                    <div class='nj-cat-info'><h3>સ્વાધ્યાયના પ્રશ્નો</h3><p>સ્વાધ્યાયના તમામ પ્રશ્નોના સંપૂર્ણ જવાબો</p></div>
                    <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
                </div>
                <div class='nj-cat-card nj-bg-imp' onclick='openNjCategory("imp", "IMP પ્રશ્નો (બોર્ડ માટે)")'>
                    <div class='nj-cat-icon'><i class='fa fa-star'></i></div>
                    <div class='nj-cat-info'><h3>IMP પ્રશ્નો</h3><p>બોર્ડની પરીક્ષા માટેના અગત્યના પ્રશ્નો અને ટ્રીક</p></div>
                    <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
                </div>
                <div class='nj-cat-card nj-bg-objective' onclick='openNjSubCategories()'>
                    <div class='nj-cat-icon'><i class='fa fa-list-alt'></i></div>
                    <div class='nj-cat-info'><h3>હેતુલક્ષી પ્રશ્નો / અન્ય</h3><p>MCQ, ખાલી જગ્યા, ખરા-ખોટા, અને જોડકાં</p></div>
                    <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
                </div>
            `;
        }

        var buttons = document.querySelectorAll('.nj-btn-pro');
        buttons.forEach(function(btn) {
            var href = btn.getAttribute('href');
            var onclick = btn.getAttribute('onclick');
            if (!href || href === '#' || href.trim() === '') {
                btn.style.display = 'none';
            } else if (href === 'javascript:void(0);' && !onclick) {
                btn.style.display = 'none';
            }
        });
        window.prepareSSData();
    }, 200);

    return `
    <style>
    .nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', sans-serif; }
    .nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
    .nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
    .nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); border-color: #ff9800; }
    .nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #ff9800, #f57c00); }
    .btn-ai-pro { background: linear-gradient(135deg, #10b981, #059669); }
    .nj-btn-pro .emoji-icon { font-size: 18px; margin-bottom: 5px; display: block; line-height: 1; }
    .nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
    .nj-badge-pro { background: linear-gradient(135deg, #ff9800, #f57c00); color: #fff; width: 45px; height: 45px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; flex-shrink: 0; box-shadow: 0 4px 8px rgba(255, 152, 0, 0.3); }
    .nj-title-box { margin-left: 15px; }
    .nj-title-pro { font-size: 16px; font-weight: 700; color: #222; margin: 0 0 3px 0; line-height: 1.3; }
    .nj-subtitle-pro { font-size: 12px; color: #777; font-weight: 500; margin: 0; }
    .nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
    .nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 600; text-decoration: none !important; color: #fff !important; transition: all 0.2s; border: none; cursor: pointer; }
    .nj-btn-pro i { font-size: 18px; margin-bottom: 4px; }
    .nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); }
    .btn-book-pro { background: linear-gradient(135deg, #fbc02d, #f57f17); } 
    .btn-video-pro { background: linear-gradient(135deg, #ff4b2b, #ff416c); } 
    .btn-samjuti-pro { background: linear-gradient(135deg, #8e24aa, #5e35b1); } 
    .btn-mcq-pro { background: linear-gradient(135deg, #29b6f6, #0288d1); } 
    @media (max-width: 480px) {
        .nj-card-pro { padding: 15px; }
        .nj-btn-pro { font-size: 11px; padding: 8px 2px; }
        .nj-title-pro { font-size: 15px; }
    }
    </style>

    <div class="nj-premium-board">
      <h2 style="text-align:center; margin-bottom:15px; color:#222; font-weight:800;">
        ધોરણ 10 સામાજિક વિજ્ઞાન
      </h2>
      
      <div style="text-align: center; margin-bottom: 25px;">
        <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 15px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
            <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
        </button>
      </div>
      
      <div class="nj-grid-pro">

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનો વારસો</h3><p class="nj-subtitle-pro">Heritage of India</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch1.pdf', 'ચેપ્ટર 1 - ભારતનો વારસો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(1, 'ચેપ્ટર 1 - ભારતનો વારસો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનો સાંસ્કૃતિક વારસો: પરંપરાઓ</h3><p class="nj-subtitle-pro">Cultural Heritage: Traditions</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch2.pdf', 'ચેપ્ટર 2 - હસ્ત અને લલિતકલા')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(2, 'ચેપ્ટર 2 - ભારતનો સાંસ્કૃતિક વારસો: પરંપરાઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનો સાંસ્કૃતિક વારસો: શિલ્પ અને સ્થાપત્ય</h3><p class="nj-subtitle-pro">Sculpture and Architecture</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch3.pdf', 'ચેપ્ટર 3 - શિલ્પ અને સ્થાપત્ય')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(3, 'ચેપ્ટર 3 - ભારતનો સાંસ્કૃતિક વારસો: શિલ્પ અને સ્થાપત્ય')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનો સાહિત્યિક વારસો</h3><p class="nj-subtitle-pro">Literary Heritage</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch4.pdf', 'ચેપ્ટર 4 - ભારતનો સાહિત્યિક વારસો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(4, 'ચેપ્ટર 4 - ભારતનો સાહિત્યિક વારસો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનો વિજ્ઞાન અને ટેકનોલોજીનો વારસો</h3><p class="nj-subtitle-pro">Science and Technology</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch5.pdf', 'ચેપ્ટર 5 - વિજ્ઞાન અને ટેકનોલોજીનો વારસો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'ચેપ્ટર 5 - ભારતનો વિજ્ઞાન અને ટેકનોલોજીનો વારસો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતના સાંસ્કૃતિક વારસાનાં સ્થળો</h3><p class="nj-subtitle-pro">Places of Cultural Heritage</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch6.pdf', 'ચેપ્ટર 6 - સાંસ્કૃતિક વારસાના સ્થળો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'ચેપ્ટર 6 - ભારતના સાંસ્કૃતિક વારસાનાં સ્થળો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">આપણા વારસાનું જતન</h3><p class="nj-subtitle-pro">Preservation of Heritage</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch7.pdf', 'ચેપ્ટર 7 - આપણા વારસાનું જતન')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'ચેપ્ટર 7 - આપણા વારસાનું જતન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>
                <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">કુદરતી સંસાધનો</h3><p class="nj-subtitle-pro">Natural Resources</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch8.pdf', 'ચેપ્ટર 8 - કુદરતી સંસાધનો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'ચેપ્ટર 8 - કુદરતી સંસાધનો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">વન અને વન્યજીવ સંસાધન</h3><p class="nj-subtitle-pro">Forest and Wildlife</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch9.pdf', 'ચેપ્ટર 9 - વન અને વન્યજીવ સંસાધન')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'ચેપ્ટર 9 - વન અને વન્યજીવ સંસાધન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : કૃષિ</h3><p class="nj-subtitle-pro">India : Agriculture</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch10.pdf', 'ચેપ્ટર 10 - ભારત: કૃષિ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_SS_Ch10.pdf', 'પ્રકરણ 10')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'ચેપ્ટર 10 - ભારત : કૃષિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : જળ સંસાધન</h3><p class="nj-subtitle-pro">India : Water Resources</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch11.pdf', 'ચેપ્ટર 11 - ભારત: જળ સંસાધન')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'ચેપ્ટર 11 - ભારત : જળ સંસાધન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : ખનીજ અને શક્તિનાં સંસાધનો</h3><p class="nj-subtitle-pro">Minerals and Energy</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch12.pdf', 'ચેપ્ટર 12 - ખનીજ અને શક્તિનાં સંસાધનો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'ચેપ્ટર 12 - ભારત : ખનીજ અને શક્તિનાં સંસાધનો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">ઉત્પાદન ઉદ્યોગો</h3><p class="nj-subtitle-pro">Manufacturing Industries</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch13.pdf', 'ચેપ્ટર 13 - ઉત્પાદન ઉદ્યોગો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(13, 'ચેપ્ટર 13 - ઉત્પાદન ઉદ્યોગો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">14</div><div class="nj-title-box"><h3 class="nj-title-pro">પરિવહન, સંદેશાવ્યવહાર અને વ્યાપાર</h3><p class="nj-subtitle-pro">Transportation & Communication</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch14.pdf', 'ચેપ્ટર 14 - પરિવહન અને સંદેશાવ્યવહાર')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(14, 'ચેપ્ટર 14 - પરિવહન, સંદેશાવ્યવહાર અને વ્યાપાર')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">15</div><div class="nj-title-box"><h3 class="nj-title-pro">આર્થિક વિકાસ</h3><p class="nj-subtitle-pro">Economic Development</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch15.pdf', 'ચેપ્ટર 15 - આર્થિક વિકાસ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(15, 'ચેપ્ટર 15 - આર્થિક વિકાસ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(15)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>
                <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">16</div><div class="nj-title-box"><h3 class="nj-title-pro">આર્થિક ઉદારીકરણ અને વૈશ્વિકીકરણ</h3><p class="nj-subtitle-pro">Liberalization & Globalization</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch16.pdf', 'ચેપ્ટર 16 - આર્થિક ઉદારીકરણ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(16, 'ચેપ્ટર 16 - આર્થિક ઉદારીકરણ અને વૈશ્વિકીકરણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(16)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">17</div><div class="nj-title-box"><h3 class="nj-title-pro">આર્થિક સમસ્યાઓ : ગરીબી અને બેરોજગારી</h3><p class="nj-subtitle-pro">Poverty and Unemployment</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch17.pdf', 'ચેપ્ટર 17 - ગરીબી અને બેરોજગારી')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(17, 'ચેપ્ટર 17 - આર્થિક સમસ્યાઓ : ગરીબી અને બેરોજગારી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(17)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">18</div><div class="nj-title-box"><h3 class="nj-title-pro">ભાવવધારો અને ગ્રાહક જાગૃતિ</h3><p class="nj-subtitle-pro">Price Rise & Consumer Awareness</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch18.pdf', 'ચેપ્ટર 18 - ભાવવધારો અને ગ્રાહક જાગૃતિ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(18, 'ચેપ્ટર 18 - ભાવવધારો અને ગ્રાહક જાગૃતિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(18)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">19</div><div class="nj-title-box"><h3 class="nj-title-pro">માનવ વિકાસ</h3><p class="nj-subtitle-pro">Human Development</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch19.pdf', 'ચેપ્ટર 19 - માનવ વિકાસ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(19, 'ચેપ્ટર 19 - માનવ વિકાસ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(19)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">20</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતની સામાજિક સમસ્યાઓ અને પડકારો</h3><p class="nj-subtitle-pro">Social Problems and Challenges</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch20.pdf', 'ચેપ્ટર 20 - સામાજિક સમસ્યાઓ અને પડકારો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(20, 'ચેપ્ટર 20 - ભારતની સામાજિક સમસ્યાઓ અને પડકારો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(20)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">21</div><div class="nj-title-box"><h3 class="nj-title-pro">સામાજિક પરિવર્તન</h3><p class="nj-subtitle-pro">Social Change</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch21.pdf', 'ચેપ્ટર 21 - સામાજિક પરિવર્તન')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(21, 'ચેપ્ટર 21 - સામાજિક પરિવર્તન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(21)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">22</div><div class="nj-title-box"><h3 class="nj-title-pro">પ્રકૃતિમાં પોષણ - વ્યવસ્થા</h3><p class="nj-subtitle-pro">Nutrition system in nature</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch22.pdf', 'ચેપ્ટર 22 - પ્રકૃતિમાં પોષણ વ્યવસ્થા')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(22, 'ચેપ્ટર 22 - પ્રકૃતિમાં પોષણ - વ્યવસ્થા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(22)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">23</div><div class="nj-title-box"><h3 class="nj-title-pro">માર્ગ-સલામતી અને વાહન ચાલક</h3><p class="nj-subtitle-pro">Road safety and drivers</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ss-ch23.pdf', 'ચેપ્ટર 23 - માર્ગ સલામતી અને વાહન ચાલક')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0);" onclick="openNjSolutionApp(23, 'ચેપ્ટર 23 - માર્ગ-સલામતી અને વાહન ચાલક')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(23)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

      </div> 
    </div>
    `;
}
