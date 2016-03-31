
var linePoints = [
  [126, 309],
  [135, 299],
  [155, 259],
  [162, 238],
  [165, 228],
  [167, 221],
  [170, 212],
  [172, 202],
  [175, 189],
  [179, 175],
  [183, 161],
  [191, 125],
  [193, 118],
  [195, 111],
  [199, 93],
  [202, 85],
  [204, 74],
  [207, 64],
  [209, 57],
  [215, 47],
  [221, 41],
  [229, 40],
  [236, 41],
  [244, 48],
  [248, 56],
  [252, 80],
  [254, 86],
  [269, 163],
  [270, 170],
  [272, 180],
  [274, 186],
  [278, 208],
  [288, 233],
  [307, 251],
  [332, 258],
  [346, 256],
  [373, 244],
  [384, 237],
  [390, 234],
  [457, 199],
  [523, 175],
  [530, 172],
  [553, 168],
  [581, 161],
  [628, 154] 

];
var points = [
  {'position2013':[126, 309], 'position2014':[127, 308], 'position2015':[156, 260],'id':'bioSens','color':'#000000','text':'Bioacoustic Sensing','form':true},
  {'position2014':[133, 300], 'position2015':[142, 289],'id':'digSec','color':'#000000','text':'Digital Security','form':true},
  {'position2014':[139, 295], 'position2015':[137, 296],'id':'virPerAs','color':'#000000','text':'Virtual Personal Assistants','form':true},
  {'position2014':[144, 285],'id':'smaWor','color':'#000000','text':'SmartWorkspace','form':true},
  {'position2014':[161, 246], 'position2015':[187, 146],'id':'conHom','color':'#000000','text':'Connected Home','form':true},
  {'position2013':[135, 299], 'position2015':[133, 302],'id':'smaDu','color':'#000000','text':'Smart Dust','form':true},
  {'position2015':[145, 283],'id':'peoLitTec','color':'#000000','text':'People-Literate Technology','form':true},
  {'position2013':[155, 259], 'position2014':[169, 215], 'position2015':[171, 209],'id':'quanCom','color':'#000000','text':'Quantum Computing','form':true},
  {'position2013':[162, 238],'id':'quanSelf','color':'#000000','text':'Quantified Self','form':true},
  {'position2013':[165, 228], 'position2014':[176, 188],'id':'3dBio','color':'#000000','text':'3D Biporinting','form':true},
  {'position2013':[167, 221], 'position2014':[165, 228], 'position2015':[173, 198],'id':'brainCompInt','color':'#000000','text':'Brain Computer Interface','form':true},
  {'position2013':[170, 212], 'position2014':[168, 222], 'position2015':[175, 192],'id':'humAugm','color':'#000000','text':'Human Augmentation','form':true},
  {'position2015':[176, 186],'id':'volDisp','color':'#000000','text':'Volumetric Displays','form':true},
  {'position2015':[180, 174],'id':'bioSysOrgTrans','color':'#000000','text':'Bioprinting Systems for Organ Transplant','form':true},
  {'position2014':[172, 208],'id':'sofDefAny','color':'#000000','text':'Software-Defined Anything','form':true},
  {'position2013':[172, 202], 'position2014':[173, 202],'id':'volHoloDisp','color':'#000000','text':'Volumetric and Holographic Displays','form':true},
  {'position2014':[180, 175], 'position2015':[183, 162],'id':'smaRob','color':'#000000','text':'Smart Robots','form':true},
  {'position2013':[175, 189],'id':'elect','color':'#000000','text':'Electrovibration','form':true},
  {'position2013':[179, 175], 'position2014':[184, 161], 'position2015':[185, 154],'id':'afectComp','color':'#000000','text':'Affective Computing','form':true},
  {'position2015':[189, 139],'id':'ioTPla','color':'#000000','text':'IoT Platform','form':true},
  {'position2013':[183, 161], 'position2014':[198, 105],'id':'presAna','color':'#000000','text':'Prescriptive Analytics','form':true},
  {'position2013':[191, 125], 'position2014':[207, 66], 'position2015':[226, 44],'id':'autoVeh','color':'#000000','text':'Autonomus Vehicles','form':true},
  {'position2013':[193, 118], 'position2014':[193, 122], 'position2015':[191, 130],'id':'bioc','color':'#000000','text':'Biochips','form':true},
  {'position2015':[192, 123],'id':'citDatSci','color':'#000000','text':'Citizen Data Science','form':true},
  {'position2013':[195, 111], 'position2014':[194, 116], 'position2015':[194, 116],'id':'neur','color':'#000000','text':'Neurobusiness','form':true},
  {'position2015':[198, 98],'id':'sofDefSec','color':'#000000','text':'Software-Defined Security','form':true},
  {'position2015':[201, 89],'id':'digDext','color':'#000000','text':'Digital Dexterity','form':true},
  {'position2015':[203, 83],'id':'micrDatCent','color':'#000000','text':'Micro Data Centers','form':true},
  {'position2014':[203, 83],'id':'datSci','color':'#000000','text':'Data Science','form':true},
  {'position2014':[205, 77], 'position2015':[208, 64],'id':'smaAdv','color':'#000000','text':'Smart Advisors','form':true},
  {'position2015':[219, 45],'id':'advAnaSelSerDel','color':'#000000','text':'Advanced Analytics With Self-Service Delivery','form':true},
  {'position2013':[199, 93], 'position2014':[470, 193],'id':'3dScan','color':'#000000','text':'3D Scanners','form':true},
  {'position2013':[202, 85],'id':'mobRob','color':'#000000','text':'Mobile Robots','form':true},
  {'position2013':[204, 74], 'position2014':[210, 58], 'position2015':[240, 47],'id':'speSpeTrans','color':'#000000','text':'Speech to Speech Tranlation','form':true},
  {'position2013':[205, 64], 'position2014':[226, 42], 'position2014':[233, 44],'id':'ioT','color':'#000000','text':'Internet of things','form':true},
  {'position2015':[244, 54],'id':'macLea','color':'#000000','text':'Machine Learning','form':true},
  {'position2015':[247, 60],'id':'wear','color':'#000000','text':'Wearables','form':true},
  {'position2013':[209, 57], 'position2014':[233, 42], 'position2015':[256, 102],'id':'natLengQuesAns','color':'#000000','text':'Natural-Language Question Answering','form':true},
  {'position2013':[215, 47], 'position2014':[255, 97],'id':'bigD','color':'#000000','text':'Big Data','form':true},
  {'position2013':[221, 41], 'position2014':[247, 56], 'position2015':[254, 95],'id':'cons3dPrint','color':'#000000','text':'Consumer 3D Printing','form':true},
  {'position2014':[221, 41], 'position2015':[250, 72],'id':'cript','color':'#000000','text':'Cryptocurrencies','form':true},
  {'position2013':[229, 40], 'position2014':[270, 170],'id':'gamif','color':'#000000','text':'Gamification','form':true},
  {'position2013':[236, 41], 'position2014':[241, 47],'id':'werUsInter','color':'#000000','text':'Wearable User Interface','form':true},
  {'position2013':[244, 48], 'position2014':[251, 72],'id':'compEveProc','color':'#000000','text':'Complex-Event Processing','form':true},
  {'position2013':[248, 56], 'position2014':[260, 121],'id':'contAna','color':'#000000','text':'Content Analytics','form':true},
  {'position2013':[252, 80], 'position2014':[257, 109],'id':'inMemDatManSys','color':'#000000','text':'In-Memomry Database Management Systems','form':true},
  {'position2014':[267, 157], 'position2015':[269, 171],'id':'hibCloComp','color':'#000000','text':'Hybrid Cloud Computing','form':true},
  {'position2013':[254, 86],'id':'virAs','color':'#000000','text':'Virtual Assistants','form':true},
  {'position2013':[269, 163], 'position2014':[272, 182], 'position2015':[281, 222],'id':'augReal','color':'#000000','text':'Augmented reality','form':true},
  {'position2015':[319, 257],'id':'cryExch','color':'#000000','text':'Cryptocurrencies Exchange','form':true},
  {'position2015':[369, 247],'id':'autFieVeh','color':'#000000','text':'Autonomus Field Vehicles','form':true},
  {'position2013':[270, 170], 'position2014':[282, 220],'id':'macMacComSer','color':'#000000','text':'Machine-to-Machine Communitcation Services','form':true},
  {'position2013':[272, 180], 'position2014':[288, 233],'id':'mobHealMon','color':'#000000','text':'Mobile Health Monitoring','form':true},
  {'position2013':[274, 186], 'position2014':[309, 253],'id':'nfc','color':'#000000','text':'NFC','form':true},
  {'position2013':[278, 208],'id':'mesNetSen','color':'#000000','text':'Mesh Network Sensor','form':true},
  {'position2013':[288, 233], 'position2014':[303, 250],'id':'cloComp','color':'#000000','text':'Cloud Computing','form':true},
  {'position2013':[332, 258], 'position2014':[360, 251], 'position2015':[375, 242],'id':'virReal','color':'#000000','text':'Virtual reality','form':true},
  {'position2013':[346, 256], 'position2014':[387, 234],'id':'inMemAna','color':'#000000','text':'In-Memomry Analytics','form':true},
  {'position2013':[373, 244], 'position2014':[381, 238], 'position2015':[399, 229],'id':'gesCon','color':'#000000','text':'Gesture Controls','form':true},
  {'position2013':[384, 237], 'position2014':[399, 227],'id':'actStre','color':'#000000','text':'Activity Streams','form':true},
  {'position2013':[390, 234], 'position2014':[426, 214], 'position2015':[440, 207],'id':'ent3dPrint','color':'#000000','text':'Enterprise 3D Printig','form':true},
  {'position2013':[457, 199],'id':'bioAutMet','color':'#000000','text':'Biometric Authentiation Methods','form':true},
  {'position2013':[523, 175], 'position2014':[537, 171],'id':'consTel','color':'#000000','text':'Consumer telematics','form':true},
  {'position2013':[530, 172],'id':'locInt','color':'#000000','text':'Location Intelligence','form':true},
  {'position2013':[553, 168], 'position2014':[564, 165],'id':'speRecog','color':'#000000','text':'Speech Recognition','form':true},
  {'position2013':[581, 161],'id':'predAna','color':'#000000','text':'Predictive Analytics','form':true}
];
  
