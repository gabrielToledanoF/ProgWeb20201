const index = (req, res) => {
    const conteudo = 'Página principal da aplicação';
    res.render('main/index', {
    conteudo:conteudo,
    });
   };

const sobre = (req, res) => {
    const conteudo = 'Página sobre a aplicação';
    res.render('main/sobre', {
    conteudo:conteudo,
    });
   };

const ui = (req, res) => {
    const conteudo = 'Página com a interface do template';
    res.render('main/ui', {
    conteudo:conteudo,
    });
   };

const game = (req, res) => {
    const conteudo = 'Página com o jogo';
    res.render('main/game', {
    conteudo:conteudo,
    });
   };


module.exports = { index, sobre, ui, game}