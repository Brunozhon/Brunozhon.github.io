const snowContainer = document.body;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 10 + 2 + 'px';
    const position = Math.random() * window.innerWidth + 'px';
    const animationDuration = Math.random() * 15 + 10 + 's';
    const animationDelay = Math.random() * 5 + 's';

    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = position;
    snowflake.style.animation = `fall ${animationDuration} linear ${animationDelay} infinite`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, (parseFloat(animationDuration) + parseFloat(animationDelay)) * 1000);

    requestAnimationFrame(createSnowflake);
}

createSnowflake();

const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes fall {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    25% {
        transform: translateY(calc(${document.body.scrollHeight * 1/4}px));
        opacity: 1;
    }
    50% {
        transform: translateY(calc(${document.body.scrollHeight * 1/2}px));
        opacity: 1;
    }
    75% {
        transform: translateY(calc(${document.body.scrollHeight * 3/4}px));
        opacity: 1;
    }
    100% {
        transform: translateY(calc(${document.body.scrollHeight}px));
        opacity: 0;
    }
}`;
document.head.appendChild(styleSheet);
