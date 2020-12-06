from django.db import models


class Cliente(models.Model):
    empresa = models.CharField(max_length=100, null=True, verbose_name='Nombre cliente')
    contacto = models.CharField(max_length=100, null=True, blank=True, verbose_name='Contacto empresa')
    telefonoContacto = models.CharField(max_length=12, null=True, blank=True, verbose_name='Telefono contacto')
    correoContacto = models.EmailField(max_length=100, null=True, blank=True, verbose_name='Correo contacto')

    def __str__(self):
        return self.empresa


class Servicio(models.Model):
    nombre = models.CharField(max_length=255, verbose_name='Nombre del servicio', null=True)
    descripcion = models.TextField(verbose_name='Descripcion del servicio', null=True, blank=True)
    valorMetroCuadrado = models.SmallIntegerField(verbose_name='Valor por m2', null=True, blank=True)

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    producto = models.CharField(max_length=255, verbose_name='Nombre del producto', null=True, blank=True)
    marca = models.CharField(max_length=255, verbose_name='Marca', null=True, blank=True)
    fabricante = models.CharField(max_length=255, verbose_name='Fabricante', null=True, blank=True)
    valorUnidad = models.IntegerField(verbose_name='Valor por unidad', null=True, blank=True)

    def __str__(self):
        return self.producto


# TABLA INTERMEDIA AUTOMATICA
class Cotizacion(models.Model):
    empresa = models.ForeignKey(Cliente, on_delete=models.CASCADE, verbose_name='Cliente')

    servicios = models.ManyToManyField(Servicio, blank=True)

    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, null=True)
    cantidadProducto = models.SmallIntegerField(verbose_name='Cantidad', null=True, blank=True)

    def __str__(self):
        return 'Folio ' + str(self.id)


# TABLA INTERMEDIA MANUAL
class Cotiza(models.Model):
    empresa = models.ForeignKey(Cliente, on_delete=models.CASCADE, verbose_name='Cliente')
    servicios = models.ManyToManyField(Servicio, through="CotizaServicios")
    
    def __str__(self):
        return 'ID Cotizacion: ' + str(self.id)


class CotizaServicios(models.Model):
    cotizacion = models.ForeignKey(Cotiza, on_delete=models.CASCADE)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    cantidad = models.IntegerField(verbose_name='Cantidad cotizada')

    def __str__(self):
        return 'Detalle: Cotizacion(' + str(self.cotizacion.id) + ') Servicio(' + str(self.servicio.id) + ') Cantidad(' + str(self.cantidad) + ')'


# rm -rf db.sqlite3
# ./manage.py migrate
# ./manage.py createsuperuser
# ./manage.py makemigrations
# ./manage.py migrate
# ./manage.py runserver



# INSERT INTO public.cotizaciones_cliente (empresa, contacto, "telefonoContacto", "correoContacto") VALUES('Salfa S.A.', 'Cesar Cisterna', '+56987654321', 'cesar@salfa.cl');
# INSERT INTO public.cotizaciones_cliente (empresa, contacto, "telefonoContacto", "correoContacto") VALUES('Microsoft', 'Bill Gates', '+56934567890', 'bill@microsoft.com');
# INSERT INTO public.cotizaciones_cliente (empresa, contacto, "telefonoContacto", "correoContacto") VALUES('Amazon', 'Jeff Bezos', '+56921098765', 'jeff@amazon.com');
# INSERT INTO public.cotizaciones_cliente (empresa, contacto, "telefonoContacto", "correoContacto") VALUES('Tesla', 'Elon Musk', '+56945678901', 'elon@tesla.com');
# INSERT INTO public.cotizaciones_cliente (empresa, contacto, "telefonoContacto", "correoContacto") VALUES('Jumbo', 'Horst Paulmann', '+56954321987', 'horst@jumbo.cl');

# INSERT INTO public.cotizaciones_producto (producto, marca, fabricante, "valorUnidad") VALUES('Jotafloor Solvent Free Primer', 'Jotun', 'Codelpa', 289000);
# INSERT INTO public.cotizaciones_producto (producto, marca, fabricante, "valorUnidad") VALUES('Jotafloor SL Universal', 'Jotun', 'Codelpa', 289000);

# INSERT INTO public.cotizaciones_servicio (nombre, descripcion, "valorMetroCuadrado") VALUES('Mantencion multicapa', '- Determinación del espesor de película seca
# - Determinación del espesor de película húmeda
# - Determinación tiempos de secado
# - Evaluación en ambiente corrosivo
# - Determinación de sólidos por volumen
# * Incluye demarcacion y reparacion de juntas', 12000);