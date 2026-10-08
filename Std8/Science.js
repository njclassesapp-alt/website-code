<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Science/MCQ.js"></script>

<script>
    // --- ડેટા કન્વર્ટ કરવાનું ફંક્શન ---
    function structureScienceData(flatArray) {
        let structured = {};
        flatArray.forEach(item => {
            let ch = item.chapter;
            if (!structured[ch]) { structured[ch] = { qa_list: [] }; }
            structured[ch].qa_list.push({ question: item.q, answer: item.ans, q: item.q, ans: item.ans });
        });
        return structured;
    }

    // --- ૧. સ્વાધ્યાયના પ્રશ્નો લોડ કરવા (1000670992.jpg ઇમેજ મુજબ નામ: sciExerciseDB_Std8) ---
    var exerciseScript = document.createElement('script');
    exerciseScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Science/Exercise.js?t=" + new Date().getTime();
    exerciseScript.onload = function() {
        if(typeof sciExerciseDB_Std8 !== 'undefined') {
            window.njMathsExercise = structureScienceData(sciExerciseDB_Std8); 
            console.log("ધોરણ 8 સ્વાધ્યાયના પ્રશ્નો લોડ થયા");
        }
    };
    document.body.appendChild(exerciseScript);
</script>

<script>
// --- ૨. દરેક ચેપ્ટર માટે અલગ-અલગ સમજૂતીની લિંકનું લિસ્ટ ---
var scienceTheoryLinks = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "https://www.njclasses.in/search/label/Std%208%20Science%20Ch%2012",
    13: "https://www.njclasses.in/search/label/Std%208%20Science%20Ch%2013"
};

// --- ૩. સમજૂતીની લિંક ડાયરેક્ટ ખોલવા માટેનું ફંક્શન ---
function openScienceTheory() {
    var targetUrl = scienceTheoryLinks[currentChapId];
    if (targetUrl) {
        window.location.assign(targetUrl); 
    } else {
        // HTML કોડને સાચા ગુજરાતી અક્ષરોમાં કન્વર્ટ કરવા માટે
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = "આ ચેપ્ટરની સમજૂતી હજુ ઉમેરવામાં આવી નથી. ચેપ્ટર નંબર: " + currentChapId;
        
        // હવે કન્વર્ટ થયેલું સાદું લખાણ alert માં બતાવો
        alert(tempDiv.textContent || tempDiv.innerText);
    }
}

// --- ૪. મેનૂ માત્ર ૨ ઓપ્શન પૂરતું સેટ કરવું ---
window.addEventListener('load', function() {
    if (typeof openNjCategory !== 'undefined') {
        var originalOpenNjCategory = openNjCategory;
        window.openNjCategory = function(catType, catName) {
            if (catType === 'theory') {
                openScienceTheory();
                return;
            }
            originalOpenNjCategory(catType, catName);
        };
    }

    var categoryView = document.getElementById('nj-sol-category-view');
    if(categoryView) {
        categoryView.innerHTML = `
            <div class='nj-cat-heading'>તમારે શું શીખવું છે?</div>
            
            <div class='nj-cat-card nj-bg-theory' onclick='openScienceTheory()'>
                <div class='nj-cat-icon'><i class='fa fa-book'></i></div>
                <div class='nj-cat-info'>
                    <h3>સમજૂતી</h3>
                    <p>પ્રકરણની સંપૂર્ણ અને વિસ્તૃત સમજૂતી</p>
                </div>
                <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
            </div>

           <div class='nj-cat-card nj-bg-exercise' onclick='openNjCategory("exercise", "સ્વાધ્યાયના પ્રશ્નો")'>
                <div class='nj-cat-icon'><i class='fa fa-pencil-square-o'></i></div>
                <div class='nj-cat-info'>
                    <h3>સ્વાધ્યાયના પ્રશ્નો</h3>
                    <p>સ્વાધ્યાયના તમામ પ્રશ્નોના સંપૂર્ણ જવાબો</p>
                </div>
                <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
            </div>
        `;
    }
});
</script>

<style>
.nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', 'Hind Vadodara', sans-serif; }
.nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

