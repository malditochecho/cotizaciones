from django.contrib import admin

# mati
# from django.contrib.admin import AdminSite

from cotizaciones import models


# mati
# class MyAdminSite(AdminSite):
#     site_header = 'Orrego Hnos'
#     index_title = 'Orrego admin'
#     site_title = 'Orrego Hermanos'




class ClienteAdmin(admin.ModelAdmin):
    fields = ('empresa', 'contacto', 'telefonoContacto', 'correoContacto', )


class CotizacionAdmin(admin.ModelAdmin):
    pass


# mati
# admin_site = MyAdminSite(name='myadmin')

# Register your models here.
admin.site.register(models.Cliente)
admin.site.register(models.Servicio)
admin.site.register(models.Producto)
admin.site.register(models.Cotizacion, CotizacionAdmin)
