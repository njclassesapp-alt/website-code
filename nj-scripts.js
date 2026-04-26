
(function captureNjReferral() {
    try {
        let urlParams = new URLSearchParams(window.location.search);
        let refUid = urlParams.get('ref');
        if(refUid) { localStorage.setItem("nj_referred_by_uid", refUid); }
    } catch(e) {}
})();

// 🌟 2. ડ્રેગેબલ માસ્ટર બટન લોજીક 🌟
document.addEventListener("DOMContentLoaded", function() {
    initNjDraggableFab();
    initNjTheme(); // ડાર્ક મોડ ચેક
    
    // બુકમાર્ક ચેક (જો બુકમાર્ક ન હોય તો હબમાં ઓપ્શન છુપાવો)
    let bms = JSON.parse(localStorage.getItem('nj_bookmarks'));
    let bmBtn = document.getElementById('nj-hub-bm-btn');
    if(bmBtn) {
        if(!bms) { bmBtn.style.opacity = '0.5'; }
        else if(bms.length === 0) { bmBtn.style.opacity = '0.5'; }
        else { bmBtn.style.opacity = '1'; }
    }
});

function initNjDraggableFab() {
    var fab = document.getElementById('nj-master-fab');
    if(!fab) return;
    var isDragging = false; var isMoved = false; var currentX, currentY;

    var savedPos = localStorage.getItem("nj_fab_pos");
    if(savedPos) {
        var pos = JSON.parse(savedPos);
        fab.style.setProperty('left', pos.x + 'px', 'important');
        fab.style.setProperty('top', pos.y + 'px', 'important');
        fab.style.setProperty('bottom', 'auto', 'important');
        fab.style.setProperty('right', 'auto', 'important');
    }

    fab.addEventListener("touchstart", dragStart, {passive: false});
    fab.addEventListener("mousedown", dragStart, false);
    document.addEventListener("touchmove", drag, {passive: false});
    document.addEventListener("touchend", dragEnd, false);
    document.addEventListener("mousemove", drag, {passive: false});
    document.addEventListener("mouseup", dragEnd, false);

    function dragStart(e) {
        if (e.target === fab) { isDragging = true; isMoved = false; }
        else if (fab.contains(e.target)) { isDragging = true; isMoved = false; }
        
        if(isDragging) {
            try { if (window.AndroidNative) { window.AndroidNative.setSwipeRefreshEnabled(false); } } catch(err) {}
            document.documentElement.style.overscrollBehavior = 'none';
            document.body.style.overscrollBehavior = 'none';
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault(); e.stopPropagation();
            isMoved = true;
            
            var clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
            var clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
            var w = window.innerWidth; var h = window.innerHeight; var btnSize = 50; 
            
            var newLeft = clientX - (btnSize / 2); var newTop = clientY - (btnSize / 2);
            newLeft = Math.max(0, Math.min(newLeft, w - btnSize));
            newTop = Math.max(0, Math.min(newTop, h - btnSize));

            fab.style.setProperty('left', newLeft + 'px', 'important');
            fab.style.setProperty('top', newTop + 'px', 'important');
            fab.style.setProperty('bottom', 'auto', 'important');
            fab.style.setProperty('right', 'auto', 'important');
            currentX = newLeft; currentY = newTop;
        }
    }

    function dragEnd(e) {
        if(isDragging) {
            isDragging = false;
            try { if (window.AndroidNative) { window.AndroidNative.setSwipeRefreshEnabled(true); } } catch(err) {}
            document.documentElement.style.overscrollBehavior = '';
            document.body.style.overscrollBehavior = '';
            if (isMoved) { localStorage.setItem("nj_fab_pos", JSON.stringify({x: currentX, y: currentY})); }
        }
    }

    fab.onclick = function(e) {
        if(isMoved) { e.preventDefault(); isMoved = false; return false; }
        document.getElementById('nj-hub-modal').style.display = 'flex';
    }
}

