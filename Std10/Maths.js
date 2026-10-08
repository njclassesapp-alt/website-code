<script>
    // સમજૂતી (Solutions) ના ત્રણેય ડેટાબેઝ (Direct Execution Link)

    // 1. થીયરી ડેટાબેઝ
    var theoryScript = document.createElement('script');
    theoryScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Maths/Theory.js?t=" + new Date().getTime();
    document.body.appendChild(theoryScript);

    // 2. ઉદાહરણના દાખલાનો ડેટાબેઝ
    var exampleScript = document.createElement('script');
    exampleScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Maths/Example.js?t=1" + new Date().getTime();
    document.body.appendChild(exampleScript);

        // 3. સ્વાધ્યાયના દાખલાનો ડેટાબેઝ (ભાગ 1: ચેપ્ટર 1 થી 9)
    var exerciseScript = document.createElement('script');
    exerciseScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Maths/Exercise1.js?t=" + new Date().getTime();

    // ભાગ 1 પૂરો લોડ થાય, પછી જ ભાગ 2 લોડ કરવો
    exerciseScript.onload = function() {
        var exerciseScript2 = document.createElement('script');
        exerciseScript2.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Maths/Exercise2.js?t=" + new Date().getTime();
        
        exerciseScript2.onload = function() {
            // બંને ફાઈલ લોડ થઈ જાય એટલે ડેટા ભેગો કરવો
            if(typeof njMathsExercise !== 'undefined' && typeof njMathsExercise2 !== 'undefined') {
                Object.assign(njMathsExercise, njMathsExercise2);
                console.log("Success: બંને ડેટાબેઝ ભેગા થઈ ગયા છે!");
            } else {
                // જો GitHub પર નામ નહિ બદલ્યું હોય, તો આ મેસેજ દેખાશે
                alert("ભૂલ: GitHub પર 'Exercise2.js' ફાઈલ ખોલો અને સૌથી પહેલી લાઈનમાં નામ બદલીને 'var njMathsExercise2 = {' કરો.");
            }
        };
        document.body.appendChild(exerciseScript2);
    };
    document.body.appendChild(exerciseScript);
  
</script>

<script>
    // MCQ માટેનો ડેટાબેઝ
    var mcqScript = document.createElement('script');
    mcqScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Maths/MCQ.js?t=1" + new Date().getTime();
    document.body.appendChild(mcqScript);

    // વિડીયો માટેનો નવો ડેટાબેઝ
    var videoScript = document.createElement('script');
    videoScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10/Maths/Video.js?t=" + new Date().getTime();
    document.body.appendChild(videoScript);
</script>

<script src='https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_Maths_1MarkQ.js'></script>
<script src='https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_Maths_Blanks.js'></script>
<script src='https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_Maths_Right-Wrong.js'></script>
<script src='https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std10_Maths_Jodaka.js'></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std10_Maths_imp.js" ></script>
<script>
    // માર્ક આધારિત પ્રશ્નોનો ડેટાબેઝ 
    var marks2Script = document.createElement('script');
    marks2Script.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/NJClassesAIData@main/Std10/Maths/Maths_2_Marks.js?t=" + new Date().getTime();
    document.body.appendChild(marks2Script);

    var marks3Script = document.createElement('script');
    marks3Script.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/NJClassesAIData@main/Std10/Maths/Maths_3_Marks.js?t=" + new Date().getTime();
    document.body.appendChild(marks3Script);

    var marks4Script = document.createElement('script');
    marks4Script.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/NJClassesAIData@main/Std10/Maths/Maths_4_Marks.js?t=" + new Date().getTime();
    document.body.appendChild(marks4Script);
</script>


<style>
  
/* ખાલી બટન છુપાવવાનો 100% વર્કિંગ કોડ */
.nj-premium-board a[href="#"] { display: none !important; }
  
/* --- Premium App UI For Std 10 Maths --- */
.nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', sans-serif; }
.nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

/* Main Card Design */
.nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); border-color: #673ab7; }
.nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #673ab7, #512da8); }

