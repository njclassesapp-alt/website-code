window.loadStd8Dashboard = function() {
    return `
    <style>
      /* Std 8 Dashboard CSS */
      .nj-dashboard { max-width: 1200px; margin: 0 auto; padding: 15px 10px 40px 10px; box-sizing: border-box; }
      .nj-grid { 
          display: grid !important; 
          grid-template-columns: repeat(2, 1fr) !important; /* મોબાઈલમાં એક લાઈનમાં બરાબર 2 કાર્ડ */
          gap: 15px !important; 
          box-sizing: border-box;
      }
      .nj-card { 
          display: flex !important; 
          flex-direction: column !important; 
          align-items: center !important; 
          justify-content: center !important; 
          padding: 22px 10px !important; 
          border-radius: 16px !important; 
          text-decoration: none !important; 
          color: #ffffff !important; 
          transition: transform 0.2s ease, box-shadow 0.2s ease !important; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important; 
          min-height: 120px !important; 
          text-align: center !important; 
          cursor: pointer !important; 
          box-sizing: border-box !important;
      }
      .nj-card:active { transform: scale(0.96); }
      .nj-icon { font-size: 36px; margin-bottom: 8px; line-height: 1; }
      .nj-title { font-size: 16px; font-weight: 700; font-family: 'Poppins', sans-serif; letter-spacing: 0.5px; }

      /* Std 8 New Attractive Subject Colors */
      .s8-maths { background: linear-gradient(135deg, #4776E6, #8E54E9); } /* Blue to Purple */
      .s8-sci { background: linear-gradient(135deg, #FDC830, #F37335); } /* Yellow to Orange */
      .s8-ss { background: linear-gradient(135deg, #11998e, #38ef7d); } /* Dark Green to Light Green */
      .s8-eng { background: linear-gradient(135deg, #fc6076, #ff9a44); } /* Rose Pink to Peach */
      .s8-guj { background: linear-gradient(135deg, #00B4DB, #0083B0); } /* Cyan to Deep Blue */
      .s8-sans { background: linear-gradient(135deg, #DA22FF, #9733EE); } /* Bright Magenta to Purple */
      .s8-hindi { background: linear-gradient(135deg, #FF416C, #FF4B2B); } /* Vibrant Red/Coral */

      @media (min-width: 768px) {
          .nj-grid { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (min-width: 1024px) {
          .nj-grid { grid-template-columns: repeat(4, 1fr) !important; }
      }
    </style>

    <div class="nj-dashboard">
      <h2 style="text-align:center; margin-bottom:20px; color:#1e293b; font-weight:800; font-size:20px;">ધોરણ 8 - વિષય પસંદ કરો</h2>
      <div class="nj-grid">

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 ગણિત', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/Maths.js?v=2', 'loadStd8Maths')" class="nj-card s8-maths">
          <div class="nj-icon">📐</div>
          <div class="nj-title">ગણિત</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 વિજ્ઞાન', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/Science.js?v=2', 'loadStd8Science')" class="nj-card s8-sci">
          <div class="nj-icon">🔬</div>
          <div class="nj-title">વિજ્ઞાન</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 સા. વિજ્ઞાન', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/SS.js?v=2', 'loadStd8SocialScience')" class="nj-card s8-ss">
          <div class="nj-icon">🌍</div>
          <div class="nj-title">સા. વિજ્ઞાન</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 અંગ્રેજી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/Eng.js?v=2', 'loadStd8English')" class="nj-card s8-eng">
          <div class="nj-icon">🔤</div>
          <div class="nj-title">અંગ્રેજી</div>
        </a>
        
        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 ગુજરાતી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/Guj.js?v=2', 'loadStd8Gujarati')" class="nj-card s8-guj">
          <div class="nj-icon">🖊️</div>
          <div class="nj-title">ગુજરાતી</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 સંસ્કૃત', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/San.js?v=2', 'loadStd8Sanskrit')" class="nj-card s8-sans">
          <div class="nj-icon">📜</div>
          <div class="nj-title">સંસ્કૃત</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 8 હિન્દી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std8/Hindi.js?v=2', 'loadStd8Hindi')" class="nj-card s8-hindi">
          <div class="nj-icon">📙</div>
          <div class="nj-title">હિન્દી</div>
        </a>

      </div>
    </div>
    `;
};
