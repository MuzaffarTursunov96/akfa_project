class BasePokritiya{
    constructor(
        full=false,//done
        id=NaN, //done
        pickupdate=NaN,
        sena_c_nds=NaN,
        sena_bez_nds=NaN,
        sena_c_nds_zakup=NaN,
        sena_bez_nds_zakup=NaN,
        online_id=NaN,
        nazvaniye_ruchnoy=NaN,
        svet_product=NaN,
        group_zakup=NaN,
        group=NaN,
        tip=NaN,
        segment=NaN,
        buxgalter_tovar=NaN,
        buxgalter_sena=NaN,
        buxgalter_uchot=NaN,
        bazoviy_edin=NaN,
        alter_edin=NaN,
        stoimost_baza=NaN,
        stoimost_alter=NaN,
        status_online=NaN,
        zavod=NaN,
        tip_clenta=NaN,
        comment=NaN,
        is_active=false,
        ) {
      
        this.full=full;
        this.id=id;
        this.pickupdate=pickupdate;
        this.sena_c_nds=sena_c_nds;
        this.sena_bez_nds=sena_bez_nds;
        this.sena_c_nds_zakup=sena_c_nds_zakup;
        this.sena_bez_nds_zakup=sena_bez_nds_zakup;
        this.online_id=online_id;
        this.nazvaniye_ruchnoy=nazvaniye_ruchnoy;
        this.svet_product=svet_product;
        this.group_zakup=group_zakup;
        this.group=group;
        this.tip=tip;
        this.segment=segment;
        this.buxgalter_tovar=buxgalter_tovar;
        this.buxgalter_sena=buxgalter_sena;
        this.buxgalter_uchot=buxgalter_uchot;
        this.bazoviy_edin=bazoviy_edin;
        this.alter_edin=alter_edin;
        this.stoimost_baza=stoimost_baza;
        this.stoimost_alter=stoimost_alter;
        this.status_online=status_online;
        this.zavod=zavod;
        this.tip_clenta=tip_clenta;
        this.comment=comment;
        this.is_active=is_active;
    }
    get_kratkiy_tekst(){
            switch(this.id){
                case 1: if(this.is_active){
                    if (this.online_id && this.nazvaniye_ruchnoy){
                        
                        return {'text':'','accept':true}
                    }else{
                        return {'text':'','accept':false}
                    }
                    
                    }else{
                        if (this.tip_clenta && this.zavod &&this.sena_c_nds &&this.sena_bez_nds &&this.sena_c_nds_zakup &&this.sena_bez_nds_zakup && this.pickupdate && this.nazvaniye_ruchnoy && this.svet_product && this.group_zakup && this.group && this.tip && this.bazoviy_edin && this.status_online){
        
                            return {'text':'','accept':true}
                        }else{
                            return {'text':'','accept':false}
                        }
                    }break;
                case 2:if(this.is_active){
                    if (this.online_id && this.nazvaniye_ruchnoy){
        
                        
                        return {'text':'','accept':true}
                    }else{
                        
                        return {'text':'','accept':false}
                    }
                    
                    }else{
                       if (this.tip_clenta &&this.zavod &&this.sena_c_nds &&this.sena_bez_nds &&this.sena_c_nds_zakup &&this.sena_bez_nds_zakup && this.pickupdate && this.nazvaniye_ruchnoy && this.svet_product && this.group_zakup && this.group && this.tip && this.bazoviy_edin && this.status_online){
                            
                            
                            return {'text':'','accept':true}
                        }else{
                            
                            return {'text':'','accept':false}
                        }
                    }break;
            }
        }
  }