/* Header Section */
.nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
.nj-badge-pro { background: linear-gradient(135deg, #673ab7, #512da8); color: #fff; width: 45px; height: 45px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; flex-shrink: 0; box-shadow: 0 4px 8px rgba(103, 58, 183, 0.3); }
.nj-title-box { margin-left: 15px; }
.nj-title-pro { font-size: 16px; font-weight: 700; color: #222; margin: 0 0 3px 0; line-height: 1.3; }
.nj-subtitle-pro { font-size: 12px; color: #777; font-weight: 500; margin: 0; }

/* Buttons Section */
.nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 600; text-decoration: none !important; color: #fff !important; transition: all 0.2s; border: none; cursor: pointer;}
.nj-btn-pro i { font-size: 18px; margin-bottom: 4px; }
.nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); }
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
    .nj-title-pro { font-size: 15px; }
}
</style>

<div class="nj-premium-board">
  <h2 style="text-align:center; margin-bottom:15px; color:#222; font-weight:800;">
    ધોરણ 10 ગણિત (NCERT)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <a href="javascript:void(0);" onclick="startNjQuiz('all')" style="display:inline-block; background: linear-gradient(135deg, #673ab7, #512da8); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 15px; font-weight: bold; cursor: pointer; text-decoration:none; box-shadow: 0 4px 15px rgba(103, 58, 183, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </a>
  </div>
  
  <div class="nj-grid-pro">

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">વાસ્તવિક સંખ્યાઓ</h3><p class="nj-subtitle-pro">Real Numbers</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch1.pdf', 'ચેપ્ટર 1 - વાસ્તવિક સંખ્યાઓ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(1, 'ચેપ્ટર 1 - વાસ્તવિક સંખ્યાઓ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
         <a href="javascript:void(0)" onclick="openNjSolutionApp(1, 'પ્રકરણ 1 - વાસ્તવિક સંખ્યાઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
        
        
        
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">બહુપદીઓ</h3><p class="nj-subtitle-pro">Polynomials</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch2.pdf', 'ચેપ્ટર 2 - બહુપદીઓ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(2, 'ચેપ્ટર 2 - બહુપદીઓ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0)" onclick="openNjSolutionApp(2, 'પ્રકરણ 2 - બહુપદીઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">દ્વિચલ સુરેખ સમીકરણયુગ્મ</h3><p class="nj-subtitle-pro">Pair of Linear Equations</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch3.pdf', 'ચેપ્ટર 3 - દ્વિચલ સુરેખ સમીકરણયુગ્મ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(3, 'ચેપ્ટર 3 - દ્વિચલ સુરેખ સમીકરણયુગ્મ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
         <a href="javascript:void(0)" onclick="openNjSolutionApp(3, 'પ્રકરણ 3 - દ્વિચલ સુરેખ સમીકરણયુગ્મ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">દ્વિઘાત સમીકરણ</h3><p class="nj-subtitle-pro">Quadratic Equations</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch4.pdf', 'ચેપ્ટર 4 - દ્વિઘાત સમીકરણ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(4, 'ચેપ્ટર 4 - દ્વિઘાત સમીકરણ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0)" onclick="openNjSolutionApp(4, 'પ્રકરણ 4 - દ્વિઘાત સમીકરણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">સમાંતર શ્રેણી</h3><p class="nj-subtitle-pro">Arithmetic Progressions</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch5.pdf', 'ચેપ્ટર 5 - સમાંતર શ્રેણી')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(5, 'ચેપ્ટર 5 - સમાંતર શ્રેણી')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'પ્રકરણ 5 - સમાંતર શ્રેણી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">ત્રિકોણ</h3><p class="nj-subtitle-pro">Triangles</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch6.pdf', 'ચેપ્ટર 6 - ત્રિકોણ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        
<a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Maths_Ch6.pdf', 'પ્રકરણ 6')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(6, 'ચેપ્ટર 6 - ત્રિકોણ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'પ્રકરણ 6 - ત્રિકોણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">યામ ભૂમિતિ</h3><p class="nj-subtitle-pro">Coordinate Geometry</p></div></div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch7.pdf', 'ચેપ્ટર 7 - યામ ભૂમિતિ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(7, 'ચેપ્ટર 7 - યામ ભૂમિતિ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'પ્રકરણ 7 - યામ ભૂમિતિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">ત્રિકોણમિતિનો પરિચય</h3><p class="nj-subtitle-pro">Intro to Trigonometry</p></div></div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch8.pdf', 'ચેપ્ટર 8 - ત્રિકોણમિતિનો પરિચય')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(8, 'ચેપ્ટર 8 - ત્રિકોણમિતિનો પરિચય')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'પ્રકરણ 8 - ત્રિકોણમિતિનો પરિચય')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">ત્રિકોણમિતિના ઉપયોગો</h3><p class="nj-subtitle-pro">Applications of Trigonometry</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch9.pdf', 'ચેપ્ટર 9 - ત્રિકોણમિતિના ઉપયોગો')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(9, 'ચેપ્ટર 9 - ત્રિકોણમિતિના ઉપયોગો')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'પ્રકરણ 9 - ત્રિકોણમિતિના ઉપયોગો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">વર્તુળ</h3><p class="nj-subtitle-pro">Circles</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch10.pdf', 'ચેપ્ટર 10 - વર્તુળ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(10, 'ચેપ્ટર 10 - વર્તુળ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'પ્રકરણ 10 - વર્તુળ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">વર્તુળ સંબંધિત ક્ષેત્રફળ</h3><p class="nj-subtitle-pro">Areas Related to Circles</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch11.pdf', 'ચેપ્ટર 11 - વર્તુળ સંબંધિત ક્ષેત્રફળ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(11, 'ચેપ્ટર 11 - વર્તુળ સંબંધિત ક્ષેત્રફળ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'પ્રકરણ 11 - વર્તુળ સંબંધિત ક્ષેત્રફળ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">પૃષ્ઠફળ અને ઘનફળ</h3><p class="nj-subtitle-pro">Surface Areas and Volumes</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch12.pdf', 'ચેપ્ટર 12 - પૃષ્ઠફળ અને ઘનફળ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(12, 'ચેપ્ટર 12 - પૃષ્ઠફળ અને ઘનફળ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'પ્રકરણ 12 - પૃષ્ઠફળ અને ઘનફળ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">આંકડાશાસ્ત્ર</h3><p class="nj-subtitle-pro">Statistics</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch13.pdf', 'ચેપ્ટર 13 - આંકડાશાસ્ત્ર')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="javascript:void(0);" onclick="openNjYoutubeApp(13, 'ચેપ્ટર 13 - આંકડાશાસ્ત્ર')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(13, 'પ્રકરણ 13 - આંકડાશાસ્ત્ર')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro"><div class="nj-badge-pro">14</div><div class="nj-title-box"><h3 class="nj-title-pro">સંભાવના</h3><p class="nj-subtitle-pro">Probability</p></div></div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std-10-maths-ch14.pdf', 'ચેપ્ટર 14 - સંભાવના')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        
<a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std10_Ai_Maths_Ch14.pdf', 'પ્રકરણ 4')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
        
         <a href="javascript:void(0);" onclick="openNjYoutubeApp(14, 'ચેપ્ટર 14 - સંભાવના')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
          <a href="javascript:void(0);" onclick="openNjSolutionApp(14, 'પ્રકરણ 14 - સંભાવના')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

  </div>
</div>

<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(`.nj-btn-pro, .nj-premium-board a[onclick="startNjQuiz('all')"]`);
    buttons.forEach(function(btn) {
        var href = btn.getAttribute('href');
        var onclick = btn.getAttribute('onclick');
        
        // જો લિંક '#' હોય તો બટન છુપાવો
        if (!href || href === '#' || href.trim() === '') {
            btn.style.display = 'none';
        } 
        // જો લિંક ખાલી હોય અને onclick પણ ના હોય તો છુપાવો
        else if (href === 'javascript:void(0);' && !onclick) {
            btn.style.display = 'none';
        }
    });
});
</script>
