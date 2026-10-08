<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std8/SocialScience/MCQ.js"></script>


<style>
.nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', 'Hind Vadodara', sans-serif; }
.nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

/* Main Card Design - SS Colors */
.nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e0e0e0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(139, 92, 246, 0.2); border-color: #8b5cf6; }
.nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: linear-gradient(135deg, #8b5cf6, #ec4899); }

/* Header Section */
.nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
.nj-badge-pro { background: linear-gradient(135deg, #8b5cf6, #ec4899); color: #fff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(236, 72, 153, 0.3); }
.nj-title-box { margin-left: 15px; }
.nj-title-pro { font-size: 18px; font-weight: 800; color: #4c1d95; margin: 0 0 4px 0; line-height: 1.3; }
.nj-subtitle-pro { font-size: 13px; color: #ec4899; font-weight: 600; margin: 0; }

/* Buttons Section */
.nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 700; text-decoration: none !important; color: #fff !important; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.nj-btn-pro i { font-size: 18px; margin-bottom: 5px; }
.nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); box-shadow: 0 5px 10px rgba(0,0,0,0.2); }

/* Vibrant Button Colors */
.btn-book-pro { background: linear-gradient(135deg, #10b981, #059669); } 
.btn-video-pro { background: linear-gradient(135deg, #f43f5e, #be123c); } 
.btn-samjuti-pro { background: linear-gradient(135deg, #f59e0b, #b45309); } 
.btn-mcq-pro { background: linear-gradient(135deg, #0ea5e9, #0284c7); } 

@media (max-width: 480px) {
    .nj-card-pro { padding: 15px; }
    .nj-btn-pro { font-size: 11px; padding: 8px 2px; }
    .nj-title-pro { font-size: 16px; }
}
</style>

<div class="nj-premium-board">
  <h2 style="text-align:center; margin-bottom:15px; color:#4c1d95; font-weight:800; font-size: 24px;">
    ધોરણ 8 સામાજિક વિજ્ઞાન (Social Science)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #6366f1, #a855f7); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતમાં યુરોપિયનો અને અંગ્રેજી શાસનની સ્થાપના</h3><p class="nj-subtitle-pro">Establishment of European and British Rule in India</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch1.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતમાં બ્રિટિશ શાસન</h3><p class="nj-subtitle-pro">British Rule in India</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch2.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
         <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
         <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
         <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનો પ્રથમ સ્વાતંત્ર્યસંગ્રામ</h3><p class="nj-subtitle-pro">First Freedom Struggle of India</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch3.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">અંગ્રેજ સમયનાં શહેરો, ગૃહઉદ્યોગો અને ઉદ્યોગો</h3><p class="nj-subtitle-pro">Cities, Home Industries and Industries during British Rule</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch4.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">અંગ્રેજ શાસન સમયની શિક્ષણ અને સમાજવ્યવસ્થા</h3><p class="nj-subtitle-pro">Education and Social System during British Rule</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch5.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">સ્વાતંત્ર્ય-ચળવળો</h3><p class="nj-subtitle-pro">Freedom Movements</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch6.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">આધુનિક ભારતમાં કલા</h3><p class="nj-subtitle-pro">Art in Modern India</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch7.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">સ્વતંત્રતા પછીનું ભારત</h3><p class="nj-subtitle-pro">India After Independence</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch8.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">સંસાધન</h3><p class="nj-subtitle-pro">Resources</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch9.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">ખનિજ અને ઊર્જા-સંસાધન</h3><p class="nj-subtitle-pro">Mineral and Energy Resources</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch10.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">ખેતી</h3><p class="nj-subtitle-pro">Agriculture</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch11.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">ઉદ્યોગ</h3><p class="nj-subtitle-pro">Industries</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch12.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">માનવ-સંસાધન</h3><p class="nj-subtitle-pro">Human Resources</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch13.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">14</div><div class="nj-title-box"><h3 class="nj-title-pro">આપત્તિ-વ્યવસ્થાપન</h3><p class="nj-subtitle-pro">Disaster Management</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch14.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 14')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">15</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતીય બંધારણ</h3><p class="nj-subtitle-pro">Indian Constitution</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch15.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 15')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(15)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">16</div><div class="nj-title-box"><h3 class="nj-title-pro">સંસદ અને કાયદો</h3><p class="nj-subtitle-pro">Parliament and Law</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch16.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 16')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(16)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">17</div><div class="nj-title-box"><h3 class="nj-title-pro">ન્યાયતંત્ર</h3><p class="nj-subtitle-pro">Judiciary</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch17.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 17')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="https://www.njclasses.in/search/label/Std%208%20S%20S%20Ch%2017" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(17)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">18</div><div class="nj-title-box"><h3 class="nj-title-pro">સામાજિક ન્યાય અને વિસંગતતા</h3><p class="nj-subtitle-pro">Social Justice and Marginalization</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch18.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 18')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(18)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">19</div><div class="nj-title-box"><h3 class="nj-title-pro">સામાજિક-આર્થિક ક્ષેત્રે સરકારની ભૂમિકા</h3><p class="nj-subtitle-pro">Role of Government in Socio-Economic Fields</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/Std8_SS_Ch19.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 19')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-book"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(19)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
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
