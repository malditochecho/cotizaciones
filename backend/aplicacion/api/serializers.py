from rest_framework import serializers
from cotizaciones import models


class ClienteSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:cliente-detail')

    class Meta:
        model = models.Cliente
        fields = ('url', 'empresa', 'contacto', 'telefonoContacto', 'correoContacto')


class ServicioSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:servicio-detail')

    class Meta:
        model = models.Servicio
        fields = ('url', 'nombre', 'descripcion', 'valorMetroCuadrado',)


class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:producto-detail')

    class Meta:
        model = models.Producto
        fields = ('url', 'producto', 'marca', 'fabricante', 'valorUnidad',)


class CotizacionSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:cotizacion-detail')

    class Meta:
        model = models.Cotizacion
        fields = ('url', 'id', 'empresa', 'servicio', 'metrosCuadrados', 'producto', 'cantidadProducto',)
        depth = 2


"""

Para validar los serializadores

./manage.py shell
from api.serializers import *
print(repr(ClienteSerializer()))
print(repr(ServicioSerializer()))
print(repr(ProductoSerializer()))
print(repr(CotizacionSerializer()))

"""