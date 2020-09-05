from django.contrib import admin

from cotizaciones import models


class ClienteAdmin(admin.ModelAdmin):
    fields = ('empresa', 'contacto', 'telefonoContacto', 'correoContacto', )


class CotizacionAdmin(admin.ModelAdmin):
    pass


# Register your models here.
admin.site.register(models.Cliente)
admin.site.register(models.Servicio)
admin.site.register(models.Producto)
admin.site.register(models.Cotizacion, CotizacionAdmin)