from django.db import models

# Create your models here.

  

  

class AluminiyProduct(models.Model):
  material =models.CharField(max_length=250,blank=True,null=True)
  artikul =models.CharField(max_length=250,blank=True,null=True)
  section =models.CharField(max_length=100,blank=True,null=True)
  counter =models.IntegerField(default=0)
  gruppa_materialov =models.CharField(max_length=250,blank=True,null=True)
  kratkiy_tekst_materiala =models.CharField(max_length=250,blank=True,null=True)
  kombinirovanniy =models.CharField(max_length=250,blank=True,null=True)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)



class AluFile(models.Model):
  file =models.FileField(upload_to='uploads/aluminiy/downloads/',max_length=500)
  generated =models.BooleanField(default=False)
  file_type =models.CharField(max_length=255,blank=True,null=True)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)


  

class RazlovkaObichniy(models.Model):
  esap_code =models.CharField(max_length=100)
  ekratkiy =models.CharField(max_length=150)
  zsap_code =models.CharField(max_length=100)
  zkratkiy =models.CharField(max_length=150)
  psap_code =models.CharField(max_length=100)
  pkratkiy =models.CharField(max_length=150)
  ssap_code =models.CharField(max_length=100)
  skratkiy =models.CharField(max_length=150)
  asap_code =models.CharField(max_length=100)
  akratkiy =models.CharField(max_length=150)
  lsap_code =models.CharField(max_length=100)
  lkratkiy =models.CharField(max_length=150)
  nsap_code =models.CharField(max_length=100)
  nkratkiy =models.CharField(max_length=150)
  sap_code7 =models.CharField(max_length=100)
  kratkiy7 =models.CharField(max_length=150)
  fsap_code =models.CharField(max_length=100,default='')
  fkratkiy =models.CharField(max_length=150,default='')
  sap_code75 =models.CharField(max_length=100,default='')
  kratkiy75 =models.CharField(max_length=150,default='')
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)

class RazlovkaTermo(models.Model):
  parent_id =models.IntegerField(default=0)
  esap_code =models.CharField(max_length=100)
  ekratkiy =models.CharField(max_length=150)
  zsap_code =models.CharField(max_length=100)
  zkratkiy =models.CharField(max_length=150)
  psap_code =models.CharField(max_length=100)
  pkratkiy =models.CharField(max_length=150)
  ssap_code =models.CharField(max_length=100)
  skratkiy =models.CharField(max_length=150)
  asap_code =models.CharField(max_length=100)
  akratkiy =models.CharField(max_length=150)
  nsap_code =models.CharField(max_length=100)
  nkratkiy =models.CharField(max_length=150)
  ksap_code =models.CharField(max_length=100)
  kratkiy =models.CharField(max_length=150)
  lsap_code =models.CharField(max_length=100)
  lkratkiy =models.CharField(max_length=150)
  sap_code7 =models.CharField(max_length=100)
  kratkiy7 =models.CharField(max_length=150)
  fsap_code =models.CharField(max_length=100,default='')
  fkratkiy =models.CharField(max_length=150,default='')
  sap_code75 =models.CharField(max_length=100,default='')
  kratkiy75 =models.CharField(max_length=150,default='')
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)


class NewAndOld(models.Model):
  artikul = models.CharField(max_length=50)
  komponent =models.CharField(max_length=50)
  oldername = models.CharField(max_length=50)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)



class Price(models.Model):
  tip_pokritiya = models.CharField(max_length=150)
  tip = models.CharField(max_length=150)
  price = models.CharField(max_length=150)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)


class LengthOfProfile(models.Model):
  artikul = models.CharField(max_length=100)
  length = models.CharField(max_length=150)
  ves_za_shtuk = models.CharField(max_length=150)
  ves_za_metr = models.CharField(max_length=150)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)



class ExchangeValues(models.Model):
  valute = models.CharField(max_length=100)
  start_data = models.CharField(max_length=15,blank=True,null=True)
  end_data = models.CharField(max_length=15,blank=True,null=True)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)

class AluProfilesData(models.Model):
    data = models.JSONField(null=True,blank=True,default=dict)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)

class AluFileBazaprofiles(models.Model):
  file =models.FileField(upload_to='uploads/aluminiy/downloads/',max_length=500)
  file_type =models.CharField(max_length=255,blank=True,null=True)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)


class BrendKraska(models.Model):
  brend = models.CharField(max_length=10,blank=True,null=True)  
  kraska = models.CharField(max_length=5,blank=True,null=True)
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)  


class Mastergroup(models.Model):
  sep = models.CharField(max_length=40,blank=True,null=True)  
  pokritiya = models.CharField(max_length=40,blank=True,null=True)  
  combination = models.CharField(max_length=40,blank=True,null=True)  
  new_group = models.CharField(max_length=40,blank=True,null=True)  
  sena_usd = models.CharField(max_length=40,blank=True,null=True)  
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)  

class BuxgalterNazvaniye(models.Model):
  colected = models.CharField(max_length=40,blank=True,null=True)  
  combination = models.CharField(max_length=40,blank=True,null=True)  
  surface_treatment = models.CharField(max_length=40,blank=True,null=True)  
  zavod_aluminiy = models.CharField(max_length=80,blank=True,null=True)  
  zavod_aluminiy_benkam = models.CharField(max_length=80,blank=True,null=True)  
  created_at =models.DateTimeField(auto_now_add=True)
  updated_at =models.DateTimeField(auto_now=True)  

