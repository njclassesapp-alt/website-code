window.loadStd10Dashboard = function() {
    return `
    <style>
      /* Std 10 Dashboard CSS */
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

      /* Subject Colors */
      .s-maths { background: linear-gradient(135deg, #ee0979, #ff6a00); }
      .s-sci { background: linear-gradient(135deg, #00b09b, #96c93d); }
      .s-eng { background: linear-gradient(135deg, #00c6ff, #0072ff); }
      .s-ss { background: linear-gradient(135deg, #8E2DE2, #4A00E0); }
      .s-guj { background: linear-gradient(135deg, #ff9966, #ff5e62); }
      .s-sans { background: linear-gradient(135deg, #f12711, #f5af19); }
      .s-hindi { background: linear-gradient(135deg, #ED213A, #93291E); } 

      @media (min-width: 768px) {
          .nj-grid { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (min-width: 1024px) {
          .nj-grid { grid-template-columns: repeat(4, 1fr) !important; }
      }
    </style>

    <div class="nj-dashboard">
      <h2 style="text-align:center; margin-bottom:20px; color:#1e293b; font-weight:800; font-size:20px;">ધોરણ 10 - વિષય પસંદ કરો</h2>
      <div class="nj-grid">

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 ગણિત', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Maths.js?v=25', 'loadStd10Maths')" class="nj-card s-maths">
          <div class="nj-icon">📐</div>
          <div class="nj-title">ગણિત</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 વિજ્ઞાન', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Science.js?v=25', 'loadStd10Science')" class="nj-card s-sci">
          <div class="nj-icon">🔬</div>
          <div class="nj-title">વિજ્ઞાન</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 સા. વિજ્ઞાન', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/SocialScience.js?v=25', 'loadStd10SocialScience')" class="nj-card s-ss">
          <div class="nj-icon">🌍</div>
          <div class="nj-title">સા. વિજ્ઞાન</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 અંગ્રેજી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Eng.js?v=25', 'loadStd10English')" class="nj-card s-eng">
          <div class="nj-icon">🔤</div>
          <div class="nj-title">અંગ્રેજી</div>
        </a>
        
        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 ગુજરાતી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Guj.js?v=25', 'loadStd10Gujarati')" class="nj-card s-guj">
          <div class="nj-icon">🖊️</div>
          <div class="nj-title">ગુજરાતી</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 સંસ્કૃત', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/San.js?v=25', 'loadStd10Sanskrit')" class="nj-card s-sans">
          <div class="nj-icon">📜</div>
          <div class="nj-title">સંસ્કૃત</div>
        </a>

        <a href="javascript:void(0);" onclick="openNjDynamicPage('ધોરણ 10 હિન્દી', 'https://cdn.jsdelivr.net/gh/njclassesapp-alt/website-code@main/Std10/Hindi.js?v=25', 'loadStd10Hindi')" class="nj-card s-hindi">
          <div class="nj-icon">📙</div>
          <div class="nj-title">હિન્દી</div>
        </a>

      </div>
    </div>
    `;
};
