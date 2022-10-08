const root = document.querySelector(':root');
const body = document.querySelector('body')
const toggle = document.getElementById('toggle')
const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
toggle.onclick = function () {
    toggle.classList.toggle('dark')
    body.classList.toggle('dark')
    if (toggle.className.includes("dark")) {
        const myVariables = {
            '--dthemefcol': '#CCD0FF',
            // '--cursorcol': '#94FFCD',
            '--cursorcol': '#33fcff',
            '--socbtnhovercol': '#6bffba',
            '--socbtniccol': '#0F2546',
            '--hideablebgcol': '#3C5275',
            '--socbtnbgcol': '#0F2546',
            '--contbtntcol': '#0F2546',
            '--titlecol': '#B3B7E1',
            '--namecol': '#FFF',
            '--scrollercol': '#344C72',
            '--bodycol': '#0F2546',
            '--lmutedblue': '#CFEBFF',
            '--dblue': '#6bffba',
            '--navleftborder': '#3C5275',
            '--navbotborder': '#354360',
            '--socborder': '#344C72',
            '--sochoverborder': '#3C5275',
            '--linecol': '#CCD0FF',
            '--lmutedgrn': '#3773CE',
            '--dgray': '#B3B7E1',
            '--dmutedblue': '#0F2546'
        };
        setVariables(myVariables);
    } else {
        const myVariables = {
            '--dthemefcol': 'black',
            '--cursorcol': '#515151',
            '--socbtnhovercol': '#CFEBFF',
            '--socbtniccol': '#B3B7E1',
            '--hideablebgcol': '#FCFCFC',
            '--socbtnbgcol': '#FCFCFC',
            '--contbtntcol': 'white',
            '--titlecol': '#000',
            '--namecol': '#000',
            '--scrollercol': '#F8F8F8',
            '--bodycol': 'white',
            '--lmutedblue': '#CFEBFF',
            '--dblue': 'rgba(0, 128, 207, 0.805)',
            '--navleftborder': 'rgb(239, 239, 239)',
            '--navbotborder': 'rgb(239, 239, 239)',
            '--socborder': 'rgb(215, 215, 215)',
            '--sochoverborder': 'rgb(151, 181, 204)',
            '--linecol': 'rgb(105, 105, 105)',
            '--lmutedgrn': '#94FFCD',
            '--dgray': '#707070',
            '--dmutedblue': '#356081'
        };
        setVariables(myVariables);
    }
}
