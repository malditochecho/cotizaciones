# Crear entorno virtual

En la raiz del proyecto ejecutar:

```bash
python3 -m venv env
```

Esto crea un entorno virtual llamado `env`

Luego activar el entorno virtual:

```bash
source env/bin/activate
```

Finalmente instalar las dependencias:

```bash
pip install -r requirements.txt
```

# Levantar container de docker con PostgreSQL 12

```bash
docker run -d --name cotizaciones_db -p 5432:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=cotizaciones postgres:12.0-alpine
```

Esto crea:

- un container llamado `cotizaciones_db`
- abre el puerto `5432` para que te puedas conectar a la DB
- crea un usuario llamado `admin` con password `admin`
- crea una base de datos llamada `cotizaciones`
