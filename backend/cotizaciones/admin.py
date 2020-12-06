from django.contrib import admin
from cotizaciones import models


class ClienteAdmin(admin.ModelAdmin):
    fields = ('empresa', 'contacto', 'telefonoContacto', 'correoContacto', )


admin.site.register(models.Cliente)
admin.site.register(models.Servicio)
admin.site.register(models.Producto)
admin.site.register(models.Cotizacion)
admin.site.register(models.Cotiza)
admin.site.register(models.CotizaServicios)