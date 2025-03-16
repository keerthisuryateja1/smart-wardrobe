// script.js
function getRecommendation() {
    // Collect inputs
    const weather = document.getElementById('weather').value;
    const occasion = document.getElementById('occasion').value;

    // Recommendation logic
    let recommendation = "No recommendation available.";

    if (weather === "sunny") {
        switch (occasion) {
            case "casual":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: T-shirt, shorts, sneakers<br>
                    - Women: Sundress, sandals<br>
                    <strong>Colors:</strong> White, beige, light blue, pastel shades<br>
                    <strong>Avoid:</strong> Dark colors (absorb heat)<br>
                    <strong>Accessories:</strong> Sunglasses, cap, sunscreens
                `;
                break;

            case "formal":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Light suit, dress shirt, loafers<br>
                    - Women: Midi dress, heels<br>
                    <strong>Colors:</strong> Navy blue, cream, soft pink<br>
                    <strong>Avoid:</strong> Bright neon colors<br>
                    <strong>Accessories:</strong> Watch, minimal jewelry
                `;
                break;

            case "party":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Short-sleeve Hawaiian shirt, chinos, loafers<br>
                    - Women: Flowy skirt, crop top, wedges<br>
                    <strong>Colors:</strong> Bright yellow, gold, silver<br>
                    <strong>Avoid:</strong> Overly dark tones<br>
                    <strong>Accessories:</strong> Statement jewelry, clutch
                `;
                break;

            case "romantic":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Light linen shirt, chinos, loafers<br>
                    - Women: Floral dress, sandals<br>
                    <strong>Colors:</strong> Soft pastels, white, light pink<br>
                    <strong>Avoid:</strong> Dark colors (absorb heat)<br>
                    <strong>Accessories:</strong> Sun hat, delicate jewelry
                `;
                break;

            case "street":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Graphic tee, ripped jeans, sneakers<br>
                    - Women: Crop top, high-waisted shorts, sneakers<br>
                    <strong>Colors:</strong> Bright colors, bold patterns<br>
                    <strong>Avoid:</strong> Dark colors (absorb heat)<br>
                    <strong>Accessories:</strong> Sunglasses, cap
                `;
                break;

            case "traditional":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Light kurta, cotton pants, sandals<br>
                    - Women: Light saree, sandals<br>
                    <strong>Colors:</strong> Pastels, light colors<br>
                    <strong>Avoid:</strong> Dark colors (absorb heat)<br>
                    <strong>Accessories:</strong> Minimal jewelry, sunglasses
                `;
                break;

            case "adventure":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Cargo shorts, moisture-wicking shirt, hiking boots<br>
                    - Women: Athletic shorts, tank top, hiking boots<br>
                    <strong>Colors:</strong> Earth tones, khaki<br>
                    <strong>Avoid:</strong> Dark colors (absorb heat)<br>
                    <strong>Accessories:</strong> Hat, sunglasses, sunscreen
                `;
                break;

            case "fun":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Bright t-shirt, shorts, sneakers<br>
                    - Women: Colorful dress, sandals<br>
                    <strong>Colors:</strong> Bright colors, fun patterns<br>
                    <strong>Avoid:</strong> Dark colors (absorb heat)<br>
                    <strong>Accessories:</strong> Sunglasses, hat
                `;
                break;

            case "cinematic":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Stylish blazer, jeans, boots<br>
                    - Women: Flowy dress, boots<br>
                    <strong>Colors:</strong> Deep blues, maroons, dark greens<br>
                    <strong>Avoid:</strong> Neon colors<br>
                    <strong>Accessories:</strong> Sunglasses, hat
                `;
                break;

            default:
                recommendation = "No recommendation available.";
        }
    } else if (weather === "rainy") {
        switch (occasion) {
            case "casual":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Waterproof bomber jacket, hoodie, joggers, sneakers<br>
                    - Women: Waterproof jacket, hoodie, jeans, ankle boots<br>
                    <strong>Colors:</strong> Red, yellow, blue, or white (contrast with the rain)<br>
                    <strong>Avoid:</strong> Black, brown, or dark shades (blend into the background)<br>
                    <strong>Accessories:</strong> Clear umbrella, bucket hat
                `;
                break;

            case "formal":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Waterproof trench coat, dress shirt, dress pants, waterproof shoes<br>
                    - Women: Waterproof coat, dress, waterproof heels<br>
                    <strong>Colors:</strong> Dark colors, muted tones<br>
                    <strong>Avoid:</strong> Light colors (show water stains)<br>
                    <strong>Accessories:</strong> Umbrella, waterproof bag
                `;
                break;

            case "party":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Waterproof blazer, dress shirt, dress pants, waterproof shoes<br>
                    - Women: Waterproof dress, waterproof heels<br>
                    <strong>Colors:</strong> Bright colors, metallics<br>
                    <strong>Avoid:</strong> Dark colors (blend into the background)<br>
                    <strong>Accessories:</strong> Umbrella, waterproof clutch
                `;
                break;

            case "romantic":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: White or pastel kurta with a sleeveless jacket, denim & loafers<br>
                    - Women: Flowy dress, saree, or light-colored lehenga<br>
                    <strong>Colors:</strong> Soft pastels, white, baby blue (dreamy vibe)<br>
                    <strong>Avoid:</strong> Dark greys, browns (dull & lifeless)<br>
                    <strong>Accessories:</strong> Transparent poncho, floral umbrella
                `;
                break;

            case "street":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Oversized raincoat, ripped jeans, chunky sneakers<br>
                    - Women: Long trench coat, joggers, waterproof sneakers<br>
                    <strong>Colors:</strong> Neon, bright yellow, deep blue (pop against wet streets)<br>
                    <strong>Avoid:</strong> Black & navy (too plain in rainy lighting)<br>
                    <strong>Accessories:</strong> Waterproof sling bag, hoodie, cap
                `;
                break;

            case "traditional":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Kurta with Nehru jacket, dark jeans, waterproof loafers<br>
                    - Women: Saree, lehenga, or ethnic kurti with stylish jacket<br>
                    <strong>Colors:</strong> Bright reds, greens, golden tones (rich & eye-catching)<br>
                    <strong>Avoid:</strong> Dark greys, muted tones (lack contrast)<br>
                    <strong>Accessories:</strong> Ethnic earrings, waterproof sandals
                `;
                break;

            case "adventure":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Cargo pants, windbreaker, waterproof hiking boots<br>
                    - Women: Trekking leggings, rain jacket, sporty sneakers<br>
                    <strong>Colors:</strong> Earthy tones, deep greens, blues (blend with nature)<br>
                    <strong>Avoid:</strong> White & pastels (get dirty easily)<br>
                    <strong>Accessories:</strong> Backpack, rain hat, trekking pole
                `;
                break;

            case "fun":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Shorts, bright raincoat, funky sneakers<br>
                    - Women: Waterproof overalls, colorful rain boots<br>
                    <strong>Colors:</strong> Bright yellow, red, or orange (happy & lively)<br>
                    <strong>Avoid:</strong> Dull colors like brown & grey (boring vibes)<br>
                    <strong>Accessories:</strong> Colorful umbrella, rain boots
                `;
                break;

            case "cinematic":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Long coat, black turtleneck, high boots<br>
                    - Women: Flowy trench coat, knee-high boots, wet-hair look<br>
                    <strong>Colors:</strong> Deep blues, maroons, dark greens (dramatic effect)<br>
                    <strong>Avoid:</strong> Neon colors (ruin the vibe)<br>
                    <strong>Accessories:</strong> Clear umbrella, wet hair aesthetic
                `;
                break;

            default:
                recommendation = "No recommendation available.";
        }
    } else if (weather === "cold") {
        switch (occasion) {
            case "casual":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Sweater, jeans, sneakers<br>
                    - Women: Turtleneck, sweater dress, ankle boots<br>
                    <strong>Colors:</strong> Brown, olive green, mustard yellow<br>
                    <strong>Avoid:</strong> Light colors (don't provide warmth)<br>
                    <strong>Accessories:</strong> Scarf, beanie, gloves
                `;
                break;

            case "formal":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Wool coat, dress shirt, chinos, dress shoes<br>
                    - Women: Long coat, midi dress, knee-high boots<br>
                    <strong>Colors:</strong> Black, navy blue, deep gray<br>
                    <strong>Avoid:</strong> Bright neon colors<br>
                    <strong>Accessories:</strong> Leather gloves, scarf
                `;
                break;

            case "party":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Velvet blazer, dress pants, oxfords<br>
                    - Women: Sequin dress, stilettos<br>
                    <strong>Colors:</strong> Gold, silver, burgundy<br>
                    <strong>Avoid:</strong> Overly casual fabrics like cotton<br>
                    <strong>Accessories:</strong> Statement jewelry, clutch
                `;
                break;

            case "romantic":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Cashmere sweater, wool trousers, leather boots<br>
                    - Women: Wool dress, tights, knee-high boots<br>
                    <strong>Colors:</strong> Deep red, burgundy, dark green<br>
                    <strong>Avoid:</strong> Bright neon colors<br>
                    <strong>Accessories:</strong> Warm scarf, gloves
                `;
                break;

            case "street":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Puffer jacket, joggers, high-top sneakers<br>
                    - Women: Oversized coat, leggings, combat boots<br>
                    <strong>Colors:</strong> Black, grey, dark blue<br>
                    <strong>Avoid:</strong> Light colors (get dirty easily)<br>
                    <strong>Accessories:</strong> Beanie, scarf
                `;
                break;

            case "traditional":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Woolen kurta, shawl, leather shoes<br>
                    - Women: Woolen saree, shawl, closed-toe shoes<br>
                    <strong>Colors:</strong> Deep maroon, dark green, navy blue<br>
                    <strong>Avoid:</strong> Light colors (don't provide warmth)<br>
                    <strong>Accessories:</strong> Warm shawl, gloves
                `;
                break;

            case "adventure":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Thermal shirt, insulated jacket, hiking boots<br>
                    - Women: Thermal leggings, fleece jacket, hiking boots<br>
                    <strong>Colors:</strong> Earthy tones, dark green, brown<br>
                    <strong>Avoid:</strong> Light colors (get dirty easily)<br>
                    <strong>Accessories:</strong> Beanie, gloves, backpack
                `;
                break;

            case "fun":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Colorful sweater, jeans, boots<br>
                    - Women: Bright coat, leggings, boots<br>
                    <strong>Colors:</strong> Bright red, yellow, blue<br>
                    <strong>Avoid:</strong> Dull colors like grey and brown<br>
                    <strong>Accessories:</strong> Fun hat, colorful scarf
                `;
                break;

            case "cinematic":
                recommendation = `
                    <strong>Outfit:</strong><br>
                    - Men: Long coat, scarf, leather gloves<br>
                    - Women: Trench coat, high boots, dramatic scarf<br>
                    <strong>Colors:</strong> Deep blue, maroon, dark green<br>
                    <strong>Avoid:</strong> Neon colors<br>
                    <strong>Accessories:</strong> Dramatic hat, gloves
                `;
                break;

            default:
                recommendation = "No recommendation available.";
        }
    }

    // Display recommendation
    document.getElementById('output').innerHTML = recommendation;
}