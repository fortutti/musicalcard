
    function openFullscreen() {
        const modal = document.getElementById('imageModal');
        const modalContent = document.getElementById('modalContent');
        
        // Берём актуальный текст поздравления из оригинальной открытки
        const originalText = document.querySelector('.cover-back .greeting-text');
        const originalGif = document.querySelector('.back-page img');
        
        if (!originalText || !originalGif) return;
        
        // Создаём левую страницу
        const leftDiv = document.createElement('div');
        leftDiv.className = 'modal-left';
        const textClone = originalText.cloneNode(true);
        leftDiv.appendChild(textClone);
        
        // Создаём правую страницу
        const rightDiv = document.createElement('div');
        rightDiv.className = 'modal-right';
        const gifClone = originalGif.cloneNode(true);
        rightDiv.appendChild(gifClone);
        
        // Очищаем и заполняем модальное окно
        modalContent.innerHTML = '';
        modalContent.appendChild(leftDiv);
        modalContent.appendChild(rightDiv);
        
        // Показываем модалку
        modal.style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('imageModal').style.display = 'none';
    }

    // Закрытие по клику на фон (на сам .modal)
    window.onclick = function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    // Навешиваем обработчик на кнопку [ ]
    document.addEventListener('DOMContentLoaded', () => {
        const fsButton = document.querySelector('.fullscreen-btn');
        if (fsButton) {
            fsButton.onclick = openFullscreen;
        }
    });


