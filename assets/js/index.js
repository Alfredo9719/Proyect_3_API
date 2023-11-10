console.log("Entro a index");

const card = document.getElementById("card");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", ()=>{
  const random = getRandomInt(1, 152)
  fetchData(random)
});

const fetchData = async(id) => {
  try {
    console.log(id)

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      
        const img =  src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
        const nombre =  data.name;
        const experiencia =  data.base_experience;
        const hp =  data.stats[0].base_stat;
        const ataque =  data.stats[1].base_stat;
        const defensa =  data.stats[2].base_stat;
        const especial =  data.stats[3].base_stat;
    

      const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Ataque', 'Defensa', 'Especial'],
    datasets: [{
      label: 'Atributos Pokemon',
      data: [ataque,defensa,especial],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



    
    card.innerHTML = `
    <div class="card-header">
    <img src="assets/images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
<div class="card-body">
    <img src="${img}" alt="imagen de pokedex" class="card-body-img">
</div>
<div class="card-body">
<h1 class="card-body-title">
    ${nombre}
    <span>${hp}</span>
</h1>
<p class="card-body-text">${experiencia}</p>
</div>
<div class="card-footer text-muted">
    <div class="card-footer-social">
        <h3>${ataque + 'k'}</h3>
        <p>Ataque</p>
    </div>
    <div class="card-footer-social">
        <h3>${especial + 'k'}</h3>
        <p>Ataque Especial</p>
    </div>
    <div class="card-footer-social">
        <h3>${defensa + 'k'}</h3>
        <p>Defensa</p>
    </div>
</div>
</div>
    `;

    })

  }catch (error) {
    console.log(error);
  }
}