function front_piece(start=1,end=6){
    var text =""

    for (let i = start; i < end; i++) {
        var buttons =''
        if(status_proccess1 == 'new'){
            buttons=`<td class="sticky-col"   style='left:0; padding-right:5px; background-color:white!important;' >
                    <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-secondary btn-sm" id='clear_btn`+String(i)+`' onclick="artukil_clear(`+String(i)+`)" data-bs-toggle='popover' title='Tozalab tashlash'><i class="bi bi-x-circle"></i></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm"  onclick="copy_tr(`+String(i)+`)" data-bs-toggle='popover' title='Dubl qilish'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm" id='create_btn`+String(i)+`' onclick="create(`+String(i)+`)" data-bs-toggle='popover' title='Yangi sozdaniya qilish uchun ishlatiladi' style='font-size:16px; width:34px'>С</button>
                            <button type="button" class="btn btn-outline-secondary btn-sm" id='activate_btn`+String(i)+`' onclick="activate(`+String(i)+`)" data-bs-toggle='popover' title='Activatsiya qilish uchun ishlatiladi' style='font-size:16px;width:34px'>А</button>
                    </div>
                    </td>`
        }else{
            buttons=``
        }
        text +=`
        <tr id='table_tr` +String(i)+`' style='padding-bottom:0!important;margin-bottom:0!important;'>                   
        `+buttons+
         `
        <td >
        <input  style='display:none;border-color:red; line-height:15px;z-index:0' type="date" class="form-control" id="pickupdate`+String(i)+`" onchange='create_kratkiy_tekst(`+String(i)+`)'> 
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px;display:none;height:32px;z-index:0 " id='sena_c_nds`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px;display:none;height:32px;z-index:0 " id='sena_bez_nds`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px;display:none;height:32px;z-index:0 " id='sena_c_nds_zakup`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px;display:none;height:32px;z-index:0 " id='sena_bez_nds_zakup`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px;display:none;height:32px;z-index:0 " id='online_savdo_id`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 250px; font-size:10px; height:27px!important;z-index:0;display:none;"  id='nazvaniye_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
            
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 110px; font-size:12px; padding-right:0px; border-color:red;display:none;z-index:0"  id='svet_product`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
            <option  selected></option>
            <option   value="LAM">LAM</option>
            <option   value="Anod">Anod</option>
            <option   value="COLOUR">COLOUR</option>
            <option   value="VAKUM &amp; 3D">VAKUM &amp; 3D</option>
            <option   value="WHITE">WHITE</option>
            <option   value="Без цвета">Без цвета</option>
        </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 230px; font-size:12px; padding-right:0px;  border-color:red;display:none;z-index:0" id='group_zakup`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
            <option  selected></option>
            <option value="Butilchita">Butilchita</option>
            <option value="Aksessuar Import">Aksessuar Import</option>
            <option value="Aksessuar Rezina">Aksessuar Rezina</option>
            <option value="Aksessuar UZ">Aksessuar UZ</option>
            <option value="Tiokol">Tiokol</option>
            <option value="Alumin Lam">Alumin Lam</option>
            <option value="Alumin Anod (Navoiy)">Alumin Anod (Navoiy)</option>
            <option value="PVX LAM">PVX LAM</option>
            <option value="PVX OQ">PVX OQ</option>
            <option value="Metal">Metal</option>
            <option value="Alucobond">Alucobond</option>
            <option value="Alumin WHITE">Alumin WHITE</option>
            <option value="Radiator">Radiator</option>
            <option value="Kabina">Kabina</option>
            <option value="Granula">Granula</option>
            <option value="Radiator (IMPORT)">Radiator (IMPORT)</option>
            <option value="Alumin COLOUR">Alumin COLOUR</option>
            <option value="Alumin VAKUM">Alumin VAKUM</option>
            <option value="Kotel (AIRFEL)">Kotel (AIRFEL)</option>
            <option value="Kotel (AKFA)">Kotel (AKFA)</option>
            <option value="Alumin WHITE (Navoiy)">Alumin WHITE (Navoiy)</option>
            <option value="Alumin VAKUM (Navoiy)">Alumin VAKUM (Navoiy)</option>
            <option value="Alumin COLOUR (Navoiy)">Alumin COLOUR (Navoiy)</option>
            <option value="PVX LAM (Navoiy)">PVX LAM (Navoiy)</option>
            <option value="PVX OQ (Navoiy)">PVX OQ (Navoiy)</option>
            <option value="VITYAJNOYE USTROYSTVA">VITYAJNOYE USTROYSTVA</option>
            <option value="Setka">Setka</option>
            <option value="Granit">Granit</option>
            <option value="Radiator SAP (IMPORT)">Radiator SAP (IMPORT)</option>
            <option value="Radiator (Panel) Lider Line (UZ)">Radiator (Panel) Lider Line (UZ)</option>
            <option value="Rezina Tpv">Rezina Tpv</option>
            <option value="Alumin WHITE (B.N)">Alumin WHITE (B.N)</option>
            <option value="Alumin VAKUM (B.N)">Alumin VAKUM (B.N)</option>
            <option value="Aksessuar UZ Tapoich">Aksessuar UZ Tapoich</option>
            <option value="Aksessuar Import (SAP) keremas">Aksessuar Import (SAP) keremas</option>
            <option value="Radiator (Panel) AKFA (UZ)">Radiator (Panel) AKFA (UZ)</option>
            <option value="Kraska">Kraska</option>
            <option value="Gazoblok">Gazoblok</option>
            <option value="Paket">Paket</option>
            <option value="Radiator (Panel) ROYAL (UZ)">Radiator (Panel) ROYAL (UZ)</option>
           
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1"  >
            <select class="form-select" aria-label="" id='group`+String(i)+`' style="width: 240px; font-size:12px; padding-right:0px; border-color:red;display:none;z-index:0"   onchange='create_kratkiy_tekst(`+String(i)+`)'required>
                <option  selected></option>
                <option value="AKSESSUAR (B) ALUTEX">AKSESSUAR (B) ALUTEX</option>
                <option value="AKSESSUAR BUTIL">AKSESSUAR BUTIL</option>
                <option value="AKSESSUAR BUTIL (B.N)">AKSESSUAR BUTIL (B.N)</option>
                <option value="AKSESSUAR (R) ALUTEX">AKSESSUAR (R) ALUTEX</option>
                <option value="Pvc. EPDM (UZ)">Pvc. EPDM (UZ)</option>
                <option value="REZINA PROF. & TPV">REZINA PROF. & TPV</option>
                <option value="REZINA PROF. & TPV (B.N)">REZINA PROF. & TPV (B.N)</option>
                <option value="AKSESSUAR (T) ALUTEX">AKSESSUAR (T) ALUTEX</option>
                <option value="TIOKOL">TIOKOL</option>
                <option value="Metall Prof. ALUTEX">Metall Prof. ALUTEX</option>
                <option value="Metall Profil (..)">Metall Profil (..)</option>
                <option value="Metall Profil (Engelberg)">Metall Profil (Engelberg)</option>
                <option value="Metall Profil (..) (B.N)">Metall Profil (..) (B.N)</option>
                <option value="Avt. SEKSIONNIE VOROTO">Avt. SEKSIONNIE VOROTO</option>
                <option value="ALUCOBOND">ALUCOBOND</option>
                <option value="ALUCOBOND (KG)">ALUCOBOND (KG)</option>
                <option value="EKO KABINA">EKO KABINA</option>
                <option value="GRANULA">GRANULA</option>
                <option value="KOTEL">KOTEL</option>
                <option value="KOTEL (AIRFEL)">KOTEL (AIRFEL)</option>
                <option value="KOTEL (AKFA)">KOTEL (AKFA)</option>
                <option value="KOTEL (AKFA) GOST AAA">KOTEL (AKFA) GOST AAA</option>
                <option value="KOTEL (FAHRENEIT)">KOTEL (FAHRENEIT)</option>
                <option value="KOTEL AKSSESSUAR">KOTEL AKSSESSUAR</option>
                <option value="KOTEL (AIRFEL) AKSESSUAR">KOTEL (AIRFEL) AKSESSUAR</option>
                <option value="KOTEL (AKFA) AKSESSUAR">KOTEL (AKFA) AKSESSUAR</option>
                <option value="KRASKA">KRASKA</option>
                <option value="MEBEL PROF&AKS.">MEBEL PROF&AKS.</option>
                <option value="MEBEL 3D (56/55)">MEBEL 3D (56/55)</option>
                <option value="MEBEL AKSESSUAR (ANOD)">MEBEL AKSESSUAR (ANOD)</option>
                <option value="MEBEL ANADIROVKA">MEBEL ANADIROVKA</option>
                <option value="MEBEL SVETNOY">MEBEL SVETNOY</option>
                <option value="MEBEL VAKUM">MEBEL VAKUM</option>
                <option value="RADIATOR AKSESSUAR">RADIATOR AKSESSUAR</option>
                <option value="SETKA">SETKA</option>
                <option value="SUVOQ PROFIL">SUVOQ PROFIL</option>
                <option value="VITYAJNOY USTROYSTVA">VITYAJNOY USTROYSTVA</option>
                <option value="GRANIT">GRANIT</option>
                <option value="RADIATORI PANEL (IMPORT)">RADIATORI PANEL (IMPORT)</option>
                <option value="PIGMENT POROSHKOVIY">PIGMENT POROSHKOVIY</option>
                <option value="GAZOBLOK">GAZOBLOK</option>
                <option value="PAKET">PAKET</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px; border-color:red;display:none;z-index:0"  id='tip`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)'required>
                <option  selected></option>
                <option value="Сырье">Сырье</option>
                <option value="Готовый продукт">Готовый продукт</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 145px; font-size:12px; padding-right:0px; display:none;z-index:0" id='segment`+String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value="Aldoks">Aldoks</option>
                <option value="Стандарт">Стандарт</option>
                <option value="Премиум">Премиум</option>
                <option value="Аксессуар">Аксессуар</option>
                <option value="Аксессуар 2">Аксессуар 2</option>
                <option value="Аксессуар 3">Аксессуар 3</option>
                <option value="Falcon">Falcon</option>
                <option value="Эконом">Эконом</option>
                <option value="Mebel">Mebel</option>
                <option value="LAMBRI">LAMBRI</option>
                <option value="RETPEN 10%">RETPEN 10%</option>
                <option value="RETPEN 15%">RETPEN 15%</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 520px; font-size:12px; padding-right:0px; display:none;z-index:0" id='buxgalter_tovar`+String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value='Профиль из ПВХ ламинированный'>Профиль из ПВХ ламинированный</option>
                <option value='Термоуплотненный алюминиевый профиль (N)'>Термоуплотненный алюминиевый профиль (N)</option>
                <option value='Мебельный профиль из алюминия анодированный матовое серебро (N)'>Мебельный профиль из алюминия анодированный матовое серебро (N)</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none;height:32px;z-index:0" id='buxgalter_sena`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' ></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px;display:none;z-index:0" id='buxgalter_uchot`+String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
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
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px; border-color:red;display:none;z-index:0" id='bazoviy_edin`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value="Штука">Штука</div>
                <option value="Килограмм">Килограмм</div>
                <option value="Квадратный метр">Квадратный метр</div>
                <option value="Метр">Метр</div>
                <option value="КМП">КМП</div>
                <option value="Пачка">Пачка</div>
                <option value="Секция">Секция</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px;display:none;z-index:0" id='alter_edin`+ String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value="Штука">Штука</div>
                <option value="Килограмм">Килограмм</div>
                <option value="Квадратный метр">Квадратный метр</div>
                <option value="Метр">Метр</div>
                <option value="КМП">КМП</div>
                <option value="Пачка">Пачка</div>
                <option value="Секция">Секция</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none;height:32px;z-index:0" id='stoimost_baza`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' ></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none;height:32px;z-index:0" id='stoimost_alter`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)' ></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px; border-color:red;display:none;z-index:0" id='status`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value="Активный">Активный</option>
                <option value="Пассивный">Пассивный</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px; border-color:red;display:none;z-index:0" id='zavod_name`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value="ZAVOD BUTIL">ZAVOD BUTIL</option>
                <option value="IMPORT">IMPORT</option>
                <option value="ZAVOD REZINA">ZAVOD REZINA</option>
                <option value="ZAVOD TIOKOL">ZAVOD TIOKOL</option>
                <option value="ZAVOD METAL">ZAVOD METAL</option>
                <option value="ZAVOD GRANULA">ZAVOD GRANULA</option>
                <option value="ZAVOD REZINA TPV">ZAVOD REZINA TPV</option>
                <option value="ZAVOD KRASKA">ZAVOD KRASKA</option>
                <option value="ZAVOD TAPOICH AKS UZ">ZAVOD TAPOICH AKS UZ</option>
            </select>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px; display:none;z-index:0" id='tip_clenta`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  ></option>
                <option selected value="AKFA">AKFA</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <input type='text' class=" form-control " style=" width: 250px; font-size:10px; height:27px!important;z-index:0"  id='comment`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
            
        </td>
        <td style="display: none;" >
            <div class="input-group input-group-sm mb-1">
            <span id="is_active`+String(i)+`" style="display: none;"></span>
            </div>
        </td>
        
        </tr>`
    }
    return text
}

text = front_piece()


var table = $('#table-artikul')
data_base = {}
// table.append(text)

if(status_proccess1 == 'new'){
    table.append(text)

}else{
    var jsonData = JSON.parse(jsonData);
    // var jsonData ='{{order}}'

    // var ii= 1

    for(var key1 in jsonData){
        data_base[key1] = new BasePokritiya()
        for(var key2 in jsonData[key1]){
            data_base[key1][key2] = jsonData[key1][key2]
        }
        // ii += 1
    }



    var text2 =''
    for(var key1 in jsonData){
        // console.log(key1,'lllsdsafasfads')
        text2 += front_piece( parseInt(key1),parseInt(key1)+1)
    }

    var table = $('#table-artikul')

    table.append(text2)

    // var i = 1
    for(key2 in data_base){
        copy_tr(key2,key2)
        // i += 1
    }
}


function removeQuotesFromStartAndEnd(str) {
    // Remove double quotes from the beginning and end of the string
    return str.replace(/^"+|"+$/g, '');
}








function copy_tr(id,ii=1){
    if(!data_base[id]){
        console.log('salom2222 copy')
    }else{
        if(status_proccess1 == 'new'){

            text =""
            var size = $('#table-artikul tr').length;
            text = front_piece(start = size+1, end = size+2)
            var table = $('#table_tr'+id)
            var new_tr =$(text)
    
            table.after(new_tr)
            
            
            var data = new BasePokritiya()
            for(key in data_base[id]){
                data[key] = data_base[id][key]
            }
                
            
    
            
    
            data_base[size+1] = data
            
            var s = size+1
        }else{
            var data = data_base[id]
            var s = ii
        }

        var pickupdate = data.pickupdate;
        var sena_c_nds = data.sena_c_nds;
        var sena_bez_nds = data.sena_bez_nds;
        var sena_c_nds_zakup = data.sena_c_nds_zakup;
        var sena_bez_nds_zakup = data.sena_bez_nds_zakup;
        var online_id = data.online_id;
        var nazvaniye_ruchnoy = data.nazvaniye_ruchnoy;
        var svet_product = data.svet_product;
        var group_zakup = data.group_zakup;
        var group = data.group;
        var tip = data.tip;
        var segment = data.segment;
        var buxgalter_tovar = data.buxgalter_tovar;
        var buxgalter_sena = data.buxgalter_sena;
        var buxgalter_uchot = data.buxgalter_uchot;
        var bazoviy_edin = data.bazoviy_edin;
        var alter_edin = data.alter_edin;
        var stoimost_baza = data.stoimost_baza;
        var stoimost_alter = data.stoimost_alter;
        var status_online = data.status_online;
        var zavod = data.zavod;
        var tip_clenta = data.tip_clenta;
        var is_active = data.is_active;
        var comment = data.comment;
        
        var activate_btn =$('#activate_btn'+s);
        var create_btn =$('#create_btn'+s);
        activate_btn.attr('disabled',true)
        create_btn.attr('disabled',true)

        if(!is_active){
            create_btn.css('background-color','green')
            create_btn.css('color','white')
            $('#is_active'+s).text('')
            check_input_and_change(pickupdate,'#pickupdate'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(sena_c_nds,'#sena_c_nds'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(sena_bez_nds,'#sena_bez_nds'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(sena_c_nds_zakup,'#sena_c_nds_zakup'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(sena_bez_nds_zakup,'#sena_bez_nds_zakup'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(online_id,'#online_savdo_id'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(nazvaniye_ruchnoy,'#nazvaniye_ruchnoy'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(svet_product,'#svet_product'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(group_zakup,'#group_zakup'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(group,'#group'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(tip,'#tip'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(segment,'#segment'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(buxgalter_tovar,'#buxgalter_tovar'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(buxgalter_sena,'#buxgalter_sena'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(buxgalter_uchot,'#buxgalter_uchot'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(bazoviy_edin,'#bazoviy_edin'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(alter_edin,'#alter_edin'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(stoimost_baza,'#stoimost_baza'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(stoimost_alter,'#stoimost_alter'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(status_online,'#status'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(zavod,'#zavod_name'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(tip_clenta,'#tip_clenta'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(comment,'#comment'+s,dis=false,is_req=false,is_req_simple=true)
            }
        else{
            activate_btn.css('background-color','orange')
            activate_btn.css('color','white')
            $('#is_active'+s).text('Активный')
            check_input_and_change(pickupdate,'#pickupdate'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(sena_c_nds,'#sena_c_nds'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(sena_bez_nds,'#sena_bez_nds'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(sena_c_nds_zakup,'#sena_c_nds_zakup'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(sena_bez_nds_zakup,'#sena_bez_nds_zakup'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(online_id,'#online_savdo_id'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(nazvaniye_ruchnoy,'#nazvaniye_ruchnoy'+s,dis=false,is_req=true,is_req_simple=false)
            check_input_and_change(svet_product,'#svet_product'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(group_zakup,'#group_zakup'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(group,'#group'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(tip,'#tip'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(segment,'#segment'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(buxgalter_tovar,'#buxgalter_tovar'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(buxgalter_sena,'#buxgalter_sena'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(buxgalter_uchot,'#buxgalter_uchot'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(bazoviy_edin,'#bazoviy_edin'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(alter_edin,'#alter_edin'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(stoimost_baza,'#stoimost_baza'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(stoimost_alter,'#stoimost_alter'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(status_online,'#status'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(zavod,'#zavod_name'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(tip_clenta,'#tip_clenta'+s,dis=false,is_req=false,is_req_simple=true)
            check_input_and_change(comment,'#comment'+s,dis=false,is_req=false,is_req_simple=true)

        }


        
      
        
        
        
    }


}



function check_input_and_change(val,selector,dis=false,is_req=false,is_req_simple=false){
    if(is_req){
        
        // $(selector).attr('disabled',false)
        $(selector).css('display','block')
        $(selector).css('border-color','red')

    }
    if(is_req_simple){
        
        // $(selector).attr('disabled',false)
        $(selector).css('display','block')
        $(selector).css('border-color','#dedad9')

    }
    if(val !=NaN && val !='' && String(val) != 'NaN'){
        var sel = $(selector)
        // sel.attr('disabled',dis)
        sel.css('display','block')
        sel.css('border-color','#dedad9')
        sel.val(val)
        // console.log(val,typeof(val),selector)
    }
    
}

function check_text_and_change(val,selector){
    if(val !=NaN && val !='' && String(val) != 'NaN'){
        var sel = $(selector)
        sel.css('display','block')
        sel.text(val)
    }
}


function create(id){

    data_base[id] = new BasePokritiya()
    data_base[id].id = 1;
    var status_first =$('#status'+id);
    status_first.val('Активный')

    var is_active =$('#is_active'+id);
    is_active.text('Пассивный')

    var tip =$('#tip'+id);
    tip.val('Готовый продукт')
    

    var activate_btn =$('#activate_btn'+id);
    var create_btn =$('#create_btn'+id);
    create_btn.css('background-color','green')
    create_btn.css('color','white')
    activate_btn.attr('disabled',true)
    create_btn.attr('disabled',true)

    var zavod_name =$('#zavod_name'+id);
    var tip_clenta =$('#tip_clenta'+id);
    var sena_c_nds =$('#sena_c_nds'+id);
    var sena_bez_nds =$('#sena_bez_nds'+id);
    var sena_c_nds_zakup =$('#sena_c_nds_zakup'+id);
    var sena_bez_nds_zakup =$('#sena_bez_nds_zakup'+id);
    
    var svet_product =$('#svet_product'+id);
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
    var buxgalter_sena =$('#buxgalter_sena'+id);
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
    sena_c_nds_zakup.css('display','block')
    sena_bez_nds_zakup.css('display','block')
    
    
    
    buxgalter_uchot.val('Килограмм')
    bazoviy_edin.val('Штука')
    alter_edin.val('Килограмм')
    stoimost_baza.val('1')
    
    

    zavod_name.css('display','block')
    tip_clenta.css('display','block')
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
    buxgalter_sena.css('display','block')
    
    svet_product.val('')
    tip.val('Готовый продукт')
    group_zakup.val('')
    status.val('Активный')
    // status.attr('disabled',true)

    online_savdo_id.css('border-color','#dedad9')
    // tip_clenta.css('border-color','#dedad9')
    tip.css('border-color','#dedad9')
    bazoviy_edin.css('border-color','#dedad9')
    status.css('border-color','#dedad9')

        
   

}

function activate(id){
    // data_base[i] = new OnlineSavdo()

    data_base[id] = new BasePokritiya()
    data_base[id].id = 2;

    var activate_btn =$('#activate_btn'+id);
    var create_btn =$('#create_btn'+id);
    activate_btn.css('background-color','orange')
    activate_btn.css('color','white')
    activate_btn.attr('disabled',true)
    create_btn.attr('disabled',true)



    var status_first =$('#status'+id);
    status_first.val('Активный')

    var is_active =$('#is_active'+id);
    is_active.text('Активный')

   
   
        
    var svet_product =$('#svet_product'+id);
    
    
    data_base[id].is_active=true

    var zavod_name =$('#zavod_name'+id);
    var tip_clenta =$('#tip_clenta'+id);

    
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
    var buxgalter_sena =$('#buxgalter_sena'+id);
    var alter_edin =$('#alter_edin'+id);
    var stoimost_baza =$('#stoimost_baza'+id);
    var stoimost_alter =$('#stoimost_alter'+id);
    var segment =$('#segment'+id);
    var buxgalter_tovar =$('#buxgalter_tovar'+id);
    var comment =$('#comment'+id);
    var pickupdate =$('#pickupdate'+id);
    var sena_c_nds =$('#sena_c_nds'+id);
    var sena_bez_nds =$('#sena_bez_nds'+id);
    var sena_c_nds_zakup =$('#sena_c_nds_zakup'+id);
    var sena_bez_nds_zakup =$('#sena_bez_nds_zakup'+id);

    comment.css('display','block')
    pickupdate.css('display','block')
    sena_c_nds.css('display','block')
    sena_bez_nds.css('display','block')
    sena_c_nds_zakup.css('display','block')
    sena_bez_nds_zakup.css('display','block')
    
    
    zavod_name.css('display','block')
    tip_clenta.css('display','block')
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
    buxgalter_sena.css('display','block')
    alter_edin.css('display','block')
    stoimost_baza.css('display','block')
    stoimost_alter.css('display','block')
    segment.css('display','block')
    buxgalter_tovar.css('display','block')


    status.val('Активный')
    // status.attr('disabled',true)

    zavod_name.css('border-color','#dedad9')
    tip_clenta.css('border-color','#dedad9')
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
    buxgalter_sena.css('border-color','#dedad9')
    comment.css('border-color','#dedad9')
    pickupdate.css('border-color','#dedad9')
    sena_c_nds.css('border-color','#dedad9')
    sena_bez_nds.css('border-color','#dedad9')
    sena_c_nds_zakup.css('border-color','#dedad9')
    sena_bez_nds_zakup.css('border-color','#dedad9')

    

}





function artukil_clear(id){
    
    var table_tr =$('#table_tr'+id);
    
    delete data_base[id]

    
    table_tr.css('background-color','white')
    

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
    var zavod =$('#zavod_name'+id);
    var buxgalter_uchot =$('#buxgalter_uchot'+id);
    var buxgalter_sena =$('#buxgalter_sena'+id);
    var alter_edin =$('#alter_edin'+id);
    var stoimost_baza =$('#stoimost_baza'+id);
    var stoimost_alter =$('#stoimost_alter'+id);
    var segment =$('#segment'+id);
    var buxgalter_tovar =$('#buxgalter_tovar'+id);
    var comment =$('#comment'+id);
    var obshiy_ves_shtuku =$('#obshiy_ves_shtuku'+id);
    var pickupdate =$('#pickupdate'+id);
    var diller =$('#diller'+id);
    var tip_clenta =$('#tip_clenta'+id);
    var sena_c_nds =$('#sena_c_nds'+id);
    var sena_bez_nds =$('#sena_bez_nds'+id);
    var sena_c_nds_zakup =$('#sena_c_nds_zakup'+id);
    var sena_bez_nds_zakup =$('#sena_bez_nds_zakup'+id);
   
    
    comment.css('display','none')
    obshiy_ves_shtuku.css('display','none')
    pickupdate.css('display','none')
    diller.css('display','none')
    tip_clenta.css('display','none')
    sena_c_nds.css('display','none')
    sena_bez_nds.css('display','none')
    sena_c_nds_zakup.css('display','none')
    sena_bez_nds_zakup.css('display','none')
    


    svet_product.css('display','none')
    group_zakup.css('display','none')
    group.css('display','none')
    tip.css('display','none')
    bazoviy_edin.css('display','none')
    status.css('display','none')
    zavod.css('display','none')
    buxgalter_uchot.css('display','none')
    buxgalter_sena.css('display','none')
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
    tip_clenta.css('border-color','red')
    sena_c_nds.css('border-color','red')
    sena_bez_nds.css('border-color','red')
    sena_c_nds_zakup.css('border-color','red')
    sena_bez_nds_zakup.css('border-color','red')

    
    diller.val('')
    tip_clenta.val('')
    online_savdo_id.val('')
    nazvaniye_ruchnoy.val('')
    svet_product.val('')
    group_zakup.val('')
    group.val('')
    tip.val('')
    zavod.val('')
    bazoviy_edin.val('')
    status.val('Активный')
    sena_c_nds.val('')
    sena_bez_nds.val('')
    sena_c_nds_zakup.val('')
    sena_bez_nds_zakup.val('')
    buxgalter_uchot.val('')
    alter_edin.val('')
    stoimost_baza.val('')
    stoimost_alter.val('')
    segment.val('')
    buxgalter_tovar.val('')
    buxgalter_sena.val('')
    comment.val('')
    obshiy_ves_shtuku.val('')
    pickupdate.val('')
    
    
    var create_btn =$('#create_btn'+id);
    var activate_btn =$('#activate_btn'+id);

    activate_btn.attr('disabled',false)
    create_btn.attr('disabled',false)

    activate_btn.css('background-color','')
    activate_btn.css('color','')
    create_btn.css('background-color','')
    create_btn.css('color','')


}


function create_kratkiy_tekst(id){
    
    if(!data_base[id]){
        console.log('salom')
    }else{
    
    
        var online_savdo_id =$('#online_savdo_id'+id);
        var nazvaniye_ruchnoy =$('#nazvaniye_ruchnoy'+id);
        var svet_product =$('#svet_product'+id);
        var group_zakup =$('#group_zakup'+id);
        var group =$('#group'+id);
        var tip =$('#tip'+id);
        var bazoviy_edin =$('#bazoviy_edin'+id);
        var status =$('#status'+id);
        var zavod =$('#zavod'+id);

        var comment =$('#comment'+id);
        var pickupdate =$('#pickupdate'+id);
        var tip_clenta =$('#tip_clenta'+id)
        var sena_c_nds =$('#sena_c_nds'+id)
        var sena_bez_nds =$('#sena_bez_nds'+id)
        var sena_c_nds_zakup =$('#sena_c_nds_zakup'+id)
        var sena_bez_nds_zakup =$('#sena_bez_nds_zakup'+id)
        
        
        var is_active =$('#is_active'+id)
        var segment =$('#segment'+id)
        var buxgalter_tovar =$('#buxgalter_tovar'+id)
        var buxgalter_sena =$('#buxgalter_sena'+id)
        var buxgalter_uchot =$('#buxgalter_uchot'+id)
        var alter_edin =$('#alter_edin'+id)
        var stoimost_baza =$('#stoimost_baza'+id)
        var stoimost_alter =$('#stoimost_alter'+id)

        if(stoimost_alter.val()!=''){
            data_base[id].stoimost_alter = stoimost_alter.val();
        }else{
            data_base[id].stoimost_alter = NaN;
        }
        if(stoimost_baza.val()!=''){
            data_base[id].stoimost_baza = stoimost_baza.val();
        }else{
            data_base[id].stoimost_baza = NaN;
        }
        if(alter_edin.val()!=''){
            data_base[id].alter_edin = alter_edin.val();
        }else{
            data_base[id].alter_edin = NaN;
        }
        if(buxgalter_uchot.val()!=''){
            data_base[id].buxgalter_uchot = buxgalter_uchot.val();
        }else{
            data_base[id].buxgalter_uchot = NaN;
        }
        if(buxgalter_sena.val()!=''){
            data_base[id].buxgalter_sena = buxgalter_sena.val();
        }else{
            data_base[id].buxgalter_sena = NaN;
        }
        if(buxgalter_tovar.val()!=''){
            data_base[id].buxgalter_tovar = buxgalter_tovar.val();
        }else{
            data_base[id].buxgalter_tovar = NaN;
        }
        if(segment.val()!=''){
            data_base[id].segment = segment.val();
        }else{
            data_base[id].segment = NaN;
        }




        
        if(is_active.text()=='Активный'){

            if(tip_clenta.val()!=''){
                data_base[id].tip_clenta = tip_clenta.val();
                tip_clenta.css('border-color','#dedad9')
            }else{
                tip_clenta.css('border-color','#dedad9')
                data_base[id].tip_clenta = NaN;
            }
            if(sena_c_nds.val()!=''){
                data_base[id].sena_c_nds = sena_c_nds.val();
                sena_c_nds.css('border-color','#dedad9')
            }else{
                data_base[id].sena_c_nds = NaN;
            }
            if(sena_bez_nds.val()!=''){
                data_base[id].sena_bez_nds = sena_bez_nds.val();
                sena_bez_nds.css('border-color','#dedad9')
            }else{
                data_base[id].sena_bez_nds = NaN;
            }
            if(sena_c_nds_zakup.val()!=''){
                data_base[id].sena_c_nds_zakup = sena_c_nds_zakup.val();
                sena_c_nds_zakup.css('border-color','#dedad9')
            }else{
                data_base[id].sena_c_nds_zakup = NaN;
            }
            if(sena_bez_nds_zakup.val()!=''){
                data_base[id].sena_bez_nds_zakup = sena_bez_nds_zakup.val();
                sena_bez_nds_zakup.css('border-color','#dedad9')
            }else{
                data_base[id].sena_bez_nds_zakup = NaN;
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
            
            
            if(online_savdo_id.val()!=''){
                online_savdo_id.css('border-color','#dedad9')
                data_base[id].online_id = online_savdo_id.val();
            }else{
                data_base[id].online_id = NaN;
                online_savdo_id.css('border-color','red')
            }
            if(nazvaniye_ruchnoy.val()!=''){
                nazvaniye_ruchnoy.css('border-color','#dedad9')
                data_base[id].nazvaniye_ruchnoy = removeQuotesFromStartAndEnd(nazvaniye_ruchnoy.val());
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
            if(sena_c_nds.val()!=''){
                data_base[id].sena_c_nds = sena_c_nds.val();
                sena_c_nds.css('border-color','#dedad9')
            }else{
                sena_c_nds.css('border-color','red')
                data_base[id].sena_c_nds = NaN;
            }
            if(sena_bez_nds.val()!=''){
                data_base[id].sena_bez_nds = sena_bez_nds.val();
                sena_bez_nds.css('border-color','#dedad9')
            }else{
                data_base[id].sena_bez_nds = NaN;
                sena_bez_nds.css('border-color','red')
            }
            if(sena_c_nds_zakup.val()!=''){
                data_base[id].sena_c_nds_zakup = sena_c_nds_zakup.val();
                sena_c_nds_zakup.css('border-color','#dedad9')
            }else{
                data_base[id].sena_c_nds_zakup = NaN;
                sena_c_nds_zakup.css('border-color','red')
            }
            if(sena_bez_nds_zakup.val()!=''){
                data_base[id].sena_bez_nds_zakup = sena_bez_nds_zakup.val();
                sena_bez_nds_zakup.css('border-color','#dedad9')
            }else{
                data_base[id].sena_bez_nds_zakup = NaN;
                sena_bez_nds_zakup.css('border-color','red')
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

           
            if(online_savdo_id.val()!=''){
                
                data_base[id].online_id = online_savdo_id.val();
            }else{
                data_base[id].online_id = NaN;
                
            }
            if(nazvaniye_ruchnoy.val()!=''){
                nazvaniye_ruchnoy.css('border-color','#dedad9')
                data_base[id].nazvaniye_ruchnoy = removeQuotesFromStartAndEnd(nazvaniye_ruchnoy.val());
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
            var zavod_name =$('#zavod_name'+id)
            if(zavod_name.val()!=''){
                zavod_name.css('border-color','#dedad9')
               
                data_base[id].zavod = zavod_name.val();
            }else{
                data_base[id].zavod =NaN;
                zavod_name.css('border-color','red')
            }

        
        
    }




    



    var data = data_base[id].get_kratkiy_tekst()
    
    if(data.accept){
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','#2de319')
        data_base[id].full =true
    }else{
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','white')
        data_base[id].full =false

    }
    }
}

function add_column(){
        
    text =""
    var sizeee = $('#table-artikul tr').length;
    
    text = front_piece(start = sizeee+1, end = sizeee+2)

    
    var table = $('#table-artikul')
    table.append(text)
    


}




