const categorias = [
    {
        palavras: ["fone", "fone bluetooth", "jbl", "headphone", "earbuds", "fone sem fio", "fone academia", "cancelamento de ruido", "cancelamento de ruído", "fone intra", "fone over ear"],
        titulo: "Fones de Ouvido",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Custo-Benefício",
                nome: "Soundcore P20i da Anker",
                descricao: "Bluetooth 5.3, 30h de bateria, resistente à água, 2 microfones IA. 4.7★ com 97 mil avaliações.",
                preco: "R$157,84",
                link: "https://www.amazon.com.br/soundcore-Bluetooth-Resistência-Microfones-Personalizável/dp/B0BTYDLTM3?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "JBL Tune 520BT",
                descricao: "On-ear, Bluetooth, sem fio. 4.8★ com 25 mil avaliações. Som Pure Bass, dobrável, leve.",
                preco: "R$201,71",
                link: "https://www.amazon.com.br/JBL-Fone-Ouvido-Tune-520BT/dp/B0C4CCMNQT?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "JBL Tune 770NC",
                descricao: "Cancelamento de ruído ativo, até 70h de bateria. Som profissional para quem não abre mão de qualidade.",
                preco: "R$499,00",
                link: "https://www.amazon.com.br/JBL-Fone-Ouvido-Tune-520BT/dp/B0C4CCMNQT?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["tv", "televisão", "smart tv", "televisor", "tv bluetooth", "tv 32", "tv sala", "tv quarto", "philco"],
        titulo: "Smart TVs",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Preço",
                nome: "Smart TV 32\" Philco Roku TV",
                descricao: "32\", LED, Dolby Audio, Roku TV com +100mil filmes e séries. 4.6★ com 1.003 avaliações.",
                preco: "R$878,10",
                link: "https://www.amazon.com.br/Smart-Philco-PTV32K34RKGB-Dolby-Audio/dp/B0D9ZMKMB6?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendida",
                nome: "Smart TV 43\" Samsung Crystal 4K",
                descricao: "43\", 4K Crystal UHD, HDR, Tizen OS, controle por voz. Qualidade de imagem superior.",
                preco: "R$1.499,00",
                link: "https://www.amazon.com.br/Smart-Philco-PTV32K34RKGB-Dolby-Audio/dp/B0D9ZMKMB6?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Smart TV 55\" Samsung QLED 4K",
                descricao: "55\", QLED 4K, Quantum HDR, Gaming Hub, som Dolby Atmos. A melhor experiência de imagem e som.",
                preco: "R$3.299,00",
                link: "https://www.amazon.com.br/Smart-Philco-PTV32K34RKGB-Dolby-Audio/dp/B0D9ZMKMB6?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["mouse", "mouse sem fio", "mouse logitech", "mouse compacto", "mouse barato", "mouse escritorio", "mouse gamer"],
        titulo: "Mouses",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Preço",
                nome: "Mouse Logitech M170",
                descricao: "Sem fio, ambidestro, compacto. 4.8★ com 67 mil avaliações. Conexão USB, pilha inclusa.",
                preco: "R$59,99",
                link: "https://www.amazon.com.br/Logitech-Ambidestro-Compacto-Conexão-Inclusa/dp/B01K92Z3OQ?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "Mouse Logitech MX Anywhere 3",
                descricao: "Sem fio, scroll MagSpeed, funciona em qualquer superfície, recarregável USB-C. Ideal para trabalho.",
                preco: "R$299,00",
                link: "https://www.amazon.com.br/Logitech-Ambidestro-Compacto-Conexão-Inclusa/dp/B01K92Z3OQ?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Mouse Logitech MX Master 3S",
                descricao: "O melhor mouse do mercado. Scroll eletromagnético, 8000 DPI, silencioso, conecta em 3 dispositivos.",
                preco: "R$599,00",
                link: "https://www.amazon.com.br/Logitech-Ambidestro-Compacto-Conexão-Inclusa/dp/B01K92Z3OQ?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["notebook", "laptop", "computador", "notebook dell", "notebook i5", "notebook trabalho", "notebook estudo"],
        titulo: "Notebooks",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Custo-Benefício",
                nome: "Notebook Acer Aspire 3",
                descricao: "Intel Core i3, 8GB RAM, SSD 256GB, tela 15.6\" Full HD. Ideal para estudos e tarefas do dia a dia.",
                preco: "R$2.199,00",
                link: "https://www.amazon.com.br/Notebook-Dell-Inspiron-I15-I1300-A30P-Carbono/dp/B0FHCHBRGF?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "Notebook Dell Inspiron 15",
                descricao: "Intel Core i5 13ª Gen, 8GB RAM, SSD 512GB, tela 15.6\" Full HD, Windows 11. 4.6★ com 1.020 avaliações.",
                preco: "R$3.845,04",
                link: "https://www.amazon.com.br/Notebook-Dell-Inspiron-I15-I1300-A30P-Carbono/dp/B0FHCHBRGF?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Notebook Dell XPS 13",
                descricao: "Intel Core i7, 16GB RAM, SSD 512GB, tela OLED 13.4\". Design ultrafino, performance profissional.",
                preco: "R$7.999,00",
                link: "https://www.amazon.com.br/Notebook-Dell-Inspiron-I15-I1300-A30P-Carbono/dp/B0FHCHBRGF?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["celular", "smartphone", "samsung", "galaxy", "celular samsung", "celular 5g", "celular câmera", "celular foto"],
        titulo: "Smartphones",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Preço",
                nome: "Samsung Galaxy A06",
                descricao: "6.7\", câmera 50MP, bateria 5000mAh, 128GB. Perfeito pra quem quer Samsung com bom preço.",
                preco: "R$799,00",
                link: "https://www.amazon.com.br/Celular-Samsung-Galaxy-Câmera-Recursos/dp/B0DYVQW78L?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "Samsung Galaxy A36 5G",
                descricao: "128GB, 6GB RAM, câmera 50MP, Super AMOLED 6.7\", 5G, recursos IA. 4.8★ com 1.393 avaliações.",
                preco: "R$2.227,42",
                link: "https://www.amazon.com.br/Celular-Samsung-Galaxy-Câmera-Recursos/dp/B0DYVQW78L?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Samsung Galaxy S25",
                descricao: "Snapdragon 8 Elite, câmera 200MP, tela Dynamic AMOLED 2X. O topo da linha Samsung.",
                preco: "R$5.999,00",
                link: "https://www.amazon.com.br/Celular-Samsung-Galaxy-Câmera-Recursos/dp/B0DYVQW78L?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["smartwatch", "relógio inteligente", "relógio samsung", "galaxy fit", "relogio", "relógio"],
        titulo: "Smartwatches",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Preço",
                nome: "Samsung Galaxy Fit3",
                descricao: "1º mais vendido. Display 1.6\", bateria 3000mAh, Bluetooth e Wi-Fi. 4.7★ com 9 mil avaliações.",
                preco: "R$324,57",
                link: "https://www.amazon.com.br/Smartwatch-Samsung-Galaxy-Display-Grafite/dp/B0CVCLGV1W?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "Samsung Galaxy Watch 6",
                descricao: "Tela AMOLED 1.5\", monitoramento de saúde avançado, GPS, NFC, resistente à água.",
                preco: "R$1.199,00",
                link: "https://www.amazon.com.br/Smartwatch-Samsung-Galaxy-Display-Grafite/dp/B0CVCLGV1W?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Samsung Galaxy Watch Ultra",
                descricao: "Titânio, resistente a 10ATM, sensor avançado de saúde, bateria de 60h. Para quem exige o melhor.",
                preco: "R$3.499,00",
                link: "https://www.amazon.com.br/Smartwatch-Samsung-Galaxy-Display-Grafite/dp/B0CVCLGV1W?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["tablet", "tablet samsung", "galaxy tab", "tablet estudo", "tablet desenho"],
        titulo: "Tablets",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Preço",
                nome: "Samsung Galaxy Tab A9",
                descricao: "Tela 8.7\", 64GB, bateria 5100mAh. Compacto e leve, ideal para consumo de conteúdo.",
                preco: "R$899,00",
                link: "https://www.amazon.com.br/Galaxy-Lite-128GB-Tela-Cinza/dp/B0FMFRFNWG?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "Samsung Galaxy Tab S10 Lite",
                descricao: "Tela 10.9\", 128GB, com S Pen inclusa. 4.8★ com 1.248 avaliações. Ideal para estudo e trabalho.",
                preco: "R$2.287,00",
                link: "https://www.amazon.com.br/Galaxy-Lite-128GB-Tela-Cinza/dp/B0FMFRFNWG?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Samsung Galaxy Tab S10+",
                descricao: "Tela Dynamic AMOLED 12.4\", 256GB, S Pen, DeX mode. Substitui o notebook com produtividade máxima.",
                preco: "R$4.999,00",
                link: "https://www.amazon.com.br/Galaxy-Lite-128GB-Tela-Cinza/dp/B0FMFRFNWG?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["kindle", "leitor", "ebook", "livro digital", "leitura"],
        titulo: "Leitores Digitais",
        opcoes: [
            {
                nivel: "barato",
                label: "Mais Vendido",
                nome: "Kindle 16GB",
                descricao: "1º mais vendido. Tela 6\", luz frontal ajustável, bateria de semanas. 4.8★ com 23 mil avaliações.",
                preco: "R$649,00",
                link: "https://www.amazon.com.br/kindle-16gb-verde/dp/B0CP31QS6R?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Melhor Tela",
                nome: "Kindle Paperwhite 16GB",
                descricao: "Tela 6.8\" sem reflexo, resistente à água IPX8, 16GB. Leitura confortável em qualquer ambiente.",
                preco: "R$899,00",
                link: "https://www.amazon.com.br/kindle-16gb-verde/dp/B0CP31QS6R?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Kindle Scribe",
                descricao: "Tela 10.2\", caneta stylus inclusa para anotações. O único Kindle que substitui caderno e livro.",
                preco: "R$1.999,00",
                link: "https://www.amazon.com.br/kindle-16gb-verde/dp/B0CP31QS6R?tag=b150d-20"
            }
        ]
    },
    {
        palavras: ["powerbank", "carregador portátil", "bateria portátil", "carregador celular", "power bank"],
        titulo: "Carregadores Portáteis",
        opcoes: [
            {
                nivel: "barato",
                label: "Melhor Preço",
                nome: "Power Bank Baseus 10000mAh",
                descricao: "10000mAh, carregamento rápido 22.5W, slim e leve. Perfeito para o dia a dia.",
                preco: "R$89,00",
                link: "https://www.amazon.com.br/Carregador-Portátil-20000mAh-Delivery-I2GO/dp/B094YR4SLJ?tag=b150d-20"
            },
            {
                nivel: "medio",
                label: "Mais Vendido",
                nome: "i2GO PRO Power Bank 20000mAh",
                descricao: "20000mAh, Power Delivery 20W, USB-C. 4.7★ com 10 mil avaliações. Carrega até 4x um celular.",
                preco: "R$169,90",
                link: "https://www.amazon.com.br/Carregador-Portátil-20000mAh-Delivery-I2GO/dp/B094YR4SLJ?tag=b150d-20"
            },
            {
                nivel: "premium",
                label: "Premium",
                nome: "Anker Power Bank 26800mAh",
                descricao: "26800mAh, 87W total, carrega notebook e celular simultaneamente. Para viagens longas.",
                preco: "R$399,00",
                link: "https://www.amazon.com.br/Carregador-Portátil-20000mAh-Delivery-I2GO/dp/B094YR4SLJ?tag=b150d-20"
            }
        ]
    }
];

