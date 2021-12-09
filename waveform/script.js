const labels = document.querySelectorAll('.form-control label');


labels.forEach(label => (

    label.innerHTML = label.innerText.split('')
      .map((letter,idx) => `<span transition-delay:${idx * 50}ms>${letter}</span>`)
      .join('')
))