let yesButton = document.getElementById("yes");     
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");   

let clickCount = 0;  // 记录点击 No 按钮的次数

// No 按钮的文本变化
const noTexts = [
    "你再想想？",  
    "确定不考虑一下吗？", 
    "不行，这个答案我不接受！", 
    "我会很伤心的…", 
    "真的不行 :("
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 按钮变大，每次放大 1.2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;   

    // No 按钮被迫移动，每次向右移动 50px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 让图片和问题文本上移
    let moveUp = clickCount * 25; // 每次上移 25px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 按钮文本变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 更换图片（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shocked.png";
    if (clickCount === 2) mainImage.src = "images/think.png";
    if (clickCount === 3) mainImage.src = "images/angry.png";
    if (clickCount === 4) mainImage.src = "images/crying.png";
    if (clickCount >= 5) mainImage.src = "images/crying.png";
});

// Yes 按钮点击后，进入成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!恭喜你!!! ( >ω<)♡</h1>  
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
