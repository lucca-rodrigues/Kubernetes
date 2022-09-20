## Build da imagem local:

- Executar `docker build -t luccarodrigues/kubernetes .` para fazer o build da imagem.
- Executar `docker push luccarodrigues/kubernetes .` para publicar a imagem.
- Rodar o comando `docker run --rm -it -p 80:3333 luccarodrigues/kubernetes` para executar a imagem local na porta `80` e em seguida remove-la.

## Build da imagem em produção:

- Executar o comando `docker run --rm -it -p 80:3333 luccarodrigues/kubernetes` para executar diretamente a imagem com a versão que está em produção consumindo na porta `80` da máquina local.

## Syncronizar imagem local:

- Executar `docker pull luccarodrigues/kubernetes` e em seguida executar como na etapa anterior.
