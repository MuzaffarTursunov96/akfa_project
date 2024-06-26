class BasePokritiya{
    constructor(
        id=NaN, //done
        sapcode=NaN,//done
        nazvaniye_tovarov=NaN,//done
        polnoye_nazvaniye=NaN,//done
        sena_materiala=NaN,//done
        bazoviy_edinitsa=NaN,//done
        koefitsiyent=NaN,//done
        alternativ_edin=NaN,//done
        gruppa_materialov=NaN,//done
        comment=NaN,//done
        full=false//done
        ) {
      
        this.id = id;
        this.sapcode=sapcode;
        this.nazvaniye_tovarov=nazvaniye_tovarov;
        this.polnoye_nazvaniye=polnoye_nazvaniye;
        this.sena_materiala=sena_materiala;
        this.bazoviy_edinitsa=bazoviy_edinitsa;
        this.koefitsiyent=koefitsiyent;
        this.alternativ_edin=alternativ_edin;
        this.gruppa_materialov=gruppa_materialov;
        this.comment=comment 
        this.full = full; 
      

    }
    get_kratkiy_tekst(){
                if (this.polnoye_nazvaniye && this.sena_materiala && this.bazoviy_edinitsa){
                    return {'text':'','accept':true}
                }else{
                    return {'text':'','accept':false}
                }
        }
  }

text =""

var jsonData = JSON.parse(JSON.parse(document.getElementById('items-data').textContent)).data;

data_base = {}
var ii = 1

for(var key1 in jsonData){
    data_base[ii] = new BasePokritiya();
    for(var key2 in jsonData[key1]){
        data_base[ii][key2] = jsonData[key1][key2]
    }
    ii += 1 
}
i = 0
const lengthOfObject = Object.keys(jsonData).length;

var order_type =$('#order_type').text()


