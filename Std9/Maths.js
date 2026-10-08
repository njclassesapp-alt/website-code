<script>
    // સમજૂતી (Solutions) ના ત્રણેય ડેટાબેઝ (Direct Execution Link)
    var theoryScript = document.createElement('script');
    theoryScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Theory.js?t=" + new Date().getTime();
    document.body.appendChild(theoryScript);
  
 
     var exampleScript = document.createElement('script');
     exampleScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Example.js?t=3" + new Date().getTime();
     document.body.appendChild(exampleScript);
  
    var ExerciseScript = document.createElement('script');
    ExerciseScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Exercise.js?t=1" + new Date().getTime();
   document.body.appendChild( ExerciseScript);
  
   // વિડીયો માટેનો નવો ડેટાબેઝ
    var videoScript = document.createElement('script');
    videoScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std9-maths-video.js?t=1" + new Date().getTime();
    document.body.appendChild(videoScript);
  
</script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9-maths-mcq.js?t="></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/1MarkQ.js?t="></script>

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Blanks.js?t="></script>

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Jodaka.js?t="></script>

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Right-Wrong.js?t="></script>

<script>
    // ધોરણ 9 ગણિત - 3 ગુણના પ્રશ્નોનો ડેટાબેઝ 
    var marks3Script = document.createElement('script');
    marks3Script.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/NJClassesAIData@main/Std9/Maths/Maths_3_Marks.js?t=" + new Date().getTime();
    marks3Script.onerror = function() { 
        if(typeof showNjGlobalError === 'function') showNjGlobalError("<b>ભૂલ:</b> ધોરણ 9 - 3 ગુણના પ્રશ્નોની ફાઈલ (Maths_3_Marks.js) લોડ થઈ નથી!"); 
    };
    document.body.appendChild(marks3Script);

    // ધોરણ 9 ગણિત - 4 ગુણના પ્રશ્નોનો ડેટાબેઝ 
    var marks4Script = document.createElement('script');
    marks4Script.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/NJClassesAIData@main/Std9/Maths/Maths_4_Marks.js?t=" + new Date().getTime();
    marks4Script.onerror = function() { 
        if(typeof showNjGlobalError === 'function') showNjGlobalError("<b>ભૂલ:</b> ધોરણ 9 - 4 ગુણના પ્રશ્નોની ફાઈલ (Maths_4_Marks.js) લોડ થઈ નથી!"); 
    };
    document.body.appendChild(marks4Script);
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
    ધોરણ 9 ગણિત (Mathematics)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">સંખ્યા પદ્ધતિ</h3><p class="nj-subtitle-pro">Number Systems</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch1.pdf', 'ગણિત - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
         <a href="javascript:void(0);" onclick="openNjYoutubeApp(1, 'પ્રકરણ 1  - સંખ્યા પદ્ધત')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(1, 'પ્રકરણ 1 - સંખ્યા પદ્ધતિ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">બહુપદીઓ</h3><p class="nj-subtitle-pro">Polynomials</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch2.pdf', 'ગણિત - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
         <a href="javascript:void(0);" onclick="openNjYoutubeApp(2, 'પ્રકરણ 2 - બહુપદીઓ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0);" onclick="openNjSolutionApp(2, 'પ્રકરણ 2 - બહુપદીઓ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">યામ ભૂમિતિ</h3><p class="nj-subtitle-pro">Coordinate Geometry</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch3.pdf', 'ગણિત - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std9_Ai_Maths_Ch3.pdf', 'પ્રકરણ 3')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
        
        
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        <a href="javascript:void(0);" onclick="openNjSolutionApp(3, 'પ્રકરણ 3 - યામ ભૂમિતિ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
        
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">દ્વિચલ સુરેખ સમીકરણો</h3><p class="nj-subtitle-pro">Linear Equations in Two Variables</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch4.pdf', 'ગણિત - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>      
<a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std9_Ai_Maths_Ch4.pdf', 'પ્રકરણ 4')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>

        
        
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(4, 'પ્રકરણ 4 - દ્વિચલ સુરેખ સમીકરણો')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
        
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">યુક્લિડની ભૂમિતિનો પરિચય</h3><p class="nj-subtitle-pro">Introduction to Euclid's Geometry</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch5.pdf', 'ગણિત - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std9_Ai_Maths_Ch5.pdf', 'પ્રકરણ 5')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
        
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'પ્રકરણ 5 - યુક્લિડની ભૂમિતિનો પરિચય')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
        
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">રેખાઓ અને ખૂણાઓ</h3><p class="nj-subtitle-pro">Lines and Angles</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch6.pdf', 'ગણિત - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        
<a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std9_Ai_Maths_Ch6.pdf', 'પ્રકરણ 6')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>

        
         <a href="javascript:void(0);" onclick="openNjYoutubeApp(6, 'પ્રકરણ 6 - રેખાઓ અને ખૂણાઓ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
        <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'પ્રકરણ 6 - રેખાઓ અને ખૂણાઓ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">ત્રિકોણ</h3><p class="nj-subtitle-pro">Triangles</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch7.pdf', 'ગણિત - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'પ્રકરણ 7 - ત્રિકોણ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">ચતુષ્કોણ</h3><p class="nj-subtitle-pro">Quadrilaterals</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch8.pdf', 'ગણિત - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'પ્રકરણ 8 - ચતુષ્કોણ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">વર્તુળ</h3><p class="nj-subtitle-pro">Circles</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch9.pdf', 'ગણિત - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'પ્રકરણ 9 - વર્તુળ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">હેરોનનું સૂત્ર</h3><p class="nj-subtitle-pro">Heron's Formula</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch10.pdf', 'ગણિત - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'પ્રકરણ 10 - હેરોનનું સૂત્ર')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">પૃષ્ઠફળ અને ઘનફળ</h3><p class="nj-subtitle-pro">Surface Areas and Volumes</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch11.pdf', 'ગણિત - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'પ્રકરણ 11 - પૃષ્ઠફળ અને ઘનફળ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">આંકડાશાસ્ત્ર</h3><p class="nj-subtitle-pro">Statistics</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Maths_Ch12.pdf', 'ગણિત - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'પ્રકરણ 12 - આંકડાશાસ્ત્ર')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

  </div> 
</div> 

<script>
  document.addEventListener("DOMContentLoaded", function() {
      // પેજમાં રહેલા તમામ ચેપ્ટરના કાર્ડ્સ પકડી લો
      var allCards = document.querySelectorAll('.nj-card-pro');
      
      allCards.forEach(function(card) {
          // આ કાર્ડની અંદર કેટલા બટન છે તે ચેક કરો
          var buttons = card.querySelectorAll('.nj-btn-pro');
          var activeLinksCount = 0;

          buttons.forEach(function(btn) {
              var href = btn.getAttribute('href');
              
              // જો લિંકમાં માત્ર # હોય કે સાવ ખાલી હોય, તો તે બટન સંતાડી દો
              if(href === '#' || href === '') {
                  btn.style.display = 'none'; 
              } else {
                  // જો લિંક હોય તો ગણતરી કરો
                  activeLinksCount++; 
              }
          });

          // જો આ કાર્ડમાં એકપણ બટન એક્ટિવ ન હોય તો આખેઆખું કાર્ડ ગાયબ કરી દો
          if(activeLinksCount === 0) {
              card.style.display = 'none';
          }
      });
  });
</script>
