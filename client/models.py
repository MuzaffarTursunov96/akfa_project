from django.db import models
from accounts.models import User


class Anod(models.Model):
    code_sveta = models.CharField(max_length =50,blank=True,null=True)
    tip_anod = models.CharField(max_length =50,blank=True,null=True)
    sposob_anod = models.CharField(max_length =50,blank=True,null=True)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)



class Order(models.Model):
    data = models.JSONField(default=dict)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,related_name='owner')
    checker = models.ForeignKey(User,on_delete=models.CASCADE,related_name='checker',blank=True,null=True)
    status = models.SmallIntegerField(default=0)
    order_type = models.CharField(max_length =20,blank=True,null=True)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)