/**
 * Created by 孟磊 on 2016/9/14.
 */
$(function(){
    function rem(size){
        var clientW=document.documentElement.clientWidth;
        var bili=clientW/size;
        var fontSize=bili*100;
        document.getElementsByTagName("html")[0].style.fontSize=fontSize+"px"
    }
    rem(750)
})
angular.module("myapp",["ngRoute","ngAnimate"])
    .config(["$routeProvider",function($route){
        $route.when("/",{
            templateUrl:"tpl/index.html"
        }).when("/list/0",{
            templateUrl:"tpl/list.html"
        }).when("/list/1",{
            templateUrl:"tpl/list1.html"
        }).when("/list/2",{
            templateUrl:"tpl/list2.html"
        }).when("/list/3",{
            templateUrl:"tpl/list3.html"
        })
    }])