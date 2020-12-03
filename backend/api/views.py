from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated

from cotizaciones import models
from api import serializers


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = models.Cliente.objects.all().order_by('-id')
    serializer_class = serializers.ClienteSerializer
    # permission_classes = [IsAuthenticated]


class ServicioViewSet(viewsets.ModelViewSet):
    queryset = models.Servicio.objects.all().order_by('-id')
    serializer_class = serializers.ServicioSerializer
    # permission_classes = [IsAuthenticated]


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = models.Producto.objects.all().order_by('-id')
    serializer_class = serializers.ProductoSerializer
    # permission_classes = [IsAuthenticated]


class CotizacionViewSetGet(viewsets.ModelViewSet):
    queryset = models.Cotizacion.objects.all().order_by('-id')
    serializer_class = serializers.CotizacionSerializerGet
    # permission_classes = [IsAuthenticated]


class CotizacionViewSetPost(viewsets.ModelViewSet):
    queryset = models.Cotizacion.objects.all()
    serializer_class = serializers.CotizacionSerializerPost
    # permission_classes = [IsAuthenticated]


def generarPDF():
    pass
