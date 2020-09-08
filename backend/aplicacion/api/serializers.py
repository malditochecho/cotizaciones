from rest_framework import serializers
from cotizaciones import models


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = ('empresa', 'contacto', 'telefonoContacto', 'correoContacto')


class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Servicio
        fields = ('nombre', 'descripcion', 'valorMetroCuadrado',)


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Producto
        fields = ('producto', 'marca', 'fabricante', 'valorUnidad',)


class CotizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cotizacion
        fields = ('empresa', 'servicio', 'metrosCuadrados', 'producto', 'cantidadProducto',)
