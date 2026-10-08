<script src="https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/Std9-Sanskrit-mcq.js"></script>

<style>
.nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', 'Hind Vadodara', sans-serif; }
.nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

/* Main Card Design - Sanskrit Special Theme */
.nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e0e0e0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); border-color: #c2410c; }
.nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(135deg, #c2410c, #7f1d1d); }

/* Header Section */
.nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
.nj-badge-pro { background: linear-gradient(135deg, #c2410c, #7f1d1d); color: #fff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(194, 65, 12, 0.3); }
.nj-title-box { margin-left: 15px; }
.nj-title-pro { font-size: 19px; font-weight: 800; color: #1e293b; margin: 0 0 4px 0; line-height: 1.3; }
.nj-subtitle-pro { font-size: 13px; color: #c2410c; font-weight: 600; margin: 0; }

/* Buttons Section */
.nj-actions-pro { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.nj-btn-pro { flex: 1; min-width: 65px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 4px; border-radius: 10px; font-size: 12px; font-weight: 700; text-decoration: none !important; color: #fff !important; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.nj-btn-pro i { font-size: 18px; margin-bottom: 5px; }
.nj-btn-pro:hover { transform: scale(1.05); filter: brightness(1.1); box-shadow: 0 5px 10px rgba(0,0,0,0.2); }

/* Button Colors */
.btn-book-pro { background: linear-gradient(135deg, #0f766e, #115e59); } /* Teal */
.btn-video-pro { background: linear-gradient(135deg, #dc2626, #991b1b); } /* Red */
.btn-samjuti-pro { background: linear-gradient(135deg, #0284c7, #0369a1); } /* Blue */
.btn-mcq-pro { background: linear-gradient(135deg, #7c3aed, #5b21b6); } /* Violet */

@media (max-width: 480px) {
    .nj-card-pro { padding: 15px; }
    .nj-btn-pro { font-size: 11px; padding: 8px 2px; }
    .nj-title-pro { font-size: 17px; }
}
</style>

<div class="nj-premium-board">
  <h2 style="text-align:center; margin-bottom:15px; color:#1e293b; font-weight:800; font-size: 24px;">
    ધોરણ 9 સંસ્કૃત (Sanskrit)
  </h2>
  
  <div style="text-align: center; margin-bottom: 25px;">
    <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #ea580c, #b91c1c); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);">
        <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
    </button>
  </div>
  
  <div class="nj-grid-pro">
    
    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">समर्चनम्</h3><p class="nj-subtitle-pro">સમર્ચનમ્ (પૂજન)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch1.pdf', 'સંસ્કૃત - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">कुलस्य आचारः</h3><p class="nj-subtitle-pro">કુળની પરંપરા</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch2.pdf', 'સંસ્કૃત - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">परं निधानम्</h3><p class="nj-subtitle-pro">શ્રેષ્ઠ ખજાનો</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch3.pdf', 'સંસ્કૃત - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">वलभी विद्यास्थानम्</h3><p class="nj-subtitle-pro">વલભી વિદ્યાસ્થાન</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch4.pdf', 'સંસ્કૃત - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">सुभाषितवैभवः</h3><p class="nj-subtitle-pro">સુભાષિતોનો વૈભવ</p></div>
      </div>
      <div class="nj-actions-pro">
         <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch5.pdf', 'સંસ્કૃત - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">सर्वं चारुतरं वसन्ते</h3><p class="nj-subtitle-pro">વસંતમાં બધું રળિયામણું હોય છે</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch6.pdf', 'સંસ્કૃત - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">संहतिः कार्यसाधिका</h3><p class="nj-subtitle-pro">સંગઠન કાર્ય સિદ્ધ કરનાર છે</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch7.pdf', 'સંસ્કૃત - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">काषायाणां कोऽपराधः</h3><p class="nj-subtitle-pro">ભગવાં વસ્ત્રોનો શો વાંક?</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch8.pdf', 'સંસ્કૃત - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">उपकारहतस्तु कर्तव्यः</h3><p class="nj-subtitle-pro">ઉપકારથી હણી નાખવો જોઈએ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch9.pdf', 'સંસ્કૃત - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">दौवारिकस्य सेवानिष्ठा</h3><p class="nj-subtitle-pro">દ્વારપાળની સેવાનિષ્ઠા</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch10.pdf', 'સંસ્કૃત - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">वेदितव्यानि मित्राणि</h3><p class="nj-subtitle-pro">મિત્રોને જાણવા જોઈએ</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch11.pdf', 'સંસ્કૃત - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">सुभाषित-सप्तकम्</h3><p class="nj-subtitle-pro">સુભાષિત સપ્તક</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch12.pdf', 'સંસ્કૃત - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">दिष्ट्या गोग्रहणं स्वन्तम्</h3><p class="nj-subtitle-pro">સદ્ભાગ્યે ગાયોનું હરણ સુખાંત થયું છે</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch13.pdf', 'સંસ્કૃત - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">14</div><div class="nj-title-box"><h3 class="nj-title-pro">हनुमद्वर्णितरामवृत्तान्तः</h3><p class="nj-subtitle-pro">હનુમાને વર્ણવેલો રામનો વૃત્તાંત</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch14.pdf', 'સંસ્કૃત - પ્રકરણ 14')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">15</div><div class="nj-title-box"><h3 class="nj-title-pro">सुदुर्लभा सर्वमनोरमा वाणी</h3><p class="nj-subtitle-pro">સૌના મનને ગમે તેવી વાણી દુર્લભ છે</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch15.pdf', 'સંસ્કૃત - પ્રકરણ 15')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(15)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">16</div><div class="nj-title-box"><h3 class="nj-title-pro">अजेयः स भविष्यति</h3><p class="nj-subtitle-pro">તે અજેય થશે</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch16.pdf', 'સંસ્કૃત - પ્રકરણ 16')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(16)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">17</div><div class="nj-title-box"><h3 class="nj-title-pro">आचार्यः चरकः</h3><p class="nj-subtitle-pro">આચાર્ય ચરક</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch17.pdf', 'સંસ્કૃત - પ્રકરણ 17')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(17)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">18</div><div class="nj-title-box"><h3 class="nj-title-pro">बिलस्य वाणी न कदापि मे श्रुता</h3><p class="nj-subtitle-pro">દરની વાણી મેં ક્યારેય સાંભળી નથી</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch18.pdf', 'સંસ્કૃત - પ્રકરણ 18')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(18)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">19</div><div class="nj-title-box"><h3 class="nj-title-pro">विनोदपद्यानि</h3><p class="nj-subtitle-pro">વિનોદપદ્યાનિ (રમુજી શ્લોકો)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch19.pdf', 'સંસ્કૃત - પ્રકરણ 19')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(19)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro">20</div><div class="nj-title-box"><h3 class="nj-title-pro">संस्कृतभाषायाः वैशिष्ट्यम्</h3><p class="nj-subtitle-pro">સંસ્કૃત ભાષાની વિશિષ્ટતા</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch20.pdf', 'સંસ્કૃત - પ્રકરણ 20')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(20)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <h2 style="grid-column: 1 / -1; text-align:center; margin: 30px 0 10px 0; color:#1e293b; font-weight:800; font-size: 22px; border-top: 2px dashed #cbd5e1; padding-top: 20px;">
      વ્યાકરણ વિભાગ (અભ્યાસ 1 થી 7)
    </h2>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">21</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 1</h3><p class="nj-subtitle-pro" style="color: #0f766e;">पुनरावर्तनम् (પુનરાવર્તન)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch21.pdf', 'સંસ્કૃત - અભ્યાસ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(21)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">22</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 2</h3><p class="nj-subtitle-pro" style="color: #0f766e;">कारक-विभक्ति (કારક અને વિભક્તિ)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch22.pdf', 'સંસ્કૃત - અભ્યાસ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(22)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">23</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 3</h3><p class="nj-subtitle-pro" style="color: #0f766e;">क्रियापदानि (ક્રિયાપદો)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch23.pdf', 'સંસ્કૃત - અભ્યાસ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(23)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">24</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 4</h3><p class="nj-subtitle-pro" style="color: #0f766e;">कृदन्तपदानि (કૃદંત પદો)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch24.pdf', 'સંસ્કૃત - અભ્યાસ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(24)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">25</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 5</h3><p class="nj-subtitle-pro" style="color: #0f766e;">समास-परिचय (સમાસ પરિચય)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch25.pdf', 'સંસ્કૃત - અભ્યાસ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(25)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">26</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 6</h3><p class="nj-subtitle-pro" style="color: #0f766e;">सन्धि (સંધિ)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch26.pdf', 'સંસ્કૃત - અભ્યાસ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(26)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
      </div>
    </div>

    <div class="nj-card-pro">
      <div class="nj-header-pro">
          <div class="nj-badge-pro" style="background: linear-gradient(135deg, #0f766e, #042f2e);">27</div>
          <div class="nj-title-box"><h3 class="nj-title-pro">अभ्यास 7</h3><p class="nj-subtitle-pro" style="color: #0f766e;">अव्ययपदानि (અવ્યય પદો)</p></div>
      </div>
      <div class="nj-actions-pro">
          <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std9_Sanskrit_Ch27.pdf', 'સંસ્કૃત - અભ્યાસ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
          <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
          <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
          <a href="javascript:void(0);" onclick="startNjQuiz(27)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
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
