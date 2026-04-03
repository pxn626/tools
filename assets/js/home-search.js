// home-search.js
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('home-search-input');
    const resultsDiv = document.getElementById('home-search-results');

    if (!input) {
        console.warn('未找到搜索框元素');
        return;
    }

    let fuse = null;

    // 1. 加载索引
    fetch('/searchindex.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const docs = data.map(item => ({
                title: item.title,
                content: item.content || '',
                url: item.permalink
            }));

            // 初始化 Fuse (注意：threshold 要和 config 里一致)
            fuse = new Fuse(docs, {
                keys: ['title', 'content'],
                threshold: 0.3,
                includeScore: true
            });
            console.log('Fuse 搜索引擎初始化成功');
        })
        .catch(err => {
            console.error('搜索初始化失败:', err);
            resultsDiv.innerHTML = '<div style="color: red;">搜索加载失败: ' + err.message + '</div>';
        });

    // 2. 修改这里：使用 keydown 监听回车键
    // 这样能确保按下回车时立即触发，而不是等输入法上屏
    input.addEventListener('keydown', function(e) {
        // 只有当按下回车键(Enter)时才执行
        if (e.key === 'Enter') {
            e.preventDefault(); // 防止表单默认提交刷新页面
            performSearch();
        }
    });

    // 3. 定义搜索函数 (保持不变)
    function performSearch() {
        const query = input.value.trim();
        
        if (!query) {
            resultsDiv.style.display = 'none';
            return;
        }

        if (!fuse) {
            resultsDiv.innerHTML = '搜索引擎加载中...';
            resultsDiv.style.display = 'block';
            return;
        }

        const result = fuse.search(query);
        
        if (result.length === 0) {
            resultsDiv.innerHTML = '<p>未找到结果</p>';
        } else {
            let html = '<div class="results">';
            result.forEach(hit => {
                const content = hit.item.content.substring(0, 80) + '...';
                html += `
                <div>
                    <a href="${hit.item.url}"><strong>${hit.item.title}</strong></a>
                    <div style="color: #666; font-size: 0.9em;">${content}</div>
                </div><hr>`;
            });
            html += '</div>';
            resultsDiv.innerHTML = html;
        }
        resultsDiv.style.display = 'block';
    }
});