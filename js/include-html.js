const navbar = document.querySelector('.include-navbar')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    navbar.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script'))
})

const footer = document.querySelector('.include-footer')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script'))
})

const copyright = document.querySelector('.include-copyright')
fetch('copyright.html')
.then(res=>res.text())
.then(data=>{
    copyright.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script'))
})

const loader = document.querySelector('.include-loader')
fetch('loader.html')
.then(res=>res.text())
.then(data=>{
    loader.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script'))
})