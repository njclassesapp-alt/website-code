<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9-English-mcq.js"></script>

<style>
.nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', 'Hind Vadodara', sans-serif; }
.nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

/* Main Card Design - English Special Theme */
.nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e0e0e0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); border-color: #8b5cf6; }
.nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(135deg, #6366f1, #d946ef); }

/* Header Section */
.nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
.nj-badge-pro { background: linear-gradient(135deg, #6366f1, #d946ef); color: #fff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3); }
.nj-title-box { margin-left: 15px; }
.nj-title-pro { font-size: 19px; font-weight: 800; color: #1e293b; margin: 0 0 4px 0; line-height: 1.3; }
.nj-subtitle-pro { font-size: 13px; color: #8b5cf6; font-weight: 600; margin: 0; }

/* Buttons Section */
.nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 700; text-decoration: none !important; color: #fff !important; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.nj-btn-pro i { font-size: 18px; margin-bottom: 5px; }
.nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); box-shadow: 0 5px 10px rgba(0,0,0,0.2); }

/* Updated Button Colors for English */
.btn-book-pro { background: linear-gradient(135deg, #10b981, #047857); } /* Emerald Green */
.btn-video-pro { background: linear-gradient(135deg, #ef4444, #b91c1c); } /* Red */
.btn-samjuti-pro { background: linear-gradient(135deg, #3b82f6, #1d4ed8); } /* Blue */
.btn-mcq-pro { background: linear-gradient(135deg, #8b5cf6, #6d28d9); } /* Purple */

@media (max-width: 480px) {
    .nj-card-pro { padding: 15px; }
    .nj-btn-pro { font-size: 11px; padding: 8px 2px; }
    .nj-title-pro { font-size: 17px; }
}
</style>

<div class="nj-premium-board">
  <h2 style="text-align:center; margin-bottom:15px; color:#1e293b; font-weight:800; font-size: 24px;">
    ધોરણ 9 અંગ્રેજી (English)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #f59e0b, #ea580c); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">Cheetah's Tears</h3><p class="nj-subtitle-pro">ચિત્તાના આંસુ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch1.pdf', 'અંગ્રેજી - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">Dental Health</h3><p class="nj-subtitle-pro">દાંતનું સ્વાસ્થ્ય</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch2.pdf', 'અંગ્રેજી - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">Mohan and his Veena</h3><p class="nj-subtitle-pro">મોહન અને તેની વીણા</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch3.pdf', 'અંગ્રેજી - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">Call of the Hills</h3><p class="nj-subtitle-pro">ટેકરીઓનો સાદ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch4.pdf', 'અંગ્રેજી - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">Rani Ki Vav</h3><p class="nj-subtitle-pro">રાણીની વાવ</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch5.pdf', 'અંગ્રેજી - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">The Night Train at Deoli</h3><p class="nj-subtitle-pro">દેવલીની રાત્રિ ટ્રેન</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch6.pdf', 'અંગ્રેજી - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">Adolescents Speak</h3><p class="nj-subtitle-pro">તરુણોની વાત (તરુણો બોલે છે)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch7.pdf', 'અંગ્રેજી - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">A Day in the Life of an Indian Fighter Pilot</h3><p class="nj-subtitle-pro">ફાઈટર પાયલટનો એક દિવસ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch8.pdf', 'અંગ્રેજી - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">Friend from the Sky</h3><p class="nj-subtitle-pro">આકાશમાંથી આવેલો મિત્ર</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch9.pdf', 'અંગ્રેજી - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">Ecology for Peace</h3><p class="nj-subtitle-pro">શાંતિ માટે પર્યાવરણ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch10.pdf', 'અંગ્રેજી - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">Valley of Flowers</h3><p class="nj-subtitle-pro">ફૂલોની ખીણ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch11.pdf', 'અંગ્રેજી - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #ec4899, #be185d);">12</div>
          <div class="nj-title-box">
              <h3 class="nj-title-pro">Poems (All)</h3>
              <p class="nj-subtitle-pro" style="color: #be185d;">તમામ કવિતાઓ (એકસાથે)</p>
          </div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Eng_Ch12.pdf', 'અંગ્રેજી - તમામ કવિતાઓ')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
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