/* Main Card Design */
.nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e0e0e0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); border-color: #2563eb; }
.nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(135deg, #3b82f6, #1d4ed8); }

/* Header Section */
.nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
.nj-badge-pro { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #fff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3); }
.nj-title-box { margin-left: 15px; }
.nj-title-pro { font-size: 19px; font-weight: 800; color: #1e293b; margin: 0 0 4px 0; line-height: 1.3; }
.nj-subtitle-pro { font-size: 13px; color: #2563eb; font-weight: 600; margin: 0; }

/* Buttons Section */
.nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 700; text-decoration: none !important; color: #fff !important; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.nj-btn-pro i { font-size: 18px; margin-bottom: 5px; }
.nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); box-shadow: 0 5px 10px rgba(0,0,0,0.2); }
/* Ai Note માટે નવો કલર (ઉદાહરણ તરીકે: આધુનિક ગ્રીન/ટીલ કલર) */
.btn-ai-pro { background: linear-gradient(135deg, #10b981, #059669); }

/* ઈમોજીને યોગ્ય જગ્યા અને સાઇઝ આપવા માટે */
  .nj-btn-pro .emoji-icon { font-size: 18px; margin-bottom: 5px; display: block; line-height: 1; }
  
/* Button Colors */
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
    ધોરણ 8 વિજ્ઞાન (Science)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">પાક ઉત્પાદન અને વ્યવસ્થાપન</h3><p class="nj-subtitle-pro">Crop Production and Management</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch1.pdf', 'વિજ્ઞાન - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(1, 'પ્રકરણ 1 - પાક ઉત્પાદન અને વ્યવસ્થાપન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">સૂક્ષ્મજીવો : મિત્ર અને શત્રુ</h3><p class="nj-subtitle-pro">Microorganisms: Friend and Foe</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch2.pdf', 'વિજ્ઞાન - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
         <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0)" onclick="openNjSolutionApp(2, 'પ્રકરણ 2 - સૂક્ષ્મજીવો : મિત્ર અને શત્રુ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
         <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">કોલસો અને પેટ્રોલિયમ</h3><p class="nj-subtitle-pro">Coal and Petroleum</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch3.pdf', 'વિજ્ઞાન - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(3, 'પ્રકરણ 3 - કોલસો અને પેટ્રોલિયમ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">દહન અને જ્યોત</h3><p class="nj-subtitle-pro">Combustion and Flame</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch4.pdf', 'વિજ્ઞાન - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(4, 'પ્રકરણ 4 - દહન અને જ્યોત')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">વનસ્પતિઓ અને પ્રાણીઓનું સંરક્ષણ</h3><p class="nj-subtitle-pro">Conservation of Plants and Animals</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch5.pdf', 'વિજ્ઞાન - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(5, 'પ્રકરણ 5 - વનસ્પતિઓ અને પ્રાણીઓનું સંરક્ષણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">પ્રાણીઓમાં પ્રજનન</h3><p class="nj-subtitle-pro">Reproduction in Animals</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch6.pdf', 'વિજ્ઞાન - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(6, 'પ્રકરણ 6 - પ્રાણીઓમાં પ્રજનન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">કિશોરાવસ્થા તરફ</h3><p class="nj-subtitle-pro">Reaching the Age of Adolescence</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch7.pdf', 'વિજ્ઞાન - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(7, 'પ્રકરણ 7 - કિશોરાવસ્થા તરફ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">બળ અને દબાણ</h3><p class="nj-subtitle-pro">Force and Pressure</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch8.pdf', 'વિજ્ઞાન - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(8, 'પ્રકરણ 8 - બળ અને દબાણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">ઘર્ષણ</h3><p class="nj-subtitle-pro">Friction</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch9.pdf', 'વિજ્ઞાન - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(9, 'પ્રકરણ 9 - ઘર્ષણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">ધ્વનિ</h3><p class="nj-subtitle-pro">Sound</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch10.pdf', 'વિજ્ઞાન - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(10, 'પ્રકરણ 10 - ધ્વનિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">વિદ્યુતપ્રવાહની રાસાયણિક અસરો</h3><p class="nj-subtitle-pro">Chemical Effects of Electric Current</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch11.pdf', 'વિજ્ઞાન - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(11, 'પ્રકરણ 11 - વિદ્યુતપ્રવાહની રાસાયણિક અસરો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">કેટલીક કુદરતી ઘટનાઓ</h3><p class="nj-subtitle-pro">Some Natural Phenomena</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch12.pdf', 'વિજ્ઞાન - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(12, 'પ્રકરણ 12 - કેટલીક કુદરતી ઘટનાઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">પ્રકાશ</h3><p class="nj-subtitle-pro">Light</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Sci_Ch13.pdf', 'વિજ્ઞાન - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0)" onclick="openNjSolutionApp(13, 'પ્રકરણ 13 - પ્રકાશ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

  </div> 
</div> 

<script>
  document.addEventListener("DOMContentLoaded", function() {
      var allCards = document.querySelectorAll('.nj-card-pro');
      
      allCards.forEach(function(card) {
          var buttons = card.querySelectorAll('.nj-btn-pro');
          var activeLinksCount = 0;

          buttons.forEach(function(btn) {
              var href = btn.getAttribute('href');
              var onclick = btn.getAttribute('onclick');
              
              if(!href || href === '#' || href.trim() === '') {
                  btn.style.display = 'none'; 
              } else if (href === 'javascript:void(0);' && !onclick) {
                  btn.style.display = 'none';
              } else {
                  activeLinksCount++; 
              }
          });

          if(activeLinksCount === 0) {
              card.style.display = 'none';
          }
      });
  });
</script>
