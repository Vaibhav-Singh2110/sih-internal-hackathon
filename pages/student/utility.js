let myChart = document.getElementById('myChart').getContext('2d');
let barChart = new Chart(myChart,{
    type: 'bar',
    data:{
        labels:['MATHS','PHYSICS','CHEMISTRY','ENGLISH','OPTIONAL','CO-CURRICULAR'],
        datasets:[{
            label:'Attendance Per Subject',
            data:[
            80,60,70,85,65,76
        ],
        backgroundColor:'#151D3B',
        }]
    },


})