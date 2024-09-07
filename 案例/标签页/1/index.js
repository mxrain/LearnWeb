const tags = document.querySelectorAll('.tag'); // 获取所有 tag 类标签
const tabContents = document.querySelectorAll('.tab-content'); // 获取所有 tab-content 类标签
// 为每个标签添加点击事件
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        // 移除所有标签的 active 类
        tags.forEach(t => t.classList.remove('active'));
        // 添加点击标签的 active 类
        tag.classList.add('active');

        // 获取点击标签的 data-target 属性值
        const target = tag.getAttribute('data-target');

        // 隐藏所有内容区域
        tabContents.forEach(tab => tab.style.display = 'none');

        // 显示对应内容区域
        document.getElementById(target).style.display = 'block';
    });
});
tabContents.forEach(tab => tab.style.display = 'none');
// 默认显示第一个内容区域
tabContents[0].style.display = 'block';
