function initMap() { 
  //Variables for the Positions;
    var test= {lat: 18.984244, lng:  72.829854};
    var  Regional_Medical_Research_Centre={lat:19.771860  ,lng:  73.225658};
    var Sri_Venkateswara_Institute_of_Medical_Sciences={lat: 13.638198  ,lng:  79.403831};
    var Andhra_Medical_College={lat: 17.706779  ,lng: 83.304871};
    var Sidhartha_Medical_College={lat:  13.345448  ,lng:  77.059609};
    var Rangaraya_Medical_College={lat: 16.979657  ,lng: 82.237327};
    var Rajendra_Memorial_Research_Institute_of_Medical_Sciences    ={lat:25.599903  ,lng: 85.197727};
    var All_India_Institute_Medical_Sciences1 ={lat:21.257030  ,lng: 81.579216};
    var All_India_Institute_Medical_Sciences2  ={lat:28.567262  ,lng: 77.210045};
    var BJ_Medical_College ={lat:23.052698  ,lng: 72.602895};
    var MP_Shah_Government_Medical_College   ={lat:22.477595  ,lng: 70.065256};
    var BPS_Govt_Medical_College ={lat:29.152210  ,lng: 76.808429};
    var Pt_BD_Sharma_Post_Graduate_Institute_of_Medical_Sciences={lat:29.152210  ,lng: 76.808429};
    var Indira_Gandhi_Medical_College ={lat:31.106683  ,lng: 77.182311};
    var Dr_Rajendra_Prasad_Govt_Med_College  ={lat:32.098291  ,lng: 76.302057};
    var Sher_e_Kashmir_Institute_of_Medical_Sciences    ={lat:34.136323  ,lng: 74.800073};
    var Government_Medical_College1={lat:32.736338  ,lng: 74.853979};
    var Government_Medical_College2 ={lat:34.086143  ,lng: 74.798850};
    var MGM_Medical_College    ={lat:22.843941  ,lng: 86.232369};
    var Bangalore_Medical_College_Research_Institute    ={lat:12.959553  ,lng: 77.574695};
    var National_Institute_of_Virology_Field_Unit_Bangalore    ={lat:12.937600  ,lng: 77.590896};
    var Mysore_Medical_College_Research_Institute    ={lat:12.315547  ,lng: 76.650493};
    var  Indira_Gandhi_Government_Medical_College={lat:21.153693  ,lng: 79.093931};
    var  Viva_Institute_of_Pharmacy={lat:19.474024  ,lng: 72.858289};
    var  Kasturba_Hospital_for_Infectious_Diseases={lat:18.984270  ,lng: 72.829838};
    var Grant_Medical_College ={lat:18.9630684  ,lng:72.8314196};
    var Tata_Memorial_Center={lat:19.004907  ,lng:72.8409746};
    var PD_Hinduja_National_Hospital ={lat:19.0335052  ,lng:72.836155};
    var SRL_DrAvinash_Phadke_Labs ={lat:19.0335303  ,lng:72.829562};
    var Metropolis_Healthcare_Ltd={lat:19.0820158  ,lng:72.8835265};
    var IGENETIC_DIAGNOSTICS={lat:19.1102657  ,lng:72.8848941};
    var Rajiv_Gandhi_Medical_College={lat:19.1922216  ,lng:72.9845841};
    var Dr_Jariwala_Laboratory={lat:19.2359969  ,lng:72.8543682};
    //Variables for the Address:
    var  Regional_Medical_Research_Centre_label= "Regional Medical Research Centre,Post Bag 13, Dollygunj, Port Blair,Andaman and Nicobar Islands 744103";
    var Sri_Venkateswara_Institute_of_Medical_Sciences_label="Sri Venkateswara Institute of Medical Sciences,Alipiri Rd, Sri Padmavati Mahila Visvavidyalayam,Tirupati,Andhra Pradesh 517507";
    var Andhra_Medical_College_label="Andhra Medical College, Visakhapatnam,Medical College Road Opp Collector Office Maharanipeta King George Hospital Campus,Andhra Pradesh 530002";
    var Sidhartha_Medical_College_label="Sidhartha Medical College,NH 16 Service Rd, beside Dr NTR University of Health Sciences, Gunadala, Vijayawada,Andhra Pradesh 520008";
    var Rangaraya_Medical_College_label="Rangaraya Medical College,Pithampuram, Road, Kakinada,Andhra Pradesh 533001 ";
    var Rajendra_Memorial_Research_Institute_of_Medical_Sciences_label=" Rajendra Memorial Research Institute of Medical Sciences,Agam Kuan, Sadikpur, Patna, Bihar 800007 ";
    var All_India_Institute_Medical_Sciences1_label="All India Institute Medical Sciences,Great Eastern Rd, AIIMS Campus, Tatibandh, Raipur, Chhattisgarh 492099";
    var All_India_Institute_Medical_Sciences2_label=" All India Institute Medical Sciences (AIIMS),Ansari Nagar, New Delhi - 110029. ";
    var BJ_Medical_College_label=" BJ Medical College, Haripura, Asarwa, Ahmedabad, Gujarat 380016.";
    var MP_Shah_Government_Medical_College_label=" M.P.Shah Government Medical College,M.P.Shah Government Medical College, Jamnagar.";
    var BPS_Govt_Medical_College_label=" BPS Govt Medical College,Ganaur - Gohana Rd, Khanpur Kalan, Sonipat,Haryana 131305.";
    var Pt_BD_Sharma_Post_Graduate_Institute_of_Medical_Sciences_label="Pt. B.D. Sharma Post Graduate Institute of Medical Sciences, Medical Rd, Rohtak, Haryana 124001.";
    var Indira_Gandhi_Medical_College_label="Indira Gandhi Medical College, Shimla,Ridge Sanjauli Rd, Lakkar Bazar, Shimla, Himachal Pradesh 171001.";
    var Dr_Rajendra_Prasad_Govt_Med_College_label="Dr. Rajendra Prasad Govt. Med. College, Kangra,Tanda Hospital Rd, Pushp Vihar Colony, Kangra, Himachal Pradesh 176001.";
    var Sher_e_Kashmir_Institute_of_Medical_Sciences_label="Sher-e- Kashmir Institute of Medical Sciences, SKIMS Main Rd, Soura, Srinagar, 190011.";
    var Government_Medical_College1_label="Government Medical College,Maheshpura, chowk, Bakshi Nagar, Jammu Cantonment, Jammu and Kashmir 180001.";
    var Government_Medical_College2_label="Government Medical College,Bemina, Srinagar, Jammu and Kashmir 190010.";
    var MGM_Medical_College_label="MGM Medical College,Dimna Rd, Hill View Colony, Mango, Jamshedpur, Jharkhand 831020.";
    var Bangalore_Medical_College_Research_Institute_label="Bangalore Medical College & Research Institute,Fort, Krishna Rajendra Rd, Bengaluru, Karnataka 560002.";
    var National_Institute_of_Virology_Field_Unit_Bangalore_label="National Institute of Virology Field Unit Bangalore,1st Block, Jayanagar 1st Block, Jayanagar, Bengaluru, Karnataka 560011.";
    var Mysore_Medical_College_Research_Institute_label="Mysore Medical College & Research Institute,Irwin Road, next to Railway Staion, Mysuru, Karnataka 570001.";
    var  Indira_Gandhi_Government_Medical_College_label="Indira Gandhi Government Medical College,Mayo Hospital, Central Ave, Mominpura, Nagpur, Maharashtra 440018. ";
    var  Viva_Institute_of_Pharmacy_label='Viva Institute of Pharmacy,Shirgaon, Veer Sawarkar Road, Virar (East), Vasai, Thane, Maharashtra 401303.';
    var  Kasturba_Hospital_for_Infectious_Diseases_label="Kasturba Hospital for Infectious Diseases,Sane Guruji Marg, Arya Nagar, Chinchpokli, Mumbai, Maharashtra 400034.";
    var Grant_Medical_College_label="Grant Medical College,J J Marg, Nagpada, Mumbai Central, Mumbai, Maharashtra 400008.";
    var Tata_Memorial_Center_label=" Tata Memorial Centre,Sector 22, Utsav Chowk - CISF Rd, Owe Camp, Kharghar, Navi Mumbai, Maharashtra 410210";
    var PD_Hinduja_National_Hospital_label=" PD Hinduja National Hospital,SVS Rd, Mahim West, Shivaji Park, Mumbai, Maharashtra 400016";
    var SRL_DrAvinash_Phadke_Labs_label="SRL Dr Avinash Phadke Labs,Udyam Building, 1st Floor, Ranade Rd, Dadar West, Shivaji Park, Mumbai, Maharashtra 400028";
    var Metropolis_Healthcare_Ltd_label="Metroplis Healthcare LTD,1 Bhagirathi House,Mandvi Gali, Near Varsova Jetty,Andheri West, Mumbai, Maharashtra 400061";
    var IGENETIC_DIAGNOSTICS_label="Igenetic Diagnostics,Krislon House, 1st Floor, Krishanlal Marwah Marg, Ganesh Nagar, Marol, Andheri East, Mumbai, Maharashtra 400072";
    var Rajiv_Gandhi_Medical_College_label="Rajiv Gandhi Medical College, 1, Thane - Belapur Rd, Kalwa West, Budhaji Nagar, Kalwa, Thane, Maharashtra 400605";
    var Dr_Jariwala_Laboratory_label="Dr. Jariwala Laboratory,1st Floor, Rasraj Heights, Rokadia Ln, Near Gokul Hotel, Pai Nagar, Borivali West, Mumbai, Maharashtra 400091";


    


    var labels=[Viva_Institute_of_Pharmacy, Regional_Medical_Research_Centre, Sri_Venkateswara_Institute_of_Medical_Sciences, Andhra_Medical_College, Sidhartha_Medical_College, Rangaraya_Medical_College,Rajendra_Memorial_Research_Institute_of_Medical_Sciences,All_India_Institute_Medical_Sciences1 ,All_India_Institute_Medical_Sciences2,BJ_Medical_College, MP_Shah_Government_Medical_College, BPS_Govt_Medical_College, Pt_BD_Sharma_Post_Graduate_Institute_of_Medical_Sciences, Indira_Gandhi_Medical_College, Dr_Rajendra_Prasad_Govt_Med_College,Sher_e_Kashmir_Institute_of_Medical_Sciences,Government_Medical_College1,Government_Medical_College2,MGM_Medical_College,Bangalore_Medical_College_Research_Institute,National_Institute_of_Virology_Field_Unit_Bangalore,Mysore_Medical_College_Research_Institute,Indira_Gandhi_Medical_College,Kasturba_Hospital_for_Infectious_Diseases,Grant_Medical_College,Tata_Memorial_Center,PD_Hinduja_National_Hospital,SRL_DrAvinash_Phadke_Labs,Metropolis_Healthcare_Ltd,IGENETIC_DIAGNOSTICS,Rajiv_Gandhi_Medical_College,Dr_Jariwala_Laboratory]
    
    var titles=[Viva_Institute_of_Pharmacy_label,Regional_Medical_Research_Centre_label,Sri_Venkateswara_Institute_of_Medical_Sciences,Andhra_Medical_College_label,Sidhartha_Medical_College_label,Rangaraya_Medical_College_label,Rajendra_Memorial_Research_Institute_of_Medical_Sciences_label,All_India_Institute_Medical_Sciences1_label,All_India_Institute_Medical_Sciences2_label,BJ_Medical_College_label,MP_Shah_Government_Medical_College_label,BPS_Govt_Medical_College_label,Pt_BD_Sharma_Post_Graduate_Institute_of_Medical_Sciences_label,Indira_Gandhi_Medical_College_label,Dr_Rajendra_Prasad_Govt_Med_College_label,Sher_e_Kashmir_Institute_of_Medical_Sciences_label,Government_Medical_College1_label,Government_Medical_College2_label,MGM_Medical_College_label,Bangalore_Medical_College_Research_Institute_label,Mysore_Medical_College_Research_Institute_label,Indira_Gandhi_Medical_College_label,Kasturba_Hospital_for_Infectious_Diseases_label,PD_Hinduja_National_Hospital_label,SRL_DrAvinash_Phadke_Labs_label,Metropolis_Healthcare_Ltd_label,IGENETIC_DIAGNOSTICS_label,Rajiv_Gandhi_Medical_College_label,Dr_Jariwala_Laboratory_label]
    
    var map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 10, 
      center: test
    }); 

    for(i=0; i<labels.length;i++){
    var marker = new google.maps.Marker({ 
      position:labels[i], 
      map: map,
      title: titles[i],
      animation:google.maps.Animation.BOUNCE
      
    });
    

    marker.addListener('click', function() {
      map.setCenter(marker.getPosition());
        var markertitle = marker.getTitle();
      $("#staticLocation").val("changes here");
    });
   
  
}
    
};


$(function () {
  $("#datetimepicker1").datetimepicker();
});


$(function(){
  $("#staticLocation").marker();
});

