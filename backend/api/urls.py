from django.urls import include
from django.conf.urls import url

from rest_framework import routers

from api import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'Cliente', views.ClienteViewSet, basename='cliente')
router.register(r'Servicio', views.ServicioViewSet, basename='servicio')
router.register(r'Producto', views.ProductoViewSet, basename='producto')
router.register(r'CotizacionGET', views.CotizacionViewSetGET, basename='cotizacionget')
router.register(r'CotizacionPOST', views.CotizacionViewSetPOST, basename='cotizacionpost')
router.register(r'Cotiza', views.CotizaViewSet, basename='cotiza')
router.register(r'CotizaServiciosGET', views.CotizaServiciosViewSetGET, basename='cotizaservicioget')
router.register(r'CotizaServiciosPOST', views.CotizaServiciosViewSetPOST, basename='cotizaserviciopost')

urlpatterns = [
    url(r'^', include(router.urls)),
]
