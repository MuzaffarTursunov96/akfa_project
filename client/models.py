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
    theme =models.CharField(max_length =200,blank=True,null=True)
    id_for_jira = models.CharField(max_length =100,blank=True,null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,related_name='owner')
    checker = models.ForeignKey(User,on_delete=models.CASCADE,related_name='checker',blank=True,null=True)
    partner = models.ForeignKey(User,on_delete=models.CASCADE,related_name='partner',blank=True,null=True)
    status = models.SmallIntegerField(default=1)
    order_type = models.CharField(max_length =20,blank=True,null=True)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)

class OrderHistory(models.Model):
    order = models.ForeignKey(Order,related_name='history_order',on_delete=models.CASCADE)
    data = models.JSONField(default=dict)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)

class OrderDetail(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField(default='',blank=True)
    status = models.SmallIntegerField(default=1)
    is_opened = models.BooleanField(blank=True,null=True,default=False)
    file = models.FileField(upload_to='client/order/',blank=True,null=True)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)