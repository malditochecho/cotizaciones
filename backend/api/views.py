from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated

from cotizaciones import models
from api import serializers


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = models.Cliente.objects.all()
    serializer_class = serializers.ClienteSerializer
    # permission_classes = [IsAuthenticated]


class ServicioViewSet(viewsets.ModelViewSet):
    queryset = models.Servicio.objects.all()
    serializer_class = serializers.ServicioSerializer
    # permission_classes = [IsAuthenticated]


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = models.Producto.objects.all()
    serializer_class = serializers.ProductoSerializer
    # permission_classes = [IsAuthenticated]


class CotizacionViewSet(viewsets.ModelViewSet):
    queryset = models.Cotizacion.objects.all()
    serializer_class = serializers.CotizacionSerializer
    # permission_classes = [IsAuthenticated]


def generarPDF():
    pass
