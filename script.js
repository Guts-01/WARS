function updateBadge() {
        const input = document.getElementById('inputName');
        const display = document.getElementById('finalName');
        const container = document.getElementById('badgeContainer');

        if (input.value.trim() !== "") {
            // 1. Atualiza o texto no crachá
            display.innerHTML = `[WARS] <span class="text-[#4ade80] drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">${input.value.toUpperCase()}</span>`;
            
            // 2. Efeito visual de confirmação no container
            container.style.borderColor = "#4ade80";
            container.style.transform = "scale(1.05)";
            
            // 3. Volta ao tamanho normal após um breve delay
            setTimeout(() => {
                container.style.transform = "scale(1)";
            }, 200);

            // 4. LIMPA O INPUT (O que você pediu)
            input.value = "";
            
            // 5. Devolve o foco para o input para facilitar se ele quiser digitar outro
            input.focus();

        } else {
            // Pequeno feedback de erro caso esteja vazio
            input.style.borderColor = "#7f1d1d"; // Vermelho escuro
            setTimeout(() => { input.style.borderColor = "#374151"; }, 1000);
        }
    }

    // Permite apertar "Enter" para atualizar também
    document.getElementById('inputName').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            updateBadge();
        }
    });