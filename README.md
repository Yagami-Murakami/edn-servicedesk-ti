# VertexOne Technologies — Portal de suporte corporativo

Site responsivo com tema **dark corporativo elegante**, hero em carrossel fotográfico e identidade visual VertexOne. A experiência visual apresenta uma empresa fictícia, sem textos sobre aulas ou projeto acadêmico na interface.

## Estrutura

- `index.html` — página principal com hero, busca, serviços, soluções, artigos e central de atendimento
- `styles.css` — paleta grafite/azul, layout e responsividade
- `script.js` — carrossel automático sem controles visíveis, menu móvel e busca local em orientações
- `assets/vertexone-logo.webp` — **logo mantida da versão aprovada**
- `assets/slide-01-datacenter.webp`, `slide-02-corporativo.webp`, `slide-03-atendimento.webp` — slides gerados a partir de imagens já criadas
- `.nojekyll` — compatibilidade com GitHub Pages

## Testar no computador

Descompacte o pacote e abra `index.html` em um navegador, ou execute na pasta:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`. O carrossel muda automaticamente a cada 6,5 segundos, com transição suave e sem controles visíveis; respeita a preferência de movimento reduzido do sistema.

## Publicar no GitHub Pages

1. Crie o repositório desejado no GitHub.
2. Envie o conteúdo desta pasta (e não a pasta inteira) para a raiz do repositório.
3. Acesse **Settings → Pages → Deploy from a branch**.
4. Selecione **main** e **/(root)**.

## Integração com o Amazon Connect

O site está pronto em termos de front-end, mas **ainda não incorpora o widget real de chat e voz**. A central está na seção `#atendimento` e há comentário ao final do `index.html` indicando onde inserir o snippet oficial fornecido pela AWS.

- Chat: `Fluxo-ServiceDesk-TI-TESTE-Cases` versão 6.
- Voz: `Fluxo-ServiceDesk-TI-TESTE-Voz` versão 1.
- Autorizar `https://yagami-murakami.github.io` em **Domain & security** se for publicar nesse endereço.
- Para uso público, configurar JWT em um backend autenticado, **não expor segredos no GitHub Pages**.
- Login, abertura de caso diretamente pelo site e consulta real de chamados ainda dependem de integração, não estão implementados. A busca do portal pesquisa apenas os artigos locais.

## Segurança

Não publicar credenciais AWS, segredos de assinatura JWT ou dados reais de funcionários. O domínio autorizado por si só não autentica os usuários nem limita o uso do canal de chamadas.
