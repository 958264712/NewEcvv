<script setup lang="ts">
import { ref } from 'vue'
const arrDd = ref([
  {
    name:'Sourcing Product on ECVV',
    list:[
      {
        href:'//safebuy.ecvv.com',
        title:'Sourcing Product'
      },
      {
        href:'//www.ecvv.com/product/',
        title:'Browse by Catagories'
      },
      {
        href:'//www.ecvv.com/buyers/',
        title:'Private Sourcing Events'
      },
    ]
  },
  {
    name:'Buyer Service',
    list:[
      {
        href:'//www.ecvv.com/aboutus/tradealert.html',
        title:'Product Alert'
      },
      {
        href:'//www.ecvv.com/IndustryZoneMoon/201107/complaintAccess.html',
        title:'Dispute and Complaint Assistance'
      },
      {
        href:'//myecvv.ecvv.com/AccountEcvv/pcLogin.html',
        title:'Sign in/Sign up'
      },
    ]
  },
  {
    name:'Supplier Services',
    list:[
      {
        href:'//www.ecvv.com/myecvv/',
        title:'Product Alert'
      }
    ]
  },
  {
    name:'About Us',
    list:[
      {
        href:'//www.ecvv.com/aboutus/Company_Overview.html',
        title:'About ECVV'
      },
      {
        href:'//www.ecvv.com/aboutus/Contact_Us.html',
        title:'Contact us'
      },
      {
        href:'//www.ecvv.com/aboutus/Link_to_Us.html',
        title:'Link to us'
      },
    ]
  },
])
</script>

<template>
  <main>
    <div class="Endtable auto-w">
        <dl v-for="item in arrDd">
            <dt>{{ item.name }}</dt>
            <dd v-for="ite in item.list">
                <a :href="ite.href" rel="nofollow">{{ ite.title }}</a></dd>
        </dl>
        <div class="clear">
        </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.Endtable {
    padding: 24px 0 18px 0;
    border-bottom: 1px solid #ddd;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
}
.Endtable dt {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
}
.Endtable dd a {
    margin-top: 2px;
    color: #777;
    display: inline-block;
}
.Endtable dd a:hover {
    color: #ee6600;
    text-decoration: underline;
}
</style>