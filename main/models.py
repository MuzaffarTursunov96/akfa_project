from django.db import models


# Create your models here.



class Product(models.Model):
  sap_code_materials = models.CharField(max_length=100,blank=True,null=True)
  ktartkiy_tekst_materiala =models.CharField(max_length=255,blank=True,null=True)
  sap_kod_del_otxod =models.CharField(max_length=100,blank=True,null=True)
  new_sap_kod_del_otxod = models.CharField(max_length=100,blank=True,null=True)
  kratkiy_tekst_del_otxod =models.CharField(max_length=200,blank=True,null=True)
  id_klaes =models.CharField(max_length=100,blank=True,null=True)
  ch_profile_type =models.CharField(max_length=100,blank=True,null=True)
  kls_wast =models.CharField(max_length=50,blank=True,null=True)
  kls_wast_length =models.CharField(max_length=50,blank=True,null=True)
  ch_kls_optom =models.CharField(max_length=10,blank=True,null=True)
  kls_inner_id =models.CharField(max_length=50,blank=True,null=True)
  kls_inner_color =models.CharField(max_length=50,blank=True,null=True)
  kls_color =models.CharField(max_length=50,blank=True,null=True)
  ves_gp =models.CharField(max_length=150,blank=True,null=True)
  ves_del_odxod =models.CharField(max_length=250,blank=True,null=True)
  sena_za_shtuk =models.CharField(max_length=250,blank=True,null=True)
  sena_za_metr =models.CharField(max_length=250,blank=True,null=True)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)
  
  class Meta:
       ordering = ['-id']

class ExcelFiles(models.Model):
  file =models.FileField(upload_to='uploads/delovoyotxod/downloads/',max_length=500)
  generated =models.BooleanField(default=False)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)

class ExcelFilesOzmka(models.Model):
  file =models.FileField(upload_to='uploads/ozmka/ozmka/',max_length=500)
  generated =models.BooleanField(default=False)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)


class OrderDelovoyOtxod(models.Model):
  data = models.JSONField(default =dict)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)