// 🌟 3. ડાર્ક મોડ લોજીક (માસ્ટર સ્વીચ સાથે) 🌟
var isNjDarkModeActive = false; // 🔥 ભવિષ્યમાં ડાર્ક મોડ ચાલુ કરવા આને true કરી દેજો 🔥

function setNjTheme(themeMode) {
    if(!isNjDarkModeActive) return; // જો false હશે તો કામ નહિ કરે
    localStorage.setItem('nj_preferred_theme', themeMode); 
    applyNjTheme(themeMode);
}

function applyNjTheme(themeMode) {
    if(!isNjDarkModeActive) return;
    var isDark = false;
    var optLight = document.getElementById('opt-light');
    var optDark = document.getElementById('opt-dark');
    var optSys = document.getElementById('opt-system');

    if(optLight) { optLight.classList.remove('active'); }
    if(optDark) { optDark.classList.remove('active'); }
    if(optSys) { optSys.classList.remove('active'); }
    
    if (themeMode === 'dark') {
        isDark = true; if(optDark) { optDark.classList.add('active'); }
    } else if (themeMode === 'light') {
        isDark = false; if(optLight) { optLight.classList.add('active'); }
    } else if (themeMode === 'system') {
        if (window.matchMedia) { if (window.matchMedia('(prefers-color-scheme: dark)').matches) { isDark = true; } }
        if(optSys) { optSys.classList.add('active'); }
    }

    if (isDark) { document.body.classList.add('nj-dark-mode'); } 
    else { document.body.classList.remove('nj-dark-mode'); }
}

function initNjTheme() {
    var themeBox = document.getElementById('nj-theme-controls');
    
    // જો સ્વીચ બંધ (false) હશે, તો બટન છુપાવી દેશે અને ડાર્ક મોડ હટાવી દેશે
    if(!isNjDarkModeActive) {
        if(themeBox) themeBox.style.display = 'none'; 
        document.body.classList.remove('nj-dark-mode'); 
        return;
    } else {
        if(themeBox) themeBox.style.display = 'flex'; // ચાલુ હશે તો બટન દેખાડશે
    }

    var savedTheme = localStorage.getItem('nj_preferred_theme');
    if(!savedTheme) { savedTheme = 'system'; }
    applyNjTheme(savedTheme);
}

// 🌟 4. ફાયરબેઝ સેટઅપ અને ગેમિફિકેશન 🌟
const firebaseConfig = {
  apiKey: "AIzaSyAfo1NcaXiqlCO2zjDBQ_RYnSST-7owi5k",
  authDomain: "nj-classes-33fcf.firebaseapp.com",
  databaseURL: "https://nj-classes-33fcf-default-rtdb.firebaseio.com",
  projectId: "nj-classes-33fcf",
  storageBucket: "nj-classes-33fcf.firebasestorage.app",
  messagingSenderId: "628163619459",
  appId: "1:628163619459:web:6a0ea70af99629b61f49b6"
};

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const auth = firebase.auth(); const db = firebase.database(); const googleProvider = new firebase.auth.GoogleAuthProvider();

let currentUser = null; let userData = null; let currentMonthStr = new Date().toISOString().slice(0, 7); 

const njAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playNjCoinSound() {
    try {
        if(njAudioCtx.state === 'suspended') { njAudioCtx.resume(); }
        const osc = njAudioCtx.createOscillator(); const gain = njAudioCtx.createGain();
        osc.connect(gain); gain.connect(njAudioCtx.destination);
        osc.type = 'sine'; osc.frequency.setValueAtTime(1200, njAudioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(2000, njAudioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0, njAudioCtx.currentTime); gain.gain.linearRampToValueAtTime(0.3, njAudioCtx.currentTime + 0.05); gain.gain.exponentialRampToValueAtTime(0.01, njAudioCtx.currentTime + 0.5);
        osc.start(njAudioCtx.currentTime); osc.stop(njAudioCtx.currentTime + 0.5);
    } catch(e) {}
}

function showNjCoinAnimation(points) {
    playNjCoinSound();
    let btn = document.getElementById('nj-master-fab'); if(!btn) return;
    let rect = btn.getBoundingClientRect();
    let anim = document.createElement('div'); anim.className = 'nj-coin-anim';
    anim.innerHTML = '+' + points + ' <i class="fa fa-star"></i>';
    anim.style.left = (rect.left + 10) + 'px'; anim.style.top = (rect.top - 10) + 'px';
    document.body.appendChild(anim); 
    setTimeout(function() { if(anim.parentNode) anim.parentNode.removeChild(anim); }, 1600);
}

// લોગીન / સાઇનઅપ
function openNjLogin() {
    document.getElementById('nj-hub-modal').style.display = 'none';
    document.getElementById('nj-leaderboard-modal').style.display = 'none';
    document.getElementById('nj-login-prompt-modal').style.display = 'flex';
}

function toggleNjForms(type) {
    if(type === 'login') { document.getElementById('nj-signup-box').style.display='none'; document.getElementById('nj-login-box').style.display='block'; }
    else { document.getElementById('nj-signup-box').style.display='block'; document.getElementById('nj-login-box').style.display='none'; }
}
function togglePwdView(id) {
    let x = document.getElementById(id);
    if (x.type === "password") { x.type = "text"; } else { x.type = "password"; }
}

function njForgotPwd() {
    let e = document.getElementById('nj-log-email').value.trim();
    if(e === '') {
        alert("કૃપા કરીને પહેલા ઉપરના ખાનામાં તમારું ઈમેલ એડ્રેસ લખો!");
        return;
    }
    auth.sendPasswordResetEmail(e).then(function() {
        alert("પાસવર્ડ રિસેટ કરવાની લિંક તમારા ઈમેલ પર મોકલવામાં આવી છે.");
    }).catch(function(error) {
        alert("ભૂલ: " + error.message);
    });
}

function njEmailSignUp() {
    let n = document.getElementById('nj-reg-name').value.trim(); let e = document.getElementById('nj-reg-email').value.trim(); let p = document.getElementById('nj-reg-pwd').value.trim();
    if(n === '' || e === '' || p === '') { alert("માહિતી ભરો!"); return; }
    localStorage.setItem("nj_temp_name", n);
    let phoneNo = document.getElementById('nj-reg-phone').value.trim();
localStorage.setItem("nj_temp_phone", phoneNo);

    auth.createUserWithEmailAndPassword(e, p).then(function(cred) {
        let defaultPhoto = "https://ui-avatars.com/api/?name=" + encodeURIComponent(n) + "&background=0288d1&color=fff&bold=true";
        cred.user.updateProfile({ displayName: n, photoURL: defaultPhoto });
    }).catch(function(err) { alert("ભૂલ: " + err.message); });
}

function njEmailLogin() {
    let e = document.getElementById('nj-log-email').value.trim(); let p = document.getElementById('nj-log-pwd').value.trim();
    if(e === '' || p === '') return;
    auth.signInWithEmailAndPassword(e, p).catch(function(err) { alert("ઇમેઇલ કે પાસવર્ડ ખોટો છે!"); });
}

function njGoogleSignIn() { auth.signInWithPopup(googleProvider).catch(function(err) { alert("Google લોગીન ભૂલ: " + err.message); }); }

auth.onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user; fetchNjUserData();
        document.getElementById('nj-login-prompt-modal').style.display = 'none';
        document.getElementById('nj-hub-logged-out').style.display = 'none';
        document.getElementById('nj-hub-logged-in').style.display = 'block';
        setInterval(function() { addNjPoints(5); }, 300000); 
    } else {
        currentUser = null; userData = null;
        document.getElementById('nj-my-points').innerText = "Menu";
        document.getElementById('nj-my-photo').src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_eg3TGt0lPnuvFtqvbZA7j1AK8XANEzK3WOgvX_R9jOjp3CnBlbH0xYglEGP694Cl6-fN7BnWg1pBz-re-Qbc9KYRxyebHSpWo277yixWTQ2jp9wiYQpyJKyFq4H313V4XHKmBtODTnZ2F936SXyvKNQ3ZCy1G2j-OOx5T1p4M_QNwgFT7_ZMoFlq7Im9/s320/1000564451.jpg";
        
        // Hub માં ગેસ્ટ ડેટા
        document.getElementById('nj-hub-name').innerText = "Guest User";
        document.getElementById('nj-hub-points').innerText = "Login to play!";
        document.getElementById('nj-hub-photo').src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_eg3TGt0lPnuvFtqvbZA7j1AK8XANEzK3WOgvX_R9jOjp3CnBlbH0xYglEGP694Cl6-fN7BnWg1pBz-re-Qbc9KYRxyebHSpWo277yixWTQ2jp9wiYQpyJKyFq4H313V4XHKmBtODTnZ2F936SXyvKNQ3ZCy1G2j-OOx5T1p4M_QNwgFT7_ZMoFlq7Im9/s320/1000564451.jpg";
        
        document.getElementById('nj-hub-logged-out').style.display = 'block';
        document.getElementById('nj-hub-logged-in').style.display = 'none';
    }
});

