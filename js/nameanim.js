var textWrapper = document.querySelector('.myname');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline().add({
    targets: '.myname .letter',
    translateY: [60, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 600 + 30 * i
});