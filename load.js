document.addEventListener('DOMContentLoaded', function () {
    var spinnerContainer = document.getElementById('spinnerContainer');

    // スピナー要素を作成して追加する
    var spinnerElement = document.createElement('div');
    spinnerElement.classList.add('spinner-border', 'text-primary');
    spinnerElement.setAttribute('role', 'status');
    var visuallyHiddenText = document.createElement('span');
    visuallyHiddenText.classList.add('visually-hidden');
    visuallyHiddenText.textContent = 'Loading...';
    spinnerElement.appendChild(visuallyHiddenText);
    spinnerContainer.appendChild(spinnerElement);

    // スピナーをフェードイン
    setTimeout(function () {
        spinnerContainer.classList.add('spinner-visible');
    }, 100); // 約0.1秒後にフェードイン

    // 3秒後にスピナーをフェードアウトして画面遷移
    setTimeout(function () {
        spinnerContainer.classList.remove('spinner-visible');
        setTimeout(function () {
            window.location.href = "mypage.html";
        }, 300); // 0.3秒後に画面遷移
    }, 2000); // 3秒後にフェードアウト
});
