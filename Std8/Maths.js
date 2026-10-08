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
    ધોરણ 8 ગણિત (Mathematics)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">સંમેય સંખ્યાઓ</h3><p class="nj-subtitle-pro">Rational Numbers</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch1.pdf', 'ગણિત - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(1, 'પ્રકરણ 1 - સંમેય સંખ્યાઓ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">એકચલ સુરેખ સમીકરણ</h3><p class="nj-subtitle-pro">Linear Equations in One Variable</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch2.pdf', 'ગણિત - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
         <a href="javascript:void(0);" onclick="openNjYoutubeApp(2, 'પ્રકરણ 2 - દ્વિચલ સુરેખ સમીકરણ')" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
        
         <a href="javascript:void(0);" onclick="openNjSolutionApp(2, 'પ્રકરણ 2 - એકચલ સુરેખ સમીકરણ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
         <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">ચતુષ્કોણની સમજ</h3><p class="nj-subtitle-pro">Understanding Quadrilaterals</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch3.pdf', 'ગણિત - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Ai_Maths_Ch3.pdf', 'પ્રકરણ 8')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
        
        
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0);" onclick="openNjSolutionApp(3, 'પ્રકરણ 3 - ચતુષ્કોણની સમજ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">માહિતીનું નિયમન</h3><p class="nj-subtitle-pro">Data Handling</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch4.pdf', 'ગણિત - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
        <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Ai_Maths_Ch4.pdf', 'પ્રકરણ 4')" class="nj-btn-pro btn-ai-pro"><span class="emoji-icon">🔑</span> ગુરુચાવી </a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(4, 'પ્રકરણ 4 - માહિતીનું નિયમન')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">વર્ગ અને વર્ગમૂળ</h3><p class="nj-subtitle-pro">Squares and Square Roots</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch5.pdf', 'ગણિત - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'પ્રકરણ 5 - વર્ગ અને વર્ગમૂળ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">ઘન અને ઘનમૂળ</h3><p class="nj-subtitle-pro">Cubes and Cube Roots</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch6.pdf', 'ગણિત - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'પ્રકરણ 6 - ઘન અને ઘનમૂળ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">રાશિઓની તુલના</h3><p class="nj-subtitle-pro">Comparing Quantities</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch7.pdf', 'ગણિત - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'પ્રકરણ 7 - રાશિઓની તુલના')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">બૈજિક પદાવલિઓ અને નિત્યસમ</h3><p class="nj-subtitle-pro">Algebraic Expressions and Identities</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch8.pdf', 'ગણિત - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'પ્રકરણ 8 - બૈજિક પદાવલિઓ અને નિત્યસમ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">માપન</h3><p class="nj-subtitle-pro">Mensuration</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch9.pdf', 'ગણિત - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'પ્રકરણ 9 - માપન')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">ઘાતાંક અને ઘાત</h3><p class="nj-subtitle-pro">Exponents and Powers</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch10.pdf', 'ગણિત - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'પ્રકરણ 10 - ઘાતાંક અને ઘાત')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">સમપ્રમાણ અને વ્યસ્ત પ્રમાણ</h3><p class="nj-subtitle-pro">Direct and Inverse Proportions</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch11.pdf', 'ગણિત - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'પ્રકરણ 11 - સમપ્રમાણ અને વ્યસ્ત પ્રમાણ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">અવયવીકરણ</h3><p class="nj-subtitle-pro">Factorisation</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch12.pdf', 'ગણિત - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'પ્રકરણ 12 - અવયવીકરણ')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
        
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">આલેખનો પરિચય</h3><p class="nj-subtitle-pro">Introduction to Graphs</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_Maths_Ch13.pdf', 'ગણિત - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(13, 'પ્રકરણ 13 - આલેખનો પરિચય')" class="nj-btn-pro btn-samjuti-pro">
    <i class="fa fa-book"></i> સમજૂતી
        </a>
          <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
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

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/Theory.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/MCQ.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/Example.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/Exercise.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/1MarkQ.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/Blanks.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/Right-Wrong.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/Maths/jodaka.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std8-maths-video.js"></script>


<script>
// --- ડેટા કન્વર્ટ અને મેઈન થીમ સાથે લિંક કરવાનું લોજીક ---
function prepareStd8MathData() {
    // 1. ઉદાહરણ (Examples)
    if (typeof njMathsExamples_Std8 !== 'undefined') { window.njMathsExamples = njMathsExamples_Std8; }
    
    // 2. સ્વાધ્યાય (Exercise)
    if (typeof njMathsExercise_Std8 !== 'undefined') { window.njMathsExercise = njMathsExercise_Std8; }
    
    // 3. એક વાક્યમાં ઉત્તર (1 Mark)
    if (typeof mathOneLineDB_Std8 !== 'undefined') { window.mathOneLineDB = mathOneLineDB_Std8; }
    else if (typeof mathOneLineEQ_Std8 !== 'undefined') { window.mathOneLineDB = mathOneLineEQ_Std8; }
    
    // 4. ખાલી જગ્યા (Blanks)
    if (typeof mathFillInTheBlanksDB_Std8 !== 'undefined') { window.mathFillInTheBlanksDB = mathFillInTheBlanksDB_Std8; }
    else if (typeof mathFillInTheBlanksEQ_Std8 !== 'undefined') { window.mathFillInTheBlanksDB = mathFillInTheBlanksEQ_Std8; }
    
    // 5. ખરા-ખોટા (True/False)
    if (typeof mathTrueFalseEQ_Std8 !== 'undefined') { window.mathTrueFalseDB = mathTrueFalseEQ_Std8; }
    else if (typeof mathTrueFalseDB_Std8 !== 'undefined') { window.mathTrueFalseDB = mathTrueFalseDB_Std8; }
    
    // 6. જોડકાં (Match the following)
    if (typeof mathMatchEQ_Std8 !== 'undefined') { window.mathMatchDB = mathMatchEQ_Std8; }
    else if (typeof mathMatchDB_Std8 !== 'undefined') { window.mathMatchDB = mathMatchDB_Std8; }
}

window.addEventListener('load', function() {
    // પેજ લોડ થાય ત્યારે ડેટા સેટ કરવા માટે (સમય વધારીને 1 સેકન્ડ કર્યો છે)
    setTimeout(prepareStd8MathData, 1000);
    
    // ડબલ સેફ્ટી: યુઝર જ્યારે સ્ક્રીન પર ક્યાંય પણ ક્લિક કરે (જેમ કે કોઈ ઓપ્શન ઓપન કરવા), 
    // ત્યારે તરત જ ડેટાબેઝ સેટ થઈ જશે જેથી કોઈ એરર ન આવે.
    document.body.addEventListener('click', function() {
        prepareStd8MathData();
    });
});
</script>