function njSignOut() { if(confirm("લૉગ-આઉટ કરવા માંગો છો?")) { auth.signOut(); document.getElementById('nj-hub-modal').style.display = 'none'; } }

// 🌟 5. પબ્લિક લીડરબોર્ડ (Guest પણ જોઈ શકશે) 🌟
function openNjLeaderboard() {
    document.getElementById('nj-hub-modal').style.display = 'none';
    document.getElementById('nj-leaderboard-modal').style.display = 'flex';
    try { if (window.AndroidNative) window.AndroidNative.setSwipeRefreshEnabled(false); } catch(e) {}
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';

    // ડેટા લોડ કરવાનું ફંક્શન બોલાવો
    loadLeaderboardData(); 
}

function loadLeaderboardData() {
    let listArea = document.getElementById('nj-lb-list-area');
    if (listArea) {
        listArea.innerHTML = '<div style="text-align:center; padding:30px;"><i class="fa fa-spinner fa-spin" style="font-size:30px; color:#0288d1;"></i></div>';
    }

    // એરર ન આવે તે માટે સેફ્ટી ચેક (જો ફિલ્ટર ન મળે તો ડિફોલ્ટ points30 લેશે)
    let filterElem = document.getElementById('nj-lb-filter');
    let filterValue = filterElem ? filterElem.value : 'points30'; 

    // ડેટાબેઝમાંથી બધા જ યુઝર્સનો ડેટા લાવો
    db.ref('users').once('value', function(snapshot) {
        let players = [];
        snapshot.forEach(function(child) {
            let p = child.val();
            
            // ફિલ્ટર મુજબ પોઇન્ટ લો, જો ન હોય તો જૂના 'points' લો, નહીંતર 0
            let score = p[filterValue];
            if (score === undefined || score === null) {
                score = p.points || 0; 
            }

            // કોઈપણ યુઝર હોય, ઓછામાં ઓછા 10 પોઇન્ટ તો આપવાના જ છે
            if (score < 10) {
                score = 10;
            }

            p.uid = child.key;
            p.displayScore = score;
            players.push(p);
        });

        // સોર્ટિંગ લોજિક: વધારે પોઇન્ટ વાળાને સૌથી ઉપર ગોઠવો (Descending Order)
        players.sort(function(a, b) { 
            return b.displayScore - a.displayScore; 
        });

        let html = '';
        let myRank = "N/A";

        players.forEach(function(p, i) {
            let rank = i + 1;
            let isMe = false;

            // જો પોતે લોગીન હોય તો પોતાનો રેન્ક હાઈલાઈટ કરવા
            if(typeof currentUser !== 'undefined' && currentUser !== null && p.uid === currentUser.uid) {
                isMe = true;
                myRank = rank;
            }

            let rankHtml = '<span style="color:#64748b; font-size:16px; font-weight:bold;">' + rank + '</span>';
            if(rank === 1) rankHtml = '<span style="color:#fbbf24; font-size:20px;">1 🏆</span>';
            else if(rank === 2) rankHtml = '<span style="color:#94a3b8; font-size:18px;">2 🥈</span>';
            else if(rank === 3) rankHtml = '<span style="color:#d97706; font-size:18px;">3 🥉</span>';

            let activeClass = isMe ? 'me' : '';
            if(rank <= 3) activeClass += ' top-ranker';

            let photoUrl = p.photo ? p.photo : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY3x-9wR7_T-2-J3_3O6947Q8/s1600/default-avatar.png';
            let userName = p.name ? p.name : 'વિદ્યાર્થી';

            html += '<div class="nj-lb-item ' + activeClass + '"><div class="nj-lb-rank">' + rankHtml + '</div><img src="' + photoUrl + '" class="nj-lb-photo" alt="User" loading="lazy" /><div class="nj-lb-details"><div class="nj-lb-name">' + userName + '</div><div class="nj-lb-score"><i class="fa fa-star" style="color:#fbbf24;"></i> ' + p.displayScore + ' Pts</div></div></div>';
        });

        if(html === '') {
            html = '<div style="text-align:center; color:#64748b; padding:20px;">હજુ સુધી કોઈ વિદ્યાર્થી નથી!</div>';
        }
        
        if (listArea) {
            listArea.innerHTML = html;
        }

        let actionDiv = document.getElementById('nj-lb-auth-action');
        if (actionDiv) {
            if(typeof currentUser !== 'undefined' && currentUser !== null) {
                window.myCurrentRank = myRank;
                actionDiv.innerHTML = '<button class="nj-btn-primary share-highlight-btn" style="background:linear-gradient(135deg, #25D366, #128C7E); margin-top:5px;" onclick="shareNjLeaderboard()"><i class="fa fa-whatsapp"></i> મિત્રોને જોડો (+100 પોઈન્ટ્સ)</button>';
            } else {
                actionDiv.innerHTML = '<div style="text-align:center; padding:15px; background:#e0f2fe; border-radius:16px; border:1px solid #bae6fd;"><p style="margin:0 0 10px 0; font-size:13px; font-weight:700; color:#0288d1;">શું તમે પણ આ લિસ્ટમાં આવવા માંગો છો?</p><button class="nj-btn-primary" style="margin:0;" onclick="openNjLogin()">અત્યારે જ લોગીન કરો!</button></div>';
            }
        }
    });
}

