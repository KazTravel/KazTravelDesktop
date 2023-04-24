from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

def form(isSuccess, error, result):
    return {
                "isSuccess": isSuccess,
                "errorMessage": error,
                "result": result
            }

# Create your views here.
class UserAPIView(APIView):
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            u = CostomUser.objects.all()
            return Response(form(True, None, UserSerializer(u, many=True).data))

        try:
            instance = CostomUser.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        return Response(form(True, None, UserSerializer(instance).data))
    
    def post(self, request):
        user = UserSerializer(data=request.data)
        if user.is_valid():
            validated_data = user.validated_data
            password = validated_data.pop("password")
            user = CostomUser(**validated_data)
            user.set_password(password)
            user.save()
            return Response(form(True, None, None))
        else :
            return Response(form(False, "Bad input", None))

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response(form(False,"Metod PUT is not allowed", None))

        try:
            instance = CostomUser.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        serializer = UserSerializer(data=request.data, instance=instance)
        if serializer.is_valid():
            serializer.save()
            return Response(form(True, None, None))
        else :
            return Response(form(False, "Bad input", None))
    
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response(form(False,"Metod DELETE is not allowed", None))

        try:
            instance = CostomUser.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        instance.delete()
        return Response(form(True, None, None))



class TourAPIView(APIView):
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            u = Tours.objects.all()
            return Response(form(True, None, TourSerializer(u, many=True).data))

        try:
            instance = Tours.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        return Response(form(True, None, TourSerializer(instance).data))
    
    def post(self, request):
        tour = TourSerializer(data=request.data)
        if tour.is_valid():
            validated_data = tour.validated_data
            tour = Tours(**validated_data)
            tour.save()
            return Response(form(True, None, None))
        else :
            return Response(form(False, "Bad input", None))

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response(form(False,"Metod PUT is not allowed", None))

        try:
            instance = Tours.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        serializer = TourSerializer(data=request.data, instance=instance)
        if serializer.is_valid():
            serializer.save()
            return Response(form(True, None, None))
        else :
            return Response(form(False, "Bad input", None))
    
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response(form(False,"Metod DELETE is not allowed", None))

        try:
            instance = Tours.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        instance.delete()
        return Response(form(True, None, None))


class SellAPIView(APIView):
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            u = Sells.objects.all()
            return Response(form(True, None, SellsSerializer(u, many=True).data))

        try:
            instance = Sells.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        return Response(form(True, None, SellsSerializer(instance).data))
    
    def post(self, request):
        tour = SellsSerializer(data=request.data)
        if tour.is_valid():
            validated_data = tour.validated_data
            tour = Sells(**validated_data)
            tour.save()
            return Response(form(True, None, None))
        else :
            return Response(form(False, "Bad input", None))

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response(form(False,"Metod PUT is not allowed", None))

        try:
            instance = Sells.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        serializer = SellsSerializer(data=request.data, instance=instance)
        if serializer.is_valid():
            serializer.save()
            return Response(form(True, None, None))
        else :
            return Response(form(False, "Bad input", None))
    
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response(form(False,"Metod DELETE is not allowed", None))

        try:
            instance = Sells.objects.get(pk=pk)
        except:
            return Response(form(False, "Object does not exist", None))
        
        instance.delete()
        return Response(form(True, None, None))