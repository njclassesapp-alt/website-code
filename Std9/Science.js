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
    videoScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std9-maths-video.js?t=" + new Date().getTime();
    document.body.appendChild(videoScript);
  
</script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9-maths-mcq.js?t="></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/1MarkQ.js?t="></script>

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Blanks.js?t="></script>

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Jodaka.js?t="></script>

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9/Maths/Right-Wrong.js?t="></script>



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
    ધોરણ 9 વિજ્ઞાન (Science)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">આપણી આસપાસમાં દ્રવ્ય</h3><p class="nj-subtitle-pro">Matter in Our Surroundings</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch1.pdf', 'વિજ્ઞાન - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(1, 'ચેપ્ટર 1 - આપણી આસપાસમાં દ્રવ્ય')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">આપણી આસપાસનાં દ્રવ્યો શુદ્ધ છે?</h3><p class="nj-subtitle-pro">Is Matter Around Us Pure</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch2.pdf', 'વિજ્ઞાન - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(2, 'ચેપ્ટર 2 - આપણી આસપાસનાં દ્રવ્યો શુદ્ધ છે?')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">પરમાણુઓ અને અણુઓ</h3><p class="nj-subtitle-pro">Atoms and Molecules</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch3.pdf', 'વિજ્ઞાન - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(3, 'ચેપ્ટર 3 - પરમાણુઓ અને અણુઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">પરમાણુનું બંધારણ</h3><p class="nj-subtitle-pro">Structure of the Atom</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch4.pdf', 'વિજ્ઞાન - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(4, 'ચેપ્ટર 4 - પરમાણુનું બંધારણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">સજીવનો પાયાનો એકમ</h3><p class="nj-subtitle-pro">The Fundamental Unit of Life</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch5.pdf', 'વિજ્ઞાન - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std9_Ai_Sci_Ch5.pdf', 'વિજ્ઞાન - પ્રકરણ 5')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
        
        
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'ચેપ્ટર 5 - સજીવનો પાયાનો એકમ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">પેશીઓ</h3><p class="nj-subtitle-pro">Tissues</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch6.pdf', 'વિજ્ઞાન - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        
<a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std9_Ai_Sci_Ch6.pdf', 'પ્રકરણ 6')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'ચેપ્ટર 6 - પેશીઓ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">ગતિ</h3><p class="nj-subtitle-pro">Motion</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch7.pdf', 'વિજ્ઞાન - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'ચેપ્ટર 7 - ગતિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">બળ તથા ગતિના નિયમો</h3><p class="nj-subtitle-pro">Force and Laws of Motion</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch8.pdf', 'વિજ્ઞાન - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'ચેપ્ટર 8 - બળ તથા ગતિના નિયમો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">ગુરુત્વાકર્ષણ</h3><p class="nj-subtitle-pro">Gravitation</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch9.pdf', 'વિજ્ઞાન - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'ચેપ્ટર 9 - ગુરુત્વાકર્ષણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">કાર્ય અને ઊર્જા</h3><p class="nj-subtitle-pro">Work and Energy</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch10.pdf', 'વિજ્ઞાન - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'ચેપ્ટર 10 - કાર્ય અને ઊર્જા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">ધ્વનિ</h3><p class="nj-subtitle-pro">Sound</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch11.pdf', 'વિજ્ઞાન - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'ચેપ્ટર 11 - ધ્વનિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">અન્નસ્રોતોમાં સુધારણા</h3><p class="nj-subtitle-pro">Improvement in Food Resources</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sci_Ch12.pdf', 'વિજ્ઞાન - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'ચેપ્ટર 12 - અન્નસ્રોતોમાં સુધારણા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
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

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/MCQ.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/In_Text_Q.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/Exercise.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/1MarkQ.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/Blanks.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/Right-Wrong.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/Science/Jodaka.js"></script>

<script>
// --- દરેક ચેપ્ટર માટે અલગ-અલગ સમજૂતીની લિંકનું લિસ્ટ (હાલમાં ખાલી) ---
var std9SciTheoryLinks = {
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 
    7: "", 8: "", 9: "", 10: "", 11: "", 12: ""
};

function openStd9SciTheory() {
    var targetUrl = std9SciTheoryLinks[currentChapId];
    if (targetUrl && targetUrl.trim() !== "") {
        window.location.assign(targetUrl); 
    } else {
        alert("આ ચેપ્ટરની સમજૂતી લિંક હજુ ઉમેરવામાં આવી નથી. ચેપ્ટર નંબર: " + currentChapId);
    }
}

