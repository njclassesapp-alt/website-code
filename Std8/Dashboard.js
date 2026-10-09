function loadStd8Dashboard() {
    return `
    <style>
      /* Std 8 Dashboard CSS */
    .nj-dashboard { max-width: 1200px; margin: 0 auto; padding: 10px; }
    .nj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; }
    .nj-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 25px 10px; border-radius: 15px; text-decoration: none !important; color: #fff !important; transition: transform 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.1); min-height: 120px; text-align: center; cursor: pointer; }
    .nj-card:hover { transform: translateY(-5px); }
    .nj-icon { font-size: 35px; margin-bottom: 10px; }
    .nj-title { font-size: 16px; font-weight: bold; font-family: sans-serif; }

    /* Std 8 New Attractive Subject Colors */
    .s8-maths { background: linear-gradient(135deg, #4776E6, #8E54E9); } /* Blue to Purple */
    .s8-sci { background: linear-gradient(135deg, #FDC830, #F37335); } /* Yellow to Orange */
    .s8-ss { background: linear-gradient(135deg, #11998e, #38ef7d); } /* Dark Green to Light Green */
    .s8-eng { background: linear-gradient(135deg, #fc6076, #ff9a44); } /* Rose Pink to Peach */
    .s8-guj { background: linear-gradient(135deg, #00B4DB, #0083B0); } /* Cyan to Deep Blue */
    .s8-sans { background: linear-gradient(135deg, #DA22FF, #9733EE); } /* Bright Magenta to Purple */
    .s8-hindi { background: linear-gradient(135deg, #FF416C, #FF4B2B); } /* Vibrant Red/Coral */
    </style>

    <div class="nj-dashboard">
      <h2 style="text-align:center; margin-bottom:20px; color:#1e293b; font-weight:800;">ધોરણ 8 - વિષય પસંદ કરો</h2>
      <div class="nj-grid">

        <a href="/p/solutions-direct-execution-link-1.html" class="nj-card s8-maths">
          <div class="nj-icon">📐</div>
          <div class="nj-title">ગણિત</div>
        </a>

        <a href="/p/solutions-direct-execution-link-1_01766963133.html" class="nj-card s8-sci">
          <div class="nj-icon">🔬</div>
          <div class="nj-title">વિજ્ઞાન</div>
        </a>

        <a href="/p/solutions-direct-execution-link-1_01018824711.html" class="nj-card s8-ss">
          <div class="nj-icon">🌍</div>
          <div class="nj-title">સા. વિજ્ઞાન</div>
        </a>

        <a href="/p/solutions-direct-execution-link-1_0364012271.html" class="nj-card s8-eng">
          <div class="nj-icon">🔤</div>
          <div class="nj-title">અંગ્રેજી</div>
        </a>
        
        <a href="/p/solutions-direct-execution-link-1_02133002647.html" class="nj-card s8-guj">
          <div class="nj-icon">🖊️</div>
          <div class="nj-title">ગુજરાતી </div>
        </a>

        <a href="/p/solutions-direct-execution-link-1_01296686258.html" class="nj-card s8-sans">
          <div class="nj-icon">📜</div>
          <div class="nj-title">સંસ્કૃત</div>
        </a>

        <a href="/p/solutions-direct-execution-link-1_01608381563.html" class="nj-card s8-hindi">
          <div class="nj-icon">📙</div>
          <div class="nj-title">હિન્દી</div>
        </a>
        
      </div>
    </div>
    `;
}
