document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    const tabHeader = document.querySelector('.tab-header');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有标签的激活状态
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // 添加激活状态到当前标签
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.querySelector(`.content[data-content="${tabId}"]`).classList.add('active');

            // 滚动到当前标签
            const tabRect = tab.getBoundingClientRect();
            const headerRect = tabHeader.getBoundingClientRect();
            const offset = tabRect.left - headerRect.left + tabRect.width / 2 - headerRect.width / 2;

            tabHeader.scrollBy({
                left: offset,
                behavior: 'smooth' // 平滑滚动
            });
        });
    });

    // 默认激活第一个标签
    tabs[0].click();
});