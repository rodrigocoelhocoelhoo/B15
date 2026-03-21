// Importando todas as categorias
const categorias = [
    fones,
    celulares,
    notebooks,
    tvs,
    smartwatches,
    tablets,
    mouses,
    kindles,
    powerbanks
];

function buscar() {
    const texto = document.getElementById('busca').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado');
    if (!texto) {
        resultado.innerHTML = '';
        return;
    }
    const categoria = categorias.find(c => c.palavras.some(p => texto.includes(p)));
    if (categoria) {
        mostrarResultados(categoria);
        resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        resultado.innerHTML = '<div class="nao-encontrado">Nenhum produto encontrado. Tente: fone, celular, notebook, tv, smartwatch, tablet, mouse, kindle ou carregador.</div>';
    }
}

function buscarCategoria(termo) {
    document.getElementById('busca').value = termo;
    buscar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarResultados(categoria) {
    const resultado = document.getElementById('resultado');
    let html = '<div class="resultado-header"><span class="cat-icone">' + categoria.icone + '</span> ' + categoria.titulo + ' <span class="resultado-count">' + categoria.opcoes.length + ' opções comparadas</span></div>';
    html += '<div class="produtos-grid">';
    categoria.opcoes.forEach(function(p) {
        html += '<div class="produto-card">';
        html += '<div class="produto-imagem-wrap"><img src="' + p.imagem + '" alt="' + p.nome + '" class="produto-imagem" loading="lazy" onerror="this.style.display=\'none\'"/></div>';
        html += '<div class="produto-info">';
        html += '<div class="produto-nivel ' + p.nivel + '">' + p.label + '</div>';
        html += '<div class="produto-marca">' + p.marca + '</div>';
        html += '<div class="produto-nome">' + p.nome + '</div>';
        html += '<div class="produto-specs">';
        p.specs.forEach(function(spec) {
            html += '<span class="spec-tag">' + spec + '</span>';
        });
        html += '</div>';
        html += '<div class="produto-desc">' + p.descricao + '</div>';
        html += '<div class="produto-footer">';
        html += '<div class="produto-preco">' + p.preco + '</div>';
        html += '<a class="produto-link" href="' + p.link + '" target="_blank">Ver na Amazon →</a>';
        html += '</div>';
        html += '</div></div>';
    });
    html += '</div>';
    resultado.innerHTML = html;
}
