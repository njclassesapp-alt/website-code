function loadStd10Science() {

    // ૧. વિજ્ઞાનના ડેટાબેઝ લોડ કરવા માટેની સ્ક્રિપ્ટ્સ
    var intextScript = document.createElement('script');
    intextScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/In-text_Q.js?t=" + new Date().getTime();
    intextScript.onload = function() {
        if(typeof sciInTextDB !== 'undefined') {
            window.njMathsExamples = sciInTextDB;
        }
    };
    document.body.appendChild(intextScript);

    var exerciseScript = document.createElement('script');
    exerciseScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/Exercise.js?t=" + new Date().getTime();
    exerciseScript.onload = function() {
        if(typeof sciExerciseDB !== 'undefined') {
            window.njMathsExercise = sciExerciseDB;
        }
    };
    document.body.appendChild(exerciseScript);

    var mcqScript = document.createElement('script');
    mcqScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/MCQ.js?t=" + new Date().getTime();
    document.body.appendChild(mcqScript);

    var onemarkScript = document.createElement('script');
    onemarkScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/1MarkQ.js?t=" + new Date().getTime();
    document.body.appendChild(onemarkScript);

    var blanksScript = document.createElement('script');
    blanksScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/Blanks.js?t=" + new Date().getTime();
    document.body.appendChild(blanksScript);

    var tfScript = document.createElement('script');
    tfScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/Right-Wrong.js?t=" + new Date().getTime();
    document.body.appendChild(tfScript);

    var jodakaScript = document.createElement('script');
    jodakaScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Science/Jodaka.js?t=" + new Date().getTime();
    document.body.appendChild(jodakaScript);

    var impScript = document.createElement('script');
    impScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/Science%20/IMPQ.js?t=" + new Date().getTime();
    impScript.charset = "UTF-8";
    document.body.appendChild(impScript);

    // ૨. સમજૂતી લિંક્સ અને હેન્ડલર
    window.scienceTheoryLinks = {
        1: "https://njclasses.in/search/label/Std%2010%20Science%20ch%201",
        2: "https://njclasses.in/search/label/Std%2010%20Science%20ch%202",
        3: "https://njclasses.in/search/label/Std%2010%20Science%20ch%203",
        4: "https://njclasses.in/search/label/Std%2010%20Science%20ch%204",
        5: "https://njclasses.in/search/label/Std%2010%20Science%20ch%205",
        6: "https://njclasses.in/search/label/std%2010%20science%206",
        7: "https://njclasses.in/search/label/Std%2010%20Science%20ch%207",
        8: "https://njclasses.in/search/label/std%2010%20science%208",
        9: "https://njclasses.in/search/label/std%2010%20science%209",
        10: "https://njclasses.in/search/label/Std%2010%20Science%20ch%2010",
        11: "https://njclasses.in/search/label/std%2010%20Science%20ch%2011",
        12: "https://njclasses.in/search/label/Std%2010%20Science%20ch%2012",
        13: "https://njclasses.in/search/label/std%2010%20Science%20ch%2013"
    };

    window.openScienceTheory = function() {
        var targetUrl = window.scienceTheoryLinks[currentChapId];
        if (targetUrl) {
            window.location.assign(targetUrl); 
        } else {
            alert("આ ચેપ્ટરની સમજૂતી લિંક હજુ ઉમેરવામાં આવી નથી. ચેપ્ટર નંબર: " + currentChapId);
        }
    };

    function structureScienceData(flatArray) {
        let structured = {};
        flatArray.forEach(item => {
            let ch = item.chapter;
            if (!structured[ch]) { structured[ch] = { qa_list: [] }; }
            structured[ch].qa_list.push({ question: item.q, answer: item.ans, q: item.q, ans: item.ans });
        });
        return structured;
    }

    window.prepareScienceData = function() {
        if (typeof sciInTextDB !== 'undefined') { window.njMathsExamples = structureScienceData(sciInTextDB); }
        if (typeof sciExerciseDB !== 'undefined') { window.njMathsExercise = structureScienceData(sciExerciseDB); }
        if (typeof sciOneLineDB !== 'undefined') { window.mathOneLineDB = sciOneLineDB; }
        if (typeof sciBlanksDB !== 'undefined') { window.mathFillInTheBlanksDB = sciBlanksDB; }
        if (typeof sciTrueFalseDB !== 'undefined') { window.mathTrueFalseDB = sciTrueFalseDB; }
        if (typeof sciMatchDB !== 'undefined') { window.mathMatchDB = sciMatchDB; }
        if (typeof njQuestionsDatabase !== 'undefined') { window.njQuestionsDatabase = njQuestionsDatabase; }
        if (typeof Std10_Science_imp !== 'undefined') { window.Std10_Science_imp = Std10_Science_imp; }
    };

    setTimeout(function() {
        if (typeof openNjCategory !== 'undefined' && !window.__sciCategoryWrapped) {
            var originalOpenNjCategory = openNjCategory;
            window.openNjCategory = function(catType, catName) {
                if (catType === 'theory') {
                    window.openScienceTheory();
                    return;
                }
                window.prepareScienceData();
                originalOpenNjCategory(catType, catName);
            };
            window.__sciCategoryWrapped = true;
        }

        var categoryView = document.getElementById('nj-sol-category-view');
        if(categoryView) {
            categoryView.innerHTML = `
                <div class='nj-cat-heading'>તમારે શું શીખવું છે?</div>
                <div class='nj-cat-card nj-bg-theory' onclick='openScienceTheory()'>
                    <div class='nj-cat-icon'><i class='fa fa-book'></i></div>
                    <div class='nj-cat-info'><h3>સમજૂતી</h3><p>પ્રકરણની સંપૂર્ણ અને વિસ્તૃત સમજૂતી</p></div>
                    <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
                </div>
                <div class='nj-cat-card nj-bg-example' onclick='openNjCategory("examples", "ઇન-ટેક્સ્ટ પ્રશ્નો")'>
                    <div class='nj-cat-icon'><i class='fa fa-lightbulb-o'></i></div>
                    <div class='nj-cat-info'><h3>ઇન-ટેક્સ્ટ પ્રશ્નો</h3><p>પાઠ્યપુસ્તકના અંદરના તમામ બ્લુ પ્રશ્નોના ઉત્તરો</p></div>
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
        window.prepareScienceData();
    }, 200);

    return `
    <style>
    .nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', sans-serif; }
    .nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
    .nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
    .nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); border-color: #2196f3; }
    .nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #2196f3, #1976d2); }
    .nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
    .nj-badge-pro { background: linear-gradient(135deg, #2196f3, #1976d2); color: #fff; width: 45px; height: 45px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; flex-shrink: 0; box-shadow: 0 4px 8px rgba(33, 150, 243, 0.3); }
    .nj-title-box { margin-left: 15px; }
    .nj-title-pro { font-size: 16px; font-weight: 700; color: #222; margin: 0 0 3px 0; line-height: 1.3; }
    .nj-subtitle-pro { font-size: 12px; color: #777; font-weight: 500; margin: 0; text-transform: capitalize; }
    .nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
    .nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 600; text-decoration: none !important; color: #fff !important; transition: all 0.2s; border: none; cursor: pointer;}
    .nj-btn-pro i { font-size: 18px; margin-bottom: 4px; }
    .nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); }
    .btn-ai-pro { background: linear-gradient(135deg, #10b981, #059669); }
    .nj-btn-pro .emoji-icon { font-size: 18px; margin-bottom: 5px; display: block; line-height: 1; }
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
        ધોરણ 10 વિજ્ઞાન (NCERT)
      </h2>
      
      <div style="text-align: center; margin-bottom: 25px;">
        <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #2196f3, #0288d1); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 15px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(33, 150, 243, 0.4); transition: transform 0.2s;">
            <i class="fa fa-flask" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
        </button>
      </div>
      
      <div class="nj-grid-pro">

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો</h3><p class="nj-subtitle-pro">Chemical Reactions and Equations</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ch1-રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો.pdf', 'ચેપ્ટર 1 - રાસાયણિક પ્રક્રિયાઓ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch1.pdf', 'પ્રકરણ 1')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(1, 'પ્રકરણ 1 -રાસાયણિક પ્રક્રિયાઓ અને સમીકરણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">એસિડ, બેઈઝ અને ક્ષાર</h3><p class="nj-subtitle-pro">Acids, Bases and Salts</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ch-2-એસિડ, બેઈઝ અને ક્ષાર.pdf', 'ચેપ્ટર 2 - એસિડ, બેઈઝ અને ક્ષાર')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch2.pdf', 'પ્રકરણ 2')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a> 
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(2, 'પ્રકરણ 2 -એસિડ, બેઈઝ અને ક્ષાર')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">ધાતુ અને અધાતુ</h3><p class="nj-subtitle-pro">Metals and Non-metals</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ch-3-ધાતુઓ અને અધાતુઓ.pdf', 'ચેપ્ટર 3 - ધાતુ અને અધાતુ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch3.pdf', 'પ્રકરણ 3')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(3, 'પ્રકરણ 3 - ધાતુ અને અધાતુ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">કાર્બન અને તેના સંયોજનો</h3><p class="nj-subtitle-pro">Carbon and its Compounds</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-ch-4-કાર્બન અને તેનાં સંયોજનો.pdf', 'ચેપ્ટર 4 - કાર્બન અને તેના સંયોજનો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(4, 'પ્રકરણ 4 - કાર્બન અને તેના સંયોજનો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>
                <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">જૈવિક ક્રિયાઓ</h3><p class="nj-subtitle-pro">Life Processes</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch5.pdf', 'ચેપ્ટર 5 - જૈવિક પ્રક્રિયાઓ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch5.pdf', 'વિજ્ઞાન - પ્રકરણ 5')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(5, 'પ્રકરણ 5 - જૈવિક ક્રિયાઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">નિયંત્રણ અને સંકલન</h3><p class="nj-subtitle-pro">Control and Coordination</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch6.pdf', 'ચેપ્ટર 6 - નિયંત્રણ અને સંકલન')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch6.pdf', 'વિજ્ઞાન - પ્રકરણ 6')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(6, 'પ્રકરણ 6 - નિયંત્રણ અને સંકલન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">સજીવો કેવી રીતે પ્રજનન કરે છે?</h3><p class="nj-subtitle-pro">How do Organisms Reproduce?</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch7.pdf', 'ચેપ્ટર 7 - સજીવો પ્રજનન કેવી રીતે કરે છે?')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(7, 'પ્રકરણ 7 - સજીવો કેવી રીતે પ્રજનન કરે છે?')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">આનુવંશિકતા</h3><p class="nj-subtitle-pro">Heredity</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch8.pdf', 'ચેપ્ટર 8 - આનુવંશિકતા')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch8.pdf', 'વિજ્ઞાન - પ્રકરણ 8')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(8, 'પ્રકરણ 8 - આનુવંશિકતા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">પ્રકાશ – પરાવર્તન અને વક્રીભવન</h3><p class="nj-subtitle-pro">Light – Reflection and Refraction</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch9.pdf', 'ચેપ્ટર 9 - પ્રકાશ: પરાવર્તન અને વક્રીભવન')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(9, 'પ્રકરણ 9 - પ્રકાશ – પરાવર્તન અને વક્રીભવન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>
                <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">માનવ આંખ અને રંગબેરંગી દુનિયા</h3><p class="nj-subtitle-pro">The Human Eye and the Colourful World</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch10.pdf', 'ચેપ્ટર 10 - માનવ આંખ અને રંગબેરંગી દુનિયા')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(10, 'પ્રકરણ 10 - માનવ આંખ અને રંગબેરંગી દુનિયા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">વિદ્યુત</h3><p class="nj-subtitle-pro">Electricity</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch11.pdf', 'ચેપ્ટર 11 - વિદ્યુત')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(11, 'પ્રકરણ 11 - વિદ્યુત')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">વિદ્યુત પ્રવાહની ચુંબકીય અસરો</h3><p class="nj-subtitle-pro">Magnetic Effects of Electric Current</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch12.pdf', 'ચેપ્ટર 12 - વિદ્યુતપ્રવાહની ચુંબકીય અસરો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(12, 'પ્રકરણ 12 - વિદ્યુત પ્રવાહની ચુંબકીય અસરો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro"><div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">આપણું પર્યાવરણ</h3><p class="nj-subtitle-pro">Our Environment</p></div></div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-sci-ch13.pdf', 'ચેપ્ટર 13 - આપણું પર્યાવરણ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Sci_Ch13.pdf', 'વિજ્ઞાન - પ્રકરણ 13')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="javascript:void(0)" onclick="openNjSolutionApp(13, 'પ્રકરણ 13 - આપણું પર્યાવરણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

      </div>
    </div>
    `;
}
