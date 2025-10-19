// بيانات الوصفات (20 وصفة عليها طلب بحث كبير)
const recipes = [
    {
        id: 1,
        title: "أرز بصينية الدجاج",
        time: "45 دقيقة",
        difficulty: "سهلة",
        ingredients: ["أرز", "دجاج", "بصل", "طماطم", "بهارات"],
        steps: ["نقطع الدجاج", "نقلي البصل", "نضيف الطماطم", "نضيف الأرز والماء"]
    },
    {
        id: 2,
        title: "مكرونة بشاميل",
        time: "60 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["مكرونة", "لحم مفروم", "بشاميل", "جبن"],
        steps: ["نسوي المكرونة", "نحمر اللحم", "نضع البشاميل", "ندخل الفرن"]
    },
    {
        id: 3,
        title: "سلطة طحينة",
        time: "10 دقائق",
        difficulty: "سهلة جداً",
        ingredients: ["طحينة", "ليمون", "ثوم", "ماء", "ملح"],
        steps: ["نخلط الطحينة", "نضيف الليمون", "نضيف الماء", "نتبل بالملح"]
    },
    {
        id: 4,
        title: "كبة مقلية",
        time: "90 دقيقة",
        difficulty: "صعبة",
        ingredients: ["برغل", "لحم مفروم", "بصل", "بهارات"],
        steps: ["ننقع البرغل", "نعجن العجينة", "نحشو باللحم", "نقلي"]
    },
    {
        id: 5,
        title: "شوربة عدس",
        time: "30 دقيقة",
        difficulty: "سهلة",
        ingredients: ["عدس", "بصل", "جزر", "مرق دجاج"],
        steps: ["ننقع العدس", "نقلي البصل", "نضيف العدس", "نضيف المرق"]
    },
    {
        id: 6,
        title: "بيتزا بالجبن",
        time: "40 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["عجينة بيتزا", "جبن موزاريلا", "صلصة طماطم", "فلفل"],
        steps: ["نفرد العجينة", "نضع الصلصة", "نضيف الجبن", "ندخل الفرن"]
    },
    {
        id: 7,
        title: "محشي ورق عنب",
        time: "120 دقيقة",
        difficulty: "صعبة",
        ingredients: ["ورق عنب", "أرز", "لحم", "ليمون"],
        steps: ["نحشي الورق", "نرص في القدر", "نضيف الماء", "نطهو"]
    },
    {
        id: 8,
        title: "كيك الشوكولاتة",
        time: "50 دقيقة",
        difficulty: "سهلة",
        ingredients: ["طحين", "شوكولاتة", "بيض", "سكر", "زبدة"],
        steps: ["نخلط المكونات", "نضيف الشوكولاتة", "ندخل الفرن", "نزين"]
    },
    {
        id: 9,
        title: "سمك مقلي",
        time: "25 دقيقة",
        difficulty: "سهلة",
        ingredients: ["سمك", "دقيق", "ليمون", "بهارات"],
        steps: ["نتبل السمك", "نغلف بالدقيق", "نقلي", "نقدم مع ليمون"]
    },
    {
        id: 10,
        title: "همبرغر منزلي",
        time: "35 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["لحم مفروم", "خبز برجر", "خس", "طماطم", "صلصة"],
        steps: ["نشكل البرجر", "نشوي", "نضع في الخبز", "نضيف الخضار"]
    },
    {
        id: 11,
        title: "معكرونة بالبشاميل",
        time: "55 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["معكرونة", "لحم مفروم", "بشاميل", "جبنة"],
        steps: ["نسوي المعكرونة", "نحمر اللحم", "نضع البشاميل", "نشوي"]
    },
    {
        id: 12,
        title: "رز بخاري",
        time: "70 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["أرز", "دجاج", "جزر", "زبيب", "بهارات"],
        steps: ["ننقع الأرز", "نطبخ الدجاج", "نضيف الخضار", "نضيف الأرز"]
    },
    {
        id: 13,
        title: "فتوش",
        time: "20 دقائق",
        difficulty: "سهلة",
        ingredients: ["خس", "طماطم", "خيار", "خبز محمص", "زيت زيتون"],
        steps: ["نقطع الخضار", "نحمص الخبز", "نخلط", "نضيف الزيت"]
    },
    {
        id: 14,
        title: "كنافة بالنابلسية",
        time: "45 دقيقة",
        difficulty: "صعبة",
        ingredients: ["عجينة كنافة", "جبن", "سمن", "سكر"],
        steps: ["نفرد الكنافة", "نضيف الجبن", "نضع السمن", "نشوي"]
    },
    {
        id: 15,
        title: "شاورما دجاج",
        time: "40 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["دجاج", "خبز شاورما", "ثوم", "بهارات", "طحينة"],
        steps: ["نتبل الدجاج", "نشوي", "نقطع", "نلف في الخبز"]
    },
    {
        id: 16,
        title: "بسبوسة",
        time: "35 دقيقة",
        difficulty: "سهلة",
        ingredients: ["سميد", "زيت", "سكر", "ماء زهر"],
        steps: ["نخلط السميد", "نضيف الزيت", "ندخل الفرن", "نضيف الشيرة"]
    },
    {
        id: 17,
        title: "محشي كوسا",
        time: "80 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["كوسا", "أرز", "لحم", "طماطم"],
        steps: ["نحشي الكوسا", "نرص في القدر", "نضيف الصلصة", "نطهو"]
    },
    {
        id: 18,
        title: "سمبوسك لحم",
        time: "50 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["عجينة سمبوسك", "لحم مفروم", "بصل", "بهارات"],
        steps: ["نحشو العجينة", "نلف", "نقلي", "نقدم"]
    },
    {
        id: 19,
        title: "تشيز كيك",
        time: "90 دقيقة",
        difficulty: "صعبة",
        ingredients: ["جبن كريمي", "بسكويت", "زبدة", "سكر"],
        steps: ["نحضر القاعدة", "نخلط الجبن", "ندخل الثلاجة", "نزين"]
    },
    {
        id: 20,
        title: "مقلوبة باذنجان",
        time: "75 دقيقة",
        difficulty: "متوسطة",
        ingredients: ["أرز", "باذنجان", "دجاج", "بهارات"],
        steps: ["نقلي الباذنجان", "نرص في القدر", "نضيف الأرز", "نقلب"]
    }
];

// دالة لعرض الوصفات
function displayRecipes() {
    const recipeGrid = document.querySelector('.recipe-grid');
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <div class="recipe-info">
                <span class="time">⏱️ ${recipe.time}</span>
                <span class="difficulty">📊 ${recipe.difficulty}</span>
            </div>
            <div class="ingredients">
                <h4>🛒 المكونات:</h4>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            <div class="steps">
                <h4>👩‍🍳 الخطوات:</h4>
                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        
        recipeGrid.appendChild(recipeCard);
    });
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayRecipes);
