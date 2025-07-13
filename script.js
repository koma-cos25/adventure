// ナビゲーションの切り替え機能
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = e.target.getAttribute('data-section');
            
            // ナビゲーションの「active」クラスを切り替える
            navItems.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');

            // セクションの表示を切り替える
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 選択されたセクションを表示
            const targetSection = document.getElementById(targetSectionId + '-section');
            if (targetSection) {
                targetSection.classList.add('active');
                
                // スライダーの位置をリセット
                const slider = targetSection.querySelector('.slider');
                if (slider) {
                    slider.scrollLeft = 0;
                }
            }
        });
    });
});

// スライダーの移動機能
/**
 * スライダーを指定した方向に移動します。
 * @param {string} sectionId - 'photo' または 'introdaction'
 * @param {number} direction - -1 (prev) または 1 (next)
 */
function moveSlide(sectionId, direction) {
    const slider = document.getElementById(sectionId + '-slider');
    if (!slider) return;

    // スライドアイテムの幅を取得
    const slideItem = slider.querySelector('.slide-item');
    if (!slideItem) return;

    const itemWidth = slideItem.offsetWidth;

    // 現在のスクロール位置を取得し、次の位置を計算
    const currentScrollLeft = slider.scrollLeft;
    const nextScrollLeft = currentScrollLeft + (direction * itemWidth);

    // スクロールを実行
    slider.scroll({
        left: nextScrollLeft,
        behavior: 'smooth'
    });
}