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
const images = document.querySelectorAll('#tanc img');

    images.forEach(img => {

        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.5)'; 
        });

        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';  
        });
    });

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

