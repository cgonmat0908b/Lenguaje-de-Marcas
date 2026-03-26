import csv
import random
from datetime import datetime, timedelta

# Configuración
NUM_REGISTROS = 1000
ARCHIVO_SALIDA = "clientes_tienda.csv"

nombres = ["Carlos", "Ana", "Luis", "Marta", "Javier", "Lucía", "Pedro", "Elena"]
apellidos = ["García", "Martínez", "López", "Sánchez", "Pérez", "Gómez"]
ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"]

def generar_fecha():
    inicio = datetime(2020, 1, 1)
    fin = datetime(2025, 1, 1)
    delta = fin - inicio
    dias_random = random.randint(0, delta.days)
    return (inicio + timedelta(days=dias_random)).strftime("%Y-%m-%d")

def generar_email(nombre, apellido):
    dominios = ["gmail.com", "hotmail.com", "yahoo.com"]
    return f"{nombre.lower()}.{apellido.lower()}{random.randint(1,99)}@{random.choice(dominios)}"

# Crear dataset
with open(ARCHIVO_SALIDA, mode="w", newline="", encoding="utf-8") as archivo:
    writer = csv.writer(archivo)
    
    # Cabecera
    writer.writerow([
        "id_cliente", "nombre", "apellido", "edad", "ciudad",
        "email", "fecha_registro", "compras_realizadas", "gasto_total"
    ])
    
    for i in range(1, NUM_REGISTROS + 1):
        nombre = random.choice(nombres)
        apellido = random.choice(apellidos)
        edad = random.randint(18, 70)
        ciudad = random.choice(ciudades)
        email = generar_email(nombre, apellido)
        fecha_registro = generar_fecha()
        compras = random.randint(1, 50)
        gasto_total = round(random.uniform(20, 2000), 2)
        
        writer.writerow([
            i, nombre, apellido, edad, ciudad,
            email, fecha_registro, compras, gasto_total
        ])

print(f"Dataset generado correctamente: {ARCHIVO_SALIDA}")