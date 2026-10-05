//etelek-hez
function calc() {
    let w = Number(document.getElementById("weight").value);

    // érvényesség ellenőrzése
    if (w <= 0 || isNaN(w)) {
        alert("Adj meg egy érvényes testsúlyt!");
        return;
    }

    // képlet: testsúly × 0,8 g
    let gyulai = (w * 0.8)/22;

    // eredmény kiírása üzenetablakban
    alert("Napi ajánlott gyulai kolbász mennyiség (ha más fehérjeforrást nem eszünk): " + gyulai.toFixed(1) + " rúd");
}

//nepi-hez
(() => {
    const images = document.querySelectorAll('#tanc img');
    if (!images.length) return;

    // Érintőképernyő és animációcsökkentés vizsgálata (Responsive & A11y best practice)
    const isHoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isHoverCapable || prefersReducedMotion) {
        return; // Mobilon és redukált mozgásnál meghagyja az optimális alapmegjelenést
    }

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.style.willChange = 'transform, box-shadow, filter';
        img.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.45s ease, filter 0.45s ease';

        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();

            // Kurzormozgás normalizálása (-0.5 és +0.5 között)
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            // Arányos, kíméletes dőlési szögek és dinamikus fény
            const rotX = (-y * 12).toFixed(2);
            const rotY = (x * 12).toFixed(2);

            img.style.transition = 'transform 0.08s ease-out, box-shadow 0.15s ease, filter 0.15s ease';
            img.style.transform = `perspective(850px) rotateX(\({rotX}deg) rotateY(\){rotY}deg) scale3d(1.05, 1.05, 1.05) translateY(-6px)`;
            img.style.boxShadow = `\({-x * 16}px\){-y * 16 + 14}px 28px rgba(56, 36, 27, 0.22)`;
            img.style.filter = 'brightness(1.03) contrast(1.02)';
            img.style.zIndex = '10';
        });

        img.addEventListener('mouseleave', () => {
            // Rugalmas, finom visszatérés nyugalmi állapotba
            img.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, filter 0.5s ease';
            img.style.transform = 'perspective(850px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0)';
            img.style.boxShadow = '0 6px 16px rgba(56, 36, 27, 0.08)';
            img.style.filter = 'brightness(1) contrast(1)';
            img.style.zIndex = '1';
        });
    });
})();

//kerdoivhez
document.getElementById("cultureForm").addEventListener("submit", function(e) {

    let score = 0;
    let isValid = true;

    // Hibák törlése
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");


    // 1. Nevezz meg egy híres magyar költőt
    const poet = document.getElementById("hungarianPoet").
    value.trim().toLowerCase();
    const validPoets = ["petőfi", "petofi", "arany", "józsef attila", "józsef", "ady"];
    if (poet === "") {
        document.getElementById("error-poet").textContent = "Kérlek adj meg egy költőt!";
        isValid = false;
    } else if (validPoets.some(p => poet.includes(p))) {
        score++;
    }

    // 2. Petőfi születési éve – 1823
    const petofiYear = Number(document.getElementById("birthPetofi").value);
    if (!petofiYear) {
        document.getElementById("error-petofi").textContent = "Add meg az évet!";
        isValid = false;
    } else if (petofiYear === 1823) {
        score++;
    }

    // 3. Nemzeti étel (csak a gulyás a jó)
    const food = document.querySelector('input[name="national_food"]:checked').value;
    if (food === "Gulyás") score++;

    // 4. Magyar város (ha kiválasztott valamit → pontot kap)
    const city = document.getElementById("hungarianCity").value;
    if (city === "Debrecen") {
        score++;
    } else {
        document.getElementById("error-city").textContent = "Válassz egy várost!";
        isValid = false;
    }

    // 5. Checkbox – Ha olvasott → +1 pont
    const pushed = document.getElementById("pushed").checked;
    const pushed2 = document.getElementById("pushed2").checked;
    if (pushed) score++;
    if (pushed2) score++;


    // 6. Történelmi esemény – kötelező mező
    const eventText = document.getElementById("favouriteHungarian").value.trim();
    if (eventText === "") {
        document.getElementById("error-event").textContent = "Írd le a választ!";
        isValid = false;
    } else {
        score++;
    }

    // 7. Himnusz szerzője – Kölcsey Ferenc
    const himnusz = document.getElementById("himnuszAuthor").value.trim().toLowerCase();
    if (himnusz === "") {
        document.getElementById("error-himnusz").textContent = "Add meg a szerzőt!";
        isValid = false;
    } else if (himnusz.includes("kölcsey") || himnusz.includes("kolcsey")) {
        score++;
    }

    // Ha bármelyik mező hibás, NE küldje tovább
    if (!isValid) {
        e.preventDefault();
        alert("Kérlek javítsd a hibákat az űrlapban!");
        return;
    }

    // Pontszám kiírása (az elküldés előtt)
    alert("Eredményed: " + score + " / 8 pont");

});