function closeNjLeaderboard() {
    document.getElementById('nj-leaderboard-modal').style.display = 'none';
    
    // લીડરબોર્ડ બંધ થાય ત્યારે રિફ્રેશ પાછું ચાલુ કરવા
    try {
        if (window.AndroidNative && window.AndroidNative.setSwipeRefreshEnabled) {
            window.AndroidNative.setSwipeRefreshEnabled(true);
        }
    } catch(e) {}
    document.documentElement.style.overscrollBehavior = '';
    document.body.style.overscrollBehavior = '';
}

function shareNjLeaderboard() {
    if (!currentUser) return;
    
    let shareLink = "https://njclasses.in/?ref=" + currentUser.uid; 
    let shareText = "NJ Classes માં જોડાવો અને શીખો! લીડરબોર્ડમાં મારી સાથે જોડાવા આ લિંક પરથી એપ ખોલીને લોગીન કરો: " + shareLink;

    // પહેલાં ડાયરેક્ટ શેર કરવાનો પ્રયત્ન કરશે
    if (navigator.share) {
        navigator.share({
            title: 'NJ Classes - Join Me',
            text: shareText
        }).then(() => {
            console.log('Successful share');
        }).catch((error) => {
            console.log('Error sharing', error);
            // જો શેર કરવામાં કોઈ એરર આવે તો લિંક કોપી કરાવશે
            copyNjLinkToClipboard(shareLink);
        });
    } else {
        // જો ફોનમાં શેર ઓપ્શન સપોર્ટ ન કરતું હોય, તો સીધી લિંક કોપી થઈ જશે
        copyNjLinkToClipboard(shareLink);
    }
}