var svg = d3.select("#graph").append("svg")
    .attr("width", 960)
    .attr("height", 500);

var path = svg.append("path")
    .data([linePoints])
    .attr("d", d3.svg.line()
    //.tension(0.9) // Catmull–Rom
    .interpolate("basis"))
    .style('fill', 'none')
    .style('stroke', '#f50');

var circle = svg.selectAll(".point")
    .data(points)
  .enter().append("circle")
    .attr('id', function(d){return d.id})
    .attr('class', 'Circle')
    .attr("r", function(d){
              if(!d.position2015){return 0;}
              else {return 4;}  
            })
    .attr("transform", function(d) { return "translate(" + d.position2015 + ")";})
    .style('fill', function(d){return d.color})
    .style('stroke', 'none')
    .style('stroke-width', '5px');

svg.selectAll(".Circle")
    .on("mouseover", function() {
      console.log(this);
        d3.select(this)
          .transition()
          .style('fill','#333333')
          .attr('r', 20);
     })
    .on("mouseout", function() {
        d3.select(this)
          .transition()
          .style("fill",'#000000')
          .attr('r', 5);
     })    

/*var circle = svg.append("circle")
    .data(points)
    .attr("r", 13)
    .attr("transform", function(d) { return "translate(" + d + ")"; });*/

/*var text = svg.selectAll("text")
           .data(linePoints)
           .enter()
           .append("text")
           .attr("transform", function(d) { return "translate(" + d + ")"; })
           .text( function (d) { return "( " + d + " )"; })
           .attr("font-family", "sans-serif")
           .attr("font-size", "20px")
           .attr("fill", "red");    */  

//transition();

function transition() {
  circle.transition()
      .duration(10000)
      .attrTween("transform", translateAlong(path.node()))
      .each("end", transition);
}

function translateAlong(path) {
  var l = path.getTotalLength();
  return function(d, i, a) {
    return function(t) {
      var p = path.getPointAtLength(t * l);
      return "translate(" + p.x + "," + p.y + ")";
    };
  };
}
