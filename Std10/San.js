function loadStd10Sanskrit() {
    
    // MCQ નો ડેટાબેઝ ઓટોમેટિક બેકગ્રાઉન્ડમાં લોડ કરવા માટેનો કોડ
    var mcqScript = document.createElement('script');
    mcqScript.src = "https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-data@main/std10-sanskrit-mcq.js?t=" + new Date().getTime();
    document.body.appendChild(mcqScript);

    // ખાલી બટનો અને કાર્ડ્સ ચેક કરીને હાઈડ કરવાનું લોજીક
    setTimeout(function() {
        var buttons = document.querySelectorAll('.nj-btn-pro');
        buttons.forEach(function(btn) {
            var href = btn.getAttribute('href');
            var onclick = btn.getAttribute('onclick');
            if (href === '#' || (href && href.trim() === '')) {
                btn.style.display = 'none';
            } else if (href === 'javascript:void(0);' && (!onclick || onclick.trim() === '')) {
                btn.style.display = 'none';
            }
        });
    }, 200);

    return `
    <style>
    /* --- Premium App UI For Std 10 Sanskrit --- */
    .nj-premium-board { max-width: 1200px; margin: 0 auto; padding: 20px 10px; font-family: 'Poppins', 'Hind Vadodara', sans-serif; }
    .nj-grid-pro { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

    /* Main Card Design */
    .nj-card-pro { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e0e0e0; transition: all 0.3s; position: relative; overflow: hidden; display: flex; flex-direction: column; }
    .nj-card-pro:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); border-color: #d84315; }
    .nj-card-pro::before { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(135deg, #ff5722, #d84315); }

    /* Header Section */
    .nj-header-pro { display: flex; align-items: center; margin-bottom: 20px; }
    .nj-badge-pro { background: linear-gradient(135deg, #ff5722, #d84315); color: #fff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(216, 67, 21, 0.3); }
    .nj-title-box { margin-left: 15px; }
    .nj-title-pro { font-size: 19px; font-weight: 800; color: #1e293b; margin: 0 0 4px 0; line-height: 1.3; }
    .nj-subtitle-pro { font-size: 13px; color: #e65100; font-weight: 600; margin: 0; }

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
        ધોરણ 10 સંસ્કૃત
      </h2>
      
      <div style="text-align: center; margin-bottom: 25px;">
        <button onclick="startNjQuiz('all')" style="background: linear-gradient(135deg, #11998e, #38ef7d); color: white; border: none; padding: 12px 25px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);">
            <i class="fa fa-play-circle" style="margin-right: 5px;"></i> આખા વિષયની મેગા ટેસ્ટ શરૂ કરો
        </button>
      </div>
      
      <div class="nj-grid-pro">
        
        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">1</div><div class="nj-title-box"><h3 class="nj-title-pro">सम्वदध्वम्</h3><p class="nj-subtitle-pro">સાથે મળીને બોલો</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch1.pdf', 'સંસ્કૃત - પ્રકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(1)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">2</div><div class="nj-title-box"><h3 class="nj-title-pro">यद्भविष्यो विनश्यति</h3><p class="nj-subtitle-pro">યદ્ભવિષ્યનો વિનાશ થાય છે</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch2.pdf', 'સંસ્કૃત - પ્રકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(2)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">3</div><div class="nj-title-box"><h3 class="nj-title-pro">स्वस्थवृत्तं समाचर</h3><p class="nj-subtitle-pro">સ્વસ્થ આચરણ કર</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch3.pdf', 'સંસ્કૃત - પ્રકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(3)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">4</div><div class="nj-title-box"><h3 class="nj-title-pro">जनार्दनस्य पश्चिमः सन्देशः</h3><p class="nj-subtitle-pro">શ્રીકૃષ્ણનો અંતિમ સંદેશ</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch4.pdf', 'સંસ્કૃત - પ્રકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(4)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">5</div><div class="nj-title-box"><h3 class="nj-title-pro">गुणवती कन्या</h3><p class="nj-subtitle-pro">ગુણવાન કન્યા</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch5.pdf', 'સંસ્કૃત - પ્રકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(5)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">6</div><div class="nj-title-box"><h3 class="nj-title-pro">काष्ठखण्डः</h3><p class="nj-subtitle-pro">લાકડાનો ટુકડો</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch6.pdf', 'સંસ્કૃત - પ્રકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(6)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">7</div><div class="nj-title-box"><h3 class="nj-title-pro">सुभाषितकुसुमानि</h3><p class="nj-subtitle-pro">સુભાષિત રૂપી પુષ્પો</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch7.pdf', 'સંસ્કૃત - પ્રકરણ 7')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(7)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

                <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">8</div><div class="nj-title-box"><h3 class="nj-title-pro">साक्षीभूतः मनुष्यः</h3><p class="nj-subtitle-pro">સાક્ષીરૂપ બનેલો માણસ</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch8.pdf', 'સંસ્કૃત - પ્રકરણ 8')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(8)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">9</div><div class="nj-title-box"><h3 class="nj-title-pro">चक्षुष्मान् अन्ध एव</h3><p class="nj-subtitle-pro">આંખોવાળો હોવા છતાં આંધળો જ છે</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch9.pdf', 'સંસ્કૃત - પ્રકરણ 9')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(9)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">10</div><div class="nj-title-box"><h3 class="nj-title-pro">त्वमेका भवानि</h3><p class="nj-subtitle-pro">હે ભવાની માતા! તું જ એકમાત્ર શરણું છે</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch10.pdf', 'સંસ્કૃત - પ્રકરણ 10')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(10)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">11</div><div class="nj-title-box"><h3 class="nj-title-pro">यस्य जननं तस्य मरणम्</h3><p class="nj-subtitle-pro">જેનો જન્મ છે તેનું મરણ નિશ્ચિત છે</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch11.pdf', 'સંસ્કૃત - પ્રકરણ 11')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(11)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">12</div><div class="nj-title-box"><h3 class="nj-title-pro">कलिकालसर्वज्ञो हेमचन्द्राचार्यः</h3><p class="nj-subtitle-pro">કલિકાલસર્વજ્ઞ હેમચંદ્રાચાર્ય</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch12.pdf', 'સંસ્કૃત - પ્રકરણ 12')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(12)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">13</div><div class="nj-title-box"><h3 class="nj-title-pro">गीतामृतम्</h3><p class="nj-subtitle-pro">ગીતારૂપી અમૃત</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch13.pdf', 'સંસ્કૃત - પ્રકરણ 13')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(13)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">14</div><div class="nj-title-box"><h3 class="nj-title-pro">क इदं दुष्करं कुर्यात्</h3><p class="nj-subtitle-pro">આ મુશ્કેલ કાર્ય કોણ કરે?</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch14.pdf', 'સંસ્કૃત - પ્રકરણ 14')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(14)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">15</div><div class="nj-title-box"><h3 class="nj-title-pro">जयः पराजयो वा</h3><p class="nj-subtitle-pro">જય છે કે પરાજય?</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch15.pdf', 'સંસ્કૃત - પ્રકરણ 15')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(15)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>
                <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">16</div><div class="nj-title-box"><h3 class="nj-title-pro">अद्भुतं युद्धम्</h3><p class="nj-subtitle-pro">અદ્ભુત યુદ્ધ</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch16.pdf', 'સંસ્કૃત - પ્રકરણ 16')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(16)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">17</div><div class="nj-title-box"><h3 class="nj-title-pro">स्वाभाविकं सादृश्यम्</h3><p class="nj-subtitle-pro">સ્વાભાવિક સરખાપણું</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch17.pdf', 'સંસ્કૃત - પ્રકરણ 17')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(17)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">18</div><div class="nj-title-box"><h3 class="nj-title-pro">मुक्तानि मुक्तकानि</h3><p class="nj-subtitle-pro">મુક્તકો</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch18.pdf', 'સંસ્કૃત - પ્રકરણ 18')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(18)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">19</div><div class="nj-title-box"><h3 class="nj-title-pro">सत्यं मयूरः</h3><p class="nj-subtitle-pro">સાચે જ મોર છે!</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch19.pdf', 'સંસ્કૃત - પ્રકરણ 19')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(19)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro">20</div><div class="nj-title-box"><h3 class="nj-title-pro">तथैव तिष्ठति</h3><p class="nj-subtitle-pro">તેમ જ રહે છે</p></div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-ch20.pdf', 'સંસ્કૃત - પ્રકરણ 20')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz(20)" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div style="grid-column: 1 / -1; margin-top: 20px; border-bottom: 2px dashed #ccc; padding-bottom: 10px;">
            <h2 style="text-align:center; color:#1e293b; font-weight:800; font-size: 22px; margin: 0;">
                વ્યાકરણ વિભાગ (અભ્યાસ ૧ થી ૬)
            </h2>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro" style="background: linear-gradient(135deg, #00897b, #004d40); box-shadow: 0 4px 10px rgba(0, 137, 123, 0.3);">અ૧</div>
              <div class="nj-title-box">
                  <h3 class="nj-title-pro">अभ्यासः १ - पुनरावर्तनम्</h3>
                  <p class="nj-subtitle-pro" style="color: #00695c;">અભ્યાસ ૧ - પુનરાવર્તન</p>
              </div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-G1.pdf', 'સંસ્કૃત - વ્યાકરણ 1')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz('Grammar_1')" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>
        
        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro" style="background: linear-gradient(135deg, #00897b, #004d40); box-shadow: 0 4px 10px rgba(0, 137, 123, 0.3);">અ૨</div>
              <div class="nj-title-box">
                  <h3 class="nj-title-pro">अभ्यासः २ - विशेषण-विशेष्य-परिचयः</h3>
                  <p class="nj-subtitle-pro" style="color: #00695c;">અભ્યાસ ૨ - વિશેષણ-વિશેષ્ય પરિચય</p>
              </div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-G2.pdf', 'સંસ્કૃત - વ્યાકરણ 2')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz('Grammar_2')" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro" style="background: linear-gradient(135deg, #00897b, #004d40); box-shadow: 0 4px 10px rgba(0, 137, 123, 0.3);">અ૩</div>
              <div class="nj-title-box">
                  <h3 class="nj-title-pro">अभ्यासः ३ - उपपद-विभक्ति-परिचयः</h3>
                  <p class="nj-subtitle-pro" style="color: #00695c;">અભ્યાસ ૩ - ઉપપદ-વિભક્તિ પરિચય</p>
              </div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-G3.pdf', 'સંસ્કૃત - વ્યાકરણ 3')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz('Grammar_3')" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro" style="background: linear-gradient(135deg, #00897b, #004d40); box-shadow: 0 4px 10px rgba(0, 137, 123, 0.3);">અ૪</div>
              <div class="nj-title-box">
                  <h3 class="nj-title-pro">अभ्यासः ४ - कृदन्त-परिचयः</h3>
                  <p class="nj-subtitle-pro" style="color: #00695c;">અભ્યાસ ૪ - કૃદંત પરિચય</p>
              </div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-G4.pdf', 'સંસ્કૃત - વ્યાકરણ 4')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz('Grammar_4')" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro" style="background: linear-gradient(135deg, #00897b, #004d40); box-shadow: 0 4px 10px rgba(0, 137, 123, 0.3);">અ૫</div>
              <div class="nj-title-box">
                  <h3 class="nj-title-pro">अभ्यासः ५ - समास-परिचयः</h3>
                  <p class="nj-subtitle-pro" style="color: #00695c;">અભ્યાસ ૫ - સમાસ પરિચય</p>
              </div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-G5.pdf', 'સંસ્કૃત - વ્યાકરણ 5')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz('Grammar_5')" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

        <div class="nj-card-pro">
          <div class="nj-header-pro">
              <div class="nj-badge-pro" style="background: linear-gradient(135deg, #00897b, #004d40); box-shadow: 0 4px 10px rgba(0, 137, 123, 0.3);">અ૬</div>
              <div class="nj-title-box">
                  <h3 class="nj-title-pro">अभ्यासः ६ - सन्धि-परिचयः</h3>
                  <p class="nj-subtitle-pro" style="color: #00695c;">અભ્યાસ ૬ - સંધિ પરિચય</p>
              </div>
          </div>
          <div class="nj-actions-pro">
              <a href="javascript:void(0);" onclick="openNjPdf('https://cdn.jsdelivr.net/gh/njclassesapp-alt/nj-classes-pdf-data@main/std-10-Sanskrit-G6.pdf', 'સંસ્કૃત - વ્યાકરણ 6')" class="nj-btn-pro btn-book-pro"><i class="fa fa-book"></i> પુસ્તક</a>
              <a href="#" class="nj-btn-pro btn-video-pro"><i class="fa fa-youtube-play"></i> વિડીયો</a>
              <a href="#" class="nj-btn-pro btn-samjuti-pro"><i class="fa fa-pencil-square-o"></i> સમજૂતી</a>
              <a href="javascript:void(0);" onclick="startNjQuiz('Grammar_6')" class="nj-btn-pro btn-mcq-pro"><i class="fa fa-check-circle"></i> MCQ</a>
          </div>
        </div>

      </div>
    </div>
    `;
}