// લિંક ઓટોમેટિક કોપી કરવા માટેનું નવું ફંક્શન
function copyNjLinkToClipboard(link) {
    let tempInput = document.createElement("input");
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // મોબાઈલ માટે

    try {
        // લિંક કોપી કરવાનો કમાન્ડ
        document.execCommand("copy");
        alert("✅ તમારી લિંક કોપી થઈ ગઈ છે!\n\nહવે તમે WhatsApp કે અન્ય એપ ખોલીને આ લિંક પેસ્ટ (Paste) કરીને તમારા મિત્રોને મોકલી શકો છો.");
    } catch (err) {
        // જો કોઈ કારણસર ઓટોમેટિક કોપી ન થાય, તો આ બોક્સ આવશે જેમાંથી યુઝર કોપી કરી શકશે
        prompt("કૃપા કરીને નીચેની લિંક કોપી કરો:", link);
    }

    document.body.removeChild(tempInput);
}


// જ્યારે પણ પેજ કે એપ ખુલે ત્યારે આ કોડ ચેક કરશે કે URL માં 'ref' છે કે નહીં
window.addEventListener('load', function() {
    let urlParams = new URLSearchParams(window.location.search);
    let refUid = urlParams.get('ref');
    if (refUid) {
        // જો લિંકમાં મિત્રનો કોડ હોય, તો તેને મોબાઈલમાં હંગામી સેવ કરી લો
        localStorage.setItem('nj_referral_code', refUid);
    }
});
function checkAndAwardReferralPoints() {
    let referrerUid = localStorage.getItem('nj_referral_code');
    
    // જો રેફરલ કોડ હોય, લોગીન થયેલું હોય અને યુઝર પોતે પોતાની જ લિંક ન વાપરી રહ્યો હોય:
    if (referrerUid && currentUser && referrerUid !== currentUser.uid) {
        
        // ચેક કરો કે આ યુઝર નવા છે? (પહેલા કોઈની લિંકથી જોડાયેલા નથી ને)
        db.ref('users/' + currentUser.uid + '/referredBy').once('value', function(snapshot) {
            if (!snapshot.exists()) {
                
                // 1. નવા યુઝરમાં સેવ કરો કે તેને કોણે ઇન્વાઇટ કર્યો (જેથી વારંવાર 100 પોઇન્ટ ન મળે)
                db.ref('users/' + currentUser.uid).update({ referredBy: referrerUid });
                
                // 2. જેણે લિંક મોકલી છે (Referrer) તેના ખાતામાં 100 પોઇન્ટ ઉમેરો
                let todayDate = new Date().toISOString().slice(0, 10);
                
                db.ref('users/' + referrerUid + '/dailyPoints/' + todayDate).once('value', function(ptsSnap) {
                    let currentDaily = ptsSnap.val() || 0;
                    // મિત્રના આજના પોઇન્ટ્સમાં 100 ઉમેરો
                    db.ref('users/' + referrerUid + '/dailyPoints').update({
                        [todayDate]: currentDaily + 100
                    });
                });
                
                // મિત્રના મેઈન પોઇન્ટ્સ પણ વધારો જેથી લીડરબોર્ડમાં તરત દેખાય
                db.ref('users/' + referrerUid + '/points').once('value', function(mainPtsSnap) {
                    let mainPts = mainPtsSnap.val() || 0;
                    db.ref('users/' + referrerUid).update({ points: mainPts + 100 });
                });

                // (વધારાનું) નવો મિત્ર જોડાયો તેને બોનસ 50 પોઇન્ટ આપવા હોય તો:
                addNjPoints(50);
                alert("મિત્રની લિંકથી જોડાવા બદલ 50 બોનસ પોઇન્ટ મળ્યા!");
            }
            // કામ પૂરું થયા પછી સેવ કરેલો કોડ કાઢી નાખો
            localStorage.removeItem('nj_referral_code');
        });
    } else {
        localStorage.removeItem('nj_referral_code'); // પોતાની જ લિંક હોય તો કોડ કાઢી નાખો
    }
}

function triggerBookmarks() {
    document.getElementById('nj-hub-modal').style.display = 'none';
    if(typeof openNjBookmarks === "function") { openNjBookmarks(); }
    else { alert("કોઈ મટિરિયલ સેવ કરેલું નથી!"); }
}

