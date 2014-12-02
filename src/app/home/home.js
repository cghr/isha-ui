(function (app) {

    app.config(function ($stateProvider) {

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        });
    });

    app.controller('homeCtrl', function ($scope) {

        $scope.dashboard = [
            {
                category: 'Data Collection',
                items: [{url: 'enum', title: 'Enumeration', icon: 'business-charts/512/account_group-128.png'},
                    {
                        url: 'hhq',
                        title: 'HHQ',
                        icon: 'modern-office/512/clipboard_clip_board_check_mark_flat_icon-128.png'
                    },
                    {
                        title: 'GPS Locations',
                        icon: 'color-svg-vector-icons-part-2/512/places_network_my_google_plates-128.png'
                    }]
            },

            {
                category: 'Health Checkup Camp',
                items: [{title: 'Health Camp', icon: 'medical-services-2/256/Hospitalization-128.png'},
                    {
                        title: 'Logistics',
                        icon: 'commerce-and-retail/512/delivery_shipping_truck_business_van_transport_car_service_moving_courier_logistics_freight_logistic_package_shipment_cargo_transportation_commerce_flat_design_icon-128.png'
                    }]
            },
            {
                category: 'Administration',
                items: [{title: 'Users', icon: 'CrystalClear/128x128/apps/kdmconfig.png'}, {
                    title: 'Teams',
                    icon: 'management-business/256/Meeting-128.png'
                }, {title: 'Areas', icon: 'peppyicons/512/659976-map-128.png'}]
            },
            {
                category: 'Biospecimen Tracking',
                items: [{title: 'Blood Samples', icon: 'medical-8/512/analysis-128.png'},
                    {title: 'Nail Samples', icon: 'REALVISTA/medical/png/128/allergy_vials.png'}]
            },
            {
                category: 'Locations',
                items: [{title: 'Mumbai', icon: 'iconsimple-health/512/hospital-128.png'}, {
                    title: 'Barshi',
                    icon: 'medical_icon_set/128/hospital.png'
                }]
            },
            {category: 'Data Visualization', items: [{title: 'Reports', icon: 'woothemes/PNG/document_graph.png'}]},
            {
                category: 'Data Analysis',
                items: [{title: 'Data Export', icon: 'ikooni-outline-seo-web/128/seo-51-128.png'}]
            }

        ];
    });

})(angular.module('home', ['ui.router']));