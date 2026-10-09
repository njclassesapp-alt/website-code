function loadStd10Gujarati() {

    // ============================================================
    // NJ CLASSES - STD 10 GUJARATI LIVE DATA LOADER
    // ============================================================
    function loadNjDataScript(src) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = function () { resolve(); };
            script.onerror = function () {
                console.error("NJ Classes: Data file load failed:", src);
                reject(new Error("Failed to load: " + src));
            };
            document.head.appendChild(script);
        });
    }

    var njCacheBust = "?t=" + new Date().getTime();

    var njMcqPromise = loadNjDataScript("https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std10-guj-mcq.js" + njCacheBust);
    var njExercisePromise = loadNjDataScript("https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/Gujarati/Exercise.js" + njCacheBust);
    var njOneMarkPromise = loadNjDataScript("https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/Gujarati/1MarkQ.js" + njCacheBust);
    var njImpPromise = loadNjDataScript("https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/Gujarati/IMPQ.js" + njCacheBust);
    var njBlanksPromise = loadNjDataScript("https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/Gujarati/Blanks.js" + njCacheBust);
    var njTrueFalsePromise = loadNjDataScript("https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10/Gujarati/Rightwrong.js" + njCacheBust);

    function formatNjData(db) {
        if (!db) return [];
        if (Array.isArray(db)) {
            return db.map(function (item) {
                return {
                    ...item,
                    chapter: item.chapter || item.ch,
                    q: item.q || item.question || "",
                    ans: item.ans || item.answer || "",
                    question: item.q || item.question || "",
                    answer: item.ans || item.answer || ""
                };
            });
        }
        return db;
    }

    function connectNjGujaratiData() {
        if (typeof gujExerciseDB_Std10 !== 'undefined') window.njMathsExercise = formatNjData(gujExerciseDB_Std10);
        if (typeof Std10_Gujarati_imp !== 'undefined') window.Std10_Maths_imp = formatNjData(Std10_Gujarati_imp);
        if (typeof gujaratiOneLineDB_Std10 !== 'undefined') window.mathOneLineDB = formatNjData(gujaratiOneLineDB_Std10);
        if (typeof gujaratiFillInTheBlanksDB !== 'undefined') window.mathFillInTheBlanksDB = formatNjData(gujaratiFillInTheBlanksDB);
        if (typeof gujaratiTrueFalseDB_Std10 !== 'undefined') window.mathTrueFalseDB = formatNjData(gujaratiTrueFalseDB_Std10);
        if (typeof njQuestionsDatabase !== 'undefined') window.njQuestionsDatabase = formatNjData(njQuestionsDatabase);
    }

    Promise.all([njMcqPromise, njExercisePromise, njOneMarkPromise, njImpPromise, njBlanksPromise, njTrueFalsePromise])
        .then(function () {
            connectNjGujaratiData();
            window.__njGujaratiDataConnected = true;
        })
        .catch(function (error) {
            console.error("NJ Classes: Gujarati data loading error:", error);
        });

    setTimeout(function() {
        var allCards = document.querySelectorAll('.nj-card-pro');
        allCards.forEach(function(card) {
            var buttons = card.querySelectorAll('.nj-btn-pro');
            var activeLinksCount = 0;
            buttons.forEach(function(btn) {
                var href = btn.getAttribute('href');
                var onclick = btn.getAttribute('onclick');
                if ((href === '#' || href === '') && !onclick) {
                    btn.style.display = 'none';
                } else {
                    activeLinksCount++;
                }
            });
            if (activeLinksCount === 0) {
                card.style.display = 'none';
            }
        });
    }, 200);

    return `
    <style>
    .nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', 'Hind Vadodara', sans-serif; }
    .nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
    .nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e0e0e0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
    .nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); border-color: #f59e0b; }
    .nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(135deg, #f59e0b, #d97706); }
    .nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
    .nj-badge-pro { background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3); }
    .nj-title-box { margin-left: 15px; }
    .nj-title-pro { font-size: 19px; font-weight: 800; color: #1e293b; margin: 0 0 4px 0; line-height: 1.3; }
    .nj-subtitle-pro { font-size: 13px; color: #d97706; font-weight: 600; margin: 0; }
    .nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
    .nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 700; text-decoration: none !important; color: #fff !important; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .nj-btn-pro i { font-size: 18px; margin-bottom: 5px; }
    .nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); box-shadow: 0 5px 10px rgba(0,0,0,0.2); }
    .btn-book-pro { background: linear-gradient(135deg, #fbc02d, #f57f17); }
    .btn-video-pro { background: linear-gradient(135deg, #ff4b2b, #ff416c); }
    .btn-samjuti-pro { background: linear-gradient(135deg, #8e24aa, #5e35b1); }
    .btn-mcq-pro { background: linear-gradient(135deg, #29b6f6, #0288d1); }
    @media (max-width: 480px) {
        .nj-card-pro { padding: 15px; }
        .nj-btn-pro { font-size: 11px; padding: 8px 2px; }
        .nj-title-pro { font-size: 17px; }
    }
    </style>

    <div class="nj-premium-board">
        <h2 style="text-align:center; margin-bottom:15px; color:#1e293b; font-weight:800; font-size: 24px;">
            ધોરણ 10 ગુજરાતી (Gujarati)
        </h2>

        <div style="text-align: center; margin-bottom: 25px;">
            <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
                <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
            </button>
        </div>

        <div class="nj-grid-pro">

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">1</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">વૈષ્ણવજન</h3>
                        <p class="nj-subtitle-pro">કાવ્ય (નરસિંહ મહેતા)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch1.pdf', 'ગુજરાતી - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(1, 'ચેપ્ટર 1 - વૈષ્ણવજન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">2</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">રેસનો ઘોડો</h3>
                        <p class="nj-subtitle-pro">નવલિકા (વર્ષા અડાલજા)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch2.pdf', 'ગુજરાતી - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(2, 'ચેપ્ટર 2 - રેસનો ઘોડો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">3</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">શીલવંત સાધુને</h3>
                        <p class="nj-subtitle-pro">ભજન (ગંગાસતી)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch3.pdf', 'ગુજરાતી - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(3, 'ચેપ્ટર 3 - શીલવંત સાધુને')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">4</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ભૂલી ગયા પછી</h3>
                        <p class="nj-subtitle-pro">એકાંકી (રઘુવીર ચૌધરી)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch4.pdf', 'ગુજરાતી - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(4, 'ચેપ્ટર 4 - ભૂલી ગયા પછી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">5</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">દીકરી</h3>
                        <p class="nj-subtitle-pro">ગઝલ (અશોક ચાવડા 'બેદિલ')</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch5.pdf', 'ગુજરાતી - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'ચેપ્ટર 5 - દીકરી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">6</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">વાઇરલ ઇન્ફેક્શન</h3>
                        <p class="nj-subtitle-pro">નિબંધ (ગુણવંત શાહ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch6.pdf', 'ગુજરાતી - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'ચેપ્ટર 6 - વાઇરલ ઇન્ફેક્શન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">7</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">હું એવો ગુજરાતી</h3>
                        <p class="nj-subtitle-pro">ગીત (વિનોદ જોશી)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch7.pdf', 'ગુજરાતી - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'ચેપ્ટર 7 - હું એવો ગુજરાતી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">8</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">છત્રી</h3>
                        <p class="nj-subtitle-pro">હાસ્યનિબંધ (રતિલાલ બોરીસાગર)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch8.pdf', 'ગુજરાતી - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'ચેપ્ટર 8 - છત્રી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">9</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">માધવને દીઠો છે ક્યાંય?</h3>
                        <p class="nj-subtitle-pro">ઊર્મિગીત (હરીન્દ્ર દવે)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch9.pdf', 'ગુજરાતી - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'ચેપ્ટર 9 - માધવને દીઠો છે ક્યાંય?')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">10</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ડાંગવનો અને...</h3>
                        <p class="nj-subtitle-pro">પ્રવાસનિબંધ (મહેન્દ્રસિંહ પરમાર)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch10.pdf', 'ગુજરાતી - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'ચેપ્ટર 10 - ડાંગવનો અને...')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>
<div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">11</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">શિકારીને</h3>
                        <p class="nj-subtitle-pro">સોનેટ (કલાપી)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch11.pdf', 'ગુજરાતી - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'ચેપ્ટર 11 - શિકારીને')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">12</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ચોપડાની ઇન્દ્રજાળ</h3>
                        <p class="nj-subtitle-pro">આત્મકથાખંડ (ચંદ્રકાંત પંડ્યા)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch12.pdf', 'ગુજરાતી - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'ચેપ્ટર 12 - ચોપડાની ઇન્દ્રજાળ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">13</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">વતનથી વિદાય થતાં</h3>
                        <p class="nj-subtitle-pro">સોનેટ (જયંત પાઠક)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch13.pdf', 'ગુજરાતી - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(13, 'ચેપ્ટર 13 - વતનથી વિદાય થતાં')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">14</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">જન્મોત્સવ</h3>
                        <p class="nj-subtitle-pro">નવલિકા (સુરેશ જોષી)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch14.pdf', 'ગુજરાતી - પ્રકરણ 14')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(14, 'ચેપ્ટર 14 - જન્મોત્સવ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>
                        <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">15</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">બોલીએ ના કાંઈ</h3>
                        <p class="nj-subtitle-pro">ગીત (રાજેન્દ્ર શાહ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch15.pdf', 'ગુજરાતી - પ્રકરણ 15')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(15, 'ચેપ્ટર 15 - બોલીએ ના કાંઈ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(15)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">16</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ગતિભંગ</h3>
                        <p class="nj-subtitle-pro">લઘુકથા (મોહનલાલ પટેલ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch16.pdf', 'ગુજરાતી - પ્રકરણ 16')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(16, 'ચેપ્ટર 16 - ગતિભંગ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(16)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">17</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">દિવસો જુદાઈના જાય છે</h3>
                        <p class="nj-subtitle-pro">ગઝલ (ગની દહીંવાલા)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch17.pdf', 'ગુજરાતી - પ્રકરણ 17')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(17, 'ચેપ્ટર 17 - દિવસો જુદાઈના જાય છે')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(17)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">18</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ભૂખથીય ભૂંડી ભીખ</h3>
                        <p class="nj-subtitle-pro">નવલકથાખંડ (પન્નાલાલ પટેલ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch18.pdf', 'ગુજરાતી - પ્રકરણ 18')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(18, 'ચેપ્ટર 18 - ભૂખથીય ભૂંડી ભીખ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(18)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">19</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">એક બપોરે</h3>
                        <p class="nj-subtitle-pro">કાવ્ય (રાવજી પટેલ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch19.pdf', 'ગુજરાતી - પ્રકરણ 19')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(19, 'ચેપ્ટર 19 - એક બપોરે')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(19)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">20</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">વિરલ વિભૂતિ</h3>
                        <p class="nj-subtitle-pro">ચરિત્રનિબંધ (શ્રીમદ્ રાજચંદ્ર)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch20.pdf', 'ગુજરાતી - પ્રકરણ 20')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(20, 'ચેપ્ટર 20 - વિરલ વિભૂતિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(20)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">21</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ચાંદલિયો</h3>
                        <p class="nj-subtitle-pro">લોકગીત</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch21.pdf', 'ગુજરાતી - પ્રકરણ 21')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(21, 'ચેપ્ટર 21 - ચાંદલિયો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(21)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">22</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">હિમાલયમાં એક પ્રવાસ</h3>
                        <p class="nj-subtitle-pro">પ્રવાસનિબંધ (જવાહરલાલ નેહરુ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch22.pdf', 'ગુજરાતી - પ્રકરણ 22')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(22, 'ચેપ્ટર 22 - હિમાલયમાં એક પ્રવાસ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(22)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">23</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">લઘુકાવ્યો</h3>
                        <p class="nj-subtitle-pro">દુહા, મુક્તક, હાઇકુ</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch23.pdf', 'ગુજરાતી - પ્રકરણ 23')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(23, 'ચેપ્ટર 23 - લઘુકાવ્યો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(23)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">24</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">ઘોડીની સ્વામીભક્તિ</h3>
                        <p class="nj-subtitle-pro">લોકકથા (જોરાવરસિંહ જાદવ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch24.pdf', 'ગુજરાતી - પ્રકરણ 24')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(24, 'ચેપ્ટર 24 - ઘોડીની સ્વામીભક્તિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(24)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">25</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">સમર્પણ</h3>
                        <p class="nj-subtitle-pro"></p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch25.pdf', 'ગુજરાતી - પ્રકરણ 25')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(25, 'ચેપ્ટર 25 - સમર્પણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(25)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro">26</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">રાષ્ટ્રભક્તિની સંજીવની</h3>
                        <p class="nj-subtitle-pro"></p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-ch26.pdf', 'ગુજરાતી - પ્રકરણ 26')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(26, 'ચેપ્ટર 26 - રાષ્ટ્રભક્તિની સંજીવની')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(26)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

        </div>

        <h2 style="text-align:center; margin: 40px 0 20px 0; color:#1e293b; font-weight:800; font-size: 22px; border-top: 2px dashed #cbd5e1; padding-top: 20px;">
            પૂરક વાચન (Supplementary Reading)
        </h2>

        <div class="nj-grid-pro">

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">P1</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">બહાદુર બાળકો</h3>
                        <p class="nj-subtitle-pro" style="color: #6d28d9;">પ્રેરક પ્રસંગ (સંકલિત)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-P1.pdf', 'પૂરક વાચન - 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(27, 'પૂરક વાચન 1 - બહાદુર બાળકો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(27)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">P2</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">નદી વિયોગ</h3>
                        <p class="nj-subtitle-pro" style="color: #6d28d9;">સંસ્મરણ (પ્રફુલ્લ રાવલ)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-P2.pdf', 'પૂરક વાચન - 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(28, 'પૂરક વાચન 2 - નદી વિયોગ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(28)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">P3</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">તારે પગલે</h3>
                        <p class="nj-subtitle-pro" style="color: #6d28d9;">ઊર્મિકાવ્ય(રવીન્દ્રનાથ ટાગોર)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-P3.pdf', 'પૂરક વાચન - 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(29, 'પૂરક વાચન 3 - તારે પગલે')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(29)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">P4</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">મારી બા</h3>
                        <p class="nj-subtitle-pro" style="color: #6d28d9;">ચરિત્ર (શરીફા વીજળીવાળા)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
                    <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Gujarati-P4.pdf', 'પૂરક વાચન - 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
                    <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
                    <a href="javascript:void(0);" onclick="openNjSolutionApp(30, 'પૂરક વાચન 4 - મારી બા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
                    <a href="javascript:void(0);" onclick="startNjQuiz(30)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
                </div>
            </div>

            <div class="nj-card-pro">
                <div class="nj-header-pro">
                    <div class="nj-badge-pro" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">P5</div>
                    <div class="nj-title-box">
                        <h3 class="nj-title-pro">વીરભૂમિ</h3>
                        <p class="nj-subtitle-pro" style="color: #6d28d9;">એકાકી(અરવિંદ પંડ્યા)</p>
                    </div>
                </div>
                <div class="nj-actions-pro">
             
