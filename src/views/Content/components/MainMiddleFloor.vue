<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { featureProducts, hotProducts, specialtyProducts,tncLoadTheNewHome } from '@/api/modular/indexProductsView'
const typeName = defineAsyncComponent(() => import('@/components/middleType/index.vue'))

// 模拟数据，调试页面
const typeProps = ref([
    {
        type: 2,
        name: '',
        index: 6,
        content: [
            [{
                title: 'Home & Packaging',
                src: '//eresource.ecvv.com/PC_Ecvv/images/feature-prduct1.jpg'
            }, [
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/fencing-trellis-gates_cid100002820.html",
                    title: "Fencing, Trellis & Gates >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/airhenggangcompressors_cid1410.html",
                    title: "Air-Compressors >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/packaging-boxes_cid2303.html",
                    title: "Air-Compressors >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/air-purifiers_cid613.html",
                    title: "Air Purifiers >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/packaging-bags_cid2302.html",
                    title: "Packaging Bags >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/sealing-machines_cid100010765.html",
                    title: "Sealing Machines >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/storage-boxes-bins_cid154102.html",
                    title: "Storage Boxes & Bins >",
                },
            ]],
            [{
                title: 'Construction & Minerals',
                src: '//eresource.ecvv.com/PC_Ecvv/images/feature-prduct2.jpg'
            }, [
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/cctv-camera_cid301102.html",
                    title: "CCTV Camera >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/locks_cid3010.html",
                    title: "Locks >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/cctv-dvr_cid301103.html",
                    title: "CCTV DVR >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/alarm_cid3008.html",
                    title: "Alarm >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "https://www.ecvv.com/catalog/basin-faucets_cid100007076.html",
                    title: "Basin Faucets >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/safes_cid3012.html",
                    title: "Safes >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/sauna-rooms_cid100006338.html",
                    title: "Sauna Rooms >",
                },
            ]],
            [{
                title: 'Electrical & Lighting',
                src: '//eresource.ecvv.com/PC_Ecvv/images/feature-prduct3.jpg'
            }, [
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/diesel-generators_cid410402.html",
                    title: "Diesel Generators >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/inverters-converters_cid14191102.html",
                    title: "Inverters & Converters >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/led-stage-lights_cid100010510.html",
                    title: "LED Stage Lights >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/rechargeable-batteries_cid52805.html",
                    title: "Rechargeable Batteries >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/gasoline-generators_cid410403.html",
                    title: "Gasoline Generators >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/switching-power-supply_cid14191104.html",
                    title: "Switching Power Supply >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/electrical-plugs-sockets_cid141905.html",
                    title: "Electrical Plugs & Sockets >",
                },
            ]],
            [{
                title: 'Instrument & Hardware',
                src: '//eresource.ecvv.com/PC_Ecvv/images/feature-prduct4.jpg'
            }, [
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/pumps_cid4104.html",
                    title: "Pumps >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/hand-tool-sets_cid100007505.html",
                    title: "Hand Tool Sets >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/industrial-metal-detectors_cid50505.html",
                    title: "Industrial Metal Detectors >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/telescope-binoculars_cid1911.html",
                    title: "Telescope & Binoculars >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/chainsaws_cid1250302.html",
                    title: "Chainsaws >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/electric-drill_cid141705.html",
                    title: "Electric Drill >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/blower_cid141704.html",
                    title: "Blower >",
                },
            ]],
            [{
                title: 'Automobiles & Motorcycles',
                src: '//eresource.ecvv.com/PC_Ecvv/images/feature-prduct5.jpg'
            }, [
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/bicycle_cid1204.html",
                    title: "Bicycle >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/car-sunshade_cid100001121.html",
                    title: "Car Sunshade >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/car-dvd-player_cid100001018.html",
                    title: "Car DVD Player >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/bicycle-tires_cid122206.html",
                    title: "Bicycle Tires >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/car-washer_cid100003203.html",
                    title: "Car Washer >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "//www.ecvv.com/catalog/car-covers_cid121301.html",
                    title: "Car Covers >",
                },
                {
                    target: "_blank",
                    rel: "nofollow",
                    href: "https://www.ecvv.com/catalog/vacuum-cleaner_cid100003197.html",
                    title: "Vacuum Cleaner >",
                },
            ]],
        ]
    },

])
const tncLoadTheNewHomes = async () => {
    await  tncLoadTheNewHome().then(res => {
        typeProps.value.unshift(res.data.result)
    })
}
const homeProducets = async () => {
    await featureProducts().then(res => {
        typeProps.value.push(res.data.result)
    })
}
const hotProduct = async () => {
    await  hotProducts().then(res => {
        typeProps.value.push(res.data.result)
    })
}
const specialtyProduct = async () => {
    await specialtyProducts().then(res => {
        typeProps.value.push(res.data.result)
    })
}
tncLoadTheNewHomes()
homeProducets()
hotProduct()
specialtyProduct()

</script>
<template>
    <typeName :typeProps="typeProps" />
</template>