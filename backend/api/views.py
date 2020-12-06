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


class CotizacionViewSetGET(viewsets.ModelViewSet):
    queryset = models.Cotizacion.objects.all().order_by('-id')
    serializer_class = serializers.CotizacionSerializerGET
    # permission_classes = [IsAuthenticated]


class CotizacionViewSetPOST(viewsets.ModelViewSet):
    queryset = models.Cotizacion.objects.all()
    serializer_class = serializers.CotizacionSerializerPOST
    # permission_classes = [IsAuthenticated]


class CotizaViewSet(viewsets.ModelViewSet):
    queryset = models.Cotiza.objects.all()
    serializer_class = serializers.CotizaSerializer
    # permission_classes = [IsAuthenticated]


class CotizaServiciosViewSetGET(viewsets.ModelViewSet):
    queryset = models.CotizaServicios.objects.all()
    serializer_class = serializers.CotizaServiciosSerializerGET
    # permission_classes = [IsAuthenticated]


class CotizaServiciosViewSetPOST(viewsets.ModelViewSet):
    queryset = models.CotizaServicios.objects.all()
    serializer_class = serializers.CotizaServiciosSerializerPOST
    # permission_classes = [IsAuthenticated]

    


def generarPDF():
    pass