function buscar() {
    const texto = document.getElementById('busca').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado');

    if (!texto) {
        resultado.innerHTML = '<div class="nao-encontrado"><span>></span> aguardando input do usuário...</div>';
        return;
    }

    const categoria = categorias.find(c => c.palavras.some(p => texto.includes(p)));

    if (categoria) {
        let html = '<div class="resultado-header">// ' + categoria.titulo + ' — comparando opções</div>';
        html += '<div class="produtos-grid">';
        categoria.opcoes.forEach(function(p) {
            html += '<div class="produto-card"><div>';
            html += '<div class="produto-nivel ' + p.nivel + '">' + p.label + '</div>';
            html += '<div class="produto-nome">' + p.nome + '</div>';
            html += '<div class="produto-desc">' + p.descricao + '</div>';
            html += '</div><div>';
            html += '<div class="produto-preco">' + p.preco + '</div>';
            html += '<a class="produto-link" href="' + p.link + '" target="_blank">Ver na Amazon →</a>';
            html += '</div></div>';
        });
        html += '</div>';
        resultado.innerHTML = html;
    } else {
        resultado.innerHTML = '<div class="nao-encontrado"><span>></span> categoria não encontrada. tente: fone, tv, notebook, celular, mouse, smartwatch, tablet, kindle ou powerbank.</div>';
    }
}
