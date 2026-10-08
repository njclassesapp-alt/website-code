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
    ધોરણ 9 સામાજિક વિજ્ઞાન (Social Science)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતમાં બ્રિટિશ સત્તાનો ઉદય</h3><p class="nj-subtitle-pro">Rise of British Rule in India</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch1.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(1, 'ચેપ્ટર 1 - ભારતમાં બ્રિટિશ સત્તાનો ઉદય')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">પ્રથમ વિશ્વયુદ્ધ અને રશિયન ક્રાંતિ</h3><p class="nj-subtitle-pro">First World War and Russian Revolution</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch2.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(2, 'ચેપ્ટર 2 - પ્રથમ વિશ્વયુદ્ધ અને રશિયન ક્રાંતિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">નૂતન વિશ્વ તરફ પ્રયાણ</h3><p class="nj-subtitle-pro">Movement Towards a New World</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch3.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(3, 'ચેપ્ટર 3 - નૂતન વિશ્વ તરફ પ્રયાણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતની રાષ્ટ્રીય ચળવળો</h3><p class="nj-subtitle-pro">National Movements of India</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch4.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(4, 'ચેપ્ટર 4 - ભારતની રાષ્ટ્રીય ચળવળો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : આઝાદી તરફ પ્રયાણ</h3><p class="nj-subtitle-pro">India: Movement Towards Independence</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch5.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(5, 'ચેપ્ટર 5 - ભારત : આઝાદી તરફ પ્રયાણ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">1945 પછીનું વિશ્વ</h3><p class="nj-subtitle-pro">The World After 1945</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch6.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(6, 'ચેપ્ટર 6 - 1945 પછીનું વિશ્વ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">સ્વાતંત્ર્યોત્તર ભારત</h3><p class="nj-subtitle-pro">Post-Independence India</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch7.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(7, 'ચેપ્ટર 7 - સ્વાતંત્ર્યોત્તર ભારત')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતના રાજ્યબંધારણનું ઘડતર અને લક્ષણો</h3><p class="nj-subtitle-pro">Framing of Constitution and its Features</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch8.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(8, 'ચેપ્ટર 8 - ભારતના રાજ્યબંધારણનું ઘડતર અને લક્ષણો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">મૂળભૂત હકો, મૂળભૂત ફરજો અને માર્ગદર્શક સિદ્ધાંતો</h3><p class="nj-subtitle-pro">Fundamental Rights, Duties & Directive Principles</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch9.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(9, 'ચેપ્ટર 9 - મૂળભૂત હકો, મૂળભૂત ફરજો અને માર્ગદર્શક સિદ્ધાંતો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">સરકારના અંગો</h3><p class="nj-subtitle-pro">Organs of Government</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch10.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(10, 'ચેપ્ટર 10 - સરકારના અંગો')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતનું ન્યાયતંત્ર</h3><p class="nj-subtitle-pro">Indian Judiciary</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch11.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(11, 'ચેપ્ટર 11 - ભારતનું ન્યાયતંત્ર')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતીય લોકશાહી</h3><p class="nj-subtitle-pro">Indian Democracy</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch12.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(12, 'ચેપ્ટર 12 - ભારતીય લોકશાહી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : સ્થાન, ભૂસ્તરીય રચના અને ભૂપૃષ્ઠ - 1</h3><p class="nj-subtitle-pro">Location, Geological Structure and Physiography-I</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch13.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(13, 'ચેપ્ટર 13 - ભારત : સ્થાન, ભૂસ્તરીય રચના અને ભૂપૃષ્ઠ - 1')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">14</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : સ્થાન, ભૂસ્તરીય રચના અને ભૂપૃષ્ઠ - 2</h3><p class="nj-subtitle-pro">Location, Geological Structure and Physiography-II</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch14.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 14')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(14, 'ચેપ્ટર 14 - ભારત : સ્થાન, ભૂસ્તરીય રચના અને ભૂપૃષ્ઠ - 2')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">15</div><div class="nj-title-box"><h3 class="nj-title-pro">જળપરિવાહ</h3><p class="nj-subtitle-pro">Drainage System</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch15.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 15')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(15, 'ચેપ્ટર 15 - જળપરિવાહ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(15)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">16</div><div class="nj-title-box"><h3 class="nj-title-pro">આબોહવા</h3><p class="nj-subtitle-pro">Climate</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch16.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 16')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(16, 'ચેપ્ટર 16 - આબોહવા')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(16)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">17</div><div class="nj-title-box"><h3 class="nj-title-pro">કુદરતી વનસ્પતિ</h3><p class="nj-subtitle-pro">Natural Vegetation</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch17.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 17')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(17, 'ચેપ્ટર 17 - કુદરતી વનસ્પતિ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(17)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">18</div><div class="nj-title-box"><h3 class="nj-title-pro">વન્યજીવન</h3><p class="nj-subtitle-pro">Wildlife</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch18.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 18')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(18, 'ચેપ્ટર 18 - વન્યજીવન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(18)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">19</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારત : લોકજીવન</h3><p class="nj-subtitle-pro">India: Human Life</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch19.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 19')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(19, 'ચેપ્ટર 19 - ભારત : લોકજીવન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(19)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">20</div><div class="nj-title-box"><h3 class="nj-title-pro">આપત્તિ વ્યવસ્થાપન</h3><p class="nj-subtitle-pro">Disaster Management</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch20.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 20')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(20, 'ચેપ્ટર 20 - આપત્તિ વ્યવસ્થાપન')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(20)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">21</div><div class="nj-title-box"><h3 class="nj-title-pro">ભારતીય કૃષિનો ઈતિહાસ અને પ્રાકૃતિક ખેતી</h3><p class="nj-subtitle-pro">History of Indian Agriculture & Natural Farming</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch21.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 21')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(21, 'ચેપ્ટર 21 - ભારતીય કૃષિનો ઈતિહાસ અને પ્રાકૃતિક ખેતી')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(21)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">22</div><div class="nj-title-box"><h3 class="nj-title-pro">માર્ગ સલામતી : વાહનો અને માર્ગ</h3><p class="nj-subtitle-pro">Road Safety: Vehicles and Roads</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_SS_Ch22.pdf', 'સામાજિક વિજ્ઞાન - પ્રકરણ 22')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="javascript:void(0);" onclick="openNjSolutionApp(22, 'ચેપ્ટર 22 - માર્ગ સલામતી : વાહનો અને માર્ગ')" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(22)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

  </div> 
</div> 

<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/SocialScience/MCQ.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/SocialScience/Exercise.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/SocialScience/1Mark_Q.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/SocialScience/Blanks.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/SocialScience/Right-Wrong.js"></script>
<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-Paper-data@main/Std9/SocialScience/Jodaka.js"></script>

<script>
// ૨. ખાલી બટન્સ છુપાવવાની સ્ક્રિપ્ટ
document.addEventListener("DOMContentLoaded", function() {
    var allCards = document.querySelectorAll('.nj-card-pro');
    allCards.forEach(function(card) {
        var buttons = card.querySelectorAll('.nj-btn-pro');
        var activeLinksCount = 0;

        buttons.forEach(function(btn) {
            var href = btn.getAttribute('href');
            var onclick = btn.getAttribute('onclick');
            
            if((href === '#' || href === '') && !onclick) {
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

// ૩. સમજૂતી લિંકનું ભવિષ્ય માટેનું માળખું 
var std9SSTheoryLinks = {
    // ભવિષ્યમાં જ્યારે બ્લોગ પર લિંક મુકો ત્યારે અહીં ઉમેરી શકાશે, દા.ત:
    // 1: "https://njclasses.in/search/label/...",
};

function openStd9SSTheory() {
    var targetUrl = std9SSTheoryLinks[currentChapId];
    if (targetUrl) {
        window.location.assign(targetUrl); 
    } else {
        alert("આ ચેપ્ટરની સમજૂતી લિંક હજુ ઉમેરવામાં આવી નથી. ચેપ્ટર નંબર: " + currentChapId);
    }
}

// ૪. ડેટા કન્વર્ટ અને મેઈન થીમ સાથે લિંક કરવાનું લોજીક
function structureStd9SSData(flatArray) {
    let structured = {};
    flatArray.forEach(item => {
        let ch = item.chapter;
        if (!structured[ch]) { structured[ch] = { qa_list: [] }; }
        structured[ch].qa_list.push({ question: item.q, answer: item.ans, q: item.q, ans: item.ans });
    });
    return structured;
}

// સ્ક્રીનશોટ મુજબના સાચા વેરિયેબલ નામો 
function prepareStd9SSData() {
    // 1. સ્વાધ્યાય
    if (typeof ssExerciseDB_Std9 !== 'undefined') { window.njMathsExercise = structureStd9SSData(ssExerciseDB_Std9); }
    
    // 2. 1 માર્કના પ્રશ્નો
    if (typeof ssOneLineDB_Std9 !== 'undefined') { window.mathOneLineDB = ssOneLineDB_Std9; }
    
    // 3. ખાલી જગ્યા
    if (typeof ssFillInTheBlanksDB_Std9 !== 'undefined') { window.mathFillInTheBlanksDB = ssFillInTheBlanksDB_Std9; }
    
    // 4. ખરા-ખોટા
    if (typeof ssTrueFalseDB_Std9 !== 'undefined') { window.mathTrueFalseDB = ssTrueFalseDB_Std9; }
    
    // 5. જોડકાં
    if (typeof ssMatchDB_Std9 !== 'undefined') { window.mathMatchDB = ssMatchDB_Std9; }
    
    // 6. MCQ
    if (typeof Std9_SocialSci_MCQ !== 'undefined') { window.njQuestionsDatabase = Std9_SocialSci_MCQ; }
}

// ૫. બટન્સ સેટ કરવાની અને ડેટા લોડ કરવાની મુખ્ય સ્ક્રિપ્ટ
window.addEventListener('load', function() {
    
    if (typeof openNjCategory !== 'undefined') {
        var originalOpenNjCategory = openNjCategory;
        window.openNjCategory = function(catType, catName) {
            if (catType === 'theory') {
                openStd9SSTheory();
                return;
            }
            prepareStd9SSData();
            originalOpenNjCategory(catType, catName);
        };
    }

    var categoryView = document.getElementById('nj-sol-category-view');
    if(categoryView) {
        categoryView.innerHTML = `
            <div class='nj-cat-heading'>તમારે શું શીખવું છે?</div>
            
            <div class='nj-cat-card nj-bg-theory' onclick='openStd9SSTheory()' style='display:none;'>
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
    
    setTimeout(prepareStd9SSData, 500);
});
</script>