// --- ડેટા કન્વર્ટ અને મેઈન થીમ સાથે લિંક કરવાનું લોજીક ---
function structureStd9SciData(flatArray) {
    let structured = {};
    flatArray.forEach(item => {
        let ch = item.chapter;
        if (!structured[ch]) { structured[ch] = { qa_list: [] }; }
        structured[ch].qa_list.push({ question: item.q, answer: item.ans, q: item.q, ans: item.ans });
    });
    return structured;
}

function prepareStd9SciData() {
    // 1. ઇન-ટેક્સ્ટ પ્રશ્નો (In-Text Questions)
    if (typeof scienceInTextDB_Std9 !== 'undefined') { window.njMathsExamples = structureStd9SciData(scienceInTextDB_Std9); }
    
    // 2. સ્વાધ્યાય (Exercise)
    if (typeof sciExerciseDB_Std9 !== 'undefined') { window.njMathsExercise = structureStd9SciData(sciExerciseDB_Std9); }
    
    // 3. એક વાક્યમાં ઉત્તર (1 Mark)
    if (typeof sciOneLineDB_Std9 !== 'undefined') { window.mathOneLineDB = sciOneLineDB_Std9; }
    
    // 4. ખાલી જગ્યા (Blanks)
    if (typeof sciFillInTheBlanksDB_Std9 !== 'undefined') { window.mathFillInTheBlanksDB = sciFillInTheBlanksDB_Std9; }
    
    // 5. ખરા-ખોટા (True/False)
    if (typeof sciTrueFalseDB_Std9 !== 'undefined') { window.mathTrueFalseDB = sciTrueFalseDB_Std9; }
    
    // 6. જોડકાં (Match the following)
    if (typeof sciMatchDB_Std9 !== 'undefined') { window.mathMatchDB = sciMatchDB_Std9; }
    
    // 7. MCQ 
    if (typeof Std9_Sci_MCQ !== 'undefined') { window.njQuestionsDatabase = Std9_Sci_MCQ; }
}

// --- બટન્સ સેટ કરવાની મુખ્ય સ્ક્રિપ્ટ ---
window.addEventListener('load', function() {
    
    if (typeof openNjCategory !== 'undefined') {
        var originalOpenNjCategory = openNjCategory;
        window.openNjCategory = function(catType, catName) {
            if (catType === 'theory') {
                openStd9SciTheory();
                return;
            }
            prepareStd9SciData();
            originalOpenNjCategory(catType, catName);
        };
    }

    var categoryView = document.getElementById('nj-sol-category-view');
    if(categoryView) {
        categoryView.innerHTML = `
            <div class='nj-cat-heading'>તમારે શું શીખવું છે?</div>
            
            <div class='nj-cat-card nj-bg-theory' onclick='openStd9SciTheory()' style='display:none;'>
                <div class='nj-cat-icon'><i class='fa fa-book'></i></div>
                <div class='nj-cat-info'>
                    <h3>સમજૂતી</h3>
                    <p>પ્રકરણની સંપૂર્ણ અને વિસ્તૃત સમજૂતી</p>
                </div>
                <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
            </div>

            <div class='nj-cat-card nj-bg-example' onclick='openNjCategory("examples", "ઇન-ટેક્સ્ટ પ્રશ્નો")'>
                <div class='nj-cat-icon'><i class='fa fa-lightbulb-o'></i></div>
                <div class='nj-cat-info'>
                    <h3>ઇન-ટેક્સ્ટ પ્રશ્નો</h3>
                    <p>પાઠ્યપુસ્તકના અંદરના તમામ બ્લુ પ્રશ્નોના ઉત્તરો</p>
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

            <div class='nj-cat-card nj-bg-objective' onclick='openNjSubCategories()'>
                <div class='nj-cat-icon'><i class='fa fa-list-alt'></i></div>
                <div class='nj-cat-info'>
                    <h3>હેતુલક્ષી પ્રશ્નો / અન્ય</h3>
                    <p>MCQ, ખાલી જગ્યા, ખરા-ખોટા, અને જોડકાં</p>
                </div>
                <div class='nj-cat-arrow'><i class='fa fa-angle-right'></i></div>
            </div>
        `;
    }
    
    setTimeout(prepareStd9SciData, 500);
});
</script>
