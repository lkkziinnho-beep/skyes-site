# Site oficial do Skyes

Site responsivo em HTML, CSS e JavaScript, pronto para hospedar no GitHub Pages.

## Arquivos
- `index.html` — conteúdo e estrutura do site
- `styles.css` — visual e adaptação para celular/PC
- `config.js` — links da Play Store, download de PC e comunidade
- `script.js` — menu mobile e comportamento dos botões
- `assets/skyes-gameplay.png` — imagem enviada usada no site

## Configure os links
Abra `config.js` e substitua os campos vazios:
```js
window.SKYES_LINKS = {
  play: "LINK_REAL_DA_GOOGLE_PLAY",
  pc: "LINK_REAL_DO_DOWNLOAD_PC",
  community: "LINK_REAL_DA_COMUNIDADE"
};
```
Use links completos começando com `https://`.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub, por exemplo `skyes-site`.
2. Envie todos os arquivos e a pasta `assets` para a raiz do repositório.
3. No repositório, entre em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde a publicação. O GitHub mostrará o endereço do site na mesma página.

A política de privacidade está apontada para a página já existente:
https://lkkziinnho-beep.github.io/skyes-privacy/


## Links configurados
- Google Play: https://play.google.com/store/apps/details?id=com.exldg.skyesadv
- Download para PC: link do Google Drive fornecido pelo desenvolvedor
- Comunidade: grupo do WhatsApp fornecido pelo desenvolvedor
