// script.js
function getRecommendation() {
    // Collect inputs
    const weather = document.getElementById('weather').value;
    const occasion = document.getElementById('occasion').value;

    // Recommendation logic
    let recommendedColors = [];
    let recommendedClothes = [];

    if (weather === "sunny") {
        if (occasion === "casual") {
            recommendedColors = ["white", "beige", "light blue", "pastel pink"];
            recommendedClothes = ["t-shirt", "shorts", "sunglasses", "cap"];
        } else if (occasion === "formal") {
            recommendedColors = ["navy blue", "charcoal gray", "cream"];
            recommendedClothes = ["suit", "dress shirt", "tie", "loafers"];
        } else if (occasion === "party") {
            recommendedColors = ["gold", "silver", "bright yellow"];
            recommendedClothes = ["sequin dress", "blazer", "heels", "statement jewelry"];
        }
    } else if (weather === "rainy") {
        if (occasion === "casual") {
            recommendedColors = ["dark green", "navy blue", "black"];
            recommendedClothes = ["hoodie", "jeans", "rain boots", "umbrella"];
        } else if (occasion === "formal") {
            recommendedColors = ["black", "gray", "deep purple"];
            recommendedClothes = ["overcoat", "dress pants", "oxford shoes"];
        } else if (occasion === "party") {
            recommendedColors = ["metallic silver", "emerald green", "burgundy"];
            recommendedClothes = ["velvet blazer", "cocktail dress", "ankle boots"];
        }
    } else if (weather === "cold") {
        if (occasion === "casual") {
            recommendedColors = ["brown", "olive green", "mustard yellow"];
            recommendedClothes = ["sweater", "jeans", "scarf", "beanie"];
        } else if (occasion === "formal") {
            recommendedColors = ["black", "navy blue", "dark gray"];
            recommendedClothes = ["wool coat", "dress shirt", "chinos", "dress shoes"];
        } else if (occasion === "party") {
            recommendedColors = ["red", "royal blue", "gold"];
            recommendedClothes = ["fur coat", "jumpsuit", "stilettos"];
        }
    }

    // Display recommendation
    const outputDiv = document.getElementById('output');
    if (recommendedColors.length > 0 && recommendedClothes.length > 0) {
        outputDiv.innerHTML = `
            <p><strong>Recommended Colors:</strong> ${recommendedColors.join(", ")}</p>
            <p><strong>Recommended Clothing:</strong> ${recommendedClothes.join(", ")}</p>
        `;
    } else {
        outputDiv.innerHTML = "No recommendation available.";
    }
}