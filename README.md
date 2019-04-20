
## Příkazy
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

Přidat tag na image
```
docker tag [id] [username]/[name]:[tag]
```

Přidat image na DockerHub
```
docker push [username]/[name]
```

Odstranění všech kontejnerů
```
docker rm -f $(docker ps -a -q)
```

Odstranění všech images
```
docker rmi -f $(docker images -a -q)
```
## AMAZON ECS
Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.

#### Diagram
![diagram](https://i.imgur.com/A1ZWire.png)
### 1. Cluster
***
**Vytvoříme cluster**
![cluster](https://i.imgur.com/p70fDCS.png)
![cluster](https://i.imgur.com/9Pufkll.png)
### 2. Task definition
***
![task definition](https://i.imgur.com/kVWXZ1q.png)
- **Fargate**
  - Platí se za využité zdroje
- **EC2**
  - Platí se za množství EC2 instancí
  
[//]: # (Hello)

![task definition](https://i.imgur.com/HxAp12w.png)

**Nastavíme MEMORY a vCPU**
![task definition](https://i.imgur.com/cn1NIeC.png)
**Nastavíme jednotlivé kontejnery**
- name
- image
- memory
- port
- vCPU
#### A. MongoDB 
***
![container](https://i.imgur.com/VNrtsZW.png)
![container](https://i.imgur.com/Rciphzk.png)
#### B. NodeJS
***
**Pokud používáme vlastní image, musíme ho nejdříve dát na DokcerHub**
**Amazon nabízí podobnou službu ECR (Elastic Container Registry)**
![container](https://i.imgur.com/BJW5AiQ.png)
![container](https://i.imgur.com/g3Ec02G.png)
![container](https://i.imgur.com/Rciphzk.png)
**Výsledek by měl vypadat takto**
![container](https://i.imgur.com/MTug4R6.png)

### 3. Service
***
Pokud máme hotový **cluster** a **task definition** vytvoříme **service** v našem clusteru
![serice](https://i.imgur.com/ibBC8CM.png)
![serice](https://i.imgur.com/ZHIdpe4.png)
![serice](https://i.imgur.com/n5nx1CO.png)


**Vytvoříme security group kde povolíme port pro naši NodeJS aplikaci**


![serice](https://i.imgur.com/NWIv5Xs.png)


**Vybereme VPC (Virtual Private Cloud) a subnet (oboje by mělo být automaticky vytvořeno)**


![serice](https://i.imgur.com/jhMmzrv.png)
![serice](https://i.imgur.com/DT13qrE.png)
![serice](https://i.imgur.com/754MzJU.png)
![serice](https://i.imgur.com/OkUJM4D.png)

### 4. Hotovo
***
**Naše aplikace běží a může k ní přistupovat přes veřejnou IP adresu**
![serice](https://i.imgur.com/N7BGKez.png)
![serice](https://i.imgur.com/wOfaYYN.png)

### 5. Pricing
- per vCPU per hour
  - $0.04656
- pre GB per hour
  - $0.00511
  
- S tímto nastavením (1GB, 0.5vCPU) bude aplikace stát $4.76 týdně
- Ceny se liší v závislosti na oblast. Více zde https://aws.amazon.com/fargate/pricing/
