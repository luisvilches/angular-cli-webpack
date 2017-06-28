import './app.scss'
export default angular.module('component',[])

.component('component',{
    templateUrl: 'components/app/app.html',
    controller: function(){
        this.name = 'AngularJS-Cli by Luis Vilches.';
    }
})
.name;