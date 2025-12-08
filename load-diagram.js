const viewer = new BpmnJS({ container: '#canvas' });

// učitaj default
loadDiagram('pizza.bpmn');

// klik handler
document.querySelectorAll('.example-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const file = link.getAttribute('data-diagram');

    document.querySelectorAll('.example-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    loadDiagram(file);
  });
});

function loadDiagram(fileName) {

  fetch(fileName)
    .then(response => response.text())
    .then(xml => viewer.importXML(xml))
    .then(() => {
      const canvas = viewer.get('canvas');
      canvas.zoom('fit-viewport', { padding: 50 });
    })
    .catch(err => console.error('Problem pri učitavanju/BPMN importu:', err));
}
