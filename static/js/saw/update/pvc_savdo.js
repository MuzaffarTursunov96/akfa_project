class BasePokritiya{
    constructor(
        id = NaN,//done 
        full = false,//done
        nazvaniye_system = NaN,//done
        camera = NaN,//done
        base_artikul = NaN,//done
        kod_k_component = NaN,//done
        tip_pokritiya = NaN,//done
        kod_svet_zames = NaN,//done
        dlina = NaN,//done
        svet_lamplonka_snaruji = NaN,//done
        kod_lam_sn = NaN,//done
        svet_lamplonka_vnutri = NaN,//done
        kod_lam_vn = NaN,//done
        kod_svet_rezini = NaN,//done
        svet_rezin = NaN,//done
        kod_nakleyki = NaN,//done
        nadpis_nakleyki = NaN,//done
        kratkiy_tekst = NaN,//done
        sap_code = NaN,//done
        krat = NaN,//done
        comment = NaN,//done
        pickupdate = NaN,//done
        sena_c_nds = NaN,//done
        sena_bez_nds = NaN,//done
        online_id = NaN,//done
        nazvaniye_ruchnoy = NaN,//done
        svet_product=NaN,//done
        group_zakup=NaN,//done
        group=NaN,//done
        tip=NaN,//done
        segment = NaN,//done
        buxgalter_tovar = NaN,//done
        buxgalter_uchot = NaN,//done
        bazoviy_edin = NaN,//done
        alter_edin = NaN,//done
        stoimost_baza = NaN,//done
        stoimost_alter = NaN,//done
        status_online = NaN,//done
        zavod_name = NaN,//done
        diller = NaN,//done
        tip_clenta = NaN,//done
        artikul = NaN,//done

        is_iklyuch = false,//done
        is_active = false
        ) {
            this.id = id;//done 
            this.full = full;//done
            this.nazvaniye_system = nazvaniye_system;
            this.camera = camera;
            this.base_artikul = base_artikul;
            this.kod_k_component = kod_k_component;
            this.tip_pokritiya = tip_pokritiya;
            this.kod_svet_zames = kod_svet_zames;//done
            this.dlina = dlina;//done
            this.svet_lamplonka_snaruji = svet_lamplonka_snaruji;
            this.kod_lam_sn = kod_lam_sn;//done
            this.svet_lamplonka_vnutri = svet_lamplonka_vnutri;
            this.kod_lam_vn = kod_lam_vn;//done
            this.kod_svet_rezini = kod_svet_rezini;//done
            this.svet_rezin = svet_rezin;
            this.kod_nakleyki = kod_nakleyki;//done
            this.nadpis_nakleyki = nadpis_nakleyki;
            this.gruppa_materialov = 'PVCGP';
            this.kratkiy_tekst = kratkiy_tekst;
            this.sap_code = sap_code;//done
            this.krat = krat;//done
            this.comment = comment;//done
            this.pickupdate = pickupdate;//done
            this.sena_c_nds = sena_c_nds;//done
            this.sena_bez_nds = sena_bez_nds;//done
            this.online_id = online_id;//done
            this.nazvaniye_ruchnoy = nazvaniye_ruchnoy;//done
            this.svet_product = svet_product;//done
            this.group_zakup = group_zakup;//done
            this.group = group;//done
            this.tip = tip;//done
            this.segment = segment;
            this.buxgalter_tovar = buxgalter_tovar;
            this.buxgalter_uchot = buxgalter_uchot;
            this.bazoviy_edin = bazoviy_edin;//done
            this.alter_edin = alter_edin;
            this.stoimost_baza = stoimost_baza;
            this.stoimost_alter = stoimost_alter;
            this.status_online = status_online;//done
            this.zavod_name = zavod_name;//done
            this.diller = diller;//done
            this.tip_clenta = tip_clenta;//done
            this.artikul = artikul;//done
          
    
            this.is_iklyuch = is_iklyuch;//done
            this.is_active = is_active;
    }
    get_kratkiy_tekst(){
       
        switch(this.id){
            case 1: if(this.is_iklyuch){
                        if(this.dlina && this.kod_svet_zames && this.kod_nakleyki){
        
                        if(this.is_active){
                            
                            if (this.online_id && this.nazvaniye_ruchnoy){
            
                            
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' +this.kod_nakleyki,'accept':true}
                            }else{
                                
                                return {'text':this.artikul+ '  ' + this.kod_svet_zames + ' L' + this.dlina +'  ' +this.kod_nakleyki,'accept':false}
                            }
                            
                        }else{
                            
                            if (this.tip_clenta && this.sena_bez_nds && this.sena_c_nds && this.pickupdate && this.nazvaniye_ruchnoy && this.svet_product && this.group_zakup && this.group && this.tip && this.bazoviy_edin && this.status_online){
                                
                                
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' +this.kod_nakleyki,'accept':true}
                            }else{
                                
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' +this.kod_nakleyki,'accept':false}
                            }
                        } 
            
                        }else{
                            return {'text':'XXXXXXXX','accept':false}
                        }
    
                }else{
                    if(this.kod_svet_rezini && this.dlina && this.kod_svet_zames && this.kod_nakleyki){
            
                        if(this.is_active){
                            if (this.online_id && this.nazvaniye_ruchnoy){
            
                            
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':true}
                            }else{
                                
                                return {'text':this.artikul+ '  ' + this.kod_svet_zames + ' L' + this.dlina +'  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':false}
                            }
                            
                        }else{
                           
                            if (this.tip_clenta && this.sena_bez_nds && this.sena_c_nds && this.pickupdate && this.nazvaniye_ruchnoy && this.svet_product && this.group_zakup && this.group && this.tip && this.bazoviy_edin && this.status_online){
                                
                                
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':true}
                            }else{
                                
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':false}
                            }
                        } 
            
                    }else{
                        return {'text':'XXXXXXXX','accept':false}
                    }
                }break;
            case 2:if(this.is_iklyuch){
                    if(this.dlina && this.kod_lam_vn && this.kod_lam_sn && this.kod_nakleyki && this.kod_svet_zames){
            
                        if(this.is_active){
                            if (this.online_id && this.nazvaniye_ruchnoy){
            
                                return {'text':this.artikul + '  '+this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_nakleyki,'accept':true}
                            }else{
                                return {'text':this.artikul+ '  ' + this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  ' +this.kod_nakleyki,'accept':false}
                            }
            
                        }else{
                            if (this.tip_clenta && this.sena_bez_nds && this.sena_c_nds && this.pickupdate && this.nazvaniye_ruchnoy && this.svet_product && this.group_zakup && this.group && this.tip && this.bazoviy_edin && this.status_online){
            
                                return {'text':this.artikul+ '  ' + this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  ' +this.kod_nakleyki,'accept':true}
                            }else{
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  ' +this.kod_nakleyki,'accept':false}
                            }
                        } 
            
                    }else{
                        return {'text':'XXXXXXXX','accept':false}
                    }
                }else{
        
                    if(this.dlina && this.kod_lam_vn && this.kod_lam_sn && this.kod_nakleyki && this.kod_svet_rezini && this.kod_svet_zames){
            
                        if(this.is_active){
                            if (this.online_id && this.nazvaniye_ruchnoy){
            
                                return {'text':this.artikul + '  '+this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_svet_rezini +'  '+this.kod_nakleyki,'accept':true}
                            }else{
                                return {'text':this.artikul+ '  ' + this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':false}
                            }
            
                        }else{
                        if (this.tip_clenta && this.sena_bez_nds && this.sena_c_nds && this.pickupdate && this.nazvaniye_ruchnoy && this.svet_product && this.group_zakup && this.group && this.tip && this.bazoviy_edin && this.status_online){
            
                                return {'text':this.artikul+ '  ' + this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':true}
                            }else{
                                return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':false}
                            }
                        } 
            
                    }else{
                        return {'text':'XXXXXXXX','accept':false}
                    }
                }break;
        }
       
       
    }
  }

  
text =""
 
var jsonData = JSON.parse(JSON.parse(document.getElementById('items-data').textContent)).data;

data_base = {}

for(var key1 in jsonData){
    data_base[key1] = new BasePokritiya();
    Object.assign( data_base[key1] , jsonData[key1]);
}




i = 0
var order_type =$('#order_type').text()
for (var key in jsonData) {
i+=1
text +=`
<tr id='table_tr` +String(i)+`' >                   
<td >
    <div class="input-group input-group-sm mb-1" style='width:150px;'>
        <span id='nazvaniye_system` +String(i)+`'style="text-transform: uppercase;font-size: 10px; font-weight:700;padding:5px;width:150px" ></span>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        <b><span id='camera` +String(i)+`'style="text-transform: uppercase; font-size:12px;padding-left:5px"></span></b>
    </div>
</td>
<td >
    <input type="text" id="searchInput` +String(i)+`" class=" form-control pb-1" style='width:150px' placeholder="Search for options">
    <div class="input-group input-group-sm mb-1">
    <select id="mySelect` +String(i)+`"  class=" form-control" style='display:none' multiple="multiple" ></select>
    </div>
    <span style='display:none' id='artikul_pvc` +String(i)+`'></span>
    <span style='display:none' id='iskyucheniye` +String(i)+`'></span>
    <span style='display:none' id='component` +String(i)+`'></span>
</td>


<td >
    <div class="input-group input-group-sm mb-1">
        <b><span  id ='kod_komponent` +String(i)+`'style="text-transform: uppercase;font-size: 12px;padding-left:5px;"></span></b>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        <select class="form-select" aria-label="" style="width: 177px;text-transform: uppercase; font-size:12px; padding-right:0px;" onchange="tip_pokritiya_selected(`+String(i)+`,this.value)" disabled id='tip_pokritiya`+String(i)+`' required>
            <option  selected ></option>
            <option value="1" >Неламинированный</option>
            <option value="2" >Ламинированный</option>
            </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1" style="width: 70px;">
    
    <select class="form-select" aria-label="" style="width: 70px;"  disabled id='kod_svet_zames`+String(i)+`' onchange="create_kratkiy_tekst(`+String(i)+`)">
        <option  value="" selected ></option>
        <option value="F8" >F8</option>
        <option value="PE" >PE</option>
        <option value="N1" >N1</option>
        <option value="EG1" >EG1</option>
        <option value="LE" >LE</option>
        <option value="BR1" >BR1</option>
        <option value="WT7" >WT7</option>
        <option value="BR10" >BR10</option>
        <option value="W6" >W6</option>
        <option value="N2" >N2</option>
    </select>
    
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        <input type="text" class="form-control " style='width:50px' onkeyup='create_kratkiy_tekst(`+String(i)+`)' disabled aria-describedby="inputGroup-sizing-sm" name ='length`+String(i)+`' id="length`+String(i)+`"  >
    </div>
</td>

<td >
    <div class="input-group input-group-sm mb-1">    
    <select class="form-select" aria-label="" style="width: 220px;" onchange="svet_lamplonka_snaruji_selected(`+String(i)+`,this.value)" disabled id='svet_lamplonka_snaruji`+String(i)+`'>
        <option  value="" selected></option>
        <option value="0027">Золотой дуб IW</option>
        <option value="0300">Дуб мокко IW</option>
        <option value="0549">Красный Орех IW</option>
        <option value="0550">Орех IW</option>
        <option value="1004">Мет платин</option>
        <option value="1005">Мет серый кварц</option>
        <option value="1006">Мет серый антрацит</option>
        <option value="1012">Алюкс антрацит</option>
        <option value="1015">АЛЮКС БЕЛЫЙ АЛЮМИН</option>
        <option value="1016">Алюкс серый алюмин</option>
        <option value="2007">Красный орех</option>
        <option value="2012">Орех</option>
        <option value="2025">Светлый дуб</option>
        <option value="2036">Золотой дуб</option>
        <option value="2048">Дуб мокко</option>
        <option value="3001">Терновый дуб солод</option>
        <option value="3002">Шеф Альпийский дуб</option>
        <option value="3003">Гранитовый шеф дуб</option>
        <option value="3042">Дерево бальза</option>
        <option value="3043">Вишня амаретто</option>
        <option value="3059">Орех терра</option>
        <option value="3062">Грецкий орех</option>
        <option value="3077">Винчестер</option>
        <option value="3081">Шеф дуб светлый</option>
        <option value="3083">Сантана</option>
        <option value="3086">ШЕФ ДУБ СЕРЫЙ</option>
        <option value="3091">Шеф дуб</option>
        <option value="3094">Орех Ребраун</option>
        <option value="4687">Кенсингтон серый</option>
        <option value="5057">Бриллиантвейс</option>
        <option value="6700">Темный дуб</option>
        <option value="5F00">Шеф дуб серый LG</option>
        <option value="A508">Антрацит сер ADO п</option>
        <option value="EL01">Золотой дуб Элезго</option>
        <option value="EL02">Горный Элезго</option>
        <option value="KC01">Горный KCC</option>
        <option value="S103">Красный орех ADO п</option>
        <option value="S141">Дуб мокко ADO п</option>
        <option value="S150">Золотой дуб ADO п</option>
        <option value="S500">Золотой дуб ADO</option>
        <option value="S508">Антрацит серый ADO</option>
        <option value="S541">Дуб мокко ADO</option>
        <option value="5003">Темный Антрацит</option>
        <option value="S513">Красный орех ADO</option>
        <option value="S540">Золотой дуб S540</option>
        <option value="5F01">Шеф дуб сер 5F01</option>
        <option value="1022">Ocean Blue</option>
        <option value="ASA1128">ASA1128</option>
        <option value="6030">МАТОВЫЙ БЕЛЫЙ</option>
        <option value="6062">МАТОВЫЙ ЧЁРНЫЙ</option>
        <option value="2509">АНТРАЦИТ СЕРЫЙ LG</option>
        <option value="9252">Винчестер Renolit</option>
        <option value="XXXX">XXXX</option>
    </select>
    </div>
</td>

<td >
    <div class="input-group input-group-sm mb-1">
        <div>
            <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;padding-left:35%;" id ='code_lamplonka_snaruji` +String(i)+`'></span>
        </div>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        <select class="form-select" aria-label="" style="width: 220px;" onchange="svet_lamplonka_vnutri_selected(`+String(i)+`,this.value)" disabled id='svet_lamplonka_vnutri`+String(i)+`'>
            <option  value="" selected></option>
            <option value="0027">Золотой дуб IW</option>
            <option value="0300">Дуб мокко IW</option>
            <option value="0549">Красный Орех IW</option>
            <option value="0550">Орех IW</option>
            <option value="1004">Мет платин</option>
            <option value="1005">Мет серый кварц</option>
            <option value="1006">Мет серый антрацит</option>
            <option value="1012">Алюкс антрацит</option>
            <option value="1015">АЛЮКС БЕЛЫЙ АЛЮМИН</option>
            <option value="1016">Алюкс серый алюмин</option>
            <option value="2007">Красный орех</option>
            <option value="2012">Орех</option>
            <option value="2025">Светлый дуб</option>
            <option value="2036">Золотой дуб</option>
            <option value="2048">Дуб мокко</option>
            <option value="3001">Терновый дуб солод</option>
            <option value="3002">Шеф Альпийский дуб</option>
            <option value="3003">Гранитовый шеф дуб</option>
            <option value="3042">Дерево бальза</option>
            <option value="3043">Вишня амаретто</option>
            <option value="3059">Орех терра</option>
            <option value="3062">Грецкий орех</option>
            <option value="3077">Винчестер</option>
            <option value="3081">Шеф дуб светлый</option>
            <option value="3083">Сантана</option>
            <option value="3086">ШЕФ ДУБ СЕРЫЙ</option>
            <option value="3091">Шеф дуб</option>
            <option value="3094">Орех Ребраун</option>
            <option value="4687">Кенсингтон серый</option>
            <option value="5057">Бриллиантвейс</option>
            <option value="6700">Темный дуб</option>
            <option value="5F00">Шеф дуб серый LG</option>
            <option value="A508">Антрацит сер ADO п</option>
            <option value="EL01">Золотой дуб Элезго</option>
            <option value="EL02">Горный Элезго</option>
            <option value="KC01">Горный KCC</option>
            <option value="S103">Красный орех ADO п</option>
            <option value="S141">Дуб мокко ADO п</option>
            <option value="S150">Золотой дуб ADO п</option>
            <option value="S500">Золотой дуб ADO</option>
            <option value="S508">Антрацит серый ADO</option>
            <option value="S541">Дуб мокко ADO</option>
            <option value="5003">Темный Антрацит</option>
            <option value="S513">Красный орех ADO</option>
            <option value="S540">Золотой дуб S540</option>
            <option value="5F01">Шеф дуб сер 5F01</option>
            <option value="1022">Ocean Blue</option>
            <option value="ASA1128">ASA1128</option>
            <option value="6030">МАТОВЫЙ БЕЛЫЙ</option>
            <option value="6062">МАТОВЫЙ ЧЁРНЫЙ</option>
            <option value="2509">АНТРАЦИТ СЕРЫЙ LG</option>
            <option value="9252">Винчестер Renolit</option>
            <option value="XXXX">XXXX</option>
        </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        <div>
            <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;padding-left:35%" id='code_lamplonka_vnutri`+String(i)+`'></span>
        </div>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1" style="width: 60px;">
    <select class="form-select" aria-label="" style="width: 50px;border-color:red;display:none"   id='kod_svet_rezini`+String(i)+`' onchange="create_kratkiy_tekst(`+String(i)+`)">
        <option  value="" selected ></option>
        <option value="Чёрная резина" >BR</option>
        <option value="Серая резина" >GR</option>
        <option value="Без резины" >NR</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        
            <span class =' text-center ' style="font-size:10px; font-weight: bold; text-transform: uppercase;" id='svet_rezin`+String(i)+`'></span>
        
    </div>
</td>
<td >
    <input type="text" id="nakleykaInput` +String(i)+`" class=" form-control pb-1" style='width:150px' placeholder="Search for options">
    <div class="input-group input-group-sm mb-1">
    <select id="nakleykaSelect` +String(i)+`"  class=" form-control" style='display:none' multiple="multiple" ></select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        
            <span class ='text-center ' style="font-size:10px; font-weight: bold; text-transform: uppercase;padding:5px" id='nadpis_nakleyki`+String(i)+`'></span>
        
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
        <div>
            <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;" >PVCGP</span>
        </div>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <span class =' text-center ' style="font-size: small; width:250px; font-weight: bold; text-transform: uppercase;" id='kratkiy_tekst`+String(i)+`'></span>
    </div>
</td>

<td >
    <div class="input-group input-group-sm mb-1">
    
    <input type='text' class=" form-control " style=" width: 110px; font-size:10px; display:none; height:32px" id='sap_code_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>

    </div>
</td> 
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style=" width: 220px; font-size:10px; display:none; height:32px"  id='kratkiy_tekst_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
    </div>
</td>

<td >
    <div class="input-group input-group-sm mb-1">
    <textarea   rows='1' class=" form-control " style="width: 220px; font-size:10px;display:none;height:32px" id='comment`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></textarea >
    </div>
</td>
<td >
    <input  style='display:none;border-color:red; line-height:15px' type="date" class="form-control" id="pickupdate`+String(i)+`" onchange='create_kratkiy_tekst(`+String(i)+`)'>      
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px; display:none;height:32px" id='sena_c_nds`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px; display:none; height:32px" id='sena_bez_nds`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px;display:none;height:32px " id='online_savdo_id`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <textarea   rows='1' class=" form-control " style="border-color:red; width: 220px; font-size:10px; display:none; height:32px" id='nazvaniye_ruchnoy`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></textarea >
    </div>
</td>

<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 110px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;"  id='svet_product`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
    <option  value='' selected></option>
    <option   value="LAM">LAM</option>
    <option   value="WHITE">WHITE</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 230px;text-transform: uppercase; font-size:12px; padding-right:0px;  border-color:red;display:none;" id='group_zakup`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
    <option  selected></option>
    <option value="PVX OQ (Navoiy)">PVX OQ (Navoiy)</option>
    <option value="PVX LAM (Navoiy)">PVX LAM (Navoiy)</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1"  >
    <select class="form-select" aria-label="" id='group`+String(i)+`' style="width: 240px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;"  id='tipr`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)'required>
        <option  selected></option>
        <option value="5200 QVT PVC (NAVOIY)">5200 QVT PVC (NAVOIY)</option>
        <option value="5200 QVT PVC RETPEN (NAVOIY)">5200 QVT PVC RETPEN (NAVOIY)</option>
        <option value="5200 TRIO PVC (NAVOIY)">5200 TRIO PVC (NAVOIY)</option>
        <option value="5800 ENGELBERG PVC (NAVOIY)">5800 ENGELBERG PVC (NAVOIY)</option>
        <option value="5800 QVT PVC (NAVOIY)">5800 QVT PVC (NAVOIY)</option>
        <option value="5800 TRIO PVC (NAVOIY)">5800 TRIO PVC (NAVOIY)</option>
        <option value="6000 AGROMIR (NAVOIY)">6000 AGROMIR (NAVOIY)</option>
        <option value="6000 EKO PVC (NAVOIY)">6000 EKO PVC (NAVOIY)</option>
        <option value="6000 EKO PVC RETPEN (NAVOIY)">6000 EKO PVC RETPEN (NAVOIY)</option>
        <option value="6000 QVT ALUTEX (NAVOIY)">6000 QVT ALUTEX (NAVOIY)</option>
        <option value="6000 QVT PVC (NAVOIY)">6000 QVT PVC (NAVOIY)</option>
        <option value="6000 QVT PVC RETPEN (NAVOIY)">6000 QVT PVC RETPEN (NAVOIY)</option>
        <option value="6000 TRIO PVC (NAVOIY)">6000 TRIO PVC (NAVOIY)</option>
        <option value="7000 AKFA (NAVOIY)">7000 AKFA (NAVOIY)</option>
        <option value="7000 ENGELBERG PVC (NAVOIY)">7000 ENGELBERG PVC (NAVOIY)</option>
        <option value="KONYUSHNYA">KONYUSHNYA</option>
        <option value="LAM 5200 TRIO PVC (NAVOIY)">LAM 5200 TRIO PVC (NAVOIY)</option>
        <option value="LAM 5800 ENGELBERG PVC">LAM 5800 ENGELBERG PVC</option>
        <option value="LAM 5800 TRIO PVC (NAVOIY)">LAM 5800 TRIO PVC (NAVOIY)</option>
        <option value="LAM 6000 QVT ALUTEX">LAM 6000 QVT ALUTEX</option>
        <option value="LAM 6000 QVT PVC (NAVOIY)">LAM 6000 QVT PVC (NAVOIY)</option>
        <option value="LAM 6000 QVT PVC RETPEN (NAVOIY)">LAM 6000 QVT PVC RETPEN (NAVOIY)</option>
        <option value="LAM 6000 TRIO ALUTEX">LAM 6000 TRIO ALUTEX</option>
        <option value="LAM 6000 TRIO PVC (NAVOIY)">LAM 6000 TRIO PVC (NAVOIY)</option>
        <option value="LAM 7000 AKFA (NAVOIY)">LAM 7000 AKFA (NAVOIY)</option>
        <option value="LAM 7000 ENGELBERG PVC (NAVOIY)">LAM 7000 ENGELBERG PVC (NAVOIY)</option>
        <option value="LAM 7600 ENGELBERG PVC (NAVOIY)">LAM 7600 ENGELBERG PVC (NAVOIY)</option>
        <option value="LAM LAMBRI PVC (NAVOIY)">LAM LAMBRI PVC (NAVOIY)</option>
        <option value="LAM OTKOS Prof. (NAVOIY)">LAM OTKOS Prof. (NAVOIY)</option>
        <option value="LAM Sendvich Panel">LAM Sendvich Panel</option>
        <option value="LAMBRI PVC (NAVOIY)">LAMBRI PVC (NAVOIY)</option>
        <option value="PODOKONNIK (LAM) (NAVOIY)">PODOKONNIK (LAM) (NAVOIY)</option>
        <option value="PODOKONNIK (LAM) (RETPEN)">PODOKONNIK (LAM) (RETPEN)</option>
        <option value="PODOKONNIK (OQ) (NAVOIY)">PODOKONNIK (OQ) (NAVOIY)</option>
        <option value="PODOKONNIK (OQ) (RETPEN)">PODOKONNIK (OQ) (RETPEN)</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;"  id='tip`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)'required>
        <option  selected></option>
        <option value="Сырье">Сырье</option>
        <option value="Готовый продукт">Готовый продукт</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 145px;text-transform: uppercase; font-size:12px; padding-right:0px; display:none;" id='segment`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option value="Aldoks">Aldoks</option>
        <option value="Стандарт">Стандарт</option>
        <option value="Премиум">Премиум</option>
        <option value="Аксессуар">Аксессуар</option>
        <option value="Falcon">Falcon</option>
        <option value="Mebel">Mebel</option>
        <option value="RETPEN 8-10%">RETPEN 8-10%</option>
        <option value="RETPEN 10-12%">RETPEN 10-12%</option>
        <option value="RETPEN 17%">RETPEN 17%</option>
        <option value="Аксессуар 2">Аксессуар 2</option>
        <option value="Podokonnik EKO">Podokonnik EKO</option>
        <option value="Alumin arzon">Alumin arzon</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 520px;text-transform: uppercase; font-size:12px; padding-right:0px; display:none;" id='buxgalter_tovar`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option value='Профиль из ПВХ ламинированный'>Профиль из ПВХ ламинированный</option>
        <option value='Otvetka 153 (oq)'>Otvetka 153 (oq)</option>
        <option value='Ламбри из ПВХ'>Ламбри из ПВХ</option>
        <option value='Soedinitel OP.40.J05 L=10mm'>Soedinitel OP.40.J05 L=10mm</option>
        <option value='Soedinitel CL.X.W 14 (5mm)'>Soedinitel CL.X.W 14 (5mm)</option>
        <option value='BKT 78 Soed. (M11427-15.8mm)'>BKT 78 Soed. (M11427-15.8mm)</option>
        <option value='Soedinitel CL.X.W 14 (38mm)'>Soedinitel CL.X.W 14 (38mm)</option>
        <option value='BKT 70 Soed. W 02 (1=7.8)'>BKT 70 Soed. W 02 (1=7.8)</option>
        <option value='Otvetka 155 (rangli)'>Otvetka 155 (rangli)</option>
        <option value='Ruchka Dvernaya Fornaks (28mm) (rangli)'>Ruchka Dvernaya Fornaks (28mm) (rangli)</option>
        <option value='Petlya Dvernaya 2SK MASTER (rangli)'>Petlya Dvernaya 2SK MASTER (rangli)</option>
        <option value='Petlya (rangli)'>Petlya (rangli)</option>
        <option value='Soedinitel Chovush'>Soedinitel Chovush</option>
        <option value='Soedinitel (Bolshoy) CHEMPION'>Soedinitel (Bolshoy) CHEMPION</option>
        <option value='Petlya Dvernaya Chempion (rangli)'>Petlya Dvernaya Chempion (rangli)</option>
        <option value='Soedinitel (Bolshoy) (ALD-2)'>Soedinitel (Bolshoy) (ALD-2)</option>
        <option value='Krishka Podokonnik (ALYUMIN) (oq)'>Krishka Podokonnik (ALYUMIN) (oq)</option>
        <option value='Soedinitel Universal'>Soedinitel Universal</option>
        <option value='Ogranichitel (rangli)'>Ogranichitel (rangli)</option>
        <option value='Otvetka Mini 153 (rangli)'>Otvetka Mini 153 (rangli)</option>
        <option value='Ruchka Elegant (rangli)'>Ruchka Elegant (rangli)</option>
        <option value='Ruchka LUX Fortuna O (rangli)'>Ruchka LUX Fortuna O (rangli)</option>
        <option value='Petlya 100 mm (rangli)'>Petlya 100 mm (rangli)</option>
        <option value='Ruchka dvernaya "BELLA" (700) mm (rangli)'>Ruchka dvernaya "BELLA" (700) mm (rangli)</option>
        <option value='Soedinitel CL.X.W 34 (43mm)'>Soedinitel CL.X.W 34 (43mm)</option>
        <option value='Ruchka dvernaya "BELLA" (500) mm (oq)'>Ruchka dvernaya "BELLA" (500) mm (oq)</option>
        <option value='Ruchka dvernaya "BELLA" (600) mm (rangli)'>Ruchka dvernaya "BELLA" (600) mm (rangli)</option>
        <option value='Ruchka LUX Fortuna O (oq)'>Ruchka LUX Fortuna O (oq)</option>
        <option value='Otvetka Mini 155 (oq)'>Otvetka Mini 155 (oq)</option>
        <option value='Soedinitel CL.X.W 10 (25.8mm)'>Soedinitel CL.X.W 10 (25.8mm)</option>
        <option value='Termo soedinitel 19 mm'>Termo soedinitel 19 mm</option>
        <option value='Petlya 100 mm (oq)'>Petlya 100 mm (oq)</option>
        <option value='Petlya (ALD-2) (oq)'>Petlya (ALD-2) (oq)</option>
        <option value='Otvetnaya chast zamka A0275-K (155) (rangli)'>Otvetnaya chast zamka A0275-K (155) (rangli)</option>
        <option value='Petlya (ALD-2) (rangli)'>Petlya (ALD-2) (rangli)</option>
        <option value='Petlya Dvernaya 3SK MASTER (rangli)'>Petlya Dvernaya 3SK MASTER (rangli)</option>
        <option value='Petlya Dvernaya Alyumin (rangli)'>Petlya Dvernaya Alyumin (rangli)</option>
        <option value='Ruchka Kvadrat (rangli)'>Ruchka Kvadrat (rangli)</option>
        <option value='Chit-Chit PVH.uz (rangli)'>Chit-Chit PVH.uz (rangli)</option>
        <option value='Otvetka 153 (rangli)'>Otvetka 153 (rangli)</option>
        <option value='Ruchka LUX Fortuna Mini O (rangli)'>Ruchka LUX Fortuna Mini O (rangli)</option>
        <option value='Zashyolka Narujnyaya (rangli)'>Zashyolka Narujnyaya (rangli)</option>
        <option value='Shpingalet (rangli)'>Shpingalet (rangli)</option>
        <option value='Ruchka DELFIN (rangli)'>Ruchka DELFIN (rangli)</option>
        <option value='Otvetka Mini 155 (rangli)'>Otvetka Mini 155 (rangli)</option>
        <option value='Otvetnaya chast zamka A0275-K (153) (rangli)'>Otvetnaya chast zamka A0275-K (153) (rangli)</option>
        <option value='BKT 70 Soed. Impost (J01-52.5mm)'>BKT 70 Soed. Impost (J01-52.5mm)</option>
        <option value='BKT 70 Soed. Impost (J01-66.5mm)'>BKT 70 Soed. Impost (J01-66.5mm)</option>
        <option value='BKT 70 Soed. Impost (J02-13.6mm)'>BKT 70 Soed. Impost (J02-13.6mm)</option>
        <option value='BKT 70 Soed. Impost (J02-43.6mm)'>BKT 70 Soed. Impost (J02-43.6mm)</option>
        <option value='BKT 70 Soed. Impost (J03-66.6mm)'>BKT 70 Soed. Impost (J03-66.6mm)</option>
        <option value='BKT 70 Soed. Impost (J06-43.6mm)'>BKT 70 Soed. Impost (J06-43.6mm)</option>
        <option value='BKT 70 Soed. Impost (J06-66.5mm)'>BKT 70 Soed. Impost (J06-66.5mm)</option>
        <option value='BKT 70 Soed. W 01 (1=21.7)'>BKT 70 Soed. W 01 (1=21.7)</option>
        <option value='BKT 70 Soed. W 01 (1=5.1)'>BKT 70 Soed. W 01 (1=5.1)</option>
        <option value='BKT 70 Soed. W 01 (1=8.5)'>BKT 70 Soed. W 01 (1=8.5)</option>
        <option value='Krishka Podokonnik (ALYUMIN) (rangli)'>Krishka Podokonnik (ALYUMIN) (rangli)</option>
        <option value='Kreplenie moskitnoy setki (rangli)'>Kreplenie moskitnoy setki (rangli)</option>
        <option value='BKT 70 Soed. W 01 (1=8)'>BKT 70 Soed. W 01 (1=8)</option>
        <option value='BKT 78 Soed. (M11427-19.5mm)'>BKT 78 Soed. (M11427-19.5mm)</option>
        <option value='Kreplenie moskitnoy setki (oq)'>Kreplenie moskitnoy setki (oq)</option>
        <option value='BKT 78 Soed. (M11427-27mm)'>BKT 78 Soed. (M11427-27mm)</option>
        <option value='Ruchka LUX Pol (oq)'>Ruchka LUX Pol (oq)</option>
        <option value='Ruchka Sos. VENTURO (oq)'>Ruchka Sos. VENTURO (oq)</option>
        <option value='Montajnaya Planka 5200 (Metal)'>Montajnaya Planka 5200 (Metal)</option>
        <option value='Ламинированный термоуплотненный алюминиевый профиль'>Ламинированный термоуплотненный алюминиевый профиль</option>
        <option value='Термоуплотненный анодированный алюминиевый профиль (N)'>Термоуплотненный анодированный алюминиевый профиль (N)</option>
        <option value='Профиль из ПВХ с уплотнителем'>Профиль из ПВХ с уплотнителем</option>
        <option value='Алюминиевый профиль с декоративным покрытием'>Алюминиевый профиль с декоративным покрытием</option>
        <option value='Подоконник из ПВХ'>Подоконник из ПВХ</option>
        <option value='Дистанционная рамка'>Дистанционная рамка</option>
        <option value='Профиль из ПВХ ламинированный (Engelberg)'>Профиль из ПВХ ламинированный (Engelberg)</option>
        <option value='Профиль из ПВХ ламинированный с уплотнителем'>Профиль из ПВХ ламинированный с уплотнителем</option>
        <option value='Ламинированный алюминиевый профиль'>Ламинированный алюминиевый профиль</option>
        <option value='Неокрашенный алюминиевый профиль'>Неокрашенный алюминиевый профиль</option>
        <option value='Подоконник из ПВХ ламинированный'>Подоконник из ПВХ ламинированный</option>
        <option value='Уплотнитель для алюминиевых и ПВХ профилей'>Уплотнитель для алюминиевых и ПВХ профилей</option>
        <option value='Профиль из ПВХ'>Профиль из ПВХ</option>
        <option value='Алюминиевый профиль'>Алюминиевый профиль</option>
        <option value='Ламинированный термоуплотненный алюминиевый профиль (N)'>Ламинированный термоуплотненный алюминиевый профиль (N)</option>
        <option value='Металлический усилитель'>Металлический усилитель</option>
        <option value='Ламбри из ПВХ ламинированный'>Ламбри из ПВХ ламинированный</option>
        <option value='Профиль из ПВХ (Engelberg)'>Профиль из ПВХ (Engelberg)</option>
        <option value='Ламинированный алюминиевый профиль (N)'>Ламинированный алюминиевый профиль (N)</option>
        <option value='Алюминиевый профиль с декоративным покрытием (N)'>Алюминиевый профиль с декоративным покрытием (N)</option>
        <option value='Chit-Chit PVH.uz (oq)'>Chit-Chit PVH.uz (oq)</option>
        <option value='BKT 70 Soed. (M11148-13.6mm)'>BKT 70 Soed. (M11148-13.6mm)</option>
        <option value='Ruchka D (oq)'>Ruchka D (oq)</option>
        <option value='Ruchka Kvadrat Mini (oq)'>Ruchka Kvadrat Mini (oq)</option>
        <option value='Ruchka LUX (oq)'>Ruchka LUX (oq)</option>
        <option value='Soedinitel 114 D 400 (13mm)'>Soedinitel 114 D 400 (13mm)</option>
        <option value='Soedinitel 114 D 400 (52mm)'>Soedinitel 114 D 400 (52mm)</option>
        <option value='Petlya Dvernaya Chempion (oq)'>Petlya Dvernaya Chempion (oq)</option>
        <option value='Soedinitel BKH-001 (38mm)'>Soedinitel BKH-001 (38mm)</option>
        <option value='Soedinitel 5507 (6,5mm)'>Soedinitel 5507 (6,5mm)</option>
        <option value='Soedinitel BKH-001 (16mm)'>Soedinitel BKH-001 (16mm)</option>
        <option value='Soedinitel BKH-001 (5mm)'>Soedinitel BKH-001 (5mm)</option>
        <option value='Soedinitel AKF-107 (40mm)'>Soedinitel AKF-107 (40mm)</option>
        <option value='Soedinitel AKF-106 (37.5mm)'>Soedinitel AKF-106 (37.5mm)</option>
        <option value='Vstavka Dlya Zamka (rangli)'>Vstavka Dlya Zamka (rangli)</option>
        <option value='Soedinitel JP2186 (60mm)'>Soedinitel JP2186 (60mm)</option>
        <option value='T 6 Soed. (ST 10 255) C 9.5 Qanot Mal.'>T 6 Soed. (ST 10 255) C 9.5 Qanot Mal.</option>
        <option value='T 6 Soed. (ST 10 366) C 29.0 Qanot Bol.'>T 6 Soed. (ST 10 366) C 29.0 Qanot Bol.</option>
        <option value='T 6 Soed. (ST 10 366) P 27.5 Kosa Bol.'>T 6 Soed. (ST 10 366) P 27.5 Kosa Bol.</option>
        <option value='T 6 Soed. (ST 10 366) P 9.2 Kosa Mal.'>T 6 Soed. (ST 10 366) P 9.2 Kosa Mal.</option>
        <option value='T 6 Soed. (ST 10 565) B 26.0 Balkon Qanot Bol.'>T 6 Soed. (ST 10 565) B 26.0 Balkon Qanot Bol.</option>
        <option value='T 6 Soed. (ST 10 565) B 5.1 Balkon Qanot Mal.'>T 6 Soed. (ST 10 565) B 5.1 Balkon Qanot Mal.</option>
        <option value='Soedinitel AKF-107 (43.5mm)'>Soedinitel AKF-107 (43.5mm)</option>
        <option value='Vstavka Dlya Zamka (oq)'>Vstavka Dlya Zamka (oq)</option>
        <option value='Soedinitel 5505 (45mm)'>Soedinitel 5505 (45mm)</option>
        <option value='Zashyolka Narujnyaya (oq)'>Zashyolka Narujnyaya (oq)</option>
        <option value='Zashyolka Narujnyaya Mini (oq)'>Zashyolka Narujnyaya Mini (oq)</option>
        <option value='Ruchka Dvernaya Fornaks (35mm) (rangli)'>Ruchka Dvernaya Fornaks (35mm) (rangli)</option>
        <option value='Krishka Podokonnik 300 (rangli)'>Krishka Podokonnik 300 (rangli)</option>
        <option value='Ogranichitel PVH (rangli)'>Ogranichitel PVH (rangli)</option>
        <option value='Petlya Dvernaya 3D (rangli)'>Petlya Dvernaya 3D (rangli)</option>
        <option value='Petlya Dvernaya 3D (oq)'>Petlya Dvernaya 3D (oq)</option>
        <option value='Porog Soedinitel 7000 (1kom.) (L;P) (rangli)'>Porog Soedinitel 7000 (1kom.) (L;P) (rangli)</option>
        <option value='Petlya 100 mm (oq)'>Petlya 100 mm (oq)</option>
        <option value='Krishka Shtulp Dlya Adap 7000 (oq)'>Krishka Shtulp Dlya Adap 7000 (oq)</option>
        <option value='Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (rangli)'>Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (rangli)</option>
        <option value='Ruchka Dvernaya Fornaks (28mm) fiksator (rangli)'>Ruchka Dvernaya Fornaks (28mm) fiksator (rangli)</option>
        <option value='Ruchka Dvernaya Fornaks (35mm) fiksator (rangli)'>Ruchka Dvernaya Fornaks (35mm) fiksator (rangli)</option>
        <option value='Chit-Chit (aldocks).uz (rangli)'>Chit-Chit (aldocks).uz (rangli)</option>
        <option value='Ruchka Okonaya Roto (rangli)'>Ruchka Okonaya Roto (rangli)</option>
        <option value='Petlya 75 mm (rangli)'>Petlya 75 mm (rangli)</option>
        <option value='Soedinitel AKF-106 (36.5mm)'>Soedinitel AKF-106 (36.5mm)</option>
        <option value='Soedinitel 114 D 300 (13,2 mm)'>Soedinitel 114 D 300 (13,2 mm)</option>
        <option value='Soedinitel JP2002 (40mm)'>Soedinitel JP2002 (40mm)</option>
        <option value='Ruchka Kvadrat Mini (rangli)'>Ruchka Kvadrat Mini (rangli)</option>
        <option value='Shpingalet (oq)'>Shpingalet (oq)</option>
        <option value='Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (oq)'>Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (oq)</option>
        <option value='Krishka Shtulp Dlya Adap 7000 (rangli)'>Krishka Shtulp Dlya Adap 7000 (rangli)</option>
        <option value='(A0286) Petlya (Chempion) (rangli)'>(A0286) Petlya (Chempion) (rangli)</option>
        <option value='Otvetka 155 (oq)'>Otvetka 155 (oq)</option>
        <option value='(A0286) Petlya (Chempion) (oq)'>(A0286) Petlya (Chempion) (oq)</option>
        <option value='BKT 70 Soed. Impost (J01-66.6mm)'>BKT 70 Soed. Impost (J01-66.6mm)</option>
        <option value='Petlya Dvernaya MDF (oq)'>Petlya Dvernaya MDF (oq)</option>
        <option value='Petlya Dvernaya MDF (rangli)'>Petlya Dvernaya MDF (rangli)</option>
        <option value='Petlya Dvernaya PVH (rangli)'>Petlya Dvernaya PVH (rangli)</option>
        <option value='Soedinitel A 00018 (21mm)'>Soedinitel A 00018 (21mm)</option>
        <option value='Soedinitel CL.X.W 14 (18mm)'>Soedinitel CL.X.W 14 (18mm)</option>
        <option value='Soedinitel CL.X.W 14 (8mm)'>Soedinitel CL.X.W 14 (8mm)</option>
        <option value='Soedinitel CL.X.W 14 (9mm)'>Soedinitel CL.X.W 14 (9mm)</option>
        <option value='Soedinitel WDT 67 J 02 (44mm)'>Soedinitel WDT 67 J 02 (44mm)</option>
        <option value='Soedinitel CL.X.W 34 (25.6mm)'>Soedinitel CL.X.W 34 (25.6mm)</option>
        <option value='Soedinitel CL.X.W 14 (12.5mm)'>Soedinitel CL.X.W 14 (12.5mm)</option>
        <option value='Petlya Dvernaya 3SK MASTER (rangli)'>Petlya Dvernaya 3SK MASTER (rangli)</option>
        <option value='Klipsa 13mm JP'>Klipsa 13mm JP</option>
        <option value='Zaglushka (PVCC 031) (rangli)'>Zaglushka (PVCC 031) (rangli)</option>
        <option value='Zaglushka (PVCC 032) (rangli)'>Zaglushka (PVCC 032) (rangli)</option>
        <option value='Soedinitel CL.X.W 20 (25.8mm)'>Soedinitel CL.X.W 20 (25.8mm)</option>
        <option value='Krishka Podokonnik 350 (Ovolniy) (rangli)'>Krishka Podokonnik 350 (Ovolniy) (rangli)</option>
        <option value='Soedinitel CL.X.W 34 (17,7mm)'>Soedinitel CL.X.W 34 (17,7mm)</option>
        <option value='Soedinitel CL.X.W 34 (10mm)'>Soedinitel CL.X.W 34 (10mm)</option>
        <option value='Ruchka dvernaya "BELLA" (1000) mm (rangli)'>Ruchka dvernaya "BELLA" (1000) mm (rangli)</option>
        <option value='Petlya dvernaya Jocker (rangli)'>Petlya dvernaya Jocker (rangli)</option>
        <option value='Soedinitel CL.X.W 34 (6mm)'>Soedinitel CL.X.W 34 (6mm)</option>
        <option value='Soedinitel CL.X.W 10 (5mm)'>Soedinitel CL.X.W 10 (5mm)</option>
        <option value='Soedinitel CL.X.W 34 (18mm)'>Soedinitel CL.X.W 34 (18mm)</option>
        <option value='Soedinitel CL.X.W 34 (15,8mm)'>Soedinitel CL.X.W 34 (15,8mm)</option>
        <option value='Soedinitel A 00018 (25 mm)'>Soedinitel A 00018 (25 mm)</option>
        <option value='Petlya dvernaya Jocker (oq)'>Petlya dvernaya Jocker (oq)</option>
        <option value='Ruchka Dvernaya mini (rangli)'>Ruchka Dvernaya mini (rangli)</option>
        <option value='Ruchka Dvernaya Fornaks (30mm) (rangli)'>Ruchka Dvernaya Fornaks (30mm) (rangli)</option>
        <option value='Soedinitel WDT 67 J 03 (44mm)'>Soedinitel WDT 67 J 03 (44mm)</option>
        <option value='Soedinitel 114 D 300 (10mm)'>Soedinitel 114 D 300 (10mm)</option>
        <option value='Soedinitel 114 D 400 (14mm)'>Soedinitel 114 D 400 (14mm)</option>
        <option value='Soedinitel CL.X.W 10 (14mm)'>Soedinitel CL.X.W 10 (14mm)</option>
        <option value='Krishka Podokonnik 300 (Trapetsiya) (rangli)'>Krishka Podokonnik 300 (Trapetsiya) (rangli)</option>
        <option value='Soedinitel 148х125хх (60mm)'>Soedinitel 148х125хх (60mm)</option>
        <option value='Soedinitel CL.X.W 16 (10.8mm)'>Soedinitel CL.X.W 16 (10.8mm)</option>
        <option value='Soedinitel FST 50 JR 001 (30mm)'>Soedinitel FST 50 JR 001 (30mm)</option>
        <option value='Soedinitel FST 50 G 003 (100 mm)'>Soedinitel FST 50 G 003 (100 mm)</option>
        <option value='Soedinitel CL.X.W 40 (7.4mm)'>Soedinitel CL.X.W 40 (7.4mm)</option>
        <option value='Soedinitel 8000'>Soedinitel 8000</option>
        <option value='Soedinitel CL.X.W 20 (20,7mm)'>Soedinitel CL.X.W 20 (20,7mm)</option>
        <option value='Soedinitel CL.X.W 20 (20,6mm)'>Soedinitel CL.X.W 20 (20,6mm)</option>
        <option value='Soedinitel OP.40.J04 L=10mm'>Soedinitel OP.40.J04 L=10mm</option>
        <option value='Soedinitel CL.X.W 34 (7,4mm)'>Soedinitel CL.X.W 34 (7,4mm)</option>
        <option value='Ruchka dvernaya "BELLA" (800) mm (rangli)'>Ruchka dvernaya "BELLA" (800) mm (rangli)</option>
        <option value='Soedinitel CL.X.W 40 (5mm)'>Soedinitel CL.X.W 40 (5mm)</option>
        <option value='Ruchka dvernaya "BELLA" (2000) mm (oq)'>Ruchka dvernaya "BELLA" (2000) mm (oq)</option>
        <option value='Ruchka Dvernaya (28mm) Slim fiksator (rangli)'>Ruchka Dvernaya (28mm) Slim fiksator (rangli)</option>
        <option value='Soedinitel CL.X.W 40 (19mm)'>Soedinitel CL.X.W 40 (19mm)</option>
        <option value='Ruchka dvernaya "BELLA" (1800) mm (rangli)'>Ruchka dvernaya "BELLA" (1800) mm (rangli)</option>
        <option value='Soedinitel CLSW 16'>Soedinitel CLSW 16</option>
        <option value='Soedinitel CL.X.W 40 (18.9mm)'>Soedinitel CL.X.W 40 (18.9mm)</option>
        <option value='Soedinitel 148х125хх (90mm)'>Soedinitel 148х125хх (90mm)</option>
        <option value='BKT 70 Soed. List (A10-001)'>BKT 70 Soed. List (A10-001)</option>
        <option value='Soedinitel CL.X.W 40 (19.6mm)'>Soedinitel CL.X.W 40 (19.6mm)</option>
        <option value='Soedinitel AKF-106 (44mm)'>Soedinitel AKF-106 (44mm)</option>
        <option value='Soedinitel AKF-107 (37mm)'>Soedinitel AKF-107 (37mm)</option>
        <option value='Soedinitel 7000 ECO'>Soedinitel 7000 ECO</option>
        <option value='Ruchka dvernaya "Comfort" (oq)'>Ruchka dvernaya "Comfort" (oq)</option>
        <option value='Soedinitel 148х125хх (140mm)'>Soedinitel 148х125хх (140mm)</option>
        <option value='Soedinitel BKH-010 (38mm)'>Soedinitel BKH-010 (38mm)</option>
        <option value='Ruchka Dvernaya (28mm) Slim (rangli)'>Ruchka Dvernaya (28mm) Slim (rangli)</option>
        <option value='Ruchka dvernaya "Comfort" (rangli)'>Ruchka dvernaya "Comfort" (rangli)</option>
        <option value='Soedinitel BKH-010 (56mm)'>Soedinitel BKH-010 (56mm)</option>
        <option value='Soedinitel CLSW 12'>Soedinitel CLSW 12</option>
        <option value='Ruchka dvernaya "BELLA" (1500) mm (rangli)'>Ruchka dvernaya "BELLA" (1500) mm (rangli)</option>
        <option value='Soedinitel FST 50 G 004 (100 mm)'>Soedinitel FST 50 G 004 (100 mm)</option>
        <option value='Ruchka Okonnaya PVH (rangli)'>Ruchka Okonnaya PVH (rangli)</option>
        <option value='Soedinitel 110049 (20mm)'>Soedinitel 110049 (20mm)</option>
        <option value='Soedinitel 110048 (20mm)'>Soedinitel 110048 (20mm)</option>
        <option value='Soedinitel CL.X.W 38 (28.7mm)'>Soedinitel CL.X.W 38 (28.7mm)</option>
        <option value='Soedinitel FST 50 JR 001 (33mm)'>Soedinitel FST 50 JR 001 (33mm)</option>
        <option value='Soedinitel FST 50 JR 001 (97,5mm)'>Soedinitel FST 50 JR 001 (97,5mm)</option>
        <option value='Ruchka Dvernaya (28mm) Slim (oq)'>Ruchka Dvernaya (28mm) Slim (oq)</option>
        <option value='Zaglushka (PVCC 033) (rangli)'>Zaglushka (PVCC 033) (rangli)</option>
        <option value='Zaglushka (PVCC 036) (rangli)'>Zaglushka (PVCC 036) (rangli)</option>
        <option value='Soedinitel moskitnoy setki (rangli)'>Soedinitel moskitnoy setki (rangli)</option>
        <option value='Ruchka dvernaya "BELLA" (700) mm (oq)'>Ruchka dvernaya "BELLA" (700) mm (oq)</option>
        <option value='Soedinitel CL.X.W 14 (43.5mm)'>Soedinitel CL.X.W 14 (43.5mm)</option>
        <option value='Soedinitel A 00018 (44mm)'>Soedinitel A 00018 (44mm)</option>
        <option value='Ruchka Elegant (oq)'>Ruchka Elegant (oq)</option>
        <option value='Krishka Shtulp Dlya Adap 6000 (rangli)'>Krishka Shtulp Dlya Adap 6000 (rangli)</option>
        <option value='Ruchka Dvernaya Fornaks (30mm) fiksator (rangli)'>Ruchka Dvernaya Fornaks (30mm) fiksator (rangli)</option>
        <option value='Krishka Shtulp Dlya Adap 8000 (rangli)'>Krishka Shtulp Dlya Adap 8000 (rangli)</option>
        <option value='Soedinitel CL.X.W 20 (25.6mm)'>Soedinitel CL.X.W 20 (25.6mm)</option>
        <option value='BKT 70 Soed. W 01 (1=5)'>BKT 70 Soed. W 01 (1=5)</option>
        <option value='Soedinitel moskitnoy setki (oq)'>Soedinitel moskitnoy setki (oq)</option>
        <option value='Замок для профиля москитной сетки серии 10х20цветной'>Замок для профиля москитной сетки серии 10х20цветной</option>
        <option value='Замок для профиля москитной сетки серии 10х20'>Замок для профиля москитной сетки серии 10х20</option>
        <option value='Soedinitel CLSW 0243'>Soedinitel CLSW 0243</option>
        <option value='Klipsa 10.5 mm'>Klipsa 10.5 mm</option>
        <option value='BKT 70 Soed. Impost (J01-26.3mm)'>BKT 70 Soed. Impost (J01-26.3mm)</option>
        <option value='BKT 70 Soed. Impost (J02-23.6mm)'>BKT 70 Soed. Impost (J02-23.6mm)</option>
        <option value='BKT 70 Soed. Impost (J06-13.6mm)'>BKT 70 Soed. Impost (J06-13.6mm)</option>
        <option value='BKT 70 Soed. Impost (J06-23.6mm)'>BKT 70 Soed. Impost (J06-23.6mm)</option>
        <option value='BKT 70 Soed. W 01 (1=18.4)'>BKT 70 Soed. W 01 (1=18.4)</option>
        <option value='BKT 70 Soed. W 01 (1=26.3)'>BKT 70 Soed. W 01 (1=26.3)</option>
        <option value='BKT 70 Soed. W 01 (1=26.8)'>BKT 70 Soed. W 01 (1=26.8)</option>
        <option value='BKT 70 Soed. W 01 (1=7.8)'>BKT 70 Soed. W 01 (1=7.8)</option>
        <option value='BKT 78 Soed. (M11227-19.5mm)'>BKT 78 Soed. (M11227-19.5mm)</option>
        <option value='BKT 70 Soed. W 01 (1=10.8)'>BKT 70 Soed. W 01 (1=10.8)</option>
        <option value='BKT 70 Soed. W 02 (1=10.8)'>BKT 70 Soed. W 02 (1=10.8)</option>
        <option value='BKT 70 Soed. W 02 (1=23.6)'>BKT 70 Soed. W 02 (1=23.6)</option>
        <option value='BKT 70 Soed. W 03 (1=7.8)'>BKT 70 Soed. W 03 (1=7.8)</option>
        <option value='BKT 70 Soed. W 03 (1=10.8)'>BKT 70 Soed. W 03 (1=10.8)</option>
        <option value='BKT 70 Soed. (M11535-7.8mm)'>BKT 70 Soed. (M11535-7.8mm)</option>
        <option value='BKT 70 Soed. Impost (J01-13.6mm)'>BKT 70 Soed. Impost (J01-13.6mm)</option>
        <option value='BKT 70 Soed. W 02 (1=18.4)'>BKT 70 Soed. W 02 (1=18.4)</option>
        <option value='BKT 70 Soed. (M11055-13.6mm)'>BKT 70 Soed. (M11055-13.6mm)</option>
        <option value='BKT 70 Soed. Impost (J01-43.6mm)'>BKT 70 Soed. Impost (J01-43.6mm)</option>
        <option value='BKT 70 Soed. Impost (J05-43.6mm)'>BKT 70 Soed. Impost (J05-43.6mm)</option>
        <option value='BKT 78 Soed. (M11227-22.7mm)'>BKT 78 Soed. (M11227-22.7mm)</option>
        <option value='Chit-Chit (aldocks).uz (oq)'>Chit-Chit (aldocks).uz (oq)</option>
        <option value='Klipsa 12 mm'>Klipsa 12 mm</option>
        <option value='BKT 70 Soed. Impost (J05-23.6mm)'>BKT 70 Soed. Impost (J05-23.6mm)</option>
        <option value='Ogranichitel (oq)'>Ogranichitel (oq)</option>
        <option value='Otvetniy Plast. (rangli)'>Otvetniy Plast. (rangli)</option>
        <option value='Otvetniy Plast. (oq)'>Otvetniy Plast. (oq)</option>
        <option value='Petlya Dvernaya Alyumin (oq)'>Petlya Dvernaya Alyumin (oq)</option>
        <option value='Ruchka Kvadrat (oq)'>Ruchka Kvadrat (oq)</option>
        <option value='Soedinitel 114 D 300 (13mm)'>Soedinitel 114 D 300 (13mm)</option>
        <option value='Soedinitel 114 D 300 (6mm)'>Soedinitel 114 D 300 (6mm)</option>
        <option value='Soedinitel 114 D 400 (38mm)'>Soedinitel 114 D 400 (38mm)</option>
        <option value='Soedinitel 114 D 400 (46mm)'>Soedinitel 114 D 400 (46mm)</option>
        <option value='Soedinitel BKH-001 (6mm)'>Soedinitel BKH-001 (6mm)</option>
        <option value='Soedinitel BKH-002 (38mm)'>Soedinitel BKH-002 (38mm)</option>
        <option value='Soedinitel (Inja)'>Soedinitel (Inja)</option>
        <option value='Zashyolka Narujnyaya (new) (oq)'>Zashyolka Narujnyaya (new) (oq)</option>
        <option value='Soedinitel (Bolshoy)'>Soedinitel (Bolshoy)</option>
        <option value='Otvetniy Plast. (ALD-2) (rangli)'>Otvetniy Plast. (ALD-2) (rangli)</option>
        <option value='Otvetniy Plast. (ALD-2) (oq)'>Otvetniy Plast. (ALD-2) (oq)</option>
        <option value='BKT 70 Soed. List (A10-002)'>BKT 70 Soed. List (A10-002)</option>
        <option value='Montajnaya Planka 7000 (Metal)'>Montajnaya Planka 7000 (Metal)</option>
        <option value='Petlya (oq)'>Petlya (oq)</option>
        <option value='BKT 78 Soed. (M11227-26.9mm)'>BKT 78 Soed. (M11227-26.9mm)</option>
        <option value='Ruchka LUX Fortuna Mini O (oq)'>Ruchka LUX Fortuna Mini O (oq)</option>
        <option value='BKT 70 Soed. List (A10-003)'>BKT 70 Soed. List (A10-003)</option>
        <option value='Otvetnaya chast zamka A0275-K (155) (oq)'>Otvetnaya chast zamka A0275-K (155) (oq)</option>
        <option value='Soedinitel 114 D 400 (10mm)'>Soedinitel 114 D 400 (10mm)</option>
        <option value='Soedinitel 5505 (35mm)'>Soedinitel 5505 (35mm)</option>
        <option value='Soedinitel BKH-008 (14mm)'>Soedinitel BKH-008 (14mm)</option>
        <option value='Soedinitel BKH-008 (15mm)'>Soedinitel BKH-008 (15mm)</option>
        <option value='Soedinitel BKH-010 (6mm)'>Soedinitel BKH-010 (6mm)</option>
        <option value='Krishka Podokonnik 300 (Trapetsiya) (oq)'>Krishka Podokonnik 300 (Trapetsiya) (oq)</option>
        <option value='Ogranichitel PVH (oq)'>Ogranichitel PVH (oq)</option>
        <option value='Petlya 75 mm (oq)'>Petlya 75 mm (oq)</option>
        <option value='Petlya Dvernaya PVH (oq)'>Petlya Dvernaya PVH (oq)</option>
        <option value='Porog Soedinitel 6000 (1kom.) (L;P) (rangli)'>Porog Soedinitel 6000 (1kom.) (L;P) (rangli)</option>
        <option value='Porog Soedinitel 7000 (1kom.) (L;P) (oq)'>Porog Soedinitel 7000 (1kom.) (L;P) (oq)</option>
        <option value='Krishka Shtulp Dlya Adap 6000 (oq)'>Krishka Shtulp Dlya Adap 6000 (oq)</option>
        <option value='Krishka Podokonnik 300 (oq)'>Krishka Podokonnik 300 (oq)</option>
        <option value='Ruchka Dvernaya Fornaks (35mm) fiksator (oq)'>Ruchka Dvernaya Fornaks (35mm) fiksator (oq)</option>
        <option value='BKT 70 Soed. (M11535-22mm)'>BKT 70 Soed. (M11535-22mm)</option>
        <option value='Ruchka DELFIN (oq)'>Ruchka DELFIN (oq)</option>
        <option value='Zatsepka 5200'>Zatsepka 5200</option>
        <option value='Zatsepka 7000'>Zatsepka 7000</option>
        <option value='Zatsepka 6000'>Zatsepka 6000</option>
        <option value='Ruchka Okonaya Roto (oq)'>Ruchka Okonaya Roto (oq)</option>
        <option value='Ruchka Okonnaya PVH (oq)'>Ruchka Okonnaya PVH (oq)</option>
        <option value='Soedinitel 5200'>Soedinitel 5200</option>
        <option value='Soedinitel 6000 (TRIO)'>Soedinitel 6000 (TRIO)</option>
        <option value='Soedinitel 7000'>Soedinitel 7000</option>
        <option value='Ruchka Dvernaya Fornaks (35mm) (oq)'>Ruchka Dvernaya Fornaks (35mm) (oq)</option>
        <option value='Soedinitel 5800'>Soedinitel 5800</option>
        <option value='Soedinitel CL.X.W 38 (5.5 mm)'>Soedinitel CL.X.W 38 (5.5 mm)</option>
        <option value='Petlya Dvernaya 2SK MASTER (oq)'>Petlya Dvernaya 2SK MASTER (oq)</option>
        <option value='Soedinitel A 00018 (37mm)'>Soedinitel A 00018 (37mm)</option>
        <option value='Soedinitel CL.X.W 14 (40mm)'>Soedinitel CL.X.W 14 (40mm)</option>
        <option value='Ruchka Okonaya Rotto Swing (oq)'>Ruchka Okonaya Rotto Swing (oq)</option>
        <option value='BKT 70 Soed. Impost (J03-23.6mm)'>BKT 70 Soed. Impost (J03-23.6mm)</option>
        <option value='Ruchka Okonaya Rotto Swing (rangli)'>Ruchka Okonaya Rotto Swing (rangli)</option>
        <option value='Soedinitel CL.X.W 10 (27mm)'>Soedinitel CL.X.W 10 (27mm)</option>
        <option value='Soedinitel A 00018 (9mm)'>Soedinitel A 00018 (9mm)</option>
        <option value='Soedinitel A 00018 (25.8mm)'>Soedinitel A 00018 (25.8mm)</option>
        <option value='Soedinitel A 00018 (18mm)'>Soedinitel A 00018 (18mm)</option>
        <option value='Soedinitel CL.X.W 38 (5mm)'>Soedinitel CL.X.W 38 (5mm)</option>
        <option value='Soedinitel CL.X.W 28 (9mm)'>Soedinitel CL.X.W 28 (9mm)</option>
        <option value='Soedinitel CL.X.W 28 (25.8mm)'>Soedinitel CL.X.W 28 (25.8mm)</option>
        <option value='Soedinitel CL.X.W 28 (18mm)'>Soedinitel CL.X.W 28 (18mm)</option>
        <option value='Soedinitel CL.X.W 24 (5mm)'>Soedinitel CL.X.W 24 (5mm)</option>
        <option value='Soedinitel CL.X.W 38 (5.8mm)'>Soedinitel CL.X.W 38 (5.8mm)</option>
        <option value='Soedinitel CL.X.W 38 (6.8mm)'>Soedinitel CL.X.W 38 (6.8mm)</option>
        <option value='Soedinitel CL.X.W 14 (22.5mm)'>Soedinitel CL.X.W 14 (22.5mm)</option>
        <option value='Soedinitel CL.X.W 34 (34.3mm)'>Soedinitel CL.X.W 34 (34.3mm)</option>
        <option value='BKT 70 Soed. Impost (J01-16mm)'>BKT 70 Soed. Impost (J01-16mm)</option>
        <option value='Soedinitel CL.X.W 05 (13mm)'>Soedinitel CL.X.W 05 (13mm)</option>
        <option value='Soedinitel CL.X.W 20 (27mm)'>Soedinitel CL.X.W 20 (27mm)</option>
        <option value='Soedinitel CL.X.W 20 (18,8mm)'>Soedinitel CL.X.W 20 (18,8mm)</option>
        <option value='Soedinitel CL.X.W 20 (6mm)'>Soedinitel CL.X.W 20 (6mm)</option>
        <option value='Soedinitel CL.X.W 34 (18,8mm)'>Soedinitel CL.X.W 34 (18,8mm)</option>
        <option value='BKT 70 Soed. Impost (J01-23.6mm)'>BKT 70 Soed. Impost (J01-23.6mm)</option>
        <option value='Ruchka Dvernaya Fornaks (30mm) (oq)'>Ruchka Dvernaya Fornaks (30mm) (oq)</option>
        <option value='Ruchka Dvernaya mini (oq)'>Ruchka Dvernaya mini (oq)</option>
        <option value='Ruchka dvernaya "BELLA" (2250) mm (rangli)'>Ruchka dvernaya "BELLA" (2250) mm (rangli)</option>
        <option value='Otvetka Mini 153 (oq)'>Otvetka Mini 153 (oq)</option>
        <option value='Soedinitel CL.X.W 14 (6mm)'>Soedinitel CL.X.W 14 (6mm)</option>
        <option value='Soedinitel CLSW 22'>Soedinitel CLSW 22</option>
        <option value='Ruchka "Simple" (oq)'>Ruchka "Simple" (oq)</option>
        <option value='Soedinitel CL.X.W 10 (18,8mm)'>Soedinitel CL.X.W 10 (18,8mm)</option>
        <option value='Soedinitel CL.X.W 10 (6mm)'>Soedinitel CL.X.W 10 (6mm)</option>
        <option value='Ruchka "Simple"(rangli)'>Ruchka "Simple"(rangli)</option>
        <option value='Vstavka (PVCC 005) (rangli)'>Vstavka (PVCC 005) (rangli)</option>
        <option value='Zaglushka (PVCC 002) (rangli)'>Zaglushka (PVCC 002) (rangli)</option>
        <option value='Soedinitel (PVCC 022)'>Soedinitel (PVCC 022)</option>
        <option value='Krishka (PVCC 001) (rangli)'>Krishka (PVCC 001) (rangli)</option>
        <option value='Termo vstavka (PVCC 003) (rangli)'>Termo vstavka (PVCC 003) (rangli)</option>
        <option value='Termo vstavka (PVCC 004) (rangli)'>Termo vstavka (PVCC 004) (rangli)</option>
        <option value='Ruchka Dvernaya Fornaks (30mm) fiksator (oq)'>Ruchka Dvernaya Fornaks (30mm) fiksator (oq)</option>
        <option value='Soedinitel CL.X.W 10 (17mm)'>Soedinitel CL.X.W 10 (17mm)</option>
        <option value='Zaglushka (PVCC 035) (rangli)'>Zaglushka (PVCC 035) (rangli)</option>
        <option value='Ruchka dvernaya "BELLA" (750) mm (rangli)'>Ruchka dvernaya "BELLA" (750) mm (rangli)</option>
        <option value='Soedinitel CL.X.W 38 (44.4mm)'>Soedinitel CL.X.W 38 (44.4mm)</option>
        <option value='Soedinitel CL.X.W 16 (44.4mm)'>Soedinitel CL.X.W 16 (44.4mm)</option>
        <option value='Ruchka dvernaya "BELLA" (500) mm (rangli)'>Ruchka dvernaya "BELLA" (500) mm (rangli)</option>
        <option value='Krishka Podokonnik 350 (Ovolniy) (oq)'>Krishka Podokonnik 350 (Ovolniy) (oq)</option>
        <option value='Soedinitel CL.X.W 14 (21.5mm)'>Soedinitel CL.X.W 14 (21.5mm)</option>
        <option value='Ruchka dvernaya "BELLA" (2350) mm (rangli)'>Ruchka dvernaya "BELLA" (2350) mm (rangli)</option>
        <option value='Zaglushka (PVCC 034) (rangli)'>Zaglushka (PVCC 034) (rangli)</option>
        <option value='Ruchka dvernaya "BELLA" (2000) mm (rangli)'>Ruchka dvernaya "BELLA" (2000) mm (rangli)</option>
        <option value='Soedinitel CL.X.W 34 (28.7mm)'>Soedinitel CL.X.W 34 (28.7mm)</option>
        <option value='Ruchka dvernaya "BELLA" (1200) mm (rangli)'>Ruchka dvernaya "BELLA" (1200) mm (rangli)</option>
        <option value='Ruchka Dvernaya (28mm) Slim fiksator (oq)'>Ruchka Dvernaya (28mm) Slim fiksator (oq)</option>
        <option value='BKT 70 Soed. W 02 (1=25.8)'>BKT 70 Soed. W 02 (1=25.8)</option>
        <option value='Derjatel i ruchka-koltso dlya moskitnoy setki (rangli)'>Derjatel i ruchka-koltso dlya moskitnoy setki (rangli)</option>
        <option value='Ручка к конструкции москитной сетки серии 10х20. "AKBULUT" цветной'>Ручка к конструкции москитной сетки серии 10х20. "AKBULUT" цветной</option>
        <option value='Ручка к конструкции москитной сетки серии 10х20 "AKBULUT"белый'>Ручка к конструкции москитной сетки серии 10х20 "AKBULUT"белый</option>
        <option value='Ruchka dvernaya "BELLA" (2300) mm (rangli)'>Ruchka dvernaya "BELLA" (2300) mm (rangli)</option>
        <option value='Takos PVH'>Takos PVH</option>
        <option value='BKT 70 Soed. W 02 (1=26.3)'>BKT 70 Soed. W 02 (1=26.3)</option>
        <option value='BKT 70 Soed. W 02 (1=5.1)'>BKT 70 Soed. W 02 (1=5.1)</option>
        <option value='BKT 70 Soed. W 03 (1=18.4)'>BKT 70 Soed. W 03 (1=18.4)</option>
        <option value='BKT 70 Soed. W 03 (1=26.3)'>BKT 70 Soed. W 03 (1=26.3)</option>
        <option value='BKT 70 Soed. W 03 (1=5.1)'>BKT 70 Soed. W 03 (1=5.1)</option>
        <option value='Derjatel i ruchka-koltso dlya moskitnoy setki (oq)'>Derjatel i ruchka-koltso dlya moskitnoy setki (oq)</option>
        <option value='BKT 70 Soed. Impost (J03-13.6mm)'>BKT 70 Soed. Impost (J03-13.6mm)</option>
        <option value='Porog Soedinitel 6000 (1kom.) (L;P) (oq)'>Porog Soedinitel 6000 (1kom.) (L;P) (oq)</option>
        <option value='Montajnaya Planka 6000 (Metal)'>Montajnaya Planka 6000 (Metal)</option>
        <option value='BKT 70 Soed. Impost (J05-13.6mm)'>BKT 70 Soed. Impost (J05-13.6mm)</option>
        <option value='Soedinitel BKH-010 (42mm)'>Soedinitel BKH-010 (42mm)</option>
        <option value='Ruchka Dvernaya Fornaks (28mm) (oq)'>Ruchka Dvernaya Fornaks (28mm) (oq)</option>
        <option value='Otvetnaya chast zamka A0275-K (153) (oq)'>Otvetnaya chast zamka A0275-K (153) (oq)</option>
        <option value='Soedinitel CL.X.W 14 (25.8mm)'>Soedinitel CL.X.W 14 (25.8mm)</option>
        <option value='Soedinitel 114 D 300 (35mm)'>Soedinitel 114 D 300 (35mm)</option>
        <option value='Ruchka Dvernaya Fornaks (28mm) fiksator (oq)'>Ruchka Dvernaya Fornaks (28mm) fiksator (oq)</option>
        <option value='BKT 70 Soed. (M11535-18.4mm)'>BKT 70 Soed. (M11535-18.4mm)</option>
        <option value='Soedinitel CL.X.W 10 (10mm)'>Soedinitel CL.X.W 10 (10mm)</option>
        <option value='Soedinitel CL.X.W 20 (20mm)'>Soedinitel CL.X.W 20 (20mm)</option>
        <option value='EPDM L-65 угловой соединитель для уплотнителей'>EPDM L-65 угловой соединитель для уплотнителей</option>
        <option value='EPDM заглушка для штульпа "Чемпион"'>EPDM заглушка для штульпа "Чемпион"</option>
        <option value='EPDM адаптер крышка для Термо 78'>EPDM адаптер крышка для Термо 78</option>
        <option value='EPDM А01 105 угловой соединитель для уплотнителей'>EPDM А01 105 угловой соединитель для уплотнителей</option>
        <option value='EPDM ССЕР 0057 адаптер крышка'>EPDM ССЕР 0057 адаптер крышка</option>
        <option value='EPDM ССЕР 0058 адаптер крышка'>EPDM ССЕР 0058 адаптер крышка</option>
        <option value='EPDM D 017500 Decor Zaglushka'>EPDM D 017500 Decor Zaglushka</option>
        <option value='EPDM адаптер крышка для Термо 70 (BKT-70)'>EPDM адаптер крышка для Термо 70 (BKT-70)</option>
        <option value='EPDM крышка для штульпа АК-40'>EPDM крышка для штульпа АК-40</option>
        <option value='EPDM адаптер крышка 012'>EPDM адаптер крышка 012</option>
        <option value='EPDM epdc 004 дренажный носик'>EPDM epdc 004 дренажный носик</option>
        <option value='EPDM 5108 угловой соединитель для уплотнителей'>EPDM 5108 угловой соединитель для уплотнителей</option>
        <option value='Термоуплотненный окрашенный алюминиевый профиль'>Термоуплотненный окрашенный алюминиевый профиль</option>
        <option value='Неокрашенный алюминиевый профиль (N)'>Неокрашенный алюминиевый профиль (N)</option>
        <option value='Алюминиевый профиль (N)'>Алюминиевый профиль (N)</option>
        <option value='EPDM уплотнитель'>EPDM уплотнитель</option>
        <option value='Анодированный алюминиевый профиль (N)'>Анодированный алюминиевый профиль (N)</option>
        <option value='Термоуплотненный алюминиевый профиль (N)'>Термоуплотненный алюминиевый профиль (N)</option>
        <option value='Мебельный профиль из алюминия анодированный матовое серебро (N)'>Мебельный профиль из алюминия анодированный матовое серебро (N)</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px;display:none" id='buxgalter_uchot`+String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option  value="Штука">Штука</div>
        <option  value="Килограмм">Килограмм</div>
        <option  value="Квадратный метр">Квадратный метр</div>
        <option  value="Метр">Метр</div>
        <option  value="КМП">КМП</div>
        <option  value="Пачка">Пачка</div>
        <option  value="Секция">Секция</div>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;" id='bazoviy_edin`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option vlaue="Штука">Штука</div>
        <option vlaue="Килограмм">Килограмм</div>
        <option vlaue="Квадратный метр">Квадратный метр</div>
        <option vlaue="Метр">Метр</div>
        <option vlaue="КМП">КМП</div>
        <option vlaue="Пачка">Пачка</div>
        <option vlaue="Секция">Секция</div>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px;display:none" id='alter_edin`+ String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option vlaue="Штука">Штука</div>
        <option vlaue="Килограмм">Килограмм</div>
        <option vlaue="Квадратный метр">Квадратный метр</div>
        <option vlaue="Метр">Метр</div>
        <option vlaue="КМП">КМП</div>
        <option vlaue="Пачка">Пачка</div>
        <option vlaue="Секция">Секция</div>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none;height:32px" id='stoimost_baza`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' ></input>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none;height:32px" id='stoimost_alter`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' ></input>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;" id='status`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option value="Активный">Активный</option>
        <option value="Пассивный">Пассивный</option>
    </select>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <span class =' text-center ' style="font-size: small; width:190px; font-weight: bold; text-transform: uppercase;" id='zavod_name`+String(i)+`'>ZAVOD PVS NAVOIY</span>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <input type='text' class=" form-control " style="width: 75px; font-size:10px;display:none;height:32px " id='diller`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
    </div>
</td>
<td >
    <div class="input-group input-group-sm mb-1">
    <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;" id='tip_clenta`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
        <option  selected></option>
        <option value="AKFA">AKFA</option>
        <option value="IMZO">IMZO</option>
        <option value="FRANCHISING">FRANCHISING</option>
        <option value="AKFA-IMZO-FRANCHISING">AKFA-IMZO-FRANCHISING</option>
        <option value="IMZO-FRANCHISING">IMZO-FRANCHISING</option>
    </select>
    </div>
</td>
<td style="display: none;" >
    <div class="input-group input-group-sm mb-1">
    <span id="is_active`+String(i)+`" style="display: none;"></span>
    </div>
</td>

</tr>`
}


var table = $('#table-artikul')

table.append(text)


i = 0


function custom_select2(type_selection=NaN,older_val=NaN,i,nam=NaN,selector=NaN,input_selector=NaN,url=NaN,data=NaN){
    if(older_val!=NaN){
        $(input_selector).val(older_val)
        for(var key in data){
           $('#'+key +i).text(data[key])
        }

        $(input_selector).on('input', function() {
            var searchValue = $(this).val().trim();
            $(selector).css('display','block')
            $.ajax({
                url: url, 
                type: 'GET',
                dataType: 'json',
                data: { term: searchValue },
                success: function(data) {
                    $(selector).empty();
                    $.each(data, function(index, item) {
                        
                        $(selector).append($(`<option>`, {
                            value: JSON.stringify(item),
                            text: item[nam]
                        }));
                    });
                },
                error: function(xhr, status, error) {
                    console.error('Failed to fetch search results:', error);
                }
            });
    
        });
        
        $(selector).on('change', function() {
            // console.log('onchangeddddddd')
            var selectedValue = $(this).find('option:selected').text();
            var value = JSON.parse($(this).val())
            console.log(value)
            $(this).css('display', 'none');
            if (type_selection.indexOf('artikul_alu') !== -1) {
                data_base[i].base_artikul =selectedValue
            }
            if (type_selection.indexOf('artikul_pvc') !== -1) {
                console.log()
                data_base[i].base_artikul =selectedValue
                data_base[i].nazvaniye_system = value['nazvaniye_sistem']
                data_base[i].camera = value['camera']
                data_base[i].kod_k_component = value['kod_k_component']
                data_base[i].artikul = value['component2']
    
                $('#artikul_pvc'+i).text(value['artikul'])
                $('#iskyucheniye'+i).text(value['iskyucheniye'])
                $('#component'+i).text(value['component2'])


                $('#nazvaniye_system'+i).text(value['nazvaniye_sistem'])
                $('#camera'+i).text(value['camera'])
                $('#kod_komponent'+i).text(value['kod_k_component'])
            }
            if (type_selection.indexOf('nak') !== -1) {
                data_base[i].kod_nakleyki = selectedValue
                data_base[i].nadpis_nakleyki = value['nadpis']
                $('#nadpis_nakleyki'+i).text(value['nadpis'])
            }
            // ######## dovomi bor
            $(input_selector).val(selectedValue)

            var data = data_base[i].get_kratkiy_tekst()
            console.log(data)
            if(data.accept){
                var table_tr =$('#table_tr'+i);
                table_tr.css('background-color','#2de319')
                data_base[i].full = true
                data_base[i].kratkiy_tekst = data.text
            }else{
                var table_tr = $('#table_tr'+i);
                table_tr.css('background-color','white')
                data_base[i].kratkiy_tekst = NaN;
                data_base[i].full = false
            }
            var kratkiy_tekst = $('#kratkiy_tekst'+String(i));
            kratkiy_tekst.text(data.text)
        });
    }
}


for(var key in jsonData){
    i+=1
    data ={
        'component':jsonData[key]['artikul'],
        'artikul_pvc':jsonData[key]['base_artikul'],
        'nazvaniye_system':jsonData[key]['nazvaniye_system'],
        'camera':jsonData[key]['camera'],
        'kod_komponent':jsonData[key]['kod_k_component'],
        'iskyucheniye':jsonData[key]['is_iklyuch']
    }
    custom_select2(type_selection='artikul_pvc',jsonData[i]['base_artikul'],i,nam='artikul','#mySelect'+i,'#searchInput'+i, url= '/client/pvc-artikul-list',data=data)    

    if(jsonData[i]['is_iklyuch']){
        $('#iskyucheniye'+i).css('border-color','#dedad9')
        $('#iskyucheniye' +i).text('1')
    }else{
        $('#iskyucheniye'+i).css('border-color','#dedad9')
        $('#iskyucheniye' +i).text('0')
    }

    if(jsonData[i]['id']){
        // $('#tip_pokritiya' +i).attr('disabled',false)
        $('#tip_pokritiya' +i).val(jsonData[i]['id'])
    }
    if(jsonData[i]['kod_svet_zames']){
        $('#kod_svet_zames' +i).attr('disabled',false)
        $('#kod_svet_zames' +i).val(jsonData[i]['kod_svet_zames'])
    }
    if(jsonData[i]['dlina']){
        $('#length' +i).attr('disabled',false)
        $('#length' +i).val(jsonData[i]['dlina'])
    }
    if(jsonData[i]['svet_lamplonka_snaruji']){
        $('#svet_lamplonka_snaruji' +i).attr('disabled',false)
        $('#svet_lamplonka_snaruji' +i).val(jsonData[i]['kod_lam_sn'])
        $('#code_lamplonka_snaruji' +i).text(jsonData[i]['kod_lam_sn'])
    }
    if(jsonData[i]['svet_lamplonka_vnutri']){
        $('#svet_lamplonka_vnutri' +i).attr('disabled',false)
        $('#svet_lamplonka_vnutri' +i).val(jsonData[i]['kod_lam_vn'])
        $('#code_lamplonka_vnutri' +i).text(jsonData[i]['kod_lam_vn'])
    }
    if(jsonData[i]['kod_svet_rezini']){
        $('#kod_svet_rezini' +i).css('display','block')
        $('#kod_svet_rezini' +i).css('border-color','#dedad9')
        $('#kod_svet_rezini' +i).val(jsonData[i]['svet_rezin'])
        $('#svet_rezin' +i).text(jsonData[i]['svet_rezin'])
    }
    data ={
        'nadpis_nakleyki':jsonData[i]['nadpis_nakleyki']
    }
    custom_select2(type_selection='nakleyka',jsonData[i]['kod_nakleyki'],i,nam='name','#nakleykaSelect'+i,'#nakleykaInput'+i, url= '/client/nakleyka-list-pvc',data=data)

    if(jsonData[i]['kratkiy_tekst']){
        $('#kratkiy_tekst' +i).text(jsonData[i]['kratkiy_tekst'])
    }
   
    $('#sap_code_ruchnoy' +i).css('display','block')
    $('#sap_code_ruchnoy' +i).val(jsonData[i]['sap_code'])

    $('#kratkiy_tekst_ruchnoy' +i).css('display','block')
    $('#kratkiy_tekst_ruchnoy' +i).val(jsonData[i]['krat'])

    $('#comment' +i).css('display','block')
    $('#comment' +i).val(jsonData[i]['comment'])

    $('#pickupdate' +i).css('border-color','#dedad9')
    $('#pickupdate' +i).css('display','block')
    $('#pickupdate' +i).val(jsonData[i]['pickupdate'])

    $('#sena_c_nds' +i).css('border-color','#dedad9')
    $('#sena_c_nds' +i).css('display','block')
    $('#sena_c_nds' +i).val(jsonData[i]['sena_c_nds'])

    $('#sena_bez_nds' +i).css('border-color','#dedad9')
    $('#sena_bez_nds' +i).css('display','block')
    $('#sena_bez_nds' +i).val(jsonData[i]['sena_bez_nds'])

    $('#online_savdo_id' +i).css('border-color','#dedad9')
    $('#online_savdo_id' +i).css('display','block')
    $('#online_savdo_id' +i).val(jsonData[i]['online_id'])

    $('#nazvaniye_ruchnoy' +i).css('border-color','#dedad9')
    $('#nazvaniye_ruchnoy' +i).css('display','block')
    $('#nazvaniye_ruchnoy' +i).val(jsonData[i]['nazvaniye_ruchnoy'])

    $('#svet_product' +i).css('border-color','#dedad9')
    $('#svet_product' +i).css('display','block')
    $('#svet_product' +i).val(jsonData[i]['svet_product'])

    $('#group_zakup' +i).css('border-color','#dedad9')
    $('#group_zakup' +i).css('display','block')
    $('#group_zakup' +i).val(jsonData[i]['group_zakup'])

    $('#group' +i).css('border-color','#dedad9')
    $('#group' +i).css('display','block')
    $('#group' +i).val(jsonData[i]['group'])

    $('#tip' +i).css('border-color','#dedad9')
    $('#tip' +i).css('display','block')
    $('#tip' +i).val(jsonData[i]['tip'])

    $('#segment' +i).css('border-color','#dedad9')
    $('#segment' +i).css('display','block')
    $('#segment' +i).val(jsonData[i]['segment'])

    $('#buxgalter_tovar' +i).css('border-color','#dedad9')
    $('#buxgalter_tovar' +i).css('display','block')
    $('#buxgalter_tovar' +i).val(jsonData[i]['buxgalter_tovar'])

    $('#buxgalter_uchot' +i).css('border-color','#dedad9')
    $('#buxgalter_uchot' +i).css('display','block')
    $('#buxgalter_uchot' +i).val(jsonData[i]['buxgalter_uchot'])

    $('#bazoviy_edin' +i).css('border-color','#dedad9')
    $('#bazoviy_edin' +i).css('display','block')
    $('#bazoviy_edin' +i).val(jsonData[i]['bazoviy_edin'])

    $('#alter_edin' +i).css('border-color','#dedad9')
    $('#alter_edin' +i).css('display','block')
    $('#alter_edin' +i).val(jsonData[i]['alter_edin'])

    $('#stoimost_baza' +i).css('border-color','#dedad9')
    $('#stoimost_baza' +i).css('display','block')
    $('#stoimost_baza' +i).val(jsonData[i]['stoimost_baza'])
    
    $('#stoimost_alter' +i).css('border-color','#dedad9')
    $('#stoimost_alter' +i).css('display','block')
    $('#stoimost_alter' +i).val(jsonData[i]['stoimost_alter'])

    $('#status' +i).css('border-color','#dedad9')
    $('#status' +i).css('display','block')
    $('#status' +i).val(jsonData[i]['status_online'])

    $('#zavod_name' +i).css('border-color','#dedad9')
    $('#zavod_name' +i).css('display','block')
    $('#zavod_name' +i).val(jsonData[i]['zavod_name'])

    $('#diller' +i).css('border-color','#dedad9')
    $('#diller' +i).css('display','block')
    $('#diller' +i).val(jsonData[i]['diller'])

    $('#tip_clenta' +i).css('border-color','#dedad9')
    $('#tip_clenta' +i).css('display','block')
    $('#tip_clenta' +i).val(jsonData[i]['tip_clenta'])

    if(jsonData[i]['is_active']){
        $('#is_active'+i).css('border-color','#dedad9')
        $('#is_active' +i).text('Активный')
    }else{
        $('#is_active'+i).css('border-color','#dedad9')
        $('#is_active' +i).text('Пассивный')
    }
    // create_kratkiy_tekst(i)
}






function get_nakleyka(i){
    $('.kod_nakleyki'+i).select2({
        ajax: {
            url: "/client/nakleyka-list-pvc",
            dataType: 'json',
            processResults: function(data){
                return {results: $.map(data, function(item){
                    return {id:item.id,text:item.name,nadpis:item.nadpis}
                })
            };
            }
        }
        });
        $(".kod_nakleyki"+String(i)).on("select2:select", function (e) { 
            var nadpis_nakleyki = $('#nadpis_nakleyki'+String(i));
            nadpis_nakleyki.text(e.params.data.nadpis);
            
            })
}



function clear_artikul(id){
    var table_tr =$('#table_tr'+id);
    $('.nazvaniye_system'+id).text('');
    var tip_pokritiya = $('#tip_pokritiya'+String(id));
    tip_pokritiya.val('0').change();
    tip_pokritiya.attr("disabled",true);
    var camera = $('#camera'+String(id));
    var kod_komponent = $('#kod_komponent'+String(id));
    var kod_svet_zames = $('#kod_svet_zames'+String(id));
    var kod_svet_rezini = $('#kod_svet_rezini'+String(id));
    var svet_rezini = $('#svet_rezin'+String(id));
    var nakleyka_select = $('.kod_nakleyki'+String(id))
    nakleyka_select.val(null).trigger('change');
    var nakleyka_select_org = document.getElementById('nakleyka_select'+String(id))
    nakleyka_select_org.style.display='none';

    camera.text('')
    kod_komponent.text('')
    svet_rezini.text('')
    kod_svet_zames.val('')
    kod_svet_zames.attr('disabled',true)
    kod_svet_zames.css('border-color','#dedad9')
    
    kod_svet_rezini.val('')
    kod_svet_rezini.css('display','none')
       
    // var select_nakleyka = $('#nakleyka'+String(id));
    // select_nakleyka.children("span").remove();
    // select_nakleyka.children("select").remove();
    delete data_base[id]

    var kratkiy_tekst = document.getElementById('kratkiy_tekst'+String(id));
    kratkiy_tekst.innerText="";


    
    
    table_tr.css('background-color','white')
    




    var dlina =$('#length'+String(id));
    dlina.val('');
    dlina.attr("disabled",true);
    dlina.css("border-color",'#dedad9');

    var combination= $('#combination'+String(id));
    combination.text("");

    var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id));
    svet_lamplonka_snaruji.val('0').change();
    svet_lamplonka_snaruji.attr("disabled",true);
    svet_lamplonka_snaruji.css("border-color",'#dedad9');
    var code_lamplonka_snaruji = $('#code_lamplonka_snaruji'+String(id));
    code_lamplonka_snaruji.text("")
    

    var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id));
    svet_lamplonka_vnutri.val('0').change();
    svet_lamplonka_vnutri.attr("disabled",true);
    svet_lamplonka_vnutri.css("border-color",'#dedad9');
    var code_lamplonka_vnutri = $('#code_lamplonka_vnutri'+String(id));
    code_lamplonka_vnutri.text("")

   
   
   
    
}

function artukil_clear(id){
    $('#artikul'+id).val(null).trigger('change');
    clear_artikul(id)
    $('#artikul'+id).attr('disabled',true)

    var status_first = $('#status'+String(id))
   
    status_first.val('Активный')

    var sap_code_ruchnoy =$('#sap_code_ruchnoy'+id);
    var kratkiy_tekst_ruchnoy =$('#kratkiy_tekst_ruchnoy'+id);
    var online_savdo_id =$('#online_savdo_id'+id);
    var nazvaniye_ruchnoy =$('#nazvaniye_ruchnoy'+id);


    var svet_product =$('#svet_product'+id);
    var group_zakup =$('#group_zakup'+id);
    var group =$('#group'+id);
    var tip =$('#tip'+id);
    var bazoviy_edin =$('#bazoviy_edin'+id);
    var status =$('#status'+id);
    var zavod =$('#zavod'+id);
    var buxgalter_uchot =$('#buxgalter_uchot'+id);
    var alter_edin =$('#alter_edin'+id);
    var stoimost_baza =$('#stoimost_baza'+id);
    var stoimost_alter =$('#stoimost_alter'+id);
    var segment =$('#segment'+id);
    var buxgalter_tovar =$('#buxgalter_tovar'+id);
    var comment =$('#comment'+id);
    var obshiy_ves_shtuku =$('#obshiy_ves_shtuku'+id);
    var pickupdate =$('#pickupdate'+id);
    var sena_c_nds =$('#sena_c_nds'+id);
    var sena_bez_nds =$('#sena_bez_nds'+id);
    var diller =$('#diller'+id);
    var tip_clenta =$('#tip_clenta'+id);
    
    comment.css('display','none')
    obshiy_ves_shtuku.css('display','none')
    pickupdate.css('display','none')
    sena_c_nds.css('display','none')
    sena_bez_nds.css('display','none')
    diller.css('display','none')
    tip_clenta.css('display','none')
    // var zavod_name =$('#zavod_name'+id)
    // zavod_name.text('')


    svet_product.css('display','none')
    group_zakup.css('display','none')
    group.css('display','none')
    tip.css('display','none')
    bazoviy_edin.css('display','none')
    status.css('display','none')
    zavod.css('display','none')
    buxgalter_uchot.css('display','none')
    alter_edin.css('display','none')
    stoimost_baza.css('display','none')
    stoimost_alter.css('display','none')
    segment.css('display','none')
    buxgalter_tovar.css('display','none')
    sap_code_ruchnoy.css('display','none')
    kratkiy_tekst_ruchnoy.css('display','none')
    online_savdo_id.css('display','none')
    online_savdo_id.css('border-color','red')
    nazvaniye_ruchnoy.css('display','none')
    nazvaniye_ruchnoy.css('border-color','red')


    svet_product.css('border-color','red')
    group_zakup.css('border-color','red')
    group.css('border-color','red')
    tip.css('border-color','red')
    bazoviy_edin.css('border-color','red')
    status.css('border-color','red')
    zavod.css('border-color','red')
    pickupdate.css('border-color','red')
    sena_c_nds.css('border-color','red')
    sena_bez_nds.css('border-color','red')
    tip_clenta.css('border-color','red')

    
    diller.val('')
    tip_clenta.val('')
    sap_code_ruchnoy.val('')
    kratkiy_tekst_ruchnoy.val('')
    online_savdo_id.val('')
    nazvaniye_ruchnoy.val('')
    svet_product.val('')
    group_zakup.val('')
    group.val('')
    tip.val('')
    bazoviy_edin.val('')
    status.val('Активный')
    // zavod.val('')
    buxgalter_uchot.val('')
    alter_edin.val('')
    stoimost_baza.val('')
    stoimost_alter.val('')
    segment.val('')
    buxgalter_tovar.val('')
    comment.val('')
    obshiy_ves_shtuku.val('')
    pickupdate.val('')
    sena_c_nds.val('')
    sena_bez_nds.val('')
    
    var create_btn =$('#create_btn'+id);
    var activate_btn =$('#activate_btn'+id);

    create_btn.attr('disabled',false)
    activate_btn.attr('disabled',false)



}


function tip_pokritiya_selected(id,val){

    var element33 = document.getElementById("table_tr"+id);
    element33.style.backgroundColor='white';
    

    var dlina =$('#length'+String(id));
    dlina.attr("disabled",false);
    if(dlina.val()==''){
        dlina.css("border-color",'#fc2003');
    }

    

    
   
    var kratkiy_tekst = $('#kratkiy_tekst'+String(id));
    kratkiy_tekst.text("");


    
  

    var nadpis_nakleyki = $('#nadpis_nakleyki'+String(id));
    nadpis_nakleyki.text('');
    var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id));
    svet_lamplonka_snaruji.val('0').change();
    svet_lamplonka_snaruji.attr("disabled",true);
    svet_lamplonka_snaruji.css("border-color",'#dedad9');
    var code_lamplonka_snaruji = $('#code_lamplonka_snaruji'+String(id));
    code_lamplonka_snaruji.text("")
    code_lamplonka_snaruji.css("border-color",'#dedad9');

    var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id));
    svet_lamplonka_vnutri.val('0').change();
    svet_lamplonka_vnutri.attr("disabled",true);
    svet_lamplonka_vnutri.css("border-color",'#dedad9');
    var code_lamplonka_vnutri = $('#code_lamplonka_vnutri'+String(id));
    code_lamplonka_vnutri.text("")
    code_lamplonka_vnutri.css("border-color",'#dedad9');

    

    // var nakleyka_select = $('#nakleyka_select'+String(id));
    // nakleyka_select.css('display','block');
    // get_nakleyka(id)

    
    var is_active = $('#is_active'+String(id))
    
    var svet_product_val =''
    var gruppa_zakupok =''
    
    var iskyucheniye =$('#iskyucheniye'+id).text()
    
    if(String(val) == '1'){
        var kod_svet_zames = $('#kod_svet_zames'+String(id));
        kod_svet_zames.attr("disabled",false);
        if(kod_svet_zames.val()==''){
            kod_svet_zames.css("border-color",'#fc2003');
        }
    
        data_base[id] = new BasePokritiya()
        data_base[id].id = 1;
        data_base[id].tip_pokritiya = 'Неламинированный';
        
        var artikul_pvc = $('#artikul_pvc'+String(id));
        data_base[id].base_artikul= artikul_pvc.text()

        svet_product_val = 'WHITE' 
        gruppa_zakupok ='PVX OQ (Navoiy)' 
        var kod_svet_rezini = $('#kod_svet_rezini'+String(id));
        kod_svet_rezini.val('')

        var diller =$('#diller'+id)
        var tip_clenta =$('#tip_clenta'+id)
        diller.css('display','block')
        tip_clenta.css('display','block')

        const nakleyka =$('#nakleykaInput'+id)
        if(nakleyka.val()==''){
            nakleyka.css('border-color','red')
        }
        
        if(iskyucheniye =='1'){
            data_base[id].is_iklyuch=true
            kod_svet_rezini.css('display','none');
            kod_svet_rezini.css('border-color','#dedad9')
        }else{
            data_base[id].is_iklyuch=false
            kod_svet_rezini.css('display','block');
        }
        
    }else if(String(val) == '2'){
        data_base[id] = new BasePokritiya()
        data_base[id].id = 2;
        data_base[id].tip_pokritiya = 'Ламинированный';
        var artikul_pvc = $('#artikul_pvc'+String(id));
        data_base[id].base_artikul= artikul_pvc.text()

        svet_product_val ='LAM'
        gruppa_zakupok ='PVX LAM (Navoiy)' 
        
        var kod_svet_zames = $('#kod_svet_zames'+String(id));
        kod_svet_zames.attr("disabled",false);
        if(kod_svet_zames.val()==''){
            kod_svet_zames.css("border-color",'#fc2003');
        }
        const nakleyka =$('#nakleykaInput'+id)
        if(nakleyka.val()==''){
            nakleyka.css('border-color','red')
        }

        var kod_svet_rezini = $('#kod_svet_rezini'+String(id));
        kod_svet_rezini.val('')
        var diller =$('#diller'+id)
        var tip_clenta =$('#tip_clenta'+id)
        diller.css('display','block')
        tip_clenta.css('display','block')

        var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id));
        svet_lamplonka_snaruji.attr("disabled",false);
        svet_lamplonka_snaruji.attr("required",true);
        if(svet_lamplonka_snaruji.val()=='' || String(svet_lamplonka_snaruji.val())=='null'){
            svet_lamplonka_snaruji.css("border-color",'#fc2003');
        }
        var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id));
        svet_lamplonka_vnutri.attr("disabled",false);
        svet_lamplonka_vnutri.attr("required",true);
        if(svet_lamplonka_vnutri.val()=='' || String(svet_lamplonka_snaruji.val())=='null'){
            svet_lamplonka_vnutri.css("border-color",'#fc2003');
        }

        if(iskyucheniye =='1'){
            kod_svet_rezini.css('display','none');
            data_base[id].is_iklyuch=true
        }else{
            kod_svet_rezini.css('display','block');
            data_base[id].is_iklyuch=false
        }
    }
    
    


    if(is_active.text()=='Активный' && String(val) != ''){
        
        var svet_product =$('#svet_product'+id);
        
        
        data_base[id].is_active=true

        var sap_code_ruchnoy =$('#sap_code_ruchnoy'+id);
        var kratkiy_tekst_ruchnoy =$('#kratkiy_tekst_ruchnoy'+id);
        var online_savdo_id =$('#online_savdo_id'+id);
        var nazvaniye_ruchnoy =$('#nazvaniye_ruchnoy'+id);
        var svet_product =$('#svet_product'+id);
        var group_zakup =$('#group_zakup'+id);
        var group =$('#group'+id);
        var tip =$('#tip'+id);
        var bazoviy_edin =$('#bazoviy_edin'+id);
        var status =$('#status'+id);
        var zavod =$('#zavod'+id);
        var buxgalter_uchot =$('#buxgalter_uchot'+id);
        var alter_edin =$('#alter_edin'+id);
        var stoimost_baza =$('#stoimost_baza'+id);
        var stoimost_alter =$('#stoimost_alter'+id);
        var segment =$('#segment'+id);
        var buxgalter_tovar =$('#buxgalter_tovar'+id);
        var comment =$('#comment'+id);
        var pickupdate =$('#pickupdate'+id);
        var sena_c_nds =$('#sena_c_nds'+id);
        var sena_bez_nds =$('#sena_bez_nds'+id);
        comment.css('display','block')
        pickupdate.css('display','block')
        sena_c_nds.css('display','block')
        sena_bez_nds.css('display','block')
        
        
        
        
        sap_code_ruchnoy.css('display','block')
        kratkiy_tekst_ruchnoy.css('display','block')
        online_savdo_id.css('display','block')
        nazvaniye_ruchnoy.css('display','block')
        svet_product.css('display','block')
        group_zakup.css('display','block')
        group.css('display','block')
        tip.css('display','block')
        bazoviy_edin.css('display','block')
        status.css('display','block')
        zavod.css('display','block')
        buxgalter_uchot.css('display','block')
        alter_edin.css('display','block')
        stoimost_baza.css('display','block')
        stoimost_alter.css('display','block')
        segment.css('display','block')
        buxgalter_tovar.css('display','block')


        status.val('Активный')
        // status.attr('disabled',true)

        sap_code_ruchnoy.css('border-color','#dedad9')
        kratkiy_tekst_ruchnoy.css('border-color','#dedad9')
        online_savdo_id.css('border-color','#dedad9')
        nazvaniye_ruchnoy.css('border-color','#dedad9')
        svet_product.css('border-color','#dedad9')
        group_zakup.css('border-color','#dedad9')
        group.css('border-color','#dedad9')
        tip.css('border-color','#dedad9')
        bazoviy_edin.css('border-color','#dedad9')
        status.css('border-color','#dedad9')
        zavod.css('border-color','#dedad9')
        buxgalter_uchot.css('border-color','#dedad9')
        alter_edin.css('border-color','#dedad9')
        stoimost_baza.css('border-color','#dedad9')
        stoimost_alter.css('border-color','#dedad9')
        segment.css('border-color','#dedad9')
        buxgalter_tovar.css('border-color','#dedad9')
        comment.css('border-color','#dedad9')
        pickupdate.css('border-color','#dedad9')
        sena_c_nds.css('border-color','#dedad9')
        sena_bez_nds.css('border-color','#dedad9')

    }else if(is_active.text()=='Пассивный' && String(val) != ''){
       
        var svet_product =$('#svet_product'+id);
        var sap_code_ruchnoy =$('#sap_code_ruchnoy'+id);
        var kratkiy_tekst_ruchnoy =$('#kratkiy_tekst_ruchnoy'+id);
        var online_savdo_id =$('#online_savdo_id'+id);
        var nazvaniye_ruchnoy =$('#nazvaniye_ruchnoy'+id);
        var svet_product =$('#svet_product'+id);
        var group_zakup =$('#group_zakup'+id);
        var group =$('#group'+id);
        var tip =$('#tip'+id);
        var bazoviy_edin =$('#bazoviy_edin'+id);
        var status =$('#status'+id);
        var zavod =$('#zavod'+id);
        var buxgalter_uchot =$('#buxgalter_uchot'+id);
        var alter_edin =$('#alter_edin'+id);
        var stoimost_baza =$('#stoimost_baza'+id);
        var stoimost_alter =$('#stoimost_alter'+id);
        var segment =$('#segment'+id);
        var buxgalter_tovar =$('#buxgalter_tovar'+id);
        var comment =$('#comment'+id);
        var obshiy_ves_shtuku =$('#obshiy_ves_shtuku'+id);
        var pickupdate =$('#pickupdate'+id);
        var sena_c_nds =$('#sena_c_nds'+id);
        var sena_bez_nds =$('#sena_bez_nds'+id);
        comment.css('display','block')
        obshiy_ves_shtuku.css('display','block')
        pickupdate.css('display','block')
        sena_c_nds.css('display','block')
        sena_bez_nds.css('display','block')
        
        
        
        buxgalter_uchot.val('Килограмм')
        bazoviy_edin.val('Штука')
        alter_edin.val('Килограмм')
        stoimost_baza.val('1')
        
        

        sap_code_ruchnoy.css('display','block')
        kratkiy_tekst_ruchnoy.css('display','block')
        online_savdo_id.css('display','block')
        nazvaniye_ruchnoy.css('display','block')
        svet_product.css('display','block')
        group_zakup.css('display','block')
        group.css('display','block')
        tip.css('display','block')
        bazoviy_edin.css('display','block')
        status.css('display','block')
        zavod.css('display','block')
        buxgalter_uchot.css('display','block')
        alter_edin.css('display','block')
        stoimost_baza.css('display','block')
        stoimost_alter.css('display','block')
        segment.css('display','block')
        buxgalter_tovar.css('display','block')
        
        svet_product.val(svet_product_val)
        tip.val('Готовый продукт')
        group_zakup.val(gruppa_zakupok)
        status.val('Активный')
        // status.attr('disabled',true)

        online_savdo_id.css('border-color','#dedad9')
        tip_clenta.css('border-color','#dedad9')

    }
    
    create_kratkiy_tekst(id);
}



function svet_lamplonka_snaruji_selected(id,val){
    var code_lamplonka_snaruji = $('#code_lamplonka_snaruji'+String(id));
    code_lamplonka_snaruji.text(String(val))
    
    var svet_lamplonka_snaruji = document.getElementById('svet_lamplonka_snaruji'+String(id))
    svet_lamplonka_snaruji.style.borderColor='red';
    // data_base[id].kod_lam_sn =NaN;
    create_kratkiy_tekst(id);
    

}
function svet_lamplonka_vnutri_selected(id,val){
    var code_lamplonka_vnutri = $('#code_lamplonka_vnutri'+String(id));
    code_lamplonka_vnutri.text(String(val));
    var svet_lamplonka_vnutri = document.getElementById('svet_lamplonka_vnutri'+String(id))
    svet_lamplonka_vnutri.style.borderColor='red';
    create_kratkiy_tekst(id);
    
}




function create_kratkiy_tekst(id){
    
    if(!data_base[id]){
        console.log('salom')
    }else{
  
    var kratkiy_tekst = $('#kratkiy_tekst'+String(id));
    var combination= $('#combination'+String(id));
    combination_text = combination.text();
    var val = $('#tip_pokritiya'+String(id)).val();
    var dlina = $('#length'+String(id));
  

    if(dlina.val()!=''){
        dlina.css("border-color",'#dedad9');
        data_base[id].dlina = dlina.val();
    }else{
        dlina.css("border-color",'red');
        data_base[id].dlina = NaN;
    }
    
    var kod_svet_zames = $('#kod_svet_zames'+String(id));
   
    if(kod_svet_zames.val()!='0' && kod_svet_zames.val()!='' && kod_svet_zames.val()!=null){
        kod_svet_zames.css("border-color",'#dedad9');
        data_base[id].kod_svet_zames = kod_svet_zames.val()
    }else{
        console.log('sssaaaaa')
        data_base[id].kod_svet_zames = NaN;
        kod_svet_zames.css("border-color",'red');
    }
    
    
    
    var iskyucheniye =$('#iskyucheniye' +id).text()

    if(iskyucheniye =='1'){

        var kod_svet_rezini =$('#kod_svet_rezini' + id);
        if(kod_svet_rezini.val()!=''){
            var svet_rezin =$('#svet_rezin' + id);
            var selectedText = $("#kod_svet_rezini"+id + " option:selected").text();
            svet_rezin.text(kod_svet_rezini.val())
            kod_svet_rezini.css('border-color','#dedad9')
            data_base[id].kod_svet_rezini =selectedText;
            data_base[id].svet_rezin =kod_svet_rezini.val();
        }else{
            var svet_rezin =$('#svet_rezin' + id);
            svet_rezin.text('')
            data_base[id].kod_svet_rezini = NaN
            data_base[id].svet_rezin = NaN;
        }
        
    }else{
        
        var kod_svet_rezini =$('#kod_svet_rezini' + id);
        if(kod_svet_rezini.val()!=''){
            var svet_rezin =$('#svet_rezin' + id);
            var selectedText = $("#kod_svet_rezini"+id + " option:selected").text();
            svet_rezin.text(kod_svet_rezini.val())
            kod_svet_rezini.css('border-color','#dedad9')
            data_base[id].kod_svet_rezini =selectedText;
            data_base[id].svet_rezin =kod_svet_rezini.val();
        }else{
            var svet_rezin =$('#svet_rezin' + id);
            svet_rezin.text('')
            kod_svet_rezini.css('border-color','red')
            data_base[id].kod_svet_rezini = NaN
            data_base[id].svet_rezin = NaN;
        }
    }


    

    if(String(val) == '1'){
       
        var nakleyka_select = $('#nakleykaInput'+String(id))
        
        if(nakleyka_select.val() !=''){
            var nadpis_nakleyki = $('#nadpis_nakleyki'+id)
            nadpis_nakleyki.css('border-color','#dedad9');
            // nakleyka_select.style.borderBlockColor='#dedad9'
            data_base[id].kod_nakleyki = nakleyka_select.val()
            data_base[id].nadpis_nakleyki = nadpis_nakleyki.text();
            
        }else{
            // spanss.style.borderColor='red';
            // nakleyka_select.style.borderBlockColor='red'
            data_base[id].nadpis_nakleyki = NaN;
            data_base[id].kod_nakleyki = NaN

        }

       
    }
    else if(String(val) == '2'){
       


        var nakleyka_select = $('#nakleykaInput'+String(id))
        
        if(nakleyka_select.val() !=''){
            var nadpis_nakleyki = $('#nadpis_nakleyki'+id)
            nadpis_nakleyki.css('border-color','#dedad9');
            data_base[id].kod_nakleyki = nakleyka_select.val()
            data_base[id].nadpis_nakleyki = nadpis_nakleyki.text();
            
        }else{
            data_base[id].nadpis_nakleyki = NaN;
            data_base[id].kod_nakleyki = NaN

        }

        
            
        var code_lamplonka_snaruji = document.getElementById('code_lamplonka_snaruji'+String(id))//.innerText;
        
        if(code_lamplonka_snaruji.innerText !=''){
            $('#svet_lamplonka_snaruji'+String(id)).css('border-color','#dedad9');//.innerText;
            var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id)+' option:selected')//.innerText;
            data_base[id].kod_lam_sn = code_lamplonka_snaruji.innerText;
            data_base[id].svet_lamplonka_snaruji = svet_lamplonka_snaruji.text();
        }else{
            $('#svet_lamplonka_snaruji'+String(id)).css('border-color','red');//.innerText;
            data_base[id].kod_lam_sn = NaN;
            data_base[id].svet_lamplonka_snaruji = NaN;
        }
        
        var code_lamplonka_vnutri = document.getElementById('code_lamplonka_vnutri'+String(id));
        
        if(code_lamplonka_vnutri.innerText !=''){
            $('#svet_lamplonka_vnutri'+String(id)).css('border-color','#dedad9');//.innerText;
            var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id)+' option:selected')//.innerText;
            data_base[id].kod_lam_vn =code_lamplonka_vnutri.innerText;
            data_base[id].svet_lamplonka_vnutri =svet_lamplonka_vnutri.text();
        }else{
            $('#svet_lamplonka_vnutri'+String(id)).css('border-color','red');//.innerText;
            data_base[id].kod_lam_vn =NaN;
        }

        
        

    }


    if(String(val) != ''){

        var sap_code_ruchnoy =$('#sap_code_ruchnoy'+id);
        var kratkiy_tekst_ruchnoy =$('#kratkiy_tekst_ruchnoy'+id);
        var online_savdo_id =$('#online_savdo_id'+id);
        var nazvaniye_ruchnoy =$('#nazvaniye_ruchnoy'+id);
        var svet_product =$('#svet_product'+id);
        var group_zakup =$('#group_zakup'+id);
        var group =$('#group'+id);
        var tip =$('#tip'+id);
        var bazoviy_edin =$('#bazoviy_edin'+id);
        var status =$('#status'+id);
        var zavod =$('#zavod_name'+id);
        var nazvaniye_system =$('.nazvaniye_system'+id).text();
        
        var segment =$('#segment'+id).val();
        var buxgalter_tovar =$('#buxgalter_tovar'+id).val();
        var buxgalter_uchot =$('#buxgalter_uchot'+id).val();
        var alter_edin =$('#alter_edin'+id).val();
        var stoimost_baza =$('#stoimost_baza'+id).val();
        var stoimost_alter =$('#stoimost_alter'+id).val();
       
        if(nazvaniye_system!=''){
            data_base[id].nazvaniye_system = nazvaniye_system;
        }else{
            data_base[id].nazvaniye_system = NaN;
        }
        if(stoimost_alter!=''){
            data_base[id].stoimost_alter = stoimost_alter;
        }else{
            data_base[id].stoimost_alter = NaN;
        }
        if(stoimost_baza!=''){
            data_base[id].stoimost_baza = stoimost_baza;
        }else{
            data_base[id].stoimost_baza = NaN;
        }
        if(alter_edin!=''){
            data_base[id].alter_edin = alter_edin;
        }else{
            data_base[id].alter_edin = NaN;
        }
        if(buxgalter_uchot!=''){
            data_base[id].buxgalter_uchot = buxgalter_uchot;
        }else{
            data_base[id].buxgalter_uchot = NaN;
        }
        if(segment!=''){
            data_base[id].segment = segment;
        }else{
            data_base[id].segment = NaN;
        }
        if(buxgalter_tovar!=''){
            data_base[id].buxgalter_tovar = buxgalter_tovar;
        }else{
            data_base[id].buxgalter_tovar = NaN;
        }


        var comment =$('#comment'+id);
        var pickupdate =$('#pickupdate'+id);
        var sena_c_nds =$('#sena_c_nds'+id);
        var sena_bez_nds =$('#sena_bez_nds'+id);
        var diller =$('#diller'+id)
        var tip_clenta =$('#tip_clenta'+id)
        
        
        var is_active =$('#is_active'+id)
        
        if(is_active.text()=='Активный'){

            if(tip_clenta.val()!=''){
                data_base[id].tip_clenta = tip_clenta.val();
                tip_clenta.css('border-color','#dedad9')
            }else{
                tip_clenta.css('border-color','#dedad9')
                data_base[id].tip_clenta = NaN;
            }
            if(diller.val()!=''){
                data_base[id].diller = diller.val();
                diller.css('border-color','#dedad9')
            }else{
                data_base[id].diller = NaN;
            }

            if(sena_bez_nds.val()!=''){
                data_base[id].sena_bez_nds = sena_bez_nds.val();
                sena_bez_nds.css('border-color','#dedad9')
            }else{
                data_base[id].sena_bez_nds = NaN;
            }
            if(sena_c_nds.val()!=''){
                data_base[id].sena_c_nds = sena_c_nds.val();
                sena_c_nds.css('border-color','#dedad9')
            }else{
                data_base[id].sena_c_nds = NaN;
            }
            if(pickupdate.val()!=''){
                data_base[id].pickupdate = pickupdate.val();
                pickupdate.css('border-color','#dedad9')
            }else{
                data_base[id].pickupdate = NaN;
            }
            
            if(comment.val()!=''){
                data_base[id].comment = comment.val();
                comment.css('border-color','#dedad9')
            }else{
                data_base[id].comment = NaN;
            }
            
            if(sap_code_ruchnoy.val()!=''){
                data_base[id].sap_code = sap_code_ruchnoy.val();
                
            }else{
                data_base[id].sap_code = NaN;
                
            }
            if(kratkiy_tekst_ruchnoy.val()!=''){
                data_base[id].krat = kratkiy_tekst_ruchnoy.val();
               
            }else{
                data_base[id].krat = NaN;
                
            }
            if(online_savdo_id.val()!=''){
                online_savdo_id.css('border-color','#dedad9')
                data_base[id].online_id = online_savdo_id.val();
            }else{
                data_base[id].online_id = NaN;
                online_savdo_id.css('border-color','red')
            }
            if(nazvaniye_ruchnoy.val()!=''){
                nazvaniye_ruchnoy.css('border-color','#dedad9')
                data_base[id].nazvaniye_ruchnoy = nazvaniye_ruchnoy.val();
            }else{
                data_base[id].nazvaniye_ruchnoy =NaN;
                nazvaniye_ruchnoy.css('border-color','red')
            }
    
    
            if(svet_product.val()!=''){
                
                data_base[id].svet_product = svet_product.val();
            }else{
                data_base[id].svet_product =NaN;
               
            }
            if(group_zakup.val()!=''){
                
                data_base[id].group_zakup = group_zakup.val();
            }else{
                data_base[id].group_zakup =NaN;
                
            }
            if(group.val()!=''){
                
                data_base[id].group = group.val();
            }else{
                data_base[id].group =NaN;
                
            }
            if(tip.val()!=''){
                
                data_base[id].tip = tip.val();
            }else{
                data_base[id].tip =NaN;
                
            }
            if(bazoviy_edin.val()!=''){
                
                data_base[id].bazoviy_edin = bazoviy_edin.val();
            }else{
                data_base[id].bazoviy_edin =NaN;
                
            }
            
            if(status.val()!=''){
                
                data_base[id].status_online = status.val();
            }else{
                data_base[id].status_online =NaN;
                
            }
            if(zavod.val()!=''){
                
                var zavod_name =$('#zavod_name'+id)
                zavod_name.text(zavod.val())
                data_base[id].zavod = zavod.val();
            }else{
                var zavod_name =$('#zavod_name'+id)
                zavod_name.text('')
                data_base[id].zavod =NaN;
                
                
            }
        }else{
            if(tip_clenta.val()!=''){
                data_base[id].tip_clenta = tip_clenta.val();
                tip_clenta.css('border-color','#dedad9')
            }else{
                tip_clenta.css('border-color','red')
                data_base[id].tip_clenta = NaN;
            }
            if(diller.val()!=''){
                data_base[id].diller = diller.val();
                diller.css('border-color','#dedad9')
            }else{
                data_base[id].diller = NaN;
            }
            if(sena_bez_nds.val()!=''){
                data_base[id].sena_bez_nds = sena_bez_nds.val();
                sena_bez_nds.css('border-color','#dedad9')
            }else{
                sena_bez_nds.css('border-color','red')
                data_base[id].sena_bez_nds = NaN;
            }

            if(sena_c_nds.val()!=''){
                data_base[id].sena_c_nds = sena_c_nds.val();
                sena_c_nds.css('border-color','#dedad9')
            }else{
                sena_c_nds.css('border-color','red')
                data_base[id].sena_c_nds = NaN;
            }
            if(pickupdate.val()!=''){
                data_base[id].pickupdate = pickupdate.val();
                pickupdate.css('border-color','#dedad9')
            }else{
                pickupdate.css('border-color','red')
                data_base[id].pickupdate = NaN;
            }
            
            if(comment.val()!=''){
                data_base[id].comment = comment.val();
                comment.css('border-color','#dedad9')
            }else{
                data_base[id].comment = NaN;
            }

            if(sap_code_ruchnoy.val()!=''){
                data_base[id].sap_code = sap_code_ruchnoy.val();
                sap_code_ruchnoy.css('border-color','#dedad9')
            }else{
                data_base[id].sap_code = NaN;
            }


            if(kratkiy_tekst_ruchnoy.val()!=''){
                data_base[id].krat = kratkiy_tekst_ruchnoy.val();
                kratkiy_tekst_ruchnoy.css('border-color','#dedad9')
            }else{
                data_base[id].krat = NaN;
            }
            if(online_savdo_id.val()!=''){
                
                data_base[id].online_id = online_savdo_id.val();
            }else{
                data_base[id].online_id = NaN;
                
            }
            if(nazvaniye_ruchnoy.val()!=''){
                nazvaniye_ruchnoy.css('border-color','#dedad9')
                data_base[id].nazvaniye_ruchnoy = nazvaniye_ruchnoy.val();
            }else{
                data_base[id].nazvaniye_ruchnoy =NaN;
                nazvaniye_ruchnoy.css('border-color','red')
            }
    
    
            if(svet_product.val()!=''){
                svet_product.css('border-color','#dedad9')
                data_base[id].svet_product = svet_product.val();
            }else{
                data_base[id].svet_product =NaN;
                svet_product.css('border-color','red')
            }
            if(group_zakup.val()!=''){
                group_zakup.css('border-color','#dedad9')
                data_base[id].group_zakup = group_zakup.val();
            }else{
                data_base[id].group_zakup =NaN;
                group_zakup.css('border-color','red')
            }
            if(group.val()!=''){
                group.css('border-color','#dedad9')
                data_base[id].group = group.val();
            }else{
                data_base[id].group =NaN;
                group.css('border-color','red')
            }
            if(tip.val()!=''){
                tip.css('border-color','#dedad9')
                data_base[id].tip = tip.val();
            }else{
                data_base[id].tip =NaN;
                tip.css('border-color','red')
            }
            if(bazoviy_edin.val()!=''){
                bazoviy_edin.css('border-color','#dedad9')
                data_base[id].bazoviy_edin = bazoviy_edin.val();
            }else{
                data_base[id].bazoviy_edin =NaN;
                bazoviy_edin.css('border-color','red')
            }
            
            if(status.val()!=''){
                status.css('border-color','#dedad9')
                data_base[id].status_online = status.val();
            }else{
                data_base[id].status_online =NaN;
                status.css('border-color','red')
            }
            if(zavod.val()!=''){
                zavod.css('border-color','#dedad9')
                var zavod_name =$('#zavod_name'+id)
                zavod_name.text(zavod.val())
                data_base[id].zavod = zavod.val();
            }else{
                var zavod_name =$('#zavod_name'+id)
                zavod_name.text('')
                data_base[id].zavod =NaN;
                
                zavod.css('border-color','red')
            }

        }
        
    }




    

    var data = data_base[id].get_kratkiy_tekst()

    if(data.accept){
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','#2de319')
        data_base[id].full = true
        data_base[id].kratkiy_tekst = data.text
    }else{
        var table_tr = $('#table_tr'+id);
        table_tr.css('background-color','white')
        data_base[id].kratkiy_tekst = NaN;
        data_base[id].full = false
    }
    
    kratkiy_tekst.text(data.text)

    }
}








