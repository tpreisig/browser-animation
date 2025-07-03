const container = document.querySelector('.container');
        const audio = document.getElementById('backgroundMusic');
        container.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.error('Error playing audio:', error);
                });
            } else {
                audio.pause();
            }
        });