// 🌟 6. ડેટાબેઝ અને પ્રોફાઈલ સિંક 🌟
// ૧. નવું fetchNjUserData ફંક્શન
function fetchNjUserData() {
    if (!currentUser) return;
    
    // ડેટાબેઝમાંથી યુઝરનો ડેટા લાવો
    db.ref('users/' + currentUser.uid).once('value', function(snapshot) {
        if (snapshot.exists()) {
            userData = snapshot.val();
            
            // જો dailyPoints ન હોય તો ખાલી બનાવી દો જેથી એરર ન આવે
            if (!userData.dailyPoints) {
                userData.dailyPoints = {};
            }
            
            // ૧. એપ ખૂલે એટલે તરત બધા ટાઈમના પોઇન્ટ્સ ગણો
            calculateNjPoints();
            
            // ૨. ગણતરી કર્યા પછી ડેટાબેઝમાં અપડેટ કરો જેથી ક્યારેય ઝીરો ન થાય
            updateNjUserDB();
            
            // ૩. સ્ક્રીન પર પોઇન્ટ્સ બતાવો
            if (typeof updateNjProfileUI === "function") {
                updateNjProfileUI();
            }
            
            // ૪. રેફરલ લિંકથી 100 પોઇન્ટ આપવાનું ફંક્શન બોલાવો 
            if (typeof checkAndAwardReferralPoints === "function") {
                checkAndAwardReferralPoints();
            }

        } else {
            // જો સાવ નવો યુઝર હોય તો ડેટાબેઝમાં નવું એકાઉન્ટ બનાવો 
            userData = {
                name: currentUser.displayName || 'વિદ્યાર્થી',
                photo: currentUser.photoURL || '',
                points: 10, // નવા યુઝરને પણ ઓછામાં ઓછા 10 પોઇન્ટ તો આપવા જ
                dailyPoints: {}
            };
            calculateNjPoints();
            updateNjUserDB();
            
            if (typeof updateNjProfileUI === "function") {
                updateNjProfileUI();
            }
            if (typeof checkAndAwardReferralPoints === "function") {
                checkAndAwardReferralPoints();
            }
        }
    });
}

// ૨. નવું calculateNjPoints ફંક્શન (10 પોઇન્ટની શરત સાથે)
function calculateNjPoints() {
    if (!userData) return;
    if (!userData.dailyPoints) userData.dailyPoints = {};
    
    let now = new Date();
    let p30 = 0, p90 = 0, p365 = 0, pLife = 0;
    
    let d30 = new Date(now); d30.setDate(d30.getDate() - 30); let str30 = d30.toISOString().slice(0, 10);
    let d90 = new Date(now); d90.setDate(d90.getDate() - 90); let str90 = d90.toISOString().slice(0, 10);
    let d365 = new Date(now); d365.setDate(d365.getDate() - 365); let str365 = d365.toISOString().slice(0, 10);

    for (let date in userData.dailyPoints) {
        let pts = userData.dailyPoints[date];
        pLife += pts;
        if (date >= str30) p30 += pts;
        if (date >= str90) p90 += pts;
        if (date >= str365) p365 += pts;
    }
    
    // જો પોઇન્ટ 10 કરતા ઓછા હોય, તો ઓટોમેટિક 10 કરી દેશે (ક્યારેય ઝીરો નહીં થાય)
    if (p30 < 10) p30 = 10;
    if (p90 < 10) p90 = 10;
    if (p365 < 10) p365 = 10;
    if (pLife < 10) pLife = 10;
    
    userData.points30 = p30;
    userData.points90 = p90;
    userData.points365 = p365;
    userData.pointsLifetime = pLife;
    
    userData.points = p30; 
}

