from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CostomUser(AbstractUser):
    balance = models.FloatField(default=0)

    def __str__(self):
        return f'{self.id}: {self.username}'

class CountryCity(models.Model):
    name = models.CharField(max_length=255)
    info = models.TextField()
    def __str__(self):
        return f'{self.id}: {self.name}'

class Hotel(models.Model):
    name = models.CharField(max_length=255)
    info = models.TextField()
    countryCity_id = models.ForeignKey(CountryCity, on_delete=models.CASCADE, related_name = 'countryCity_id')
    def __str__(self):
        return f'{self.id}: {self.name}'

class Tours(models.Model):
    name = models.CharField(max_length=255)
    info = models.TextField()
    rating = models.FloatField()
    cost = models.FloatField()
    free_places = models.IntegerField()
    max_places = models.IntegerField()
    picture_list = models.TextField()
    date_start = models.DateField()
    date_end = models.DateField()
    hotel_id = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name = 'hotel_id')
    def __str__(self):
        return f'{self.id}: {self.name}'

class Sells(models.Model):
    user_id = models.ForeignKey(CostomUser, on_delete=models.CASCADE, related_name = 'user_id')
    tour_id = models.ForeignKey(Tours, on_delete=models.CASCADE, related_name = 'tour_id')