function front_piece(start=1,end=6){
    text =""

    for (let i = start; i < end; i++) {
        text +=`
        <tr id='table_tr` +String(i)+`' >                   
        
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 75px; font-size:10px; " id='sapcode`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 175px; font-size:10px; " id='nazvaniye_tovarov`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 175px; font-size:10px; " id='polnoye_nazvaniye`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px; " id='sena_materiala`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px; " id='bazoviy_edinitsa`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; " id='koefitsiyent`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; " id='alternativ_edin`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; " id='gruppa_materialov`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <textarea   rows='1' class=" form-control " style="width: 220px; font-size:10px;" id='comment`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></textarea >
            </div>
        </td>
        
        </tr>`
    }
    return text
}

text = front_piece(start=1,end=lengthOfObject+1)

var table = $('#table-artikul')

table.append(text)

var i = 1
for(key in data_base){
    copy_tr(key,i)
    i += 1
}

function copy_tr(id,i){
    if(!data_base[id]){
        console.log('salom2222 copy')
    }else{
        
        var data = data_base[id]
        var s = i

        var sapcode = data.sapcode;
        var nazvaniye_tovarov = data.nazvaniye_tovarov;
        var polnoye_nazvaniye = data.polnoye_nazvaniye;
        var sena_materiala = data.sena_materiala;
        var bazoviy_edinitsa = data.bazoviy_edinitsa;
        var koefitsiyent = data.koefitsiyent;
        var alternativ_edin = data.alternativ_edin;
        var gruppa_materialov = data.gruppa_materialov;
        var comment = data.comment;
        
      
        
        check_input_and_change(sapcode,'#sapcode'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(nazvaniye_tovarov,'#nazvaniye_tovarov'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(polnoye_nazvaniye,'#polnoye_nazvaniye'+s,dis=false,is_req=true,is_req_simple=false)
        check_input_and_change(sena_materiala,'#sena_materiala'+s,dis=false,is_req=true,is_req_simple=false)
        check_input_and_change(bazoviy_edinitsa,'#bazoviy_edinitsa'+s,dis=false,is_req=true,is_req_simple=false)
        check_input_and_change(koefitsiyent,'#koefitsiyent'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(alternativ_edin,'#alternativ_edin'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(gruppa_materialov,'#gruppa_materialov'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(comment,'#comment'+s,dis=false,is_req=false,is_req_simple=true)
        
        
        
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







function artukil_clear(id){
    
    var table_tr =$('#table_tr'+id);
    
    for(key in data_base[id]){
        data_base[id][key] = NaN
    }

    
    table_tr.css('background-color','white')

  
    var sapcode =$('#sapcode'+id);
    sapcode.val('')
    var nazvaniye_tovarov =$('#nazvaniye_tovarov'+id);
    nazvaniye_tovarov.val('')

    var polnoye_nazvaniye =$('#polnoye_nazvaniye'+id);
    polnoye_nazvaniye.val('')
    polnoye_nazvaniye.css('border-color','red')
    var sena_materiala =$('#sena_materiala'+id);
    sena_materiala.val('')
    sena_materiala.css('border-color','red')
    var bazoviy_edinitsa =$('#bazoviy_edinitsa'+id);
    bazoviy_edinitsa.val('')
    bazoviy_edinitsa.css('border-color','red')
    
    var koefitsiyent =$('#koefitsiyent'+id);
    koefitsiyent.val('')
    var alternativ_edin =$('#alternativ_edin'+id);
    alternativ_edin.val('')
    
    var gruppa_materialov =$('#gruppa_materialov'+id);
    gruppa_materialov.val('')
    var comment =$('#comment'+id);
    comment.val('')
    

}





function create_kratkiy_tekst(id){
    
    if(!data_base[id]){
        console.log('salom')
    }else{
    
    console.log(data_base[id])
        
    var sapcode =$('#sapcode'+id);
    var nazvaniye_tovarov =$('#nazvaniye_tovarov'+id);

    var polnoye_nazvaniye =$('#polnoye_nazvaniye'+id);
    var sena_materiala =$('#sena_materiala'+id);
    var bazoviy_edinitsa =$('#bazoviy_edinitsa'+id);
    

    var koefitsiyent =$('#koefitsiyent'+id);
    var alternativ_edin =$('#alternativ_edin'+id);
    var id_klaes =$('#id_klaes'+id);
    var gruppa_materialov =$('#gruppa_materialov'+id);
    var comment =$('#comment'+id);
    
    if(gruppa_materialov.val()!=''){
        data_base[id].gruppa_materialov = gruppa_materialov.val();
    }else{
        data_base[id].gruppa_materialov =NaN;
    }
    if(id_klaes.val()!=''){
        data_base[id].id_klaes = id_klaes.val();
    }else{
        data_base[id].id_klaes =NaN;
    }
    
    if(alternativ_edin.val()!=''){
        data_base[id].alternativ_edin = alternativ_edin.val();
    }else{
        data_base[id].alternativ_edin =NaN;
    }
    if(koefitsiyent.val()!=''){
        data_base[id].koefitsiyent = koefitsiyent.val();
    }else{
        data_base[id].koefitsiyent =NaN;
    }
    if(nazvaniye_tovarov.val()!=''){
        data_base[id].nazvaniye_tovarov = nazvaniye_tovarov.val();
    }else{
        data_base[id].nazvaniye_tovarov =NaN;
    }
    if(sapcode.val()!=''){
        data_base[id].sapcode = sapcode.val();
    }else{
        data_base[id].sapcode =NaN;
    }
    if(comment.val()!=''){
        data_base[id].comment = comment.val();
    }else{
        data_base[id].comment =NaN;
    }
        
    var polnoye_nazvaniye =$('#polnoye_nazvaniye'+id)
    if(polnoye_nazvaniye.val()!=''){
        polnoye_nazvaniye.css('border-color','#dedad9')
        data_base[id].polnoye_nazvaniye = polnoye_nazvaniye.val();
    }else{
        polnoye_nazvaniye.css('border-color','red')
        data_base[id].polnoye_nazvaniye =NaN;
        
        
    }
    var sena_materiala =$('#sena_materiala'+id)
    if(sena_materiala.val()!=''){
        sena_materiala.css('border-color','#dedad9')
        data_base[id].sena_materiala = sena_materiala.val();
    }else{
        sena_materiala.css('border-color','red')
        data_base[id].sena_materiala =NaN;
        
        
    }
    var bazoviy_edinitsa =$('#bazoviy_edinitsa'+id)
    if(bazoviy_edinitsa.val()!=''){
        bazoviy_edinitsa.css('border-color','#dedad9')
        data_base[id].bazoviy_edinitsa = bazoviy_edinitsa.val();
    }else{
        bazoviy_edinitsa.css('border-color','red')
        data_base[id].bazoviy_edinitsa =NaN;
        
        
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