function addNjPoints(amount) {
    if (!currentUser || !userData) {
        return;
    }
    let today = new Date().toISOString().slice(0, 10);
    if (!userData.dailyPoints) userData.dailyPoints = {};
    userData.dailyPoints[today] = (userData.dailyPoints[today] || 0) + amount;

    // પોઇન્ટ્સ ફરી ગણો (છેલ્લા 30 દિવસના)
    let thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    let thirtyDaysAgoStr = thirtyDaysAgo.toISOString().slice(0, 10);
    let newTotal = 0;
    for (let date in userData.dailyPoints) {
        if (date >= thirtyDaysAgoStr) {
            newTotal += userData.dailyPoints[date];
        } else {
            delete userData.dailyPoints[date];
        }
    }
    
    // નવા પોઇન્ટ્સ સેવ કરો અને પ્રોફાઈલ અપડેટ કરો
    userData.points = newTotal;
    updateNjUserDB();
    updateNjProfileUI(); 

    setTimeout(function() {
        showNjCoinAnimation(amount);
    }, 500);
}



function updateNjUserDB() { db.ref('users/' + currentUser.uid).set(userData); }

function updateNjProfileUI() {
    if(!userData) { return; } 
    document.getElementById('nj-my-points').innerText = userData.points + " Pts"; 
    document.getElementById('nj-my-photo').src = userData.photo;
    
    document.getElementById('nj-hub-name').innerText = userData.name;
    document.getElementById('nj-hub-points').innerText = userData.points + " Points";
    document.getElementById('nj-hub-photo').src = userData.photo;
}

// 🌟 7. પ્રોફાઈલ એડિટ અને ફોટો કમ્પ્રેશન 🌟
function openNjEditProfile() {
    if(!userData) { return; }
    document.getElementById('nj-edit-name-input').value = userData.name;
    document.getElementById('nj-edit-phone').value = userData.phone || '';
document.getElementById('nj-edit-std').value = userData.std || '';

    document.getElementById('nj-edit-photo-preview').src = userData.photo;
    document.getElementById('nj-hub-modal').style.display = 'none';
    document.getElementById('nj-edit-profile-modal').style.display = 'flex';
}
function previewNjImage(event) {
    var reader = new FileReader(); reader.onload = function() { document.getElementById('nj-edit-photo-preview').src = reader.result; };
    if(event.target.files[0]) { reader.readAsDataURL(event.target.files[0]); }
}
function uploadNjPhotoAndSave() {
    var newName = document.getElementById('nj-edit-name-input').value.trim();
    if(newName === "") { alert("નામ લખવું જરૂરી છે!"); return; }
    var fileInput = document.getElementById('nj-profile-upload'); var file = fileInput.files[0]; var btn = document.getElementById('nj-save-profile-btn');
    
    if(file) {
        btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> સેવ થાય છે...';
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = new Image();
            img.onload = function() {
                var canvas = document.createElement('canvas'); var ctx = canvas.getContext('2d');
                var size = Math.min(img.width, img.height); var startX = (img.width - size) / 2; var startY = (img.height - size) / 2;
                canvas.width = 150; canvas.height = 150; ctx.drawImage(img, startX, startY, size, size, 0, 0, 150, 150);
                var compressedPhoto = canvas.toDataURL('image/jpeg', 0.7);
                saveNjProfileDataFinal(newName, compressedPhoto);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> સેવ થાય છે...'; saveNjProfileDataFinal(newName, userData.photo);
    }
}
function saveNjProfileDataFinal(name, photoUrl) {
    // નવા ખાનામાંથી નંબર અને ધોરણ લેવા માટે
    var newPhone = document.getElementById('nj-edit-phone').value.trim();
    var newStd = document.getElementById('nj-edit-std').value.trim();
    
    // ડેટાબેઝમાં સેવ કરવા માટે
    userData.name = name; 
    userData.photo = photoUrl; 
    userData.phone = newPhone; 
    userData.std = newStd; 
    updateNjUserDB();
    
    if(currentUser) { currentUser.updateProfile({ displayName: name, photoURL: photoUrl }); }
    updateNjProfileUI(); 
    document.getElementById('nj-edit-profile-modal').style.display = 'none';
    document.getElementById('nj-save-profile-btn').innerHTML = 'સેવ કરો';
}
