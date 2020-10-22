from django.urls import include
from django.conf.urls import url

from rest_framework import routers

from api import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'Cliente', views.ClienteViewSet, basename='cliente')
router.register(r'Servicio', views.ServicioViewSet, basename='servicio')
router.register(r'Producto', views.ProductoViewSet, basename='producto')
router.register(r'Cotizacion', views.CotizacionViewSet, basename='cotizacion')

urlpatterns = [
    url(r'^', include(router.urls)),
]
