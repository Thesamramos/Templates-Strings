function writeHTML(title, text){
    const body = document.getElementById('body')
    const template = `
        <h1>${title}</h1>
        <p>${text}</p>
    `
    body.innerHTML += template
}

writeHTML('Olá', 'Isso é um exemplo de template string em HTML.')