# Docker
Přihlášní do Dockeru
```
docker login
```

Potvrzení správné instalace
```
dokcer container run hello-world
```

Spuštění oficiálního image nginx
```
docker container run -p 80:80 nginx
```

Zobrazení kontaejnerů
```
docker ps -a
```

Zobrazí images
```
docker images 
```

Odstranění kontejneru
```
docker rm [id] -f
```

Odstranění image
```
docker rmi [id] -f
```

Vytvoření kontejnerů z Docker-compose.yml
```
docker-compose up
```

Odstranění kontejnerů
```
docker-compose down
```

Spuštění v pozadí
```
docker-compose up -d
```

Spuštení bash v kontejneru
```
docker exec -i -t [container_name] /bin/bash
```

Odstranění všech kontejnerů
```
docker rm -f $(docker ps -a -q)
```

Odstranění všech images
```
docker rmi -f $(docker images -a -q)
```
