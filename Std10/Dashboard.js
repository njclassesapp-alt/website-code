function loadStd10Dashboard() {
    return `
    <style>
      /*Std 10 Dashboard CSS */
    .nj-dashboard { max-width: 1200px; margin: 0 auto; padding: 10px; }
    .nj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; }
    .nj-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 25px 10px; border-radius: 15px; text-decoration: none !important; color: #fff !important; transition: transform 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.1); min-height: 120px; text-align: center; cursor: pointer; }
    .nj-card:hover { transform: translateY(-5px); }
    .nj-icon { font-size: 35px; margin-bottom: 10px; }
    .nj-title { font-size: 16px; font-weight: bold; font-family: sans-serif; }

    /* Subject Colors */
    .s-maths { background: linear-gradient(135deg, #ee0979, #ff6a00); }
    .s-sci { background: linear-gradient(135deg, #00b09b, #96c93d); }
    .s-eng { background: linear-gradient(135deg, #00c6ff, #0072ff); }
    .s-ss { background: linear-gradient(135deg, #8E2DE2, #4A00E0); }
    .s-guj { background: linear-gradient(135deg, #ff9966, #ff5e62); }
    .s-sans { background: linear-gradient(135deg, #f12711, #f5af19); }
    .s-hindi { background: linear-gradient(135deg, #ED213A, #93291E); } 
    .s-paper { background: linear-gradient(135deg, #fc4a1a, #f7b733); }
    </style>

    <div class="nj-dashboard">
      <h2 style="text-align:center; margin-bottom:20px; color:#1e293b; font-weight:800;">ધોરણ 10 - વિષય પસંદ કરો</h2>
      <div class="nj-grid">
<a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 ગણિત', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Maths.js', 'loadStd10Maths')" class="nj-card s-maths">
  <div class="nj-icon">📐</div>
  <div class="nj-title">ગણિત</div>
</a>


        <a href="/p/std-10-science-all-chapters.html" class="nj-card s-sci">
          <div class="nj-icon">🔬</div>
          <div class="nj-title">વિજ્ઞાન</div>
        </a>

        <a href="/p/std-10-social-science.html" class="nj-card s-ss">
          <div class="nj-icon">🌍</div>
          <div class="nj-title">સા. વિજ્ઞાન</div>
        </a>

                <!-- અંગ્રેજી માટે નવો ડાયનેમિક ફાસ્ટ કોડ -->
        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 અંગ્રેજી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Eng.js', 'loadStd10English')" class="nj-card s-eng">
          <div class="nj-icon">🔤</div>
          <div class="nj-title">અંગ્રેજી</div>
        </a>
        
        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 ગુજરાતી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Guj.js', 'loadStd10Gujarati')" class="nj-card s-guj">
  <div class="nj-icon">🖊️</div>
  <div class="nj-title">ગુજરાતી</div>
</a>

<a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 સંસ્કૃત', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/San.js', 'loadStd10Sanskrit')" class="nj-card s-sans">
  <div class="nj-icon">📜</div>
  <div class="nj-title">સંસ્કૃત</div>
</a>


        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 હિન્દી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Hindi.js', 'loadStd10Hindi')" class="nj-card s-hindi">
  <div class="nj-icon">📙</div>
  <div class="nj-title">હિન્દી</div>
</a>

        
      </div>
    </div>
    `;
}
