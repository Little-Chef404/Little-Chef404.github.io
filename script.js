let currentDiary = null;
let settings = JSON.parse(localStorage.getItem('diarySettings')) || {
    themeColor: '#4F46E5',
    bgColor: '#f8fafc',
    textColor: '#1e293b',
    darkMode: false
};

// 初始化
document.addEventListener('DOMContentLoaded', function () {
    loadSettings();
    loadDiaryList();
    createNewDiary();

    // 自动保存
    let saveTimer;
    document.getElementById('editor').addEventListener('input', function () {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(autoSave, 1000);
    });
});

// 加载设置
function loadSettings() {
    document.documentElement.style.setProperty('--theme-color', settings.themeColor);
    document.documentElement.style.setProperty('--bg-color', settings.bgColor);
    document.documentElement.style.setProperty('--text-color', settings.textColor);

    if (settings.darkMode) {
        document.body.classList.add('dark-mode');
    }
}
