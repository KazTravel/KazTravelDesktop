from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CostomUser
        fields = ['id', 'username','email', 'password', 'first_name', 'last_name', 'balance']
        extra_kwargs = {'id': {'read_only': True}, 'password': {'write_only': True}}
        

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tours
        fields = '__all__'
        extra_kwargs = {'id': {'read_only': True}, }

class SellsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tours
        fields = '__all__'