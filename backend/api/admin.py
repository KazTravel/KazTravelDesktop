from django.contrib import admin
from api.models import *

# Register your models here.
@admin.register(CountryCity)
class CategoryCountryCity(admin.ModelAdmin):
    list_display = ('id', 'name', 'info')
@admin.register(Hotel)
class CategoryHotel(admin.ModelAdmin):
    list_display = ('id', 'name', 'info')

@admin.register(Tours)
class CategoryTours(admin.ModelAdmin):
    list_display = ('id', 'name', 'info', 'rating', 'cost', 'free_places', 'max_places', 'picture_list', 'date_start', 'date_end', 'hotel_id')