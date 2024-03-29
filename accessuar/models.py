from django.db import models

# Create your models here.


class AccessuarFiles(models.Model):
    file =  models.FileField(upload_to='uploads/norma/downloads',max_length=500)
    generated = models.BooleanField(default=False)
    type =  models.CharField(max_length=20,default='simple',blank=True,null=True)
    created_at =    models.DateTimeField(auto_now_add=True)
    updated_at =    models.DateTimeField(auto_now=True)


class Norma(models.Model):
    data = models.JSONField(null=True,blank=True,default=dict)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)


class Siryo(models.Model):
    data = models.JSONField(null=True,blank=True,default=dict)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)

class TexcartaBase(models.Model):
    material =models.CharField(max_length=25)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)


class DataForText(models.Model):
    data = models.JSONField(null=True,blank=True,default=dict)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)